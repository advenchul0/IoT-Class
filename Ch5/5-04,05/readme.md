## 5-4,5 예제 정리

1. `5-4 (1)`는 즉시 실행 함수 (함수명 없음)
2. 함수를 정의하고 바로 실행하고 싶으면 함수 정의를 `()`로 감싸고 나서 실행 `();` 해야 함
3. `setInterval` 은 인자로 받은 함수를 특정 시간마다 반복적으로 실행되도록 등록하는 역할을 함 
4. `clearInterval(intervalId)`을 이용하여 반복 실행되는 등록을 취소 할 수 있음
5. `5-5 (1)` 처럼 `outer()`의 `inner` 함수 참조를 null로 변경해서 끊으면 a 값은 GC 됨
6. `5-5 (2)` 처럼 `clearInterval(intervalId)` 조건을 만족할 때 `inner` 함수 참조를 null로 변경하면 closure 변수 GC 됨
7. `5-5 (3)` 처럼 제거 조건에서 `clickHandler = null;`로 바꿔서 reference count를 0으로 만들어 줌


