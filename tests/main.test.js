const { testFunc, add, hello } = require("../index");
/**
 * Main test file for the project.
 */

describe("Main test file", () => {
  test("Test", () => {
    expect(testFunc()).toBe("test");
  });

  test("Add", () => {
    expect(add(5, 7)).toBe(12);
  });

  test("Hello", () => {
    expect(hello("World")).toBe("Hello World");
  });
});
