## 1-21 예제 정리

1. undefined는 **elemnet**로 취급되어, 코드에 혼란을 줄 수 있음 (null 사용)
2. 배열을 순회 하는 아래의 4개의 함수 존재
    - forEach : for loop 함수를 arr에 적용, `v= arr[i]`, `i = index`
      (undefined를 인식하지만 값은 없음)
    - map : new array 제작, `new_arr[i] = "return value"`
      (undefined + 0 = NaN)
    - filter : new array 제작(함수에 조건 따른 elemnet filtering)
      (!v &rarr; value가 없다면 남김)
    - educe(transform을 의미), `p` &larr; `p + array[i] + i`
      (`p` --> **initial value**, `c = array[i]`, `i = index`)
      (p는 초기값(위 코드에서는 `''`로 줌) --> string으로 더함)
      (string으로 p를 계속 recurrnet하게 사용)

