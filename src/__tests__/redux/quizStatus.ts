import { testSaga } from "redux-saga-test-plan";
import quizStatusSlice, {
  setWait,
  setProgress,
  setSuccess,
  setFail,
  setEnd,
} from "../../store/quizStatus/reducer";
import { timer } from "../../lib/businessFn/asyncWork";
import { showResult } from "../../store/quizStatus/Saga";

describe("quizList 테스트", () => {
  describe("reducer 테스트", () => {
    const initialState = { status: "Wait" };
    it("setWait가 발생한 경우", () => {
      const actual = quizStatusSlice(initialState, setWait());
      expect(actual.status).toEqual("Wait");
    });

    it("setProgress가 발생한 경우", () => {
      const actual = quizStatusSlice(initialState, setProgress());
      expect(actual.status).toEqual("Progress");
    });

    it("setSuccess가 발생한 경우", () => {
      const actual = quizStatusSlice(initialState, setSuccess());
      expect(actual.status).toEqual("Success");
    });

    it("setFail가 발생한 경우", () => {
      const actual = quizStatusSlice(initialState, setFail(1));
      expect(actual.status).toEqual("Fail");
    });

    it("setEnd가 발생한 경우", () => {
      const actual = quizStatusSlice(initialState, setEnd());
      expect(actual.status).toEqual("End");
    });
  });
});

describe("saga 테스트", () => {
  it("성공 액션이 발생한 경우", () => {
    testSaga(showResult, {
      type: "quizStatus/setSuccess",
      payload: undefined,
    })
      .next()
      .call(timer, 1000)
      .next()
      .put({ type: "quizResult/correctQuiz", payload: undefined })
      .next()
      .put({
        type: "quizStatus/setEnd",
        payload: undefined,
      });
  });

  it("에러가 발생한 경우", () => {
    testSaga(showResult, {
      type: "quizStatus/setFail",
      payload: 1,
    })
      .next()
      .call(timer, 1000)
      .next()
      .put({ type: "quizResult/wrongQuiz", payload: 1 })
      .next()
      .put({
        type: "quizStatus/setEnd",
        payload: undefined,
      });
  });
});
