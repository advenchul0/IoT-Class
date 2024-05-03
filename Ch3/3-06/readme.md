## 3-6 예제 정리

1. 첫번째 func(1)에서, func는 function으로 호출
2. 두번째, obj.method(2)에서 사용된 func는 obj의 method 임
    (1) func 자체는 global하게 선언되어 있지만, func 특정 object의 method로 사용될 수 있음
3. 함수로 선언되었을 경우의 this는 window(or global)  {window: Window, …}
4. method로 선언되었을 경우의 this는 object {method: ƒ}
5. 함수 앞에 점(.)이 있으면 .앞의 object가 this가 된다고 판단하면 됨

 