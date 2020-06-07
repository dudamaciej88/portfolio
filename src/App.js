import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import NavBar from "./components/navBar/navBar";

function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
