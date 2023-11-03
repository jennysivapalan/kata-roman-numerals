import { specialNumeral } from "../src/roman-numerals";

describe("test specialNumeral function", () => {
  //
  it("Returns the roman numeral for number in the list ", () => {
    expect(specialNumeral(1)).toBe("I");
    expect(specialNumeral(4)).toBe("IV");
    expect(specialNumeral(90)).toBe("XC");
    expect(specialNumeral(1000)).toBe("M");
  });

  it("Returns No value found for value that does not exist", () => {
    expect(specialNumeral(55)).toBe("No value found");
  });
});
