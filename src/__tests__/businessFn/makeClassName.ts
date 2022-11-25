import makeClassName from "../../lib/businessFn/makeClassName";
import { QUIZ_END, QUIZ_WAIT } from "../../lib/constant/quizState";

describe("makeClassName 함수 테스트", () => {
  it("원하는 상태이고 일치하는 경우", () => {
    const className = makeClassName(
      true,
      false,
      QUIZ_END,
      "correctClass",
      "wrongClass",
      QUIZ_END
    );

    expect(className).toEqual("correctClass");
  });

  it("원하는 상태이고 일치하지 않고 클릭된 경우", () => {
    const className = makeClassName(
      false,
      true,
      QUIZ_END,
      "correctClass",
      "wrongClass",
      QUIZ_END
    );

    expect(className).toEqual("wrongClass");
  });

  it("원하는 상태가 아닌 경우", () => {
    const className = makeClassName(
      false,
      false,
      QUIZ_WAIT,
      "correctClass",
      "wrongClass",
      QUIZ_END
    );

    expect(className).toEqual("");
  });
});
