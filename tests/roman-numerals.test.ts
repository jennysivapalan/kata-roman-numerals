import {
  specialNumeral,
  getNumeral,
  getSpecialNumeralClosestTo,
  getNumberForNumeral,
} from "../src/roman-numerals";

describe("test specialNumeral function", () => {
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

  it("Returns the roman numeral for numbers between 40 and 50", () => {
    expect(getNumeral(40)).toBe("XL");
    expect(getNumeral(42)).toBe("XLII");
    expect(getNumeral(44)).toBe("XLIV");

    expect(getNumeral(45)).toBe("XLV");
    expect(getNumeral(46)).toBe("XLVI");
    expect(getNumeral(49)).toBe("XLIX");

    expect(getNumeral(50)).toBe("L");
  });

  it("Returns the roman numeral for numbers between 50 and 100", () => {
    expect(getNumeral(54)).toBe("LIV");
    expect(getNumeral(65)).toBe("LXV");
    expect(getNumeral(77)).toBe("LXXVII");

    expect(getNumeral(89)).toBe("LXXXIX");
    expect(getNumeral(95)).toBe("XCV");
    expect(getNumeral(99)).toBe("XCIX");

    expect(getNumeral(100)).toBe("C");
  });

  it("Returns the roman numeral for numbers between 100 and 500", () => {
    expect(getNumeral(151)).toBe("CLI");
    expect(getNumeral(298)).toBe("CCXCVIII");
    expect(getNumeral(348)).toBe("CCCXLVIII");

    expect(getNumeral(410)).toBe("CDX");
    expect(getNumeral(444)).toBe("CDXLIV");
    expect(getNumeral(478)).toBe("CDLXXVIII");
    expect(getNumeral(494)).toBe("CDXCIV");

    expect(getNumeral(500)).toBe("D");
  });

  it("Returns the roman numeral for numbers between 500 and 1000", () => {
    expect(getNumeral(575)).toBe("DLXXV");
    expect(getNumeral(643)).toBe("DCXLIII");
    expect(getNumeral(784)).toBe("DCCLXXXIV");
    expect(getNumeral(888)).toBe("DCCCLXXXVIII");
    expect(getNumeral(894)).toBe("DCCCXCIV");

    expect(getNumeral(909)).toBe("CMIX");
    expect(getNumeral(937)).toBe("CMXXXVII");
    expect(getNumeral(948)).toBe("CMXLVIII");
    expect(getNumeral(955)).toBe("CMLV");
    expect(getNumeral(999)).toBe("CMXCIX");

    expect(getNumeral(1000)).toBe("M");
  });

  it("Returns the roman numeral for numbers between 1000 and 2999", () => {
    expect(getNumeral(1009)).toBe("MIX");
    expect(getNumeral(1478)).toBe("MCDLXXVIII");
    expect(getNumeral(1500)).toBe("MD");
    expect(getNumeral(1775)).toBe("MDCCLXXV");
    expect(getNumeral(1999)).toBe("MCMXCIX");

    expect(getNumeral(2012)).toBe("MMXII");
    expect(getNumeral(2389)).toBe("MMCCCLXXXIX");
    expect(getNumeral(2499)).toBe("MMCDXCIX");
    expect(getNumeral(2804)).toBe("MMDCCCIV");
    expect(getNumeral(2959)).toBe("MMCMLIX");
  });
});

describe("test getSpecialNumeralClosestTo function", () => {
  it("Returns number and roman numeral closest and under a number from the list of special numerals (for numbers up to 100)", () => {
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

  it("Returns number and roman numeral closest and under a number from the special numerals list (for numbers up to 1000)", () => {
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

describe("test getNumberForNumeral function", () => {
  it("Returns number for a numeral", () => {
    expect(getNumberForNumeral("X")).toBe(10);
    expect(getNumberForNumeral("XVI")).toBe(16);
    expect(getNumberForNumeral("XC")).toBe(90);
    expect(getNumberForNumeral("CCCXLVIII")).toBe(348);
    expect(getNumberForNumeral("MMCCCLXXXIX")).toBe(2389);
  });

  it("Returns undefined for a number not under 3000", () => {
    expect(getNumberForNumeral("ABC")).toBe(undefined);
  });
});
