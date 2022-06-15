function add7(a) {
  let sum = a + 7;
  console.log(sum);
}
add7(4);

function multiply(a, b) {
  let theProduct = a * b;
  console.log(theProduct);
}
multiply(2, 8);

function capitalize(string) {
  /* Make whole string lowercased */
  let smallString = string.toLowerCase();

  /* Capitalize first letter */
  let firstLetter = smallString.charAt(0).toUpperCase();

  let fixedString = firstLetter + smallString.slice(1);
  console.log(fixedString);
}
capitalize("hello");

function lastLetter(string) {
  let lastLetter = string.charAt(string.length - 1);
  console.log(lastLetter);
}
lastLetter("abcde");
