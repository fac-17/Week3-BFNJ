// Trump script
var showQuote = document.querySelector(".show-quote");
var currentAnswer = "";
var currentlyQuestion = true;

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
var skipButton = document.querySelector(".skip-btn");
var trumpButton = document.querySelector(".trump-btn");
var kanyeButton = document.querySelector(".kanye-btn");
var scoreTotal = document.querySelector(".score-total");
var quizQuestionContainer = document.querySelector(".quiz-question");
var quizAnswerContainer = document.querySelector(".quiz-answer");
var nextButton = document.querySelector(".next-btn");
var trumpImg = document.querySelector('.trump-img');
var kanyeImg = document.querySelector('.kanye-img');

var score = 0;

trumpButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    score++;
    trumpImg.style.display = 'block';
    kanyeImg.style.display = 'none';
    console.log("You're right!");
  } else {
    trumpImg.style.display = 'none';
    kanyeImg.style.display = 'block';

    console.log("Uh oh! Wrong prat!");
  }
  scoreTotal.innerHTML = score.toString();
  flipContainer();
});

kanyeButton.addEventListener("click", function() {
  if (currentAnswer == "Trump") {
    trumpImg.style.display = 'block';
    kanyeImg.style.display = 'none';
    console.log("Uh oh! Wrong prat!");
  
  } else {
    trumpImg.style.display = 'none';
    kanyeImg.style.display = 'block'
  
    score++;
    console.log("You're right!");
  }
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


// displayQuote();
nextButton.addEventListener("click", function() {
  displayQuote();
  flipContainer();
});
