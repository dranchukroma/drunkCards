export type AppThemeType = {
  base: string,
  gradient: string,
  uiBase: string,
  uiGradient: string,
  uiSelected: string,
  toggleBackground: string,
  fontColor: string,
  logoColor: string,
  boxShadow: string,
  textShadow: string,
}

const theme = {
  fontFamily: {
    logo: "Istok Web",
    heading: "Istok Web",
    paragraf: "Istok Web",
  },
  fontSize: {
    logo: "30px",
    bigHeading: "50px",
    mediumHeading: "30px",
    smallHeading: "25px",
    bigParagraf: "24px",
    mediumParagraf: "20px",
    smallParagraf: "16px",
    bigButton: "30px",
    mediumButton: "30px",
    smallButton: "30px",
  },
  fontWeight: {
    bold: "700",
    regular: "400",
    light: "300",
  },
  appTheme: {
    bg1: {
      base: "#A161B9",
      gradient:
        "radial-gradient(circle,rgba(197, 176, 205, 1) 0%, rgba(161, 97, 185, 1) 100%)",
      uiBase: '#F3E2D4',
      uiGradient: 'linear-gradient(-90deg,rgba(243, 226, 212, 1) 0%, rgba(244, 233, 225, 1) 100%)',
      uiSelected: '#F3E2D4',
      toggleBackground: '#4242429E',
      fontColor: '#000',
      logoColor: "#000",
      boxShadow: '-4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      textShadow: '-4px 4px 4px rgba(0, 0, 0, 0.25)'
    },
  },
  breakpoints: {
    minWidth: "330px",
    maxWidth: "500px",
    padding: "15px",
  },
};

export default theme;
