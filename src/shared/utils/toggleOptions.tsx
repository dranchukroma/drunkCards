import type { LanguageCode, TranslationSchema } from "i18n/types"
import FlagPl from 'i18n/langIcons/FlagPl'
import FlagEn from 'i18n/langIcons/FlagEn'
import FlagUk from 'i18n/langIcons/FlagUk'
import type { ReactNode } from "react"

export const getToggletOptions = (t: TranslationSchema) => {
    return {
        cardLimit: [
            { display: '36', value: 36 },
            { display: '52', value: 52, },
        ],
        timeLimit: [
            { display: '30', value: 30 },
            { display: '60', value: 60, },
            { display: '90', value: 90, },
        ],
        language: [
            { display: <FlagEn />, value: "en" },
            { display: <FlagPl />, value: "pl" },
            { display: <FlagUk />, value: "uk" },
        ] satisfies Array<{ display: ReactNode, value: LanguageCode }>,

        booleanOptions: [
            { display: t.settings.yesOption, value: true },
            { display: t.settings.noOption, value: false },
        ] satisfies Array<{ display: string, value: boolean }>,
    }
}