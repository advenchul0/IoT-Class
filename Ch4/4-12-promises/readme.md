## 4-12 Promise

1. `resolve`, `reject`는 promise의 callback function
2. promise의 state는 `fulfilled`, `rejected`, `pending` 중 한가지
3. promise는 자신의 값 `value`를 가짐
4. promise의 staterk `pending` 일 경우, `resolve`, `reject` 가 동작 함
5. promise 처음 만들어지면 초기 state는 `pending`
6. `resolve` &rarr; `fulfilled`로 바꾸고 값 추가
7. `reject` &rarr; `rejected`로 바꾸고 값 추가
8. `then` &rarr; 상태(`fulfilled`, `rejected`)에 따라 함수 실행 후 상태 `pending`으로 만들고 value 값 업데이트
9. 이후 `pending` 일 경우에는 두 함수를 `chained` array 에 넣음
10. reslve, reject는 value 추가 이후에, 각각 `chained`의 모든 `Onfulfilled`, `Onrejected` 차례대로 수행
11. catch &rarr; `rejected` 상태 일때 `Onrejected` 함수 실행
12. `finally` 마지막에 항상 실행


## 4-12 Callback 비동기

1. API 작성자(**사물 인터넷 사업자**)는 CB이 어떤건지는 상관하지 않고, USER 객체 만든 뒤 CB을 call만 해줌
2. API 사용자가 CB를 만들어서 사용해야 함
3. setTimeout이 비동기 simulator 역할 
4. 위 예제에서 100ms 후에, Web API에서 micro Q에 CB에 넣어줌
5. 위 처럼 doc에 사용자를 위한 인자들을 설명 &rarr; 유저는 정보를 이용하여 CB 작성하여 활용
6. 최근에는 콜백 함수를 인자로 넘겨서 비동기 처리하는 방식이 지양되는 추세
7. 콜백을 중첩해서 사용하면 콜백 지옥(가독성 떨어짐) &rarr; `Primise`, `async/await` 사용 권장


## 4-12 Promise 비동기

1. Promise 인스턴를 API 작성자가 만들어 줘야함
2. then %rarr; resolve의 data를 callback function에 argument로 넣어줌
3. Promise를 이용하여 동기인 JavacScript에서 비동기 작동이 가능해짐
4. `fetch`에서, `https://jsonplaceholder.typicode.com`는 **서버**, `posts/1`는 **명령어**
5. `fetch`는 `micro Q` &harr; `call stack` 하면서 resolve, reject 들어올때 까지 반복
6. `json` &rarr; `{key : value}` 형태의 object로 변경하고 Promise 인스턴트 제작
7. 위 코드에서 post를 확인해 보면 json 형태로 변경된 것 확인 가능
8. 위와 같이 Promise를 사용하면, 간결한 코드로 시간 지연이 존재해도 원하는 결과 얻을 수 있음  
9. 타이밍을 코드 작성자가 고려할 필요 없다는 것이 장점 (비동기 실행)
10. 그렇지만 `async/await` 더 좋은 방식임


## 4-12 async/await 비동기

1. `c++`, `c#` 등의 high level 언어에서도 채택되는 방식(가장 간편한 비동기 처리)
2. Promise instnace가 return 되는 function 호출부 앞에 `await`를 붙이면 return 받기전까지 다음 줄로 넘어가지 않음
3. `async` 가 return 하는 값은 Promise instnace
4. `async` function 안에서만 `await`가 작동함
5. `try`, `catch`를 활용하여 에러 발생 여부 확인하고 싶은 부분의 에러 메세지 확인 가능