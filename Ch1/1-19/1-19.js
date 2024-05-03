var a;
console.log(a); //undefined (존재하지 않는 variable에 접근)

var obj = {a : 1}; 
console.log(obj.a); // 1
console.log(obj.b); // undefined (존재하지 않는 property에 접근)
// console.log(b); // ReferenceError: b is not define

var func = function() {};
var c = func();
console.log(c); // undefined(return 값이 없는 경우)

/*
undefined가 출력 될 경우 위의 3가지 문제점을 고려할 수 있으므로,
코드 작성시에는 null만 사용할 것
*/
