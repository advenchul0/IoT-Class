var obj  = {
    0: 'a',
    1: 'b',
    2: 'c',
    length : 3
};

var arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']


/*
1. slice method는 obj를 arr로 바꾸는 역할이 원래는 아님 &rarr; form 사용 (ES6)
    (1) 반드시 array-like 이여야 함
*/