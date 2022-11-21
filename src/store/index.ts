import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import quizList from "./quizList/reducer";
const rootReducer = combineReducers({ quizList });

export function* rootSaga() {
  yield all([]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
