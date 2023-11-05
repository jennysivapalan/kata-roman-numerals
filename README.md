#Kata - Roman Numerals

## Getting started

To build project run:

`npm install`

To test the project (will run in watch mode):

`npm test`

## Project details

### Finding a roman numeral for a number

- A certain set of numbers to numerals are used to base all numbers off. This is small defined list set in `special-numerals.ts`

- If a number is in the list it is returned
- Otherwise - create the numeral - the following logic is applied

  - Work out which is the special numeral is closest and below the input number. This is the starting roman numeral. If the difference is greater than zero repeat finding the closest special numeral to the difference. Add the new roman numeral to first one created. Keep repeating this until the difference is zero. For example

  ```
  If a value in the index is 62. The closest special numeral to 62 is 50 which is L.

  62 - 50 = 12. The closest special numeral to 12 is 10 which is X. So the numeral is attached to L to become LX.

  12 - 10 = 2. The closest special numeral to 2 is 1 which I and it is added to LX to become LXI
  2 - 1 = 1. I is added to LXI to be LXII.

  1 - 1 = 0 and the loop stops.

  So 62 to is LXII.
  ```

### Finding a number for a roman numeral

- Using the `getNumeral` function to create a list of objects of numbers and their roman numerals from 1 to 3000. As the list is small it feels acceptable to keep this in-memory.
- Filter the list to find the number for a given input roman numeral and returns the number
