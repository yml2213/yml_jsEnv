//放入环境, 可以先把 toString() 保护代码给拿过来
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
self = window;
self.window = window;

function proxy(obj, name) {
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            console.table([{
                'method': 'get',
                target: name,
                p: p,
                receiver: receiver,
                value: Reflect.get(target, p, receiver)
            }])
            return Reflect.get(target, p, receiver)
        },
        set: function (target, p, value, receiver) {
            console.table([{'method': 'set', target: name, p: p, value: value, receiver: receiver}])
            return Reflect.set(target, p, value, receiver)
        },
    })
};



//============
Window = function Window() {
};
Location = function Location() {
};
Navigator = function Navigator() {
};
Image = function Image() {
    console.log("Image", arguments)
};
document = {};
navigator = {};
location = {};

// document.createElement = function createElement(){
//     console.log("createElement创建了", arguments);
// }
Document = function Document(){}
// Object.defineProperty 直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
Object.defineProperty(Document.prototype,'createElement',{
    configurable: true,
    enumerable: true,
    value: function createElement(){},
    writable: true,
})
HTMLDocument = function HTMLDocument(){}
//可以将一个指定对象的原型（即内部的隐式原型属性）设置为另一个对象
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
document = new HTMLDocument()


// ==========================
// window = proxy(window, "window");
// self = proxy(self, "self");
document = proxy(document, "document");