import { LogoContainer, TopLogo, /*MiddleLogo, BottomLogo*/ } from "./TextLogo.styled"

type TextLogoProps = {
    fillColor?: string,
}

function TextLogo({ fillColor = '#EEE'}: TextLogoProps) {
    return (
        <LogoContainer fillColor={fillColor}>
            <TopLogo>Drunk Cards</TopLogo>
            {/* <MiddleLogo>Drunk Cards</MiddleLogo>
            <BottomLogo>Drunk Cards</BottomLogo> */}
        </LogoContainer>
    )
}

export default TextLogo