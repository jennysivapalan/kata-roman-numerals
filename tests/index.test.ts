import { singleNumeral } from "../src/roman-numerals";

describe("test singleNumeral function", () => {
  //
  it("Returns the 1 letter roman numeral for associated number ", () => {
    expect(singleNumeral(1)).toBe("I");
    expect(singleNumeral(5)).toBe("V");
    expect(singleNumeral(10)).toBe("X");
    expect(singleNumeral(50)).toBe("L");
    expect(singleNumeral(100)).toBe("C");
    expect(singleNumeral(500)).toBe("D");
    expect(singleNumeral(1000)).toBe("M");
  });

  it("Returns No value found for value that does not exist", () => {
    expect(singleNumeral(55)).toBe("No value found");
  });
});
