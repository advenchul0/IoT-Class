var func = function(x) {

    console.log(this, x);

};
func(1); // Window {window: Window, self: Window, document: #document, name: '', location: Location, …} 1

var obj = {
    method : func
};

obj.method(2); // {method: ƒ} 2