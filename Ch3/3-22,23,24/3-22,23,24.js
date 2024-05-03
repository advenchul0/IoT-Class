// 3-22
var numbers = [10, 20, 3, 16, 45];

var max = min = numbers[0];

numbers.forEach(function(number){
    if (number > max){
        max = number;
    }

    if (number < min){
        min = number;
    }
});

console.log(max, min) // 45 3

// 3-23
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null,numbers);
var min = Math.min.apply(null,numbers);

console.log(max, min) // 45 3

// 3-24
const Numbers = [10, 20, 3, 16, 45];

const Max = Math.max(...Numbers);
const Min = Math.min(...Numbers);
console.log(Max, Min) // 45 3