import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { renderHook } from "@testing-library/react";
import useStartQuiz from "../../lib/customHook/useStartQuiz";
import { ReactNode, RefObject } from "react";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

const mockStore = configureMockStore()();
const wrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={mockStore}>{children}</Provider>
);

describe("useStartQuiz 테스트", () => {
  it("결과 페이지로 넘어가는 경우", async () => {
    const { result } = renderHook(
      () =>
        useStartQuiz({
          amountRef: {
            current: { value: "10" },
          } as RefObject<HTMLSelectElement>,
          categoryRef: {
            current: { value: "testCategory" },
          } as RefObject<HTMLSelectElement>,
          difficultyRef: {
            current: { value: "easy" },
          } as RefObject<HTMLSelectElement>,
        }),
      {
        wrapper,
      }
    );

    result.current();

    expect(mockStore.getActions()[0]).toEqual({
      payload: {
        amount: "10",
        category: "testCategory",
        difficulty: "easy",
        navigate: mockedUsedNavigate,
      },
      type: "quizList/getQuizList",
    });
  });
});
