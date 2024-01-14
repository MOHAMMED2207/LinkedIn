import * as actions from "../Action/ActiohType";

const initialStata = {
  user: null,
};

export const Reducer = (state = initialStata, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};


