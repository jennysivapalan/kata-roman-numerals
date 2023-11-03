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
  } else return numeralInList;
}
