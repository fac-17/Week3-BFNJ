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
