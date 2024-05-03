setTimeout(function() {console.log(this);}, 300);

[1,2,3,4,5].forEach(function(x) {
        console.log(this,x); // (1)
});

document.body.innerHTML += '<button id= "a">클릭</button>'; //dom
document.body.querySelector('#a') //dom elemnet selector, id = a 인 dom을 this로 설정
    .addEventListener('click', function(e){
    console.log(this, e); // (2)
});
