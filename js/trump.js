// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       document.getElementById("demo").innerHTML =
//       xhr.responseText;
//     }
// };
// xhr.open("GET", "xmlhttp_info.txt", true);
// xhr.send();

var showQuote = document.querySelector(".show-quote");

( function() {
  var xhr = new XMLHttpRequest();
  var url = "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query=obama";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var trumpData = JSON.parse(xhr.responseText);
      showQuote.textContent = trumpData._embedded.quotes.value[3];
console.log(trumpData);
      // for (var i = 0; i < trumpData.length; i++) {
      //     var trumpQuotes = trumpData.data[i];
      //     var trumpSpecificQuote = trumpQuotes._embedded.quotes[i];

      // }

      // showQuote = trumpSpecificQuote;
      // console.log(trumpData);
      // console.log(trumpData.data);
      // console.log(trumpQuotes._embedded.quotes[i]);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
});
