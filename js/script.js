// Trump script
var showQuote = document.querySelector(".show-quote");

var displayTrump = function() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var trumpData = JSON.parse(xhr.responseText);
      showQuote.innerHTML = trumpData.value;
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
};

// displayTrump();

// Kanye script

var kanye = {};

kanye.apiRequest = () => {
  var xhr = new XMLHttpRequest();
  var url = "https://api.kanye.rest/";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      var quoteString = kanye.extractString(obj);

      var kanyeQuote = document.querySelector(".show-quote");
      kanyeQuote.innerText = quoteString;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

// function filterKanye(quote) {}

// kanye.apiRequest();

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  return output;
};

// module.exports = kanye;

// rest of script

function displayQuote() {
  let number = Math.floor(Math.random() * 10);
  if (number % 2 == 0) {
    displayTrump();
  } else {
    kanye.apiRequest();
  }
}

displayQuote();
