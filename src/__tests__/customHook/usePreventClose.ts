import { renderHook } from "@testing-library/react";
import usePreventClose from "../../lib/customHook/usePreventClose";

window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

describe("usePreventClose Hook 테스트", () => {
  it("초기 세팅", () => {
    renderHook(() => usePreventClose());
    expect(window.addEventListener).toBeCalledWith(
      "beforeunload",
      expect.any(Function)
    );
  });

  it("페이지 변경시", () => {
    const eventObjectMock = {
      preventDefault: jest.fn(),
      returnValue: undefined,
    };
    const { result } = renderHook(() => usePreventClose());
    result.current.preventClose(
      eventObjectMock as unknown as BeforeUnloadEvent
    );
    expect(eventObjectMock.preventDefault).toBeCalledTimes(1);
    expect(eventObjectMock.returnValue).toEqual("");
  });

  it("페이지 나갈때", () => {
    const { unmount } = renderHook(() => usePreventClose());
    unmount();
    expect(window.removeEventListener).toBeCalledWith(
      "beforeunload",
      expect.any(Function)
    );
  });
});
