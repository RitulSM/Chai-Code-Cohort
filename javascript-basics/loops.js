// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
    let givengifts=0;
     for(var i=0;i<friends;i++){
       if(totalGifts>0){
       givengifts++;
       totalGifts=totalGifts-1
       }
     }
     return givengifts;
   }
   
// You just need to implement the countApples function
function countApples(apples) {
    let applecnt=0;
   for(let i=0;i<apples;i++){
      applecnt++;
   }
   return applecnt
  }
// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {
    return Math.floor(totalBars /barsPerBox)
}

 // You just need to implement the totalWater function
function totalWater(waterAmounts) {
    let sum=0;
    for(let i=0;i<waterAmounts.length;i++){
      sum+=waterAmounts[i]
    }
    return sum;
  }
  
// You just need to implement the countSteps function
function countSteps(targetSteps) {
    let totalsteps=0;
    while(totalsteps<targetSteps){
      totalsteps++;
    }
    return totalsteps;
  }
  
// You just need to implement the workingDays function
function workingDays(days) {
    let count=0;
    for(let i=0;i<days.length;i++){
     if(days[i]!=="Saturday"&&days[i]!=="Sunday"){
       count++;
     }
   
    }
    return count;
   }
   
 // You just need to implement the totalStars function
function totalStars(starLevels) {
    let totalcnt=0;
     for(let i=0;i<starLevels.length;i++){
      for(let j=0;j<starLevels[i].length;j++){
        totalcnt++;
      }
     }
     return totalcnt;
  }
  // You just need to implement the totalPrice function
function totalPrice(prices) {
    let totalcost=0;
    for(let i=0;i<prices.length;i++){
     totalcost+=prices[i];
    }
    return totalcost;
 }
 
