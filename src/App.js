import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import MainPage from "./pages/mainPage";

function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
