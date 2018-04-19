// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var html;

var quotes = [
  { quote:"this is a test quote",
    source:"cameron james",
    year: '2018',
  },
  {
    quote:"test quote 2",
    source:"cameron james",
    year:'2018'
  },
  {
    quote: "test quote 3",
    source: "cameron james ",
    year: '2018'
  }
];

function getRandomQuote() {
  for (var i = 0; i <= quotes.length; i++) {
    Math.floor(Math.random() * quotes.length);
  }
}
getRandomQuote();

function printQuote() {
  var randquote = getRandomQuote();
  html += '<p class="quote">' + randquote.quotes + '</p>';
  html += '<p class="source">' + randquote.quotes  + '</p>';
document.getElementById('quote-box').innerHTML = html;

printQuote();
getRandomQuote();
}
