import { act, renderHook } from "@testing-library/react";
import useReview from "../../lib/customHook/useReview";

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
  it("local스토리지에서 가져온 값이 없는경우", () => {
    const { result } = renderHook(() => useReview());
    expect(result.current.reviews).toEqual([]);
  });

  it("local스토리지에서 가져온 값이 있는경우", () => {
    window.localStorage.setItem(
      "wrongQuiz",
      JSON.stringify([
        { date: new Date(2022, 3, 1), answers: [1, 2, 3, 4] },
        { date: new Date(2022, 2, 1), answers: [1, 2, 3, 4] },
        { date: new Date(2022, 1, 1), answers: [1, 2, 3, 4] },
      ])
    );
    const { result } = renderHook(() => useReview());
    expect(result.current.reviews).toEqual([
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 3, 1))),
        answers: [1, 2, 3, 4],
      },
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 2, 1))),
        answers: [1, 2, 3, 4],
      },
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 1, 1))),
        answers: [1, 2, 3, 4],
      },
    ]);
  });

  it("최신순으로 정렬하는 경우", () => {
    window.localStorage.setItem(
      "wrongQuiz",
      JSON.stringify([
        { date: new Date(2022, 3, 1), answers: [1, 2, 3, 4] },
        { date: new Date(2022, 2, 1), answers: [1, 2, 3, 4] },
        { date: new Date(2022, 1, 1), answers: [1, 2, 3, 4] },
      ])
    );
    const { result } = renderHook(() => useReview());
    act(() => {
      result.current.changeSort("recent");
    });
    expect(result.current.reviews).toEqual([
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 3, 1))),
        answers: [1, 2, 3, 4],
      },
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 2, 1))),
        answers: [1, 2, 3, 4],
      },
      {
        date: JSON.parse(JSON.stringify(new Date(2022, 1, 1))),
        answers: [1, 2, 3, 4],
      },
    ]);
  });

  it("오답횟수순 으로 정렬하는 경우", () => {
    window.localStorage.setItem(
      "wrongQuiz",
      JSON.stringify([
        { count: 1, answers: [1, 2, 3, 4] },
        { count: 2, answers: [1, 2, 3, 4] },
        { count: 3, answers: [1, 2, 3, 4] },
      ])
    );
    const { result } = renderHook(() => useReview());
    act(() => {
      result.current.changeSort("manyCount");
    });
    expect(result.current.reviews).toEqual([
      { count: 3, answers: [1, 2, 3, 4] },
      { count: 2, answers: [1, 2, 3, 4] },
      { count: 1, answers: [1, 2, 3, 4] },
    ]);
  });

  it("쉬운 난이도 으로 정렬하는 경우", () => {
    window.localStorage.setItem(
      "wrongQuiz",
      JSON.stringify([
        { difficulty: "hard", answers: [1, 2, 3, 4] },
        { difficulty: "medium", answers: [1, 2, 3, 4] },
        { difficulty: "easy", answers: [1, 2, 3, 4] },
      ])
    );
    const { result } = renderHook(() => useReview());
    act(() => {
      result.current.changeSort("difficulty");
    });
    expect(result.current.reviews).toEqual([
      { difficulty: "easy", answers: [1, 2, 3, 4] },
      { difficulty: "medium", answers: [1, 2, 3, 4] },
      { difficulty: "hard", answers: [1, 2, 3, 4] },
    ]);
  });

  it("저장된 값을 삭제하는 경우", () => {
    window.localStorage.setItem(
      "wrongQuiz",
      JSON.stringify([
        { difficulty: "hard", answers: [1, 2, 3, 4] },
        { difficulty: "medium", answers: [1, 2, 3, 4] },
        { difficulty: "easy", answers: [1, 2, 3, 4] },
      ])
    );

    const { result } = renderHook(() => useReview());

    act(() => {
      result.current.deleteContent(1);
    });

    expect(result.current.reviews).toEqual([
      { difficulty: "hard", answers: [1, 2, 3, 4] },
      { difficulty: "easy", answers: [1, 2, 3, 4] },
    ]);

    expect(
      JSON.parse(window.localStorage.getItem("wrongQuiz") as string)
    ).toEqual([
      { difficulty: "hard", answers: [1, 2, 3, 4] },
      { difficulty: "easy", answers: [1, 2, 3, 4] },
    ]);
  });
});
