// Trump script
//
var showQuote = document.querySelector(".show-quote");
var currentAnswer = "";
var currentlyQuestion = true;
var kanyeGiphyCall =
  "https://api.giphy.com/v1/gifs/search?api_key=yulIkLnLqFVIDmUCNqd8nYSbprM6tvN0&q=kanye";

var trumpGiphyCall =
  "https://api.giphy.com/v1/gifs/search?api_key=yulIkLnLqFVIDmUCNqd8nYSbprM6tvN0&q=trump";

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
var attemptTotal = document.querySelector(".attempt-total");
var quizQuestionContainer = document.querySelector(".quiz-question");
var quizAnswerContainer = document.querySelector(".quiz-answer");
var nextButton = document.querySelector(".next-btn");
var trumpImg = document.querySelector(".trump-img");
var kanyeImg = document.querySelector(".kanye-img");
var answerResult = document.querySelector("#answer-result");

var score = 0;
var attempts = 0;

trumpButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    score++;
    apiGifCall(trumpGiphyCall, trumpImg);
    trumpImg.style.display = "block";
    kanyeImg.style.display = "none";
    answerResult.innerText = "You're (alt) Right!";
  } else {
    apiGifCall(kanyeGiphyCall, kanyeImg);
    trumpImg.style.display = "none";
    kanyeImg.style.display = "block";
    answerResult.innerText = "Wrong! You Ain't Got The Answers!";
  }
  attempts++;
  scoreTotal.innerHTML = score.toString() + "/" + attempts.toString();
  showQuote.innerText = "";
  displayQuote();
  flipContainer();
});

kanyeButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    apiGifCall(trumpGiphyCall, trumpImg);
    trumpImg.style.display = "block";
    kanyeImg.style.display = "none";
    answerResult.innerText = "Wrong! Fake News!";
  } else {
    apiGifCall(kanyeGiphyCall, kanyeImg);
    trumpImg.style.display = "none";
    kanyeImg.style.display = "block";
    score++;
    answerResult.innerText = "Correct! Yeezy as 1,2,3!";
  }
  attempts++;
  showQuote.innerText = "";
  displayQuote();
  flipContainer();
  scoreTotal.innerHTML = score.toString() + "/" + attempts.toString();
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
  trumpImg.src = "";
  kanyeImg.src = "";
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
