//Activity text to observe how document.onkeyup works
// var userText = document.getElementById("user-text");
// // Next, we give JavaScript a function to execute when onkeyup event fires.
// document.onkeyup = function() {
//   userText.textContent = event.key;
// };
var Compchoices = ["r","p","s"];

document.onkeyup = function() {
  var userGuess = event.key;
  var compGuess = Compchoices[Math.floor(Math.random() * Compchoices.length)];
  var wins = 0;
  var losses = 0;
  var ties = 0;


  if (userGuess === "r"|| userGuess === "p" || userGuess === "s") {
    if ((userGuess === "r") && (compGuess === "s")) {
      wins++;
      return wins
    } else if ((userGuess === "r") && (compGuess === "p")) {
      losses++;
    } else if ((userGuess === "s") && (compGuess === "r")) {
      losses++;
    } else if ((userGuess === "s") && (compGuess === "p")) {
      wins++;
    } else if ((userGuess === "p") && (compGuess === "r")) {
      wins++;
    } else if ((userGuess === "p") && (compGuess === "s")) {
      losses++;
    } else if (userGuess === compGuess) {
      ties++;
    }
  }

  var html = "<p> You choose : " + userGuess + "</p>" +
  "<p> The computer choose: " + compGuess + "</p>" +
  "<p> wins: " + wins + "</p>" +
  "<p> losses: " + losses + "</p>" +
  "<p> ties: " + ties + "</p>";

  document.querySelector("#game").innerHTML = html;

}


