const { expect } = require("chai");
const Calculator = require("../calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add()", () => {
    it("should return 5 for 2 + 3", () => {
      expect(calculator.add(2, 3)).to.equal(5);
    });
  });

  describe("subtract()", () => {
    it("should return -1 for 2 - 3", () => {
      expect(calculator.subtract(2, 3)).to.equal(-1);
    });
  });

  describe("multiply()", () => {
    it("should return 6 for 2 * 3", () => {
      expect(calculator.multiply(2, 3)).to.equal(6);
    });
  });

  describe("divide()", () => {
    it("should return 2 for 6 / 3", () => {
      expect(calculator.divide(6, 3)).to.equal(2);
    });

    it("should throw error for divide by 0", () => {
      expect(() => calculator.divide(6, 0)).to.throw("Division by zero");
    });
  });

  describe("power()", () => {
    it("should return 8 for 2^3", () => {
      expect(calculator.power(2, 3)).to.equal(8);
    });
  });

  describe("squareRoot()", () => {
    it("should return 3 for sqrt(9)", () => {
      expect(calculator.squareRoot(9)).to.equal(3);
    });

    it("should throw error for negative numbers", () => {
      expect(() => calculator.squareRoot(-9)).to.throw(
        "Cannot take square root of negative number"
      );
    });
  });
});
