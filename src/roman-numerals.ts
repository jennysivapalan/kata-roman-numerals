const singleNumeralToDigits: { num: number; romanNumeral: string }[] = [
  { num: 1, romanNumeral: "I" },
  { num: 5, romanNumeral: "V" },
  { num: 10, romanNumeral: "X" },
  { num: 50, romanNumeral: "L" },
  { num: 100, romanNumeral: "C" },
  { num: 500, romanNumeral: "D" },
  { num: 1000, romanNumeral: "M" },
];

export function singleNumeral(x: number) {
  const numeral = singleNumeralToDigits.find((value) => value.num === x);
  return numeral ? numeral.romanNumeral : "No value found";
}
