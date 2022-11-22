import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { renderHook } from "@testing-library/react";
import useNextQuestion from "../../lib/customHook/useNextQuestion";
import { ReactNode } from "react";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("useNextQuestion 테스트", () => {
  const mockStore = configureMockStore()();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={mockStore}>{children}</Provider>
  );
  it("결과 페이지로 넘어가는 경우", async () => {
    const mockedSetFinal = jest.fn();
    const { result } = renderHook(
      () =>
        useNextQuestion({
          order: 4,
          setOrder: jest.fn(),
          quizListLength: 5,
          setFinal: mockedSetFinal,
        }),
      {
        wrapper,
      }
    );
    result.current();
    expect(mockedSetFinal).toBeCalledWith(true);
    expect(mockedUsedNavigate).toBeCalledWith("/result", { replace: true });
    expect(mockStore.getActions()[0]).toEqual({
      payload: undefined,
      type: "quizStatus/setWait",
    });
  });
  it("다음 문제로 넘어가는 경우", async () => {
    const setOrderMocked = jest.fn();
    const { result } = renderHook(
      () =>
        useNextQuestion({
          order: 1,
          setOrder: setOrderMocked,
          quizListLength: 5,
          setFinal: jest.fn(),
        }),
      {
        wrapper,
      }
    );

    result.current();
    expect(setOrderMocked).toBeCalledWith(2);
    expect(mockStore.getActions()[1]).toEqual({
      payload: undefined,
      type: "quizStatus/setProgress",
    });
  });
});
