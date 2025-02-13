
function totalCupcakes(trayOne, trayTwo) {
    return trayOne+trayTwo;
    
  }
  
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    // Parse input (expected to be JSON string format),
    // which should contain trayOne and trayTwo
    const { trayOne, trayTwo } = JSON.parse(input);
  
    // Call our function
    const result = totalCupcakes(trayOne, trayTwo);
  
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
  });
  // Please don't remove the code above
  

  // Your code starts here
// You just need to implement the remainingApples function
function remainingApples(totalApples, givenAway) {
    return totalApples-givenAway;
    
  }
  
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  r2.on('line', (input) => {
    // Parse input (expected to be JSON string format),
    // which should contain totalApples and givenAway
    const { totalApples, givenAway } = JSON.parse(input);
  
    // Call our function
    const result = remainingApples(totalApples, givenAway);
  
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
  });
  // Please don't remove the code above
  
  // Your code starts here
// You just need to implement the totalChocolateBars function
function totalChocolateBars(barsPerBox, numberOfBoxes) {
    return barsPerBox*numberOfBoxes;
      
    }
    
    
    // Please don't remove the code below
    const readline = require('readline');
    
    const r3 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    r3.on('line', (input) => {
      // Parse input (expected to be JSON string format),
      // which should contain barsPerBox and numberOfBoxes
      const { barsPerBox, numberOfBoxes } = JSON.parse(input);
    
      // Call our function
      const result = totalChocolateBars(barsPerBox, numberOfBoxes);
    
      // Output the result as a JSON string
      process.stdout.write(JSON.stringify(result));
    });
    // Please don't remove the code above
    
    
  