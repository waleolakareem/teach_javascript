//Create an array
//The array should have ten question objects with answers
//Ask the user a question one by one
//check the user together with the answers
//keep track of the user score



var questions = ["what is your name?","where are you from","how old are you?","what is your date of birth"]
var answers = ["Wale","Nigeria","30","August"];
//Construct and object of Q & A
var QuestandAnsws = questions.map(function(k, index){
  return {[k]:answers[index]}
})

console.log(QuestandAnsws);
