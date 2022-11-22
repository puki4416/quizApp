import { renderHook } from "@testing-library/react";
import useSaveWrong from "../../lib/customHook/useSaveWrong";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ReactNode } from "react";
import { QuizContentState } from "../../store/quizList/reducer";

class LocalStorageMock {
  store: { [index: string]: string };
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

window.localStorage = new LocalStorageMock() as unknown as Storage;

describe("useReview Hook 테스트", () => {
  it("local스토리지에 중복된 오답이 없는 경우", () => {
    renderHook(() =>
      useSaveWrong({
        wrongNumbers: [1],
        quizList: new Array(4)
          .fill(0)
          .map(
            (_, index) =>
              ({ question: `test${index}` } as unknown as QuizContentState)
          ),
      })
    );
    expect(localStorage.getItem("wrongQuiz")).toEqual(
      JSON.stringify([{ question: "test1", count: 1 }])
    );
  });
  it("local스토리지에 중복된 오답이 있는 경우", () => {
    renderHook(() =>
      useSaveWrong({
        wrongNumbers: [1],
        quizList: new Array(4)
          .fill(0)
          .map(
            (_, index) =>
              ({ question: `test${index}` } as unknown as QuizContentState)
          ),
      })
    );
    expect(localStorage.getItem("wrongQuiz")).toEqual(
      JSON.stringify([{ question: "test1", count: 2 }])
    );
  });
});
