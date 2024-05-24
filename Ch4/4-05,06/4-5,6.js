//4-5
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
      var mappedValue = callback.call(thisArg || window, this[i], i, this);
      mappedArr[i] = mappedValue;
    }
    return mappedArr;
  };
 
//4-6
  setTimeout(function() {
    console.log(this);
  }, 300); // (1) Window {window: Window, self: Window, document: #document, name: '', location: Location, …}

  
  [1, 2, 3, 4, 5].forEach(function(x) {
    console.log(this); // (2) (Window{...}) X 5

  });
  
  document.body.innerHTML += '<button id="a">클릭</button>';
  document.body.querySelector('#a').addEventListener(
    'click',
    function(e) {
      console.log(this, e); // (3) <button id="a">클릭</button>
    } // button#a PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

  );