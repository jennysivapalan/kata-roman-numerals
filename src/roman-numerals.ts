const fivesAndTens: { num: number; romanNumeral: string }[] = [
  { num: 5, romanNumeral: "V" },
  { num: 10, romanNumeral: "X" },
  { num: 50, romanNumeral: "L" },
  { num: 100, romanNumeral: "C" },
  { num: 500, romanNumeral: "D" },
  { num: 1000, romanNumeral: "M" },
];

const foursAndNines: { num: number; romanNumeral: string }[] = [
  { num: 4, romanNumeral: "IV" },
  { num: 9, romanNumeral: "IX" },
  { num: 40, romanNumeral: "XL" },
  { num: 90, romanNumeral: "XC" },
  { num: 400, romanNumeral: "CD" },
  { num: 900, romanNumeral: "CM" },
];

export function specialNumeral(x: number) {
  const allSpecialNumerals = fivesAndTens.concat(foursAndNines);
  const numeral = allSpecialNumerals.find((value) => value.num === x);
  return numeral ? numeral.romanNumeral : undefined;
}

export function getNumeral(num: number) {
  if (num >= 3000) return "Value too large";

  const numeralInList = specialNumeral(num);

  if (numeralInList === undefined) {
    return getNumeralLessThan10(num);
  } else return numeralInList;
}

function getNumeralLessThan10(num: number) {
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

/**
 *
 * @param num converts each digit in a number to it's index power
 * e.g. num : 51 -> [5,1] -> [(5*10^1), (5*10^0)] -> [50, 1] (output)
 * e.g. num: 346 -> [3,0,1] -> [(3*10^2), (4*10^1), (6*10^0)] -> [300, 40, 6]
 * e.g. num: 2875 -> [2,8,7,5] -> [(2*10^3),(8*10^2), (7*10^1), (5*10^0) -> [2000, 800, 70, 5]
 */
export function numAsArrayToThePower(num: number) {
  if (num >= 3000) return "Value too large";

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
