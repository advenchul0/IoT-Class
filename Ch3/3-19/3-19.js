var str = 'abc def'; //index : 0~6, length : 7

// Array.prototype.push.call(str, 'pushed string');
// ypeError: Cannot assign to read only property 'length' of object '[object String]'

// Array.prototype.concat.call(str, 'pushed string');
// [String, 'pushed string'] 
//0:String ('abc def')
//1:'pushed string'Array.prototype.concat.call(str, 'pushed string');

Array.prototype.every.call(str, function(char) {return char !== ' ';}); // false
Array.prototype.some.call(str, function(char) {return char === ' ';}); // true

var newArr = Array.prototype.map.call(str, function(char){ return char + '!';})
console.log(newArr); // (7) ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) {return string + char + i;},
    ''
]); 
console.log(newStr); //  a0b1c2 3d4e5f6