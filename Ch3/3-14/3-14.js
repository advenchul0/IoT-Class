var func = function (a, b, c) {
    console.log(this, a, b, c);
};
console.log(func);

func(1, 2, 3); // Window {window: Window, self: Window, document: #document, name: '', location: Location, …} 1 2 3
func.call({x: 1}, 4, 5, 6); // {x: 1} 4 5 6