// set variables
var favTVshows = [];
var tvShow;
// For Loop Elements Repeats ??? Times
for (var i = 1; i < 4; i++) {
  // Collect information from user
  tvShow = prompt("What's your #" + i + " favorite TV show?");
  // Save shows
  favTVshows.push(tvShow);
}
// Loop through the saved data
for (var j = 0; j < favTVshows.length; j++) {
  // Let the user know that this where the data saved
  alert(favTVshows[j]);
}

