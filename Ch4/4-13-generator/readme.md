## 4-13 예제 정리


1. generator를 사용하면 여러개의 값을 필요에 따라 하나씩 가져올 수 있음
2. function에 `*` 기입해서 generator function으로 사용
3. generator function은 generator(object)를 만듦 
4. generator method %rarr; next는 `value`, `done` property를 가지고 있는 object를 return
5. `for(let value of generator)` 는 `yield` 값에 대해서만 값을 출력
6. `next` 호출 시 인자를 입력하면 generator 안으로 값을 입력 (`yield` 좌측의 변수로)
7. `generat.next(4)` 호출 시, 현재 yield 위치에 4 입력 후, 다음 yield로 이동해 값 호출



