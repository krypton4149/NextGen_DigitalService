/** Official contact email for Shikohabad Creative Co. */
export const CONTACT_EMAIL = "starkarc22@gmail.com";

export const CONTACT_PHONE_TEL = "+918218058950";
export const CONTACT_PHONE_DISPLAY = "+91 8218058950";

export const CONTACT_WHATSAPP_URL = "https://wa.me/918218058950";

export function buildContactMailto(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
