//4-1
var count = 0;
var timer = setInterval (function(){
    console.log(count);
    if (++count > 4) clearInterval(timer);
}, 300);

//4-2
var count = 0;
var cbFunc = function(){
    console.log(count);
    if (++count > 4) clearInterval(timer)
};
var timer = setInterval(cbFunc, 300);
