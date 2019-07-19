// Trump script
//
var showQuote = document.querySelector(".show-quote");
var currentAnswer = "";
var currentlyQuestion = true;
var kanyeGiphyCall =
  "http://api.giphy.com/v1/gifs/search?api_key=yulIkLnLqFVIDmUCNqd8nYSbprM6tvN0&q=kanye";

var trumpGiphyCall =
  "http://api.giphy.com/v1/gifs/search?api_key=yulIkLnLqFVIDmUCNqd8nYSbprM6tvN0&q=trump";

var displayTrump = function() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var trumpData = JSON.parse(xhr.responseText);
      var trumpLowerCase = trumpData.value.toLowerCase();
      // fix quotes that start with a random full stop
      if (trumpData.value.charAt(0) == ".") {
        trumpData.value = trumpData.value.slice(1, trumpLowerCase.length);
      }
      // filter obvious answers
      if (
        trumpLowerCase.includes("hillary") ||
        trumpLowerCase.includes("cruz") ||
        trumpLowerCase.includes("rubio") ||
        trumpLowerCase.includes("bush") ||
        // trumpLowerCase.includes("syrians") ||
        trumpLowerCase.includes("clinton") ||
        trumpLowerCase.includes("bernie") ||
        trumpLowerCase.includes("president") ||
        trumpLowerCase.includes("obama") ||
        trumpLowerCase.includes("republican") ||
        trumpLowerCase.includes("republicans") ||
        trumpLowerCase.includes("potus") ||
        trumpLowerCase.includes("presidential") ||
        trumpLowerCase.includes("sanders") ||
        trumpLowerCase.includes("polls") ||
        trumpLowerCase.includes("brexit") ||
        // trumpLowerCase.includes("maga") ||
        trumpLowerCase.includes("senator")
      ) {
        displayTrump();
      } else {
        showQuote.innerHTML = '"' + trumpData.value + '"';
        currentAnswer = "Trump";
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
};

// Kanye script
//
var kanye = {};

kanye.apiRequest = () => {
  var xhr = new XMLHttpRequest();
  var url = "https://api.kanye.rest/";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      var quoteString = kanye.extractString(obj);
      var kanyeQuote = document.querySelector(".show-quote");
      kanyeQuote.innerText = '"' + quoteString + '"';
      currentAnswer = "Kanye";
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  // add full stops
  if (
    output.charAt(output.length - 1) !== "." &&
    output.charAt(output.length - 1) !== "?" &&
    output.charAt(output.length - 1) !== "!"
  ) {
    output = output.concat(".");
  }
  // capitalise
  if (output.charAt(0) === output.charAt(0).toLowerCase()) {
    output = output.charAt(0).toUpperCase() + output.slice(1, output.length);
  }
  return output;
};

// module.exports = kanye;
// _________________________________________________________

// Randomizing the quotes
function displayQuote() {
  var number = Math.floor(Math.random() * 10);
  if (number % 2 == 0) {
    displayTrump();
    // console.log(number);
  } else {
    kanye.apiRequest();
    // console.log(number);
  }
}

displayQuote();

// event listeners for showing the user if they chose the correct author for
// a quote
var skipButton = document.querySelector(".skip-btn");
var trumpButton = document.querySelector(".trump-btn");
var kanyeButton = document.querySelector(".kanye-btn");
var scoreTotal = document.querySelector(".score-total");
var quizQuestionContainer = document.querySelector(".quiz-question");
var quizAnswerContainer = document.querySelector(".quiz-answer");
var nextButton = document.querySelector(".next-btn");
var trumpImg = document.querySelector(".trump-img");
var kanyeImg = document.querySelector(".kanye-img");

var score = 0;

trumpButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    score++;
    apiGifCall(trumpGiphyCall, trumpImg);
    trumpImg.style.display = "block";
    kanyeImg.style.display = "none";
    console.log("You're right!");
  } else {
    apiGifCall(kanyeGiphyCall, kanyeImg);
    trumpImg.style.display = "none";
    kanyeImg.style.display = "block";
    console.log("Uh oh! Wrong prat!");
  }
  scoreTotal.innerHTML = score.toString();
  showQuote.innerText = "";
  displayQuote();
  flipContainer();
});

kanyeButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    apiGifCall(trumpGiphyCall, trumpImg);
    trumpImg.style.display = "block";
    kanyeImg.style.display = "none";
    console.log("Uh oh! Wrong prat!");
  } else {
    apiGifCall(kanyeGiphyCall, kanyeImg);
    trumpImg.style.display = "none";
    kanyeImg.style.display = "block";

    score++;
    console.log("You're right!");
  }
  showQuote.innerText = "";
  displayQuote();
  flipContainer();
  scoreTotal.innerHTML = score.toString();
});

skipButton.addEventListener("click", function() {
  displayQuote();
});

flipContainer = function() {
  if (currentlyQuestion) {
    quizQuestionContainer.style.display = "none";
    quizAnswerContainer.style.display = "block";
  } else {
    quizQuestionContainer.style.display = "block";
    quizAnswerContainer.style.display = "none";
  }
  currentlyQuestion = !currentlyQuestion;
};

nextButton.addEventListener("click", function() {
  flipContainer();
});

//apiCall GIF

let apiGifCall = function(url, element) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      let rand25 = Math.floor(Math.random() * 25);
      var giphyLink = obj.data[rand25].images.downsized_large.url;
      element.src = giphyLink;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
