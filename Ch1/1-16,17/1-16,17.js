var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null){
        for (var prop in target){
            result[prop] = copyObjectDeep(target[prop]); // deep copy  (target porb이 object 일 경우)
        }
    }
    else{
        result = target; // object 아닌 primitive type일 경우는 그대로 copy
    }
    return result; // 새로운 object의 주소를 return --> shallow copy
};  

var obj = {
    a : 1,
    b : {
        c : null,
        d : [1, 2]
    }
};

var obj2 = copyObjectDeep(obj);  

obj2.a  = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); //{ a: 1, b: { c: null, d: [ 1, 3 ] } }
console.log(obj2); //{ a: 3, b: { c: 4, d: { '0': 1, '1': 2 } } }

/*
deep copy를 통해서, object간 개별적인 변화를 저장할 수 있음
*/

  