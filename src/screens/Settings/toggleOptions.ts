import { type LanguageCode } from "i18n/types"

export const options = {
    cardLimit: [
        { display: '36', value: 36 },
        { display: '52', value: 52, },
        { display: 'ꝏ', value: -1, },
    ],
    timeLimit: [
        { display: '30', value: 30 },
        { display: '60', value: 60, },
        { display: '90', value: 90, },
        { display: 'ꝏ', value: -1, },
    ],
    language: [
        { display: '🇺🇸', value: "en" },
        { display: '🇵🇱', value: "pl" },
        { display: '🇺🇦', value: "uk" },
      ] satisfies Array<{ display: string, value: LanguageCode }>,
      
      booleanOptions: [
        { display: 'Yes', value: true },
        { display: 'No', value: false },
      ] satisfies Array<{ display: string, value: boolean }>,
}