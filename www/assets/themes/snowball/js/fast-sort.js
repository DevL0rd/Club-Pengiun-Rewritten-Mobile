! function(r, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (r.sort = r.sort || {}, r.sort.js = n())
}(this, function() {
    "use strict";
    var r = function() {
            function r(r, n) {
                var t = [],
                    o = !0,
                    e = !1,
                    i = void 0;
                try {
                    for (var u, f = r[Symbol.iterator](); !(o = (u = f.next()).done) && (t.push(u.value), !n || t.length !== n); o = !0);
                } catch (r) {
                    e = !0, i = r
                } finally {
                    try {
                        !o && f.return && f.return()
                    } finally {
                        if (e) throw i
                    }
                }
                return t
            }
            return function(n, t) {
                if (Array.isArray(n)) return n;
                if (Symbol.iterator in Object(n)) return r(n, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
            return typeof r
        } : function(r) {
            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        },
        t = function(r, n, t) {
            return n === t ? 0 : n < t ? -r : null == n ? 1 : null == t ? -1 : r
        },
        o = function(r, n, o, e) {
            return t(r, o[n], e[n])
        },
        e = function(r, n, o, e) {
            return t(r, n(o), n(e))
        },
        i = function(r, n, t, o, e, i) {
            return s(r(e), r(i), n, t, o, e, i)
        },
        u = function(r, n, t, o, e, i) {
            return s(e[r], i[r], n, t, o, e, i)
        },
        f = function(r, n, t, o, e, i) {
            var u = r.asc || r.desc,
                f = r.asc ? 1 : -1;
            if (!u) throw Error("sort: Invalid 'by' sorting configuration.\n      Expecting object with 'asc' or 'desc' key");
            return c(u)(u, n, t, f, e, i)
        },
        c = function(r) {
            var t = void 0 === r ? "undefined" : n(r);
            return "string" === t ? u : "function" === t ? i : f
        },
        s = function(r, n, o, e, i, u, f) {
            return r === n || null == r && null == n ? o.length > e ? c(o[e])(o[e], o, e + 1, i, u, f) : 0 : t(i, r, n)
        },
        a = function(n, i, u) {
            if (!Array.isArray(i)) return i;
            Array.isArray(u) && u.length < 2 && (u = r(u, 1)[0]);
            var f = void 0;
            return f = u ? "string" == typeof u ? o.bind(void 0, n, u) : "function" == typeof u ? e.bind(void 0, n, u) : c(u[0]).bind(void 0, u.shift(), u, 0, n) : t.bind(void 0, n), i.sort(f)
        };
    return function(r) {
        return {
            asc: function(n) {
                return a(1, r, n)
            },
            desc: function(n) {
                return a(-1, r, n)
            },
            by: function(n) {
                if (!Array.isArray(r)) return r;
                if (!Array.isArray(n)) throw Error("sort: Invalid usage of 'by' sorter. Array syntax is required.\n          Did you mean to use 'asc' or 'desc' sorter instead?");
                if (1 === n.length) {
                    var t = n[0].asc ? 1 : -1,
                        o = n[0].asc || n[0].desc;
                    if (!o) throw Error("sort: Invalid 'by' sorting configuration.\n            Expecting object with 'asc' or 'desc' key");
                    return a(t, r, o)
                }
                var e = f.bind(void 0, n.shift(), n, 0, void 0);
                return r.sort(e)
            }
        }
    }
});