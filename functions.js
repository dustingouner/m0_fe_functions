// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
    console.log("Hi, how are you doing?")
  }
  
  printGreeting()
  printGreeting()
  printGreeting()


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function todaysWeather(type) {
    console.log(`Today will be ${type}`)
}

todaysWeather("Sunny")

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function salaryJob(company, num1, num2) {
    var range = num2 - num1
    console.log(`For this position at ${company}, the pay range is $ ${range}`)
  }
  
  salaryJob("Google", 100000, 125000)


// 4: Write a function that satifies the following interaction pattern:

function checkStock(num1, item) {
    if (num1 === 0) {
      console.log(`${item} - Out of Stock`)
    }
    if (num1 >= 4) {
      console.log(`${item} is stocked`)
    }
    if (num1 <= 3 && num1 >=1) {
      console.log(`${item} - running LOW`)
    }
  }
  
  checkStock(4, "Coffee");
  checkStock(3, "Tortillas");
  checkStock(0, "Cheese");
  checkStock(1, "Salsa");




// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"