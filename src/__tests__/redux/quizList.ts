import { NavigateFunction } from "react-router-dom";
import { SagaType, testSaga } from "redux-saga-test-plan";
import { axiosGetQuizList } from "../../lib/businessFn/asyncWork";
import quizListSlice, {
  getQuizList,
  getQuizListSuccess,
  getQuizListFailure,
  initializeQuizList,
} from "../../store/quizList/reducer";

import { getServerQuizList } from "../../store/quizList/saga";

jest.mock("../../lib/businessFn/makeAnswers", () => ({
  makeAnswers: () => [
    "testAnswer1",
    "testAnswer2",
    "testAnswer3",
    "testAnswer4",
  ],
}));

const apiDataResultsMocked = new Array(10).fill(0).map((_, index) => {
  return {
    category: "computerScience",
    difficulty: "easy",
    question: `testQuestion${index + 1}`,
    correct_answer: "testAnswer1",
    incorrect_answers: ["testAnswer2", "testAnswer3", "testAnswer4"],
  };
});

const successDataMocked = new Array(10).fill(0).map((_, index) => {
  return {
    category: "computerScience",
    difficulty: "easy",
    question: `testQuestion${index + 1}`,
    correctAnswer: "testAnswer1",
    answers: ["testAnswer1", "testAnswer2", "testAnswer3", "testAnswer4"],
  };
});

const apiDataMocked = {
  response_code: 0,
  results: apiDataResultsMocked,
};

const evokeActipnPayloadMocked: {
  amount: string;
  category: string;
  difficulty: string;
  navigate: NavigateFunction;
} = {
  amount: "10",
  category: "1",
  difficulty: "easy",
  navigate: () => {},
};

describe("quizList 테스트", () => {
  describe("reducer 테스트", () => {
    const initialState = {
      loading: false,
      error: false,
    };

    it("getQuizList가 발생한 경우", () => {
      const actual = quizListSlice(
        initialState,
        getQuizList(evokeActipnPayloadMocked)
      );
      expect(actual.loading).toEqual(true);
      expect(actual.error).toEqual(false);
    });

    it("getQuizListSuccess가 발생한 경우", () => {
      const actual = quizListSlice(
        initialState,
        getQuizListSuccess(successDataMocked)
      );
      expect(actual.content).toEqual(successDataMocked);
      expect(actual.loading).toEqual(false);
    });

    it("getQuizListFailure가 발생한 경우", () => {
      const actual = quizListSlice(initialState, getQuizListFailure());
      expect(actual.loading).toEqual(false);
      expect(actual.error).toEqual(true);
    });
    it("initializeQuizList가 발생한 경우", () => {
      const actual = quizListSlice(initialState, initializeQuizList());
      expect(actual.content).toEqual(undefined);
      expect(actual.loading).toEqual(false);
      expect(actual.error).toEqual(false);
    });
  });
});

describe("saga 테스트", () => {
  it("api 를 성공적으로 받아와 액션을 발생시킨 경우", () => {
    testSaga(getServerQuizList as SagaType<any[]>, {
      type: "quizList/getQuizList",
      payload: evokeActipnPayloadMocked,
    })
      .next()
      .call(axiosGetQuizList, evokeActipnPayloadMocked)
      .next({ data: apiDataMocked })
      .put({ type: "quizList/getQuizListSuccess", payload: successDataMocked })
      .next()
      .put({
        type: "quizResult/startQuiz",
        payload: {
          startTime: new Date(),
          totalAmount: successDataMocked.length,
        },
      })
      .next()
      .put({ type: "quizStatus/setProgress", payload: undefined });
  });

  it("에러가 발생한 경우", () => {
    const saga = testSaga(getServerQuizList as SagaType<any[]>, {
      type: "quizList/getQuizList",
      payload: evokeActipnPayloadMocked,
    });

    saga
      .next()
      .call(axiosGetQuizList, evokeActipnPayloadMocked)
      .next(new Error("에러발생"))
      .put({ type: "quizList/getQuizListFailure", payload: undefined });
  });
});
