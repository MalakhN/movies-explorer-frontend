import { EMAIL_REGEXP, NAME_REGEXP } from "./constants";

export const validateEmail = (email) => {
  if (email !== undefined) {
    if (email.length === 0) {
      return {
        error: "Укажите email",
        activeButton: false,
      };
    } else if (EMAIL_REGEXP.test(email.toLowerCase())) {
      return {
        error: "",
        activeButton: true,
      };
    } else if (!EMAIL_REGEXP.test(email.toLowerCase())) {
      return {
        error: "Некорректный формат email",
        activeButton: false,
      };
    }
  } else if (email === undefined) {
    return {
      error: "",
      activeButton: false,
    };
  }
};

export const validateName = (name) => {
  if (name !== undefined) {
    if (name.length === 0) {
      return {
        error: "Укажите Имя",
        activeButton: false,
      };
    } else if (NAME_REGEXP.test(name.toLowerCase())) {
      return {
        error: "",
        activeButton: true,
      };
    } else if (!NAME_REGEXP.test(name.toLowerCase())) {
      return {
        error:
          "Используйте исключительно латинские и кириллические буквы, пробел и дефис",
        activeButton: false,
      };
    }
  } else if (name === undefined) {
    return {
      error: "",
      activeButton: false,
    };
  }
};

export const validateSearch = (search) => {
  if (search !== undefined) {
    if (search.length === 0) {
      return "Введите ключевое слово для начала поиска";
    }
  } else if (search === undefined) {
    return "";
  }
};