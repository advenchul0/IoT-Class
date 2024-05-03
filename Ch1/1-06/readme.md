## 1-6 예제 정리

1. `idenfitifer a`는 변수영역 메모리의 주소를 가르킴
1. 위 코드에서 identifier는 obj, 1, arr, 0,1,2(array index) -5개
2. primitive data는 3,4,5 - 3개 (3은 공동으로 1개만 있음)
3. arr identifer는 **0, 1, 2라는 identifer를 가리키는 주소**를 가짐
4. 0, 1, 2는 primitive type이 아님
5. `obj.arr = 'str'`하게 되면, str은 새로운 data 영역에 할당 되고,
    0, 1, 2 index를 더 이상 참조하는 데이터가 없어지므로, garbage collection 되어 사라짐
6. **identifer**와 **refernece data type**은 garbage collection 됨
7. **primitive data type은 garbage collection 대상이 아님**

