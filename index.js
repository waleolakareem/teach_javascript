// Activity 1

var pizzaCount = 5
var totalCost = pizzaCount * 5;
var name = "Wale"
var isHungry = true

console.log ("Welcome: " + name);
console.log ("Pizzas cost $5 each");
console.log(" your total is: $" + totalCost);
console.log("Still Hungry: " + isHungry)
console.log(`This is amazing it is just ${totalCost}` )


// Activity 2
var doYouRock = confirm("The question is,do *you* rock?");
var howMuchRock = prompt("How much do you rock?")

console.log(doYouRock + howMuchRock)

//Activity 3
var doYouLikeSushi = confirm('Do you like sushi');
var whatKindOfSushiDoYouLike = prompt('What kind of sushi do you like?')
var doYouLikeGingerTea = confirm('Do you like Ginger tea')

// confirm prompt is use to grab a boolean
//Activity Four
//Conditional statements

if (doYouLikeSushi) {
  alert(`You like ${whatKindOfSushiDoYouLike} !`);
}

else if (doYouLikeGingerTea) {
  alert("You like Ginger tea")
}

else {
  document.write("You dont like sushi or ginger tea")
}
