//제너레이터 함수

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
} 

let generator = generateSequence();
alert(generator); // [object Generator]

let one = generator.next();
alert(JSON.stringify(one)); // {value:1, done: false}

let two = generator.next();
alert(JSON.stringify(two)); // {value:2, done: false}

let three = generator.next();
alert(JSON.stringify(three)); // {value:3, done: true}

let four = generator.next();
alert(JSON.stringify(four)); // {value: undefined, done: true}


function* gen() {
    let ask1 = yield "2 + 2 = ?";
    alert(ask1); // 4
    let ask2 = yield "3 * 3 = ?"
    alert(ask2); // 9
}
let generat = gen();
alert( generat.next().value ); // "2 + 2 = ?"
alert( generat.next(4).value ); // "3 * 3 = ?"
alert( generat.next(9).done ); // true

