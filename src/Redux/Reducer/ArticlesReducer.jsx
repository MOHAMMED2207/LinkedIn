import * as actions from "../Action/ActiohType";

const initialStata = {
  Loding: false,
  Articles: localStorage.getItem("Articles")
    ? JSON.parse(localStorage.getItem("Articles"))
    : [],
};

export const ArticlesReducer = (state = initialStata, action) => {
  localStorage.setItem("Articles", JSON.stringify(state.Articles));

  switch (action.type) {
    case actions.LODIN_STATUS:
      return {
        ...state,
        Loding: action.satus,
      };
    case actions.ARTICLES_POST:
      return {
        ...state,
        Articles: [action.payload, ...state.Articles],
      };
    default:
      return state;
  }
};
