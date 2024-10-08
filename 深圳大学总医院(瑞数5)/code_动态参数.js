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

delete __dirname;
delete __filename;

setTimeout = function () {
};
setInterval = function () {
};
window = globalThis;

window.attachEvent = function () {
}

window.addEventListener = function () {
}


meta = {
    length: 2,
    1: watch({
        content: '$$content$$',
        parentNode: watch({
            removeChild: function () {
            }
        }, "meta_1_parentNode")
    }, "meta_1")
}

document = {
    createElement: function createElement(tag_name) {
        console.log("创建标签===>", tag_name);
        return watch({
            getElementsByTagName: function () {
                return []
            }
        }, "document_createElement")

    },
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
    }, "document_documentElement"),
    attachEvent: function () {
    },
    addEventListener: function () {
    },
    cookie: '',





}

location = {
    "ancestorOrigins": {},
    "href": "https://sugh.szu.edu.cn/Html/News/Main/102.html",
    "origin": "https://sugh.szu.edu.cn",
    "protocol": "https:",
    "host": "sugh.szu.edu.cn",
    "hostname": "sugh.szu.edu.cn",
    "port": "",
    "pathname": "/Html/News/Main/102.html",
    "search": "",
    "hash": ""
}
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
    languages: ["zh-CN", "en", "en-GB", "en-US"],
    mimeTypes: {
        "0": {},
        "1": {}
    }

}

top = window;
self = window;

// window = watch(window, "window")
// document = watch(document, "document")
// location = watch(location, "location")
// navigator = watch(navigator, "navigator")



'$$ts_code$$'
'$$js_code$$'

// console.log(document.cookie)
function get_cookie() {
    return document.cookie
}


// console.log(get_cookie());

