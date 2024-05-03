var a = 'abc'; 
a = a + 'def'; // 문자열은 불변값이므로, 'abc'를 그대로 두고 새로운 데이터 영역에 'abcdef' 할당

var b = 5;
var c = 5; // c identifier가 5를 새로 만들지 않고, data 영역에 5가 있으면 b와 같은 데이터 영역을 가르킴
b = 7; // b는 새로운 데이터 7의 주소를 가르킴

