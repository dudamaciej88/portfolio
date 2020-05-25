import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";

function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
