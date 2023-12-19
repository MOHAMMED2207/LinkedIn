import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "../Reducer/Reducer";
import { ArticlesReducer } from "../Reducer/ArticlesReducer";

const Root_Reducer = combineReducers({
  userReducer: Reducer,
  ArticlesReducer: ArticlesReducer,
});

export const Store = createStore(Root_Reducer, applyMiddleware(thunk));
