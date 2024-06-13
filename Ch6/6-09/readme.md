## 6-9 예제 정리

1. hasOwnProperty() : 해당 obejct가 ()안의 값에 해당하는 prop(key)를 가지고 있는지 boolean 반환
2. getEntries : this의 key와 value를 사용하여 array 만듦
      &rarr; `[[k0, v0], [k1, v1], [k2, v2]...]`
3. `6-9` 예제 처럼 모든 proto는 obejct.proto로 가게되므로, this 종류에 상관없이 모두 호출됨
      &rarr; object의 `static method`를 활용하면 error 출력되도록 사용 가능    
4. object constructor 안의 method를 static method 라고 함(협의된 인스턴스에 대한 함수 넣어두기)     
5. 코드 작성시 object.portotype에는 instance 종류와 상관없는 함수만 넣어두기

