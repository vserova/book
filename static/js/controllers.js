! function() {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        classCallCheck = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        createClass = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        defineProperty = function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        },
        _extends = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        inherits = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        possibleConstructorReturn = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        slicedToArray = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return r
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        toConsumableArray = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        };

    function isLeafNode(e) {
        return !e.siblings("ul:not(.simple)").length
    }

    function toArray$1(e) {
        for (var t = [], r = 0; r < e.length; r += 1) t.push(e[r]);
        return t
    }

    function requiresPageload(e) {
        var t = window.docsExcludedNav;
        if (!t || !t.length) return !1;
        for (var r = 0; r < t.length; r += 1)
            if (-1 !== e[0].href.indexOf(t[r])) return !0;
        return !1
    }

    function throttle(e, t) {
        var r = null,
            n = null,
            o = null,
            i = 0;

        function s() {
            i = Date.now(), o = null, n = e.apply.apply(e, toConsumableArray(r)), o || (r = null)
        }
        return function() {
            for (var a = Date.now(), u = t - (a - i), l = arguments.length, c = Array(l), f = 0; f < l; f++) c[f] = arguments[f];
            return r = c, u <= 0 || u > t ? (o && (window.clearTimeout(o), o = null), i = a, n = e.apply(void 0, toConsumableArray(r)), o || (r = null)) : o || (o = window.setTimeout(s, u)), n
        }
    }

    function reportAnalytics(e, t) {
        try {
            window.analytics.track(e, t)
        } catch (t) {
            console.error("Error reporting analytics: " + e, t)
        }
    }
    var Dispatcher = function() {
            function e() {
                classCallCheck(this, e), this.listeners = []
            }
            return createClass(e, [{
                key: "listen",
                value: function(e) {
                    this.listeners.push(e)
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    for (var t = 0; t < this.listeners.length; t += 1) this.listeners[t](e)
                }
            }]), e
        }(),
        COLLAPSED_PROPERTY = "accordion--collapsed";

    function accordionShowHide(e) {
        e.classList.toggle(COLLAPSED_PROPERTY);
        var t = e.querySelector(".accordion__action");
        t.innerHTML = "Expand" === t.innerHTML ? "Collapse" : "Expand", reportAnalytics("Accordion Toggled", {
            title: e.querySelector(".accordion__title").innerText,
            status: e.classList.contains(COLLAPSED_PROPERTY) ? "collapsed" : "expanded"
        })
    }

    function setup() {
        for (var e = document.getElementsByClassName("accordion"), t = 0; t < e.length; t += 1) {
            var r = e[t];
            r.querySelector(".accordion__button").addEventListener("click", accordionShowHide.bind(this, r))
        }
    }
    var componentAccordion = Object.freeze({
            setup: setup
        }),
        HTML = '<p class="first admonition-title">AWS USERS</p>\n<p class="last">Welcome AWS Users! <a class="reference external" href="https://www.mongodb.com/cloud/atlas?jmp=docs">MongoDB Atlas</a> is\nthe fully-managed database-as-a-service with all the features and\nperformance of MongoDB. Atlas runs on AWS, Azure, and GCP. To\nexplore Atlas, use the promotional code <code class="docutils literal notranslate"><span class="pre">REALMONGO</span></code> for 250 USD of\nAtlas credit.</p>';

    function setup$1() {
        var e = document.createElement("div");
        e.className = "note admonition", e.innerHTML = HTML;
        var t = document.getElementsByTagName("h1")[0];
        if (t) {
            var r = "afterend",
                n = t.nextElementSibling;
            n && "on-this-page" === n.id && (n = (t = n).nextElementSibling), null !== n.querySelector("dl dt .descname") && (r = "afterbegin", t = n.querySelector("dl dd")), t.insertAdjacentElement(r, e)
        }
    }
    var componentAtlas = Object.freeze({
        setup: setup$1
    });

    function setup$2() {
        var e = document.getElementById("showNav");
        e && (e.onclick = function() {
            document.getElementById("sphinxsidebar").style.display = "block", document.getElementById("left-column").style.display = "flex", document.getElementById("showNav").style.display = "none"
        });
        var t = document.getElementById("closeNav");
        t && (t.onclick = function() {
            document.getElementById("showNav").style.display = "flex", document.getElementById("left-column").style.display = "none"
        })
    }
    var componentCloseOpen = Object.freeze({
        setup: setup$2
    });

    function isLineNumberBlock(e) {
        return Boolean(e.getElementsByClassName("linenos").length)
    }

    function isCaptionBlock(e) {
        return Boolean(e.getElementsByClassName("caption-text").length)
    }

    function hasButtonRow(e) {
        return Boolean(e.getElementsByClassName("button-row")[0])
    }

    function moveButtonRowToTable(e) {
        var t = e.getElementsByClassName("button-row")[0],
            r = e.getElementsByClassName("highlighttable")[0].childNodes[0],
            n = document.createElement("tr"),
            o = document.createElement("td"),
            i = document.createElement("td");
        o.className = "linenos-button-row-spacer", r.insertBefore(n, r.firstChild), n.appendChild(o), n.appendChild(i), i.appendChild(t)
    }

    function moveButtonRowBelowCaption(e) {
        var t = e.getElementsByClassName("button-row")[0],
            r = e.getElementsByClassName("code-block-caption")[0];
        console.log("MOVING BELOW CAPTION"), r.parentNode.insertBefore(t, r.nextSibling)
    }

    function fixCodeBlock(e) {
        isLineNumberBlock(e) ? moveButtonRowToTable(e) : isCaptionBlock(e) && moveButtonRowBelowCaption(e)
    }

    function setup$3() {
        for (var e = document.getElementsByClassName("button-code-block"), t = 0, r = e.length; t < r; t++) {
            var n = e[t];
            hasButtonRow(n) && fixCodeBlock(n)
        }
    }
    var componentCodeBlockFix = Object.freeze({
            setup: setup$3
        }),
        TOOLTIP_STATE_ACTIVE = "code-button__tooltip--active",
        TOOLTIP_STATE_INACTIVE = "code-button__tooltip--inactive";

    function cancelAndWait(e, t, r) {
        return t >= 0 && window.clearTimeout(t), window.setTimeout(e, r)
    }

    function isCopyableCodeBlock(e) {
        return Boolean(e.getElementsByClassName("copyable-code-block")[0])
    }

    function setup$4() {
        for (var e = toArray$1(document.getElementsByClassName("button-code-block")).filter(isCopyableCodeBlock), t = function(t, r) {
                var n = e[t],
                    o = n.getElementsByClassName("highlight")[0];
                if (!o) return {
                    v: void 0
                };
                var i = n.getElementsByClassName("button-row")[0].getElementsByClassName("code-button--copy")[0];
                if (!i) return {
                    v: void 0
                };
                var s = document.createElement("div");
                s.innerText = "copied", s.classList.add("code-button__tooltip"), s.classList.add(TOOLTIP_STATE_INACTIVE);
                var a = -1;
                i.appendChild(s), i.addEventListener("click", function() {
                    var e = document.createElement("textarea");
                    e.style.position = "fixed", document.body.appendChild(e);
                    var t = o.innerText.trim();
                    e.value = t, e.select();
                    try {
                        if (!document.execCommand("copy")) throw new Error("Failed to copy");
                        s.classList.replace(TOOLTIP_STATE_INACTIVE, TOOLTIP_STATE_ACTIVE), a = cancelAndWait(function() {
                            s.classList.replace(TOOLTIP_STATE_ACTIVE, TOOLTIP_STATE_INACTIVE)
                        }, a, 1500)
                    } catch (e) {
                        console.error(e)
                    }
                    document.body.removeChild(e), reportAnalytics("Codeblock Copied", {
                        code: t
                    })
                })
            }, r = 0, n = e.length; r < n; r++) {
            var o = t(r);
            if ("object" === (void 0 === o ? "undefined" : _typeof(o))) return o.v
        }
    }
    var componentCopyButtons = Object.freeze({
        setup: setup$4
    });

    function xhrGet(e, t) {
        var r = new XMLHttpRequest;
        r.onload = function() {
            r.status >= 200 && r.status < 400 ? (t.success(r.responseText, r.responseURL), t.complete()) : (t.error(), t.complete())
        }, r.onerror = function() {
            t.error(), t.complete()
        }, r.open("GET", e, !0);
        try {
            r.send()
        } catch (e) {
            t.error(), t.complete()
        }
    }

    function setup$5(e) {
        if ("stitch" === $("body").attr("data-project")) return !1;
        if (void 0 === window.history || void 0 === document.querySelectorAll || void 0 === document.body.classList || void 0 === (new XMLHttpRequest).responseURL) return !1;
        var t = document.querySelector(".sphinxsidebarwrapper"),
            r = document.querySelector(".body"),
            n = {};

        function o() {
            void 0 !== n.timeoutID && window.clearTimeout(n.timeoutID), void 0 !== n.xhr && n.xhr.abort(), n = {}
        }

        function i(i, s) {
            void 0 === i && console.error("Going to undefined path"), o(), r.classList.add("loading"), n.timeoutID = window.setTimeout(function() {
                r.classList.remove("loading"), n.timeoutID = -1
            }, 1e4);
            var a = new Date;
            n.xhr = xhrGet(i, {
                complete: function() {
                    o()
                },
                error: function(e) {
                    console.error("Failed to load " + i), window.location = i
                },
                success: function(n, o) {
                    var i = new Date - a;
                    r.classList.remove("loading"), s && o !== window.location.href && window.history.pushState({
                        href: o
                    }, "", o);
                    var u = document.createElement("html");
                    u.innerHTML = n;
                    var l = u.querySelector("title").textContent,
                        c = u.querySelector(".body"),
                        f = u.querySelector(".sphinxsidebarwrapper");
                    i > 62.5 && c.classList.add("loading"), r.parentElement.replaceChild(c, r), r = c, t.parentElement.replaceChild(f, t), t = f, document.title = l, e.update(), window.history.onnavigate && window.history.onnavigate(), window.setTimeout(function() {
                        r.classList.remove("loading"), s && window.scroll(0, 0)
                    }, 1)
                }
            })
        }
        window.history.replaceState({
            href: window.location.href
        }, document.querySelector("title").textContent, window.location.href);
        var s = document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");

        function a(e) {
            0 !== e.button || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), i(e.currentTarget.href, !0))
        }
        for (var u = 0; u < s.length; u += 1) {
            var l = s[u];
            (isLeafNode($(l)) || requiresPageload($(l))) && l.addEventListener("click", a)
        }
        return window.onpopstate = function(e) {
            null !== e.state && i(e.state.href, !1)
        }, !0
    }
    window.addEventListener("hashchange", function() {
        if (window.location.hash) {
            var e = document.getElementById(window.location.hash.slice(1));
            e && e.scrollIntoView(!0)
        }
    });
    var componentFastLoad = Object.freeze({
            setup: setup$5
        }),
        AuthInfo = function() {
            function e(e, t, r, n, o, i, s) {
                this.userId = e, this.deviceId = t, this.accessToken = r, this.refreshToken = n, this.loggedInProviderType = o, this.loggedInProviderName = i, this.userProfile = s
            }
            return e.empty = function() {
                return new e(void 0, void 0, void 0, void 0, void 0, void 0, void 0)
            }, e.prototype.loggedOut = function() {
                return new e(void 0, this.deviceId, void 0, void 0, void 0, void 0, void 0)
            }, e.prototype.merge = function(t) {
                return new e(void 0 === t.userId ? this.userId : t.userId, void 0 === t.deviceId ? this.deviceId : t.deviceId, void 0 === t.accessToken ? this.accessToken : t.accessToken, void 0 === t.refreshToken ? this.refreshToken : t.refreshToken, void 0 === t.loggedInProviderType ? this.loggedInProviderType : t.loggedInProviderType, void 0 === t.loggedInProviderName ? this.loggedInProviderName : t.loggedInProviderName, void 0 === t.userProfile ? this.userProfile : t.userProfile)
            }, e
        }(),
        commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    for (var byteLength_1 = byteLength, toByteArray_1 = toByteArray, fromByteArray_1 = fromByteArray, lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;

    function getLens(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
    }

    function byteLength(e) {
        var t = getLens(e),
            r = t[0],
            n = t[1];
        return 3 * (r + n) / 4 - n
    }

    function _byteLength(e, t, r) {
        return 3 * (t + r) / 4 - r
    }

    function toByteArray(e) {
        for (var t, r = getLens(e), n = r[0], o = r[1], i = new Arr(_byteLength(e, n, o)), s = 0, a = o > 0 ? n - 4 : n, u = 0; u < a; u += 4) t = revLookup[e.charCodeAt(u)] << 18 | revLookup[e.charCodeAt(u + 1)] << 12 | revLookup[e.charCodeAt(u + 2)] << 6 | revLookup[e.charCodeAt(u + 3)], i[s++] = t >> 16 & 255, i[s++] = t >> 8 & 255, i[s++] = 255 & t;
        return 2 === o && (t = revLookup[e.charCodeAt(u)] << 2 | revLookup[e.charCodeAt(u + 1)] >> 4, i[s++] = 255 & t), 1 === o && (t = revLookup[e.charCodeAt(u)] << 10 | revLookup[e.charCodeAt(u + 1)] << 4 | revLookup[e.charCodeAt(u + 2)] >> 2, i[s++] = t >> 8 & 255, i[s++] = 255 & t), i
    }

    function tripletToBase64(e) {
        return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] + lookup[63 & e]
    }

    function encodeChunk(e, t, r) {
        for (var n, o = [], i = t; i < r; i += 3) n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), o.push(tripletToBase64(n));
        return o.join("")
    }

    function fromByteArray(e) {
        for (var t, r = e.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383) o.push(encodeChunk(e, i, i + 16383 > s ? s : i + 16383));
        return 1 === n ? (t = e[r - 1], o.push(lookup[t >> 2] + lookup[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], o.push(lookup[t >> 10] + lookup[t >> 4 & 63] + lookup[t << 2 & 63] + "=")), o.join("")
    }
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
    var base64Js = {
            byteLength: byteLength_1,
            toByteArray: toByteArray_1,
            fromByteArray: fromByteArray_1
        },
        read = function(e, t, r, n, o) {
            var i, s, a = 8 * o - n - 1,
                u = (1 << a) - 1,
                l = u >> 1,
                c = -7,
                f = r ? o - 1 : 0,
                h = r ? -1 : 1,
                d = e[t + f];
            for (f += h, i = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; i = 256 * i + e[t + f], f += h, c -= 8);
            for (s = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; s = 256 * s + e[t + f], f += h, c -= 8);
            if (0 === i) i = 1 - l;
            else {
                if (i === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                s += Math.pow(2, n), i -= l
            }
            return (d ? -1 : 1) * s * Math.pow(2, i - n)
        },
        write = function(e, t, r, n, o, i) {
            var s, a, u, l = 8 * i - o - 1,
                c = (1 << l) - 1,
                f = c >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = n ? 0 : i - 1,
                p = n ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= c ? (a = 0, s = c) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + d] = 255 & a, d += p, a /= 256, o -= 8);
            for (s = s << o | a, l += o; l > 0; e[r + d] = 255 & s, d += p, s /= 256, l -= 8);
            e[r + d - p] |= 128 * g
        },
        ieee754 = {
            read: read,
            write: write
        },
        buffer = createCommonjsModule(function(e, t) {
            t.Buffer = o, t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return o.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50;
            var r = 2147483647;

            function n(e) {
                if (e > r) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return t.__proto__ = o.prototype, t
            }

            function o(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return a(e)
                }
                return i(e, t, r)
            }

            function i(e, t, r) {
                if ("string" == typeof e) return function(e, t) {
                    "string" == typeof t && "" !== t || (t = "utf8");
                    if (!o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | c(e, t),
                        i = n(r),
                        s = i.write(e, t);
                    s !== r && (i = i.slice(0, s));
                    return i
                }(e, t);
                if (ArrayBuffer.isView(e)) return u(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (M(e, ArrayBuffer) || e && M(e.buffer, ArrayBuffer)) return function(e, t, r) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
                    return n.__proto__ = o.prototype, n
                }(e, t, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return o.from(i, t, r);
                var s = function(e) {
                    if (o.isBuffer(e)) {
                        var t = 0 | l(e.length),
                            r = n(t);
                        return 0 === r.length ? r : (e.copy(r, 0, 0, t), r)
                    }
                    if (void 0 !== e.length) return "number" != typeof e.length || F(e.length) ? n(0) : u(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data)
                }(e);
                if (s) return s;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function s(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function a(e) {
                return s(e), n(e < 0 ? 0 : 0 | l(e))
            }

            function u(e) {
                for (var t = e.length < 0 ? 0 : 0 | l(e.length), r = n(t), o = 0; o < t; o += 1) r[o] = 255 & e[o];
                return r
            }

            function l(e) {
                if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
                return 0 | e
            }

            function c(e, t) {
                if (o.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return L(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return P(e).length;
                    default:
                        if (i) return n ? -1 : L(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function f(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function h(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), F(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : d(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : d(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function d(e, t, r, n, o) {
                var i, s = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function l(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var c = -1;
                    for (i = r; i < a; i++)
                        if (l(e, i) === l(t, -1 === c ? 0 : i - c)) {
                            if (-1 === c && (c = i), i - c + 1 === u) return c * s
                        } else -1 !== c && (i -= i - c), c = -1
                } else
                    for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
                        for (var f = !0, h = 0; h < u; h++)
                            if (l(e, i + h) !== l(t, h)) {
                                f = !1;
                                break
                            } if (f) return i
                    }
                return -1
            }

            function p(e, t, r, n) {
                r = Number(r) || 0;
                var o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var i = t.length;
                n > i / 2 && (n = i / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (F(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function g(e, t, r, n) {
                return x(L(t, e.length - r), e, r, n)
            }

            function y(e, t, r, n) {
                return x(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function _(e, t, r, n) {
                return y(e, t, r, n)
            }

            function m(e, t, r, n) {
                return x(P(t), e, r, n)
            }

            function b(e, t, r, n) {
                return x(function(e, t) {
                    for (var r, n, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(t, e.length - r), e, r, n)
            }

            function S(e, t, r) {
                return 0 === t && r === e.length ? base64Js.fromByteArray(e) : base64Js.fromByteArray(e.slice(t, r))
            }

            function v(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r;) {
                    var i, s, a, u, l = e[o],
                        c = null,
                        f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                    if (o + f <= r) switch (f) {
                        case 1:
                            l < 128 && (c = l);
                            break;
                        case 2:
                            128 == (192 & (i = e[o + 1])) && (u = (31 & l) << 6 | 63 & i) > 127 && (c = u);
                            break;
                        case 3:
                            i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & l) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (c = u);
                            break;
                        case 4:
                            i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & l) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (c = u)
                    }
                    null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), o += f
                }
                return function(e) {
                    var t = e.length;
                    if (t <= E) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += E));
                    return r
                }(n)
            }
            t.kMaxLength = r, o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(o.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.byteOffset
                }
            }), "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), o.poolSize = 8192, o.from = function(e, t, r) {
                return i(e, t, r)
            }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(e, t, r) {
                return function(e, t, r) {
                    return s(e), e <= 0 ? n(e) : void 0 !== t ? "string" == typeof r ? n(e).fill(t, r) : n(e).fill(t) : n(e)
                }(e, t, r)
            }, o.allocUnsafe = function(e) {
                return a(e)
            }, o.allocUnsafeSlow = function(e) {
                return a(e)
            }, o.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== o.prototype
            }, o.compare = function(e, t) {
                if (M(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), M(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, o.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function(e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return o.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = o.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (M(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), i += s.length
                }
                return n
            }, o.byteLength = c, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                return this
            }, o.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
                return this
            }, o.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
                return this
            }, o.prototype.toString = function() {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? v(this, 0, e) : function(e, t, r) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return O(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return v(this, t, r);
                        case "ascii":
                            return $(this, t, r);
                        case "latin1":
                        case "binary":
                            return N(this, t, r);
                        case "base64":
                            return S(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return A(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === o.compare(this, e)
            }, o.prototype.inspect = function() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, o.prototype.compare = function(e, t, r, n, i) {
                if (M(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var s = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), u = Math.min(s, a), l = this.slice(n, i), c = e.slice(t, r), f = 0; f < u; ++f)
                    if (l[f] !== c[f]) {
                        s = l[f], a = c[f];
                        break
                    } return s < a ? -1 : a < s ? 1 : 0
            }, o.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, o.prototype.indexOf = function(e, t, r) {
                return h(this, e, t, r, !0)
            }, o.prototype.lastIndexOf = function(e, t, r) {
                return h(this, e, t, r, !1)
            }, o.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var o = this.length - t;
                if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var i = !1;;) switch (n) {
                    case "hex":
                        return p(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return g(this, e, t, r);
                    case "ascii":
                        return y(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return _(this, e, t, r);
                    case "base64":
                        return m(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return b(this, e, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var E = 4096;

            function $(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                return n
            }

            function N(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n
            }

            function O(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = t; i < r; ++i) o += C(e[i]);
                return o
            }

            function A(e, t, r) {
                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function w(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function B(e, t, r, n, i, s) {
                if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < s) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function T(e, t, r, n, o, i) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function I(e, t, r, n, o) {
                return t = +t, r >>>= 0, o || T(e, 0, r, 4), ieee754.write(e, t, r, n, 23, 4), r + 4
            }

            function R(e, t, r, n, o) {
                return t = +t, r >>>= 0, o || T(e, 0, r, 8), ieee754.write(e, t, r, n, 52, 8), r + 8
            }
            o.prototype.slice = function(e, t) {
                var r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                var n = this.subarray(e, t);
                return n.__proto__ = o.prototype, n
            }, o.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || w(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n
            }, o.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || w(e, t, this.length);
                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, o.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || w(e, 1, this.length), this[e]
            }, o.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || w(e, 2, this.length), this[e] | this[e + 1] << 8
            }, o.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || w(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, o.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, o.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, o.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || w(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, o.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || w(e, t, this.length);
                for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, o.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || w(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, o.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || w(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || w(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, o.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, o.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), ieee754.read(this, e, !0, 23, 4)
            }, o.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || w(e, 4, this.length), ieee754.read(this, e, !1, 23, 4)
            }, o.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || w(e, 8, this.length), ieee754.read(this, e, !0, 52, 8)
            }, o.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || w(e, 8, this.length), ieee754.read(this, e, !1, 52, 8)
            }, o.prototype.writeUIntLE = function(e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, o.prototype.writeUIntBE = function(e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                    i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, o.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, o.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, o.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, o.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, o.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, o.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    B(this, e, t, r, o - 1, -o)
                }
                var i = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++i < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + r
            }, o.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    B(this, e, t, r, o - 1, -o)
                }
                var i = r - 1,
                    s = 1,
                    a = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + r
            }, o.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, o.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, o.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, o.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, o.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, o.prototype.writeFloatLE = function(e, t, r) {
                return I(this, e, t, !0, r)
            }, o.prototype.writeFloatBE = function(e, t, r) {
                return I(this, e, t, !1, r)
            }, o.prototype.writeDoubleLE = function(e, t, r) {
                return R(this, e, t, !0, r)
            }, o.prototype.writeDoubleBE = function(e, t, r) {
                return R(this, e, t, !1, r)
            }, o.prototype.copy = function(e, t, r, n) {
                if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i = n - r;
                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                else if (this === e && r < t && t < n)
                    for (var s = i - 1; s >= 0; --s) e[s + t] = this[s + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                return i
            }, o.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        var i = e.charCodeAt(0);
                        ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                    }
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var s;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (s = t; s < r; ++s) this[s] = e;
                else {
                    var a = o.isBuffer(e) ? e : o.from(e, n),
                        u = a.length;
                    if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (s = 0; s < r - t; ++s) this[s + t] = a[s % u]
                }
                return this
            };
            var D = /[^+/0-9A-Za-z-_]/g;

            function C(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function L(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function P(e) {
                return base64Js.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function x(e, t, r, n) {
                for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                return o
            }

            function M(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function F(e) {
                return e != e
            }
        }),
        buffer_1 = buffer.Buffer,
        buffer_2 = buffer.SlowBuffer,
        buffer_3 = buffer.INSPECT_MAX_BYTES,
        buffer_4 = buffer.kMaxLength,
        commonjsGlobal$1 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule$1(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var map = createCommonjsModule$1(function(e) {
            buffer.Buffer;
            if (void 0 !== commonjsGlobal$1.Map) e.exports = commonjsGlobal$1.Map, e.exports.Map = commonjsGlobal$1.Map;
            else {
                var t = function(e) {
                    this._keys = [], this._values = {};
                    for (var t = 0; t < e.length; t++)
                        if (null != e[t]) {
                            var r = e[t],
                                n = r[0],
                                o = r[1];
                            this._keys.push(n), this._values[n] = {
                                v: o,
                                i: this._keys.length - 1
                            }
                        }
                };
                t.prototype.clear = function() {
                    this._keys = [], this._values = {}
                }, t.prototype.delete = function(e) {
                    var t = this._values[e];
                    return null != t && (delete this._values[e], this._keys.splice(t.i, 1), !0)
                }, t.prototype.entries = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? [r, e._values[r].v] : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, t.prototype.forEach = function(e, t) {
                    t = t || this;
                    for (var r = 0; r < this._keys.length; r++) {
                        var n = this._keys[r];
                        e.call(t, this._values[n].v, n, t)
                    }
                }, t.prototype.get = function(e) {
                    return this._values[e] ? this._values[e].v : void 0
                }, t.prototype.has = function(e) {
                    return null != this._values[e]
                }, t.prototype.keys = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? r : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, t.prototype.set = function(e, t) {
                    return this._values[e] ? (this._values[e].v = t, this) : (this._keys.push(e), this._values[e] = {
                        v: t,
                        i: this._keys.length - 1
                    }, this)
                }, t.prototype.values = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? e._values[r].v : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, Object.defineProperty(t.prototype, "size", {
                    enumerable: !0,
                    get: function() {
                        return this._keys.length
                    }
                }), e.exports = t, e.exports.Map = t
            }
        }),
        map_1 = map.Map;

    function Long(e, t) {
        if (!(this instanceof Long)) return new Long(e, t);
        this._bsontype = "Long", this.low_ = 0 | e, this.high_ = 0 | t
    }
    Long.prototype.toInt = function() {
        return this.low_
    }, Long.prototype.toNumber = function() {
        return this.high_ * Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }, Long.prototype.toJSON = function() {
        return this.toString()
    }, Long.prototype.toString = function(e) {
        var t = e || 10;
        if (t < 2 || 36 < t) throw Error("radix out of range: " + t);
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.equals(Long.MIN_VALUE)) {
                var r = Long.fromNumber(t),
                    n = this.div(r),
                    o = n.multiply(r).subtract(this);
                return n.toString(t) + o.toInt().toString(t)
            }
            return "-" + this.negate().toString(t)
        }
        var i = Long.fromNumber(Math.pow(t, 6));
        o = this;
        for (var s = ""; !o.isZero();) {
            var a = o.div(i),
                u = o.subtract(a.multiply(i)).toInt().toString(t);
            if ((o = a).isZero()) return u + s;
            for (; u.length < 6;) u = "0" + u;
            s = "" + u + s
        }
    }, Long.prototype.getHighBits = function() {
        return this.high_
    }, Long.prototype.getLowBits = function() {
        return this.low_
    }, Long.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : Long.TWO_PWR_32_DBL_ + this.low_
    }, Long.prototype.getNumBitsAbs = function() {
        if (this.isNegative()) return this.equals(Long.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var e = 0 !== this.high_ ? this.high_ : this.low_, t = 31; t > 0 && 0 == (e & 1 << t); t--);
        return 0 !== this.high_ ? t + 33 : t + 1
    }, Long.prototype.isZero = function() {
        return 0 === this.high_ && 0 === this.low_
    }, Long.prototype.isNegative = function() {
        return this.high_ < 0
    }, Long.prototype.isOdd = function() {
        return 1 == (1 & this.low_)
    }, Long.prototype.equals = function(e) {
        return this.high_ === e.high_ && this.low_ === e.low_
    }, Long.prototype.notEquals = function(e) {
        return this.high_ !== e.high_ || this.low_ !== e.low_
    }, Long.prototype.lessThan = function(e) {
        return this.compare(e) < 0
    }, Long.prototype.lessThanOrEqual = function(e) {
        return this.compare(e) <= 0
    }, Long.prototype.greaterThan = function(e) {
        return this.compare(e) > 0
    }, Long.prototype.greaterThanOrEqual = function(e) {
        return this.compare(e) >= 0
    }, Long.prototype.compare = function(e) {
        if (this.equals(e)) return 0;
        var t = this.isNegative(),
            r = e.isNegative();
        return t && !r ? -1 : !t && r ? 1 : this.subtract(e).isNegative() ? -1 : 1
    }, Long.prototype.negate = function() {
        return this.equals(Long.MIN_VALUE) ? Long.MIN_VALUE : this.not().add(Long.ONE)
    }, Long.prototype.add = function(e) {
        var t = this.high_ >>> 16,
            r = 65535 & this.high_,
            n = this.low_ >>> 16,
            o = 65535 & this.low_,
            i = e.high_ >>> 16,
            s = 65535 & e.high_,
            a = e.low_ >>> 16,
            u = 0,
            l = 0,
            c = 0,
            f = 0;
        return c += (f += o + (65535 & e.low_)) >>> 16, f &= 65535, l += (c += n + a) >>> 16, c &= 65535, u += (l += r + s) >>> 16, l &= 65535, u += t + i, u &= 65535, Long.fromBits(c << 16 | f, u << 16 | l)
    }, Long.prototype.subtract = function(e) {
        return this.add(e.negate())
    }, Long.prototype.multiply = function(e) {
        if (this.isZero()) return Long.ZERO;
        if (e.isZero()) return Long.ZERO;
        if (this.equals(Long.MIN_VALUE)) return e.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (e.equals(Long.MIN_VALUE)) return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (this.isNegative()) return e.isNegative() ? this.negate().multiply(e.negate()) : this.negate().multiply(e).negate();
        if (e.isNegative()) return this.multiply(e.negate()).negate();
        if (this.lessThan(Long.TWO_PWR_24_) && e.lessThan(Long.TWO_PWR_24_)) return Long.fromNumber(this.toNumber() * e.toNumber());
        var t = this.high_ >>> 16,
            r = 65535 & this.high_,
            n = this.low_ >>> 16,
            o = 65535 & this.low_,
            i = e.high_ >>> 16,
            s = 65535 & e.high_,
            a = e.low_ >>> 16,
            u = 65535 & e.low_,
            l = 0,
            c = 0,
            f = 0,
            h = 0;
        return f += (h += o * u) >>> 16, h &= 65535, c += (f += n * u) >>> 16, f &= 65535, c += (f += o * a) >>> 16, f &= 65535, l += (c += r * u) >>> 16, c &= 65535, l += (c += n * a) >>> 16, c &= 65535, l += (c += o * s) >>> 16, c &= 65535, l += t * u + r * a + n * s + o * i, l &= 65535, Long.fromBits(f << 16 | h, l << 16 | c)
    }, Long.prototype.div = function(e) {
        if (e.isZero()) throw Error("division by zero");
        if (this.isZero()) return Long.ZERO;
        if (this.equals(Long.MIN_VALUE)) {
            if (e.equals(Long.ONE) || e.equals(Long.NEG_ONE)) return Long.MIN_VALUE;
            if (e.equals(Long.MIN_VALUE)) return Long.ONE;
            var t = this.shiftRight(1).div(e).shiftLeft(1);
            if (t.equals(Long.ZERO)) return e.isNegative() ? Long.ONE : Long.NEG_ONE;
            var r = this.subtract(e.multiply(t));
            return t.add(r.div(e))
        }
        if (e.equals(Long.MIN_VALUE)) return Long.ZERO;
        if (this.isNegative()) return e.isNegative() ? this.negate().div(e.negate()) : this.negate().div(e).negate();
        if (e.isNegative()) return this.div(e.negate()).negate();
        var n = Long.ZERO;
        for (r = this; r.greaterThanOrEqual(e);) {
            t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            for (var o = Math.ceil(Math.log(t) / Math.LN2), i = o <= 48 ? 1 : Math.pow(2, o - 48), s = Long.fromNumber(t), a = s.multiply(e); a.isNegative() || a.greaterThan(r);) t -= i, a = (s = Long.fromNumber(t)).multiply(e);
            s.isZero() && (s = Long.ONE), n = n.add(s), r = r.subtract(a)
        }
        return n
    }, Long.prototype.modulo = function(e) {
        return this.subtract(this.div(e).multiply(e))
    }, Long.prototype.not = function() {
        return Long.fromBits(~this.low_, ~this.high_)
    }, Long.prototype.and = function(e) {
        return Long.fromBits(this.low_ & e.low_, this.high_ & e.high_)
    }, Long.prototype.or = function(e) {
        return Long.fromBits(this.low_ | e.low_, this.high_ | e.high_)
    }, Long.prototype.xor = function(e) {
        return Long.fromBits(this.low_ ^ e.low_, this.high_ ^ e.high_)
    }, Long.prototype.shiftLeft = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.low_;
        if (e < 32) {
            var r = this.high_;
            return Long.fromBits(t << e, r << e | t >>> 32 - e)
        }
        return Long.fromBits(0, t << e - 32)
    }, Long.prototype.shiftRight = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.high_;
        if (e < 32) {
            var r = this.low_;
            return Long.fromBits(r >>> e | t << 32 - e, t >> e)
        }
        return Long.fromBits(t >> e - 32, t >= 0 ? 0 : -1)
    }, Long.prototype.shiftRightUnsigned = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.high_;
        if (e < 32) {
            var r = this.low_;
            return Long.fromBits(r >>> e | t << 32 - e, t >>> e)
        }
        return 32 === e ? Long.fromBits(t, 0) : Long.fromBits(t >>> e - 32, 0)
    }, Long.fromInt = function(e) {
        if (-128 <= e && e < 128) {
            var t = Long.INT_CACHE_[e];
            if (t) return t
        }
        var r = new Long(0 | e, e < 0 ? -1 : 0);
        return -128 <= e && e < 128 && (Long.INT_CACHE_[e] = r), r
    }, Long.fromNumber = function(e) {
        return isNaN(e) || !isFinite(e) ? Long.ZERO : e <= -Long.TWO_PWR_63_DBL_ ? Long.MIN_VALUE : e + 1 >= Long.TWO_PWR_63_DBL_ ? Long.MAX_VALUE : e < 0 ? Long.fromNumber(-e).negate() : new Long(e % Long.TWO_PWR_32_DBL_ | 0, e / Long.TWO_PWR_32_DBL_ | 0)
    }, Long.fromBits = function(e, t) {
        return new Long(e, t)
    }, Long.fromString = function(e, t) {
        if (0 === e.length) throw Error("number format error: empty string");
        var r = t || 10;
        if (r < 2 || 36 < r) throw Error("radix out of range: " + r);
        if ("-" === e.charAt(0)) return Long.fromString(e.substring(1), r).negate();
        if (e.indexOf("-") >= 0) throw Error('number format error: interior "-" character: ' + e);
        for (var n = Long.fromNumber(Math.pow(r, 8)), o = Long.ZERO, i = 0; i < e.length; i += 8) {
            var s = Math.min(8, e.length - i),
                a = parseInt(e.substring(i, i + s), r);
            if (s < 8) {
                var u = Long.fromNumber(Math.pow(r, s));
                o = o.multiply(u).add(Long.fromNumber(a))
            } else o = (o = o.multiply(n)).add(Long.fromNumber(a))
        }
        return o
    }, Long.INT_CACHE_ = {}, Long.TWO_PWR_16_DBL_ = 65536, Long.TWO_PWR_24_DBL_ = 1 << 24, Long.TWO_PWR_32_DBL_ = Long.TWO_PWR_16_DBL_ * Long.TWO_PWR_16_DBL_, Long.TWO_PWR_31_DBL_ = Long.TWO_PWR_32_DBL_ / 2, Long.TWO_PWR_48_DBL_ = Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_16_DBL_, Long.TWO_PWR_64_DBL_ = Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_32_DBL_, Long.TWO_PWR_63_DBL_ = Long.TWO_PWR_64_DBL_ / 2, Long.ZERO = Long.fromInt(0), Long.ONE = Long.fromInt(1), Long.NEG_ONE = Long.fromInt(-1), Long.MAX_VALUE = Long.fromBits(-1, 2147483647), Long.MIN_VALUE = Long.fromBits(0, -2147483648), Long.TWO_PWR_24_ = Long.fromInt(1 << 24);
    var long_1 = Long,
        Long_1 = Long;

    function Double(e) {
        if (!(this instanceof Double)) return new Double(e);
        this._bsontype = "Double", this.value = e
    }
    long_1.Long = Long_1, Double.prototype.valueOf = function() {
        return this.value
    }, Double.prototype.toJSON = function() {
        return this.value
    };
    var double_1 = Double,
        Double_1 = Double;

    function Timestamp(e, t) {
        e instanceof long_1 ? long_1.call(this, e.low_, e.high_) : long_1.call(this, e, t), this._bsontype = "Timestamp"
    }
    double_1.Double = Double_1, Timestamp.prototype = Object.create(long_1.prototype), Timestamp.prototype.constructor = Timestamp, Timestamp.prototype.toJSON = function() {
        return {
            $timestamp: this.toString()
        }
    }, Timestamp.fromInt = function(e) {
        return new Timestamp(long_1.fromInt(e))
    }, Timestamp.fromNumber = function(e) {
        return new Timestamp(long_1.fromNumber(e))
    }, Timestamp.fromBits = function(e, t) {
        return new Timestamp(e, t)
    }, Timestamp.fromString = function(e, t) {
        return new Timestamp(long_1.fromString(e, t))
    };
    var timestamp = Timestamp,
        Timestamp_1 = Timestamp,
        _endianness;

    function endianness() {
        if (void 0 === _endianness) {
            var e = new ArrayBuffer(2),
                t = new Uint8Array(e),
                r = new Uint16Array(e);
            if (t[0] = 1, t[1] = 2, 258 === r[0]) _endianness = "BE";
            else {
                if (513 !== r[0]) throw new Error("unable to figure out endianess");
                _endianness = "LE"
            }
        }
        return _endianness
    }

    function hostname() {
        return void 0 !== global.location ? global.location.hostname : ""
    }

    function loadavg() {
        return []
    }

    function uptime() {
        return 0
    }

    function freemem() {
        return Number.MAX_VALUE
    }

    function totalmem() {
        return Number.MAX_VALUE
    }

    function cpus() {
        return []
    }

    function type() {
        return "Browser"
    }

    function release() {
        return void 0 !== global.navigator ? global.navigator.appVersion : ""
    }

    function networkInterfaces() {}

    function getNetworkInterfaces() {}

    function arch() {
        return "javascript"
    }

    function platform() {
        return "browser"
    }

    function tmpDir() {
        return "/tmp"
    }
    timestamp.Timestamp = Timestamp_1;
    var tmpdir = tmpDir,
        EOL = "\n",
        os = {
            EOL: EOL,
            tmpdir: tmpdir,
            tmpDir: tmpDir,
            networkInterfaces: networkInterfaces,
            getNetworkInterfaces: getNetworkInterfaces,
            release: release,
            type: type,
            cpus: cpus,
            totalmem: totalmem,
            freemem: freemem,
            uptime: uptime,
            loadavg: loadavg,
            hostname: hostname,
            endianness: endianness
        },
        os$1 = Object.freeze({
            endianness: endianness,
            hostname: hostname,
            loadavg: loadavg,
            uptime: uptime,
            freemem: freemem,
            totalmem: totalmem,
            cpus: cpus,
            type: type,
            release: release,
            networkInterfaces: networkInterfaces,
            getNetworkInterfaces: getNetworkInterfaces,
            arch: arch,
            platform: platform,
            tmpDir: tmpDir,
            tmpdir: tmpdir,
            EOL: EOL,
            default: os
        }),
        Buffer = buffer.Buffer,
        MASK_8 = 255,
        MASK_24 = 16777215,
        MASK_32 = 4294967295,
        FNV_PRIME = new long_1(16777619, 0),
        OFFSET_BASIS = new long_1(2166136261, 0),
        FNV_MASK = new long_1(MASK_32, 0);

    function fnv1a32(e, t) {
        t = t || "utf8";
        for (var r = Buffer.from(e, t), n = OFFSET_BASIS, o = 0; o < r.length; o += 1) n = (n = (n = n.xor(new long_1(r[o], 0))).multiply(FNV_PRIME)).and(FNV_MASK);
        return n.getLowBitsUnsigned()
    }

    function fnv1a24(e, t) {
        var r = fnv1a32(e, t);
        return (r & MASK_24 ^ r >>> 24 & MASK_8) & MASK_24
    }
    var fnv1a = {
            fnv1a24: fnv1a24,
            fnv1a32: fnv1a32
        },
        require$$1 = os$1 && os || os$1,
        Buffer$1 = buffer.Buffer,
        hostname$1 = require$$1.hostname,
        fnv1a24$1 = fnv1a.fnv1a24,
        MACHINE_ID = fnv1a24$1(hostname$1),
        checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$"),
        hasBufferType = !1;
    try {
        Buffer$1 && Buffer$1.from && (hasBufferType = !0)
    } catch (e) {
        hasBufferType = !1
    }

    function ObjectID(e) {
        if (e instanceof ObjectID) return e;
        if (!(this instanceof ObjectID)) return new ObjectID(e);
        if (this._bsontype = "ObjectID", null == e || "number" == typeof e) return this.id = this.generate(e), void(ObjectID.cacheHexString && (this.__id = this.toString("hex")));
        var t = ObjectID.isValid(e);
        if (!t && null != e) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
        if (t && "string" == typeof e && 24 === e.length && hasBufferType) return new ObjectID(new Buffer$1(e, "hex"));
        if (t && "string" == typeof e && 24 === e.length) return ObjectID.createFromHexString(e);
        if (null == e || 12 !== e.length) {
            if (null != e && e.toHexString) return e;
            throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")
        }
        this.id = e, ObjectID.cacheHexString && (this.__id = this.toString("hex"))
    }
    for (var hexTable = [], i$1 = 0; i$1 < 256; i$1++) hexTable[i$1] = (i$1 <= 15 ? "0" : "") + i$1.toString(16);
    ObjectID.prototype.toHexString = function() {
        if (ObjectID.cacheHexString && this.__id) return this.__id;
        var e = "";
        if (!this.id || !this.id.length) throw new TypeError("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]");
        if (this.id instanceof _Buffer) return e = convertToHex(this.id), ObjectID.cacheHexString && (this.__id = e), e;
        for (var t = 0; t < this.id.length; t++) e += hexTable[this.id.charCodeAt(t)];
        return ObjectID.cacheHexString && (this.__id = e), e
    }, ObjectID.prototype.get_inc = function() {
        return ObjectID.index = (ObjectID.index + 1) % 16777215
    }, ObjectID.prototype.getInc = function() {
        return this.get_inc()
    }, ObjectID.prototype.generate = function(e) {
        "number" != typeof e && (e = ~~(Date.now() / 1e3));
        var t = ("undefined" == typeof process || 1 === process.pid ? Math.floor(1e5 * Math.random()) : process.pid) % 65535,
            r = this.get_inc(),
            n = new Buffer$1(12);
        return n[3] = 255 & e, n[2] = e >> 8 & 255, n[1] = e >> 16 & 255, n[0] = e >> 24 & 255, n[6] = 255 & MACHINE_ID, n[5] = MACHINE_ID >> 8 & 255, n[4] = MACHINE_ID >> 16 & 255, n[8] = 255 & t, n[7] = t >> 8 & 255, n[11] = 255 & r, n[10] = r >> 8 & 255, n[9] = r >> 16 & 255, n
    }, ObjectID.prototype.toString = function(e) {
        return this.id && this.id.copy ? this.id.toString("string" == typeof e ? e : "hex") : this.toHexString()
    }, ObjectID.prototype.inspect = ObjectID.prototype.toString, ObjectID.prototype.toJSON = function() {
        return this.toHexString()
    }, ObjectID.prototype.equals = function(e) {
        return e instanceof ObjectID ? this.toString() === e.toString() : "string" == typeof e && ObjectID.isValid(e) && 12 === e.length && this.id instanceof _Buffer ? e === this.id.toString("binary") : "string" == typeof e && ObjectID.isValid(e) && 24 === e.length ? e.toLowerCase() === this.toHexString() : "string" == typeof e && ObjectID.isValid(e) && 12 === e.length ? e === this.id : !(null == e || !(e instanceof ObjectID || e.toHexString)) && e.toHexString() === this.toHexString()
    }, ObjectID.prototype.getTimestamp = function() {
        var e = new Date,
            t = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
        return e.setTime(1e3 * Math.floor(t)), e
    }, ObjectID.index = ~~(16777215 * Math.random()), ObjectID.createPk = function() {
        return new ObjectID
    }, ObjectID.createFromTime = function(e) {
        var t = new Buffer$1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        return t[3] = 255 & e, t[2] = e >> 8 & 255, t[1] = e >> 16 & 255, t[0] = e >> 24 & 255, new ObjectID(t)
    };
    var decodeLookup = [];
    for (i$1 = 0; i$1 < 10;) decodeLookup[48 + i$1] = i$1++;
    for (; i$1 < 16;) decodeLookup[55 + i$1] = decodeLookup[87 + i$1] = i$1++;
    var _Buffer = Buffer$1,
        convertToHex = function(e) {
            return e.toString("hex")
        };
    ObjectID.createFromHexString = function(e) {
        if (void 0 === e || null != e && 24 !== e.length) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
        if (hasBufferType) return new ObjectID(new Buffer$1(e, "hex"));
        for (var t = new _Buffer(12), r = 0, n = 0; n < 24;) t[r++] = decodeLookup[e.charCodeAt(n++)] << 4 | decodeLookup[e.charCodeAt(n++)];
        return new ObjectID(t)
    }, ObjectID.isValid = function(e) {
        return null != e && ("number" == typeof e || ("string" == typeof e ? 12 === e.length || 24 === e.length && checkForHexRegExp.test(e) : e instanceof ObjectID || (e instanceof _Buffer || !!e.toHexString && (12 === e.id.length || 24 === e.id.length && checkForHexRegExp.test(e.id)))))
    }, Object.defineProperty(ObjectID.prototype, "generationTime", {
        enumerable: !0,
        get: function() {
            return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24
        },
        set: function(e) {
            this.id[3] = 255 & e, this.id[2] = e >> 8 & 255, this.id[1] = e >> 16 & 255, this.id[0] = e >> 24 & 255
        }
    });
    var objectid = ObjectID,
        ObjectID_1 = ObjectID,
        ObjectId = ObjectID;

    function alphabetize(e) {
        return e.split("").sort().join("")
    }

    function BSONRegExp(e, t) {
        if (!(this instanceof BSONRegExp)) return new BSONRegExp(e, t);
        this._bsontype = "BSONRegExp", this.pattern = e || "", this.options = t ? alphabetize(t) : "";
        for (var r = 0; r < this.options.length; r++)
            if ("i" !== this.options[r] && "m" !== this.options[r] && "x" !== this.options[r] && "l" !== this.options[r] && "s" !== this.options[r] && "u" !== this.options[r]) throw new Error("the regular expression options [" + this.options[r] + "] is not supported")
    }
    objectid.ObjectID = ObjectID_1, objectid.ObjectId = ObjectId;
    var regexp = BSONRegExp,
        BSONRegExp_1 = BSONRegExp;

    function _Symbol(e) {
        if (!(this instanceof _Symbol)) return new _Symbol(e);
        this._bsontype = "Symbol", this.value = e
    }
    regexp.BSONRegExp = BSONRegExp_1, _Symbol.prototype.valueOf = function() {
        return this.value
    }, _Symbol.prototype.toString = function() {
        return this.value
    }, _Symbol.prototype.inspect = function() {
        return this.value
    }, _Symbol.prototype.toJSON = function() {
        return this.value
    };
    var symbol = _Symbol,
        Symbol_1 = _Symbol;

    function Int32(e) {
        if (!(this instanceof Int32)) return new Int32(e);
        this._bsontype = "Int32", this.value = e
    }
    symbol.Symbol = Symbol_1, Int32.prototype.valueOf = function() {
        return this.value
    }, Int32.prototype.toJSON = function() {
        return this.value
    };
    var int_32 = Int32,
        Int32_1 = Int32;

    function Code(e, t) {
        if (!(this instanceof Code)) return new Code(e, t);
        this._bsontype = "Code", this.code = e, this.scope = t
    }
    int_32.Int32 = Int32_1, Code.prototype.toJSON = function() {
        return {
            scope: this.scope,
            code: this.code
        }
    };
    var code$1 = Code,
        Code_1 = Code;
    code$1.Code = Code_1;
    var Buffer$2 = buffer.Buffer,
        PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
        PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i,
        PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i,
        EXPONENT_MAX = 6111,
        EXPONENT_MIN = -6176,
        EXPONENT_BIAS = 6176,
        MAX_DIGITS = 34,
        NAN_BUFFER = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        INF_NEGATIVE_BUFFER = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        INF_POSITIVE_BUFFER = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        EXPONENT_REGEX = /^([-+])?(\d+)?$/,
        isDigit = function(e) {
            return !isNaN(parseInt(e, 10))
        },
        divideu128 = function(e) {
            var t = long_1.fromNumber(1e9),
                r = long_1.fromNumber(0);
            if (!(e.parts[0] || e.parts[1] || e.parts[2] || e.parts[3])) return {
                quotient: e,
                rem: r
            };
            for (var n = 0; n <= 3; n++) r = (r = r.shiftLeft(32)).add(new long_1(e.parts[n], 0)), e.parts[n] = r.div(t).low_, r = r.modulo(t);
            return {
                quotient: e,
                rem: r
            }
        },
        multiply64x2 = function(e, t) {
            if (!e && !t) return {
                high: long_1.fromNumber(0),
                low: long_1.fromNumber(0)
            };
            var r = e.shiftRightUnsigned(32),
                n = new long_1(e.getLowBits(), 0),
                o = t.shiftRightUnsigned(32),
                i = new long_1(t.getLowBits(), 0),
                s = r.multiply(o),
                a = r.multiply(i),
                u = n.multiply(o),
                l = n.multiply(i);
            return s = s.add(a.shiftRightUnsigned(32)), a = new long_1(a.getLowBits(), 0).add(u).add(l.shiftRightUnsigned(32)), {
                high: s = s.add(a.shiftRightUnsigned(32)),
                low: l = a.shiftLeft(32).add(new long_1(l.getLowBits(), 0))
            }
        },
        lessThan = function(e, t) {
            var r = e.high_ >>> 0,
                n = t.high_ >>> 0;
            return r < n || r === n && e.low_ >>> 0 < t.low_ >>> 0
        },
        invalidErr = function(e, t) {
            throw new TypeError('"${string}" not a valid Decimal128 string - ' + t)
        };

    function Decimal128(e) {
        this._bsontype = "Decimal128", this.bytes = e
    }
    Decimal128.fromString = function(e) {
        var t, r = !1,
            n = !1,
            o = !1,
            i = 0,
            s = 0,
            a = 0,
            u = 0,
            l = 0,
            c = [0],
            f = 0,
            h = 0,
            d = 0,
            p = 0,
            g = 0,
            y = 0,
            _ = [0, 0],
            m = [0, 0],
            b = 0;
        if (e.length >= 7e3) throw new TypeError(e + " not a valid Decimal128 string");
        var S = e.match(PARSE_STRING_REGEXP),
            v = e.match(PARSE_INF_REGEXP),
            E = e.match(PARSE_NAN_REGEXP);
        if (!S && !v && !E || 0 === e.length) throw new TypeError(e + " not a valid Decimal128 string");
        if (S) {
            var $ = S[2],
                N = S[4],
                O = S[5],
                A = S[6];
            N && void 0 === A && invalidErr(e, "missing exponent power"), N && void 0 === $ && invalidErr(e, "missing exponent base"), void 0 === N && (O || A) && invalidErr(e, "missing e before exponent")
        }
        if ("+" !== e[b] && "-" !== e[b] || (r = "-" === e[b++]), !isDigit(e[b]) && "." !== e[b]) {
            if ("i" === e[b] || "I" === e[b]) return new Decimal128(new Buffer$2(r ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
            if ("N" === e[b]) return new Decimal128(new Buffer$2(NAN_BUFFER))
        }
        for (; isDigit(e[b]) || "." === e[b];) "." !== e[b] ? (f < 34 && ("0" !== e[b] || o) && (o || (l = s), o = !0, c[h++] = parseInt(e[b], 10), f += 1), o && (a += 1), n && (u += 1), s += 1, b += 1) : (n && invalidErr(e, "contains multiple periods"), n = !0, b += 1);
        if (n && !s) throw new TypeError(e + " not a valid Decimal128 string");
        if ("e" === e[b] || "E" === e[b]) {
            var w = e.substr(++b).match(EXPONENT_REGEX);
            if (!w || !w[2]) return new Decimal128(new Buffer$2(NAN_BUFFER));
            g = parseInt(w[0], 10), b += w[0].length
        }
        if (e[b]) return new Decimal128(new Buffer$2(NAN_BUFFER));
        if (d = 0, f) {
            if (p = f - 1, 1 !== (i = a))
                for (;
                    "0" === e[l + i - 1];) i -= 1
        } else d = 0, p = 0, c[0] = 0, a = 1, f = 1, i = 0;
        for (g <= u && u - g > 16384 ? g = EXPONENT_MIN : g -= u; g > EXPONENT_MAX;) {
            if ((p += 1) - d > MAX_DIGITS) {
                var B = c.join("");
                if (B.match(/^0+$/)) {
                    g = EXPONENT_MAX;
                    break
                }
                invalidErr(e, "overflow")
            }
            g -= 1
        }
        for (; g < EXPONENT_MIN || f < a;) {
            if (0 === p && i < f) {
                g = EXPONENT_MIN, i = 0;
                break
            }
            if (f < a ? a -= 1 : p -= 1, g < EXPONENT_MAX) g += 1;
            else {
                if ((B = c.join("")).match(/^0+$/)) {
                    g = EXPONENT_MAX;
                    break
                }
                invalidErr(e, "overflow")
            }
        }
        if (p - d + 1 < i) {
            var T = s;
            n && (l += 1, T += 1), r && (l += 1, T += 1);
            var I = parseInt(e[l + p + 1], 10),
                R = 0;
            if (I >= 5 && (R = 1, 5 === I))
                for (R = c[p] % 2 == 1, y = l + p + 2; y < T; y++)
                    if (parseInt(e[y], 10)) {
                        R = 1;
                        break
                    } if (R)
                for (var D = p; D >= 0; D--)
                    if (++c[D] > 9 && (c[D] = 0, 0 === D)) {
                        if (!(g < EXPONENT_MAX)) return new Decimal128(new Buffer$2(r ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
                        g += 1, c[D] = 1
                    }
        }
        if (_ = long_1.fromNumber(0), m = long_1.fromNumber(0), 0 === i) _ = long_1.fromNumber(0), m = long_1.fromNumber(0);
        else if (p - d < 17)
            for (D = d, m = long_1.fromNumber(c[D++]), _ = new long_1(0, 0); D <= p; D++) m = (m = m.multiply(long_1.fromNumber(10))).add(long_1.fromNumber(c[D]));
        else {
            for (D = d, _ = long_1.fromNumber(c[D++]); D <= p - 17; D++) _ = (_ = _.multiply(long_1.fromNumber(10))).add(long_1.fromNumber(c[D]));
            for (m = long_1.fromNumber(c[D++]); D <= p; D++) m = (m = m.multiply(long_1.fromNumber(10))).add(long_1.fromNumber(c[D]))
        }
        var C = multiply64x2(_, long_1.fromString("100000000000000000"));
        C.low = C.low.add(m), lessThan(C.low, m) && (C.high = C.high.add(long_1.fromNumber(1))), t = g + EXPONENT_BIAS;
        var L = {
            low: long_1.fromNumber(0),
            high: long_1.fromNumber(0)
        };
        C.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber) ? (L.high = L.high.or(long_1.fromNumber(3).shiftLeft(61)), L.high = L.high.or(long_1.fromNumber(t).and(long_1.fromNumber(16383).shiftLeft(47))), L.high = L.high.or(C.high.and(long_1.fromNumber(0x7fffffffffff)))) : (L.high = L.high.or(long_1.fromNumber(16383 & t).shiftLeft(49)), L.high = L.high.or(C.high.and(long_1.fromNumber(562949953421311)))), L.low = C.low, r && (L.high = L.high.or(long_1.fromString("9223372036854775808")));
        var P = new Buffer$2(16);
        return b = 0, P[b++] = 255 & L.low.low_, P[b++] = L.low.low_ >> 8 & 255, P[b++] = L.low.low_ >> 16 & 255, P[b++] = L.low.low_ >> 24 & 255, P[b++] = 255 & L.low.high_, P[b++] = L.low.high_ >> 8 & 255, P[b++] = L.low.high_ >> 16 & 255, P[b++] = L.low.high_ >> 24 & 255, P[b++] = 255 & L.high.low_, P[b++] = L.high.low_ >> 8 & 255, P[b++] = L.high.low_ >> 16 & 255, P[b++] = L.high.low_ >> 24 & 255, P[b++] = 255 & L.high.high_, P[b++] = L.high.high_ >> 8 & 255, P[b++] = L.high.high_ >> 16 & 255, P[b++] = L.high.high_ >> 24 & 255, new Decimal128(P)
    };
    var COMBINATION_MASK = 31,
        EXPONENT_MASK = 16383,
        COMBINATION_INFINITY = 30,
        COMBINATION_NAN = 31;
    EXPONENT_BIAS = 6176, Decimal128.prototype.toString = function() {
        for (var e, t, r, n, o, i, s = 0, a = new Array(36), u = 0; u < a.length; u++) a[u] = 0;
        var l, c, f, h, d, p = 0,
            g = !1,
            y = {
                parts: new Array(4)
            },
            _ = [];
        p = 0;
        var m = this.bytes;
        if (n = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, r = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, t = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, e = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, p = 0, {
                low: new long_1(n, r),
                high: new long_1(t, e)
            }.high.lessThan(long_1.ZERO) && _.push("-"), (o = e >> 26 & COMBINATION_MASK) >> 3 == 3) {
            if (o === COMBINATION_INFINITY) return _.join("") + "Infinity";
            if (o === COMBINATION_NAN) return "NaN";
            i = e >> 15 & EXPONENT_MASK, f = 8 + (e >> 14 & 1)
        } else f = e >> 14 & 7, i = e >> 17 & EXPONENT_MASK;
        if (l = i - EXPONENT_BIAS, y.parts[0] = (16383 & e) + ((15 & f) << 14), y.parts[1] = t, y.parts[2] = r, y.parts[3] = n, 0 === y.parts[0] && 0 === y.parts[1] && 0 === y.parts[2] && 0 === y.parts[3]) g = !0;
        else
            for (d = 3; d >= 0; d--) {
                var b = 0,
                    S = divideu128(y);
                if (y = S.quotient, b = S.rem.low_)
                    for (h = 8; h >= 0; h--) a[9 * d + h] = b % 10, b = Math.floor(b / 10)
            }
        if (g) s = 1, a[p] = 0;
        else
            for (s = 36, u = 0; !a[p];) u++, s -= 1, p += 1;
        if ((c = s - 1 + l) >= 34 || c <= -7 || l > 0) {
            if (s > 34) return _.push(0), l > 0 ? _.push("E+" + l) : l < 0 && _.push("E" + l), _.join("");
            for (_.push(a[p++]), (s -= 1) && _.push("."), u = 0; u < s; u++) _.push(a[p++]);
            _.push("E"), c > 0 ? _.push("+" + c) : _.push(c)
        } else if (l >= 0)
            for (u = 0; u < s; u++) _.push(a[p++]);
        else {
            var v = s + l;
            if (v > 0)
                for (u = 0; u < v; u++) _.push(a[p++]);
            else _.push("0");
            for (_.push("."); v++ < 0;) _.push("0");
            for (u = 0; u < s - Math.max(v - 1, 0); u++) _.push(a[p++])
        }
        return _.join("")
    }, Decimal128.prototype.toJSON = function() {
        return {
            $numberDecimal: this.toString()
        }
    };
    var decimal128 = Decimal128,
        Decimal128_1 = Decimal128;

    function MinKey() {
        if (!(this instanceof MinKey)) return new MinKey;
        this._bsontype = "MinKey"
    }
    decimal128.Decimal128 = Decimal128_1;
    var min_key = MinKey,
        MinKey_1 = MinKey;

    function MaxKey() {
        if (!(this instanceof MaxKey)) return new MaxKey;
        this._bsontype = "MaxKey"
    }
    min_key.MinKey = MinKey_1;
    var max_key = MaxKey,
        MaxKey_1 = MaxKey;

    function DBRef(e, t, r, n) {
        if (!(this instanceof DBRef)) return new DBRef(e, t, r, n);
        var o = e.split(".");
        2 === o.length && (r = o.shift(), e = o.shift()), this._bsontype = "DBRef", this.collection = e, this.oid = t, this.db = r, this.fields = n || {}
    }
    max_key.MaxKey = MaxKey_1, DBRef.prototype.toJSON = function() {
        var e = {
            $ref: this.collection,
            $id: this.oid
        };
        return null != this.db && (e.$db = this.db), e = Object.assign(e, this.fields)
    };
    var db_ref = DBRef,
        DBRef_1 = DBRef;
    db_ref.DBRef = DBRef_1;
    var Buffer$3 = buffer.Buffer;

    function Binary(e, t) {
        if (!(this instanceof Binary)) return new Binary(e, t);
        if (!(null == e || "string" == typeof e || Buffer$3.isBuffer(e) || e instanceof Uint8Array || Array.isArray(e))) throw new Error("only String, Buffer, Uint8Array or Array accepted");
        if (this._bsontype = "Binary", e instanceof Number ? (this.sub_type = e, this.position = 0) : (this.sub_type = null == t ? BSON_BINARY_SUBTYPE_DEFAULT : t, this.position = 0), null == e || e instanceof Number) void 0 !== Buffer$3 ? this.buffer = new Buffer$3(Binary.BUFFER_SIZE) : "undefined" != typeof Uint8Array ? this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE)) : this.buffer = new Array(Binary.BUFFER_SIZE), this.position = 0;
        else {
            if ("string" == typeof e)
                if (void 0 !== Buffer$3) this.buffer = new Buffer$3(e);
                else {
                    if ("undefined" == typeof Uint8Array && "[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
                    this.buffer = writeStringToArray(e)
                }
            else this.buffer = e;
            this.position = e.length
        }
    }
    Binary.prototype.put = function(e) {
        if (null != e.length && "number" != typeof e && 1 !== e.length) throw new TypeError("only accepts single character String, Uint8Array or Array");
        if ("number" != typeof e && e < 0 || e > 255) throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
        var t = null;
        if (t = "string" == typeof e ? e.charCodeAt(0) : null != e.length ? e[0] : e, this.buffer.length > this.position) this.buffer[this.position++] = t;
        else if (void 0 !== Buffer$3 && Buffer$3.isBuffer(this.buffer)) {
            var r = new Buffer$3(Binary.BUFFER_SIZE + this.buffer.length);
            this.buffer.copy(r, 0, 0, this.buffer.length), this.buffer = r, this.buffer[this.position++] = t
        } else {
            r = null, r = "[object Uint8Array]" === Object.prototype.toString.call(this.buffer) ? new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length)) : new Array(Binary.BUFFER_SIZE + this.buffer.length);
            for (var n = 0; n < this.buffer.length; n++) r[n] = this.buffer[n];
            this.buffer = r, this.buffer[this.position++] = t
        }
    }, Binary.prototype.write = function(e, t) {
        if (t = "number" == typeof t ? t : this.position, this.buffer.length < t + e.length) {
            var r = null;
            if (void 0 !== Buffer$3 && Buffer$3.isBuffer(this.buffer)) r = new Buffer$3(this.buffer.length + e.length), this.buffer.copy(r, 0, 0, this.buffer.length);
            else if ("[object Uint8Array]" === Object.prototype.toString.call(this.buffer)) {
                r = new Uint8Array(new ArrayBuffer(this.buffer.length + e.length));
                for (var n = 0; n < this.position; n++) r[n] = this.buffer[n]
            }
            this.buffer = r
        }
        if (void 0 !== Buffer$3 && Buffer$3.isBuffer(e) && Buffer$3.isBuffer(this.buffer)) e.copy(this.buffer, t, 0, e.length), this.position = t + e.length > this.position ? t + e.length : this.position;
        else if (void 0 !== Buffer$3 && "string" == typeof e && Buffer$3.isBuffer(this.buffer)) this.buffer.write(e, t, "binary"), this.position = t + e.length > this.position ? t + e.length : this.position;
        else if ("[object Uint8Array]" === Object.prototype.toString.call(e) || "[object Array]" === Object.prototype.toString.call(e) && "string" != typeof e) {
            for (n = 0; n < e.length; n++) this.buffer[t++] = e[n];
            this.position = t > this.position ? t : this.position
        } else if ("string" == typeof e) {
            for (n = 0; n < e.length; n++) this.buffer[t++] = e.charCodeAt(n);
            this.position = t > this.position ? t : this.position
        }
    }, Binary.prototype.read = function(e, t) {
        if (t = t && t > 0 ? t : this.position, this.buffer.slice) return this.buffer.slice(e, e + t);
        for (var r = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(t)) : new Array(t), n = 0; n < t; n++) r[n] = this.buffer[e++];
        return r
    }, Binary.prototype.value = function(e) {
        if ((e = null != e && e) && void 0 !== Buffer$3 && Buffer$3.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer;
        if (void 0 !== Buffer$3 && Buffer$3.isBuffer(this.buffer)) return e ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position);
        if (e) {
            if (null != this.buffer.slice) return this.buffer.slice(0, this.position);
            for (var t = "[object Uint8Array]" === Object.prototype.toString.call(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position), r = 0; r < this.position; r++) t[r] = this.buffer[r];
            return t
        }
        return convertArraytoUtf8BinaryString(this.buffer, 0, this.position)
    }, Binary.prototype.length = function() {
        return this.position
    }, Binary.prototype.toJSON = function() {
        return null != this.buffer ? this.buffer.toString("base64") : ""
    }, Binary.prototype.toString = function(e) {
        return null != this.buffer ? this.buffer.slice(0, this.position).toString(e) : ""
    };
    var BSON_BINARY_SUBTYPE_DEFAULT = 0,
        writeStringToArray = function(e) {
            for (var t = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(e.length)) : new Array(e.length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t
        },
        convertArraytoUtf8BinaryString = function(e, t, r) {
            for (var n = "", o = t; o < r; o++) n += String.fromCharCode(e[o]);
            return n
        };
    Binary.BUFFER_SIZE = 256, Binary.SUBTYPE_DEFAULT = 0, Binary.SUBTYPE_FUNCTION = 1, Binary.SUBTYPE_BYTE_ARRAY = 2, Binary.SUBTYPE_UUID_OLD = 3, Binary.SUBTYPE_UUID = 4, Binary.SUBTYPE_MD5 = 5, Binary.SUBTYPE_USER_DEFINED = 128;
    var binary = Binary,
        Binary_1 = Binary;
    binary.Binary = Binary_1;
    var Buffer$4 = buffer.Buffer,
        Long$1 = long_1.Long,
        Double$1 = double_1.Double,
        Timestamp$1 = timestamp.Timestamp,
        ObjectID$1 = objectid.ObjectID,
        Code$1 = code$1.Code,
        MinKey$1 = min_key.MinKey,
        MaxKey$1 = max_key.MaxKey,
        DBRef$1 = db_ref.DBRef,
        BSONRegExp$1 = regexp.BSONRegExp,
        Binary$1 = binary.Binary,
        deserialize = function(e, t, r) {
            var n = (t = null == t ? {} : t) && t.index ? t.index : 0,
                o = e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24;
            if (o < 5) throw new Error("bson size must be >= 5, is " + o);
            if (t.allowObjectSmallerThanBufferSize && Buffer$4.byteLength(e) < o) throw new Error("buffer length " + Buffer$4.byteLength(e) + " must be >= bson size " + o);
            if (!t.allowObjectSmallerThanBufferSize && Buffer$4.byteLength(e) !== o) throw new Error("buffer length " + Buffer$4.byteLength(e) + " must === bson size " + o);
            if (o + n > Buffer$4.byteLength(e)) throw new Error("(bson size " + o + " + options.index " + n + " must be <= buffer length " + Buffer$4.byteLength(e) + ")");
            if (0 !== e[n + o - 1]) throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
            return deserializeObject(e, n, t, r)
        },
        deserializeObject = function e(t, r, n, o) {
            var i = null != n.evalFunctions && n.evalFunctions,
                s = null != n.cacheFunctions && n.cacheFunctions,
                a = null != n.cacheFunctionsCrc32 && n.cacheFunctionsCrc32;
            if (!a) var u = null;
            var l = null == n.fieldsAsRaw ? null : n.fieldsAsRaw,
                c = null != n.raw && n.raw,
                f = "boolean" == typeof n.bsonRegExp && n.bsonRegExp,
                h = null != n.promoteBuffers && n.promoteBuffers,
                d = null == n.promoteLongs || n.promoteLongs,
                p = null == n.promoteValues || n.promoteValues,
                g = r;
            if (Buffer$4.byteLength(t) < 5) throw new Error("corrupt bson message < 5 bytes long");
            var y = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
            if (y < 5 || y > Buffer$4.byteLength(t)) throw new Error("corrupt bson message");
            for (var _ = o ? [] : {}, m = 0;;) {
                var b = t[r++];
                if (0 === b) break;
                for (var S = r; 0 !== t[S] && S < Buffer$4.byteLength(t);) S++;
                if (S >= Buffer$4.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                var v = o ? m++ : t.toString("utf8", r, S);
                if (r = S + 1, b === BSON.BSON_DATA_STRING) {
                    var E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    if (E <= 0 || E > Buffer$4.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var $ = t.toString("utf8", r, r + E - 1);
                    for (S = 0; S < $.length; S++)
                        if (65533 === $.charCodeAt(S)) throw new Error("Invalid UTF-8 string in BSON document");
                    _[v] = $, r += E
                } else if (b === BSON.BSON_DATA_OID) {
                    var N = new Buffer$4(12);
                    t.copy(N, 0, r, r + 12), _[v] = new ObjectID$1(N), r += 12
                } else if (b === BSON.BSON_DATA_INT && !1 === p) _[v] = new int_32(t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24);
                else if (b === BSON.BSON_DATA_INT) _[v] = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                else if (b === BSON.BSON_DATA_NUMBER && !1 === p) _[v] = new Double$1(t.readDoubleLE(r)), r += 8;
                else if (b === BSON.BSON_DATA_NUMBER) _[v] = t.readDoubleLE(r), r += 8;
                else if (b === BSON.BSON_DATA_DATE) {
                    var O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24,
                        A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    _[v] = new Date(new Long$1(O, A).toNumber())
                } else if (b === BSON.BSON_DATA_BOOLEAN) {
                    if (0 !== t[r] && 1 !== t[r]) throw new Error("illegal boolean type value");
                    _[v] = 1 === t[r++]
                } else if (b === BSON.BSON_DATA_OBJECT) {
                    var w = r,
                        B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24;
                    if (B <= 0 || B > Buffer$4.byteLength(t) - r) throw new Error("bad embedded document length in bson");
                    _[v] = c ? t.slice(r, r + B) : e(t, w, n, !1), r += B
                } else if (b === BSON.BSON_DATA_ARRAY) {
                    w = r;
                    var T = n,
                        I = r + (B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24);
                    if (l && l[v]) {
                        for (var R in T = {}, n) T[R] = n[R];
                        T.raw = !0
                    }
                    if (_[v] = e(t, w, T, !0), 0 !== t[(r += B) - 1]) throw new Error("invalid array terminator byte");
                    if (r !== I) throw new Error("corrupted array bson")
                } else if (b === BSON.BSON_DATA_UNDEFINED) _[v] = void 0;
                else if (b === BSON.BSON_DATA_NULL) _[v] = null;
                else if (b === BSON.BSON_DATA_LONG) {
                    O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    var D = new Long$1(O, A);
                    _[v] = d && !0 === p && D.lessThanOrEqual(JS_INT_MAX_LONG) && D.greaterThanOrEqual(JS_INT_MIN_LONG) ? D.toNumber() : D
                } else if (b === BSON.BSON_DATA_DECIMAL128) {
                    var C = new Buffer$4(16);
                    t.copy(C, 0, r, r + 16), r += 16;
                    var L = new decimal128(C);
                    _[v] = L.toObject ? L.toObject() : L
                } else if (b === BSON.BSON_DATA_BINARY) {
                    var P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24,
                        x = P,
                        M = t[r++];
                    if (P < 0) throw new Error("Negative binary type element size found");
                    if (P > Buffer$4.byteLength(t)) throw new Error("Binary type size larger than document size");
                    if (null != t.slice) {
                        if (M === Binary$1.SUBTYPE_BYTE_ARRAY) {
                            if ((P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                            if (P > x - 4) throw new Error("Binary type with subtype 0x02 contains to long binary size");
                            if (P < x - 4) throw new Error("Binary type with subtype 0x02 contains to short binary size")
                        }
                        _[v] = h && p ? t.slice(r, r + P) : new Binary$1(t.slice(r, r + P), M)
                    } else {
                        var F = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(P)) : new Array(P);
                        if (M === Binary$1.SUBTYPE_BYTE_ARRAY) {
                            if ((P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                            if (P > x - 4) throw new Error("Binary type with subtype 0x02 contains to long binary size");
                            if (P < x - 4) throw new Error("Binary type with subtype 0x02 contains to short binary size")
                        }
                        for (S = 0; S < P; S++) F[S] = t[r + S];
                        _[v] = h && p ? F : new Binary$1(F, M)
                    }
                    r += P
                } else if (b === BSON.BSON_DATA_REGEXP && !1 === f) {
                    for (S = r; 0 !== t[S] && S < Buffer$4.byteLength(t);) S++;
                    if (S >= Buffer$4.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    var U = t.toString("utf8", r, S);
                    for (S = r = S + 1; 0 !== t[S] && S < Buffer$4.byteLength(t);) S++;
                    if (S >= Buffer$4.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    var k = t.toString("utf8", r, S);
                    r = S + 1;
                    var j = new Array(k.length);
                    for (S = 0; S < k.length; S++) switch (k[S]) {
                        case "m":
                            j[S] = "m";
                            break;
                        case "s":
                            j[S] = "g";
                            break;
                        case "i":
                            j[S] = "i"
                    }
                    _[v] = new RegExp(U, j.join(""))
                } else if (b === BSON.BSON_DATA_REGEXP && !0 === f) {
                    for (S = r; 0 !== t[S] && S < Buffer$4.byteLength(t);) S++;
                    if (S >= Buffer$4.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    for (U = t.toString("utf8", r, S), S = r = S + 1; 0 !== t[S] && S < Buffer$4.byteLength(t);) S++;
                    if (S >= Buffer$4.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    k = t.toString("utf8", r, S), r = S + 1, _[v] = new BSONRegExp$1(U, k)
                } else if (b === BSON.BSON_DATA_SYMBOL) {
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    _[v] = t.toString("utf8", r, r + E - 1), r += E
                } else if (b === BSON.BSON_DATA_TIMESTAMP) O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, _[v] = new Timestamp$1(O, A);
                else if (b === BSON.BSON_DATA_MIN_KEY) _[v] = new MinKey$1;
                else if (b === BSON.BSON_DATA_MAX_KEY) _[v] = new MaxKey$1;
                else if (b === BSON.BSON_DATA_CODE) {
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var z = t.toString("utf8", r, r + E - 1);
                    if (i)
                        if (s) {
                            var Y = a ? u(z) : z;
                            _[v] = isolateEvalWithHash(functionCache, Y, z, _)
                        } else _[v] = isolateEval(z);
                    else _[v] = new Code$1(z);
                    r += E
                } else if (b === BSON.BSON_DATA_CODE_W_SCOPE) {
                    var q = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    if (q < 13) throw new Error("code_w_scope total size shorter minimum expected length");
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    z = t.toString("utf8", r, r + E - 1), w = r += E, B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24;
                    var K = e(t, w, n, !1);
                    if (r += B, q < 8 + B + E) throw new Error("code_w_scope total size is to short, truncating scope");
                    if (q > 8 + B + E) throw new Error("code_w_scope total size is to long, clips outer document");
                    i ? (s ? (Y = a ? u(z) : z, _[v] = isolateEvalWithHash(functionCache, Y, z, _)) : _[v] = isolateEval(z), _[v].scope = K) : _[v] = new Code$1(z, K)
                } else {
                    if (b !== BSON.BSON_DATA_DBPOINTER) throw new Error("Detected unknown BSON type " + b.toString(16) + ' for fieldname "' + v + '", are you using the latest BSON parser?');
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var V = t.toString("utf8", r, r + E - 1);
                    r += E;
                    var W = new Buffer$4(12);
                    for (t.copy(W, 0, r, r + 12), N = new ObjectID$1(W), r += 12, S = 0; S < V.length; S++)
                        if (65533 === V.charCodeAt(S)) throw new Error("Invalid UTF-8 string in BSON document");
                    _[v] = new DBRef$1(V, N)
                }
            }
            if (y !== r - g) {
                if (o) throw new Error("corrupt array bson");
                throw new Error("corrupt object bson")
            }
            var H = Object.keys(_).filter(function(e) {
                    return e.startsWith("$")
                }),
                J = !0;
            if (H.forEach(function(e) {
                    -1 === ["$ref", "$id", "$db"].indexOf(e) && (J = !1)
                }), !J) return _;
            if (null != _.$id && null != _.$ref) {
                var X = Object.assign({}, _);
                return delete X.$ref, delete X.$id, delete X.$db, new DBRef$1(_.$ref, _.$id, _.$db || null, X)
            }
            return _
        },
        isolateEvalWithHash = function isolateEvalWithHash(functionCache, hash, functionString, object) {
            var value = null;
            return null == functionCache[hash] && (eval("value = " + functionString), functionCache[hash] = value), functionCache[hash].bind(object)
        },
        isolateEval = function isolateEval(functionString) {
            var value = null;
            return eval("value = " + functionString), value
        },
        BSON = {},
        functionCache = BSON.functionCache = {};
    BSON.BSON_DATA_NUMBER = 1, BSON.BSON_DATA_STRING = 2, BSON.BSON_DATA_OBJECT = 3, BSON.BSON_DATA_ARRAY = 4, BSON.BSON_DATA_BINARY = 5, BSON.BSON_DATA_UNDEFINED = 6, BSON.BSON_DATA_OID = 7, BSON.BSON_DATA_BOOLEAN = 8, BSON.BSON_DATA_DATE = 9, BSON.BSON_DATA_NULL = 10, BSON.BSON_DATA_REGEXP = 11, BSON.BSON_DATA_DBPOINTER = 12, BSON.BSON_DATA_CODE = 13, BSON.BSON_DATA_SYMBOL = 14, BSON.BSON_DATA_CODE_W_SCOPE = 15, BSON.BSON_DATA_INT = 16, BSON.BSON_DATA_TIMESTAMP = 17, BSON.BSON_DATA_LONG = 18, BSON.BSON_DATA_DECIMAL128 = 19, BSON.BSON_DATA_MIN_KEY = 255, BSON.BSON_DATA_MAX_KEY = 127, BSON.BSON_BINARY_SUBTYPE_DEFAULT = 0, BSON.BSON_BINARY_SUBTYPE_FUNCTION = 1, BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, BSON.BSON_BINARY_SUBTYPE_UUID = 3, BSON.BSON_BINARY_SUBTYPE_MD5 = 4, BSON.BSON_BINARY_SUBTYPE_USER_DEFINED = 128, BSON.BSON_INT32_MAX = 2147483647, BSON.BSON_INT32_MIN = -2147483648, BSON.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON.BSON_INT64_MIN = -Math.pow(2, 63), BSON.JS_INT_MAX = 9007199254740992, BSON.JS_INT_MIN = -9007199254740992;
    var JS_INT_MAX_LONG = Long$1.fromNumber(9007199254740992),
        JS_INT_MIN_LONG = Long$1.fromNumber(-9007199254740992),
        deserializer = deserialize,
        readIEEE754 = function(e, t, r, n, o) {
            var i, s, a = "big" === r,
                u = 8 * o - n - 1,
                l = (1 << u) - 1,
                c = l >> 1,
                f = -7,
                h = a ? 0 : o - 1,
                d = a ? 1 : -1,
                p = e[t + h];
            for (h += d, i = p & (1 << -f) - 1, p >>= -f, f += u; f > 0; i = 256 * i + e[t + h], h += d, f -= 8);
            for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + e[t + h], h += d, f -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - n)
        },
        writeIEEE754 = function(e, t, r, n, o, i) {
            var s, a, u, l = "big" === n,
                c = 8 * i - o - 1,
                f = (1 << c) - 1,
                h = f >> 1,
                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = l ? i - 1 : 0,
                g = l ? -1 : 1,
                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)), isNaN(t) && (a = 0); o >= 8;) e[r + p] = 255 & a, p += g, a /= 256, o -= 8;
            for (s = s << o | a, isNaN(t) && (s += 8), c += o; c > 0;) e[r + p] = 255 & s, p += g, s /= 256, c -= 8;
            e[r + p - g] |= 128 * y
        },
        readIEEE754_1 = readIEEE754,
        writeIEEE754_1 = writeIEEE754,
        float_parser = {
            readIEEE754: readIEEE754_1,
            writeIEEE754: writeIEEE754_1
        };

    function normalizedFunctionString(e) {
        return e.toString().replace(/function(.*)\(/, "function (")
    }
    var utils = {
            normalizedFunctionString: normalizedFunctionString
        },
        _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Buffer$5 = buffer.Buffer,
        writeIEEE754$1 = float_parser.writeIEEE754,
        Long$2 = long_1.Long,
        MinKey$2 = min_key.MinKey,
        Binary$2 = binary.Binary,
        normalizedFunctionString$1 = utils.normalizedFunctionString,
        regexp$1 = /\x00/,
        isDate = function(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof$1(e)) && "[object Date]" === Object.prototype.toString.call(e)
        },
        isRegExp = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        },
        serializeString = function(e, t, r, n, o) {
            e[n++] = BSON$1.BSON_DATA_STRING, e[(n = n + (o ? e.write(t, n, "ascii") : e.write(t, n, "utf8")) + 1) - 1] = 0;
            var i = e.write(r, n + 4, "utf8");
            return e[n + 3] = i + 1 >> 24 & 255, e[n + 2] = i + 1 >> 16 & 255, e[n + 1] = i + 1 >> 8 & 255, e[n] = i + 1 & 255, n = n + 4 + i, e[n++] = 0, n
        },
        serializeNumber = function(e, t, r, n, o) {
            if (Math.floor(r) === r && r >= BSON$1.JS_INT_MIN && r <= BSON$1.JS_INT_MAX)
                if (r >= BSON$1.BSON_INT32_MIN && r <= BSON$1.BSON_INT32_MAX) {
                    e[n++] = BSON$1.BSON_DATA_INT;
                    var i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8");
                    n += i, e[n++] = 0, e[n++] = 255 & r, e[n++] = r >> 8 & 255, e[n++] = r >> 16 & 255, e[n++] = r >> 24 & 255
                } else if (r >= BSON$1.JS_INT_MIN && r <= BSON$1.JS_INT_MAX) e[n++] = BSON$1.BSON_DATA_NUMBER, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1(e, r, n, "little", 52, 8), n += 8;
            else {
                e[n++] = BSON$1.BSON_DATA_LONG, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
                var s = Long$2.fromNumber(r),
                    a = s.getLowBits(),
                    u = s.getHighBits();
                e[n++] = 255 & a, e[n++] = a >> 8 & 255, e[n++] = a >> 16 & 255, e[n++] = a >> 24 & 255, e[n++] = 255 & u, e[n++] = u >> 8 & 255, e[n++] = u >> 16 & 255, e[n++] = u >> 24 & 255
            } else e[n++] = BSON$1.BSON_DATA_NUMBER, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1(e, r, n, "little", 52, 8), n += 8;
            return n
        },
        serializeNull = function(e, t, r, n, o) {
            return e[n++] = BSON$1.BSON_DATA_NULL, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, n
        },
        serializeBoolean = function(e, t, r, n, o) {
            return e[n++] = BSON$1.BSON_DATA_BOOLEAN, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, e[n++] = r ? 1 : 0, n
        },
        serializeDate = function(e, t, r, n, o) {
            e[n++] = BSON$1.BSON_DATA_DATE, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = Long$2.fromNumber(r.getTime()),
                s = i.getLowBits(),
                a = i.getHighBits();
            return e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, e[n++] = 255 & a, e[n++] = a >> 8 & 255, e[n++] = a >> 16 & 255, e[n++] = a >> 24 & 255, n
        },
        serializeRegExp = function(e, t, r, n, o) {
            if (e[n++] = BSON$1.BSON_DATA_REGEXP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, r.source && null != r.source.match(regexp$1)) throw Error("value " + r.source + " must not contain null bytes");
            return n += e.write(r.source, n, "utf8"), e[n++] = 0, r.ignoreCase && (e[n++] = 105), r.global && (e[n++] = 115), r.multiline && (e[n++] = 109), e[n++] = 0, n
        },
        serializeBSONRegExp = function(e, t, r, n, o) {
            if (e[n++] = BSON$1.BSON_DATA_REGEXP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, null != r.pattern.match(regexp$1)) throw Error("pattern " + r.pattern + " must not contain null bytes");
            return n += e.write(r.pattern, n, "utf8"), e[n++] = 0, n += e.write(r.options.split("").sort().join(""), n, "utf8"), e[n++] = 0, n
        },
        serializeMinMax = function(e, t, r, n, o) {
            return e[n++] = null === r ? BSON$1.BSON_DATA_NULL : r instanceof MinKey$2 ? BSON$1.BSON_DATA_MIN_KEY : BSON$1.BSON_DATA_MAX_KEY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, n
        },
        serializeObjectId = function(e, t, r, n, o) {
            if (e[n++] = BSON$1.BSON_DATA_OID, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, "string" == typeof r.id) e.write(r.id, n, "binary");
            else {
                if (!r.id || !r.id.copy) throw new TypeError("object [" + JSON.stringify(r) + "] is not a valid ObjectId");
                r.id.copy(e, n, 0, 12)
            }
            return n + 12
        },
        serializeBuffer = function(e, t, r, n, o) {
            e[n++] = BSON$1.BSON_DATA_BINARY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.length;
            return e[n++] = 255 & i, e[n++] = i >> 8 & 255, e[n++] = i >> 16 & 255, e[n++] = i >> 24 & 255, e[n++] = BSON$1.BSON_BINARY_SUBTYPE_DEFAULT, r.copy(e, n, 0, i), n += i
        },
        serializeObject = function(e, t, r, n, o, i, s, a, u, l) {
            for (var c = 0; c < l.length; c++)
                if (l[c] === r) throw new Error("cyclic dependency detected");
            l.push(r), e[n++] = Array.isArray(r) ? BSON$1.BSON_DATA_ARRAY : BSON$1.BSON_DATA_OBJECT, n += u ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var f = serializeInto(e, r, o, n, i + 1, s, a, l);
            return l.pop(), f
        },
        serializeDecimal128 = function(e, t, r, n, o) {
            return e[n++] = BSON$1.BSON_DATA_DECIMAL128, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, r.bytes.copy(e, n, 0, 16), n + 16
        },
        serializeLong = function(e, t, r, n, o) {
            e[n++] = "Long" === r._bsontype ? BSON$1.BSON_DATA_LONG : BSON$1.BSON_DATA_TIMESTAMP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.getLowBits(),
                s = r.getHighBits();
            return e[n++] = 255 & i, e[n++] = i >> 8 & 255, e[n++] = i >> 16 & 255, e[n++] = i >> 24 & 255, e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, n
        },
        serializeInt32 = function(e, t, r, n, o) {
            return e[n++] = BSON$1.BSON_DATA_INT, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, e[n++] = 255 & r, e[n++] = r >> 8 & 255, e[n++] = r >> 16 & 255, e[n++] = r >> 24 & 255, n
        },
        serializeDouble = function(e, t, r, n, o) {
            return e[n++] = BSON$1.BSON_DATA_NUMBER, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1(e, r.value, n, "little", 52, 8), n += 8
        },
        serializeFunction = function(e, t, r, n, o, i, s) {
            e[n++] = BSON$1.BSON_DATA_CODE, n += s ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var a = normalizedFunctionString$1(r),
                u = e.write(a, n + 4, "utf8") + 1;
            return e[n] = 255 & u, e[n + 1] = u >> 8 & 255, e[n + 2] = u >> 16 & 255, e[n + 3] = u >> 24 & 255, n = n + 4 + u - 1, e[n++] = 0, n
        },
        serializeCode = function(e, t, r, n, o, i, s, a, u) {
            if (r.scope && "object" === _typeof$1(r.scope)) {
                e[n++] = BSON$1.BSON_DATA_CODE_W_SCOPE;
                var l = u ? e.write(t, n, "ascii") : e.write(t, n, "utf8");
                n += l, e[n++] = 0;
                var c = n,
                    f = "string" == typeof r.code ? r.code : r.code.toString();
                n += 4;
                var h = e.write(f, n + 4, "utf8") + 1;
                e[n] = 255 & h, e[n + 1] = h >> 8 & 255, e[n + 2] = h >> 16 & 255, e[n + 3] = h >> 24 & 255, e[n + 4 + h - 1] = 0, n = n + h + 4;
                var d = serializeInto(e, r.scope, o, n, i + 1, s, a);
                n = d - 1;
                var p = d - c;
                e[c++] = 255 & p, e[c++] = p >> 8 & 255, e[c++] = p >> 16 & 255, e[c++] = p >> 24 & 255, e[n++] = 0
            } else {
                e[n++] = BSON$1.BSON_DATA_CODE, n += l = u ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, f = r.code.toString();
                var g = e.write(f, n + 4, "utf8") + 1;
                e[n] = 255 & g, e[n + 1] = g >> 8 & 255, e[n + 2] = g >> 16 & 255, e[n + 3] = g >> 24 & 255, n = n + 4 + g - 1, e[n++] = 0
            }
            return n
        },
        serializeBinary = function(e, t, r, n, o) {
            e[n++] = BSON$1.BSON_DATA_BINARY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.value(!0),
                s = r.position;
            return r.sub_type === Binary$2.SUBTYPE_BYTE_ARRAY && (s += 4), e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, e[n++] = r.sub_type, r.sub_type === Binary$2.SUBTYPE_BYTE_ARRAY && (s -= 4, e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255), i.copy(e, n, 0, r.position), n += r.position
        },
        serializeSymbol = function(e, t, r, n, o) {
            e[n++] = BSON$1.BSON_DATA_SYMBOL, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = e.write(r.value, n + 4, "utf8") + 1;
            return e[n] = 255 & i, e[n + 1] = i >> 8 & 255, e[n + 2] = i >> 16 & 255, e[n + 3] = i >> 24 & 255, n = n + 4 + i - 1, e[n++] = 0, n
        },
        serializeDBRef = function(e, t, r, n, o, i, s) {
            e[n++] = BSON$1.BSON_DATA_OBJECT, n += s ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var a, u = n,
                l = {
                    $ref: r.collection,
                    $id: r.oid
                };
            null != r.db && (l.$db = r.db), l = Object.assign(l, r.fields);
            var c = (a = serializeInto(e, l, !1, n, o + 1, i)) - u;
            return e[u++] = 255 & c, e[u++] = c >> 8 & 255, e[u++] = c >> 16 & 255, e[u++] = c >> 24 & 255, a
        },
        serializeInto = function(e, t, r, n, o, i, s, a) {
            n = n || 0, (a = a || []).push(t);
            var u = n + 4;
            if (Array.isArray(t))
                for (var l = 0; l < t.length; l++) {
                    var c = "" + l,
                        f = t[l];
                    if (f && f.toBSON) {
                        if ("function" != typeof f.toBSON) throw new TypeError("toBSON is not a function");
                        f = f.toBSON()
                    }
                    var h = void 0 === f ? "undefined" : _typeof$1(f);
                    "string" === h ? u = serializeString(e, c, f, u, !0) : "number" === h ? u = serializeNumber(e, c, f, u, !0) : "boolean" === h ? u = serializeBoolean(e, c, f, u, !0) : f instanceof Date || isDate(f) ? u = serializeDate(e, c, f, u, !0) : void 0 === f ? u = serializeNull(e, c, f, u, !0) : null === f ? u = serializeNull(e, c, f, u, !0) : "ObjectID" === f._bsontype ? u = serializeObjectId(e, c, f, u, !0) : Buffer$5.isBuffer(f) ? u = serializeBuffer(e, c, f, u, !0) : f instanceof RegExp || isRegExp(f) ? u = serializeRegExp(e, c, f, u, !0) : "object" === h && null == f._bsontype ? u = serializeObject(e, c, f, u, r, o, i, s, !0, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128(e, c, f, u, !0) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong(e, c, f, u, !0) : "Double" === f._bsontype ? u = serializeDouble(e, c, f, u, !0) : "function" == typeof f && i ? u = serializeFunction(e, c, f, u, r, o, i, !0) : "Code" === f._bsontype ? u = serializeCode(e, c, f, u, r, o, i, s, !0) : "Binary" === f._bsontype ? u = serializeBinary(e, c, f, u, !0) : "Symbol" === f._bsontype ? u = serializeSymbol(e, c, f, u, !0) : "DBRef" === f._bsontype ? u = serializeDBRef(e, c, f, u, o, i, !0) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp(e, c, f, u, !0) : "Int32" === f._bsontype ? u = serializeInt32(e, c, f, u, !0) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax(e, c, f, u, !0))
                } else if (t instanceof map)
                    for (var d = t.entries(), p = !1; !p;) {
                        var g = d.next();
                        if (!(p = g.done)) {
                            if (c = g.value[0], h = void 0 === (f = g.value[1]) ? "undefined" : _typeof$1(f), "$db" !== c && "$ref" !== c && "$id" !== c) {
                                if (null != c.match(regexp$1)) throw Error("key " + c + " must not contain null bytes");
                                if (r) {
                                    if ("$" === c[0]) throw Error("key " + c + " must not start with '$'");
                                    if (~c.indexOf(".")) throw Error("key " + c + " must not contain '.'")
                                }
                            }
                            "string" === h ? u = serializeString(e, c, f, u) : "number" === h ? u = serializeNumber(e, c, f, u) : "boolean" === h ? u = serializeBoolean(e, c, f, u) : f instanceof Date || isDate(f) ? u = serializeDate(e, c, f, u) : null === f || void 0 === f && !1 === s ? u = serializeNull(e, c, f, u) : "ObjectID" === f._bsontype ? u = serializeObjectId(e, c, f, u) : Buffer$5.isBuffer(f) ? u = serializeBuffer(e, c, f, u) : f instanceof RegExp || isRegExp(f) ? u = serializeRegExp(e, c, f, u) : "object" === h && null == f._bsontype ? u = serializeObject(e, c, f, u, r, o, i, s, !1, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128(e, c, f, u) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong(e, c, f, u) : "Double" === f._bsontype ? u = serializeDouble(e, c, f, u) : "Code" === f._bsontype ? u = serializeCode(e, c, f, u, r, o, i, s) : "function" == typeof f && i ? u = serializeFunction(e, c, f, u, r, o, i) : "Binary" === f._bsontype ? u = serializeBinary(e, c, f, u) : "Symbol" === f._bsontype ? u = serializeSymbol(e, c, f, u) : "DBRef" === f._bsontype ? u = serializeDBRef(e, c, f, u, o, i) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp(e, c, f, u) : "Int32" === f._bsontype ? u = serializeInt32(e, c, f, u) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax(e, c, f, u))
                        }
                    } else {
                        if (t.toBSON) {
                            if ("function" != typeof t.toBSON) throw new TypeError("toBSON is not a function");
                            if (null != (t = t.toBSON()) && "object" !== (void 0 === t ? "undefined" : _typeof$1(t))) throw new TypeError("toBSON function did not return an object")
                        }
                        for (c in t) {
                            if ((f = t[c]) && f.toBSON) {
                                if ("function" != typeof f.toBSON) throw new TypeError("toBSON is not a function");
                                f = f.toBSON()
                            }
                            if (h = void 0 === f ? "undefined" : _typeof$1(f), "$db" !== c && "$ref" !== c && "$id" !== c) {
                                if (null != c.match(regexp$1)) throw Error("key " + c + " must not contain null bytes");
                                if (r) {
                                    if ("$" === c[0]) throw Error("key " + c + " must not start with '$'");
                                    if (~c.indexOf(".")) throw Error("key " + c + " must not contain '.'")
                                }
                            }
                            "string" === h ? u = serializeString(e, c, f, u) : "number" === h ? u = serializeNumber(e, c, f, u) : "boolean" === h ? u = serializeBoolean(e, c, f, u) : f instanceof Date || isDate(f) ? u = serializeDate(e, c, f, u) : void 0 === f ? !1 === s && (u = serializeNull(e, c, f, u)) : null === f ? u = serializeNull(e, c, f, u) : "ObjectID" === f._bsontype ? u = serializeObjectId(e, c, f, u) : Buffer$5.isBuffer(f) ? u = serializeBuffer(e, c, f, u) : f instanceof RegExp || isRegExp(f) ? u = serializeRegExp(e, c, f, u) : "object" === h && null == f._bsontype ? u = serializeObject(e, c, f, u, r, o, i, s, !1, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128(e, c, f, u) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong(e, c, f, u) : "Double" === f._bsontype ? u = serializeDouble(e, c, f, u) : "Code" === f._bsontype ? u = serializeCode(e, c, f, u, r, o, i, s) : "function" == typeof f && i ? u = serializeFunction(e, c, f, u, r, o, i) : "Binary" === f._bsontype ? u = serializeBinary(e, c, f, u) : "Symbol" === f._bsontype ? u = serializeSymbol(e, c, f, u) : "DBRef" === f._bsontype ? u = serializeDBRef(e, c, f, u, o, i) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp(e, c, f, u) : "Int32" === f._bsontype ? u = serializeInt32(e, c, f, u) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax(e, c, f, u))
                        }
                    }
            a.pop(), e[u++] = 0;
            var y = u - n;
            return e[n++] = 255 & y, e[n++] = y >> 8 & 255, e[n++] = y >> 16 & 255, e[n++] = y >> 24 & 255, u
        },
        BSON$1 = {
            BSON_DATA_NUMBER: 1,
            BSON_DATA_STRING: 2,
            BSON_DATA_OBJECT: 3,
            BSON_DATA_ARRAY: 4,
            BSON_DATA_BINARY: 5,
            BSON_DATA_UNDEFINED: 6,
            BSON_DATA_OID: 7,
            BSON_DATA_BOOLEAN: 8,
            BSON_DATA_DATE: 9,
            BSON_DATA_NULL: 10,
            BSON_DATA_REGEXP: 11,
            BSON_DATA_CODE: 13,
            BSON_DATA_SYMBOL: 14,
            BSON_DATA_CODE_W_SCOPE: 15,
            BSON_DATA_INT: 16,
            BSON_DATA_TIMESTAMP: 17,
            BSON_DATA_LONG: 18,
            BSON_DATA_DECIMAL128: 19,
            BSON_DATA_MIN_KEY: 255,
            BSON_DATA_MAX_KEY: 127,
            BSON_BINARY_SUBTYPE_DEFAULT: 0,
            BSON_BINARY_SUBTYPE_FUNCTION: 1,
            BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
            BSON_BINARY_SUBTYPE_UUID: 3,
            BSON_BINARY_SUBTYPE_MD5: 4,
            BSON_BINARY_SUBTYPE_USER_DEFINED: 128,
            BSON_INT32_MAX: 2147483647,
            BSON_INT32_MIN: -2147483648
        };
    BSON$1.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON$1.BSON_INT64_MIN = -Math.pow(2, 63), BSON$1.JS_INT_MAX = 9007199254740992, BSON$1.JS_INT_MIN = -9007199254740992;
    var serializer = serializeInto,
        Buffer$6 = buffer.Buffer,
        Long$3 = long_1.Long,
        Double$2 = double_1.Double,
        Timestamp$2 = timestamp.Timestamp,
        ObjectID$2 = objectid.ObjectID,
        _Symbol$1 = symbol.Symbol,
        BSONRegExp$2 = regexp.BSONRegExp,
        Code$2 = code$1.Code,
        MinKey$3 = min_key.MinKey,
        MaxKey$2 = max_key.MaxKey,
        DBRef$2 = db_ref.DBRef,
        Binary$3 = binary.Binary,
        normalizedFunctionString$2 = utils.normalizedFunctionString,
        isDate$1 = function(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof$1(e)) && "[object Date]" === Object.prototype.toString.call(e)
        },
        calculateObjectSize = function(e, t, r) {
            var n = 5;
            if (Array.isArray(e))
                for (var o = 0; o < e.length; o++) n += calculateElement(o.toString(), e[o], t, !0, r);
            else
                for (var i in e.toBSON && (e = e.toBSON()), e) n += calculateElement(i, e[i], t, !1, r);
            return n
        };

    function calculateElement(e, t, r, n, o) {
        switch (t && t.toBSON && (t = t.toBSON()), void 0 === t ? "undefined" : _typeof$1(t)) {
            case "string":
                return 1 + Buffer$6.byteLength(e, "utf8") + 1 + 4 + Buffer$6.byteLength(t, "utf8") + 1;
            case "number":
                return Math.floor(t) === t && t >= BSON$2.JS_INT_MIN && t <= BSON$2.JS_INT_MAX && t >= BSON$2.BSON_INT32_MIN && t <= BSON$2.BSON_INT32_MAX ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 5 : (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 9;
            case "undefined":
                return n || !o ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 : 0;
            case "boolean":
                return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 2;
            case "object":
                if (null == t || t instanceof MinKey$3 || t instanceof MaxKey$2 || "MinKey" === t._bsontype || "MaxKey" === t._bsontype) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1;
                if (t instanceof ObjectID$2 || "ObjectID" === t._bsontype) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 13;
                if (t instanceof Date || isDate$1(t)) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 9;
                if (void 0 !== Buffer$6 && Buffer$6.isBuffer(t)) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 6 + t.length;
                if (t instanceof Long$3 || t instanceof Double$2 || t instanceof Timestamp$2 || "Long" === t._bsontype || "Double" === t._bsontype || "Timestamp" === t._bsontype) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 9;
                if (t instanceof decimal128 || "Decimal128" === t._bsontype) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 17;
                if (t instanceof Code$2 || "Code" === t._bsontype) return null != t.scope && Object.keys(t.scope).length > 0 ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(t.code.toString(), "utf8") + 1 + calculateObjectSize(t.scope, r, o) : (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + Buffer$6.byteLength(t.code.toString(), "utf8") + 1;
                if (t instanceof Binary$3 || "Binary" === t._bsontype) return t.sub_type === Binary$3.SUBTYPE_BYTE_ARRAY ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1 + 4) : (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1);
                if (t instanceof _Symbol$1 || "Symbol" === t._bsontype) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + Buffer$6.byteLength(t.value, "utf8") + 4 + 1 + 1;
                if (t instanceof DBRef$2 || "DBRef" === t._bsontype) {
                    var i = {
                        $ref: t.collection,
                        $id: t.oid
                    };
                    return null != t.db && (i.$db = t.db), i = Object.assign(i, t.fields), (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + calculateObjectSize(i, r, o)
                }
                return t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1 : t instanceof BSONRegExp$2 || "BSONRegExp" === t._bsontype ? (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(t.pattern, "utf8") + 1 + Buffer$6.byteLength(t.options, "utf8") + 1 : (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + calculateObjectSize(t, r, o) + 1;
            case "function":
                if (t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) || "[object RegExp]" === String.call(t)) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1;
                if (r && null != t.scope && Object.keys(t.scope).length > 0) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(t), "utf8") + 1 + calculateObjectSize(t.scope, r, o);
                if (r) return (null != e ? Buffer$6.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(t), "utf8") + 1
        }
        return 0
    }
    var BSON$2 = {
            BSON_INT32_MAX: 2147483647,
            BSON_INT32_MIN: -2147483648,
            JS_INT_MAX: 9007199254740992,
            JS_INT_MIN: -9007199254740992
        },
        calculate_size = calculateObjectSize,
        Buffer$7 = buffer.Buffer,
        ensure_buffer = function(e) {
            if (e instanceof Buffer$7) return e;
            if (e instanceof Uint8Array) return new Buffer$7(e.buffer);
            throw new TypeError("Must use either Buffer or Uint8Array")
        },
        Buffer$8 = buffer.Buffer,
        MAXSIZE = 17825792,
        buffer$1 = new Buffer$8(MAXSIZE),
        BSON$3 = function() {};
    BSON$3.prototype.serialize = function(e, t) {
        var r = "boolean" == typeof(t = t || {}).checkKeys && t.checkKeys,
            n = "boolean" == typeof t.serializeFunctions && t.serializeFunctions,
            o = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined,
            i = "number" == typeof t.minInternalBufferSize ? t.minInternalBufferSize : MAXSIZE;
        buffer$1.length < i && (buffer$1 = new Buffer$8(i));
        var s = serializer(buffer$1, e, r, 0, 0, n, o, []),
            a = new Buffer$8(s);
        return buffer$1.copy(a, 0, 0, a.length), a
    }, BSON$3.prototype.serializeWithBufferAndIndex = function(e, t, r) {
        var n = "boolean" == typeof(r = r || {}).checkKeys && r.checkKeys,
            o = "boolean" == typeof r.serializeFunctions && r.serializeFunctions,
            i = "boolean" != typeof r.ignoreUndefined || r.ignoreUndefined,
            s = "number" == typeof r.index ? r.index : 0,
            a = serializer(buffer$1, e, n, 0, 0, o, i);
        return t = ensure_buffer(t), buffer$1.copy(t, s, 0, a), s + a - 1
    }, BSON$3.prototype.deserialize = function(e, t) {
        return e = ensure_buffer(e), deserializer(e, t)
    }, BSON$3.prototype.calculateObjectSize = function(e, t) {
        var r = "boolean" == typeof(t = t || {}).serializeFunctions && t.serializeFunctions,
            n = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined;
        return calculate_size(e, r, n)
    }, BSON$3.prototype.deserializeStream = function(e, t, r, n, o, i) {
        i = Object.assign({
            allowObjectSmallerThanBufferSize: !0
        }, i), e = ensure_buffer(e);
        for (var s = t, a = 0; a < r; a++) {
            var u = e[s] | e[s + 1] << 8 | e[s + 2] << 16 | e[s + 3] << 24;
            i.index = s, n[o + a] = this.deserialize(e, i), s += u
        }
        return s
    }, BSON$3.BSON_INT32_MAX = 2147483647, BSON$3.BSON_INT32_MIN = -2147483648, BSON$3.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON$3.BSON_INT64_MIN = -Math.pow(2, 63), BSON$3.JS_INT_MAX = 9007199254740992, BSON$3.JS_INT_MIN = -9007199254740992, BSON$3.BSON_DATA_NUMBER = 1, BSON$3.BSON_DATA_STRING = 2, BSON$3.BSON_DATA_OBJECT = 3, BSON$3.BSON_DATA_ARRAY = 4, BSON$3.BSON_DATA_BINARY = 5, BSON$3.BSON_DATA_OID = 7, BSON$3.BSON_DATA_BOOLEAN = 8, BSON$3.BSON_DATA_DATE = 9, BSON$3.BSON_DATA_NULL = 10, BSON$3.BSON_DATA_REGEXP = 11, BSON$3.BSON_DATA_CODE = 13, BSON$3.BSON_DATA_SYMBOL = 14, BSON$3.BSON_DATA_CODE_W_SCOPE = 15, BSON$3.BSON_DATA_INT = 16, BSON$3.BSON_DATA_TIMESTAMP = 17, BSON$3.BSON_DATA_LONG = 18, BSON$3.BSON_DATA_MIN_KEY = 255, BSON$3.BSON_DATA_MAX_KEY = 127, BSON$3.BSON_BINARY_SUBTYPE_DEFAULT = 0, BSON$3.BSON_BINARY_SUBTYPE_FUNCTION = 1, BSON$3.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, BSON$3.BSON_BINARY_SUBTYPE_UUID = 3, BSON$3.BSON_BINARY_SUBTYPE_MD5 = 4, BSON$3.BSON_BINARY_SUBTYPE_USER_DEFINED = 128;
    var bson = BSON$3,
        Code_1$1 = code$1,
        Map_1 = map,
        Symbol_1$1 = symbol,
        BSON_1 = BSON$3,
        DBRef_1$1 = db_ref,
        Binary_1$1 = binary,
        ObjectId$1 = objectid,
        ObjectID_1$1 = objectid,
        Long_1$1 = long_1,
        Timestamp_1$1 = timestamp,
        Double_1$1 = double_1,
        Int32_1$1 = int_32,
        MinKey_1$1 = min_key,
        MaxKey_1$1 = max_key,
        BSONRegExp_1$1 = regexp,
        Decimal128_1$1 = decimal128;
    bson.Code = Code_1$1, bson.Map = Map_1, bson.Symbol = Symbol_1$1, bson.BSON = BSON_1, bson.DBRef = DBRef_1$1, bson.Binary = Binary_1$1, bson.ObjectId = ObjectId$1, bson.ObjectID = ObjectID_1$1, bson.Long = Long_1$1, bson.Timestamp = Timestamp_1$1, bson.Double = Double_1$1, bson.Int32 = Int32_1$1, bson.MinKey = MinKey_1$1, bson.MaxKey = MaxKey_1$1, bson.BSONRegExp = BSONRegExp_1$1, bson.Decimal128 = Decimal128_1$1;
    var jsBson = bson,
        Buffer$9 = buffer.Buffer;

    function convert(e) {
        var t = Number(e).toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function toExtendedJSON(e) {
        return {
            $binary: {
                base64: Buffer$9.isBuffer(e.buffer) ? e.buffer.toString("base64") : Buffer$9.from(e.buffer).toString("base64"),
                subType: convert(e.sub_type)
            }
        }
    }

    function fromExtendedJSON(e, t) {
        var r = t.$binary.subType ? parseInt(t.$binary.subType, 16) : 0,
            n = new Buffer$9(t.$binary.base64, "base64");
        return new e.Binary(n, r)
    }
    var binary$1 = {
        toExtendedJSON: toExtendedJSON,
        fromExtendedJSON: fromExtendedJSON
    };

    function toExtendedJSON$1(e) {
        return e.scope ? {
            $code: e.code,
            $scope: e.scope
        } : {
            $code: e.code
        }
    }

    function fromExtendedJSON$1(e, t) {
        return new e.Code(t.$code, t.$scope)
    }
    var code$2 = {
        toExtendedJSON: toExtendedJSON$1,
        fromExtendedJSON: fromExtendedJSON$1
    };

    function toExtendedJSON$2(e) {
        var t = {
            $ref: e.collection,
            $id: e.oid
        };
        return e.db && (t.$db = e.db), t = Object.assign(t, e.fields)
    }

    function fromExtendedJSON$2(e, t) {
        var r = Object.assign({}, t);
        return ["$ref", "$id", "$db"].forEach(function(e) {
            return delete r[e]
        }), new e.DBRef(t.$ref, t.$id, t.$db, r)
    }
    var db_ref$1 = {
        toExtendedJSON: toExtendedJSON$2,
        fromExtendedJSON: fromExtendedJSON$2
    };

    function toExtendedJSON$3(e) {
        return {
            $numberDecimal: e.toString()
        }
    }

    function fromExtendedJSON$3(e, t) {
        return new e.Decimal128.fromString(t.$numberDecimal)
    }
    var decimal128$1 = {
        toExtendedJSON: toExtendedJSON$3,
        fromExtendedJSON: fromExtendedJSON$3
    };

    function toExtendedJSON$4(e, t) {
        return t && t.relaxed && isFinite(e.value) ? e.value : {
            $numberDouble: e.value.toString()
        }
    }

    function fromExtendedJSON$4(e, t, r) {
        return r && r.relaxed ? parseFloat(t.$numberDouble) : new e.Double(parseFloat(t.$numberDouble))
    }
    var double_1$1 = {
        toExtendedJSON: toExtendedJSON$4,
        fromExtendedJSON: fromExtendedJSON$4
    };

    function toExtendedJSON$5(e, t) {
        return t && t.relaxed ? e.value : {
            $numberInt: e.value.toString()
        }
    }

    function fromExtendedJSON$5(e, t, r) {
        return r && r.relaxed ? parseInt(t.$numberInt, 10) : new e.Int32(t.$numberInt)
    }
    var int_32$1 = {
        toExtendedJSON: toExtendedJSON$5,
        fromExtendedJSON: fromExtendedJSON$5
    };

    function toExtendedJSON$6(e, t) {
        return t && t.relaxed ? e.toNumber() : {
            $numberLong: e.toString()
        }
    }

    function fromExtendedJSON$6(e, t, r) {
        var n = e.Long.fromString(t.$numberLong);
        return r && r.relaxed ? n.toNumber() : n
    }
    var long_1$1 = {
        toExtendedJSON: toExtendedJSON$6,
        fromExtendedJSON: fromExtendedJSON$6
    };

    function toExtendedJSON$7() {
        return {
            $maxKey: 1
        }
    }

    function fromExtendedJSON$7(e) {
        return new e.MaxKey
    }
    var max_key$1 = {
        toExtendedJSON: toExtendedJSON$7,
        fromExtendedJSON: fromExtendedJSON$7
    };

    function toExtendedJSON$8() {
        return {
            $minKey: 1
        }
    }

    function fromExtendedJSON$8(e) {
        return new e.MinKey
    }
    var min_key$1 = {
        toExtendedJSON: toExtendedJSON$8,
        fromExtendedJSON: fromExtendedJSON$8
    };

    function toExtendedJSON$9(e) {
        return e.toHexString ? {
            $oid: e.toHexString()
        } : {
            $oid: e.toString("hex")
        }
    }

    function fromExtendedJSON$9(e, t) {
        return new e.ObjectID(t.$oid)
    }
    var objectid$1 = {
        toExtendedJSON: toExtendedJSON$9,
        fromExtendedJSON: fromExtendedJSON$9
    };

    function toExtendedJSON$10(e) {
        return {
            $regularExpression: {
                pattern: e.pattern,
                options: e.options
            }
        }
    }

    function fromExtendedJSON$10(e, t) {
        return new e.BSONRegExp(t.$regularExpression.pattern, t.$regularExpression.options.split("").sort().join(""))
    }
    var regexp$2 = {
        toExtendedJSON: toExtendedJSON$10,
        fromExtendedJSON: fromExtendedJSON$10
    };

    function toExtendedJSON$11(e) {
        return {
            $symbol: e.value
        }
    }

    function fromExtendedJSON$11(e, t) {
        return new e.Symbol(t.$symbol)
    }
    var symbol$1 = {
        toExtendedJSON: toExtendedJSON$11,
        fromExtendedJSON: fromExtendedJSON$11
    };

    function toExtendedJSON$12(e) {
        return {
            $timestamp: {
                t: e.high_,
                i: e.low_
            }
        }
    }

    function fromExtendedJSON$12(e, t) {
        return new e.Timestamp(t.$timestamp.i, t.$timestamp.t)
    }
    var timestamp$1 = {
            toExtendedJSON: toExtendedJSON$12,
            fromExtendedJSON: fromExtendedJSON$12
        },
        bson$1 = {
            Binary: binary$1,
            Code: code$2,
            DBRef: db_ref$1,
            Decimal128: decimal128$1,
            Double: double_1$1,
            Int32: int_32$1,
            Long: long_1$1,
            MaxKey: max_key$1,
            MinKey: min_key$1,
            ObjectID: objectid$1,
            BSONRegExp: regexp$2,
            Symbol: symbol$1,
            Timestamp: timestamp$1
        },
        _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        BSON$4 = jsBson,
        BSONTypes = ["Binary", "Code", "DBRef", "Decimal128", "Double", "Int32", "Long", "MaxKey", "MinKey", "ObjectID", "BSONRegExp", "Symbol", "Timestamp"];
    setBSONModule(BSON$4);
    var keysToCodecs = {
        $oid: bson$1.ObjectID,
        $binary: bson$1.Binary,
        $symbol: bson$1.Symbol,
        $numberInt: bson$1.Int32,
        $numberDecimal: bson$1.Decimal128,
        $numberDouble: bson$1.Double,
        $numberLong: bson$1.Long,
        $minKey: bson$1.MinKey,
        $maxKey: bson$1.MaxKey,
        $regularExpression: bson$1.BSONRegExp,
        $timestamp: bson$1.Timestamp
    };

    function setBSONModule(e) {
        BSONTypes.forEach(function(t) {
            if (!e[t]) throw new Error("passed in module does not contain all BSON types required")
        }), BSON$4 = e
    }

    function deserializeValue(e, t, r, n) {
        if ("number" == typeof r) {
            if (Math.floor(r) === r) {
                var o = r >= BSON_INT64_MIN && r <= BSON_INT64_MAX;
                if (r >= BSON_INT32_MIN && r <= BSON_INT32_MAX) return n.strict ? new BSON$4.Int32(r) : r;
                if (o) return n.strict ? new BSON$4.Long.fromNumber(r) : r
            }
            return new BSON$4.Double(r)
        }
        if (null == r || "object" !== (void 0 === r ? "undefined" : _typeof$2(r))) return r;
        if (r.$undefined) return null;
        for (var i = Object.keys(r).filter(function(e) {
                return e.startsWith("$") && null != r[e]
            }), s = 0; s < i.length; s++) {
            var a = keysToCodecs[i[s]];
            if (a) return a.fromExtendedJSON(BSON$4, r, n)
        }
        if (null != r.$date) {
            var u = r.$date,
                l = new Date;
            return "string" == typeof u ? l.setTime(Date.parse(u)) : u instanceof BSON$4.Long ? l.setTime(u.toNumber()) : "number" == typeof u && n.relaxed && l.setTime(u), l
        }
        if (null != r.$code) {
            if (r.$scope) var c = deserializeValue(e, null, r.$scope);
            return Object.assign({}, r).$scope = c, bson$1.Code.fromExtendedJSON(BSON$4, r)
        }
        if (null != r.$ref || null != r.$dbPointer) {
            var f = r.$ref ? r : r.$dbPointer;
            if (f instanceof BSON$4.DBRef) return f;
            var h = Object.keys(f).filter(function(e) {
                    return e.startsWith("$")
                }),
                d = !0;
            if (h.forEach(function(e) {
                    -1 === ["$ref", "$id", "$db"].indexOf(e) && (d = !1)
                }), d) return bson$1.DBRef.fromExtendedJSON(BSON$4, f)
        }
        return r
    }
    var parse = function(e, t) {
            var r = this;
            return "boolean" == typeof(t = t || {
                relaxed: !1
            }).relaxed && (t.strict = !t.relaxed), "boolean" == typeof t.strict && (t.relaxed = !t.strict), JSON.parse(e, function(e, n) {
                return deserializeValue(r, e, n, t)
            })
        },
        BSON_INT32_MAX = 2147483647,
        BSON_INT32_MIN = -2147483648,
        BSON_INT64_MAX = 0x8000000000000000,
        BSON_INT64_MIN = -0x8000000000000000,
        stringify = function(e, t, r, n) {
            var o = {};
            null != n && "object" === (void 0 === n ? "undefined" : _typeof$2(n)) ? o = n : null != r && "object" === (void 0 === r ? "undefined" : _typeof$2(r)) ? (o = r, r = 0) : null != t && "object" === (void 0 === t ? "undefined" : _typeof$2(t)) && (o = t, t = null);
            var i = Array.isArray(e) ? serializeArray(e, o) : serializeDocument(e, o);
            return JSON.stringify(i, t, r)
        };

    function serializeArray(e, t) {
        return e.map(function(e) {
            return serializeValue(e, t)
        })
    }

    function getISOString(e) {
        var t = e.toISOString();
        return 0 !== e.getUTCMilliseconds() ? t : t.slice(0, -5) + "Z"
    }

    function serializeValue(e, t) {
        if (Array.isArray(e)) return serializeArray(e, t);
        if (void 0 === e) return null;
        if (e instanceof Date) {
            var r = e.getTime(),
                n = r > -1 && r < 2534023188e5;
            return t.relaxed && n ? {
                $date: getISOString(e)
            } : {
                $date: {
                    $numberLong: e.getTime().toString()
                }
            }
        }
        if ("number" == typeof e && !t.relaxed) {
            if (Math.floor(e) === e) {
                var o = e >= BSON_INT64_MIN && e <= BSON_INT64_MAX;
                if (e >= BSON_INT32_MIN && e <= BSON_INT32_MAX) return {
                    $numberInt: e.toString()
                };
                if (o) return {
                    $numberLong: e.toString()
                }
            }
            return {
                $numberDouble: e.toString()
            }
        }
        return null != e && "object" === (void 0 === e ? "undefined" : _typeof$2(e)) ? serializeDocument(e, t) : e
    }

    function serializeDocument(e, t) {
        if (null == e || "object" !== (void 0 === e ? "undefined" : _typeof$2(e))) throw new Error("not an object instance");
        if (e._bsontype && -1 !== BSONTypes.indexOf(e._bsontype)) {
            if ("Code" === e._bsontype && e.scope) {
                var r = serializeDocument(e.scope, t),
                    n = Object.assign({}, e, {
                        scope: r
                    });
                return bson$1.Code.toExtendedJSON(n, t)
            }
            if ("DBRef" === e._bsontype && e.oid) {
                var o = serializeDocument(e.oid, t),
                    i = Object.assign({}, e, {
                        oid: o
                    });
                return bson$1.DBRef.toExtendedJSON(i, t)
            }
            return bson$1[e._bsontype].toExtendedJSON(e, t)
        }
        var s = {};
        for (var a in e) {
            var u = e[a];
            if (Array.isArray(u)) s[a] = serializeArray(u, t);
            else if (null != u && u._bsontype && -1 !== BSONTypes.indexOf(u._bsontype))
                if ("Code" === u._bsontype && u.scope) {
                    var l = serializeDocument(u.scope, t),
                        c = Object.assign({}, u, {
                            scope: l
                        });
                    s[a] = bson$1.Code.toExtendedJSON(c, t)
                } else if ("DBRef" === u._bsontype && u.oid) {
                var f = serializeDocument(u.oid, t),
                    h = Object.assign({}, u, {
                        oid: f
                    });
                s[a] = bson$1.DBRef.toExtendedJSON(h, t)
            } else s[a] = bson$1[u._bsontype].toExtendedJSON(u, t);
            else u instanceof Date ? s[a] = serializeValue(u, t) : null != u && "object" === (void 0 === u ? "undefined" : _typeof$2(u)) && (s[a] = serializeDocument(u, t));
            if (s[a] = serializeValue(u, t), u instanceof RegExp) {
                var d = u.flags;
                void 0 === d && (d = u.toString().match(/[gimuy]*$/)[0]), s[a] = bson$1.BSONRegExp.toExtendedJSON({
                    pattern: u.source,
                    options: d
                })
            }
        }
        return s
    }
    var ext_json = {
            parse: parse,
            stringify: stringify,
            setBSONModule: setBSONModule,
            BSON: BSON$4
        },
        mongodbExtjson = {
            parse: ext_json.parse,
            stringify: ext_json.stringify,
            setBSONModule: ext_json.setBSONModule,
            BSON: ext_json.BSON
        },
        mongodbExtjson_1 = mongodbExtjson.parse,
        mongodbExtjson_2 = mongodbExtjson.stringify,
        ContentTypes = function() {
            function e() {}
            return e.APPLICATION_JSON = "application/json", e.TEXT_EVENT_STREAM = "text/event-stream", e
        }(),
        Headers = function() {
            function e() {}
            return e.getAuthorizationBearer = function(t) {
                return e.AUTHORIZATION_BEARER + " " + t
            }, e.CONTENT_TYPE_CANON = "Content-Type", e.CONTENT_TYPE = e.CONTENT_TYPE_CANON.toLocaleLowerCase(), e.AUTHORIZATION_CANON = "Authorization", e.AUTHORIZATION = e.AUTHORIZATION_CANON.toLocaleLowerCase(), e.ACCEPT_CANON = "Accept", e.ACCEPT = e.ACCEPT_CANON.toLocaleLowerCase(), e.AUTHORIZATION_BEARER = "Bearer", e
        }(),
        __extends = (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            },
            function(e, t) {
                function r() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }),
        extendStatics, _Error = function(e) {
            Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this), this.message = e, this.name = this.constructor.name
        };
    _Error.prototype = Object.create(Error.prototype);
    var StitchError = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        }(_Error),
        _a, StitchRequestErrorCode;
    ! function(e) {
        e[e.TRANSPORT_ERROR = 0] = "TRANSPORT_ERROR", e[e.DECODING_ERROR = 1] = "DECODING_ERROR", e[e.ENCODING_ERROR = 2] = "ENCODING_ERROR"
    }(StitchRequestErrorCode || (StitchRequestErrorCode = {}));
    var requestErrorCodeDescs = (_a = {}, _a[StitchRequestErrorCode.TRANSPORT_ERROR] = "the request transport encountered an error communicating with Stitch", _a[StitchRequestErrorCode.DECODING_ERROR] = "an error occurred while decoding a response from Stitch", _a[StitchRequestErrorCode.ENCODING_ERROR] = "an error occurred while encoding a request for Stitch", _a),
        __extends$1 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchRequestError = function(e) {
            function t(t, r) {
                var n = this,
                    o = "(" + StitchRequestErrorCode[r] + "): " + requestErrorCodeDescs[r] + ": " + t.message;
                return (n = e.call(this, o) || this).underlyingError = t, n.errorCode = r, n.errorCodeName = StitchRequestErrorCode[r], n
            }
            return __extends$1(t, e), t
        }(StitchError),
        StitchServiceErrorCode;
    ! function(e) {
        e[e.MissingAuthReq = 0] = "MissingAuthReq", e[e.InvalidSession = 1] = "InvalidSession", e[e.UserAppDomainMismatch = 2] = "UserAppDomainMismatch", e[e.DomainNotAllowed = 3] = "DomainNotAllowed", e[e.ReadSizeLimitExceeded = 4] = "ReadSizeLimitExceeded", e[e.InvalidParameter = 5] = "InvalidParameter", e[e.MissingParameter = 6] = "MissingParameter", e[e.TwilioError = 7] = "TwilioError", e[e.GCMError = 8] = "GCMError", e[e.HTTPError = 9] = "HTTPError", e[e.AWSError = 10] = "AWSError", e[e.MongoDBError = 11] = "MongoDBError", e[e.ArgumentsNotAllowed = 12] = "ArgumentsNotAllowed", e[e.FunctionExecutionError = 13] = "FunctionExecutionError", e[e.NoMatchingRuleFound = 14] = "NoMatchingRuleFound", e[e.InternalServerError = 15] = "InternalServerError", e[e.AuthProviderNotFound = 16] = "AuthProviderNotFound", e[e.AuthProviderAlreadyExists = 17] = "AuthProviderAlreadyExists", e[e.ServiceNotFound = 18] = "ServiceNotFound", e[e.ServiceTypeNotFound = 19] = "ServiceTypeNotFound", e[e.ServiceAlreadyExists = 20] = "ServiceAlreadyExists", e[e.ServiceCommandNotFound = 21] = "ServiceCommandNotFound", e[e.ValueNotFound = 22] = "ValueNotFound", e[e.ValueAlreadyExists = 23] = "ValueAlreadyExists", e[e.ValueDuplicateName = 24] = "ValueDuplicateName", e[e.FunctionNotFound = 25] = "FunctionNotFound", e[e.FunctionAlreadyExists = 26] = "FunctionAlreadyExists", e[e.FunctionDuplicateName = 27] = "FunctionDuplicateName", e[e.FunctionSyntaxError = 28] = "FunctionSyntaxError", e[e.FunctionInvalid = 29] = "FunctionInvalid", e[e.IncomingWebhookNotFound = 30] = "IncomingWebhookNotFound", e[e.IncomingWebhookAlreadyExists = 31] = "IncomingWebhookAlreadyExists", e[e.IncomingWebhookDuplicateName = 32] = "IncomingWebhookDuplicateName", e[e.RuleNotFound = 33] = "RuleNotFound", e[e.ApiKeyNotFound = 34] = "ApiKeyNotFound", e[e.RuleAlreadyExists = 35] = "RuleAlreadyExists", e[e.RuleDuplicateName = 36] = "RuleDuplicateName", e[e.AuthProviderDuplicateName = 37] = "AuthProviderDuplicateName", e[e.RestrictedHost = 38] = "RestrictedHost", e[e.ApiKeyAlreadyExists = 39] = "ApiKeyAlreadyExists", e[e.IncomingWebhookAuthFailed = 40] = "IncomingWebhookAuthFailed", e[e.ExecutionTimeLimitExceeded = 41] = "ExecutionTimeLimitExceeded", e[e.FunctionNotCallable = 42] = "FunctionNotCallable", e[e.UserAlreadyConfirmed = 43] = "UserAlreadyConfirmed", e[e.UserNotFound = 44] = "UserNotFound", e[e.UserDisabled = 45] = "UserDisabled", e[e.Unknown = 46] = "Unknown"
    }(StitchServiceErrorCode || (StitchServiceErrorCode = {}));
    var apiErrorCodes = {
        MissingAuthReq: StitchServiceErrorCode.MissingAuthReq,
        InvalidSession: StitchServiceErrorCode.InvalidSession,
        UserAppDomainMismatch: StitchServiceErrorCode.UserAppDomainMismatch,
        DomainNotAllowed: StitchServiceErrorCode.DomainNotAllowed,
        ReadSizeLimitExceeded: StitchServiceErrorCode.ReadSizeLimitExceeded,
        InvalidParameter: StitchServiceErrorCode.InvalidParameter,
        MissingParameter: StitchServiceErrorCode.MissingParameter,
        TwilioError: StitchServiceErrorCode.TwilioError,
        GCMError: StitchServiceErrorCode.GCMError,
        HTTPError: StitchServiceErrorCode.HTTPError,
        AWSError: StitchServiceErrorCode.AWSError,
        MongoDBError: StitchServiceErrorCode.MongoDBError,
        ArgumentsNotAllowed: StitchServiceErrorCode.ArgumentsNotAllowed,
        FunctionExecutionError: StitchServiceErrorCode.FunctionExecutionError,
        NoMatchingRuleFound: StitchServiceErrorCode.NoMatchingRuleFound,
        InternalServerError: StitchServiceErrorCode.InternalServerError,
        AuthProviderNotFound: StitchServiceErrorCode.AuthProviderNotFound,
        AuthProviderAlreadyExists: StitchServiceErrorCode.AuthProviderAlreadyExists,
        ServiceNotFound: StitchServiceErrorCode.ServiceNotFound,
        ServiceTypeNotFound: StitchServiceErrorCode.ServiceTypeNotFound,
        ServiceAlreadyExists: StitchServiceErrorCode.ServiceAlreadyExists,
        ServiceCommandNotFound: StitchServiceErrorCode.ServiceCommandNotFound,
        ValueNotFound: StitchServiceErrorCode.ValueNotFound,
        ValueAlreadyExists: StitchServiceErrorCode.ValueAlreadyExists,
        ValueDuplicateName: StitchServiceErrorCode.ValueDuplicateName,
        FunctionNotFound: StitchServiceErrorCode.FunctionNotFound,
        FunctionAlreadyExists: StitchServiceErrorCode.FunctionAlreadyExists,
        FunctionDuplicateName: StitchServiceErrorCode.FunctionDuplicateName,
        FunctionSyntaxError: StitchServiceErrorCode.FunctionSyntaxError,
        FunctionInvalid: StitchServiceErrorCode.FunctionInvalid,
        IncomingWebhookNotFound: StitchServiceErrorCode.IncomingWebhookNotFound,
        IncomingWebhookAlreadyExists: StitchServiceErrorCode.IncomingWebhookAlreadyExists,
        IncomingWebhookDuplicateName: StitchServiceErrorCode.IncomingWebhookDuplicateName,
        RuleNotFound: StitchServiceErrorCode.RuleNotFound,
        APIKeyNotFound: StitchServiceErrorCode.ApiKeyNotFound,
        RuleAlreadyExists: StitchServiceErrorCode.RuleAlreadyExists,
        RuleDuplicateName: StitchServiceErrorCode.RuleDuplicateName,
        AuthProviderDuplicateName: StitchServiceErrorCode.AuthProviderDuplicateName,
        RestrictedHost: StitchServiceErrorCode.RestrictedHost,
        APIKeyAlreadyExists: StitchServiceErrorCode.ApiKeyAlreadyExists,
        IncomingWebhookAuthFailed: StitchServiceErrorCode.IncomingWebhookAuthFailed,
        ExecutionTimeLimitExceeded: StitchServiceErrorCode.ExecutionTimeLimitExceeded,
        FunctionNotCallable: StitchServiceErrorCode.FunctionNotCallable,
        UserAlreadyConfirmed: StitchServiceErrorCode.UserAlreadyConfirmed,
        UserNotFound: StitchServiceErrorCode.UserNotFound,
        UserDisabled: StitchServiceErrorCode.UserDisabled
    };

    function stitchServiceErrorCodeFromApi(e) {
        return e in apiErrorCodes ? apiErrorCodes[e] : StitchServiceErrorCode.Unknown
    }
    var __extends$2 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchServiceError = function(e) {
            function t(t, r) {
                void 0 === r && (r = StitchServiceErrorCode.Unknown);
                var n = e.call(this, t) || this;
                return n.message = t, n.errorCode = r, n.errorCodeName = StitchServiceErrorCode[r], n
            }
            return __extends$2(t, e), t
        }(StitchError),
        Fields, Method;

    function wrapDecodingError(e) {
        return e instanceof StitchError ? e : new StitchRequestError(e, StitchRequestErrorCode.DECODING_ERROR)
    }

    function handleRequestError(e) {
        if (void 0 === e.body) throw new StitchServiceError("received unexpected status code " + e.statusCode, StitchServiceErrorCode.Unknown);
        var t;
        try {
            t = e.body
        } catch (t) {
            throw new StitchServiceError("received unexpected status code " + e.statusCode, StitchServiceErrorCode.Unknown)
        }
        var r = handleRichError(e, t);
        throw new StitchServiceError(r, StitchServiceErrorCode.Unknown)
    }

    function handleRichError(e, t) {
        if (void 0 === e.headers[Headers.CONTENT_TYPE] || void 0 !== e.headers[Headers.CONTENT_TYPE] && e.headers[Headers.CONTENT_TYPE] !== ContentTypes.APPLICATION_JSON) return t;
        var r = JSON.parse(t);
        if (!(r instanceof Object)) return t;
        var n = r;
        if (void 0 === n[Fields.ERROR]) return t;
        var o = n[Fields.ERROR];
        if (void 0 === n[Fields.ERROR_CODE]) return o;
        var i = n[Fields.ERROR_CODE];
        throw new StitchServiceError(o, stitchServiceErrorCodeFromApi(i))
    }! function(e) {
        e.ERROR = "error", e.ERROR_CODE = "error_code"
    }(Fields || (Fields = {})),
    function(e) {
        e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.TRACE = "TRACE", e.PATCH = "PATCH"
    }(Method || (Method = {}));
    var Method$1 = Method,
        Event = function() {
            function e(e, t) {
                this.eventName = e, this.data = t
            }
            return e.MESSAGE_EVENT = "message", e
        }(),
        StitchEvent = function() {
            function e(t, r, n) {
                this.eventName = t, r = r || "";
                for (var o = [], i = 0; i < r.length; i++) {
                    var s = r[i];
                    switch (s) {
                        case "%":
                            if (i + 2 >= r.length) break;
                            var a = void 0;
                            switch (r.substring(i + 1, i + 3)) {
                                case "25":
                                    a = !0, o.push("%");
                                    break;
                                case "0A":
                                    a = !0, o.push("\n");
                                    break;
                                case "0D":
                                    a = !0, o.push("\r");
                                    break;
                                default:
                                    a = !1
                            }
                            if (a) {
                                i += 2;
                                continue
                            }
                    }
                    o.push(s)
                }
                var u = o.join("");
                switch (this.eventName) {
                    case e.ERROR_EVENT_NAME:
                        var l = void 0,
                            c = void 0;
                        try {
                            var f = mongodbExtjson_1(u, {
                                strict: !1
                            });
                            l = f[ErrorFields.Error], c = stitchServiceErrorCodeFromApi(f[ErrorFields.ErrorCode])
                        } catch (e) {
                            l = u, c = StitchServiceErrorCode.Unknown
                        }
                        this.error = new StitchServiceError(l, c);
                        break;
                    case Event.MESSAGE_EVENT:
                        this.data = mongodbExtjson_1(u, {
                            strict: !1
                        }), n && (this.data = n.decode(this.data))
                }
            }
            return e.fromEvent = function(t, r) {
                return new e(t.eventName, t.data, r)
            }, e.ERROR_EVENT_NAME = "error", e
        }(),
        ErrorFields;
    ! function(e) {
        e.Error = "error", e.ErrorCode = "error_code"
    }(ErrorFields || (ErrorFields = {}));
    var Stream = function() {
            function e(e, t) {
                this.eventStream = e, this.decoder = t, this.listeners = []
            }
            return e.prototype.next = function() {
                var e = this;
                return this.eventStream.nextEvent().then(function(t) {
                    var r = StitchEvent.fromEvent(t, e.decoder);
                    if (r.eventName === StitchEvent.ERROR_EVENT_NAME) throw r.error;
                    return r.eventName === Event.MESSAGE_EVENT ? r.data : e.next()
                })
            }, e.prototype.onNext = function(e) {
                var t = this,
                    r = {
                        onEvent: function(r) {
                            var n = StitchEvent.fromEvent(r, t.decoder);
                            n.eventName === Event.MESSAGE_EVENT && e(n.data)
                        }
                    };
                this.eventStream.addListener(r)
            }, e.prototype.onError = function(e) {
                var t = this,
                    r = {
                        onEvent: function(r) {
                            var n = StitchEvent.fromEvent(r, t.decoder);
                            n.eventName === StitchEvent.ERROR_EVENT_NAME && e(n.error)
                        }
                    };
                this.eventStream.addListener(r)
            }, e.prototype.addListener = function(e) {
                var t = this,
                    r = {
                        onEvent: function(r) {
                            var n = StitchEvent.fromEvent(r, t.decoder);
                            n.eventName === StitchEvent.ERROR_EVENT_NAME ? e.onError && e.onError(n.error) : e.onNext && e.onNext(n.data)
                        }
                    };
                this.listeners.push([e, r]), this.eventStream.addListener(r)
            }, e.prototype.removeListener = function(e) {
                for (var t = -1, r = 0; r < this.listeners.length; r++)
                    if (this.listeners[r][0] === e) {
                        t = r;
                        break
                    } if (-1 !== t) {
                    var n = this.listeners[t][1];
                    this.listeners.splice(t, 1), this.eventStream.removeListener(n)
                }
            }, e.prototype.close = function() {
                this.eventStream.close()
            }, e
        }(),
        StitchRequest = function() {
            function e(e, t, r, n, o) {
                this.method = e, this.path = t, this.headers = r, this.body = o, this.startedAt = n
            }
            return Object.defineProperty(e.prototype, "builder", {
                get: function() {
                    return new e.Builder(this)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    ! function(e) {
        var t = function() {
            function t(e) {
                void 0 !== e && (this.method = e.method, this.path = e.path, this.headers = e.headers, this.body = e.body, this.startedAt = e.startedAt)
            }
            return t.prototype.withMethod = function(e) {
                return this.method = e, this
            }, t.prototype.withPath = function(e) {
                return this.path = e, this
            }, t.prototype.withHeaders = function(e) {
                return this.headers = e, this
            }, t.prototype.withBody = function(e) {
                return this.body = e, this
            }, t.prototype.build = function() {
                if (void 0 === this.method) throw Error("must set method");
                if (void 0 === this.path) throw Error("must set non-empty path");
                return void 0 === this.startedAt && (this.startedAt = Date.now() / 1e3), new e(this.method, this.path, void 0 === this.headers ? {} : this.headers, this.startedAt, this.body)
            }, t
        }();
        e.Builder = t
    }(StitchRequest || (StitchRequest = {}));
    var __extends$3 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchAuthRequest = function(e) {
            function t(t, r, n) {
                void 0 === r && (r = !1), void 0 === n && (n = !0);
                var o = e.call(this, t.method, t.path, t.headers, t.startedAt, t.body) || this;
                return o.useRefreshToken = r, o.shouldRefreshOnFailure = n, o
            }
            return __extends$3(t, e), Object.defineProperty(t.prototype, "builder", {
                get: function() {
                    return new t.Builder(this)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(StitchRequest);
    ! function(e) {
        var t = function(t) {
            function r(e) {
                return t.call(this, e) || this
            }
            return __extends$3(r, t), r.prototype.withAccessToken = function() {
                return this.useRefreshToken = !1, this
            }, r.prototype.withRefreshToken = function() {
                return this.useRefreshToken = !0, this
            }, r.prototype.withShouldRefreshOnFailure = function(e) {
                return this.shouldRefreshOnFailure = e, this
            }, r.prototype.build = function() {
                return this.useRefreshToken && (this.shouldRefreshOnFailure = !1), new e(t.prototype.build.call(this), this.useRefreshToken, this.shouldRefreshOnFailure)
            }, r
        }(StitchRequest.Builder);
        e.Builder = t
    }(StitchAuthRequest || (StitchAuthRequest = {}));
    var __extends$4 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchAuthDocRequest = function(e) {
            function t(t, r) {
                var n = this;
                return (n = t instanceof StitchAuthRequest ? e.call(this, t, t.useRefreshToken, t.shouldRefreshOnFailure) || this : e.call(this, t) || this).document = r, n
            }
            return __extends$4(t, e), Object.defineProperty(t.prototype, "builder", {
                get: function() {
                    return new t.Builder(this)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(StitchAuthRequest);
    ! function(e) {
        var t = function(t) {
            function r(e) {
                var r = t.call(this, e) || this;
                return void 0 !== e && (r.document = e.document, r.useRefreshToken = e.useRefreshToken), r
            }
            return __extends$4(r, t), r.prototype.withDocument = function(e) {
                return this.document = e, this
            }, r.prototype.withAccessToken = function() {
                return this.useRefreshToken = !1, this
            }, r.prototype.build = function() {
                if (void 0 === this.document || !(this.document instanceof Object)) throw new Error("document must be set: " + this.document);
                return void 0 === this.headers && this.withHeaders({}), this.headers[Headers.CONTENT_TYPE] = ContentTypes.APPLICATION_JSON, this.withBody(mongodbExtjson_2(this.document)), new e(t.prototype.build.call(this), this.document)
            }, r
        }(StitchAuthRequest.Builder);
        e.Builder = t
    }(StitchAuthDocRequest || (StitchAuthDocRequest = {}));
    var __extends$5 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchDocRequest = function(e) {
            function t(t, r) {
                var n = e.call(this, t.method, t.path, t.headers, t.startedAt, t.body) || this;
                return n.document = r, n
            }
            return __extends$5(t, e), Object.defineProperty(t.prototype, "builder", {
                get: function() {
                    return new t.Builder(this)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(StitchRequest),
        _a$1, StitchClientErrorCode;
    ! function(e) {
        var t = function(t) {
            function r(e) {
                var r = t.call(this, e) || this;
                return void 0 !== e && (r.document = e.document), r
            }
            return __extends$5(r, t), r.prototype.withDocument = function(e) {
                return this.document = e, this
            }, r.prototype.build = function() {
                if (void 0 === this.document || !(this.document instanceof Object)) throw new Error("document must be set");
                return void 0 === this.headers && this.withHeaders({}), this.headers[Headers.CONTENT_TYPE] = ContentTypes.APPLICATION_JSON, this.withBody(mongodbExtjson_2(this.document)), new e(t.prototype.build.call(this), this.document)
            }, r
        }(StitchRequest.Builder);
        e.Builder = t
    }(StitchDocRequest || (StitchDocRequest = {})),
    function(e) {
        e[e.LoggedOutDuringRequest = 0] = "LoggedOutDuringRequest", e[e.MustAuthenticateFirst = 1] = "MustAuthenticateFirst", e[e.UserNoLongerValid = 2] = "UserNoLongerValid", e[e.CouldNotLoadPersistedAuthInfo = 3] = "CouldNotLoadPersistedAuthInfo", e[e.CouldNotPersistAuthInfo = 4] = "CouldNotPersistAuthInfo", e[e.StreamingNotSupported = 5] = "StreamingNotSupported", e[e.StreamClosed = 6] = "StreamClosed"
    }(StitchClientErrorCode || (StitchClientErrorCode = {}));
    var clientErrorCodeDescs = (_a$1 = {}, _a$1[StitchClientErrorCode.LoggedOutDuringRequest] = "logged out while making a request to Stitch", _a$1[StitchClientErrorCode.MustAuthenticateFirst] = "method called requires being authenticated", _a$1[StitchClientErrorCode.UserNoLongerValid] = "user instance being accessed is no longer valid; please get a new user with auth.getUser()", _a$1[StitchClientErrorCode.CouldNotLoadPersistedAuthInfo] = "failed to load stored auth information for Stitch", _a$1[StitchClientErrorCode.CouldNotPersistAuthInfo] = "failed to save auth information for Stitch", _a$1[StitchClientErrorCode.StreamingNotSupported] = "streaming not supported in this SDK", _a$1[StitchClientErrorCode.StreamClosed] = "stream is closed", _a$1),
        __extends$6 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchClientError = function(e) {
            function t(t) {
                var r = this,
                    n = "(" + StitchClientErrorCode[t] + "): " + clientErrorCodeDescs[t];
                return (r = e.call(this, n) || this).errorCode = t, r.errorCodeName = StitchClientErrorCode[t], r
            }
            return __extends$6(t, e), t
        }(StitchError),
        StitchAuthResponseCredential = function() {
            return function(e, t, r, n) {
                this.authInfo = e, this.providerType = t, this.providerName = r, this.asLink = n
            }
        }();

    function base64Decode(e) {
        var t, r = e.length % 4;
        0 != r ? t = e + "=".repeat(4 - r) : t = e;
        var n = toByteArray_1(t);
        return utf8Slice(n, 0, n.length)
    }

    function base64Encode(e) {
        var t;
        return "undefined" == typeof Uint8Array && (t = utf8ToBytes(e)), t = new Uint8Array(utf8ToBytes(e)), fromByteArray_1(t)
    }

    function utf8ToBytes(e) {
        for (var t, r = 1 / 0, n = e.length, o = null, i = [], s = 0; s < n; s++) {
            if ((t = e.charCodeAt(s)) > 55295 && t < 57344) {
                if (!o) {
                    if (t > 56319) {
                        (r -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    if (s + 1 === n) {
                        (r -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    o = t;
                    continue
                }
                if (t < 56320) {
                    (r -= 3) > -1 && i.push(239, 191, 189), o = t;
                    continue
                }
                t = o - 55296 << 10 | t - 56320 | 65536, o = null
            } else o && ((r -= 3) > -1 && i.push(239, 191, 189), o = null);
            if (t < 128) {
                if ((r -= 1) < 0) break;
                i.push(t)
            } else if (t < 2048) {
                if ((r -= 2) < 0) break;
                i.push(t >> 6 | 192, 63 & t | 128)
            } else if (t < 65536) {
                if ((r -= 3) < 0) break;
                i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
            } else {
                if (!(t < 2097152)) throw new Error("Invalid code point");
                if ((r -= 4) < 0) break;
                i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
            }
        }
        return i
    }

    function utf8Slice(e, t, r) {
        var n = "",
            o = "";
        r = Math.min(e.length, r || 1 / 0);
        for (var i = t = t || 0; i < r; i++) e[i] <= 127 ? (n += decodeUtf8Char(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
        return n + decodeUtf8Char(o)
    }

    function decodeUtf8Char(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {
            return String.fromCharCode(65533)
        }
    }
    var EXPIRES = "exp",
        ISSUED_AT = "iat",
        JWT = function() {
            function e(e, t) {
                this.expires = e, this.issuedAt = t
            }
            return e.fromEncoded = function(t) {
                var r = e.splitToken(t),
                    n = JSON.parse(base64Decode(r[1]));
                return new e(n[EXPIRES], n[ISSUED_AT])
            }, e.splitToken = function(e) {
                var t = e.split(".");
                if (3 !== t.length) throw new Error("Malformed JWT token. The string " + e + " should have 3 parts.");
                return t
            }, e
        }(),
        SLEEP_MILLIS = 6e4,
        EXPIRATION_WINDOW_SECS = 300,
        AccessTokenRefresher = function() {
            function e(e) {
                this.auth = e
            }
            return e.prototype.shouldRefresh = function() {
                var e = this.auth;
                if (void 0 === e) return !1;
                if (!e.isLoggedIn) return !1;
                var t, r = e.authInfo;
                if (void 0 === r) return !1;
                try {
                    t = JWT.fromEncoded(r.accessToken)
                } catch (e) {
                    return console.log(e), !1
                }
                return !(Date.now() / 1e3 < t.expires - EXPIRATION_WINDOW_SECS)
            }, e.prototype.run = function() {
                var e = this;
                this.shouldRefresh() ? this.auth.refreshAccessToken().then(function() {
                    e.nextTimeout = setTimeout(function() {
                        return e.run()
                    }, SLEEP_MILLIS)
                }).catch(function() {
                    e.nextTimeout = setTimeout(function() {
                        return e.run()
                    }, SLEEP_MILLIS)
                }) : this.nextTimeout = setTimeout(function() {
                    return e.run()
                }, SLEEP_MILLIS)
            }, e.prototype.stop = function() {
                clearTimeout(this.nextTimeout)
            }, e
        }(),
        __extends$7 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$1;
    ! function(e) {
        e.USER_ID = "user_id", e.DEVICE_ID = "device_id", e.ACCESS_TOKEN = "access_token", e.REFRESH_TOKEN = "refresh_token"
    }(Fields$1 || (Fields$1 = {}));
    var ApiAuthInfo = function(e) {
            function t(t, r, n, o) {
                return e.call(this, t, r, n, o) || this
            }
            return __extends$7(t, e), t.fromJSON = function(e) {
                return new t(e[Fields$1.USER_ID], e[Fields$1.DEVICE_ID], e[Fields$1.ACCESS_TOKEN], e[Fields$1.REFRESH_TOKEN])
            }, t.prototype.toJSON = function() {
                var e;
                return (e = {})[Fields$1.USER_ID] = this.userId, e[Fields$1.DEVICE_ID] = this.deviceId, e[Fields$1.ACCESS_TOKEN] = this.accessToken, e[Fields$1.REFRESH_TOKEN] = this.refreshToken, e
            }, t
        }(AuthInfo),
        Assertions = function() {
            function e() {}
            return e.keyPresent = function(e, t) {
                if (void 0 === t[e]) throw new Error("expected " + e + " to be present")
            }, e
        }(),
        NAME = "name",
        EMAIL = "email",
        PICTURE_Url = "picture",
        FIRST_NAME = "first_name",
        LAST_NAME = "last_name",
        GENDER = "gender",
        BIRTHDAY = "birthday",
        MIN_AGE = "min_age",
        MAX_AGE = "max_age",
        StitchUserProfileImpl = function() {
            function e(e, t, r) {
                void 0 === t && (t = {}), void 0 === r && (r = []), this.userType = e, this.data = t, this.identities = r
            }
            return e.empty = function() {
                return new e
            }, Object.defineProperty(e.prototype, "name", {
                get: function() {
                    return this.data[NAME]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "email", {
                get: function() {
                    return this.data[EMAIL]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pictureUrl", {
                get: function() {
                    return this.data[PICTURE_Url]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "firstName", {
                get: function() {
                    return this.data[FIRST_NAME]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "lastName", {
                get: function() {
                    return this.data[LAST_NAME]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gender", {
                get: function() {
                    return this.data[GENDER]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "birthday", {
                get: function() {
                    return this.data[BIRTHDAY]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "minAge", {
                get: function() {
                    var e = this.data[MIN_AGE];
                    if (void 0 !== e) return +e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxAge", {
                get: function() {
                    var e = this.data[MAX_AGE];
                    if (void 0 !== e) return +e
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        StitchUserIdentity = function() {
            return function(e, t) {
                this.id = e, this.providerType = t
            }
        }(),
        __extends$8 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$2;
    ! function(e) {
        e.ID = "id", e.PROVIDER_TYPE = "provider_type"
    }(Fields$2 || (Fields$2 = {}));
    var ApiStitchUserIdentity = function(e) {
            function t(t, r) {
                return e.call(this, t, r) || this
            }
            return __extends$8(t, e), t.fromJSON = function(e) {
                return new t(e[Fields$2.ID], e[Fields$2.PROVIDER_TYPE])
            }, t.prototype.toJSON = function() {
                var e;
                return (e = {})[Fields$2.ID] = this.id, e[Fields$2.PROVIDER_TYPE] = this.providerType, e
            }, t
        }(StitchUserIdentity),
        __extends$9 = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$3;
    ! function(e) {
        e.DATA = "data", e.USER_TYPE = "type", e.IDENTITIES = "identities"
    }(Fields$3 || (Fields$3 = {}));
    var ApiCoreUserProfile = function(e) {
            function t(t, r, n) {
                return e.call(this, t, r, n) || this
            }
            return __extends$9(t, e), t.fromJSON = function(e) {
                return Assertions.keyPresent(Fields$3.USER_TYPE, e), Assertions.keyPresent(Fields$3.DATA, e), Assertions.keyPresent(Fields$3.IDENTITIES, e), new t(e[Fields$3.USER_TYPE], e[Fields$3.DATA], e[Fields$3.IDENTITIES].map(ApiStitchUserIdentity.fromJSON))
            }, t.prototype.toJSON = function() {
                var e;
                return (e = {})[Fields$3.DATA] = this.data, e[Fields$3.USER_TYPE] = this.userType, e[Fields$3.IDENTITIES] = this.identities, e
            }, t
        }(StitchUserProfileImpl),
        __extends$a = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$4;
    ! function(e) {
        e.ID = "id", e.PROVIDER_TYPE = "provider_type"
    }(Fields$4 || (Fields$4 = {}));
    var StoreStitchUserIdentity = function(e) {
            function t(t, r) {
                return e.call(this, t, r) || this
            }
            return __extends$a(t, e), t.decode = function(e) {
                return new t(e[Fields$4.ID], e[Fields$4.PROVIDER_TYPE])
            }, t.prototype.encode = function() {
                var e;
                return (e = {})[Fields$4.ID] = this.id, e[Fields$4.PROVIDER_TYPE] = this.providerType, e
            }, t
        }(StitchUserIdentity),
        __extends$b = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$5;
    ! function(e) {
        e.DATA = "data", e.USER_TYPE = "type", e.IDENTITIES = "identities"
    }(Fields$5 || (Fields$5 = {}));
    var StoreCoreUserProfile = function(e) {
            function t(t, r, n) {
                var o = e.call(this, t, r, n) || this;
                return o.userType = t, o.data = r, o.identities = n, o
            }
            return __extends$b(t, e), t.decode = function(e) {
                return e ? new t(e[Fields$5.USER_TYPE], e[Fields$5.DATA], e[Fields$5.IDENTITIES].map(function(e) {
                    return StoreStitchUserIdentity.decode(e)
                })) : void 0
            }, t.prototype.encode = function() {
                var e;
                return (e = {})[Fields$5.DATA] = this.data, e[Fields$5.USER_TYPE] = this.userType, e[Fields$5.IDENTITIES] = this.identities.map(function(e) {
                    return e.encode()
                }), e
            }, t
        }(StitchUserProfileImpl),
        __extends$c = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        Fields$6;

    function readFromStorage(e) {
        var t = e.get(StoreAuthInfo.STORAGE_NAME);
        if (t) return StoreAuthInfo.decode(JSON.parse(t))
    }

    function writeToStorage(e, t) {
        var r = new StoreAuthInfo(e.userId, e.deviceId, e.accessToken, e.refreshToken, e.loggedInProviderType, e.loggedInProviderName, e.userProfile ? new StoreCoreUserProfile(e.userProfile.userType, e.userProfile.data, e.userProfile.identities.map(function(e) {
            return new StoreStitchUserIdentity(e.id, e.providerType)
        })) : void 0);
        t.set(StoreAuthInfo.STORAGE_NAME, JSON.stringify(r.encode()))
    }! function(e) {
        e.USER_ID = "user_id", e.DEVICE_ID = "device_id", e.ACCESS_TOKEN = "access_token", e.REFRESH_TOKEN = "refresh_token", e.LOGGED_IN_PROVIDER_TYPE = "logged_in_provider_type", e.LOGGED_IN_PROVIDER_NAME = "logged_in_provider_name", e.USER_PROFILE = "user_profile"
    }(Fields$6 || (Fields$6 = {}));
    var StoreAuthInfo = function(e) {
            function t(t, r, n, o, i, s, a) {
                var u = e.call(this, t, r, n, o, i, s, a) || this;
                return u.userProfile = a, u
            }
            return __extends$c(t, e), t.decode = function(e) {
                var r = e[Fields$6.USER_ID],
                    n = e[Fields$6.DEVICE_ID],
                    o = e[Fields$6.ACCESS_TOKEN],
                    i = e[Fields$6.REFRESH_TOKEN],
                    s = e[Fields$6.LOGGED_IN_PROVIDER_TYPE],
                    a = e[Fields$6.LOGGED_IN_PROVIDER_NAME],
                    u = e[Fields$6.USER_PROFILE];
                return new t(r, n, o, i, s, a, StoreCoreUserProfile.decode(u))
            }, t.prototype.encode = function() {
                var e = {};
                return e[Fields$6.USER_ID] = this.userId, e[Fields$6.ACCESS_TOKEN] = this.accessToken, e[Fields$6.REFRESH_TOKEN] = this.refreshToken, e[Fields$6.DEVICE_ID] = this.deviceId, e[Fields$6.LOGGED_IN_PROVIDER_NAME] = this.loggedInProviderName, e[Fields$6.LOGGED_IN_PROVIDER_TYPE] = this.loggedInProviderType, e[Fields$6.USER_PROFILE] = this.userProfile ? this.userProfile.encode() : void 0, e
            }, t.STORAGE_NAME = "auth_info", t
        }(AuthInfo),
        OPTIONS = "options",
        DEVICE = "device",
        CoreStitchAuth = function() {
            function e(e, t, r, n) {
                var o;
                void 0 === n && (n = !0), this.requestClient = e, this.authRoutes = t, this.storage = r;
                try {
                    o = readFromStorage(r)
                } catch (e) {
                    throw new StitchClientError(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo)
                }
                this.authInfo = void 0 === o ? AuthInfo.empty() : o, this.prepUser(), n && (this.accessTokenRefresher = new AccessTokenRefresher(this), this.accessTokenRefresher.run())
            }
            return Object.defineProperty(e.prototype, "isLoggedIn", {
                get: function() {
                    return void 0 !== this.currentUser
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "user", {
                get: function() {
                    return this.currentUser
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.doAuthenticatedRequest = function(e) {
                var t = this;
                return this.requestClient.doRequest(this.prepareAuthRequest(e)).catch(function(r) {
                    return t.handleAuthFailure(r, e)
                })
            }, e.prototype.doAuthenticatedRequestWithDecoder = function(e, t) {
                return this.doAuthenticatedRequest(e).then(function(e) {
                    var r = mongodbExtjson_1(e.body, {
                        strict: !1
                    });
                    return t ? t.decode(r) : r
                }).catch(function(e) {
                    throw wrapDecodingError(e)
                })
            }, e.prototype.openAuthenticatedEventStream = function(e, t) {
                var r, n = this;
                if (void 0 === t && (t = !0), !this.isLoggedIn) throw new StitchClientError(StitchClientErrorCode.MustAuthenticateFirst);
                return r = e.useRefreshToken ? this.authInfo.refreshToken : this.authInfo.accessToken, this.requestClient.doStreamRequest(e.builder.withPath(e.path + "&stitch_at=" + r).build(), t, function() {
                    return n.openAuthenticatedEventStream(e, !1)
                }).catch(function(r) {
                    return n.handleAuthFailureForEventStream(r, e, t)
                })
            }, e.prototype.openAuthenticatedStreamWithDecoder = function(e, t) {
                return this.openAuthenticatedEventStream(e).then(function(e) {
                    return new Stream(e, t)
                })
            }, e.prototype.refreshAccessToken = function() {
                var e = this,
                    t = (new StitchAuthRequest.Builder).withRefreshToken().withPath(this.authRoutes.sessionRoute).withMethod(Method$1.POST);
                return this.doAuthenticatedRequest(t.build()).then(function(t) {
                    try {
                        var r = ApiAuthInfo.fromJSON(JSON.parse(t.body));
                        e.authInfo = e.authInfo.merge(r)
                    } catch (e) {
                        throw new StitchRequestError(e, StitchRequestErrorCode.DECODING_ERROR)
                    }
                    try {
                        writeToStorage(e.authInfo, e.storage)
                    } catch (e) {
                        throw new StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo)
                    }
                })
            }, e.prototype.loginWithCredentialInternal = function(e) {
                return e instanceof StitchAuthResponseCredential ? this.processLogin(e, e.authInfo, e.asLink) : this.isLoggedIn ? e.providerCapabilities.reusesExistingSession && e.providerType === this.currentUser.loggedInProviderType ? Promise.resolve(this.currentUser) : (this.logoutInternal(), this.doLogin(e, !1)) : this.doLogin(e, !1)
            }, e.prototype.linkUserWithCredentialInternal = function(e, t) {
                return void 0 !== this.currentUser && e.id !== this.currentUser.id ? Promise.reject(new StitchClientError(StitchClientErrorCode.UserNoLongerValid)) : this.doLogin(t, !0)
            }, e.prototype.logoutInternal = function() {
                var e = this;
                return this.isLoggedIn ? this.doLogout().then(function() {
                    e.clearAuth()
                }).catch(function() {
                    e.clearAuth()
                }) : Promise.resolve()
            }, Object.defineProperty(e.prototype, "hasDeviceId", {
                get: function() {
                    return void 0 !== this.authInfo.deviceId && "" !== this.authInfo.deviceId && "000000000000000000000000" !== this.authInfo.deviceId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "deviceId", {
                get: function() {
                    if (this.hasDeviceId) return this.authInfo.deviceId
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.prepareAuthRequest = function(e) {
                if (!this.isLoggedIn) throw new StitchClientError(StitchClientErrorCode.MustAuthenticateFirst);
                var t = e.builder,
                    r = t.headers || {};
                return e.useRefreshToken ? r[Headers.AUTHORIZATION] = Headers.getAuthorizationBearer(this.authInfo.refreshToken) : r[Headers.AUTHORIZATION] = Headers.getAuthorizationBearer(this.authInfo.accessToken), t.withHeaders(r), t.build()
            }, e.prototype.handleAuthFailureForEventStream = function(e, t, r) {
                var n = this;
                if (void 0 === r && (r = !0), !(e instanceof StitchServiceError) || e.errorCode !== StitchServiceErrorCode.InvalidSession) throw e;
                if (t.useRefreshToken || !t.shouldRefreshOnFailure) throw this.clearAuth(), e;
                return this.tryRefreshAccessToken(t.startedAt).then(function() {
                    return n.openAuthenticatedEventStream(t.builder.withShouldRefreshOnFailure(!1).build(), r)
                })
            }, e.prototype.handleAuthFailure = function(e, t) {
                var r = this;
                if (!(e instanceof StitchServiceError) || e.errorCode !== StitchServiceErrorCode.InvalidSession) throw e;
                if (t.useRefreshToken || !t.shouldRefreshOnFailure) throw this.clearAuth(), e;
                return this.tryRefreshAccessToken(t.startedAt).then(function() {
                    return r.doAuthenticatedRequest(t.builder.withShouldRefreshOnFailure(!1).build())
                })
            }, e.prototype.tryRefreshAccessToken = function(e) {
                if (!this.isLoggedIn) throw new StitchClientError(StitchClientErrorCode.LoggedOutDuringRequest);
                try {
                    if (JWT.fromEncoded(this.authInfo.accessToken).issuedAt >= e) return Promise.resolve()
                } catch (e) {}
                return this.refreshAccessToken()
            }, e.prototype.prepUser = function() {
                void 0 !== this.authInfo.userId && (this.currentUser = this.userFactory.makeUser(this.authInfo.userId, this.authInfo.loggedInProviderType, this.authInfo.loggedInProviderName, this.authInfo.userProfile))
            }, e.prototype.attachAuthOptions = function(e) {
                var t = {};
                t[DEVICE] = this.deviceInfo, e[OPTIONS] = t
            }, e.prototype.doLogin = function(e, t) {
                var r = this;
                return this.doLoginRequest(e, t).then(function(n) {
                    return r.processLoginResponse(e, n, t)
                }).then(function(e) {
                    return r.onAuthEvent(), e
                })
            }, e.prototype.doLoginRequest = function(e, t) {
                var r = new StitchDocRequest.Builder;
                r.withMethod(Method$1.POST), t ? r.withPath(this.authRoutes.getAuthProviderLinkRoute(e.providerName)) : r.withPath(this.authRoutes.getAuthProviderLoginRoute(e.providerName));
                var n = e.material;
                if (this.attachAuthOptions(n), r.withDocument(n), !t) return this.requestClient.doRequest(r.build());
                var o = new StitchAuthDocRequest(r.build(), r.document);
                return this.doAuthenticatedRequest(o)
            }, e.prototype.processLogin = function(e, t, r) {
                var n = this,
                    o = this.authInfo,
                    i = this.currentUser;
                return t = this.authInfo.merge(new AuthInfo(t.userId, t.deviceId, t.accessToken, t.refreshToken, e.providerType, e.providerName, void 0)), this.authInfo = t, this.currentUser = this.userFactory.makeUser(this.authInfo.userId, e.providerType, e.providerName, void 0), this.doGetUserProfile().then(function(r) {
                    t = t.merge(new AuthInfo(t.userId, t.deviceId, t.accessToken, t.refreshToken, e.providerType, e.providerName, r));
                    try {
                        writeToStorage(t, n.storage)
                    } catch (e) {
                        throw new StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo)
                    }
                    return n.authInfo = t, n.currentUser = n.userFactory.makeUser(n.authInfo.userId, e.providerType, e.providerName, r), n.currentUser
                }).catch(function(e) {
                    throw r ? (n.authInfo = o, n.currentUser = i) : n.clearAuth(), e
                })
            }, e.prototype.processLoginResponse = function(e, t, r) {
                try {
                    if (!t) throw new StitchServiceError("the login response could not be processed for credential: " + e + ";response was undefined");
                    if (!t.body) throw new StitchServiceError("response with status code " + t.statusCode + " has empty body");
                    return this.processLogin(e, ApiAuthInfo.fromJSON(JSON.parse(t.body)), r)
                } catch (e) {
                    throw new StitchRequestError(e, StitchRequestErrorCode.DECODING_ERROR)
                }
            }, e.prototype.doGetUserProfile = function() {
                var e = new StitchAuthRequest.Builder;
                return e.withMethod(Method$1.GET).withPath(this.authRoutes.profileRoute), this.doAuthenticatedRequest(e.build()).then(function(e) {
                    return ApiCoreUserProfile.fromJSON(JSON.parse(e.body))
                }).catch(function(e) {
                    throw e instanceof StitchError ? e : new StitchRequestError(e, StitchRequestErrorCode.DECODING_ERROR)
                })
            }, e.prototype.doLogout = function() {
                var e = new StitchAuthRequest.Builder;
                return e.withRefreshToken().withPath(this.authRoutes.sessionRoute).withMethod(Method$1.DELETE), this.doAuthenticatedRequest(e.build()).then(function() {})
            }, e.prototype.clearAuth = function() {
                if (this.isLoggedIn) {
                    this.authInfo = this.authInfo.loggedOut();
                    try {
                        writeToStorage(this.authInfo, this.storage)
                    } catch (e) {
                        throw new StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo)
                    }
                    this.currentUser = void 0, this.onAuthEvent()
                }
            }, e.prototype.close = function() {
                this.accessTokenRefresher && this.accessTokenRefresher.stop()
            }, e
        }(),
        CoreStitchUserImpl = function() {
            function e(e, t, r, n) {
                this.id = e, this.loggedInProviderType = t, this.loggedInProviderName = r, this.profile = void 0 === n ? StitchUserProfileImpl.empty() : n
            }
            return Object.defineProperty(e.prototype, "userType", {
                get: function() {
                    return this.profile.userType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "identities", {
                get: function() {
                    return this.profile.identities
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        DeviceFields;
    ! function(e) {
        e.DEVICE_ID = "deviceId", e.APP_ID = "appId", e.APP_VERSION = "appVersion", e.PLATFORM = "platform", e.PLATFORM_VERSION = "platformVersion", e.SDK_VERSION = "sdkVersion"
    }(DeviceFields || (DeviceFields = {}));
    var DeviceFields$1 = DeviceFields,
        AnonymousAuthProvider = function() {
            function e() {}
            return e.TYPE = "anon-user", e.DEFAULT_NAME = "anon-user", e
        }(),
        ProviderCapabilities = function() {
            return function(e) {
                void 0 === e && (e = !1), this.reusesExistingSession = e
            }
        }(),
        AnonymousCredential = function() {
            return function(e) {
                void 0 === e && (e = AnonymousAuthProvider.DEFAULT_NAME), this.providerType = AnonymousAuthProvider.TYPE, this.material = {}, this.providerCapabilities = new ProviderCapabilities(!0), this.providerName = e
            }
        }(),
        Fields$7;
    (Fields$7 || (Fields$7 = {})).TOKEN = "token";
    var FacebookAuthProvider = function() {
            function e() {}
            return e.TYPE = "oauth2-facebook", e.DEFAULT_NAME = "oauth2-facebook", e
        }(),
        Fields$8;
    (Fields$8 || (Fields$8 = {})).ACCESS_TOKEN = "accessToken";
    var FacebookCredential = function() {
            function e(e, t) {
                var r;
                void 0 === t && (t = FacebookAuthProvider.DEFAULT_NAME), this.providerType = FacebookAuthProvider.TYPE, this.providerName = t, this.accessToken = e, this.material = ((r = {})[Fields$8.ACCESS_TOKEN] = this.accessToken, r)
            }
            return Object.defineProperty(e.prototype, "providerCapabilities", {
                get: function() {
                    return new ProviderCapabilities(!1)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        Fields$9, Fields$a;
    (Fields$9 || (Fields$9 = {})).AUTH_CODE = "authCode", (Fields$a || (Fields$a = {})).KEY = "key";
    var CoreAuthProviderClient = function() {
            return function(e, t, r) {
                this.providerName = e, this.requestClient = t, this.baseRoute = r
            }
        }(),
        commonjsGlobal$2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule$2(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var map$1 = createCommonjsModule$2(function(e) {
            buffer.Buffer;
            if (void 0 !== commonjsGlobal$2.Map) e.exports = commonjsGlobal$2.Map, e.exports.Map = commonjsGlobal$2.Map;
            else {
                var t = function(e) {
                    this._keys = [], this._values = {};
                    for (var t = 0; t < e.length; t++)
                        if (null != e[t]) {
                            var r = e[t],
                                n = r[0],
                                o = r[1];
                            this._keys.push(n), this._values[n] = {
                                v: o,
                                i: this._keys.length - 1
                            }
                        }
                };
                t.prototype.clear = function() {
                    this._keys = [], this._values = {}
                }, t.prototype.delete = function(e) {
                    var t = this._values[e];
                    return null != t && (delete this._values[e], this._keys.splice(t.i, 1), !0)
                }, t.prototype.entries = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? [r, e._values[r].v] : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, t.prototype.forEach = function(e, t) {
                    t = t || this;
                    for (var r = 0; r < this._keys.length; r++) {
                        var n = this._keys[r];
                        e.call(t, this._values[n].v, n, t)
                    }
                }, t.prototype.get = function(e) {
                    return this._values[e] ? this._values[e].v : void 0
                }, t.prototype.has = function(e) {
                    return null != this._values[e]
                }, t.prototype.keys = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? r : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, t.prototype.set = function(e, t) {
                    return this._values[e] ? (this._values[e].v = t, this) : (this._keys.push(e), this._values[e] = {
                        v: t,
                        i: this._keys.length - 1
                    }, this)
                }, t.prototype.values = function() {
                    var e = this,
                        t = 0;
                    return {
                        next: function() {
                            var r = e._keys[t++];
                            return {
                                value: void 0 !== r ? e._values[r].v : void 0,
                                done: void 0 === r
                            }
                        }
                    }
                }, Object.defineProperty(t.prototype, "size", {
                    enumerable: !0,
                    get: function() {
                        return this._keys.length
                    }
                }), e.exports = t, e.exports.Map = t
            }
        }),
        map_1$1 = map$1.Map;

    function Long$4(e, t) {
        if (!(this instanceof Long$4)) return new Long$4(e, t);
        this._bsontype = "Long", this.low_ = 0 | e, this.high_ = 0 | t
    }
    Long$4.prototype.toInt = function() {
        return this.low_
    }, Long$4.prototype.toNumber = function() {
        return this.high_ * Long$4.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }, Long$4.prototype.toJSON = function() {
        return this.toString()
    }, Long$4.prototype.toString = function(e) {
        var t = e || 10;
        if (t < 2 || 36 < t) throw Error("radix out of range: " + t);
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.equals(Long$4.MIN_VALUE)) {
                var r = Long$4.fromNumber(t),
                    n = this.div(r),
                    o = n.multiply(r).subtract(this);
                return n.toString(t) + o.toInt().toString(t)
            }
            return "-" + this.negate().toString(t)
        }
        var i = Long$4.fromNumber(Math.pow(t, 6));
        o = this;
        for (var s = ""; !o.isZero();) {
            var a = o.div(i),
                u = o.subtract(a.multiply(i)).toInt().toString(t);
            if ((o = a).isZero()) return u + s;
            for (; u.length < 6;) u = "0" + u;
            s = "" + u + s
        }
    }, Long$4.prototype.getHighBits = function() {
        return this.high_
    }, Long$4.prototype.getLowBits = function() {
        return this.low_
    }, Long$4.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : Long$4.TWO_PWR_32_DBL_ + this.low_
    }, Long$4.prototype.getNumBitsAbs = function() {
        if (this.isNegative()) return this.equals(Long$4.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var e = 0 !== this.high_ ? this.high_ : this.low_, t = 31; t > 0 && 0 == (e & 1 << t); t--);
        return 0 !== this.high_ ? t + 33 : t + 1
    }, Long$4.prototype.isZero = function() {
        return 0 === this.high_ && 0 === this.low_
    }, Long$4.prototype.isNegative = function() {
        return this.high_ < 0
    }, Long$4.prototype.isOdd = function() {
        return 1 == (1 & this.low_)
    }, Long$4.prototype.equals = function(e) {
        return this.high_ === e.high_ && this.low_ === e.low_
    }, Long$4.prototype.notEquals = function(e) {
        return this.high_ !== e.high_ || this.low_ !== e.low_
    }, Long$4.prototype.lessThan = function(e) {
        return this.compare(e) < 0
    }, Long$4.prototype.lessThanOrEqual = function(e) {
        return this.compare(e) <= 0
    }, Long$4.prototype.greaterThan = function(e) {
        return this.compare(e) > 0
    }, Long$4.prototype.greaterThanOrEqual = function(e) {
        return this.compare(e) >= 0
    }, Long$4.prototype.compare = function(e) {
        if (this.equals(e)) return 0;
        var t = this.isNegative(),
            r = e.isNegative();
        return t && !r ? -1 : !t && r ? 1 : this.subtract(e).isNegative() ? -1 : 1
    }, Long$4.prototype.negate = function() {
        return this.equals(Long$4.MIN_VALUE) ? Long$4.MIN_VALUE : this.not().add(Long$4.ONE)
    }, Long$4.prototype.add = function(e) {
        var t = this.high_ >>> 16,
            r = 65535 & this.high_,
            n = this.low_ >>> 16,
            o = 65535 & this.low_,
            i = e.high_ >>> 16,
            s = 65535 & e.high_,
            a = e.low_ >>> 16,
            u = 0,
            l = 0,
            c = 0,
            f = 0;
        return c += (f += o + (65535 & e.low_)) >>> 16, f &= 65535, l += (c += n + a) >>> 16, c &= 65535, u += (l += r + s) >>> 16, l &= 65535, u += t + i, u &= 65535, Long$4.fromBits(c << 16 | f, u << 16 | l)
    }, Long$4.prototype.subtract = function(e) {
        return this.add(e.negate())
    }, Long$4.prototype.multiply = function(e) {
        if (this.isZero()) return Long$4.ZERO;
        if (e.isZero()) return Long$4.ZERO;
        if (this.equals(Long$4.MIN_VALUE)) return e.isOdd() ? Long$4.MIN_VALUE : Long$4.ZERO;
        if (e.equals(Long$4.MIN_VALUE)) return this.isOdd() ? Long$4.MIN_VALUE : Long$4.ZERO;
        if (this.isNegative()) return e.isNegative() ? this.negate().multiply(e.negate()) : this.negate().multiply(e).negate();
        if (e.isNegative()) return this.multiply(e.negate()).negate();
        if (this.lessThan(Long$4.TWO_PWR_24_) && e.lessThan(Long$4.TWO_PWR_24_)) return Long$4.fromNumber(this.toNumber() * e.toNumber());
        var t = this.high_ >>> 16,
            r = 65535 & this.high_,
            n = this.low_ >>> 16,
            o = 65535 & this.low_,
            i = e.high_ >>> 16,
            s = 65535 & e.high_,
            a = e.low_ >>> 16,
            u = 65535 & e.low_,
            l = 0,
            c = 0,
            f = 0,
            h = 0;
        return f += (h += o * u) >>> 16, h &= 65535, c += (f += n * u) >>> 16, f &= 65535, c += (f += o * a) >>> 16, f &= 65535, l += (c += r * u) >>> 16, c &= 65535, l += (c += n * a) >>> 16, c &= 65535, l += (c += o * s) >>> 16, c &= 65535, l += t * u + r * a + n * s + o * i, l &= 65535, Long$4.fromBits(f << 16 | h, l << 16 | c)
    }, Long$4.prototype.div = function(e) {
        if (e.isZero()) throw Error("division by zero");
        if (this.isZero()) return Long$4.ZERO;
        if (this.equals(Long$4.MIN_VALUE)) {
            if (e.equals(Long$4.ONE) || e.equals(Long$4.NEG_ONE)) return Long$4.MIN_VALUE;
            if (e.equals(Long$4.MIN_VALUE)) return Long$4.ONE;
            var t = this.shiftRight(1).div(e).shiftLeft(1);
            if (t.equals(Long$4.ZERO)) return e.isNegative() ? Long$4.ONE : Long$4.NEG_ONE;
            var r = this.subtract(e.multiply(t));
            return t.add(r.div(e))
        }
        if (e.equals(Long$4.MIN_VALUE)) return Long$4.ZERO;
        if (this.isNegative()) return e.isNegative() ? this.negate().div(e.negate()) : this.negate().div(e).negate();
        if (e.isNegative()) return this.div(e.negate()).negate();
        var n = Long$4.ZERO;
        for (r = this; r.greaterThanOrEqual(e);) {
            t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            for (var o = Math.ceil(Math.log(t) / Math.LN2), i = o <= 48 ? 1 : Math.pow(2, o - 48), s = Long$4.fromNumber(t), a = s.multiply(e); a.isNegative() || a.greaterThan(r);) t -= i, a = (s = Long$4.fromNumber(t)).multiply(e);
            s.isZero() && (s = Long$4.ONE), n = n.add(s), r = r.subtract(a)
        }
        return n
    }, Long$4.prototype.modulo = function(e) {
        return this.subtract(this.div(e).multiply(e))
    }, Long$4.prototype.not = function() {
        return Long$4.fromBits(~this.low_, ~this.high_)
    }, Long$4.prototype.and = function(e) {
        return Long$4.fromBits(this.low_ & e.low_, this.high_ & e.high_)
    }, Long$4.prototype.or = function(e) {
        return Long$4.fromBits(this.low_ | e.low_, this.high_ | e.high_)
    }, Long$4.prototype.xor = function(e) {
        return Long$4.fromBits(this.low_ ^ e.low_, this.high_ ^ e.high_)
    }, Long$4.prototype.shiftLeft = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.low_;
        if (e < 32) {
            var r = this.high_;
            return Long$4.fromBits(t << e, r << e | t >>> 32 - e)
        }
        return Long$4.fromBits(0, t << e - 32)
    }, Long$4.prototype.shiftRight = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.high_;
        if (e < 32) {
            var r = this.low_;
            return Long$4.fromBits(r >>> e | t << 32 - e, t >> e)
        }
        return Long$4.fromBits(t >> e - 32, t >= 0 ? 0 : -1)
    }, Long$4.prototype.shiftRightUnsigned = function(e) {
        if (0 === (e &= 63)) return this;
        var t = this.high_;
        if (e < 32) {
            var r = this.low_;
            return Long$4.fromBits(r >>> e | t << 32 - e, t >>> e)
        }
        return 32 === e ? Long$4.fromBits(t, 0) : Long$4.fromBits(t >>> e - 32, 0)
    }, Long$4.fromInt = function(e) {
        if (-128 <= e && e < 128) {
            var t = Long$4.INT_CACHE_[e];
            if (t) return t
        }
        var r = new Long$4(0 | e, e < 0 ? -1 : 0);
        return -128 <= e && e < 128 && (Long$4.INT_CACHE_[e] = r), r
    }, Long$4.fromNumber = function(e) {
        return isNaN(e) || !isFinite(e) ? Long$4.ZERO : e <= -Long$4.TWO_PWR_63_DBL_ ? Long$4.MIN_VALUE : e + 1 >= Long$4.TWO_PWR_63_DBL_ ? Long$4.MAX_VALUE : e < 0 ? Long$4.fromNumber(-e).negate() : new Long$4(e % Long$4.TWO_PWR_32_DBL_ | 0, e / Long$4.TWO_PWR_32_DBL_ | 0)
    }, Long$4.fromBits = function(e, t) {
        return new Long$4(e, t)
    }, Long$4.fromString = function(e, t) {
        if (0 === e.length) throw Error("number format error: empty string");
        var r = t || 10;
        if (r < 2 || 36 < r) throw Error("radix out of range: " + r);
        if ("-" === e.charAt(0)) return Long$4.fromString(e.substring(1), r).negate();
        if (e.indexOf("-") >= 0) throw Error('number format error: interior "-" character: ' + e);
        for (var n = Long$4.fromNumber(Math.pow(r, 8)), o = Long$4.ZERO, i = 0; i < e.length; i += 8) {
            var s = Math.min(8, e.length - i),
                a = parseInt(e.substring(i, i + s), r);
            if (s < 8) {
                var u = Long$4.fromNumber(Math.pow(r, s));
                o = o.multiply(u).add(Long$4.fromNumber(a))
            } else o = (o = o.multiply(n)).add(Long$4.fromNumber(a))
        }
        return o
    }, Long$4.INT_CACHE_ = {}, Long$4.TWO_PWR_16_DBL_ = 65536, Long$4.TWO_PWR_24_DBL_ = 1 << 24, Long$4.TWO_PWR_32_DBL_ = Long$4.TWO_PWR_16_DBL_ * Long$4.TWO_PWR_16_DBL_, Long$4.TWO_PWR_31_DBL_ = Long$4.TWO_PWR_32_DBL_ / 2, Long$4.TWO_PWR_48_DBL_ = Long$4.TWO_PWR_32_DBL_ * Long$4.TWO_PWR_16_DBL_, Long$4.TWO_PWR_64_DBL_ = Long$4.TWO_PWR_32_DBL_ * Long$4.TWO_PWR_32_DBL_, Long$4.TWO_PWR_63_DBL_ = Long$4.TWO_PWR_64_DBL_ / 2, Long$4.ZERO = Long$4.fromInt(0), Long$4.ONE = Long$4.fromInt(1), Long$4.NEG_ONE = Long$4.fromInt(-1), Long$4.MAX_VALUE = Long$4.fromBits(-1, 2147483647), Long$4.MIN_VALUE = Long$4.fromBits(0, -2147483648), Long$4.TWO_PWR_24_ = Long$4.fromInt(1 << 24);
    var long_1$2 = Long$4,
        Long_1$2 = Long$4;

    function Double$3(e) {
        if (!(this instanceof Double$3)) return new Double$3(e);
        this._bsontype = "Double", this.value = e
    }
    long_1$2.Long = Long_1$2, Double$3.prototype.valueOf = function() {
        return this.value
    }, Double$3.prototype.toJSON = function() {
        return this.value
    };
    var double_1$2 = Double$3,
        Double_1$2 = Double$3;

    function Timestamp$3(e, t) {
        e instanceof long_1$2 ? long_1$2.call(this, e.low_, e.high_) : long_1$2.call(this, e, t), this._bsontype = "Timestamp"
    }
    double_1$2.Double = Double_1$2, Timestamp$3.prototype = Object.create(long_1$2.prototype), Timestamp$3.prototype.constructor = Timestamp$3, Timestamp$3.prototype.toJSON = function() {
        return {
            $timestamp: this.toString()
        }
    }, Timestamp$3.fromInt = function(e) {
        return new Timestamp$3(long_1$2.fromInt(e))
    }, Timestamp$3.fromNumber = function(e) {
        return new Timestamp$3(long_1$2.fromNumber(e))
    }, Timestamp$3.fromBits = function(e, t) {
        return new Timestamp$3(e, t)
    }, Timestamp$3.fromString = function(e, t) {
        return new Timestamp$3(long_1$2.fromString(e, t))
    };
    var timestamp$2 = Timestamp$3,
        Timestamp_1$2 = Timestamp$3,
        _endianness$1;

    function endianness$1() {
        if (void 0 === _endianness$1) {
            var e = new ArrayBuffer(2),
                t = new Uint8Array(e),
                r = new Uint16Array(e);
            if (t[0] = 1, t[1] = 2, 258 === r[0]) _endianness$1 = "BE";
            else {
                if (513 !== r[0]) throw new Error("unable to figure out endianess");
                _endianness$1 = "LE"
            }
        }
        return _endianness$1
    }

    function hostname$2() {
        return void 0 !== global.location ? global.location.hostname : ""
    }

    function loadavg$1() {
        return []
    }

    function uptime$1() {
        return 0
    }

    function freemem$1() {
        return Number.MAX_VALUE
    }

    function totalmem$1() {
        return Number.MAX_VALUE
    }

    function cpus$1() {
        return []
    }

    function type$1() {
        return "Browser"
    }

    function release$1() {
        return void 0 !== global.navigator ? global.navigator.appVersion : ""
    }

    function networkInterfaces$1() {}

    function getNetworkInterfaces$1() {}

    function arch$1() {
        return "javascript"
    }

    function platform$1() {
        return "browser"
    }

    function tmpDir$1() {
        return "/tmp"
    }
    timestamp$2.Timestamp = Timestamp_1$2;
    var tmpdir$1 = tmpDir$1,
        EOL$1 = "\n",
        os$2 = {
            EOL: EOL$1,
            tmpdir: tmpdir$1,
            tmpDir: tmpDir$1,
            networkInterfaces: networkInterfaces$1,
            getNetworkInterfaces: getNetworkInterfaces$1,
            release: release$1,
            type: type$1,
            cpus: cpus$1,
            totalmem: totalmem$1,
            freemem: freemem$1,
            uptime: uptime$1,
            loadavg: loadavg$1,
            hostname: hostname$2,
            endianness: endianness$1
        },
        os$1$1 = Object.freeze({
            endianness: endianness$1,
            hostname: hostname$2,
            loadavg: loadavg$1,
            uptime: uptime$1,
            freemem: freemem$1,
            totalmem: totalmem$1,
            cpus: cpus$1,
            type: type$1,
            release: release$1,
            networkInterfaces: networkInterfaces$1,
            getNetworkInterfaces: getNetworkInterfaces$1,
            arch: arch$1,
            platform: platform$1,
            tmpDir: tmpDir$1,
            tmpdir: tmpdir$1,
            EOL: EOL$1,
            default: os$2
        }),
        Buffer$a = buffer.Buffer,
        MASK_8$1 = 255,
        MASK_24$1 = 16777215,
        MASK_32$1 = 4294967295,
        FNV_PRIME$1 = new long_1$2(16777619, 0),
        OFFSET_BASIS$1 = new long_1$2(2166136261, 0),
        FNV_MASK$1 = new long_1$2(MASK_32$1, 0);

    function fnv1a32$1(e, t) {
        t = t || "utf8";
        for (var r = Buffer$a.from(e, t), n = OFFSET_BASIS$1, o = 0; o < r.length; o += 1) n = (n = (n = n.xor(new long_1$2(r[o], 0))).multiply(FNV_PRIME$1)).and(FNV_MASK$1);
        return n.getLowBitsUnsigned()
    }

    function fnv1a24$2(e, t) {
        var r = fnv1a32$1(e, t);
        return (r & MASK_24$1 ^ r >>> 24 & MASK_8$1) & MASK_24$1
    }
    var fnv1a$1 = {
            fnv1a24: fnv1a24$2,
            fnv1a32: fnv1a32$1
        },
        require$$1$1 = os$1$1 && os$2 || os$1$1,
        Buffer$1$1 = buffer.Buffer,
        hostname$1$1 = require$$1$1.hostname,
        fnv1a24$1$1 = fnv1a$1.fnv1a24,
        MACHINE_ID$1 = fnv1a24$1$1(hostname$1$1),
        checkForHexRegExp$1 = new RegExp("^[0-9a-fA-F]{24}$"),
        hasBufferType$1 = !1;
    try {
        Buffer$1$1 && Buffer$1$1.from && (hasBufferType$1 = !0)
    } catch (e) {
        hasBufferType$1 = !1
    }

    function ObjectID$3(e) {
        if (e instanceof ObjectID$3) return e;
        if (!(this instanceof ObjectID$3)) return new ObjectID$3(e);
        if (this._bsontype = "ObjectID", null == e || "number" == typeof e) return this.id = this.generate(e), void(ObjectID$3.cacheHexString && (this.__id = this.toString("hex")));
        var t = ObjectID$3.isValid(e);
        if (!t && null != e) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
        if (t && "string" == typeof e && 24 === e.length && hasBufferType$1) return new ObjectID$3(new Buffer$1$1(e, "hex"));
        if (t && "string" == typeof e && 24 === e.length) return ObjectID$3.createFromHexString(e);
        if (null == e || 12 !== e.length) {
            if (null != e && e.toHexString) return e;
            throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")
        }
        this.id = e, ObjectID$3.cacheHexString && (this.__id = this.toString("hex"))
    }
    for (var hexTable$1 = [], i$2 = 0; i$2 < 256; i$2++) hexTable$1[i$2] = (i$2 <= 15 ? "0" : "") + i$2.toString(16);
    ObjectID$3.prototype.toHexString = function() {
        if (ObjectID$3.cacheHexString && this.__id) return this.__id;
        var e = "";
        if (!this.id || !this.id.length) throw new TypeError("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]");
        if (this.id instanceof _Buffer$1) return e = convertToHex$1(this.id), ObjectID$3.cacheHexString && (this.__id = e), e;
        for (var t = 0; t < this.id.length; t++) e += hexTable$1[this.id.charCodeAt(t)];
        return ObjectID$3.cacheHexString && (this.__id = e), e
    }, ObjectID$3.prototype.get_inc = function() {
        return ObjectID$3.index = (ObjectID$3.index + 1) % 16777215
    }, ObjectID$3.prototype.getInc = function() {
        return this.get_inc()
    }, ObjectID$3.prototype.generate = function(e) {
        "number" != typeof e && (e = ~~(Date.now() / 1e3));
        var t = ("undefined" == typeof process || 1 === process.pid ? Math.floor(1e5 * Math.random()) : process.pid) % 65535,
            r = this.get_inc(),
            n = new Buffer$1$1(12);
        return n[3] = 255 & e, n[2] = e >> 8 & 255, n[1] = e >> 16 & 255, n[0] = e >> 24 & 255, n[6] = 255 & MACHINE_ID$1, n[5] = MACHINE_ID$1 >> 8 & 255, n[4] = MACHINE_ID$1 >> 16 & 255, n[8] = 255 & t, n[7] = t >> 8 & 255, n[11] = 255 & r, n[10] = r >> 8 & 255, n[9] = r >> 16 & 255, n
    }, ObjectID$3.prototype.toString = function(e) {
        return this.id && this.id.copy ? this.id.toString("string" == typeof e ? e : "hex") : this.toHexString()
    }, ObjectID$3.prototype.inspect = ObjectID$3.prototype.toString, ObjectID$3.prototype.toJSON = function() {
        return this.toHexString()
    }, ObjectID$3.prototype.equals = function(e) {
        return e instanceof ObjectID$3 ? this.toString() === e.toString() : "string" == typeof e && ObjectID$3.isValid(e) && 12 === e.length && this.id instanceof _Buffer$1 ? e === this.id.toString("binary") : "string" == typeof e && ObjectID$3.isValid(e) && 24 === e.length ? e.toLowerCase() === this.toHexString() : "string" == typeof e && ObjectID$3.isValid(e) && 12 === e.length ? e === this.id : !(null == e || !(e instanceof ObjectID$3 || e.toHexString)) && e.toHexString() === this.toHexString()
    }, ObjectID$3.prototype.getTimestamp = function() {
        var e = new Date,
            t = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
        return e.setTime(1e3 * Math.floor(t)), e
    }, ObjectID$3.index = ~~(16777215 * Math.random()), ObjectID$3.createPk = function() {
        return new ObjectID$3
    }, ObjectID$3.createFromTime = function(e) {
        var t = new Buffer$1$1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        return t[3] = 255 & e, t[2] = e >> 8 & 255, t[1] = e >> 16 & 255, t[0] = e >> 24 & 255, new ObjectID$3(t)
    };
    var decodeLookup$1 = [];
    for (i$2 = 0; i$2 < 10;) decodeLookup$1[48 + i$2] = i$2++;
    for (; i$2 < 16;) decodeLookup$1[55 + i$2] = decodeLookup$1[87 + i$2] = i$2++;
    var _Buffer$1 = Buffer$1$1,
        convertToHex$1 = function(e) {
            return e.toString("hex")
        };
    ObjectID$3.createFromHexString = function(e) {
        if (void 0 === e || null != e && 24 !== e.length) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
        if (hasBufferType$1) return new ObjectID$3(new Buffer$1$1(e, "hex"));
        for (var t = new _Buffer$1(12), r = 0, n = 0; n < 24;) t[r++] = decodeLookup$1[e.charCodeAt(n++)] << 4 | decodeLookup$1[e.charCodeAt(n++)];
        return new ObjectID$3(t)
    }, ObjectID$3.isValid = function(e) {
        return null != e && ("number" == typeof e || ("string" == typeof e ? 12 === e.length || 24 === e.length && checkForHexRegExp$1.test(e) : e instanceof ObjectID$3 || (e instanceof _Buffer$1 || !!e.toHexString && (12 === e.id.length || 24 === e.id.length && checkForHexRegExp$1.test(e.id)))))
    }, Object.defineProperty(ObjectID$3.prototype, "generationTime", {
        enumerable: !0,
        get: function() {
            return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24
        },
        set: function(e) {
            this.id[3] = 255 & e, this.id[2] = e >> 8 & 255, this.id[1] = e >> 16 & 255, this.id[0] = e >> 24 & 255
        }
    });
    var objectid$2 = ObjectID$3,
        ObjectID_1$2 = ObjectID$3,
        ObjectId$2 = ObjectID$3;

    function alphabetize$1(e) {
        return e.split("").sort().join("")
    }

    function BSONRegExp$3(e, t) {
        if (!(this instanceof BSONRegExp$3)) return new BSONRegExp$3(e, t);
        this._bsontype = "BSONRegExp", this.pattern = e || "", this.options = t ? alphabetize$1(t) : "";
        for (var r = 0; r < this.options.length; r++)
            if ("i" !== this.options[r] && "m" !== this.options[r] && "x" !== this.options[r] && "l" !== this.options[r] && "s" !== this.options[r] && "u" !== this.options[r]) throw new Error("the regular expression options [" + this.options[r] + "] is not supported")
    }
    objectid$2.ObjectID = ObjectID_1$2, objectid$2.ObjectId = ObjectId$2;
    var regexp$3 = BSONRegExp$3,
        BSONRegExp_1$2 = BSONRegExp$3;

    function _Symbol$2(e) {
        if (!(this instanceof _Symbol$2)) return new _Symbol$2(e);
        this._bsontype = "Symbol", this.value = e
    }
    regexp$3.BSONRegExp = BSONRegExp_1$2, _Symbol$2.prototype.valueOf = function() {
        return this.value
    }, _Symbol$2.prototype.toString = function() {
        return this.value
    }, _Symbol$2.prototype.inspect = function() {
        return this.value
    }, _Symbol$2.prototype.toJSON = function() {
        return this.value
    };
    var symbol$2 = _Symbol$2,
        Symbol_1$2 = _Symbol$2;

    function Int32$1(e) {
        if (!(this instanceof Int32$1)) return new Int32$1(e);
        this._bsontype = "Int32", this.value = e
    }
    symbol$2.Symbol = Symbol_1$2, Int32$1.prototype.valueOf = function() {
        return this.value
    }, Int32$1.prototype.toJSON = function() {
        return this.value
    };
    var int_32$2 = Int32$1,
        Int32_1$2 = Int32$1;

    function Code$3(e, t) {
        if (!(this instanceof Code$3)) return new Code$3(e, t);
        this._bsontype = "Code", this.code = e, this.scope = t
    }
    int_32$2.Int32 = Int32_1$2, Code$3.prototype.toJSON = function() {
        return {
            scope: this.scope,
            code: this.code
        }
    };
    var code$3 = Code$3,
        Code_1$2 = Code$3;
    code$3.Code = Code_1$2;
    var Buffer$2$1 = buffer.Buffer,
        PARSE_STRING_REGEXP$1 = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
        PARSE_INF_REGEXP$1 = /^(\+|-)?(Infinity|inf)$/i,
        PARSE_NAN_REGEXP$1 = /^(\+|-)?NaN$/i,
        EXPONENT_MAX$1 = 6111,
        EXPONENT_MIN$1 = -6176,
        EXPONENT_BIAS$1 = 6176,
        MAX_DIGITS$1 = 34,
        NAN_BUFFER$1 = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        INF_NEGATIVE_BUFFER$1 = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        INF_POSITIVE_BUFFER$1 = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
        EXPONENT_REGEX$1 = /^([-+])?(\d+)?$/,
        isDigit$1 = function(e) {
            return !isNaN(parseInt(e, 10))
        },
        divideu128$1 = function(e) {
            var t = long_1$2.fromNumber(1e9),
                r = long_1$2.fromNumber(0);
            if (!(e.parts[0] || e.parts[1] || e.parts[2] || e.parts[3])) return {
                quotient: e,
                rem: r
            };
            for (var n = 0; n <= 3; n++) r = (r = r.shiftLeft(32)).add(new long_1$2(e.parts[n], 0)), e.parts[n] = r.div(t).low_, r = r.modulo(t);
            return {
                quotient: e,
                rem: r
            }
        },
        multiply64x2$1 = function(e, t) {
            if (!e && !t) return {
                high: long_1$2.fromNumber(0),
                low: long_1$2.fromNumber(0)
            };
            var r = e.shiftRightUnsigned(32),
                n = new long_1$2(e.getLowBits(), 0),
                o = t.shiftRightUnsigned(32),
                i = new long_1$2(t.getLowBits(), 0),
                s = r.multiply(o),
                a = r.multiply(i),
                u = n.multiply(o),
                l = n.multiply(i);
            return s = s.add(a.shiftRightUnsigned(32)), a = new long_1$2(a.getLowBits(), 0).add(u).add(l.shiftRightUnsigned(32)), {
                high: s = s.add(a.shiftRightUnsigned(32)),
                low: l = a.shiftLeft(32).add(new long_1$2(l.getLowBits(), 0))
            }
        },
        lessThan$1 = function(e, t) {
            var r = e.high_ >>> 0,
                n = t.high_ >>> 0;
            return r < n || r === n && e.low_ >>> 0 < t.low_ >>> 0
        },
        invalidErr$1 = function(e, t) {
            throw new TypeError('"${string}" not a valid Decimal128 string - ' + t)
        };

    function Decimal128$1(e) {
        this._bsontype = "Decimal128", this.bytes = e
    }
    Decimal128$1.fromString = function(e) {
        var t, r = !1,
            n = !1,
            o = !1,
            i = 0,
            s = 0,
            a = 0,
            u = 0,
            l = 0,
            c = [0],
            f = 0,
            h = 0,
            d = 0,
            p = 0,
            g = 0,
            y = 0,
            _ = [0, 0],
            m = [0, 0],
            b = 0;
        if (e.length >= 7e3) throw new TypeError(e + " not a valid Decimal128 string");
        var S = e.match(PARSE_STRING_REGEXP$1),
            v = e.match(PARSE_INF_REGEXP$1),
            E = e.match(PARSE_NAN_REGEXP$1);
        if (!S && !v && !E || 0 === e.length) throw new TypeError(e + " not a valid Decimal128 string");
        if (S) {
            var $ = S[2],
                N = S[4],
                O = S[5],
                A = S[6];
            N && void 0 === A && invalidErr$1(e, "missing exponent power"), N && void 0 === $ && invalidErr$1(e, "missing exponent base"), void 0 === N && (O || A) && invalidErr$1(e, "missing e before exponent")
        }
        if ("+" !== e[b] && "-" !== e[b] || (r = "-" === e[b++]), !isDigit$1(e[b]) && "." !== e[b]) {
            if ("i" === e[b] || "I" === e[b]) return new Decimal128$1(new Buffer$2$1(r ? INF_NEGATIVE_BUFFER$1 : INF_POSITIVE_BUFFER$1));
            if ("N" === e[b]) return new Decimal128$1(new Buffer$2$1(NAN_BUFFER$1))
        }
        for (; isDigit$1(e[b]) || "." === e[b];) "." !== e[b] ? (f < 34 && ("0" !== e[b] || o) && (o || (l = s), o = !0, c[h++] = parseInt(e[b], 10), f += 1), o && (a += 1), n && (u += 1), s += 1, b += 1) : (n && invalidErr$1(e, "contains multiple periods"), n = !0, b += 1);
        if (n && !s) throw new TypeError(e + " not a valid Decimal128 string");
        if ("e" === e[b] || "E" === e[b]) {
            var w = e.substr(++b).match(EXPONENT_REGEX$1);
            if (!w || !w[2]) return new Decimal128$1(new Buffer$2$1(NAN_BUFFER$1));
            g = parseInt(w[0], 10), b += w[0].length
        }
        if (e[b]) return new Decimal128$1(new Buffer$2$1(NAN_BUFFER$1));
        if (d = 0, f) {
            if (p = f - 1, 1 !== (i = a))
                for (;
                    "0" === e[l + i - 1];) i -= 1
        } else d = 0, p = 0, c[0] = 0, a = 1, f = 1, i = 0;
        for (g <= u && u - g > 16384 ? g = EXPONENT_MIN$1 : g -= u; g > EXPONENT_MAX$1;) {
            if ((p += 1) - d > MAX_DIGITS$1) {
                var B = c.join("");
                if (B.match(/^0+$/)) {
                    g = EXPONENT_MAX$1;
                    break
                }
                invalidErr$1(e, "overflow")
            }
            g -= 1
        }
        for (; g < EXPONENT_MIN$1 || f < a;) {
            if (0 === p && i < f) {
                g = EXPONENT_MIN$1, i = 0;
                break
            }
            if (f < a ? a -= 1 : p -= 1, g < EXPONENT_MAX$1) g += 1;
            else {
                if ((B = c.join("")).match(/^0+$/)) {
                    g = EXPONENT_MAX$1;
                    break
                }
                invalidErr$1(e, "overflow")
            }
        }
        if (p - d + 1 < i) {
            var T = s;
            n && (l += 1, T += 1), r && (l += 1, T += 1);
            var I = parseInt(e[l + p + 1], 10),
                R = 0;
            if (I >= 5 && (R = 1, 5 === I))
                for (R = c[p] % 2 == 1, y = l + p + 2; y < T; y++)
                    if (parseInt(e[y], 10)) {
                        R = 1;
                        break
                    } if (R)
                for (var D = p; D >= 0; D--)
                    if (++c[D] > 9 && (c[D] = 0, 0 === D)) {
                        if (!(g < EXPONENT_MAX$1)) return new Decimal128$1(new Buffer$2$1(r ? INF_NEGATIVE_BUFFER$1 : INF_POSITIVE_BUFFER$1));
                        g += 1, c[D] = 1
                    }
        }
        if (_ = long_1$2.fromNumber(0), m = long_1$2.fromNumber(0), 0 === i) _ = long_1$2.fromNumber(0), m = long_1$2.fromNumber(0);
        else if (p - d < 17)
            for (D = d, m = long_1$2.fromNumber(c[D++]), _ = new long_1$2(0, 0); D <= p; D++) m = (m = m.multiply(long_1$2.fromNumber(10))).add(long_1$2.fromNumber(c[D]));
        else {
            for (D = d, _ = long_1$2.fromNumber(c[D++]); D <= p - 17; D++) _ = (_ = _.multiply(long_1$2.fromNumber(10))).add(long_1$2.fromNumber(c[D]));
            for (m = long_1$2.fromNumber(c[D++]); D <= p; D++) m = (m = m.multiply(long_1$2.fromNumber(10))).add(long_1$2.fromNumber(c[D]))
        }
        var C = multiply64x2$1(_, long_1$2.fromString("100000000000000000"));
        C.low = C.low.add(m), lessThan$1(C.low, m) && (C.high = C.high.add(long_1$2.fromNumber(1))), t = g + EXPONENT_BIAS$1;
        var L = {
            low: long_1$2.fromNumber(0),
            high: long_1$2.fromNumber(0)
        };
        C.high.shiftRightUnsigned(49).and(long_1$2.fromNumber(1)).equals(long_1$2.fromNumber) ? (L.high = L.high.or(long_1$2.fromNumber(3).shiftLeft(61)), L.high = L.high.or(long_1$2.fromNumber(t).and(long_1$2.fromNumber(16383).shiftLeft(47))), L.high = L.high.or(C.high.and(long_1$2.fromNumber(0x7fffffffffff)))) : (L.high = L.high.or(long_1$2.fromNumber(16383 & t).shiftLeft(49)), L.high = L.high.or(C.high.and(long_1$2.fromNumber(562949953421311)))), L.low = C.low, r && (L.high = L.high.or(long_1$2.fromString("9223372036854775808")));
        var P = new Buffer$2$1(16);
        return b = 0, P[b++] = 255 & L.low.low_, P[b++] = L.low.low_ >> 8 & 255, P[b++] = L.low.low_ >> 16 & 255, P[b++] = L.low.low_ >> 24 & 255, P[b++] = 255 & L.low.high_, P[b++] = L.low.high_ >> 8 & 255, P[b++] = L.low.high_ >> 16 & 255, P[b++] = L.low.high_ >> 24 & 255, P[b++] = 255 & L.high.low_, P[b++] = L.high.low_ >> 8 & 255, P[b++] = L.high.low_ >> 16 & 255, P[b++] = L.high.low_ >> 24 & 255, P[b++] = 255 & L.high.high_, P[b++] = L.high.high_ >> 8 & 255, P[b++] = L.high.high_ >> 16 & 255, P[b++] = L.high.high_ >> 24 & 255, new Decimal128$1(P)
    };
    var COMBINATION_MASK$1 = 31,
        EXPONENT_MASK$1 = 16383,
        COMBINATION_INFINITY$1 = 30,
        COMBINATION_NAN$1 = 31;
    EXPONENT_BIAS$1 = 6176, Decimal128$1.prototype.toString = function() {
        for (var e, t, r, n, o, i, s = 0, a = new Array(36), u = 0; u < a.length; u++) a[u] = 0;
        var l, c, f, h, d, p = 0,
            g = !1,
            y = {
                parts: new Array(4)
            },
            _ = [];
        p = 0;
        var m = this.bytes;
        if (n = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, r = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, t = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, e = m[p++] | m[p++] << 8 | m[p++] << 16 | m[p++] << 24, p = 0, {
                low: new long_1$2(n, r),
                high: new long_1$2(t, e)
            }.high.lessThan(long_1$2.ZERO) && _.push("-"), (o = e >> 26 & COMBINATION_MASK$1) >> 3 == 3) {
            if (o === COMBINATION_INFINITY$1) return _.join("") + "Infinity";
            if (o === COMBINATION_NAN$1) return "NaN";
            i = e >> 15 & EXPONENT_MASK$1, f = 8 + (e >> 14 & 1)
        } else f = e >> 14 & 7, i = e >> 17 & EXPONENT_MASK$1;
        if (l = i - EXPONENT_BIAS$1, y.parts[0] = (16383 & e) + ((15 & f) << 14), y.parts[1] = t, y.parts[2] = r, y.parts[3] = n, 0 === y.parts[0] && 0 === y.parts[1] && 0 === y.parts[2] && 0 === y.parts[3]) g = !0;
        else
            for (d = 3; d >= 0; d--) {
                var b = 0,
                    S = divideu128$1(y);
                if (y = S.quotient, b = S.rem.low_)
                    for (h = 8; h >= 0; h--) a[9 * d + h] = b % 10, b = Math.floor(b / 10)
            }
        if (g) s = 1, a[p] = 0;
        else
            for (s = 36, u = 0; !a[p];) u++, s -= 1, p += 1;
        if ((c = s - 1 + l) >= 34 || c <= -7 || l > 0) {
            if (s > 34) return _.push(0), l > 0 ? _.push("E+" + l) : l < 0 && _.push("E" + l), _.join("");
            for (_.push(a[p++]), (s -= 1) && _.push("."), u = 0; u < s; u++) _.push(a[p++]);
            _.push("E"), c > 0 ? _.push("+" + c) : _.push(c)
        } else if (l >= 0)
            for (u = 0; u < s; u++) _.push(a[p++]);
        else {
            var v = s + l;
            if (v > 0)
                for (u = 0; u < v; u++) _.push(a[p++]);
            else _.push("0");
            for (_.push("."); v++ < 0;) _.push("0");
            for (u = 0; u < s - Math.max(v - 1, 0); u++) _.push(a[p++])
        }
        return _.join("")
    }, Decimal128$1.prototype.toJSON = function() {
        return {
            $numberDecimal: this.toString()
        }
    };
    var decimal128$2 = Decimal128$1,
        Decimal128_1$2 = Decimal128$1;

    function MinKey$4() {
        if (!(this instanceof MinKey$4)) return new MinKey$4;
        this._bsontype = "MinKey"
    }
    decimal128$2.Decimal128 = Decimal128_1$2;
    var min_key$2 = MinKey$4,
        MinKey_1$2 = MinKey$4;

    function MaxKey$3() {
        if (!(this instanceof MaxKey$3)) return new MaxKey$3;
        this._bsontype = "MaxKey"
    }
    min_key$2.MinKey = MinKey_1$2;
    var max_key$2 = MaxKey$3,
        MaxKey_1$2 = MaxKey$3;

    function DBRef$3(e, t, r, n) {
        if (!(this instanceof DBRef$3)) return new DBRef$3(e, t, r, n);
        var o = e.split(".");
        2 === o.length && (r = o.shift(), e = o.shift()), this._bsontype = "DBRef", this.collection = e, this.oid = t, this.db = r, this.fields = n || {}
    }
    max_key$2.MaxKey = MaxKey_1$2, DBRef$3.prototype.toJSON = function() {
        var e = {
            $ref: this.collection,
            $id: this.oid
        };
        return null != this.db && (e.$db = this.db), e = Object.assign(e, this.fields)
    };
    var db_ref$2 = DBRef$3,
        DBRef_1$2 = DBRef$3;
    db_ref$2.DBRef = DBRef_1$2;
    var Buffer$3$1 = buffer.Buffer;

    function Binary$4(e, t) {
        if (!(this instanceof Binary$4)) return new Binary$4(e, t);
        if (!(null == e || "string" == typeof e || Buffer$3$1.isBuffer(e) || e instanceof Uint8Array || Array.isArray(e))) throw new Error("only String, Buffer, Uint8Array or Array accepted");
        if (this._bsontype = "Binary", e instanceof Number ? (this.sub_type = e, this.position = 0) : (this.sub_type = null == t ? BSON_BINARY_SUBTYPE_DEFAULT$1 : t, this.position = 0), null == e || e instanceof Number) void 0 !== Buffer$3$1 ? this.buffer = new Buffer$3$1(Binary$4.BUFFER_SIZE) : "undefined" != typeof Uint8Array ? this.buffer = new Uint8Array(new ArrayBuffer(Binary$4.BUFFER_SIZE)) : this.buffer = new Array(Binary$4.BUFFER_SIZE), this.position = 0;
        else {
            if ("string" == typeof e)
                if (void 0 !== Buffer$3$1) this.buffer = new Buffer$3$1(e);
                else {
                    if ("undefined" == typeof Uint8Array && "[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("only String, Buffer, Uint8Array or Array accepted");
                    this.buffer = writeStringToArray$1(e)
                }
            else this.buffer = e;
            this.position = e.length
        }
    }
    Binary$4.prototype.put = function(e) {
        if (null != e.length && "number" != typeof e && 1 !== e.length) throw new TypeError("only accepts single character String, Uint8Array or Array");
        if ("number" != typeof e && e < 0 || e > 255) throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
        var t = null;
        if (t = "string" == typeof e ? e.charCodeAt(0) : null != e.length ? e[0] : e, this.buffer.length > this.position) this.buffer[this.position++] = t;
        else if (void 0 !== Buffer$3$1 && Buffer$3$1.isBuffer(this.buffer)) {
            var r = new Buffer$3$1(Binary$4.BUFFER_SIZE + this.buffer.length);
            this.buffer.copy(r, 0, 0, this.buffer.length), this.buffer = r, this.buffer[this.position++] = t
        } else {
            r = null, r = "[object Uint8Array]" === Object.prototype.toString.call(this.buffer) ? new Uint8Array(new ArrayBuffer(Binary$4.BUFFER_SIZE + this.buffer.length)) : new Array(Binary$4.BUFFER_SIZE + this.buffer.length);
            for (var n = 0; n < this.buffer.length; n++) r[n] = this.buffer[n];
            this.buffer = r, this.buffer[this.position++] = t
        }
    }, Binary$4.prototype.write = function(e, t) {
        if (t = "number" == typeof t ? t : this.position, this.buffer.length < t + e.length) {
            var r = null;
            if (void 0 !== Buffer$3$1 && Buffer$3$1.isBuffer(this.buffer)) r = new Buffer$3$1(this.buffer.length + e.length), this.buffer.copy(r, 0, 0, this.buffer.length);
            else if ("[object Uint8Array]" === Object.prototype.toString.call(this.buffer)) {
                r = new Uint8Array(new ArrayBuffer(this.buffer.length + e.length));
                for (var n = 0; n < this.position; n++) r[n] = this.buffer[n]
            }
            this.buffer = r
        }
        if (void 0 !== Buffer$3$1 && Buffer$3$1.isBuffer(e) && Buffer$3$1.isBuffer(this.buffer)) e.copy(this.buffer, t, 0, e.length), this.position = t + e.length > this.position ? t + e.length : this.position;
        else if (void 0 !== Buffer$3$1 && "string" == typeof e && Buffer$3$1.isBuffer(this.buffer)) this.buffer.write(e, t, "binary"), this.position = t + e.length > this.position ? t + e.length : this.position;
        else if ("[object Uint8Array]" === Object.prototype.toString.call(e) || "[object Array]" === Object.prototype.toString.call(e) && "string" != typeof e) {
            for (n = 0; n < e.length; n++) this.buffer[t++] = e[n];
            this.position = t > this.position ? t : this.position
        } else if ("string" == typeof e) {
            for (n = 0; n < e.length; n++) this.buffer[t++] = e.charCodeAt(n);
            this.position = t > this.position ? t : this.position
        }
    }, Binary$4.prototype.read = function(e, t) {
        if (t = t && t > 0 ? t : this.position, this.buffer.slice) return this.buffer.slice(e, e + t);
        for (var r = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(t)) : new Array(t), n = 0; n < t; n++) r[n] = this.buffer[e++];
        return r
    }, Binary$4.prototype.value = function(e) {
        if ((e = null != e && e) && void 0 !== Buffer$3$1 && Buffer$3$1.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer;
        if (void 0 !== Buffer$3$1 && Buffer$3$1.isBuffer(this.buffer)) return e ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position);
        if (e) {
            if (null != this.buffer.slice) return this.buffer.slice(0, this.position);
            for (var t = "[object Uint8Array]" === Object.prototype.toString.call(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position), r = 0; r < this.position; r++) t[r] = this.buffer[r];
            return t
        }
        return convertArraytoUtf8BinaryString$1(this.buffer, 0, this.position)
    }, Binary$4.prototype.length = function() {
        return this.position
    }, Binary$4.prototype.toJSON = function() {
        return null != this.buffer ? this.buffer.toString("base64") : ""
    }, Binary$4.prototype.toString = function(e) {
        return null != this.buffer ? this.buffer.slice(0, this.position).toString(e) : ""
    };
    var BSON_BINARY_SUBTYPE_DEFAULT$1 = 0,
        writeStringToArray$1 = function(e) {
            for (var t = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(e.length)) : new Array(e.length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t
        },
        convertArraytoUtf8BinaryString$1 = function(e, t, r) {
            for (var n = "", o = t; o < r; o++) n += String.fromCharCode(e[o]);
            return n
        };
    Binary$4.BUFFER_SIZE = 256, Binary$4.SUBTYPE_DEFAULT = 0, Binary$4.SUBTYPE_FUNCTION = 1, Binary$4.SUBTYPE_BYTE_ARRAY = 2, Binary$4.SUBTYPE_UUID_OLD = 3, Binary$4.SUBTYPE_UUID = 4, Binary$4.SUBTYPE_MD5 = 5, Binary$4.SUBTYPE_USER_DEFINED = 128;
    var binary$2 = Binary$4,
        Binary_1$2 = Binary$4;
    binary$2.Binary = Binary_1$2;
    var Buffer$4$1 = buffer.Buffer,
        Long$1$1 = long_1$2.Long,
        Double$1$1 = double_1$2.Double,
        Timestamp$1$1 = timestamp$2.Timestamp,
        ObjectID$1$1 = objectid$2.ObjectID,
        Code$1$1 = code$3.Code,
        MinKey$1$1 = min_key$2.MinKey,
        MaxKey$1$1 = max_key$2.MaxKey,
        DBRef$1$1 = db_ref$2.DBRef,
        BSONRegExp$1$1 = regexp$3.BSONRegExp,
        Binary$1$1 = binary$2.Binary,
        deserialize$1 = function(e, t, r) {
            var n = (t = null == t ? {} : t) && t.index ? t.index : 0,
                o = e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24;
            if (o < 5) throw new Error("bson size must be >= 5, is " + o);
            if (t.allowObjectSmallerThanBufferSize && Buffer$4$1.byteLength(e) < o) throw new Error("buffer length " + Buffer$4$1.byteLength(e) + " must be >= bson size " + o);
            if (!t.allowObjectSmallerThanBufferSize && Buffer$4$1.byteLength(e) !== o) throw new Error("buffer length " + Buffer$4$1.byteLength(e) + " must === bson size " + o);
            if (o + n > Buffer$4$1.byteLength(e)) throw new Error("(bson size " + o + " + options.index " + n + " must be <= buffer length " + Buffer$4$1.byteLength(e) + ")");
            if (0 !== e[n + o - 1]) throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
            return deserializeObject$1(e, n, t, r)
        },
        deserializeObject$1 = function e(t, r, n, o) {
            var i = null != n.evalFunctions && n.evalFunctions,
                s = null != n.cacheFunctions && n.cacheFunctions,
                a = null != n.cacheFunctionsCrc32 && n.cacheFunctionsCrc32;
            if (!a) var u = null;
            var l = null == n.fieldsAsRaw ? null : n.fieldsAsRaw,
                c = null != n.raw && n.raw,
                f = "boolean" == typeof n.bsonRegExp && n.bsonRegExp,
                h = null != n.promoteBuffers && n.promoteBuffers,
                d = null == n.promoteLongs || n.promoteLongs,
                p = null == n.promoteValues || n.promoteValues,
                g = r;
            if (Buffer$4$1.byteLength(t) < 5) throw new Error("corrupt bson message < 5 bytes long");
            var y = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
            if (y < 5 || y > Buffer$4$1.byteLength(t)) throw new Error("corrupt bson message");
            for (var _ = o ? [] : {}, m = 0;;) {
                var b = t[r++];
                if (0 === b) break;
                for (var S = r; 0 !== t[S] && S < Buffer$4$1.byteLength(t);) S++;
                if (S >= Buffer$4$1.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                var v = o ? m++ : t.toString("utf8", r, S);
                if (r = S + 1, b === BSON$5.BSON_DATA_STRING) {
                    var E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    if (E <= 0 || E > Buffer$4$1.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var $ = t.toString("utf8", r, r + E - 1);
                    for (S = 0; S < $.length; S++)
                        if (65533 === $.charCodeAt(S)) throw new Error("Invalid UTF-8 string in BSON document");
                    _[v] = $, r += E
                } else if (b === BSON$5.BSON_DATA_OID) {
                    var N = new Buffer$4$1(12);
                    t.copy(N, 0, r, r + 12), _[v] = new ObjectID$1$1(N), r += 12
                } else if (b === BSON$5.BSON_DATA_INT && !1 === p) _[v] = new int_32$2(t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24);
                else if (b === BSON$5.BSON_DATA_INT) _[v] = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                else if (b === BSON$5.BSON_DATA_NUMBER && !1 === p) _[v] = new Double$1$1(t.readDoubleLE(r)), r += 8;
                else if (b === BSON$5.BSON_DATA_NUMBER) _[v] = t.readDoubleLE(r), r += 8;
                else if (b === BSON$5.BSON_DATA_DATE) {
                    var O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24,
                        A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    _[v] = new Date(new Long$1$1(O, A).toNumber())
                } else if (b === BSON$5.BSON_DATA_BOOLEAN) {
                    if (0 !== t[r] && 1 !== t[r]) throw new Error("illegal boolean type value");
                    _[v] = 1 === t[r++]
                } else if (b === BSON$5.BSON_DATA_OBJECT) {
                    var w = r,
                        B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24;
                    if (B <= 0 || B > Buffer$4$1.byteLength(t) - r) throw new Error("bad embedded document length in bson");
                    _[v] = c ? t.slice(r, r + B) : e(t, w, n, !1), r += B
                } else if (b === BSON$5.BSON_DATA_ARRAY) {
                    w = r;
                    var T = n,
                        I = r + (B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24);
                    if (l && l[v]) {
                        for (var R in T = {}, n) T[R] = n[R];
                        T.raw = !0
                    }
                    if (_[v] = e(t, w, T, !0), 0 !== t[(r += B) - 1]) throw new Error("invalid array terminator byte");
                    if (r !== I) throw new Error("corrupted array bson")
                } else if (b === BSON$5.BSON_DATA_UNDEFINED) _[v] = void 0;
                else if (b === BSON$5.BSON_DATA_NULL) _[v] = null;
                else if (b === BSON$5.BSON_DATA_LONG) {
                    O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    var D = new Long$1$1(O, A);
                    _[v] = d && !0 === p && D.lessThanOrEqual(JS_INT_MAX_LONG$1) && D.greaterThanOrEqual(JS_INT_MIN_LONG$1) ? D.toNumber() : D
                } else if (b === BSON$5.BSON_DATA_DECIMAL128) {
                    var C = new Buffer$4$1(16);
                    t.copy(C, 0, r, r + 16), r += 16;
                    var L = new decimal128$2(C);
                    _[v] = L.toObject ? L.toObject() : L
                } else if (b === BSON$5.BSON_DATA_BINARY) {
                    var P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24,
                        x = P,
                        M = t[r++];
                    if (P < 0) throw new Error("Negative binary type element size found");
                    if (P > Buffer$4$1.byteLength(t)) throw new Error("Binary type size larger than document size");
                    if (null != t.slice) {
                        if (M === Binary$1$1.SUBTYPE_BYTE_ARRAY) {
                            if ((P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                            if (P > x - 4) throw new Error("Binary type with subtype 0x02 contains to long binary size");
                            if (P < x - 4) throw new Error("Binary type with subtype 0x02 contains to short binary size")
                        }
                        _[v] = h && p ? t.slice(r, r + P) : new Binary$1$1(t.slice(r, r + P), M)
                    } else {
                        var F = "undefined" != typeof Uint8Array ? new Uint8Array(new ArrayBuffer(P)) : new Array(P);
                        if (M === Binary$1$1.SUBTYPE_BYTE_ARRAY) {
                            if ((P = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                            if (P > x - 4) throw new Error("Binary type with subtype 0x02 contains to long binary size");
                            if (P < x - 4) throw new Error("Binary type with subtype 0x02 contains to short binary size")
                        }
                        for (S = 0; S < P; S++) F[S] = t[r + S];
                        _[v] = h && p ? F : new Binary$1$1(F, M)
                    }
                    r += P
                } else if (b === BSON$5.BSON_DATA_REGEXP && !1 === f) {
                    for (S = r; 0 !== t[S] && S < Buffer$4$1.byteLength(t);) S++;
                    if (S >= Buffer$4$1.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    var U = t.toString("utf8", r, S);
                    for (S = r = S + 1; 0 !== t[S] && S < Buffer$4$1.byteLength(t);) S++;
                    if (S >= Buffer$4$1.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    var k = t.toString("utf8", r, S);
                    r = S + 1;
                    var j = new Array(k.length);
                    for (S = 0; S < k.length; S++) switch (k[S]) {
                        case "m":
                            j[S] = "m";
                            break;
                        case "s":
                            j[S] = "g";
                            break;
                        case "i":
                            j[S] = "i"
                    }
                    _[v] = new RegExp(U, j.join(""))
                } else if (b === BSON$5.BSON_DATA_REGEXP && !0 === f) {
                    for (S = r; 0 !== t[S] && S < Buffer$4$1.byteLength(t);) S++;
                    if (S >= Buffer$4$1.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    for (U = t.toString("utf8", r, S), S = r = S + 1; 0 !== t[S] && S < Buffer$4$1.byteLength(t);) S++;
                    if (S >= Buffer$4$1.byteLength(t)) throw new Error("Bad BSON Document: illegal CString");
                    k = t.toString("utf8", r, S), r = S + 1, _[v] = new BSONRegExp$1$1(U, k)
                } else if (b === BSON$5.BSON_DATA_SYMBOL) {
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4$1.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    _[v] = t.toString("utf8", r, r + E - 1), r += E
                } else if (b === BSON$5.BSON_DATA_TIMESTAMP) O = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, A = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24, _[v] = new Timestamp$1$1(O, A);
                else if (b === BSON$5.BSON_DATA_MIN_KEY) _[v] = new MinKey$1$1;
                else if (b === BSON$5.BSON_DATA_MAX_KEY) _[v] = new MaxKey$1$1;
                else if (b === BSON$5.BSON_DATA_CODE) {
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4$1.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var z = t.toString("utf8", r, r + E - 1);
                    if (i)
                        if (s) {
                            var Y = a ? u(z) : z;
                            _[v] = isolateEvalWithHash$1(functionCache$1, Y, z, _)
                        } else _[v] = isolateEval$1(z);
                    else _[v] = new Code$1$1(z);
                    r += E
                } else if (b === BSON$5.BSON_DATA_CODE_W_SCOPE) {
                    var q = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24;
                    if (q < 13) throw new Error("code_w_scope total size shorter minimum expected length");
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4$1.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    z = t.toString("utf8", r, r + E - 1), w = r += E, B = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24;
                    var K = e(t, w, n, !1);
                    if (r += B, q < 8 + B + E) throw new Error("code_w_scope total size is to short, truncating scope");
                    if (q > 8 + B + E) throw new Error("code_w_scope total size is to long, clips outer document");
                    i ? (s ? (Y = a ? u(z) : z, _[v] = isolateEvalWithHash$1(functionCache$1, Y, z, _)) : _[v] = isolateEval$1(z), _[v].scope = K) : _[v] = new Code$1$1(z, K)
                } else {
                    if (b !== BSON$5.BSON_DATA_DBPOINTER) throw new Error("Detected unknown BSON type " + b.toString(16) + ' for fieldname "' + v + '", are you using the latest BSON parser?');
                    if ((E = t[r++] | t[r++] << 8 | t[r++] << 16 | t[r++] << 24) <= 0 || E > Buffer$4$1.byteLength(t) - r || 0 !== t[r + E - 1]) throw new Error("bad string length in bson");
                    var V = t.toString("utf8", r, r + E - 1);
                    r += E;
                    var W = new Buffer$4$1(12);
                    for (t.copy(W, 0, r, r + 12), N = new ObjectID$1$1(W), r += 12, S = 0; S < V.length; S++)
                        if (65533 === V.charCodeAt(S)) throw new Error("Invalid UTF-8 string in BSON document");
                    _[v] = new DBRef$1$1(V, N)
                }
            }
            if (y !== r - g) {
                if (o) throw new Error("corrupt array bson");
                throw new Error("corrupt object bson")
            }
            var H = Object.keys(_).filter(function(e) {
                    return e.startsWith("$")
                }),
                J = !0;
            if (H.forEach(function(e) {
                    -1 === ["$ref", "$id", "$db"].indexOf(e) && (J = !1)
                }), !J) return _;
            if (null != _.$id && null != _.$ref) {
                var X = Object.assign({}, _);
                return delete X.$ref, delete X.$id, delete X.$db, new DBRef$1$1(_.$ref, _.$id, _.$db || null, X)
            }
            return _
        },
        isolateEvalWithHash$1 = function isolateEvalWithHash(functionCache, hash, functionString, object) {
            var value = null;
            return null == functionCache[hash] && (eval("value = " + functionString), functionCache[hash] = value), functionCache[hash].bind(object)
        },
        isolateEval$1 = function isolateEval(functionString) {
            var value = null;
            return eval("value = " + functionString), value
        },
        BSON$5 = {},
        functionCache$1 = BSON$5.functionCache = {};
    BSON$5.BSON_DATA_NUMBER = 1, BSON$5.BSON_DATA_STRING = 2, BSON$5.BSON_DATA_OBJECT = 3, BSON$5.BSON_DATA_ARRAY = 4, BSON$5.BSON_DATA_BINARY = 5, BSON$5.BSON_DATA_UNDEFINED = 6, BSON$5.BSON_DATA_OID = 7, BSON$5.BSON_DATA_BOOLEAN = 8, BSON$5.BSON_DATA_DATE = 9, BSON$5.BSON_DATA_NULL = 10, BSON$5.BSON_DATA_REGEXP = 11, BSON$5.BSON_DATA_DBPOINTER = 12, BSON$5.BSON_DATA_CODE = 13, BSON$5.BSON_DATA_SYMBOL = 14, BSON$5.BSON_DATA_CODE_W_SCOPE = 15, BSON$5.BSON_DATA_INT = 16, BSON$5.BSON_DATA_TIMESTAMP = 17, BSON$5.BSON_DATA_LONG = 18, BSON$5.BSON_DATA_DECIMAL128 = 19, BSON$5.BSON_DATA_MIN_KEY = 255, BSON$5.BSON_DATA_MAX_KEY = 127, BSON$5.BSON_BINARY_SUBTYPE_DEFAULT = 0, BSON$5.BSON_BINARY_SUBTYPE_FUNCTION = 1, BSON$5.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, BSON$5.BSON_BINARY_SUBTYPE_UUID = 3, BSON$5.BSON_BINARY_SUBTYPE_MD5 = 4, BSON$5.BSON_BINARY_SUBTYPE_USER_DEFINED = 128, BSON$5.BSON_INT32_MAX = 2147483647, BSON$5.BSON_INT32_MIN = -2147483648, BSON$5.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON$5.BSON_INT64_MIN = -Math.pow(2, 63), BSON$5.JS_INT_MAX = 9007199254740992, BSON$5.JS_INT_MIN = -9007199254740992;
    var JS_INT_MAX_LONG$1 = Long$1$1.fromNumber(9007199254740992),
        JS_INT_MIN_LONG$1 = Long$1$1.fromNumber(-9007199254740992),
        deserializer$1 = deserialize$1,
        readIEEE754$1 = function(e, t, r, n, o) {
            var i, s, a = "big" === r,
                u = 8 * o - n - 1,
                l = (1 << u) - 1,
                c = l >> 1,
                f = -7,
                h = a ? 0 : o - 1,
                d = a ? 1 : -1,
                p = e[t + h];
            for (h += d, i = p & (1 << -f) - 1, p >>= -f, f += u; f > 0; i = 256 * i + e[t + h], h += d, f -= 8);
            for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + e[t + h], h += d, f -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - n)
        },
        writeIEEE754$2 = function(e, t, r, n, o, i) {
            var s, a, u, l = "big" === n,
                c = 8 * i - o - 1,
                f = (1 << c) - 1,
                h = f >> 1,
                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = l ? i - 1 : 0,
                g = l ? -1 : 1,
                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)), isNaN(t) && (a = 0); o >= 8;) e[r + p] = 255 & a, p += g, a /= 256, o -= 8;
            for (s = s << o | a, isNaN(t) && (s += 8), c += o; c > 0;) e[r + p] = 255 & s, p += g, s /= 256, c -= 8;
            e[r + p - g] |= 128 * y
        },
        readIEEE754_1$1 = readIEEE754$1,
        writeIEEE754_1$1 = writeIEEE754$2,
        float_parser$1 = {
            readIEEE754: readIEEE754_1$1,
            writeIEEE754: writeIEEE754_1$1
        };

    function normalizedFunctionString$3(e) {
        return e.toString().replace(/function(.*)\(/, "function (")
    }
    var utils$1 = {
            normalizedFunctionString: normalizedFunctionString$3
        },
        _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Buffer$5$1 = buffer.Buffer,
        writeIEEE754$1$1 = float_parser$1.writeIEEE754,
        Long$2$1 = long_1$2.Long,
        MinKey$2$1 = min_key$2.MinKey,
        Binary$2$1 = binary$2.Binary,
        normalizedFunctionString$1$1 = utils$1.normalizedFunctionString,
        regexp$1$1 = /\x00/,
        isDate$2 = function(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof$3(e)) && "[object Date]" === Object.prototype.toString.call(e)
        },
        isRegExp$1 = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        },
        serializeString$1 = function(e, t, r, n, o) {
            e[n++] = BSON$1$1.BSON_DATA_STRING, e[(n = n + (o ? e.write(t, n, "ascii") : e.write(t, n, "utf8")) + 1) - 1] = 0;
            var i = e.write(r, n + 4, "utf8");
            return e[n + 3] = i + 1 >> 24 & 255, e[n + 2] = i + 1 >> 16 & 255, e[n + 1] = i + 1 >> 8 & 255, e[n] = i + 1 & 255, n = n + 4 + i, e[n++] = 0, n
        },
        serializeNumber$1 = function(e, t, r, n, o) {
            if (Math.floor(r) === r && r >= BSON$1$1.JS_INT_MIN && r <= BSON$1$1.JS_INT_MAX)
                if (r >= BSON$1$1.BSON_INT32_MIN && r <= BSON$1$1.BSON_INT32_MAX) {
                    e[n++] = BSON$1$1.BSON_DATA_INT;
                    var i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8");
                    n += i, e[n++] = 0, e[n++] = 255 & r, e[n++] = r >> 8 & 255, e[n++] = r >> 16 & 255, e[n++] = r >> 24 & 255
                } else if (r >= BSON$1$1.JS_INT_MIN && r <= BSON$1$1.JS_INT_MAX) e[n++] = BSON$1$1.BSON_DATA_NUMBER, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1$1(e, r, n, "little", 52, 8), n += 8;
            else {
                e[n++] = BSON$1$1.BSON_DATA_LONG, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
                var s = Long$2$1.fromNumber(r),
                    a = s.getLowBits(),
                    u = s.getHighBits();
                e[n++] = 255 & a, e[n++] = a >> 8 & 255, e[n++] = a >> 16 & 255, e[n++] = a >> 24 & 255, e[n++] = 255 & u, e[n++] = u >> 8 & 255, e[n++] = u >> 16 & 255, e[n++] = u >> 24 & 255
            } else e[n++] = BSON$1$1.BSON_DATA_NUMBER, n += i = o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1$1(e, r, n, "little", 52, 8), n += 8;
            return n
        },
        serializeNull$1 = function(e, t, r, n, o) {
            return e[n++] = BSON$1$1.BSON_DATA_NULL, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, n
        },
        serializeBoolean$1 = function(e, t, r, n, o) {
            return e[n++] = BSON$1$1.BSON_DATA_BOOLEAN, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, e[n++] = r ? 1 : 0, n
        },
        serializeDate$1 = function(e, t, r, n, o) {
            e[n++] = BSON$1$1.BSON_DATA_DATE, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = Long$2$1.fromNumber(r.getTime()),
                s = i.getLowBits(),
                a = i.getHighBits();
            return e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, e[n++] = 255 & a, e[n++] = a >> 8 & 255, e[n++] = a >> 16 & 255, e[n++] = a >> 24 & 255, n
        },
        serializeRegExp$1 = function(e, t, r, n, o) {
            if (e[n++] = BSON$1$1.BSON_DATA_REGEXP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, r.source && null != r.source.match(regexp$1$1)) throw Error("value " + r.source + " must not contain null bytes");
            return n += e.write(r.source, n, "utf8"), e[n++] = 0, r.ignoreCase && (e[n++] = 105), r.global && (e[n++] = 115), r.multiline && (e[n++] = 109), e[n++] = 0, n
        },
        serializeBSONRegExp$1 = function(e, t, r, n, o) {
            if (e[n++] = BSON$1$1.BSON_DATA_REGEXP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, null != r.pattern.match(regexp$1$1)) throw Error("pattern " + r.pattern + " must not contain null bytes");
            return n += e.write(r.pattern, n, "utf8"), e[n++] = 0, n += e.write(r.options.split("").sort().join(""), n, "utf8"), e[n++] = 0, n
        },
        serializeMinMax$1 = function(e, t, r, n, o) {
            return e[n++] = null === r ? BSON$1$1.BSON_DATA_NULL : r instanceof MinKey$2$1 ? BSON$1$1.BSON_DATA_MIN_KEY : BSON$1$1.BSON_DATA_MAX_KEY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, n
        },
        serializeObjectId$1 = function(e, t, r, n, o) {
            if (e[n++] = BSON$1$1.BSON_DATA_OID, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, "string" == typeof r.id) e.write(r.id, n, "binary");
            else {
                if (!r.id || !r.id.copy) throw new TypeError("object [" + JSON.stringify(r) + "] is not a valid ObjectId");
                r.id.copy(e, n, 0, 12)
            }
            return n + 12
        },
        serializeBuffer$1 = function(e, t, r, n, o) {
            e[n++] = BSON$1$1.BSON_DATA_BINARY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.length;
            return e[n++] = 255 & i, e[n++] = i >> 8 & 255, e[n++] = i >> 16 & 255, e[n++] = i >> 24 & 255, e[n++] = BSON$1$1.BSON_BINARY_SUBTYPE_DEFAULT, r.copy(e, n, 0, i), n += i
        },
        serializeObject$1 = function(e, t, r, n, o, i, s, a, u, l) {
            for (var c = 0; c < l.length; c++)
                if (l[c] === r) throw new Error("cyclic dependency detected");
            l.push(r), e[n++] = Array.isArray(r) ? BSON$1$1.BSON_DATA_ARRAY : BSON$1$1.BSON_DATA_OBJECT, n += u ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var f = serializeInto$1(e, r, o, n, i + 1, s, a, l);
            return l.pop(), f
        },
        serializeDecimal128$1 = function(e, t, r, n, o) {
            return e[n++] = BSON$1$1.BSON_DATA_DECIMAL128, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, r.bytes.copy(e, n, 0, 16), n + 16
        },
        serializeLong$1 = function(e, t, r, n, o) {
            e[n++] = "Long" === r._bsontype ? BSON$1$1.BSON_DATA_LONG : BSON$1$1.BSON_DATA_TIMESTAMP, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.getLowBits(),
                s = r.getHighBits();
            return e[n++] = 255 & i, e[n++] = i >> 8 & 255, e[n++] = i >> 16 & 255, e[n++] = i >> 24 & 255, e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, n
        },
        serializeInt32$1 = function(e, t, r, n, o) {
            return e[n++] = BSON$1$1.BSON_DATA_INT, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, e[n++] = 255 & r, e[n++] = r >> 8 & 255, e[n++] = r >> 16 & 255, e[n++] = r >> 24 & 255, n
        },
        serializeDouble$1 = function(e, t, r, n, o) {
            return e[n++] = BSON$1$1.BSON_DATA_NUMBER, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, writeIEEE754$1$1(e, r.value, n, "little", 52, 8), n += 8
        },
        serializeFunction$1 = function(e, t, r, n, o, i, s) {
            e[n++] = BSON$1$1.BSON_DATA_CODE, n += s ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var a = normalizedFunctionString$1$1(r),
                u = e.write(a, n + 4, "utf8") + 1;
            return e[n] = 255 & u, e[n + 1] = u >> 8 & 255, e[n + 2] = u >> 16 & 255, e[n + 3] = u >> 24 & 255, n = n + 4 + u - 1, e[n++] = 0, n
        },
        serializeCode$1 = function(e, t, r, n, o, i, s, a, u) {
            if (r.scope && "object" === _typeof$3(r.scope)) {
                e[n++] = BSON$1$1.BSON_DATA_CODE_W_SCOPE;
                var l = u ? e.write(t, n, "ascii") : e.write(t, n, "utf8");
                n += l, e[n++] = 0;
                var c = n,
                    f = "string" == typeof r.code ? r.code : r.code.toString();
                n += 4;
                var h = e.write(f, n + 4, "utf8") + 1;
                e[n] = 255 & h, e[n + 1] = h >> 8 & 255, e[n + 2] = h >> 16 & 255, e[n + 3] = h >> 24 & 255, e[n + 4 + h - 1] = 0, n = n + h + 4;
                var d = serializeInto$1(e, r.scope, o, n, i + 1, s, a);
                n = d - 1;
                var p = d - c;
                e[c++] = 255 & p, e[c++] = p >> 8 & 255, e[c++] = p >> 16 & 255, e[c++] = p >> 24 & 255, e[n++] = 0
            } else {
                e[n++] = BSON$1$1.BSON_DATA_CODE, n += l = u ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0, f = r.code.toString();
                var g = e.write(f, n + 4, "utf8") + 1;
                e[n] = 255 & g, e[n + 1] = g >> 8 & 255, e[n + 2] = g >> 16 & 255, e[n + 3] = g >> 24 & 255, n = n + 4 + g - 1, e[n++] = 0
            }
            return n
        },
        serializeBinary$1 = function(e, t, r, n, o) {
            e[n++] = BSON$1$1.BSON_DATA_BINARY, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = r.value(!0),
                s = r.position;
            return r.sub_type === Binary$2$1.SUBTYPE_BYTE_ARRAY && (s += 4), e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255, e[n++] = r.sub_type, r.sub_type === Binary$2$1.SUBTYPE_BYTE_ARRAY && (s -= 4, e[n++] = 255 & s, e[n++] = s >> 8 & 255, e[n++] = s >> 16 & 255, e[n++] = s >> 24 & 255), i.copy(e, n, 0, r.position), n += r.position
        },
        serializeSymbol$1 = function(e, t, r, n, o) {
            e[n++] = BSON$1$1.BSON_DATA_SYMBOL, n += o ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var i = e.write(r.value, n + 4, "utf8") + 1;
            return e[n] = 255 & i, e[n + 1] = i >> 8 & 255, e[n + 2] = i >> 16 & 255, e[n + 3] = i >> 24 & 255, n = n + 4 + i - 1, e[n++] = 0, n
        },
        serializeDBRef$1 = function(e, t, r, n, o, i, s) {
            e[n++] = BSON$1$1.BSON_DATA_OBJECT, n += s ? e.write(t, n, "ascii") : e.write(t, n, "utf8"), e[n++] = 0;
            var a, u = n,
                l = {
                    $ref: r.collection,
                    $id: r.oid
                };
            null != r.db && (l.$db = r.db), l = Object.assign(l, r.fields);
            var c = (a = serializeInto$1(e, l, !1, n, o + 1, i)) - u;
            return e[u++] = 255 & c, e[u++] = c >> 8 & 255, e[u++] = c >> 16 & 255, e[u++] = c >> 24 & 255, a
        },
        serializeInto$1 = function(e, t, r, n, o, i, s, a) {
            n = n || 0, (a = a || []).push(t);
            var u = n + 4;
            if (Array.isArray(t))
                for (var l = 0; l < t.length; l++) {
                    var c = "" + l,
                        f = t[l];
                    if (f && f.toBSON) {
                        if ("function" != typeof f.toBSON) throw new TypeError("toBSON is not a function");
                        f = f.toBSON()
                    }
                    var h = void 0 === f ? "undefined" : _typeof$3(f);
                    "string" === h ? u = serializeString$1(e, c, f, u, !0) : "number" === h ? u = serializeNumber$1(e, c, f, u, !0) : "boolean" === h ? u = serializeBoolean$1(e, c, f, u, !0) : f instanceof Date || isDate$2(f) ? u = serializeDate$1(e, c, f, u, !0) : void 0 === f ? u = serializeNull$1(e, c, f, u, !0) : null === f ? u = serializeNull$1(e, c, f, u, !0) : "ObjectID" === f._bsontype ? u = serializeObjectId$1(e, c, f, u, !0) : Buffer$5$1.isBuffer(f) ? u = serializeBuffer$1(e, c, f, u, !0) : f instanceof RegExp || isRegExp$1(f) ? u = serializeRegExp$1(e, c, f, u, !0) : "object" === h && null == f._bsontype ? u = serializeObject$1(e, c, f, u, r, o, i, s, !0, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128$1(e, c, f, u, !0) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong$1(e, c, f, u, !0) : "Double" === f._bsontype ? u = serializeDouble$1(e, c, f, u, !0) : "function" == typeof f && i ? u = serializeFunction$1(e, c, f, u, r, o, i, !0) : "Code" === f._bsontype ? u = serializeCode$1(e, c, f, u, r, o, i, s, !0) : "Binary" === f._bsontype ? u = serializeBinary$1(e, c, f, u, !0) : "Symbol" === f._bsontype ? u = serializeSymbol$1(e, c, f, u, !0) : "DBRef" === f._bsontype ? u = serializeDBRef$1(e, c, f, u, o, i, !0) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp$1(e, c, f, u, !0) : "Int32" === f._bsontype ? u = serializeInt32$1(e, c, f, u, !0) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax$1(e, c, f, u, !0))
                } else if (t instanceof map$1)
                    for (var d = t.entries(), p = !1; !p;) {
                        var g = d.next();
                        if (!(p = g.done)) {
                            if (c = g.value[0], h = void 0 === (f = g.value[1]) ? "undefined" : _typeof$3(f), "$db" !== c && "$ref" !== c && "$id" !== c) {
                                if (null != c.match(regexp$1$1)) throw Error("key " + c + " must not contain null bytes");
                                if (r) {
                                    if ("$" === c[0]) throw Error("key " + c + " must not start with '$'");
                                    if (~c.indexOf(".")) throw Error("key " + c + " must not contain '.'")
                                }
                            }
                            "string" === h ? u = serializeString$1(e, c, f, u) : "number" === h ? u = serializeNumber$1(e, c, f, u) : "boolean" === h ? u = serializeBoolean$1(e, c, f, u) : f instanceof Date || isDate$2(f) ? u = serializeDate$1(e, c, f, u) : null === f || void 0 === f && !1 === s ? u = serializeNull$1(e, c, f, u) : "ObjectID" === f._bsontype ? u = serializeObjectId$1(e, c, f, u) : Buffer$5$1.isBuffer(f) ? u = serializeBuffer$1(e, c, f, u) : f instanceof RegExp || isRegExp$1(f) ? u = serializeRegExp$1(e, c, f, u) : "object" === h && null == f._bsontype ? u = serializeObject$1(e, c, f, u, r, o, i, s, !1, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128$1(e, c, f, u) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong$1(e, c, f, u) : "Double" === f._bsontype ? u = serializeDouble$1(e, c, f, u) : "Code" === f._bsontype ? u = serializeCode$1(e, c, f, u, r, o, i, s) : "function" == typeof f && i ? u = serializeFunction$1(e, c, f, u, r, o, i) : "Binary" === f._bsontype ? u = serializeBinary$1(e, c, f, u) : "Symbol" === f._bsontype ? u = serializeSymbol$1(e, c, f, u) : "DBRef" === f._bsontype ? u = serializeDBRef$1(e, c, f, u, o, i) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp$1(e, c, f, u) : "Int32" === f._bsontype ? u = serializeInt32$1(e, c, f, u) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax$1(e, c, f, u))
                        }
                    } else {
                        if (t.toBSON) {
                            if ("function" != typeof t.toBSON) throw new TypeError("toBSON is not a function");
                            if (null != (t = t.toBSON()) && "object" !== (void 0 === t ? "undefined" : _typeof$3(t))) throw new TypeError("toBSON function did not return an object")
                        }
                        for (c in t) {
                            if ((f = t[c]) && f.toBSON) {
                                if ("function" != typeof f.toBSON) throw new TypeError("toBSON is not a function");
                                f = f.toBSON()
                            }
                            if (h = void 0 === f ? "undefined" : _typeof$3(f), "$db" !== c && "$ref" !== c && "$id" !== c) {
                                if (null != c.match(regexp$1$1)) throw Error("key " + c + " must not contain null bytes");
                                if (r) {
                                    if ("$" === c[0]) throw Error("key " + c + " must not start with '$'");
                                    if (~c.indexOf(".")) throw Error("key " + c + " must not contain '.'")
                                }
                            }
                            "string" === h ? u = serializeString$1(e, c, f, u) : "number" === h ? u = serializeNumber$1(e, c, f, u) : "boolean" === h ? u = serializeBoolean$1(e, c, f, u) : f instanceof Date || isDate$2(f) ? u = serializeDate$1(e, c, f, u) : void 0 === f ? !1 === s && (u = serializeNull$1(e, c, f, u)) : null === f ? u = serializeNull$1(e, c, f, u) : "ObjectID" === f._bsontype ? u = serializeObjectId$1(e, c, f, u) : Buffer$5$1.isBuffer(f) ? u = serializeBuffer$1(e, c, f, u) : f instanceof RegExp || isRegExp$1(f) ? u = serializeRegExp$1(e, c, f, u) : "object" === h && null == f._bsontype ? u = serializeObject$1(e, c, f, u, r, o, i, s, !1, a) : "object" === h && "Decimal128" === f._bsontype ? u = serializeDecimal128$1(e, c, f, u) : "Long" === f._bsontype || "Timestamp" === f._bsontype ? u = serializeLong$1(e, c, f, u) : "Double" === f._bsontype ? u = serializeDouble$1(e, c, f, u) : "Code" === f._bsontype ? u = serializeCode$1(e, c, f, u, r, o, i, s) : "function" == typeof f && i ? u = serializeFunction$1(e, c, f, u, r, o, i) : "Binary" === f._bsontype ? u = serializeBinary$1(e, c, f, u) : "Symbol" === f._bsontype ? u = serializeSymbol$1(e, c, f, u) : "DBRef" === f._bsontype ? u = serializeDBRef$1(e, c, f, u, o, i) : "BSONRegExp" === f._bsontype ? u = serializeBSONRegExp$1(e, c, f, u) : "Int32" === f._bsontype ? u = serializeInt32$1(e, c, f, u) : "MinKey" !== f._bsontype && "MaxKey" !== f._bsontype || (u = serializeMinMax$1(e, c, f, u))
                        }
                    }
            a.pop(), e[u++] = 0;
            var y = u - n;
            return e[n++] = 255 & y, e[n++] = y >> 8 & 255, e[n++] = y >> 16 & 255, e[n++] = y >> 24 & 255, u
        },
        BSON$1$1 = {
            BSON_DATA_NUMBER: 1,
            BSON_DATA_STRING: 2,
            BSON_DATA_OBJECT: 3,
            BSON_DATA_ARRAY: 4,
            BSON_DATA_BINARY: 5,
            BSON_DATA_UNDEFINED: 6,
            BSON_DATA_OID: 7,
            BSON_DATA_BOOLEAN: 8,
            BSON_DATA_DATE: 9,
            BSON_DATA_NULL: 10,
            BSON_DATA_REGEXP: 11,
            BSON_DATA_CODE: 13,
            BSON_DATA_SYMBOL: 14,
            BSON_DATA_CODE_W_SCOPE: 15,
            BSON_DATA_INT: 16,
            BSON_DATA_TIMESTAMP: 17,
            BSON_DATA_LONG: 18,
            BSON_DATA_DECIMAL128: 19,
            BSON_DATA_MIN_KEY: 255,
            BSON_DATA_MAX_KEY: 127,
            BSON_BINARY_SUBTYPE_DEFAULT: 0,
            BSON_BINARY_SUBTYPE_FUNCTION: 1,
            BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
            BSON_BINARY_SUBTYPE_UUID: 3,
            BSON_BINARY_SUBTYPE_MD5: 4,
            BSON_BINARY_SUBTYPE_USER_DEFINED: 128,
            BSON_INT32_MAX: 2147483647,
            BSON_INT32_MIN: -2147483648
        };
    BSON$1$1.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON$1$1.BSON_INT64_MIN = -Math.pow(2, 63), BSON$1$1.JS_INT_MAX = 9007199254740992, BSON$1$1.JS_INT_MIN = -9007199254740992;
    var serializer$1 = serializeInto$1,
        Buffer$6$1 = buffer.Buffer,
        Long$3$1 = long_1$2.Long,
        Double$2$1 = double_1$2.Double,
        Timestamp$2$1 = timestamp$2.Timestamp,
        ObjectID$2$1 = objectid$2.ObjectID,
        _Symbol$1$1 = symbol$2.Symbol,
        BSONRegExp$2$1 = regexp$3.BSONRegExp,
        Code$2$1 = code$3.Code,
        MinKey$3$1 = min_key$2.MinKey,
        MaxKey$2$1 = max_key$2.MaxKey,
        DBRef$2$1 = db_ref$2.DBRef,
        Binary$3$1 = binary$2.Binary,
        normalizedFunctionString$2$1 = utils$1.normalizedFunctionString,
        isDate$1$1 = function(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof$3(e)) && "[object Date]" === Object.prototype.toString.call(e)
        },
        calculateObjectSize$1 = function(e, t, r) {
            var n = 5;
            if (Array.isArray(e))
                for (var o = 0; o < e.length; o++) n += calculateElement$1(o.toString(), e[o], t, !0, r);
            else
                for (var i in e.toBSON && (e = e.toBSON()), e) n += calculateElement$1(i, e[i], t, !1, r);
            return n
        };

    function calculateElement$1(e, t, r, n, o) {
        switch (t && t.toBSON && (t = t.toBSON()), void 0 === t ? "undefined" : _typeof$3(t)) {
            case "string":
                return 1 + Buffer$6$1.byteLength(e, "utf8") + 1 + 4 + Buffer$6$1.byteLength(t, "utf8") + 1;
            case "number":
                return Math.floor(t) === t && t >= BSON$2$1.JS_INT_MIN && t <= BSON$2$1.JS_INT_MAX && t >= BSON$2$1.BSON_INT32_MIN && t <= BSON$2$1.BSON_INT32_MAX ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 5 : (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 9;
            case "undefined":
                return n || !o ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 : 0;
            case "boolean":
                return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 2;
            case "object":
                if (null == t || t instanceof MinKey$3$1 || t instanceof MaxKey$2$1 || "MinKey" === t._bsontype || "MaxKey" === t._bsontype) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1;
                if (t instanceof ObjectID$2$1 || "ObjectID" === t._bsontype) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 13;
                if (t instanceof Date || isDate$1$1(t)) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 9;
                if (void 0 !== Buffer$6$1 && Buffer$6$1.isBuffer(t)) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 6 + t.length;
                if (t instanceof Long$3$1 || t instanceof Double$2$1 || t instanceof Timestamp$2$1 || "Long" === t._bsontype || "Double" === t._bsontype || "Timestamp" === t._bsontype) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 9;
                if (t instanceof decimal128$2 || "Decimal128" === t._bsontype) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 17;
                if (t instanceof Code$2$1 || "Code" === t._bsontype) return null != t.scope && Object.keys(t.scope).length > 0 ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6$1.byteLength(t.code.toString(), "utf8") + 1 + calculateObjectSize$1(t.scope, r, o) : (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + Buffer$6$1.byteLength(t.code.toString(), "utf8") + 1;
                if (t instanceof Binary$3$1 || "Binary" === t._bsontype) return t.sub_type === Binary$3$1.SUBTYPE_BYTE_ARRAY ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1 + 4) : (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1);
                if (t instanceof _Symbol$1$1 || "Symbol" === t._bsontype) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + Buffer$6$1.byteLength(t.value, "utf8") + 4 + 1 + 1;
                if (t instanceof DBRef$2$1 || "DBRef" === t._bsontype) {
                    var i = {
                        $ref: t.collection,
                        $id: t.oid
                    };
                    return null != t.db && (i.$db = t.db), i = Object.assign(i, t.fields), (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + calculateObjectSize$1(i, r, o)
                }
                return t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6$1.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1 : t instanceof BSONRegExp$2$1 || "BSONRegExp" === t._bsontype ? (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6$1.byteLength(t.pattern, "utf8") + 1 + Buffer$6$1.byteLength(t.options, "utf8") + 1 : (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + calculateObjectSize$1(t, r, o) + 1;
            case "function":
                if (t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) || "[object RegExp]" === String.call(t)) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + Buffer$6$1.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1;
                if (r && null != t.scope && Object.keys(t.scope).length > 0) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + Buffer$6$1.byteLength(normalizedFunctionString$2$1(t), "utf8") + 1 + calculateObjectSize$1(t.scope, r, o);
                if (r) return (null != e ? Buffer$6$1.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + Buffer$6$1.byteLength(normalizedFunctionString$2$1(t), "utf8") + 1
        }
        return 0
    }
    var BSON$2$1 = {
            BSON_INT32_MAX: 2147483647,
            BSON_INT32_MIN: -2147483648,
            JS_INT_MAX: 9007199254740992,
            JS_INT_MIN: -9007199254740992
        },
        calculate_size$1 = calculateObjectSize$1,
        Buffer$7$1 = buffer.Buffer,
        ensure_buffer$1 = function(e) {
            if (e instanceof Buffer$7$1) return e;
            if (e instanceof Uint8Array) return new Buffer$7$1(e.buffer);
            throw new TypeError("Must use either Buffer or Uint8Array")
        },
        Buffer$8$1 = buffer.Buffer,
        MAXSIZE$1 = 17825792,
        buffer$2 = new Buffer$8$1(MAXSIZE$1),
        BSON$3$1 = function() {};
    BSON$3$1.prototype.serialize = function(e, t) {
        var r = "boolean" == typeof(t = t || {}).checkKeys && t.checkKeys,
            n = "boolean" == typeof t.serializeFunctions && t.serializeFunctions,
            o = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined,
            i = "number" == typeof t.minInternalBufferSize ? t.minInternalBufferSize : MAXSIZE$1;
        buffer$2.length < i && (buffer$2 = new Buffer$8$1(i));
        var s = serializer$1(buffer$2, e, r, 0, 0, n, o, []),
            a = new Buffer$8$1(s);
        return buffer$2.copy(a, 0, 0, a.length), a
    }, BSON$3$1.prototype.serializeWithBufferAndIndex = function(e, t, r) {
        var n = "boolean" == typeof(r = r || {}).checkKeys && r.checkKeys,
            o = "boolean" == typeof r.serializeFunctions && r.serializeFunctions,
            i = "boolean" != typeof r.ignoreUndefined || r.ignoreUndefined,
            s = "number" == typeof r.index ? r.index : 0,
            a = serializer$1(buffer$2, e, n, 0, 0, o, i);
        return t = ensure_buffer$1(t), buffer$2.copy(t, s, 0, a), s + a - 1
    }, BSON$3$1.prototype.deserialize = function(e, t) {
        return e = ensure_buffer$1(e), deserializer$1(e, t)
    }, BSON$3$1.prototype.calculateObjectSize = function(e, t) {
        var r = "boolean" == typeof(t = t || {}).serializeFunctions && t.serializeFunctions,
            n = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined;
        return calculate_size$1(e, r, n)
    }, BSON$3$1.prototype.deserializeStream = function(e, t, r, n, o, i) {
        i = Object.assign({
            allowObjectSmallerThanBufferSize: !0
        }, i), e = ensure_buffer$1(e);
        for (var s = t, a = 0; a < r; a++) {
            var u = e[s] | e[s + 1] << 8 | e[s + 2] << 16 | e[s + 3] << 24;
            i.index = s, n[o + a] = this.deserialize(e, i), s += u
        }
        return s
    }, BSON$3$1.BSON_INT32_MAX = 2147483647, BSON$3$1.BSON_INT32_MIN = -2147483648, BSON$3$1.BSON_INT64_MAX = Math.pow(2, 63) - 1, BSON$3$1.BSON_INT64_MIN = -Math.pow(2, 63), BSON$3$1.JS_INT_MAX = 9007199254740992, BSON$3$1.JS_INT_MIN = -9007199254740992, BSON$3$1.BSON_DATA_NUMBER = 1, BSON$3$1.BSON_DATA_STRING = 2, BSON$3$1.BSON_DATA_OBJECT = 3, BSON$3$1.BSON_DATA_ARRAY = 4, BSON$3$1.BSON_DATA_BINARY = 5, BSON$3$1.BSON_DATA_OID = 7, BSON$3$1.BSON_DATA_BOOLEAN = 8, BSON$3$1.BSON_DATA_DATE = 9, BSON$3$1.BSON_DATA_NULL = 10, BSON$3$1.BSON_DATA_REGEXP = 11, BSON$3$1.BSON_DATA_CODE = 13, BSON$3$1.BSON_DATA_SYMBOL = 14, BSON$3$1.BSON_DATA_CODE_W_SCOPE = 15, BSON$3$1.BSON_DATA_INT = 16, BSON$3$1.BSON_DATA_TIMESTAMP = 17, BSON$3$1.BSON_DATA_LONG = 18, BSON$3$1.BSON_DATA_MIN_KEY = 255, BSON$3$1.BSON_DATA_MAX_KEY = 127, BSON$3$1.BSON_BINARY_SUBTYPE_DEFAULT = 0, BSON$3$1.BSON_BINARY_SUBTYPE_FUNCTION = 1, BSON$3$1.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, BSON$3$1.BSON_BINARY_SUBTYPE_UUID = 3, BSON$3$1.BSON_BINARY_SUBTYPE_MD5 = 4, BSON$3$1.BSON_BINARY_SUBTYPE_USER_DEFINED = 128;
    var bson$2 = BSON$3$1,
        Code_1$1$1 = code$3,
        Map_1$1 = map$1,
        Symbol_1$1$1 = symbol$2,
        BSON_1$1 = BSON$3$1,
        DBRef_1$1$1 = db_ref$2,
        Binary_1$1$1 = binary$2,
        ObjectId$1$1 = objectid$2,
        ObjectID_1$1$1 = objectid$2,
        Long_1$1$1 = long_1$2,
        Timestamp_1$1$1 = timestamp$2,
        Double_1$1$1 = double_1$2,
        Int32_1$1$1 = int_32$2,
        MinKey_1$1$1 = min_key$2,
        MaxKey_1$1$1 = max_key$2,
        BSONRegExp_1$1$1 = regexp$3,
        Decimal128_1$1$1 = decimal128$2;
    bson$2.Code = Code_1$1$1, bson$2.Map = Map_1$1, bson$2.Symbol = Symbol_1$1$1, bson$2.BSON = BSON_1$1, bson$2.DBRef = DBRef_1$1$1, bson$2.Binary = Binary_1$1$1, bson$2.ObjectId = ObjectId$1$1, bson$2.ObjectID = ObjectID_1$1$1, bson$2.Long = Long_1$1$1, bson$2.Timestamp = Timestamp_1$1$1, bson$2.Double = Double_1$1$1, bson$2.Int32 = Int32_1$1$1, bson$2.MinKey = MinKey_1$1$1, bson$2.MaxKey = MaxKey_1$1$1, bson$2.BSONRegExp = BSONRegExp_1$1$1, bson$2.Decimal128 = Decimal128_1$1$1;
    var jsBson$1 = bson$2,
        Fields$b;
    ! function(e) {
        e.ID = "_id", e.KEY = "key", e.NAME = "name", e.DISABLED = "disabled"
    }(Fields$b || (Fields$b = {}));
    var UserApiKey = function() {
            function e(e, t, r, n) {
                this.id = jsBson$1.ObjectID.createFromHexString(e), this.key = t, this.name = r, this.disabled = n
            }
            return e.readFromApi = function(t) {
                var r = "string" == typeof t ? JSON.parse(t) : t;
                return Assertions.keyPresent(Fields$b.ID, r), Assertions.keyPresent(Fields$b.NAME, r), Assertions.keyPresent(Fields$b.DISABLED, r), new e(r[Fields$b.ID], r[Fields$b.KEY], r[Fields$b.NAME], r[Fields$b.DISABLED])
            }, e.prototype.toJSON = function() {
                var e;
                return (e = {})[Fields$b.ID] = this.id, e[Fields$b.KEY] = this.key, e[Fields$b.NAME] = this.name, e[Fields$b.DISABLED] = this.disabled, e
            }, e
        }(),
        UserApiKeyAuthProvider = function() {
            function e() {}
            return e.TYPE = "api-key", e.DEFAULT_NAME = "api-key", e
        }(),
        __extends$d = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        ApiKeyFields;
    ! function(e) {
        e.NAME = "name"
    }(ApiKeyFields || (ApiKeyFields = {}));
    var CoreUserApiKeyAuthProviderClient = function(e) {
            function t(t, r) {
                var n = r.baseAuthRoute + "/api_keys",
                    o = UserApiKeyAuthProvider.DEFAULT_NAME;
                return e.call(this, o, t, n) || this
            }
            return __extends$d(t, e), t.prototype.createApiKey = function(e) {
                var t, r = new StitchAuthDocRequest.Builder;
                return r.withMethod(Method$1.POST).withPath(this.baseRoute).withDocument((t = {}, t[ApiKeyFields.NAME] = e, t)).withRefreshToken(), this.requestClient.doAuthenticatedRequest(r.build()).then(function(e) {
                    return UserApiKey.readFromApi(e.body)
                }).catch(function(e) {
                    throw wrapDecodingError(e)
                })
            }, t.prototype.fetchApiKey = function(e) {
                var t = new StitchAuthRequest.Builder;
                return t.withMethod(Method$1.GET).withPath(this.getApiKeyRoute(e.toHexString())), t.withRefreshToken(), this.requestClient.doAuthenticatedRequest(t.build()).then(function(e) {
                    return UserApiKey.readFromApi(e.body)
                }).catch(function(e) {
                    throw wrapDecodingError(e)
                })
            }, t.prototype.fetchApiKeys = function() {
                var e = new StitchAuthRequest.Builder;
                return e.withMethod(Method$1.GET).withPath(this.baseRoute), e.withRefreshToken(), this.requestClient.doAuthenticatedRequest(e.build()).then(function(e) {
                    var t = JSON.parse(e.body);
                    if (Array.isArray(t)) return t.map(function(e) {
                        return UserApiKey.readFromApi(e)
                    });
                    throw new StitchRequestError(new Error("unexpected non-array response from server"), StitchRequestErrorCode.DECODING_ERROR)
                }).catch(function(e) {
                    throw wrapDecodingError(e)
                })
            }, t.prototype.deleteApiKey = function(e) {
                var t = new StitchAuthRequest.Builder;
                return t.withMethod(Method$1.DELETE).withPath(this.getApiKeyRoute(e.toHexString())), t.withRefreshToken(), this.requestClient.doAuthenticatedRequest(t.build()).then(function() {})
            }, t.prototype.enableApiKey = function(e) {
                var t = new StitchAuthRequest.Builder;
                return t.withMethod(Method$1.PUT).withPath(this.getApiKeyEnableRoute(e.toHexString())), t.withRefreshToken(), this.requestClient.doAuthenticatedRequest(t.build()).then(function() {})
            }, t.prototype.disableApiKey = function(e) {
                var t = new StitchAuthRequest.Builder;
                return t.withMethod(Method$1.PUT).withPath(this.getApiKeyDisableRoute(e.toHexString())), t.withRefreshToken(), this.requestClient.doAuthenticatedRequest(t.build()).then(function() {})
            }, t.prototype.getApiKeyRoute = function(e) {
                return this.baseRoute + "/" + e
            }, t.prototype.getApiKeyEnableRoute = function(e) {
                return this.getApiKeyRoute(e) + "/enable"
            }, t.prototype.getApiKeyDisableRoute = function(e) {
                return this.getApiKeyRoute(e) + "/disable"
            }, t
        }(CoreAuthProviderClient),
        Fields$c;
    (Fields$c || (Fields$c = {})).KEY = "key";
    var UserPasswordAuthProvider = function() {
            function e() {}
            return e.TYPE = "local-userpass", e.DEFAULT_NAME = "local-userpass", e
        }(),
        __extends$e = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        RegistrationFields, ActionFields;
    ! function(e) {
        e.EMAIL = "email", e.PASSWORD = "password"
    }(RegistrationFields || (RegistrationFields = {})),
    function(e) {
        e.EMAIL = "email", e.PASSWORD = "password", e.TOKEN = "token", e.TOKEN_ID = "tokenId"
    }(ActionFields || (ActionFields = {}));
    var CoreUserPasswordAuthProviderClient = function(e) {
            function t(t, r, n) {
                void 0 === t && (t = UserPasswordAuthProvider.DEFAULT_NAME);
                var o = n.getAuthProviderRoute(t);
                return e.call(this, t, r, o) || this
            }
            return __extends$e(t, e), t.prototype.registerWithEmailInternal = function(e, t) {
                var r, n = new StitchDocRequest.Builder;
                return n.withMethod(Method$1.POST).withPath(this.getRegisterWithEmailRoute()), n.withDocument(((r = {})[RegistrationFields.EMAIL] = e, r[RegistrationFields.PASSWORD] = t, r)), this.requestClient.doRequest(n.build()).then(function() {})
            }, t.prototype.confirmUserInternal = function(e, t) {
                var r, n = new StitchDocRequest.Builder;
                return n.withMethod(Method$1.POST).withPath(this.getConfirmUserRoute()), n.withDocument(((r = {})[ActionFields.TOKEN] = e, r[ActionFields.TOKEN_ID] = t, r)), this.requestClient.doRequest(n.build()).then(function() {})
            }, t.prototype.resendConfirmationEmailInternal = function(e) {
                var t, r = new StitchDocRequest.Builder;
                return r.withMethod(Method$1.POST).withPath(this.getResendConfirmationEmailRoute()), r.withDocument(((t = {})[ActionFields.EMAIL] = e, t)), this.requestClient.doRequest(r.build()).then(function() {})
            }, t.prototype.resetPasswordInternal = function(e, t, r) {
                var n, o = new StitchDocRequest.Builder;
                return o.withMethod(Method$1.POST).withPath(this.getResetPasswordRoute()), o.withDocument(((n = {})[ActionFields.TOKEN] = e, n[ActionFields.TOKEN_ID] = t, n[ActionFields.PASSWORD] = r, n)), this.requestClient.doRequest(o.build()).then(function() {})
            }, t.prototype.sendResetPasswordEmailInternal = function(e) {
                var t, r = new StitchDocRequest.Builder;
                return r.withMethod(Method$1.POST).withPath(this.getSendResetPasswordEmailRoute()), r.withDocument(((t = {})[ActionFields.EMAIL] = e, t)), this.requestClient.doRequest(r.build()).then(function() {})
            }, t.prototype.getRegisterWithEmailRoute = function() {
                return this.getExtensionRoute("register")
            }, t.prototype.getConfirmUserRoute = function() {
                return this.getExtensionRoute("confirm")
            }, t.prototype.getResendConfirmationEmailRoute = function() {
                return this.getExtensionRoute("confirm/send")
            }, t.prototype.getResetPasswordRoute = function() {
                return this.getExtensionRoute("reset")
            }, t.prototype.getSendResetPasswordEmailRoute = function() {
                return this.getExtensionRoute("reset/send")
            }, t.prototype.getExtensionRoute = function(e) {
                return this.baseRoute + "/" + e
            }, t
        }(CoreAuthProviderClient),
        Fields$d, UserType;
    ! function(e) {
        e.USERNAME = "username", e.PASSWORD = "password"
    }(Fields$d || (Fields$d = {})),
    function(e) {
        e.Normal = "normal", e.Server = "server", e.Unknown = "unknown"
    }(UserType || (UserType = {}));
    var CoreStitchServiceClientImpl = function() {
            function e(e, t, r) {
                this.requestClient = e, this.serviceRoutes = t, this.serviceName = r
            }
            return e.prototype.callFunction = function(e, t, r) {
                return this.requestClient.doAuthenticatedRequestWithDecoder(this.getCallServiceFunctionRequest(e, t), r)
            }, e.prototype.streamFunction = function(e, t, r) {
                return this.requestClient.openAuthenticatedStreamWithDecoder(this.getStreamServiceFunctionRequest(e, t), r)
            }, e.prototype.getStreamServiceFunctionRequest = function(e, t) {
                var r = {
                    name: e
                };
                void 0 !== this.serviceName && (r.service = this.serviceName), r.arguments = t;
                var n = new StitchAuthRequest.Builder;
                return n.withMethod(Method$1.GET).withPath(this.serviceRoutes.functionCallRoute + "?stitch_request=" + encodeURIComponent(base64Encode(JSON.stringify(r)))), n.build()
            }, e.prototype.getCallServiceFunctionRequest = function(e, t) {
                var r = {
                    name: e
                };
                void 0 !== this.serviceName && (r.service = this.serviceName), r.arguments = t;
                var n = new StitchAuthDocRequest.Builder;
                return n.withMethod(Method$1.POST).withPath(this.serviceRoutes.functionCallRoute), n.withDocument(r), n.build()
            }, e
        }(),
        CoreStitchAppClient = function() {
            function e(e, t) {
                this.functionService = new CoreStitchServiceClientImpl(e, t.serviceRoutes)
            }
            return e.prototype.callFunction = function(e, t, r) {
                return this.functionService.callFunction(e, t, r)
            }, e
        }(),
        BasicRequest = function() {
            return function(e, t, r, n) {
                this.method = e, this.url = t, this.headers = r, this.body = n
            }
        }();
    ! function(e) {
        var t = function() {
            function t(e) {
                e && (this.method = e.method, this.url = e.url, this.headers = e.headers, this.body = e.body)
            }
            return t.prototype.withMethod = function(e) {
                return this.method = e, this
            }, t.prototype.withUrl = function(e) {
                return this.url = e, this
            }, t.prototype.withHeaders = function(e) {
                return this.headers = e, this
            }, t.prototype.withBody = function(e) {
                return this.body = e, this
            }, t.prototype.build = function() {
                if (void 0 === this.method) throw new Error("must set method");
                if (void 0 === this.url) throw new Error("must set non-empty url");
                return new e(this.method, this.url, void 0 === this.headers ? {} : this.headers, this.body)
            }, t
        }();
        e.Builder = t
    }(BasicRequest || (BasicRequest = {}));
    var BaseEventStream = function() {
            function e(e) {
                this.reconnecter = e, this.closed = !1, this.events = [], this.listeners = [], this.lastErr = void 0
            }
            return e.prototype.reconnect = function(t) {
                var r = this;
                this.reconnecter ? this.reconnecter().then(function(e) {
                    r.onReconnect(e)
                }).catch(function(n) {
                    if (!(n instanceof StitchError && n instanceof StitchRequestError)) return r.closed = !0, r.events.push(new Event(StitchEvent.ERROR_EVENT_NAME, "stream closed: " + t)), void r.poll();
                    setTimeout(function() {
                        return r.reconnect(n)
                    }, e.RETRY_TIMEOUT_MILLIS)
                }) : this.closed || (this.closed = !0, this.events.push(new Event(StitchEvent.ERROR_EVENT_NAME, "stream closed: " + t)), this.poll())
            }, e.prototype.poll = function() {
                for (; 0 !== this.events.length;)
                    for (var e = this.events.pop(), t = 0, r = this.listeners; t < r.length; t++) {
                        var n = r[t];
                        n.onEvent && n.onEvent(e)
                    }
            }, e.prototype.addListener = function(e) {
                var t = this;
                this.closed ? setTimeout(function() {
                    return e.onEvent(new Event(StitchEvent.ERROR_EVENT_NAME, "stream closed"))
                }, 0) : void 0 === this.lastErr ? (this.listeners.push(e), this.poll()) : setTimeout(function() {
                    return e.onEvent(new Event(StitchEvent.ERROR_EVENT_NAME, t.lastErr))
                }, 0)
            }, e.prototype.removeListener = function(e) {
                var t = this.listeners.indexOf(e); - 1 !== t && this.listeners.splice(t, 1)
            }, e.prototype.listenOnce = function(e) {
                var t = this;
                if (this.closed) setTimeout(function() {
                    return e.onEvent(new Event(StitchEvent.ERROR_EVENT_NAME, "stream closed"))
                }, 0);
                else if (void 0 === this.lastErr) {
                    var r = {
                        onEvent: function(n) {
                            t.removeListener(r), e.onEvent(n)
                        }
                    };
                    this.addListener(r)
                } else setTimeout(function() {
                    return e.onEvent(new Event(StitchEvent.ERROR_EVENT_NAME, t.lastErr))
                }, 0)
            }, e.prototype.nextEvent = function() {
                var e = this;
                return this.closed ? Promise.reject(new Event(StitchEvent.ERROR_EVENT_NAME, "stream closed")) : void 0 !== this.lastErr ? Promise.reject(new Event(StitchEvent.ERROR_EVENT_NAME, this.lastErr)) : new Promise(function(t, r) {
                    e.listenOnce({
                        onEvent: function(e) {
                            t(e)
                        }
                    })
                })
            }, e.prototype.close = function() {
                this.closed || (this.closed = !0, this.afterClose())
            }, e.RETRY_TIMEOUT_MILLIS = 5e3, e
        }(),
        Response = function() {
            return function(e, t, r) {
                var n = this;
                this.statusCode = t, this.body = r, this.headers = {}, Object.keys(e).map(function(t, r) {
                    n.headers[t.toLocaleLowerCase()] = e[t]
                })
            }
        }(),
        support = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };

    function isDataView(e) {
        return e && DataView.prototype.isPrototypeOf(e)
    }
    if (support.arrayBuffer) var viewClasses = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        isArrayBufferView = ArrayBuffer.isView || function(e) {
            return e && viewClasses.indexOf(Object.prototype.toString.call(e)) > -1
        };

    function normalizeName(e) {
        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }

    function normalizeValue(e) {
        return "string" != typeof e && (e = String(e)), e
    }

    function iteratorFor(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return support.iterable && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function Headers$1(e) {
        this.map = {}, e instanceof Headers$1 ? e.forEach(function(e, t) {
            this.append(t, e)
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
            this.append(e[0], e[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function consumed(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function fileReaderReady(e) {
        return new Promise(function(t, r) {
            e.onload = function() {
                t(e.result)
            }, e.onerror = function() {
                r(e.error)
            }
        })
    }

    function readBlobAsArrayBuffer(e) {
        var t = new FileReader,
            r = fileReaderReady(t);
        return t.readAsArrayBuffer(e), r
    }

    function readBlobAsText(e) {
        var t = new FileReader,
            r = fileReaderReady(t);
        return t.readAsText(e), r
    }

    function readArrayBufferAsText(e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
        return r.join("")
    }

    function bufferClone(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function Body() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : support.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : support.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : support.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : support.arrayBuffer && support.blob && isDataView(e) ? (this._bodyArrayBuffer = bufferClone(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || isArrayBufferView(e)) ? this._bodyArrayBuffer = bufferClone(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, support.blob && (this.blob = function() {
            var e = consumed(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer)
        }), this.text = function() {
            var e = consumed(this);
            if (e) return e;
            if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, support.formData && (this.formData = function() {
            return this.text().then(decode)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    Headers$1.prototype.append = function(e, t) {
        e = normalizeName(e), t = normalizeValue(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t
    }, Headers$1.prototype.delete = function(e) {
        delete this.map[normalizeName(e)]
    }, Headers$1.prototype.get = function(e) {
        return e = normalizeName(e), this.has(e) ? this.map[e] : null
    }, Headers$1.prototype.has = function(e) {
        return this.map.hasOwnProperty(normalizeName(e))
    }, Headers$1.prototype.set = function(e, t) {
        this.map[normalizeName(e)] = normalizeValue(t)
    }, Headers$1.prototype.forEach = function(e, t) {
        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
    }, Headers$1.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push(r)
        }), iteratorFor(e)
    }, Headers$1.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), iteratorFor(e)
    }, Headers$1.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push([r, t])
        }), iteratorFor(e)
    }, support.iterable && (Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries);
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function normalizeMethod(e) {
        var t = e.toUpperCase();
        return methods.indexOf(t) > -1 ? t : e
    }

    function Request$1(e, t) {
        var r = (t = t || {}).body;
        if (e instanceof Request$1) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Headers$1(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new Headers$1(t.headers)), this.method = normalizeMethod(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r)
    }

    function decode(e) {
        var t = new FormData;
        return e.trim().split("&").forEach(function(e) {
            if (e) {
                var r = e.split("="),
                    n = r.shift().replace(/\+/g, " "),
                    o = r.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(n), decodeURIComponent(o))
            }
        }), t
    }

    function parseHeaders(e) {
        var t = new Headers$1;
        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
            var r = e.split(":"),
                n = r.shift().trim();
            if (n) {
                var o = r.join(":").trim();
                t.append(n, o)
            }
        }), t
    }

    function Response$1(e, t) {
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new Headers$1(t.headers), this.url = t.url || "", this._initBody(e)
    }
    Request$1.prototype.clone = function() {
        return new Request$1(this, {
            body: this._bodyInit
        })
    }, Body.call(Request$1.prototype), Body.call(Response$1.prototype), Response$1.prototype.clone = function() {
        return new Response$1(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers$1(this.headers),
            url: this.url
        })
    }, Response$1.error = function() {
        var e = new Response$1(null, {
            status: 0,
            statusText: ""
        });
        return e.type = "error", e
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response$1.redirect = function(e, t) {
        if (-1 === redirectStatuses.indexOf(t)) throw new RangeError("Invalid status code");
        return new Response$1(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var DOMException = self.DOMException;
    try {
        new DOMException
    } catch (e) {
        DOMException = function(e, t) {
            this.message = e, this.name = t;
            var r = Error(e);
            this.stack = r.stack
        }, DOMException.prototype = Object.create(Error.prototype), DOMException.prototype.constructor = DOMException
    }

    function fetch(e, t) {
        return new Promise(function(r, n) {
            var o = new Request$1(e, t);
            if (o.signal && o.signal.aborted) return n(new DOMException("Aborted", "AbortError"));
            var i = new XMLHttpRequest;

            function s() {
                i.abort()
            }
            i.onload = function() {
                var e = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: parseHeaders(i.getAllResponseHeaders() || "")
                };
                e.url = "responseURL" in i ? i.responseURL : e.headers.get("X-Request-URL");
                var t = "response" in i ? i.response : i.responseText;
                r(new Response$1(t, e))
            }, i.onerror = function() {
                n(new TypeError("Network request failed"))
            }, i.ontimeout = function() {
                n(new TypeError("Network request failed"))
            }, i.onabort = function() {
                n(new DOMException("Aborted", "AbortError"))
            }, i.open(o.method, o.url, !0), "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1), "responseType" in i && support.blob && (i.responseType = "blob"), o.headers.forEach(function(e, t) {
                i.setRequestHeader(t, e)
            }), o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() {
                4 === i.readyState && o.signal.removeEventListener("abort", s)
            }), i.send(void 0 === o._bodyInit ? null : o._bodyInit)
        })
    }
    fetch.polyfill = !0, self.fetch || (self.fetch = fetch, self.Headers = Headers$1, self.Request = Request$1, self.Response = Response$1);
    var globalObj = "undefined" != typeof self && self || commonjsGlobal,
        fetchNpmBrowserify = globalObj.fetch.bind(globalObj),
        BASE_ROUTE = "/api/client/v2.0";

    function getAppRoute(e) {
        return BASE_ROUTE + "/app/" + e
    }

    function getFunctionCallRoute(e) {
        return getAppRoute(e) + "/functions/call"
    }

    function getAuthProviderRoute(e, t) {
        return getAppRoute(e) + "/auth/providers/" + t
    }

    function getAuthProviderLoginRoute(e, t) {
        return getAuthProviderRoute(e, t) + "/login"
    }

    function getAuthProviderLinkRoute(e, t) {
        return getAuthProviderLoginRoute(e, t) + "?link=true"
    }
    var StitchAppAuthRoutes = function() {
            function e(e) {
                var t = this;
                this.baseAuthRoute = BASE_ROUTE + "/auth", this.sessionRoute = t.baseAuthRoute + "/session", this.profileRoute = t.baseAuthRoute + "/profile", this.clientAppId = e
            }
            return e.prototype.getAuthProviderRoute = function(e) {
                return getAuthProviderRoute(this.clientAppId, e)
            }, e.prototype.getAuthProviderLoginRoute = function(e) {
                return getAuthProviderLoginRoute(this.clientAppId, e)
            }, e.prototype.getAuthProviderLinkRoute = function(e) {
                return getAuthProviderLinkRoute(this.clientAppId, e)
            }, e.prototype.getAuthProviderExtensionRoute = function(e, t) {
                return this.getAuthProviderRoute(e) + "/" + t
            }, e
        }(),
        StitchServiceRoutes = function() {
            return function(e) {
                this.clientAppId = e, this.functionCallRoute = getFunctionCallRoute(e)
            }
        }(),
        StitchAppRoutes = function() {
            return function(e) {
                this.clientAppId = e, this.authRoutes = new StitchAppAuthRoutes(e), this.serviceRoutes = new StitchServiceRoutes(e), this.functionCallRoute = getFunctionCallRoute(e)
            }
        }();

    function inspectResponse(e) {
        return e.statusCode >= 200 && e.statusCode < 300 ? e : handleRequestError(e)
    }
    var StitchRequestClient = function() {
            function e(e, t) {
                this.baseUrl = e, this.transport = t
            }
            return e.prototype.doRequest = function(e) {
                return this.transport.roundTrip(this.buildRequest(e)).catch(function(e) {
                    throw new StitchRequestError(e, StitchRequestErrorCode.TRANSPORT_ERROR)
                }).then(inspectResponse)
            }, e.prototype.doStreamRequest = function(e, t, r) {
                return void 0 === t && (t = !0), this.transport.stream(this.buildRequest(e), t, r).catch(function(e) {
                    if (e instanceof StitchError) throw e;
                    throw new StitchRequestError(e, StitchRequestErrorCode.TRANSPORT_ERROR)
                })
            }, e.prototype.buildRequest = function(e) {
                return (new BasicRequest.Builder).withMethod(e.method).withUrl("" + this.baseUrl + e.path).withHeaders(e.headers).withBody(e.body).build()
            }, e
        }(),
        StitchClientConfiguration = function() {
            function e(e, t, r, n) {
                this.baseUrl = e, this.storage = t, this.dataDirectory = r, this.transport = n
            }
            return e.prototype.builder = function() {
                return new e.Builder(this)
            }, e
        }();
    ! function(e) {
        var t = function() {
            function t(e) {
                e && (this.baseUrl = e.baseUrl, this.storage = e.storage, this.dataDirectory = e.dataDirectory, this.transport = e.transport)
            }
            return t.prototype.withBaseUrl = function(e) {
                return this.baseUrl = e, this
            }, t.prototype.withStorage = function(e) {
                return this.storage = e, this
            }, t.prototype.withDataDirectory = function(e) {
                return this.dataDirectory = e, this
            }, t.prototype.withTransport = function(e) {
                return this.transport = e, this
            }, t.prototype.build = function() {
                return new e(this.baseUrl, this.storage, this.dataDirectory, this.transport)
            }, t
        }();
        e.Builder = t
    }(StitchClientConfiguration || (StitchClientConfiguration = {}));
    var __extends$f = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchAppClientConfiguration = function(e) {
            function t(t, r, n) {
                var o = e.call(this, t.baseUrl, t.storage, t.dataDirectory, t.transport) || this;
                return o.localAppVersion = n, o.localAppName = r, o
            }
            return __extends$f(t, e), t.prototype.builder = function() {
                return new t.Builder(this)
            }, t
        }(StitchClientConfiguration);
    ! function(e) {
        var t = function(t) {
            function r(e) {
                var r = t.call(this, e) || this;
                return e && (r.localAppVersion = e.localAppVersion, r.localAppName = e.localAppName), r
            }
            return __extends$f(r, t), r.prototype.withLocalAppName = function(e) {
                return this.localAppName = e, this
            }, r.prototype.withLocalAppVersion = function(e) {
                return this.localAppVersion = e, this
            }, r.prototype.build = function() {
                var r = t.prototype.build.call(this);
                return new e(r, this.localAppName, this.localAppVersion)
            }, r
        }(StitchClientConfiguration.Builder);
        e.Builder = t
    }(StitchAppClientConfiguration || (StitchAppClientConfiguration = {}));
    var StitchAppClientInfo = function() {
            return function(e, t, r, n) {
                this.clientAppId = e, this.dataDirectory = t, this.localAppName = r, this.localAppVersion = n
            }
        }(),
        __extends$g = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        UserApiKeyAuthProviderClientImpl = function(e) {
            function t(t, r) {
                return e.call(this, t, r) || this
            }
            return __extends$g(t, e), t.prototype.createApiKey = function(t) {
                return e.prototype.createApiKey.call(this, t)
            }, t.prototype.fetchApiKey = function(t) {
                return e.prototype.fetchApiKey.call(this, t)
            }, t.prototype.fetchApiKeys = function() {
                return e.prototype.fetchApiKeys.call(this)
            }, t.prototype.deleteApiKey = function(t) {
                return e.prototype.deleteApiKey.call(this, t)
            }, t.prototype.enableApiKey = function(t) {
                return e.prototype.enableApiKey.call(this, t)
            }, t.prototype.disableApiKey = function(t) {
                return e.prototype.disableApiKey.call(this, t)
            }, t
        }(CoreUserApiKeyAuthProviderClient),
        UserApiKeyAuthProviderClient;
    ! function(e) {
        e.factory = new(function() {
            function e() {}
            return e.prototype.getClient = function(e, t, r) {
                return new UserApiKeyAuthProviderClientImpl(e, r)
            }, e
        }())
    }(UserApiKeyAuthProviderClient || (UserApiKeyAuthProviderClient = {}));
    var __extends$h = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        UserPasswordAuthProviderClientImpl = function(e) {
            function t(t, r) {
                return e.call(this, UserPasswordAuthProvider.DEFAULT_NAME, t, r) || this
            }
            return __extends$h(t, e), t.prototype.registerWithEmail = function(t, r) {
                return e.prototype.registerWithEmailInternal.call(this, t, r)
            }, t.prototype.confirmUser = function(t, r) {
                return e.prototype.confirmUserInternal.call(this, t, r)
            }, t.prototype.resendConfirmationEmail = function(t) {
                return e.prototype.resendConfirmationEmailInternal.call(this, t)
            }, t.prototype.resetPassword = function(t, r, n) {
                return e.prototype.resetPasswordInternal.call(this, t, r, n)
            }, t.prototype.sendResetPasswordEmail = function(t) {
                return e.prototype.sendResetPasswordEmailInternal.call(this, t)
            }, t
        }(CoreUserPasswordAuthProviderClient),
        UserPasswordAuthProviderClient;
    ! function(e) {
        e.factory = new(function() {
            function e() {}
            return e.prototype.getClient = function(e, t, r) {
                return new UserPasswordAuthProviderClientImpl(t, r)
            }, e
        }())
    }(UserPasswordAuthProviderClient || (UserPasswordAuthProviderClient = {}));
    var stitchPrefixKey = "__stitch.client",
        LocalStorage = function() {
            function e(e) {
                this.suiteName = e
            }
            return e.prototype.getKey = function(e) {
                return stitchPrefixKey + "." + this.suiteName + "." + e
            }, e.prototype.get = function(e) {
                return localStorage.getItem(this.getKey(e))
            }, e.prototype.set = function(e, t) {
                localStorage.setItem(this.getKey(e), t)
            }, e.prototype.remove = function(e) {
                localStorage.removeItem(this.getKey(e))
            }, e
        }(),
        __extends$i = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        ReaderEventStream = function(e) {
            function t(t, r, n) {
                var o = e.call(this, n) || this;
                return o.readerStream = t, r && o.reset(), o
            }
            return __extends$i(t, e), t.prototype.open = function() {
                if (this.closed) throw new StitchClientError(StitchClientErrorCode.StreamClosed);
                this.reset()
            }, t.prototype.reset = function() {
                this.reader = this.readerStream.getReader(), this.dataBuffer = new Array, this.eventName = "", this.bufferPos = 0, this.buffer = new Array, this.doneOnce = !1, this.processLine()
            }, t.prototype.onReconnect = function(e) {
                this.readerStream = e.readerStream, this.reset()
            }, t.prototype.readLine = function() {
                for (var e = this; this.bufferPos < this.buffer.length; this.bufferPos++) {
                    var t = -1;
                    if (13 === this.buffer[this.bufferPos] && this.bufferPos + 1 > this.buffer.length && 10 === this.buffer[this.bufferPos] ? t = this.bufferPos + 2 : 10 === this.buffer[this.bufferPos] ? t = this.bufferPos + 1 : this.doneOnce && 13 === this.buffer[this.bufferPos] ? t = this.bufferPos + 1 : this.doneOnce && (t = 0), -1 !== t) {
                        var r = utf8Slice(new Uint8Array(this.buffer.slice(0, this.bufferPos)), 0, this.bufferPos);
                        return this.buffer.splice(0, t), this.bufferPos = 0, Promise.resolve({
                            line: r,
                            ok: !0
                        })
                    }
                }
                return this.doneOnce ? Promise.resolve({
                    line: "",
                    ok: !1
                }) : this.reader.read().then(function(t) {
                    if (t.done) return e.doneOnce = !0, e.readLine();
                    for (var r = t.value, n = 0; n < r.length; n++) e.buffer.push(r[n]);
                    return e.readLine()
                })
            }, t.prototype.processField = function(e, t) {
                if ("event" === e) this.eventName = t;
                else if ("data" === e) {
                    0 !== this.dataBuffer.length && this.dataBuffer.push("\n");
                    for (var r = 0; r < t.length; r++) this.dataBuffer.push(t[r])
                }
            }, t.prototype.dispatchEvent = function() {
                if (0 !== this.dataBuffer.length) {
                    var e = new Event(this.eventName ? this.eventName : Event.MESSAGE_EVENT, this.dataBuffer.join(""));
                    this.dataBuffer = new Array, this.eventName = "", e.eventName === StitchEvent.ERROR_EVENT_NAME && (this.lastErr = e.data, this.close()), this.events.push(e), this.poll()
                } else this.eventName = ""
            }, t.prototype.processLine = function() {
                var e = this;
                this.readLine().then(function(t) {
                    if (t.ok) {
                        var r = t.line;
                        if (0 === r.length) e.dispatchEvent();
                        else if (r.startsWith(":"));
                        else if (r.includes(":")) {
                            var n = r.indexOf(":"),
                                o = r.substring(0, n),
                                i = r.substring(n + 1);
                            i = i.startsWith(" ") ? i.substring(1) : i, e.processField(o, i)
                        } else e.processField(r, "");
                        e.processLine()
                    } else {
                        if (e.closed) return;
                        e.reconnect()
                    }
                }).catch(function(t) {
                    return e.reconnect(t)
                })
            }, t.prototype.afterClose = function() {
                this.reader.cancel()
            }, t
        }(BaseEventStream),
        __extends$j = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        EventSourceEventStream = function(e) {
            function t(t, r, n, o) {
                var i = e.call(this, o) || this;
                return i.evtSrc = t, i.onOpenError = n, i.openedOnce = !1, i.evtSrc.onopen = function(e) {
                    r(i), i.openedOnce = !0
                }, i.reset(), i
            }
            return __extends$j(t, e), t.prototype.open = function() {
                if (this.closed) throw new StitchClientError(StitchClientErrorCode.StreamClosed)
            }, t.prototype.reset = function() {
                var e = this;
                this.evtSrc.onmessage = function(t) {
                    e.events.push(new Event(Event.MESSAGE_EVENT, t.data)), e.poll()
                }, this.evtSrc.onerror = function(t) {
                    return t instanceof MessageEvent ? (e.lastErr = t.data, e.events.push(new Event(StitchEvent.ERROR_EVENT_NAME, e.lastErr)), e.close(), void e.poll()) : e.openedOnce ? (e.evtSrc.close(), void e.reconnect()) : (e.close(), void e.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details")))
                }
            }, t.prototype.onReconnect = function(e) {
                this.evtSrc = e.evtSrc, this.reset(), this.events = e.events.concat(this.events)
            }, t.prototype.afterClose = function() {
                this.evtSrc.close()
            }, t
        }(BaseEventStream),
        __assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        },
        FetchStreamTransport = function() {
            function e() {}
            return e.prototype.roundTrip = function(e) {
                var t = fetchNpmBrowserify(e.url, {
                        body: e.body,
                        headers: e.headers,
                        method: e.method,
                        mode: "cors"
                    }),
                    r = t.then(function(e) {
                        return e.text()
                    });
                return Promise.all([t, r]).then(function(e) {
                    var t = e[0],
                        r = e[1],
                        n = {};
                    return t.headers.forEach(function(e, t) {
                        n[t] = e
                    }), new Response(n, t.status, r)
                })
            }, e.prototype.stream = function(e, t, r) {
                var n;
                void 0 === t && (t = !0);
                try {
                    new ReadableStream, n = !0
                } catch (e) {
                    n = !1
                }
                var o = __assign({}, e.headers);
                return o[Headers.ACCEPT] = ContentTypes.TEXT_EVENT_STREAM, o[Headers.CONTENT_TYPE] = ContentTypes.TEXT_EVENT_STREAM, n ? fetchNpmBrowserify(e.url, {
                    body: e.body,
                    headers: o,
                    method: e.method,
                    mode: "cors"
                }).then(function(e) {
                    var n = {};
                    return e.headers.forEach(function(e, t) {
                        n[t] = e
                    }), e.status < 200 || e.status >= 300 ? e.text().then(function(t) {
                        return handleRequestError(new Response(n, e.status, t))
                    }) : new ReaderEventStream(e.body, t, r ? function() {
                        return r().then(function(e) {
                            return e
                        })
                    } : void 0)
                }) : fetchNpmBrowserify(e.url + "&stitch_validate=true", {
                    body: e.body,
                    headers: o,
                    method: e.method,
                    mode: "cors"
                }).then(function(t) {
                    var n = {};
                    return t.headers.forEach(function(e, t) {
                        n[t] = e
                    }), t.status < 200 || t.status >= 300 ? t.text().then(function(e) {
                        return handleRequestError(new Response(n, t.status, e))
                    }) : new Promise(function(t, n) {
                        new EventSourceEventStream(new EventSource(e.url), function(e) {
                            return t(e)
                        }, function(e) {
                            return n(e)
                        }, r ? function() {
                            return r().then(function(e) {
                                return e
                            })
                        } : void 0)
                    })
                })
            }, e
        }();

    function detect() {
        return "undefined" != typeof navigator ? parseUserAgent(navigator.userAgent) : getNodeVersion()
    }

    function detectOS(e) {
        var t = getOperatingSystemRules().filter(function(t) {
            return t.rule && t.rule.test(e)
        })[0];
        return t ? t.name : null
    }

    function getNodeVersion() {
        return "undefined" != typeof process && process.version && {
            name: "node",
            version: process.version.slice(1),
            os: process.platform
        }
    }

    function parseUserAgent(e) {
        var t = getBrowserRules();
        if (!e) return null;
        var r = t.map(function(t) {
            var r = t.rule.exec(e),
                n = r && r[1].split(/[._]/).slice(0, 3);
            return n && n.length < 3 && (n = n.concat(1 == n.length ? [0, 0] : [0])), r && {
                name: t.name,
                version: n.join(".")
            }
        }).filter(Boolean)[0] || null;
        return r && (r.os = detectOS(e)), /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(e) && ((r = r || {}).bot = !0), r
    }

    function getBrowserRules() {
        return buildRules([
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["vivaldi", /Vivaldi\/([0-9\.]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FBAV\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/]
        ])
    }

    function getOperatingSystemRules() {
        return buildRules([
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/],
            ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
        ])
    }

    function buildRules(e) {
        return e.map(function(e) {
            return {
                name: e[0],
                rule: e[1]
            }
        })
    }
    var detectBrowser = {
            detect: detect,
            detectOS: detectOS,
            getNodeVersion: getNodeVersion,
            parseUserAgent: parseUserAgent
        },
        detectBrowser_1 = detectBrowser.detect,
        version = "4.0.15-0",
        RedirectFragmentFields;
    ! function(e) {
        e.StitchError = "_stitch_error", e.State = "_stitch_state", e.UserAuth = "_stitch_ua", e.LinkUser = "_stitch_link_user", e.StitchLink = "_stitch_link", e.ClientAppId = "_stitch_client_app_id"
    }(RedirectFragmentFields || (RedirectFragmentFields = {}));
    var RedirectFragmentFields$1 = RedirectFragmentFields,
        RedirectKeys;
    ! function(e) {
        e.ProviderName = "_stitch_redirect_provider_name", e.ProviderType = "_stitch_redirect_provider_type", e.State = "_stitch_redirect_state"
    }(RedirectKeys || (RedirectKeys = {}));
    var RedirectKeys$1 = RedirectKeys,
        __extends$k = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchRedirectError = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends$k(t, e), t
        }(StitchError),
        __extends$l = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchUserImpl = function(e) {
            function t(t, r, n, o, i) {
                var s = e.call(this, t, r, n, o) || this;
                return s.auth = i, s
            }
            return __extends$l(t, e), t.prototype.linkWithCredential = function(e) {
                return this.auth.linkWithCredential(this, e)
            }, t.prototype.linkUserWithRedirect = function(e) {
                return this.auth.linkWithRedirectInternal(this, e)
            }, t
        }(CoreStitchUserImpl),
        StitchUserFactoryImpl = function() {
            function e(e) {
                this.auth = e
            }
            return e.prototype.makeUser = function(e, t, r, n) {
                return new StitchUserImpl(e, t, r, n, this.auth)
            }, e
        }(),
        __extends$m = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        alphaNumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        StitchAuthImpl = function(e) {
            function t(t, r, n, o, i) {
                void 0 === i && (i = window);
                var s = e.call(this, t, r, n) || this;
                return s.browserAuthRoutes = r, s.authStorage = n, s.appInfo = o, s.jsdomWindow = i, s.listeners = new Set, s
            }
            return __extends$m(t, e), Object.defineProperty(t.prototype, "userFactory", {
                get: function() {
                    return new StitchUserFactoryImpl(this)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getProviderClient = function(e, t) {
                return isAuthProviderClientFactory(e) ? e.getClient(this, this.requestClient, this.authRoutes) : e.getNamedClient(t, this.requestClient, this.authRoutes)
            }, t.prototype.loginWithCredential = function(t) {
                return e.prototype.loginWithCredentialInternal.call(this, t)
            }, t.prototype.loginWithRedirect = function(e) {
                var t = this.prepareRedirect(e),
                    r = t.redirectUrl,
                    n = t.state;
                this.jsdomWindow.location.replace(this.browserAuthRoutes.getAuthProviderRedirectRoute(e, r, n, this.deviceInfo))
            }, t.prototype.linkWithRedirectInternal = function(e, r) {
                var n = this;
                if (void 0 !== this.user && e.id !== this.user.id) return Promise.reject(new StitchClientError(StitchClientErrorCode.UserNoLongerValid));
                var o = this.prepareRedirect(r),
                    i = o.redirectUrl,
                    s = o.state,
                    a = this.browserAuthRoutes.getAuthProviderLinkRedirectRoute(r, i, s, this.deviceInfo);
                return (t.injectedFetch ? t.injectedFetch : fetchNpmBrowserify)(new Request(a, {
                    credentials: "include",
                    headers: {
                        Authorization: "Bearer " + this.authInfo.accessToken
                    },
                    mode: "cors"
                })).then(function(e) {
                    n.jsdomWindow.location.replace(e.headers.get("X-Stitch-Location"))
                })
            }, t.prototype.hasRedirectResult = function() {
                var e = !1;
                try {
                    return e = this.parseRedirect().isValid
                } catch (e) {
                    return !1
                } finally {
                    e || this.cleanupRedirect()
                }
            }, t.prototype.handleRedirectResult = function() {
                try {
                    var e = this.authStorage.get(RedirectKeys$1.ProviderName),
                        t = this.authStorage.get(RedirectKeys$1.ProviderType),
                        r = this.parseRedirect();
                    return this.loginWithCredentialInternal(new StitchAuthResponseCredential(this.processRedirectResult(r), t, e, r.asLink)).then(function(e) {
                        return e
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            }, t.prototype.linkWithCredential = function(t, r) {
                return e.prototype.linkUserWithCredentialInternal.call(this, t, r)
            }, t.prototype.logout = function() {
                return Promise.resolve(e.prototype.logoutInternal.call(this))
            }, Object.defineProperty(t.prototype, "deviceInfo", {
                get: function() {
                    var e = {};
                    this.hasDeviceId && (e[DeviceFields$1.DEVICE_ID] = this.deviceId), void 0 !== this.appInfo.localAppName && (e[DeviceFields$1.APP_ID] = this.appInfo.localAppName), void 0 !== this.appInfo.localAppVersion && (e[DeviceFields$1.APP_VERSION] = this.appInfo.localAppVersion);
                    var t = detectBrowser_1();
                    return t ? (e[DeviceFields$1.PLATFORM] = t.name, e[DeviceFields$1.PLATFORM_VERSION] = t.version) : (e[DeviceFields$1.PLATFORM] = "web", e[DeviceFields$1.PLATFORM_VERSION] = "0.0.0"), e[DeviceFields$1.SDK_VERSION] = version, e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addAuthListener = function(e) {
                this.listeners.add(e), this.onAuthEvent(e)
            }, t.prototype.removeAuthListener = function(e) {
                this.listeners.delete(e)
            }, t.prototype.onAuthEvent = function(e) {
                var t = this;
                if (e) {
                    var r = this;
                    new Promise(function(t) {
                        e.onAuthEvent(r), t(void 0)
                    })
                } else this.listeners.forEach(function(e) {
                    t.onAuthEvent(e)
                })
            }, t.prototype.cleanupRedirect = function() {
                this.jsdomWindow.history.replaceState(null, "", this.pageRootUrl()), this.authStorage.remove(RedirectKeys$1.State), this.authStorage.remove(RedirectKeys$1.ProviderName), this.authStorage.remove(RedirectKeys$1.ProviderType)
            }, t.prototype.parseRedirect = function() {
                if (void 0 === this.jsdomWindow) throw new StitchRedirectError("running in a non-browser environment");
                if (!this.jsdomWindow.location || !this.jsdomWindow.location.hash) throw new StitchRedirectError("window location hash was undefined");
                var e = this.authStorage.get(RedirectKeys$1.State);
                return parseRedirectFragment(this.jsdomWindow.location.hash.substring(1), e, this.appInfo.clientAppId)
            }, t.prototype.processRedirectResult = function(e) {
                try {
                    if (!e.isValid) throw new StitchRedirectError("invalid redirect result");
                    if (e.lastError) throw new StitchRedirectError("error handling redirect: " + e.lastError);
                    if (!e.authInfo) throw new StitchRedirectError("no user auth value was found: it could not be decoded from fragment")
                } catch (e) {
                    throw e
                } finally {
                    this.cleanupRedirect()
                }
                return e.authInfo
            }, t.prototype.prepareRedirect = function(e) {
                this.authStorage.set(RedirectKeys$1.ProviderName, e.providerName), this.authStorage.set(RedirectKeys$1.ProviderType, e.providerType);
                var t = e.redirectUrl;
                void 0 === t && (t = this.pageRootUrl());
                var r = generateState();
                return this.authStorage.set(RedirectKeys$1.State, r), {
                    redirectUrl: t,
                    state: r
                }
            }, t.prototype.pageRootUrl = function() {
                return [this.jsdomWindow.location.protocol, "//", this.jsdomWindow.location.host, this.jsdomWindow.location.pathname].join("")
            }, t
        }(CoreStitchAuth);

    function generateState() {
        for (var e = "", t = 0; t < 64; ++t) e += alphaNumericCharacters.charAt(Math.floor(Math.random() * alphaNumericCharacters.length));
        return e
    }

    function unmarshallUserAuth(e) {
        var t = e.split("$");
        if (4 !== t.length) throw new StitchRedirectError("invalid user auth data provided while marshalling user authentication data: " + e);
        var r = t[0],
            n = t[1],
            o = t[2],
            i = t[3];
        return new AuthInfo(o, i, r, n)
    }
    var ParsedRedirectFragment = function() {
        function e() {
            this.stateValid = !1, this.clientAppIdValid = !1, this.asLink = !1
        }
        return Object.defineProperty(e.prototype, "isValid", {
            get: function() {
                return this.stateValid && this.clientAppIdValid
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();

    function parseRedirectFragment(e, t, r) {
        var n = e.split("&"),
            o = new ParsedRedirectFragment;
        return n.forEach(function(e) {
            var n = e.split("=");
            switch (decodeURIComponent(n[0])) {
                case RedirectFragmentFields$1.StitchError:
                    o.lastError = decodeURIComponent(n[1]);
                    break;
                case RedirectFragmentFields$1.UserAuth:
                    try {
                        o.authInfo = unmarshallUserAuth(decodeURIComponent(n[1]))
                    } catch (e) {
                        o.lastError = e
                    }
                    break;
                case RedirectFragmentFields$1.StitchLink:
                    "ok" == n[1] && (o.asLink = !0);
                    break;
                case RedirectFragmentFields$1.State:
                    var i = decodeURIComponent(n[1]);
                    t === i && (o.stateValid = !0);
                    break;
                case RedirectFragmentFields$1.ClientAppId:
                    var s = decodeURIComponent(n[1]);
                    r === s && (o.clientAppIdValid = !0)
            }
        }), o
    }

    function isAuthProviderClientFactory(e) {
        return void 0 !== e.getClient
    }
    var __extends$n = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchBrowserAppAuthRoutes = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.baseUrl = r, n
            }
            return __extends$n(t, e), t.prototype.getAuthProviderRedirectRoute = function(e, t, r, n) {
                return "" + this.baseUrl + this.getAuthProviderLoginRoute(e.providerName) + "?redirect=" + encodeURI(t) + "&state=" + r + "&device=" + this.uriEncodeObject(n)
            }, t.prototype.getAuthProviderLinkRedirectRoute = function(e, t, r, n) {
                return "" + this.baseUrl + this.getAuthProviderLoginRoute(e.providerName) + "?redirect=" + encodeURI(t) + "&state=" + r + "&device=" + this.uriEncodeObject(n) + "&link=true&providerRedirectHeader=true"
            }, t.prototype.uriEncodeObject = function(e) {
                return encodeURIComponent(base64Encode(JSON.stringify(e)))
            }, t
        }(StitchAppAuthRoutes),
        __extends$o = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        StitchBrowserAppRoutes = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.authRoutes = new StitchBrowserAppAuthRoutes(t, r), n
            }
            return __extends$o(t, e), t
        }(StitchAppRoutes),
        StitchServiceClientImpl = function() {
            function e(e) {
                this.proxy = e
            }
            return e.prototype.callFunction = function(e, t, r) {
                return this.proxy.callFunction(e, t, r)
            }, e.prototype.streamFunction = function(e, t, r) {
                return this.proxy.streamFunction(e, t, r)
            }, e
        }(),
        StitchAppClientImpl = function() {
            function e(e, t) {
                this.info = new StitchAppClientInfo(e, t.dataDirectory, t.localAppName, t.localAppVersion), this.routes = new StitchBrowserAppRoutes(this.info.clientAppId, t.baseUrl);
                var r = new StitchRequestClient(t.baseUrl, t.transport);
                this.auth = new StitchAuthImpl(r, this.routes.authRoutes, t.storage, this.info), this.coreClient = new CoreStitchAppClient(this.auth, this.routes)
            }
            return e.prototype.getServiceClient = function(e, t) {
                return isServiceClientFactory(e) ? e.getClient(new CoreStitchServiceClientImpl(this.auth, this.routes.serviceRoutes, ""), this.info) : e.getNamedClient(new CoreStitchServiceClientImpl(this.auth, this.routes.serviceRoutes, t), this.info)
            }, e.prototype.getGeneralServiceClient = function(e) {
                return new StitchServiceClientImpl(new CoreStitchServiceClientImpl(this.auth, this.routes.serviceRoutes, e))
            }, e.prototype.callFunction = function(e, t) {
                return this.coreClient.callFunction(e, t)
            }, e
        }();

    function isServiceClientFactory(e) {
        return void 0 !== e.getClient
    }
    var DEFAULT_BASE_URL = "https://stitch.mongodb.com",
        appClients = {},
        Stitch = function() {
            function e() {}
            return Object.defineProperty(e, "defaultAppClient", {
                get: function() {
                    if (void 0 === e.defaultClientAppId) throw new Error("default app client has not yet been initialized/set");
                    return appClients[e.defaultClientAppId]
                },
                enumerable: !0,
                configurable: !0
            }), e.getAppClient = function(e) {
                if (void 0 !== appClients[e]) throw new Error("client for app '" + e + "' has not yet been initialized");
                return appClients[e]
            }, e.hasAppClient = function(e) {
                return void 0 !== appClients[e]
            }, e.initializeDefaultAppClient = function(t, r) {
                if (void 0 === r && (r = (new StitchAppClientConfiguration.Builder).build()), void 0 === t || "" === t) throw new Error("clientAppId must be set to a non-empty string");
                if (void 0 !== e.defaultClientAppId) throw new Error("default app can only be set once; currently set to '" + e.defaultClientAppId + "'");
                var n = e.initializeAppClient(t, r);
                return e.defaultClientAppId = t, n
            }, e.initializeAppClient = function(t, r) {
                if (void 0 === r && (r = (new StitchAppClientConfiguration.Builder).build()), void 0 === t || "" === t) throw new Error("clientAppId must be set to a non-empty string");
                if (void 0 !== appClients[t]) throw new Error("client for app '" + t + "' has already been initialized");
                var n = r.builder();
                void 0 === n.storage && n.withStorage(new LocalStorage(t)), void 0 === n.transport && n.withTransport(new FetchStreamTransport), void 0 !== n.baseUrl && "" !== n.baseUrl || n.withBaseUrl(DEFAULT_BASE_URL), void 0 !== n.localAppName && "" !== n.localAppName || n.withLocalAppName(e.localAppName), void 0 !== n.localAppVersion && "" !== n.localAppVersion || n.withLocalAppVersion(e.localAppVersion);
                var o = new StitchAppClientImpl(t, n.build());
                return appClients[t] = o, o
            }, e
        }(),
        CoreRemoteMongoReadOperation = function() {
            function e(e, t, r, n) {
                this.command = e, this.args = t, this.service = r, n && (this.collectionDecoder = new(function() {
                    function e() {}
                    return e.prototype.decode = function(e) {
                        return e instanceof Array ? e.map(function(e) {
                            return n.decode(e)
                        }) : [n.decode(e)]
                    }, e
                }()))
            }
            return e.prototype.iterator = function() {
                return this.executeRead().then(function(e) {
                    return e[Symbol.iterator]()
                })
            }, e.prototype.first = function() {
                return this.executeRead().then(function(e) {
                    return e[0]
                })
            }, e.prototype.asArray = function() {
                return this.executeRead()
            }, e.prototype.executeRead = function() {
                return this.service.callFunction(this.command, [this.args], this.collectionDecoder)
            }, e
        }(),
        OperationType;

    function operationTypeFromRemote(e) {
        switch (e) {
            case "insert":
                return OperationType.Insert;
            case "delete":
                return OperationType.Delete;
            case "replace":
                return OperationType.Replace;
            case "update":
                return OperationType.Update;
            default:
                return OperationType.Unknown
        }
    }! function(e) {
        e.Insert = "insert", e.Delete = "delete", e.Replace = "replace", e.Update = "update", e.Unknown = "unknown"
    }(OperationType || (OperationType = {}));
    var RemoteInsertManyResult = function() {
            return function(e) {
                var t = {};
                e.forEach(function(e, r) {
                    t[r] = e
                }), this.insertedIds = t
            }
        }(),
        RemoteInsertManyResultFields, RemoteInsertOneResultFields, RemoteUpdateResultFields, RemoteDeleteResultFields, ChangeEventFields;
    ! function(e) {
        e.InsertedIds = "insertedIds"
    }(RemoteInsertManyResultFields || (RemoteInsertManyResultFields = {})),
    function(e) {
        e.InsertedId = "insertedId"
    }(RemoteInsertOneResultFields || (RemoteInsertOneResultFields = {})),
    function(e) {
        e.MatchedCount = "matchedCount", e.ModifiedCount = "modifiedCount", e.UpsertedId = "upsertedId"
    }(RemoteUpdateResultFields || (RemoteUpdateResultFields = {})),
    function(e) {
        e.DeletedCount = "deletedCount"
    }(RemoteDeleteResultFields || (RemoteDeleteResultFields = {})),
    function(e) {
        e.Id = "_id", e.OperationType = "operationType", e.FullDocument = "fullDocument", e.DocumentKey = "documentKey", e.Namespace = "ns", e.NamespaceDb = "db", e.NamespaceColl = "coll", e.UpdateDescription = "updateDescription", e.UpdateDescriptionUpdatedFields = "updatedFields", e.UpdateDescriptionRemovedFields = "removedFields"
    }(ChangeEventFields || (ChangeEventFields = {}));
    var RemoteInsertManyResultDecoder = function() {
            function e() {}
            return e.prototype.decode = function(e) {
                return new RemoteInsertManyResult(e[RemoteInsertManyResultFields.InsertedIds])
            }, e
        }(),
        RemoteInsertOneResultDecoder = function() {
            function e() {}
            return e.prototype.decode = function(e) {
                return {
                    insertedId: e[RemoteInsertOneResultFields.InsertedId]
                }
            }, e
        }(),
        RemoteUpdateResultDecoder = function() {
            function e() {}
            return e.prototype.decode = function(e) {
                return {
                    matchedCount: e[RemoteUpdateResultFields.MatchedCount],
                    modifiedCount: e[RemoteUpdateResultFields.ModifiedCount],
                    upsertedId: e[RemoteUpdateResultFields.UpsertedId]
                }
            }, e
        }(),
        RemoteDeleteResultDecoder = function() {
            function e() {}
            return e.prototype.decode = function(e) {
                return {
                    deletedCount: e[RemoteDeleteResultFields.DeletedCount]
                }
            }, e
        }(),
        ChangeEventDecoder = function() {
            function e(e) {
                this.decoder = e
            }
            return e.prototype.decode = function(e) {
                Assertions.keyPresent(ChangeEventFields.Id, e), Assertions.keyPresent(ChangeEventFields.OperationType, e), Assertions.keyPresent(ChangeEventFields.Namespace, e), Assertions.keyPresent(ChangeEventFields.DocumentKey, e);
                var t, r, n = e[ChangeEventFields.Namespace];
                if (ChangeEventFields.UpdateDescription in e) {
                    var o = e[ChangeEventFields.UpdateDescription];
                    Assertions.keyPresent(ChangeEventFields.UpdateDescriptionUpdatedFields, o), Assertions.keyPresent(ChangeEventFields.UpdateDescriptionRemovedFields, o), t = {
                        removedFields: o[ChangeEventFields.UpdateDescriptionRemovedFields],
                        updatedFields: o[ChangeEventFields.UpdateDescriptionUpdatedFields]
                    }
                } else t = void 0;
                return ChangeEventFields.FullDocument in e ? (r = e[ChangeEventFields.FullDocument], this.decoder && (r = this.decoder.decode(r))) : r = void 0, {
                    documentKey: e[ChangeEventFields.DocumentKey],
                    fullDocument: r,
                    id: e[ChangeEventFields.Id],
                    namespace: {
                        collection: n[ChangeEventFields.NamespaceColl],
                        database: n[ChangeEventFields.NamespaceDb]
                    },
                    operationType: operationTypeFromRemote(e[ChangeEventFields.OperationType]),
                    updateDescription: t
                }
            }, e
        }(),
        ResultDecoders = function() {
            function e() {}
            return e.remoteInsertManyResultDecoder = new RemoteInsertManyResultDecoder, e.remoteInsertOneResultDecoder = new RemoteInsertOneResultDecoder, e.remoteUpdateResultDecoder = new RemoteUpdateResultDecoder, e.remoteDeleteResultDecoder = new RemoteDeleteResultDecoder, e.ChangeEventDecoder = ChangeEventDecoder, e
        }(),
        __assign$1 = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        },
        CoreRemoteMongoCollectionImpl = function() {
            function e(e, t, r, n) {
                var o = this;
                this.name = e, this.databaseName = t, this.service = r, this.codec = n, this.namespace = this.databaseName + "." + this.name, this.baseOperationArgs = {
                    collection: o.name,
                    database: o.databaseName
                }
            }
            return e.prototype.withCollectionType = function(t) {
                return new e(this.name, this.databaseName, this.service, t)
            }, e.prototype.find = function(e, t) {
                void 0 === e && (e = {});
                var r = __assign$1({}, this.baseOperationArgs);
                return r.query = e, t && (t.limit && (r.limit = t.limit), t.projection && (r.project = t.projection), t.sort && (r.sort = t.sort)), new CoreRemoteMongoReadOperation("find", r, this.service, this.codec)
            }, e.prototype.aggregate = function(e) {
                var t = __assign$1({}, this.baseOperationArgs);
                return t.pipeline = e, new CoreRemoteMongoReadOperation("aggregate", t, this.service, this.codec)
            }, e.prototype.count = function(e, t) {
                void 0 === e && (e = {});
                var r = __assign$1({}, this.baseOperationArgs);
                return r.query = e, t && t.limit && (r.limit = t.limit), this.service.callFunction("count", [r])
            }, e.prototype.insertOne = function(e) {
                var t = __assign$1({}, this.baseOperationArgs);
                return t.document = this.generateObjectIdIfMissing(this.codec ? this.codec.encode(e) : e), this.service.callFunction("insertOne", [t], ResultDecoders.remoteInsertOneResultDecoder)
            }, e.prototype.insertMany = function(e) {
                var t = this,
                    r = __assign$1({}, this.baseOperationArgs);
                return r.documents = e.map(function(e) {
                    return t.generateObjectIdIfMissing(t.codec ? t.codec.encode(e) : e)
                }), this.service.callFunction("insertMany", [r], ResultDecoders.remoteInsertManyResultDecoder)
            }, e.prototype.deleteOne = function(e) {
                return this.executeDelete(e, !1)
            }, e.prototype.deleteMany = function(e) {
                return this.executeDelete(e, !0)
            }, e.prototype.updateOne = function(e, t, r) {
                return this.executeUpdate(e, t, r, !1)
            }, e.prototype.updateMany = function(e, t, r) {
                return this.executeUpdate(e, t, r, !0)
            }, e.prototype.watch = function(e) {
                var t = __assign$1({}, this.baseOperationArgs);
                return t.ids = e, this.service.streamFunction("watch", [t], new ResultDecoders.ChangeEventDecoder(this.codec))
            }, e.prototype.executeDelete = function(e, t) {
                var r = __assign$1({}, this.baseOperationArgs);
                return r.query = e, this.service.callFunction(t ? "deleteMany" : "deleteOne", [r], ResultDecoders.remoteDeleteResultDecoder)
            }, e.prototype.executeUpdate = function(e, t, r, n) {
                void 0 === n && (n = !1);
                var o = __assign$1({}, this.baseOperationArgs);
                return o.query = e, o.update = t, r && r.upsert && (o.upsert = r.upsert), this.service.callFunction(n ? "updateMany" : "updateOne", [o], ResultDecoders.remoteUpdateResultDecoder)
            }, e.prototype.generateObjectIdIfMissing = function(e) {
                if (!e._id) {
                    var t = e;
                    return t._id = new jsBson$1.ObjectID, t
                }
                return e
            }, e
        }(),
        CoreRemoteMongoDatabaseImpl = function() {
            function e(e, t) {
                this.name = e, this.service = t
            }
            return e.prototype.collection = function(e, t) {
                return new CoreRemoteMongoCollectionImpl(e, this.name, this.service, t)
            }, e
        }(),
        CoreRemoteMongoClientImpl = function() {
            function e(e) {
                this.service = e
            }
            return e.prototype.db = function(e) {
                return new CoreRemoteMongoDatabaseImpl(e, this.service)
            }, e
        }(),
        RemoteMongoCursor = function() {
            function e(e) {
                this.proxy = e
            }
            return e.prototype.next = function() {
                return Promise.resolve(this.proxy.next().value)
            }, e
        }(),
        RemoteMongoReadOperation = function() {
            function e(e) {
                this.proxy = e
            }
            return e.prototype.first = function() {
                return this.proxy.first()
            }, e.prototype.asArray = function() {
                return this.proxy.asArray()
            }, e.prototype.iterator = function() {
                return this.proxy.iterator().then(function(e) {
                    return new RemoteMongoCursor(e)
                })
            }, e
        }(),
        RemoteMongoCollectionImpl = function() {
            function e(e) {
                this.proxy = e, this.namespace = this.proxy.namespace
            }
            return e.prototype.withCollectionType = function(t) {
                return new e(this.proxy.withCollectionType(t))
            }, e.prototype.count = function(e, t) {
                return this.proxy.count(e, t)
            }, e.prototype.find = function(e, t) {
                return new RemoteMongoReadOperation(this.proxy.find(e, t))
            }, e.prototype.aggregate = function(e) {
                return new RemoteMongoReadOperation(this.proxy.aggregate(e))
            }, e.prototype.insertOne = function(e) {
                return this.proxy.insertOne(e)
            }, e.prototype.insertMany = function(e) {
                return this.proxy.insertMany(e)
            }, e.prototype.deleteOne = function(e) {
                return this.proxy.deleteOne(e)
            }, e.prototype.deleteMany = function(e) {
                return this.proxy.deleteMany(e)
            }, e.prototype.updateOne = function(e, t, r) {
                return this.proxy.updateOne(e, t, r)
            }, e.prototype.updateMany = function(e, t, r) {
                return this.proxy.updateMany(e, t, r)
            }, e.prototype.watch = function(e) {
                return this.proxy.watch(e)
            }, e
        }(),
        RemoteMongoDatabaseImpl = function() {
            function e(e) {
                this.proxy = e, this.name = this.proxy.name
            }
            return e.prototype.collection = function(e, t) {
                return new RemoteMongoCollectionImpl(this.proxy.collection(e, t))
            }, e
        }(),
        RemoteMongoClientImpl = function() {
            function e(e) {
                this.proxy = e
            }
            return e.prototype.db = function(e) {
                return new RemoteMongoDatabaseImpl(this.proxy.db(e))
            }, e
        }(),
        RemoteMongoClient;
    ! function(e) {
        e.factory = new(function() {
            function e() {}
            return e.prototype.getNamedClient = function(e, t) {
                return new RemoteMongoClientImpl(new CoreRemoteMongoClientImpl(e))
            }, e
        }())
    }(RemoteMongoClient || (RemoteMongoClient = {}));
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
        ReactPropTypesSecret_1 = ReactPropTypesSecret;

    function emptyFunction() {}
    var factoryWithThrowingShims = function() {
            function e(e, t, r, n, o, i) {
                if (i !== ReactPropTypesSecret_1) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return r.checkPropTypes = emptyFunction, r.PropTypes = r, r
        },
        propTypes = createCommonjsModule(function(e) {
            e.exports = factoryWithThrowingShims()
        }),
        VNode = function() {},
        options = {},
        stack = [],
        EMPTY_CHILDREN = [];

    function h(e, t) {
        var r, n, o, i, s = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2;) stack.push(arguments[i]);
        for (t && null != t.children && (stack.length || stack.push(t.children), delete t.children); stack.length;)
            if ((n = stack.pop()) && void 0 !== n.pop)
                for (i = n.length; i--;) stack.push(n[i]);
            else "boolean" == typeof n && (n = null), (o = "function" != typeof e) && (null == n ? n = "" : "number" == typeof n ? n = String(n) : "string" != typeof n && (o = !1)), o && r ? s[s.length - 1] += n : s === EMPTY_CHILDREN ? s = [n] : s.push(n), r = o;
        var a = new VNode;
        return a.nodeName = e, a.children = s, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, a
    }

    function extend(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    }
    var defer = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

    function cloneElement(e, t) {
        return h(e.nodeName, extend(extend({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
    }
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        items = [];

    function enqueueRender(e) {
        !e._dirty && (e._dirty = !0) && 1 == items.push(e) && defer(rerender)
    }

    function rerender() {
        var e, t = items;
        for (items = []; e = t.pop();) e._dirty && renderComponent(e)
    }

    function isSameNodeType(e, t, r) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && isNamedNode(e, t.nodeName) : r || e._componentConstructor === t.nodeName
    }

    function isNamedNode(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function getNodeProps(e) {
        var t = extend({}, e.attributes);
        t.children = e.children;
        var r = e.nodeName.defaultProps;
        if (void 0 !== r)
            for (var n in r) void 0 === t[n] && (t[n] = r[n]);
        return t
    }

    function createNode(e, t) {
        var r = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return r.normalizedNodeName = e, r
    }

    function removeNode(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function setAccessor(e, t, r, n, o) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) r && r(null), n && n(e);
        else if ("class" !== t || o)
            if ("style" === t) {
                if (n && "string" != typeof n && "string" != typeof r || (e.style.cssText = n || ""), n && "object" == typeof n) {
                    if ("string" != typeof r)
                        for (var i in r) i in n || (e.style[i] = "");
                    for (var i in n) e.style[i] = "number" == typeof n[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? n[i] + "px" : n[i]
                }
            } else if ("dangerouslySetInnerHTML" === t) n && (e.innerHTML = n.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
            var s = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), n ? r || e.addEventListener(t, eventProxy, s) : e.removeEventListener(t, eventProxy, s), (e._listeners || (e._listeners = {}))[t] = n
        } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
                e[t] = null == n ? "" : n
            } catch (e) {}
            null != n && !1 !== n || "spellcheck" == t || e.removeAttribute(t)
        } else {
            var a = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == n || !1 === n ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof n && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : e.setAttribute(t, n))
        } else e.className = n || ""
    }

    function eventProxy(e) {
        return this._listeners[e.type](e)
    }
    var mounts = [],
        diffLevel = 0,
        isSvgMode = !1,
        hydrating = !1;

    function flushMounts() {
        for (var e; e = mounts.pop();) e.componentDidMount && e.componentDidMount()
    }

    function diff(e, t, r, n, o, i) {
        diffLevel++ || (isSvgMode = null != o && void 0 !== o.ownerSVGElement, hydrating = null != e && !("__preactattr_" in e));
        var s = idiff(e, t, r, n, i);
        return o && s.parentNode !== o && o.appendChild(s), --diffLevel || (hydrating = !1, i || flushMounts()), s
    }

    function idiff(e, t, r, n, o) {
        var i = e,
            s = isSvgMode;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), recollectNodeTree(e, !0))), i.__preactattr_ = !0, i;
        var a = t.nodeName;
        if ("function" == typeof a) return buildComponentFromVNode(e, t, r, n);
        if (isSvgMode = "svg" === a || "foreignObject" !== a && isSvgMode, a = String(a), (!e || !isNamedNode(e, a)) && (i = createNode(a, isSvgMode), e)) {
            for (; e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e), recollectNodeTree(e, !0)
        }
        var u = i.firstChild,
            l = i.__preactattr_,
            c = t.children;
        if (null == l) {
            l = i.__preactattr_ = {};
            for (var f = i.attributes, h = f.length; h--;) l[f[h].name] = f[h].value
        }
        return !hydrating && c && 1 === c.length && "string" == typeof c[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != c[0] && (u.nodeValue = c[0]) : (c && c.length || null != u) && innerDiffNode(i, c, r, n, hydrating || null != l.dangerouslySetInnerHTML), diffAttributes(i, t.attributes, l), isSvgMode = s, i
    }

    function innerDiffNode(e, t, r, n, o) {
        var i, s, a, u, l, c = e.childNodes,
            f = [],
            h = {},
            d = 0,
            p = 0,
            g = c.length,
            y = 0,
            _ = t ? t.length : 0;
        if (0 !== g)
            for (var m = 0; m < g; m++) {
                var b = c[m],
                    S = b.__preactattr_;
                null != (v = _ && S ? b._component ? b._component.__key : S.key : null) ? (d++, h[v] = b) : (S || (void 0 !== b.splitText ? !o || b.nodeValue.trim() : o)) && (f[y++] = b)
            }
        if (0 !== _)
            for (m = 0; m < _; m++) {
                var v;
                if (l = null, null != (v = (u = t[m]).key)) d && void 0 !== h[v] && (l = h[v], h[v] = void 0, d--);
                else if (p < y)
                    for (i = p; i < y; i++)
                        if (void 0 !== f[i] && isSameNodeType(s = f[i], u, o)) {
                            l = s, f[i] = void 0, i === y - 1 && y--, i === p && p++;
                            break
                        } l = idiff(l, u, r, n), a = c[m], l && l !== e && l !== a && (null == a ? e.appendChild(l) : l === a.nextSibling ? removeNode(a) : e.insertBefore(l, a))
            }
        if (d)
            for (var m in h) void 0 !== h[m] && recollectNodeTree(h[m], !1);
        for (; p <= y;) void 0 !== (l = f[y--]) && recollectNodeTree(l, !1)
    }

    function recollectNodeTree(e, t) {
        var r = e._component;
        r ? unmountComponent(r) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || removeNode(e), removeChildren(e))
    }

    function removeChildren(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            recollectNodeTree(e, !0), e = t
        }
    }

    function diffAttributes(e, t, r) {
        var n;
        for (n in r) t && null != t[n] || null == r[n] || setAccessor(e, n, r[n], r[n] = void 0, isSvgMode);
        for (n in t) "children" === n || "innerHTML" === n || n in r && t[n] === ("value" === n || "checked" === n ? e[n] : r[n]) || setAccessor(e, n, r[n], r[n] = t[n], isSvgMode)
    }
    var recyclerComponents = [];

    function createComponent(e, t, r) {
        var n, o = recyclerComponents.length;
        for (e.prototype && e.prototype.render ? (n = new e(t, r), Component.call(n, t, r)) : ((n = new Component(t, r)).constructor = e, n.render = doRender); o--;)
            if (recyclerComponents[o].constructor === e) return n.nextBase = recyclerComponents[o].nextBase, recyclerComponents.splice(o, 1), n;
        return n
    }

    function doRender(e, t, r) {
        return this.constructor(e, r)
    }

    function setComponentProps(e, t, r, n, o) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, n)), n && n !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = n), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== r && (1 !== r && !1 === options.syncComponentUpdates && e.base ? enqueueRender(e) : renderComponent(e, 1, o)), e.__ref && e.__ref(e))
    }

    function renderComponent(e, t, r, n) {
        if (!e._disable) {
            var o, i, s, a = e.props,
                u = e.state,
                l = e.context,
                c = e.prevProps || a,
                f = e.prevState || u,
                h = e.prevContext || l,
                d = e.base,
                p = e.nextBase,
                g = d || p,
                y = e._component,
                _ = !1,
                m = h;
            if (e.constructor.getDerivedStateFromProps && (u = extend(extend({}, u), e.constructor.getDerivedStateFromProps(a, u)), e.state = u), d && (e.props = c, e.state = f, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(a, u, l) ? _ = !0 : e.componentWillUpdate && e.componentWillUpdate(a, u, l), e.props = a, e.state = u, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !_) {
                o = e.render(a, u, l), e.getChildContext && (l = extend(extend({}, l), e.getChildContext())), d && e.getSnapshotBeforeUpdate && (m = e.getSnapshotBeforeUpdate(c, f));
                var b, S, v = o && o.nodeName;
                if ("function" == typeof v) {
                    var E = getNodeProps(o);
                    (i = y) && i.constructor === v && E.key == i.__key ? setComponentProps(i, E, 1, l, !1) : (b = i, e._component = i = createComponent(v, E, l), i.nextBase = i.nextBase || p, i._parentComponent = e, setComponentProps(i, E, 0, l, !1), renderComponent(i, 1, r, !0)), S = i.base
                } else s = g, (b = y) && (s = e._component = null), (g || 1 === t) && (s && (s._component = null), S = diff(s, o, l, r || !d, g && g.parentNode, !0));
                if (g && S !== g && i !== y) {
                    var $ = g.parentNode;
                    $ && S !== $ && ($.replaceChild(S, g), b || (g._component = null, recollectNodeTree(g, !1)))
                }
                if (b && unmountComponent(b), e.base = S, S && !n) {
                    for (var N = e, O = e; O = O._parentComponent;)(N = O).base = S;
                    S._component = N, S._componentConstructor = N.constructor
                }
            }
            for (!d || r ? mounts.unshift(e) : _ || e.componentDidUpdate && e.componentDidUpdate(c, f, m); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            diffLevel || n || flushMounts()
        }
    }

    function buildComponentFromVNode(e, t, r, n) {
        for (var o = e && e._component, i = o, s = e, a = o && e._componentConstructor === t.nodeName, u = a, l = getNodeProps(t); o && !u && (o = o._parentComponent);) u = o.constructor === t.nodeName;
        return o && u && (!n || o._component) ? (setComponentProps(o, l, 3, r, n), e = o.base) : (i && !a && (unmountComponent(i), e = s = null), o = createComponent(t.nodeName, l, r), e && !o.nextBase && (o.nextBase = e, s = null), setComponentProps(o, l, 1, r, n), e = o.base, s && e !== s && (s._component = null, recollectNodeTree(s, !1))), e
    }

    function unmountComponent(e) {
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var r = e._component;
        r ? unmountComponent(r) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, removeNode(t), recyclerComponents.push(e), removeChildren(t)), e.__ref && e.__ref(null)
    }

    function Component(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
    }

    function render(e, t, r) {
        return diff(r, e, {}, !1, t, !1)
    }
    extend(Component.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = extend(extend({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), enqueueRender(this)
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), renderComponent(this, 2)
        },
        render: function() {}
    });
    var preact = {
            h: h,
            createElement: h,
            cloneElement: cloneElement,
            Component: Component,
            render: render,
            rerender: rerender,
            options: options
        },
        FreeformQuestion = function(e) {
            function t(e) {
                classCallCheck(this, t);
                var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.state = {
                    error: !1,
                    text: ""
                }, r.handleChange = r.handleChange.bind(r), r
            }
            return inherits(t, e), createClass(t, [{
                key: "handleChange",
                value: function(e) {
                    var t = this.props,
                        r = t.hasError,
                        n = t.store,
                        o = e.target.value,
                        i = r(o);
                    i ? (n.set(""), e.target.setCustomValidity(i)) : (n.set(o), e.target.setCustomValidity("")), this.setState({
                        error: i,
                        text: o
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.errorText,
                        r = e.placeholder,
                        n = this.state,
                        o = n.error,
                        i = n.text;
                    return preact.h("div", null, preact.h("textarea", {
                        placeholder: r,
                        onInput: this.handleChange,
                        value: i
                    }), preact.h("div", {
                        className: "error",
                        style: {
                            visibility: o ? "visible" : "hidden"
                        }
                    }, t))
                }
            }]), t
        }(preact.Component);
    FreeformQuestion.propTypes = {
        errorText: propTypes.string,
        hasError: propTypes.func,
        placeholder: propTypes.string,
        store: propTypes.objectOf(propTypes.func).isRequired
    }, FreeformQuestion.defaultProps = {
        hasError: function() {
            return !1
        }
    };
    var InputField = function(e) {
        function t(e) {
            classCallCheck(this, t);
            var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.state = {
                error: !1,
                text: ""
            }, r.handleChange = r.handleChange.bind(r), r
        }
        return inherits(t, e), createClass(t, [{
            key: "handleChange",
            value: function(e) {
                var t = this.props,
                    r = t.hasError,
                    n = t.store,
                    o = e.target.value,
                    i = r(o);
                i ? (n.set(""), e.target.setCustomValidity(i)) : (n.set(o), e.target.setCustomValidity("")), this.setState({
                    error: i,
                    text: o
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.errorText,
                    r = e.inputType,
                    n = e.placeholder,
                    o = this.state,
                    i = o.error,
                    s = o.text;
                return preact.h("div", null, preact.h("input", {
                    onInput: this.handleChange,
                    placeholder: n,
                    type: r,
                    value: s
                }), preact.h("div", {
                    className: "error",
                    style: {
                        visibility: i ? "visible" : "hidden"
                    }
                }, t))
            }
        }]), t
    }(preact.Component);
    InputField.propTypes = {
        errorText: propTypes.string,
        hasError: propTypes.func,
        inputType: propTypes.string,
        placeholder: propTypes.string,
        store: propTypes.objectOf(propTypes.func).isRequired
    }, InputField.defaultProps = {
        hasError: function() {
            return !1
        },
        inputType: "text"
    };
    var STATE_INITIAL = "Initial",
        STATE_VOTED = "Voted",
        MainWidget = function(e) {
            function t(e) {
                classCallCheck(this, t);
                var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.state = {
                    closed: !1,
                    state: STATE_INITIAL
                }, r.onSubmitFeedback = r.onSubmitFeedback.bind(r), r.onInitialVote = r.onInitialVote.bind(r), r.toggleVisibility = r.toggleVisibility.bind(r), r
            }
            return inherits(t, e), createClass(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = JSON.parse(window.sessionStorage.getItem("feedbackHidden"));
                    e && this.setState({
                        closed: e
                    })
                }
            }, {
                key: "onSubmitFeedback",
                value: function() {
                    this.props.onSubmitFeedback(this.state.state), this.setState({
                        state: STATE_VOTED
                    })
                }
            }, {
                key: "onInitialVote",
                value: function(e, t) {
                    e.stopPropagation(), this.setState({
                        state: t
                    }), this.props.onSubmitVote(t), !1 === t && this.props.handleOpenDrawer()
                }
            }, {
                key: "toggleVisibility",
                value: function(e) {
                    var t = this,
                        r = this.state,
                        n = r.closed,
                        o = r.state;
                    e.stopPropagation(), "boolean" != typeof o && o !== STATE_VOTED || !1 !== n || this.setState({
                        state: STATE_INITIAL
                    }), this.setState(function(e) {
                        return {
                            closed: !e.closed
                        }
                    }, function() {
                        return window.sessionStorage.setItem("feedbackHidden", JSON.stringify(t.state.closed))
                    })
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var r = this,
                        n = e.children,
                        o = e.canShowSuggestions,
                        i = e.voteAcknowledgement,
                        s = t.closed,
                        a = t.state,
                        u = a === STATE_INITIAL ? "deluge-body" : "deluge-body deluge-body-expanded",
                        l = a !== STATE_INITIAL && !1 === s ? "deluge deluge-expanded" : "deluge",
                        c = null;
                    if (a === STATE_VOTED) c = preact.h("div", null, preact.h("p", null, "Thank you for your feedback!"), "down" === i && preact.h("p", null, "If this page contains an error, you may ", preact.h("a", {
                        class: "deluge-fix-button",
                        href: "https://jira.mongodb.org/"
                    }, "report the problem on Jira.")), preact.h("p", null, "We also recommend you explore ", preact.h("a", {
                        class: "deluge-fix-button",
                        href: "https://groups.google.com/group/mongodb-user"
                    }, "the MongoDB discussion forum"), " for additional support."), preact.h("p", {
                        className: "deluge-close-link"
                    }, preact.h("small", null, preact.h("span", {
                        onClick: this.toggleVisibility
                    }, "Close"))));
                    else if (a !== STATE_VOTED || i) {
                        if ("boolean" == typeof a) {
                            var f = !1 === a ? preact.h("li", null, "We're sorry! Please help us improve this page.") : null;
                            if (o) {
                                var h = n[0];
                                c = preact.h("div", {
                                    class: "deluge-questions"
                                }, preact.h("ul", null, f, preact.h("li", null, h)), preact.h("div", {
                                    class: "deluge-button-group"
                                }, preact.h("button", {
                                    onClick: this.toggleVisibility
                                }, "Cancel"), preact.h("button", {
                                    class: "primary",
                                    onClick: this.onSubmitFeedback,
                                    disabled: this.props.error
                                }, "Submit")))
                            } else c = preact.h("div", {
                                class: "deluge-questions"
                            }, preact.h("ul", null, f, n.map(function(e, t) {
                                return preact.h("li", {
                                    key: t
                                }, e)
                            })), preact.h("div", {
                                class: "deluge-button-group"
                            }, preact.h("button", {
                                onClick: this.toggleVisibility
                            }, "Cancel"), preact.h("button", {
                                class: "primary",
                                onClick: this.onSubmitFeedback,
                                disabled: this.props.error
                            }, "Submit")))
                        }
                    } else c = preact.h("p", null, "Submitting feedback...");
                    return preact.h("div", {
                        class: l
                    }, s ? preact.h("div", {
                        class: "deluge-header deluge-header-minimized",
                        onClick: this.toggleVisibility
                    }, preact.h("span", {
                        class: "fa fa-angle-up deluge-open-icon"
                    })) : preact.h("div", null, preact.h("div", {
                        class: "deluge-header"
                    }, preact.h("span", {
                        class: "fa fa-angle-down deluge-close-icon-hidden"
                    }), preact.h("span", {
                        class: "deluge-helpful"
                    }, "Was this page helpful?"), preact.h("span", {
                        class: "fa fa-angle-down deluge-close-icon",
                        onClick: this.toggleVisibility
                    })), a === STATE_INITIAL && preact.h("div", {
                        class: "deluge-vote"
                    }, preact.h("a", {
                        key: "voteup",
                        id: "rate-up",
                        onClick: function(e) {
                            return r.onInitialVote(e, !0)
                        }
                    }, "Yes"), preact.h("a", {
                        key: "votedown",
                        id: "rate-down",
                        onClick: function(e) {
                            return r.onInitialVote(e, !1)
                        }
                    }, "No")), preact.h("div", {
                        class: u
                    }, c)))
                }
            }]), t
        }(preact.Component);
    MainWidget.propTypes = {
        error: propTypes.bool.isRequired,
        onSubmitFeedback: propTypes.func.isRequired,
        onSubmitVote: propTypes.func.isRequired,
        onClear: propTypes.func.isRequired,
        children: propTypes.arrayOf(propTypes.node),
        voteAcknowledgement: propTypes.string,
        handleOpenDrawer: propTypes.func.isRequired,
        canShowSuggestions: propTypes.bool.isRequired
    };
    var MIN_CHAR_COUNT = 15,
        MIN_CHAR_ERROR_TEXT = "Please respond with at least " + MIN_CHAR_COUNT + " characters.",
        EMAIL_ERROR_TEXT = "Please enter a valid email address.",
        EMAIL_PROMPT_TEXT = "May we contact you about your feedback?",
        Deluge = function(e) {
            function t(e) {
                classCallCheck(this, t);
                var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                    n = window.crypto || window.msCrypto,
                    o = new Uint8Array(16);
                return n.getRandomValues(o), r.state = {
                    answers: {},
                    emailError: !1,
                    interactionId: btoa(Array.prototype.map.call(o, function(e) {
                        return String.fromCharCode(e)
                    }).join("")).slice(0, -2),
                    voteAcknowledgement: null,
                    voteId: void 0
                }, r.onSubmitFeedback = r.onSubmitFeedback.bind(r), r.onSubmitVote = r.onSubmitVote.bind(r), r
            }
            return inherits(t, e), createClass(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setupStitch()
                }
            }, {
                key: "setupStitch",
                value: function() {
                    this.stitchClient = Stitch.hasAppClient("feedback-ibcyy") ? Stitch.defaultAppClient : Stitch.initializeDefaultAppClient("feedback-ibcyy"), this.stitchClient.auth.loginWithCredential(new AnonymousCredential).catch(function(e) {
                        console.error(e)
                    })
                }
            }, {
                key: "sendAnalytics",
                value: function(e, t) {
                    try {
                        var r = window.analytics.user(),
                            n = r.id();
                        n ? t.segmentUID = n.toString() : t.segmentAnonymousID = r.anonymousId().toString(), window.analytics.track(e, t)
                    } catch (e) {
                        console.error(e)
                    }
                    return t
                }
            }, {
                key: "onSubmitVote",
                value: function(e) {
                    var t = this;
                    this.sendVote(e).then(function(r) {
                        t.setState({
                            voteAcknowledgement: e ? "up" : "down",
                            voteId: r.insertedId
                        })
                    }).catch(function(e) {
                        console.error(e)
                    })
                }
            }, {
                key: "sendVote",
                value: function(e) {
                    var t = this.sendAnalytics("Vote Submitted", {
                            useful: e,
                            interactionId: this.state.interactionId
                        }),
                        r = {
                            useful: e,
                            page: this.props.project + "/" + this.props.path,
                            "q-url": location.href,
                            date: new Date
                        };
                    return t.segmentUID ? r["q-segmentUID"] = t.segmentUID : r["q-segmentAnonymousID"] = t.segmentAnonymousID, this.stitchClient.callFunction("submitVote", [r])
                }
            }, {
                key: "onSubmitFeedback",
                value: function(e) {
                    for (var t = {}, r = this.state.answers, n = Object.keys(r), o = 0; o < n.length; o += 1) {
                        var i = n[o];
                        (r[i] || !1 === r[i]) && (t[i] = r[i])
                    }
                    this.sendFeedback(e, t).catch(function(e) {
                        console.error(e)
                    })
                }
            }, {
                key: "sendFeedback",
                value: function(e, t) {
                    if (this.sendAnalytics("Feedback Submitted", _extends({
                            useful: e,
                            interactionId: this.state.interactionId
                        }, t)), !this.state.voteId) return Promise.reject(new Error("Could not locate document ID"));
                    Object.keys(t).forEach(function(e) {
                        e.startsWith("q-") || (Object.defineProperty(t, "q-" + e, Object.getOwnPropertyDescriptor(t, e)), delete t[e])
                    });
                    var r = {
                            _id: this.state.voteId
                        },
                        n = {
                            $set: _extends({}, t)
                        };
                    return this.stitchClient.callFunction("submitFeedback", [r, n])
                }
            }, {
                key: "makeStore",
                value: function(e) {
                    var t = this;
                    return {
                        get: function() {
                            return t.state.answers[e]
                        },
                        set: function(r) {
                            return t.setState(function(t) {
                                return {
                                    answers: _extends({}, t.answers, defineProperty({}, e, r))
                                }
                            })
                        }
                    }
                }
            }, {
                key: "validateEmail",
                value: function(e) {
                    var t = !("" === e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
                    return this.setState({
                        emailError: t
                    }), t
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var r = this,
                        n = t.voteAcknowledgement,
                        o = 0 === Object.keys(this.state.answers).length || Object.values(this.state.answers).every(function(e) {
                            return "" === e
                        }) || this.state.emailError;
                    return preact.h(MainWidget, {
                        voteAcknowledgement: n,
                        onSubmitFeedback: this.onSubmitFeedback,
                        onSubmitVote: this.onSubmitVote,
                        onClear: function() {
                            return r.setState({
                                answers: {}
                            })
                        },
                        canShowSuggestions: e.canShowSuggestions,
                        i: !0,
                        handleOpenDrawer: e.handleOpenDrawer,
                        error: o
                    }, preact.h(FreeformQuestion, {
                        errorText: MIN_CHAR_ERROR_TEXT,
                        store: this.makeStore("reason"),
                        placeholder: "What are you trying to do?"
                    }), preact.h("div", {
                        className: "caption"
                    }, EMAIL_PROMPT_TEXT), preact.h(InputField, {
                        errorText: EMAIL_ERROR_TEXT,
                        hasError: function(e) {
                            return r.validateEmail(e)
                        },
                        inputType: "email",
                        store: this.makeStore("email"),
                        placeholder: "Email address"
                    }))
                }
            }]), t
        }(preact.Component);

    function addQueryParameters(e, t) {
        return e + "?suggestor=" + encodeURIComponent(t)
    }

    function SuggestionCard(e) {
        var t = e.suggestion,
            r = addQueryParameters(t.url, this.props.pageName);
        return preact.h("div", {
            className: "suggestion-card"
        }, preact.h("a", {
            href: r
        }, preact.h("div", null, preact.h("h2", null, t.title), t.description && preact.h("p", null, t.description))))
    }

    function EmptyCard(e) {
        var t = e.handleDismissCard;
        return preact.h("div", {
            className: "suggestion-card suggestion-close",
            onClick: function() {
                return t()
            }
        }, preact.h("h2", null, "This isn't what I was looking for"))
    }
    Deluge.propTypes = {
        project: propTypes.string.isRequired,
        path: propTypes.string.isRequired,
        canShowSuggestions: propTypes.bool.isRequired,
        handleOpenDrawer: propTypes.func.isRequired
    };
    var SuggestionCardList = function(e) {
        function t() {
            return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return inherits(t, e), createClass(t, [{
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.suggestions.map(function(t) {
                        return preact.h(SuggestionCard, {
                            suggestion: t,
                            key: t.url,
                            pageName: e.props.pageName
                        })
                    });
                return preact.h("div", null, t, preact.h(EmptyCard, {
                    handleDismissCard: this.props.handleDismissCard
                }))
            }
        }]), t
    }(preact.Component);

    function getPageName() {
        var e = document.getElementsByClassName("body");
        return e.length ? e[0].getAttribute("data-pagename") : null
    }
    SuggestionCard.propTypes = {
        pageName: propTypes.string.isRequired,
        suggestion: propTypes.object.isRequired
    }, EmptyCard.propTypes = {
        handleDismissCard: propTypes.func.isRequired
    }, SuggestionCardList.propTypes = {
        suggestions: propTypes.array.isRequired,
        handleDismissCard: propTypes.func.isRequired,
        pageName: propTypes.string.isRequired
    };
    var Suggestion = function(e) {
        function t(e) {
            classCallCheck(this, t);
            var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.handleCloseDrawer = r.handleCloseDrawer.bind(r), r.handleDismissCard = r.handleDismissCard.bind(r), r.fetchStitchSuggestions = r.fetchStitchSuggestions.bind(r), r.pageName = getPageName(), r.state = {
                isLoaded: !1,
                showThankYouMessage: !1,
                suggestions: []
            }, r
        }
        return inherits(t, e), createClass(t, [{
            key: "componentDidMount",
            value: function() {
                this.setupStitch()
            }
        }, {
            key: "handleCloseDrawer",
            value: function() {
                this.props.handleCloseDrawer(), reportAnalytics("Suggestion Drawer Closed", {
                    userDismissedSuggestions: this.state.showThankYouMessage
                })
            }
        }, {
            key: "handleDismissCard",
            value: function() {
                this.setState({
                    showThankYouMessage: !0
                }), reportAnalytics("Suggestions Dismissed")
            }
        }, {
            key: "setupStitch",
            value: function() {
                var e = this,
                    t = "ref_data-bnbxq";
                this.stitchClient = Stitch.hasAppClient(t) ? Stitch.getAppClient(t) : Stitch.initializeAppClient(t), this.stitchClient.auth.loginWithCredential(new AnonymousCredential).then(function(t) {
                    e.fetchStitchSuggestions()
                }).catch(function(e) {
                    console.log(e)
                })
            }
        }, {
            key: "fetchStitchSuggestions",
            value: function() {
                var e = this;
                this.stitchClient.callFunction("fetchSuggestions", [this.pageName]).then(function(t) {
                    e.setState({
                        isLoaded: !0,
                        suggestions: t
                    })
                }, function(t) {
                    console.log("error", t), e.setState({
                        isLoaded: !0
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.drawerIsOpen ? "is-open" : "",
                    r = void 0;
                return r = this.state.showThankYouMessage ? preact.h("div", null, preact.h("span", {
                    onClick: function() {
                        return e.handleCloseDrawer()
                    },
                    class: "fa fa-times suggestion-close suggestion-close-button"
                }), preact.h("h1", null, "Thanks for your feedback."), preact.h("p", null, "We'll use it to make more helpful suggestions in the future.")) : preact.h("div", null, preact.h("span", {
                    onClick: function() {
                        return e.handleCloseDrawer()
                    },
                    class: "fa fa-times suggestion-close suggestion-close-button"
                }), preact.h("h1", null, "Need help?"), preact.h("p", null, "Other MongoDB users have found these resources useful."), preact.h(SuggestionCardList, {
                    suggestions: this.state.suggestions,
                    handleDismissCard: this.handleDismissCard,
                    pageName: this.pageName
                })), preact.h("div", {
                    className: "suggestion " + t
                }, r)
            }
        }]), t
    }(preact.Component);
    Suggestion.propTypes = {
        drawerIsOpen: propTypes.bool.isRequired,
        handleCloseDrawer: propTypes.func.isRequired
    };
    var whitelist = [],
        Widgets = function(e) {
            function t(e) {
                classCallCheck(this, t);
                var r = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.isSuggestionPage = r.isSuggestionPage(r.props.path), r.handleOpenDrawer = r.handleOpenDrawer.bind(r), r.handleCloseDrawer = r.handleCloseDrawer.bind(r), r.state = {
                    drawerIsOpen: !1,
                    drawerHasOpened: !1
                }, r
            }
            return inherits(t, e), createClass(t, [{
                key: "isSuggestionPage",
                value: function(e) {
                    return whitelist.indexOf(e) >= 0
                }
            }, {
                key: "handleOpenDrawer",
                value: function() {
                    this.state.drawerHasOpened || this.setState(function(e) {
                        return {
                            drawerIsOpen: !0,
                            drawerHasOpened: !0
                        }
                    })
                }
            }, {
                key: "handleCloseDrawer",
                value: function() {
                    this.setState(function(e) {
                        return {
                            drawerIsOpen: !1
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return preact.h("div", null, preact.h(Deluge, {
                        project: this.props.project,
                        path: this.props.path,
                        handleOpenDrawer: this.handleOpenDrawer,
                        canShowSuggestions: this.isSuggestionPage
                    }), this.isSuggestionPage && preact.h(Suggestion, {
                        drawerIsOpen: this.state.drawerIsOpen,
                        handleCloseDrawer: this.handleCloseDrawer
                    }))
                }
            }]), t
        }(preact.Component);

    function widgets(e, t, r) {
        preact.render("", r, r._widgetsRendered), t && (r._widgetsRendered = preact.render(preact.h(Widgets, {
            project: e,
            path: t
        }), r))
    }
    Widgets.propTypes = {
        project: propTypes.string.isRequired,
        path: propTypes.string.isRequired
    };
    var project = null,
        ratingPanelElement = null,
        blacklist = ["meta/404", "search"];

    function getPageName$1() {
        var e = document.getElementsByClassName("body");
        if (!e.length) return null;
        var t = e[0].getAttribute("data-pagename");
        return blacklist.indexOf(t) >= 0 ? null : t
    }

    function init() {
        project = document.body.getAttribute("data-project"), ratingPanelElement = document.getElementById("rating-panel")
    }

    function setup$6() {
        if (void 0 !== window.localStorage) {
            var e = getPageName$1();
            ratingPanelElement && widgets(project, e, ratingPanelElement)
        }
    }
    var componentFeedback = Object.freeze({
            init: init,
            setup: setup$6
        }),
        tabsEventDispatcher = new Dispatcher;

    function hideTabBars() {
        if (document.querySelector(".tabs-top")) {
            var e = $(".tab-strip--singleton"),
                t = e.first();
            e.slice(1).detach(), t.detach().insertAfter("h1").first()
        }
    }

    function getTabPref() {
        return JSON.parse(window.localStorage.getItem("tabPref")) || {}
    }

    function setTabPref(e, t) {
        var r = getTabPref();
        t ? (r.pages || (r.pages = {}), r.pages[window.location.pathname] = e.tabId) : r[e.type] = e.tabId, window.localStorage.setItem("tabPref", JSON.stringify(r))
    }
    var tabSets = {},
        TabSet = function() {
            function e(t, r, n, o) {
                classCallCheck(this, e), this.type = t, this.tabStrips = n, this.tabContents = o, this.anonymous = r, this.tabIds = {}
            }
            return createClass(e, [{
                key: "getFirstTabId",
                value: function() {
                    var e = this.tabStrips[0].querySelector(".tab-strip__element[aria-selected=true]");
                    return e ? e.getAttribute("data-tabid") : null
                }
            }, {
                key: "setup",
                value: function() {
                    var e = this;
                    if (0 !== this.tabStrips.length) {
                        hideTabBars();
                        for (var t = 0, r = this.tabStrips, n = r.length; t < n; t++)
                            for (var o = function(t, r, n) {
                                    var o = r[t];
                                    e.tabIds[o.getAttribute("data-tabid")] = !0, o.onclick = function(t) {
                                        var r = o.getBoundingClientRect(),
                                            n = window.scrollY - r.y,
                                            i = t.target.getAttribute("data-tabid"),
                                            s = {};
                                        if (s.tabId = i, s.type = e.type, i) {
                                            e.update(i, !0);
                                            var a = o.getBoundingClientRect();
                                            window.scrollTo(a.x, a.y + n), reportAnalytics("Tab Selected", {
                                                tabId: i,
                                                title: t.target.innerText,
                                                tabSet: e.type
                                            }), t.preventDefault()
                                        }
                                    }
                                }, i = 0, s = r[t].querySelectorAll("[data-tabid]"), a = s.length; i < a; i++) o(i, s);
                        this.update(null, !1)
                    }
                }
            }, {
                key: "update",
                value: function(e, t) {
                    if (0 !== this.tabStrips.length) {
                        if (!e) {
                            var r = getTabPref();
                            this.anonymous && r.pages && r.pages[window.location.pathname] ? e = r.pages[window.location.pathname] : r[this.type] && (e = r[this.type])
                        }(e && this.tabIds[e] || (e = this.getFirstTabId())) && tabsEventDispatcher.dispatch({
                            isUserAction: t,
                            tabId: e,
                            type: this.type
                        })
                    }
                }
            }, {
                key: "showHideSelectedTab",
                value: function(e) {
                    for (var t = 0, r = this.tabStrips, n = r.length; t < n; t++) {
                        var o = r[t],
                            i = $(o.querySelector('[data-tabid="' + e + '"]'));
                        if (i.length) {
                            var s = i.parent("ul"),
                                a = $(o.querySelector(".dropdown-toggle")),
                                u = $(o.querySelector(".dropdown"));
                            s.hasClass("dropdown-menu") ? (a.text("" + i.first().text()).append('<span class="caret"></span>'), u.attr("aria-selected", !0).siblings().attr("aria-selected", !1)) : (i.attr("aria-selected", !0).siblings().attr("aria-selected", !1), a.text("Other ").append('<span class="caret"></span>'))
                        }
                    }
                    for (var l = "tabpanel-" + e, c = 0, f = this.tabContents, h = f.length; c < h; c++)
                        for (var d = 0, p = f[c].children, g = p.length; d < g; d++) {
                            var y = p[d];
                            y.classList.contains(l) ? y.style.display = "block" : y.style.display = "none"
                        }
                }
            }], [{
                key: "register",
                value: function(t) {
                    var r = toArray$1(t.getElementsByClassName("tab-strip--singleton")),
                        n = t.querySelector(".tabs__content"),
                        o = t.getAttribute("data-tab-preference"),
                        i = !1;
                    if (!o) {
                        var s = t.querySelector("[data-tabid]");
                        if (!s) return;
                        o = "anonymous-" + s.getAttribute("data-tabid"), i = !0
                    }
                    if (tabSets[o]) {
                        var a = tabSets[o];
                        return a.tabStrips = a.tabStrips.concat(r), void a.tabContents.push(n)
                    }
                    var u = new e(o, i, r, [n], !1);
                    tabSets[o] = u
                }
            }]), e
        }();

    function setup$7() {
        tabSets = {};
        for (var e = document.getElementsByClassName("tabs"), t = 0; t < e.length; t += 1) TabSet.register(e[t]);
        for (var r = 0, n = Object.keys(tabSets), o = n.length; r < o; r++) {
            var i = n[r];
            tabSets[i].setup()
        }
    }
    tabsEventDispatcher.listen(function(e) {
        var t = tabSets[e.type];
        t && (e.isUserAction && setTabPref(e, t.anonymous), t.showHideSelectedTab(e.tabId))
    });
    var componentTabs = Object.freeze({
            tabsEventDispatcher: tabsEventDispatcher,
            getTabPref: getTabPref,
            setTabPref: setTabPref,
            setup: setup$7
        }),
        headings = [];

    function recalculate() {
        var e = document.body.clientHeight - window.innerHeight,
            t = document.documentElement.scrollTop / e;
        t = (document.documentElement.scrollTop + .8 * t * window.innerHeight) / e;
        for (var r = [1 / 0, null], n = 0, o = headings.length; n < o; n++) {
            var i = slicedToArray(headings[n], 2),
                s = i[0],
                a = i[1];
            a.classList.remove("active");
            var u = s.offsetTop / e,
                l = Math.abs(u - t);
            l <= r[0] && (r = [l, a])
        }
        r[1] && r[1].classList.add("active")
    }

    function setupScrollMonitor() {
        var e = document.querySelector(".left-toc");
        if (e) {
            headings.length = 0;
            for (var t = 0, r = e.querySelectorAll("a"), n = r.length; t < n; t++) {
                var o = r[t],
                    i = o.getAttribute("href").slice(1);
                if (i) {
                    var s = document.getElementById(i);
                    s && headings.push([s, o.parentElement])
                }
            }
            recalculate()
        }
    }

    function pillClickHandler(e) {
        var t = e.target.getAttribute("data-tab-preference");
        t && setTabPref({
            tabId: t,
            type: "languages"
        }, !1)
    }

    function setupLandingPage() {
        var e = document.getElementsByClassName("guide-category-list")[0];
        if (e)
            for (var t = e.getElementsByClassName("guide__pill"), r = 0; r < t.length; r += 1) t[r].onclick = pillClickHandler
    }
    document.addEventListener("scroll", throttle(recalculate, 150));
    var showCurrentLanguageElements = document.getElementsByClassName("show-current-language");

    function setup$8() {
        setupScrollMonitor(), setupLandingPage()
    }
    tabsEventDispatcher.listen(function(e) {
        if ("languages" === e.type)
            for (var t = 0; t < showCurrentLanguageElements.length; t += 1) showCurrentLanguageElements[t].innerText = e.tabId
    });
    var componentGuides = Object.freeze({
            setup: setup$8
        }),
        CLASS_ACTIVATED = "lightbox__content--activated",
        CLASS_SCALABLE = "lightbox__content--scalable",
        modal = document.createElement("div");
    modal.className = "lightbox__modal", modal.title = "click to close";
    var modalContent = document.createElement("img");

    function closeLightbox(e) {
        "keydown" === e.type && "Escape" !== e.key || (modalContent.classList.remove(CLASS_ACTIVATED), modal.parentNode && modal.parentNode.removeChild(modal))
    }

    function wrapImage(e) {
        var t = document.createElement("div"),
            r = document.createElement("div");
        t.className = "lightbox__imageWrapper", r.className = "lightbox__caption", r.innerText = "click to enlarge", e.parentNode.replaceChild(t, e), t.appendChild(e), t.appendChild(r), t.addEventListener("click", function() {
            document.body.appendChild(modal), modalContent.src = e.src, modalContent.alt = e.alt + " â€” Enlarged", /\.svg$/.test(modalContent.src) ? modalContent.classList.add(CLASS_SCALABLE) : modalContent.classList.remove(CLASS_SCALABLE), modal.addEventListener("click", closeLightbox), setTimeout(function() {
                modalContent.classList.add(CLASS_ACTIVATED)
            }, 0)
        })
    }

    function wrapIfNeeded(e, t) {
        var r = t.naturalWidth * t.naturalHeight;
        t.clientWidth * t.clientHeight < .9 * r && (wrapImage(t), e.classList.add("lightbox"))
    }

    function setup$9() {
        for (var e = 0, t = document.getElementsByClassName("lightbox"), r = t.length; e < r; e++) {
            var n = t[e];
            0 !== n.children.length && "IMG" === n.children[0].tagName && wrapImage(n.children[0])
        }
        for (var o = 0, i = document.getElementsByClassName("figure"), s = i.length; o < s; o++) {
            var a = i[o];
            if (0 !== a.children.length && "IMG" === a.children[0].tagName && !a.classList.contains("lightbox")) {
                var u = a.children[0];
                u.complete ? wrapIfNeeded(a, u) : u.addEventListener("load", wrapIfNeeded.bind(null, a, u))
            }
        }
        document.addEventListener("keydown", closeLightbox)
    }
    modalContent.className = "lightbox__content", modal.appendChild(modalContent);
    var componentLightbox = Object.freeze({
            setup: setup$9
        }),
        COLLAPSED_PROPERTY$1 = "apiref-resource--collapsed";

    function createClickButNotSelectionHandler(e, t) {
        var r = null;
        e.addEventListener("mousedown", function(e) {
            0 === e.button && (r = e)
        }), e.addEventListener("mouseup", function(e) {
            if (0 === e.button) {
                var n = r;
                r = null, (!n || Math.abs(e.clientX - n.clientX) < 50 && Math.abs(e.clientY - n.clientY) < 50) && t()
            }
        })
    }

    function toggleResource(e, t) {
        if (t.id) {
            var r = "#" + t.id;
            window.history.pushState({
                href: r
            }, "", r)
        }
        t.classList[e](COLLAPSED_PROPERTY$1)
    }

    function expand() {
        var e = document.location.hash.slice(1);
        if (e) {
            var t = document.getElementById(e);
            t && t.classList.contains("apiref-resource") && toggleResource("remove", t)
        }
    }

    function setup$a() {
        for (var e = document.getElementsByClassName("apiref-resource__header"), t = 0; t < e.length; t += 1) {
            var r = e[t];
            createClickButNotSelectionHandler(r, toggleResource.bind(null, "toggle", r.parentElement))
        }
        expand()
    }
    window.addEventListener("hashchange", expand, !1);
    var componentOpenAPI = Object.freeze({
        setup: setup$a
    });

    function pillClickHandler$1(e, t) {
        var r = t.target.getAttribute("data-tabid");
        tabsEventDispatcher.dispatch({
            isUserAction: !0,
            tabId: r,
            type: e
        }), reportAnalytics("Pill Selected", {
            tabId: r,
            title: t.target.innerText,
            pillSet: e
        })
    }
    var tabTypes = {};

    function setup$b() {
        tabTypes = {};
        for (var e = 0, t = document.querySelectorAll(".pillstrip-declaration"), r = t.length; e < r; e++) {
            var n = t[e],
                o = n.getAttribute("data-tab-preference");
            o && (void 0 === tabTypes[o] && (tabTypes[o] = []), tabTypes[o].push(n))
        }
        for (var i = 0, s = Object.keys(tabTypes), a = s.length; i < a; i++) {
            for (var u = s[i], l = tabTypes[u], c = document.querySelectorAll('.tabs[data-tab-preference="' + u + '"] > .tab-strip'), f = {}, h = [], d = 0, p = c.length; d < p; d++) {
                var g = c[d];
                g.style.display = "none";
                for (var y = -1, _ = toArray$1(g.querySelectorAll(".tab-strip__element[data-tabid]")), m = 0, b = _ = _.concat(toArray$1(g.querySelectorAll(".tab-strip__dropdown > li"))), S = b.length; m < S; m++) {
                    var v = b[m];
                    y += 1;
                    var E = v.getAttribute("data-tabid");
                    void 0 === f[E] && (f[E] = !0, h.splice(y, 0, [E, v.innerText]))
                }
            }
            for (var $ = pillClickHandler$1.bind(void 0, u), N = 0, O = l.length; N < O; N++)
                for (var A = l[N], w = 0, B = h.length; w < B; w++) {
                    var T = slicedToArray(h[w], 2),
                        I = T[0],
                        R = T[1],
                        D = document.createElement("li");
                    D.className = "guide__pill", D.setAttribute("data-tabid", I), D.innerText = R, D.onclick = $, A.appendChild(D)
                }
        }
    }
    tabsEventDispatcher.listen(function(e) {
        for (var t = 0, r = tabTypes[e.type] || [], n = r.length; t < n; t++)
            for (var o = r[t].getElementsByClassName("guide__pill"), i = 0; i < o.length; i += 1) {
                o[i].getAttribute("data-tabid") === e.tabId ? o[i].classList.add("guide__pill--active") : o[i].classList.remove("guide__pill--active")
            }
    });
    var componentPillStrip = Object.freeze({
        setup: setup$b
    });

    function isCurrentNode(e) {
        return e.hasClass("current")
    }

    function setup$c() {
        if (!("stitch" === $("body").attr("data-project"))) {
            var e = $(".sidebar a.current");
            (isLeafNode(e) || requiresPageload(e) || isCurrentNode(e)) && e.parent("li").addClass("selected-item"), e.parents("ul").each(function(e, t) {
                $(t).css("display", "block")
            }), $(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(), $(".sphinxsidebarwrapper").show(), $(".sphinxsidebarwrapper .toctree-l1").on("click", "a", function(t) {
                var r = $(t.currentTarget);
                isLeafNode(r) || !r.parent().hasClass("selected-item") && requiresPageload(r) || (t.preventDefault(), r.parent().hasClass("current") ? (r.parent().removeClass("current selected-item"), r.siblings("ul").slideUp()) : (e.parent().removeClass("selected-item"), e.parents().add(e.siblings("ul")).each(function(e, r) {
                    var n = $(r);
                    n.has(t.currentTarget).length || (n.is("ul") ? n.removeClass("current").slideUp() : n.removeClass("current"))
                }), r.parent().addClass("current"), r.siblings("ul").slideDown(function() {
                    (isLeafNode(r) || requiresPageload(r) || isCurrentNode(e)) && r.parent("li").addClass("selected-item")
                }), e = r))
            }), $(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(e) {
                var t = $('<span class="expand-icon"></span>');
                return isLeafNode($(this)) || t.addClass("docs-expand-arrow"), t
            })
        }
    }
    var componentSidebar = Object.freeze({
            setup: setup$c
        }),
        SLIDE_ANIMATION_TIME_MS = 400,
        $currentPage = $(".sidebar a.current");

    function isVisible(e) {
        return e.hasClass("current")
    }

    function handleTocSectionVisibility() {
        var e = $(".sphinxsidebarwrapper"),
            t = $("ul.toc-section-root.current"),
            r = $("ul.toc-section-root:not(.current)"),
            n = $("ul.toc-section-nested.current"),
            o = $("ul.toc-section-nested:not(.current)");
        t.show(), n.show(), r.hide(), o.hide(), e.show()
    }

    function handleRootSectionNavigation(e) {
        e.preventDefault();
        var t, r = $(e.currentTarget).parent();

        function n(e) {
            var t = e.children("h3"),
                r = e.children(":not(h3)");
            t.removeClass("open"), r.slideUp(SLIDE_ANIMATION_TIME_MS, function() {
                e.add(e.children()).removeClass("current")
            })
        }
        isVisible(r) ? n(r) : (n($("li.toctree-l1.current")), (t = r).add(t.children()).addClass("current"), t.children("ul.toc-section-root").slideDown(SLIDE_ANIMATION_TIME_MS))
    }

    function handleSectionNavigation(e) {
        e.preventDefault();
        var t, r, n, o = $(e.currentTarget).parent();
        isVisible(o) ? (r = (t = o).children("h4"), n = t.children(":not(h4)"), r.removeClass("open"), n.slideUp(SLIDE_ANIMATION_TIME_MS, function() {
            t.add(t.children()).removeClass("current")
        })) : function(e) {
            var t = e.children("h4"),
                r = e.children(":not(h4)");
            t.addClass("open current"), r.slideDown(SLIDE_ANIMATION_TIME_MS, function() {
                e.addClass("current"), r.addClass("current")
            })
        }(o)
    }

    function handleCompositePage(e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            r = t.parent().siblings("ul.toc-section-nested");
        t.hasClass("is-closed") ? (r.slideDown(), t.removeClass("is-closed"), t.addClass("is-open")) : (r.slideUp(), t.removeClass("is-open"), t.addClass("is-closed"))
    }

    function addNavigationHandlers() {
        var e = $(".toctree-root .toctree-l1");
        e.on("click", "h3", handleRootSectionNavigation), e.on("click", "h4", handleSectionNavigation), e.on("click", "a span.nested-page-toggle", handleCompositePage)
    }

    function addIcons() {
        $("ul.toctree-root li:not(.contains-nested) > a.reference").prepend(function() {
            return $('<span class="page-icon"></span>')
        });
        var e = $("li.contains-nested > a:not(.current)").filter($("li.contains-nested > ul:not(.toc-section-nested.current)").siblings("a")),
            t = $("li.contains-nested > a.current").add($("li.contains-nested > ul.toc-section-nested.current").siblings("a"));
        e.prepend('<span class="nested-page-toggle is-closed"></span>'), t.prepend('<span class="nested-page-toggle is-open contains-current-page"></span>'), $("ul.toc-section-nested a.reference").prepend(function() {
            return $('<span class="nested-page-line"></span>')
        })
    }

    function setup$d() {
        "stitch" === $("body").attr("data-project") && (($currentPage = $(".sidebar a.current")).parent("li").addClass("selected-item"), handleTocSectionVisibility(), addNavigationHandlers(), addIcons())
    }
    var componentStitchSidebar = Object.freeze({
            setup: setup$d
        }),
        SAMPLE_FACTORS = {
            charts: .12158,
            guides: .02644,
            stitch: .03162,
            "docs-ruby": .47984,
            ecosystem: .00997,
            "docs-php-library": .04165,
            atlas: .01176,
            compass: .01684,
            manual: 22e-5,
            landing: .00806,
            mongoid: .07576,
            "mms-cloud": .06358,
            "mms-onprem": .0179,
            "bi-connector": .03912,
            "spark-connector": .05562
        };

    function initialize() {
        ! function(e, t, r, n, o) {
            if (!e[o]) {
                for (var i = e[o] = [], s = 0; s < r.length; s++) {
                    var a = r[s];
                    i[a] = i[a] || function(e) {
                        return function() {
                            var t = Array.prototype.slice.call(arguments);
                            i.push([e, t])
                        }
                    }(a)
                }
                i.SNIPPET_VERSION = "1.0.1";
                var u = t.createElement("script");
                u.type = "text/javascript", u.async = !0, u.src = "https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/Dk30CC86ba0nATlK/" + o + ".js";
                var l = t.getElementsByTagName("script")[0];
                l.parentNode.insertBefore(u, l)
            }
        }(window, document, ["survey", "reset", "config", "init", "set", "get", "event", "identify", "track", "page", "screen", "group", "alias"], 0, "delighted"),
        function() {
            var e = window.analytics = window.analytics || [];
            if (!e.initialize)
                if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                else {
                    e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"], e.factory = function(t) {
                        return function() {
                            var r = Array.prototype.slice.call(arguments);
                            return r.unshift(t), e.push(r), e
                        }
                    };
                    for (var t = 0; t < e.methods.length; t++) {
                        var r = e.methods[t];
                        e[r] = e.factory(r)
                    }
                    e.load = function(t, r) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.async = !0, n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(n, o), e._loadOptions = r
                    }, e.SNIPPET_VERSION = "4.1.0", e.load("aGhVvyxnPWlyP71vVl9ZjGWxAtoVGLXX")
                }
        }()
    }

    function setup$e(e) {
        var t = document.body.getAttribute("data-project"),
            r = document.body.getAttribute("data-branch");
        try {
            var n = SAMPLE_FACTORS[t] || .1;
            window.delighted.survey({
                minTimeOnPage: 180,
                sampleFactor: n,
                properties: {
                    project: t,
                    branch: r
                }
            })
        } catch (e) {
            console.error(e)
        }
        try {
            window.analytics.page({
                path: location.pathname,
                url: location.href,
                project: t,
                branch: r
            })
        } catch (e) {
            console.error(e)
        }
    }
    var componentThirdParty = Object.freeze({
            initialize: initialize,
            setup: setup$e
        }),
        STYLE_SELECTED = "guide__deploymentpill--active",
        STYLE = "guide__pill",
        STYLE_DEPLOY = "guide__deploymentpill",
        STYLE_DEPLOYTEXT = "show-current-deployment";

    function setToggleState(e) {
        for (var t = document.getElementsByClassName(STYLE), r = 0; r < t.length; r += 1) {
            t[r].getAttribute("data-tabid") === e ? t[r].classList.add(STYLE_SELECTED) : t[r].classList.remove(STYLE_SELECTED)
        }
        document.getElementsByClassName(STYLE_DEPLOYTEXT).length > 0 && (document.getElementsByClassName(STYLE_DEPLOYTEXT)[0].innerHTML = e)
    }

    function dispatchState(e) {
        tabsEventDispatcher.dispatch({
            isUserAction: !0,
            tabId: e,
            type: "cloud"
        })
    }

    function addListenersToPills(e) {
        e.addEventListener("click", function(e) {
            tabsEventDispatcher.dispatch({
                isUserAction: !0,
                tabId: e.target.innerHTML,
                type: "cloud"
            })
        })
    }

    function getTabNode(e, t) {
        var r = document.createElement("li");
        return r.classList.add(STYLE), r.classList.add(STYLE_DEPLOY), r.setAttribute("data-tabid", e), r.innerHTML = e, addListenersToPills(r), setToggleState(e), r
    }

    function setup$f() {
        var e = document.getElementsByClassName("guide-prefs__deploy")[0];
        if (void 0 !== e)
            if (0 === document.getElementsByClassName("tabpanel-cloud").length && document.getElementsByClassName("guide-prefs__deploy").length > 0) document.getElementsByClassName("guide-prefs__deploy")[0].style.display = "none";
            else {
                var t = getTabPref();
                void 0 === t.cloud && (t.cloud = "local");
                var r = document.createElement("ul");
                r.classList.add("guide__pills"), r.classList.add("pillstrip-declaration"), r.setAttribute("role", "tablist"), r.setAttribute("data-tab-preference", "cloud"), r.appendChild(getTabNode("cloud", t.cloud)), r.appendChild(getTabNode("local", t.cloud)), e.appendChild(r), setToggleState(t.cloud), dispatchState(t.cloud)
            }
    }
    tabsEventDispatcher.listen(function(e) {
        "cloud" === e.type && setToggleState(e.tabId)
    });
    var componentToggleController = Object.freeze({
            setup: setup$f
        }),
        _TEMPLATES, LOCALSTORAGE_KEY_LOCAL = "uriwriter_local",
        LOCALSTORAGE_KEY_ATLAS = "uriwriter_atlas",
        LOCALSTORAGE_KEY_CURRENT_STATE = "uriwriter_currentstate",
        TEMPLATE_TYPE_SELF_MANAGED = "local MongoDB",
        TEMPLATE_TYPE_REPLICA_SET = "local MongoDB with replica set",
        TEMPLATE_TYPE_ATLAS_36 = "Atlas (Cloud) v. 3.6",
        TEMPLATE_TYPE_ATLAS_34 = "Atlas (Cloud) v. 3.4",
        TEMPLATE_TYPE_ATLAS = "Atlas (Cloud)",
        TEMPLATES = (_TEMPLATES = {}, defineProperty(_TEMPLATES, TEMPLATE_TYPE_SELF_MANAGED, {
            options: [{
                name: "authSource",
                type: "text"
            }],
            template: "mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",
            templatePasswordRedactedShell: "mongodb://$[hostlist]/$[database]?$[options] --username $[username]",
            templateShell: "mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]"
        }), defineProperty(_TEMPLATES, TEMPLATE_TYPE_REPLICA_SET, {
            options: [{
                name: "replicaSet",
                type: "text"
            }, {
                name: "authSource",
                type: "text"
            }, {
                name: "ssl",
                type: "pass-through",
                value: "true"
            }],
            template: "mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",
            templatePasswordRedactedShell: "mongodb://$[hostlist]/$[database]?$[options] --username $[username] --password",
            templateShell: "mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]"
        }), defineProperty(_TEMPLATES, TEMPLATE_TYPE_ATLAS_36, {
            options: [],
            template: "mongodb+srv://$[username]:$[password]@$[hostlist]/$[database]?retryWrites=true",
            templatePasswordRedactedShell: "mongodb+srv://$[hostlist]/$[database] --username $[username] --password",
            templateShell: "mongodb+srv://$[username]:$[password]@$[hostlist]/$[database]"
        }), defineProperty(_TEMPLATES, TEMPLATE_TYPE_ATLAS_34, {
            options: [{
                name: "replicaSet",
                type: "text"
            }, {
                name: "authSource",
                type: "text"
            }, {
                name: "ssl",
                type: "pass-through",
                value: "true"
            }],
            template: "mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",
            templatePasswordRedactedShell: "mongodb://$[hostlist]/$[database]?replicaSet=$[replicaSet] --ssl --authenticationDatabase $[authSource] --username $[username] --password",
            templateShell: "mongodb://$[hostlist]/$[database]?replicaSet=$[replicaSet] --ssl --authenticationDatabase $[authSource] --username $[username] --password $[password]"
        }), _TEMPLATES);

    function getValue(e, t) {
        return "pass-through" === t.type ? t.value : e
    }

    function getPrefix(e) {
        return "'" === e.charAt(0) || '"' === e.charAt(0) ? e.charAt(0) : ""
    }
    var PLACEHOLDER_PATTERN = /&lt;(?:(?:URISTRING(?:_(?:(?:SHELL_NOUSER)|(?:SHELL)))?)|(?:USERNAME))&gt;/g;

    function preparseUristrings() {
        for (var e = document.getElementsByTagName("pre"), t = 0; t < e.length; t += 1) e[t].innerHTML = e[t].innerHTML.replace(PLACEHOLDER_PATTERN, '<span class="uristring-element">$&</span>')
    }

    function validateHost(e) {
        var t = /^\s*([^:\s]+)(?::(\d+))?\s*$/.exec(e);
        if (!t) throw new Error('Invalid host format: must match the format "hostname:port"');
        var r = parseInt(t[2], 10);
        if (isNaN(r)) throw new Error('Missing port: host must match the format "hostname:port"');
        if (r > 65535) throw new Error("Port number is too large");
        return [t[1], r]
    }

    function conveyInvalidParse(e) {
        e.classList.add("mongodb-form__status--invalid"), e.classList.remove("mongodb-form__status--good"), e.style.display = "", e.innerText = "Connection string could not be parsed"
    }

    function conveyValidParse(e) {
        e.classList.add("mongodb-form__status--good"), e.classList.remove("mongodb-form__status--invalid"), e.style.display = "", e.innerText = "Connection string parsed"
    }

    function splitOptions(e, t) {
        var r = t.split("&");
        if (r.length > 0)
            for (var n = 0; n < r.length; n += 1) {
                var o = r[n].split("=");
                e[o[0]] = o[1]
            }
    }
    var HostList = function() {
            function e(t, r) {
                classCallCheck(this, e), this.root = t, this.uriWriter = r, this.elementPairs = [], this.updateHostsFromUriWriter()
            }
            return createClass(e, [{
                key: "updateHostsFromUriWriter",
                value: function() {
                    this.elementPairs = [], this.root.innerText = "";
                    for (var e = 0, t = this.uriWriter.loadState(this.uriWriter.loadCurrentState()).hostlist || [], r = t.length; e < r; e++) {
                        var n = t[e];
                        this.addHost(n)
                    }
                    this.addHost()
                }
            }, {
                key: "addHost",
                value: function(e) {
                    var t = this,
                        r = document.createElement("input");
                    r.className = "mongodb-form__input", r.placeholder = "localhost:27017", r.value = e || "";
                    var n = document.createElement("div");
                    n.className = "mongodb-form__status", r.oninput = function() {
                        if (r.value) t.lastInput === r && t.addHost();
                        else if (t.lastInput !== r) return t.elementPairs = t.elementPairs.filter(function(e) {
                            return e[0] !== r
                        }), t.root.removeChild(r), t.root.removeChild(n), void t.uriWriter.setHosts(t.hosts);
                        try {
                            validateHost(r.value)
                        } catch (e) {
                            return r.setCustomValidity(e.message), n.innerText = e.message, void n.classList.add("mongodb-form__status--invalid")
                        }
                        n.innerText = "", n.classList.remove("mongodb-form__status--invalid"), r.setCustomValidity(""), t.uriWriter.setHosts(t.hosts)
                    }, this.root.appendChild(r), this.root.appendChild(n), this.elementPairs.push([r, n])
                }
            }, {
                key: "hosts",
                get: function() {
                    return this.elementPairs.map(function(e) {
                        return e[0].value.trim()
                    }).filter(function(e) {
                        return e
                    })
                }
            }, {
                key: "lastInput",
                get: function() {
                    return this.elementPairs[this.elementPairs.length - 1][0]
                }
            }]), e
        }(),
        uriwriterSingleton = null,
        UriwriterSingleton = function() {
            function e() {
                classCallCheck(this, e), this.uristowrite = [], this.usernamestowrite = [], this.uristowritepasswordredactedshell = [], this.uristowriteshell = [], this.urireplacestring = "", this.options = {}, this.hostList = null, this.setupURIListeners(), this.loadTemplateEnv(), this.renderURI(), this.registerDispatch()
            }
            return createClass(e, [{
                key: "loadTemplateEnv",
                value: function() {
                    void 0 === this.loadState(this.loadCurrentState()).env && ("local" === this.loadCurrentState() || "undefined" === this.loadCurrentState() ? this.saveState({
                        env: TEMPLATE_TYPE_SELF_MANAGED
                    }, "local") : this.saveState({
                        env: TEMPLATE_TYPE_ATLAS_36
                    }, "cloud"))
                }
            }, {
                key: "loadState",
                value: function(e) {
                    return "cloud" === e ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY_ATLAS)) || {} : JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY_LOCAL)) || {}
                }
            }, {
                key: "saveState",
                value: function(e, t) {
                    "cloud" === t ? window.localStorage.setItem(LOCALSTORAGE_KEY_ATLAS, JSON.stringify(e)) : window.localStorage.setItem(LOCALSTORAGE_KEY_LOCAL, JSON.stringify(e))
                }
            }, {
                key: "loadCurrentState",
                value: function() {
                    return window.localStorage.getItem(LOCALSTORAGE_KEY_CURRENT_STATE)
                }
            }, {
                key: "saveCurrentState",
                value: function(e) {
                    window.localStorage.setItem(LOCALSTORAGE_KEY_CURRENT_STATE, e)
                }
            }, {
                key: "addValue",
                value: function(e, t) {
                    var r = this.loadState(this.loadCurrentState());
                    "atlaspasteduri" !== e && "env" !== e && delete r.atlaspasteduri, r[e] = t, this.saveState(r, this.loadCurrentState())
                }
            }, {
                key: "setupURIListeners",
                value: function() {
                    preparseUristrings();
                    for (var e = document.getElementsByClassName("uristring-element"), t = 0; t < e.length; t += 1) e[t].innerHTML.indexOf("&lt;URISTRING&gt;") > -1 && this.uristowrite.push(e[t]), e[t].innerHTML.indexOf("&lt;USERNAME&gt;") > -1 && this.usernamestowrite.push(e[t]), e[t].innerHTML.indexOf("&lt;URISTRING_SHELL&gt;") > -1 && this.uristowriteshell.push(e[t]), e[t].innerHTML.indexOf("&lt;URISTRING_SHELL_NOUSER&gt;") > -1 && this.uristowritepasswordredactedshell.push(e[t])
                }
            }, {
                key: "writeToPlaceholders",
                value: function() {
                    for (var e = 0; e < this.uristowrite.length; e += 1) {
                        var t = getPrefix(this.uristowrite[e].innerHTML);
                        this.uristowrite[e].innerHTML = "" + t + this.urireplacestring + t
                    }
                    for (var r = 0; r < this.uristowritepasswordredactedshell.length; r += 1) this.uristowritepasswordredactedshell[r].innerHTML = this.urireplacestringPasswordRedactedShell;
                    for (var n = 0; n < this.uristowriteshell.length; n += 1) this.uristowriteshell[n].innerHTML = this.urireplacestringShell;
                    for (var o = 0; o < this.usernamestowrite.length; o += 1) this.usernamestowrite[o].innerHTML = this.username
                }
            }, {
                key: "setEnvironment",
                value: function(e) {
                    var t = e.startsWith(TEMPLATE_TYPE_ATLAS);
                    t ? this.saveCurrentState("cloud") : this.saveCurrentState("local");
                    var r = this.loadState(this.loadCurrentState()),
                        n = Boolean(document.getElementById("uriwriter"));
                    if (t && n && (document.getElementsByClassName("atlascontrols__status")[0].style.display = "none", void 0 !== r.atlaspasteduri)) return this.parseIncomingAtlasString(r.atlaspasteduri), this.renderURI(), void this.populateForm();
                    (void 0 !== r && void 0 !== r.env && r.env.startsWith(TEMPLATE_TYPE_ATLAS) || t) && n && this.hostList.updateHostsFromUriWriter(), this.addValue("env", e), this.renderURI(), n && this.populateForm()
                }
            }, {
                key: "toggleEnvironmentExternal",
                value: function(e) {
                    var t = document.getElementById("deployment_type");
                    t.style.display = "cloud" === e ? "none" : "block"
                }
            }, {
                key: "setupEnvironmentListeners",
                value: function() {
                    var e = this,
                        t = document.getElementsByClassName("uriwriter__toggle"),
                        r = this.loadState(this.loadCurrentState()).env;
                    r !== TEMPLATE_TYPE_ATLAS_36 && r !== TEMPLATE_TYPE_ATLAS_34 || (r = TEMPLATE_TYPE_ATLAS);
                    for (var n = 0; n < t.length; n += 1) r === t[n].innerHTML && t[n].classList.add("guide__pill--active"), t[n].onclick = function(t) {
                        for (var r = t.target, n = r.parentElement.children, o = 0; o < n.length; o += 1) n[o].classList.remove("guide__pill--active");
                        r.classList.add("guide__pill--active"), e.setEnvironment(r.innerHTML)
                    }
                }
            }, {
                key: "renderURI",
                value: function() {
                    this.loadState(this.loadCurrentState()).env === TEMPLATE_TYPE_ATLAS && this.addValue("env", TEMPLATE_TYPE_ATLAS_36);
                    var e = TEMPLATES[this.loadState(this.loadCurrentState()).env];
                    e && (this.uristring = e.template, this.options = e.options, this.urireplacestring = this.replaceString(this.uristring, "&"), this.urireplacestringShell = this.replaceString(e.templateShell, ","), this.urireplacestringPasswordRedactedShell = this.replaceString(e.templatePasswordRedactedShell, ","), this.username = this.loadState(this.loadCurrentState()).username, this.writeToPlaceholders())
                }
            }, {
                key: "optionStringifier",
                value: function(e, t) {
                    for (var r = [], n = this.loadState(this.loadCurrentState()), o = 0; o < this.options.length; o += 1) {
                        var i = this.options[o],
                            s = i.name,
                            a = getValue(n[s], i);
                        a || (a = i.placeholder ? i.placeholder : "$[" + s + "]"), r.push(s + "=" + a)
                    }
                    return r.join(t)
                }
            }, {
                key: "replaceString",
                value: function(e, t) {
                    var r = this.loadState(this.loadCurrentState());
                    r.username && (e = e.replace("$[username]", r.username)), r.database && (e = e.replace("$[database]", r.database)), r.authSource && (e = e.replace("$[authSource]", r.authSource)), r.replicaSet && (e = e.replace("$[replicaSet]", r.replicaSet));
                    var n = this.optionStringifier(this.options, t);
                    return n.length > 0 && (e = e.replace("$[options]", n)), r.hostlist && r.hostlist.length > 0 && (e = e.replace("$[hostlist]", r.hostlist.join(","))), e
                }
            }, {
                key: "renderOptions",
                value: function() {
                    for (var e = document.getElementsByClassName("uriwriter__option-prompt"); e.length > 0;) e[0].parentElement.removeChild(e[0]);
                    if (this.options && this.options.length > 0)
                        for (var t = 0; t < this.options.length; t += 1) "pass-through" !== this.options[t].type && this.renderOption(this.options[t])
                }
            }, {
                key: "renderOption",
                value: function(e) {
                    var t = this,
                        r = document.createElement("label");
                    r.className = "mongodb-form__prompt uriwriter__option-prompt";
                    var n = document.createElement("div");
                    n.className = "mongodb-form__label", n.innerText = e.name;
                    var o = document.createElement("input");
                    o.setAttribute("id", e.name), e.placeholder && o.setAttribute("placeholder", e.placeholder), o.className = "mongodb-form__input", void 0 !== this.loadState(this.loadCurrentState())[e.name] && (o.value = this.loadState(this.loadCurrentState())[e.name]), o.addEventListener("input", function(r) {
                        t.addValue(e.name, document.getElementById(e.name).value), t.renderURI()
                    }), r.appendChild(n), r.appendChild(o);
                    var i = document.querySelector("[data-server-configuration]");
                    i.parentElement.insertBefore(r, i)
                }
            }, {
                key: "initializeWidget",
                value: function() {
                    var e = this;
                    if (document.getElementById("uriwriter")) {
                        this.hostList = new HostList(document.getElementById("hostlist"), this), document.getElementById("uriwriter_username").addEventListener("input", function(t) {
                            e.addValue("username", t.target.value), e.renderURI()
                        });
                        var t = document.getElementById("uriwriter_atlaspaste"),
                            r = document.getElementsByClassName("atlascontrols__status")[0];
                        t.oninput = function(n) {
                            var o = t.value;
                            if (!o.trim()) return r.style.display = "none", void t.setCustomValidity("");
                            e.parseIncomingAtlasString(o) ? (t.setCustomValidity(""), e.addValue("atlaspasteduri", o), conveyValidParse(r), e.renderURI(), e.populateForm()) : (t.setCustomValidity("Failed to parse"), conveyInvalidParse(r))
                        }, document.getElementById("uriwriter_db").addEventListener("input", function(t) {
                            e.addValue("database", document.getElementById("uriwriter_db").value), e.renderURI()
                        }), this.setupEnvironmentListeners(), this.populateForm()
                    }
                }
            }, {
                key: "renderFormValues",
                value: function() {
                    var e = this.loadState(this.loadCurrentState()),
                        t = document.getElementsByClassName("uriwriter__atlascontrols")[0];
                    if (e.env !== TEMPLATE_TYPE_SELF_MANAGED && e.env !== TEMPLATE_TYPE_REPLICA_SET) return document.getElementById("uriwriter_atlaspaste").value = e.atlaspasteduri || "", void 0 !== e.atlaspasteduri ? t.style.display = "" : t.style.display = "none", document.getElementById("userinfo_form").style.display = "none", void(t.style.display = "");
                    t.style.display = "none", document.getElementById("userinfo_form").style.display = "", void 0 !== e.username && (document.getElementById("uriwriter_username").value = e.username), void 0 !== e.database && (document.getElementById("uriwriter_db").value = e.database)
                }
            }, {
                key: "setHosts",
                value: function(e) {
                    var t = this.loadState(this.loadCurrentState());
                    t.hostlist = e, this.saveState(t, this.loadCurrentState()), this.renderURI()
                }
            }, {
                key: "populateForm",
                value: function() {
                    this.toggleEnvironmentExternal(this.loadCurrentState()), this.renderOptions(), this.renderFormValues(), this.hostList = new HostList(document.getElementById("hostlist"), this)
                }
            }, {
                key: "registerDispatch",
                value: function() {
                    var e = this;
                    tabsEventDispatcher.listen(function(t) {
                        if (uriwriterSingleton && (e.renderURI(), "cloud" === t.type)) {
                            if ("cloud" === t.tabId) {
                                if ("cloud" === e.loadCurrentState()) return;
                                e.saveCurrentState("cloud"), e.loadTemplateEnv(), e.renderURI()
                            } else {
                                if ("local" === e.loadCurrentState()) return;
                                e.saveCurrentState("local"), e.loadTemplateEnv(), e.renderURI()
                            }
                            Boolean(document.getElementById("uriwriter")) && e.populateForm()
                        }
                    })
                }
            }, {
                key: "parseOutShellParams",
                value: function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r].startsWith("--") && !e[r + 1].startsWith("--")) {
                            var n = e[r].replace("--", ""),
                                o = e[r + 1];
                            "authenticationDatabase" === n && (n = "authSource"), o.startsWith("--") || (o = o.replace("<", "").replace(">", ""), t[n] = o)
                        }
                }
            }, {
                key: "parseOutURIParams",
                value: function(e, t) {
                    for (var r = e.split("&"), n = 0; n < r.length; n += 1) {
                        var o = r[n].split("=");
                        t[o[0]] = o[1]
                    }
                }
            }, {
                key: "parseOutEnvAndClusters",
                value: function(e, t) {
                    var r = /(\w+):\/\/((\S+)(:)+(\S+))\/(\w+)?\?(\S+)/;
                    e.startsWith("mongodb+srv") && (r = /((\w+)\+(\w+)):\/\/((\S+))\/(\w+)/);
                    var n = e.match(r);
                    if ("mongodb" === n[1]) {
                        t.env = TEMPLATE_TYPE_ATLAS_34;
                        var o = n[2];
                        t.hostlist = o.split(","), this.parseOutURIParams(n[7], t)
                    } else t.env = TEMPLATE_TYPE_ATLAS_36, t.hostlist = [n[4]];
                    t.database = n[6]
                }
            }, {
                key: "parseShell",
                value: function(e, t) {
                    var r = e.split(" "),
                        n = r[1];
                    return n = n.replace(/"/g, ""), this.parseOutShellParams(r, t), this.parseOutEnvAndClusters(n, t), this.saveState(t, "cloud"), !0
                }
            }, {
                key: "parseIncomingAtlasString",
                value: function(e) {
                    if (void 0 === e) return !1;
                    if (null !== (e = e.replace(/[\n\r]+/g, "").trim())) {
                        var t = this.parseAtlasString(e);
                        return this.hostList.updateHostsFromUriWriter(), t
                    }
                    return !1
                }
            }, {
                key: "parseTo3dot4",
                value: function(e, t) {
                    t.env = TEMPLATE_TYPE_ATLAS_34, this.saveState(t, "cloud"), t = this.loadState(this.loadCurrentState());
                    var r = e.match(/(\S+):\/\/(\S+):(\S*)@(\S+)\/(\S+)\?(\S+)/);
                    return !!r && (t.username = r[2], t.hostlist = r[4].split(","), t.database = r[5], splitOptions(t, r[6]), this.saveState(t, this.loadCurrentState()), !0)
                }
            }, {
                key: "parseTo3dot6",
                value: function(e, t) {
                    t.env = TEMPLATE_TYPE_ATLAS_36, this.saveState(t, "cloud"), t = this.loadState(this.loadCurrentState());
                    var r = e.match(/(\S+):\/\/(\S+):(\S*)@(\S+)\/([^\s?]+)\?/);
                    return !!r && (t.username = r[2], t.havePassword = Boolean(r[3]), t.hostlist = [r[4]], t.database = r[5], this.saveState(t, this.loadCurrentState()), !0)
                }
            }, {
                key: "parseAtlasString",
                value: function(e) {
                    var t = this.loadState("true");
                    return e.indexOf(" --") > -1 ? this.parseShell(e, t) : e.startsWith("mongodb+srv") ? this.parseTo3dot6(e, t) : this.parseTo3dot4(e, t)
                }
            }]), e
        }();

    function setup$g() {
        (uriwriterSingleton = new UriwriterSingleton).initializeWidget()
    }
    var componentUriWriter = Object.freeze({
        setup: setup$g
    });

    function fullDocsPath(e) {
        var t = document.getElementsByClassName("body")[0].getAttribute("data-pagename");
        return "index" === t ? t = "" : t && (t += "/"), "/" + e + "/" + t
    }

    function setup$h() {
        $(".version-selector").on("click", function(e) {
            e.preventDefault();
            var t = $(e.currentTarget).data("path");
            window.location.href = fullDocsPath(t)
        })
    }
    var componentVersionSelector = Object.freeze({
            setup: setup$h
        }),
        FastNav = function() {
            function e() {
                classCallCheck(this, e), this.components = []
            }
            return createClass(e, [{
                key: "register",
                value: function(e) {
                    this.components.push(e), e.init && e.init()
                }
            }, {
                key: "update",
                value: function() {
                    for (var e = 0, t = this.components, r = t.length; e < r; e++) {
                        t[e].setup(this)
                    }
                    window.location.hash && (window.location.hash = window.location.hash)
                }
            }]), e
        }(),
        fastNav = new FastNav;
    $(function() {
        zQuery.fn.load = function(e) {
            $(window).on("load", e)
        }, initialize(), fastNav.register(componentCodeBlockFix), fastNav.register(componentCopyButtons), fastNav.register(componentFastLoad), fastNav.register(componentFeedback), fastNav.register(componentLightbox), fastNav.register(componentSidebar), fastNav.register(componentStitchSidebar), fastNav.register(componentPillStrip), fastNav.register(componentTabs), fastNav.register(componentVersionSelector), fastNav.register(componentThirdParty), fastNav.register(componentGuides), fastNav.register(componentOpenAPI), fastNav.register(componentUriWriter), fastNav.register(componentToggleController), fastNav.register(componentCloseOpen), fastNav.register(componentAccordion), document.referrer.indexOf("aws.amazon.com") >= 0 && fastNav.register(componentAtlas), $(".toc > ul > li > ul > li").length || $(".right-column .toc").hide(), $(".expand-toc-icon").on("click", function(e) {
            e.preventDefault(), $(".sidebar").toggleClass("reveal")
        });
        var e = $(window),
            t = $(".sidebar"),
            r = e.width() <= 1093;

        function n() {
            location.hash && document.getElementById(location.hash.substr(1)) && $(window).scrollTop(window.scrollY - 75)
        }
        if (e.resize(function(n) {
                r && e.width() > 1093 ? (r = !1, t.removeClass("reveal")) : !r && e.width() <= 1093 && (r = !0)
            }), window.addEventListener("hashchange", n), location.hash && window.setTimeout(n, 10), $(".content").on("click", "a", function(e) {
                $(e.currentTarget).attr("href") === location.hash && window.setTimeout(n, 10)
            }), fastNav.update(), document.querySelector) {
            var o = document.querySelector("a.current");
            o && o.scrollIntoView(!1)
        }
    })
}();
//# sourceMappingURL=controller.js.map
