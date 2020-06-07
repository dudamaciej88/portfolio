import { FORM_START, FORM_SUCCESS, FORM_FAIL, FORM_RESET } from "../actions/types";

const INITIAL_STATE = {
  error: false,
  success: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_START:
      return { ...state, loading: true };
    case FORM_SUCCESS:
      return { ...state, success: true, loading: false };
    case FORM_FAIL:
      return { ...state, error: true, loading: false };
    case FORM_RESET:
      return { error: false, success: false, loading: false };
    default:
      return state;
  }
};
