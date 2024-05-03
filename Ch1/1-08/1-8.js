var a = 10;
var b = a; // b가 a 주소를 가르킴 --> 결국 10을 가르킴

var obj1 = {c : 10, d : 'ddd'}
var obj2 = obj1; // obj2가 obj1의 주소를 가르킴 --> reference data type --> 10, ddd 가르킴

b = 15; // 15 새로운 data 할당, b의 identifer adress가 15의 주소를 가르킴
obj2.c = 20; // 20 새로운 data 할당, c의 identifer adress가 20의 주소를 가르킴


 