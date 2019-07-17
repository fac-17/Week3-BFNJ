// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// require("xmlhttprequest").XMLHttpRequest;
// var XMLHttpRequest = require("xmlhttprequest");

var kanye = {};

window.onload = function() {
  // alert("hello");
  console.log("test");
};

// var kanyeQuote = document.getElementById("kanye-quote");
// kanyeQuote.innerText = "test2";

kanye.apiRequest = () => {
  var xhr = new XMLHttpRequest();
  var url = "https://api.kanye.rest/";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      console.log(obj);
      var quoteString = kanye.extractString(obj);
      console.log(quoteString);
      // document.querySelector("#kanye-quote").textContent = quoteString;
      // document.querySelector("#kanye-quote").textContent = "test2";

      // var kanyeQuote = document.getElementById("kanye-quote").innerText;
      // kanyeQuote = "test2";
      // console.log(kanyeQuote);

      // var kanyeQuote = document.getElementById("kanye-quote");
      // kanyeQuote.innerText = "test2";
      // console.log(kanyeQuote);

      var kanyeQuote = document.getElementById("kanye-quote");
      kanyeQuote.innerText = quoteString;

      // return quoteString;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

function filterKanye(quote) {}

window.onload = kanye.apiRequest;

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  return output;
};

module.exports = kanye;
