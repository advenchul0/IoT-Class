## 2-13 예제 정리

1. identifier에 대해서 **scpoe**, **lifetime**을 고려해야함
    - scope : identifier가 read, write 가능한 유효범위
    - life time : identifier가 생성되고 소멸하는 기간 (**call-stack**)
2. context (hoisting)
    (1) global context : 외부 - null, 내부 - var a, var outer
    (2) execution : a = 1, outer = func1 (1,func1는 **heap 영역**에 저장)
    (3) outer 실행 (outer())
    (4) outer context : 외부 - global context, 내부 - var inner
    (2) execution : inner = func2
    (5) inner 실행 (inner())
    (6) inner context : 외부 - outer context, 내부 - var a
    (7) console.log(a) &rarr; undefined, var a = 3
    (8) inner context pop
    (9) console.log(a) = 1 &rarr; 내부(outer context에 없으므로 **외부에서 찾음**)
    (10) outer context pop
    (11) console.log(a) = 1
    (12) global context pop
3. scope chain &rarr; 변수를 찾을 때까지, context를 외부에서 찾는 chain
4. life time &rarr; context가 생성되고 pop 될 때 까지의 시간



