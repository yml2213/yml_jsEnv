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
delete Buffer;

let Window = function Window() {
};
window.__proto__ = Window.prototype;
window.outerHeight = 1920;
window.chrome = function chrome() {
    console.log(arguments);
    debugger;
}
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    console.log(arguments);
}
window.DeviceMotionEvent = function DeviceMotionEvent() {
    console.log(arguments);
}

setTimeout = function () {
    console.log(arguments)
}
setInterval = function () {
    console.log(arguments)
}



document = {
    getElementById: function getElementById() {
        console.log(arguments);
    },
    addEventListener: function addEventListener() {
        console.log(arguments);
    },
    documentElement: function documentElement() {
        console.log(arguments);
    },
    body: function body() {
        console.log(arguments);
    },
    cookie: "api_uid=Ck3IEmb413kSBAChlV0/Ag==; _nano_fp=XpmxnqdJn0galpdono_U6JQO6_mVJXdrcPlXwTfr; webp=1; dilx=vKygKxWKuQIpNHTt8vdQl; pdd_vds=gaLLNOPtaLLoiyOEQbiibQoaLPPbbGEaayniGtQaOLniNGOLOiLtyOQaEbLb; jrpl=LjuzRAAy4gZcvffCUYa6KuYelmG7jUrY; njrpl=LjuzRAAy4gZcvffCUYa6KuYelmG7jUrY",
    visibilityState:"visible",

};
var HTMLDocument = function HTMLDocument() {
    console.log(arguments);
};
document.__proto__ = HTMLDocument.prototype;

location = {
    href: "https://mobile.pinduoduo.com/login.html?from=https%3A%2F%2Fmobile.pinduoduo.com%2Fpersonal.html%3Frefer_page_name%3Dlive_tab%26refer_page_id%3D71837_1727584216835_mhuyi1fcmp%26refer_page_sn%3D71837&refer_page_name=personal&refer_page_id=10001_1727584226531_tglxzd6ec6&refer_page_sn=10001",
    port: "",

};
var Location = function Location() {
};
location.__proto__ = Location.prototype;



navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",

};
var Navigator = function Navigator() {
};
navigator.__proto__ = Navigator.prototype;

hasOwnProperty_ = Object.hasOwnProperty;
Object.hasOwnProperty = function () {
    debugger;
    return hasOwnProperty_()
}




history = {};
var History = function History() {
};
history.__proto__ = History.prototype;
history.__proto__.back = function back() {
    console.log(arguments);
    debugger;
}
history.__proto__.back = func_set_native(history.__proto__.back);



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

function get_proxy(obj) {
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            if (p !== 'Math' && p !== 'isNaN')
                console.table([{
                    'method': 'get',
                    target: target,
                    p: p,
                    receiver: receiver,
                    value: Reflect.get(target, p, receiver)
                }])
            return Reflect.get(target, p, receiver)
        },
        set: function (target, p, value, receiver) {
            console.table([{'method': 'set', target: target, p: p, value: value, receiver: receiver}])
            return Reflect.set(target, p, value, receiver)
        },
    });
}

window = get_proxy(window);
document = get_proxy(document);
location = get_proxy(location);
navigator = get_proxy(navigator);