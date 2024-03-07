const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
   var result = mathOperations.sum(1, 2);

   // assert
   expect(result).toBe(3);

  });
});
describe("Calculator tests", () => {
  test("subtracting 1 - 2 should return -1", () => {
    var result = mathOperations.diff(1, 2);

    // assert
    expect(result).toBe(-1);
  });
});
describe("Calculator tests", () => {
  test("producting 1 * 2 should return 2", () => {
    var result = mathOperations.product(1, 2);

    // assert
    expect(result).toBe(2);
  });
});

