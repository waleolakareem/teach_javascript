var drinks = ["Coke", "Pepsi","Water"]
console.log("First statement");

console.log(drinks[0].toLowerCase());

var vegetables = ["Carrot","Peas","Lettuce","Tomatoes"]
for (var i = 0; i < vegetables.length; i++) {
  console.log(`I love ${vegetables[i]}`);
}

//USe for loop to list

var ZooAnimals = ["Zebra","Rhino","Giraffe","Owl"];

for (var i = 0;i < ZooAnimals.length; i++) {
  console.log(ZooAnimals[i]);
}


function printout(Things) {
  for (var i = Things.length - 1; i >= 0; i--) {
    console.log(Things[i])
  }
}

printout("money");
