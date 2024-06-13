## 7-8,9 예제 정리


1. prototype chaining을 이용하여 class 형태 구현 (부모-자식 class)
2. `7-8`에서 도 아직은 `sq.construtor == Rectangle` (불완전한 class)
3. `7-8`에서 즉시 실행 함수 사용, Bridge는 closure 변수
4. Bridge가 SuperClass의 prototype을 가르킴
5. Bridge의 instance가 Sub Class의 prototype을 가르킴
6. sub method가 있으면 Sub Class의 prototype에 넣고 freeze(read-only)
7. `7-9`에서 도 아직은 `sq.construtor == Rectangle` (불완전한 class)
      &rarr; 이를 해결하기 위해 sub method에 sq의 constructor아 Square을 가리키도록 추가 해야함



