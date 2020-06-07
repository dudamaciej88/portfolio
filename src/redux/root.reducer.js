import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import languageReducer from "./reducers/languageReducer";
import contactReducer from "./reducers/contactReducer";

export default combineReducers({
  ui: uiReducer,
  language: languageReducer,
  contact: contactReducer
});
