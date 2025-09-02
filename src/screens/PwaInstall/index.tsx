import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
    DownloadWrapper,
    InfoContainer,
    StepSection,
    StepNumber,
    IconWrapper,
    StepLabel,
    StepContainer,
    SkipButton,
    StyledImageLogo,
} from "./PwaInstall.styled";

import { useNativeArrow } from "@providers/NativeArrowProvider";
import { stepsInstruction, type InstructionStep } from "./instructions";
import { useSettings } from "@providers/SettingProvider";
import { useLanguage } from "@providers/LanguageProvider";

type PwaInstallProps = {};

export function PwaInstall({ }: PwaInstallProps) {
    const navigate = useNavigate();
    const { style } = useSettings();
    const { hide } = useNativeArrow();
    const { translations } = useLanguage();

    useEffect(() => hide(), [hide]);

    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const OS = params.get("mobileOS") || "";
    const browser = params.get("browser") || "";

    const getInstruction = (OS: string, browser: string): InstructionStep[] => {
        if (OS === "iOS") {
            return browser === "Safari"
                ? stepsInstruction(translations.pwa).iOS.Safari
                : stepsInstruction(translations.pwa).iOS.NotSafari;
        }

        if (OS === "Android") {
            return ["Chrome", "Edge"].includes(browser)
                ? stepsInstruction(translations.pwa).Android.Supported
                : stepsInstruction(translations.pwa).Android.notSupported;
        }

        return stepsInstruction(translations.pwa).Android.Supported;
    };

    const instructionStep = getInstruction(OS, browser);

    return (
        <DownloadWrapper $color={style.appTheme.fontColor}>
            <StyledImageLogo fillColor={style.appTheme.logoColor} />
            <InfoContainer><p>{translations.pwa.label}</p></InfoContainer>
            <StepContainer>
                {instructionStep.map((step, index) => (
                    <StepSection
                        $appTheme={style.appTheme}
                        key={index}
                        onClick={step.onClick ?? undefined}
                    >
                        <StepNumber $color={style.appTheme.fontColor}>
                            <p>{index + 1}</p>
                        </StepNumber>
                        <StepLabel $color={style.appTheme.fontColor}>{step.title}</StepLabel>
                        <IconWrapper>{step.icon}</IconWrapper>
                    </StepSection>
                ))}
            </StepContainer>
            {/* <SkipButton onClick={() => {
                localStorage.setItem('skipPWA', 'true');
                navigate('/');
            }}>
                {translations.pwa.skip}
            </SkipButton> */}
        </DownloadWrapper>
    );
}

export default PwaInstall;
