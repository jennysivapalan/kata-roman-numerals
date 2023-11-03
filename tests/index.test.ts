import {
  specialNumeral,
  getNumeral,
  numAsArrayToThePower,
  getSpecialNumeralClosestTo,
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

  it("Returns the roman numeral for numbers under 40", () => {
    expect(getNumeral(10)).toBe("X");
    expect(getNumeral(20)).toBe("XX");
    expect(getNumeral(30)).toBe("XXX");

    expect(getNumeral(11)).toBe("XI");
    expect(getNumeral(17)).toBe("XVII");
    expect(getNumeral(19)).toBe("XIX");

    expect(getNumeral(22)).toBe("XXII");
    expect(getNumeral(25)).toBe("XXV");
    expect(getNumeral(29)).toBe("XXIX");

    expect(getNumeral(33)).toBe("XXXIII");
    expect(getNumeral(34)).toBe("XXXIV");
    expect(getNumeral(38)).toBe("XXXVIII");
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
    expect(numAsArrayToThePower(3000)).toEqual(undefined);
  });
});

describe("test getSpecialNumeralClosestTo function", () => {
  //
  it("Returns number and roman numeral closest and below to num in fivesAndTens and foursAndNines list for numbers up to 100", () => {
    expect(getSpecialNumeralClosestTo(12)).toEqual({
      num: 10,
      romanNumeral: "X",
    });
    expect(getSpecialNumeralClosestTo(46)).toEqual({
      num: 40,
      romanNumeral: "XL",
    });
    expect(getSpecialNumeralClosestTo(67)).toEqual({
      num: 50,
      romanNumeral: "L",
    });
    expect(getSpecialNumeralClosestTo(95)).toEqual({
      num: 90,
      romanNumeral: "XC",
    });
    expect(getSpecialNumeralClosestTo(100)).toEqual({
      num: 100,
      romanNumeral: "C",
    });
  });

  it("Returns number and roman numeral closest and below to num in fivesAndTens and foursAndNines list for numbers up to 1000", () => {
    expect(getSpecialNumeralClosestTo(102)).toEqual({
      num: 100,
      romanNumeral: "C",
    });
    expect(getSpecialNumeralClosestTo(460)).toEqual({
      num: 400,
      romanNumeral: "CD",
    });
    expect(getSpecialNumeralClosestTo(700)).toEqual({
      num: 500,
      romanNumeral: "D",
    });
    expect(getSpecialNumeralClosestTo(950)).toEqual({
      num: 900,
      romanNumeral: "CM",
    });
    expect(getSpecialNumeralClosestTo(9999)).toEqual({
      num: 1000,
      romanNumeral: "M",
    });
  });
});
