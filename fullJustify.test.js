const fullJustify = require("./fullJustify");

describe("fullJustify", () => {
  it("should return three lines with equal spacing", () => {
    expect(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)).toEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        "
    ]);
  });

  it("should two lines with equal spacing", () => {
    expect(fullJustify(["Am","I","your","fire?"], 11)).toEqual([
      "Am  I  your",
      "fire?      ",
    ]);
  });

  it("should also correctly distribute less space on an unequal line", () => {
    expect(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)).toEqual([
      "This    is    an",
      "example  of text",
      "justification.  "
    ]);
  });
});
