var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var kanye = {};

kanye.apiRequest = () => {
  var xhr = new XMLHttpRequest();
  var url = "https://api.kanye.rest/";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      console.log(obj);
      var quoteString = kanye.extractString(obj);
      console.log(quoteString);
      return quoteString;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

kanye.extractString = function(responseObject) {
  var output = responseObject.quote;
  return output;
};

module.exports = kanye;
