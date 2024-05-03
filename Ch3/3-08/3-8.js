var obj = {
    methodA : function(){ console.log(this); },
    inner: {
        methodB : function(){ console.log(this); }
    } 
};

obj.methodA(); // {methodA: [Function: methodA], inner: { methodB: [Function: methodB] }}
obj['methodA'](); // {methodA: [Function: methodA], inner: { methodB: [Function: methodB] }} 

obj.inner.methodB(); // { methodB: [Function: methodB] }
obj.inner['methodB'](); // { methodB: [Function: methodB] }
obj['inner'].methodB(); // { methodB: [Function: methodB] }
obj['inner']['methodB'](); // { methodB: [Function: methodB] }