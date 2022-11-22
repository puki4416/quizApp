import { makePage } from "../../lib/businessFn/makePage";

describe("makeUseTime함수 테스트", () => {
  it("페이지가 일부만 존재하는 경우", () => {
    const result = makePage(1, 20, 10, 5);
    expect(result).toEqual([1, 2]);
  });

  it("마지막 컨텐츠페이지 인경우", () => {
    const result = makePage(1, 50, 10, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("두번째 페이지 뭉치 인 경우", () => {
    const result = makePage(6, 120, 10, 5);
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });

  it("두번째 페이지 뭉치 가 일부만 존재하는 경우", () => {
    const result = makePage(6, 55, 10, 5);
    expect(result).toEqual([6]);
  });
});
