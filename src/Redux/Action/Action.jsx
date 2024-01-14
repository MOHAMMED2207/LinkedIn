import * as action from "./ActiohType";

export const setUser = (payload) => {
  return {
    type: action.SET_USER,
    user: payload,
  };
};

export const setLoding = (status) => {
  return {
    type: action.LODIN_STATUS,
    status: status,
  };
};

export const Get_Articles = (payload) => {
  return {
    type: action.ARTICLES_POST,
    payload: payload,
  };
};
