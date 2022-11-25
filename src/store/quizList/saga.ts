import { all, call, put, takeLeading } from "redux-saga/effects";
import {
  getQuizListSuccess,
  getQuizListFailure,
  getQuizListPayload,
} from "./reducer";
import { startQuiz } from "../quizResult/reducer";
import { setProgress } from "../quizStatus/reducer";
import { axiosGetQuizList } from "../../lib/businessFn/asyncWork";
import { makeAnswers } from "../../lib/businessFn/makeAnswers";
import { ALRET_ERROR } from "../../lib/constant/alert";

interface QuizApiData {
  response_code: 0;
  results: {
    category: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}

export function* getServerQuizList(action: {
  type: string;
  payload: getQuizListPayload;
}) {
  try {
    const quizList: { data: QuizApiData } = yield call(
      axiosGetQuizList,
      action.payload
    );
    const result = quizList.data.results.map(
      ({
        category,
        difficulty,
        question,
        correct_answer: correctAnswer,
        incorrect_answers,
      }) => ({
        category,
        difficulty,
        question,
        correctAnswer,
        answers: makeAnswers(correctAnswer, incorrect_answers),
      })
    );
    yield put(getQuizListSuccess(result));
    yield put(startQuiz({ startTime: new Date(), totalAmount: result.length }));
    yield put(setProgress());
    yield action.payload.navigate("/quiz");
  } catch (error) {
    yield put(getQuizListFailure());
    yield window.alert(ALRET_ERROR);
  }
}

export function* getQuizListSaga() {
  yield all([takeLeading("quizList/getQuizList", getServerQuizList)]);
}
