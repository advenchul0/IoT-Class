## 3-18 예제 정리

1. `document.body.innerHTML= '<div>a</div><div>b</div><div>c</div>'` 해석
    (1) document 안에 body가 들어있음
       &rarr; <body> ... </body> 
    (2) innerHTML는 body tag 안에 `<div>a</div><div>b</div><div>c</div>`를 집어 넣는 의미

2. `document.querySelectorAll('div')` 해석
    (1) document 안의 모든 'div' 찾기
    (2) length 까지 추가로 만듦 &rarr; array-like object

3. Array.prototype.slice.call(nodeList)로 array 만들기
    (1) 0  &rarr; `<div>a</div>`
    (2) 1  &rarr; `<div>a</div>`
    (3) 2  &rarr; `<div>a</div>`
    (4) length  &rarr; `3` (array-like object 이므로 slice 사용 가능)