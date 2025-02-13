// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
    if(num%2==0){
     return "Even"
    }
    else{
     return "Odd"
    }
 }
 
// You just need to implement the findLargest function
function findLargest(a, b, c) {
    if(a>=b&&a>=c){
      return a;
    }
    else if(b>=a&&b>=c){
      return b;
    }
    else{
      return c;
    }
  }
  
// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
    if(age>=18){
      return "Eligible"
    }
    else{
      return "Not Eligible"
    }
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
  }
  
 // You just need to implement the calculateGrade function
function calculateGrade(marks) {
    if(marks>=90){
      return 'A'
    }
    else if(marks>=80&&marks<=89){
         return 'B'
    }
    else if(marks>=70&&marks<=79){
       return 'C'
    }
    else if(marks>=60&&marks<=69){
       return 'D'
    }
    else{
       return 'F'
    }
  
  }
  
// You just need to implement the isLeapYear function
function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
  
      if((year%4==0&&year%100!=0) || year%400==0){
          return "Leap Year"
      }
  
    else{
      return "Not a Leap Year"
    }
  }
  
// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    color=color.toLowerCase()
    if(color==="red"){
      return "Stop"
    }
    else if(color==="yellow"){
      return "Slow Down"
    }
    else if(color==="green"){
      return "Go"
    }
    else{
      return "Invalid Color"
    }
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  }
  
// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
    switch(day){
      case 1: {
        return "Monday"
      }
      case 2: {
        return "Tuesday"
      }
       case 3: {
        return "Wednesday"
      }
       case 4: {
        return "Thursday"
      }
       case 5: {
        return "Friday"
      }
       case 6: {
        return "Saturday"
      }
       case 7: {
        return "Sunday"
      }
      default:{   
         return "Invalid Day"
      }
      
    }
    // Return the corresponding day of the week based on the input number
  
  }
  

// You just need to implement the checkNumberType function
function checkNumberType(num) {
    if(num===0){
      return "Zero"
    }
    else if(num>0){
      return "Positive"
    }
    else{
      return "Negative"
    }
    // Return "Positive", "Negative", or "Zero" based on the input number
  }
// You just need to implement the calculator function
function calculator(num1, num2, operator) {
    switch(operator){
     case'+':{
       return num1+num2;
     }
     case'*':{
       return num1*num2;
     }
     case'-':{
       return num1-num2;
     }
     case'/':{
       if(num2===0){
         return "Cannot divide by zero"
       }
       else{
          return num1+num2;
       }
       
     }
     default:{
       return "Invalid Operator"
     }
    }
 }
