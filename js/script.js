// Trump script
var showQuote = document.querySelector(".show-quote");
var currentAnswer = "";

var displayTrump = function() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var trumpData = JSON.parse(xhr.responseText);
      showQuote.innerHTML = trumpData.value;
      currentAnswer = "Trump";
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
};

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
      currentAnswer = "Kanye";
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  return output;
};

// module.exports = kanye;
// _________________________________________________________

// Randomizing the quotes

function displayQuote() {
  var number = Math.floor(Math.random() * 10);
  if (number % 2 == 0) {
    displayTrump();
    console.log(number);
  } else {
    kanye.apiRequest();
    console.log(number);
  }
}
displayQuote();

// event listeners for showing the user if they chose the correct author for
// a quote

var trumpButton = document.querySelector(".trump-btn");
var kanyeButton = document.querySelector(".kanye-btn");
var scoreTotal = document.querySelector(".score-total");
var score = 0;

trumpButton.addEventListener("click", function() {
 if (currentAnswer == "Trump") {
   score++;
   console.log("You're right!");
 } else {
   console.log("Uh oh! Wrong prat!");
 }
 scoreTotal.innerHTML = score.toString();
 displayQuote();
});

kanyeButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    console.log("Uh oh! Wrong prat!");
  } else {
    score++;
    console.log("You're right!");
  }
   scoreTotal.innerHTML = score.toString();
   displayQuote();
});
