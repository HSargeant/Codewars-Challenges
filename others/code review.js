"use strict";

// you can write to stdout for debugging purposes, e.g.
// console.log("This is a debug message");

const canItemsFitInTruck = (truckSize, numberLargeItems, numberSmallItems) =>{
  console.log(numberLargeItems,truckSize,"can fit")
  return numberLargeItems + numberSmallItems / 3 <= truckSize; // true
}
const getNumberOfTruckTrips = (truckSize,numberLargeItems,numberSmallItems
) => {
  // if(truckSize==numberLargeItems) return 1
  let numLargeItemsLeft = numberLargeItems,
    numSmallItemsLeft = numberSmallItems,
    numTrips = 0,
    numLargeItemsInTruck = 0,
    numSmallItemsInTruck = 0;
    console.log("num of large items",numberLargeItems )
    
  while (numLargeItemsLeft > 0 || numSmallItemsLeft > 0) {
      // console.log(canItemsFitInTruck(truckSize, numLargeItemsInTruck + 1, 0))

    if (numLargeItemsLeft > 0 && canItemsFitInTruck(truckSize, numLargeItemsInTruck + 1, 0)) {

      numLargeItemsLeft -= 1;
      numLargeItemsInTruck += 1;
      // if(numLargeItemsInTruck==truckSize) numTrips++
      continue;
    }
    while (numSmallItemsLeft > 0) {
      if (canItemsFitInTruck(truckSize,numLargeItemsInTruck,numSmallItemsInTruck + 1)) {
        numSmallItemsLeft -= 1;
        numSmallItemsInTruck += 1;
        continue;
      }
      break;
    }
    console.log("no more can")
    numLargeItemsInTruck = 0;
    numSmallItemsInTruck = 0;
    numTrips += 1;
  }
  if(numLargeItemsInTruck>0) numTrips++
  return numTrips;
};


console.log(getNumberOfTruckTrips(5,5,6))
