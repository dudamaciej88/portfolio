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
        "Hey, I am Maciej Duda, highly motivated Junior Frontend Developer and a fan of JavaScript, HTML, CSS and React. My key skills include building responsive website layouts, creating complex JavaScript solutions and single-page applications. I'm very open-minded about new technologies and ideas. Right now I am looking for a job as I want to work with experienced developers to improve my skills in the most efficient way.",
    },
    skills: {
      header: "Skills",
    },
    projects: {
      header: "Projects",
      technologies: "Technologies:",
      live: "Live",
      code: "Code",
      project1: {
        name: "Stone Company",
        description: "Commercial website of stone carving company.",
        technologies: "html, scss, javascript, webpack",
      },
      project2: {
        name: "Coolcamp Shop",
        description: "E-commerce app. I am still working on this site.",
        technologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, formik, axios, firebase, redux-thunk",
      },
      project3: {
        name: "Quiz",
        description: "Simple game",
        technologies: "html, css, javascript, react, axios, firebase",
      },
      project4: {
        name: "Portfolio",
        description: "This portfolio site.",
        technologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, axios, formik, redux-thunk, firebase",
      },
    },
    contact: {
      header: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send!",
      text1: "You can contact me via email:",
      text2: "Or via this short form:",
      success: "Message has been sent. Thanks!",
      error: "Something went wrong. Try again later.",
    },
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
        "Hey, I am Maciej Duda, highly motivated Junior Frontend Developer and a fan of JavaScript, HTML, CSS and React. My key skills include building responsive website layouts, creating complex JavaScript solutions and single-page applications. I'm very open-minded about new technologies and ideas. Right now I am looking for a job as I want to work with experienced developers to improve my skills in the most efficient way.",
    },
    skills: {
      header: "Skills",
    },
    projects: {
      header: "Projects",
      technologies: "Technologies:",
      live: "Live",
      code: "Code",
      project1: {
        name: "Stone Company",
        description: "Commercial website of stone carving company.",
        technologies: "html, scss, javascript, webpack",
      },
      project2: {
        name: "Coolcamp Shop",
        description: "E-commerce app. I am still working on this site.",
        technologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, formik, axios, firebase, redux-thunk",
      },
      project3: {
        name: "Quiz",
        description: "Simple game",
        technologies: "html, css, javascript, react, axios, firebase",
      },
      project4: {
        name: "Portfolio",
        description: "This portfolio site.",
        tehnologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, axios, formik, redux-thunk, firebase",
      },
    },
    contact: {
      header: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send!",
      text1: "You can contact me via email:",
      text2: "Or via this short form:",
      success: "Message has been sent. Thanks!",
      error: "Something went wrong. Try again later.",
    },
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
    },
    projects: {
      header: "Projekty",
      technologies: "Technologie:",
      live: "Zobacz",
      code: "Kod",
      project1: {
        name: "Zakład kamieniarski",
        description: "Komercyjna strona zakładu kamieniarskiego.",
        technologies: "html, scss, javascript, webpack",
      },
      project2: {
        name: "Coolcamp Shop",
        description: "Sklep internetowy. Strona w budowie.",
        technologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, formik, axios, firebase, redux-thunk",
      },
      project3: {
        name: "Quiz",
        description: "Gra gdzie zgadujemy hasło z wybranej kategorii.",
        technologies: "html, css, javascript, react, axios, firebase",
      },
      project4: {
        name: "Portfolio",
        description: "Strona portfolio na której właśnie się znajdujesz.",
        tehnologies:
          "html, css in js, styled-components, javascript, react, redux, react-router, axios, formik, redux-thunk, firebase",
      },
    },
    contact: {
      header: "Kontakt",
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij!",
      text1: "Zapraszam do kontaktu na maila:",
      text2: "Lub poprzez formularz kontaktowy:",
      success: "Udało się wysłać wiadomość!",
      error: "Coś poszło nie tak. Spróbuj później!",
    },
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
