let test = require("tape");
let kanye = require("./kanye.js");

var testObject = { quote: "Tweeting is legal and also therapeutic" };

test("check sum works", function(t) {
  const actual = 1 + 1;
  const expected = 2;
  t.deepEqual(actual, expected, "should return 2");
  t.end();
});

test("check that function returns a string", function(t) {
  // var output = kanye();
  const actual = typeof kanye.apiRequest();
  const expected = "string";
  t.deepEqual(actual, expected, "should return a string");
  t.end();
});

test("check that the object is converted to a string", function(t) {
  const actual = kanye.extractString(testObject);
  const expected = "Tweeting is legal and also therapeutic";
  t.deepEqual(actual, expected, "should be the correct string");
  t.end();
});
