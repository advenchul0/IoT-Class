## 3-10 예제 정리

1. 3-10 코드 상에서 this 정리
    (1) outer의 this는 obj
    (2) innerFunc1의 this는 global(or window)
    (3) innerFunc1의 this는 obj(self == obj)
2. this는 함수를 어떻게 호출했는지에 따라 달라질 수 있음   
    (1) 내부 함수의 this를 외부함수와 일치시키고 싶으면, `var self = this`와 같이 호출시 this 저장하여 사용하기 
