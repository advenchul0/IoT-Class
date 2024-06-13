## 6-6,7,8 예제 정리

1. console.log(iu.__proto__.getName.call(iu));
      &rarr; 이렇게 call method를 활용해서 this를 iu 지정 가능
2. prototype chain : 호출 method가 없으면 proto chain을 따라서 올라가면서 매소드를 찾음
3. `tostring` : object의 this가 어떤 class 인자 인지 출력

