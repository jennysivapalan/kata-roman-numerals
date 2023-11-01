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

export function closestNumerals(input: number) {
  const numeralsSmallerThanInput = singleNumeralToDigits.filter(
    (value) => value.num <= input
  );

  const numeralsBiggerThanInput = singleNumeralToDigits.filter(
    (value) => value.num > input
  );

  if (
    numeralsSmallerThanInput.length === 0 ||
    numeralsBiggerThanInput.length === 0
  )
    return "Out of range";
  else
    return [
      numeralsSmallerThanInput[numeralsSmallerThanInput.length - 1],
      numeralsBiggerThanInput[0],
    ];
}
