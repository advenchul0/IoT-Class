var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v,i){console.log(v,i);}); //undefined 0, 1 1
arr2.forEach(function (v,i){console.log(v,i);}); // 1 1
//forEach : for loop 함수를 arr에 적용, v= arr[i], i = index
//undefined를 인식(하지만 값은 없음)

map_1 = arr1.map(function(v,i) {return v + i;});
map_2 = arr2.map(function(v,i) {return v + i;});
console.log(map_1); //[ NaN, 2 ]
console.log(map_2); //[ <1 empty item>, 2 ]
//map : new array 제작, new_arr[i] = "return value"
//undefined + 0 = NaN

filter_1 = arr1.filter(function(v) {return !v;});
filter_2 = arr2.filter(function(v) {return !v;});
console.log(filter_1); //[ undefined ]
console.log(filter_2); //[]
//filter : new array 제작(함수에 조건 따른 elemnet filtering)
// !v --> value가 없다면 남김

reduce_1 = arr1.reduce(function (p, c, i) {return p + c+ i;}, ''); 
reduce_2 = arr2.reduce(function (p, c, i) {return p + c+ i;}, '');
console.log(reduce_1); //undefined011
console.log(reduce_2); //11
// reduce(transform을 의미), p <-- p + array[i] + i 
// p --> initial value, c = array[i], i = index
// p는 초기값(위 코드에서는 ''로 줌) --> string으로 더함
// string으로 p를 계속 recurrnet하게 사용 



/*
undefined는 elemnet로 취급되어, 코드에 혼란을 줄 수 있음 (null 사용)
*/