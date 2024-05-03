//2-5
function a(){
    console.log(b); //[Function: b]
    var b = 'bbb';
    console.log(b); //bbb
    function b () {}
    console.log(b); //bbb
}
a();

//2-6
function a(){

    var b;
    function b () {}
    console.log(b); //[Function: b]

    b = 'bbb';
    console.log(b); //bbb
    console.log(b); //bbb
}
a();

//2-7
function a(){

    var b;
    var b = function b () {}  // 함수 선언문을 함수 표현식으로 변경한 부분
    console.log(b); //[Function: b]

    b = 'bbb';
    console.log(b); //bbb
    console.log(b); //bbb
}
a();