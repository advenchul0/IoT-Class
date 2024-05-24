 // 원점에서 시작하는 프로미스

const p =  new Promise((resolve, reject) => {
    resolve("foo");
    
    reject(new Error("bar"));
});

/*
1. `resolve`, `reject`는 promise의 callback function
2. promise의 state는 `fulfilled`, `rejected`, `pending` 중 한가지
3. promise는 자신의 값 `value`를 가짐
4. promise의 staterk `pending` 일 경우, `resolve`, `reject` 가 동작 함
5. promise 처음 만들어지면 초기 state는 `pending`
6. `resolve` &rarr; `fulfilled`로 바꾸고 값 추가
7. `reject` &rarr; `rejected`로 바꾸고 값 추가
*/

const originalError = new Error("Oops!");
const p =  new Promise((_, reject) => reject(originalError))
    .then(() => console.log("This will not print"))
    .then(() => console.log("Nor will this"))

    .catch((err) => asserts.ok(err === originalError));
/*
1. `then` &rarr; 상태(`fulfilled`, `rejected`)에 따라 함수 실행 후 상태 `pending`으로 만들고 value 값 업데이트
2. 이후 `pending` 일 경우에는 두 함수를 `chained` array 에 넣음
3. reslve, reject는 value 추가 이후에, 각각 `chained`의 모든 `Onfulfilled`, `Onrejected` 차례대로 수행
4. catch &rarr; `rejected` 상태 일때 `Onrejected` 함수 실행
5. `finally` 마지막에 항상 실행
*/ 
 

 // 비동기 처리 1부 - callback

function findUserAndCallBack(id, cb) {     // API 작성자
    const user = {
    id: id,
    name: "User" + id, 
    email: id + "@test.com",
    }
    cb(user)
}

findUserAndCallBack(1, function (user) {   // API 사용자
    console.log("user:", user)
})

/*
1. API 작성자(**사물 인터넷 사업자**)는 CB이 어떤건지는 상관하지 않고, USER 객체 만든 뒤 CB을 call만 해줌
2. API 사용자가 CB를 만들어서 사용해야 함
*/



function findUser(id) {
    let user
    setTimeout(function () {
    console.log("waited 0.1 sec.")
    user = {
    id: id,
    name: "User" + id,
    email: id + "@test.com",
    }
    }, 100)
    return user
}
const user = findUser(1)
console.log("user:", user)

//user: undefined
//waited 0.1 sec.  (상품화로는 부족한 코드)

/*
1. setTimeout이 비동기 simulator 역할 
2. 위 예제에서 100ms 후에, Web API에서 micro Q에 CB에 넣어줌
*/

function findUserAndCallBack(id, cb) {
    setTimeout(function () {
    console.log("waited 0.1 sec.")
    const user = {
    id: id,
    name: "User" + id,
    email: id + "@test.com",
    }
    cb(user)
    }, 100)
}
findUserAndCallBack(1, function (user) {
    console.log("user:", user)
})

//waited 0.1 sec.
//user: {id: 1, name: "User1", email: "1@test.com"}


/*
1. 위 처럼 doc에 사용자를 위한 인자들을 설명 &rarr; 유저는 정보를 이용하여 CB 작성하여 활용
2. 최근에는 콜백 함수를 인자로 넘겨서 비동기 처리하는 방식이 지양되는 추세
3. 콜백을 중첩해서 사용하면 콜백 지옥(가독성 떨어짐) &rarr; `Primise`, `async/await` 사용 권장
*/



 // 비동기 처리 2부 - Promise

findUser(1).then(function (user) {                 // API 사용자
    console.log("user:", user)                  
})

function findUser(id) {                            // API 작성자
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("waited 0.1 sec.")
            const user = {
                id: id,
                name: "User" + id,
                email: id + "@test.com",
                }
                resolve(user)
        }, 100)
    })
}


/*
1. Promise 인스턴를 API 작성자가 만들어 줘야함
2. then %rarr; resolve의 data를 callback function에 argument로 넣어줌
3. Promise를 이용하여 동기인 JavacScript에서 비동기 작동이 가능해짐
*/


function devide(numA, numB) {                                              // API 작성자
    return new Promise((resolve, reject) => {
    if (numB === 0) reject(new Error("Unable to devide by 0."))
    else resolve(numA / numB)
    })
}   

devide(8, 2)                                                               // API 사용자
 .then((result) => console.log("성공:", result))
 .catch((error) => console.log("실패:", error))



 fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => console.log("response:", response))
 .catch((error) => console.log("error:", error))

/*
1. `fetch`에서, `https://jsonplaceholder.typicode.com`는 **서버**, `posts/1`는 **명령어**
2. `fetch`는 `micro Q` &harr; `call stack` 하면서 resolve, reject 들어올때 까지 반복
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => response.json())
 .then((post) => console.log("post:", post))
 .catch((error) => console.log("error:", error))

/*
1. `json` &rarr; `{key : value}` 형태의 object로 변경하고 Promise 인스턴트 제작
2. 위 코드에서 post를 확인해 보면 json 형태로 변경된 것 확인 가능
*/


fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => response.json())
 .then((post) => post.userId)
 .then((userId) => "https://jsonplaceholder.typicode.com/users/" + userId)
 .then((url) => fetch(url))
 .then((response) => response.json())
 .then((user) => console.log("user:", user))
 .catch((error) => console.log("error:", error))

/*
1. 위와 같이 Promise를 사용하면, 간결한 코드로 시간 지연이 존재해도 원하는 결과 얻을 수 있음  
2. 타이밍을 코드 작성자가 고려할 필요 없다는 것이 장점 (비동기 실행)
3. 그렇지만 `async/await` 더 좋은 방식임
*/


// 비동기 처리 3부 - async/await


async function fetchAuthorName(postId) {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();
    const userId = post.userId;
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();
    return user.name;
 }

fetchAuthorName(1).then((name) => console.log("name:", name));



/*
1. `c++`, `c#` 등의 high level 언어에서도 채택되는 방식(가장 간편한 비동기 처리)
2. Promise instnace가 return 되는 function 호출부 앞에 `await`를 붙이면 return 받기전까지 다음 줄로 넘어가지 않음
3. `async` 가 return 하는 값은 Promise instnace
4. `async` function 안에서만 `await`가 작동함
*/



async function fetchAuthorName(postId) {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();
    const userId = post.userId;

    try {
      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await userResponse.json();
      return user.name;
    } catch (err) {
      console.log("Faile to fetch user:", err);
      return "Unknown";
    }
}

fetchAuthorName(1).then((name) => console.log("name:", name));

/*
1. `try`, `catch`를 활용하여 에러 발생 여부 확인하고 싶은 부분의 에러 메세지 확인 가능
*/
