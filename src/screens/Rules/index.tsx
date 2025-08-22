import { useNativeArrow } from "@providers/NativeArrowProvider";
import { Li, MainTitle, Ol, Paragraf, Title, Ul, Wrapper } from "./Rules.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@providers/LanguageProvider";
import { useSettings } from "@providers/SettingProvider";

export function Rules() {
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    const { translations } = useLanguage();
    const rules = translations.rules;
    const { style } = useSettings();

    useEffect(() => show(() => navigate(-1)), [navigate]);
    return (
        <Wrapper $color={style.appTheme.fontColor}>
            <MainTitle>{rules.mainTitle}</MainTitle>
            <Title>
                {rules.goal.title}
            </Title>
            {rules.goal.paragraphs.map((p, i) => <Paragraf key={i}>{p}</Paragraf>)}

            <Title>
                {rules.howToPlay.title}
            </Title>
            <Ol>
                {rules.howToPlay.paragraphs.map((p, i) => <Li key={i}>{p}</Li>)}
            </Ol>

            <Title>
                {rules.gameModes.title}
            </Title>
            <Ul>
                {rules.gameModes.paragraphs.map((p, i) => <Li key={i}>{p}</Li>)}
            </Ul>

            <Title>
                {rules.gameDuration.title}
            </Title>
            <Ul>
                {rules.gameDuration.paragraphs.map((p, i) => <Li key={i}>{p}</Li>)}
            </Ul>
            <br/>
            {rules.footer.lines.map((p, i) => <Paragraf key={i}><b>{p}</b></Paragraf>)}
        </Wrapper>
    )
}

export default Rules;
