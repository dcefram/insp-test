const mostRecurringLetters = require("./mostRecurringLetters");

describe("mostRecurringLetters", () => {
  it("should return ['l']", () => {
    expect(mostRecurringLetters("hello").sort()).toEqual(["l"]);
  });

  it("should return ['e']", () => {
    expect(mostRecurringLetters("elephant").sort()).toEqual(["e"]);
  });

  it("should return ['a', 'b']", () => {
    expect(mostRecurringLetters("black beard").sort()).toEqual(["a", "b"]);
  });
});
