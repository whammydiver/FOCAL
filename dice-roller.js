function rollDice(numOfDice) {
  let resultsArray = [];
  for (let x = 0; x < numOfDice; x++) {
    let singleDieResult = Math.floor(Math.random() * 7);
    resultsArray.push(singleDieResult);
  }
  let dieResultsString = resultsArray.join(", ");
  return dieResultsString;
}

const numOfDice = process.argv.slice(2);
console.log(`Rolled 3 dice: ${rollDice(numOfDice)}`);