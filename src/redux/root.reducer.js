import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import languageReducer from "./reducers/languageReducer";

export default combineReducers({
  ui: uiReducer,
  language: languageReducer,
});
