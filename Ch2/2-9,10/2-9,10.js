//2-9
console.log(sum(1,2)); //3
console.log(multiply(3,4)); // Uncaught TypeError TypeError: multiply is not a function

function sum(a,b) {             //함수 선언문
    return a + b;
}

var multiply = function(a,b){   //함수 표현식
    return a*b;
} 


//2-9

var sum = function sum(a,b) {             //함수 선언문
    return a + b;
}

var multiply


console.log(sum(1,2)); //3
console.log(multiply(3,4)); // Uncaught TypeError TypeError: multiply is not a function

multiply = function(a,b){   //함수 표현식
    return a*b;
} 
