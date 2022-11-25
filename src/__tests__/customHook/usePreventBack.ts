import { renderHook } from "@testing-library/react";
import usePreventBack from "../../lib/customHook/usePreventBack";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));
const mockedPushState = jest.fn();
window.history.pushState = mockedPushState;
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

afterEach(() => {
  mockedPushState.mockClear();
});

describe("usePreventBack Hook 테스트", () => {
  it("초기 세팅", () => {
    const target = "/quiz";
    renderHook(() => usePreventBack({ target }));
    expect(window.history.pushState).toBeCalledWith(null, "", target);
    expect(window.addEventListener).toBeCalledWith(
      "popstate",
      expect.any(Function)
    );
  });

  it("뒤로가기 버튼을 눌렀을때 확인을 누른경우", () => {
    window.confirm = jest.fn().mockReturnValue(1);
    const target = "/quiz";
    const { unmount, result } = renderHook(() => usePreventBack({ target }));
    result.current.preventGoBack();
    unmount();
    expect(mockedUsedNavigate).toBeCalledWith(-1);
    expect(window.removeEventListener).toBeCalledWith(
      "popstate",
      expect.any(Function)
    );
  });

  it("뒤로가기 버튼을 눌렀을때 거절을 누른경우", () => {
    window.confirm = jest.fn().mockReturnValue(0);
    const target = "/quiz";
    const { result } = renderHook(() => usePreventBack({ target }));
    result.current.preventGoBack();
    expect(window.history.pushState).toBeCalledWith(null, "", target);
    expect(window.history.pushState).toBeCalledTimes(2);
  });
});
