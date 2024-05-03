//2-11
console.log(sum(3,4)); // 3+4=7

function sum(x,y){

    return x + y;
}

var a = sum(1,2);

function sum(x, y) {
    return x + '+' + y + '=' + (x+y);
}

var c = sum(1,2);
console.log(c); // 1+2=3


//2-12
console.log(sum(3,4)); // Uncaught TypeError TypeError: sum is not a function

var sum = function(x,y){

    return x + y;
}

var a = sum(1,2);

var sum = function(x, y) {
    return x + '+' + y + '=' + (x+y);
}
var c = sum(1,2);
console.log(c); 
