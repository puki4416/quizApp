import { makeUseTime } from "../../lib/businessFn/makeUseTime";

describe("makeUseTime함수 테스트", () => {
  it("1분 미만인 경우", () => {
    const result = makeUseTime(30000);
    expect(result).toEqual("30초");
  });
  it("1시간 미만인 경우", () => {
    const result = makeUseTime(1801000);
    expect(result).toEqual("30분 1초");
  });
  it("1일 미만인 경우", () => {
    const result = makeUseTime(37801000);
    expect(result).toEqual("10시간 30분 1초");
  });
  it("1일 이상인 경우", () => {
    const result = makeUseTime(901801000);
    expect(result).toEqual("10일 10시간 30분 1초");
  });
});
