import { createTheme } from "@mui/material/styles";

const muiCustomTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#599B96",
      dark: "#3C5268",
      light: "#B1D2D0",
    },
    custom: {
      dark: "#3C5268",
      light: "#F4F6F5",
    },
    secondary: {
      light: "#E8ECEB",
      main: "#8CBDB9",
      contrastTextColor: "#e09e50",
    },
    success: {
      main: "#00A36D",
    },
    error: {
      main: "#CC0036",
      light: "#FF99B4",
    },
    warning: {
      main: "#FFAA00",
    },
    info: {
      main: "#3bb3bb",
    },
    text: {
      primary: "#565a5a",
      secondary: "#689491",
    },
  },
  typography: {
    fontFamily: ['"Afacad"', "sans-serif"].join(","),
    fontSize: 1.6 + "rem",
    h1: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 4.8 + "rem",
    },
    h2: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 4 + "rem",
    },
    h3: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 3.3 + "rem",
    },
    h4: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 2.8 + "rem",
    },
    h5: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 2.3 + "rem",
    },
    h6: {
      fontFamily: ["'Afacad'", "sans-serif"].join(","),
      fontWeight: "600",
      fontSize: 1.9 + "rem",
    },
    subtitle1: {
      fontSize: 1.8 + "rem",
      fontWeight: "500",
      lineHeight: 1.3
    },
    subtitle2: {
      fontSize: 1.6 + "rem",
      fontWeight: "500",
    },
    body1: {
      fontSize: 1.6 + "rem",
    },
    body2: {
      fontSize: 1.4 + "rem",
    },

    button: {
      textTransform: "none",
    },
    caption: {
      fontSize: 1.2 + "rem"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 1.4 + "rem",
        }
      },
    },
  },
});

export default muiCustomTheme;