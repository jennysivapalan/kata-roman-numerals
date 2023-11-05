import { SPECIAL_NUMERALS } from "./special-numerals";

export const numberToRomanNumeral = () => {
  const numeralArray: { num: number; romanNumeral: string }[] = [];

  for (let i = 0; i < 3000; i++) {
    const numeral = getNumeral(i);
    numeral ? numeralArray.push({ num: i, romanNumeral: numeral }) : undefined;
  }
  return numeralArray;
};

export function getNumeral(num: number) {
  if (num >= 3000) return "Value too large";

  const numeralInList = specialNumeral(num);
  return numeralInList ? numeralInList : createNumeral(num);
}

export function specialNumeral(x: number) {
  const numeral = SPECIAL_NUMERALS.find((value) => value.num === x);
  return numeral ? numeral.romanNumeral : undefined;
}

function createNumeral(num: number) {
  return num < 10 ? getNumeralLessThan10(num) : getNumeralBiggerThan10(num);
}

export function getNumeralLessThan10(num: number) {
  let numeral = "";
  let startingNumber = 0;

  if (num > 5 && num < 9) {
    startingNumber = 5;
    numeral = "V";
  }
  if (num < 9) {
    for (let i = startingNumber; i < num; i++) {
      numeral += "I";
    }
    return numeral;
  }
}

function getNumeralBiggerThan10(num: number) {
  let finalNumeral = "";
  let i = num;
  do {
    const numeralClosest = getSpecialNumeralClosestTo(i);
    finalNumeral += numeralClosest.romanNumeral;
    i = i - numeralClosest.num;
  } while (i > 1);
  if (i <= 9) {
    finalNumeral += getNumeralLessThan10(i);
  }
  return finalNumeral;
}

export function getSpecialNumeralClosestTo(num: number) {
  const numeral = SPECIAL_NUMERALS.filter((value) => value.num <= num).sort(
    (a, b) => a.num - b.num
  );
  return numeral[numeral.length - 1];
}

export function getNumberForNumeral(numeral: string) {
  return numberToRomanNumeral().find((value) => value.romanNumeral === numeral)
    ?.num;
}
