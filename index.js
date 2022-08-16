/**
 * Some random function for testing purposes.
 */
function testFunc() {
  return "test";
}

function add(a, b) {
  return a + b;
}

function hello(name) {
  return "Hello " + name;
}

/**
 * export the test function
 */
module.exports = {
  testFunc,
  add,
  hello,
};
