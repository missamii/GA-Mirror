<<<<<<< HEAD
// var myArray = [1, 6, 11, 15, 23, 24.6, 58];

// function insertMe(x, myArray) {
//  for (var i = 0; i < myArray.length; i++) {
//    myArray[i].splice('');
//    if ( insertMe > myArray) {
//
//    }
//  }
//  return insertMe;
// }


// Math.abs()

//Austin's solution
// const testArray = [1, 6, 11, 15, 23, 24.6, 58];
// const insertMe = (arr, num) => {
//   for (let i = 0; i < arr.length; i++){
//     if (num > arr[length - 1])
//     arr.push(num);
//     console.log(arr);
//     return arr;
//   }
//   if (num <= arr[i]) {
//     arr.splice(i, 0, num);
//     console.log(arr);
//     return arr;
//
//   }
// };
// insertMe(testArray, 10);
=======
const testArray = [1,4,6,7,9,11];
const insertMe = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[arr.length - 1]) {
      arr.push(num);
      console.log(arr);
      return arr;
    }
    if (num <= arr[i]) {
      arr.splice(i, 0, num);
      console.log(arr);
      return arr;
    }
  }
};

insertMe(testArray, -1000);


const insertMe2 = (num, arr) => {
  let index = arr.filter(each => num > each).length;
  arr.splice(index, 0, num);
  console.log(arr);
  return arr;
};

insertMe2(7, testArray);
>>>>>>> 0c092cfe7cb367f6fc3aa8f41a2cf724f56a7f0a
