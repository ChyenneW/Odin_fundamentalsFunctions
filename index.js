function add7(a) {
  let sum = a + 7;
  console.log(sum);
}

function multiply(a, b) {
  let theProduct = a * b;
  console.log(theProduct);
}

function capitalize(string) {
  /* Make whole string lowercased */
  let smallString = string.toLowerCase();

  /* Capitalize first letter */
  let firstLetter = smallString.charAt(0).toUpperCase();
  smallString.splice(1);

  let fixedString = firstLetter + smallString;
  console.log(fixedString);
}

function lastLetter(string) {
  let lastLetter = string.charAt(string.length - 1);
  console.log(lastLetter);
}
