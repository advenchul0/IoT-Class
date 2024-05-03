## 3-9 예제 정리


1. function 안의 함수를 **내부 함수**라고 함
2. 3-9 코드 상에서 this 정리
    (1) outer의 this는 obj1
    (2) innerFunc의 thuis는 global(호출한 object 없으므로)
    (3) obj2.innerFunc의 this obj2