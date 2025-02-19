// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
      if (typeof name !== "string" || typeof grade !== "string" || typeof age !== "number" || age <= 5 || name=="") {
      return "Invalid input";
    }
    return { name, age, grade };
  }
// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
  return product.hasOwnProperty("discount");
  }
  
// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
     if(!user.hasOwnProperty("password")){
      return user;
     }
     else{
      delete user.password
      return user
     }
  }
 // You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    var num=0
    num=Object.keys(user).length;
    return num;
  }
  
  