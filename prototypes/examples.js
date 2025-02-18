// You need to implement the Animal constructor function and its prototype method
Animal.prototype.makeSound=()=>{
    return "Some generic sound"
  }
  function Animal(name) {
      // Initialize name property
      const n=this.name;
     
  }

  // Define the Robot constructor
function Robot(name, batteryLevel) {
    this.name = name; // Correctly initialize properties
    this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
    if (this.batteryLevel < 80) {
        this.batteryLevel += 20;
    } else {
        this.batteryLevel = 100;
    }
};
// You need to implement the Counter constructor function and its prototype methods
Counter.prototype.increment=function(){
    return this.count+=1;
  }
  Counter.prototype.decrement=function(){
    return this.count-=1;
  }
  function Counter() {
      this.count=0;
  }
  
// You need to implement the Playlist constructor function and its prototype method
Playlist.prototype.addSong=function(song){
    this.songs.push(song)
     return this.songs;
  }
  function Playlist() {
     this.songs=[]
  }
  // You need to implement the ShoppingCart constructor function and its prototype methods
ShoppingCart.prototype.addItem=function(price){
    return this.items.push(price)
  }
  ShoppingCart.prototype.getTotalPrice=function(items){
      let totalPrice = 0;
      for (let i = 0; i < this.items.length; i++) {
          totalPrice += this.items[i]; // Sum up prices from this.items
      }
      return totalPrice;
  }
  function ShoppingCart() {
      // Initialize items property
      this.items=[];
  }
  
  // Define addItem method on ShoppingCart's prototype
  
  // Define getTotalPrice method on ShoppingCart's prototype
  // You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
    this.balance=balance;
    this.transactions=[];
 }
 
 // Define deposit method on BankAccount's prototype
 BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
    this.transactions.push(`Deposited ${amount}`)
 }
 // Define withdraw method on BankAccount's prototype
 BankAccount.prototype.withdraw=function(amount){
   if(amount<this.balance){
    this.balance-=amount;
    this.transactions.push(`Withdrew ${amount}`)
   }
   else{
     this.transactions.push("Insufficient balance")
   }
 }
 // Define getTransactionHistory method on BankAccount's prototype
 BankAccount.prototype.getTransactionHistory=function(){
   return this.transactions
 }
// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
    this.name=name;
    this.position=position;
    this.salary=salary;
   }
   
   // Define applyBonus method on Employee's prototype
   Employee.prototype.applyBonus=function(percent){
    this.salary+=this.salary*(percent/100);
     return this.salary;
   }
 
   // You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.books=[];
}

// Define addBook method on Library's prototype
Library.prototype.addBook=function(book){
  this.books.push(book)
}
// Define findBook method on Library's prototype
Library.prototype.findBook=function(title){
  if(this.books.includes(title)){
    return "Book found"
  }
  else{
    return "Book not found"
  }
}
// Define the BankAccount constructor
function BankAccount(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } 
};

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, acc2) {
    if (amount <= this.balance) {
        this.balance -= amount;
        acc2.deposit(amount);
    } 
};

// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
    // Initialize name, price, and stock properties
    this.name=name;
    this.price=price;
    this.stock=stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount=function(percent){
    this.price-=this.price*(percent/100)
   this.price = Math.round(this.price);
}
// Define purchase method on Product's prototype
Product.prototype.purchase=function(quantity){
  if(quantity<=this.stock){
    this.stock-=quantity
    return this.stock;
  }
  else{
    return "Not enough stock"
  }
}
