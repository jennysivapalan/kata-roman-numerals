import { singleNumeral, closestNumerals } from "../src/roman-numerals";

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

describe("test  function", () => {
  //
  it("Returns the two numerals in the list surrounding a number ", () => {
    expect(closestNumerals(3)).toEqual([
      { num: 1, romanNumeral: "I" },
      { num: 5, romanNumeral: "V" },
    ]);

    expect(closestNumerals(8)).toEqual([
      { num: 5, romanNumeral: "V" },
      { num: 10, romanNumeral: "X" },
    ]);

    expect(closestNumerals(627)).toEqual([
      { num: 500, romanNumeral: "D" },
      { num: 1000, romanNumeral: "M" },
    ]);
  });

  it("Returns out of range for value that does not exist", () => {
    expect(closestNumerals(0)).toEqual("Out of range");
    expect(closestNumerals(1001)).toEqual("Out of range");
    expect(closestNumerals(-5)).toEqual("Out of range");
  });
});
