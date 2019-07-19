test("check quote3", function(assert) {
  var result = showQuote.innerHTML;
  var expected =
    "Great, everyone is saying I did much better on 60 Minutes last week than President Obama did tonight. I agree!";
  assert.Equal(result, expected, "quote is correct");
  assert.end();
});
