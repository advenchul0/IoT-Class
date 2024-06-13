//5-1
var outer = function() {
    var a = 1;
    var inner = function() {
      console.log(++a);
    };
    inner();
};
outer();

//5-2
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner();
};
var outer2 = outer();
  console.log(outer2); // 2

//5-3
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner;
};
var outer2 = outer();
  console.log(outer2()); // 2
  console.log(outer2()); // 3  
