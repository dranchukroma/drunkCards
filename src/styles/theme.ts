export type AppThemeType = {
  base: string;
  gradient: string;
  uiBase: string;
  uiGradient: string;
  uiSelected: string;
  toggleBackground: string;
  fontColor: string;
  logoColor: string;
  boxShadow: string;
  textShadow: string;
};

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
      uiBase: "#F3E2D4",
      uiGradient:
        "linear-gradient(-90deg,rgba(243, 226, 212, 1) 0%, rgba(244, 233, 225, 1) 100%)",
      uiSelected: "#F3E2D4",
      toggleBackground: "#4242429E",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      textShadow: "-4px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    bg2: {
      base: "#F67280",
      gradient:
        "radial-gradient(circle, rgba(255,197,208,1) 0%, rgba(246,114,128,1) 100%)",
      uiBase: "#FFE3EC",
      uiGradient: "linear-gradient(-90deg, #FFE3EC 0%, #FFDDE6 100%)",
      uiSelected: "#FFE3EC",
      toggleBackground: "#00000022",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg3: {
      base: "#355C7D",
      gradient:
        "radial-gradient(circle, rgba(108,137,168,1) 0%, rgba(53,92,125,1) 100%)",
      uiBase: "#DDE6F2",
      uiGradient: "linear-gradient(-90deg, #DDE6F2 0%, #CADBEA 100%)",
      uiSelected: "#DDE6F2",
      toggleBackground: "#22283199",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg4: {
      base: "#FFB347",
      gradient: "radial-gradient(circle, #FFE0B2 0%, #FFB347 100%)",
      uiBase: "#FFF2DF",
      uiGradient: "linear-gradient(-90deg, #FFF2DF 0%, #FFE6C4 100%)",
      uiSelected: "#FFF2DF",
      toggleBackground: "#6D4C4199",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg5: {
      base: "#00B8A9",
      gradient: "radial-gradient(circle, #A6E3DF 0%, #00B8A9 100%)",
      uiBase: "#DFF7F4",
      uiGradient: "linear-gradient(-90deg, #DFF7F4 0%, #C6F2EB 100%)",
      uiSelected: "#DFF7F4",
      toggleBackground: "#004D4099",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg6: {
      base: "#6A0572",
      gradient: "radial-gradient(circle, #C084CC 0%, #6A0572 100%)",
      uiBase: "#F1E3F3",
      uiGradient: "linear-gradient(-90deg, #F1E3F3 0%, #E8D4EA 100%)",
      uiSelected: "#F1E3F3",
      toggleBackground: "#2E003E88",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg7: {
      base: "#FFA17F",
      gradient: "radial-gradient(circle, #FFD5C4 0%, #FFA17F 100%)",
      uiBase: "#FFEDE6",
      uiGradient: "linear-gradient(-90deg, #FFEDE6 0%, #FFD7C3 100%)",
      uiSelected: "#FFEDE6",
      toggleBackground: "#5E302399",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg8: {
      base: "#2D4059",
      gradient: "radial-gradient(circle, #6C7A89 0%, #2D4059 100%)",
      uiBase: "#D9DEE3",
      uiGradient: "linear-gradient(-90deg, #D9DEE3 0%, #BFC9D1 100%)",
      uiSelected: "#8593a8",
      toggleBackground: "#0F1C2EAA",
      fontColor: "#fff",
      logoColor: "#fff",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
    bg9: {
      base: "#11998E",
      gradient: "radial-gradient(circle, #A7F1EA 0%, #11998E 100%)",
      uiBase: "#DBF7F2",
      uiGradient: "linear-gradient(-90deg, #DBF7F2 0%, #BFF0E9 100%)",
      uiSelected: "#DBF7F2",
      toggleBackground: "#084A4399",
      fontColor: "#000",
      logoColor: "#000",
      boxShadow: "-4px 4px 4px 0px rgba(0,0,0,0.25)",
      textShadow: "-4px 4px 4px rgba(0,0,0,0.25)",
    },
  },
  breakpoints: {
    minWidth: "330px",
    maxWidth: "500px",
    padding: "15px",
  },
};

export default theme;
