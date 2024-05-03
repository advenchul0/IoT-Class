var copyObjectViaJSON =  function(target) {
    return JSON.parse(JSON.stringify(target));
};

var obj = {
    a : 1,
    b : {
        c : null,  
        d : [1, 2],
        func1 : function() {console.log(3);}
    },
    func2 : function () {console.log(4);}
};

var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // {a: 1, b: { c: null, d: [ 1, 3 ], func1: [Function: func1] },func2: [Function: func2]}
console.log(obj2); //{ a: 3, b: { c: 4, d: [ 1, 2 ] } }

/*
(1) JSON.stringify으로 문자열로 바꿨다가, JSON.parse로 다시 string object를 object로 변경하면 deep copy 가능
(2) 이 방법은 "function", "__proto__", "getter/setter" 등에 대해서 적용 불가
    (순수 데이터만 적용 가능,적용 불가 property 제외하고 copy가 이루어짐)
*/