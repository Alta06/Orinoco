! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 332)
}({
    332: function (e, t, n) {
        "use strict";

        function r(e, t, n, r, o, u, i) {
            try {
                var a = e[u](i),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function o(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, u) {
                    var i = e.apply(t, n);

                    function a(e) {
                        r(i, o, u, a, c, "next", e)
                    }

                    function c(e) {
                        r(i, o, u, a, c, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }

        function u() {
            return i.apply(this, arguments)
        }

        function i() {
            return (i = o(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
                             e.next = 3, fetch("");
                        case 3:
                            return t = e.sent, e.abrupt("return", t.json());
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function a(e, t, n, r, o, u, i) {
            try {
                var a = e[u](i),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function c(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var u = e.apply(t, n);

                    function i(e) {
                        a(u, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        a(u, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function s() {
            return (s = c(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, u();
                        case 3:
                            t = e.sent, (n = document.createElement("div")).innerHTML = t.join("<br />"), document.getElementsByTagName("body")[0].appendChild(n), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(0), console.log("Error", e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 9]
                ])
            })))).apply(this, arguments)
        }
        n.r(t),
            function () {
                s.apply(this, arguments)
            }()
    }
});