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
  
  function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    return Object.assign({}, obj1, obj2);
  }
  function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    var result = Object.entries(obj)
    return result;
  }
  function cleanObject(obj) {
    // Remove all properties with null or undefined values
    Object.keys(obj).forEach(key => {
    if (obj[key] === undefined||obj[key]===null) {
      delete obj[key];
    }
  });
  return obj
  }
  function deepClone(obj) {
    // Return a deep copy of obj
    const clone = JSON.parse(JSON.stringify(obj));
    return clone
  }
    // You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
 const keys = keyPath.split(".");

  // Traverse the object using the keys
  let value = obj;
  for (const key of keys) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return "Key not found";
    }
  }
  return value;
}

