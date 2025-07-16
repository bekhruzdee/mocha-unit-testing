class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  squareRoot(a) {
    if (a < 0) throw new Error("Cannot take square root of negative number");
    return Math.sqrt(a);
  }
}

module.exports = Calculator;
