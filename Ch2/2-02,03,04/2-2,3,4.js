//2-2
function a(x){

    console.log(x);  //1
    var x;
    console.log(x);  //1 (undefined가 아닌 1이 나옴)
    var x = 2;
    console.log(x);  //2
}

a(1);


//2-3
function a(){

    var x = 1;
    console.log(x);  //1
    var x;
    console.log(x);  //1 (undefined가 아닌 1이 나옴)
    var x = 2;
    console.log(x);  //2
}

a();

//2-4
function a(){

    var x;
    var x;
    var x;

    x = 1;
    console.log(x); //1
    console.log(x); //1
    x = 2;
    console.log(x); //2

}
a(1);
