"use server";

import { deliverContactEnquiry } from "@/lib/contact-delivery";
import {
  engagementTypes,
  projectTypes,
  type ContactEnquiry,
  type ContactField,
  type ContactFormState,
  type ContactFormValues,
  type EngagementType,
  type ProjectType,
} from "@/types/contact";

const limits = {
  name: 100,
  company: 160,
  email: 254,
  phone: 40,
  message: 3000,
} as const;

const minimumSubmissionTime = 1_200;
const maximumFormAge = 24 * 60 * 60 * 1000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function readValues(formData: FormData): ContactFormValues {
  return {
    name: readText(formData, "name"),
    company: readText(formData, "company"),
    email: readText(formData, "email"),
    phone: readText(formData, "phone"),
    projectType: readText(formData, "projectType"),
    engagementType: readText(formData, "engagementType"),
    message: readText(formData, "message"),
  };
}

function validateValues(values: ContactFormValues) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (!values.projectType) errors.projectType = "Choose the outcome you are exploring.";
  else if (!projectTypes.includes(values.projectType as ProjectType)) errors.projectType = "Choose a valid project type.";

  if (values.engagementType && !engagementTypes.includes(values.engagementType as EngagementType)) {
    errors.engagementType = "Choose a valid engagement context.";
  }

  if (!values.message) errors.message = "Tell us briefly about the project or challenge.";
  else if (values.message.length < 10) errors.message = "Please add a little more detail about the challenge.";
  else if (values.message.length > limits.message) errors.message = `Keep the description within ${limits.message.toLocaleString()} characters.`;

  if (!values.name) errors.name = "Enter your name.";
  else if (values.name.length > limits.name) errors.name = `Keep your name within ${limits.name} characters.`;

  if (!values.company) errors.company = "Enter your company or organization.";
  else if (values.company.length > limits.company) errors.company = `Keep the organization name within ${limits.company} characters.`;

  if (!values.email) errors.email = "Enter your work email.";
  else if (values.email.length > limits.email || !emailPattern.test(values.email)) errors.email = "Enter a valid work email address.";

  if (values.phone.length > limits.phone) errors.phone = `Keep the phone number within ${limits.phone} characters.`;

  return errors;
}

function formError(
  previousState: ContactFormState,
  values: ContactFormValues,
  message: string,
): ContactFormState {
  return {
    status: "delivery-error",
    attempt: previousState.attempt + 1,
    message,
    values,
  };
}

export async function submitContactEnquiry(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = readValues(formData);
  const honeypot = readText(formData, "website");
  const startedAt = Number(readText(formData, "startedAt"));
  const elapsed = Date.now() - startedAt;

  if (honeypot) {
    return formError(previousState, values, "We could not process this enquiry. Please refresh and try again.");
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0 || elapsed < minimumSubmissionTime || elapsed > maximumFormAge) {
    return formError(previousState, values, "This form session is invalid or has expired. Please refresh the page and try again.");
  }

  const errors = validateValues(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "validation-error",
      attempt: previousState.attempt + 1,
      message: "Review the highlighted fields and try again.",
      errors,
      values,
    };
  }

  const enquiry: ContactEnquiry = {
    name: values.name,
    company: values.company,
    email: values.email,
    projectType: values.projectType as ProjectType,
    message: values.message,
    ...(values.phone ? { phone: values.phone } : {}),
    ...(values.engagementType
      ? { engagementType: values.engagementType as EngagementType }
      : {}),
  };

  try {
    const delivery = await deliverContactEnquiry(enquiry);

    if (delivery.status === "delivered") {
      return {
        status: "success",
        attempt: previousState.attempt + 1,
        message: "Your enquiry has been received.",
        values,
      };
    }

    if (delivery.status === "development") {
      return {
        status: "development",
        attempt: previousState.attempt + 1,
        message: "Development validation completed. No enquiry was delivered because a contact provider is not configured.",
        values,
      };
    }

    return formError(
      previousState,
      values,
      "Contact delivery is not configured yet. Your enquiry has not been sent.",
    );
  } catch (error) {
    console.error("[DDMSS contact] Enquiry delivery failed.", error);
    return formError(
      previousState,
      values,
      "We could not send your enquiry. Your information has not been submitted; please try again later.",
    );
  }
}
