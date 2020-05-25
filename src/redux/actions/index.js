import { TOGGLE_THEME, SET_LANGUAGE } from "./types";

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
