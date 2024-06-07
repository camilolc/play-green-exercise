import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppRouter } from "./router/AppRouter"
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/LoginStyles";
import styled from '@emotion/styled';

import LightMode from '../public/dkmode.png'
import DarkMode from '../public/lgmode.png'

export const App = () => {

  const ThemeToggleImage = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  cursor: pointer;
`;

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appTheme = createTheme(isDarkMode ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <ThemeToggleImage src={isDarkMode ? DarkMode : LightMode } onClick={toggleTheme}></ThemeToggleImage>
      <AppRouter>

      </AppRouter>
    </ThemeProvider>

  )
}
