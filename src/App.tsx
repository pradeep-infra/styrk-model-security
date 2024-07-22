import React, { useContext, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { MuiThemeProvider,StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import muiCustomTheme from "./muiCustomTheme";
import { GlobalStyles } from "./global";
import MainLayout from "./Layout/mainLayout";
import { CommonContext, CommonContextType } from "./core/context";
function App() {
  const { setThemeType, themeType } = useContext(
    CommonContext
  ) as CommonContextType;

  useEffect(() => {
    const theme: any = localStorage.getItem("themeType");
    setThemeType(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledThemeProvider theme={themeType === "light" ? lightTheme : darkTheme}>
      <div className="wrapper">
        <GlobalStyles />
        <ThemeProvider theme={muiCustomTheme}>
          <CssBaseline />
          <MainLayout />
        </ThemeProvider>
      </div>
    </StyledThemeProvider>
  );
}

export default App;
