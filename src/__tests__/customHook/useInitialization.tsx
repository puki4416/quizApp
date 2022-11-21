import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { renderHook } from "@testing-library/react";
import useInitial from "../../lib/customHook/useInitialization";
import { ReactNode } from "react";

describe("useAnswer Hook 테스트", () => {
  const mockStore = configureMockStore()();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={mockStore}>{children}</Provider>
  );
  it("정답이 일치하는 경우", async () => {
    const { unmount } = renderHook(() => useInitial(), {
      wrapper,
    });

    unmount();

    expect(mockStore.getActions()[0]).toEqual({
      payload: undefined,
      type: "quizList/initializeQuizList",
    });
    expect(mockStore.getActions()[1]).toEqual({
      payload: undefined,
      type: "quizResult/initializeQuiz",
    });
    expect(mockStore.getActions()[2]).toEqual({
      payload: undefined,
      type: "quizStatus/setWait",
    });
  });
});
