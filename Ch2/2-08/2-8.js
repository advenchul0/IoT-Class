function a () {/*...*/} // 함수 선언문
a();

var b = function() {/*...*/} // (익명) 함수 표현식
b();

var c = function d() {/*...*/} // 기명 함수 표현식
c();
d();  // Uncaught ReferenceError ReferenceError: d is not defined

