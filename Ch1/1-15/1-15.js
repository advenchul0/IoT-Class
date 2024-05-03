var copyObject = function (target) {
    var result = {};
    for (var prop in target){
        result[prop] = target[prop];
    }
    return result; // 새로운 object의 주소를 return --> shallow copy
};  

var user = {
    name : 'Jaenam',
    urls : {
        portfolio : 'http://github.com/abc',
        blog : 'http://blog.com',
        facebook : 'http://facebook.com/abc'
    }
};    

var user2 = copyObject(user);
user2.urls = copyObject(user.urls) // deep copy를 통해 base object와 다른 새로운 object 생성

user.urls.portfolio = 'http://github.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user.urls.blog = ''; 
console.log(user.urls.blog === user2.urls.blog); // false


