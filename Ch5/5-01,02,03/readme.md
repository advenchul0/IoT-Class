## 5-1,2,3 예제 정리

1. `closure` 란 어떤 함수가 외부의 변수를 참조하는 것을 의미
2. 참조되는 외부 변수는 `closure variable` 
3. **모든 JS function**은 선언되면서 closure가 형성되고, closure 환경은 외부 함수가 사라져도 남아 기억됨 (참조하는 closure가 남아있다면)
4. `5-3` 예제에서 outer에 대한 call-stack에서 사라져도 내부 변수인 a 값은 참조 되고 았으므로, `a`는 사라지지 않음



