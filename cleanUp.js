// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion()
// I added a semi-colon after the code block in order to show the end of the statment.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// Added semi-colon after variable in order to show ending. Changed indention on line 20 & 21. The indentation improves readability of the code. 

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
}

makeFreshPesto();
// Added space between first set of parentheses and curly bracket.  function was not completely spelled out. Moved curly bracket below last console.log statement. 

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`The average is: ${avg}.`);
}

average(25,35);

// Added code to call the function and included two numbers. Moved the period in the console.log statement to inside of the backtics. Before it would give an error regarding the syntax.  