const factorialFunction = require("../factorial/index");
const ratioFunction = require("../ratio/index");

function ratioAndFactorial(firstNum, secondNum, thirdNum) {
  const ratioValue = ratioFunction(firstNum, secondNum);
  const factorialValue = factorialFunction(thirdNum);
  const ratioFactirialObject = {};
  ratioFactirialObject.ratio = ratioValue;
  ratioFactirialObject.factorial = factorialValue;
  return ratioFactirialObject;
}

console.log(ratioAndFactorial(1, 2, 3));

module.exports = ratioAndFactorial;
