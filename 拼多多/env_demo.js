!(function () {
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const mytoString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };
    delete Function.prototype['toString'];
    set_native(Function.prototype, "toString", mytoString);
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");
    this.func_set_native = function (func) {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`)
    }
}).call(this);

window = this;
delete global;
let Window = function Window() {
};
window.__proto__ = Window.prototype;



document = {};
var HTMLDocument = function HTMLDocument() {
};
document.__proto__ = HTMLDocument.prototype;

location = {};
var Location = function Location() {
};
location.__proto__ = Location.prototype;



navigator = {};
var Navigator = function Navigator() {
};
navigator.__proto__ = Navigator.prototype;

history = {};
var History = function History() {
};
history.__proto__ = History.prototype;

screen = {
    availWidth: 2480,
    availHeight: 1104
}
var Screen = function Screen() {
};
screen.__proto__ = Screen.prototype;


localStorage = {};
var LocalStorage = function LocalStorage() {
};
localStorage.__proto__ = LocalStorage.prototype;

function get_proxy(obj){
    return new Proxy(obj,{
        get:function (target, p, receiver) {
            if ( p!=='Math'  && p!=='isNaN')
                console.table([{'method':'get',target:target,p:p,receiver:receiver,value:Reflect.get(target, p, receiver)}])
            return Reflect.get(target, p, receiver)
        },
        set:function (target, p, value,receiver){
            console.table([{'method':'set',target:target, p:p, value:value, receiver:receiver}])
            return Reflect.set(target, p, value, receiver)
        },
    });
}

window =get_proxy(window);
document =get_proxy(document);
location =get_proxy(location);
navigator =get_proxy(navigator);