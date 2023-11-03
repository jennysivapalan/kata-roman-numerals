import { specialNumeral, getNumeral } from "../src/roman-numerals";

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

describe("test getNumeral function", () => {
  //
  it("Returns the roman numeral for small number not in the two lists", () => {
    expect(getNumeral(2)).toBe("II");
    expect(getNumeral(3)).toBe("III");
    expect(getNumeral(4)).toBe("IV");
    expect(getNumeral(6)).toBe("VI");
    expect(getNumeral(7)).toBe("VII");
    expect(getNumeral(8)).toBe("VIII");
  });
});
