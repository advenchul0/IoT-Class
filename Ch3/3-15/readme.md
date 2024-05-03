## 3-15 예제 정리

1. this.a
    (1) obj.method에서 `this a` = `obj.a = 1`
    (2) obj.method.call({a:4}, 5, 6)에서, `this a`는 의미적으로 `{a:4}.a = 4`