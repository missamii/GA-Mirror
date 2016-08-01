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
