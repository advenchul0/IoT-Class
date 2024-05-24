## 4-5,6 예제 정리

1. setTimeout의 callback this는 `window`
2. forEach의 callback this는 `window`
3. `addEventListener` 는 web에서 click이라는 input이 들어오면, callback 함수 수행
4. `document.body.querySelector('#a')` 에서 `#`는 tag (id), **즉 a라는 id를 가진 HTML element를 return 하라는 의미** &rarr; 위해서 해당 element는 butbutton id="a"ton id="a"
5. addEventListener callback function의 this는 addEventListener 자신의 this로 설정되어 있음 (button#a PointerEvent)