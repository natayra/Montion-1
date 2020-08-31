import { createStore } from "redux";

const reducer = (state, action) => {
  if (state === undefined) {
    return "Loading";
  }
  if (action.type === "login") {
    localStorage.setItem("token", action.data.access);
    return {
      failedLogin: null,
      user: action.data,
    };
  }
  if (action.type === "failedLogin") {
    return {
      failedLogin: action.msg.detail,
    };
  }
  if (action.type === "failedEmail") {
    return {
      failedEmail: action.msg.email,
    };
  }

  if (action.type === "firstClick") {
    return {
      email: action.email,
    };
  }
  if (action.type === "secondClick") {
    return {
      email: action.email,
    };
  }
  if (action.type === "missingValidation") {
    if (action.msg.code !== undefined) {
      return {
        failedValidation: action.msg.code,
        email: action.email,
      };
    } else if (action.msg.username !== undefined) {
      return {
        failedValidation: action.msg.username,
        email: action.email,
      };
    } else if (action.msg.non_field_errors !== undefined) {
      return {
        failedValidation: action.msg.non_field_errors,
        email: action.email,
      };
    }
  }

  return state;
};
const store = createStore(reducer);

export default store;
