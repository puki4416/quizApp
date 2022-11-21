import { renderHook } from "@testing-library/react";
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
    expect(result.current).toEqual([]);
  });
  it("local스토리지에서 가져온 값이 있는경우", () => {
    window.localStorage.setItem("wrongQuiz", JSON.stringify(["a", "b", "c"]));
    const { result } = renderHook(() => useReview());
    expect(result.current).toEqual(["a", "b", "c"]);
  });
});
