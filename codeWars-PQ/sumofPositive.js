function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let newArr=[2,10,-80,61,20];
console.log(positiveSum(newArr));