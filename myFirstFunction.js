// FUNCTIONS
      // ================================================================================
      // Create a Function called "adder" that take three arguments (x, y, z).
      // The function should add the arguments together, and log the result to the console.
      function adder(x,y,z) {
            var sum = x + y + z;
            console.log(sum);
      }
      // Create a Function called "multiplier" that takes three arguments (x, y, z).
      // The function should multiply the arguments, and log the result to the console.
      function multiplier(x,y,z) {
            var multiply = x*y*z;
            console.log(multiply);
      }
      // Create a Function called "isString" that takes three arguments (x, y, z).
      // "isString" determines if all three arguments are strings and logs an appropriate response to the console.
      function isString(x,y,z) {
            if ((typeof (x) === "string") && (typeof (y) === "string") && (typeof (z) === "string")) {
                  console.log("All are strings");
            } else {
                  console.log("Not all are strings");
            }
      }
      // Create a Function called "vowelChecker" that takes in a single argument (x).
      // "vowlChecker" logs whether or not the input is a vowel.
      function vowelChecker (x) {
            vowels = ["a","e","i","o","u"]
            if (vowels.includes(x)) {
                  console.log("is is a vowel");
            } else {
                  console.log("it is not a vowel")
            }
      }
      // BONUS
      // Creates a version of "adder" that returns its result. Function is called "adderReturn".
      // Creates a version of "multiplier" that returns its result. Function is called "multiplierReturn".
      // FUNCTION EXECUTION
      // ================================================================================
      // Add in the lines of code below necessary to call the functions we created above.
      // Call the adder function here.
      adder(5,6,7)
      console.log("-------------------");
      // Call the multiplier function here.
      multiplier(5,6,7)
      console.log("-------------------");
      // Call the isString function here.
      isString("yes","no","brake")
      console.log("-------------------");
      // Call the vowelChecker function here.
      vowelChecker("z")
      console.log("-------------------");
      // BONUS
      // Call the adderReturn function here and set it equal to a variable. Then log that variable to the console.
      console.log("-------------------");
      // Call the multiplierReturn function here and set it equal to a variable. Then log that variable to the console.
