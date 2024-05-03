var user = {
    name : 'Jaenam',
    gender : 'male'
};

// var changeName = function (user, newName){
//     var newUser = user;  // newUser가 user object를 가르킴
//     newUser.name = newName; // proerty를 직접 건드렸으므로 기존 data 변함
//     return newUser; // newUser이 가르키는 주소(user의 reference type data 주소 --> pointer)
// };   

var changeName = function (user, newName){
    return{
        name : newName,
        gender : user.gender
    };  // 새로 만들어진 object의 주소를 return 하므로, 기존 object는 그대로 유지
};

var user2 = changeName(user, 'Jung');

if (user !== user2){
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
};   
console.log(user.name, user2.name); // Jaenam,Jung
console.log(user == user2); // false
