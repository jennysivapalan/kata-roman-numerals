import { singleNumeral } from "../src/roman-numerals";

describe("", () => {
  //
  it("Returns the 1 letter roman numeral for associated number ", () => {
    expect(singleNumeral(10)).toBe("X");
  });
});
