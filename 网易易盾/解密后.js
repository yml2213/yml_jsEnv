//Wed Oct 09 2024 09:43:05 GMT+0800 (China Standard Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
    window.NECaptcha = function (A) {
        function L(Y) {
            if (D[Y]) {
                return D[Y].exports;
            }
            D[Y] = {
                exports: {},
                id: Y,
                loaded: !1
            };
            var y = D[Y];
            A[Y].call(y.exports, y, y.exports, L);
            y.loaded = !0;
            return y.exports;
        }
        var D = {};
        L.m = A;
        L.c = D;
        L.p = "/2.28.0/";
        return L(0);
    }([function (A, L, D) {
        D(69);
        D(59);
        var Y = D(40);
        A.exports = Y;
    }, function (A, L, D) {
        A.exports = D.p + "images/icon_light.4a68e42.png";
    }, function (A, L, D) {
        A.exports = D.p + "images/icon_light@2x.4597c82.png";
    }, function (A, L) {
        var D = {}.toString,
            Y = "ujg3ps2znyw",
            y = {
                slice: function (V, B, J) {
                    for (var X = [], P = B || 0, s = J || V.length; P < s; P++) {
                        X.push(P);
                    }
                    return X;
                },
                getObjKey: function (V, B) {
                    for (var J in V) if (V.hasOwnProperty(J) && V[J] === B) {
                        return J;
                    }
                },
                typeOf: function (V) {
                    return null == V ? String(V) : D.call(V).slice(8, -1).toLowerCase();
                },
                isFn: function (V) {
                    return "function" == typeof V;
                },
                log: function (V, B) {
                    var J = ["info", "warn", "error"];
                    return "string" == typeof V && ~J.indexOf(V) ? void (console && console[V]("[NECaptcha] " + B)) : void y.error("util.log(type, msg): \"type\" must be one string of " + J.toString());
                },
                warn: function (V) {
                    y.log("warn", V);
                },
                error: function (V) {
                    y.log("error", V);
                },
                assert: function (V, B) {
                    if (!V) {
                        throw new Error("[NECaptcha] " + B);
                    }
                },
                msie: function V() {
                    var B = navigator.userAgent,
                        J = parseInt((/msie (\d+)/.exec(B.toLowerCase()) || [])[1]);
                    isNaN(J) && (J = parseInt((/trident\/.*; rv:(\d+)/.exec(B.toLowerCase()) || [])[1]));
                    return J;
                },
                now: function () {
                    return new Date().getTime();
                },
                getIn: function (B, J, X) {
                    if ("[object Object]" !== Object.prototype.toString.call(B)) {
                        return X;
                    }
                    "string" == typeof J && (J = J.split("."));
                    for (var P = 0, s = J.length; P < s; P++) {
                        var M = J[P];
                        if (P < s - 1 && !B[M]) {
                            return X;
                        }
                        B = B[M];
                    }
                    return B;
                },
                raf: function B(J) {
                    var X = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (P) {
                        window.setTimeout(P, 16);
                    };
                    X(J);
                },
                nextFrame: function (J) {
                    y.raf(function () {
                        return y.raf(J);
                    });
                },
                sample: function (J, X) {
                    var P = J.length;
                    if (P <= X) {
                        return J;
                    }
                    for (var s = [], M = 0, S = 0; S < P; S++) {
                        S >= M * (P - 1) / (X - 1) && (s.push(J[S]), M += 1);
                    }
                    return s;
                },
                template: function (J, X) {
                    var P = function (G) {
                            return G.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
                        },
                        s = {
                            start: "<%",
                            end: "%>",
                            interpolate: /<%=(.+?)%>/g
                        },
                        M = s,
                        S = new RegExp("'(?=[^" + M.end.substr(0, 1) + "]*" + P(M.end) + ")", "g"),
                        q = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + J.replace(/[\r\t\n]/g, " ").replace(S, "\t").split("'").join("\\'").split("\t").join("'").replace(M.interpolate, "',$1,'").split(M.start).join("');").split(M.end).join("p.push('") + "');}return p.join('');");
                    return X ? q(X) : q;
                },
                uuid: function J(X, P) {
                    var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                        M = [],
                        S = void 0;
                    if (P = P || s.length, X) {
                        for (S = 0; S < X; S++) {
                            M[S] = s[0 | Math.random() * P];
                        }
                    } else {
                        var q = void 0;
                        for (M[8] = M[13] = M[18] = M[23] = "-", M[14] = "4", S = 0; S < 36; S++) {
                            M[S] || (q = 0 | 16 * Math.random(), M[S] = s[19 === S ? 3 & q | 8 : q]);
                        }
                    }
                    return M.join("");
                },
                reverse: function (X) {
                    return Array.isArray(X) ? X.reverse() : "string" === y.typeOf(X) ? X.split("").reverse().join("") : X;
                },
                encodeUrlParams: function (X) {
                    var P = [];
                    for (var s in X) X.hasOwnProperty(s) && P.push(window.encodeURIComponent(s) + "=" + window.encodeURIComponent(X[s]));
                    return P.join("&");
                },
                adsorb: function (X, P, s) {
                    return void 0 === P || null === P || void 0 === s || null === s ? X : Math.max(Math.min(X, s), P);
                },
                unique2DArray: function (X) {
                    var P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!Array.isArray(X)) {
                        return X;
                    }
                    for (var s = {}, M = [], S = 0, q = X.length; S < q; S++) {
                        var G = X[S][P];
                        null === G || void 0 === G || s[G] || (s[G] = !0, M.push(X[S]));
                    }
                    return M;
                },
                setDeviceToken: function (X) {
                    try {
                        window.localStorage.setItem(Y, X);
                    } catch (P) {
                        return null;
                    }
                },
                getDeviceToken: function () {
                    try {
                        var X = window.localStorage.getItem(Y);
                        return X;
                    } catch (P) {
                        return null;
                    }
                }
            };
        A.exports = y;
    }, function (A, L, D) {
        function V(T) {
            if (T = T || window.event, T[C]) {
                return T;
            }
            this.event = T;
            this.target = T.target || T.srcElement;
            this.type = T.type;
            var I = this.type;
            if (G.test(I) && (this.clientX = T.clientX || T.changedTouches && T.changedTouches[0].clientX, this.clientY = T.clientY || T.changedTouches && T.changedTouches[0].clientY, this.pageX = null != T.pageX ? T.pageX : T.clientX + K.scrollLeft, this.pageY = null != T.pageX ? T.pageY : T.clientY + K.scrollTop, "mouseover" === I || "mouseout" === I)) {
                for (var O = T.relatedTarget || T[("mouseover" === I ? "from" : "to") + "Element"]; O && 3 === O.nodeType;) {
                    O = O.parentNode;
                }
                this.relatedTarget = O;
            }
            this[C] = !0;
        }
        function B(T) {
            var I = T.nodeType;
            return 1 === I || 9 === I || 11 === I ? "string" == typeof T.textContent ? T.textContent : T.innerText : 3 === I || 4 === I ? T.nodeValue : "";
        }
        var J,
            X,
            P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (T) {
                return typeof T;
            } : function (T) {
                return T && "function" == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
            },
            M = D(3),
            S = D(19),
            q = document.createElement("div"),
            G = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/,
            K = document;
        K = K.compatMode && "CSS1Compat" !== K.compatMode ? K.body : K.documentElement;
        var F = /Mobile/i.test(window.navigator.userAgent),
            U = F && /Android/i.test(window.navigator.userAgent),
            R = function () {
                var T = 0,
                    I = !1,
                    O = window.navigator;
                "undefined" != typeof O.maxTouchPoints ? T = O.maxTouchPoints : "undefined" != typeof O.msMaxTouchPoints && (T = O.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent");
                    I = !0;
                } catch (z) {}
                var Z = "ontouchstart" in window;
                return T > 0 || I || Z;
            }(),
            j = function () {
                try {
                    document.createEvent("PointerEvent");
                    return !0;
                } catch (T) {
                    return !1;
                }
            }(),
            N = function () {
                try {
                    var T = new Audio();
                    return "oncanplaythrough" in T;
                } catch (I) {
                    return !1;
                }
            }(),
            Q = "undefined" != typeof window.CanvasRenderingContext2D,
            W = {
                click: "touchstart",
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            },
            C = "_fixed_" + Math.random().toString(36).slice(2, 7),
            w = !1;
        try {
            document.createElement("div").addEventListener("test", function () {}, Object.defineProperty({}, "passive", {
                get: function () {
                    w = !0;
                    return !1;
                }
            }));
        } catch (T) {}
        Object.assign(V.prototype, {
            stop: function () {
                this.preventDefault().stopPropagation();
            },
            preventDefault: function () {
                var I = this.event;
                !R && I.preventDefault ? I.preventDefault() : I.returnValue = !1;
                return this;
            },
            stopPropagation: function () {
                this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0;
                return this;
            },
            stopImmediatePropagation: function () {
                this.event.stopImmediatePropagation && this.event.stopImmediatePropagation();
            }
        });
        var E = {
            body: document.body,
            doc: document,
            isMobile: F,
            isAndroid: U,
            supportTouch: R,
            supportPointer: j,
            supportPassive: w,
            supportAudio: N,
            supportCanvas: Q
        };
        q.addEventListener ? (J = function (I, O, Z) {
            I.addEventListener(O, Z, !1);
        }, X = function (I, O, Z) {
            I.removeEventListener(O, Z, !1);
        }) : (J = function (I, O, Z) {
            I.attachEvent("on" + O, Z);
        }, X = function (I, O, Z) {
            I.detachEvent("on" + O, Z);
        });
        E.on = function (I, O, Z) {
            var z = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                H = O.split(" ");
            Z.real = function (f0) {
                var f1 = new V(f0);
                f1.origin = I;
                Z.call(I, f1);
            };
            H.map(function (f0) {
                switch (!0) {
                    case F:
                        J(I, (z ? f0 : W[f0]) || f0, Z.real);
                        break;
                    case !F && R:
                        J(I, f0, Z.real);
                        "click" !== f0 && J(I, W[f0], Z.real);
                        break;
                    default:
                        J(I, f0, Z.real);
                }
            });
            return E;
        };
        E.once = function (I, O, Z) {
            var z = function H() {
                var f0 = Z.apply(this, arguments);
                E.off(I, O, H);
                return f0;
            };
            return E.on(I, O, z);
        };
        E.off = function (I, O, Z) {
            var z = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                H = O.split(" ");
            Z = Z.real || Z;
            H.map(function (f0) {
                switch (!0) {
                    case F:
                        X(I, (z ? f0 : W[f0]) || f0, Z);
                        break;
                    case !F && R:
                        X(I, f0, Z);
                        X(I, W[f0], Z);
                        break;
                    default:
                        X(I, f0, Z);
                }
            });
        };
        E.find = function (I, O) {
            return "object" === ("undefined" == typeof I ? "undefined" : P(I)) && I.nodeType ? I : I ? (I = I.trim(), O = O || document, O.querySelector ? O.querySelector(I) : /^#[^#]+$/.test(I) ? document.getElementById(I.slice(1)) : /^\.[^.]+$/.test(I) ? E.getElementsByClassName(I.slice(1), O)[0] || null : /^[^.#]+$/.test(I) ? O.getElementsByTagName(I)[0] || null : null) : null;
        };
        E.findAll = function (I, O) {
            if (O = O || document, I = I.trim(), O.querySelectorAll) {
                return O.querySelectorAll(I);
            }
            if (/^#[^#]+$/.test(I)) {
                var Z = document.getElementById(I.slice(1));
                return Z ? [Z] : [];
            }
            return /^\.[^.]+$/.test(I) ? E.getElementsByClassName(I.slice(1), O) : /^[^.#]+$/.test(I) ? O.getElementsByTagName(I) : [];
        };
        E.html = function (I, O) {
            return "undefined" === M.typeOf(O) ? I.innerHTML : void (I.innerHTML = O);
        };
        E.css = function (I, O) {
            I.style.cssText += ";" + O;
        };
        E.replace = function (I, O) {
            O.parentNode && O.parentNode.replaceChild(I, O);
        };
        E.remove = function (I) {
            I.parentNode && I.parentNode.removeChild(I);
        };
        E.getComputedStyle = function (I, O) {
            var Z = I.currentStyle || window.getComputedStyle(I, null);
            return O ? Z[O] : Z;
        };
        E.addClass = function (I, O) {
            if (I) {
                var Z = I.className || "";
                ~(" " + Z + " ").indexOf(" " + O + " ") || (I.className = Z ? Z + " " + O : O);
            }
        };
        E.delClass = function (I, O) {
            if (I) {
                var Z = I.className || "";
                I.className = (" " + Z + " ").replace(" " + O + " ", " ").trim();
            }
        };
        E.hasClass = function (I, O) {
            if (!I) {
                return !1;
            }
            var Z = I.className || "";
            return ~(" " + Z + " ").indexOf(" " + O + " ");
        };
        E.getElementsByClassName = function (I, O) {
            if (O = O || document, document.getElementsByClassName) {
                return O.getElementsByClassName(I);
            }
            for (var Z, z = O.getElementsByTagName("*"), H = [], f0 = 0, f1 = z.length; f0 < f1; f0++) {
                Z = z[f0];
                ~(" " + Z.className + " ").indexOf(" " + I + " ") && H.push(Z);
            }
            return H;
        };
        E.getBubblePath = function (I) {
            for (var O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, Z = [], z = I; z && z !== O;) {
                Z.push(z);
                z = z.parentNode;
            }
            return Z;
        };
        E.transition = function (I, O) {
            function Z() {}
            M.assert(I && I.nodeType, "transition(el, opts) \"el\" must be a DOM element!");
            var H = {
                name: "",
                "enter-class": "",
                "enter-active-class": "",
                "leave-class": "",
                "leave-active-class": "",
                beforeEnter: Z,
                enter: Z,
                afterEnter: Z,
                enterCanceled: Z,
                beforeLeave: Z,
                leave: Z,
                afterLeave: Z,
                leaveCanceled: Z,
                insert: Z
            };
            O = Object.assign({}, H, O);
            var f0 = O,
                f1 = f0.name,
                f2 = f0.beforeEnter,
                f3 = f0.enter,
                f4 = f0.afterEnter,
                f5 = f0.enterCanceled,
                f6 = f0.beforeLeave,
                f7 = f0.leave,
                f8 = f0.afterLeave,
                f9 = f0.leaveCanceled,
                ff = f0.insert,
                fv = O["enter-class"] || f1 && f1 + "-enter",
                fA = O["enter-active-class"] || f1 && f1 + "-enter-active",
                fL = O["leave-class"] || f1 && f1 + "-leave",
                fD = O["leave-active-class"] || f1 && f1 + "-leave-active",
                fY = !M.msie() || M.msie() > 9,
                fy = "transitionend",
                fV = "animationend",
                fB = !0,
                fJ = !1,
                fX = !1;
            if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (fy = "webkitTransitionEnd"), void 0 === !window.onanimationend && void 0 !== window.onwebkitanimationend && (fV = "webkitAnimationEnd"), fY) {
                var fP = function () {
                    fJ && (fB = !0, fJ = !1, E.delClass(I, fA), f4(I));
                    fX && (fX = !1, E.delClass(I, fD), f8(I));
                };
                I.addEventListener(fy, fP);
                I.addEventListener(fV, fP);
            }
            return {
                enter: function () {
                    if (I) {
                        if (!fY) {
                            ff(I);
                            return void f4(I);
                        }
                        I.className = S(I.className.trim().split(/\s+/), fv, fA);
                        f2(I);
                        ff(I);
                        fB = !1;
                        fJ = !0;
                        M.nextFrame(function () {
                            E.delClass(I, fv);
                            f3(I);
                        });
                    }
                },
                leave: function () {
                    if (I) {
                        if (!fY || !fB) {
                            return void f8(I);
                        }
                        I.className = S(I.className.trim().split(/\s+/), fL, fD);
                        f6(I);
                        fX = !0;
                        M.nextFrame(function () {
                            E.delClass(I, fL);
                            f7(I);
                        });
                    }
                },
                cancelEnter: function () {
                    fJ && (fJ = !1, E.delClass(I, fA), f5(I));
                },
                cancelLeave: function () {
                    fX && (fX = !1, E.delClass(I, fD), f9(I));
                },
                dispose: function () {
                    fY && (I.removeEventListener(fy, fP), I.removeEventListener(fV, fP));
                    I = null;
                }
            };
        };
        E.text = function (I, O) {
            if (void 0 === O) {
                return B(I);
            }
            var Z = I.nodeType;
            1 !== Z && 11 !== Z && 9 !== Z || ("string" == typeof I.textContent ? I.textContent = O : I.innerText = O);
        };
        q.className = "yidun_class";
        E.className = q.getAttribute("className") ? function (I) {
            return I.getAttribute("className");
        } : function (I) {
            return I.getAttribute("class");
        };
        E.getRect = function (I) {
            var O = I.getBoundingClientRect();
            if ("width" in O) {
                return O;
            }
            var Z = O.left,
                z = O.top,
                H = O.right,
                f0 = O.bottom;
            return Object.assign({}, O, {
                width: H - Z,
                height: f0 - z
            });
        };
        A.exports = E;
    }, function (A, L, D) {
        var Y = D(3);
        L.CAPTCHA_TYPE = {
            JIGSAW: 2,
            POINT: 3,
            SMS: 4,
            INTELLISENSE: 5,
            AVOID: 6,
            ICON_POINT: 7,
            WORD_GROUP: 8,
            INFERENCE: 9,
            WORD_ORDER: 10,
            SPACE: 11,
            VOICE: 12
        };
        L.CAPTCHA_CLASS = {
            CAPTCHA: "yidun",
            PANEL: "yidun_panel",
            SLIDE_INDICATOR: "yidun_slide_indicator",
            SLIDER: "yidun_slider",
            JIGSAW: "yidun_jigsaw",
            POINT: "point",
            SMS: "yidun_sms",
            TIPS: "yidun_tips",
            REFRESH: "yidun_refresh",
            CONTROL: "yidun_control",
            BGIMG: "yidun_bgimg",
            INPUT: "yidun_input",
            LOADBOX: "yidun_loadbox",
            LOADICON: "yidun_loadicon",
            LOADTEXT: "yidun_loadtext",
            ERROR: "error",
            WARN: "warn",
            VERIFY: "verifying",
            SUCCESS: "success",
            LOADING: "loading",
            LOADFAIL: "loadfail"
        };
        L.WIDTH_LIMIT = [220, 10000];
        L.SLIDER_START_LEFT_LIMIT = 40;
        L.LARGE_SIZE_TYPE = {
            medium: 18,
            large: 20,
            "x-large": 24
        };
        L.SIZE_TYPE = {
            DEFAULT: 10,
            LARGE: 20
        };
        L.SAMPLE_NUM = Y.msie() < 8 ? 30 : 50;
        L.BIGGER_SAMPLE_NUM = 100;
        L.DEVICE = {
            MOUSE: 1,
            TOUCH: 2,
            MOUSE_TOUCH: 3
        };
        L.MAX_VERIFICATION = 5;
        L.RTL_LANGS = ["ar", "he", "ug", "fa", "ur"];
        L.CACHE_MIN = 60000;
        L.FILE_DETECT_KEY = {
            core: "NECaptcha",
            light: "NECaptcha_theme_light",
            dark: "NECaptcha_theme_dark",
            plugins: "NECaptcha_plugin",
            watchman: "initCaptchaWatchman",
            irisk: "createNECaptchaGuardian"
        };
        L.FEEDBACK_URL = "https://support.dun.163.com/feedback/captcha";
        L.RUN_ENV = {
            WEB: 10,
            ANDROID: 20,
            IOS: 30,
            MINIPROGRAM: 40,
            JUMPER_MINI_PROGRAM: 50,
            QUICKAPP: 60,
            HARMONYOS: 35
        };
        L.CLOSE_SOURCE = {
            USER: 1,
            PROCESS: 2,
            CLOSE: 3
        };
        L.IV_VERSION = 4;
        L.POPUP_PRELOAD_SHIFTING_CLASS = "yidun_popup--shifting";
        L.CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS = "yidun_classic-wrapper--shifting";
        L.ENABLE = 1;
        L.DISABLE = 2;
    }, function (A, L) {
        var D = {
            INVOKE_HOOK: "INVOKE_HOOK",
            EVENT_CLOSE: "EVENT_CLOSE",
            EVENT_RESET: "EVENT_RESET",
            SWITCH_TYPE: "SWITCH_TYPE",
            SET_TYPE: "SET_TYPE",
            SWITCH_LOAD_STATUS: "SWITCH_LOAD_STATUS",
            UPDATE_VERIFY_STATUS: "UPDATE_VERIFY_STATUS",
            REFRESH: "REFRESH",
            UPDATE_COUNTS_OF_VERIFYERROR: "UPDATE_COUNTS_OF_VERIFYERROR",
            SET_TOKEN: "SET_TOKEN",
            EVENT_RESET_CLASSIC: "EVENT_RESET_CLASSIC",
            UPDATE_LINK_TIME: "UPDATE_LINK_TIME",
            UPDATE_CORE_WIDTH: "UPDATE_CORE_WIDTH"
        };
        A.exports = D;
    }, function (A, L) {
        function D(E, T, I) {
            T in E ? Object.defineProperty(E, T, {
                value: I,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : E[T] = I;
            return E;
        }
        function V(E, T) {
            function I() {}
            I.prototype = T.prototype;
            E.prototype = new I();
            E.prototype.constructor = E;
        }
        function B(E, T, I) {
            this.name = "CaptchaError";
            this.code = E;
            this.message = E + ("(" + w[E] + ")") + (T ? " - " + T : "");
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
            this.data = I || {};
        }
        var J,
            X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (E) {
                return typeof E;
            } : function (E) {
                return E && "function" == typeof Symbol && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
            },
            P = "prototype",
            M = 100,
            S = 200,
            q = 300,
            G = 430,
            K = 432,
            F = 500,
            U = 501,
            R = 502,
            j = 503,
            N = 504,
            Q = 505,
            k = 600,
            W = 601,
            C = 1000,
            w = (J = {}, D(J, M, "script error"), D(J, S, "business error"), D(J, q, "unpass error"), D(J, G, "qps limit error"), D(J, K, "captcha id is invalid"), D(J, F, "request error"), D(J, U, "request api error"), D(J, R, "request script error"), D(J, j, "request img error"), D(J, N, "request timeout error"), D(J, Q, "request audio error"), D(J, k, "request anticheat token error"), D(J, W, "init anticheat error"), D(J, C, "unknown error"), J);
        V(B, Error);
        B[P].toString = function () {
            var E = String(this.stack);
            return 0 === E.indexOf("CaptchaError:") ? E : this.name + ": " + this.message + (E ? "\n    " + E : "");
        };
        B.set = function (E, T) {
            "number" == typeof E && "string" == typeof T && (w[E] = T);
            "object" === ("undefined" == typeof E ? "undefined" : X(E)) && E && Object.assign(w, E);
        };
        B.get = function (E) {
            return w[E];
        };
        B.remove = function (E) {
            String(E) in w && delete w[E];
        };
        L = A.exports = B;
        L.SCRIPT_ERROR = M;
        L.BUSINESS_ERROR = S;
        L.UNPASS_ERROR = q;
        L.QPS_LIMIT_ERROR = G;
        L.ID_INVAILD_ERROR = K;
        L.REQUEST_ERROR = F;
        L.REQUEST_API_ERROR = U;
        L.REQUEST_SCRIPT_ERROR = R;
        L.REQUEST_IMG_ERROR = j;
        L.REQUEST_TIMEOUT_ERROR = N;
        L.REQUEST_AUDIO_ERROR = Q;
        L.ANTICHEAT_TOKEN_ERROR = k;
        L.ANTICHEAT_INIT_ERROR = W;
        L.UNKNOWN_ERROR = C;
    }, function (A, L, D) {
        function V(w) {
            var E = {};
            w.map(function (T) {
                E[T] = function () {
                    var I = this,
                        O = C.options.mixins || {};
                    (O[T] || []).map(function (Z) {
                        return Z.call(I);
                    });
                    this.$options[T].map(function (Z) {
                        return Z.call(I);
                    });
                };
            });
            return E;
        }
        function B(w) {
            function E() {}
            function T() {
                O.apply(this, arguments);
            }
            if (w instanceof C) {
                return w;
            }
            var I = {};
            Object.keys(w).map(function (Z) {
                ["render"].indexOf(Z) > -1 && (I[Z] = w[Z]);
            });
            q(w.methods) && Object.assign(I, w.methods);
            var O = this.extend({});
            E.prototype = O.prototype;
            T.prototype = new E();
            Object.assign(T.prototype, I);
            T.prototype.constructor = T;
            T._options = w;
            T._extend = B;
            return T;
        }
        var J = Object.assign || function (w) {
                for (var E = 1; E < arguments.length; E++) {
                    var T = arguments[E];
                    for (var I in T) Object.prototype.hasOwnProperty.call(T, I) && (w[I] = T[I]);
                }
                return w;
            },
            X = D(20),
            P = D(51),
            M = D(12),
            S = M.getDocFragmentRegex,
            q = M.isPlainObject,
            G = M.getIn,
            K = M.parseAttrsStr,
            F = M.diffDataToUpdate,
            U = M.nextTick,
            R = M.lifeCycleHooks,
            j = D(50),
            N = D(49),
            Q = D(52),
            k = D(4),
            W = 0,
            C = X(J({
                initialize: function () {
                    var w = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        E = this.constructor,
                        T = W++;
                    this.id = "__c_" + T;
                    this.name = w.name;
                    this._isMounted = !1;
                    this.$options = j(E._options || {}, w);
                    w.render && (this.render = w.render);
                    w.methods && Object.assign(this, w.methods);
                    this._boundProps = w._boundProps || {};
                    this.$parent = w.$parent || null;
                    var I = this.$parent;
                    if (I) {
                        if (I.$root) {
                            this.$root = I.$root;
                        } else {
                            for (var O = I; O.$parent;) {
                                O = O.$parent;
                            }
                            this.$root = O;
                        }
                    }
                    this.beforeCreate();
                    var Z = this.$options,
                        z = Z.template,
                        H = Z.propsData,
                        x = Z.data;
                    this.$props = this._validateProps(H, !0) || {};
                    Object.assign(this, this.$props);
                    this.$data = "function" == typeof x ? x.call(this) : x || {};
                    Object.assign(this, this.$data);
                    this._composer = P(z, this);
                    this.$children = [];
                    this._instantiateChildren();
                    this._updater = {
                        id: T,
                        instance: this,
                        data: {}
                    };
                    this.created();
                    w.el && this.$mount(w.el);
                },
                $mount: function (w) {
                    this.beforeMount();
                    this._childrenBeforeMount();
                    this._composeString(this._composer, this);
                    var E = this._composer.toString();
                    if ("string" == typeof w || w && 1 === w.nodeType) {
                        w = k.find(w);
                        this.$options.abstract ? this.$el = w : (w.innerHTML = E, this.$el = w.children[0]);
                    } else {
                        var T = document.createElement("div");
                        T.innerHTML = E;
                        this.$el = T.children[0];
                        "function" == typeof w && w(this.$el);
                    }
                    this._childrenMounted();
                    this._initEvents();
                    this._isMounted = !0;
                    this.mounted();
                    return this;
                }
            }, V(R), {
                $setData: function (w, E) {
                    !E && (w = F(w, this.$data));
                    w && Object.keys(w).length && (this._resolveWatch(w).map(function (T) {
                        return T();
                    }), Object.assign(this.$data, w), Object.assign(this, this.$data), Object.assign(this._updater.data, w), N(this._updater), this._renderChildren(w));
                },
                $forceUpdate: function () {
                    var w = Object.assign({}, this.$data, this.$props);
                    this.$setData(w, !0);
                },
                $replaceChild: function (w, E) {
                    var T = E.$el.parentElement,
                        I = E.$el.nextSibling,
                        O = void 0;
                    O = null === I ? function (z) {
                        T.appendChild(z);
                    } : function (z) {
                        T.insertBefore(z, I);
                    };
                    w._boundProps = E._boundProps;
                    w.$parent = this;
                    E.$destroy();
                    var Z = this.$children.indexOf(E);
                    Z > -1 && this.$children.splice(Z, 1, w);
                    w.$mount(O);
                },
                $destroy: function (w) {
                    this._isMounted && (this.beforeDestroy(), this._childrenBeforeDestroy(), !w && !this.$options.abstract && this.$el && this.$el.parentElement && this.$el.parentElement.removeChild(this.$el), this._events && (this._events.off(), this._events = null), this.$el = null, this.$props = null, this.$data = null, this.$root = null, this.$parent = null, this.$children = null, this.$options = null, this._isMounted = !1);
                },
                $nextTick: U,
                render: function () {},
                _initEvents: function () {
                    var w = this,
                        E = this.$el,
                        T = this.$options.on;
                    if (E && q(T)) {
                        var I = {};
                        Object.keys(T).map(function (O) {
                            I[O] = T[O].bind(w);
                        });
                        this._events = new Q({
                            $el: E,
                            events: I
                        });
                    }
                },
                _childrenBeforeMount: function () {
                    this.$children.map(function (w) {
                        w.beforeMount();
                        w._childrenBeforeMount();
                    });
                },
                _childrenMounted: function () {
                    this.$children.map(function (w) {
                        w._childrenMounted();
                        var E = w.$root.$el;
                        w.$el = k.find(w.$options.el, E) || k.find(w.$options.el, E.parentElement);
                        w._initEvents();
                        w._isMounted = !0;
                        w.mounted();
                    });
                },
                _childrenBeforeDestroy: function () {
                    this.$children.map(function (w) {
                        w.$destroy(!0);
                    });
                },
                _composeString: function (w, E) {
                    var T = this;
                    E.$children.map(function (I) {
                        w.compose(I.name, I._composer.toString());
                        T._composeString(w, I);
                    });
                },
                _setProps: function (w) {
                    w = F(w, this.$props);
                    w && Object.keys(w).length && (w = this._validateProps(w), this._resolveWatch(w).map(function (E) {
                        return E();
                    }), Object.assign(this.$props, w), Object.assign(this, this.$props), Object.assign(this._updater.data, w), N(this._updater));
                },
                _resolveWatch: function (w) {
                    var E = this,
                        T = this.$options.watch;
                    if (!T) {
                        return [];
                    }
                    var I = [];
                    Object.keys(T).map(function (O) {
                        var Z = G(w, O);
                        if (void 0 !== Z) {
                            var z = T[O].bind(E, Z, G(E, O));
                            I.push(z);
                        }
                    });
                    return I;
                },
                _renderChildren: function (w) {
                    this.$children.map(function (E) {
                        var T = E._boundProps,
                            I = {};
                        Object.keys(T).map(function (O) {
                            var Z = G(w, T[O]);
                            void 0 !== Z && (I[O] = Z);
                        });
                        E._setProps(I);
                        E._renderChildren(I);
                    });
                },
                _validateProps: function (w, E) {
                    if (w) {
                        var T = this.$options.props,
                            I = {};
                        return q(T) ? (Object.keys(T).map(function (O) {
                            var Z = T[O],
                                z = w[O];
                            if (q(Z) || (Z = {
                                type: Z
                            }), void 0 !== z) {
                                var H = Object.prototype.toString;
                                if (Z.type && H.call(z) !== H.call(Z.type())) {
                                    throw new Error("[" + O + "] is not valid type.");
                                }
                                I[O] = z;
                            } else {
                                E && (I[O] = Z.default);
                            }
                        }), I) : w;
                    }
                },
                _instantiateChildren: function () {
                    var w = this,
                        E = this.$options.components;
                    if (E) {
                        var T = this._composer.toString();
                        Object.keys(E).map(function (I) {
                            var O = T.match(S(I, !0)) || [];
                            O.map(function (Z) {
                                Z = Z.match(S(I)) || [];
                                var z = K(Z[1]),
                                    H = z.props,
                                    x = z.bound;
                                Object.keys(x).map(function (f2) {
                                    var f3 = G(w, x[f2]);
                                    H[f2] = "function" == typeof f3 ? f3.bind(w) : f3;
                                });
                                var f0 = C._extend(E[I]),
                                    f1 = new f0({
                                        name: I,
                                        propsData: H,
                                        _boundProps: x,
                                        $parent: w
                                    });
                                w.$children.push(f1);
                            });
                        });
                    }
                }
            }));
        C.options = {};
        C._extend = B;
        C.mixin = function (w) {
            var E = C.options.mixins || {};
            C.options.mixins = j(E, w);
        };
        A.exports = C;
    }, function (A, L, D) {
        function V(I, O) {
            var Z = {};
            for (var z in I) O.indexOf(z) >= 0 || Object.prototype.hasOwnProperty.call(I, z) && (Z[z] = I[z]);
            return Z;
        }
        function B(I, O) {
            function Z() {}
            Z.prototype = O.prototype;
            I.prototype = new Z();
            I.prototype.constructor = I;
        }
        function J(I, O) {
            this.enable = !0;
            this.snaker = new q(S({}, I, {
                pid: "captcha",
                limit: 9,
                random: 0.05,
                version: "2.28.0"
            }));
            this._captchaConfig = O || {};
            this.events = {};
        }
        function X(I, O) {
            var Z = F(I);
            if ("string" === Z || "number" === Z) {
                "string" === Z && (I = parseFloat(I), !isNaN(I) && (I = I.toFixed));
                return I.toFixed(O);
            }
        }
        function P(I) {
            var O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Z = "network";
            return function (H, f0, f1, f2) {
                var f3 = f2.status,
                    f4 = f2.error,
                    f5 = f2.index,
                    f6 = f2.res,
                    f7 = f2.perfEntry;
                try {
                    var f8 = G(H),
                        f9 = "image" === f1 ? "image" : f8.path;
                    if (f4) {
                        I.remove(Z, f9, f0);
                        var ff = {
                                script: j,
                                image: Q,
                                audio: W,
                                api: N
                            },
                            fv = new U(ff[f1], f4.message, S({}, O, {
                                url: H
                            }));
                        I.collectErr(fv, {
                            times: f5 + 1
                        });
                    } else {
                        var fA = T[f3];
                        if (E) {
                            if ("end" !== fA) {
                                return;
                            }
                            var fL = f7 || w.getEntriesByName(f6 && f6._originUrl || H)[0];
                            if (!fL) {
                                return;
                            }
                            I.collect(Z, f9, {
                                tc: X(fL.responseEnd - (fL.domainLookupStart || fL.connectStart), 1),
                                dc: X(fL.domainLookupEnd - fL.domainLookupStart, 1),
                                cc: X(fL.connectEnd - fL.connectStart, 1),
                                rc: X(fL.responseStart - fL.requestStart, 1),
                                rr: X(fL.responseEnd - fL.responseStart, 1),
                                url: H,
                                host: f8.host,
                                https: "https" === f8.protocol,
                                from: "PERF"
                            }, {}, S({}, O));
                        } else {
                            I.collect(Z, f9, {
                                timestamp: new Date().valueOf(),
                                url: H,
                                host: f8.host,
                                https: "https" === f8.protocol,
                                from: "js"
                            }, {
                                rangeId: f0,
                                rangeType: fA
                            }, S({}, O));
                        }
                    }
                } catch (fD) {}
            };
        }
        function M(I) {
            var O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Z = "network",
                z = "linkTime";
            try {
                I.collectLinkTime(Z, z, S({}, O, {
                    from: "LINK_TIME"
                }));
            } catch (H) {}
        }
        var S = Object.assign || function (I) {
                for (var O = 1; O < arguments.length; O++) {
                    var Z = arguments[O];
                    for (var z in Z) Object.prototype.hasOwnProperty.call(Z, z) && (I[z] = Z[z]);
                }
                return I;
            },
            q = D(29),
            G = D(54),
            K = D(3),
            F = K.typeOf,
            U = D(7),
            R = D(45),
            j = U.REQUEST_SCRIPT_ERROR,
            N = U.REQUEST_API_ERROR,
            Q = U.REQUEST_IMG_ERROR,
            W = U.REQUEST_AUDIO_ERROR,
            C = "prototype",
            w = window.performance || window.msPerformance || window.webkitPerformance || {},
            E = w && "getEntriesByName" in w;
        B(J, Error);
        J[C].collect = function (I, O, Z, z, H) {
            var f0 = z.rangeId,
                f1 = z.rangeType;
            if (this.enable) {
                try {
                    if (f0) {
                        var f2 = Z.timestamp,
                            f3 = V(Z, ["timestamp"]);
                        !this.events[I] && (this.events[I] = {});
                        !this.events[I][O] && (this.events[I][O] = {});
                        var f4 = this.events[I][O][f0];
                        if ("start" !== f1 || f4) {
                            if ("end" === f1 && f4 && !f4.end) {
                                Object.assign(f4, S({
                                    end: f2,
                                    zoneId: this._captchaConfig.zoneId,
                                    extra: H
                                }, f3));
                                var f5 = f4.end,
                                    f6 = f4.start,
                                    f7 = f4.extra,
                                    f8 = V(f4, ["end", "start", "extra"]);
                                this.snaker.trackAsync(I, O, window.encodeURIComponent(JSON.stringify(S({
                                    tc: f5 - f6
                                }, f8))), S({}, f7, {
                                    nts: new Date().valueOf()
                                }));
                                this.events[I][O][f0] = null;
                            }
                        } else {
                            this.events[I][O][f0] = S({
                                ev: f4,
                                start: f2,
                                extra: H
                            }, f3);
                        }
                    } else {
                        this.snaker.trackAsync(I, O, "string" === F(Z) ? Z : window.encodeURIComponent(JSON.stringify(S({}, Z, {
                            zoneId: this._captchaConfig.zoneId
                        }))), S({}, H, {
                            nts: new Date().valueOf()
                        }));
                    }
                } catch (f9) {}
            }
        };
        J[C].collectLinkTime = function (I, O, Z) {
            if (this.enable) {
                try {
                    this.snaker.trackAsync(I, O, "string" === F(Z) ? Z : window.encodeURIComponent(JSON.stringify(S({}, Z))), {
                        nts: new Date().valueOf()
                    });
                } catch (z) {}
            }
        };
        J[C].collectErr = function (I, O) {
            R(I, this._captchaConfig, S({}, O));
        };
        J[C].remove = function (I, O, Z) {
            I && O && Z ? this.events[I] && this.events[I][O] && delete this.events[I][O][Z] : I && O ? this.events[I] && (this.events[I][O] = {}) : I && (this.events[I] = {});
        };
        J[C].clear = function () {
            if (this.enable) {
                try {
                    this.snaker.flush();
                    this.events = {};
                } catch (I) {}
            }
        };
        var T = {
            start: "start",
            success: "end"
        };
        L = A.exports = J;
        L.createNetCollect = P;
        L.createLinkTimeCollect = M;
        L.supportEntries = E;
    }, function (J, X, q) {
        function G(fR) {
            if (Array.isArray(fR)) {
                for (var fj = 0, fn = Array(fR.length); fj < fR.length; fj++) {
                    fn[fj] = fR[fj];
                }
                return fn;
            }
            return Array.from(fR);
        }
        function K(fR) {
            var fj = [];
            if (!fR.length) {
                return fB(64);
            }
            if (fR.length >= 64) {
                return fR.splice(0, 64);
            }
            for (var fn = 0; fn < 64; fn++) {
                fj[fn] = fR[fn % fR.length];
            }
            return fj;
        }
        function F(fR) {
            if (!fR.length) {
                return fB(64);
            }
            var fj = [],
                fn = fR.length,
                fN = fn % 64 <= 60 ? 64 - fn % 64 - 4 : 128 - fn % 64 - 4;
            fL(fR, 0, fj, 0, fn);
            for (var fQ = 0; fQ < fN; fQ++) {
                fj[fn + fQ] = 0;
            }
            fL(fV(fn), 0, fj, fn + fN, 4);
            return fj;
        }
        function Q(fR) {
            if (fR.length % 64 !== 0) {
                return [];
            }
            for (var fj = [], fn = fR.length / 64, fN = 0, fQ = 0; fN < fn; fN++) {
                fj[fN] = [];
                for (var fl = 0; fl < 64; fl++) {
                    fj[fN][fl] = fR[fQ++];
                }
            }
            return fj;
        }
        function W(fR) {
            var fj = fy(fF),
                fn = function (ft) {
                    return fj[16 * (ft >>> 4 & 15) + (15 & ft)];
                };
            if (!fR.length) {
                return [];
            }
            for (var fN = [], fQ = 0, fl = fR.length; fQ < fl; fQ++) {
                fN[fQ] = fn(fR[fQ]);
            }
            return fN;
        }
        function Z() {
            for (var fR = [], fj = 0; fj < 4; fj++) {
                fR[fj] = fr(Math.floor(256 * Math.random()));
            }
            return fR;
        }
        function H(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fM(fR[fN], fj));
            }
            return fn;
        }
        function f0(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fM(fR[fN], fj++));
            }
            return fn;
        }
        function f1(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fM(fR[fN], fj--));
            }
            return fn;
        }
        function f2(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fJ(fR[fN], fj));
            }
            return fn;
        }
        function f3(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fJ(fR[fN], fj++));
            }
            return fn;
        }
        function f4(fR, fj) {
            if (!fR.length) {
                return [];
            }
            fj = fr(fj);
            for (var fn = [], fN = 0, fQ = fR.length; fN < fQ; fN++) {
                fn.push(fJ(fR[fN], fj--));
            }
            return fn;
        }
        function f5(fR) {
            var fj = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return fj + 256 >= 0 ? fR : [];
        }
        function f6(fR) {
            for (var fj = [f5, H, f2, f0, f3, f1, f4], fn = fc, fN = 0, fQ = fn.length; fN < fQ;) {
                var fl = fn.substring(fN, fN + 4),
                    ft = fY(fl.substring(0, 2)),
                    fm = fY(fl.substring(2, 4));
                fR = fj[ft](fR, fm);
                fN += 4;
            }
            return fR;
        }
        function f7() {
            var fR = fs(fU),
                fj = Z();
            fR = K(fR);
            fR = fu(fR, K(fj));
            fR = K(fR);
            return [fR, fj];
        }
        function f8(fR, fj) {
            var fn = fs(fj),
                fN = fs(fR);
            return fG(fu(fn, fN));
        }
        function f9(fR, fj) {
            var fn = fq(fj),
                fN = fs(fR);
            return fP(fu(fn, fN));
        }
        function ff(fR) {
            for (var fj = fs(fR), fn = f7(), fN = fv(fn, 2), fQ = fN[0], fl = fN[1], ft = fs(fD(fj)), fm = F([].concat(G(fj), G(ft))), fk = Q(fm), fW = [].concat(G(fl)), fb = fQ, fC = 0, fw = fk.length; fC < fw; fC++) {
                var fE = fu(f6(fk[fC]), fQ),
                    fT = fX(fE, fb);
                fE = fu(fT, fb);
                fb = W(W(fE));
                fL(fb, 0, fW, 64 * fC + 4, 64);
            }
            return fe(fW);
        }
        var fv = function () {
                function fR(fj, fn) {
                    var fN = [],
                        fQ = !0,
                        fl = !1,
                        ft = void 0;
                    try {
                        for (var fm, fk = fj[Symbol.iterator](); !(fQ = (fm = fk.next()).done) && (fN.push(fm.value), !fn || fN.length !== fn); fQ = !0) {}
                    } catch (fW) {
                        fl = !0;
                        ft = fW;
                    } finally {
                        try {
                            !fQ && fk.return && fk.return();
                        } finally {
                            if (fl) {
                                throw ft;
                            }
                        }
                    }
                    return fN;
                }
                return function (fj, fn) {
                    if (Array.isArray(fj)) {
                        return fj;
                    }
                    if (Symbol.iterator in Object(fj)) {
                        return fR(fj, fn);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            fA = q(26),
            fL = fA.copyToBytes,
            fD = fA.genCrc32,
            fY = fA.hexToByte,
            fy = fA.hexsToBytes,
            fV = fA.intToBytes,
            fB = fA.paddingArrayZero,
            fJ = fA.shift,
            fX = fA.shifts,
            fP = fA.bytesToString,
            fs = fA.stringToBytes,
            fr = fA.toByte,
            fM = fA.xor,
            fu = fA.xors,
            fS = q(58),
            fq = fS.base64Decode,
            fG = fS.base64Encode,
            fe = fS.base64EncodePrivate,
            fK = q(27),
            fF = fK.__SBOX__,
            fU = fK.__SEED_KEY__,
            fc = fK.__ROUND_KEY__;
        X.aes = ff;
        X.xorEncode = f8;
        X.xorDecode = f9;
    }, function (A, L, D) {
        function Y(N, Q) {
            var m = {};
            for (var k in N) Q.indexOf(k) >= 0 || Object.prototype.hasOwnProperty.call(N, k) && (m[k] = N[k]);
            return m;
        }
        var V = Object.assign || function (N) {
                for (var Q = 1; Q < arguments.length; Q++) {
                    var m = arguments[Q];
                    for (var k in m) Object.prototype.hasOwnProperty.call(m, k) && (N[k] = m[k]);
                }
                return N;
            },
            B = D(76),
            J = D(21),
            X = D(62),
            P = D(53),
            M = D(3),
            S = 0,
            q = /MicroMessenger|Weibo/i.test(window.navigator.userAgent),
            G = function (N) {
                return "string" == typeof N ? [N, N] : Array.isArray(N) && 1 === N.length ? N.concat(N) : N;
            },
            K = function () {
                var N = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return parseInt(new Date().valueOf() / N, 10);
            },
            F = {
                script: function (N, Q) {
                    var m = this;
                    this.cacheTime && (N = N + "?v=" + K(this.cacheTime));
                    B(N, {
                        charset: "UTF-8"
                    }, function (k, W) {
                        var b = m.detectKey;
                        if (k || b && !window[b]) {
                            var C = k && k.message || "unreliable script",
                                w = new Error("Failed to load script(" + N + ")." + C);
                            w.data = {
                                url: N,
                                retry: !!m._options.retry
                            };
                            return void Q(w);
                        }
                        Q({
                            scriptEl: W,
                            _originUrl: N
                        });
                    });
                },
                image: function (N, Q) {
                    var m = this,
                        k = document.createElement("img");
                    k.onload = function () {
                        k.onload = k.onerror = null;
                        Q({
                            width: k.width,
                            height: k.height,
                            src: N
                        });
                    };
                    k.onerror = function (W) {
                        k.onload = k.onerror = null;
                        var b = W && W.message || "unreliable image error",
                            C = new Error("Failed to load image(" + N + ")." + b);
                        C.data = {
                            url: N,
                            retry: !!m._options.retry
                        };
                        Q(C);
                    };
                    k.src = N;
                },
                audio: function (N, Q) {
                    var m = this;
                    try {
                        if (q) {
                            var k = new XMLHttpRequest();
                            k.open("GET", N);
                            k.responseType = "blob";
                            k.onload = function () {
                                var C = new Blob([k.response], {
                                        type: "audio/mpeg"
                                    }),
                                    w = URL.createObjectURL(C);
                                Q({
                                    src: w
                                });
                            };
                            k.onerror = function () {
                                k.onload = k.onerror = null;
                                var C = k.statusText || "unreliable audio error",
                                    w = k.status || "",
                                    E = new Error("Failed to load audio(" + N + ")." + C + "." + w);
                                E.data = {
                                    url: N,
                                    retry: !!this._options.retry
                                };
                                Q(E);
                            };
                            k.send();
                        } else {
                            var W = new Audio();
                            W.oncanplaythrough = function (C) {
                                W.oncanplaythrough = W.onerror = null;
                                Q({
                                    src: N
                                });
                            };
                            W.onerror = function (C) {
                                W.oncanplaythrough = W.onerror = null;
                                var w = W.error && W.error.message || "unreliable audio error",
                                    E = W.error && W.code || "",
                                    T = new Error("Failed to play audio(" + N + ")." + w + "." + E);
                                T.data = {
                                    url: N,
                                    retry: !!m._options.retry
                                };
                                Q(T);
                            };
                            W.src = N;
                            W.load();
                        }
                    } catch (C) {
                        var b = new Error("not support audio");
                        b.data = {
                            url: N,
                            retry: !!this._options.retry
                        };
                        Q(b);
                    }
                },
                api: function (N, Q, m) {
                    var k = this;
                    P(N, m, function (W, b, C) {
                        if (W) {
                            var w = W && W.message || "unreliable api error",
                                E = new Error("Failed to request api(" + N + ")." + w);
                            E.data = {
                                url: N,
                                retry: !!k._options.retry
                            };
                            return void Q(E);
                        }
                        Q(V({}, b, {
                            _originUrl: C.url
                        }));
                    }, {
                        timeout: this.timeout
                    });
                }
            },
            U = function (N) {
                this.id = N.id || "resource_" + S++;
                this.type = N.type || "script";
                this.url = N.url || "";
                this.payload = N.payload;
                this.timeout = N.timeout || 6000;
                this.cacheTime = N.cacheTime ? parseInt(N.cacheTime, 10) : 0;
                this.detectKey = N.detectKey || "";
                this._options = N;
                J.call(this);
                this.load();
                this.setTimeout();
            };
        X(U, J);
        Object.assign(U.prototype, {
            load: function () {
                var N = this,
                    Q = F[this.type];
                Q && Q.call(this, this.url, function (m) {
                    return N.resolve(m);
                }, this.payload);
            },
            addSupport: function (N, Q, m) {
                ("function" != typeof F[N] || m) && (F[N] = Q);
            },
            setTimeout: function () {
                var N = this;
                window.setTimeout(function () {
                    var Q = String(N.url),
                        m = new Error("Timeout: failed to request " + N.type + "(" + Q + ").");
                    m.data = {
                        url: Q
                    };
                    N.resolve(m);
                }, this.timeout);
            }
        });
        U.SUPPORTS = F;
        var R = function (N) {
            F.hasOwnProperty(N) && (U[N] = function (Q) {
                var m = Q.disableRetry,
                    k = Q.onProcess,
                    W = Q.checkResult,
                    b = Y(Q, ["disableRetry", "onProcess", "checkResult"]);
                if (m) {
                    var C = b.url;
                    Array.isArray(C) && (C = C[0] || "");
                    return new U(V({}, b, {
                        url: C,
                        type: N
                    }));
                }
                var w = G(Q.url),
                    E = new J(),
                    T = function I() {
                        var O = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            Z = function (f1) {
                                var f2 = w.length;
                                O < f2 - 1 ? I(O + 1) : O === f2 - 1 && (f1.data = V({}, f1.data, {
                                    url: String(w),
                                    requestId: f0.id
                                }), E.resolve(f1));
                                M.isFn(k) && k(x, f0.id, N, {
                                    status: "error",
                                    error: f1,
                                    index: O
                                });
                            },
                            z = function (f1) {
                                var f2 = f1 instanceof Error ? f1 : new Error("Failed to check result of " + x);
                                f2.data = {
                                    url: x,
                                    retry: !!b.retry
                                };
                                Z(f2);
                            },
                            H = function (f1) {
                                M.isFn(k) && k(x, f0.id, N, {
                                    status: "success",
                                    res: f1
                                });
                                E.resolve(f1);
                            },
                            x = w[O],
                            f0 = new U(V({}, b, {
                                type: N,
                                url: x,
                                retry: O > 0
                            }));
                        M.isFn(k) && k(x, f0.id, N, {
                            status: "start"
                        });
                        f0.then(function (f1) {
                            if (!M.isFn(W)) {
                                return H(f1);
                            }
                            var f2 = W(f1);
                            f2 instanceof J ? f2.then(H(f1)).catch(function (f3) {
                                return z(f3);
                            }) : f2 ? H(f1) : z();
                        }).catch(function (f1) {
                            return Z(f1);
                        });
                    };
                T(0);
                return E;
            });
        };
        for (var j in F) R(j);
        U.all = function (N) {
            var Q = 0,
                m = !1,
                k = new J(),
                W = [];
            N.map(function (b, C) {
                b.then(function (w) {
                    m || (W[C] = w, Q++, Q === N.length && k.resolve(W));
                }).catch(function (w) {
                    m = !0;
                    k.resolve(w);
                });
            });
            return k;
        };
        A.exports = U;
    }, function (A, L) {
        var D = function () {
            function Y(y, V) {
                var B = [],
                    J = !0,
                    X = !1,
                    P = void 0;
                try {
                    for (var s, M = y[Symbol.iterator](); !(J = (s = M.next()).done) && (B.push(s.value), !V || B.length !== V); J = !0) {}
                } catch (S) {
                    X = !0;
                    P = S;
                } finally {
                    try {
                        !J && M.return && M.return();
                    } finally {
                        if (X) {
                            throw P;
                        }
                    }
                }
                return B;
            }
            return function (y, V) {
                if (Array.isArray(y)) {
                    return y;
                }
                if (Symbol.iterator in Object(y)) {
                    return Y(y, V);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        L.getDocFragmentRegex = function (Y, y) {
            return new RegExp("<" + Y + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + Y + ">", y ? "g" : "");
        };
        L.isPlainObject = function (Y) {
            return "[object Object]" === Object.prototype.toString.call(Y) && Y && Y.constructor === Object;
        };
        L.getIn = function (Y, y, V) {
            "string" == typeof y && (y = y.split("."));
            for (var B = 0, J = y.length; B < J; B++) {
                var X = y[B];
                if (B < J - 1 && !Y[X]) {
                    return V;
                }
                Y = Y[X];
            }
            return Y;
        };
        L.parseAttrsStr = function () {
            var Y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                y = Y.match(/[^<>*+\s=]+(?:=".*?")?/g);
            if (!y) {
                return {
                    props: {},
                    bound: {}
                };
            }
            var V = {},
                B = {};
            y.map(function (J) {
                var X = J.split("="),
                    P = D(X, 2),
                    M = P[0],
                    S = P[1];
                void 0 === S && (S = !0);
                try {
                    S = JSON.parse(S);
                } catch (G) {
                    console && console.error(G);
                }
                if (0 === M.indexOf(":")) {
                    var q = !1;
                    M = M.substring(1);
                    try {
                        S = JSON.parse(S);
                    } catch (K) {
                        B[M] = S;
                        q = !0;
                    }
                    !q && (V[M] = S);
                }
                0 === M.indexOf("@") ? (M = M.substring(1), B[M] = S) : V[M] = S;
            });
            return {
                props: V,
                bound: B
            };
        };
        L.nextTick = function (Y) {
            window.Promise ? Promise.resolve().then(Y) : window.setTimeout(Y, 0);
        };
        L.diffDataToUpdate = function (Y, y) {
            var V = {};
            for (var B in Y) {
                var J = Y[B];
                J !== y[B] && (V[B] = J);
            }
            return V;
        };
        L.lifeCycleHooks = ["beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy"];
    }, function (A, L, D) {
        function Y(B) {
            var J = this;
            V.mixin(this);
            var X = function (s) {
                    return J.resolve(s);
                },
                P = function (s) {
                    return J.resolve(s);
                };
            "function" == typeof B && B(X, P);
        }
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (B) {
                return typeof B;
            } : function (B) {
                return B && "function" == typeof Symbol && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
            },
            V = D(21);
        Y.all = function (B) {
            return new Y(function (J, X) {
                var P = 0,
                    s = !1,
                    r = [];
                B.map(function (M, S) {
                    M.then(function (q) {
                        s || (r[S] = q, P++, P === B.length && J(r));
                    }).catch(function (q) {
                        s = !0;
                        X(q);
                    });
                });
            });
        };
        Y.resolve = function (B) {
            return B && "object" === ("undefined" == typeof B ? "undefined" : y(B)) && "function" == typeof B.then ? B : new Y(function (J) {
                return J(B);
            });
        };
        Y.reject = function (B) {
            return new Y(function (J, X) {
                return X(B);
            });
        };
        A.exports = Y;
    }, function (A, L) {
        var D = {
            FETCH_CAPTCHA: "FETCH_CAPTCHA",
            FETCH_INTELLISENSE_CAPTCHA: "FETCH_INTELLISENSE_CAPTCHA",
            VERIFY_CAPTCHA: "VERIFY_CAPTCHA",
            VERIFY_INTELLISENSE_CAPTCHA: "VERIFY_INTELLISENSE_CAPTCHA",
            RESET_STATE: "RESET_STATE"
        };
        A.exports = D;
    }, function (L, V, B) {
        function J(fM, fu, fS) {
            fu in fM ? Object.defineProperty(fM, fu, {
                value: fS,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : fM[fu] = fS;
            return fM;
        }
        function X(fM, fu) {
            if (!fM) {
                return {};
            }
            var fS = fM.customStyles,
                fq = fM.width,
                fG = fM.minWidth,
                fe = parseInt(fS.controlBar.height, 10),
                fK = parseInt(fS.gap, 10),
                fF = Math.max(parseInt(fq, 10), parseInt(fG, 10)) / 2;
            return {
                controlBarHeight: fe,
                imagePanelHeight: fu ? 0 : fF,
                gapHeight: fu ? 0 : fK,
                total: fu ? fe : fe + fK + fF
            };
        }
        var q,
            G = B(3),
            K = B(4),
            F = B(5),
            U = F.CAPTCHA_TYPE,
            j = F.CAPTCHA_CLASS,
            Q = F.WIDTH_LIMIT,
            W = F.SIZE_TYPE,
            Z = F.LARGE_SIZE_TYPE,
            H = F.RTL_LANGS,
            f0 = B(17),
            f1 = f0.applyColorIfNeed,
            f2 = f0.applyStyleIfNeed,
            f3 = B(19),
            f4 = B(6),
            f5 = f4.SWITCH_TYPE,
            f6 = f4.INVOKE_HOOK,
            f7 = f4.EVENT_RESET,
            f8 = f4.SWITCH_LOAD_STATUS,
            f9 = f4.UPDATE_VERIFY_STATUS,
            ff = f4.REFRESH,
            fv = f4.EVENT_RESET_CLASSIC,
            fA = f4.SET_TOKEN,
            fL = f4.UPDATE_CORE_WIDTH,
            fD = B(14),
            fY = fD.FETCH_CAPTCHA,
            fy = fD.VERIFY_CAPTCHA,
            fV = fD.RESET_STATE,
            fB = B(36),
            fJ = B(37),
            fX = B(38),
            fP = B(35),
            fs = B(39),
            fr = B(34);
        L.exports = {
            el: ".yidun",
            template: B(73),
            props: {
                autoWidth: {
                    type: Boolean,
                    default: !1
                },
                intellisense: {
                    type: Boolean,
                    default: !1
                },
                enableColor: {
                    type: Boolean,
                    default: !1
                },
                onWidthGeted: Function
            },
            data: function () {
                var fM = this.$store.state,
                    fu = fM.captchaType,
                    fS = fM.langPkg,
                    fq = fM.config,
                    fG = fM.load,
                    fe = fM.verifyStatus,
                    fK = fM.smsNew,
                    fF = fM.smsVersion,
                    fU = K.isMobile && this.intellisense && "bind" !== fq.mode ? "260px" : fq.width;
                return {
                    captchaId: fq.captchaId,
                    captchaType: fu,
                    theme: fq.theme,
                    customStyles: fq.customStyles,
                    feedback: {
                        url: fq.feedbackUrl,
                        enable: !!fq.feedbackEnable
                    },
                    mode: "bind" === fq.mode ? "popup" : this.intellisense ? "embed" : fq.mode,
                    width: this.autoWidth ? "auto" : fU,
                    size: fq.size,
                    minWidth: Q[0] + "px",
                    langPkg: fS,
                    smsNew: fK,
                    smsVersion: fF,
                    load: fG,
                    verifyStatus: fe,
                    verifyPayload: null,
                    inferences: [0, 1, 2, 3, 4, 5, 6, 7],
                    audio: fq.__serverConfig__.audio && K.supportAudio,
                    fixedAudio: !1,
                    isRtlLang: H.indexOf(fq.lang) !== -1,
                    isMobile: K.isMobile,
                    disableFocusVisible: fq.disableFocusVisible
                };
            },
            on: (q = {}, J(q, "." + j.REFRESH + " click", function (fM) {
                this.switchTypeAndRefresh(fM);
            }), J(q, ".yidun_tips click", function () {
                var fM = this.$store.state,
                    fu = fM.config,
                    fS = fM.countsOfVerifyError,
                    fq = fM.verifyStatus;
                "error" === fq && fS > fu.maxVerification && this.$store.commit(fv);
            }), q),
            watch: {
                captchaType: function (fM, fu) {
                    fM !== fu && this.updateUIByType(fM, fu);
                }
            },
            mounted: function () {
                var fM = this,
                    fu = this.$store.state,
                    fS = fu.config,
                    fq = fu.token;
                f1(fS.customStyles.primaryColor, this.$el, this.enableColor);
                f2(fS.customStyles, this.$el, this.enableColor);
                this._baseClassNames = this.$el.className.trim();
                this._removeEvents = this.initEvents();
                this._unsubscribe = this.$store.subscribe(function (fG, fe) {
                    var fK = fG.type,
                        fF = fG.payload,
                        fU = fe.captchaType,
                        fc = fe.load,
                        fR = fe.verifyStatus;
                    switch (fK) {
                        case f5:
                            fM.$setData({
                                captchaType: fU
                            });
                            break;
                        case f8:
                            fM.$setData({
                                load: fc
                            });
                            fc && "done" === fc.status && fM.$store.commit(f6, {
                                name: "onDidRefresh"
                            });
                            break;
                        case f9:
                            fM.$setData({
                                verifyStatus: fR,
                                verifyPayload: fF
                            });
                            break;
                        case f7:
                            fM.$setData({
                                fixedAudio: !1
                            });
                            !fM.intellisense && fM.reset();
                            break;
                        case fv:
                            var fj = fM.intellisense ? {
                                token: fq
                            } : null;
                            fM.$setData({
                                fixedAudio: !1
                            });
                            fM.reset(fj);
                            break;
                        case fA:
                            fM.setFeedbackUrl();
                    }
                });
                this.intellisense || this.reset({
                    token: fq
                });
                "bind" === fS.mode && this.refresh({
                    token: fq
                });
            },
            beforeDestroy: function () {
                this._unsubscribe();
                this._removeEvents();
            },
            render: function (fM) {
                var fu = fM.captchaType,
                    fS = fM.load,
                    fq = fM.verifyStatus,
                    fG = fM.verifyPayload;
                "undefined" != typeof fu && this.switchCaptchaType(fu);
                "undefined" != typeof fS && this.changeLoadStatus(fS);
                "undefined" != typeof fq && this.updateVerifyStatus(fq, fG);
            },
            methods: {
                initEvents: function () {
                    var fM = this,
                        fu = void 0;
                    "float" === this.mode && (fu = this.initFloatMode());
                    var fS = function (fe) {
                        /^IMG$/i.test(fe.target.tagName) && fe.preventDefault();
                    };
                    K.on(this.$el, "dragstart", fS);
                    var fq = function (fe) {
                            fM.switchTypeAndRefresh(fe, !0);
                        },
                        fG = K.find(".yidun_top__audio", this.$el);
                    fG && K.on(fG, "click", fq, !0);
                    return function () {
                        fu && fu();
                        K.off(fM.$el, "dragstart", fS);
                        fG && K.off(fG, "click", fq, !0);
                    };
                },
                initFloatMode: function () {
                    var fM = this,
                        fu = K.find("." + j.PANEL, this.$el),
                        fS = K.find("." + j.CONTROL, this.$el),
                        fq = !1,
                        fG = null,
                        fe = null,
                        fK = K.transition(fu, {
                            name: "panel_ease_" + this.customStyles.imagePanel.align,
                            insert: function (ft) {
                                ft.style.display = "block";
                                fq = !0;
                            },
                            afterLeave: function (ft) {
                                ft.style.display = "none";
                                fq = !1;
                            },
                            leaveCanceled: function (ft) {
                                ft.style.display = "none";
                                fq = !1;
                            }
                        }),
                        fF = this,
                        fU = function (ft) {
                            fF.panelVisible = !ft;
                            fF.$children && fF.$children.map(function (fm) {
                                fm.floatStatusChange && fm.floatStatusChange();
                            });
                            K.isMobile && setTimeout(function () {
                                fF._isMounted && fF.$store.commit(f6, {
                                    name: "onFloatHeightChange",
                                    args: [X(fF.$data, ft)]
                                });
                            }, 200);
                        },
                        fc = !0,
                        fR = function (ft) {
                            if (fM._isMounted) {
                                var fm = ft.relatedTarget && fM.$el.contains(ft.relatedTarget);
                                if ((fc || !fm || "mouseover" !== ft.type) && (fc = !1, window.clearTimeout(fe), fK.cancelLeave(), "success" !== fM.$store.state.verifyStatus)) {
                                    return fq ? fU() : void (fG = window.setTimeout(function () {
                                        var fk = document.activeElement;
                                        fk && fk !== document.body && fk.blur();
                                        fK.enter();
                                        fU();
                                    }, 300));
                                }
                            }
                        },
                        fj = function (ft) {
                            if (fM._isMounted) {
                                var fm = ft.relatedTarget && fM.$el.contains(ft.relatedTarget),
                                    fk = !(K.isMobile || !K.supportTouch) && null === ft.relatedTarget;
                                if (!fm && !fk || "mouseout" !== ft.type) {
                                    fc = !0;
                                    var fW = K.getBubblePath(ft.target);
                                    if (!(~["touchstart", "pointerdown"].indexOf(ft.type) && ~fW.indexOf(fM.$el) || ~["mouseleave", "pointerleave"].indexOf(ft.type) && null === ft.event.relatedTarget)) {
                                        window.clearTimeout(fG);
                                        fK.cancelEnter();
                                        var fb = fM.$children[0],
                                            fC = fb && fb.drag;
                                        !fq || fC && "dragging" === fC.status || (fe = window.setTimeout(function () {
                                            fK.leave();
                                            fU(!0);
                                        }, 300));
                                    }
                                }
                            }
                        },
                        fn = this.$store.subscribe(function (ft, fm) {
                            var fk = ft.type;
                            fk === f9 && "success" === fm.verifyStatus && (fK.leave(), fU(!0));
                        }),
                        fN = G.msie(),
                        fQ = fN ? "mouseenter" : "mouseover",
                        fl = fN ? "mouseleave" : "mouseout";
                    switch (K.on(fS, "focus", fR), !0) {
                        case K.isMobile:
                            K.on(fS, "touchstart", fR);
                            K.on(document.body, "touchstart", fj);
                            break;
                        case !K.isMobile && K.supportTouch:
                            K.on(fS, "touchstart", fR);
                            K.on(document.body, "touchstart", fj);
                            K.on(this.$el, fQ, fR);
                            K.on(this.$el, fl, fj);
                            break;
                        case K.supportPointer:
                            K.on(fS, "pointerdown", fR);
                            K.on(document.body, "pointerdown", fj);
                            K.on(this.$el, "pointerenter", fR);
                            K.on(this.$el, "pointerleave", fj);
                            break;
                        default:
                            K.on(this.$el, fQ, fR);
                            K.on(this.$el, fl, fj);
                    }
                    return function () {
                        K.off(fS, "focus", fR);
                        K.off(fM.$el, fQ, fR);
                        K.off(fM.$el, fl, fj);
                        K.off(fS, "touchstart", fR);
                        K.off(document.body, "touchstart", fj);
                        K.supportPointer && (K.off(fS, "pointerdown", fR), K.off(document.body, "pointerdown", fj), K.off(fM.$el, "pointerenter", fR), K.off(fM.$el, "pointerleave", fj));
                        fn();
                        fK.dispose();
                    };
                },
                switchTypeAndRefresh: function (fM, fu) {
                    fM.stopPropagation();
                    var fS = this.$store.state,
                        fq = fS.config,
                        fG = fS.countsOfVerifyError,
                        fe = fS.verifyStatus;
                    fG > fq.maxVerification || "verifying" === fe && this.captchaType !== U.SMS || this.load && "loading" === this.load.status || (void 0 !== fu && this.$setData({
                        fixedAudio: fu
                    }), this.refresh());
                },
                fetchCaptcha: function (fM, fu) {
                    var fS = {
                        width: this.getWidth(),
                        audio: this.fixedAudio || !1,
                        sizeType: this.getSizeType(),
                        smsVersion: this.smsVersion,
                        token: this.intellisense ? this.$store.state.token : this.$store.state.previousToken
                    };
                    this.smsNew;
                    Object.assign(fS, fM);
                    this.$store.dispatch(fY, fS, fu);
                    this.onWidthGeted && "function" == typeof this.onWidthGeted && this.onWidthGeted();
                },
                verifyCaptcha: function (fM) {
                    this.$store.commit(f9, {
                        verifyStatus: "verifying"
                    });
                    var fu = this.$store.state.token;
                    this.$store.dispatch(fy, Object.assign({
                        token: fu,
                        width: this.getWidth()
                    }, fM));
                },
                reset: function (fM) {
                    this.$store.dispatch(fV);
                    this.refresh(fM);
                },
                refresh: function (fM, fu) {
                    var fS = this.$children[0];
                    fS && fS.reset();
                    this.$store.commit(ff);
                    this.fetchCaptcha(fM, fu);
                },
                updateUIByType: function (fM, fu) {
                    fu && K.delClass(this.$el, this.getCaptchaTypeClassName(fu));
                    K.addClass(this.$el, this.getCaptchaTypeClassName(fM));
                },
                getCaptchaTypeClassName: function (fM) {
                    return fM ? j.CAPTCHA + "--" + G.getObjKey(U, fM).toLowerCase() : "";
                },
                getWidth: function () {
                    var fM = this.$el.offsetWidth;
                    this.$store.commit(fL, {
                        coreOffsetWidth: fM
                    });
                    return fM;
                },
                getSizeType: function () {
                    return Object.keys(Z).indexOf(this.size) !== -1 ? W.LARGE : W.DEFAULT;
                },
                resetClassNames: function () {
                    for (var fM = this._baseClassNames.split(/\s+/), fu = arguments.length, fS = Array(fu), fq = 0; fq < fu; fq++) {
                        fS[fq] = arguments[fq];
                    }
                    this.$el.className = f3(fM, this.getCaptchaTypeClassName(this.captchaType), fS);
                },
                switchCaptchaType: function (fM) {
                    if (fM) {
                        var fu = U.JIGSAW,
                            fS = U.POINT,
                            fq = U.SMS,
                            fG = U.ICON_POINT,
                            fe = U.WORD_GROUP,
                            fK = U.INFERENCE,
                            fF = U.AVOID,
                            fU = U.WORD_ORDER,
                            fc = U.SPACE,
                            fR = U.VOICE,
                            fj = {
                                el: this.$el,
                                propsData: {
                                    loadInfo: this.load,
                                    mode: this.mode,
                                    size: this.size,
                                    type: fM,
                                    onVerifyCaptcha: this.verifyCaptcha.bind(this),
                                    fixedAudio: this.fixedAudio,
                                    isRtlLang: this.isRtlLang
                                },
                                _boundProps: {
                                    loadInfo: "load"
                                },
                                $parent: this
                            },
                            fn = this.$children[0];
                        switch (fn && fn.$destroy(), fM) {
                            case fu:
                                fn = new fB(fj);
                                break;
                            case fS:
                            case fG:
                            case fe:
                            case fU:
                            case fc:
                                fn = new fJ(fj);
                                break;
                            case fq:
                                fn = new fX(fj);
                                break;
                            case fK:
                                fn = new fP(fj);
                                break;
                            case fR:
                                fn = new fs(fj);
                                break;
                            case fF:
                                fn = new fr(fj);
                        }
                        fn.$forceUpdate();
                        this.$children = [fn];
                    }
                },
                changeLoadStatus: function (fM) {
                    if (fM) {
                        var fu = j.CAPTCHA,
                            fS = j.LOADING,
                            fq = j.LOADFAIL,
                            fG = j.LOADTEXT,
                            fe = K.find("." + fG, this.$el),
                            fK = K.find(".yidun_tips__text", this.$el),
                            fF = K.find(".yidun_tips__answer", this.$el),
                            fU = this.$store.state.langPkg,
                            fc = fM.status,
                            fR = fM.data;
                        switch (fc) {
                            case "loading":
                                fR || (this.resetClassNames(fu + "--" + fS), K.text(fe, fU.loading), K.text(fK, fU.loading), K.addClass(fF, "hide"));
                                break;
                            case "done":
                                this.resetClassNames();
                                break;
                            case "fail":
                                this.resetClassNames(fu + "--" + fq);
                                K.supportAudio || this.captchaType !== U.VOICE ? (K.text(fe, fU.loadfail), K.text(fK, fU.loadfail)) : (K.text(fe, fU.notSupportVoice), K.text(fK, fU.notSupportVoice));
                                K.addClass(fF, "hide");
                        }
                        "done" !== fc || this.intellisense || this.isReady || (this.isReady = !0, this.$store.commit(f6, {
                            name: "onReady"
                        }));
                    }
                },
                updateVerifyStatus: function (fM, fu) {
                    var fS = this,
                        fq = j.CAPTCHA,
                        fG = j.SUCCESS,
                        fe = j.VERIFY,
                        fK = j.ERROR,
                        fF = K.find(".yidun_tips__text", this.$el),
                        fU = K.find(".yidun_tips__answer", this.$el),
                        fc = K.find(".yidun_slider__icon--img", this.$el),
                        fR = this.$data.customStyles,
                        fj = fR.controlBar,
                        fn = void 0 === fj ? {} : fj,
                        fN = fR.icon,
                        fQ = void 0 === fN ? {} : fN,
                        fl = this.$store.state,
                        ft = fl.langPkg,
                        fm = fl.config,
                        fk = fl.countsOfVerifyError,
                        fW = function (fT) {
                            !fQ.slider && fc && (fT ? (fc.src = fT, fc.style.display = "block") : fc.style.display = "none");
                        };
                    switch (fM) {
                        case "verifying":
                            this.resetClassNames(fq + "--" + fe);
                            break;
                        case "success":
                            this.resetClassNames(fq + "--" + fG);
                            this.captchaType === U.JIGSAW ? K.text(fF, "") : K.text(fF, ft.verifySuccess);
                            K.addClass(fU, "hide");
                            fW(fn.slideIconSuccess);
                            break;
                        case "error":
                            var fb = fk > fm.maxVerification,
                                fC = fq + "--" + fK,
                                fw = fb ? fC + " yidun--maxerror" : fC;
                            if (this.resetClassNames(fw), fb ? K.text(fF, ft.verifyOutOfLimit) : this.captchaType === U.JIGSAW ? K.text(fF, "") : K.text(fF, ft.verifyError), K.addClass(fU, "hide"), fW(fn.slideIconError), !fb) {
                                var fE = [U.POINT, U.INFERENCE, U.WORD_ORDER, U.ICON_POINT, U.WORD_GROUP, U.SPACE].indexOf(this.captchaType) > -1 ? 1200 : fm.refreshInterval;
                                this.captchaType === U.VOICE && (fE = 2500);
                                window.setTimeout(function () {
                                    return fS.refresh();
                                }, fE);
                            }
                    }
                },
                setFeedbackUrl: function () {
                    var fM = K.find(".yidun_feedback", this.$el);
                    if (fM) {
                        var fu = this.$store.state.token,
                            fS = "" + this.feedback.url,
                            fq = G.encodeUrlParams({
                                captchaId: this.captchaId,
                                token: fu
                            }),
                            fG = fS.indexOf("?") === -1 ? "?" : "&";
                        fM.href = "" + fS + fG + fq;
                    }
                },
                shouldHandleFloatChange: function (fM) {
                    var fu = this.$store.state,
                        fS = fu.countsOfVerifyError,
                        fq = fu.verifyStatus,
                        fG = fu.config;
                    return !(fS > fG.maxVerification) && (!fM || "done" === fM.status) && !fq;
                }
            }
        };
    }, function (A, L, D) {
        function V(I, O) {
            var Z = {};
            for (var z in I) O.indexOf(z) >= 0 || Object.prototype.hasOwnProperty.call(I, z) && (Z[z] = I[z]);
            return Z;
        }
        function B(I) {
            I.stopPropagation();
            I.nativeEvent.stopPropagation();
            this.close(Q.USER);
        }
        function J(I) {
            return /[%|em|rem]/.test(I);
        }
        function X(I, O, Z) {
            O = O || I;
            Z = Z || I;
            return J(O) || J(Z) ? 0 : (O = parseFloat(O, 10), Z = parseFloat(Z, 10), N[0] + O + Z + 2);
        }
        function P(I, O, Z) {
            if (!O) {
                return I;
            }
            var H = Object.assign({}, I, O),
                f0 = H.capPadding,
                f1 = H.capPaddingTop,
                f2 = H.capPaddingRight,
                f3 = H.capPaddingBottom,
                f4 = H.capPaddingLeft,
                f5 = H.capBarHeight,
                f6 = H.capBarTextSize,
                f7 = H.width,
                f8 = H.top,
                f9 = H.bottom,
                ff = H.opacity,
                fv = H.radius,
                fA = H.paddingTop,
                fL = H.paddingBottom,
                fD = H.position,
                fY = V(H, ["capPadding", "capPaddingTop", "capPaddingRight", "capPaddingBottom", "capPaddingLeft", "capBarHeight", "capBarTextSize", "width", "top", "bottom", "opacity", "radius", "paddingTop", "paddingBottom", "position"]);
            f0 = parseFloat(f0, 10);
            f0 = f0 && 0 !== f0 ? f0 : I.capPadding;
            f1 = f1 && parseFloat(f1, 10);
            f2 = f2 && parseFloat(f2, 10);
            f3 = f3 && parseFloat(f3, 10);
            f4 = f4 && parseFloat(f4, 10);
            f5 = 0 !== f5 && E(f5) || E(I.capBarHeight);
            f6 = E(f6);
            fv = E(fv);
            fA = E(fA);
            fL = E(fL);
            ff = parseFloat(ff);
            !ff && 0 !== ff && (ff = I.opacity);
            "static" === fD && (fD = I.position);
            var fy = "auto" !== f7;
            if (fy) {
                var fV = X(f0, f2, f4);
                (Z <= 1 || !J(f7)) && (f7 = parseFloat(f7, 10) || 0, f7 = f7 > fV ? f7 : fV, f7 += "px");
            }
            "auto" !== f9 && (f8 = "auto", "number" === q.typeOf(f9) || Number(f9) || "0" === f9 ? f9 += "px" : /\d+(\.\d+)?(px|rem)/.test(f9) || (f9 = parseFloat(f9, 10) || 0, f9 = f9 >= 0 && f9 <= 100 ? f9 + "%" : I.bottom));
            var fB = "auto" !== f8;
            fB && ("number" === q.typeOf(f8) || Number(f8) || "0" === f8 ? f8 += "px" : /\d+(\.\d+)?(px|rem)/.test(f8) || (f8 = parseFloat(f8, 10) || 0, f8 = f8 >= 0 && f8 <= 100 ? f8 + "%" : I.top));
            return M({
                width: f7,
                top: f8,
                bottom: f9,
                capPadding: f0,
                capPaddingTop: f1,
                capPaddingRight: f2,
                capPaddingBottom: f3,
                capPaddingLeft: f4,
                capBarHeight: f5,
                capBarTextSize: f6,
                opacity: ff,
                radius: fv,
                paddingTop: fA,
                paddingBottom: fL,
                position: fD
            }, fY);
        }
        var M = Object.assign || function (I) {
                for (var O = 1; O < arguments.length; O++) {
                    var Z = arguments[O];
                    for (var z in Z) Object.prototype.hasOwnProperty.call(Z, z) && (I[z] = Z[z]);
                }
                return I;
            },
            S = D(4),
            q = D(3),
            G = D(6),
            K = G.UPDATE_VERIFY_STATUS,
            F = G.EVENT_CLOSE,
            U = D(15),
            R = D(5),
            j = R.RTL_LANGS,
            N = R.WIDTH_LIMIT,
            Q = R.CLOSE_SOURCE,
            W = D(17),
            C = W.applyColorIfNeed,
            w = W.applyStyleIfNeed,
            E = D(23),
            T = {
                capPadding: 15,
                capBarHeight: 50,
                width: "auto",
                top: "20%",
                opacity: 0.3,
                position: "",
                bottom: "auto"
            };
        A.exports = {
            el: ".yidun_popup",
            template: D(75),
            components: {
                "captcha-core": U
            },
            props: {
                autoOpen: {
                    type: Boolean,
                    default: !0
                },
                intellisense: {
                    type: Boolean,
                    default: !1
                },
                enableColor: {
                    type: Boolean,
                    default: !1
                },
                onOpen: Function,
                onBeforeClose: Function,
                onClose: Function,
                onWidthGeted: Function
            },
            data: function () {
                var I = this.$store.state,
                    O = I.langPkg,
                    Z = I.config,
                    z = M({}, T, Z.appendTo ? {
                        top: "auto"
                    } : {}),
                    H = P(z, Z.popupStyles, Z.apiVersion),
                    f0 = "auto" !== H.width,
                    f1 = "auto" !== H.top,
                    f2 = "auto" !== H.bottom;
                return {
                    langPkg: O,
                    widthIsNotAuto: f0,
                    width: H.width,
                    topIsNotAuto: f1,
                    bottomIsNotAuto: f2,
                    theme: Z.theme,
                    size: Z.size,
                    curCloseSource: "",
                    popupStyles: H,
                    appendTo: Z.appendTo,
                    isRtlLang: j.indexOf(Z.lang) !== -1,
                    enableClose: Z.enableClose,
                    hideCloseBtn: Z.hideCloseBtn,
                    disableMaskClose: Z.disableMaskClose,
                    enableAutoFocus: Z.enableAutoFocus,
                    disableFocusVisible: Z.disableFocusVisible,
                    bodyCloseModalFn: this.bodyCloseModal.bind(this)
                };
            },
            on: Object.assign({
                ".yidun_modal__close click": B
            }, {
                ".yidun_popup__mask click": function (I) {
                    this.disableMaskClose || B.call(this, I);
                }
            }),
            mounted: function () {
                var I = this,
                    O = this.$store.state.config;
                C(O.customStyles.primaryColor, this.$el, this.enableColor);
                w(O.customStyles, this.$el);
                var Z = S.find(".yidun_modal", this.$el),
                    z = S.find(".yidun_popup__mask", this.$el),
                    H = null,
                    f0 = this.popupStyles.opacity;
                S.on(this.appendTo ? z : document, "click", this.bodyCloseModalFn);
                this._transition = S.transition(Z, {
                    name: "popup_ease",
                    beforeEnter: function () {
                        z.style.opacity = "0";
                        I.onOpen && I.onOpen();
                        I.enableAutoFocus && document.activeElement && document.activeElement !== Z && (H = document.activeElement);
                    },
                    insert: function () {
                        if (I.$el.style.display = "block", I.$store.state.config.apiVersion > 1 && J(I.width) && I.widthIsNotAuto) {
                            var f1 = X(I.popupStyles.capPadding);
                            Z.offsetWidth < f1 && (I.$setData({
                                width: f1 + "px"
                            }), Z.style.width = f1 + "px");
                        }
                        I.enableAutoFocus && Z.focus();
                    },
                    enter: function () {
                        z.style.opacity = f0;
                    },
                    leave: function () {
                        z.style.opacity = "0";
                    },
                    afterLeave: function () {
                        var f1 = I.onClose;
                        I.$el.style.display = "none";
                        I.$store.commit(F);
                        f1 && f1(I.curCloseSource);
                        I.enableAutoFocus && H && H.focus();
                    }
                });
                this._unsubscribe = this.$store.subscribe(function (f1, f2) {
                    var f3 = f1.type;
                    f3 === K && "success" === f2.verifyStatus && window.setTimeout(function () {
                        I.close();
                    }, 500);
                });
                this.autoOpen && this.open();
            },
            beforeDestroy: function () {
                this._transition.dispose();
                S.off(this.appendTo ? S.find(".yidun_popup__mask", this.$el) : document, "click", this.bodyCloseModalFn);
            },
            methods: {
                onWidthGetedForCore: function () {
                    this.onWidthGeted && "function" == typeof this.onWidthGeted && this.onWidthGeted(this.$el);
                },
                open: function () {
                    var I = this;
                    q.nextFrame(function () {
                        return I._transition.enter();
                    });
                },
                bodyCloseModal: function (I) {
                    var O = S.className(I.target);
                    O && O.search(/yidun/g) > -1 || this.close(Q.USER);
                },
                close: function (I) {
                    this.$store.state.config.enableClose || this.closeModal(I);
                },
                closeModal: function () {
                    var I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q.PROCESS;
                    this._isMounted && "none" !== this.$el.style.display && (this.$store.state.config.enableClose && (I = Q.CLOSE), this.onBeforeClose && this.onBeforeClose(), this.curCloseSource = I, this._transition.leave());
                },
                refresh: function () {
                    var I = this.$children[0];
                    I && I.refresh.apply(I, arguments);
                }
            }
        };
    }, function (A, L, D) {
        function Y(J, X) {
            var P = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (J && P) {
                var s = B.uuid(),
                    M = "\n    .yidun_intellisense .yidun_intelli-tips:hover .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--checking .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--loading .yidun_intelli-icon,\n    .yidun.yidun--jigsaw .yidun_control .yidun_slider:hover,\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slider {\n      background-color: " + J + ";\n    }\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      border-color: " + J + ";\n    }\n  ",
                    S = Object.assign([["NECaptcha-color__" + s, M]]);
                V(S, X);
            }
        }
        function y(J, X) {
            var P = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (P) {
                var M = J.controlBar,
                    S = J.imagePanel,
                    q = "";
                if (M) {
                    var G = M.borderColor,
                        K = M.background,
                        F = M.borderColorMoving,
                        U = M.backgroundMoving,
                        R = M.borderColorSuccess,
                        j = M.backgroundSuccess,
                        N = M.borderColorError,
                        Q = M.backgroundError,
                        W = M.slideBackground,
                        C = M.textSize,
                        w = M.textColor,
                        E = M.paddingLeft;
                    q += "\n    .yidun.yidun-custom.yidun--light .yidun_control,\n    .yidun.yidun-custom.yidun--dark .yidun_control {\n      " + (G ? "border-color: " + G : "") + ";\n      " + (K ? "background: " + K : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      " + (F ? "border-color: " + F : "") + ";\n      " + (U ? "background: " + U : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slider,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slider {\n      " + (F ? "background: " + F : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_control .yidun_slide_indicator {\n      " + (R ? "border-color: " + R : "") + ";\n      " + (j ? "background: " + j : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--success .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--success .yidun_control .yidun_slider {\n      " + (R ? "background: " + R : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--success:not(.yidun--jigsaw) .yidun_control {\n      " + (R ? "border-color: " + R : "") + ";\n      " + (j ? "background: " + j : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_tips {\n      " + (R ? "color: " + R : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_control .yidun_slide_indicator {\n      " + (N ? "border-color: " + N : "") + ";\n      " + (Q ? "background: " + Q : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--error .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--error .yidun_control .yidun_slider {\n      " + (N ? "background: " + N : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error:not(.yidun--jigsaw) .yidun_control {\n      " + (N ? "border-color: " + N : "") + ";\n      " + (Q ? "background: " + Q : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_control {\n      " + (N ? "border-color: " + N : "") + ";\n      " + (Q ? "background: " + Q : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_tips {\n      " + (N ? "color: " + N : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_tips {\n      " + (N ? "color: " + N : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider {\n      " + (W ? "background: " + W : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover {\n      " + (F ? "background: " + F : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_tips__content,\n    .yidun.yidun-custom.yidun--dark .yidun_tips__content {\n      " + (C ? "font-size: " + C : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light:not(.yidun--error):not(.yidun--success) .yidun_tips,\n    .yidun.yidun-custom.yidun--dark:not(.yidun--error):not(.yidun--success) .yidun_tips {\n      " + (w ? "color: " + w : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_tips {\n      " + (E ? "padding-left: " + E : "") + ";\n    }\n  ";
                }
                if (S) {
                    var T = S.loadBackgroundImage,
                        I = S.loadBackgroundColor;
                    q += "\n    .yidun.yidun-custom.yidun--light .yidun_loadbox,\n    .yidun.yidun-custom.yidun--dark .yidun_loadbox {\n      " + (T ? "background-image: url(" + T + ")" : "") + ";\n      " + (I ? "background-color: " + I : "") + ";\n    }\n    ";
                }
                var O = B.uuid(),
                    Z = Object.assign([["NECaptcha-color__" + O, q]]);
                V(Z, X);
            }
        }
        var V = D(24),
            B = D(3);
        A.exports = {
            applyColorIfNeed: Y,
            applyStyleIfNeed: y
        };
    }, function (A, L) {
        A.exports = function (D) {
            var Y = D.protocol,
                V = void 0 === Y ? "" : Y,
                B = D.host,
                J = void 0 === B ? "" : B,
                X = D.port,
                P = void 0 === X ? "" : X,
                M = D.path,
                S = void 0 === M ? "" : M,
                q = D.search,
                G = void 0 === q ? "" : q,
                K = D.hash,
                F = void 0 === K ? "" : K;
            if (V && (V = V.replace(/:?\/{0,2}$/, "://")), J) {
                var U = J.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
                J = U[1];
                S = (U[2] || "") + "/" + S;
            }
            if (!J && (V = ""), P) {
                if (!J) {
                    throw Error("\"host\" is required, if \"port\" was provided");
                }
                P = ":" + P;
            }
            S && (S = S.replace(/^\/*|\/+/g, "/"));
            G && (G = G.replace(/^\??/, "?"));
            F && (F = F.replace(/^#?/, "#"));
            return V + J + P + S + G + F;
        };
    }, function (A, L, D) {
        var Y,
            y,
            V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (B) {
                return typeof B;
            } : function (B) {
                return B && "function" == typeof Symbol && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
            };
        !function () {
            var B = function () {
                function J() {}
                function X(U, c) {
                    for (var R = c.length, j = 0; j < R; ++j) {
                        q(U, c[j]);
                    }
                }
                function P(U, c) {
                    U[c] = !0;
                }
                function M(U, c) {
                    for (var R in c) K.call(c, R) && (U[R] = !!c[R]);
                }
                function S(U, c) {
                    for (var R = c.split(F), j = R.length, N = 0; N < j; ++N) {
                        U[R[N]] = !0;
                    }
                }
                function q(U, c) {
                    if (c) {
                        var R = "undefined" == typeof c ? "undefined" : V(c);
                        "string" === R ? S(U, c) : Array.isArray(c) ? X(U, c) : "object" === R ? M(U, c) : "number" === R && P(U, c);
                    }
                }
                function G() {
                    for (var U = arguments.length, c = Array(U), R = 0; R < U; R++) {
                        c[R] = arguments[R];
                    }
                    var j = new J();
                    X(j, c);
                    var N = [];
                    for (var Q in j) j[Q] && N.push(Q);
                    return N.join(" ");
                }
                J.prototype = {};
                var K = {}.hasOwnProperty,
                    F = /\s+/;
                return G;
            }();
            "undefined" != typeof A && A.exports ? A.exports = B : "object" === V(D(28)) && D(28) ? (Y = [], y = function () {
                return B;
            }.apply(L, Y), !(void 0 !== y && (A.exports = y))) : window.classNames = B;
        }();
    }, function (A, L) {
        function D() {
            function y(S) {
                return X.call(V(S) ? S : function () {}, S, 1);
            }
            function V(S) {
                return ("undefined" == typeof S ? "undefined" : Y(S)) === P;
            }
            function B(S, q, G) {
                return function () {
                    var K = this.supr;
                    this.supr = G[M][S];
                    var F = {}.fabricatedUndefined,
                        U = F;
                    try {
                        U = q.apply(this, arguments);
                    } finally {
                        this.supr = K;
                    }
                    return U;
                };
            }
            function J(S, q, G) {
                for (var K in q) q.hasOwnProperty(K) && (S[K] = V(q[K]) && V(G[M][K]) && s.test(q[K]) ? B(K, q[K], G) : q[K]);
            }
            function X(S, q) {
                function G() {}
                function K() {
                    this.initialize ? this.initialize.apply(this, arguments) : (q || R && F.apply(this, arguments), j.apply(this, arguments));
                }
                G[M] = this[M];
                var F = this,
                    U = new G(),
                    R = V(S),
                    j = R ? S : this,
                    N = R ? {} : S;
                K.methods = function (Q) {
                    J(U, Q, F);
                    K[M] = U;
                    return this;
                };
                K.methods.call(K, N).prototype.constructor = K;
                K.extend = X;
                K[M].implement = K.statics = function (Q, m) {
                    Q = "string" == typeof Q ? function () {
                        var k = {
                            Q: m
                        };
                        return k;
                    }() : Q;
                    J(this, Q, F);
                    return this;
                };
                return K;
            }
            var P = "function",
                s = /xyz/.test(function () {
                    xyz;
                }) ? /\bsupr\b/ : /.*/,
                M = "prototype";
            return y;
        }
        var Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (y) {
            return typeof y;
        } : function (y) {
            return y && "function" == typeof Symbol && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
        };
        A.exports = D();
    }, function (A, L) {
        function D() {
            this._state = V;
            this._arg = void 0;
            this._fullfilledCallback = [];
            this._rejectedCallback = [];
        }
        function Y(X) {
            window.setTimeout(X, 1);
        }
        function y(X) {
            if (X) {
                var P = new D();
                X.then = function () {
                    return P.then.apply(P, arguments);
                };
                X.catch = function () {
                    return P.catch.apply(P, arguments);
                };
                X.finally = function () {
                    return P.finally.apply(P, arguments);
                };
                X.resolve = function () {
                    return P.resolve.apply(P, arguments);
                };
            }
        }
        var V = "pending",
            B = "fullfilled",
            J = "rejected";
        Object.assign(D.prototype, {
            then: function (X, P) {
                var s = function (M) {
                    return "function" == typeof M;
                };
                s(X) && this._fullfilledCallback.push(X);
                s(P) && this._rejectedCallback.push(P);
                this._state !== V && this._emit(this._state);
                return this;
            },
            catch: function (X) {
                return this.then(null, X);
            },
            finally: function (X) {
                return this.then(X, X);
            },
            resolve: function (X) {
                this._state === V && (X instanceof Error ? this._state = J : this._state = B, this._arg = X, this._emit(this._state));
            },
            _emit: function (X) {
                var P = this;
                switch (X) {
                    case B:
                        Y(function () {
                            P._fullfilledCallback.map(function (s) {
                                return s(P._arg);
                            });
                            P._fullfilledCallback = [];
                            P._rejectedCallback = [];
                        });
                        break;
                    case J:
                        Y(function () {
                            P._rejectedCallback.map(function (s) {
                                return s(P._arg);
                            });
                            P._fullfilledCallback = [];
                            P._rejectedCallback = [];
                        });
                }
            }
        });
        D.mixin = y;
        A.exports = D;
    }, function (A, L, D) {
        var Y = Object.assign || function (J) {
                for (var X = 1; X < arguments.length; X++) {
                    var P = arguments[X];
                    for (var s in P) Object.prototype.hasOwnProperty.call(P, s) && (J[s] = P[s]);
                }
                return J;
            },
            y = D(11),
            V = D(46),
            B = D(3);
        A.exports = function () {
            var J = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                X = J.captchaConfig,
                P = void 0 === X ? {} : X;
            return function (M, S, q, G) {
                var K = B.getDeviceToken();
                S = Object.assign({
                    referer: V(),
                    zoneId: P.zoneId || ""
                }, K ? {
                    dt: K
                } : {}, S);
                var F = Y({}, J, G, {
                    url: M,
                    payload: S
                });
                y.api(F).then(function (U) {
                    return q(null, U);
                }).catch(q);
            };
        };
    }, function (A, L) {
        A.exports = function (D) {
            if ("number" == typeof D || /^\d+(\.\d+)?$/.test(D)) {
                return D + "px";
            }
            if (void 0 !== D && "" !== D) {
                return D;
            }
        };
    }, function (A, L) {
        function D(J, X) {
            Object.keys(X).map(function (P) {
                J.setAttribute(P, X[P]);
            });
        }
        function Y(J, X) {
            var P = null;
            P = X && X.nodeType ? X : document.head || document.getElementsByTagName("head")[0];
            P.appendChild(J);
        }
        function y(J) {
            var X = document.createElement("style"),
                P = {
                    type: "text/css"
                };
            D(X, P);
            Y(X, J);
            return X;
        }
        function V(J, X, P) {
            var s = X.css,
                M = X.media;
            if (M && J.setAttribute("media", M), J.styleSheet) {
                J.styleSheet.cssText = s;
            } else {
                for (; J.firstChild;) {
                    J.removeChild(J.firstChild);
                }
                J.appendChild(document.createTextNode(s));
            }
        }
        var B = {};
        A.exports = function (J, X) {
            var P = J[0],
                s = P[0],
                M = {
                    css: P[1],
                    media: P[2]
                };
            !B[s] && (B[s] = y(X));
            V(B[s], M);
        };
    }, function (A, L) {
        function D() {
            var Y = "NECaptchaSafeWindow",
                y = function (M) {
                    var S = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    return M && "function" == typeof M.parseInt ? M : S;
                },
                V = function () {
                    var M = document.getElementById(Y);
                    M && (document.body.removeChild(M), M = null);
                },
                B = document.getElementById(Y);
            if (B) {
                var J = y(B.contentWindow);
                return {
                    safeGlobal: J,
                    destroy: V
                };
            }
            var X = null;
            try {
                var P = document.createElement("iframe");
                P.setAttribute("id", Y);
                P.style.display = "none";
                document.body.appendChild(P);
                X = P.contentWindow;
            } catch (M) {}
            var s = y(X);
            return {
                safeGlobal: s,
                destroy: V
            };
        }
        A.exports = D;
    }, function (A, L, D) {
        function V(b, C) {
            for (var w = [], E = 0; E < b; E++) {
                w.push(C);
            }
            return w;
        }
        function B(b) {
            return b < -128 ? B(256 + b) : b > 127 ? B(b - 256) : b;
        }
        function J(b, C) {
            return B(b + C);
        }
        function X() {
            for (var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], C = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], w = [], E = C.length, T = 0, I = b.length; T < I; T++) {
                w[T] = J(b[T], C[T % E]);
            }
            return w;
        }
        function P(b, C) {
            return B(B(b) ^ B(C));
        }
        function M() {
            for (var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], C = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], w = [], E = C.length, T = 0, I = b.length; T < I; T++) {
                w[T] = P(b[T], C[T % E]);
            }
            return w;
        }
        function S(b) {
            var C = [];
            C[0] = B(b >>> 24 & 255);
            C[1] = B(b >>> 16 & 255);
            C[2] = B(b >>> 8 & 255);
            C[3] = B(255 & b);
            return C;
        }
        function q(b) {
            b = "" + b;
            for (var C = [], w = W(), E = w.safeGlobal, T = 0, I = 0, O = b.length / 2; T < O; T++) {
                var Z = E.parseInt(b.charAt(I++), 16) << 4,
                    z = E.parseInt(b.charAt(I++), 16);
                C[T] = B(Z + z);
            }
            return C;
        }
        function G(b) {
            b = window.encodeURIComponent(b);
            for (var C = [], w = 0, E = b.length; w < E; w++) {
                "%" === b.charAt(w) ? w + 2 < E && C.push(q("" + b.charAt(++w) + b.charAt(++w))[0]) : C.push(B(b.charCodeAt(w)));
            }
            return C;
        }
        function K(b) {
            for (var C = [], w = 0; w < b.length; w++) {
                C.push("%");
                C.push(F(b[w]));
            }
            return window.decodeURIComponent(C.join(""));
        }
        function F(b) {
            var C = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            return "" + C[b >>> 4 & 15] + C[15 & b];
        }
        function U(b) {
            b = "" + b;
            var C = W(),
                w = C.safeGlobal,
                E = w.parseInt(b.charAt(0), 16) << 4,
                T = w.parseInt(b.charAt(1), 16);
            return B(E + T);
        }
        function R(b) {
            return b.map(function (C) {
                return F(C);
            }).join("");
        }
        function j(b) {
            return R(S(b));
        }
        function N(b, C, w, E, T) {
            for (var I = 0, O = b.length; I < T; I++) {
                C + I < O && (w[E + I] = b[C + I]);
            }
            return w;
        }
        function Q(b) {
            return V(b, 0);
        }
        function k(b) {
            for (var C = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], w = 4294967295, E = 0, T = b.length; E < T; E++) {
                w = w >>> 8 ^ C[255 & (w ^ b[E])];
            }
            return j(4294967295 ^ w);
        }
        var W = D(25);
        L.copyToBytes = N;
        L.genCrc32 = k;
        L.hexToByte = U;
        L.hexsToBytes = q;
        L.intToBytes = S;
        L.paddingArrayZero = Q;
        L.shift = J;
        L.shifts = X;
        L.stringToBytes = G;
        L.toByte = B;
        L.xor = P;
        L.xors = M;
        L.bytesToString = K;
    }, function (A, L) {
        A.exports = {
            __SBOX__: "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
            __ROUND_KEY__: "037606da0296055c",
            __SEED_KEY__: "fd6a43ae25f74398b61c03c83be37449",
            __BASE64_ALPHABET__: "MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo",
            __BASE64_PADDING__: "7"
        };
    }, function (A, L) {
        (function (D) {
            A.exports = D;
        }).call(L, {});
    }, function (A, L, D) {
        !function (Y, y) {
            A.exports = y();
        }(this, function () {
            'use strict';

            function Y(M) {
                var S = new RegExp("(^|;)[ ]*" + M + "=([^;]*)"),
                    q = S.exec(document.cookie);
                return q ? decodeURIComponent(q[2]) : "";
            }
            function y(M, S, q) {
                var G,
                    K = M + "=" + encodeURIComponent(S) + ";";
                q && (G = new Date(), G.setTime(G.getTime() + q), K += "expires=" + G.toUTCString());
                document.cookie = K;
            }
            function V() {
                for (var M = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", S = "", q = 0, G = M.length; q < 16; q++) {
                    S += M.charAt(Math.floor(Math.random() * G));
                }
                return S;
            }
            var B,
                J = function () {
                    J = Object.assign || function (M) {
                        for (var S, q = 1, G = arguments.length; q < G; q++) {
                            S = arguments[q];
                            for (var K in S) Object.prototype.hasOwnProperty.call(S, K) && (M[K] = S[K]);
                        }
                        return M;
                    };
                    return J.apply(this, arguments);
                },
                X = {
                    userData: null,
                    name: location.hostname + "_snaker",
                    init: function () {
                        if (!X.userData) {
                            try {
                                X.userData = document.createElement("INPUT");
                                X.userData.type = "hidden";
                                X.userData.style.display = "none";
                                X.userData.addBehavior("#default#userData");
                                X.userData && document.body.appendChild(X.userData);
                                var M = new Date();
                                M.setDate(M.getDate() + 365);
                                X.userData.expires = M.toUTCString();
                            } catch (S) {
                                console.log("userData is disabled!");
                                return !1;
                            }
                        }
                        return !0;
                    },
                    setItem: function (M, S) {
                        X.init() && X.userData && (X.userData.load(X.name), X.userData.setAttribute(M, S), X.userData.save(X.name));
                    },
                    getItem: function (M) {
                        return X.init() && X.userData ? (X.userData.load(X.name), X.userData.getAttribute(M) || "") : "";
                    },
                    removeItem: function (M) {
                        X.init() && X.userData && (X.userData.load(X.name), X.userData.removeAttribute(M), X.userData.save(X.name));
                    }
                };
            try {
                B = localStorage || X;
            } catch (M) {
                B = X;
            }
            var P = function () {
                    function S(q) {
                        this.name = q;
                    }
                    S.prototype.push = function (q) {
                        if (q) {
                            try {
                                var G = B.getItem(this.name);
                                B.setItem(this.name, G ? G + "," + q : q);
                            } catch (K) {
                                console.log("localstorage or userData is disabled!");
                            }
                        }
                    };
                    S.prototype.length = function () {
                        try {
                            var q = B.getItem(this.name) || "";
                            return q ? q.split(",").length : 0;
                        } catch (G) {
                            console.log("localstorage or userData is disabled!");
                            return 0;
                        }
                    };
                    S.prototype.pop = function (q) {
                        void 0 === q && (q = 1);
                        var G;
                        try {
                            var K = B.getItem(this.name),
                                F = K ? K.split(",") : [];
                            G = F.splice(0, q);
                            B.setItem(this.name, F.join(","));
                        } catch (U) {
                            G = [];
                            console.log("localstorage or userData is disabled!");
                        }
                        return G;
                    };
                    S.prototype.clear = function () {
                        try {
                            B.removeItem(this.name);
                        } catch (q) {
                            console.log("localstorage or userData is disabled!");
                        }
                    };
                    return S;
                }(),
                s = function () {
                    function S(q) {
                        if (!q.pid) {
                            throw new Error("product id is required!");
                        }
                        var G = q.pid,
                            K = q.bid,
                            F = q.url,
                            U = q.random,
                            R = q.limit,
                            j = q.disabled,
                            N = q.version;
                        this.pid = G;
                        this.bid = K;
                        this.random = U || 100;
                        this.limit = R || 5;
                        this.disabled = j;
                        this.version = N || "";
                        this.url = F || "https://da.dun.163.com/sn.gif";
                        this.prefix = "__snaker__id";
                        this.cache = new P(this.prefix);
                        var Q = Y(this.prefix);
                        Q ? this.uuid = Q : (this.uuid = V(), y(this.prefix, this.uuid, 31536000000));
                    }
                    S.prototype.setUser = function (q) {
                        if ("string" == typeof q) {
                            this.user = {
                                uid: q
                            };
                        } else {
                            this.user = {
                                uid: q.uid
                            };
                            for (var G in q) q.hasOwnProperty(G) && "uid" !== G && (this.user["$user_" + G] = q[G]);
                        }
                    };
                    S.prototype.serialize = function (q, G) {
                        var K = this,
                            F = K.pid,
                            U = K.bid,
                            R = K.uuid,
                            j = K.user,
                            N = K.version,
                            Q = q.type,
                            m = q.name,
                            k = q.value,
                            W = function (O, Z) {
                                return O.substring(0, Z);
                            },
                            b = screen.width + "x" + screen.height,
                            C = W(location.href, 200),
                            w = new Date().getTime() + "",
                            E = J(J({
                                pid: F,
                                bid: U,
                                uuid: R,
                                type: Q,
                                name: m,
                                version: N,
                                value: k,
                                res: b,
                                pu: C,
                                nts: w
                            }, G), j),
                            T = [];
                        for (var I in E) E.hasOwnProperty(I) && void 0 !== E[I] && T.push(encodeURIComponent(I + "=") + encodeURIComponent(encodeURIComponent(E[I])));
                        return T.join("%26");
                    };
                    S.prototype.sendRequest = function (q, G) {
                        if (!this.disabled) {
                            var K = new Image(1, 1);
                            K.src = q + "?d=" + G;
                        }
                    };
                    S.prototype.report = function (q, G, K, F, U) {
                        if (!this.disabled) {
                            var c = this.serialize({
                                type: q,
                                name: G,
                                value: K
                            }, U ? U : {});
                            this.random < Math.random() || (F ? (this.cache.push(c), this.cache.length() >= this.limit && this.flush()) : this.sendRequest(this.url, c));
                        }
                    };
                    S.prototype.track = function (q, G, K, F) {
                        this.report(q, G, K, !1, F);
                    };
                    S.prototype.trackAsync = function (q, G, K, F) {
                        this.report(q, G, K, !0, F);
                    };
                    S.prototype.flush = function () {
                        for (var q = "", G = this.cache.pop(this.limit); G.length;) {
                            var K = G.pop() || "";
                            K && (q.length + K.length <= 1800 ? (q = q ? q + "," + K : K, G.length || this.sendRequest(this.url, q)) : (this.sendRequest(this.url, q), q = K));
                        }
                    };
                    return S;
                }();
            return s;
        });
    }, function (A, L) {
        A.exports = function () {
            var D = [];
            D.toString = function () {
                for (var Y = [], y = 0; y < this.length; y++) {
                    var V = this[y];
                    V[2] ? Y.push("@media " + V[2] + "{" + V[1] + "}") : Y.push(V[1]);
                }
                return Y.join("");
            };
            D.i = function (Y, y) {
                "string" == typeof Y && (Y = [[null, Y, ""]]);
                for (var V = {}, B = 0; B < this.length; B++) {
                    var J = this[B][0];
                    "number" == typeof J && (V[J] = !0);
                }
                for (B = 0; B < Y.length; B++) {
                    var X = Y[B];
                    "number" == typeof X[0] && V[X[0]] || (y && !X[2] ? X[2] = y : y && (X[2] = "(" + X[2] + ") and (" + y + ")"), D.push(X));
                }
            };
            return D;
        };
    }, function (A, L, D) {
        A.exports = D.p + "images/tipBg.3417f33.png";
    }, function (A, L, D) {
        A.exports = D.p + "images/tipBg@2x.16fcb9a.png";
    }, function (A, L, D) {
        var V = D(14),
            B = V.FETCH_INTELLISENSE_CAPTCHA,
            J = V.VERIFY_INTELLISENSE_CAPTCHA,
            X = V.RESET_STATE,
            P = D(6),
            M = P.SWITCH_LOAD_STATUS,
            S = P.UPDATE_VERIFY_STATUS,
            q = P.INVOKE_HOOK,
            G = P.EVENT_RESET,
            K = D(5),
            F = K.CAPTCHA_TYPE,
            U = K.SAMPLE_NUM,
            R = K.POPUP_PRELOAD_SHIFTING_CLASS,
            j = D(3),
            N = D(10),
            Q = N.aes,
            W = N.xorEncode,
            C = D(8),
            w = D(16),
            E = D(13),
            T = D(4);
        A.exports = {
            data: function () {
                return {
                    beginTime: j.now(),
                    traceData: [],
                    status: "normal",
                    classicVisible: !1
                };
            },
            mounted: function () {
                this._removeEvents = this.initEvents();
                this.fetchCaptcha();
            },
            beforeDestroy: function () {
                this._removeEvents();
                this.clear();
            },
            methods: {
                fetchCaptcha: function () {
                    var I = this;
                    return new E(function (O, Z) {
                        var z = {
                            width: "",
                            smsVersion: I.$store.state.smsVersion
                        };
                        I.$store.state.smsNew;
                        I.$store.dispatch(B, z, function (H, f0) {
                            if (I._isMounted) {
                                if (H) {
                                    I.$setData({
                                        status: "loadfail"
                                    });
                                    return void Z(H);
                                }
                                I.$store.commit(q, {
                                    name: "onReady"
                                });
                                I.$store.commit(q, {
                                    name: "onDidRefresh"
                                });
                                O(f0);
                            }
                        });
                    });
                },
                initEvents: function () {
                    var I = this,
                        O = this.$store.subscribe(function (Z, z) {
                            var H = Z.type,
                                f0 = (Z.payload, z.verifyStatus),
                                f1 = z.load;
                            switch (H) {
                                case M:
                                    f1 && ("loading" === f1.status && I.$setData({
                                        status: "loading"
                                    }), "done" === f1.status && I.$setData({
                                        status: "loaddone"
                                    }), "fail" === f1.status && I.$setData({
                                        status: "loadfail"
                                    }));
                                    break;
                                case S:
                                    "success" === f0 && I.$setData({
                                        status: "success"
                                    });
                                    "error" === f0 && I.$setData({
                                        status: "error"
                                    });
                                    break;
                                case G:
                                    I.reset();
                            }
                        });
                    return function () {
                        O();
                    };
                },
                reset: function () {
                    var I = this;
                    this.$store.dispatch(X);
                    this.fetchCaptcha().then(function () {
                        I.clear();
                        I.$setData({
                            status: "normal"
                        });
                    });
                },
                clear: function () {
                    var I = this;
                    this._captchaIns && (this.$setData({
                        classicVisible: !1
                    }), this.$nextTick(function () {
                        I._captchaIns.$destroy();
                        I._captchaIns = null;
                    }));
                    this.beginTime = 0;
                    this.traceData = [];
                },
                verifyCaptcha: function () {
                    "normal" === this.status ? this.verifyIntellisenseCaptcha() : this._captchaIns && this._captchaIns.open();
                },
                verifyIntellisenseCaptcha: function () {
                    var I = this,
                        O = this.$store.state.token,
                        Z = j.now(),
                        z = W(O, [0, 0, Z - (this.beginTime || Z)] + ""),
                        H = this.traceData.map(function (f0) {
                            return W(O, f0);
                        });
                    this.$store.dispatch(J, {
                        token: O,
                        type: F.INTELLISENSE,
                        width: "240",
                        data: JSON.stringify({
                            d: "",
                            m: Q(j.sample(H, U).join(":")),
                            p: Q(z),
                            ext: Q(W(O, "1," + H.length))
                        })
                    }, function (f0) {
                        if (I._isMounted) {
                            if (!f0) {
                                return void I.$setData({
                                    status: "success"
                                });
                            }
                            if (!I._captchaIns) {
                                var f1 = I.$store.state.config,
                                    f2 = C._extend(w);
                                I._captchaIns = new f2({
                                    store: I.$store,
                                    propsData: {
                                        autoOpen: !1,
                                        intellisense: !0,
                                        enableColor: !0,
                                        onBeforeClose: function () {
                                            I.$store.commit(q, {
                                                name: "onBeforeClose"
                                            });
                                        },
                                        onClose: function (f3) {
                                            I.$store.commit(q, {
                                                name: "onClose",
                                                args: [{
                                                    source: f3
                                                }]
                                            });
                                        },
                                        onOpen: function () {
                                            I.$store.commit(q, {
                                                name: "onOpen"
                                            });
                                        },
                                        onWidthGeted: function (f3) {
                                            T.delClass(f3, R);
                                        }
                                    }
                                }).$mount(function (f3) {
                                    T.addClass(f3, R);
                                    f1.appendTo ? f1.appendTo.appendChild(f3) : document.body.appendChild(f3);
                                });
                                I.$setData({
                                    status: "loading"
                                });
                            }
                            I._captchaIns.open();
                        }
                    });
                },
                closeModal: function () {
                    this._captchaIns && this._captchaIns.closeModal();
                }
            }
        };
    }, function (A, L, D) {
        var V = function () {
                function E(T, I) {
                    var O = [],
                        Z = !0,
                        z = !1,
                        H = void 0;
                    try {
                        for (var f0, f1 = T[Symbol.iterator](); !(Z = (f0 = f1.next()).done) && (O.push(f0.value), !I || O.length !== I); Z = !0) {}
                    } catch (f2) {
                        z = !0;
                        H = f2;
                    } finally {
                        try {
                            !Z && f1.return && f1.return();
                        } finally {
                            if (z) {
                                throw H;
                            }
                        }
                    }
                    return O;
                }
                return function (T, I) {
                    if (Array.isArray(T)) {
                        return T;
                    }
                    if (Symbol.iterator in Object(T)) {
                        return E(T, I);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            B = D(8),
            J = D(4),
            X = D(3),
            P = D(10),
            M = P.aes,
            S = P.xorEncode,
            q = D(5),
            G = q.SAMPLE_NUM,
            K = q.BIGGER_SAMPLE_NUM,
            F = D(6),
            U = F.SWITCH_LOAD_STATUS,
            R = F.INVOKE_HOOK,
            j = D(7),
            N = j.REQUEST_IMG_ERROR,
            Q = D(11),
            k = D(9),
            W = k.createNetCollect,
            C = document,
            w = {
                status: "dragend",
                beginTime: 0,
                clientX: 0,
                startX: 0,
                clientY: 0,
                startY: 0,
                dragX: 0,
                dragY: 0
            };
        A.exports = B._extend({
            abstract: !0,
            props: ["loadInfo", "mode", "type", "isRtlLang"],
            data: function () {
                var E = this.$store.state.langPkg;
                return {
                    langPkg: E
                };
            },
            mounted: function () {
                this.initData();
                this.$bgImg = J.find(".yidun_bgimg", this.$el);
                this.$canvas = J.find(".yidun_avoid-canvas", this.$el);
                this.$dragAvoidBall = J.find(".yidun_avoid-front", this.$el);
                this.canvasContext = J.supportCanvas ? this.$canvas.getContext("2d") : null;
                this.firstEventType = "";
                this.width = this.$store.state.coreOffsetWidth || this.$el.offsetWidth;
                this.$dragAvoidBall.style.width = 60 * this.width / 960 + "px";
                this._removeEvents = this.initEvents();
                this.initCanvas();
            },
            beforeDestroy: function () {
                this._removeEvents();
                this.$bgImg = null;
                this.$dragAvoidBall = null;
            },
            render: function (E) {
                var T = E.loadInfo;
                if (T && "done" === T.status) {
                    var I = T.data && T.data.front;
                    Array.isArray(I) && (I = I[0], T.data.front = I);
                }
                T && this.changeLoadStatus(T);
            },
            methods: {
                initData: function () {
                    this.beginTime = 0;
                    this.mouseDownCounts = 0;
                    this.drag = Object.assign({}, w);
                    this.traceData = [];
                    this.ballTraceData = [];
                },
                initPosition: function () {
                    this.$dragAvoidBall.style.left = "0px";
                    this.$dragAvoidBall.style.bottom = "0px";
                },
                initCanvas: function () {
                    if (this.$canvas.width = this.width, this.$canvas.height = this.width / 2, this.canvasContext) {
                        try {
                            this.canvasContext.clearRect(0, 0, this.width, this.width / 2);
                        } catch (E) {}
                    }
                },
                reset: function () {
                    var E = this.$store.state,
                        T = E.countsOfVerifyError,
                        I = E.config,
                        O = T > I.maxVerification;
                    O || (this.initData(), this.initCanvas(), this.initPosition());
                },
                floatStatusChange: function () {
                    this.$parent.shouldHandleFloatChange(this.loadInfo) && this.changeTipElText();
                },
                initEvents: function () {
                    var E = this,
                        T = function (f3) {
                            return function (f4) {
                                var f5 = f4.type || "";
                                E.firstEventType || (E.firstEventType = f5);
                                f5.indexOf("pointer") === -1 && E.firstEventType.indexOf("pointer") > -1 || E.firstEventType.indexOf("pointer") === -1 && f5.indexOf("pointer") > -1 || f3(f4);
                            };
                        },
                        I = T(this.onMouseDown.bind(this)),
                        O = T(this.onMouseMove.bind(this)),
                        Z = this.onMouseUp.bind(this),
                        z = J.supportPointer ? "pointer" : "mouse";
                    if (J.on(this.$dragAvoidBall, z + "down", I), J.on(C, z + "move", O), J.on(C, z + "up", Z), "pointer" === z) {
                        var H = T(this.onMouseDown.bind(this)),
                            f0 = T(this.onMouseMove.bind(this)),
                            f1 = this.onMouseUp.bind(this),
                            f2 = "mouse";
                        J.on(this.$dragAvoidBall, f2 + "down", H);
                        J.on(C, f2 + "move", f0);
                        J.on(C, f2 + "up", f1);
                        this._removeMouseEvent = function () {
                            J.off(E.$dragAvoidBall, f2 + "down", H);
                            J.off(C, f2 + "move", f0);
                            J.off(C, f2 + "up", f1);
                        };
                    }
                    J.supportPointer && (document.documentElement.style.touchAction = "none");
                    return function () {
                        J.off(E.$dragAvoidBall, z + "down", I);
                        J.off(C, z + "move", O);
                        J.off(C, z + "up", Z);
                        "pointer" === z && E._removeMouseEvent();
                        J.supportPointer && (document.documentElement.style.touchAction = "auto");
                    };
                },
                changeTipElText: function () {
                    var E = this.$store.state.config,
                        T = this.langPkg,
                        I = this.$parent.panelVisible,
                        O = "float" === (this.mode || E.mode),
                        Z = J.find(".yidun_tips__text", this.$el),
                        z = J.find(".yidun_tips__answer", this.$el);
                    O && !I ? (J.text(Z, T.clickButton), J.addClass(this.$el, "yidun--button"), J.addClass(z, "hide")) : (J.text(Z, T.dragToAvoidObstacle), J.delClass(z, "hide"), J.delClass(this.$el, "yidun--button"));
                },
                changeLoadStatus: function (E) {
                    var T = this,
                        I = E.status,
                        O = E.data;
                    switch (I) {
                        case "loading":
                            if (O) {
                                var Z = J.find(".yidun_bg-img", this.$el),
                                    z = J.find(".yidun_avoid-front", this.$el),
                                    H = J.find(".yidun_tips__img", this.$el),
                                    f0 = this.$store,
                                    f1 = f0.commit,
                                    f2 = f0.state,
                                    f3 = Q.all([Q.image({
                                        url: O.bg,
                                        timeout: f2.config.timeout,
                                        onProcess: W(f2.captchaCollector, {
                                            token: O.token
                                        })
                                    }), Q.image({
                                        url: O.front,
                                        timeout: f2.config.timeout,
                                        onProcess: W(f2.captchaCollector, {
                                            token: O.token
                                        })
                                    })]);
                                f3.then(function (f4) {
                                    if (T._isMounted) {
                                        var f5 = V(f4, 2),
                                            f6 = f5[0],
                                            f7 = f5[1];
                                        Z.src = f6.src;
                                        z.src = f7.src;
                                        H.src = f6.src;
                                        f1(U, {
                                            status: "done",
                                            data: O
                                        });
                                    }
                                }).catch(function (f4) {
                                    if (T._isMounted) {
                                        var f5 = Object.assign({}, f4.data, {
                                            token: O.token
                                        });
                                        f1(U, {
                                            status: "fail"
                                        });
                                        f1(R, {
                                            name: "onError",
                                            args: [new j(N, f4.message, f5)]
                                        });
                                    }
                                });
                            }
                            break;
                        case "done":
                            this.changeTipElText();
                    }
                },
                drawTrackLine: function (E, T) {
                    var I = this.getActualDragCoordinate(),
                        O = I.actualLeft,
                        Z = I.actualBottom,
                        z = this.drag.status,
                        H = this.$bgImg.getBoundingClientRect(),
                        f0 = H.height,
                        f1 = this.$dragAvoidBall.getBoundingClientRect(),
                        f2 = f1.width,
                        f3 = E + f2 / 2,
                        f4 = f0 - T - f2 / 2,
                        f5 = O + f2 / 2,
                        f6 = f0 - Z - f2 / 2;
                    if (this.canvasContext && "dragging" === z) {
                        var f7 = this.canvasContext;
                        f7.beginPath();
                        f7.moveTo(f3, f4);
                        f7.lineTo(f5, f6);
                        f7.strokeStyle = "#fff";
                        f7.lineWidth = 2;
                        f7.stroke();
                    }
                },
                onMouseDown: function (E) {
                    E.event.cancelable !== !1 && E.preventDefault();
                    this.mouseDownCounts++;
                    var T = this.$store.state,
                        I = T.load,
                        O = T.verifyStatus;
                    if ("done" === I.status && !O) {
                        var Z = E.clientX,
                            z = E.clientY,
                            H = this.drag;
                        "dragend" === H.status && Object.assign(H, {
                            beginTime: X.now(),
                            clientX: Z,
                            startX: Z,
                            clientY: z,
                            startY: z,
                            dragX: 0,
                            dragY: 0
                        });
                    }
                },
                onMouseMove: function (E) {
                    var T = E.clientX,
                        I = E.clientY,
                        O = this.drag,
                        Z = O.status,
                        z = O.beginTime;
                    if (O.status = z && "dragend" === Z ? "dragstart" : Z, "dragend" !== O.status) {
                        !(E.type.indexOf("touch") !== -1 && J.supportPassive || E.event.cancelable !== !1) && E.preventDefault();
                        var H = this.getActualDragCoordinate(),
                            f0 = H.actualLeft,
                            f1 = H.actualBottom;
                        Object.assign(O, {
                            clientX: T,
                            clientY: I,
                            dragX: T - O.startX,
                            dragY: I - O.startY
                        });
                        this.drawTrackLine(f0, f1);
                        var f2 = this.$store.state.token,
                            f3 = X.now() - O.beginTime,
                            f4 = [Math.round(O.dragX), Math.round(O.dragY), f3],
                            f5 = S(f2, f4 + "");
                        this.traceData.push(f5);
                        var f6 = this.$dragAvoidBall.getBoundingClientRect(),
                            f7 = f6.width,
                            f8 = f6.height,
                            f9 = this.$bgImg.getBoundingClientRect(),
                            ff = f9.height,
                            fv = [Math.round(f0 + f7 / 2), Math.round(ff - (f1 + f8 / 2)), f3];
                        this.ballTraceData.push(S(f2, fv + ""));
                        "dragstart" === O.status && this.onMouseMoveStart(E);
                        "dragging" === O.status && this.onMouseMoving(E);
                    }
                },
                onMouseMoveStart: function () {
                    Object.assign(this.drag, {
                        status: "dragging"
                    });
                },
                onMouseMoving: function () {
                    var E = this.getActualDragCoordinate(),
                        T = E.actualLeft,
                        I = E.actualBottom;
                    this.$dragAvoidBall.style.left = T + "px";
                    this.$dragAvoidBall.style.bottom = I + "px";
                },
                onMouseUp: function () {
                    var E = this.drag,
                        T = this.getActualDragCoordinate(),
                        I = T.actualLeft,
                        O = T.actualBottom,
                        Z = this.$dragAvoidBall.getBoundingClientRect(),
                        z = Z.width,
                        H = Z.height,
                        f0 = this.$bgImg.getBoundingClientRect(),
                        f1 = f0.height;
                    if ("dragend" === E.status) {
                        return void Object.assign(E, {
                            beginTime: 0
                        });
                    }
                    Object.assign(E, w);
                    var f2 = X.msie(),
                        f3 = X.sample(this.ballTraceData, f2 ? G : K),
                        f4 = this.$store.state.token,
                        f5 = M(S(f4, [Math.round(I + z / 2), Math.round(f1 - (O + H / 2)), X.now() - this.beginTime] + ""));
                    this.onVerifyCaptcha({
                        data: JSON.stringify({
                            d: "",
                            m: M(f3.join(":")),
                            p: f5,
                            ext: M(S(f4, this.mouseDownCounts + "," + this.traceData.length))
                        })
                    });
                },
                getActualDragCoordinate: function () {
                    var E = this.drag,
                        T = E.dragX,
                        I = E.dragY,
                        O = this.$bgImg.getBoundingClientRect(),
                        Z = O.width,
                        z = O.height,
                        H = this.$dragAvoidBall.getBoundingClientRect(),
                        f0 = H.width,
                        f1 = H.height,
                        f2 = Z - f0,
                        f3 = z - f1,
                        f4 = Math.min(Math.max(T, 0), f2),
                        f5 = -Math.min(Math.max(I, -f3), 0);
                    return {
                        actualLeft: f4,
                        actualBottom: f5
                    };
                }
            }
        });
    }, function (A, L, D) {
        var V = D(8),
            B = D(4),
            J = D(3),
            X = D(10),
            P = X.aes,
            M = X.xorEncode,
            S = D(5),
            q = S.CAPTCHA_CLASS,
            G = S.SAMPLE_NUM,
            K = D(6),
            F = K.SWITCH_LOAD_STATUS,
            U = K.INVOKE_HOOK,
            R = D(7),
            j = R.REQUEST_IMG_ERROR,
            N = D(11),
            Q = D(9),
            k = Q.createNetCollect,
            W = 4,
            C = 2,
            w = {
                status: "dragend",
                beginTime: 0,
                clientX: 0,
                clientY: 0,
                startX: 0,
                startY: 0,
                startLeft: 0,
                startTop: 0,
                el: null
            };
        A.exports = V._extend({
            abstract: !0,
            props: ["loadInfo", "mode"],
            data: function () {
                var E = this.$store.state.langPkg;
                return {
                    langPkg: E
                };
            },
            mounted: function () {
                this.initData();
                this._removeEvents = this.initEvents();
                this.initCustomStyles();
            },
            beforeDestroy: function () {
                this._removeEvents();
                this.$el = null;
                this.$bgImgWrap = null;
                this.$picViews = [];
                this.drag = null;
                this.traceData = null;
                this.exchangePos = null;
            },
            render: function (E) {
                var T = E.loadInfo;
                T && this.changeLoadStatus(T);
            },
            methods: {
                initData: function () {
                    this.clickCounts = 0;
                    this.traceData = [];
                    this.exchangePos = [];
                    this.drag = Object.assign({}, w);
                },
                initEvents: function () {
                    var E = this;
                    this.$bgImgWrap = B.find("." + q.BGIMG, this.$el);
                    this.$picViews = [];
                    for (var T = B.findAll(".yidun_inference", this.$el), I = function (f1) {
                        f1.target.className.indexOf("yidun_inference") !== -1 && E.onMouseDown(f1);
                    }, O = this.onDragEnd.bind(this), Z = this.onMouseMove.bind(this), z = 0, H = T.length; z < H; z++) {
                        this.$picViews.push({
                            view: T[z],
                            img: B.find(".yidun_inference__img", T[z])
                        });
                    }
                    var f0 = B.supportPointer ? "pointer" : "mouse";
                    B.on(this.$bgImgWrap, f0 + "down", I);
                    B.on(document, f0 + "up", O);
                    B.on(document, f0 + "move", Z);
                    return function () {
                        B.off(E.$bgImgWrap, f0 + "down", I);
                        B.off(document, f0 + "up", O);
                        B.off(document, f0 + "move", Z);
                    };
                },
                initCustomStyles: function () {
                    var E = this.$store.state.config.customStyles.imagePanel;
                    this.$picViews[0].view.style.borderTopLeftRadius = E.borderRadius;
                    this.$picViews[W - 1].view.style.borderTopRightRadius = E.borderRadius;
                    this.$picViews[W].view.style.borderBottomLeftRadius = E.borderRadius;
                    this.$picViews[W * C - 1].view.style.borderBottomRightRadius = E.borderRadius;
                },
                reset: function () {
                    var E = this.$store.state,
                        T = E.countsOfVerifyError,
                        I = E.config,
                        O = T > I.maxVerification;
                    if (!O) {
                        var Z = this.$picViews;
                        this.initData();
                        B.delClass(this.$bgImgWrap, "yidun_bgimg--dragging");
                        for (var z = 0, H = Z.length; z < H; z++) {
                            this.cleanInferenceCls(z);
                            var f0 = Z[z].img;
                            f0.style.top = "";
                            f0.style.left = "";
                        }
                    }
                },
                cleanInferenceCls: function (E) {
                    this.$picViews[E] && (this.$picViews[E].view.className = "yidun_inference yidun_inference--" + E);
                },
                floatStatusChange: function () {
                    this.$parent.shouldHandleFloatChange(this.loadInfo) && this.changeTipElText();
                },
                changeTipElText: function () {
                    var E = B.find(".yidun_tips__text", this.$el),
                        T = this.$store.state.config;
                    "float" !== (this.mode || T.mode) || this.$parent.panelVisible ? (B.text(E, this.langPkg.inferenceTip), B.delClass(this.$el, "yidun--button")) : (B.text(E, this.langPkg.clickButton), B.addClass(this.$el, "yidun--button"));
                },
                changeLoadStatus: function (E) {
                    var T = this,
                        I = E.status,
                        O = E.data;
                    if ("loading" === I && O) {
                        var Z = B.find(".yidun_bg-img", this.$el),
                            z = B.find(".yidun_tips__text", this.$el),
                            H = this.$store,
                            f0 = H.commit,
                            f1 = H.state,
                            f2 = f1.langPkg,
                            f3 = f1.config,
                            f4 = f1.captchaCollector;
                        N.image({
                            url: O.bg,
                            timeout: f3.timeout,
                            onProcess: k(f4, {
                                token: O.token
                            })
                        }).then(function (f5) {
                            if (T._isMounted) {
                                Z.src = f5.src;
                                for (var f6 = 0, f7 = T.$picViews.length; f6 < f7; f6++) {
                                    T.$picViews[f6].img.src = f5.src;
                                }
                                B.text(z, f2.inferenceTip);
                                f0(F, {
                                    status: "done",
                                    data: O
                                });
                            }
                        }).catch(function (f5) {
                            if (T._isMounted) {
                                var f6 = Object.assign({}, f5.data, {
                                    token: O.token
                                });
                                f0(F, {
                                    status: "fail"
                                });
                                f0(U, {
                                    name: "onError",
                                    args: [new R(j, f5.message, f6)]
                                });
                            }
                        });
                    } else {
                        "done" === I && this.changeTipElText();
                    }
                },
                onMouseDown: function (E) {
                    if (E.preventDefault(), this.handleDown() && "dragend" === this.drag.status) {
                        var T = E.clientX,
                            I = E.clientY;
                        Object.assign(this.drag, {
                            beginTime: J.now(),
                            clientX: T,
                            clientY: I,
                            startX: T,
                            startY: I
                        });
                    }
                    return !1;
                },
                onDragEnd: function (E) {
                    if ("dragend" === this.drag.status) {
                        return void Object.assign(this.drag, {
                            beginTime: 0
                        });
                    }
                    var T = this.drag.el;
                    Object.assign(this.drag, w);
                    var I = this.exchangePos[0],
                        O = this.$picViews[I].view;
                    T.style.display = "none";
                    this.cleanInferenceCls(I);
                    var Z = O.cloneNode(!0);
                    if (B.replace(Z, O), this.$picViews[I].view = Z, this.$picViews[I].img = B.find(".yidun_inference__img", Z), B.delClass(this.$bgImgWrap, "yidun_bgimg--dragging"), this.exchangePos[1] || 0 === this.exchangePos[1]) {
                        var z = this.$picViews[this.exchangePos[1]].img,
                            H = this.getImgPos(I),
                            f0 = H.top,
                            f1 = H.left;
                        z.style.top = f0;
                        z.style.left = f1;
                        this.onVerifyCaptcha({
                            data: JSON.stringify({
                                d: "",
                                m: P(J.sample(this.traceData, G).join(":")),
                                p: P(M(this.$store.state.token, this.exchangePos.join(","))),
                                ext: P(M(this.$store.state.token, this.clickCounts + "," + this.traceData.length))
                            })
                        });
                    } else {
                        var f2 = this.$picViews[I].img;
                        f2.style.top = "";
                        f2.style.left = "";
                    }
                },
                onMouseMove: function (E) {
                    var T = E.clientX,
                        I = E.clientY,
                        O = this.drag,
                        Z = O.status,
                        z = O.beginTime,
                        H = O.startX,
                        f0 = O.startY,
                        f1 = T - H,
                        f2 = I - f0;
                    if ("dragend" === Z && z && (this.drag.status = "dragstart"), "dragend" !== this.drag.status) {
                        Object.assign(this.drag, {
                            clientX: T,
                            clientY: I
                        });
                        var f3 = this.$store.state.token,
                            f4 = M(f3, [Math.round(f1), Math.round(f2), J.now() - this.drag.beginTime] + "");
                        this.traceData.push(f4);
                        "dragstart" === this.drag.status && this.startDrag(E);
                        "dragging" === this.drag.status && this.dragging(E);
                    }
                },
                handleDown: function () {
                    this.clickCounts++;
                    var E = this.$store.state,
                        T = E.load,
                        I = E.verifyStatus;
                    return "done" === T.status && !I && "dragend" === this.drag.status;
                },
                startDrag: function (E) {
                    var T = E.target;
                    B.addClass(this.$bgImgWrap, "yidun_bgimg--dragging");
                    var I = T.parentNode,
                        O = I.cloneNode(!0);
                    O.draggable = !1;
                    O.removeAttribute("style");
                    for (var Z = B.findAll(".yidun_inference--drag", this.$bgImgWrap), z = 0, H = Z.length; z < H; z++) {
                        B.remove(Z[z]);
                    }
                    B.addClass(O, "yidun_inference--drag");
                    this.$bgImgWrap.appendChild(O);
                    B.addClass(I, "yidun_inference--origin");
                    Object.assign(this.drag, {
                        status: "dragging",
                        el: O,
                        startLeft: O.offsetLeft,
                        startTop: O.offsetTop
                    });
                    for (var f0 = 0, f1 = this.$picViews.length; f0 < f1; f0++) {
                        if (this.$picViews[f0].view === I) {
                            this.exchangePos[0] = f0;
                            break;
                        }
                    }
                },
                dragging: function () {
                    var E = this.drag,
                        T = E.clientX,
                        I = E.clientY,
                        O = E.startX,
                        Z = E.startY,
                        z = E.el,
                        H = this.computeOffset(T - O, I - Z),
                        f0 = H.x,
                        f1 = H.y;
                    z.style.left = f0 + "px";
                    z.style.top = f1 + "px";
                    this.readyExchange(f0, f1);
                },
                readyExchange: function (E, T) {
                    var I = this.getDragCenterIndex(E, T),
                        O = this.exchangePos[0],
                        Z = this.$picViews[O].view;
                    if (I !== this.exchangePos[1]) {
                        for (var z = 0, H = this.$picViews.length; z < H; z++) {
                            B.delClass(this.$picViews[z].view, "yidun_inference--target");
                        }
                        if (I === -1 || O === I) {
                            B.delClass(Z, "yidun_inference--swap");
                            return void (this.exchangePos[1] = void 0);
                        }
                        this.exchangePos[1] = I;
                        B.addClass(this.$picViews[I].view, "yidun_inference--target");
                        B.addClass(Z, "yidun_inference--swap");
                        var f0 = this.$picViews[O].img,
                            f1 = this.getImgPos(I),
                            f2 = f1.top,
                            f3 = f1.left;
                        f0.style.top = f2;
                        f0.style.left = f3;
                    }
                },
                computeOffset: function (E, T) {
                    var I = this.drag,
                        O = I.startLeft,
                        Z = I.startTop,
                        z = I.el,
                        H = this.$bgImgWrap.offsetWidth - z.offsetWidth,
                        f0 = this.$bgImgWrap.offsetHeight - z.offsetHeight,
                        f1 = E + O,
                        f2 = T + Z;
                    f1 < 0 ? f1 = 0 : f1 > H && (f1 = H);
                    f2 < 0 ? f2 = 0 : f2 > f0 && (f2 = f0);
                    return {
                        x: f1,
                        y: f2
                    };
                },
                getDragCenterIndex: function (E, T) {
                    var I = B.getRect(this.drag.el),
                        O = I.width,
                        Z = I.height,
                        z = E + O / 2,
                        H = T + Z / 2,
                        f0 = parseInt(z / O, 10),
                        f1 = parseInt(H / Z, 10);
                    return z % O === 0 || H % Z === 0 ? -1 : f0 + f1 * W;
                },
                getImgPos: function (E) {
                    var T = E - W;
                    return {
                        top: (T < 0 ? 0 : -100) + "%",
                        left: (T < 0 ? E * -100 : T * -100) + "%"
                    };
                }
            }
        });
    }, function (A, L, D) {
        var V = function () {
                function I(O, Z) {
                    var z = [],
                        H = !0,
                        f0 = !1,
                        f1 = void 0;
                    try {
                        for (var f2, f3 = O[Symbol.iterator](); !(H = (f2 = f3.next()).done) && (z.push(f2.value), !Z || z.length !== Z); H = !0) {}
                    } catch (f4) {
                        f0 = !0;
                        f1 = f4;
                    } finally {
                        try {
                            !H && f3.return && f3.return();
                        } finally {
                            if (f0) {
                                throw f1;
                            }
                        }
                    }
                    return z;
                }
                return function (O, Z) {
                    if (Array.isArray(O)) {
                        return O;
                    }
                    if (Symbol.iterator in Object(O)) {
                        return I(O, Z);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            B = D(8),
            J = D(4),
            X = D(3),
            P = D(56),
            M = D(5),
            S = M.CAPTCHA_CLASS,
            q = M.SAMPLE_NUM,
            G = D(6),
            K = G.SWITCH_LOAD_STATUS,
            F = G.INVOKE_HOOK,
            U = D(10),
            R = U.aes,
            j = U.xorEncode,
            N = D(7),
            Q = N.REQUEST_IMG_ERROR,
            W = D(11),
            C = D(9),
            w = C.createNetCollect,
            E = document,
            T = {
                status: "dragend",
                beginTime: 0,
                clientX: 0,
                startX: 0,
                clientY: 0,
                startY: 0,
                startLeft: 0,
                dragX: 0
            };
        A.exports = B._extend({
            abstract: !0,
            props: ["loadInfo"],
            mounted: function () {
                this.initData();
                this.firstEventType = "";
                this._removeEvents = this.initEvents();
                this.initPosition();
            },
            beforeDestroy: function () {
                this._removeEvents();
                this.sliderTransition = null;
                this.$slider.style.transition = "";
                this.$el = null;
                this.$slideIndicator = null;
                this.$slider = null;
                this.$jigsaw = null;
                this.startLeft = 0;
                this.drag = null;
                this.initialDrag = null;
            },
            render: function (I) {
                var O = I.loadInfo;
                O && this.changeLoadStatus(O);
            },
            methods: {
                initData: function () {
                    var I = this.$store.state.config;
                    this.startLeft = parseInt(I.startLeft, 10);
                    this.initialDrag = Object.assign(T, {
                        startLeft: this.startLeft
                    });
                    this.drag = Object.assign({}, this.initialDrag);
                    this.traceData = [];
                    this.atomTraceData = [];
                    this.mouseDownCounts = 0;
                    this.attrs = void 0;
                    this.ratio = 1;
                },
                changeSlideIcon: function (I) {
                    !this.$store.state.config.customStyles.icon.slider && this.$slideIcon && (I ? (this.$slideIcon.src = I, this.$slideIcon.style.display = "block") : this.$slideIcon.style.display = "none");
                },
                initEvents: function () {
                    var I = this;
                    this.$slideIndicator = J.find("." + S.SLIDE_INDICATOR, this.$el);
                    this.$jigsaw = J.find("." + S.JIGSAW, this.$el);
                    this.$control = J.find("." + S.CONTROL, this.$el);
                    this.$slider = J.find("." + S.SLIDER, this.$el);
                    this.$slideIcon = J.find(".yidun_slider__icon--img", this.$el);
                    var O = this.$parent.$data.customStyles.controlBar,
                        Z = void 0 === O ? {} : O;
                    this.controlBar = Z;
                    var z = function (f9) {
                            return function (ff) {
                                var fv = ff.type || "";
                                I.firstEventType || (I.firstEventType = fv);
                                fv.indexOf("pointer") === -1 && I.firstEventType.indexOf("pointer") > -1 || I.firstEventType.indexOf("pointer") === -1 && fv.indexOf("pointer") > -1 || f9(ff);
                            };
                        },
                        H = z(this.onMouseDown.bind(this)),
                        f0 = z(this.onMouseDown.bind(this)),
                        f1 = z(this.onMouseMove.bind(this)),
                        f2 = this.onMouseUp.bind(this),
                        f3 = J.supportPointer ? "pointer" : "mouse";
                    if (J.on(this.$slider, f3 + "down", H), J.on(this.$jigsaw, f3 + "down", f0), J.on(E, f3 + "move", f1), J.on(E, f3 + "up", f2), "pointer" === f3) {
                        var f4 = z(this.onMouseDown.bind(this)),
                            f5 = z(this.onMouseDown.bind(this)),
                            f6 = z(this.onMouseMove.bind(this)),
                            f7 = this.onMouseUp.bind(this),
                            f8 = "mouse";
                        J.on(this.$slider, f8 + "down", f4);
                        J.on(this.$jigsaw, f8 + "down", f5);
                        J.on(E, f8 + "move", f6);
                        J.on(E, f8 + "up", f7);
                        this._removeMouseEvent = function () {
                            J.off(I.$slider, f8 + "down", f4);
                            J.off(I.$jigsaw, f8 + "down", f5);
                            J.off(E, f8 + "move", f6);
                            J.off(E, f8 + "up", f7);
                        };
                    }
                    this.sliderTransition = J.transition(this.$slider, {
                        beforeLeave: function (f9) {
                            f9.style.transition = "left .3s ease-out";
                        },
                        afterLeave: function (f9) {
                            f9.style.transition = "";
                        }
                    });
                    J.supportPointer && (document.documentElement.style.touchAction = "none");
                    return function () {
                        J.off(I.$slider, f3 + "down", H);
                        J.off(I.$jigsaw, f3 + "down", f0);
                        J.off(E, f3 + "move", f1);
                        J.off(E, f3 + "up", f2);
                        "pointer" === f3 && I._removeMouseEvent();
                        I.sliderTransition.dispose();
                        J.supportPointer && (document.documentElement.style.touchAction = "auto");
                    };
                },
                initPosition: function () {
                    var I = this.$slider.offsetWidth;
                    this.$slider.style.left = this.startLeft + "px";
                    this.$jigsaw.style.left = this.startLeft + "px";
                    this.$jigsaw.style.transform = "";
                    this.$jigsaw.style.transformOrigin = "";
                    this.$slideIndicator.style.width = this.startLeft + I + "px";
                },
                updateJigsawRotateAndLeft: function () {
                    var I = this.$el.offsetWidth,
                        O = this.$slider.offsetWidth,
                        Z = this.$jigsaw.offsetWidth,
                        z = this.restrict(this.$jigsaw, O - Z);
                    if (this.ratio = (I / 2 - Z) / I, this.attrs) {
                        var H = this.attrs[0],
                            f0 = z * this.ratio;
                        this.$jigsaw.style.left = f0 + "px";
                        this.$jigsaw.style.transform = "rotate(" + H * f0 + "deg)";
                        this.$jigsaw.style.transformOrigin = H > 0 ? "bottom right" : "top right";
                    }
                },
                initJigsawPos: function (I) {
                    I && (this.attrs = I.attrs, this.updateJigsawRotateAndLeft());
                },
                floatStatusChange: function () {
                    this.updateJigsawRotateAndLeft();
                },
                reset: function () {
                    var I = this.$store.state,
                        O = I.countsOfVerifyError,
                        Z = I.config,
                        z = O > Z.maxVerification;
                    z || (this.initData(), J.delClass(this.$control, "yidun_control--moving"), parseInt(this.$slider.style.left) && this.sliderTransition.leave(), this.initPosition());
                },
                changeLoadStatus: function (I) {
                    var O = this,
                        Z = I.data;
                    if (this.changeSlideIcon(this.controlBar.slideIcon), "loading" === I.status && Z) {
                        var z = this.$store.state,
                            H = z.langPkg,
                            f0 = z.config,
                            f1 = z.captchaCollector,
                            f2 = J.find(".yidun_tips__text", this.$el),
                            f3 = J.find(".yidun_bg-img", this.$el),
                            f4 = J.find("." + S.JIGSAW, this.$el),
                            f5 = this.$store.commit,
                            f6 = w(f1, {
                                token: Z.token
                            });
                        W.all([W.image({
                            url: Z.bg,
                            timeout: f0.timeout,
                            onProcess: f6
                        }), W.image({
                            url: Z.front,
                            timeout: f0.timeout,
                            onProcess: f6
                        })]).then(function (f7) {
                            if (O._isMounted) {
                                var f8 = V(f7, 2),
                                    f9 = f8[0],
                                    ff = f8[1];
                                f3.src = f9.src;
                                f4.src = ff.src;
                                f4.onload = function () {
                                    O.initJigsawPos(Z);
                                };
                                J.text(f2, H.slideTip);
                                f5(K, {
                                    status: "done",
                                    data: Z
                                });
                            }
                        }).catch(function (f7) {
                            if (O._isMounted) {
                                var f8 = Object.assign({}, f7.data, {
                                    token: Z.token
                                });
                                f5(K, {
                                    status: "fail"
                                });
                                f5(F, {
                                    name: "onError",
                                    args: [new N(Q, f7.message, f8)]
                                });
                            }
                        });
                    }
                },
                onMouseDown: function (I) {
                    I.event.cancelable !== !1 && I.preventDefault();
                    this.mouseDownCounts++;
                    this.width = this.$el.offsetWidth;
                    var O = this.$store.state,
                        Z = O.load,
                        z = O.verifyStatus;
                    if ("done" === Z.status && !z) {
                        var H = I.clientX,
                            f0 = I.clientY,
                            f1 = this.drag;
                        "dragend" === f1.status && Object.assign(f1, {
                            beginTime: X.now(),
                            clientX: H,
                            startX: H,
                            clientY: f0,
                            startY: f0,
                            dragX: 0
                        });
                    }
                },
                onMouseMove: function (I) {
                    var O = I.clientX,
                        Z = I.clientY,
                        z = this.drag,
                        H = z.status,
                        f0 = z.beginTime,
                        f1 = z.startX;
                    if (z.status = f0 && O - f1 > 3 && "dragend" === H ? "dragstart" : H, "dragend" !== z.status) {
                        !(I.type.indexOf("touch") !== -1 && J.supportPassive || I.event.cancelable !== !1) && I.preventDefault();
                        Object.assign(z, {
                            clientX: O,
                            clientY: Z,
                            dragX: O - z.startX
                        });
                        var f2 = this.$store.state.token,
                            f3 = [Math.round(z.dragX < 0 ? 0 : z.dragX), Math.round(z.clientY - z.startY), X.now() - z.beginTime];
                        this.atomTraceData.push(f3);
                        var f4 = j(f2, f3 + "");
                        this.traceData.push(f4);
                        "dragstart" === z.status && this.onMouseMoveStart(I);
                        "dragging" === z.status && this.onMouseMoving(I);
                    }
                },
                onMouseMoveStart: function (I) {
                    var O = J.getComputedStyle(this.$slider, "left"),
                        Z = J.find(".yidun_tips__text", this.$el);
                    J.text(Z, "");
                    Object.assign(this.drag, {
                        status: "dragging",
                        startLeft: parseInt(O.slice(0, -2), 10)
                    });
                },
                onMouseMoving: function () {
                    var I = this.restrict(this.$slider);
                    this.$slider.style.left = I + "px";
                    var O = this.$slider.offsetWidth,
                        Z = this.$jigsaw.offsetWidth,
                        z = this.restrict(this.$jigsaw, O - Z);
                    this.attrs ? this.updateJigsawRotateAndLeft() : this.$jigsaw.style.left = z + "px";
                    J.addClass(this.$control, "yidun_control--moving");
                    this.$slideIndicator.style.width = I + O + "px";
                    this.changeSlideIcon(this.controlBar.slideIconMoving);
                },
                onMouseUp: function (I) {
                    var O = this.drag;
                    if ("dragend" === O.status) {
                        return void Object.assign(O, {
                            beginTime: 0
                        });
                    }
                    Object.assign(O, this.initialDrag);
                    var Z = X.sample(this.traceData, q),
                        z = this.$store.state.token,
                        H = R(j(z, parseInt(this.$jigsaw.style.left, 10) / this.width * 100 + "")),
                        f0 = P(X.unique2DArray(this.atomTraceData, 2));
                    this.onVerifyCaptcha({
                        data: JSON.stringify({
                            d: R(Z.join(":")),
                            m: "",
                            p: H,
                            f: R(j(z, f0.join(","))),
                            ext: R(j(z, this.mouseDownCounts + "," + this.traceData.length))
                        })
                    });
                },
                restrict: function (I, O) {
                    if (I) {
                        var Z,
                            z,
                            H = this.drag,
                            f0 = H.startLeft,
                            f1 = H.dragX,
                            f2 = this.width,
                            f3 = I.offsetWidth,
                            f4 = this.$slider.offsetWidth,
                            f5 = f2 - f3,
                            f6 = f0 + f1,
                            f7 = O < 0 ? -O : O / 2;
                        I === this.$jigsaw && (f1 <= f7 ? (Z = f1, z = O < 0 ? -Z / 2 : Z, f6 += z) : f2 - f1 - f4 <= f7 ? (Z = f1 - (f2 - f4 - f7), z = O < 0 ? -Z / 2 : Z, f6 += O / 2 + z) : f6 += O / 2);
                        f6 <= this.startLeft && (f6 = this.startLeft);
                        f6 >= f5 && (f6 = f5);
                        return f6;
                    }
                }
            }
        });
    }, function (A, L, D) {
        function V(E, T, I) {
            T in E ? Object.defineProperty(E, T, {
                value: I,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : E[T] = I;
            return E;
        }
        var B,
            J = D(8),
            X = D(4),
            P = D(3),
            M = D(10),
            S = M.aes,
            q = M.xorEncode,
            G = D(5),
            K = G.CAPTCHA_TYPE,
            F = G.CAPTCHA_CLASS,
            U = G.SAMPLE_NUM,
            R = D(6),
            j = R.SWITCH_LOAD_STATUS,
            N = R.INVOKE_HOOK,
            Q = D(7),
            k = Q.REQUEST_IMG_ERROR,
            W = D(11),
            C = D(9),
            w = C.createNetCollect;
        A.exports = J._extend({
            abstract: !0,
            props: ["loadInfo", "mode", "type", "isRtlLang"],
            data: function () {
                var E = this.$store.state.langPkg;
                return {
                    langPkg: E
                };
            },
            on: (B = {}, V(B, "." + F.BGIMG + " click", function (E) {
                this.onClick(E);
            }), V(B, "." + F.BGIMG + " mousemove", function (E) {
                this.trackMoving(E);
            }), B),
            mounted: function () {
                this.initData();
                this.$bgImg = X.find("." + F.BGIMG, this.$el);
            },
            beforeDestroy: function () {
                this.$bgImg = null;
            },
            render: function (E) {
                var T = E.loadInfo;
                if (T && "done" === T.status) {
                    var I = T.data && T.data.front;
                    Array.isArray(I) && (I = I[0], T.data.front = I);
                }
                T && this.changeLoadStatus(T);
            },
            methods: {
                initData: function () {
                    this.pointsStack = [];
                    this.MAX_POINTS = 0;
                    this.traceData = [];
                    this.beginTime = 0;
                    this.clickCounts = 0;
                },
                reset: function () {
                    var E = this.$store.state,
                        T = E.countsOfVerifyError,
                        I = E.config,
                        O = T > I.maxVerification;
                    O || (this.cleanPoints(), this.initData());
                },
                floatStatusChange: function () {
                    if (this.$parent.shouldHandleFloatChange(this.loadInfo)) {
                        var E = this.loadInfo.data.front || "";
                        this.changeTipElText({
                            message: E
                        });
                    }
                },
                changeTipElText: function (E) {
                    var T = E.message,
                        I = void 0 === T ? "" : T,
                        O = this.$store.state.config,
                        Z = this.langPkg,
                        z = this.$parent.panelVisible,
                        H = "float" === (this.mode || O.mode),
                        f0 = X.find(".yidun_tips__text", this.$el),
                        f1 = X.find(".yidun_tips__answer", this.$el),
                        f2 = X.find(".yidun_tips__point", this.$el);
                    H && !z ? (X.text(f0, Z.clickButton), X.addClass(this.$el, "yidun--button"), X.addClass(f1, "hide")) : (this.type === K.ICON_POINT ? X.text(f0, Z.clickInTurn) : this.type === K.WORD_GROUP ? X.text(f0, Z.clickOverlapWord) : this.type === K.WORD_ORDER ? X.text(f0, Z.clickWordInTurn) : this.type === K.SPACE ? X.text(f0, I) : (this.isRtlLang && (I = P.reverse(I)), X.text(f2, I.replace(/./g, " \"$&\"")), X.text(f0, Z.clickInTurn)), X.delClass(f1, "hide"), X.delClass(this.$el, "yidun--button"));
                },
                changeLoadStatus: function (E) {
                    var T = this,
                        I = E.status,
                        O = E.data;
                    switch (I) {
                        case "loading":
                            if (O) {
                                var Z = X.find(".yidun_bg-img", this.$el),
                                    z = X.find(".yidun_tips__img", this.$el),
                                    H = this.$store,
                                    f0 = H.commit,
                                    f1 = H.state,
                                    f2 = W.image({
                                        url: O.bg,
                                        timeout: f1.config.timeout,
                                        onProcess: w(f1.captchaCollector, {
                                            token: O.token
                                        })
                                    });
                                f2.then(function (f5) {
                                    T._isMounted && (Z.src = f5.src, T.type === K.ICON_POINT && (z.src = f5.src), f0(j, {
                                        status: "done",
                                        data: O
                                    }));
                                }).catch(function (f5) {
                                    if (T._isMounted) {
                                        var f6 = Object.assign({}, f5.data, {
                                            token: O.token
                                        });
                                        f0(j, {
                                            status: "fail"
                                        });
                                        f0(N, {
                                            name: "onError",
                                            args: [new Q(k, f5.message, f6)]
                                        });
                                    }
                                });
                            }
                            break;
                        case "done":
                            var f3 = O.front || "",
                                f4 = 0;
                            f4 = this.type === K.ICON_POINT ? 3 : this.type === K.WORD_GROUP || this.type === K.WORD_ORDER ? parseInt(f3, 10) : this.type === K.SPACE ? 1 : f3.length;
                            this.MAX_POINTS = f4;
                            this.changeTipElText({
                                message: f3
                            });
                    }
                },
                onClick: function (E) {
                    var T = this,
                        I = this.$store.state,
                        O = I.countsOfVerifyError,
                        Z = I.config,
                        z = O > Z.maxVerification;
                    if (!z) {
                        this.clickCounts++;
                        var H = this.$bgImg.getBoundingClientRect(),
                            f0 = H.left,
                            f1 = H.top;
                        this.pointsStack.length || (this.beginTime = P.now());
                        var f2 = this.pointsStack.slice(-1)[0];
                        return f2 && E.target === f2.el && !this.$store.state.verifyStatus ? void P.raf(function () {
                            return T.$bgImg.removeChild(T.pointsStack.pop().el);
                        }) : void this.addPoint({
                            left: E.clientX - f0,
                            top: E.clientY - f1
                        });
                    }
                },
                trackMoving: function (E) {
                    if (this.beginTime) {
                        var T = this.$bgImg.getBoundingClientRect(),
                            I = T.left,
                            O = T.top,
                            Z = q(this.$store.state.token, [Math.round(E.clientX - I), Math.round(E.clientY - O), P.now() - this.beginTime] + "");
                        this.traceData.push(Z);
                    }
                },
                addPoint: function (E) {
                    var T = E.left,
                        I = E.top,
                        O = this.pointsStack.length + 1;
                    if (!(O > this.MAX_POINTS)) {
                        var Z = document.createElement("div");
                        Z.className = "yidun_icon-point yidun_point-" + O;
                        X.css(Z, "left: " + (T - 10) + "px; top: " + (I - 25) + "px;");
                        this.$bgImg.appendChild(Z);
                        this.pointsStack.push({
                            el: Z,
                            coord: q(this.$store.state.token, [Math.round(T), Math.round(I), P.now() - this.beginTime] + "")
                        });
                        this.shouldVerifyCaptcha();
                    }
                },
                shouldVerifyCaptcha: function () {
                    var E = this.pointsStack;
                    if (E.length === this.MAX_POINTS) {
                        var T = E.map(function (O) {
                                return O.coord;
                            }),
                            I = this.traceData;
                        this.onVerifyCaptcha({
                            data: JSON.stringify({
                                d: "",
                                m: S(P.sample(I, U).join(":")),
                                p: S(T.join(":")),
                                ext: S(q(this.$store.state.token, this.clickCounts + "," + I.length))
                            })
                        });
                    }
                },
                cleanPoints: function () {
                    for (var E; E = this.pointsStack.pop();) {
                        this.$bgImg.removeChild(E.el);
                    }
                }
            }
        });
    }, function (A, L, D) {
        var Y = D(8),
            V = D(4),
            B = D(61),
            J = D(3),
            X = D(6),
            P = X.SWITCH_LOAD_STATUS,
            M = X.UPDATE_VERIFY_STATUS,
            S = X.INVOKE_HOOK,
            q = D(7),
            G = q.REQUEST_IMG_ERROR,
            K = D(11),
            F = D(9),
            U = F.createNetCollect;
        A.exports = Y._extend({
            abstract: !0,
            props: ["loadInfo"],
            data: function () {
                var R = this.$store.state,
                    j = R.langPkg,
                    N = R.config.lang,
                    Q = R.smsNew,
                    m = R.smsNewVersion,
                    k = R.version;
                return {
                    langPkg: j,
                    lang: N,
                    smsNew: Q,
                    qr: null,
                    smsNewVersion: m,
                    version: k
                };
            },
            mounted: function () {
                var R = this;
                this.TIMEOUT_SECONDS = 300;
                this._unsubscribe = this.$store.subscribe(function (j, N) {
                    var Q = j.type,
                        m = N.verifyStatus;
                    switch (Q) {
                        case M:
                            switch (m) {
                                case "success":
                                case "error":
                                    R.clearTimers();
                            }
                    }
                });
                this.smsNew && (this._removeEvents = this.initEvents());
            },
            beforeDestroy: function () {
                this._unsubscribe();
                this.clearTimers();
                this.smsNew && this._removeEvents && this._removeEvents();
            },
            render: function (R) {
                var j = R.loadInfo;
                j && this.changeLoadStatus(j);
            },
            methods: {
                initEvents: function () {
                    var R = V.find(".yidun_smsbox", this.$el),
                        j = V.find(".yidun_smsbox-text--manual", this.$el),
                        N = V.find(".yidun_smsbox-mobile--manual-btn", this.$el),
                        Q = V.find(".yidun_smsbox-manual--qr", this.$el),
                        m = V.find(".yidun_smsbox-manual--btn", this.$el),
                        k = function () {
                            V.addClass(R, "yidun_smsbox--manual");
                        };
                    j && V.on(j, "click", k, !0);
                    N && V.on(N, "click", k, !0);
                    var W = function () {
                        V.delClass(R, "yidun_smsbox--manual");
                    };
                    Q && V.on(Q, "click", W, !0);
                    m && V.on(m, "click", W, !0);
                    return function () {
                        j && V.off(j, "click", k, !0);
                        Q && V.off(Q, "click", W, !0);
                        m && V.off(m, "click", W, !0);
                    };
                },
                changeLoadStatus: function (j) {
                    var N = this,
                        Q = j.status,
                        W = j.data;
                    switch (Q) {
                        case "loading":
                            if (W) {
                                var C = V.find(".yidun_bg-img", this.$el),
                                    w = V.find(".yidun_smsbox-qrcode--img", this.$el),
                                    E = V.find(".yidun_smsbox-manual--edit-content", this.$el),
                                    T = V.find(".yidun_smsbox-manual--send-content__short", this.$el),
                                    I = V.find(".yidun_smsbox-manual--send-content__backup", this.$el),
                                    O = V.find(".yidun_smsbox--mobile-btn-inner", this.$el),
                                    Z = this.$store,
                                    z = Z.commit,
                                    H = Z.state,
                                    f0 = K.image({
                                        url: W.bg,
                                        timeout: H.config.timeout,
                                        onProcess: U(H.captchaCollector, {
                                            token: W.token
                                        })
                                    });
                                f0.then(function (f3) {
                                    if (N.smsNew && w && E && T && I && O) {
                                        var f4 = W.front && "string" == typeof W.front ? W.front.split(",") : [];
                                        if (3 === f4.length) {
                                            V.text(E, f4[0]);
                                            V.text(T, f4[1]);
                                            V.text(I, N.langPkg.sms.or + f4[2]);
                                            var f5 = !1,
                                                f6 = f5 ? "http" : "https",
                                                f7 = N.$store.state.config.staticServer,
                                                f8 = J.encodeUrlParams({
                                                    code: f4[0],
                                                    phone: f4[1],
                                                    phoneBackup: f4[2],
                                                    lang: N.lang,
                                                    version: H.smsVersion
                                                }),
                                                f9 = "sms" + (f5 ? "" : ".v" + N.version) + ".html",
                                                ff = f6 + "://" + (Array.isArray(f7) ? f7[0] : f7) + (f5 ? "" : "/api/v2") + "/" + f9 + "?" + f8;
                                            N.qr && N.qr.clear && (N.qr.clear(), N.qr = null);
                                            V.html(w, "");
                                            N.qr = new B(w, {
                                                text: ff,
                                                width: 96,
                                                height: 96,
                                                useCanvas: !0,
                                                correctLevel: B.CorrectLevel.M
                                            });
                                            var fv = "10690163",
                                                fA = "106981630163",
                                                fL = f4[1].indexOf(fv) || f4[1].indexOf(fA) || f4[2].indexOf(fv) || f4[2].indexOf(fA);
                                            if (fL) {
                                                var fD = "",
                                                    fY = window.navigator.userAgent,
                                                    fy = f4[1];
                                                fD = /(iPhone|iPad|iPod|iOS)/i.test(fY) ? "sms:" + fy + "&body=" + f4[0] : "sms:" + fy + "?body=" + f4[0];
                                                O.setAttribute("href", N.smsNewVersion > 1 ? fD : ff);
                                            }
                                        }
                                    } else {
                                        C.src = f3.src;
                                    }
                                    z(P, {
                                        status: "done",
                                        data: W
                                    });
                                }).catch(function (f3) {
                                    var f4 = Object.assign({}, f3.data, {
                                        token: W.token
                                    });
                                    z(P, {
                                        status: "fail"
                                    });
                                    z(S, {
                                        name: "onError",
                                        args: [new q(G, f3.message, f4)]
                                    });
                                });
                            }
                            break;
                        case "done":
                            var f1 = V.find(".yidun_tips__text", this.$el),
                                f2 = this.langPkg;
                            f1.innerHTML = f2.waitForSMS + "\n          <span class=\"yidun_sms-counter\"></span>";
                            this.countDown();
                            this.pollingToVerify();
                    }
                },
                pollingToVerify: function () {
                    var R = this,
                        j = this.TIMEOUT_SECONDS,
                        N = 5,
                        Q = 0,
                        m = function k() {
                            return N * Q >= j ? void R.$store.commit(M, {
                                verifyStatus: "error",
                                error: new Error("SMS is outdated")
                            }) : (Q++, R.onVerifyCaptcha({
                                data: ""
                            }), void (R.pollingTimer = setTimeout(k, 1000 * N)));
                        };
                    m();
                },
                countDown: function () {
                    var R = this,
                        j = this.TIMEOUT_SECONDS,
                        N = V.find(".yidun_sms-counter", this.$el),
                        Q = function m() {
                            V.text(N, j-- + "s");
                            0 !== j && (R.countTimer = setTimeout(m, 1000));
                        };
                    Q();
                },
                clearTimers: function () {
                    this.countTimer && (clearTimeout(this.countTimer), this.countTimer = null);
                    this.pollingTimer && (clearTimeout(this.pollingTimer), this.pollingTimer = null);
                },
                reset: function () {
                    this.clearTimers();
                }
            }
        });
    }, function (A, L, D) {
        function V(I, O, Z) {
            O in I ? Object.defineProperty(I, O, {
                value: Z,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : I[O] = Z;
            return I;
        }
        var B,
            J = D(8),
            X = D(4),
            P = D(3),
            M = D(10),
            S = M.aes,
            q = M.xorEncode,
            G = D(5),
            K = G.CAPTCHA_CLASS,
            F = G.SAMPLE_NUM,
            U = G.LARGE_SIZE_TYPE,
            R = D(6),
            j = R.SWITCH_LOAD_STATUS,
            N = R.INVOKE_HOOK,
            Q = R.EVENT_CLOSE,
            W = D(7),
            C = W.REQUEST_AUDIO_ERROR,
            w = D(11),
            E = D(9),
            T = E.createNetCollect;
        A.exports = J._extend({
            abstract: !0,
            props: ["loadInfo", "mode", "size", "type", "fixedAudio"],
            data: function () {
                var I = this.$store.state.langPkg;
                return {
                    langPkg: I,
                    playStatus: "start",
                    yidunFontSize: null
                };
            },
            on: (B = {}, V(B, "." + K.CONTROL + " keydown", function (I) {
                function O(Z) {
                    return I.apply(this, arguments);
                }
                O.toString = function () {
                    return I.toString();
                };
                return O;
            }(function (I) {
                if (I) {
                    var O = I.nativeEvent.event;
                    if (O) {
                        var Z = !1;
                        void 0 !== O.key ? Z = "Spacebar" === O.key || " " === O.key || "Enter" === O.key : void 0 !== O.keyCode && (Z = 13 === O.keyCode || 32 === O.keyCode);
                        Z && (I.preventDefault(), this.handleVerifyBtn(I));
                    }
                }
            })), V(B, ".yidun_voice__input keydown", function (I) {
                if (I) {
                    var O = I.nativeEvent.event;
                    if (O) {
                        var Z = !1;
                        void 0 !== O.key ? Z = "Spacebar" === O.key || " " === O.key || "Enter" === O.key : void 0 !== O.keyCode && (Z = 13 === O.keyCode || 32 === O.keyCode);
                        Z && (I.preventDefault(), this.handleVerifyBtn());
                    }
                }
            }), V(B, "." + K.BGIMG + " mousemove", function (I) {
                this.trackMoving(I);
            }), B),
            mounted: function () {
                var I = this;
                if (this.initData(), this._removeEvents = this.initEvents(), this.fixedAudio) {
                    var O = X.find(".yidun_voice__back", this.$el);
                    O.style.display = "inline-block";
                }
                this._unsubscribe = this.$store.subscribe(function (Z, z) {
                    var H = Z.type;
                    H === Q && I.resetAudio();
                });
                this.adjustUI();
            },
            beforeDestroy: function () {
                this._removeEvents();
                this._unsubscribe();
                this.$bgImg = null;
                this.$input = null;
            },
            render: function (I) {
                var O = I.loadInfo,
                    Z = I.playStatus;
                O && this.changeLoadStatus(O);
                Z && this.changeAudioStatus(Z);
            },
            methods: {
                initData: function () {
                    this.traceData = [];
                    this.beginTime = 0;
                    this.clickCounts = 0;
                },
                adjustUI: function () {
                    function I(H, f0) {
                        if (!f0 || "function" != typeof window.getComputedStyle) {
                            return H;
                        }
                        var f1 = H;
                        try {
                            f1 = parseInt(window.getComputedStyle(f0, null).getPropertyValue("font-size"), 10);
                        } catch (f3) {
                            return f1;
                        }
                        var f2 = H / f1;
                        return Math.floor(H * f2);
                    }
                    var O = X.find(".yidun_voice", this.$el);
                    this.$el.offsetWidth <= 280 && X.addClass(O, "yidun_voice-280");
                    this.$el.offsetWidth < 240 && X.addClass(O, "yidun_voice-240");
                    var Z = X.find(".yidun");
                    if (Z) {
                        var z = Z.style.fontSize;
                        "" !== z && this.$setData({
                            yidunFontSize: z
                        });
                        Z.style.fontSize = I(U[this.size], Z) + "px";
                    }
                },
                resetYidunFontSize: function () {
                    var I = X.find(".yidun");
                    I && (null !== this.yidunFontSize ? I.style.fontSize = this.yidunFontSize : I.style.fontSize = "");
                },
                initEvents: function () {
                    var I = this,
                        O = this.onClick.bind(this);
                    this.$bgImg = X.find("." + K.BGIMG, this.$el);
                    this.$input = X.find(".yidun_voice__input", this.$el);
                    var Z = X.find(".yidun_audio__play", this.$el),
                        z = X.find(".yidun_audio__source", this.$el),
                        H = X.find("." + K.CONTROL, this.$el),
                        f0 = X.find(".yidun_voice__refresh", this.$el),
                        f1 = X.find(".yidun_audio__refresh", this.$el),
                        f2 = X.find(".yidun_voice__back", this.$el),
                        f3 = this.onPlayerClick.bind(this),
                        f4 = this.onAudioEnded.bind(this),
                        f5 = this.handleVerifyBtn.bind(this),
                        f6 = function (ff) {
                            var fv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return function (fA) {
                                I.resetYidunFontSize();
                                fv && I.adjustUI();
                                var fL = I.$store.state.verifyStatus;
                                fL || (ff || I.resetAudio(), I.$parent.switchTypeAndRefresh(fA, ff));
                            };
                        },
                        f7 = f6(),
                        f8 = f6(),
                        f9 = f6(!1, !1);
                    X.on(this.$input, "focus", O);
                    X.on(Z, "click", f3, !0);
                    X.on(z, "ended", f4);
                    X.on(H, "click", f5, !0);
                    X.on(f0, "click", f7, !0);
                    f1 && X.on(f1, "click", f8, !0);
                    f2 && X.on(f2, "click", f9, !0);
                    return function () {
                        X.off(I.$input, "focus", O);
                        X.off(Z, "click", f3, !0);
                        X.off(z, "ended", f4);
                        X.off(H, "click", f5, !0);
                        X.off(f0, "click", f7, !0);
                        f1 && X.off(f1, "click", f8, !0);
                        f2 && X.off(f2, "click", f9, !0);
                    };
                },
                reset: function () {
                    var I = this.$store.state,
                        O = I.countsOfVerifyError,
                        Z = I.config,
                        z = O > Z.maxVerification;
                    if (!z) {
                        this.initData();
                        this.$input.value = "";
                        var H = X.find("." + K.CONTROL, this.$el);
                        H.setAttribute("role", "");
                    }
                },
                changeLoadStatus: function (I) {
                    var O = this,
                        Z = I.status,
                        z = I.data;
                    if ("loading" === Z && z) {
                        var H = X.find(".yidun_audio__source", this.$el),
                            f0 = X.find(".yidun_tips__text", this.$el),
                            f1 = X.find("." + K.CONTROL, this.$el),
                            f2 = this.$store,
                            f3 = f2.commit,
                            f4 = f2.state,
                            f5 = w.audio({
                                url: z.bg,
                                timeout: f4.config.timeout,
                                onProcess: T(f4.captchaCollector, {
                                    token: z.token
                                })
                            });
                        f5.then(function (f7) {
                            O._isMounted && (H.src = f7.src, X.text(f0, f4.langPkg.check), f1.setAttribute("role", "button"), f3(j, {
                                status: "done",
                                data: f7
                            }), O.$setData({
                                playStatus: "start"
                            }), O.addAudioWave());
                        }).catch(function (f7) {
                            if (O._isMounted) {
                                var f8 = Object.assign({}, f7.data, {
                                    token: z.token
                                });
                                f3(j, {
                                    status: "fail"
                                });
                                f3(N, {
                                    name: "onError",
                                    args: [new W(C, f7.message, f8)]
                                });
                            }
                        });
                    } else {
                        if ("done" === Z) {
                            var f6 = X.find(".yidun_audio__play", this.$el);
                            setTimeout(function () {
                                return f6.focus();
                            }, 150);
                        }
                    }
                },
                addAudioWave: function () {
                    var I = this,
                        O = X.find(".yidun_audio__source", this.$el);
                    O.onloadeddata = function () {
                        O.onloadeddata = null;
                        var Z = X.find(".yidun_audio__wave", I.$el);
                        Z.innerHTML = "";
                        for (var z = O.duration > 7 && O.duration !== Infinity ? O.duration : 7, H = Math.round(1000 * z / 500), f0 = document.createDocumentFragment(); H;) {
                            var f1 = document.createElement("span");
                            f1.className = "yidun_wave__item yidun_wave-" + H % 10;
                            f1.innerHTML = "<span class=\"yidun_wave__inner\"></span>";
                            f0.appendChild(f1);
                            H--;
                        }
                        Z.appendChild(f0);
                    };
                    O.load();
                },
                changeAudioStatus: function (I) {
                    var O = this,
                        Z = X.find(".yidun_audio__play", this.$el),
                        z = X.find(".yidun_audio__refresh", this.$el),
                        H = function () {
                            var f1 = X.findAll(".yidun_wave__item", O.$el),
                                f2 = X.find(".yidun_audio__wave", O.$el);
                            f2 && f2.focus();
                            var f3 = 0,
                                f4 = function f5() {
                                    O.timer && clearTimeout(O.timer);
                                    f3 > f1.length || (X.addClass(f1[f3], "yidun_wave__item-light"), f3++, O.timer = setTimeout(f5, 480));
                                };
                            f4();
                        },
                        f0 = function () {
                            clearTimeout(O.timer);
                            for (var f1 = X.findAll(".yidun_wave__item", O.$el), f2 = 0; f2 < f1.length; f2++) {
                                X.delClass(f1[f2], "yidun_wave__item-light");
                            }
                        };
                    switch (I) {
                        case "start":
                            Z.style.display = "";
                            z.style.display = "none";
                            f0();
                            break;
                        case "playing":
                            Z.style.display = "none";
                            z.style.display = "none";
                            H();
                            break;
                        case "ended":
                            Z.style.display = "";
                            z.style.display = "";
                            f0();
                    }
                },
                resetAudio: function () {
                    var I = X.find(".yidun_audio__source", this.$el);
                    I && (I.pause(), I.currentTime = 0, this.$setData({
                        playStatus: "start"
                    }));
                },
                onPlayerClick: function (I) {
                    this.beginTime = P.now();
                    this.onClick(I);
                    var O = X.find(".yidun_audio__source", this.$el);
                    O && O.play();
                    this.$setData({
                        playStatus: "playing"
                    });
                },
                onClick: function (I) {
                    var O = this.$store.state,
                        Z = O.countsOfVerifyError,
                        z = O.config,
                        H = Z > z.maxVerification;
                    H || this.clickCounts++;
                },
                onAudioEnded: function () {
                    this.$setData({
                        playStatus: "ended"
                    });
                },
                trackMoving: function (I) {
                    if (this.beginTime) {
                        var O = this.$bgImg.getBoundingClientRect(),
                            Z = O.left,
                            z = O.top,
                            H = q(this.$store.state.token, [Math.round(I.clientX - Z), Math.round(I.clientY - z), P.now() - this.beginTime] + "");
                        this.traceData.push(H);
                    }
                },
                handleVerifyBtn: function (I) {
                    var O = this.$store.state,
                        Z = O.load,
                        z = O.verifyStatus;
                    if ("done" === Z.status && !z) {
                        var H = X.find("." + K.CONTROL, this.$el);
                        H.setAttribute("role", "");
                        this.onClick();
                        var f0 = this.$input.value,
                            f1 = this.traceData;
                        this.onVerifyCaptcha({
                            data: JSON.stringify({
                                d: "",
                                m: S(P.sample(f1, F).join(":")),
                                p: S(q(this.$store.state.token, f0 + "," + (P.now() - this.beginTime))),
                                ext: S(q(this.$store.state.token, this.clickCounts + "," + this.traceData.length))
                            })
                        });
                        this.beginTime = 0;
                    }
                }
            }
        });
    }, function (L, D, V) {
        function B(fy, fV) {
            var fB = this,
                fJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                fX = fJ.startTimestamp;
            fy = W(fy);
            var fP = {};
            fP = "dark" === fy.theme ? fy.__theme__ : fY;
            N(fP, {
                protocol: fy.protocol,
                staticServer: Array.isArray(fy.staticServer) ? fy.staticServer[0] : fy.staticServer,
                theme: fy.theme
            });
            var fs = window.gdxidpyhxde;
            fV = fV || new fL({
                bid: fy.captchaId,
                url: ""
            }, fy);
            var fr = Object.assign({}, j.state, {
                    config: fy,
                    fingerprint: fs,
                    langPkg: fy.customTexts,
                    smsNew: (fy.smsNewVersion > 1 || !!fy.smsNew || !Z.isMobile) && Z.supportCanvas,
                    smsNewVersion: fy.smsNewVersion,
                    smsVersion: "v3",
                    iv: ff,
                    $fetch: Q({
                        timeout: fy.timeout,
                        captchaConfig: fy
                    }),
                    $captchaAnticheat: new fA(fy, fV),
                    captchaCollector: fV,
                    browserFeature: fD,
                    startTimestamp: fX
                }),
                fM = new U(Object.assign({}, j, {
                    state: fr
                })),
                fu = fy.__serverConfig__.smart,
                fS = null,
                fq = function (fc) {
                    var fR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (!fy.disableValidateInput && fc && fc.nodeType) {
                        var fj = Z.find(".yidun_input", fc);
                        fj ? fj.value = fR : (fj = document.createElement("input"), fj.type = "hidden", fj.name = "NECaptchaValidate", fj.value = fR, fj.className = "yidun_input", fc.appendChild(fj));
                    }
                },
                fG = {
                    onVerify: function (fc, fR) {
                        if (fc) {
                            var fj = fc.data;
                            if (fj && fj.counts > fy.maxVerification) {
                                var fn = new f3(f4, "verify failed more then " + fy.maxVerification + " times--" + fc.message, Object.assign({
                                    token: fj.token
                                }, fc.data));
                                return void fV.collectErr(fn);
                            }
                            return void (fc.code === f5 && fc.data.errorCode !== f6 && fV.collectErr(fc));
                        }
                        var fN = fR.validate;
                        fq(fy.element, fN);
                        fV.clear();
                    },
                    onError: function (fc) {
                        fc && "get" === fc.data.api && fc.code === f5 && fc.data.errorCode !== f6 && fV.collectErr(fc);
                    }
                };
            this.version = fM.state.version;
            this.captchaId = fy.captchaId;
            this.captchaType = fM.state.captchaType;
            this.mode = fy.mode;
            this.theme = fy.theme;
            this.protocol = fy.protocol;
            this.lang = fy.lang;
            var fe = fM.subscribe(function (fc, fR) {
                var fj = fc.type,
                    fn = fc.payload;
                switch (fj) {
                    case M:
                        fB.captchaType = fR.captchaType;
                        break;
                    case K:
                    case G:
                        fq(fy.element, "");
                        break;
                    case q:
                        var fN = fn.name,
                            fQ = fn.args;
                        window.setTimeout(function () {
                            var fl = fG[fN];
                            !fQ && (fQ = [fB]);
                            fl && fl.apply(null, fQ);
                            "function" == typeof fy[fN] && fy[fN].apply(null, fQ);
                        });
                }
            });
            J.mixin({
                beforeCreate: function () {
                    this.$store = this.$parent && this.$parent.$store || this.$options.store;
                }
            });
            this.popUp = function () {
                fy.apiVersion > 1 ? f7.assert(!1, "apiVersion: " + fy.apiVersion + " unsupport popUp") : f7.assert(!1, "popUp function could only be invoked in not intellisense and mode is popup");
            };
            this.close = function () {
                f7.assert(!1, "close function could only be invoked in only \"enableClose\" is true and intellisense on mobile devices or mode is bind/popup");
            };
            this.verify = function () {
                fy.apiVersion > 1 ? f7.assert(!1, "verify function could only be invoked when mode is popup") : f7.assert(!1, "verify function could only be invoked in intellisense and mode is bind");
            };
            var fK = function (fc, fR) {
                fy.enableClose && (fR && !Z.isMobile || (fB.close = function () {
                    var fj = fc || fS;
                    fj && fj.closeModal();
                }));
            };
            switch (fu) {
                case !0:
                    if ("bind" === this.mode) {
                        var fF = J._extend(f2);
                        fS = new fF({
                            abstract: !0,
                            el: fy.element,
                            store: fM
                        });
                        this.verify = function () {
                            if (fM.state.token) {
                                fS.verifyCaptcha();
                            } else {
                                var fc = fM.subscribe(function (fR, fj) {
                                    var fn = fR.type;
                                    fR.payload;
                                    fn === F && (fS.verifyCaptcha(), fc());
                                });
                            }
                        };
                        fK(fS);
                        this._captchaIns = fS;
                    } else {
                        fS = new J({
                            el: fy.element,
                            store: fM,
                            template: "<captcha-intellisense></captcha-intellisense>",
                            components: {
                                "captcha-intellisense": f1
                            }
                        });
                        var fU = fS && fS.$children && fS.$children[0];
                        fK(fU, !0);
                        this._captchaIns = fU;
                    }
                    break;
                case !1:
                default:
                    "popup" === this.mode ? (this[fy.apiVersion > 1 ? "verify" : "popUp"] = function () {
                        if (!fS) {
                            var fc = J._extend(f0);
                            fS = new fc({
                                store: fM,
                                propsData: {
                                    onBeforeClose: function () {
                                        fM.commit(q, {
                                            name: "onBeforeClose"
                                        });
                                    },
                                    onClose: function (fR) {
                                        fM.commit(q, {
                                            name: "onClose",
                                            args: [{
                                                source: fR
                                            }]
                                        });
                                    },
                                    onOpen: function () {
                                        fM.commit(q, {
                                            name: "onOpen"
                                        });
                                    },
                                    onWidthGeted: function (fR) {
                                        Z.delClass(fR, fv);
                                    },
                                    enableColor: !0,
                                    autoOpen: !1
                                }
                            }).$mount(function (fR) {
                                Z.addClass(fR, fv);
                                fy.appendTo ? fy.appendTo.appendChild(fR) : document.body.appendChild(fR);
                            });
                        }
                        fS.open();
                        this._captchaIns = fS;
                    }, fK()) : (fS = new J({
                        el: fy.element,
                        store: fM,
                        template: "<captcha-core :enableColor=\"true\"></captcha-core>",
                        components: {
                            "captcha-core": H
                        }
                    }), this._captchaIns = fS);
            }
            fq(fy.element);
            this.getCaptchaType = function () {
                for (var fc in f9) if (f9[fc] === fM.state.type) {
                    return fc.toLowerCase();
                }
                return "";
            };
            this.isIntellisense = function () {
                return !!fu;
            };
            this.refresh = function () {
                fM.commit(G);
            };
            this.destroy = function () {
                fe();
                fS && (fS.$destroy(), fS = null);
                var fc = fy.element;
                if (fc) {
                    var fR = Z.find(".yidun_input", fc);
                    fR && fc.removeChild(fR);
                }
                var fj = X(),
                    fn = fj.destroy;
                fn && "function" == typeof fn && fn();
            };
        }
        var J = V(8),
            X = V(25),
            P = V(6),
            M = P.SWITCH_TYPE,
            q = P.INVOKE_HOOK,
            G = P.EVENT_RESET,
            K = P.EVENT_RESET_CLASSIC,
            F = P.SET_TOKEN,
            U = V(55),
            j = V(71),
            N = V(42),
            Q = V(22),
            W = V(47),
            Z = V(4),
            H = V(15),
            f0 = V(16),
            f1 = V(41),
            f2 = V(33),
            f3 = V(7),
            f4 = f3.UNPASS_ERROR,
            f5 = f3.BUSINESS_ERROR,
            f6 = f3.QPS_LIMIT_ERROR,
            f7 = V(3),
            f8 = V(5),
            f9 = f8.CAPTCHA_TYPE,
            ff = f8.IV_VERSION,
            fv = f8.POPUP_PRELOAD_SHIFTING_CLASS,
            fA = V(44),
            fL = V(9),
            fD = V(43),
            fY = V(72);
        L.exports = window.NECaptcha || B;
    }, function (L, D, V) {
        var B = function () {
                function fY(fy, fV) {
                    var fB = [],
                        fJ = !0,
                        fX = !1,
                        fP = void 0;
                    try {
                        for (var fs, fr = fy[Symbol.iterator](); !(fJ = (fs = fr.next()).done) && (fB.push(fs.value), !fV || fB.length !== fV); fJ = !0) {}
                    } catch (fM) {
                        fX = !0;
                        fP = fM;
                    } finally {
                        try {
                            !fJ && fr.return && fr.return();
                        } finally {
                            if (fX) {
                                throw fP;
                            }
                        }
                    }
                    return fB;
                }
                return function (fy, fV) {
                    if (Array.isArray(fy)) {
                        return fy;
                    }
                    if (Symbol.iterator in Object(fy)) {
                        return fY(fy, fV);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            J = V(14),
            X = J.FETCH_INTELLISENSE_CAPTCHA,
            P = J.VERIFY_INTELLISENSE_CAPTCHA,
            M = J.RESET_STATE,
            q = V(6),
            G = q.SWITCH_LOAD_STATUS,
            K = q.UPDATE_VERIFY_STATUS,
            F = q.INVOKE_HOOK,
            U = q.EVENT_RESET,
            j = V(5),
            N = j.CAPTCHA_TYPE,
            Q = j.SAMPLE_NUM,
            W = j.RTL_LANGS,
            Z = j.SIZE_TYPE,
            H = j.LARGE_SIZE_TYPE,
            f0 = j.POPUP_PRELOAD_SHIFTING_CLASS,
            f1 = j.CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS,
            f2 = V(3),
            f3 = V(4),
            f4 = V(19),
            f5 = V(10),
            f6 = f5.aes,
            f7 = f5.xorEncode,
            f8 = V(8),
            f9 = V(15),
            ff = V(16),
            fv = V(13),
            fA = V(17),
            fL = fA.applyColorIfNeed,
            fD = fA.applyStyleIfNeed;
        L.exports = {
            el: ".yidun_intellisense",
            template: V(74),
            components: {
                "captcha-core": f9
            },
            data: function () {
                var fY = this.$store.state,
                    fy = fY.langPkg,
                    fV = fY.config;
                return {
                    langPkg: fy,
                    theme: fV.theme,
                    size: fV.size,
                    status: "normal",
                    classicVisible: !1,
                    icon: fV.customStyles.icon,
                    isAndroid: f3.isAndroid
                };
            },
            on: {
                ".yidun_intelli-control click": function (fY) {
                    this.handleControlClick(fY);
                },
                ".yidun_intelli-control keydown": function (fY) {
                    if (fY) {
                        var fy = fY.nativeEvent.event;
                        if (fy) {
                            var fV = !1;
                            void 0 !== fy.key ? fV = "Spacebar" === fy.key || " " === fy.key || "Enter" === fy.key : void 0 !== fy.keyCode && (fV = 13 === fy.keyCode || 32 === fy.keyCode);
                            return fV ? (fY.preventDefault(), this.handleControlClick(fY), !1) : void 0;
                        }
                    }
                },
                ".yidun_intelli-control mousemove": function (fY) {
                    this.trackMoving(fY);
                }
            },
            watch: {
                status: function (fY) {
                    "loaddone" === fY && this.firstLoad && (this.$setData({
                        classicVisible: !0
                    }), this.firstLoad = !1);
                    "success" === fY && this.$setData({
                        classicVisible: !1
                    });
                }
            },
            mounted: function () {
                var fY = this;
                fL(this.$store.state.config.customStyles.primaryColor, this.$el);
                fD(this.$store.state.config.customStyles, this.$el);
                this.beginTime = 0;
                this.traceData = [];
                this._baseClassNames = this.$el.className.trim();
                this._removeEvents = this.initEvents();
                this.fetchCaptcha().then(function () {
                    fY.$store.commit(F, {
                        name: "onReady"
                    });
                    fY.$store.commit(F, {
                        name: "onDidRefresh"
                    });
                }).finally(function () {
                    fY.$el.style.display = "";
                });
                W.indexOf(this.$store.state.config.lang) !== -1 && (this.$el.style.direction = "rtl");
            },
            beforeDestroy: function () {
                this._removeEvents();
                this.clear();
            },
            render: function (fY) {
                var fy = fY.status,
                    fV = fY.classicVisible;
                void 0 !== fy && this.updateUI(fy);
                void 0 !== fV && this.toggleClassicVisible(fV);
            },
            methods: {
                handleControlClick: function (fY) {
                    if (!(["checking", "loading", "loadfail", "success"].indexOf(this.status) > -1)) {
                        return "normal" === this.status ? void this.verifyIntelliCaptcha(fY) : void (!this.classicVisible && this.$setData({
                            classicVisible: !0
                        }));
                    }
                },
                initEvents: function () {
                    var fY = this,
                        fy = f3.find(".yidun_intelli-control", this.$el),
                        fV = function (fX) {
                            fY.$el.contains(fX.target) || fY.classicVisible && fY.$setData({
                                classicVisible: !1
                            });
                        },
                        fB = function (fX) {
                            fY.beginTime || (fY.beginTime = f2.now());
                        };
                    !f3.isMobile && f3.on(document, "mousedown", fV);
                    f3.on(fy, "mouseover", fB);
                    var fJ = this.$store.subscribe(function (fX, fP) {
                        var fs = fX.type,
                            fr = (fX.payload, fP.load),
                            fM = fP.verifyStatus;
                        switch (fs) {
                            case G:
                                fr && ("loading" === fr.status && fY.$setData({
                                    status: "loading"
                                }), "done" === fr.status && fY.$setData({
                                    status: "loaddone"
                                }), "fail" === fr.status && fY.$setData({
                                    status: "loadfail"
                                }));
                                break;
                            case K:
                                "success" === fM && fY.$setData({
                                    status: "success"
                                });
                                "error" === fM && fY.$setData({
                                    status: "error"
                                });
                                break;
                            case U:
                                fY.reset();
                        }
                    });
                    return function () {
                        !f3.isMobile && f3.off(document, "mousedown", fV);
                        f3.off(fy, "mouseover", fB);
                        fJ();
                    };
                },
                createClassicCaptcha: function () {
                    var fY = this;
                    if (f3.isMobile) {
                        var fy = this.$store.state.config,
                            fV = f8._extend(ff);
                        this._captchaIns = new fV({
                            store: this.$store,
                            propsData: {
                                autoOpen: !1,
                                intellisense: !0,
                                enableColor: !1,
                                onBeforeClose: function () {
                                    fY.$store.commit(F, {
                                        name: "onBeforeClose"
                                    });
                                },
                                onClose: function (fJ) {
                                    fY.$setData({
                                        classicVisible: !1
                                    });
                                    fY.$store.commit(F, {
                                        name: "onClose",
                                        args: [{
                                            source: fJ
                                        }]
                                    });
                                },
                                onOpen: function () {
                                    fY.$store.commit(F, {
                                        name: "onOpen"
                                    });
                                },
                                onWidthGeted: function (fJ) {
                                    f3.delClass(fJ, f0);
                                }
                            }
                        }).$mount(function (fJ) {
                            f3.addClass(fJ, f0);
                            fy.appendTo ? fy.appendTo.appendChild(fJ) : document.body.appendChild(fJ);
                        });
                    } else {
                        var fB = f8._extend(f9);
                        this._captchaIns = new fB({
                            store: this.$store,
                            propsData: {
                                intellisense: !0,
                                enableColor: !1,
                                onWidthGeted: function () {
                                    var fJ = f3.find(".yidun_classic-wrapper");
                                    f3.delClass(fJ, f1);
                                }
                            }
                        }).$mount(function (fJ) {
                            var fX = f3.find(".yidun_classic-wrapper", fY.$el);
                            f3.addClass(fX, f1);
                            fX.appendChild(fJ);
                        });
                    }
                },
                fetchCaptcha: function () {
                    var fY = this;
                    return new fv(function (fy, fV) {
                        var fB = {
                            width: fY.getWidth(),
                            sizeType: fY.getSizeType(),
                            smsVersion: fY.$store.state.smsVersion
                        };
                        fY.$store.state.smsNew;
                        fY.$store.dispatch(X, fB, function (fJ, fX) {
                            if (fY._isMounted) {
                                return fJ ? (fY.$setData({
                                    status: "loadfail"
                                }), void fV(fJ)) : void fy(fX);
                            }
                        });
                    });
                },
                clear: function () {
                    var fY = this;
                    this._captchaIns && (this.$setData({
                        classicVisible: !1
                    }), this.$nextTick(function () {
                        fY._captchaIns.$destroy();
                        fY._captchaIns = null;
                    }));
                    this.beginTime = 0;
                    this.traceData = [];
                },
                reset: function () {
                    var fY = this;
                    this.$store.dispatch(M);
                    this.fetchCaptcha().then(function () {
                        fY.clear();
                        fY.resetClassNames();
                        fY.$setData({
                            status: "normal"
                        });
                    });
                },
                getWidth: function () {
                    return this.$el.offsetWidth;
                },
                getSizeType: function () {
                    return Object.keys(H).indexOf(this.size) !== -1 ? Z.LARGE : Z.DEFAULT;
                },
                resetClassNames: function () {
                    for (var fY = this._baseClassNames.split(/\s+/), fy = arguments.length, fV = Array(fy), fB = 0; fB < fy; fB++) {
                        fV[fB] = arguments[fB];
                    }
                    this.$el.className = f4(fY, fV);
                },
                loadClassicCaptcha: function () {
                    this.createClassicCaptcha();
                    this.firstLoad = !0;
                    this.$setData({
                        status: "loading"
                    });
                    this._captchaIns.refresh();
                },
                verifyIntelliCaptcha: function (fY) {
                    var fy = this;
                    this.$setData({
                        status: "checking"
                    });
                    fv.all([new fv(function (fV, fB) {
                        var fJ = fy.$store.state.token,
                            fX = fy.$el.getBoundingClientRect(),
                            fP = fX.left,
                            fs = fX.top,
                            fr = f2.now(),
                            fM = f7(fJ, (void 0 !== fY.clientX && void 0 !== fY.clientY ? [Math.round(fY.clientX - fP), Math.round(fY.clientY - fs), fr - (fy.beginTime || fr)] : []) + ""),
                            fu = fy.traceData.map(function (fS) {
                                return f7(fJ, fS);
                            });
                        fy.$store.dispatch(P, {
                            token: fJ,
                            type: N.INTELLISENSE,
                            width: fy.getWidth(),
                            data: JSON.stringify({
                                d: "",
                                m: f6(f2.sample(fu, Q).join(":")),
                                p: f6(fM),
                                ext: f6(f7(fJ, "1," + fu.length))
                            })
                        }, function (fS, fq) {
                            if (fy._isMounted) {
                                return fS ? void fB(fS) : void fV(fq);
                            }
                        });
                    }), new fv(function (fV, fB) {
                        window.setTimeout(fV, 300);
                    })]).then(function (fV) {
                        var fB = B(fV, 1);
                        fB[0];
                        fy.$setData({
                            status: "success"
                        });
                    }).catch(function () {
                        return fy.loadClassicCaptcha();
                    });
                },
                trackMoving: function (fY) {
                    if (this.beginTime) {
                        var fy = this.$el.getBoundingClientRect(),
                            fV = fy.left,
                            fB = fy.top,
                            fJ = [Math.round(fY.clientX - fV), Math.round(fY.clientY - fB), f2.now() - this.beginTime] + "";
                        this.traceData.push(fJ);
                    }
                },
                toggleClassicVisible: function (fY) {
                    var fy = this._captchaIns;
                    if (f3.isMobile && fy) {
                        fY && fy.open();
                        !fY && fy.close();
                    } else {
                        var fV = f3.find(".yidun_classic-wrapper", this.$el);
                        fV.style.display = fY ? "block" : "none";
                    }
                },
                updateUI: function (fY) {
                    var fy = this,
                        fV = f3.find(".yidun_intelli-text", this.$el),
                        fB = f3.find(".yidun_tips__text", this.$el),
                        fJ = this.langPkg.intellisense,
                        fX = "yidun_intellisense",
                        fP = this.$store.state,
                        fs = fP.countsOfVerifyError,
                        fr = fP.config,
                        fM = function (fS) {
                            fS.stopPropagation();
                            fy.$store.commit(U);
                        };
                    switch (f3.off(fB, "click", fM), fY) {
                        case "normal":
                            f3.text(fV, fJ.normal);
                            break;
                        case "checking":
                            this.resetClassNames(fX + "--checking");
                            f3.text(fV, fJ.checking);
                            break;
                        case "loading":
                            this.resetClassNames(fX + "--loading");
                            f3.text(fV, fJ.loading);
                            break;
                        case "loaddone":
                            this.resetClassNames();
                            f3.text(fV, fJ.loaddone);
                            break;
                        case "loadfail":
                            this.resetClassNames(fX + "--loadfail");
                            f3.text(fB, fJ.loadfail);
                            break;
                        case "success":
                            this.resetClassNames(fX + "--success");
                            f3.text(fB, this.langPkg.verifySuccess);
                            break;
                        case "error":
                            var fu = fX + "--error";
                            fs > fr.maxVerification ? (fu += " " + fX + "--maxerror", f3.text(fB, this.langPkg.verifyOutOfLimit), f3.on(fB, "click", fM)) : f3.text(fB, this.langPkg.verifyError);
                            this.resetClassNames(fu);
                    }
                },
                closeModal: function () {
                    f3.isMobile && this._captchaIns && this._captchaIns.closeModal();
                }
            }
        };
    }, function (A, L, D) {
        var Y = D(24),
            y = D(3),
            V = D(18),
            B = {};
        A.exports = function (J, X) {
            J = Object.assign([], J);
            var P = X.protocol,
                M = X.staticServer,
                S = X.theme,
                q = J[0].slice(0);
            if (!B[S]) {
                y.assert(J, "apply [" + S + " theme] failed");
                var G = V({
                    protocol: P,
                    host: M
                });
                q[1] = q[1].replace(/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, "url(\"" + G + "$1\")");
                J[0] = q;
                Y(J);
                B[S] = !0;
                delete J.__theme__;
            }
        };
    }, function (A, L) {
        function D() {
            var X = void 0;
            try {
                null[0]();
            } catch (M) {
                X = M;
            }
            if (X && "string" == typeof X.stack) {
                for (var P = ["phantomjs", "rhino", "nodejs", "couchjs", "selenium"], s = 0; s < P.length; s++) {
                    if (X.stack.indexOf(P[s]) > -1) {
                        return 1001 + s;
                    }
                }
            }
            return 0;
        }
        function Y() {
            for (var X = ["_Selenium_IDE_Recorder", "_phantom", "phantom.injectJs", "callPhantom", "_selenium", "callSelenium", "domAutomation", "domAutomationController", "__nightmare", "context.hashCode", "java.lang.System.exit", "spawn", "Buffer", "emit", "webdriver"], P = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn"], M = ["selenium", "webdriver", "driver"], S = 0, q = X.length; S < q; S++) {
                if (B(window, X[S])) {
                    return S + 2001;
                }
            }
            for (var G = 0, K = P.length; G < K; G++) {
                if (B(document, P[G])) {
                    return G + 3001;
                }
            }
            for (var F = 0, U = M.length; F < U; F++) {
                if (document.documentElement.getAttribute(M[F])) {
                    return F + 4001;
                }
            }
            return B(navigator, "webdriver") === !0 ? 5001 : 0;
        }
        function y() {
            for (var X in document) if (document[X]) {
                try {
                    if (document[X].cache_ && X.match && X.match(/\$[a-z]dc_/)) {
                        return 5002;
                    }
                } catch (P) {
                    return 0;
                }
                return 0;
            }
        }
        function V() {
            try {
                return window.external && ~window.external.toString().indexOf("Sequentum") ? 5003 : 0;
            } catch (X) {
                return 0;
            }
        }
        function B(X, P) {
            for (var s = P.split("."), M = X, S = 0; S < s.length; S++) {
                if (void 0 == M[s[S]]) {
                    return;
                }
                M = M[s[S]];
            }
            return M;
        }
        var J = function () {
            try {
                return D() || Y() || y() || V();
            } catch (X) {
                return 0;
            }
        }();
        A.exports = J;
    }, function (A, L, D) {
        function Y(M, S) {
            this._captchaConf = M;
            this._preferIRisk = M.preferIRisk || !1;
            this._acConfig = Object.assign({
                name: "anticheat",
                fnname: "initCaptchaWatchman"
            }, M.acConfig || {});
            this._irConfig = Object.assign({
                name: "irisk",
                fnname: "createNECaptchaGuardian"
            }, M.irConfig || {});
            this._captchaCollector = S;
        }
        var y = D(13),
            V = D(7),
            B = V.ANTICHEAT_TOKEN_ERROR,
            J = D(3),
            X = 200,
            P = 1;
        Y.prototype.getInstance = function () {
            return this._captchaConf.__anticheat__ ? this._captchaConf.__anticheat__.instance : null;
        };
        Y.prototype.getToken = function (M) {
            var S = this,
                q = M.timeout,
                G = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                K = this._preferIRisk,
                F = K ? this._irConfig : this._acConfig,
                U = function (j) {
                    var N = {};
                    N[K ? "irToken" : "acToken"] = j;
                    return N;
                },
                R = new y(function (j) {
                    if (F.enable !== P) {
                        return j(U(""));
                    }
                    var N = function Q() {
                        var m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            k = null,
                            W = function (C) {
                                if (clearTimeout(k), m < G) {
                                    setTimeout(function () {
                                        return Q(m + 1);
                                    }, 200);
                                } else {
                                    var w = C.message + ";" + F.fnname + ": " + J.typeOf(window[F.fnname]) + "}",
                                        E = new V(B, w);
                                    S._captchaCollector.collectErr(E);
                                    j(U(F.token || ""));
                                }
                            },
                            b = function (C) {
                                clearTimeout(k);
                                j(U(C));
                            };
                        try {
                            k = setTimeout(function () {
                                W(new Error("get " + F.name + " token timeout"));
                            }, q + 50);
                            K ? S.getInstance().getToken(function (C) {
                                C.code === X ? b(C.token) : W(new Error("get irisk offline token"));
                            }) : S.getInstance().getToken(F.bid, b, q);
                        } catch (C) {
                            W(C);
                        }
                    };
                    N(0);
                });
            return R;
        };
        A.exports = Y;
    }, function (A, L, D) {
        function V(w, E, T) {
            E in w ? Object.defineProperty(w, E, {
                value: T,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : w[E] = T;
            return w;
        }
        var B,
            J = D(22),
            X = D(18),
            P = D(7),
            M = P.REQUEST_SCRIPT_ERROR,
            S = P.REQUEST_API_ERROR,
            q = P.REQUEST_IMG_ERROR,
            G = P.REQUEST_AUDIO_ERROR,
            K = P.BUSINESS_ERROR,
            F = P.UNPASS_ERROR,
            U = P.ANTICHEAT_TOKEN_ERROR,
            R = P.ANTICHEAT_INIT_ERROR,
            j = D(21),
            N = D(11),
            Q = D(3),
            k = Q.uuid,
            W = (B = {}, V(B, S, "api"), V(B, q, "image"), V(B, G, "audio"), V(B, M, "script"), V(B, K, "business"), V(B, F, "unpass"), V(B, U, "anticheat"), V(B, R, "anticheat"), B),
            C = null;
        A.exports = function (w, E, T) {
            var I = E.protocol,
                O = E.apiServer,
                Z = E.__serverConfig__,
                H = void 0 === Z ? {} : Z,
                f0 = E.captchaId,
                f1 = E.timeout,
                f2 = E.ipv6,
                f3 = new j(),
                f4 = function (fA) {
                    var fL = "/api/v2/collect";
                    return Array.isArray(fA) ? fA.map(function (fD) {
                        return X({
                            protocol: I,
                            host: fD,
                            path: fL
                        });
                    }) : X({
                        protocol: I,
                        host: fA,
                        path: fL
                    });
                },
                f5 = f2 ? [["c.dun.163.com", "c.dun.163yun.com"], ["c-v6.dun.163.com", "c.dun.163yun.com"]][1] : [["c.dun.163.com", "c.dun.163yun.com"], ["c-v6.dun.163.com", "c.dun.163yun.com"]][0],
                f6 = f4(O || H.apiServer || f5),
                f7 = J({
                    timeout: f1,
                    disableRetry: !0,
                    captchaConfig: E
                }),
                f8 = w.data,
                f9 = Object.assign({
                    id: f0,
                    token: f8.token || "",
                    type: W[w.code] || "other",
                    target: f8.url || f8.resource || "",
                    message: w.toString()
                }, T);
            null == window.ip && (window.ip = function (fA, fL, fD) {
                C = {
                    ip: fA,
                    dns: fD
                };
            });
            var ff = function () {
                    Object.assign(f9, C);
                    f7(f6, f9, function (fA, fL) {
                        if (fA || fL.error) {
                            console && console.warn("Failed to collect error.");
                            var fD = new Error(fA ? fA.message : fL.msg);
                            fD.data = {
                                url: f6
                            };
                            return void f3.resolve(fD);
                        }
                        f3.resolve();
                    });
                },
                fv = I + "://only-d-" + k(32) + "-" + new Date().valueOf() + ".nstool.netease.com/ip.js";
            N.script({
                url: fv,
                timeout: f1,
                checkResult: function (fA) {
                    fA && fA.scriptEl && fA.scriptEl.parentElement.removeChild(fA.scriptEl);
                    var fL = new j();
                    return C && C.dns ? (fL.resolve(), fL) : (setTimeout(function () {
                        return fL.resolve(new Error("try to collect dns again"));
                    }, 100), fL);
                }
            }).finally(function () {
                ff();
            });
            return f3;
        };
    }, function (A, L) {
        A.exports = function () {
            return location.href.replace(/\?[\s\S]*/, "").substring(0, 128);
        };
    }, function (A, L, D) {
        function V(f5) {
            return "number" === F.typeOf(f5);
        }
        function B(f5, f6) {
            var f7 = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/,
                f8 = f5.width,
                f9 = f8 === f1.width,
                ff = "popup" === f5.mode || "bind" === f5.mode;
            F.assert(f8 === f1.width || f7.test(f8) || V(f8) && f8 >= 0, "config: \"width\" should be a valid number or string like \"**px\", \"**rem\", \"**%\"(except popup/bind mode) or \"auto\". By default, it is \"auto\"");
            F.assert(!(ff && /%$/.test(f8)), "config: \"width\" can't be percentage like \"**%\", when mode is \"popup\".");
            var fv = F.msie();
            F.assert(!(fv < 9 && /rem$/.test(f8)), "config: \"width\", IE" + fv + " does not support \"rem\", please use a valid value");
            var fA = f8;
            f9 && ff ? fA = K.isMobile ? "260px" : f3 + "px" : (V(f8) || Number(f8)) && (fA = f8 + "px");
            return fA;
        }
        function J(f5) {
            var f6 = f5.startLeft,
                f7 = void 0 === f6 ? f0 : f6,
                f8 = parseInt(f7, 10),
                f9 = isNaN(f8) ? f0 + "px" : F.adsorb(f8, 0, C) + "px";
            return Object.assign({}, f5, {
                startLeft: f9
            });
        }
        function X(f5) {
            var f6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                f7 = {
                    imagePanel: {},
                    controlBar: {},
                    gap: "",
                    icon: {},
                    primaryColor: ""
                };
            Object.assign(f7.imagePanel, f5.imagePanel, f6.imagePanel);
            Object.assign(f7.controlBar, f5.controlBar, f6.controlBar);
            f7.imagePanel.borderRadius = Z(f6.imagePanel && f6.imagePanel.borderRadius) || Z(f5.imagePanel && f5.imagePanel.borderRadius);
            f7.gap = Z(f6.gap) || Z(f5.gap);
            f7.controlBar.height = Z(f6.controlBar && f6.controlBar.height) || Z(f5.controlBar && f5.controlBar.height);
            f7.controlBar.textSize = Z(f6.controlBar && f6.controlBar.textSize) || Z(f5.controlBar && f5.controlBar.textSize);
            f7.controlBar.borderRadius = Z(f6.controlBar && f6.controlBar.borderRadius) || Z(f5.controlBar && f5.controlBar.borderRadius);
            f7.controlBar.paddingLeft = Z(f6.controlBar && f6.controlBar.paddingLeft) || Z(f5.controlBar && f5.controlBar.paddingLeft);
            f7.primaryColor = f6.primaryColor || f5.primaryColor;
            f7.executeBorderRadius = Z(f6.executeBorderRadius) || Z(f5.executeBorderRadius);
            f7.executeBackground = f6.executeBackground || f5.executeBackground;
            f7.executeTop = Z(f6.executeTop) || Z(f5.executeTop);
            f7.executeRight = Z(f6.executeRight) || Z(f5.executeRight);
            Object.assign(f7.icon, f5.icon, f6.icon);
            return f7;
        }
        function P(f5) {
            var f6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                f7 = function f8(f9, ff) {
                    for (var fv = {}, fA = Object.keys(f9), fL = 0, fD = fA.length; fL < fD; fL++) {
                        var fY = fA[fL];
                        void 0 === ff[fY] ? fv[fY] = f9[fY] : "string" === F.typeOf(f9[fY]) ? fv[fY] = ff[fY] + "" : fv[fY] = f8(f9[fY], ff[fY]);
                    }
                    return fv;
                };
            return f7(f5, f6);
        }
        function M(f5) {
            var f6 = {};
            f6 = q({}, U, f5.__lang__);
            f5 = J(Object.assign({}, f1, f5));
            f5.feedbackUrl || (f5.feedbackUrl = T);
            var f7 = f5.__serverConfig__.smart,
                f8 = f5.element,
                f9 = "popup" === f5.mode,
                ff = f5.apiVersion;
            F.assert(f5.captchaId, "config: \"captchaId\" is required!");
            F.assert(V(ff), "apiVersion must be number");
            ff > 1 ? (!f8 && (f8 = "body"), F.assert(~["float", "embed", "popup"].indexOf(f5.mode), "config: \"mode \"" + f5.mode + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected"), f7 && "popup" === f5.mode && (f5.mode = "bind"), f5.appendTo = f8, f5.enableClose = f5.closeEnable) : (F.assert(f9 || f8, "config: \"element\" is required when \"mode\" is not \"popup\""), !f7 && F.assert(~["float", "embed", "popup"].indexOf(f5.mode), "config: \"current captcha is not intellisense , mode \"" + f5.mode + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected"));
            F.assert(!f5.size || ~["small", "medium", "large", "x-large"].indexOf(f5.size), "config: \"size " + f5.size + "\" is invalid. \"small\", \"medium\", \"large\" and \"x-large\" is expected. If no value is passed, it defaults to \"small\".");
            f8.nodeType || "string" !== F.typeOf(f8) || (f8 = K.find(f8), F.assert(f8, "config: \"element " + f5.element + "\" not found"), f5.element = f8);
            F.assert(!f5.theme || ~["light", "dark"].indexOf(f5.theme), "config: \"theme " + f5.theme + "\" is invalid. \"light\", \"dark\" is expected. By default, it depends on console's config");
            F.assert(/^https?$/.test(f5.protocol), "config: \"protocol " + f5.protocol + "\" is invalid. \"http\", \"https\" is expected. By default, it depends on user's website");
            Object.keys(f4).indexOf(f5.lang) > -1 && (f5.lang = f4[f5.lang]);
            F.assert(f6[f5.lang], "config: \"lang " + f5.lang + "\" is invalid, supported lang: " + Object.keys(f6).toString() + ". By default, it's " + f1.lang);
            f7 && "bind" !== f5.mode ? f5.width = f1.width : f5.width = B(f5, f8);
            var fv = f5.appendTo;
            !f7 && "popup" === f5.mode || "bind" === f5.mode || f7 && K.isMobile ? F.assert(!fv || fv.nodeType || "string" === F.typeOf(fv), "config: appendTo should be a elment or string") : ff <= 1 && F.assert(!fv, "config: appendTo could only be valid when captchaType is not intellisense and mode is \"popup\", or mode is bind, or captchaType is intellisense on the mobile side");
            fv && !fv.nodeType && "string" === F.typeOf(fv) && (fv = K.find(fv), F.assert(fv, "config: \"element " + f5.appendTo + "\" which \"appendTo\" defined not found"), f5.appendTo = fv);
            (ff <= 1 || ff >= 1 && fv !== document.body) && fv && "static" === K.getComputedStyle(fv, "position") && (fv.style.position = "relative");
            f5.__serverConfig__.customStyles ? (F.assert(f5.customStyles && O(f5.customStyles), "config: \"customStyles\" must be a plain Object"), f5.customStyles = X(f1.customStyles, f5.customStyles), F.assert(f5.customTexts && O(f5.customTexts), "config: \"customTexts\" must be a plain Object"), f5.customTexts = P(f6[f5.lang], f5.customTexts)) : (f5.customStyles = f1.customStyles, f5.customTexts = f6[f5.lang]);
            F.assert("string" === F.typeOf(f5.group) && f5.group.length <= 32, "config: \"group\" must be a string and it's length less than or equal 32");
            F.assert("string" === F.typeOf(f5.scene) && f5.scene.length <= 32, "config: \"scene\" must be a string and it's length less than or equal 32");
            F.assert(V(f5.maxVerification) && f5.maxVerification >= 0, "config: \"maxVerification\" must be a number and it's greater than or equal 0");
            F.assert(V(f5.refreshInterval) && f5.refreshInterval >= 0, "config: \"refreshInterval\" must be a number and it's greater than or equal 0");
            f5.acConfig = f5.acConfig || f5.__serverConfig__.ac || {};
            return f5;
        }
        var q = Object.assign || function (f5) {
                for (var f6 = 1; f6 < arguments.length; f6++) {
                    var f7 = arguments[f6];
                    for (var f8 in f7) Object.prototype.hasOwnProperty.call(f7, f8) && (f5[f8] = f7[f8]);
                }
                return f5;
            },
            G = function () {
                function f5(f6, f7) {
                    var f8 = [],
                        f9 = !0,
                        ff = !1,
                        fv = void 0;
                    try {
                        for (var fA, fL = f6[Symbol.iterator](); !(f9 = (fA = fL.next()).done) && (f8.push(fA.value), !f7 || f8.length !== f7); f9 = !0) {}
                    } catch (fD) {
                        ff = !0;
                        fv = fD;
                    } finally {
                        try {
                            !f9 && fL.return && fL.return();
                        } finally {
                            if (ff) {
                                throw fv;
                            }
                        }
                    }
                    return f8;
                }
                return function (f6, f7) {
                    if (Array.isArray(f6)) {
                        return f6;
                    }
                    if (Symbol.iterator in Object(f6)) {
                        return f5(f6, f7);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            K = D(4),
            F = D(3),
            U = D(57),
            j = D(5),
            N = j.WIDTH_LIMIT,
            Q = j.RUN_ENV,
            W = j.MAX_VERIFICATION,
            C = j.SLIDER_START_LEFT_LIMIT,
            T = j.FEEDBACK_URL,
            I = D(12),
            O = I.isPlainObject,
            Z = D(23),
            H = !1,
            f0 = 0,
            f1 = {
                apiVersion: 1,
                captchaId: "",
                element: null,
                appendTo: null,
                mode: K.isMobile ? "popup" : "float",
                size: "small",
                protocol: window.location.protocol.replace(":", ""),
                lang: "zh-CN",
                width: "auto",
                startLeft: f0 + "px",
                ipv6: !1,
                enableClose: !1,
                hideCloseBtn: !1,
                disableMaskClose: !1,
                enableAutoFocus: !1,
                disableFocusVisible: !1,
                refreshInterval: 300,
                customStyles: {
                    imagePanel: {
                        align: "top",
                        borderRadius: "2px"
                    },
                    controlBar: {
                        height: "40px",
                        borderRadius: "2px"
                    },
                    gap: "15px",
                    icon: {
                        intellisenseLogo: "",
                        slider: ""
                    },
                    primaryColor: ""
                },
                customTexts: {},
                feedbackEnable: !H,
                feedbackUrl: T,
                runEnv: Q.WEB,
                group: "",
                scene: "",
                maxVerification: W,
                disableValidateInput: !1
            },
            f2 = G(N, 1),
            f3 = f2[0],
            f4 = {
                en: "en-US",
                iw: "he",
                nb: "no",
                in: "id"
            };
        A.exports = M;
    }, function (A, L) {
        A.exports = function (D) {
            var Y = {
                "\\": "-",
                "/": "_",
                "+": "*"
            };
            return D.replace(/[\\/+]/g, function (y) {
                return Y[y];
            });
        };
    }, function (A, L, D) {
        function Y() {
            q = K.length = 0;
            G = {};
            M = S = !1;
        }
        function V() {
            S = !0;
            var F = void 0,
                U = void 0;
            for (K.sort(function (j, N) {
                return j.id - N.id;
            }), q = 0; q < K.length; q++) {
                F = K[q];
                U = F.instance;
                G[F.id] = null;
                U._isMounted && U.render(F.data);
            }
            var R = K.slice();
            Y();
            B(R);
        }
        function B(F) {
            for (var U = F.length; U--;) {
                var R = F[U],
                    j = R.instance;
                j._updater === R && j._isMounted && (R.data = {});
            }
        }
        function J(F) {
            var U = F.id;
            if (null == G[U]) {
                if (G[U] = !0, S) {
                    for (var R = K.length - 1; R > q && K[R].id > F.id;) {
                        R--;
                    }
                    K.splice(R + 1, 0, F);
                } else {
                    K.push(F);
                }
                M || (M = !0, P(V));
            }
        }
        var X = D(12),
            P = X.nextTick,
            M = !1,
            S = !1,
            q = 0,
            G = {},
            K = [];
        A.exports = J;
    }, function (A, L, D) {
        var Y = D(12),
            y = Y.lifeCycleHooks;
        A.exports = function () {
            var V = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                B = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                J = {},
                X = B.el || V.el,
                P = B.template || V.template,
                M = V.abstract,
                S = B.components || V.components,
                q = B.on || V.on,
                G = B.render || V.render,
                K = V.props,
                F = B.propsData,
                U = B.data || V.data,
                R = V.methods || B.methods,
                j = V.watch || B.watch;
            X && (J.el = X);
            P && (J.template = P);
            M && (J.abstract = !!M);
            S && (J.components = S);
            q && (J.on = Object.assign({}, V.on, B.on));
            G && (J.render = G);
            K && (J.props = K);
            F && (J.propsData = F);
            U && (J.data = U);
            R && (J.methods = Object.assign({}, V.methods, B.methods));
            j && (J.watch = Object.assign({}, V.watch, B.watch));
            var N = function (Q, m) {
                var k = [];
                Q && (k = k.concat(Q));
                m && (k = k.concat(m));
                return k;
            };
            y.map(function (Q) {
                J[Q] = N(V[Q], B[Q]);
            });
            return J = Object.assign({}, B, J);
        };
    }, function (A, L, D) {
        function Y() {
            var J = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                X = arguments[1];
            return this instanceof Y ? (this._originalTemplate = J, void (this._composedStr = X ? y.template(J, X) : J)) : new Y(J, X);
        }
        var y = D(3),
            V = D(12),
            B = V.getDocFragmentRegex;
        Y.prototype.compose = function (J, X, P) {
            var s = B(J),
                M = y.template(X, P);
            this._composedStr = this._composedStr.replace(s, M);
            return this;
        };
        Y.prototype.toString = function () {
            return this._composedStr;
        };
        Y.prototype.reset = function (J) {
            this._composedStr = y.template(this._originalTemplate, J);
            return this;
        };
        A.exports = Y;
    }, function (A, L, D) {
        var Y = function () {
                function X(P, s) {
                    var M = [],
                        S = !0,
                        q = !1,
                        G = void 0;
                    try {
                        for (var K, F = P[Symbol.iterator](); !(S = (K = F.next()).done) && (M.push(K.value), !s || M.length !== s); S = !0) {}
                    } catch (U) {
                        q = !0;
                        G = U;
                    } finally {
                        try {
                            !S && F.return && F.return();
                        } finally {
                            if (q) {
                                throw G;
                            }
                        }
                    }
                    return M;
                }
                return function (P, s) {
                    if (Array.isArray(P)) {
                        return P;
                    }
                    if (Symbol.iterator in Object(P)) {
                        return X(P, s);
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(),
            y = D(4),
            V = D(20),
            B = V({
                initialize: function (X) {
                    this.nativeEvent = X.nativeEvent;
                    var P = this.nativeEvent;
                    this.target = P.target;
                    this.currentTarget = X.currentTarget;
                    this.pageX = P.pageX;
                    this.pageY = P.pageY;
                    this.clientX = P.clientX;
                    this.clientY = P.clientY;
                    this.defaultPrevented = !1;
                    this.cancelBubble = !1;
                    this.cancelImmediateBubble = !1;
                    this.type = P.type;
                },
                preventDefault: function () {
                    this.defaultPrevented = !0;
                },
                stopPropagation: function () {
                    this.cancelBubble = !0;
                },
                stopImmediatePropagation: function () {
                    this.cancelImmediateBubble = !0;
                }
            }),
            J = V({
                initialize: function (X) {
                    this.$el = X.$el;
                    this.initEvents(X.events);
                },
                initEvents: function (X) {
                    var P = this;
                    this._captureEvents = {};
                    this._bubbleEvents = {};
                    this._delegationHandlers = {};
                    var s = this.normalizeEvents(X);
                    Object.keys(s).map(function (M) {
                        var S = s[M];
                        S.map(function (G) {
                            P.delegate(M, G.selector, G.handler);
                        });
                        P._delegationHandlers[M] = function (G) {
                            var K = G.target,
                                F = K,
                                U = !1,
                                c = function () {
                                    var R = null,
                                        j = P._bubbleEvents[M];
                                    Object.keys(j).map(function (N) {
                                        var Q = N.match(/^([.#])([^.#\s]+)$/) || [],
                                            m = Q[1],
                                            k = Q[2];
                                        if ("." === m && ~F.className.indexOf(k) || "#" === m && F.id === k) {
                                            R = F;
                                            for (var W = j[N], b = 0; b < W.length; b++) {
                                                var C = W[b],
                                                    w = new B({
                                                        nativeEvent: G,
                                                        currentTarget: R
                                                    });
                                                if (C.call(R, w), w.defaultPrevented && G.preventDefault(), w.cancelImmediateBubble) {
                                                    U = !0;
                                                    break;
                                                }
                                            }
                                            w.cancelBubble && (U = !0);
                                        }
                                    });
                                    F = F.parentElement;
                                    F === P.$el && (U = !0);
                                };
                            do c(); while (P.$el && !U && F);
                        };
                        var q = P._delegationHandlers[M];
                        y.on(P.$el, M, q);
                    });
                },
                off: function () {
                    var X = this._delegationHandlers;
                    for (var P in X) y.off(this.$el, P, X[P]);
                    this._captureEvents = {};
                    this._bubbleEvents = {};
                    this._delegationHandlers = {};
                    this.$el = null;
                },
                delegate: function (X, P, s) {
                    this._bubbleEvents[X] || (this._bubbleEvents[X] = {});
                    var M = this._bubbleEvents[X];
                    M[P] || (M[P] = []);
                    var S = M[P];
                    S.push(s);
                    return function () {
                        var q = S.indexOf(s);
                        q > -1 && S.splice(q, 1);
                    };
                },
                normalizeEvents: function (X) {
                    var P = {};
                    for (var s in X) if (X.hasOwnProperty(s)) {
                        var M = s.split(/\s+/),
                            S = Y(M, 2),
                            q = S[0],
                            G = S[1];
                        P[G] || (P[G] = []);
                        var K = P[G];
                        K.push({
                            selector: q,
                            handler: X[s]
                        });
                    }
                    return P;
                }
            });
        A.exports = J;
    }, function (A, L) {
        function D() {}
        function Y(B, J, X, P) {
            function M() {
                G.parentNode && G.parentNode.removeChild(G);
                window[R] = D;
                K && clearTimeout(K);
            }
            function S() {
                window[R] && M();
            }
            function q(k) {
                var W = [];
                for (var b in k) k.hasOwnProperty(b) && W.push(Q(b) + "=" + Q(k[b]));
                return W.join("&");
            }
            "object" === ("undefined" == typeof X ? "undefined" : y(X)) && (P = X, X = null);
            "function" == typeof J && (X = J, J = null);
            P || (P = {});
            var G,
                K,
                F = Math.random().toString(36).slice(2, 9),
                U = P.prefix || "__JSONP",
                R = P.name || U + ("_" + F) + ("_" + V++),
                j = P.param || "callback",
                N = P.timeout || 6000,
                Q = window.encodeURIComponent,
                m = document.getElementsByTagName("script")[0] || document.head;
            N && (K = setTimeout(function () {
                M();
                X && X(new Error("Timeout"));
            }, N));
            window[R] = function (k) {
                M();
                X && X(null, k, {
                    url: B
                });
            };
            J && (B = B.split("?")[0]);
            B += (~B.indexOf("?") ? "&" : "?") + q(J) + "&" + j + "=" + Q(R);
            B = B.replace("?&", "?");
            G = document.createElement("script");
            G.type = "text/javascript";
            G.src = B;
            m.parentNode.insertBefore(G, m);
            return S;
        }
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (B) {
                return typeof B;
            } : function (B) {
                return B && "function" == typeof Symbol && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
            },
            V = 0;
        A.exports = Y;
    }, function (A, L) {
        function D(Y) {
            if (!Y) {
                return {};
            }
            var y = document.createElement("a");
            y.href = Y;
            return {
                source: Y,
                protocol: y.protocol.replace(":", ""),
                host: y.hostname,
                port: y.port,
                query: y.search,
                hash: y.hash.replace("#", ""),
                path: y.pathname.replace(/^([^/])/, "/$1"),
                segments: y.pathname.replace(/^\//, "").split("/")
            };
        }
        A.exports = D;
    }, function (A, L, D) {
        var Y = D(20),
            y = D(3),
            V = D(13),
            B = Y({
                initialize: function (J) {
                    this.state = J.state;
                    this._committing = !1;
                    this._subscribers = [];
                    var X = this,
                        P = this.dispatch,
                        s = this.commit;
                    this.dispatch = function (M, u, S) {
                        return P.call(X, M, u, S);
                    };
                    this.commit = function (M, u) {
                        return s.call(X, M, u);
                    };
                    this.registerMutations(J.mutations);
                    this.registerActions(J.actions);
                },
                registerMutations: function (J) {
                    this._mutations = Object.assign(this._mutations || {}, J);
                },
                registerActions: function (J) {
                    this._actions = Object.assign(this._actions || {}, J);
                },
                commit: function (J, X) {
                    var P = this,
                        s = {
                            type: J,
                            payload: X
                        },
                        M = this._mutations[J];
                    return M ? (this._withCommit(function () {
                        M(P.state, X);
                    }), void this._subscribers.map(function (u) {
                        return u(s, P.state);
                    })) : void y.error("[Store] unknown mutation type: " + J);
                },
                _withCommit: function (J) {
                    var X = this._committing;
                    this._committing = !0;
                    J();
                    this._committing = X;
                },
                dispatch: function (J, X, P) {
                    var s = this._actions[J];
                    if (!s) {
                        return void y.error("[Store] unknown action type: " + J);
                    }
                    var M = {
                        state: this.state,
                        commit: this.commit,
                        dispatch: this.dispatch
                    };
                    return V.resolve(s(M, X, P));
                },
                subscribe: function (J) {
                    var X = this._subscribers;
                    X.indexOf(J) < 0 && X.push(J);
                    return function () {
                        var P = X.indexOf(J);
                        P > -1 && X.splice(P, 1);
                    };
                },
                replaceState: function () {
                    var J = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.state = J;
                }
            });
        A.exports = B;
    }, function (A, L) {
        function D(F) {
            if (Array.isArray(F)) {
                for (var U = 0, R = Array(F.length); U < F.length; U++) {
                    R[U] = F[U];
                }
                return R;
            }
            return Array.from(F);
        }
        function Y(F) {
            for (var U = [], R = F.length, j = 0; j < R; j++) {
                U.indexOf(F[j]) === -1 && U.push(F[j]);
            }
            return U;
        }
        function V(F) {
            for (var U = 0, R = F.length, j = 0; j < R; j++) {
                U += F[j];
            }
            return U / R;
        }
        function B(F) {
            for (var U = V(F), R = F.length, j = [], N = 0; N < R; N++) {
                var Q = F[N] - U;
                j.push(Math.pow(Q, 2));
            }
            for (var m = 0, k = 0; k < j.length; k++) {
                j[k] && (m += j[k]);
            }
            return Math.sqrt(m / R);
        }
        function J(F) {
            return parseFloat(F.toFixed(4));
        }
        function X(F, U) {
            var R = F.sort(function (m, k) {
                return m - k;
            });
            if (U <= 0) {
                return R[0];
            }
            if (U >= 100) {
                return R[R.length - 1];
            }
            var j = Math.floor((R.length - 1) * (U / 100)),
                N = R[j],
                Q = R[j + 1];
            return N + (Q - N) * ((R.length - 1) * (U / 100) - j);
        }
        function P(F, U) {
            for (var R = [], j = [], N = 0; N < F.length - 1; N++) {
                R.push(F[N + 1] - F[N]);
                j.push(U[N + 1] - U[N]);
            }
            for (var Q = [], m = 0; m < j.length; m++) {
                Q.push(j[m] / R[m]);
            }
            return Q;
        }
        function M() {
            var F = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                U = [],
                R = [],
                j = [];
            if (!Array.isArray(F) || F.length <= 2) {
                return [U, R, j];
            }
            for (var N = 0; N < F.length; N++) {
                var Q = F[N];
                U.push(Q[0]);
                R.push(Q[1]);
                j.push(Q[2]);
            }
            return [U, R, j];
        }
        function S(F, U, R) {
            for (var j = P(R, F), N = P(R, U), Q = [], m = 0; m < F.length; m++) {
                var k = Math.sqrt(Math.pow(F[m], 2) + Math.pow(U[m], 2));
                Q.push(k);
            }
            var W = P(R, Q);
            return [j, N, W];
        }
        function q(F, U, R, j) {
            var N = j.slice(0, -1),
                Q = P(N, F),
                m = P(N, U),
                k = P(N, R);
            return [Q, m, k];
        }
        function G() {
            var f0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (!Array.isArray(f0) || f0.length <= 2) {
                return [];
            }
            var f1 = M(f0),
                f2 = K(f1, 3),
                f3 = f2[0],
                f4 = f2[1],
                f5 = f2[2],
                f6 = S(f3, f4, f5),
                f7 = K(f6, 3),
                f8 = f7[0],
                f9 = f7[1],
                ff = f7[2],
                fv = q(f8, f9, ff, f5),
                fA = K(fv, 3),
                fL = fA[0],
                fD = fA[1],
                fY = fA[2],
                fy = Y(f3).length,
                fV = Y(f4).length,
                fB = J(V(f4)),
                fJ = J(B(f4)),
                fX = f3.length,
                fP = J(Math.min.apply(Math, D(f8))),
                fs = J(Math.max.apply(Math, D(f8))),
                fr = J(V(f8)),
                fM = J(B(f8)),
                fu = Y(f8).length,
                fS = J(X(f8, 25)),
                fq = J(X(f8, 75)),
                fG = J(Math.min.apply(Math, D(f9))),
                fe = J(Math.max.apply(Math, D(f9))),
                fK = J(V(f9)),
                fF = J(B(f9)),
                fU = Y(f9).length,
                fc = J(X(f9, 25)),
                fR = J(X(f9, 75)),
                fj = J(Math.min.apply(Math, D(ff))),
                fn = J(Math.max.apply(Math, D(ff))),
                fN = J(V(ff)),
                fQ = J(B(ff)),
                fl = Y(ff).length,
                ft = J(X(ff, 25)),
                fm = J(X(ff, 75)),
                fk = J(Math.min.apply(Math, D(fL))),
                fW = J(Math.max.apply(Math, D(fL))),
                fb = J(V(fL)),
                fC = J(B(fL)),
                fw = Y(fL).length,
                fE = J(X(fL, 25)),
                fT = J(X(fL, 75)),
                fI = J(Math.min.apply(Math, D(fD))),
                fO = J(Math.max.apply(Math, D(fD))),
                fo = J(V(fD)),
                fd = J(B(fD)),
                fp = Y(fD).length,
                fZ = J(X(fD, 25)),
                fg = J(X(fD, 75)),
                fz = J(Math.min.apply(Math, D(fY))),
                fa = J(Math.max.apply(Math, D(fY))),
                fH = J(V(fY)),
                fh = J(B(fY)),
                fx = Y(fY).length,
                v0 = J(X(fY, 25)),
                v1 = J(X(fY, 75));
            return [fy, fV, fB, fJ, fX, fP, fs, fr, fM, fu, fS, fq, fG, fe, fK, fF, fU, fc, fR, fj, fn, fN, fQ, fl, ft, fm, fk, fW, fb, fC, fw, fE, fT, fI, fO, fo, fd, fp, fZ, fg, fz, fa, fH, fh, fx, v0, v1];
        }
        var K = function () {
            function F(U, R) {
                var j = [],
                    N = !0,
                    Q = !1,
                    m = void 0;
                try {
                    for (var k, W = U[Symbol.iterator](); !(N = (k = W.next()).done) && (j.push(k.value), !R || j.length !== R); N = !0) {}
                } catch (b) {
                    Q = !0;
                    m = b;
                } finally {
                    try {
                        !N && W.return && W.return();
                    } finally {
                        if (Q) {
                            throw m;
                        }
                    }
                }
                return j;
            }
            return function (U, R) {
                if (Array.isArray(U)) {
                    return U;
                }
                if (Symbol.iterator in Object(U)) {
                    return F(U, R);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        A.exports = G;
    }, function (A, L) {
        A.exports = {
            "zh-CN": {
                loading: "加载中...",
                loadfail: "加载失败",
                verifySuccess: "验证成功",
                verifyError: "验证失败，请重试",
                verifyOutOfLimit: "失败过多，点此重试",
                clickButton: "点此进行验证",
                clickInTurn: "请依次点击",
                clickOverlapWord: "请点击两下“叠加的文字”，组成成语",
                dragToAvoidObstacle: "拖动左下白色排球，躲避障碍击中",
                clickWordInTurn: "请按语序依次点击文字",
                slideTip: "向右拖动滑块填充拼图",
                inferenceTip: "拖动交换2个图块复原图片",
                waitForSMS: "等待短信验证，剩余",
                popupTitle: "请完成安全验证",
                refresh: "刷新",
                feedback: "提交使用问题反馈",
                switchToVoice: "切换至语音验证码",
                playVoice: "播放语音验证码",
                back: "返回",
                enterCode: "请输入听到的内容",
                check: "验证",
                close: "关闭",
                notSupportVoice: "您的浏览器版本过低，暂不支持语音验证码",
                intellisense: {
                    normal: "点击完成验证",
                    checking: "安全检测中",
                    loading: "正在加载验证",
                    loadfail: "加载失败",
                    loaddone: "请完成安全验证",
                    longtap: "双击后长按0.5秒完成验证"
                },
                sms: {
                    scanQrToSMS: "扫描二维码发送验证短信",
                    noScanQr: "无法扫描二维码",
                    manualSMS: "手动发送验证短信",
                    clickToSMS: "点击按钮发送验证短信",
                    editSMS: "编辑短信",
                    sendSMSTo: "发送至",
                    or: "或",
                    toSMS: "去发送验证短信",
                    cannotJump: "无法跳转"
                }
            },
            "en-US": {
                loading: "loading...",
                loadfail: "Load failed",
                verifySuccess: "verify success",
                verifyError: "verify failed",
                verifyOutOfLimit: "Verify failed. Please retry",
                clickButton: "Click here to verify",
                clickInTurn: "click in turn",
                clickOverlapWord: "请点击两下“叠加的文字”，组成成语",
                dragToAvoidObstacle: "Drag the lower left white ball to avoid obstacles and hit",
                clickWordInTurn: "Please click on the text in order",
                slideTip: "Slide to complete the image",
                inferenceTip: "swap 2 tiles to restore the image",
                waitForSMS: "waiting for SMS，remaining",
                popupTitle: "Please complete verification",
                refresh: "Refresh",
                feedback: "Submit feedback on usage problems",
                switchToVoice: "Switch to voice verification",
                playVoice: "Play voice verification code",
                back: "return",
                enterCode: "Enter the verification code you hear",
                check: "verification",
                close: "close",
                notSupportVoice: "Your browser version is too low to support voice verification codes",
                intellisense: {
                    normal: "Click the button to verify",
                    checking: "verifying...",
                    loading: "loading...",
                    loadfail: "Load failed",
                    loaddone: "Please complete verification",
                    longtap: "Double click and press for 0.5 seconds to complete the verification"
                },
                sms: {
                    scanQrToSMS: "Scan QR code to send verification SMS",
                    noScanQr: "Unable to scan QR code",
                    manualSMS: "send a verification SMS manually",
                    clickToSMS: "Click the button to send verification SMS",
                    editSMS: "Edit SMS",
                    sendSMSTo: "Send to",
                    or: "or",
                    toSMS: "send a verification SMS",
                    cannotJump: "cannot jump to SMS"
                }
            },
            "en-GB": {
                loading: "loading...",
                loadfail: "Load failed",
                verifySuccess: "verify success",
                verifyError: "verify failed",
                verifyOutOfLimit: "Verify failed. Please retry",
                clickButton: "Click here to verify",
                clickInTurn: "click in turn",
                clickOverlapWord: "请点击两下“叠加的文字”，组成成语",
                dragToAvoidObstacle: "Drag the lower left white ball to avoid obstacles and hit",
                clickWordInTurn: "Please click on the text in order",
                slideTip: "Drag the pieces atop one another",
                inferenceTip: "swap 2 tiles to restore the image",
                waitForSMS: "waiting for SMS，remaining",
                popupTitle: "Please complete verification",
                refresh: "Refresh",
                feedback: "Submit feedback on usage problems",
                switchToVoice: "Switch to voice verification",
                playVoice: "Play voice verification code",
                back: "return",
                enterCode: "Enter the verification code you hear",
                check: "verification",
                close: "close",
                notSupportVoice: "Your browser version is too low to support voice verification codes",
                intellisense: {
                    normal: "Click the button to verify",
                    checking: "verifying...",
                    loading: "loading...",
                    loadfail: "Load failed",
                    loaddone: "Please complete verification",
                    longtap: "Double click and press for 0.5 seconds to complete the verification"
                },
                sms: {
                    scanQrToSMS: "Scan QR code to send verification SMS",
                    noScanQr: "Unable to scan QR code",
                    manualSMS: "send a verification SMS manually",
                    clickToSMS: "Click the button to send verification SMS",
                    editSMS: "Edit SMS",
                    sendSMSTo: "Send to",
                    or: "or",
                    toSMS: "send a verification SMS",
                    cannotJump: "cannot jump to SMS"
                }
            }
        };
    }, function (A, L, D) {
        function Y(U, R, j) {
            var N = void 0,
                Q = void 0,
                m = void 0,
                k = [];
            switch (U.length) {
                case 1:
                    N = U[0];
                    Q = m = 0;
                    k.push(R[N >>> 2 & 63], R[(N << 4 & 48) + (Q >>> 4 & 15)], j, j);
                    break;
                case 2:
                    N = U[0];
                    Q = U[1];
                    m = 0;
                    k.push(R[N >>> 2 & 63], R[(N << 4 & 48) + (Q >>> 4 & 15)], R[(Q << 2 & 60) + (m >>> 6 & 3)], j);
                    break;
                case 3:
                    N = U[0];
                    Q = U[1];
                    m = U[2];
                    k.push(R[N >>> 2 & 63], R[(N << 4 & 48) + (Q >>> 4 & 15)], R[(Q << 2 & 60) + (m >>> 6 & 3)], R[63 & m]);
                    break;
                default:
                    return "";
            }
            return k.join("");
        }
        function V(U, R, j) {
            if (!U || 0 === U.length) {
                return "";
            }
            try {
                for (var N = 0, Q = []; N < U.length;) {
                    if (!(N + 3 <= U.length)) {
                        var m = U.slice(N);
                        Q.push(Y(m, R, j));
                        break;
                    }
                    var k = U.slice(N, N + 3);
                    Q.push(Y(k, R, j));
                    N += 3;
                }
                return Q.join("");
            } catch (W) {
                return "";
            }
        }
        function B(U) {
            var R = [];
            switch (U.length) {
                case 2:
                    R.push(q((U[0] << 2 & 255) + (U[1] >>> 4 & 3)));
                    break;
                case 3:
                    R.push(q((U[0] << 2 & 255) + (U[1] >>> 4 & 3)));
                    R.push(q((U[1] << 4 & 255) + (U[2] >>> 2 & 15)));
                    break;
                case 4:
                    R.push(q((U[0] << 2 & 255) + (U[1] >>> 4 & 3)));
                    R.push(q((U[1] << 4 & 255) + (U[2] >>> 2 & 15)));
                    R.push(q((U[2] << 6 & 255) + (63 & U[3])));
            }
            return R;
        }
        function J(U, R, j) {
            for (var N = function (E) {
                return R.indexOf(E);
            }, Q = 0, m = [], k = U.indexOf(j), W = k !== -1 ? U.substring(0, k).split("") : U.split(""), b = W.length; Q < b;) {
                if (!(Q + 4 <= b)) {
                    var C = W.slice(Q).map(N);
                    m = m.concat(B(C));
                    break;
                }
                var w = W.slice(Q, Q + 4).map(N);
                m = m.concat(B(w));
                Q += 4;
            }
            return m;
        }
        function X(U) {
            var R = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"],
                j = "3";
            return V(U, R, j);
        }
        function P(U) {
            var R = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"],
                j = "3";
            return J(U, R, j);
        }
        function M(U, R, j) {
            var N = void 0 !== R && null !== R ? R : K,
                Q = void 0 !== j && null !== j ? j : F;
            return V(U, N.split(""), Q);
        }
        var S = D(26),
            q = S.toByte,
            G = D(27),
            K = G.__BASE64_ALPHABET__,
            F = G.__BASE64_PADDING__;
        L.base64EncodePrivate = M;
        L.base64Encode = X;
        L.base64Decode = P;
    }, function (A, L) {
        'use strict';

        var D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
            return typeof Y;
        } : function (Y) {
            return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
        };
        !function () {
            function Y() {
                var P = "2izvR3Ydkgw605lf".split("");
                this.m = function (s) {
                    if (null == s || void 0 == s) {
                        return s;
                    }
                    if (0 != s.length % 2) {
                        throw Error("1100");
                    }
                    for (var M = [], u = 0; u < s.length; u++) {
                        0 == u % 2 && M.push("%");
                        for (var S = P, q = 0; q < S.length; q++) {
                            if (s.charAt(u) == S[q]) {
                                M.push(q.toString(16));
                                break;
                            }
                        }
                    }
                    return decodeURIComponent(M.join(""));
                };
                this.f = function (s) {
                    if (null == s || void 0 == s) {
                        return s;
                    }
                    if (0 != s.length % 2) {
                        throw Error("1100");
                    }
                    for (var M = [], u = 0; u < s.length; u++) {
                        0 == u % 2 && M.push("%");
                        for (var S = P, q = 0; q < S.length; q++) {
                            if (s.charAt(u) == S[q]) {
                                M.push(q.toString(16));
                                break;
                            }
                        }
                    }
                    return decodeURIComponent(M.join(""));
                };
            }
            var y = new Y().f,
                V = new Y().m,
                B = new Y().f,
                J = new Y().f,
                X = new Y().f;
            !function () {
                var P = [J(""), B("RddzYidg3RY3dkdR"), J("d2YidzY3YldR"), J("l36g60l3g0kY"), J("d2Y0d3YdYgYldv"), X("RiYRYfYzY3R3dkR5YiYlRRY3dRY3YvdR"), X("v2v2viv2"), V("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3YdYgYl"), B("3YY3Y3dRY0Y3z23R3Yz2RvYfdzY3"), X("v2v2v2vd"), V("v2v2v2vR"), y("v2v2v2vz"), V("v2v2v2vv"), X("v2v2v2v2"), B("v2v2v2vi"), J("33YlYgdRdgz232Y0YidgY3dz"), y("3vY6dgd2Y3z23dY3Yzz232Y0d3YdYgYl"), X("3dY3YzR6YgdRz5YgYldRY3YddzYgY3dzdRY3z232RRRY"), J("YdYRdkYgYRd2dgYkdkYRR3"), B("RzY3Y0Y0z2R53R"), y("v2v2v2vk"), J("YdY3dR3vd3d2d2YfdzdRY3YRR3dkdRY3YldvYgYfYldv"), X("v2v2v2vg"), B("3vYiYYY33vY3YidzYvYk"), V("dvY3dR3RYgY5Y3"), y("Yid2d2Y3YlYRRvYkYgY0YR"), X("zz"), y("zR"), V("33YlYgdYY3dzdv"), X("z3"), J("zY"), X("zd"), B("viviviv2"), B("YdY3dRz2d2Y0d3YdYgYlz2dvdRdzYgYlYdz2Y3dkYvY3d2dRYgYfYl"), y("3RYkdzY3Y3RR3vYkYiYRYfdd"), J("z6"), y("z0"), V("z5"), B("RidzYiYz"), y("lkk66glYglg0lR6k65ld66kYl3wlk6"), J("zl"), X("RY333wR33vYkYidzY3"), V("zf"), B("v2"), J("vi"), B("vz"), J("vv"), V("vR"), B("lR666fl3wlk63fRdRzvzvvvivz"), B("v3"), X("vY"), y("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl3RY3dkdR"), y("vd"), J("3dR3Rz3wR3Rlz2RzdzYfdddvY3dzz2R3dkdRY3YldvYgYfYl"), J("vk"), J("vg"), V("RRYgdY3kz2RzdzYfdddvY3dzz232Y0d3Ydz5RgYl"), y("vw"), y("v6"), B("33d2Y0Yidgz232Rv"), J("v5"), y("YvYiYldYYidvz2Y3dkYvY3d2dRYgYfYl"), X("Ri"), y("Rz"), V("Rv"), B("RR"), V("R3"), J("l36lwllk65wflgg6k3lg66gi"), X("RY"), y("RkYidzdzYgYlYddRYfYl"), y("Rd"), B("Rk"), J("Rg"), V("Rw"), X("RdYlYfY5Y3z23vYkY3Y0Y0z2RgYldRY3YddzYidRYgYfYl"), V("R6"), X("R0"), X("R5"), X("Rl"), B("Rf"), y("32"), X("3i"), B("3z"), J("3v"), X("RlYgYiYdYidzYiz23vYfY0YgYR"), B("3R"), y("3vY3YYRvY0YgY3YldRz232Y0d3YdYgYl"), X("33"), J("3Y"), X("vivivivi"), X("3d"), X("3k"), J("3g"), B("3w"), V("RdYfd3YRdgz2RfY0YRz23vdRdgY0Y3"), V("30"), X("3zYfYzY0Yfdkz2R0Yid3YlYvYkY3dzz232Y0d3YdYgYl"), X("R5YgYvdzYfdvYfYYdRz2RfYYYYYgYvY3z2vzv2vivv"), y("3i3iR5d3dvYgYv"), y("Yi"), J("R3d3dzYfdvdRYgY0Y3"), B("Yz"), X("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0zlvi"), V("Yv"), J("3vYvdzYgd2dRYgYlYdzlRRYgYvdRYgYfYlYidzdg"), X("YR"), V("lR666fl3wlk6"), y("Y3"), V("YY"), y("Yd"), X("Yk"), X("R5Yiz5RvYfYlYYYgYdzlYvYfY5z2d2Y0d3YdYgYl"), V("Yg"), X("viv2viv2"), y("RvYidvd3YiY0"), B("Yw"), V("Y6"), X("Y0"), X("Y5"), B("Yl"), J("Yf"), y("d2"), J("viv2v2vk"), B("YRYfRlYfdR3RdzYiYvY6"), J("di"), y("YvdR"), V("lR6k65l3wlk6z232dzYf"), y("dz"), X("dvY3dR3RYgY5Y3Yfd3dR"), V("RdYgdvYkYi"), y("YdY3dR3RYgY5Y3dwYfYlY3RfYYYYdvY3dR"), X("dv"), V("viv2v2v3"), J("viv2v2vR"), J("dR"), B("viv2v2vv"), V("d3"), X("dY"), X("viv2v2vi"), J("dd"), X("dk"), y("YRdzYiddRidzdzYidgdv"), J("dg"), X("dw"), J("d6"), y("d5"), X("dl"), y("YYYfYldR"), y("viv2v2vg"), J("dvd3YYYYYgdkY3dv"), y("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2Y3dkd2YgdzY3dvv5"), B("3vYkY3Y0Y0zl33RgRkY3Y0d2Y3dz"), B("dRYfRRYidRYi333zR0"), X("3dYgYlYRYfdd3RY3dkdR"), B("Y0YiYlYdd3YiYdY3"), B("lR6k65lg66giz232dzYf"), X("YRYf"), X("RkYgYdYkY0YgYdYkdR3RY3dkdR"), J("YRYgdY"), y("R5Y3Yld33RY3dkdR"), J("RiRfR0z2R5Y3YRYgYiz232Y0YidgYzYiYvY6z232Y0d3YdYgYl"), y("RvYgdRdzYgdkz2YfYlY0YgYlY3z2d2Y0d3Ydz5YgYl"), X("Y3Yv"), V("RRY3dvYRY3Y5YfYlYi"), B("RgYlYiYvdRYgdYY3RzYfdzYRY3dz"), B("3zY3YiY032Y0YidgY3dz"), X("z0z2zdYvYfYRY3zdvw"), V("RkR3R0R0Rf"), V("Yld23RYfYlYdYzd3RiYRYRYgYl"), V("Y3Y5"), V("YvdzY3YidRY3R3Y0Y3Y5Y3YldR"), B("d2YkYiYldRYfY5"), B("R53vz232R5YgYlYvYkYf"), B("lYw36dlR65gv"), B("Y3dYYiY0"), X("Y3dk"), J("RRYgdY3kz23YRfRRz2RkY3Y0d2Y3dzz232Y0d3Ydz5YgYl"), B("lYgY62ld66kYlYgkkllR65gv"), B("3id3YgYvY63RYgY5Y3RvYkY3YvY6RfYzYwY3YvdRzl3id3YgYvY63RYgY5Y3RvYkY3YvY6zlvi"), X("RYY0dgRfdzRRYgY3z2RdYiY5Y3dvz232Y0d3YdYgYl"), y("YidRdRYiYvYk3vYkYiYRY3dz"), B("32Y0YidgRfYlz232Y0d3Ydz5YgYl"), B("YdY3dR3RYgY5Y3"), X("vizlv2vi"), X("RzdzYfYiYRddYidg"), V("YYd2"), y("RiY0YiddYidzz2Rl32Ri32Rgz2d3dRYgY0dv"), X("RYYfdzdRY3"), X("YkYidvYkRvYfYRY3"), B("lYgY6glYw5wvl3wdgwlR65gv"), V("R33vRlz23vYfYlYidzz2Ri32Rg"), y("Rk32RRY3dRY3YvdR"), X("RzYgdRYRY3YYY3YlYRY3dzz23id3YgYvY63vYvYiYl"), B("RgR3z23RYiYzz2d2Y0d3YdYgYl"), B("Rzd3dRdRYfYlRYYiYvY3"), X("zdz0"), y("Yvd2d3RvY0Yidvdv"), J("Y5Y3dvdvYiYdY3"), V("RvY3YldRd3dzdgz2RdYfdRYkYgYv"), y("RfYlY0YgYlY3z23vdRYfdzYiYdY3z2d2Y0d3Ydz5YgYl"), V("3vYiYYY3dzz233d2YRYidRY3"), B("R5dvdkY5Y0vzzlRRRfR5RRYfYvd3Y5Y3YldR"), y("R3YlYddzYidYY3dzdvz2R53R"), V("3vYgY0dYY3dzY0YgYdYkdRz232Y0d3Ydz5RgYl"), y("RdYfYfYdY0Y3z2RdY3Yidzdvz2v2zlv3zlvvvvzlv2"), y("RvYgdRdzYgdkz2RgRvRiz2RvY0YgY3YldR"), B("YiY0d2YkYiYzY3dRYgYv"), B("YvYfYldRY3dkdR"), V("3YRRYfddYlY0YfYiYRY3dz"), B("l3k5kllYgYkdlYw36dlR65gv"), J("YidRdRdz3YY3dzdRY3dk"), X("l3wlk6lR65gv"), B("YvYfYfY6YgY3"), B("z3vzvz"), X("z3vzvY"), J("RvY3YldRYid3dz"), X("vRYdYiY5Y3"), X("3zYfYvY6ddY3Y0Y0"), y("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvYvi"), V("RfYvdRYfdvYkYid2Y3z23vdRdzY3YiY5YgYlYdz23vY3dzdYYgYvY3dv"), X("dRYfRdR53R3vdRdzYgYlYd"), B("dRYkv5zf"), V("3vd3Y5YidRdzYi32RRRYz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), J("32RRRYzl32YRYYRvdRdzY0"), B("YYYgY0Y03vdRdgY0Y3"), X("YYYfYldR3vYgdwY3"), B("RiYRYfYzY3z2R5YgYlYdz23vdRYR"), V("YwY3"), V("3RYfdzYvYkRkY3Y0d2Y3dz"), J("RYdzYiYlY6Y0YgYlz2RdYfdRYkYgYvz2RkY3YidYdg"), B("l3k5kllYgYkdlR666fl3wlk6"), X("RkYidzY5YfYldgz232Y0d3Ydz5RgYl"), B("RdYgYdYg"), J("dYvizlvi"), J("R6YgYlYfz2R53R"), y("3vYgY5RkY3Yg"), J("RiY0Yg3v3vRfR0YfYdYgYlz2d2Y0d3YdYgYl"), V("3zY3YiY032Y0YidgY3dzzl3zY3YiY032Y0YidgY3dzzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), J("3gYiYlYRY3dkz232RRRYz23YYgY3ddY3dz"), J("RvYgdRdzYgdkz23zY3YvY3YgdYY3dzz232Y0d3Ydz5YgYl"), B("dRYfd2"), J("Y5YiYg"), V("RiYvdzYf32RRRYzl32RRRY"), y("YvYiYldYYidvz2Yid2Ygz2Y3dkYvY3d2dRYgYfYl"), y("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl"), J("R5Y3Yld3"), B("d2dzY3YvYgdvYgYfYlz2Y5Y3YRYgd3Y5d2z2YYY0YfYidRv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2YdY03fRYdzYiYdRvYfY0Yfdzz2v5z2dYY3YvvRzkdYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z0z2v2z0z2vizgv6z2d5"), V("3i3ivzv2vivvz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), J("RdYfYfYdY0Y3z233d2YRYidRY3"), J("l3k5kllYgYkdl365wglR6wgi"), J("Y3R5d3dvYgYv32Y0d3YdYgYlz2RRR0R5vY"), y("3dY3Yzz2RvYfY5d2YfYlY3YldRdv"), X("RzYiYzdgY0YfYlz23RYfYfY0RzYidz"), y("RvYfYfddYfYlz233d2YRYidRY3"), V("RgYlYYYf3RY3dkdR"), V("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0"), y("YgR5Y3dvYkz2d2Y0d3YdYgYl"), B("3zY3YiY0RRYfddYlY0YfYiYRY3dzz232Y0d3YdYgYl"), V("3vdgY5YiYldRY3Yvz232R6Rgz2RvY0YgY3YldR"), X("3fd2YkYiYldRYfY5"), y("RdRRR0z2RfYzYwY3YvdRz23dY3Yzz232Y0d3Ydz5YgYlz2vivYzlv2v2"), B("ddY3YzYdY0"), V("l3k5kllYgYkdl3wlk6lR65gv"), y("dvYvdzY3Y3Yl"), B("YzYfYRdg"), y("3R3zRgRiRlRdR0R33f3v3R3zRg32"), J("3RY0ddYdR5YfYlYf"), X("Ylv5"), J("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvvv3"), y("zdvwzd"), J("YYd3YlYvdRYgYfYl"), V("YvYfYldRY3dkdRzlYkYidvYkRvYfYRY3"), J("RidzYvYkYgRvRiRR"), X("3YR33z3RR33k3f3vRkRiRRR33z"), X("33Yzd3YldRd3"), y("RYYiYvY3YzYfYfY6z232Y0d3YdYgYl"), y("RiYvdRYgdYY3RvYid2dRYgYfYl"), X("ld66kYlYgkkllR65gv"), V("R5YiY0Ydd3Ylz2RdYfdRYkYgYv"), V("RlY3dddvz2RdYfdRYkYgYvz2R53R"), V("RvYid2dRYgYfYl3RY3dkdR"), B("Yi3wYz3gv2Yv3kYR3dviY33YYYvz33Ydvv3RYkvR3vYg3zv3Yw3iY6vY32Y0RfvdY5RlYlvkR5YfR0vgd2R6diRwdzRgdvRkdRRdd3RYdYR3ddRRdkRvdgRzdwRi"), V("RRY3YwYi3Yd3z2R0RdRvz23vYiYldvz2R5YfYlYf"), V("RvYfd2d2Y3dzd2Y0YidRY3z2RdYfdRYkYgYvz2R0YgYdYkdR"), V("3vY3YdYfY3z232dzYgYldR"), X("3vYiddYidvYRY3Y3"), J("RzYid3YkYid3dvz2vgvv"), V("RvYkYiY0Y6YRd3dvdRY3dz"), J("RiYzYiYRYgz2R53Rz2RvYfYlYRY3YldvY3YRz2R0YgYdYkdR"), V("R0d3YvYgYRYiz2RzdzYgYdYkdR"), B("3dYgYRY3z2R0YidRYgYl"), X("YYYfYldRz2YRY3dRY3YvdRz2Y3dzdzYfdz"), y("R6Yfdwd3Y6Yiz2RdYfdRYkYgYvz232dzvYRl"), J("RkdRY5Y0v3z2Y0YfYvYidRYgYfYlz2d2dzYfdYYgYRY3dz"), y("RRYgdY3kz232Y0d3dvz23dY3Yzz232Y0YidgY3dz"), V("3YY0YiYRYgY5Ygdzz23vYvdzYgd2dR"), J("RYYgY0Y3z2RRYfddYlY0YfYiYRY3dzz232Y0d3Ydz5YgYl"), X("YfYz"), V("RiYRYfYRYzzl3vdRdzY3YiY5"), y("R5Y3YlY0Yf"), V("YvYiY0Y032YkYiYldRYfY5"), V("3dYfY0YYdzYiY5z2R5YidRYkY3Y5YidRYgYvYi"), X("RvYidRYiY0YgYlYiRddzYfd3d2z233d2YRYidRY3"), B("R3dzYidvz2RzYfY0YRz2Rg3RRv"), y("RRY3dYYiY03Y3z3kRvdRdzY0zlRRY3dYYiY03Y3z3kRvdRdzY0zlvi"), X("l3k5kllYgYkdld66kYlg66gi"), B("YiYRYRRzY3YkYidYYgYfdz"), X("d2Yi"), V("RzYgdRdvdRdzY3YiY5z23YY3dzYiz23vY3dzYgYY"), X("zkYYd3YlYvdRYgYfYlzkzgd6dzY3dRd3dzYlz2vivzvvv6d5zgzkzgv6"), y("d2Yg"), B("3RY3YlYvY3YldRz2RY3RRlz2d2Y0d3Ydz5YgYl"), B("dzY3Y5YfdYY3RvYkYgY0YR"), X("RYYfY0dkz2vvz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), B("d3dvY332dzYfYddzYiY5"), y("YkYfdvdRYlYiY5Y3"), y("d2YkYiYldRYfY5zlYgYlYwY3YvdRRwdv"), J("3vYkYfYvY6ddYidYY3RYY0YidvYkzl3vYkYfYvY6ddYidYY3RYY0YidvYk"), B("YkY3YgYdYkdR"), J("dzYdYzYizkviv2vzz0z2vzv2vRz0z2v2z0z2v2zlvdzg"), y("RiYRYzY0YfYvY632Y0d3YdYgYl"), V("RzYiYvY6YddzYfd3YlYR"), X("RiYdRvYfYldRdzYfY0zlRiYdRvYfYldRdzYfY0"), B("32YkYfdRYfRvY3YldRY3dz32Y0d3YdYgYlvizlvizlvzzlvz"), V("Rdd3YlYd3vY3Yf"), V("dvv5"), B("YRY3YvYfYRY3333zRg"), y("lYgY6glYw5wvlkkkgzlR65gv"), X("l3k5kllYgYkdlYgY62lgw5kf"), V("vivzvv"), y("ddY3YzYdY0z2Y3dkYvY3d2dRYgYfYl"), X("dzY3"), J("3dR532Y0YidgY3dzzlRfRv3k"), X("vdvzd2dk"), V("Rid2d23dYfdzY6dvd2YiYvY3"), J("RkYgYdYkY0YgYdYkdR"), V("YRYfYvd3Y5Y3YldR"), J("3gYiYlYRY3dkz2R5Y3YRYgYiz232Y0d3YdYgYl"), J("R33vRlz2R0Yid3YlYvYkz2R5YfdwYgY0Y0Yiz232Y0d3YdYgYl"), X("vdv2d2dkz2zdRidzYgYiY0zd"), B("YgYlYwY3YvdRRwdv"), X("R0YfY5Yi"), V("RzYgdRRvYfY5Y3dRRiYdY3YldR"), V("RvYiY0YgYzdzYg"), X("RzYfYfY6Y5YiYlz2RfY0YRz23vdRdgY0Y3"), V("dvY3dvdvYgYfYl3vdRYfdzYiYdY3"), J("33dRYfd2YgYi"), y("YvYfY5d2YgY0Y33vYkYiYRY3dz"), y("Y3dvYvYid2Y3"), J("3vYvdzYfY0Y0YzYidz"), B("3dYgYlYRYfdd"), V("lggw6YlR6gwY"), B("R6Yidvd2Y3dzdvY6dgz232YidvdvddYfdzYRz2R5YiYlYiYdY3dz"), J("R5YgYlYdR0Yg33z5R3dkdRRz"), B("YdY3dRz2dvdgdvdRY3Y5z2YvYfY0Yfdzdvz2Y3dkYvY3d2dRYgYfYl"), y("3vY6dgd2Y3zlRRY3dRY3YvdRYgYfYl"), V("RYYgY0Y3R0YiYzz2d2Y0d3YdYgYl"), B("Yld2Ri32Rgz232Y0d3YdYgYl"), J("YlYfdR3fY3dkYgdvdR3fYkYfdvdR"), B("vzYR"), X("RiYvdRYgdYY33kRfYzYwY3YvdR"), X("RRYfdRd3Y5"), V("32RRRYz53kRvYkYiYlYdY3z23YYgY3ddY3dz"), J("YfYYYYdvY3dRRkY3YgYdYkdR"), X("32R5YgYlYdR0Yg33"), B("YvYfY0YfdzRRY3d2dRYk"), V("RlYfY6YgYiz23vd3YgdRY3z2R3YlYiYzY0Y3dzz232Y0d3YdYgYl"), V("3zY3YiY03YYgYRY3Yfzl3zY3YiY03YYgYRY3YfzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), J("R5YiYdYlY3dRYf"), y("RiYRYfYzY3R3dkR5YiYlRvRvRRY3dRY3YvdR"), J("RdYiYzdzYgYfY0Yi"), X("32Y0YidgYzYgY0Y0"), J("YlYidYYgYdYidRYfdz"), V("3zYiYvYkYiYlYi"), B("3Rddz2RvY3Ylz2R53Rz2RvYfYlYRY3YldvY3YRz2R3dkdRdzYiz2RzYfY0YR"), V("3i3iR5YgYlYgRRR0z232Y0d3YdYgYl"), X("zvYYvYv2"), X("YYYgY0Y03zY3YvdR"), y("RRY3YYYid3Y0dRz2RzdzYfdddvY3dzz2RkY3Y0d2Y3dz"), X("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2YRYfY5YiYgYlv5"), X("RYdzY3YlYvYkz23vYvdzYgd2dRz2R53R"), J("lYw2kdlYw36dlR65gv"), J("Y3YlYvYfYRY3333zRg"), V("33Y5d2d3dvYk"), X("YgYvd2"), V("l3k5kllYgYkdldg2w3ldkfk2"), y("YvdzY3YidRY332dzYfYddzYiY5"), X("Y5YfYlYfdvd2YiYvY3"), y("Rzd3dRdRYfYl3vYkYiYRYfdd"), B("RzYfYRYfYlYgz2R53R"), V("3v3RRi3RRgRv3fRR3zRi3d"), X("lg66gilR65gv"), X("YRYfddYlY0YfYiYR33d2YRYidRY3dz"), V("RiY0YgY3YRYgdRz232Y0d3Ydz5RgYl"), B("32RRRYz2YgYldRY3YddzYiYRYfz2YRYfz23dY3YzR6YgdR"), y("d3YlYgYYYfdzY5RfYYYYdvY3dR"), V("Y3YlYvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), B("32YgYvYidvYi"), B("RiYRYfYzY3z2RYYiYlYddvYfYlYdz23vdRYR"), J("YzYgYlYRRzd3YYYYY3dz"), X("Ri3YRdz23vYgdRY33vYiYYY3dRdgz2d2Y0d3YdYgYl"), B("RfdzYzYgdRz2RRYfddYlY0YfYiYRY3dz"), B("YvYfY0Yfdz"), V("YkYgYRYRY3Yl"), V("Y0YfYvYiY03vdRYfdzYiYdY3"), V("RdYfYfYdY0Y3z23RYiY0Y6z2R3YYYYY3YvdRdvz232Y0d3YdYgYl"), X("YRY3dvYvdzYgd2dRYgYfYl"), y("YgYlYRY3dkY3YRRRRz"), V("R0d3YvYgYRYiz2RYYidk"), V("RiY5YidwYfYlR532vvRRYfddYlY0YfYiYRY3dz32Y0d3YdYgYl"), X("YvdzY3YidRY3Rzd3YYYYY3dz"), J("RvYidvdRY3Y0Y0Yidz"), X("Y0YgYlY632dzYfYddzYiY5"), V("RvYiY0YgYYYfdzYlYgYiYlz2RYRz"), V("3RYkdzY3Y3RRRkYgYdYkY0YgYdYkdR"), y("YvdzY3YidRY33vYkYiYRY3dz"), B("Rdd3Y0YgY5"), X("RldgdkR0Yid3YlYvYkY3dz"), J("3gYfd33Rd3YzY3z232Y0d3Ydz5YgYl"), V("lYw36dlR65gv3fRdRzvzvvvivz"), V("3v3dRvdRY0zl3v3dRvdRY0"), B("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3Ydz5YgYl"), V("3i3iRRYfddYlY0YfYiYRz232Y0d3YdYgYl"), B("RlYfdzdRYfYlz2RgYRY3YldRYgdRdgz23vYiYYY3"), X("d2YidzdvY3RgYldR"), B("3vYgY5d2Y0Y3z232Yidvdv"), V("RvYfY0YfYlYlYiz2R53R"), V("dwYiY6Yf"), B("YdY3dR33YlYgYYYfdzY5R0YfYvYidRYgYfYl"), J("dvYkYiYRY3dz3vYfd3dzYvY3"), B("RRYfddYlY0YfYiYRY3dzdvz2d2Y0d3YdYgYl"), V("Y0YfYvYidRYgYfYl"), J("RkY3dzYfY3dvz2zYz2RdY3YlY3dzYiY0dvz2Y0YgdYY3"), y("ddYgYlYRYfdd"), J("3vYkYfddYvYidzYRz2RdYfdRYkYgYv"), y("l36lwllk65wflYw5wvlg66gilR65gv"), J("l3k5kllYgYkdlkwik0lYw36d"), X("RdYgYlYdY3dz"), X("3zYfYvY6R5Y3Y0dRz233d2YRYidRY3"), y("3dYgYlYRYfddRYdzYiY5Y3"), V("Y3YlYiYzY0Y33YY3dzdRY3dkRidRdRdzYgYzRidzdzYidg"), B("R6YiYvdvdRRfYlY3"), X("YidRdRdzYgYzd3dRY3z2dYY3Yvvzz2YidRdRdz3YY3dzdRY3dkv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2d3YlYgYYYfdzY5z2dYY3Yvvzz2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z2v5z2YidRdRdz3YY3dzdRY3dkz2z6z2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2z2z2YdY03f32YfdvYgdRYgYfYlz2v5z2dYY3YvvRzkYidRdRdz3YY3dzdRY3dkz0z2v2z0z2vizgv6z2d5"), V("32Y3dzd2Y3dRd3Yi"), X("Yfd2Y3YlRRYidRYiYzYidvY3"), B("YvYiYldYYidv"), X("YgRdY3dRdRY3dz3vYvdzYgd2dRYiYzY0Y332Y0d3YdYgYl"), X("RgYlYYYfdzY5YiY0z23zYfY5YiYl"), X("RlYgdRdzYfz232RRRYz232Y0d3Ydz5RgYl"), V("R5dvdkY5Y0vzzl3kR5R0Rk3R3R32"), X("l3k5kllYgYkdlg66gilR65gv"), B("Rl32R0YidvdR32Yidvdv"), X("3RYkdzY3Y3RRRYYiYvY3"), B("dvdRdgY0Y3"), J("R0YidvdR32Yidvdv"), V("vwvw"), B("d2YidzdvY3RYY0YfYidR"), V("l3k5kllYgYkdlggw6YlR6gwY"), y("v6z2"), J("YdY3dRRidRdRdzYgYzR0YfYvYidRYgYfYl"), y("d6zdYlYiY5Y3zdvw"), X("RldgYiY0Yi"), X("YlYfdR3fY3dkYgdvdR3fYkYfdvdRYlYiY5Y3"), B("30zd"), B("RdRYRiRvR3z232Y0d3YdYgYl"), J("d3YlYRY3YYYgYlY3YR"), V("lYgY62l3wlk6lR65gv"), X("30zl"), X("R5YidRd3dzYiz2R53Rz23vYvdzYgd2dRz2RvYid2YgdRYiY0dv"), J("RidzYgYiY0z2RzY0YiYvY6"), B("RYYiYlYd3vYfYlYd"), J("Y5ddRvz2YlY6YzYiYYYwYfdzYRz2d2YkdvYdY0dgz2Y3dkdYdRz2dwdiYgd3z0z2li65w2z2dRd2YkdvdRzfvwzfd3YkYzYddRYgYvzlY5YfzfY0Y3dYdYYi"), V("RzdzYiYdYdYiYRYfYvYgYf"), y("RkYidzY5YfYldgz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), y("32YiY0YiYvY3z23vYvdzYgd2dRz2R53R"), y("RlYidRYgdYY3z2RvY0YgY3YldR"), B("YfYYYYdvY3dR3dYgYRdRYk")],
                    s = [J("d3dvY3dzRiYdY3YldR"), B("3id3YgYvY63RYgY5Y3zl3id3YgYvY63RYgY5Y3"), y("Y3dkd2Y3dzYgY5Y3YldRYiY0z5ddY3YzYdY0"), y("Ri3z3zRi3g3fRz33RYRYR33z"), B("lkk66glYglg0lR6k65lR6kw5lg66gi"), B("RiY0Ygd2Yidgz23vY3Yvd3dzYgdRdgz2RvYfYldRdzYfY0z2vv"), B("3vYvdzYgd2dRz2R53Rz2RzYfY0YR"), B("z0z2zdYzdzYfdddvY3dz32dzYfd2zdvw"), y("3RRRRvRvdRY0zl3RRRRvRvdRY0"), V("ddYgYRdRYk"), X("dvY3Y0YY"), y("RgYlYYYfRzYiYvY6YddzYfd3YlYR"), V("32YiYlYRYfz23dY3Yzz232Y0d3YdYgYl"), J("RkYiY3dRdRY3YldvYvYkddY3YgY0Y3dz"), y("dvd2YiYl"), y("YgYlYlY3dzRk3RR5R0"), X("RiYvdRYgdYY3RzYfdzYRY3dz"), V("3RYkdzY3Y3RRR0YgYdYkdR3vYkYiYRYfdd"), y("v2vzv2vz"), B("v2vzv2vv"), X("YYYfYldRRYYiY5YgY0dg"), y("v2vzv2v2"), J("v2vzv2vi"), B("3d32Rgz2RRY3dRY3YvdRYfdzz2vizlvR"), y("v6z2Y3dkd2YgdzY3dvv5"), B("3RYkdzY3Y3RRRRYidzY63vYkYiYRYfdd"), X("R3dkYgYYz2R3dYY3dzdgddYkY3dzY3"), y("RzYidRdRY0Y3Y0YfYdz2RdYiY5Y3z2R0Yid3YlYvYkY3dz"), X("RgY5d2YiYvdR"), B("3YR0Rvz2R5d3Y0dRYgY5Y3YRYgYiz232Y0d3YdYgYl"), V("RiYRYfYzY3z2RkY3YzdzY3dd"), B("RzY0d3Y33vdRYiYvY6dvz2RgYldvdRYiY0Y0z2RRY3dRY3YvdRYfdz"), y("ddddddY5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y0Y0Yg"), B("YkYgdvdRYfdzdg"), X("dvYiYldvz5dvY3dzYgYY"), J("vivRvdvvvivzv3v3vzvvvRYRvRvivRYvRYvgvivvv3vYYRvYvkvRR3vRR3vkRYv3RYv3vYYvvkYYviYzYv"), y("32Yid2dgdzd3dv"), B("Rzd3dRdRYfYl3RY3dkdR"), X("v2vzvivi"), B("Rid2d233d2"), V("32YidzYfY5zl3R3Yz2d2Y0YidgY3dzz2d2Y0d3YdYgYl"), J("RRY3YiY032Y0dgR0YgdYY3z233d2YRYidRY3"), y("R0YfYkYgdRz2Rdd3YwYidzYidRYg"), y("RY3zRiRdR5R3Rl3R3f3vRkRiRRR33z"), X("RiYdY3YlYvdgz2RYRz"), B("R5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dzzlR5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dz"), X("zvzvzv"), V("3dYfdzYRRvYid2dRd3dzY33k"), y("YdY3dRRvYfY5d2d3dRY3YR3vdRdgY0Y3"), y("d2Y0YidRYYYfdzY5"), J("v2viv2v3"), X("RidzYiYzYgYvz23Rdgd2Y3dvY3dRdRYgYlYd"), J("v2viv2vY"), B("v2viv2vv"), J("l3k5kllYgYkdlR6kw5l3wlk6"), X("v2viv2vR"), J("v2viv2vi"), y("v2viv2vz"), X("v2viv2v2"), y("v2viv2vd"), X("Rzd3dRdRYfYlRkYgYdYkY0YgYdYkdR"), B("dYY3dzdRY3dkRidRdRdzYgYz32YfYgYldRY3dz"), y("v2viv2vk"), y("dRY3dkdRRzYidvY3Y0YgYlY3"), V("zvv2vYvg"), B("YRYfd3YzY0Y33RddYgdvdRz23dY3Yzz232Y0d3YdYgYl"), V("Y5YidRYvYk"), V("d3YlY3dvYvYid2Y3"), y("3RYkd3YlYRY3dzz2RRYid2RvdRdzY0z2Rl32Ri32Rgz232Y0d3YdYgYl"), V("RzYidRYiYlYd"), X("RRRYR6YiYgz53vRz"), y("3vYlYid2z2Rg3RRv"), J("R5YgYlYgYzYidz32Y0d3YdYgYl"), B("RRYidRY3"), y("YRY3YvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), X("Rl3232Y0YidgY3dz3vYkY3Y0Y0"), V("R53vz23zY3YYY3dzY3YlYvY3z23vYiYldvz23vY3dzYgYY"), X("RkYgdzYiYdYgYlYfz23vYiYldvz2RdRz"), X("dvY3dzYgYY"), y("YdY3dRRvYfYldRY3dkdR"), X("d3YlYgYYYfdzY5vzYY"), V("R5YfYfY0RzYfdzYiYl")];
                !function () {
                    var M = [36, 28, 51, 9, 23, 7, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48, 49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68, 70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91, 94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036, 115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 2097651377, 376229701, 853044451, 752459403, 426522225, 1000, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1231636301, 10000, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918000, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, 0.4, 2238001368, 2512341634, 2647816111, -0.2, 314042704, 1510334235, 900000, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -0.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, 0.732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -0.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 840000, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
                    !function () {
                        function f0(fH) {
                            if (null == fH) {
                                return null;
                            }
                            for (var fh = [], fx = M[6], v0 = fH.length; fx < v0; fx++) {
                                var v1 = fH[fx];
                                fh[fx] = fb[(v1 >>> M[14] & M[47]) * M[49] + (v1 & M[47])];
                            }
                            return fh;
                        }
                        function f1(fH) {
                            var fh = [];
                            if (null == fH || void 0 == fH || fH.length == M[6]) {
                                return f4(fw);
                            }
                            if (fH.length >= fw) {
                                fh = M[6];
                                var fx = [];
                                if (null != fH && fH.length != M[6]) {
                                    if (fH.length < fw) {
                                        throw Error(P[135]);
                                    }
                                    for (var v0 = M[6]; v0 < fw; v0++) {
                                        fx[v0] = fH[fh + v0];
                                    }
                                }
                                return fx;
                            }
                            for (fx = M[6]; fx < fw; fx++) {
                                fh[fx] = fH[fx % fH.length];
                            }
                            return fh;
                        }
                        function f2(fH) {
                            var fh = M[394];
                            if (null != fH) {
                                for (var fx = M[6]; fx < fH.length; fx++) {
                                    fh = fh >>> M[29] ^ fW[(fh ^ fH[fx]) & M[290]];
                                }
                            }
                            if (fH = f6(fh ^ M[394]), fh = fH.length, null == fH || fh < M[6]) {
                                fH = new String(P[0]);
                            } else {
                                fx = [];
                                for (var v0 = M[6]; v0 < fh; v0++) {
                                    fx.push(f9(fH[v0]));
                                }
                                fH = fx.join(P[0]);
                            }
                            return fH;
                        }
                        function f3(fH, fh, fx) {
                            var v0 = [P[45], P[47], P[43], P[99], P[92], P[71], P[112], P[81], P[140], P[76], P[95], P[93], P[136], P[108], P[88], P[117], P[109], P[54], P[131], P[80], P[77], P[82], P[50], P[105], P[70], P[116], P[91], P[137], P[79], P[42], P[64], P[101], P[139], P[55], P[90], P[65], P[115], P[44], P[66], P[85], P[142], P[72], P[83], P[103], P[118], P[107], P[120], P[73], P[143], P[46], P[52], P[124], P[134], P[110], P[63], P[127], P[87], P[35], P[75], P[78], P[62], P[49], P[121], P[119]],
                                v1 = P[68],
                                v2 = [];
                            if (fx == M[531]) {
                                fx = fH[fh];
                                var v3 = M[6];
                                v2.push(v0[fx >>> M[7] & M[144]]);
                                v2.push(v0[(fx << M[14] & M[113]) + (v3 >>> M[14] & M[47])]);
                                v2.push(v1);
                                v2.push(v1);
                            } else {
                                if (fx == M[7]) {
                                    fx = fH[fh];
                                    v3 = fH[fh + M[531]];
                                    fH = M[6];
                                    v2.push(v0[fx >>> M[7] & M[144]]);
                                    v2.push(v0[(fx << M[14] & M[113]) + (v3 >>> M[14] & M[47])]);
                                    v2.push(v0[(v3 << M[7] & M[139]) + (fH >>> M[21] & M[10])]);
                                    v2.push(v1);
                                } else {
                                    if (fx != M[10]) {
                                        throw Error(P[113]);
                                    }
                                    fx = fH[fh];
                                    v3 = fH[fh + M[531]];
                                    fH = fH[fh + M[7]];
                                    v2.push(v0[fx >>> M[7] & M[144]]);
                                    v2.push(v0[(fx << M[14] & M[113]) + (v3 >>> M[14] & M[47])]);
                                    v2.push(v0[(v3 << M[7] & M[139]) + (fH >>> M[21] & M[10])]);
                                    v2.push(v0[fH & M[144]]);
                                }
                            }
                            return v2.join(P[0]);
                        }
                        function f4(fH) {
                            for (var fh = [], fx = M[6]; fx < fH; fx++) {
                                fh[fx] = M[6];
                            }
                            return fh;
                        }
                        function f5(fH, fh, fx, v0, v1) {
                            if (null == fH || fH.length == M[6]) {
                                return fx;
                            }
                            if (null == fx) {
                                throw Error(P[133]);
                            }
                            if (fH.length < v1) {
                                throw Error(P[135]);
                            }
                            for (var v2 = M[6]; v2 < v1; v2++) {
                                fx[v0 + v2] = fH[fh + v2];
                            }
                            return fx;
                        }
                        function f6(fH) {
                            var fh = [];
                            fh[0] = fH >>> M[65] & M[290];
                            fh[1] = fH >>> M[49] & M[290];
                            fh[2] = fH >>> M[29] & M[290];
                            fh[3] = fH & M[290];
                            return fh;
                        }
                        function f7(fH) {
                            if (null == fH || void 0 == fH) {
                                return fH;
                            }
                            fH = encodeURIComponent(fH);
                            for (var fh = [], fx = fH.length, v0 = M[6]; v0 < fx; v0++) {
                                if (fH.charAt(v0) == P[29]) {
                                    if (!(v0 + M[7] < fx)) {
                                        throw Error(P[148]);
                                    }
                                    fh.push(f8(fH.charAt(++v0) + P[0] + fH.charAt(++v0))[0]);
                                } else {
                                    fh.push(fH.charCodeAt(v0));
                                }
                            }
                            return fh;
                        }
                        function f8(fH) {
                            if (null == fH || fH.length == M[6]) {
                                return [];
                            }
                            fH = new String(fH);
                            for (var fh = [], fx = fH.length / M[7], v0 = M[6], v1 = M[6]; v1 < fx; v1++) {
                                var v2 = parseInt(fH.charAt(v0++), M[49]) << M[14],
                                    v3 = parseInt(fH.charAt(v0++), M[49]);
                                fh[v1] = fL(v2 + v3);
                            }
                            return fh;
                        }
                        function f9(fH) {
                            var fh = [];
                            fh.push(fk[fH >>> M[14] & M[47]]);
                            fh.push(fk[fH & M[47]]);
                            return fh.join(P[0]);
                        }
                        function ff(fH, fh) {
                            if (null == fH || null == fh || fH.length != fh.length) {
                                return fH;
                            }
                            for (var fx = [], v0 = M[6], v1 = fH.length; v0 < v1; v0++) {
                                fx[v0] = fv(fH[v0], fh[v0]);
                            }
                            return fx;
                        }
                        function fv(fH, fh) {
                            fH = fL(fH);
                            fh = fL(fh);
                            return fL(fH ^ fh);
                        }
                        function fA(fH, fh) {
                            return fL(fH + fh);
                        }
                        function fL(fH) {
                            if (fH < M[281]) {
                                return fL(M[282] - (M[281] - fH));
                            }
                            if (fH >= M[281] && fH <= M[273]) {
                                return fH;
                            }
                            if (fH > M[273]) {
                                return fL(M[283] + fH - M[273]);
                            }
                            throw Error(P[138]);
                        }
                        function fD(fH) {
                            function fh() {
                                for (var vD = [P[288], P[398], s[30], P[226], s[44], P[38], s[51], P[469], s[69], P[286], P[19], P[308], P[389], P[344], P[472], P[184], P[343], P[413], P[411], P[114], P[215], P[198], P[287], P[426], P[283], P[282], P[163], s[70], P[361], P[202], P[303], P[100], P[470], P[187], P[229], P[380], P[370], P[232], P[129], P[94], P[416], P[324], s[13], P[69], s[77], s[28], P[447], P[441], P[234], P[292], s[42], P[341], P[289], P[408], P[368], P[278], P[468], P[299], P[353], s[81], P[172], s[76], P[279], P[84], P[461], P[474], s[36], P[443], P[371], P[364], P[373], P[217], P[285], s[6], P[284], P[434], P[235], s[71], P[266], P[374], P[274], P[383], P[28], P[346], P[295], P[290], P[106], s[54], P[230], P[262], P[249], P[328], P[209], P[385], P[305], P[436], P[457], P[211], P[3], P[67], P[466], P[189], P[327], P[173], P[351], P[391], P[177], P[277], P[381], P[48], P[419], P[435], P[450], P[155], P[126], s[4], P[39]], vY = [], vy = M[6]; vy < vD.length; vy++) {
                                    try {
                                        var vV = vD[vy];
                                        fx()(vV) && vY.push(vV);
                                    } catch (vB) {}
                                }
                                return vY.join(P[58]);
                            }
                            function fx() {
                                function vD(vP) {
                                    var vs = {};
                                    vX[P[453]][s[20]] = vP;
                                    vJ[P[25]](vX);
                                    vs[P[318]] = vX[P[363]];
                                    vs[s[9]] = vX[P[476]];
                                    vJ[P[312]](vX);
                                    return vs;
                                }
                                var vY = [P[387], s[34], s[78]],
                                    vy = [],
                                    vV = s[32],
                                    vB = P[333],
                                    vJ = fQ[P[264]],
                                    vX = fQ[P[170]](s[14]);
                                for (vX[P[453]][P[225]] = vB, vX[P[453]].visibility = P[403], vX[s[15]] = vV, vV = M[6]; vV < vY.length; vV++) {
                                    vy[vV] = vD(vY[vV]);
                                }
                                return function (vP) {
                                    for (var vs = M[6]; vs < vy.length; vs++) {
                                        var vr = vD(vP + P[36] + vY[vs]),
                                            vM = vy[vs];
                                        if (vr[P[318]] !== vM[P[318]] || vr[s[9]] !== vM[s[9]]) {
                                            return !0;
                                        }
                                    }
                                    return !1;
                                };
                            }
                            function v0() {
                                var vD = null,
                                    vY = null,
                                    vy = [];
                                try {
                                    vY = fQ[P[170]](P[445]);
                                    vD = vY[s[79]](P[261]) || vY[s[79]](s[2]);
                                } catch (vV) {}
                                if (!vD) {
                                    return vy;
                                }
                                try {
                                    vy.push(vD[P[21]]());
                                } catch (vB) {}
                                try {
                                    vy.push(v1(vD, vY));
                                } catch (vJ) {}
                                return vy.join(P[58]);
                            }
                            function v1(vD, vY) {
                                try {
                                    var vy = P[442],
                                        vV = P[246],
                                        vB = vD[P[410]]();
                                    vD[P[399]](vD[s[3]], vB);
                                    vD.bufferData(vD[s[3]], new Float32Array([M[421], M[477], M[6], M[417], M[442], M[6], M[6], M[457], M[6]]), vD[P[390]]);
                                    vB.s = M[10];
                                    vB.u = M[10];
                                    var vJ = vD[P[386]](),
                                        vX = vD[P[415]](vD[P[273]]);
                                    vD[P[429]](vX, vy);
                                    vD[P[347]](vX);
                                    var vP = vD[P[415]](vD[s[43]]);
                                    vD[P[429]](vP, vV);
                                    vD[P[347]](vP);
                                    vD[P[180]](vJ, vX);
                                    vD[P[180]](vJ, vP);
                                    vD[P[412]](vJ);
                                    vD[P[314]](vJ);
                                    vJ.A = vD[P[459]](vJ, P[210]);
                                    vJ.w = vD[P[428]](vJ, P[395]);
                                    vD[P[440]](vJ.B);
                                    vD[s[61]](vJ.A, vB.s, vD.FLOAT, !M[531], M[6], M[6]);
                                    vD[s[80]](vJ.w, M[531], M[531]);
                                    vD[P[141]](vD[P[265]], M[6], vB.u);
                                    return fY(vY[P[152]]());
                                } catch (vs) {
                                    return P[330];
                                }
                            }
                            function v2() {
                                var vD = fQ[P[170]](P[158]),
                                    vY = [],
                                    vy = [s[16], P[276], P[334], P[321], P[194], s[60], P[388], s[37], P[280], P[1], P[335], P[157], P[164], P[244], P[51], s[11], P[254], P[245], P[159], P[349], s[25], P[452], P[414], s[17], P[34], P[350], P[439], P[153]];
                                if (!window[s[48]]) {
                                    return vY.join(P[0]);
                                }
                                for (var vV = M[6]; vV < vy.length; vV++) {
                                    try {
                                        fQ[P[264]][P[25]](vD);
                                        vD[P[453]].color = vy[vV];
                                        vY.push(vy[vV]);
                                        vY.push(window[s[48]](vD).getPropertyValue(P[402]));
                                        fQ[P[264]][P[312]](vD);
                                    } catch (vB) {
                                        vY.push(P[354]);
                                    }
                                }
                                return vY.join(P[57]);
                            }
                            function v3() {
                                try {
                                    var vD = fQ[P[170]](P[445]),
                                        vY = vD[s[79]](P[359]),
                                        vy = P[471];
                                    vY[s[63]] = P[240];
                                    vY[P[147]] = P[339];
                                    vY[s[63]] = P[206];
                                    vY[P[224]] = P[376];
                                    vY[P[377]](M[272], M[531], M[143], M[57]);
                                    vY[P[224]] = s[64];
                                    vY.fillText(vy, M[7], M[47]);
                                    vY[P[224]] = P[319];
                                    vY.fillText(vy, M[14], M[51]);
                                    return vD[P[152]]();
                                } catch (vV) {
                                    return P[243];
                                }
                            }
                            function v4() {
                                try {
                                    return window[P[360]] && vL.j ? v6() : v5();
                                } catch (vD) {
                                    return P[33];
                                }
                            }
                            function v5() {
                                if (!fl[P[4]]) {
                                    return P[0];
                                }
                                var vD = [P[216], P[320], P[369], P[5], P[186], P[393], s[5], P[236], P[409], P[160], s[39], P[272], P[400], P[252], s[27], P[342], P[192], s[31], P[302], P[205], P[161], P[239], P[253], s[41], P[378], P[56], P[294], P[176], s[65], P[430], P[392], P[250], P[338], P[190], s[26], P[275], P[296], P[356], P[179], P[313], P[41], P[260], P[464], P[437], P[74], P[7], P[421], P[204], P[405], P[248], P[473], P[231], P[432], P[191], P[293], P[193], P[446], P[256], P[352], P[454], P[268], P[218], P[111], P[97], s[72], P[475], P[448], P[366], P[423], P[357], P[451], s[75], P[168], P[417], P[219], P[199], P[401], s[12], s[40], P[394], P[362], P[323], P[397], P[181], P[247], P[422], P[375], P[98], P[257], P[96], P[438], P[200], P[23], P[104], P[86], P[151], P[203], P[425], P[16], P[222], P[258], P[311], s[68], P[228], P[15], P[59], P[208], P[8], s[29], P[251], P[17], P[53], P[301], s[47], s[23], P[337], P[238], P[418], P[427]],
                                    vY = [],
                                    vy = {};
                                vY.push(v9(fl[P[4]], function (vV) {
                                    vy[vV.name] = M[531];
                                    var vB = v9(vV, function (vJ) {
                                        return [vJ.type, vJ[P[149]]].join(P[146]);
                                    }).join(P[36]);
                                    return [vV.name, vV[P[406]], vB].join(P[455]);
                                }, this).join(P[27]));
                                vY.push(v9(vD, function (vV) {
                                    if (vy[vV]) {
                                        return P[0];
                                    }
                                    if (vV = fl[P[4]][vV], !vV) {
                                        return P[0];
                                    }
                                    var vB = v9(vV, function (vJ) {
                                        return [vJ.type, vJ[P[149]]].join(P[146]);
                                    }).join(P[36]);
                                    return [vV.name, vV[P[406]], vB].join(P[455]);
                                }, this).join(P[58]));
                                return vY.join(P[58]);
                            }
                            function v6() {
                                return window[P[360]] ? v9([P[242], P[298], P[322], P[304], s[45], P[201], P[449], P[223], s[1], P[178], P[255], P[102], P[165], P[237], P[367], P[255], P[104], P[151], P[317], P[420], P[355], s[8], P[332]], function (vD) {
                                    try {
                                        new window[P[360]](vD);
                                        return vD;
                                    } catch (vY) {
                                        return null;
                                    }
                                }).join(P[58]) : P[0];
                            }
                            function v7() {
                                try {
                                    return !!window[P[345]];
                                } catch (vD) {
                                    return !0;
                                }
                            }
                            function v8() {
                                try {
                                    return !!window[P[404]];
                                } catch (vD) {
                                    return !0;
                                }
                            }
                            function v9(vD, vY, vy) {
                                var vV = [];
                                return null == vD ? vV : vA && vD.map === vA ? vD.map(vY, vy) : (vf(vD, function (vB, vJ, vX) {
                                    vV[vV.length] = vY.call(vy, vB, vJ, vX);
                                }), vV);
                            }
                            function vf(vD, vY, vy) {
                                if (null !== vD) {
                                    if (vv && vD.forEach === vv) {
                                        vD.forEach(vY, vy);
                                    } else {
                                        if (vD.length === +vD.length) {
                                            for (var vV = M[6], vB = vD.length; vV < vB && vY.call(vy, vD[vV], vV, vD) !== {}; vV++) {}
                                        } else {
                                            for (vV in vD) if (vD.hasOwnProperty(vV) && vY.call(vy, vD[vV], vV, vD) === {}) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            var vv = Array.prototype.forEach,
                                vA = Array.prototype.map,
                                vL = {
                                    g: fY,
                                    o: !0,
                                    l: !0,
                                    j: !0,
                                    b: !0,
                                    a: !0
                                };
                            ("undefined" == typeof fH ? "undefined" : D(fH)) == P[270] ? vL.g = fH : (null != fH.b && void 0 != fH.b && (vL.b = fH.b), null != fH.a && void 0 != fH.a && (vL.a = fH.a));
                            this.get = function () {
                                var vD = [],
                                    vY = [];
                                if (fn) {
                                    vD.push(v7());
                                    vD.push(v8());
                                    vD.push(!!window[P[407]]);
                                    fQ[P[264]] ? vD.push(D(fQ[P[264]][P[306]])) : vD.push("undefined");
                                    vD.push(D(window[P[444]]));
                                    vD.push(fl[P[196]]);
                                    vD.push(fl[s[49]]);
                                    var vy;
                                    if (vy = vL.l) {
                                        try {
                                            var vV = fQ[P[170]](P[445]);
                                            vy = !(!vV[s[79]] || !vV[s[79]](P[359]));
                                        } catch (vB) {
                                            vy = !1;
                                        }
                                    }
                                    if (vy) {
                                        try {
                                            vD.push(v3());
                                            vL.b && vD.push(v0());
                                        } catch (vJ) {
                                            vD.push(P[61]);
                                        }
                                    }
                                    vD.push(v2());
                                    vL.a && vY.push(fh());
                                    vY.push(fl[s[0]]);
                                    vY.push(fl[P[154]]);
                                    vY.push(window[P[263]][P[365]]);
                                    vL.o && (vy = window[P[263]] ? [window[P[263]][P[318]], window[P[263]][s[9]]] : [M[6], M[6]], ("undefined" == typeof vy ? "undefined" : D(vy)) !== P[465] && vY.push(vy.join(P[140])));
                                    vY.push(new Date()[P[130]]());
                                    vY.push(fl[P[123]]);
                                    vY.push(v4());
                                }
                                vy = [];
                                vL.g ? (vy.push(vL.g(vD.join(s[46]))), vy.push(vL.g(vY.join(s[46])))) : (vy.push(fY(vD.join(s[46]))), vy.push(fY(vY.join(s[46]))));
                                return vy;
                            };
                        }
                        function fY(fH) {
                            var fh,
                                fx = M[79],
                                v0 = fH.length & M[10],
                                v1 = fH.length - v0,
                                v2 = fx;
                            fx = M[12];
                            var v3 = M[365];
                            for (fh = M[6]; fh < v1;) {
                                var v4 = fH.charCodeAt(fh) & M[290] | (fH.charCodeAt(++fh) & M[290]) << M[29] | (fH.charCodeAt(++fh) & M[290]) << M[49] | (fH.charCodeAt(++fh) & M[290]) << M[65];
                                ++fh;
                                v4 = (v4 & M[475]) * fx + (((v4 >>> M[49]) * fx & M[475]) << M[49]) & M[394];
                                v4 = v4 << M[47] | v4 >>> M[51];
                                v4 = (v4 & M[475]) * v3 + (((v4 >>> M[49]) * v3 & M[475]) << M[49]) & M[394];
                                v2 ^= v4;
                                v2 = v2 << M[41] | v2 >>> M[55];
                                v2 = (v2 & M[475]) * M[17] + (((v2 >>> M[49]) * M[17] & M[475]) << M[49]) & M[394];
                                v2 = (v2 & M[475]) + M[384] + (((v2 >>> M[49]) + M[425] & M[475]) << M[49]);
                            }
                            switch (v4 = M[6], v0) {
                                case M[10]:
                                    v4 ^= (fH.charCodeAt(fh + M[7]) & M[290]) << M[49];
                                case M[7]:
                                    v4 ^= (fH.charCodeAt(fh + M[531]) & M[290]) << M[29];
                                case M[531]:
                                    v4 ^= fH.charCodeAt(fh) & M[290];
                                    v4 = (v4 & M[475]) * fx + (((v4 >>> M[49]) * fx & M[475]) << M[49]) & M[394];
                                    v4 = v4 << M[47] | v4 >>> M[51];
                                    v4 = (v4 & M[475]) * v3 + (((v4 >>> M[49]) * v3 & M[475]) << M[49]) & M[394];
                                    v2 ^= v4;
                            }
                            v2 ^= fH.length;
                            v2 ^= v2 >>> M[49];
                            v2 = (v2 & M[475]) * M[396] + (((v2 >>> M[49]) * M[396] & M[475]) << M[49]) & M[394];
                            v2 ^= v2 >>> M[41];
                            v2 = (v2 & M[475]) * M[339] + (((v2 >>> M[49]) * M[339] & M[475]) << M[49]) & M[394];
                            v2 ^= v2 >>> M[49];
                            fH = v2 >>> M[6];
                            v0 = [];
                            v0.push(fH);
                            try {
                                for (var v5, v6 = fH + P[0], v7 = M[6], v8 = M[6], v9 = M[6]; v9 < v6.length; v9++) {
                                    try {
                                        var vf = parseInt(v6.charAt(v9) + P[0]);
                                        v7 = vf || vf === M[6] ? v7 + vf : v7 + M[531];
                                        v8++;
                                    } catch (vX) {
                                        v7 += M[531];
                                        v8++;
                                    }
                                }
                                v8 = v8 == M[6] ? M[531] : v8;
                                v5 = fy(v7 * M[531] / v8, ft);
                                for (var vv, vA = Math.floor(v5 / Math.pow(M[34], ft - M[531])), vL = fH + P[0], vD = M[6], vY = M[6], vy = M[6], vV = M[6], vB = M[6]; vB < vL.length; vB++) {
                                    try {
                                        var vJ = parseInt(vL.charAt(vB) + P[0]);
                                        vJ || vJ === M[6] ? vJ < vA ? (vY++, vD += vJ) : (vV++, vy += vJ) : (vV++, vy += vA);
                                    } catch (vP) {
                                        vV++;
                                        vy += vA;
                                    }
                                }
                                vV = vV == M[6] ? M[531] : vV;
                                vY = vY == M[6] ? M[531] : vY;
                                vv = fy(vy * M[531] / vV - vD * M[531] / vY, fm);
                                v0.push(fV(v5, !0, ft, P[43]));
                                v0.push(fV(vv, !0, fm, P[43]));
                            } catch (vs) {
                                v0 = [];
                                v0.push(fH);
                                v0.push(fB(ft, P[37]).join(P[0]));
                                v0.push(fB(fm, P[37]).join(P[0]));
                            }
                            return v0.join(P[0]);
                        }
                        function fy(fH, fh) {
                            if (fH < M[6] || fH >= M[34]) {
                                throw Error(P[32]);
                            }
                            fh = fB(fh, P[43]);
                            fH = P[0] + fH;
                            for (var fx = M[6], v0 = M[6]; fx < fh.length && v0 < fH.length; v0++) {
                                fH.charAt(v0) != P[40] && (fh[fx++] = fH.charAt(v0));
                            }
                            return parseInt(fh.join(P[0]));
                        }
                        function fV(fH, fh, fx, v0) {
                            if (fH = P[0] + fH, fH.length > fx) {
                                throw Error(P[89]);
                            }
                            if (fH.length == fx) {
                                return fH;
                            }
                            var v1 = [];
                            fh || v1.push(fH);
                            for (var v2 = fH.length; v2 < fx; v2++) {
                                v1.push(v0);
                            }
                            fh && v1.push(fH);
                            return v1.join(P[0]);
                        }
                        function fB(fH, fh) {
                            if (fH <= M[6]) {
                                return [M[6]];
                            }
                            for (var fx = [], v0 = M[6]; v0 < fH; v0++) {
                                fx.push(fh);
                            }
                            return fx;
                        }
                        function fJ(fH) {
                            return null == fH || void 0 == fH;
                        }
                        function fX(fH, fh, fx) {
                            this.h = fH;
                            this.c = fh;
                            fJ(fx) ? this.i = !0 : this.i = fx;
                        }
                        function fP(fH) {
                            if (fJ(fH) || fJ(fH.h) || fJ(fH.c)) {
                                return !1;
                            }
                            try {
                                if (fJ(window[fH.h])) {
                                    return !1;
                                }
                            } catch (fh) {
                                return !1;
                            }
                            return !0;
                        }
                        function fs(fH, fh) {
                            if (fJ(fH)) {
                                return P[0];
                            }
                            for (var fx = M[6]; fx < fH.length; fx++) {
                                var v0 = fH[fx];
                                if (!fJ(v0) && v0.h == fh) {
                                    return v0;
                                }
                            }
                        }
                        function fr() {
                            vB: {
                                var fH = fj;
                                if (!fJ(fH)) {
                                    for (var fh = M[6]; fh < fH.length; fh++) {
                                        var fx = fH[fh];
                                        if (fx.i && !fP(fx)) {
                                            fH = fx;
                                            break vB;
                                        }
                                    }
                                }
                                fH = null;
                            }
                            if (fJ(fH)) {
                                try {
                                    var v0 = window.parseFloat(P[183]) === M[374] && window.isNaN(window.parseFloat(P[167]));
                                } catch (v9) {
                                    v0 = !1;
                                }
                                if (v0) {
                                    try {
                                        var v1 = window.parseInt(P[329]) === M[264] && window.isNaN(window.parseInt(P[167]));
                                    } catch (vf) {
                                        v1 = !1;
                                    }
                                    if (v1) {
                                        try {
                                            var v2 = window.decodeURI(P[213]) === P[26];
                                        } catch (vv) {
                                            v2 = !1;
                                        }
                                        if (v2) {
                                            try {
                                                var v3 = window.decodeURIComponent(P[214]) === P[30];
                                            } catch (vA) {
                                                v3 = !1;
                                            }
                                            if (v3) {
                                                try {
                                                    var v4 = window.encodeURI(P[26]) === P[213];
                                                } catch (vL) {
                                                    v4 = !1;
                                                }
                                                if (v4) {
                                                    try {
                                                        var v5 = window.encodeURIComponent(P[30]) === P[214];
                                                    } catch (vD) {
                                                        v5 = !1;
                                                    }
                                                    if (v5) {
                                                        try {
                                                            var v6 = window.escape(P[30]) === P[214];
                                                        } catch (vY) {
                                                            v6 = !1;
                                                        }
                                                        if (v6) {
                                                            try {
                                                                var v7 = window.unescape(P[214]) === P[30];
                                                            } catch (vy) {
                                                                v7 = !1;
                                                            }
                                                            if (v7) {
                                                                try {
                                                                    var v8 = window.eval(P[309]) === M[264];
                                                                } catch (vV) {
                                                                    v8 = !1;
                                                                }
                                                                v0 = v8 ? null : fs(fj, P[174]);
                                                            } else {
                                                                v0 = fs(fj, s[67]);
                                                            }
                                                        } else {
                                                            v0 = fs(fj, P[348]);
                                                        }
                                                    } else {
                                                        v0 = fs(fj, P[396]);
                                                    }
                                                } else {
                                                    v0 = fs(fj, P[382]);
                                                }
                                            } else {
                                                v0 = fs(fj, s[74]);
                                            }
                                        } else {
                                            v0 = fs(fj, P[326]);
                                        }
                                    } else {
                                        v0 = fs(fj, P[424]);
                                    }
                                } else {
                                    v0 = fs(fj, P[456]);
                                }
                            } else {
                                v0 = fH;
                            }
                            return v0;
                        }
                        function fM() {
                            var fH = fr();
                            if (!fJ(fH)) {
                                return fH.c;
                            }
                            try {
                                fH = fJ(window[P[171]]) || fJ(window[P[171]][P[340]]) ? null : fs(fj, P[316]);
                            } catch (fh) {
                                fH = null;
                            }
                            if (!fJ(fH)) {
                                return fH.c;
                            }
                            try {
                                fH = fJ(window[P[207]]) || fJ(window[P[207]][P[188]]) ? null : fs(fj, P[271]);
                            } catch (fx) {
                                fH = null;
                            }
                            return fJ(fH) ? null : fH.c;
                        }
                        function fu(fH) {
                            for (var fh = [], fx = M[6]; fx < fH; fx++) {
                                var v0 = Math.random() * fo;
                                v0 = Math.floor(v0);
                                fh.push(fO.charAt(v0));
                            }
                            return fh.join(P[0]);
                        }
                        function fS(fH) {
                            for (var fh = (fQ[P[212]] || P[0]).split(P[458]), fx = M[6]; fx < fh.length; fx++) {
                                var v0 = fh[fx].indexOf(P[60]);
                                if (v0 >= M[6]) {
                                    var v1 = fh[fx].substring(v0 + M[531], fh[fx].length);
                                    if (fh[fx].substring(M[6], v0) == fH) {
                                        return window.decodeURIComponent(v1);
                                    }
                                }
                            }
                            return null;
                        }
                        function fq(fH) {
                            var fh = [P[137], P[185], P[136], P[110], P[162], P[169], P[384]],
                                fx = P[0];
                            if (null == fH || void 0 == fH) {
                                return fH;
                            }
                            if (("undefined" == typeof fH ? "undefined" : D(fH)) == [P[297], P[227], P[125]].join(P[0])) {
                                fx += P[144];
                                for (var v0 = M[6]; v0 < fh.length; v0++) {
                                    if (fH.hasOwnProperty(fh[v0])) {
                                        var v1 = P[31] + fh[v0] + P[269],
                                            v2 = P[0] + fH[fh[v0]];
                                        v2 = null == v2 || void 0 == v2 ? v2 : v2.replace(/'/g, P[463]).replace(/"/g, P[26]);
                                        fx += v1 + v2 + P[195];
                                    }
                                }
                                fx.charAt(fx.length - M[531]) == P[36] && (fx = fx.substring(M[6], fx.length - M[531]));
                                return fx += P[145];
                            }
                            return null;
                        }
                        function fG(fH, fh, fx, v0) {
                            var v1 = [];
                            v1.push(fH + P[60] + encodeURIComponent(fh));
                            fx && (fH = new Date(v0)[P[220]](), v1.push(P[458]), v1.push(P[175]), v1.push(P[310]), v1.push(P[331]), v1.push(P[325]), v1.push(fH));
                            v1.push(P[458]);
                            v1.push(P[307]);
                            v1.push(P[221]);
                            null != fg && void 0 != fg && fg != P[0] && (v1.push(P[458]), v1.push(P[156]), v1.push(P[241]), v1.push(P[267]), v1.push(fg));
                            fQ[P[212]] = v1.join(P[0]);
                        }
                        function fe(fH, fh) {
                            for (var fx = [], v0 = M[6]; v0 < fh; v0++) {
                                fx.push(fH);
                            }
                            return fx.join(P[0]);
                        }
                        function fK(fH) {
                            return null == fH || void 0 == fH || fH == P[0] ? null : (fH = fH.split(P[57]), fH.length < M[7] || !/^[0-9]+$/gi.test(fH[1]) ? null : parseInt(fH[1]));
                        }
                        function fF() {
                            var fH = fS(fI);
                            null != fH && void 0 != fH && fH != P[0] || (fH = window[fz]);
                            return fH;
                        }
                        function fU() {
                            var fH = fF(fI);
                            return null == fH || void 0 == fH || fH == P[0] ? M[6] : (fH = fK(fH), null == fH ? M[6] : fH - (fd - fp) - new window[s[73]]()[P[182]]());
                        }
                        function fc() {
                            if (!(null == fa || void 0 == fa || fa.length <= M[6])) {
                                for (var fH = M[6]; fH < fa.length; fH++) {
                                    var fh = fa[fH];
                                    if ((null != fg && void 0 != fg && fg != P[0] || null != fh && void 0 != fh && fh != P[0]) && fg != fh) {
                                        var fx = fI,
                                            v0 = new window[s[73]]();
                                        v0[P[24]](v0[P[182]]() - M[317]);
                                        window[P[336]][P[212]] = null == fh || void 0 == fh || fh == P[0] ? fx + P[150] + v0[P[220]]() : fx + P[379] + fh + s[24] + v0[P[220]]();
                                    }
                                }
                            }
                        }
                        function fR() {
                            fc();
                            window[fz] = null;
                            var fH = !0,
                                fh = {
                                    v: P[233]
                                },
                                fx = fM();
                            fx && (fh[P[384]] = fx);
                            fx = null;
                            fh[P[110]] = fN;
                            var v0 = new window[s[73]]()[P[182]]() + fd,
                                v1 = v0 + M[299] * M[139] * M[139] * M[65] * M[77];
                            fh[P[136]] = fu(M[10]) + v0 + fu(M[10]);
                            try {
                                var v2 = new fD({
                                    b: !1,
                                    a: !1
                                }).get();
                                null != v2 && void 0 != v2 && v2.length > M[6] ? fh[P[185]] = v2.join(P[36]) : (fh[P[185]] = fe(P[43], M[34]), fh[P[162]] = P[44], fH = !1);
                            } catch (vk) {
                                fh[P[185]] = fe(P[43], M[34]);
                                fh[P[162]] = P[44];
                                fH = !1;
                            }
                            try {
                                fx = fq(fh);
                                var v3 = fx;
                                if (fh = fi, null == fh || void 0 == fh) {
                                    throw Error(P[122]);
                                }
                                null != v3 && void 0 != v3 || (v3 = P[0]);
                                v2 = v3;
                                var v4 = f2(null == v3 ? [] : f7(v3)),
                                    v5 = f7(v2 + v4),
                                    v6 = f7(fh);
                                null == v5 && (v5 = []);
                                v4 = [];
                                for (var v7 = M[6]; v7 < fT; v7++) {
                                    var v8 = Math.random() * M[292];
                                    v8 = Math.floor(v8);
                                    v4[v7] = fL(v8);
                                }
                                if (v6 = f1(v6), v6 = ff(v6, f1(v4)), v7 = v6 = f1(v6), v8 = v5, null == v8 || void 0 == v8 || v8.length == M[6]) {
                                    var v9 = f4(fC);
                                } else {
                                    var vf = v8.length,
                                        vv = vf % fC <= fC - fE ? fC - vf % fC - fE : fC * M[7] - vf % fC - fE;
                                    v5 = [];
                                    f5(v8, M[6], v5, M[6], vf);
                                    for (var vA = M[6]; vA < vv; vA++) {
                                        v5[vf + vA] = M[6];
                                    }
                                    var vL = f6(vf);
                                    f5(vL, M[6], v5, vf + vv, fE);
                                    v9 = v5;
                                }
                                if (vf = v9, null == vf || vf.length % fC != M[6]) {
                                    throw Error(P[132]);
                                }
                                v9 = [];
                                for (var vD = M[6], vY = vf.length / fC, vy = M[6]; vy < vY; vy++) {
                                    v9[vy] = [];
                                    for (var vV = M[6]; vV < fC; vV++) {
                                        v9[vy][vV] = vf[vD++];
                                    }
                                }
                                vD = [];
                                f5(v4, M[6], vD, M[6], fT);
                                for (var vB = v9.length, vJ = M[6]; vJ < vB; vJ++) {
                                    var vX = v9[vJ];
                                    if (null == vX) {
                                        var vP = null;
                                    } else {
                                        var vs = fL(M[89]);
                                        vY = [];
                                        for (var vr = vX.length, vM = M[6]; vM < vr; vM++) {
                                            vY.push(fv(vX[vM], vs));
                                        }
                                        vP = vY;
                                    }
                                    if (vY = vP, null == vY) {
                                        var vu = null;
                                    } else {
                                        var vS = fL(M[88]);
                                        vy = [];
                                        for (var vq = vY.length, vG = M[6]; vG < vq; vG++) {
                                            vy.push(fv(vY[vG], vS--));
                                        }
                                        vu = vy;
                                    }
                                    if (vY = vu, null == vY) {
                                        var ve = null;
                                    } else {
                                        var vK = fL(M[107]);
                                        vy = [];
                                        for (var vF = vY.length, vU = M[6]; vU < vF; vU++) {
                                            vy.push(fA(vY[vU], vK++));
                                        }
                                        ve = vy;
                                    }
                                    var vc = ff(ve, v6);
                                    if (vY = vc, vy = v7, null == vY) {
                                        var vR = null;
                                    } else {
                                        if (null == vy) {
                                            vR = vY;
                                        } else {
                                            vV = [];
                                            for (var vj = vy.length, vn = M[6], vN = vY.length; vn < vN; vn++) {
                                                vV[vn] = fL(vY[vn] + vy[vn % vj]);
                                            }
                                            vR = vV;
                                        }
                                    }
                                    vc = ff(vR, v7);
                                    var vQ = f0(vc);
                                    vQ = f0(vQ);
                                    f5(vQ, M[6], vD, vJ * fC + fT, fC);
                                    v7 = vQ;
                                }
                                if (null == vD || void 0 == vD) {
                                    var vl = null;
                                } else {
                                    if (vD.length == M[6]) {
                                        vl = P[0];
                                    } else {
                                        var vt = M[10];
                                        try {
                                            vB = [];
                                            for (var vm = M[6]; vm < vD.length;) {
                                                if (!(vm + vt <= vD.length)) {
                                                    vB.push(f3(vD, vm, vD.length - vm));
                                                    break;
                                                }
                                                vB.push(f3(vD, vm, vt));
                                                vm += vt;
                                            }
                                            vl = vB.join(P[0]);
                                        } catch (vW) {
                                            throw Error(P[113]);
                                        }
                                    }
                                }
                                fx = vl;
                            } catch (vb) {
                                fx = fq({
                                    ec: P[45],
                                    em: vb[P[197]]
                                });
                                fH = !1;
                            }
                            fx = fx + P[57] + v0;
                            fG(fI, fx, fH, v1);
                            fH = fI;
                            vl = fx;
                            vt = fS(fH);
                            null !== vt && void 0 !== vt && vt !== P[0] || fG(fH, vl, !1);
                            window[fz] = fx;
                            window[P[128]] && window[P[128]](fR, fp);
                        }
                        fX.prototype = {
                            toString: function () {
                                return P[460] + this.h + P[166] + this.c + s[7] + this.i + P[145];
                            }
                        };
                        var fj = [new fX(P[433], P[13]), new fX(P[336], P[14]), new fX(P[372], P[11]), new fX(P[431], P[12]), new fX(s[33], P[10]), new fX(P[263], P[9]), new fX(P[2], P[20]), new fX(P[240], P[22]), new fX(s[10], P[6]), new fX(P[456], s[58]), new fX(P[424], s[56]), new fX(P[326], s[57]), new fX(s[74], s[53]), new fX(P[382], s[55]), new fX(P[396], s[50]), new fX(P[348], s[52]), new fX(s[67], s[59]), new fX(P[174], s[62]), new fX(P[259], s[21], !1), new fX(P[300], s[22], !1), new fX(P[171], s[18], !1), new fX(P[316], s[19], !1), new fX(P[271], s[38], !1)],
                            fn = !fr(),
                            fN = window && window[P[431]] && window[P[431]].host || P[358],
                            fQ = window[P[336]],
                            fl = window[P[372]],
                            ft = M[7],
                            fm = M[7],
                            fk = [P[43], P[44], P[45], P[46], P[47], P[49], P[50], P[52], P[54], P[55], P[99], P[101], P[103], P[105], P[107], P[108]],
                            fW = [M[6], M[367], M[373], M[511], M[438], M[306], M[484], M[333], M[451], M[532], M[300], M[450], M[485], M[453], M[404], M[31], M[444], M[353], M[523], M[391], M[428], M[284], M[356], M[500], M[480], M[482], M[465], M[323], M[529], M[401], M[288], M[416], M[463], M[20], M[359], M[492], M[315], M[343], M[536], M[380], M[409], M[430], M[165], M[432], M[296], M[490], M[458], M[326], M[497], M[321], M[471], M[345], M[348], M[389], M[369], M[518], M[514], M[448], M[412], M[25], M[397], M[509], M[309], M[435], M[460], M[427], M[38], M[406], M[538], M[495], M[452], M[302], M[310], M[247], M[335], M[487], M[370], M[385], M[512], M[375], M[405], M[527], M[418], M[289], M[486], M[476], M[325], M[467], M[291], M[422], M[502], M[357], M[358], M[440], M[393], M[524], M[493], M[286], M[327], M[459], M[433], M[402], M[434], M[181], M[344], M[307], M[381], M[537], M[24], M[455], M[494], M[360], M[510], M[387], M[436], M[311], M[449], M[506], M[28], M[413], M[392], M[340], M[519], M[371], M[324], M[488], M[346], M[472], M[470], M[322], M[441], M[479], M[287], M[420], M[331], M[408], M[526], M[390], M[505], M[352], M[355], M[504], M[468], M[294], M[304], M[447], M[130], M[530], M[403], M[44], M[298], M[462], M[377], M[508], M[378], M[364], M[483], M[338], M[330], M[314], M[415], M[19], M[517], M[445], M[308], M[439], M[379], M[515], M[474], M[342], M[499], M[319], M[368], M[522], M[332], M[398], M[274], M[431], M[410], M[426], M[456], M[329], M[121], M[498], M[362], M[491], M[464], M[13], M[535], M[386], M[297], M[350], M[503], M[354], M[293], M[337], M[388], M[525], M[351], M[318], M[419], M[285], M[407], M[372], M[320], M[469], M[478], M[23], M[336], M[481], M[312], M[349], M[507], M[376], M[363], M[399], M[42], M[400], M[461], M[313], M[446], M[303], M[528], M[295], M[521], M[366], M[395], M[334], M[341], M[473], M[316], M[501], M[437], M[305], M[513], M[382], M[15], M[414], M[443], M[520], M[383], M[534], M[347], M[301], M[489], M[361], M[8], M[466], M[328], M[454], M[496], M[148], M[429], M[223], M[423], M[411]],
                            fb = [M[32], M[190], M[117], M[135], M[248], M[224], M[131], M[272], M[206], M[48], M[47], M[7], M[164], M[214], M[173], M[93], M[132], M[114], M[174], M[69], M[256], M[139], M[198], M[33], M[231], M[39], M[156], M[222], M[144], M[101], M[53], M[73], M[265], M[36], M[81], M[105], M[175], M[207], M[89], M[215], M[14], M[136], M[216], M[191], M[217], M[199], M[208], M[232], M[43], M[200], M[176], M[201], M[257], M[149], M[41], M[18], M[75], M[258], M[16], M[182], M[71], M[97], M[137], M[102], M[192], M[113], M[166], M[239], M[147], M[70], M[150], M[82], M[249], M[6], M[90], M[225], M[202], M[115], M[273], M[193], M[98], M[233], M[9], M[266], M[103], M[250], M[209], M[183], M[80], M[151], M[226], M[45], M[152], M[116], M[153], M[251], M[227], M[194], M[56], M[234], M[154], M[167], M[85], M[177], M[106], M[72], M[240], M[241], M[109], M[140], M[195], M[104], M[126], M[67], M[155], M[86], M[107], M[122], M[252], M[91], M[168], M[203], M[184], M[118], M[83], M[94], M[185], M[186], M[196], M[242], M[40], M[138], M[228], M[178], M[110], M[275], M[87], M[531], M[218], M[46], M[133], M[243], M[235], M[210], M[123], M[37], M[253], M[57], M[236], M[169], M[143], M[157], M[95], M[127], M[259], M[276], M[254], M[264], M[34], M[179], M[267], M[30], M[170], M[59], M[211], M[51], M[141], M[60], M[237], M[277], M[54], M[278], M[52], M[124], M[35], M[180], M[66], M[61], M[268], M[212], M[68], M[219], M[244], M[62], M[63], M[158], M[279], M[281], M[111], M[96], M[533], M[10], M[58], M[229], M[159], M[230], M[17], M[260], M[269], M[108], M[119], M[92], M[99], M[65], M[187], M[77], M[188], M[145], M[100], M[213], M[204], M[22], M[125], M[280], M[146], M[74], M[245], M[55], M[120], M[246], M[160], M[161], M[76], M[171], M[220], M[205], M[142], M[162], M[163], M[261], M[11], M[189], M[197], M[26], M[84], M[128], M[79], M[270], M[271], M[238], M[255], M[112], M[78], M[262], M[129], M[64], M[263], M[50], M[27], M[21], M[88], M[49], M[221], M[134], M[172], M[29]],
                            fC = M[155],
                            fw = M[155],
                            fE = M[14],
                            fT = M[14],
                            fi = s[35],
                            fI = P[18],
                            fO = P[281],
                            fo = fO.length,
                            fd = M[424],
                            fp = M[516],
                            fZ = window && window[P[431]] && window[P[431]][P[315]] || P[462],
                            fg = P[0];
                        fg = function (fH, fh) {
                            if (null == fH || void 0 == fH || fH == P[0] || null == fh || void 0 == fh || fh.length <= M[6]) {
                                return null;
                            }
                            fh = fh.split(P[58]);
                            for (var fx = M[6]; fx < fh.length; fx++) {
                                var v0 = new RegExp(fh[fx].replace(/\./g, P[467]) + P[27]);
                                if (null != fH[s[66]](v0) || null != (P[40] + fH)[s[66]](v0)) {
                                    return fh[fx];
                                }
                            }
                            return null;
                        }(fZ, fg);
                        var fz = fI.replace(/[^a-zA-Z0-9$]/g, P[0]).toLowerCase(),
                            fa = function (fH) {
                                var fh = [];
                                if (!fH) {
                                    return fh;
                                }
                                fH = fH.split(P[40]);
                                for (var fx = P[0], v0 = M[6]; v0 < fH.length; v0++) {
                                    v0 < fH.length - M[531] && (fx = P[40] + fH[fH.length - M[531] - v0] + fx, fh.push(fx));
                                }
                                return fh;
                            }(fZ);
                        fa.push(null);
                        fa.push(P[40] + fZ);
                        (function (fH) {
                            for (var fh = M[6], fx = (fQ[P[212]] || P[0]).split(P[458]), v0 = M[6]; v0 < fx.length; v0++) {
                                var v1 = fx[v0].indexOf(P[60]);
                                v1 >= M[6] && fx[v0].substring(M[6], v1) == fH && (fh += M[531]);
                            }
                            return fh;
                        })(fI) > M[531] && fc();
                        (function () {
                            var fH = fF();
                            null == fH || void 0 == fH || fH == P[0] ? fH = !1 : (fH = fK(fH), fH = !(null == fH || isNaN(fH) || fH - new window[s[73]]()[P[182]]() <= fd - fp));
                            return fH;
                        })() ? (window[fz] = fF(), fZ = fU(), window[P[128]] && window[P[128]](fR, fZ)) : fR();
                    }();
                }();
            }();
        }();
    }, function (A, L) {
        var D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
            return typeof Y;
        } : function (Y) {
            return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
        };
        "object" !== ("undefined" == typeof JSON ? "undefined" : D(JSON)) && (JSON = {});
        (function () {
            'use strict';

            function Y(e) {
                return e < 10 ? "0" + e : e;
            }
            function y() {
                return this.valueOf();
            }
            function V(e) {
                r.lastIndex = 0;
                return r.test(e) ? "\"" + e.replace(r, function (K) {
                    var F = q[K];
                    return "string" == typeof F ? F : "\\u" + ("0000" + K.charCodeAt(0).toString(16)).slice(-4);
                }) + "\"" : "\"" + e + "\"";
            }
            function B(K, F) {
                var U,
                    c,
                    R,
                    j,
                    N,
                    Q = u,
                    l = F[K];
                switch (l && "object" === ("undefined" == typeof l ? "undefined" : D(l)) && "function" == typeof l.toJSON && (l = l.toJSON(K)), "function" == typeof G && (l = G.call(F, K, l)), "undefined" == typeof l ? "undefined" : D(l)) {
                    case "string":
                        return V(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) {
                            return "null";
                        }
                        if (u += S, N = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (j = l.length, U = 0; U < j; U += 1) {
                                N[U] = B(U, l) || "null";
                            }
                            R = 0 === N.length ? "[]" : u ? "[\n" + u + N.join(",\n" + u) + "\n" + Q + "]" : "[" + N.join(",") + "]";
                            u = Q;
                            return R;
                        }
                        if (G && "object" === ("undefined" == typeof G ? "undefined" : D(G))) {
                            for (j = G.length, U = 0; U < j; U += 1) {
                                "string" == typeof G[U] && (c = G[U], R = B(c, l), R && N.push(V(c) + (u ? ": " : ":") + R));
                            }
                        } else {
                            for (c in l) Object.prototype.hasOwnProperty.call(l, c) && (R = B(c, l), R && N.push(V(c) + (u ? ": " : ":") + R));
                        }
                        R = 0 === N.length ? "{}" : u ? "{\n" + u + N.join(",\n" + u) + "\n" + Q + "}" : "{" + N.join(",") + "}";
                        u = Q;
                        return R;
                }
            }
            var J = /^[\],:{}\s]*$/,
                X = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                P = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                s = /(?:^|:|,)(?:\s*\[)+/g,
                r = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                M = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + Y(this.getUTCMonth() + 1) + "-" + Y(this.getUTCDate()) + "T" + Y(this.getUTCHours()) + ":" + Y(this.getUTCMinutes()) + ":" + Y(this.getUTCSeconds()) + "Z" : null;
            }, Boolean.prototype.toJSON = y, Number.prototype.toJSON = y, String.prototype.toJSON = y);
            var u, S, q, G;
            "function" != typeof JSON.stringify && (q = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                "\"": "\\\"",
                "\\": "\\\\"
            }, JSON.stringify = function (K, F, U) {
                var c;
                if (u = "", S = "", "number" == typeof U) {
                    for (c = 0; c < U; c += 1) {
                        S += " ";
                    }
                } else {
                    "string" == typeof U && (S = U);
                }
                if (G = F, F && "function" != typeof F && ("object" !== ("undefined" == typeof F ? "undefined" : D(F)) || "number" != typeof F.length)) {
                    throw new Error("JSON.stringify");
                }
                return B("", {
                    "": K
                });
            });
            "function" != typeof JSON.parse && (JSON.parse = function (e, K) {
                function F(c, R) {
                    var N,
                        Q,
                        l = c[R];
                    if (l && "object" === ("undefined" == typeof l ? "undefined" : D(l))) {
                        for (N in l) Object.prototype.hasOwnProperty.call(l, N) && (Q = F(l, N), void 0 !== Q ? l[N] = Q : delete l[N]);
                    }
                    return K.call(c, R, l);
                }
                var U;
                if (e = String(e), M.lastIndex = 0, M.test(e) && (e = e.replace(M, function (c) {
                    return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
                })), J.test(e.replace(X, "@").replace(P, "]").replace(s, ""))) {
                    U = eval("(" + e + ")");
                    return "function" == typeof K ? F({
                        "": U
                    }, "") : U;
                }
                throw new SyntaxError("JSON.parse");
            });
        })();
    }, function (A, L) {
        function D(k) {
            this.mode = K.MODE_8BIT_BYTE;
            this.data = k;
            this.parsedData = [];
            for (var W = 0, b = this.data.length; W < b; W++) {
                var C = [],
                    w = this.data.charCodeAt(W);
                w > 65536 ? (C[0] = 240 | (1835008 & w) >>> 18, C[1] = 128 | (258048 & w) >>> 12, C[2] = 128 | (4032 & w) >>> 6, C[3] = 128 | 63 & w) : w > 2048 ? (C[0] = 224 | (61440 & w) >>> 12, C[1] = 128 | (4032 & w) >>> 6, C[2] = 128 | 63 & w) : w > 128 ? (C[0] = 192 | (1984 & w) >>> 6, C[1] = 128 | 63 & w) : C[0] = w;
                this.parsedData.push(C);
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData);
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
        }
        function V(k, W) {
            this.typeNumber = k;
            this.errorCorrectLevel = W;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
        }
        function B(k, W) {
            if (void 0 == k.length) {
                throw new Error(k.length + "/" + W);
            }
            for (var b = 0; b < k.length && 0 == k[b];) {
                b++;
            }
            this.num = new Array(k.length - b + W);
            for (var C = 0; C < k.length - b; C++) {
                this.num[C] = k[C + b];
            }
        }
        function J(k, W) {
            this.totalCount = k;
            this.dataCount = W;
        }
        function X() {
            this.buffer = [];
            this.length = 0;
        }
        function P() {
            return "undefined" != typeof CanvasRenderingContext2D;
        }
        function M() {
            var k = !1,
                W = navigator.userAgent;
            if (/android/i.test(W)) {
                k = !0;
                var b = W.toString().match(/android ([0-9]\.[0-9])/i);
                b && b[1] && (k = parseFloat(b[1]));
            }
            return k;
        }
        function S(k, W) {
            for (var b = 1, C = q(k), w = 0, E = Q.length; w <= E; w++) {
                var T = 0;
                switch (W) {
                    case F.L:
                        T = Q[w][0];
                        break;
                    case F.M:
                        T = Q[w][1];
                        break;
                    case F.Q:
                        T = Q[w][2];
                        break;
                    case F.H:
                        T = Q[w][3];
                }
                if (C <= T) {
                    break;
                }
                b++;
            }
            if (b > Q.length) {
                throw new Error("Too long data");
            }
            return b;
        }
        function q(k) {
            var W = encodeURI(k).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return W.length + (W.length != k ? 3 : 0);
        }
        var G;
        D.prototype = {
            getLength: function (k) {
                return this.parsedData.length;
            },
            write: function (k) {
                for (var W = 0, b = this.parsedData.length; W < b; W++) {
                    k.put(this.parsedData[W], 8);
                }
            }
        };
        V.prototype = {
            addData: function (k) {
                var W = new D(k);
                this.dataList.push(W);
                this.dataCache = null;
            },
            isDark: function (k, W) {
                if (k < 0 || this.moduleCount <= k || W < 0 || this.moduleCount <= W) {
                    throw new Error(k + "," + W);
                }
                return this.modules[k][W];
            },
            getModuleCount: function () {
                return this.moduleCount;
            },
            make: function () {
                this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function (k, W) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = new Array(this.moduleCount);
                for (var b = 0; b < this.moduleCount; b++) {
                    this.modules[b] = new Array(this.moduleCount);
                    for (var C = 0; C < this.moduleCount; C++) {
                        this.modules[b][C] = null;
                    }
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount - 7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(k, W);
                this.typeNumber >= 7 && this.setupTypeNumber(k);
                null == this.dataCache && (this.dataCache = V.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, W);
            },
            setupPositionProbePattern: function (k, W) {
                for (var b = -1; b <= 7; b++) {
                    if (!(k + b <= -1 || this.moduleCount <= k + b)) {
                        for (var C = -1; C <= 7; C++) {
                            W + C <= -1 || this.moduleCount <= W + C || (0 <= b && b <= 6 && (0 == C || 6 == C) || 0 <= C && C <= 6 && (0 == b || 6 == b) || 2 <= b && b <= 4 && 2 <= C && C <= 4 ? this.modules[k + b][W + C] = !0 : this.modules[k + b][W + C] = !1);
                        }
                    }
                }
            },
            getBestMaskPattern: function () {
                for (var k = 0, W = 0, b = 0; b < 8; b++) {
                    this.makeImpl(!0, b);
                    var C = R.getLostPoint(this);
                    (0 == b || k > C) && (k = C, W = b);
                }
                return W;
            },
            createMovieClip: function (k, W, b) {
                var C = k.createEmptyMovieClip(W, b),
                    w = 1;
                this.make();
                for (var E = 0; E < this.modules.length; E++) {
                    for (var T = E * w, I = 0; I < this.modules[E].length; I++) {
                        var O = I * w,
                            Z = this.modules[E][I];
                        Z && (C.beginFill(0, 100), C.moveTo(O, T), C.lineTo(O + w, T), C.lineTo(O + w, T + w), C.lineTo(O, T + w), C.endFill());
                    }
                }
                return C;
            },
            setupTimingPattern: function () {
                for (var k = 8; k < this.moduleCount - 8; k++) {
                    null == this.modules[k][6] && (this.modules[k][6] = k % 2 == 0);
                }
                for (var W = 8; W < this.moduleCount - 8; W++) {
                    null == this.modules[6][W] && (this.modules[6][W] = W % 2 == 0);
                }
            },
            setupPositionAdjustPattern: function () {
                for (var k = R.getPatternPosition(this.typeNumber), W = 0; W < k.length; W++) {
                    for (var b = 0; b < k.length; b++) {
                        var C = k[W],
                            w = k[b];
                        if (null == this.modules[C][w]) {
                            for (var E = -2; E <= 2; E++) {
                                for (var T = -2; T <= 2; T++) {
                                    E == -2 || 2 == E || T == -2 || 2 == T || 0 == E && 0 == T ? this.modules[C + E][w + T] = !0 : this.modules[C + E][w + T] = !1;
                                }
                            }
                        }
                    }
                }
            },
            setupTypeNumber: function (k) {
                for (var W = R.getBCHTypeNumber(this.typeNumber), b = 0; b < 18; b++) {
                    var C = !k && 1 == (W >> b & 1);
                    this.modules[Math.floor(b / 3)][b % 3 + this.moduleCount - 8 - 3] = C;
                }
                for (var b = 0; b < 18; b++) {
                    var C = !k && 1 == (W >> b & 1);
                    this.modules[b % 3 + this.moduleCount - 8 - 3][Math.floor(b / 3)] = C;
                }
            },
            setupTypeInfo: function (k, W) {
                for (var b = this.errorCorrectLevel << 3 | W, C = R.getBCHTypeInfo(b), w = 0; w < 15; w++) {
                    var E = !k && 1 == (C >> w & 1);
                    w < 6 ? this.modules[w][8] = E : w < 8 ? this.modules[w + 1][8] = E : this.modules[this.moduleCount - 15 + w][8] = E;
                }
                for (var w = 0; w < 15; w++) {
                    var E = !k && 1 == (C >> w & 1);
                    w < 8 ? this.modules[8][this.moduleCount - w - 1] = E : w < 9 ? this.modules[8][15 - w - 1 + 1] = E : this.modules[8][15 - w - 1] = E;
                }
                this.modules[this.moduleCount - 8][8] = !k;
            },
            mapData: function (k, W) {
                for (var b = -1, C = this.moduleCount - 1, w = 7, E = 0, T = this.moduleCount - 1; T > 0; T -= 2) {
                    for (6 == T && T--;;) {
                        for (var I = 0; I < 2; I++) {
                            if (null == this.modules[C][T - I]) {
                                var O = !1;
                                E < k.length && (O = 1 == (k[E] >>> w & 1));
                                var Z = R.getMask(W, C, T - I);
                                Z && (O = !O);
                                this.modules[C][T - I] = O;
                                w--;
                                w == -1 && (E++, w = 7);
                            }
                        }
                        if (C += b, C < 0 || this.moduleCount <= C) {
                            C -= b;
                            b = -b;
                            break;
                        }
                    }
                }
            }
        };
        V.PAD0 = 236;
        V.PAD1 = 17;
        V.createData = function (k, W, b) {
            for (var C = J.getRSBlocks(k, W), w = new X(), E = 0; E < b.length; E++) {
                var T = b[E];
                w.put(T.mode, 4);
                w.put(T.getLength(), R.getLengthInBits(T.mode, k));
                T.write(w);
            }
            for (var I = 0, E = 0; E < C.length; E++) {
                I += C[E].dataCount;
            }
            if (w.getLengthInBits() > 8 * I) {
                throw new Error("code length overflow. (" + w.getLengthInBits() + ">" + 8 * I + ")");
            }
            for (w.getLengthInBits() + 4 <= 8 * I && w.put(0, 4); w.getLengthInBits() % 8 != 0;) {
                w.putBit(!1);
            }
            for (;;) {
                if (w.getLengthInBits() >= 8 * I) {
                    break;
                }
                if (w.put(V.PAD0, 8), w.getLengthInBits() >= 8 * I) {
                    break;
                }
                w.put(V.PAD1, 8);
            }
            return V.createBytes(w, C);
        };
        V.createBytes = function (k, W) {
            for (var b = 0, C = 0, w = 0, E = new Array(W.length), T = new Array(W.length), I = 0; I < W.length; I++) {
                var O = W[I].dataCount,
                    Z = W[I].totalCount - O;
                C = Math.max(C, O);
                w = Math.max(w, Z);
                E[I] = new Array(O);
                for (var z = 0; z < E[I].length; z++) {
                    E[I][z] = 255 & k.buffer[z + b];
                }
                b += O;
                var H = R.getErrorCorrectPolynomial(Z),
                    x = new B(E[I], H.getLength() - 1),
                    f0 = x.mod(H);
                T[I] = new Array(H.getLength() - 1);
                for (var z = 0; z < T[I].length; z++) {
                    var f1 = z + f0.getLength() - T[I].length;
                    T[I][z] = f1 >= 0 ? f0.get(f1) : 0;
                }
            }
            for (var f2 = 0, z = 0; z < W.length; z++) {
                f2 += W[z].totalCount;
            }
            for (var f3 = new Array(f2), f4 = 0, z = 0; z < C; z++) {
                for (var I = 0; I < W.length; I++) {
                    z < E[I].length && (f3[f4++] = E[I][z]);
                }
            }
            for (var z = 0; z < w; z++) {
                for (var I = 0; I < W.length; I++) {
                    z < T[I].length && (f3[f4++] = T[I][z]);
                }
            }
            return f3;
        };
        for (var K = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, F = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, U = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, R = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (k) {
                for (var W = k << 10; R.getBCHDigit(W) - R.getBCHDigit(R.G15) >= 0;) {
                    W ^= R.G15 << R.getBCHDigit(W) - R.getBCHDigit(R.G15);
                }
                return (k << 10 | W) ^ R.G15_MASK;
            },
            getBCHTypeNumber: function (k) {
                for (var W = k << 12; R.getBCHDigit(W) - R.getBCHDigit(R.G18) >= 0;) {
                    W ^= R.G18 << R.getBCHDigit(W) - R.getBCHDigit(R.G18);
                }
                return k << 12 | W;
            },
            getBCHDigit: function (k) {
                for (var W = 0; 0 != k;) {
                    W++;
                    k >>>= 1;
                }
                return W;
            },
            getPatternPosition: function (k) {
                return R.PATTERN_POSITION_TABLE[k - 1];
            },
            getMask: function (k, W, b) {
                switch (k) {
                    case U.PATTERN000:
                        return (W + b) % 2 == 0;
                    case U.PATTERN001:
                        return W % 2 == 0;
                    case U.PATTERN010:
                        return b % 3 == 0;
                    case U.PATTERN011:
                        return (W + b) % 3 == 0;
                    case U.PATTERN100:
                        return (Math.floor(W / 2) + Math.floor(b / 3)) % 2 == 0;
                    case U.PATTERN101:
                        return W * b % 2 + W * b % 3 == 0;
                    case U.PATTERN110:
                        return (W * b % 2 + W * b % 3) % 2 == 0;
                    case U.PATTERN111:
                        return (W * b % 3 + (W + b) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + k);
                }
            },
            getErrorCorrectPolynomial: function (k) {
                for (var W = new B([1], 0), b = 0; b < k; b++) {
                    W = W.multiply(new B([1, j.gexp(b)], 0));
                }
                return W;
            },
            getLengthInBits: function (k, W) {
                if (1 <= W && W < 10) {
                    switch (k) {
                        case K.MODE_NUMBER:
                            return 10;
                        case K.MODE_ALPHA_NUM:
                            return 9;
                        case K.MODE_8BIT_BYTE:
                            return 8;
                        case K.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + k);
                    }
                } else {
                    if (W < 27) {
                        switch (k) {
                            case K.MODE_NUMBER:
                                return 12;
                            case K.MODE_ALPHA_NUM:
                                return 11;
                            case K.MODE_8BIT_BYTE:
                                return 16;
                            case K.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + k);
                        }
                    } else {
                        if (!(W < 41)) {
                            throw new Error("type:" + W);
                        }
                        switch (k) {
                            case K.MODE_NUMBER:
                                return 14;
                            case K.MODE_ALPHA_NUM:
                                return 13;
                            case K.MODE_8BIT_BYTE:
                                return 16;
                            case K.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + k);
                        }
                    }
                }
            },
            getLostPoint: function (k) {
                for (var W = k.getModuleCount(), b = 0, C = 0; C < W; C++) {
                    for (var w = 0; w < W; w++) {
                        for (var E = 0, T = k.isDark(C, w), I = -1; I <= 1; I++) {
                            if (!(C + I < 0 || W <= C + I)) {
                                for (var O = -1; O <= 1; O++) {
                                    w + O < 0 || W <= w + O || 0 == I && 0 == O || T == k.isDark(C + I, w + O) && E++;
                                }
                            }
                        }
                        E > 5 && (b += 3 + E - 5);
                    }
                }
                for (var C = 0; C < W - 1; C++) {
                    for (var w = 0; w < W - 1; w++) {
                        var Z = 0;
                        k.isDark(C, w) && Z++;
                        k.isDark(C + 1, w) && Z++;
                        k.isDark(C, w + 1) && Z++;
                        k.isDark(C + 1, w + 1) && Z++;
                        0 != Z && 4 != Z || (b += 3);
                    }
                }
                for (var C = 0; C < W; C++) {
                    for (var w = 0; w < W - 6; w++) {
                        k.isDark(C, w) && !k.isDark(C, w + 1) && k.isDark(C, w + 2) && k.isDark(C, w + 3) && k.isDark(C, w + 4) && !k.isDark(C, w + 5) && k.isDark(C, w + 6) && (b += 40);
                    }
                }
                for (var w = 0; w < W; w++) {
                    for (var C = 0; C < W - 6; C++) {
                        k.isDark(C, w) && !k.isDark(C + 1, w) && k.isDark(C + 2, w) && k.isDark(C + 3, w) && k.isDark(C + 4, w) && !k.isDark(C + 5, w) && k.isDark(C + 6, w) && (b += 40);
                    }
                }
                for (var z = 0, w = 0; w < W; w++) {
                    for (var C = 0; C < W; C++) {
                        k.isDark(C, w) && z++;
                    }
                }
                var H = Math.abs(100 * z / W / W - 50) / 5;
                return b += 10 * H;
            }
        }, j = {
            glog: function (k) {
                if (k < 1) {
                    throw new Error("glog(" + k + ")");
                }
                return j.LOG_TABLE[k];
            },
            gexp: function (k) {
                for (; k < 0;) {
                    k += 255;
                }
                for (; k >= 256;) {
                    k -= 255;
                }
                return j.EXP_TABLE[k];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, N = 0; N < 8; N++) {
            j.EXP_TABLE[N] = 1 << N;
        }
        for (var N = 8; N < 256; N++) {
            j.EXP_TABLE[N] = j.EXP_TABLE[N - 4] ^ j.EXP_TABLE[N - 5] ^ j.EXP_TABLE[N - 6] ^ j.EXP_TABLE[N - 8];
        }
        for (var N = 0; N < 255; N++) {
            j.LOG_TABLE[j.EXP_TABLE[N]] = N;
        }
        B.prototype = {
            get: function (k) {
                return this.num[k];
            },
            getLength: function () {
                return this.num.length;
            },
            multiply: function (k) {
                for (var W = new Array(this.getLength() + k.getLength() - 1), b = 0; b < this.getLength(); b++) {
                    for (var C = 0; C < k.getLength(); C++) {
                        W[b + C] ^= j.gexp(j.glog(this.get(b)) + j.glog(k.get(C)));
                    }
                }
                return new B(W, 0);
            },
            mod: function (k) {
                if (this.getLength() - k.getLength() < 0) {
                    return this;
                }
                for (var W = j.glog(this.get(0)) - j.glog(k.get(0)), b = new Array(this.getLength()), C = 0; C < this.getLength(); C++) {
                    b[C] = this.get(C);
                }
                for (var C = 0; C < k.getLength(); C++) {
                    b[C] ^= j.gexp(j.glog(k.get(C)) + W);
                }
                return new B(b, 0).mod(k);
            }
        };
        J.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        J.getRSBlocks = function (k, W) {
            var b = J.getRsBlockTable(k, W);
            if (void 0 == b) {
                throw new Error("bad rs block @ typeNumber:" + k + "/errorCorrectLevel:" + W);
            }
            for (var C = b.length / 3, w = [], E = 0; E < C; E++) {
                for (var T = b[3 * E + 0], I = b[3 * E + 1], O = b[3 * E + 2], Z = 0; Z < T; Z++) {
                    w.push(new J(I, O));
                }
            }
            return w;
        };
        J.getRsBlockTable = function (k, W) {
            switch (W) {
                case F.L:
                    return J.RS_BLOCK_TABLE[4 * (k - 1) + 0];
                case F.M:
                    return J.RS_BLOCK_TABLE[4 * (k - 1) + 1];
                case F.Q:
                    return J.RS_BLOCK_TABLE[4 * (k - 1) + 2];
                case F.H:
                    return J.RS_BLOCK_TABLE[4 * (k - 1) + 3];
                default:
                    return;
            }
        };
        X.prototype = {
            get: function (k) {
                var W = Math.floor(k / 8);
                return 1 == (this.buffer[W] >>> 7 - k % 8 & 1);
            },
            put: function (k, W) {
                for (var b = 0; b < W; b++) {
                    this.putBit(1 == (k >>> W - b - 1 & 1));
                }
            },
            getLengthInBits: function () {
                return this.length;
            },
            putBit: function (k) {
                var W = Math.floor(this.length / 8);
                this.buffer.length <= W && this.buffer.push(0);
                k && (this.buffer[W] |= 128 >>> this.length % 8);
                this.length++;
            }
        };
        var Q = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
            m = function () {
                function k() {
                    this._htOption.useCanvas ? (this._elImage.style.display = "none", this._elCanvas.style.display = "block") : (this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none");
                }
                function W(E, T) {
                    var I = this;
                    if (I._fFail = T, I._fSuccess = E, null === I._bSupportDataURI) {
                        var O = document.createElement("img"),
                            Z = function () {
                                I._bSupportDataURI = !1;
                                I._fFail && I._fFail.call(I);
                            },
                            z = function () {
                                I._bSupportDataURI = !0;
                                I._fSuccess && I._fSuccess.call(I);
                            };
                        O.onabort = Z;
                        O.onerror = Z;
                        O.onload = z;
                        return void (O.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
                    }
                    I._bSupportDataURI === !0 && I._fSuccess ? I._fSuccess.call(I) : I._bSupportDataURI === !1 && I._fFail && I._fFail.call(I);
                }
                if (this && this._android && this._android <= 2.1) {
                    var b = 1 / window.devicePixelRatio,
                        C = CanvasRenderingContext2D.prototype.drawImage;
                    CanvasRenderingContext2D.prototype.drawImage = function (E, T, I, O, Z, z, H, x, f0) {
                        if ("nodeName" in E && /img/i.test(E.nodeName)) {
                            for (var f1 = arguments.length - 1; f1 >= 1; f1--) {
                                arguments[f1] = arguments[f1] * b;
                            }
                        } else {
                            "undefined" == typeof x && (arguments[1] *= b, arguments[2] *= b, arguments[3] *= b, arguments[4] *= b);
                        }
                        C.apply(this, arguments);
                    };
                }
                var w = function (E, T) {
                    this._bIsPainted = !1;
                    this._android = M();
                    this._htOption = T;
                    this._elCanvas = document.createElement("canvas");
                    this._elCanvas.width = T.width;
                    this._elCanvas.height = T.height;
                    this._htOption.useCanvas && E.appendChild(this._elCanvas);
                    this._el = E;
                    this._oContext = this._elCanvas.getContext("2d");
                    this._bIsPainted = !1;
                    this._elImage = document.createElement("img");
                    this._elImage.alt = "SMS jump QR code";
                    this._elImage.style.display = "none";
                    this._htOption.useCanvas || this._el.appendChild(this._elImage);
                    this._bSupportDataURI = null;
                };
                w.prototype.draw = function (E) {
                    var T = this._elImage,
                        I = this._elCanvas,
                        O = this._oContext,
                        Z = this._htOption,
                        z = E.getModuleCount(),
                        H = Z.width / z,
                        x = Z.height / z,
                        f0 = Math.round(H),
                        f1 = Math.round(x);
                    T.style.display = "none";
                    I.style.display = "none";
                    this.clear();
                    for (var f2 = 0; f2 < z; f2++) {
                        for (var f3 = 0; f3 < z; f3++) {
                            var f4 = E.isDark(f2, f3),
                                f5 = f3 * H,
                                f6 = f2 * x;
                            O.strokeStyle = f4 ? Z.colorDark : Z.colorLight;
                            O.lineWidth = 1;
                            O.fillStyle = f4 ? Z.colorDark : Z.colorLight;
                            O.fillRect(f5, f6, H, x);
                            O.strokeRect(Math.floor(f5) + 0.5, Math.floor(f6) + 0.5, f0, f1);
                            O.strokeRect(Math.ceil(f5) - 0.5, Math.ceil(f6) - 0.5, f0, f1);
                        }
                    }
                    if (this._htOption.imgSrc && P()) {
                        var f7 = new Image();
                        f7.crossOrigin = "*";
                        var f8 = this._htOption.width,
                            f9 = this._htOption.imgWidth,
                            ff = (f8 - f9) / 2,
                            fv = this;
                        f7.onload = function () {
                            O.drawImage(f7, ff, ff, f9, f9);
                            fv._htOption.useCanvas || fv.makeImage();
                        };
                        f7.src = this._htOption.imgSrc;
                        (f7.complete || void 0 === f7.complete) && (f7.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", f7.src = this._htOption.imgSrc);
                    }
                    this._bIsPainted = !0;
                };
                w.prototype.makeImage = function () {
                    this._bIsPainted && W.call(this, k);
                };
                w.prototype.isPainted = function () {
                    return this._bIsPainted;
                };
                w.prototype.clear = function () {
                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
                    this._bIsPainted = !1;
                };
                w.prototype.round = function (E) {
                    return E ? Math.floor(1000 * E) / 1000 : E;
                };
                return w;
            }();
        G = function (k, W) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000",
                colorLight: "#fff",
                correctLevel: F.H,
                imgSrc: void 0,
                useCanvas: !0
            }, this._htOption.imgWidth = this._htOption.width / 4, "string" == typeof W && (W = {
                text: W
            }), W) {
                for (var b in W) this._htOption[b] = W[b];
                W.width && !W.imgWidth && (this._htOption.imgWidth = this._htOption.width / 4);
            }
            "string" == typeof k && (k = document.getElementById(k));
            this._android = M();
            this._el = k;
            this._oQRCode = null;
            this._oDrawing = new m(this._el, this._htOption);
            this._htOption.text && this.makeCode(this._htOption.text);
        };
        G.prototype.makeCode = function (k) {
            this._oQRCode = new V(S(k, this._htOption.correctLevel), this._htOption.correctLevel);
            this._oQRCode.addData(k);
            this._oQRCode.make();
            this._el.title = k;
            this._oDrawing.draw(this._oQRCode);
            this._htOption.imgSrc && !this._htOption.useCanvas || this.makeImage();
        };
        G.prototype.makeImage = function () {
            "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
        };
        G.prototype.clear = function () {
            this._oDrawing.clear();
        };
        G.CorrectLevel = F;
        A.exports = G;
    }, function (A, L) {
        A.exports = function (D, Y) {
            function y() {}
            y.prototype = Y.prototype;
            D.prototype = new y();
            D.prototype.constructor = D;
        };
    }, function (A, L) {
        Array.isArray || (Array.isArray = function (D) {
            return "[object Array]" === Object.prototype.toString.call(D);
        });
    }, function (A, L) {
        "function" != typeof Object.assign && (Object.assign = function (D) {
            if (null == D) {
                throw new TypeError("Cannot convert undefined or null to object");
            }
            D = Object(D);
            for (var Y = 1; Y < arguments.length; Y++) {
                var y = arguments[Y];
                if (null != y) {
                    for (var V in y) Object.prototype.hasOwnProperty.call(y, V) && (D[V] = y[V]);
                }
            }
            return D;
        });
    }, function (A, L) {
        var D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
            return typeof Y;
        } : function (Y) {
            return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
        };
        Object.keys || (Object.keys = function () {
            'use strict';

            var Y = Object.prototype.hasOwnProperty,
                y = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                V = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                B = V.length;
            return function (J) {
                if ("function" != typeof J && ("object" !== ("undefined" == typeof J ? "undefined" : D(J)) || null === J)) {
                    throw new TypeError("Object.keys called on non-object");
                }
                var X,
                    P,
                    s = [];
                for (X in J) Y.call(J, X) && s.push(X);
                if (y) {
                    for (P = 0; P < B; P++) {
                        Y.call(J, V[P]) && s.push(V[P]);
                    }
                }
                return s;
            };
        }());
    }, function (A, L) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function (D, Y) {
            var y;
            if (null == this) {
                throw new TypeError("\"this\" is null or not defined");
            }
            var V = Object(this),
                B = V.length >>> 0;
            if (0 === B) {
                return -1;
            }
            var J = +Y || 0;
            if (Math.abs(J) === Infinity && (J = 0), J >= B) {
                return -1;
            }
            for (y = Math.max(J >= 0 ? J : B - Math.abs(J), 0); y < B;) {
                if (y in V && V[y] === D) {
                    return y;
                }
                y++;
            }
            return -1;
        });
    }, function (A, L) {
        Array.prototype.map || (Array.prototype.map = function (D, Y) {
            var y, V, B;
            if (null == this) {
                throw new TypeError(" this is null or not defined");
            }
            var J = Object(this),
                X = J.length >>> 0;
            if ("[object Function]" !== Object.prototype.toString.call(D)) {
                throw new TypeError(D + " is not a function");
            }
            for (Y && (y = Y), V = new Array(X), B = 0; B < X;) {
                var P, s;
                B in J && (P = J[B], s = D.call(y, P, B, J), V[B] = s);
                B++;
            }
            return V;
        });
    }, function (A, L) {
        Function.prototype.bind || (Function.prototype.bind = function (D) {
            if ("function" != typeof this) {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var Y = Array.prototype.slice.call(arguments, 1),
                y = this,
                V = function () {},
                B = function () {
                    return y.apply(this instanceof V ? this : D, Y.concat(Array.prototype.slice.call(arguments)));
                };
            this.prototype && (V.prototype = this.prototype);
            B.prototype = new V();
            return B;
        });
    }, function (A, L, D) {
        D(60);
        D(67);
        D(66);
        D(63);
        D(65);
        D(64);
        D(70);
        D(68);
    }, function (A, L) {
        String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        });
    }, function (J, q, Q) {
        function Z(fw, fE, fT) {
            fE in fw ? Object.defineProperty(fw, fE, {
                value: fT,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : fw[fE] = fT;
            return fw;
        }
        function f0(fw, fE) {
            var fT = fw.apiServer,
                fi = fw.protocol,
                fI = "/api/v3" + fE;
            return Array.isArray(fT) ? fT.map(function (fO) {
                return fc({
                    protocol: fi,
                    host: fO,
                    path: fI
                });
            }) : fc({
                protocol: fi,
                host: fT,
                path: fI
            });
        }
        function f1(fw, fE, fT) {
            var fi = fw || !fE && new Error("Server error, \"res\" is not right.(" + fT + ")") || fE.error && new Error(fE.error + ": " + fE.msg + ".(" + fT + ")") || null;
            !fw && fE && fE.error ? (fi.code = fW, fi.errorCode = fE.error, fi.errorMsg = fE.msg) : !fw && fE || (fi.code = fk);
            return fi;
        }
        function f2(fw) {
            var fE = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
            return null == fw ? "" : String(fU.isFn(fw) ? fw() : fw).substring(0, fE);
        }
        function f3() {
            var fw = {
                    suffix: "5048hk",
                    code: "zm01lz",
                    pos: [9, 12, 13, 14, 22, 26]
                } || {},
                fE = fw.code,
                fT = fw.pos,
                fi = fU.uuid(32);
            if (fE && fT && Array.isArray(fT)) {
                for (var fI = fi.split(""), fO = 0; fO < fT.length; fO++) {
                    fI[fT[fO]] = fE.charAt(fO);
                }
                fi = fI.join("");
            }
            return fj(fi);
        }
        function f4(fw, fE, fT) {
            var fi = fn(fj(fw + "::" + fE)),
                fI = fT ? fT + "_" + fi : fi;
            return fI + "_v_i_1";
        }
        var f5,
            f6,
            f7 = Object.assign || function (fw) {
                for (var fE = 1; fE < arguments.length; fE++) {
                    var fT = arguments[fE];
                    for (var fi in fT) Object.prototype.hasOwnProperty.call(fT, fi) && (fw[fi] = fT[fi]);
                }
                return fw;
            },
            f8 = Q(6),
            f9 = f8.INVOKE_HOOK,
            ff = f8.EVENT_CLOSE,
            fv = f8.EVENT_RESET,
            fA = f8.SWITCH_TYPE,
            fL = f8.SET_TYPE,
            fD = f8.SWITCH_LOAD_STATUS,
            fY = f8.UPDATE_VERIFY_STATUS,
            fy = f8.REFRESH,
            fV = f8.UPDATE_COUNTS_OF_VERIFYERROR,
            fB = f8.SET_TOKEN,
            fJ = f8.EVENT_RESET_CLASSIC,
            fX = f8.UPDATE_LINK_TIME,
            fP = f8.UPDATE_CORE_WIDTH,
            fs = Q(14),
            fr = fs.FETCH_CAPTCHA,
            fM = fs.FETCH_INTELLISENSE_CAPTCHA,
            fu = fs.VERIFY_CAPTCHA,
            fS = fs.VERIFY_INTELLISENSE_CAPTCHA,
            fq = fs.RESET_STATE,
            fG = Q(5),
            fe = fG.CAPTCHA_TYPE,
            fK = fG.DEVICE,
            fF = Q(4),
            fU = Q(3),
            fc = Q(18),
            fR = Q(10),
            fj = fR.aes,
            fn = Q(48),
            fN = Q(9),
            fQ = fN.createNetCollect,
            fl = fN.createLinkTimeCollect,
            ft = Q(7),
            fm = ft.UNPASS_ERROR,
            fk = ft.REQUEST_API_ERROR,
            fW = ft.BUSINESS_ERROR,
            fb = fF.isMobile ? fK.TOUCH : fF.supportTouch ? fK.MOUSE_TOUCH : fK.MOUSE,
            fC = {
                state: {
                    version: "2.28.0",
                    fingerprint: "",
                    config: null,
                    langPkg: null,
                    smsNew: !1,
                    captchaType: null,
                    type: "",
                    load: null,
                    verifyStatus: "",
                    token: "",
                    previousToken: "",
                    countsOfVerifyError: 0,
                    startTimestamp: null,
                    getApiCount: 0,
                    coreOffsetWidth: null
                },
                mutations: (f5 = {}, Z(f5, f9, function () {}), Z(f5, ff, function () {}), Z(f5, fv, function () {}), Z(f5, fJ, function () {}), Z(f5, fA, function (fw, fE) {
                    fw.captchaType = fE.captchaType;
                }), Z(f5, fL, function (fw, fE) {
                    fw.type = fE.captchaType;
                }), Z(f5, fD, function (fw, fE) {
                    fw.load = fE;
                }), Z(f5, fY, function (fw, fE) {
                    fw.verifyStatus = fE.verifyStatus;
                }), Z(f5, fy, function (fw) {
                    fw.load = null;
                    fw.verifyStatus = "";
                }), Z(f5, fV, function (fw, fE) {
                    fw.countsOfVerifyError = fE.counts;
                }), Z(f5, fB, function (fw, fE) {
                    fE && (fw.previousToken = fE);
                    fw.token = fE;
                }), Z(f5, fX, function (fw, fE) {
                    fE && (fw.startTimestamp = fE.startTimestamp, fw.getApiCount = fE.getApiCount);
                }), Z(f5, fP, function (fw, fE) {
                    fE && (fw.coreOffsetWidth = fE.coreOffsetWidth);
                }), f5),
                actions: (f6 = {}, Z(f6, fq, function (fw) {
                    var fE = fw.commit;
                    fE(fA, {
                        captchaType: null
                    });
                    fE(fD, null);
                    fE(fY, {
                        verifyStatus: ""
                    });
                    fE(fB, "");
                    fE(fV, {
                        counts: 0
                    });
                }), Z(f6, fr, function (fw, fE) {
                    var fT = fw.commit,
                        fi = fw.state,
                        fI = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                        fO = fi.fingerprint,
                        fo = fi.version,
                        fd = fi.$fetch,
                        fp = fi.$captchaAnticheat,
                        fZ = fi.captchaCollector,
                        fg = fi.iv,
                        fz = fi.startTimestamp,
                        fa = fi.getApiCount,
                        fH = fi.config,
                        fh = fH.apiServer,
                        fx = fH.captchaId,
                        v0 = fH.protocol,
                        v1 = fH.captchaType,
                        v2 = fH.ipv6,
                        v3 = fH.runEnv,
                        v4 = fH.group,
                        v5 = fH.scene,
                        v6 = fH.lang,
                        v7 = fH.sdkVer,
                        v8 = fH.user,
                        v9 = fH.loadVersion,
                        vf = Object.assign({
                            id: fx,
                            fp: fO,
                            https: "https" === v0,
                            type: v1 || "",
                            version: fo,
                            dpr: window.devicePixelRatio || 1,
                            dev: fb,
                            cb: f3(),
                            ipv6: v2,
                            runEnv: v3,
                            group: v4,
                            scene: v5,
                            lang: v6,
                            sdkVersion: v7 || "",
                            loadVersion: v9,
                            iv: fg,
                            user: f2(v8, 32)
                        }, fE),
                        vv = f0({
                            apiServer: fh,
                            protocol: v0
                        }, "/get");
                    fT(fD, {
                        status: "loading"
                    });
                    fp.getToken({
                        timeout: 500
                    }).then(function (vA) {
                        fd(vv, Object.assign(f7({}, vA), vf), function (vL, vD) {
                            if (vL = f1(vL, vD, vv)) {
                                var vY = new ft(vL.code, vL.message, {
                                    url: vv,
                                    api: "get",
                                    errorCode: vL.errorCode || null,
                                    errorMsg: vL.errorMsg || null
                                });
                                fI(vY);
                                fT(fD, {
                                    status: "fail",
                                    data: vY
                                });
                                return void fT(f9, {
                                    name: "onError",
                                    args: [vY]
                                });
                            }
                            fI(null, vD);
                            fz && 0 === fa && (fl(fZ, {
                                lt: new Date().getTime() - fz,
                                ct: v1
                            }), fT(fX, {
                                getApiCount: fa + 1,
                                startTimestamp: null
                            }));
                            var vy = vD.data;
                            vy.type !== fe.INTELLISENSE && vy.type !== fi.captchaType && fT(fA, {
                                captchaType: vy.type,
                                prevCaptchaType: fi.captchaType
                            });
                            fT(fL, {
                                captchaType: vy.type
                            });
                            fT(fB, vy.token);
                            fT(fD, {
                                status: "loading",
                                data: vy
                            });
                        }, {
                            onProcess: fQ(fZ)
                        });
                    });
                }), Z(f6, fM, function (fw, fE) {
                    var fT = fw.commit,
                        fi = fw.state,
                        fI = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                        fO = fi.fingerprint,
                        fo = fi.version,
                        fd = fi.$fetch,
                        fp = fi.$captchaAnticheat,
                        fZ = fi.captchaCollector,
                        fg = fi.iv,
                        fz = fi.startTimestamp,
                        fa = fi.getApiCount,
                        fH = fi.config,
                        fh = fH.apiServer,
                        fx = fH.captchaId,
                        v0 = fH.protocol,
                        v1 = fH.captchaType,
                        v2 = fH.ipv6,
                        v3 = fH.runEnv,
                        v4 = fH.group,
                        v5 = fH.scene,
                        v6 = fH.sdkVer,
                        v7 = fH.user,
                        v8 = fH.loadVersion,
                        v9 = f0({
                            apiServer: fh,
                            protocol: v0
                        }, "/get");
                    fp.getToken({
                        timeout: 500
                    }).then(function (vf) {
                        var vv = Object.assign(f7({
                            id: fx,
                            fp: fO,
                            https: "https" === v0,
                            type: v1 || "",
                            width: fE.width,
                            sizeType: fE.sizeType,
                            version: fo,
                            dpr: window.devicePixelRatio || 1,
                            dev: fb,
                            cb: f3(),
                            ipv6: v2,
                            runEnv: v3,
                            group: v4,
                            scene: v5,
                            sdkVersion: v6 || "",
                            loadVersion: v8,
                            iv: fg,
                            user: f2(v7, 32)
                        }, vf), fE);
                        fd(v9, vv, function (vA, vL) {
                            if (vA = f1(vA, vL, v9)) {
                                var vD = new ft(vA.code, vA.message, {
                                    url: v9,
                                    api: "get",
                                    errorCode: vA.errorCode || null,
                                    errorMsg: vA.errorMsg || null
                                });
                                fT(f9, {
                                    name: "onError",
                                    args: [vD]
                                });
                                return void fI(vD);
                            }
                            fT(fL, {
                                captchaType: fe.INTELLISENSE
                            });
                            fT(fB, vL.data.token);
                            fI(null, vL);
                            fz && 0 === fa && (fl(fZ, {
                                lt: new Date().getTime() - fz,
                                ct: v1
                            }), fT(fX, {
                                getApiCount: fa + 1,
                                startTimestamp: null
                            }));
                        }, {
                            onProcess: fQ(fZ)
                        });
                    });
                }), Z(f6, fS, function (fw, fE, fT) {
                    var fi = fw.commit,
                        fI = fw.state,
                        fO = fI.version,
                        fo = fI.type,
                        fd = fI.$fetch,
                        fp = fI.captchaCollector,
                        fZ = fI.browserFeature,
                        fg = fI.iv,
                        fz = fI.fingerprint,
                        fa = fI.config,
                        fH = fa.apiServer,
                        fh = fa.captchaId,
                        fx = fa.protocol,
                        v0 = fa.user,
                        v1 = fa.extraData,
                        v2 = fa.runEnv,
                        v3 = fa.zoneId,
                        v4 = fa.sdkVer,
                        v5 = fa.loadVersion,
                        v6 = Object.assign({
                            id: fh,
                            version: fO,
                            cb: f3(),
                            user: f2(v0, 32),
                            extraData: f2(v1),
                            bf: fZ,
                            runEnv: v2,
                            sdkVersion: v4,
                            loadVersion: v5,
                            iv: fg
                        }, fE),
                        v7 = f0({
                            apiServer: fH,
                            protocol: fx
                        }, "/check");
                    fd(v7, v6, function (v8, v9) {
                        if (v8 = f1(v8, v9, v7)) {
                            var vf = f4(fU.getIn(v9, "data.validate", ""), fz, v3);
                            v8 = new ft(v8.code, v8.message, {
                                url: v7,
                                type: fo,
                                token: v6.token,
                                validate: vf,
                                errorCode: v8.errorCode || null,
                                errorMsg: v8.errorMsg || null
                            });
                        } else {
                            fU.getIn(v9, "data.result") || (v8 = new ft(fm, "Failed to verify captcha.", {
                                url: v7,
                                type: fo,
                                token: v6.token
                            }));
                        }
                        if (v8) {
                            fi(f9, {
                                name: "onVerify",
                                args: [v8]
                            });
                        } else {
                            var vv = f4(v9.data.validate, fz, v3);
                            fi(f9, {
                                name: "onVerify",
                                args: [null, {
                                    validate: vv
                                }]
                            });
                        }
                        fT && fT(v8, v9);
                    }, {
                        onProcess: fQ(fp, {
                            token: v6.token
                        })
                    });
                }), Z(f6, fu, function (fw, fE) {
                    var fT = fw.commit,
                        fi = fw.state,
                        fI = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                        fO = fi.fingerprint,
                        fo = fi.captchaType,
                        fd = fi.version,
                        fp = fi.verifyStatus,
                        fZ = fi.countsOfVerifyError,
                        fg = fi.$fetch,
                        fz = fi.type,
                        fa = fi.captchaCollector,
                        fH = fi.browserFeature,
                        fh = fi.iv,
                        fx = fi.config,
                        v0 = fx.apiServer,
                        v1 = fx.captchaId,
                        v2 = fx.protocol,
                        v3 = fx.user,
                        v4 = fx.extraData,
                        v5 = fx.runEnv,
                        v6 = fx.zoneId,
                        v7 = fx.sdkVer,
                        v8 = fx.loadVersion,
                        v9 = fE.token,
                        vf = fE.data,
                        vv = fE.width,
                        vA = f0({
                            apiServer: v0,
                            protocol: v2
                        }, "/check");
                    fT(fY, {
                        verifyStatus: "verifying"
                    });
                    var vL = function (vD, vY) {
                        var vy = vY && vY.data;
                        if (vD = f1(vD, vY, vA), !(["success", "error"].indexOf(fp) > -1)) {
                            if (vD || !vy.result && fo !== fe.SMS) {
                                var vV = vD ? vD.message : "Failed to verify captcha.",
                                    vB = vD ? vD.code : fm,
                                    vJ = vD ? vD.errorCode : null,
                                    vX = vD ? vD.errorMsg : null,
                                    vP = f4(fU.getIn(vY, "data.validate", ""), fO, v6);
                                vD = new ft(vB, vV, {
                                    url: vA,
                                    token: v9,
                                    type: fz,
                                    validate: vP,
                                    counts: fZ + 1,
                                    errorCode: vJ,
                                    errorMsg: vX
                                });
                                fT(fY, {
                                    verifyStatus: "error",
                                    error: vD
                                });
                                fT(fV, {
                                    counts: fZ + 1
                                });
                                fT(f9, {
                                    name: "onVerify",
                                    args: [vD]
                                });
                                return void fI(vD);
                            }
                            if (vy.result) {
                                var vs = f4(vy.validate, fO, v6);
                                fT(fY, {
                                    verifyStatus: "success",
                                    validate: vy.validate
                                });
                                fT(f9, {
                                    name: "onVerify",
                                    args: [null, {
                                        validate: vs
                                    }]
                                });
                                fI(null, vY);
                            }
                        }
                    };
                    fg(vA, {
                        id: v1,
                        token: v9,
                        data: vf,
                        width: vv,
                        type: fo || "",
                        version: fd,
                        cb: f3(),
                        user: f2(v3, 32),
                        extraData: f2(v4),
                        bf: fH,
                        runEnv: v5,
                        sdkVersion: v7 || "",
                        loadVersion: v8,
                        iv: fh
                    }, vL, {
                        onProcess: fQ(fa, {
                            token: v9
                        })
                    });
                }), f6)
            };
        J.exports = fC;
    }, function (A, L, D) {
        L = A.exports = D(30)();
        L.push([A.id, ".yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon,.yidun.yidun--light .yidun_tips__answer,.yidun.yidun--light .yidun_tips__before,.yidun.yidun--light .yidun_tips__content,.yidun_intellisense--light .yidun_classic-tips .yidun_tips__icon,.yidun_intellisense--light .yidun_intelli-icon,.yidun_popup.yidun_popup--light .yidun_modal,.yidun_popup.yidun_popup--light .yidun_modal__before,.yidun_popup.yidun_popup--light .yidun_modal__sibling,.yidun_popup.yidun_popup--light .yidun_modal__title{display:inline-block;*display:inline;zoom:1;vertical-align:top}.yidun,.yidun_popup{-webkit-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;text-size-adjust:100%!important;-moz-text-size-adjust:100%!important}.yidun{-webkit-tap-highlight-color:transparent}.yidun *{box-sizing:border-box}.yidun :focus-visible{outline:2px solid #4997fd}.panel_ease_top-enter,.panel_ease_top-leave-active{opacity:0;transform:translateY(20px)}.panel_ease_bottom-enter,.panel_ease_bottom-leave-active{opacity:0;transform:translateY(-20px)}.panel_ease_bottom-enter-active,.panel_ease_bottom-leave-active,.panel_ease_top-enter-active,.panel_ease_top-leave-active{transition:all .2s linear;pointer-events:none}.popup_scale-enter,.popup_scale-leave-active{opacity:0;transform:scale(0)}.popup_scale-enter-active{transition:all .3s cubic-bezier(.76,.01,.35,1.56)}.popup_scale-leave-active{transition:all .2s ease-out}.popup_ease-enter{opacity:0;transform:translateY(-20px)}.popup_ease-enter-active{transition:opacity .3s linear,transform .3s linear}.popup_ease-leave-active{opacity:0;transform:translateY(-20px);transition:all .2s ease-out}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ball-scale-multiple{0%{transform:scale(.22);opacity:0}5%{opacity:1}to{transform:scale(1);opacity:0}}@keyframes bright{0%{opacity:.5}to{opacity:1}}.yidun_cover-frame{position:absolute;top:0;left:0;width:100%;height:100%;border:0;opacity:0;filter:alpha(opacity=0)}.yidun.yidun--light{position:relative;margin:auto;font-size:14px;-ms-touch-action:none;touch-action:none}.yidun.yidun--light img{pointer-events:none}.yidun.yidun--light .yidun_avoid-canvas,.yidun.yidun--light .yidun_avoid-front,.yidun.yidun--light .yidun_jigsaw,.yidun.yidun--light .yidun_slide_indicator,.yidun.yidun--light .yidun_slider{display:none}.yidun.yidun--light.yidun--jigsaw .yidun_jigsaw,.yidun.yidun--light.yidun--jigsaw .yidun_slide_indicator,.yidun.yidun--light.yidun--jigsaw .yidun_slider{display:block}.yidun.yidun--light.yidun--jigsaw .yidun_tips__content{width:100%}.yidun.yidun--light.yidun--jigsaw .yidun_tips{padding-left:40px}.yidun.yidun--light .yidun_jigsaw{position:absolute;left:0;top:0;width:auto;height:100%;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_icon-point{position:absolute;width:26px;height:33px;cursor:pointer;background-repeat:no-repeat}.yidun.yidun--light .yidun_icon-point.yidun_point-1{background-image:url(" + D(1) + ");background-position:0 -997px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-1{background-image:url(" + D(2) + ");background-position:0 -994px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-2{background-image:url(" + D(1) + ");background-position:0 -1035px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-2{background-image:url(" + D(2) + ");background-position:0 -1032px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + D(1) + ");background-position:0 -1073px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + D(2) + ");background-position:0 -1070px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-4{background-image:url(" + D(1) + ");background-position:0 -1111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-4{background-image:url(" + D(2) + ");background-position:0 -1108px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-5{background-image:url(" + D(1) + ");background-position:0 -1149px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-5{background-image:url(" + D(2) + ");background-position:0 -1146px;background-size:40px 1515px}}.yidun.yidun--light.yidun--space .yidun_icon-point{width:29px;height:29px;background-image:url(" + D(1) + ");background-position:0 -646px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--space .yidun_icon-point{background-image:url(" + D(2) + ");background-position:0 -643px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_icon-point{cursor:default}.yidun.yidun--light .yidun_inference{display:none;position:absolute;width:25%;height:50%;overflow:hidden;box-sizing:border-box;background-color:transparent}.yidun.yidun--light .yidun_inference .yidun_inference__border{display:block;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;border:1px solid #fff;box-sizing:border-box;background:transparent;border-radius:inherit;transition:border .2s ease-out 0s}.yidun.yidun--light .yidun_inference.yidun_inference--0,.yidun.yidun--light .yidun_inference.yidun_inference--0 .yidun_inference__img{top:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--1{top:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--1 .yidun_inference__img{top:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--2{top:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--2 .yidun_inference__img{top:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--3{top:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--3 .yidun_inference__img{top:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--4,.yidun.yidun--light .yidun_inference.yidun_inference--4 .yidun_inference__img{bottom:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--5{bottom:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--5 .yidun_inference__img{bottom:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--6{bottom:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--6 .yidun_inference__img{bottom:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--7{bottom:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--7 .yidun_inference__img{bottom:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light .yidun_inference:hover .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light .yidun_inference.yidun_inference--drag,.yidun.yidun--light .yidun_inference:hover{background-color:#fff}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__img,.yidun.yidun--light .yidun_inference:hover .yidun_inference__img{opacity:.3;filter:alpha(opacity=30)}.yidun.yidun--light .yidun_inference:hover{cursor:pointer}.yidun.yidun--light .yidun_inference.yidun_inference--drag{z-index:1;box-shadow:0 2px 6px 30%}.yidun.yidun--light .yidun_inference.yidun_inference--origin .yidun_inference__border{background-color:#d8d8d8}.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border{background:transparent}.yidun.yidun--light .yidun_inference__img{position:absolute;width:400%;height:200%;transition:opacity .2s ease-out}.yidun.yidun--light.yidun--inference .yidun_inference{display:block;background-color:#fff}.yidun.yidun--light.yidun--inference .yidun_bg-img{display:none}.yidun.yidun--light .yidun_avoid-front{position:absolute;z-index:10;left:0;bottom:0;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_avoid-canvas{position:absolute;left:0;top:0;pointer-events:none}.yidun.yidun--light.yidun--avoid .yidun_avoid-canvas,.yidun.yidun--light.yidun--avoid .yidun_avoid-front,.yidun.yidun--light.yidun--sms .yidun_smsbox{display:block}.yidun.yidun--light.yidun--sms .yidun_smsbox~.yidun_bg-img{display:none}.yidun.yidun--light.yidun--float .yidun_panel{display:none;position:absolute;left:0;width:100%;z-index:999}.yidun.yidun--light .yidun_panel{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:1}.yidun.yidun--light .yidun_panel-placeholder{pointer-events:auto;position:relative;padding-top:50%}.yidun.yidun--light .yidun_bgimg{pointer-events:auto;position:absolute;top:0;left:0;width:100%;height:100%}.yidun.yidun--light .yidun_bgimg .yidun_bg-img{vertical-align:top;width:100%}.yidun.yidun--light .yidun_smsbox{width:100%;height:100%;text-align:left;font-size:0;background:#f8f9fb;background:linear-gradient(103.18deg,#dae3f6 7.63%,#c8d9fa 94.65%);display:none;position:relative;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode{width:120px;height:100px;padding:0 10px;position:absolute;left:0;top:0;bottom:0;margin:auto 0;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode .yidun_smsbox-qrcode--img{width:100%;height:100%;padding:2px;background:#fff}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text{position:absolute;left:0;top:0;bottom:0;right:0;padding:0 0 0 120px;font-size:14px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;white-space:nowrap;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide{display:inline-block;vertical-align:middle;width:96%;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--qr{margin-bottom:8px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + D(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{background-image:url(" + D(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper{display:none;padding:9% 20px 0;font-size:14px;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-guide{margin-bottom:8px;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn{text-align:center;margin-bottom:10px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn>a{display:inline-block;padding:8px 16px;background:#176ae5;color:#fff;text-decoration:none;border-radius:4px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual{width:100%;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + D(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{background-image:url(" + D(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;font-size:14px;padding:0 16px;display:none;white-space:nowrap}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper{display:inline-block;vertical-align:middle;width:100%;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit{margin-bottom:8px;line-height:26px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-title{display:inline-block;width:66px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-content{font-size:24px;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send{margin-bottom:10px;display:table}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--edit-title{min-width:66px;display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--send-content{display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + D(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{background-image:url(" + D(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-manual{display:block}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper{display:block}.yidun.yidun--light.yidun--avoid .yidun_bgimg,.yidun.yidun--light.yidun--avoid .yidun_panel-placeholder,.yidun.yidun--light.yidun--icon_point .yidun_bgimg,.yidun.yidun--light.yidun--icon_point .yidun_panel-placeholder,.yidun.yidun--light.yidun--inference .yidun_bgimg,.yidun.yidun--light.yidun--inference .yidun_panel-placeholder,.yidun.yidun--light.yidun--point .yidun_bgimg,.yidun.yidun--light.yidun--point .yidun_panel-placeholder,.yidun.yidun--light.yidun--space .yidun_bgimg,.yidun.yidun--light.yidun--space .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_group .yidun_bgimg,.yidun.yidun--light.yidun--word_group .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_order .yidun_bgimg,.yidun.yidun--light.yidun--word_order .yidun_panel-placeholder{overflow:hidden}.yidun.yidun--light .yidun_voice{display:none}.yidun.yidun--light.yidun--voice .yidun_voice{display:block;width:100%;height:100%;overflow:hidden;position:relative}.yidun.yidun--light.yidun--voice .yidun_top,.yidun.yidun--light.yidun--voice .yidun_top__audio{display:none}.yidun.yidun--light.yidun--voice .yidun_bgimg{background-color:#f8f9fb;border:1px solid #e6e7eb;padding:0 8px}.yidun.yidun--light.yidun--voice .yidun_avoid-front,.yidun.yidun--light.yidun--voice .yidun_bg-img,.yidun.yidun--light.yidun--voice .yidun_jigsaw{display:none}.yidun.yidun--light.yidun--voice .yidun_control{background-color:#e9edf3;border-color:#e9edf3;cursor:pointer}.yidun.yidun--light.yidun--voice .yidun_control[role=button] .yidun_tips{color:#45494c}.yidun.yidun--light.yidun--voice .yidun_tips,.yidun.yidun--light.yidun--voice .yidun_tips .yidun_tips__content{font-size:inherit}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio{margin-bottom:6px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__btns{margin-top:4px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__play,.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__refresh{width:40px;height:40px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__input{padding:0}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_audio{margin-bottom:2px}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_voice__btns{margin-top:0}.yidun.yidun--light .yidun_audio{height:40px;margin-bottom:24px;position:relative;text-align:center}.yidun.yidun--light .yidun_audio__wave{pointer-events:none;position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:-1;white-space:nowrap;height:100%;line-height:40px;font-size:0}.yidun.yidun--light .yidun_wave__item{display:inline-block;width:4px;height:10px;border-radius:3px;position:relative;overflow:hidden;background-color:#dfe6f4;vertical-align:middle;margin:0 3px}.yidun.yidun--light .yidun_wave__item.yidun_wave__item-light .yidun_wave__inner{transform:translateX(0);transition:transform .35s linear}.yidun.yidun--light .yidun_wave__inner{position:absolute;top:0;left:0;width:4px;height:100%;border-radius:3px;transform:translateX(-4px);background-color:#1991fa}.yidun.yidun--light .yidun_wave-1{height:12px}.yidun.yidun--light .yidun_wave-2{height:18px}.yidun.yidun--light .yidun_wave-3{height:24px}.yidun.yidun--light .yidun_wave-4,.yidun.yidun--light .yidun_wave-5{height:30px}.yidun.yidun--light .yidun_wave-6{height:24px}.yidun.yidun--light .yidun_wave-7{height:18px}.yidun.yidun--light .yidun_wave-8{height:12px}.yidun.yidun--light .yidun_wave-9,.yidun.yidun--light .yidun_wave-10{height:6px}.yidun.yidun--light .yidun_wave-11{height:12px}.yidun.yidun--light .yidun_wave-12{height:18px}.yidun.yidun--light .yidun_wave-13{height:24px}.yidun.yidun--light .yidun_wave-14,.yidun.yidun--light .yidun_wave-15{height:30px}.yidun.yidun--light .yidun_wave-16{height:24px}.yidun.yidun--light .yidun_wave-17{height:18px}.yidun.yidun--light .yidun_wave-18{height:12px}.yidun.yidun--light .yidun_wave-19,.yidun.yidun--light .yidun_wave-20{height:6px}.yidun.yidun--light .yidun_wave-21{height:12px}.yidun.yidun--light .yidun_wave-22{height:18px}.yidun.yidun--light .yidun_wave-23{height:24px}.yidun.yidun--light .yidun_wave-24,.yidun.yidun--light .yidun_wave-25{height:30px}.yidun.yidun--light .yidun_wave-26{height:24px}.yidun.yidun--light .yidun_wave-27{height:18px}.yidun.yidun--light .yidun_wave-28{height:12px}.yidun.yidun--light .yidun_wave-29,.yidun.yidun--light .yidun_wave-30{height:6px}.yidun.yidun--light .yidun_audio__play,.yidun.yidun--light .yidun_audio__refresh{width:40px;height:40px;background-color:#0776f8;box-shadow:0 3px 16px rgba(73,103,180,.32);border:none;outline:none;font-size:0;vertical-align:middle;border-radius:50%;margin:0 16px}.yidun.yidun--light .yidun_audio__play:hover,.yidun.yidun--light .yidun_audio__refresh:hover{background-color:#1991fa;cursor:pointer}.yidun.yidun--light .yidun_audio__play:before,.yidun.yidun--light .yidun_audio__refresh:before{content:\"\";width:20px;height:20px;display:block;margin:auto}.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + D(1) + ");background-position:0 -274px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + D(2) + ");background-position:0 -271px;background-size:40px 1515px}}.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + D(1) + ");background-position:0 -299px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + D(2) + ");background-position:0 -296px;background-size:40px 1515px}}.yidun.yidun--light .yidun_audio__source,.yidun.yidun--light .yidun_audio__txt{display:none}.yidun.yidun--light .yidun_voice__inner{position:absolute;top:50%;width:100%;transform:translateY(-50%)}.yidun.yidun--light .yidun_voice__input{-moz-appearance:none;width:calc(100% - 4px);height:32px;line-height:30px;font-size:14px;border:1px solid;border-radius:2px;-webkit-appearance:none;text-indent:4px;border-color:#e6e7eb;background-color:#fff;color:#44494a;padding:2px}.yidun.yidun--light .yidun_voice__input:-ms-input-placeholder{color:#c7c7c7}.yidun.yidun--light .yidun_voice__input::placeholder{color:#c7c7c7}.yidun.yidun--light .yidun_voice__input:focus{border-color:#4997fd}.yidun.yidun--light .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--light .yidun_voice__back,.yidun.yidun--light .yidun_voice__refresh{color:#45494c}.yidun.yidun--light .yidun_voice__back:before,.yidun.yidun--light .yidun_voice__refresh:before{content:\"\";display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-position:50%;vertical-align:middle;margin-right:4px}.yidun.yidun--light .yidun_voice__back span,.yidun.yidun--light .yidun_voice__refresh span{vertical-align:middle}.yidun.yidun--light .yidun_voice__refresh:before{background-image:url(" + D(1) + ");background-position:0 -324px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__refresh:before{background-image:url(" + D(2) + ");background-position:0 -321px;background-size:40px 1515px}}.yidun.yidun--light .yidun_voice__back,.yidun.yidun--light .yidun_voice__refresh{border:none;background:transparent;font-size:12px;line-height:20px;padding:0;cursor:pointer;vertical-align:middle}.yidun.yidun--light .yidun_voice__back{display:none}.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + D(1) + ");background-position:0 -349px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + D(2) + ");background-position:0 -346px;background-size:40px 1515px}}.yidun.yidun--light .yidun_voice__right{float:right}.yidun.yidun--light .yidun_loadbox{display:none;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-image:url(" + D(31) + ");background-color:#f7f9fa;background-position:50%;background-size:cover}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_loadbox{background-image:url(" + D(32) + ")}}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner{position:relative;top:50%;margin-top:-25px}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:32px;height:32px;background-repeat:no-repeat}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{display:block;line-height:20px;color:#45494c}.yidun.yidun--light .yidun_top{position:absolute;right:0;top:0;max-width:98px;*max-width:68px;z-index:2;background-color:rgba(0,0,0,.12);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top:hover{background-color:rgba(0,0,0,.2);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top__right{float:right}.yidun.yidun--light .yidun_refresh,.yidun.yidun--light .yidun_top__audio{width:30px;height:30px;margin-left:4px;cursor:pointer;font-size:0;vertical-align:top;text-indent:-9999px;text-transform:capitalize;border:none;background-color:transparent}.yidun.yidun--light .yidun_refresh{float:left;background-image:url(" + D(1) + ");background-position:0 -680px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh{background-image:url(" + D(2) + ");background-position:0 -677px;background-size:40px 1515px}}.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -715px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -712px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio{float:right;background-image:url(" + D(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_top__audio{background-image:url(" + D(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -785px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -782px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -680px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -677px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback{float:left;display:block;width:30px;height:30px;cursor:pointer;background-image:url(" + D(1) + ");background-position:0 -615px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_feedback{background-image:url(" + D(2) + ");background-position:0 -612px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback:hover{background-image:url(" + D(1) + ");background-position:0 -820px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_feedback:hover{background-image:url(" + D(2) + ");background-position:0 -817px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback_txt{font-size:0;clip:rect(0,0,0,0);-webkit-clip-path:inset(0 0 99.9% 99.9%);clip-path:inset(0 0 99.9% 99.9%)}.yidun.yidun--light .yidun_control{position:relative;border:1px solid #e4e7eb;background-color:#f7f9fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator{border-color:#1991fa;background-color:#d1e9fe}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider{background-color:#1991fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 0;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 0;background-size:40px 1515px}}.yidun.yidun--light .yidun_slide_indicator{position:absolute;top:-1px;left:-1px;width:0;border:1px solid transparent}.yidun.yidun--light .yidun_slider{position:absolute;top:0;left:0;height:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.3);cursor:pointer;transition:background .2s linear}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover{background-color:#1991fa}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 0;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 0;background-size:40px 1515px}}.yidun.yidun--light .yidun_slider .yidun_slider__icon{position:absolute;top:50%;margin-top:-6px;left:50%;margin-left:-6px;width:14px;height:10px;background-image:url(" + D(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slider img.yidun_slider__icon{width:100%;height:100%;top:0;left:0;margin:0;background-image:none!important}.yidun.yidun--light .yidun_tips{text-align:center;color:#45494c;height:100%;white-space:nowrap;font-size:0}.yidun.yidun--light .yidun_tips .yidun_sms-counter{color:#1991fa}.yidun.yidun--light .yidun_tips__before{height:100%;width:0;vertical-align:middle}.yidun.yidun--light .yidun_tips__content{display:inline-block;vertical-align:middle;white-space:normal;font-size:14px;line-height:18px}.yidun.yidun--light .yidun_tips__text{vertical-align:middle;word-break:break-word}.yidun.yidun--light .yidun_tips__answer{vertical-align:middle;font-weight:700}.yidun.yidun--light .yidun_tips__answer.hide{display:none}.yidun.yidun--light.yidun--point .yidun_tips__point{display:inline}.yidun.yidun--light.yidun--point .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__answer,.yidun.yidun--light.yidun--space .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__point,.yidun.yidun--light.yidun--word_group .yidun_tips__answer,.yidun.yidun--light.yidun--word_group .yidun_tips__img,.yidun.yidun--light.yidun--word_group .yidun_tips__point,.yidun.yidun--light.yidun--word_order .yidun_tips__answer,.yidun.yidun--light.yidun--word_order .yidun_tips__img,.yidun.yidun--light.yidun--word_order .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__answer{width:80px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--icon_point .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:400%}.yidun.yidun--light.yidun--avoid .yidun_tips__answer{width:26.667px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--avoid .yidun_tips__point{display:none}.yidun.yidun--light.yidun--avoid .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:1200%}.yidun.yidun--light.yidun--loadfail .yidun_bgimg,.yidun.yidun--light.yidun--loading .yidun_bgimg{display:none}.yidun.yidun--light.yidun--loadfail .yidun_loadbox,.yidun.yidun--light.yidun--loading .yidun_loadbox{display:block}.yidun.yidun--light.yidun--loadfail .yidun_slider,.yidun.yidun--light.yidun--loading .yidun_slider{cursor:not-allowed}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover,.yidun.yidun--light.yidun--loading .yidun_slider:hover{background-color:#fff}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loadfail .yidun_top,.yidun.yidun--light.yidun--loading .yidun_top{display:block}.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -960px;background-size:40px 1518px;animation:loading .8s linear infinite}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -957px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loading .yidun_refresh,.yidun.yidun--light.yidun--loading .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--loading .yidun_control{border-color:#e4e7eb;background-color:#f7f9fa}.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -855px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -852px;background-size:40px 1515px}}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_control,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_control,.yidun.yidun--light.yidun--inference.yidun--button .yidun_control,.yidun.yidun--light.yidun--point.yidun--button .yidun_control,.yidun.yidun--light.yidun--space.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_control{cursor:pointer;background:#f7f9fa;background:linear-gradient(180deg,#fff 0,#ebedf0 87%)}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon{margin-right:8px;width:20px;height:20px;vertical-align:middle;background-image:url(" + D(1) + ");background-position:0 -374px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -371px;background-size:40px 1515px}}.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference--target .yidun_inference__img{animation:bright .6s ease-in .3s}.yidun.yidun--light.yidun--success .yidun_tips{color:#52ccba}.yidun.yidun--light.yidun--success .yidun_refresh,.yidun.yidun--light.yidun--success .yidun_top__audio{display:none}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider{background-color:#52ccba}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -30px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -30px;background-size:40px 1515px}}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--success.yidun--inference .yidun_control,.yidun.yidun--light.yidun--success.yidun--point .yidun_control,.yidun.yidun--light.yidun--success.yidun--sms .yidun_control,.yidun.yidun--light.yidun--success.yidun--space .yidun_control,.yidun.yidun--light.yidun--success.yidun--voice .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_control{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:17px;height:12px;vertical-align:middle;background-image:url(" + D(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -77px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error .yidun_tips{color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slide_indicator,.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slider{display:none}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_tips{padding-left:0}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider{background-color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:12px;height:12px;background-image:url(" + D(1) + ");background-position:0 -94px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -94px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider img.yidun_slider__icon{width:100%;height:100%}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--error.yidun--inference .yidun_control,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--error.yidun--point .yidun_control,.yidun.yidun--light.yidun--error.yidun--sms .yidun_control,.yidun.yidun--light.yidun--error.yidun--space .yidun_control,.yidun.yidun--light.yidun--error.yidun--voice .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_control{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle;background-image:url(" + D(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -111px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips:hover{cursor:pointer}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference{cursor:default}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__border{content:\"\";border-color:#fff;border-width:1px}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__img{opacity:1;filter:alpha(opacity=100)}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--swap .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target{background-color:#000}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__border{border:2px solid #2c6eff}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__img{opacity:.4;filter:alpha(opacity=40)}.yidun.yidun--light.yidun--voice.yidun--error .yidun_control,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--success .yidun_control,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_control,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__refresh{cursor:not-allowed}.yidun.yidun--light.yidun--rtl{direction:rtl}.yidun.yidun--light.yidun--rtl .yidun_top{left:0;right:auto}.yidun.yidun--light.yidun--rtl .yidun_feedback{float:right;margin-left:4px;background-image:url(" + D(1) + ");background-position:0 -890px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_feedback{background-image:url(" + D(2) + ");background-position:0 -887px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_feedback:hover{background-image:url(" + D(1) + ");background-position:0 -925px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_feedback:hover{background-image:url(" + D(2) + ");background-position:0 -922px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_top__right{float:left}.yidun.yidun--light.yidun--rtl .yidun_top__audio{float:left;margin-left:0}.yidun.yidun--light.yidun--rtl .yidun_tips__img{top:-181px}.yidun.yidun--light.yidun--rtl .yidun_voice__right{float:left}.yidun.yidun--light.yidun--rtl .yidun_voice__refresh{float:right}.yidun.yidun--light.yidun--rtl .yidun_audio__play:before{background-image:url(" + D(1) + ");background-position:0 -399px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_audio__play:before{background-image:url(" + D(2) + ");background-position:0 -396px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back{margin-left:4px}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + D(1) + ");background-position:0 -424px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + D(2) + ");background-position:0 -421px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before,.yidun.yidun--light.yidun--rtl .yidun_voice__refresh:before{margin-left:2px;margin-right:0}.yidun.yidun--light.yidun--rtl .yidun_wave__inner{transform:translateX(4px)}.yidun.yidun--light.yidun--disable-focus-outline .yidun_control,.yidun.yidun--light.yidun--disable-focus-outline .yidun_feedback,.yidun.yidun--light.yidun--disable-focus-outline .yidun_refresh,.yidun.yidun--light.yidun--disable-focus-outline .yidun_top__audio,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__back,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__input,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__refresh{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun.yidun--light.yidun--rtl.yidun--avoid .yidun_tips__img{top:-161px}.yidun.yidun--size-medium{font-size:18px}.yidun.yidun--size-medium .yidun_tips__content{font-size:18px;line-height:19px}.yidun.yidun--size-medium .yidun_top{max-width:116px}.yidun.yidun--size-medium .yidun_refresh,.yidun.yidun--size-medium .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_top__audio{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback{width:36px;height:36px;background-image:url(" + D(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback{background-image:url(" + D(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + D(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + D(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + D(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + D(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + D(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play,.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play:before{background-image:url(" + D(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_audio__play:before{background-image:url(" + D(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + D(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + D(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large{font-size:20px}.yidun.yidun--size-large .yidun_tips__content{font-size:20px;line-height:21px}.yidun.yidun--size-large .yidun_top{max-width:116px}.yidun.yidun--size-large .yidun_refresh,.yidun.yidun--size-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-large .yidun_refresh{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_feedback{width:36px;height:36px;background-image:url(" + D(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_feedback{background-image:url(" + D(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_feedback:hover{background-image:url(" + D(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_feedback:hover{background-image:url(" + D(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + D(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + D(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + D(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-large.yidun--loading .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loading .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + D(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + D(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + D(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + D(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-large.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large,.yidun.yidun--size-x-large .yidun_tips__content{font-size:24px}.yidun.yidun--size-x-large .yidun_top{max-width:116px}.yidun.yidun--size-x-large .yidun_refresh,.yidun.yidun--size-x-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_top__audio{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback{width:36px;height:36px;background-image:url(" + D(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_feedback{background-image:url(" + D(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback:hover{background-image:url(" + D(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_feedback:hover{background-image:url(" + D(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + D(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + D(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + D(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + D(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + D(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + D(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + D(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + D(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + D(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + D(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + D(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + D(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + D(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + D(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;text-align:center}.yidun_popup.yidun_popup--light .yidun_popup__mask{-ms-touch-action:none;touch-action:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;transition:opacity .3s linear;will-change:opacity}.yidun_popup.yidun_popup--light .yidun_modal{position:relative;box-sizing:border-box;border-radius:2px;border:1px solid #e4e7eb;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.3);-ms-touch-action:none;touch-action:none}.yidun_popup.yidun_popup--light .yidun_modal__wrap{height:100%;width:100%}.yidun_popup.yidun_popup--light .yidun_modal__subwrap{height:100%;width:100%;white-space:nowrap}.yidun_popup.yidun_popup--light .yidun_modal__sibling{width:0;height:100%}.yidun_popup.yidun_popup--light .yidun_modal__header{padding:0 15px;height:50px;text-align:left;font-size:0;color:#45494c;border-bottom:1px solid #e4e7eb;white-space:nowrap;position:relative}.yidun_popup.yidun_popup--light .yidun_modal__before{width:0;height:100%;vertical-align:middle}.yidun_popup.yidun_popup--light .yidun_modal__title{font-size:16px;line-height:20px;vertical-align:middle;white-space:normal}.yidun_popup.yidun_popup--light .yidun_modal__close{position:absolute;top:0;right:9px;width:24px;height:100%;text-align:center;border:none;background:transparent;padding:0;cursor:pointer}.yidun_popup.yidun_popup--light .yidun_modal__close:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;font-size:0}.yidun_popup.yidun_popup--light .yidun_modal__close .yidun_icon-close{display:inline-block;width:11px;height:11px;font-size:0;text-indent:-9999px;text-transform:capitalize;margin:auto;vertical-align:middle;background-image:url(" + D(1) + ");background-position:0 -45px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light .yidun_modal__close .yidun_icon-close{background-image:url(" + D(2) + ");background-position:0 -45px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light .yidun_modal__close:hover .yidun_icon-close{background-image:url(" + D(1) + ");background-position:0 -61px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light .yidun_modal__close:hover .yidun_icon-close{background-image:url(" + D(2) + ");background-position:0 -61px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light .yidun_modal__body{padding:15px}.yidun_popup.yidun_popup--light .yidun_modal__body .yidun{*margin:0}.yidun_popup.yidun_popup--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;*top:-50%}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:table;*position:relative}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:table-cell;vertical-align:middle;*height:auto;*position:absolute;*top:50%;*left:0}@supports (display:flex){.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;margin:auto}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:block}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}}.yidun_popup.yidun_popup--append{position:absolute}.yidun_popup.yidun_popup--rtl{direction:rtl}.yidun_popup.yidun_popup--rtl .yidun_modal__header{text-align:right;padding:0 15px}.yidun_popup.yidun_popup--rtl .yidun_modal__close{left:9px;right:auto}.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_control,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_feedback,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_top__audio,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__back,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__input,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal__close{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun_popup.yidun_popup--size-medium,.yidun_popup.yidun_popup--size-medium .yidun_modal__title{font-size:18px}.yidun_popup.yidun_popup--size-large,.yidun_popup.yidun_popup--size-large .yidun_modal__title{font-size:20px}.yidun_popup.yidun_popup--size-x-large,.yidun_popup.yidun_popup--size-x-large .yidun_modal__title{font-size:24px}.yidun_intellisense--light{position:relative}.yidun_intellisense--light *{box-sizing:border-box}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{cursor:default}.yidun_intellisense--light .yidun_intelli-control{position:relative;height:40px;font-size:14px;cursor:pointer;border-radius:2px;border:1px solid #e4e7eb;background-color:#f7f9fa;overflow:hidden;outline:none}.yidun_intellisense--light .yidun_intelli-tips{text-align:center;color:#45494c}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon{background-color:#1991fa;box-shadow:0 2px 6px 1px rgba(25,145,250,.5)}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + D(1) + ");background-position:0 -207px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + D(2) + ");background-position:0 -204px;background-size:40px 1515px}}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light .yidun_intelli-icon{position:relative;margin-right:5px;width:28px;height:28px;vertical-align:middle;border-radius:50%;background-color:#fff;box-shadow:0 2px 8px 1px rgba(188,196,204,.5);transition:all .2s linear}.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:15px;height:17px;background-image:url(" + D(1) + ");background-position:0 -229px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{background-image:url(" + D(2) + ");background-position:0 -226px;background-size:40px 1515px}}.yidun_intellisense--light .yidun_intelli-icon img.yidun_logo{width:100%;height:100%;top:0;left:0;margin:0;border-radius:50%;background-image:none!important}.yidun_intellisense--light .yidun_intelli-text{line-height:38px;vertical-align:middle;transition:all .2s linear}.yidun_intellisense--light .yidun_classic-tips{display:none;text-align:center}.yidun_intellisense--light .yidun_classic-tips .yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle}.yidun_intellisense--light .yidun_classic-tips .yidun_tips__text{line-height:38px;vertical-align:middle}.yidun_intellisense--light .yidun_classic-container{position:absolute;bottom:0;left:0;width:100%;z-index:1000}.yidun_intellisense--light .yidun_classic-wrapper{display:none;width:100%;padding:9px;border:1px solid #e4e7eb;border-radius:2px;background-color:#fff}.yidun_intellisense--light .yidun_classic-wrapper--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon{background-color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon .yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon .yidun_logo{background-image:url(" + D(1) + ");background-position:0 -207px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon .yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon .yidun_logo{background-image:url(" + D(2) + ");background-position:0 -204px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-text,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple{position:absolute;top:50%;left:50%;transform:translateY(-80px)}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(2){animation-delay:-1.2s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(3){animation-delay:-.6s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div{position:absolute;box-shadow:inset 0 0 40px rgba(25,145,250,.5);border-radius:100%;animation-fill-mode:both;left:-80px;top:0;opacity:0;width:160px;height:160px;animation:ball-scale-multiple 1.8s 0s linear infinite}.yidun_intellisense--light.yidun_intellisense--loading .yidun_logo{display:none}.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-loading{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:16px;height:16px;border-radius:50%;border-width:2px;border-style:solid;border-color:#fff #fff transparent;animation:loading .75s linear infinite;background-position:0 0}.yidun_intellisense--light.yidun_intellisense--error .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-tips{display:none}.yidun_intellisense--light.yidun_intellisense--error .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{display:block}.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{border-color:#52ccba;background-color:#d2f4ef}.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{color:#52ccba}.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{width:17px;background-image:url(" + D(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -77px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--error .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-control{border-color:#f57a7a;background-color:#fce1e1}.yidun_intellisense--light.yidun_intellisense--error .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_classic-tips{color:#f57a7a}.yidun_intellisense--light.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + D(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -111px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--maxerror .yidun_intelli-control .yidun_tips__text:hover{cursor:pointer;text-decoration:underline}.yidun_intellisense--size-medium,.yidun_intellisense--size-medium .yidun_intelli-control{font-size:18px}.yidun_intellisense--size-medium.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-large{font-size:20px}.yidun_intellisense--size-large .yidun_intelli-control{font-size:20px;line-height:19px}.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-x-large,.yidun_intellisense--size-x-large .yidun_intelli-control{font-size:24px}.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + D(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-x-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + D(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + D(2) + ");background-position:0 -248px;background-size:40px 1515px}}", ""]);
    }, function (A, L) {
        A.exports = "<div\n  class=\"yidun yidun-custom <%= 'yidun--' + theme %> <%= 'yidun--' + mode %> <%= 'yidun--size-' + size %> <% if (isRtlLang) { %> yidun--rtl <% } %> <% if (disableFocusVisible) { %> yidun--disable-focus-outline <% } %>\"\n  style=\"width: <%= width %>; min-width: <%= minWidth %>\">\n  <div class=\"yidun_panel\"\n    <% if (mode === 'float') { %>\n    style=\"<%= customStyles.imagePanel.align === 'top'\n    ? 'bottom: ' + customStyles.controlBar.height + '; padding-bottom: ' + customStyles.gap\n    : 'top: ' + customStyles.controlBar.height + '; padding-top: ' + customStyles.gap %>\"\n    <% } else { %>\n    style=\"padding-bottom: <%= customStyles.gap %>\"\n    <% } %>\n  >\n    <div class=\"yidun_panel-placeholder\">\n      <% if (mode === 'float') { %>\n      <iframe class=\"yidun_cover-frame\"></iframe>\n      <% } %>\n      <div class=\"yidun_bgimg\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <% if (smsNew) { %>\n          <div class=\"yidun_smsbox <% if (isMobile) { %> yidun_smsbox--mobile <% } %>\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n            <div class=\"yidun_smsbox-qrcode\">\n            <div class=\"yidun_smsbox-qrcode--img\"></div>\n            </div>\n            <div class=\"yidun_smsbox-text\">\n              <div class=\"yidun_smsbox-text--guide\">\n                <div class=\"yidun_smsbox-text--qr\"><%= langPkg['sms']['scanQrToSMS'] %></div>\n                <span class=\"yidun_smsbox-text--manual\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['noScanQr'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox--mobile-wrapper\">\n              <div class=\"yidun_smsbox--mobile-guide\"><%= langPkg['sms']['clickToSMS'] %>:</div>\n              <div class=\"yidun_smsbox--mobile-btn\">\n                <a class=\"yidun_smsbox--mobile-btn-inner\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\" href=\"#\" target=\"_blank\"><%= langPkg['sms']['toSMS'] %></a>\n              </div>\n              <div class=\"yidun_smsbox-mobile--manual\">\n                <span class=\"yidun_smsbox-mobile--manual-btn\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['cannotJump'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox-manual\">\n              <div class=\"yidun_smsbox-manual-wrapper\">\n                <div class=\"yidun_smsbox-manual--edit\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['editSMS'] %></span>\n                  <span class=\"yidun_smsbox-manual--edit-content\"></span>\n                </div>\n                <div class=\"yidun_smsbox-manual--send\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['sendSMSTo'] %></span>\n                  <span class=\"yidun_smsbox-manual--send-content\">\n                    <span class=\"yidun_smsbox-manual--send-content__short\"></span>\n                    <span class=\"yidun_smsbox-manual--send-content__backup\"></span>\n                  </span>\n                </div>\n                <% if (isMobile) { %>\n                  <span class=\"yidun_smsbox-manual--btn\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\"><%= langPkg['sms']['toSMS'] %></span>\n                <% } else { %>\n                  <span class=\"yidun_smsbox-manual--qr\" aria-label=\"<%= langPkg['sms']['scanQrToSMS'] %>\" type=\"button\"><%= langPkg['sms']['scanQrToSMS'] %></span>\n                <% } %>\n              </div>\n            </div>\n          </div>\n        <% } %>\n        <img class=\"yidun_bg-img\" alt=\"验证码背景\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\"/>\n        <img class=\"yidun_jigsaw\" alt=\"验证码滑块\" />\n        <img class=\"yidun_avoid-front\" alt=\"障碍躲避验证码方形体\" />\n        <canvas class=\"yidun_avoid-canvas\"></canvas>\n        <% for (var i in inferences) { %>\n          <% if (inferences.hasOwnProperty(i)) { %>\n          <div class=\"yidun_inference <%= 'yidun_inference--' + i %>\" draggable=\"true\">\n            <img class=\"yidun_inference__img\" draggable=\"false\" />\n            <span class=\"yidun_inference__border\"></span>\n          </div>\n          <% } %>\n        <% } %>\n        <div class=\"yidun_voice\">\n          <div class=\"yidun_voice__inner\">\n            <div class=\"yidun_audio\">\n              <div class=\"yidun_audio__wave\" tabindex=\"-1\"></div>\n              <audio class=\"yidun_audio__source\" src=\"\"></audio>\n              <button type=\"button\" class=\"yidun_audio__play\" aria-label=\"<%= langPkg['playVoice'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['playVoice'] %></span></button>\n              <button type=\"button\" class=\"yidun_audio__refresh\" aria-label=\"<%= langPkg['refresh'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['refresh'] %></span></button>\n            </div>\n            <input class=\"yidun_voice__input\" aria-label=\"<%= langPkg['enterCode'] %>\" placeholder=\"<%= langPkg['enterCode'] %>\" maxlength=\"10\" type=\"tel\" />\n            <div class=\"yidun_voice__btns\">\n              <button type=\"button\" class=\"yidun_voice__refresh\"><span class=\"yidun_voice__txt\"><%= langPkg['refresh'] %></span></button>\n              <div class=\"yidun_voice__right\">\n                <button type=\"button\" class=\"yidun_voice__back\"><span class=\"yidun_voice__txt\"><%= langPkg['back'] %></span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"yidun_loadbox\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <div class=\"yidun_loadbox__inner\">\n          <div class=\"yidun_loadicon\"></div>\n          <span class=\"yidun_loadtext\"><%= langPkg['loading'] %></span>\n        </div>\n      </div>\n\n      <div class=\"yidun_top\" style=\"<% if (customStyles.executeBorderRadius === undefined) { %>border-top-right-radius: <%= customStyles.imagePanel.borderRadius %>; <% } %> <% if (customStyles.executeTop !== undefined) { %>top: <%= customStyles.executeTop %>; <% } %> <% if (customStyles.executeRight !== undefined) { %>right: <%= customStyles.executeRight %>; <% } %> <% if (customStyles.executeBorderRadius) { %>border-radius: <%= customStyles.executeBorderRadius %>; <% } %> <% if (!!customStyles.executeBackground) { %>background: <%= customStyles.executeBackground %>; <% } %>\">\n        <% if (feedback.enable) { %>\n        <a\n          class=\"yidun_feedback\"\n          href=\"<%= feedback.url + '?captchaId=' + captchaId %>\"\n          target=\"_blank\"\n          tabindex=\"0\"><span class=\"yidun_feedback_txt\"><%= langPkg['feedback'] %></span></a>\n        <% } %>\n        <div class=\"yidun_top__right\">\n          <button\n            type=\"button\"\n            class=\"yidun_refresh\"\n            style=\"<% if (!audio && !feedback.enable) { %>margin-left: 0px; <% } %>\"><%= langPkg['refresh'] %></button>\n          <% if (audio) { %>\n          <button\n            type=\"button\"\n            class=\"yidun_top__audio\"><%= langPkg['switchToVoice'] %></button>\n          <% } %>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"yidun_control\"\n    style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"\n    tabindex=\"0\"\n    role=\"button\">\n    <div class=\"yidun_slide_indicator\" style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"></div>\n    <div class=\"yidun_slider <% if (!isMobile) { %> yidun_slider--hover <% } %>\" style=\"width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\">\n      <!-- 分支二兼容旧接口 -->\n      <% if (customStyles.icon.slider) { %>\n      <img src=\"<%= customStyles.icon.slider %>\" class=\"yidun_slider__icon\" />\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <img src=\"<%= customStyles.controlBar.slideIcon %>\" class=\"yidun_slider__icon yidun_slider__icon--img\" />\n      <% } else { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <% } %>\n    </div>\n    <div\n      class=\"yidun_tips\"\n      aria-live=\"polite\">\n      <i class=\"yidun_tips__before\"></i>\n      <div class=\"yidun_tips__content\">\n        <span class=\"yidun_tips__icon\"></span>\n        <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\n        <div class=\"yidun_tips__answer\">\n          <span class=\"yidun_tips__point\"></span>\n          <img class=\"yidun_tips__img\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    }, function (A, L) {
        A.exports = "<div class=\"yidun_intellisense <%= 'yidun_intellisense--' + theme %> <%= 'yidun_intellisense--size-' + size %>\" style=\"display: none\">\n  <div\n    class=\"yidun_intelli-control\"\n    tabindex=\"0\"\n    aria-live=\"polite\">\n    <div class=\"yidun_intelli-tips\">\n      <div class=\"yidun_intelli-icon\">\n        <% if (icon.intellisenseLogo) { %>\n          <img src=\"<%= icon.intellisenseLogo%>\" class=\"yidun_logo\" />\n        <% } else { %>\n          <span class=\"yidun_logo\"></span>\n        <% } %>\n        <span class=\"yidun_intelli-loading\"></span>\n        <div class=\"yidun_ball-scale-multiple\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <span\n        class=\"yidun_intelli-text\"\n        <% if (isAndroid) { %>\n          aria-label=\"<%= langPkg.intellisense.longtap %>\"\n        <% }%>><%= langPkg.intellisense.normal %></span>\n    </div>\n    <div class=\"yidun_classic-tips\">\n      <span class=\"yidun_tips__icon\"></span>\n      <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\n    </div>\n  </div>\n  <div class=\"yidun_classic-container\">\n    <iframe class=\"yidun_cover-frame\"></iframe>\n    <div class=\"yidun_classic-wrapper\" style=\"display: <%= classicVisible ? 'block' : 'none' %>\"></div>\n  </div>\n</div>\n";
    }, function (A, L) {
        A.exports = "<div\n  class=\"<%= 'yidun_popup--' + theme %> yidun_popup <%= 'yidun_popup--size-' + size %> <%= topIsNotAuto || bottomIsNotAuto ? '' : 'yidun_popup--auto' %> <%= appendTo ? 'yidun_popup--append' : '' %> <% if (isRtlLang) { %> yidun_popup--rtl <% } %> <% if (disableFocusVisible) { %> yidun_popup--disable-focus-outline <% } %>\"\n  style=\"display: none;position: <%= popupStyles.position %>\">\n  <!-- iframe用于遮挡页面中object、embed、select等元素 -->\n  <iframe class=\"yidun_cover-frame\"></iframe>\n  <div\n    class=\"yidun_popup__mask\"\n    style=\"opacity: <%= popupStyles.opacity %>;filter: alpha(opacity=<%= popupStyles.opacity * 100 %>);\"></div>\n  <div class=\"yidun_modal__wrap\">\n    <div class=\"yidun_modal__subwrap\">\n      <% if (bottomIsNotAuto) { %>\n      <span class=\"yidun_modal__sibling\"></span>\n      <% } %>\n      <div\n        class=\"yidun_modal\"\n        style=\"<% if (topIsNotAuto) { %>top: <%= popupStyles.top %>; <% } %><% if (bottomIsNotAuto) { %>vertical-align:bottom;bottom: <%= popupStyles.bottom %>; <% } %><% if (widthIsNotAuto) { %>width: <%= width %>; <% } %><% if (popupStyles.radius) { %>border-radius: <%= popupStyles.radius %>; <% } %><% if (popupStyles.borderColor) { %>border-color: <%= popupStyles.borderColor %>; <% } %><% if (popupStyles.background) { %>background: <%= popupStyles.background %>; <% } %><% if (popupStyles.paddingTop) { %>padding-top: <%= popupStyles.paddingTop %>; <% } %><% if (popupStyles.paddingBottom) { %>padding-bottom: <%= popupStyles.paddingBottom %>; <% } %>\"\n        tabindex=\"-1\">\n        <div\n          class=\"yidun_modal__header\"\n          style=\"height: <%= popupStyles.capBarHeight %>; <% if (popupStyles.capBarTextAlign) { %>text-align: <%= popupStyles.capBarTextAlign %>; <% } %><% if (popupStyles.capBarBorderColor) { %>border-bottom-color: <%= popupStyles.capBarBorderColor %>; <% } %>\">\n            <span class=\"yidun_modal__before\"></span>\n            <span class=\"yidun_modal__title\" style=\"<% if (popupStyles.capBarTextColor) { %>color: <%= popupStyles.capBarTextColor %>; <% } %><% if (popupStyles.capBarTextSize) { %>font-size: <%= popupStyles.capBarTextSize %>; <% } %><% if (popupStyles.capBarTextWeight) { %>font-weight: <%= popupStyles.capBarTextWeight %>; <% } %>\"><%= langPkg['popupTitle'] %></span>\n          <% if (!enableClose && !hideCloseBtn) { %>\n            <button\n              type=\"button\"\n              class=\"yidun_modal__close\">\n              <span class=\"yidun_icon-close\"><%= langPkg['close']%></span>\n            </button>\n          <% } %>\n        </div>\n        <div\n          class=\"yidun_modal__body\"\n          style=\"padding: <%= popupStyles.capPadding %>px; <% if (popupStyles.capPaddingTop !== undefined) { %>padding-top: <%= popupStyles.capPaddingTop %>px; <% } %> <% if (popupStyles.capPaddingRight !== undefined) { %>padding-right: <%= popupStyles.capPaddingRight %>px; <% } %> <% if (popupStyles.capPaddingBottom !== undefined) { %>padding-bottom: <%= popupStyles.capPaddingBottom %>px; <% } %> <% if (popupStyles.capPaddingLeft !== undefined) { %>padding-left: <%= popupStyles.capPaddingLeft %>px; <% } %>\">\n          <captcha-core :intellisense=\"intellisense\" :autoWidth=\"widthIsNotAuto\" :enableColor=\"false\" :onWidthGeted=\"onWidthGetedForCore\"></captcha-core>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    }, function (A, L) {
        function D(V, B) {
            for (var J in B) V.setAttribute(J, B[J]);
        }
        function Y(V, B) {
            V.onload = function () {
                this.onerror = this.onload = null;
                B(null, V);
            };
            V.onerror = function () {
                this.onerror = this.onload = null;
                B(new Error("Failed to load " + this.src), V);
            };
        }
        function y(V, B) {
            V.onreadystatechange = function () {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, B(null, V));
            };
        }
        A.exports = function (V, B, J) {
            var X = document.head || document.getElementsByTagName("head")[0],
                P = document.createElement("script");
            "function" == typeof B && (J = B, B = {});
            B = B || {};
            J = J || function () {};
            P.type = B.type || "text/javascript";
            P.charset = B.charset || "utf8";
            P.async = !("async" in B) || !!B.async;
            P.src = V;
            B.attrs && D(P, B.attrs);
            B.text && (P.text = "" + B.text);
            var s = "onload" in P ? Y : y;
            s(P, J);
            P.onload || Y(P, J);
            X.appendChild(P);
        };
    }]);
})();