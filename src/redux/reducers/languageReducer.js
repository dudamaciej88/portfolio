const INITIAL_STATE = {
  language: {
    lang: "english",
    navBar: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      header: "About",
      text:
        "Hey, I'm Maciej Duda. I'm a highly motivated Junior Frontent Developer a fan of JavaScript, HTML, CSS and React. My key skills include building responsive website layouts, creating complex JavaScript solutions and single-page applications. I'm very open-minded about new technologies and ideas. Right now I'm looking for a job because I want to work with experienced developers to efficiently improve my skills.",
    },
    skills: {
      header: "Skills",
    }
  },
  english: {
    lang: "english",
    navBar: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      header: "About",
      text:
        "Hey, I'm Maciej Duda. I'm a highly motivated Junior Frontent Developer a fan of JavaScript, HTML, CSS and React. My key skills include building responsive website layouts, creating complex JavaScript solutions and single-page applications. I'm very open-minded about new technologies and ideas. Right now I'm looking for a job because I want to work with experienced developers to efficiently improve my skills.",
    },
    skills: {
      header: "Skills",
    }
  },
  polish: {
    lang: "polish",
    navBar: {
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
    },
    about: {
      header: "O mnie",
      text:
        "Cześć! Nazywam się Maciej Duda. Jestem na maxa zmotywowanym junior frontend developerem. Interesuje mnie JavaScript, HTML, CSS i React. Potrafię samodzielnie zaprojektować i wdrożyć responsywną stronę internetową. Z wielkim zainteresowaniem odkrywam nowe technologie i praktyki. Obecnie szukam pracy aby móc efektywnie rozwijać swoje umiejętności w towarzystwie doświadczonych developerów.",
    },
    skills: {
      header: "Umiejętności",
    }
  },
};

export const changeLanguage = (state, language) => {
  if (language === "english") {
    return { ...state.english };
  } else {
    return { ...state.polish };
  }
};

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
