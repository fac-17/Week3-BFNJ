var trump = require("./trump.js");

test("check quote3", function(assert) {
  var result = showQuote.innerHTML;
  var expected =
    "Great, everyone is saying I did much better on 60 Minutes last week than President Obama did tonight. I agree!";
  assert.deepEqual(result, expected, "quote is correct");
  assert.end();
});
