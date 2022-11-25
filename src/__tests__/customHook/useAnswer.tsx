import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ReactNode } from "react";
import useAnswer from "../../lib/customHook/useAnswer";
import { act, renderHook } from "@testing-library/react";
import { QUIZ_PROGRESS } from "../../lib/constant/quizState";

describe("useAnswer Hook 테스트", () => {
  const mockStore = configureMockStore()();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={mockStore}>{children}</Provider>
  );
  it("정답이 일치하는 경우", async () => {
    const { result } = renderHook(
      () =>
        useAnswer({
          status: QUIZ_PROGRESS,
          correctAnswer: "test1",
          order: 1,
        }),
      {
        wrapper,
      }
    );

    act(() => {
      result.current("test1");
    });

    expect(mockStore.getActions()[0]).toEqual({
      payload: undefined,
      type: "quizStatus/setSuccess",
    });
  });

  it("정답이 불일치 하는경우", async () => {
    const { result } = renderHook(
      () =>
        useAnswer({
          status: QUIZ_PROGRESS,
          correctAnswer: "test1",
          order: 1,
        }),
      {
        wrapper,
      }
    );

    act(() => {
      result.current("test2");
    });

    expect(mockStore.getActions()[1]).toEqual({
      payload: 1,
      type: "quizStatus/setFail",
    });
  });
});
