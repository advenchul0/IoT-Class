var obj = {
    outer: function(){
        console.log(this);  // { outer: [Function: outer] } --> obj
        var innerFunc = () =>{
            console.log(this); // { outer: [Function: outer] } --> obj
        };
        innerFunc();
    }
};
obj.outer();


