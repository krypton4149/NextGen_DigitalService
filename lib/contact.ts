/** Official contact email for Shikohabad Creative Co. */
export const CONTACT_EMAIL = "shikohabadcreativeco@gmail.com";

export const CONTACT_PHONE_TEL = "+919286556923";
export const CONTACT_PHONE_DISPLAY = "+91 9286556923";

export const CONTACT_WHATSAPP_URL = "https://wa.me/919286556923";

export function buildContactMailto(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
