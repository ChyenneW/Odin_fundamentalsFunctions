function fizzBuzz(givenNumber) {
  let userNumber = givenNumber;

  for (let index = 1; index <= userNumber; index++) {
    if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}

fizzBuzz(20);
