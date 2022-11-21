import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import quizList from "./quizList/reducer";
import quizResult from "./quizResult/reducer";
import quizStatus from "./quizStatus/reducer";
import { getQuizListSaga } from "./quizList/saga";

const rootReducer = combineReducers({ quizList, quizResult, quizStatus });

export function* rootSaga() {
  yield all([getQuizListSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
