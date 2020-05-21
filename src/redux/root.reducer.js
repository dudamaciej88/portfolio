import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";

export default combineReducers({
  ui: uiReducer,
});
