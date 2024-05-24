//4-3
var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
  });
  console.log(newArr);

// 10 0
// 20 1
// 30 2
// [ 15, 25, 35 ]


//4-4
var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index,currentValue);
    return currentValue + 5;
  });
  console.log(newArr2);
// 10 0
// 20 1
//30  2
//[5, 6, 7]
