var eatSteak = confirm("Do you eat steak?");
var birthYear = prompt("What is your birth year")

if (birthYear <= 1998) {

  if (eatSteak) {
    document.write("Here is a steak sandwich");
  }

  else {
    document.write("Here is a tofu stir fry");
  }

}

else {
  alert("No stake for you")
}
