export const projectTypes = [
  "Digital Transformation",
  "AI & Data Solution",
  "Software / Application Development",
  "Smart Parking",
  "EV Charging",
  "Digital Twin",
  "Smart Infrastructure / IoT",
  "Other",
] as const;

export const engagementTypes = [
  "Strategy / Advisory",
  "New System",
  "Existing System Improvement",
  "Integration",
  "Pilot / Proof of Concept",
  "Not Sure Yet",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type EngagementType = (typeof engagementTypes)[number];

export type ContactEnquiry = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectType: ProjectType;
  engagementType?: EngagementType;
  message: string;
};

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  engagementType: string;
  message: string;
};

export type ContactField = keyof ContactFormValues;

export type ContactFormState = {
  status:
    | "idle"
    | "validation-error"
    | "development"
    | "success"
    | "delivery-error";
  attempt: number;
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values: ContactFormValues;
};

export const emptyContactFormValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  engagementType: "",
  message: "",
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  attempt: 0,
  values: emptyContactFormValues,
};
