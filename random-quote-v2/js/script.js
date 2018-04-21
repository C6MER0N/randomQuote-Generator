// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// a array of objects stored in a variable named quotes.
var quotes = [
  { quote:"dont let yesterday take up to much of today.",
    source:"Johann WolfGang",
    year: '2018'
  },
  {
    quote:"the people that are crazy enough to change the world are the ones that do ",
    source:"Steve Jobs",
    year:'2018'
  },
  {
    quote: "be the change you want to see in the world.",
    source: "Unknown",
    year: "2018"
  },
  {
    quote: "i destory my enemy when i make him my friend",
    source: "Abe Licoln",
    year: "2018"
  },
  {
    quote: "success doesnt come easy you have to go take it.",
    source: "Unknown",
    year: "2018"
  }

];

// generates a random quote then returns the random quote generated
function getRandomQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}
getRandomQuote();

// prints quote to the screen
function printQuote() {
  var randquote = getRandomQuote();
  var html = '<p class="quote">' + randquote.quote + '</p>';
  html += '<p class="source">' + randquote.source  + '</p>';
document.getElementById('quote-box').innerHTML = html;
}
printQuote();
