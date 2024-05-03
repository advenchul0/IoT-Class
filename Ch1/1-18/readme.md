## 1-18 예제 정리

1. JSON.stringify으로 문자열로 바꿨다가, JSON.parse로 다시 string object를 object로 변경하면 deep copy 가능
2. 이 방법은 `function`, `__proto__`, `getter/setter` 등에 대해서 적용 불가
(순수 데이터만 적용 가능,적용 불가 property 제외하고 copy가 이루어짐)

