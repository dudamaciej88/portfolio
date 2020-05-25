const INITIAL_STATE = {
  language: {
    lang: "english",
    navBar: {
      about: "About",
      works: "Works",
      contact: "Contact",
    },
  },
  english: {
    lang: "english",
    navBar: {
      about: "About",
      works: "Works",
      contact: "Contact",
    },
  },
  polish: {
    lang: "polish",
    navBar: {
      about: "O mnie",
      works: "Prace",
      contact: "Kontakt",
    },
  },
};

export const changeLanguage = (state, language) => {
    if (language === "english") {
        return {...state.english}
    } else {
        return {...state.polish}
    }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: changeLanguage(state, action.payload),
      };
    default:
      return state;
  }
};
