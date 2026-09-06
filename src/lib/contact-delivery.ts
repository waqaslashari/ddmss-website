import "server-only";

import type { ContactEnquiry } from "@/types/contact";

export type ContactDeliveryResult =
  | { status: "delivered"; reference?: string }
  | { status: "development" }
  | { status: "unconfigured" };

/**
 * The delivery boundary for contact enquiries. An approved email, CRM or
 * workflow provider can replace this implementation without changing the form.
 */
export async function deliverContactEnquiry(
  enquiry: ContactEnquiry,
): Promise<ContactDeliveryResult> {
  if (process.env.NODE_ENV === "development") {
    console.info(
      "[DDMSS contact] Development enquiry validated; no delivery provider is configured.",
      enquiry,
    );
    return { status: "development" };
  }

  return { status: "unconfigured" };
}
