import { makeAnswers } from "../../lib/businessFn/makeAnswers";

describe("makeAnswers함수 테스트", () => {
  it("정답이 임의의 순서대로 나오는지", () => {
    Math.random = jest.fn().mockReturnValue(0.1);

    const answers = makeAnswers("test1", ["test2", "test3", "test4"]);

    expect(answers).toEqual(["test1", "test2", "test3", "test4"]);
  });
});
