## 3-22, 23, 24 예제 정리


1. apply 활용 &rarr; 여러개의 인수를 하나의 배열로 전달 하고 싶은 경우
    (1) `3-22` 와 같이 직접 코드를 작성하는 방법도 있음

2. `3-23`처럼, `Math.max`/`Math.min`을 method를 활용해도 `3-22`와 같은 동작
    (1)`var max =Math.max(10, 20, 3, 16, 45)` &rarr; `var max =Math.max.apply(null,numbers)로 배열 인풋 받도록 수정 가능
    (2) Math.max method는 this를 사용하지 않으므로 임의의 this 넣어도 상관 없음(null)

3. `...`(spread operation)을 이용하여 array인자들을 풀어서 사용 가능
    (1) `Math.max` apply 사용없이 바로 사용 가능(ES6)
    (2) 변수에 그 값을 spread 값을 저장할 수 없고, **인자를 펼칠때 사용**
