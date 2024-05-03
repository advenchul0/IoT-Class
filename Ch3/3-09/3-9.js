var obj1 = {
    outer: function(){
        console.log(this);
        var innerFunc = function(){
            console.log(this);
            }
        innerFunc(); //(2)

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod(); //(3)

    }
};

obj1.outer(); //(1)


