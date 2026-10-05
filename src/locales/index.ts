import { en, TranslationStructure } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";

export type Language = "en" | "hi" | "mr";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  shortLabel: string;
}

export const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", shortLabel: "EN" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", shortLabel: "HI" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", shortLabel: "MR" },
];

export const translations: Record<Language, TranslationStructure> = {
  en,
  hi,
  mr,
};

export { en, hi, mr };
export type { TranslationStructure };
