## 7-5,7 예제 정리


1. 예제 `7-5`에서, `rect`, `sq` 모두 상속 받은 클래스의 prototype 함수를 각 객체의 this 값을 이용하여 사용 가능
2. 예제 `7-7`에서, `Square.prototype = new Rectangle();`에서 Square의 prototype이 `Rectangle`의 인스턴스를 가르키게 됨
3. 하지만 `sq.constructor`를 호출하면, `square` 아닌 `rectangle` 나옴 (불완전한 상속) 


