export function roll(sides, numDice, numRolls) {

  var resultArr = [];


  const output = {
    "sides": sides,
    "dice": numDice,
    "rolls": numRolls,
    "results": resultArr
  }

  return JSON.stringify(output);
}