function watch(obj, name) {
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            if (p === 'crypto') {
                // 返回crypto对象, 避免代理
                let val = target[p];
                console.log("取值:", name, ".", p, "===>", target[p]);
                return val;
            } else if (p === 'Math' || p === 'isNaN' || p === 'encodeURL' || p === 'Uint8Array' || p.toString().indexOf("Symbol(Symbol.") !== -1) {
                return Reflect.get.apply(Reflect, arguments);
            } else {
                let val = Reflect.get.apply(Reflect, arguments);
                console.log("取值:", name, ".", p, "===>", val);
                return val;
            }
        },
        set: function (target, p, value, receiver) {
            if (name === "localStorage" || name === "sessionStorage") {
                localStorage.setItem(p, value);
            }
            let val = Reflect.get.apply(Reflect, arguments);
            console.log(`设置值: ${name}.${p}, ${val} ===> ${target[p]}`);
            return Reflect.set(...arguments);
        },
    });
}

function watch2(obj, name) {
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            if (p === 'crypto') {
                // 返回crypto对象, 避免代理
                let val = target[p];
                // console.log("取值:", name, ".", p, "===>", target[p]);
                return val;
            } else if (p === 'Math' || p === 'isNaN' || p === 'encodeURL' || p === 'Uint8Array' || p.toString().indexOf("Symbol(Symbol.") !== -1) {
                return Reflect.get.apply(Reflect, arguments);
            } else {
                let val = Reflect.get.apply(Reflect, arguments);
                // console.log("取值:", name, ".", p, "===>", val);
                return val;
            }
        },
        set: function (target, p, value, receiver) {
            if (name === "localStorage" || name === "sessionStorage") {
                localStorage.setItem(p, value);
            }
            let val = Reflect.get.apply(Reflect, arguments);
            // console.log(`设置值: ${name}.${p}, ${val} ===> ${target[p]}`);
            return Reflect.set(...arguments);
        },
    });
}


function watch2(obj, name) {
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

delete __dirname;
delete __filename;
delete Buffer;

setTimeout = function () {
};
setInterval = function () {
};
window = globalThis;

window.external = watch({}, "window.external")
window.NECaptcha = watch({}, "window.NECaptcha")

window.addEventListener = function () {
}

Audio = function () {
    console.log(arguments)
}
watch(Audio, "Audio")

window.CanvasRenderingContext2D = watch(function () {
    // debugger;
    console.log(arguments)
}, "window_CanvasRenderingContext2D")

window.getComputedStyle = watch(function () {
    getPropertyValue:watch(function () {
        debugger;
    }, "window_getComputedStyle_getPropertyValue")
    // debugger;
}, "window_getComputedStyle")

openDatabase = watch({}, "window_openDatabase ")


HTMLDivElement = function HTMLDivElement() {
    this.style = {
        color: ''
    };
    this.style = watch(this.style, "this.style");
    this.addEventListener = watch(function () {
        console.log(arguments)
        test:undefined;

    }, "div 的 this.addEventListener");
    this.getAttribute = watch(function () {
        console.log(arguments);
        this.className = watch(function () {
            console.log(arguments);
        }, "div 的 this.getAttribute--className");
    }, "div 的 this.getAttribute");
};


HTMLIFrameElement = function HTMLIFrameElement() {
    this.style = {
        display: '',
    };
    this.style = watch(this.style, "iframe 的 this.style");
    this.setAttribute = watch(function () {
        console.log(` this.setAttribute-----`);
        console.log(arguments);
    }, "iframe 的 this.setAttribute");
    this.contentWindow = window;
};


document = {
    body: watch({
        addBehavior: watch({}, "document.body_addBehavior"),
        appendChild: watch(function () {
            console.log(`document.body_appendChild=====> ${arguments}`)
            console.log(arguments)
        }, "document.body_appendChild"),
    }, "document.body"),
    createElement: function createElement(tag_name) {
        console.log("创建标签===>", tag_name);
        console.log(arguments)
        if (tag_name.toLocaleLowerCase() === "canvas") {
            return watch({
                getContext: watch(function () {
                    // console.log(arguments)
                }, "创建的canvas_getContext ===>")
            }, "创建的canvas===>")

        }
        if (tag_name.toLocaleLowerCase() === "div") {
            // debugger;
            let div = new HTMLDivElement();  // 只要是对象，我们就需要挂上代理
            div = watch(div, "创建的div--->");
            return div
        } else if (tag_name.toLocaleLowerCase() === "iframe") {
            // debugger;
            let iframe = new HTMLIFrameElement();  // 只要是对象，我们就需要挂上代理
            iframe = watch(iframe, "创建的 iframe --->");
            return iframe
        } else {
            return watch({
                getElementsByTagName: function () {
                    return []
                },
                setAttribute: watch(function () {

                }, "document.createElement.setAttribute")
            }, "document.createElement")
        }


    },
    createEvent: watch(function () {
    }, "document_createEvent"),

    getElementsByTagName: function (tag_name) {
        console.log("获取标签===>", tag_name);
        if (tag_name === "meta") {
            return watch(meta, "getElementsByTagName('meta')")
        } else if (tag_name === "base") {
            return []
        } else if (tag_name === "script") {
            return watch({
                length: 1,
                0: watch({
                    getAttribute: function () {
                    },
                }, 'script_0')
            }, "getElementsByTagName('script')")
        }
    },
    getElementById: function () {
    },
    documentElement: watch({
        style: {},
        attachEvent: function () {
        },
        addEventListener: function () {
        },
        getAttribute: watch(function () {
        }, "document_documentElement.getAttribute"),
    }, "document.documentElement"),
    attachEvent: function () {
    },
    addEventListener: function () {
    },
    cookie: '',
    compatMode: "CSS1Compat",


}

location = {
    "href": "https://dun.163.com/trial/jigsaw",
    "origin": "https://dun.163.com",
    "protocol": "https:",
    "host": "dun.163.com",
    "hostname": "dun.163.com",
    "port": "",
    "pathname": "/trial/jigsaw",
    "search": "",
    "hash": ""
}
navigator = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Google Inc.",
    "maxTouchPoints": 0,
    "pdfViewerEnabled": true,
    "hardwareConcurrency": 12,
    "cookieEnabled": true,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "platform": "Win32",
    "product": "Gecko",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "language": "zh-CN",
    "languages": ["zh-CN", "zh", "fr", "de", "en"],
    "onLine": true,
    "webdriver": false,
    "deprecatedRunAdAuctionEnforcesKAnonymity": false,
    "deviceMemory": 8,
    "doNotTrack": null,
    "cpuClass": undefined,
    plugins: watch({
        length: 0
    }, "navigator_plugins ====>")

}


history = {};
screen = {
    colorDepth: 24,
    height: 1152,
    width: 2048,
};
sessionStorage = {};
localStorage = {};
indexedDB = function () {
    console.log(arguments)
};


top = window;
parent = window;
self = window;

window = watch(window, "window")
document = watch(document, "document")
location = watch(location, "location")
navigator = watch(navigator, "navigator")
history = watch(history, "history")
screen = watch(screen, "screen")
sessionStorage = watch(sessionStorage, "sessionStorage")
localStorage = watch(localStorage, "localStorage")
indexedDB = watch(indexedDB, "indexedDB")