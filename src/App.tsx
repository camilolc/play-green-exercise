import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppRouter } from "./router/AppRouter"
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/LoginStyles";

export const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appTheme = createTheme(isDarkMode ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline />
      <button onClick={toggleTheme}>cambiar tema</button>
    <AppRouter>
      
    </AppRouter>
    </ThemeProvider>

  )
}
