function addNumbers(inputArray) {
  let total = 0;
  for (let x = 0; x < inputArray.length; x++) {
    total += Number(inputArray[x]);
  }
  return total;
}

const args = [20, 34, 53, 12]; //process.argv;
const inputArray = args.slice(2);

console.log(addNumbers(inputArray));