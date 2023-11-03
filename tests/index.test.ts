import {
  specialNumeral,
  getNumeral,
  numAsArrayToThePower,
} from "../src/roman-numerals";

describe("test specialNumeral function", () => {
  //
  it("Returns the roman numeral for number in the list ", () => {
    expect(specialNumeral(4)).toBe("IV");
    expect(specialNumeral(90)).toBe("XC");
    expect(specialNumeral(1000)).toBe("M");
  });

  it("Returns No value found for value that does not exist", () => {
    expect(specialNumeral(55)).toBe(undefined);
  });
});

describe("test getNumeral function", () => {
  //
  it("Returns the roman numeral for numbers under 10", () => {
    expect(getNumeral(1)).toBe("I");
    expect(getNumeral(2)).toBe("II");
    expect(getNumeral(3)).toBe("III");
    expect(getNumeral(4)).toBe("IV");
    expect(getNumeral(5)).toBe("V");
    expect(getNumeral(6)).toBe("VI");
    expect(getNumeral(7)).toBe("VII");
    expect(getNumeral(8)).toBe("VIII");
    expect(getNumeral(9)).toBe("IX");
    expect(getNumeral(10)).toBe("X");
  });

  it("Returns error message if number is bigger than 3000", () => {
    expect(getNumeral(3000)).toBe("Value too large");
    expect(getNumeral(10000)).toBe("Value too large");
    expect(getNumeral(5999)).toBe("Value too large");
  });
});

describe("test numAsArrayToThePower function", () => {
  //
  it("Returns array of a number with the 10 to power value ", () => {
    expect(numAsArrayToThePower(51)).toEqual([50, 1]);
    expect(numAsArrayToThePower(346)).toEqual([300, 40, 6]);
    expect(numAsArrayToThePower(2875)).toEqual([2000, 800, 70, 5]);
  });
  it("Returns error message if number is bigger than 3000", () => {
    expect(numAsArrayToThePower(3000)).toEqual("Value too large");
  });
});
