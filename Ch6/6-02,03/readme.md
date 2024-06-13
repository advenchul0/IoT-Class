## 6-2,3 예제 정리

1. **삼각형**으로 기억 &rarr; constractor, prototype, instace의 관계 이해 
2. 모든 instace에는 `__proto__` 존재
3. `예제 6-1`에서 __proto__는 `Person`의 prototype을 가리킴
4. `suzi.__proto__.getName()' // undefined
5. `suzi.getName()' //Suzi 
6. 5번 처럼 getName()을 사용해도 앞쪽에 `__proto__`가 생략 된것처럼 호출
   (this를 가져올때는 __proto__)

