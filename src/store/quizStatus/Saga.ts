import { all, call, put, takeLeading } from "redux-saga/effects";
import { timer } from "../../lib/businessFn/asyncWork";
import { correctQuiz, wrongQuiz } from "../quizResult/reducer";
import { setEnd } from "./reducer";

export function* showResult(action: {
  type: string;
  payload: number | undefined;
}) {
  yield call(timer, 1000);
  if (action.payload === undefined) yield put(correctQuiz());
  if (action.payload !== undefined) yield put(wrongQuiz(action.payload));
  yield put(setEnd());
}

export function* successSaga() {
  yield all([takeLeading("quizStatus/setSuccess", showResult)]);
}

export function* failSaga() {
  yield all([takeLeading("quizStatus/setFail", showResult)]);
}
