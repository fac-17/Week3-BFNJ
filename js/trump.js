// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       document.getElementById("demo").innerHTML =
//       xhr.responseText;
//     }
// };
// xhr.open("GET", "xmlhttp_info.txt", true);
// xhr.send();

var showQuote = document.querySelector("#show-quote");
console.log(showQuote);
// showQuote.innerHTML = "hello;";

var displayTrump = function() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  var url =
    "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var trumpData = JSON.parse(xhr.responseText);

      showQuote.innerHTML = trumpData.value;
      console.log("this is showquote", showQuote);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

displayTrump();

// module.exports = displayTrump;
