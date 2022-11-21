import makeClassName from "../../lib/businessFn/makeClassName";

describe("makeClassName 함수 테스트", () => {
  it("원하는 상태이고 일치하는 경우", () => {
    const className = makeClassName(
      true,
      false,
      "End",
      "correctClass",
      "wrongClass",
      "End"
    );
    expect(className).toEqual("correctClass");
  });
  it("원하는 상태이고 일치하지 않고 클릭된 경우", () => {
    const className = makeClassName(
      false,
      true,
      "End",
      "correctClass",
      "wrongClass",
      "End"
    );
    expect(className).toEqual("wrongClass");
  });
  it("원하는 상태가 아닌 경우", () => {
    const className = makeClassName(
      false,
      false,
      "Wait",
      "correctClass",
      "wrongClass",
      "End"
    );
    expect(className).toEqual("");
  });
});
