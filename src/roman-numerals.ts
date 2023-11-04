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
  const numAsArrayToPower10 = numAsArrayToThePower(num);
  if (numAsArrayToPower10 === undefined) return "Invalid value";

  let finalNumeral = "";

  for (let i = 0; i < numAsArrayToPower10.length; i++) {
    const currentNum = numAsArrayToPower10[i];

    let j = currentNum;
    do {
      if (j === 0) break;

      const numeralClosest = getSpecialNumeralClosestTo(j);
      finalNumeral += numeralClosest.romanNumeral;

      j = j - numeralClosest.num;
    } while (j > 1);
    if (j <= 9) {
      finalNumeral += getNumeralLessThan10(j);
    }
  }
  return finalNumeral;
}

/**
 *
 * @param num converts each digit in a number multiplied by 10 to the power of the index
 * e.g. num : 51 -> [5,1] -> [(5*10^1), (5*10^0)] -> [50, 1] (output)
 * e.g. num: 346 -> [3,0,1] -> [(3*10^2), (4*10^1), (6*10^0)] -> [300, 40, 6]
 * e.g. num: 2875 -> [2,8,7,5] -> [(2*10^3),(8*10^2), (7*10^1), (5*10^0) -> [2000, 800, 70, 5]
 */
export function numAsArrayToThePower(num: number) {
  if (num >= 3000) return undefined;

  const numAsArray = num
    .toString()
    .split("")
    .map((n) => parseInt(n));

  let powerOfNumber = numAsArray.length - 1;

  for (let i = 0; i < numAsArray.length; i++) {
    const tempNew = numAsArray[i] * Math.pow(10, powerOfNumber);
    numAsArray[i] = tempNew;
    powerOfNumber--;
  }
  return numAsArray;
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
