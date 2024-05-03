## 3-12 예제 정리

1. javascript에서 function은 object임 (정보 덩어리로 이해)
    (1) function은 **다른 function의 argument로 전달**하여 사용 가능
    (2) 이때 전달된 function을 **callback function**이라고 함
2. callback function도 각자 this를 가지고 있음
    (1) callback function의 this는 "callback function를 arg로 받은 functuion의 this와 같음"
3. setTimeout, forEach, addEventListener와 같은 함수의 this를 알고 싶으면 manual를 살펴 봐야 함(프로그램 코드 상에서 바로 알 수 없음)
4. querySelector의 경우 특정 id를 가진 dom을 this로 지정 함('#a' &rarr; id = a 인 dom을 select)