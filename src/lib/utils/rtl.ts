import { rtlLocales } from "@/lib/i18n/config";

/**
 * Returns true if locale should render RTL
 */
export function isRTL(locale?: string) {
  if (!locale) return false;
  return rtlLocales.includes(locale);
}

/**
 * Returns "rtl" or "ltr"
 */
export function getDir(locale?: string): "rtl" | "ltr" {
  return isRTL(locale) ? "rtl" : "ltr";
}

/**
 * Utility for conditional Tailwind classes
 * Example:
 *   cn("text-left", rtl("text-right", locale))
 */
export function rtl(className: string, locale?: string) {
  return isRTL(locale) ? className : "";
}
