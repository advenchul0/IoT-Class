var obj = {
    outer: function(){
        console.log(this); //(1) { outer: [Function: outer] }
        var innerFunc1 = function(){
            console.log(this);
        };
        innerFunc1(); //(2)

        var self = this; // this가 obj 인 것이 중요  
        var innerFunc2 = function(){
            console.log(self);
        };
        innerFunc2(); //(3)
    }
};

obj.outer(); //outer의 this는 obj
