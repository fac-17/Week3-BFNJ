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

function filterKanye(quote) {}

// kanye.apiRequest();

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  return output;
};

module.exports = kanye;
