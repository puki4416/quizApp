import { renderHook } from "@testing-library/react";
import usePreventMove from "../../lib/customHook/usePreventMove";

const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedLocation(),
}));

afterEach(() => {
  mockedUsedNavigate.mockClear();
});

describe("usePreventMove Hook 테스트", () => {
  it("주소가 처음 설정한 경로이고, 이동을 수락한 경우", () => {
    mockedUsedLocation.mockReturnValueOnce({ pathname: "/quiz" });
    window.confirm = jest.fn().mockReturnValueOnce(true);
    const { result } = renderHook(() => usePreventMove("/quiz"));
    result.current("/home", "홈");
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith("/home");
  });
  it("주소가 처음 설정한 경로이고, 이동을 수락하지 않은 경우", () => {
    mockedUsedLocation.mockReturnValueOnce({ pathname: "/quiz" });
    window.confirm = jest.fn().mockReturnValueOnce(false);
    const { result } = renderHook(() => usePreventMove("/quiz"));
    result.current("/home", "홈");
    expect(mockedUsedNavigate).toBeCalledTimes(0);
  });
  it("주소가 처음 설정한 경로가 아닌경우", () => {
    mockedUsedLocation.mockReturnValueOnce({ pathname: "/result" });
    const { result } = renderHook(() => usePreventMove("/quiz"));
    result.current("/home", "홈");
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith("/home");
  });
});
