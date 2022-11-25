import quizResultSlice, {
  startQuiz,
  correctQuiz,
  wrongQuiz,
  initializeQuiz,
} from "../../store/quizResult/reducer";

describe("quizList 테스트", () => {
  describe("reducer 테스트", () => {
    const initialState = {
      correct: 0,
      wrong: 0,
      wrongNumbers: [],
    };

    it("startQuiz가 발생한 경우", () => {
      const payload = { startTime: new Date(), totalAmount: 10 };
      const actual = quizResultSlice(initialState, startQuiz(payload));
      expect(actual.startTime).toEqual(payload.startTime);
      expect(actual.totalAmount).toEqual(payload.totalAmount);
    });

    it("correctQuiz가 발생한 경우", () => {
      const actual = quizResultSlice(initialState, correctQuiz());
      expect(actual.correct).toEqual(1);
    });

    it("wrongQuiz가 발생한 경우", () => {
      const actual = quizResultSlice(initialState, wrongQuiz(1));
      expect(actual.wrong).toEqual(1);
      expect(actual.wrongNumbers).toEqual([1]);
    });

    it("initializeQuiz가 발생한 경우", () => {
      const actual = quizResultSlice(initialState, initializeQuiz());
      expect(actual.correct).toEqual(0);
      expect(actual.wrong).toEqual(0);
      expect(actual.wrongNumbers).toEqual([]);
    });
  });
});
