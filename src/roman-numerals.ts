const fivesAndTens: { num: number; romanNumeral: string }[] = [
  { num: 1, romanNumeral: "I" },
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
  return numeral ? numeral.romanNumeral : "No value found";
}
