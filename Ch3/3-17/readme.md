## 3-17 예제 정리

1. `array-like obeject`
    (1) array(`[]`)안에는 key와 length가 존재함
    (2) ['a', 'b', 'c', 'd'] &rarr; index 0, 1, 2, 3 = `'a', 'b', 'c', 'd'`, `length = 4`
    (3) object에는 length 정보가 기본적으로 없음
2. object에는 array method를 직접 적용할 수 없지만, call 사용하여 array 연산을 array-like obeject에 수행 가능
    (1) push는 this의 index와 length만 key로 존재하면 되므로, array-like obeject에 대해서고 연산 가능함
3.  `Array.prototype.slice.call(obj)` &rarr; array 변환 가능