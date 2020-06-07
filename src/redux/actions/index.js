import {
  TOGGLE_THEME,
  SET_LANGUAGE,
  FORM_START,
  FORM_SUCCESS,
  FORM_FAIL,
  FORM_RESET,
} from "./types";
import axios from "../../axios/axios";

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

export const formStart = () => {
  return {
    type: FORM_START,
  };
};

export const formSuccess = () => {
  return {
    type: FORM_SUCCESS,
  };
};

export const formFail = () => {
  return {
    type: FORM_FAIL,
  };
};

export const formReset = () => {
  return {
    type: FORM_RESET,
  };
};

export const sendForm = (data) => {
  return (dispatch) => {
    dispatch(formStart());
    axios
      .post("/msg.json", data)
      .then((response) => {
        dispatch(formSuccess());
      })
      .catch((err) => {
        dispatch(formFail());
      });
  };
};
