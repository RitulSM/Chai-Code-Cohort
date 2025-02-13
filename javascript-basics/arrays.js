// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
    guestList.push(newGuest)
    return guestList
  }
  
  
  // You just need to implement the eatCandy function
function eatCandy(candyJar) {
    candyJar.pop()
    return candyJar
  }
  
 // You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName)
    return queue
}


// You just need to implement the removeStudent function
function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus.shift()
    return bus
}

// You just need to implement the sortBooks function
function sortBooks(books) {
    // Sort the books alphabetically and return the updated list
    books.sort()
    return books;
}


// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
    let healthyfood=[];
      // Remove unhealthy food and return updated list
      for(let i=0;i<foodList.length;i++){
        if(foodList[i]==="Burger"){
          continue;
        }
        healthyfood.push(foodList[i])
      }
      return healthyfood
  }
  
// You just need to implement the findPhone function
function findPhone(items) {
    let index=0
    for(let i=0;i<items.length;i++){
      if(items[i]==="Phone"){
        index=i;
      }
    }
    return index
      // Return the index of "Phone" in the items array
  }
  
  
 // You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    message.unshift(name)
    return message
}


// You just need to implement the addVIP function
function addVIP(queue, vipGuest) {
    // Add vipGuest at the beginning of queue and return updated queue
    queue.unshift(vipGuest)
    return queue
}


// You just need to implement the addVIP function
function addVIP(queue, vipGuest) {
    // Add vipGuest at the beginning of queue and return updated queue
    queue.unshift(vipGuest)
    return queue
}


// You just need to implement the countMovies function
function countMovies(movieList) {
    // Return the number of movies in the movieList
    return movieList.length
}

