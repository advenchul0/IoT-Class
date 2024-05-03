//3-1
console.log(this);
console.log(window);
console.log(this === window); //true (in 브라우저 환경)


//3-2
console.log(this);
console.log(global);
console.log(this === global); //true (in Nodejs 환경)

