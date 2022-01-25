self.RdfForm = (function (exports) {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest$1();
  }

  function _toArray(arr) {
    return _arrayWithHoles$1(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest$1();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function peg$subclass(t, r) {
    function e() {
      this.constructor = t;
    }

    e.prototype = r.prototype, t.prototype = new e();
  }

  function peg$SyntaxError(t, r, e, n) {
    this.message = t, this.expected = r, this.found = e, this.location = n, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, peg$SyntaxError);
  }

  function peg$parse(t, r) {
    r = void 0 !== r ? r : {};

    var e,
        n = {},
        u = {
      turtleDoc: qe
    },
        s = qe,
        a = function a(t) {
      var r = vn.toJSON();
      return r["@graph"] = [], t.filter(function (t) {
        return Array.isArray(t);
      }).forEach(function (t) {
        t.forEach(function (t) {
          r["@graph"].push(t);
        });
      }), 1 === r["@graph"].length && (Object.assign(r, r["@graph"][0]), delete r["@graph"]), r;
    },
        c = ".",
        o = ke(".", !1),
        f = function f(t) {
      return t;
    },
        i = "#",
        h = ke("#", !1),
        l = /^[^\n]/,
        A = Be(["\n"], !0, !1),
        p = "\n",
        d = ke("\n", !1),
        g = function g(t) {
      return t.join("");
    },
        v = "@prefix",
        w = ke("@prefix", !1),
        b = function b(t, r) {
      return vn.addPrefix("" === t ? "0" : t, r), {};
    },
        C = "@base",
        x = ke("@base", !1),
        F = function F(t) {
      return vn.addBase(t), {};
    },
        y = /^[Bb]/,
        m = Be(["B", "b"], !1, !1),
        S = /^[Aa]/,
        j = Be(["A", "a"], !1, !1),
        E = /^[Ss]/,
        I = Be(["S", "s"], !1, !1),
        $ = /^[Ee]/,
        D = Be(["E", "e"], !1, !1),
        L = /^[Pp]/,
        M = Be(["P", "p"], !1, !1),
        R = /^[Rr]/,
        X = Be(["R", "r"], !1, !1),
        O = /^[Ff]/,
        P = Be(["F", "f"], !1, !1),
        z = /^[Ii]/,
        Z = Be(["I", "i"], !1, !1),
        _ = /^[Xx]/,
        k = Be(["X", "x"], !1, !1),
        B = function B(t, r) {
      var e = {};
      return "string" == typeof t && "[]" !== t ? e["@id"] = t : "object" == _typeof(t) && Object.assign(e, t), r && Object.assign(e, r), [e];
    },
        U = function U(t, r) {
      var e = {};
      return t && Object.assign(e, t), r && Object.assign(e, r), [e];
    },
        J = ";",
        N = ke(";", !1),
        T = function T(t, r, e, n) {
      var u = {};
      return u[e] = n, u;
    },
        q = function q(t, r, e) {
      return e;
    },
        G = function G(t, r, e) {
      var n = {};
      return e.unshift(function (t, r) {
        var e = {};
        return e[t] = r, e;
      }(t, r)), e.forEach(function (t) {
        t && Object.keys(t).forEach(function (r) {
          t[r].forEach(function (t) {
            "@type" === r && void 0 !== t["@id"] && (t = t["@id"]), void 0 === n[r] ? n[r] = t : Array.isArray(n[r]) ? n[r].push(t) : n[r] = [n[r], t];
          });
        });
      }), n;
    },
        H = ",",
        K = ke(",", !1),
        Q = function Q(t, r) {
      return r;
    },
        V = function V(t, r) {
      return r.unshift(t), r;
    },
        W = "a",
        Y = ke("a", !1),
        tt = function tt() {
      return "@type";
    },
        rt = function rt(t) {
      return wn(t, !0);
    },
        et = function et(t) {
      return wn(t, !1);
    },
        nt = function nt(t) {
      return "[]" === t ? {} : {
        "@id": t
      };
    },
        ut = function ut(t) {
      return {
        "@id": t
      };
    },
        st = "[",
        at = ke("[", !1),
        ct = "]",
        ot = ke("]", !1),
        ft = "(",
        it = ke("(", !1),
        ht = ")",
        lt = ke(")", !1),
        At = function At(t) {
      return {
        "@list": t
      };
    },
        pt = function pt(t, r) {
      return {
        "@value": t,
        "@language": r
      };
    },
        dt = "^^",
        gt = ke("^^", !1),
        vt = function vt(t, r) {
      if ("http://www.w3.org/2001/XMLSchema#boolean" === r && "true" === t) return !0;
      if ("http://www.w3.org/2001/XMLSchema#boolean" === r && "false" === t) return !1;
      if ("http://www.w3.org/2001/XMLSchema#integer" === r) return parseInt(t);
      if ("http://www.w3.org/2001/XMLSchema#double" === r) return parseFloat(t);
      var e = vn.resolve(r, !0);

      if (e) {
        var _n = r.split(":")[0];
        if ("http://www.w3.org/2001/XMLSchema#boolean" === e && "true" === t) return vn.decrement(_n), !0;
        if ("http://www.w3.org/2001/XMLSchema#boolean" === e && "false" === t) return vn.decrement(_n), !1;
        if ("http://www.w3.org/2001/XMLSchema#integer" === e) return vn.decrement(_n), parseInt(t);
        if ("http://www.w3.org/2001/XMLSchema#double" === e) return vn.decrement(_n), parseFloat(t);
      }

      return {
        "@value": t,
        "@type": r
      };
    },
        wt = "true",
        bt = ke("true", !1),
        Ct = function Ct() {
      return !0;
    },
        xt = "false",
        Ft = ke("false", !1),
        yt = function yt() {
      return !1;
    },
        mt = function mt(t) {
      return t + ":";
    },
        St = "<",
        jt = ke("<", !1),
        Et = /^[^\0- <>"{}|\^`\\]/,
        It = Be([["\0", " "], "<", ">", '"', "{", "}", "|", "^", "`", "\\"], !0, !1),
        $t = ">",
        Dt = ke(">", !1),
        Lt = function Lt(t) {
      var r = t.map(function (t) {
        return 65536 <= t.codePointAt(0) && t.codePointAt(0) <= 983039 ? "a" : 1 === t.length ? t : 6 === t.length ? String.fromCharCode("0x" + t.substring(2)) : 10 === t.length ? String.fromCodePoint("0x" + t.substring(2)) : t;
      }).join("");

      if (r.match(/^[^\u0000-\u0020<>"{}|^`\\]*$/)) {
        var e = t.join("");

        try {
          return vn.resolve(e);
        } catch (t) {
          _e("Invalid IRIREF " + e);
        }
      } else _e("Invalid IRIREF " + t.join("") + " / " + r);
    },
        Mt = ":",
        Rt = ke(":", !1),
        Xt = function Xt(t) {
      return t = t || "0", !1 === vn.hasPrefix(t) && _e("undefined prefix " + t), t;
    },
        Ot = function Ot(t) {
      return t || "";
    },
        Pt = function Pt(t, r) {
      return vn.increment(t), vn.resolve(t + ":" + r);
    },
        zt = "_:",
        Zt = ke("_:", !1),
        _t = /^[0-9]/,
        kt = Be([["0", "9"]], !1, !1),
        Bt = "@",
        Ut = ke("@", !1),
        Jt = /^[a-zA-Z]/,
        Nt = Be([["a", "z"], ["A", "Z"]], !1, !1),
        Tt = "-",
        qt = ke("-", !1),
        Gt = /^[a-zA-Z0-9]/,
        Ht = Be([["a", "z"], ["A", "Z"], ["0", "9"]], !1, !1),
        Kt = function Kt(t, r) {
      return "-" + r.join("");
    },
        Qt = function Qt(t, r) {
      return t.join("") + r.join("");
    },
        Vt = /^[+\-]/,
        Wt = Be(["+", "-"], !1, !1),
        Yt = function Yt(t) {
      return parseInt(t);
    },
        tr = function tr(t) {
      return {
        "@value": t,
        "@type": "http://www.w3.org/2001/XMLSchema#decimal"
      };
    },
        rr = function rr(t) {
      return {
        "@value": t,
        "@type": "http://www.w3.org/2001/XMLSchema#double"
      };
    },
        er = /^[eE]/,
        nr = Be(["e", "E"], !1, !1),
        ur = '"',
        sr = ke('"', !1),
        ar = /^[^"\\\n\r]/,
        cr = Be(['"', "\\", "\n", "\r"], !0, !1),
        or = "'",
        fr = ke("'", !1),
        ir = /^[^'\\\n\r]/,
        hr = Be(["'", "\\", "\n", "\r"], !0, !1),
        lr = "'''",
        Ar = ke("'''", !1),
        pr = /^[^'\\]/,
        dr = Be(["'", "\\"], !0, !1),
        gr = "''",
        vr = ke("''", !1),
        wr = function wr(t, r) {
      return "''" + r.join("");
    },
        br = function br(t, r) {
      return "'" + r.join("");
    },
        Cr = function Cr(t, r) {
      return t.join("") + r.join("");
    },
        xr = '"""',
        Fr = ke('"""', !1),
        yr = /^[^"\\]/,
        mr = Be(['"', "\\"], !0, !1),
        Sr = '""',
        jr = ke('""', !1),
        Er = function Er(t, r) {
      return '""' + r.join("");
    },
        Ir = function Ir(t, r) {
      return '"' + r.join("");
    },
        $r = "\\U",
        Dr = ke("\\U", !1),
        Lr = function Lr(t) {
      return String.fromCodePoint(parseInt(t.join(""), 16));
    },
        Mr = "\\u",
        Rr = ke("\\u", !1),
        Xr = function Xr(t) {
      return String.fromCharCode(parseInt(t.join(""), 16));
    },
        Or = "\\t",
        Pr = ke("\\t", !1),
        zr = function zr() {
      return "\t";
    },
        Zr = "\\b",
        _r = ke("\\b", !1),
        kr = function kr() {
      return "\b";
    },
        Br = "\\n",
        Ur = ke("\\n", !1),
        Jr = function Jr() {
      return "\n";
    },
        Nr = "\\r",
        Tr = ke("\\r", !1),
        qr = function qr() {
      return "\r";
    },
        Gr = "\\f",
        Hr = ke("\\f", !1),
        Kr = function Kr() {
      return "\f";
    },
        Qr = '\\"',
        Vr = ke('\\"', !1),
        Wr = function Wr() {
      return '"';
    },
        Yr = "\\'",
        te = ke("\\'", !1),
        re = function re() {
      return "'";
    },
        ee = "\\\\",
        ne = ke("\\\\", !1),
        ue = function ue() {
      return "\\";
    },
        se = /^[ \t\r\n]/,
        ae = Be([" ", "\t", "\r", "\n"], !1, !1),
        ce = function ce() {
      return "[]";
    },
        oe = /^[\uD800-\uDBFF]/,
        fe = Be([["\uD800", "\uDBFF"]], !1, !1),
        ie = /^[\uDC00-\uDFFF]/,
        he = Be([["\uDC00", "\uDFFF"]], !1, !1),
        le = function le(t, r) {
      return t + r;
    },
        Ae = /^[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        pe = Be([["A", "Z"], ["a", "z"], ["À", "Ö"], ["Ø", "ö"], ["ø", "˿"], ["Ͱ", "ͽ"], ["Ϳ", "῿"], ["‌", "‍"], ["⁰", "↏"], ["Ⰰ", "⿯"], ["、", "퟿"], ["豈", "﷏"], ["ﷰ", "�"]], !1, !1),
        de = "_",
        ge = ke("_", !1),
        ve = "·",
        we = ke("·", !1),
        be = /^[\u0300-\u036F]/,
        Ce = Be([["̀", "ͯ"]], !1, !1),
        xe = /^[\u203F-\u2040]/,
        Fe = Be([["‿", "⁀"]], !1, !1),
        ye = function ye(t, r, e, n) {
      return e.join("") + n.join("");
    },
        me = function me(t, r, e) {
      return t + r.join("") + e.join("");
    },
        Se = "%",
        je = ke("%", !1),
        Ee = /^[0-9A-Fa-f]/,
        Ie = Be([["0", "9"], ["A", "F"], ["a", "f"]], !1, !1),
        $e = "\\",
        De = ke("\\", !1),
        Le = /^[_~.!$&'()*+,;=\/?#@%\-]/,
        Me = Be(["_", "~", ".", "!", "$", "&", "'", "(", ")", "*", "+", ",", ";", "=", "/", "?", "#", "@", "%", "-"], !1, !1),
        Re = 0,
        Xe = 0,
        Oe = [{
      line: 1,
      column: 1
    }],
        Pe = 0,
        ze = [];

    if ("startRule" in r) {
      if (!(r.startRule in u)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
      s = u[r.startRule];
    }

    function _e(t, r) {
      throw function (t, r) {
        return new peg$SyntaxError(t, null, null, r);
      }(t, r = void 0 !== r ? r : Je(Xe, Re));
    }

    function ke(t, r) {
      return {
        type: "literal",
        text: t,
        ignoreCase: r
      };
    }

    function Be(t, r, e) {
      return {
        type: "class",
        parts: t,
        inverted: r,
        ignoreCase: e
      };
    }

    function Ue(r) {
      var e,
          n = Oe[r];
      if (n) return n;

      for (e = r - 1; !Oe[e];) {
        e--;
      }

      for (n = {
        line: (n = Oe[e]).line,
        column: n.column
      }; e < r;) {
        10 === t.charCodeAt(e) ? (n.line++, n.column = 1) : n.column++, e++;
      }

      return Oe[r] = n, n;
    }

    function Je(t, r) {
      var e = Ue(t),
          n = Ue(r);
      return {
        start: {
          offset: t,
          line: e.line,
          column: e.column
        },
        end: {
          offset: r,
          line: n.line,
          column: n.column
        }
      };
    }

    function Ne(t) {
      Re < Pe || (Re > Pe && (Pe = Re, ze = []), ze.push(t));
    }

    function Te(t, r, e) {
      return new peg$SyntaxError(peg$SyntaxError.buildMessage(t, r), t, r, e);
    }

    function qe() {
      var t, r, e, u;

      for (t = Re, r = [], e = Ge(); e !== n;) {
        r.push(e), e = Ge();
      }

      if (r !== n) {
        for (e = [], u = He(); u !== n;) {
          e.push(u), u = He();
        }

        e !== n ? (Xe = t, t = r = a(r)) : (Re = t, t = n);
      } else Re = t, t = n;

      return t;
    }

    function Ge() {
      var r, e, u, s;
      if ((r = function () {
        var r;
        (r = function () {
          var r, e, u, s, a, f, i, h, l;

          for (r = Re, e = [], u = He(); u !== n;) {
            e.push(u), u = He();
          }

          if (e !== n) {
            if (t.substr(Re, 7) === v ? (u = v, Re += 7) : (u = n, Ne(w)), u !== n) {
              for (s = [], a = He(); a !== n;) {
                s.push(a), a = He();
              }

              if (s !== n) {
                if ((a = an()) !== n) {
                  for (f = [], i = He(); i !== n;) {
                    f.push(i), i = He();
                  }

                  if (f !== n) {
                    if ((i = un()) !== n) {
                      for (h = [], l = He(); l !== n;) {
                        h.push(l), l = He();
                      }

                      h !== n ? (46 === t.charCodeAt(Re) ? (l = c, Re++) : (l = n, Ne(o)), l !== n ? (Xe = r, e = b(a, i), r = e) : (Re = r, r = n)) : (Re = r, r = n);
                    } else Re = r, r = n;
                  } else Re = r, r = n;
                } else Re = r, r = n;
              } else Re = r, r = n;
            } else Re = r, r = n;
          } else Re = r, r = n;
          return r;
        }()) === n && (r = function () {
          var r, e, u, s, a, f, i;
          r = Re, e = [], u = He();

          for (; u !== n;) {
            e.push(u), u = He();
          }

          if (e !== n) {
            if (t.substr(Re, 5) === C ? (u = C, Re += 5) : (u = n, Ne(x)), u !== n) {
              for (s = [], a = He(); a !== n;) {
                s.push(a), a = He();
              }

              if (s !== n) {
                if ((a = un()) !== n) {
                  for (f = [], i = He(); i !== n;) {
                    f.push(i), i = He();
                  }

                  f !== n ? (46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o)), i !== n ? (Xe = r, e = F(a), r = e) : (Re = r, r = n)) : (Re = r, r = n);
                } else Re = r, r = n;
              } else Re = r, r = n;
            } else Re = r, r = n;
          } else Re = r, r = n;
          return r;
        }()) === n && (r = function () {
          var r, e, u, s, a, c, o, f, i, h, l, A;
          r = Re, e = [], u = He();

          for (; u !== n;) {
            e.push(u), u = He();
          }

          if (e !== n) {
            if (L.test(t.charAt(Re)) ? (u = t.charAt(Re), Re++) : (u = n, Ne(M)), u !== n) {
              if (R.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(X)), s !== n) {
                if ($.test(t.charAt(Re)) ? (a = t.charAt(Re), Re++) : (a = n, Ne(D)), a !== n) {
                  if (O.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(P)), c !== n) {
                    if (z.test(t.charAt(Re)) ? (o = t.charAt(Re), Re++) : (o = n, Ne(Z)), o !== n) {
                      if (_.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(k)), f !== n) {
                        for (i = [], h = He(); h !== n;) {
                          i.push(h), h = He();
                        }

                        if (i !== n) {
                          if ((h = an()) !== n) {
                            for (l = [], A = He(); A !== n;) {
                              l.push(A), A = He();
                            }

                            l !== n && (A = un()) !== n ? (Xe = r, e = b(h, A), r = e) : (Re = r, r = n);
                          } else Re = r, r = n;
                        } else Re = r, r = n;
                      } else Re = r, r = n;
                    } else Re = r, r = n;
                  } else Re = r, r = n;
                } else Re = r, r = n;
              } else Re = r, r = n;
            } else Re = r, r = n;
          } else Re = r, r = n;
          return r;
        }()) === n && (r = function () {
          var r, e, u, s, a, c, o, f;
          r = Re, e = [], u = He();

          for (; u !== n;) {
            e.push(u), u = He();
          }

          if (e !== n) {
            if (y.test(t.charAt(Re)) ? (u = t.charAt(Re), Re++) : (u = n, Ne(m)), u !== n) {
              if (S.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(j)), s !== n) {
                if (E.test(t.charAt(Re)) ? (a = t.charAt(Re), Re++) : (a = n, Ne(I)), a !== n) {
                  if ($.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(D)), c !== n) {
                    for (o = [], f = He(); f !== n;) {
                      o.push(f), f = He();
                    }

                    o !== n && (f = un()) !== n ? (Xe = r, e = F(f), r = e) : (Re = r, r = n);
                  } else Re = r, r = n;
                } else Re = r, r = n;
              } else Re = r, r = n;
            } else Re = r, r = n;
          } else Re = r, r = n;
          return r;
        }());
        return r;
      }()) === n) if (r = Re, (e = function () {
        var t, r, e;
        t = Re, (r = function () {
          var t, r;
          return t = Re, (r = tn()) !== n && (Xe = t, r = rt(r)), (t = r) === n && (t = nn()) === n && (t = en()), t;
        }()) !== n && (e = Ke()) !== n ? (Xe = t, r = B(r, e), t = r) : (Re = t, t = n);
        t === n && (t = Re, (r = Ye()) !== n ? ((e = Ke()) === n && (e = null), e !== n ? (Xe = t, r = U(r, e), t = r) : (Re = t, t = n)) : (Re = t, t = n));
        return t;
      }()) !== n) {
        for (u = [], s = He(); s !== n;) {
          u.push(s), s = He();
        }

        u !== n ? (46 === t.charCodeAt(Re) ? (s = c, Re++) : (s = n, Ne(o)), s !== n ? (Xe = r, r = e = f(e)) : (Re = r, r = n)) : (Re = r, r = n);
      } else Re = r, r = n;
      return r;
    }

    function He() {
      var r;
      return (r = function () {
        var r;
        se.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(ae));
        return r;
      }()) === n && (r = function () {
        var r, e, u, s;

        if (r = Re, 35 === t.charCodeAt(Re) ? (e = i, Re++) : (e = n, Ne(h)), e !== n) {
          for (u = [], l.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(A)); s !== n;) {
            u.push(s), l.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(A));
          }

          u !== n ? (10 === t.charCodeAt(Re) ? (s = p, Re++) : (s = n, Ne(d)), s !== n ? (Xe = r, r = e = g(u)) : (Re = r, r = n)) : (Re = r, r = n);
        } else Re = r, r = n;

        return r;
      }()), r;
    }

    function Ke() {
      var r, e, u, s, a, c, o, f, i, h;
      if (r = Re, (e = Ve()) !== n) {
        if ((u = Qe()) !== n) {
          for (s = [], a = Re, c = [], o = He(); o !== n;) {
            c.push(o), o = He();
          }

          for (c !== n ? (59 === t.charCodeAt(Re) ? (o = J, Re++) : (o = n, Ne(N)), o !== n ? (f = Re, (i = Ve()) !== n && (h = Qe()) !== n ? (Xe = f, f = i = T(e, u, i, h)) : (Re = f, f = n), f === n && (f = null), f !== n ? (Xe = a, a = c = q(e, u, f)) : (Re = a, a = n)) : (Re = a, a = n)) : (Re = a, a = n); a !== n;) {
            for (s.push(a), a = Re, c = [], o = He(); o !== n;) {
              c.push(o), o = He();
            }

            c !== n ? (59 === t.charCodeAt(Re) ? (o = J, Re++) : (o = n, Ne(N)), o !== n ? (f = Re, (i = Ve()) !== n && (h = Qe()) !== n ? (Xe = f, f = i = T(e, u, i, h)) : (Re = f, f = n), f === n && (f = null), f !== n ? (Xe = a, a = c = q(e, u, f)) : (Re = a, a = n)) : (Re = a, a = n)) : (Re = a, a = n);
          }

          s !== n ? (Xe = r, r = e = G(e, u, s)) : (Re = r, r = n);
        } else Re = r, r = n;
      } else Re = r, r = n;
      return r;
    }

    function Qe() {
      var r, e, u, s, a, c, o;

      if (r = Re, (e = We()) !== n) {
        for (u = [], s = Re, a = [], c = He(); c !== n;) {
          a.push(c), c = He();
        }

        for (a !== n ? (44 === t.charCodeAt(Re) ? (c = H, Re++) : (c = n, Ne(K)), c !== n && (o = We()) !== n ? (Xe = s, s = a = Q(e, o)) : (Re = s, s = n)) : (Re = s, s = n); s !== n;) {
          for (u.push(s), s = Re, a = [], c = He(); c !== n;) {
            a.push(c), c = He();
          }

          a !== n ? (44 === t.charCodeAt(Re) ? (c = H, Re++) : (c = n, Ne(K)), c !== n && (o = We()) !== n ? (Xe = s, s = a = Q(e, o)) : (Re = s, s = n)) : (Re = s, s = n);
        }

        u !== n ? (Xe = r, r = e = V(e, u)) : (Re = r, r = n);
      } else Re = r, r = n;

      return r;
    }

    function Ve() {
      var r, e, u;

      if (r = Re, (e = function () {
        var t, r, e;
        t = Re, r = [], e = He();

        for (; e !== n;) {
          r.push(e), e = He();
        }

        r !== n && (e = en()) !== n ? (Xe = t, r = f(e), t = r) : (Re = t, t = n);
        return t;
      }()) !== n && (Xe = r, e = f(e)), (r = e) === n) {
        for (r = Re, e = [], u = He(); u !== n;) {
          e.push(u), u = He();
        }

        e !== n ? (97 === t.charCodeAt(Re) ? (u = W, Re++) : (u = n, Ne(Y)), u !== n ? (Xe = r, r = e = tt()) : (Re = r, r = n)) : (Re = r, r = n);
      }

      return r;
    }

    function We() {
      var r, e;
      return (r = function () {
        var r;
        (r = function () {
          var r, e, u, s, a, c, o;

          for (r = Re, e = [], u = He(); u !== n;) {
            e.push(u), u = He();
          }

          if (e !== n) {
            if ((u = rn()) !== n) {
              for (s = [], a = He(); a !== n;) {
                s.push(a), a = He();
              }

              s !== n && (a = function () {
                var r, e, u, s, a, c, o, f;

                if (r = Re, 64 === t.charCodeAt(Re) ? (e = Bt, Re++) : (e = n, Ne(Ut)), e !== n) {
                  if (u = [], Jt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Nt)), s !== n) for (; s !== n;) {
                    u.push(s), Jt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Nt));
                  } else u = n;

                  if (u !== n) {
                    if (s = [], a = Re, 45 === t.charCodeAt(Re) ? (c = Tt, Re++) : (c = n, Ne(qt)), c !== n) {
                      if (o = [], Gt.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(Ht)), f !== n) for (; f !== n;) {
                        o.push(f), Gt.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(Ht));
                      } else o = n;
                      o !== n ? (Xe = a, c = Kt(u, o), a = c) : (Re = a, a = n);
                    } else Re = a, a = n;

                    for (; a !== n;) {
                      if (s.push(a), a = Re, 45 === t.charCodeAt(Re) ? (c = Tt, Re++) : (c = n, Ne(qt)), c !== n) {
                        if (o = [], Gt.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(Ht)), f !== n) for (; f !== n;) {
                          o.push(f), Gt.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(Ht));
                        } else o = n;
                        o !== n ? (Xe = a, c = Kt(u, o), a = c) : (Re = a, a = n);
                      } else Re = a, a = n;
                    }

                    s !== n ? (Xe = r, e = Qt(u, s), r = e) : (Re = r, r = n);
                  } else Re = r, r = n;
                } else Re = r, r = n;

                return r;
              }()) !== n ? (Xe = r, e = pt(u, a), r = e) : (Re = r, r = n);
            } else Re = r, r = n;
          } else Re = r, r = n;

          if (r === n) {
            for (r = Re, e = [], u = He(); u !== n;) {
              e.push(u), u = He();
            }

            if (e !== n) {
              if ((u = rn()) !== n) {
                for (s = [], a = He(); a !== n;) {
                  s.push(a), a = He();
                }

                if (s !== n) {
                  if (t.substr(Re, 2) === dt ? (a = dt, Re += 2) : (a = n, Ne(gt)), a !== n) {
                    for (c = [], o = He(); o !== n;) {
                      c.push(o), o = He();
                    }

                    c !== n && (o = en()) !== n ? (Xe = r, e = vt(u, o), r = e) : (Re = r, r = n);
                  } else Re = r, r = n;
                } else Re = r, r = n;
              } else Re = r, r = n;
            } else Re = r, r = n;

            if (r === n) {
              for (r = Re, e = [], u = He(); u !== n;) {
                e.push(u), u = He();
              }

              e !== n && (u = rn()) !== n ? (Xe = r, e = f(u), r = e) : (Re = r, r = n);
            }
          }

          return r;
        }()) === n && (r = function () {
          var r, e, u;
          r = Re, e = [], u = He();

          for (; u !== n;) {
            e.push(u), u = He();
          }

          e !== n ? ((u = function () {
            var r, e, u, s, a, f, i, h, l;
            r = Re, e = Re, u = Re, Vt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Wt));
            s === n && (s = null);

            if (s !== n) {
              if (a = Re, f = [], _t.test(t.charAt(Re)) ? (i = t.charAt(Re), Re++) : (i = n, Ne(kt)), i !== n) for (; i !== n;) {
                f.push(i), _t.test(t.charAt(Re)) ? (i = t.charAt(Re), Re++) : (i = n, Ne(kt));
              } else f = n;
              if (f !== n) {
                if (46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o)), i !== n) {
                  for (h = [], _t.test(t.charAt(Re)) ? (l = t.charAt(Re), Re++) : (l = n, Ne(kt)); l !== n;) {
                    h.push(l), _t.test(t.charAt(Re)) ? (l = t.charAt(Re), Re++) : (l = n, Ne(kt));
                  }

                  h !== n && (l = cn()) !== n ? a = f = [f, i, h, l] : (Re = a, a = n);
                } else Re = a, a = n;
              } else Re = a, a = n;

              if (a === n) {
                if (a = Re, 46 === t.charCodeAt(Re) ? (f = c, Re++) : (f = n, Ne(o)), f !== n) {
                  if (i = [], _t.test(t.charAt(Re)) ? (h = t.charAt(Re), Re++) : (h = n, Ne(kt)), h !== n) for (; h !== n;) {
                    i.push(h), _t.test(t.charAt(Re)) ? (h = t.charAt(Re), Re++) : (h = n, Ne(kt));
                  } else i = n;
                  i !== n && (h = cn()) !== n ? a = f = [f, i, h] : (Re = a, a = n);
                } else Re = a, a = n;

                if (a === n) {
                  if (a = Re, f = [], _t.test(t.charAt(Re)) ? (i = t.charAt(Re), Re++) : (i = n, Ne(kt)), i !== n) for (; i !== n;) {
                    f.push(i), _t.test(t.charAt(Re)) ? (i = t.charAt(Re), Re++) : (i = n, Ne(kt));
                  } else f = n;
                  f !== n && (i = cn()) !== n ? a = f = [f, i] : (Re = a, a = n);
                }
              }

              a !== n ? u = s = [s, a] : (Re = u, u = n);
            } else Re = u, u = n;

            e = u !== n ? t.substring(e, Re) : u;
            e !== n && (Xe = r, e = rr(e));
            return r = e;
          }()) === n && (u = function () {
            var r, e, u, s, a, f, i, h;
            r = Re, e = Re, u = Re, Vt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Wt));
            s === n && (s = null);

            if (s !== n) {
              for (a = [], _t.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(kt)); f !== n;) {
                a.push(f), _t.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(kt));
              }

              if (a !== n) {
                if (46 === t.charCodeAt(Re) ? (f = c, Re++) : (f = n, Ne(o)), f !== n) {
                  if (i = [], _t.test(t.charAt(Re)) ? (h = t.charAt(Re), Re++) : (h = n, Ne(kt)), h !== n) for (; h !== n;) {
                    i.push(h), _t.test(t.charAt(Re)) ? (h = t.charAt(Re), Re++) : (h = n, Ne(kt));
                  } else i = n;
                  i !== n ? u = s = [s, a, f, i] : (Re = u, u = n);
                } else Re = u, u = n;
              } else Re = u, u = n;
            } else Re = u, u = n;

            e = u !== n ? t.substring(e, Re) : u;
            e !== n && (Xe = r, e = tr(e));
            return r = e;
          }()) === n && (u = function () {
            var r, e, u, s, a, c;
            r = Re, e = Re, u = Re, Vt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Wt));
            s === n && (s = null);

            if (s !== n) {
              if (a = [], _t.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(kt)), c !== n) for (; c !== n;) {
                a.push(c), _t.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(kt));
              } else a = n;
              a !== n ? u = s = [s, a] : (Re = u, u = n);
            } else Re = u, u = n;

            e = u !== n ? t.substring(e, Re) : u;
            e !== n && (Xe = r, e = Yt(e));
            return r = e;
          }()), u !== n ? (Xe = r, e = f(u), r = e) : (Re = r, r = n)) : (Re = r, r = n);
          return r;
        }()) === n && (r = function () {
          var r, e, u;
          r = Re, e = [], u = He();

          for (; u !== n;) {
            e.push(u), u = He();
          }

          e !== n ? (t.substr(Re, 4) === wt ? (u = wt, Re += 4) : (u = n, Ne(bt)), u !== n ? (Xe = r, e = Ct(), r = e) : (Re = r, r = n)) : (Re = r, r = n);

          if (r === n) {
            for (r = Re, e = [], u = He(); u !== n;) {
              e.push(u), u = He();
            }

            e !== n ? (t.substr(Re, 5) === xt ? (u = xt, Re += 5) : (u = n, Ne(Ft)), u !== n ? (Xe = r, e = yt(), r = e) : (Re = r, r = n)) : (Re = r, r = n);
          }

          return r;
        }());
        return r;
      }()) === n && (r = Re, (e = tn()) !== n && (Xe = r, e = et(e)), (r = e) === n && (r = Re, (e = nn()) !== n && (Xe = r, e = nt(e)), (r = e) === n && (r = Re, (e = Ye()) !== n && (Xe = r, e = f(e)), (r = e) === n && (r = Re, (e = en()) !== n && (Xe = r, e = ut(e)), r = e)))), r;
    }

    function Ye() {
      var r, e, u, s, a, c;

      for (r = Re, e = [], u = He(); u !== n;) {
        e.push(u), u = He();
      }

      if (e !== n) {
        if (91 === t.charCodeAt(Re) ? (u = st, Re++) : (u = n, Ne(at)), u !== n) {
          if ((s = Ke()) !== n) {
            for (a = [], c = He(); c !== n;) {
              a.push(c), c = He();
            }

            a !== n ? (93 === t.charCodeAt(Re) ? (c = ct, Re++) : (c = n, Ne(ot)), c !== n ? (Xe = r, r = e = f(s)) : (Re = r, r = n)) : (Re = r, r = n);
          } else Re = r, r = n;
        } else Re = r, r = n;
      } else Re = r, r = n;
      return r;
    }

    function tn() {
      var r, e, u, s, a, c;

      for (r = Re, e = [], u = He(); u !== n;) {
        e.push(u), u = He();
      }

      if (e !== n) {
        if (40 === t.charCodeAt(Re) ? (u = ft, Re++) : (u = n, Ne(it)), u !== n) {
          for (s = [], a = We(); a !== n;) {
            s.push(a), a = We();
          }

          if (s !== n) {
            for (a = [], c = He(); c !== n;) {
              a.push(c), c = He();
            }

            a !== n ? (41 === t.charCodeAt(Re) ? (c = ht, Re++) : (c = n, Ne(lt)), c !== n ? (Xe = r, r = e = At(s)) : (Re = r, r = n)) : (Re = r, r = n);
          } else Re = r, r = n;
        } else Re = r, r = n;
      } else Re = r, r = n;
      return r;
    }

    function rn() {
      var r, e, u;

      for (r = Re, e = [], u = He(); u !== n;) {
        e.push(u), u = He();
      }

      return e !== n ? ((u = function () {
        var r, e, u, s, a, c, o, f;
        r = Re, t.substr(Re, 3) === lr ? (e = lr, Re += 3) : (e = n, Ne(Ar));

        if (e !== n) {
          for (u = [], pr.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(dr)), s === n && (s = fn()) === n && (s = on()); s !== n;) {
            u.push(s), pr.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(dr)), s === n && (s = fn()) === n && (s = on());
          }

          if (u !== n) {
            if (s = [], a = Re, t.substr(Re, 2) === gr ? (c = gr, Re += 2) : (c = n, Ne(vr)), c !== n) {
              if (o = [], pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                o.push(f), pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on());
              } else o = n;
              o !== n ? (Xe = a, c = wr(u, o), a = c) : (Re = a, a = n);
            } else Re = a, a = n;

            if (a === n) if (a = Re, 39 === t.charCodeAt(Re) ? (c = or, Re++) : (c = n, Ne(fr)), c !== n) {
              if (o = [], pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                o.push(f), pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on());
              } else o = n;
              o !== n ? (Xe = a, c = br(u, o), a = c) : (Re = a, a = n);
            } else Re = a, a = n;

            for (; a !== n;) {
              if (s.push(a), a = Re, t.substr(Re, 2) === gr ? (c = gr, Re += 2) : (c = n, Ne(vr)), c !== n) {
                if (o = [], pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                  o.push(f), pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on());
                } else o = n;
                o !== n ? (Xe = a, c = wr(u, o), a = c) : (Re = a, a = n);
              } else Re = a, a = n;

              if (a === n) if (a = Re, 39 === t.charCodeAt(Re) ? (c = or, Re++) : (c = n, Ne(fr)), c !== n) {
                if (o = [], pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                  o.push(f), pr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(dr)), f === n && (f = fn()) === n && (f = on());
                } else o = n;
                o !== n ? (Xe = a, c = br(u, o), a = c) : (Re = a, a = n);
              } else Re = a, a = n;
            }

            s !== n ? (t.substr(Re, 3) === lr ? (a = lr, Re += 3) : (a = n, Ne(Ar)), a !== n ? (Xe = r, e = Cr(u, s), r = e) : (Re = r, r = n)) : (Re = r, r = n);
          } else Re = r, r = n;
        } else Re = r, r = n;

        return r;
      }()) === n && (u = function () {
        var r, e, u, s, a, c, o, f;
        r = Re, t.substr(Re, 3) === xr ? (e = xr, Re += 3) : (e = n, Ne(Fr));

        if (e !== n) {
          for (u = [], yr.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(mr)), s === n && (s = fn()) === n && (s = on()); s !== n;) {
            u.push(s), yr.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(mr)), s === n && (s = fn()) === n && (s = on());
          }

          if (u !== n) {
            if (s = [], a = Re, t.substr(Re, 2) === Sr ? (c = Sr, Re += 2) : (c = n, Ne(jr)), c !== n) {
              if (o = [], yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                o.push(f), yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on());
              } else o = n;
              o !== n ? (Xe = a, c = Er(u, o), a = c) : (Re = a, a = n);
            } else Re = a, a = n;

            if (a === n) if (a = Re, 34 === t.charCodeAt(Re) ? (c = ur, Re++) : (c = n, Ne(sr)), c !== n) {
              if (o = [], yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                o.push(f), yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on());
              } else o = n;
              o !== n ? (Xe = a, c = Ir(u, o), a = c) : (Re = a, a = n);
            } else Re = a, a = n;

            for (; a !== n;) {
              if (s.push(a), a = Re, t.substr(Re, 2) === Sr ? (c = Sr, Re += 2) : (c = n, Ne(jr)), c !== n) {
                if (o = [], yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                  o.push(f), yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on());
                } else o = n;
                o !== n ? (Xe = a, c = Er(u, o), a = c) : (Re = a, a = n);
              } else Re = a, a = n;

              if (a === n) if (a = Re, 34 === t.charCodeAt(Re) ? (c = ur, Re++) : (c = n, Ne(sr)), c !== n) {
                if (o = [], yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on()), f !== n) for (; f !== n;) {
                  o.push(f), yr.test(t.charAt(Re)) ? (f = t.charAt(Re), Re++) : (f = n, Ne(mr)), f === n && (f = fn()) === n && (f = on());
                } else o = n;
                o !== n ? (Xe = a, c = Ir(u, o), a = c) : (Re = a, a = n);
              } else Re = a, a = n;
            }

            s !== n ? (t.substr(Re, 3) === xr ? (a = xr, Re += 3) : (a = n, Ne(Fr)), a !== n ? (Xe = r, e = Cr(u, s), r = e) : (Re = r, r = n)) : (Re = r, r = n);
          } else Re = r, r = n;
        } else Re = r, r = n;

        return r;
      }()) === n && (u = function () {
        var r, e, u, s;
        r = Re, 39 === t.charCodeAt(Re) ? (e = or, Re++) : (e = n, Ne(fr));

        if (e !== n) {
          for (u = [], ir.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(hr)), s === n && (s = fn()) === n && (s = on()); s !== n;) {
            u.push(s), ir.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(hr)), s === n && (s = fn()) === n && (s = on());
          }

          u !== n ? (39 === t.charCodeAt(Re) ? (s = or, Re++) : (s = n, Ne(fr)), s !== n ? (Xe = r, e = g(u), r = e) : (Re = r, r = n)) : (Re = r, r = n);
        } else Re = r, r = n;

        return r;
      }()) === n && (u = function () {
        var r, e, u, s;
        r = Re, 34 === t.charCodeAt(Re) ? (e = ur, Re++) : (e = n, Ne(sr));

        if (e !== n) {
          for (u = [], ar.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(cr)), s === n && (s = fn()) === n && (s = on()); s !== n;) {
            u.push(s), ar.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(cr)), s === n && (s = fn()) === n && (s = on());
          }

          u !== n ? (34 === t.charCodeAt(Re) ? (s = ur, Re++) : (s = n, Ne(sr)), s !== n ? (Xe = r, e = g(u), r = e) : (Re = r, r = n)) : (Re = r, r = n);
        } else Re = r, r = n;

        return r;
      }()), u !== n ? (Xe = r, r = e = f(u)) : (Re = r, r = n)) : (Re = r, r = n), r;
    }

    function en() {
      var r, e, u;

      for (r = Re, e = [], u = He(); u !== n;) {
        e.push(u), u = He();
      }

      if (e !== n && (u = un()) !== n ? (Xe = r, r = e = f(u)) : (Re = r, r = n), r === n) {
        for (r = Re, e = [], u = He(); u !== n;) {
          e.push(u), u = He();
        }

        e !== n && (u = function () {
          var r, e;
          (r = function () {
            var r, e, u;
            return r = Re, (e = sn()) !== n && (u = function () {
              var r, e, u, s, a, f, i, h;

              if (r = Re, (e = ln()) === n && (58 === t.charCodeAt(Re) ? (e = Mt, Re++) : (e = n, Ne(Rt)), e === n && (_t.test(t.charAt(Re)) ? (e = t.charAt(Re), Re++) : (e = n, Ne(kt)), e === n && (e = dn()))), e !== n) {
                for (u = [], (s = An()) === n && (58 === t.charCodeAt(Re) ? (s = Mt, Re++) : (s = n, Ne(Rt)), s === n && (s = dn())); s !== n;) {
                  u.push(s), (s = An()) === n && (58 === t.charCodeAt(Re) ? (s = Mt, Re++) : (s = n, Ne(Rt)), s === n && (s = dn()));
                }

                if (u !== n) {
                  if (s = [], a = Re, f = [], 46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o)), i !== n) for (; i !== n;) {
                    f.push(i), 46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o));
                  } else f = n;

                  if (f !== n) {
                    if (i = [], (h = An()) === n && (58 === t.charCodeAt(Re) ? (h = Mt, Re++) : (h = n, Ne(Rt)), h === n && (h = dn())), h !== n) for (; h !== n;) {
                      i.push(h), (h = An()) === n && (58 === t.charCodeAt(Re) ? (h = Mt, Re++) : (h = n, Ne(Rt)), h === n && (h = dn()));
                    } else i = n;
                    i !== n ? (Xe = a, f = ye(e, u, f, i), a = f) : (Re = a, a = n);
                  } else Re = a, a = n;

                  for (; a !== n;) {
                    if (s.push(a), a = Re, f = [], 46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o)), i !== n) for (; i !== n;) {
                      f.push(i), 46 === t.charCodeAt(Re) ? (i = c, Re++) : (i = n, Ne(o));
                    } else f = n;

                    if (f !== n) {
                      if (i = [], (h = An()) === n && (58 === t.charCodeAt(Re) ? (h = Mt, Re++) : (h = n, Ne(Rt)), h === n && (h = dn())), h !== n) for (; h !== n;) {
                        i.push(h), (h = An()) === n && (58 === t.charCodeAt(Re) ? (h = Mt, Re++) : (h = n, Ne(Rt)), h === n && (h = dn()));
                      } else i = n;
                      i !== n ? (Xe = a, f = ye(e, u, f, i), a = f) : (Re = a, a = n);
                    } else Re = a, a = n;
                  }

                  s !== n ? (Xe = r, e = me(e, u, s), r = e) : (Re = r, r = n);
                } else Re = r, r = n;
              } else Re = r, r = n;

              return r;
            }()) !== n ? (Xe = r, e = Pt(e, u), r = e) : (Re = r, r = n), r;
          }()) === n && (r = Re, (e = sn()) !== n && (Xe = r, e = mt(e)), r = e);
          return r;
        }()) !== n ? (Xe = r, r = e = f(u)) : (Re = r, r = n);
      }

      return r;
    }

    function nn() {
      var r, e, u;

      for (r = Re, e = [], u = He(); u !== n;) {
        e.push(u), u = He();
      }

      if (e !== n && (u = function () {
        var r, e, u, s, a, f, i, h, l, A;
        r = Re, e = Re, t.substr(Re, 2) === zt ? (u = zt, Re += 2) : (u = n, Ne(Zt));
        if (u !== n) {
          if ((s = ln()) === n && (_t.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(kt))), s !== n) {
            for (a = [], f = An(); f !== n;) {
              a.push(f), f = An();
            }

            if (a !== n) {
              if (f = [], i = Re, h = [], 46 === t.charCodeAt(Re) ? (l = c, Re++) : (l = n, Ne(o)), l !== n) for (; l !== n;) {
                h.push(l), 46 === t.charCodeAt(Re) ? (l = c, Re++) : (l = n, Ne(o));
              } else h = n;

              if (h !== n) {
                if (l = [], (A = An()) !== n) for (; A !== n;) {
                  l.push(A), A = An();
                } else l = n;
                l !== n ? i = h = [h, l] : (Re = i, i = n);
              } else Re = i, i = n;

              for (; i !== n;) {
                if (f.push(i), i = Re, h = [], 46 === t.charCodeAt(Re) ? (l = c, Re++) : (l = n, Ne(o)), l !== n) for (; l !== n;) {
                  h.push(l), 46 === t.charCodeAt(Re) ? (l = c, Re++) : (l = n, Ne(o));
                } else h = n;

                if (h !== n) {
                  if (l = [], (A = An()) !== n) for (; A !== n;) {
                    l.push(A), A = An();
                  } else l = n;
                  l !== n ? i = h = [h, l] : (Re = i, i = n);
                } else Re = i, i = n;
              }

              f !== n ? e = u = [u, s, a, f] : (Re = e, e = n);
            } else Re = e, e = n;
          } else Re = e, e = n;
        } else Re = e, e = n;
        r = e !== n ? t.substring(r, Re) : e;
        return r;
      }()) !== n ? (Xe = r, r = e = f(u)) : (Re = r, r = n), r === n) {
        for (r = Re, e = [], u = He(); u !== n;) {
          e.push(u), u = He();
        }

        e !== n && (u = function () {
          var r, e, u, s;
          r = Re, 91 === t.charCodeAt(Re) ? (e = st, Re++) : (e = n, Ne(at));

          if (e !== n) {
            for (u = [], s = He(); s !== n;) {
              u.push(s), s = He();
            }

            u !== n ? (93 === t.charCodeAt(Re) ? (s = ct, Re++) : (s = n, Ne(ot)), s !== n ? (Xe = r, e = ce(), r = e) : (Re = r, r = n)) : (Re = r, r = n);
          } else Re = r, r = n;

          return r;
        }()) !== n ? (Xe = r, r = e = f(u)) : (Re = r, r = n);
      }

      return r;
    }

    function un() {
      var r, e, u, s;

      if (r = Re, 60 === t.charCodeAt(Re) ? (e = St, Re++) : (e = n, Ne(jt)), e !== n) {
        for (u = [], Et.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(It)), s === n && (s = on()); s !== n;) {
          u.push(s), Et.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(It)), s === n && (s = on());
        }

        u !== n ? (62 === t.charCodeAt(Re) ? (s = $t, Re++) : (s = n, Ne(Dt)), s !== n ? (Xe = r, r = e = Lt(u)) : (Re = r, r = n)) : (Re = r, r = n);
      } else Re = r, r = n;

      return r;
    }

    function sn() {
      var r, e, u;
      return r = Re, (e = pn()) === n && (e = null), e !== n ? (58 === t.charCodeAt(Re) ? (u = Mt, Re++) : (u = n, Ne(Rt)), u !== n ? (Xe = r, r = e = Xt(e)) : (Re = r, r = n)) : (Re = r, r = n), r;
    }

    function an() {
      var r, e, u;
      return r = Re, (e = pn()) === n && (e = null), e !== n ? (58 === t.charCodeAt(Re) ? (u = Mt, Re++) : (u = n, Ne(Rt)), u !== n ? (Xe = r, r = e = Ot(e)) : (Re = r, r = n)) : (Re = r, r = n), r;
    }

    function cn() {
      var r, e, u, s, a, c;
      if (r = Re, e = Re, er.test(t.charAt(Re)) ? (u = t.charAt(Re), Re++) : (u = n, Ne(nr)), u !== n) {
        if (Vt.test(t.charAt(Re)) ? (s = t.charAt(Re), Re++) : (s = n, Ne(Wt)), s === n && (s = null), s !== n) {
          if (a = [], _t.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(kt)), c !== n) for (; c !== n;) {
            a.push(c), _t.test(t.charAt(Re)) ? (c = t.charAt(Re), Re++) : (c = n, Ne(kt));
          } else a = n;
          a !== n ? e = u = [u, s, a] : (Re = e, e = n);
        } else Re = e, e = n;
      } else Re = e, e = n;
      return r = e !== n ? t.substring(r, Re) : e;
    }

    function on() {
      var r, e, u, s, a, c, o, f, i, h, l;
      return r = Re, t.substr(Re, 2) === $r ? (e = $r, Re += 2) : (e = n, Ne(Dr)), e !== n ? (u = Re, (s = gn()) !== n && (a = gn()) !== n && (c = gn()) !== n && (o = gn()) !== n && (f = gn()) !== n && (i = gn()) !== n && (h = gn()) !== n && (l = gn()) !== n ? u = s = [s, a, c, o, f, i, h, l] : (Re = u, u = n), u !== n ? (Xe = r, r = e = Lr(u)) : (Re = r, r = n)) : (Re = r, r = n), r === n && (r = Re, t.substr(Re, 2) === Mr ? (e = Mr, Re += 2) : (e = n, Ne(Rr)), e !== n ? (u = Re, (s = gn()) !== n && (a = gn()) !== n && (c = gn()) !== n && (o = gn()) !== n ? u = s = [s, a, c, o] : (Re = u, u = n), u !== n ? (Xe = r, r = e = Xr(u)) : (Re = r, r = n)) : (Re = r, r = n)), r;
    }

    function fn() {
      var r, e;
      return r = Re, t.substr(Re, 2) === Or ? (e = Or, Re += 2) : (e = n, Ne(Pr)), e !== n && (Xe = r, e = zr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Zr ? (e = Zr, Re += 2) : (e = n, Ne(_r)), e !== n && (Xe = r, e = kr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Br ? (e = Br, Re += 2) : (e = n, Ne(Ur)), e !== n && (Xe = r, e = Jr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Nr ? (e = Nr, Re += 2) : (e = n, Ne(Tr)), e !== n && (Xe = r, e = qr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Gr ? (e = Gr, Re += 2) : (e = n, Ne(Hr)), e !== n && (Xe = r, e = Kr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Qr ? (e = Qr, Re += 2) : (e = n, Ne(Vr)), e !== n && (Xe = r, e = Wr()), (r = e) === n && (r = Re, t.substr(Re, 2) === Yr ? (e = Yr, Re += 2) : (e = n, Ne(te)), e !== n && (Xe = r, e = re()), (r = e) === n && (r = Re, t.substr(Re, 2) === ee ? (e = ee, Re += 2) : (e = n, Ne(ne)), e !== n && (Xe = r, e = ue()), r = e))))))), r;
    }

    function hn() {
      var r, e, u;
      return r = Re, oe.test(t.charAt(Re)) ? (e = t.charAt(Re), Re++) : (e = n, Ne(fe)), e !== n ? (ie.test(t.charAt(Re)) ? (u = t.charAt(Re), Re++) : (u = n, Ne(he)), u !== n ? (Xe = r, r = e = le(e, u)) : (Re = r, r = n)) : (Re = r, r = n), r === n && (Ae.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(pe))), r;
    }

    function ln() {
      var r;
      return (r = hn()) === n && (95 === t.charCodeAt(Re) ? (r = de, Re++) : (r = n, Ne(ge))), r;
    }

    function An() {
      var r;
      return (r = ln()) === n && (45 === t.charCodeAt(Re) ? (r = Tt, Re++) : (r = n, Ne(qt)), r === n && (_t.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(kt)), r === n && (183 === t.charCodeAt(Re) ? (r = ve, Re++) : (r = n, Ne(we)), r === n && (be.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(Ce)), r === n && (xe.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(Fe))))))), r;
    }

    function pn() {
      var r, e, u, s, a, f, i, h, l;

      if (r = Re, e = Re, (u = hn()) !== n) {
        for (s = [], a = An(); a !== n;) {
          s.push(a), a = An();
        }

        if (s !== n) {
          if (a = [], f = Re, i = [], 46 === t.charCodeAt(Re) ? (h = c, Re++) : (h = n, Ne(o)), h !== n) for (; h !== n;) {
            i.push(h), 46 === t.charCodeAt(Re) ? (h = c, Re++) : (h = n, Ne(o));
          } else i = n;

          if (i !== n) {
            if (h = [], (l = An()) !== n) for (; l !== n;) {
              h.push(l), l = An();
            } else h = n;
            h !== n ? f = i = [i, h] : (Re = f, f = n);
          } else Re = f, f = n;

          for (; f !== n;) {
            if (a.push(f), f = Re, i = [], 46 === t.charCodeAt(Re) ? (h = c, Re++) : (h = n, Ne(o)), h !== n) for (; h !== n;) {
              i.push(h), 46 === t.charCodeAt(Re) ? (h = c, Re++) : (h = n, Ne(o));
            } else i = n;

            if (i !== n) {
              if (h = [], (l = An()) !== n) for (; l !== n;) {
                h.push(l), l = An();
              } else h = n;
              h !== n ? f = i = [i, h] : (Re = f, f = n);
            } else Re = f, f = n;
          }

          a !== n ? e = u = [u, s, a] : (Re = e, e = n);
        } else Re = e, e = n;
      } else Re = e, e = n;

      return r = e !== n ? t.substring(r, Re) : e;
    }

    function dn() {
      var r;
      return (r = function () {
        var r, e, u, s, a;
        r = Re, e = Re, 37 === t.charCodeAt(Re) ? (u = Se, Re++) : (u = n, Ne(je));
        u !== n && (s = gn()) !== n && (a = gn()) !== n ? e = u = [u, s, a] : (Re = e, e = n);
        r = e !== n ? t.substring(r, Re) : e;
        return r;
      }()) === n && (r = function () {
        var r, e, u;
        r = Re, 92 === t.charCodeAt(Re) ? (e = $e, Re++) : (e = n, Ne(De));
        e !== n ? (Le.test(t.charAt(Re)) ? (u = t.charAt(Re), Re++) : (u = n, Ne(Me)), u !== n ? (Xe = r, e = f(u), r = e) : (Re = r, r = n)) : (Re = r, r = n);
        return r;
      }()), r;
    }

    function gn() {
      var r;
      return Ee.test(t.charAt(Re)) ? (r = t.charAt(Re), Re++) : (r = n, Ne(Ie)), r;
    }

    var vn = {
      base: [],
      data: {},
      addBase: function addBase(t) {
        if (0 === vn.base.length) return void vn.base.push(t);
        var r = vn.base[vn.base.length - 1];
        r !== t && vn.base.push(new URL(t, r).toString());
      },
      addPrefix: function addPrefix(t, r) {
        var e = vn.data[t];
        void 0 === e ? vn.data[t] = [{
          uri: r,
          count: 0
        }] : e[e.length - 1].uri !== r && e.push({
          uri: r,
          count: 0
        });
      },
      hasPrefix: function hasPrefix(t) {
        return void 0 !== this.data[t];
      },
      resolve: function resolve(t, e) {
        var n = Object.keys(vn.data).find(function (r) {
          return 0 === t.indexOf(r + ":");
        });

        if (void 0 !== n) {
          var _r2 = vn.data[n];
          if (1 === _r2.length && !0 !== e) return t;
          var _u = _r2[_r2.length - 1].uri;
          return t.replace(n + ":", _u);
        }

        var u = 0 === vn.base.length ? r.baseIRI : vn.base[vn.base.length - 1];
        return !u || t.match(/^(http:|https:|urn:|file:)/) ? t : 0 === t.indexOf("//") && u ? u.split("//")[0] + t : new URL(t, u).toString();
      },
      increment: function increment(t) {
        var r = vn.data[t];
        void 0 !== r && r[r.length - 1].count++;
      },
      decrement: function decrement(t) {
        var r = vn.data[t];
        void 0 !== r && r[r.length - 1].count--;
      },
      toJSON: function toJSON() {
        var t = {};
        return vn.base.length > 0 && (void 0 === t["@context"] && (t["@context"] = {}), t["@context"]["@base"] = vn.base[0]), Object.keys(vn.data).forEach(function (r) {
          var e = vn.data[r][0];
          "http://www.w3.org/2001/XMLSchema#" === e.uri && e.count < 1 || (void 0 === t["@context"] && (t["@context"] = {}), t["@context"][r] = e.uri);
        }), t;
      }
    };

    function wn(t, r) {
      if (void 0 === t["@list"]) return t;
      if (!r && !t["@list"].find(function (t) {
        return void 0 !== t["@list"];
      })) return t;
      if (0 === t["@list"].length) return {
        "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
      };
      var e = {},
          n = null;
      return t["@list"].forEach(function (t) {
        null === n ? n = e : (n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = {}, n = n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"]), n["http://www.w3.org/1999/02/22-rdf-syntax-ns#first"] = wn(t, !0), n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = {
          "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
        };
      }), e;
    }

    if ((e = s()) !== n && Re === t.length) return e;
    throw e !== n && Re < t.length && Ne({
      type: "end"
    }), Te(ze, Pe < t.length ? t.charAt(Pe) : null, Pe < t.length ? Je(Pe, Pe + 1) : Je(Pe, Pe));
  }

  peg$subclass(peg$SyntaxError, Error), peg$SyntaxError.buildMessage = function (t, r) {
    var e = {
      literal: function literal(t) {
        return '"' + u(t.text) + '"';
      },
      "class": function _class(t) {
        var r,
            e = "";

        for (r = 0; r < t.parts.length; r++) {
          e += t.parts[r] instanceof Array ? s(t.parts[r][0]) + "-" + s(t.parts[r][1]) : s(t.parts[r]);
        }

        return "[" + (t.inverted ? "^" : "") + e + "]";
      },
      any: function any(t) {
        return "any character";
      },
      end: function end(t) {
        return "end of input";
      },
      other: function other(t) {
        return t.description;
      }
    };

    function n(t) {
      return t.charCodeAt(0).toString(16).toUpperCase();
    }

    function u(t) {
      return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (t) {
        return "\\x0" + n(t);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
        return "\\x" + n(t);
      });
    }

    function s(t) {
      return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (t) {
        return "\\x0" + n(t);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
        return "\\x" + n(t);
      });
    }

    return "Expected " + function (t) {
      var r,
          n,
          u,
          s = new Array(t.length);

      for (r = 0; r < t.length; r++) {
        s[r] = (u = t[r], e[u.type](u));
      }

      if (s.sort(), s.length > 0) {
        for (r = 1, n = 1; r < s.length; r++) {
          s[r - 1] !== s[r] && (s[n] = s[r], n++);
        }

        s.length = n;
      }

      switch (s.length) {
        case 1:
          return s[0];

        case 2:
          return s[0] + " or " + s[1];

        default:
          return s.slice(0, -1).join(", ") + ", or " + s[s.length - 1];
      }
    }(t) + " but " + function (t) {
      return t ? '"' + u(t) + '"' : "end of input";
    }(r) + " found.";
  };
  var ttl2jsonld = peg$parse;

  var _excluded = ["documentLoader"];
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t$1(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {
      value: !0
    });
    return Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(t, n, o.get ? o : {
        enumerable: !0,
        get: function get() {
          return e[n];
        }
      });
    }), t;
  }

  var n = /*#__PURE__*/function () {
    function e(_e2) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck$1(this, e);

      this.prefix = _e2, this._existing = t, this.counter = n;
    }

    _createClass$1(e, [{
      key: "clone",
      value: function clone() {
        var t = this.prefix,
            n = this._existing,
            o = this.counter;
        return new e(t, new Map(n), o);
      }
    }, {
      key: "getId",
      value: function getId(_e3) {
        var t = _e3 && this._existing.get(_e3);

        if (t) return t;
        var n = this.prefix + this.counter;
        return this.counter++, _e3 && this._existing.set(_e3, n), n;
      }
    }, {
      key: "hasId",
      value: function hasId(_e4) {
        return this._existing.has(_e4);
      }
    }, {
      key: "getOldIds",
      value: function getOldIds() {
        return _toConsumableArray(this._existing.keys());
      }
    }]);

    return e;
  }();

  !function (e, t) {
    if (!e.setImmediate) {
      var n,
          o,
          r,
          a,
          i,
          s = 1,
          l = {},
          c = !1,
          d = e.document,
          u = Object.getPrototypeOf && Object.getPrototypeOf(e);
      u = u && u.setTimeout ? u : e, "[object process]" === {}.toString.call(e.process) ? n = function n(e) {
        process.nextTick(function () {
          h(e);
        });
      } : !function () {
        if (e.postMessage && !e.importScripts) {
          var t = !0,
              n = e.onmessage;
          return e.onmessage = function () {
            t = !1;
          }, e.postMessage("", "*"), e.onmessage = n, t;
        }
      }() ? e.MessageChannel ? ((r = new MessageChannel()).port1.onmessage = function (e) {
        h(e.data);
      }, n = function n(e) {
        r.port2.postMessage(e);
      }) : d && "onreadystatechange" in d.createElement("script") ? (o = d.documentElement, n = function n(e) {
        var t = d.createElement("script");
        t.onreadystatechange = function () {
          h(e), t.onreadystatechange = null, o.removeChild(t), t = null;
        }, o.appendChild(t);
      }) : n = function n(e) {
        setTimeout(h, 0, e);
      } : (a = "setImmediate$" + Math.random() + "$", i = function i(t) {
        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length));
      }, e.addEventListener ? e.addEventListener("message", i, !1) : e.attachEvent("onmessage", i), n = function n(t) {
        e.postMessage(a + t, "*");
      }), u.setImmediate = function (e) {
        "function" != typeof e && (e = new Function("" + e));

        for (var t = new Array(arguments.length - 1), o = 0; o < t.length; o++) {
          t[o] = arguments[o + 1];
        }

        var r = {
          callback: e,
          args: t
        };
        return l[s] = r, n(s), s++;
      }, u.clearImmediate = p;
    }

    function p(e) {
      delete l[e];
    }

    function h(e) {
      if (c) setTimeout(h, 0, e);else {
        var t = l[e];

        if (t) {
          c = !0;

          try {
            !function (e) {
              var t = e.callback,
                  n = e.args;

              switch (n.length) {
                case 0:
                  t();
                  break;

                case 1:
                  t(n[0]);
                  break;

                case 2:
                  t(n[0], n[1]);
                  break;

                case 3:
                  t(n[0], n[1], n[2]);
                  break;

                default:
                  t.apply(void 0, n);
              }
            }(t);
          } finally {
            p(e), c = !1;
          }
        }
      }
    }
  }("undefined" == typeof self ? e : self);
  var o = self.crypto || self.msCrypto;

  var r = /*#__PURE__*/function () {
    function r(e) {
      _classCallCheck$1(this, r);

      if (!o || !o.subtle) throw new Error("crypto.subtle not found.");
      if ("sha256" === e) this.algorithm = {
        name: "SHA-256"
      };else {
        if ("sha1" !== e) throw new Error("Unsupport algorithm \"".concat(e, "\"."));
        this.algorithm = {
          name: "SHA-1"
        };
      }
      this._content = "";
    }

    _createClass$1(r, [{
      key: "update",
      value: function update(e) {
        this._content += e;
      }
    }, {
      key: "digest",
      value: function () {
        var _digest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var e, t, n, _e5;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e = new TextEncoder().encode(this._content);
                  _context.t0 = Uint8Array;
                  _context.next = 4;
                  return o.subtle.digest(this.algorithm, e);

                case 4:
                  _context.t1 = _context.sent;
                  t = new _context.t0(_context.t1);
                  n = "";

                  for (_e5 = 0; _e5 < t.length; ++_e5) {
                    n += t[_e5].toString(16).padStart(2, "0");
                  }

                  return _context.abrupt("return", n);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function digest() {
          return _digest.apply(this, arguments);
        }

        return digest;
      }()
    }]);

    return r;
  }(),
      a = /*#__PURE__*/function () {
    function a(e) {
      _classCallCheck$1(this, a);

      this.current = e.sort(), this.done = !1, this.dir = new Map();

      for (var _t2 = 0; _t2 < e.length; ++_t2) {
        this.dir.set(e[_t2], !0);
      }
    }

    _createClass$1(a, [{
      key: "hasNext",
      value: function hasNext() {
        return !this.done;
      }
    }, {
      key: "next",
      value: function next() {
        var e = this.current,
            t = this.dir,
            n = e.slice();
        var o = null,
            r = 0;
        var _a = e.length;

        for (var _n2 = 0; _n2 < _a; ++_n2) {
          var _i = e[_n2],
              _s = t.get(_i);

          (null === o || _i > o) && (_s && _n2 > 0 && _i > e[_n2 - 1] || !_s && _n2 < _a - 1 && _i > e[_n2 + 1]) && (o = _i, r = _n2);
        }

        if (null === o) this.done = !0;else {
          var _n3 = t.get(o) ? r - 1 : r + 1;

          e[r] = e[_n3], e[_n3] = o;

          var _iterator = _createForOfIteratorHelper(e),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _n4 = _step.value;
              _n4 > o && t.set(_n4, !t.get(_n4));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return n;
      }
    }]);

    return a;
  }();

  var i = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
      s = "http://www.w3.org/2001/XMLSchema#string",
      l = {
    eoln: /(?:\r\n)|(?:\n)|(?:\r)/g
  };
  l.empty = new RegExp("^[ \\t]*$"), l.quad = new RegExp('^[ \\t]*(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]+(?:<([^:]+:[^>]*)>)[ \\t]+(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?)|(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:(?:\\^\\^(?:<([^:]+:[^>]*)>))|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]*\\.))[ \\t]*$');

  var c = /*#__PURE__*/function () {
    function e() {
      _classCallCheck$1(this, e);
    }

    _createClass$1(e, null, [{
      key: "parse",
      value: function parse(_e6) {
        var t = [],
            n = {},
            o = _e6.split(l.eoln);

        var r = 0;

        var _iterator2 = _createForOfIteratorHelper(o),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e12 = _step2.value;
            if (r++, l.empty.test(_e12)) continue;

            var _o = _e12.match(l.quad);

            if (null === _o) throw new Error("N-Quads parse error on line " + r + ".");
            var _a2 = {
              subject: null,
              predicate: null,
              object: null,
              graph: null
            };

            if (void 0 !== _o[1] ? _a2.subject = {
              termType: "NamedNode",
              value: _o[1]
            } : _a2.subject = {
              termType: "BlankNode",
              value: _o[2]
            }, _a2.predicate = {
              termType: "NamedNode",
              value: _o[3]
            }, void 0 !== _o[4] ? _a2.object = {
              termType: "NamedNode",
              value: _o[4]
            } : void 0 !== _o[5] ? _a2.object = {
              termType: "BlankNode",
              value: _o[5]
            } : (_a2.object = {
              termType: "Literal",
              value: void 0,
              datatype: {
                termType: "NamedNode"
              }
            }, void 0 !== _o[7] ? _a2.object.datatype.value = _o[7] : void 0 !== _o[8] ? (_a2.object.datatype.value = i, _a2.object.language = _o[8]) : _a2.object.datatype.value = s, _a2.object.value = _o[6].replace(p, function (e, t, n, o) {
              if (t) switch (t) {
                case "t":
                  return "\t";

                case "b":
                  return "\b";

                case "n":
                  return "\n";

                case "r":
                  return "\r";

                case "f":
                  return "\f";

                case '"':
                  return '"';

                case "'":
                  return "'";

                case "\\":
                  return "\\";
              }
              if (n) return String.fromCharCode(parseInt(n, 16));
              if (o) throw new Error("Unsupported U escape");
            })), void 0 !== _o[9] ? _a2.graph = {
              termType: "NamedNode",
              value: _o[9]
            } : void 0 !== _o[10] ? _a2.graph = {
              termType: "BlankNode",
              value: _o[10]
            } : _a2.graph = {
              termType: "DefaultGraph",
              value: ""
            }, _a2.graph.value in n) {
              var _e13 = !0;

              var _o2 = n[_a2.graph.value];

              var _iterator3 = _createForOfIteratorHelper(_o2),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _t3 = _step3.value;

                  if (d(_t3, _a2)) {
                    _e13 = !1;
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              _e13 && (_o2.push(_a2), t.push(_a2));
            } else n[_a2.graph.value] = [_a2], t.push(_a2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return t;
      }
    }, {
      key: "serialize",
      value: function serialize(t) {
        Array.isArray(t) || (t = e.legacyDatasetToQuads(t));
        var n = [];

        var _iterator4 = _createForOfIteratorHelper(t),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _o3 = _step4.value;
            n.push(e.serializeQuad(_o3));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return n.sort().join("");
      }
    }, {
      key: "serializeQuad",
      value: function serializeQuad(_e9) {
        var t = _e9.subject,
            n = _e9.predicate,
            o = _e9.object,
            r = _e9.graph;
        var a = "";
        return "NamedNode" === t.termType ? a += "<".concat(t.value, ">") : a += "".concat(t.value), a += " <".concat(n.value, "> "), "NamedNode" === o.termType ? a += "<".concat(o.value, ">") : "BlankNode" === o.termType ? a += o.value : (a += "\"".concat(function (e) {
          return e.replace(u, function (e) {
            switch (e) {
              case '"':
                return '\\"';

              case "\\":
                return "\\\\";

              case "\n":
                return "\\n";

              case "\r":
                return "\\r";
            }
          });
        }(o.value), "\""), o.datatype.value === i ? o.language && (a += "@".concat(o.language)) : o.datatype.value !== s && (a += "^^<".concat(o.datatype.value, ">"))), "NamedNode" === r.termType ? a += " <".concat(r.value, ">") : "BlankNode" === r.termType && (a += " ".concat(r.value)), a += " .\n", a;
      }
    }, {
      key: "legacyDatasetToQuads",
      value: function legacyDatasetToQuads(_e10) {
        var t = [],
            n = {
          "blank node": "BlankNode",
          IRI: "NamedNode",
          literal: "Literal"
        };

        var _loop = function _loop(_o4) {
          _e10[_o4].forEach(function (_e11) {
            var r = {};

            for (var _t4 in _e11) {
              var _o5 = _e11[_t4],
                  _a3 = {
                termType: n[_o5.type],
                value: _o5.value
              };
              "Literal" === _a3.termType && (_a3.datatype = {
                termType: "NamedNode"
              }, "datatype" in _o5 && (_a3.datatype.value = _o5.datatype), "language" in _o5 ? ("datatype" in _o5 || (_a3.datatype.value = i), _a3.language = _o5.language) : "datatype" in _o5 || (_a3.datatype.value = s)), r[_t4] = _a3;
            }

            r.graph = "@default" === _o4 ? {
              termType: "DefaultGraph",
              value: ""
            } : {
              termType: _o4.startsWith("_:") ? "BlankNode" : "NamedNode",
              value: _o4
            }, t.push(r);
          });
        };

        for (var _o4 in _e10) {
          _loop(_o4);
        }

        return t;
      }
    }]);

    return e;
  }();

  function d(e, t) {
    return e.subject.termType === t.subject.termType && e.object.termType === t.object.termType && e.subject.value === t.subject.value && e.predicate.value === t.predicate.value && e.object.value === t.object.value && ("Literal" !== e.object.termType || e.object.datatype.termType === t.object.datatype.termType && e.object.language === t.object.language && e.object.datatype.value === t.object.datatype.value);
  }

  var u = /["\\\n\r]/g;
  var p = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;

  var h = /*#__PURE__*/function () {
    function h() {
      _classCallCheck$1(this, h);

      this.name = "URDNA2015", this.blankNodeInfo = new Map(), this.canonicalIssuer = new n("_:c14n"), this.hashAlgorithm = "sha256", this.quads = null;
    }

    _createClass$1(h, [{
      key: "main",
      value: function () {
        var _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var _iterator5, _step5, _t8, t, o, r, _iterator6, _step6, _e18, a, i, _iterator7, _step7, _e19, _n5, _o7, _i3, _i2, _e14, _t5, _iterator8, _step8, _o6, _e17, _r, _i4, _t6, _e15, _t7, _iterator9, _step9, _e16, s, _iterator10, _step10, _e20, _t9;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.quads = e;
                  _iterator5 = _createForOfIteratorHelper(e);

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      _t8 = _step5.value;
                      this._addBlankNodeQuadInfo({
                        quad: _t8,
                        component: _t8.subject
                      }), this._addBlankNodeQuadInfo({
                        quad: _t8,
                        component: _t8.object
                      }), this._addBlankNodeQuadInfo({
                        quad: _t8,
                        component: _t8.graph
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  t = new Map(), o = _toConsumableArray(this.blankNodeInfo.keys());
                  r = 0;
                  _iterator6 = _createForOfIteratorHelper(o);
                  _context2.prev = 6;

                  _iterator6.s();

                case 8:
                  if ((_step6 = _iterator6.n()).done) {
                    _context2.next = 18;
                    break;
                  }

                  _e18 = _step6.value;
                  _context2.t0 = ++r % 100 == 0;

                  if (!_context2.t0) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 14;
                  return this._yield();

                case 14:
                  _context2.next = 16;
                  return this._hashAndTrackBlankNode({
                    id: _e18,
                    hashToBlankNodes: t
                  });

                case 16:
                  _context2.next = 8;
                  break;

                case 18:
                  _context2.next = 23;
                  break;

                case 20:
                  _context2.prev = 20;
                  _context2.t1 = _context2["catch"](6);

                  _iterator6.e(_context2.t1);

                case 23:
                  _context2.prev = 23;

                  _iterator6.f();

                  return _context2.finish(23);

                case 26:
                  a = _toConsumableArray(t.keys()).sort(), i = [];
                  _iterator7 = _createForOfIteratorHelper(a);
                  _context2.prev = 28;

                  _iterator7.s();

                case 30:
                  if ((_step7 = _iterator7.n()).done) {
                    _context2.next = 40;
                    break;
                  }

                  _e19 = _step7.value;
                  _n5 = t.get(_e19);

                  if (!(_n5.length > 1)) {
                    _context2.next = 36;
                    break;
                  }

                  i.push(_n5);
                  return _context2.abrupt("continue", 38);

                case 36:
                  _o7 = _n5[0];
                  this.canonicalIssuer.getId(_o7);

                case 38:
                  _context2.next = 30;
                  break;

                case 40:
                  _context2.next = 45;
                  break;

                case 42:
                  _context2.prev = 42;
                  _context2.t2 = _context2["catch"](28);

                  _iterator7.e(_context2.t2);

                case 45:
                  _context2.prev = 45;

                  _iterator7.f();

                  return _context2.finish(45);

                case 48:
                  _i3 = 0, _i2 = i;

                case 49:
                  if (!(_i3 < _i2.length)) {
                    _context2.next = 80;
                    break;
                  }

                  _e14 = _i2[_i3];
                  _t5 = [];
                  _iterator8 = _createForOfIteratorHelper(_e14);
                  _context2.prev = 53;

                  _iterator8.s();

                case 55:
                  if ((_step8 = _iterator8.n()).done) {
                    _context2.next = 67;
                    break;
                  }

                  _o6 = _step8.value;

                  if (!this.canonicalIssuer.hasId(_o6)) {
                    _context2.next = 59;
                    break;
                  }

                  return _context2.abrupt("continue", 65);

                case 59:
                  _e17 = new n("_:b");

                  _e17.getId(_o6);

                  _context2.next = 63;
                  return this.hashNDegreeQuads(_o6, _e17);

                case 63:
                  _r = _context2.sent;

                  _t5.push(_r);

                case 65:
                  _context2.next = 55;
                  break;

                case 67:
                  _context2.next = 72;
                  break;

                case 69:
                  _context2.prev = 69;
                  _context2.t3 = _context2["catch"](53);

                  _iterator8.e(_context2.t3);

                case 72:
                  _context2.prev = 72;

                  _iterator8.f();

                  return _context2.finish(72);

                case 75:
                  _t5.sort(f);

                  for (_i4 = 0, _t6 = _t5; _i4 < _t6.length; _i4++) {
                    _e15 = _t6[_i4];
                    _t7 = _e15.issuer.getOldIds();
                    _iterator9 = _createForOfIteratorHelper(_t7);

                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        _e16 = _step9.value;
                        this.canonicalIssuer.getId(_e16);
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }

                case 77:
                  _i3++;
                  _context2.next = 49;
                  break;

                case 80:
                  s = [];
                  _iterator10 = _createForOfIteratorHelper(this.quads);

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      _e20 = _step10.value;
                      _t9 = _objectSpread2({}, _e20);
                      _t9.subject = this._useCanonicalId({
                        component: _t9.subject
                      }), _t9.object = this._useCanonicalId({
                        component: _t9.object
                      }), _t9.graph = this._useCanonicalId({
                        component: _t9.graph
                      }), s.push(c.serializeQuad(_t9));
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  return _context2.abrupt("return", (s.sort(), s.join("")));

                case 84:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[6, 20, 23, 26], [28, 42, 45, 48], [53, 69, 72, 75]]);
        }));

        function main(_x) {
          return _main.apply(this, arguments);
        }

        return main;
      }()
    }, {
      key: "hashFirstDegreeQuads",
      value: function () {
        var _hashFirstDegreeQuads = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var t, n, o, _iterator11, _step11, _n6, _o8, a, _i5, _t10, _e21;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  t = [], n = this.blankNodeInfo.get(e), o = n.quads;
                  _iterator11 = _createForOfIteratorHelper(o);

                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      _n6 = _step11.value;
                      _o8 = {
                        subject: null,
                        predicate: _n6.predicate,
                        object: null,
                        graph: null
                      };
                      _o8.subject = this.modifyFirstDegreeComponent(e, _n6.subject, "subject"), _o8.object = this.modifyFirstDegreeComponent(e, _n6.object, "object"), _o8.graph = this.modifyFirstDegreeComponent(e, _n6.graph, "graph"), t.push(c.serializeQuad(_o8));
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }

                  t.sort();
                  a = new r(this.hashAlgorithm);

                  for (_i5 = 0, _t10 = t; _i5 < _t10.length; _i5++) {
                    _e21 = _t10[_i5];
                    a.update(_e21);
                  }

                  _context3.next = 8;
                  return a.digest();

                case 8:
                  n.hash = _context3.sent;
                  return _context3.abrupt("return", n.hash);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function hashFirstDegreeQuads(_x2) {
          return _hashFirstDegreeQuads.apply(this, arguments);
        }

        return hashFirstDegreeQuads;
      }()
    }, {
      key: "hashRelatedBlankNode",
      value: function () {
        var _hashRelatedBlankNode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t, n, o) {
          var a, i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  a = this.canonicalIssuer.hasId(e) ? this.canonicalIssuer.getId(e) : n.hasId(e) ? n.getId(e) : this.blankNodeInfo.get(e).hash;
                  i = new r(this.hashAlgorithm);
                  return _context4.abrupt("return", (i.update(o), "g" !== o && i.update(this.getRelatedPredicate(t)), i.update(a), i.digest()));

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function hashRelatedBlankNode(_x3, _x4, _x5, _x6) {
          return _hashRelatedBlankNode.apply(this, arguments);
        }

        return hashRelatedBlankNode;
      }()
    }, {
      key: "hashNDegreeQuads",
      value: function () {
        var _hashNDegreeQuads = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
          var n, o, i, _iterator12, _step12, _e22, _r2, _i6, _s2, _l, _e23, _n7, _o9, _a4, _c, _iterator13, _step13, _t12, _iterator14, _step14, _e24, _t11;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  n = new r(this.hashAlgorithm);
                  _context5.next = 3;
                  return this.createHashToRelated(e, t);

                case 3:
                  o = _context5.sent;
                  i = _toConsumableArray(o.keys()).sort();
                  _iterator12 = _createForOfIteratorHelper(i);
                  _context5.prev = 6;

                  _iterator12.s();

                case 8:
                  if ((_step12 = _iterator12.n()).done) {
                    _context5.next = 69;
                    break;
                  }

                  _e22 = _step12.value;
                  n.update(_e22);
                  _r2 = void 0, _i6 = "";
                  _s2 = new a(o.get(_e22));
                  _l = 0;

                case 14:
                  if (!_s2.hasNext()) {
                    _context5.next = 66;
                    break;
                  }

                  _e23 = _s2.next();
                  _context5.t0 = ++_l % 3 == 0;

                  if (!_context5.t0) {
                    _context5.next = 20;
                    break;
                  }

                  _context5.next = 20;
                  return this._yield();

                case 20:
                  _n7 = t.clone(), _o9 = "";
                  _a4 = [];
                  _c = !1;
                  _iterator13 = _createForOfIteratorHelper(_e23);
                  _context5.prev = 24;

                  _iterator13.s();

                case 26:
                  if ((_step13 = _iterator13.n()).done) {
                    _context5.next = 33;
                    break;
                  }

                  _t12 = _step13.value;

                  if (!(this.canonicalIssuer.hasId(_t12) ? _o9 += this.canonicalIssuer.getId(_t12) : (_n7.hasId(_t12) || _a4.push(_t12), _o9 += _n7.getId(_t12)), 0 !== _i6.length && _o9 > _i6)) {
                    _context5.next = 31;
                    break;
                  }

                  _c = !0;
                  return _context5.abrupt("break", 33);

                case 31:
                  _context5.next = 26;
                  break;

                case 33:
                  _context5.next = 38;
                  break;

                case 35:
                  _context5.prev = 35;
                  _context5.t1 = _context5["catch"](24);

                  _iterator13.e(_context5.t1);

                case 38:
                  _context5.prev = 38;

                  _iterator13.f();

                  return _context5.finish(38);

                case 41:
                  if (_c) {
                    _context5.next = 64;
                    break;
                  }

                  _iterator14 = _createForOfIteratorHelper(_a4);
                  _context5.prev = 43;

                  _iterator14.s();

                case 45:
                  if ((_step14 = _iterator14.n()).done) {
                    _context5.next = 55;
                    break;
                  }

                  _e24 = _step14.value;
                  _context5.next = 49;
                  return this.hashNDegreeQuads(_e24, _n7);

                case 49:
                  _t11 = _context5.sent;

                  if (!(_o9 += _n7.getId(_e24), _o9 += "<".concat(_t11.hash, ">"), _n7 = _t11.issuer, 0 !== _i6.length && _o9 > _i6)) {
                    _context5.next = 53;
                    break;
                  }

                  _c = !0;
                  return _context5.abrupt("break", 55);

                case 53:
                  _context5.next = 45;
                  break;

                case 55:
                  _context5.next = 60;
                  break;

                case 57:
                  _context5.prev = 57;
                  _context5.t2 = _context5["catch"](43);

                  _iterator14.e(_context5.t2);

                case 60:
                  _context5.prev = 60;

                  _iterator14.f();

                  return _context5.finish(60);

                case 63:
                  _c || (0 === _i6.length || _o9 < _i6) && (_i6 = _o9, _r2 = _n7);

                case 64:
                  _context5.next = 14;
                  break;

                case 66:
                  n.update(_i6), t = _r2;

                case 67:
                  _context5.next = 8;
                  break;

                case 69:
                  _context5.next = 74;
                  break;

                case 71:
                  _context5.prev = 71;
                  _context5.t3 = _context5["catch"](6);

                  _iterator12.e(_context5.t3);

                case 74:
                  _context5.prev = 74;

                  _iterator12.f();

                  return _context5.finish(74);

                case 77:
                  _context5.next = 79;
                  return n.digest();

                case 79:
                  _context5.t4 = _context5.sent;
                  _context5.t5 = t;
                  return _context5.abrupt("return", {
                    hash: _context5.t4,
                    issuer: _context5.t5
                  });

                case 82:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[6, 71, 74, 77], [24, 35, 38, 41], [43, 57, 60, 63]]);
        }));

        function hashNDegreeQuads(_x7, _x8) {
          return _hashNDegreeQuads.apply(this, arguments);
        }

        return hashNDegreeQuads;
      }()
    }, {
      key: "modifyFirstDegreeComponent",
      value: function modifyFirstDegreeComponent(e, t) {
        return "BlankNode" !== t.termType ? t : {
          termType: "BlankNode",
          value: t.value === e ? "_:a" : "_:z"
        };
      }
    }, {
      key: "getRelatedPredicate",
      value: function getRelatedPredicate(e) {
        return "<".concat(e.predicate.value, ">");
      }
    }, {
      key: "createHashToRelated",
      value: function () {
        var _createHashToRelated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
          var n, o, r, _iterator15, _step15, _a5;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  n = new Map(), o = this.blankNodeInfo.get(e).quads;
                  r = 0;
                  _iterator15 = _createForOfIteratorHelper(o);
                  _context6.prev = 3;

                  _iterator15.s();

                case 5:
                  if ((_step15 = _iterator15.n()).done) {
                    _context6.next = 15;
                    break;
                  }

                  _a5 = _step15.value;
                  _context6.t0 = ++r % 100 == 0;

                  if (!_context6.t0) {
                    _context6.next = 11;
                    break;
                  }

                  _context6.next = 11;
                  return this._yield();

                case 11:
                  _context6.next = 13;
                  return Promise.all([this._addRelatedBlankNodeHash({
                    quad: _a5,
                    component: _a5.subject,
                    position: "s",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  }), this._addRelatedBlankNodeHash({
                    quad: _a5,
                    component: _a5.object,
                    position: "o",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  }), this._addRelatedBlankNodeHash({
                    quad: _a5,
                    component: _a5.graph,
                    position: "g",
                    id: e,
                    issuer: t,
                    hashToRelated: n
                  })]);

                case 13:
                  _context6.next = 5;
                  break;

                case 15:
                  _context6.next = 20;
                  break;

                case 17:
                  _context6.prev = 17;
                  _context6.t1 = _context6["catch"](3);

                  _iterator15.e(_context6.t1);

                case 20:
                  _context6.prev = 20;

                  _iterator15.f();

                  return _context6.finish(20);

                case 23:
                  return _context6.abrupt("return", n);

                case 24:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this, [[3, 17, 20, 23]]);
        }));

        function createHashToRelated(_x9, _x10) {
          return _createHashToRelated.apply(this, arguments);
        }

        return createHashToRelated;
      }()
    }, {
      key: "_hashAndTrackBlankNode",
      value: function () {
        var _hashAndTrackBlankNode2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref) {
          var e, t, n, o;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  e = _ref.id, t = _ref.hashToBlankNodes;
                  _context7.next = 3;
                  return this.hashFirstDegreeQuads(e);

                case 3:
                  n = _context7.sent;
                  o = t.get(n);
                  o ? o.push(e) : t.set(n, [e]);

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function _hashAndTrackBlankNode(_x11) {
          return _hashAndTrackBlankNode2.apply(this, arguments);
        }

        return _hashAndTrackBlankNode;
      }()
    }, {
      key: "_addBlankNodeQuadInfo",
      value: function _addBlankNodeQuadInfo(_ref2) {
        var e = _ref2.quad,
            t = _ref2.component;
        if ("BlankNode" !== t.termType) return;
        var n = t.value,
            o = this.blankNodeInfo.get(n);
        o ? o.quads.add(e) : this.blankNodeInfo.set(n, {
          quads: new Set([e]),
          hash: null
        });
      }
    }, {
      key: "_addRelatedBlankNodeHash",
      value: function () {
        var _addRelatedBlankNodeHash2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref3) {
          var e, t, n, o, r, a, i, s, l;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  e = _ref3.quad, t = _ref3.component, n = _ref3.position, o = _ref3.id, r = _ref3.issuer, a = _ref3.hashToRelated;

                  if (!("BlankNode" !== t.termType || t.value === o)) {
                    _context8.next = 3;
                    break;
                  }

                  return _context8.abrupt("return");

                case 3:
                  i = t.value;
                  _context8.next = 6;
                  return this.hashRelatedBlankNode(i, e, r, n);

                case 6:
                  s = _context8.sent;
                  l = a.get(s);
                  l ? l.push(i) : a.set(s, [i]);

                case 9:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function _addRelatedBlankNodeHash(_x12) {
          return _addRelatedBlankNodeHash2.apply(this, arguments);
        }

        return _addRelatedBlankNodeHash;
      }()
    }, {
      key: "_useCanonicalId",
      value: function _useCanonicalId(_ref4) {
        var e = _ref4.component;
        return "BlankNode" !== e.termType || e.value.startsWith(this.canonicalIssuer.prefix) ? e : {
          termType: "BlankNode",
          value: this.canonicalIssuer.getId(e.value)
        };
      }
    }, {
      key: "_yield",
      value: function () {
        var _yield2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  return _context9.abrupt("return", new Promise(function (e) {
                    return setImmediate(e);
                  }));

                case 1:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        function _yield() {
          return _yield2.apply(this, arguments);
        }

        return _yield;
      }()
    }]);

    return h;
  }();

  function f(e, t) {
    return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
  }

  var v = /*#__PURE__*/function (_h) {
    _inherits(v, _h);

    var _super = _createSuper(v);

    function v() {
      var _this;

      _classCallCheck$1(this, v);

      _this = _super.call(this), _this.name = "URGNA2012", _this.hashAlgorithm = "sha1";
      return _this;
    }

    _createClass$1(v, [{
      key: "modifyFirstDegreeComponent",
      value: function modifyFirstDegreeComponent(e, t, n) {
        return "BlankNode" !== t.termType ? t : "graph" === n ? {
          termType: "BlankNode",
          value: "_:g"
        } : {
          termType: "BlankNode",
          value: t.value === e ? "_:a" : "_:z"
        };
      }
    }, {
      key: "getRelatedPredicate",
      value: function getRelatedPredicate(e) {
        return e.predicate.value;
      }
    }, {
      key: "createHashToRelated",
      value: function () {
        var _createHashToRelated2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
          var n, o, r, _iterator16, _step16, _a6, _o10, _i7, _s3, _l2;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  n = new Map(), o = this.blankNodeInfo.get(e).quads;
                  r = 0;
                  _iterator16 = _createForOfIteratorHelper(o);
                  _context10.prev = 3;

                  _iterator16.s();

                case 5:
                  if ((_step16 = _iterator16.n()).done) {
                    _context10.next = 26;
                    break;
                  }

                  _a6 = _step16.value;
                  _o10 = void 0, _i7 = void 0;

                  if (!("BlankNode" === _a6.subject.termType && _a6.subject.value !== e)) {
                    _context10.next = 12;
                    break;
                  }

                  _i7 = _a6.subject.value, _o10 = "p";
                  _context10.next = 15;
                  break;

                case 12:
                  if (!("BlankNode" !== _a6.object.termType || _a6.object.value === e)) {
                    _context10.next = 14;
                    break;
                  }

                  return _context10.abrupt("continue", 24);

                case 14:
                  _i7 = _a6.object.value, _o10 = "r";

                case 15:
                  _context10.t0 = ++r % 100 == 0;

                  if (!_context10.t0) {
                    _context10.next = 19;
                    break;
                  }

                  _context10.next = 19;
                  return this._yield();

                case 19:
                  _context10.next = 21;
                  return this.hashRelatedBlankNode(_i7, _a6, t, _o10);

                case 21:
                  _s3 = _context10.sent;
                  _l2 = n.get(_s3);
                  _l2 ? _l2.push(_i7) : n.set(_s3, [_i7]);

                case 24:
                  _context10.next = 5;
                  break;

                case 26:
                  _context10.next = 31;
                  break;

                case 28:
                  _context10.prev = 28;
                  _context10.t1 = _context10["catch"](3);

                  _iterator16.e(_context10.t1);

                case 31:
                  _context10.prev = 31;

                  _iterator16.f();

                  return _context10.finish(31);

                case 34:
                  return _context10.abrupt("return", n);

                case 35:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this, [[3, 28, 31, 34]]);
        }));

        function createHashToRelated(_x13, _x14) {
          return _createHashToRelated2.apply(this, arguments);
        }

        return createHashToRelated;
      }()
    }]);

    return v;
  }(h),
      g = /*#__PURE__*/function () {
    function g() {
      _classCallCheck$1(this, g);

      this.name = "URDNA2015", this.blankNodeInfo = new Map(), this.canonicalIssuer = new n("_:c14n"), this.hashAlgorithm = "sha256", this.quads = null;
    }

    _createClass$1(g, [{
      key: "main",
      value: function main(e) {
        this.quads = e;

        var _iterator17 = _createForOfIteratorHelper(e),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _t16 = _step17.value;
            this._addBlankNodeQuadInfo({
              quad: _t16,
              component: _t16.subject
            }), this._addBlankNodeQuadInfo({
              quad: _t16,
              component: _t16.object
            }), this._addBlankNodeQuadInfo({
              quad: _t16,
              component: _t16.graph
            });
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        var t = new Map(),
            o = _toConsumableArray(this.blankNodeInfo.keys());

        var _iterator18 = _createForOfIteratorHelper(o),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var _e29 = _step18.value;

            this._hashAndTrackBlankNode({
              id: _e29,
              hashToBlankNodes: t
            });
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }

        var r = _toConsumableArray(t.keys()).sort(),
            a = [];

        var _iterator19 = _createForOfIteratorHelper(r),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _e30 = _step19.value;

            var _n8 = t.get(_e30);

            if (_n8.length > 1) {
              a.push(_n8);
              continue;
            }

            var _o12 = _n8[0];
            this.canonicalIssuer.getId(_o12);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        for (var _i8 = 0, _a7 = a; _i8 < _a7.length; _i8++) {
          var _e25 = _a7[_i8];
          var _t13 = [];

          var _iterator20 = _createForOfIteratorHelper(_e25),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _o11 = _step20.value;
              if (this.canonicalIssuer.hasId(_o11)) continue;

              var _e28 = new n("_:b");

              _e28.getId(_o11);

              var _r3 = this.hashNDegreeQuads(_o11, _e28);

              _t13.push(_r3);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          _t13.sort(y);

          for (var _i9 = 0, _t14 = _t13; _i9 < _t14.length; _i9++) {
            var _e26 = _t14[_i9];

            var _t15 = _e26.issuer.getOldIds();

            var _iterator21 = _createForOfIteratorHelper(_t15),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _e27 = _step21.value;
                this.canonicalIssuer.getId(_e27);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
        }

        var i = [];

        var _iterator22 = _createForOfIteratorHelper(this.quads),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _e31 = _step22.value;

            var _t17 = _objectSpread2({}, _e31);

            _t17.subject = this._useCanonicalId({
              component: _t17.subject
            }), _t17.object = this._useCanonicalId({
              component: _t17.object
            }), _t17.graph = this._useCanonicalId({
              component: _t17.graph
            }), i.push(c.serializeQuad(_t17));
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }

        return i.sort(), i.join("");
      }
    }, {
      key: "hashFirstDegreeQuads",
      value: function hashFirstDegreeQuads(e) {
        var t = [],
            n = this.blankNodeInfo.get(e),
            o = n.quads;

        var _iterator23 = _createForOfIteratorHelper(o),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _n9 = _step23.value;
            var _o13 = {
              subject: null,
              predicate: _n9.predicate,
              object: null,
              graph: null
            };
            _o13.subject = this.modifyFirstDegreeComponent(e, _n9.subject, "subject"), _o13.object = this.modifyFirstDegreeComponent(e, _n9.object, "object"), _o13.graph = this.modifyFirstDegreeComponent(e, _n9.graph, "graph"), t.push(c.serializeQuad(_o13));
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        t.sort();
        var a = new r(this.hashAlgorithm);

        for (var _i10 = 0, _t18 = t; _i10 < _t18.length; _i10++) {
          var _e32 = _t18[_i10];
          a.update(_e32);
        }

        return n.hash = a.digest(), n.hash;
      }
    }, {
      key: "hashRelatedBlankNode",
      value: function hashRelatedBlankNode(e, t, n, o) {
        var a;
        a = this.canonicalIssuer.hasId(e) ? this.canonicalIssuer.getId(e) : n.hasId(e) ? n.getId(e) : this.blankNodeInfo.get(e).hash;
        var i = new r(this.hashAlgorithm);
        return i.update(o), "g" !== o && i.update(this.getRelatedPredicate(t)), i.update(a), i.digest();
      }
    }, {
      key: "hashNDegreeQuads",
      value: function hashNDegreeQuads(e, t) {
        var n = new r(this.hashAlgorithm),
            o = this.createHashToRelated(e, t),
            i = _toConsumableArray(o.keys()).sort();

        var _iterator24 = _createForOfIteratorHelper(i),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _e33 = _step24.value;
            n.update(_e33);

            var _r4 = void 0,
                _i11 = "";

            var _s4 = new a(o.get(_e33));

            for (; _s4.hasNext();) {
              var _e34 = _s4.next();

              var _n10 = t.clone(),
                  _o14 = "";

              var _a8 = [];

              var _l3 = !1;

              var _iterator25 = _createForOfIteratorHelper(_e34),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _t20 = _step25.value;

                  if (this.canonicalIssuer.hasId(_t20) ? _o14 += this.canonicalIssuer.getId(_t20) : (_n10.hasId(_t20) || _a8.push(_t20), _o14 += _n10.getId(_t20)), 0 !== _i11.length && _o14 > _i11) {
                    _l3 = !0;
                    break;
                  }
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }

              if (!_l3) {
                var _iterator26 = _createForOfIteratorHelper(_a8),
                    _step26;

                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _e35 = _step26.value;

                    var _t19 = this.hashNDegreeQuads(_e35, _n10);

                    if (_o14 += _n10.getId(_e35), _o14 += "<".concat(_t19.hash, ">"), _n10 = _t19.issuer, 0 !== _i11.length && _o14 > _i11) {
                      _l3 = !0;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }

                _l3 || (0 === _i11.length || _o14 < _i11) && (_i11 = _o14, _r4 = _n10);
              }
            }

            n.update(_i11), t = _r4;
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }

        return {
          hash: n.digest(),
          issuer: t
        };
      }
    }, {
      key: "modifyFirstDegreeComponent",
      value: function modifyFirstDegreeComponent(e, t) {
        return "BlankNode" !== t.termType ? t : {
          termType: "BlankNode",
          value: t.value === e ? "_:a" : "_:z"
        };
      }
    }, {
      key: "getRelatedPredicate",
      value: function getRelatedPredicate(e) {
        return "<".concat(e.predicate.value, ">");
      }
    }, {
      key: "createHashToRelated",
      value: function createHashToRelated(e, t) {
        var n = new Map(),
            o = this.blankNodeInfo.get(e).quads;

        var _iterator27 = _createForOfIteratorHelper(o),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _r5 = _step27.value;
            this._addRelatedBlankNodeHash({
              quad: _r5,
              component: _r5.subject,
              position: "s",
              id: e,
              issuer: t,
              hashToRelated: n
            }), this._addRelatedBlankNodeHash({
              quad: _r5,
              component: _r5.object,
              position: "o",
              id: e,
              issuer: t,
              hashToRelated: n
            }), this._addRelatedBlankNodeHash({
              quad: _r5,
              component: _r5.graph,
              position: "g",
              id: e,
              issuer: t,
              hashToRelated: n
            });
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        return n;
      }
    }, {
      key: "_hashAndTrackBlankNode",
      value: function _hashAndTrackBlankNode(_ref5) {
        var e = _ref5.id,
            t = _ref5.hashToBlankNodes;
        var n = this.hashFirstDegreeQuads(e),
            o = t.get(n);
        o ? o.push(e) : t.set(n, [e]);
      }
    }, {
      key: "_addBlankNodeQuadInfo",
      value: function _addBlankNodeQuadInfo(_ref6) {
        var e = _ref6.quad,
            t = _ref6.component;
        if ("BlankNode" !== t.termType) return;
        var n = t.value,
            o = this.blankNodeInfo.get(n);
        o ? o.quads.add(e) : this.blankNodeInfo.set(n, {
          quads: new Set([e]),
          hash: null
        });
      }
    }, {
      key: "_addRelatedBlankNodeHash",
      value: function _addRelatedBlankNodeHash(_ref7) {
        var e = _ref7.quad,
            t = _ref7.component,
            n = _ref7.position,
            o = _ref7.id,
            r = _ref7.issuer,
            a = _ref7.hashToRelated;
        if ("BlankNode" !== t.termType || t.value === o) return;
        var i = t.value,
            s = this.hashRelatedBlankNode(i, e, r, n),
            l = a.get(s);
        l ? l.push(i) : a.set(s, [i]);
      }
    }, {
      key: "_useCanonicalId",
      value: function _useCanonicalId(_ref8) {
        var e = _ref8.component;
        return "BlankNode" !== e.termType || e.value.startsWith(this.canonicalIssuer.prefix) ? e : {
          termType: "BlankNode",
          value: this.canonicalIssuer.getId(e.value)
        };
      }
    }]);

    return g;
  }();

  function y(e, t) {
    return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
  }

  var m = /*#__PURE__*/function (_g) {
    _inherits(m, _g);

    var _super2 = _createSuper(m);

    function m() {
      var _this2;

      _classCallCheck$1(this, m);

      _this2 = _super2.call(this), _this2.name = "URGNA2012", _this2.hashAlgorithm = "sha1";
      return _this2;
    }

    _createClass$1(m, [{
      key: "modifyFirstDegreeComponent",
      value: function modifyFirstDegreeComponent(e, t, n) {
        return "BlankNode" !== t.termType ? t : "graph" === n ? {
          termType: "BlankNode",
          value: "_:g"
        } : {
          termType: "BlankNode",
          value: t.value === e ? "_:a" : "_:z"
        };
      }
    }, {
      key: "getRelatedPredicate",
      value: function getRelatedPredicate(e) {
        return e.predicate.value;
      }
    }, {
      key: "createHashToRelated",
      value: function createHashToRelated(e, t) {
        var n = new Map(),
            o = this.blankNodeInfo.get(e).quads;

        var _iterator28 = _createForOfIteratorHelper(o),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _r6 = _step28.value;

            var _o15 = void 0,
                _a9 = void 0;

            if ("BlankNode" === _r6.subject.termType && _r6.subject.value !== e) _a9 = _r6.subject.value, _o15 = "p";else {
              if ("BlankNode" !== _r6.object.termType || _r6.object.value === e) continue;
              _a9 = _r6.object.value, _o15 = "r";
            }

            var _i12 = this.hashRelatedBlankNode(_a9, _r6, t, _o15),
                _s5 = n.get(_i12);

            _s5 ? _s5.push(_a9) : n.set(_i12, [_a9]);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }

        return n;
      }
    }]);

    return m;
  }(g),
      x = t$1(Object.freeze({
    __proto__: null,
    "default": {}
  }));

  var b;

  try {
    b = x;
  } catch (e) {}

  var w$1 = {};
  var j = w$1;
  w$1.NQuads = c, w$1.IdentifierIssuer = n, w$1._rdfCanonizeNative = function (e) {
    return e && (b = e), b;
  }, w$1.canonize = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!(Array.isArray(e) || (e = w$1.NQuads.legacyDatasetToQuads(e)), t.useNative)) {
                _context11.next = 4;
                break;
              }

              if (b) {
                _context11.next = 3;
                break;
              }

              throw new Error("rdf-canonize-native not available");

            case 3:
              return _context11.abrupt("return", new Promise(function (n, o) {
                return b.canonize(e, t, function (e, t) {
                  return e ? o(e) : n(t);
                });
              }));

            case 4:
              if (!("URDNA2015" === t.algorithm)) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return", new h(t).main(e));

            case 6:
              if (!("URGNA2012" === t.algorithm)) {
                _context11.next = 8;
                break;
              }

              return _context11.abrupt("return", new v(t).main(e));

            case 8:
              if ("algorithm" in t) {
                _context11.next = 10;
                break;
              }

              throw new Error("No RDF Dataset Canonicalization algorithm specified.");

            case 10:
              throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + t.algorithm);

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }(), w$1._canonizeSync = function (e, t) {
    if (Array.isArray(e) || (e = w$1.NQuads.legacyDatasetToQuads(e)), t.useNative) {
      if (b) return b.canonizeSync(e, t);
      throw new Error("rdf-canonize-native not available");
    }

    if ("URDNA2015" === t.algorithm) return new g(t).main(e);
    if ("URGNA2012" === t.algorithm) return new m(t).main(e);
    if (!("algorithm" in t)) throw new Error("No RDF Dataset Canonicalization algorithm specified.");
    throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + t.algorithm);
  };
  var I = {};
  var N = I;
  I.isArray = Array.isArray, I.isBoolean = function (e) {
    return "boolean" == typeof e || "[object Boolean]" === Object.prototype.toString.call(e);
  }, I.isDouble = function (e) {
    return I.isNumber(e) && (-1 !== String(e).indexOf(".") || Math.abs(e) >= 1e21);
  }, I.isEmptyObject = function (e) {
    return I.isObject(e) && 0 === Object.keys(e).length;
  }, I.isNumber = function (e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }, I.isNumeric = function (e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }, I.isObject = function (e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }, I.isString = function (e) {
    return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e);
  }, I.isUndefined = function (e) {
    return void 0 === e;
  };
  var S = {};
  var O = S;
  S.isSubject = function (e) {
    if (N.isObject(e) && !("@value" in e || "@set" in e || "@list" in e)) {
      return Object.keys(e).length > 1 || !("@id" in e);
    }

    return !1;
  }, S.isSubjectReference = function (e) {
    return N.isObject(e) && 1 === Object.keys(e).length && "@id" in e;
  }, S.isValue = function (e) {
    return N.isObject(e) && "@value" in e;
  }, S.isList = function (e) {
    return N.isObject(e) && "@list" in e;
  }, S.isGraph = function (e) {
    return N.isObject(e) && "@graph" in e && 1 === Object.keys(e).filter(function (e) {
      return "@id" !== e && "@index" !== e;
    }).length;
  }, S.isSimpleGraph = function (e) {
    return S.isGraph(e) && !("@id" in e);
  }, S.isBlankNode = function (e) {
    return !!N.isObject(e) && ("@id" in e ? 0 === e["@id"].indexOf("_:") : 0 === Object.keys(e).length || !("@value" in e || "@set" in e || "@list" in e));
  };

  var k = /*#__PURE__*/function (_Error) {
    _inherits(k, _Error);

    var _super3 = _createSuper(k);

    function k() {
      var _this3;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "An unspecified JSON-LD error occurred.";
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jsonld.Error";
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck$1(this, k);

      _this3 = _super3.call(this, e), _this3.name = t, _this3.message = e, _this3.details = n;
      return _this3;
    }

    return _createClass$1(k);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var C = j.IdentifierIssuer,
      L = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g,
      A = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/,
      D = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g,
      T = {
    accept: "application/ld+json, application/json"
  },
      R = {};
  var E = R;

  function _(e, t) {
    if (N.isArray(t)) for (var _n11 = 0; _n11 < t.length; ++_n11) {
      t[_n11] = _(e, t[_n11]);
    } else if (O.isList(t)) t["@list"] = _(e, t["@list"]);else if (N.isObject(t)) {
      O.isBlankNode(t) && (t["@id"] = e.getId(t["@id"]));

      var _n12 = Object.keys(t).sort();

      for (var _o16 = 0; _o16 < _n12.length; ++_o16) {
        var _r7 = _n12[_o16];
        "@id" !== _r7 && (t[_r7] = _(e, t[_r7]));
      }
    }
    return t;
  }

  R.IdentifierIssuer = C, R.clone = function (e) {
    if (e && "object" == _typeof(e)) {
      var _t21;

      if (N.isArray(e)) {
        _t21 = [];

        for (var _n13 = 0; _n13 < e.length; ++_n13) {
          _t21[_n13] = R.clone(e[_n13]);
        }
      } else if (e instanceof Map) {
        _t21 = new Map();

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _step29$value = _slicedToArray$1(_step29.value, 2),
                _n14 = _step29$value[0],
                _o17 = _step29$value[1];

            _t21.set(_n14, R.clone(_o17));
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      } else if (e instanceof Set) {
        _t21 = new Set();

        var _iterator30 = _createForOfIteratorHelper(e),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _n15 = _step30.value;

            _t21.add(R.clone(_n15));
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      } else if (N.isObject(e)) {
        _t21 = {};

        for (var _n16 in e) {
          _t21[_n16] = R.clone(e[_n16]);
        }
      } else _t21 = e.toString();

      return _t21;
    }

    return e;
  }, R.asArray = function (e) {
    return Array.isArray(e) ? e : [e];
  }, R.buildHeaders = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (Object.keys(e).some(function (e) {
      return "accept" === e.toLowerCase();
    })) throw new RangeError('Accept header may not be specified; only "' + T.accept + '" is supported.');
    return Object.assign({
      Accept: T.accept
    }, e);
  }, R.parseLinkHeader = function (e) {
    var t = {},
        n = e.match(L);

    for (var _e36 = 0; _e36 < n.length; ++_e36) {
      var _o18 = n[_e36].match(A);

      if (!_o18) continue;
      var _r8 = {
        target: _o18[1]
      },
          _a10 = _o18[2];

      for (; _o18 = D.exec(_a10);) {
        _r8[_o18[1]] = void 0 === _o18[2] ? _o18[3] : _o18[2];
      }

      var _i13 = _r8.rel || "";

      Array.isArray(t[_i13]) ? t[_i13].push(_r8) : t.hasOwnProperty(_i13) ? t[_i13] = [t[_i13], _r8] : t[_i13] = _r8;
    }

    return t;
  }, R.validateTypeValue = function (e, t) {
    if (!(N.isString(e) || N.isArray(e) && e.every(function (e) {
      return N.isString(e);
    }))) {
      if (t && N.isObject(e)) switch (Object.keys(e).length) {
        case 0:
          return;

        case 1:
          if ("@default" in e && R.asArray(e["@default"]).every(function (e) {
            return N.isString(e);
          })) return;
      }
      throw new k('Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.', "jsonld.SyntaxError", {
        code: "invalid type value",
        value: e
      });
    }
  }, R.hasProperty = function (e, t) {
    if (e.hasOwnProperty(t)) {
      var _n17 = e[t];
      return !N.isArray(_n17) || _n17.length > 0;
    }

    return !1;
  }, R.hasValue = function (e, t, n) {
    if (R.hasProperty(e, t)) {
      var _o19 = e[t];

      var _r9 = O.isList(_o19);

      if (N.isArray(_o19) || _r9) {
        _r9 && (_o19 = _o19["@list"]);

        for (var _e37 = 0; _e37 < _o19.length; ++_e37) {
          if (R.compareValues(n, _o19[_e37])) return !0;
        }
      } else if (!N.isArray(n)) return R.compareValues(n, _o19);
    }

    return !1;
  }, R.addValue = function (e, t, n, o) {
    if ("propertyIsArray" in (o = o || {}) || (o.propertyIsArray = !1), "valueIsArray" in o || (o.valueIsArray = !1), "allowDuplicate" in o || (o.allowDuplicate = !0), "prependValue" in o || (o.prependValue = !1), o.valueIsArray) e[t] = n;else if (N.isArray(n)) {
      0 === n.length && o.propertyIsArray && !e.hasOwnProperty(t) && (e[t] = []), o.prependValue && (n = n.concat(e[t]), e[t] = []);

      for (var _r10 = 0; _r10 < n.length; ++_r10) {
        R.addValue(e, t, n[_r10], o);
      }
    } else if (e.hasOwnProperty(t)) {
      var _r11 = !o.allowDuplicate && R.hasValue(e, t, n);

      N.isArray(e[t]) || _r11 && !o.propertyIsArray || (e[t] = [e[t]]), _r11 || (o.prependValue ? e[t].unshift(n) : e[t].push(n));
    } else e[t] = o.propertyIsArray ? [n] : n;
  }, R.getValues = function (e, t) {
    return [].concat(e[t] || []);
  }, R.removeProperty = function (e, t) {
    delete e[t];
  }, R.removeValue = function (e, t, n, o) {
    "propertyIsArray" in (o = o || {}) || (o.propertyIsArray = !1);
    var r = R.getValues(e, t).filter(function (e) {
      return !R.compareValues(e, n);
    });
    0 === r.length ? R.removeProperty(e, t) : 1 !== r.length || o.propertyIsArray ? e[t] = r : e[t] = r[0];
  }, R.relabelBlankNodes = function (e, t) {
    return _((t = t || {}).issuer || new C("_:b"), e);
  }, R.compareValues = function (e, t) {
    return e === t || !(!O.isValue(e) || !O.isValue(t) || e["@value"] !== t["@value"] || e["@type"] !== t["@type"] || e["@language"] !== t["@language"] || e["@index"] !== t["@index"]) || !!(N.isObject(e) && "@id" in e && N.isObject(t) && "@id" in t) && e["@id"] === t["@id"];
  }, R.compareShortestLeast = function (e, t) {
    return e.length < t.length ? -1 : t.length < e.length ? 1 : e === t ? 0 : e < t ? -1 : 1;
  };
  var M = {};
  var P = M;
  M.parsers = {
    simple: {
      keys: ["href", "scheme", "authority", "path", "query", "fragment"],
      regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
    },
    full: {
      keys: ["href", "protocol", "scheme", "authority", "auth", "user", "password", "hostname", "port", "path", "directory", "file", "query", "fragment"],
      regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  }, M.parse = function (e, t) {
    var n = {},
        o = M.parsers[t || "full"],
        r = o.regex.exec(e);
    var a = o.keys.length;

    for (; a--;) {
      n[o.keys[a]] = void 0 === r[a] ? null : r[a];
    }

    return ("https" === n.scheme && "443" === n.port || "http" === n.scheme && "80" === n.port) && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = M.removeDotSegments(n.path), n;
  }, M.prependBase = function (e, t) {
    if (null === e) return t;
    if (M.isAbsolute(t)) return t;
    e && !N.isString(e) || (e = M.parse(e || ""));
    var n = M.parse(t),
        o = {
      protocol: e.protocol || ""
    };
    if (null !== n.authority) o.authority = n.authority, o.path = n.path, o.query = n.query;else if (o.authority = e.authority, "" === n.path) o.path = e.path, null !== n.query ? o.query = n.query : o.query = e.query;else {
      if (0 === n.path.indexOf("/")) o.path = n.path;else {
        var _t22 = e.path;
        _t22 = _t22.substr(0, _t22.lastIndexOf("/") + 1), (_t22.length > 0 || e.authority) && "/" !== _t22.substr(-1) && (_t22 += "/"), _t22 += n.path, o.path = _t22;
      }
      o.query = n.query;
    }
    "" !== n.path && (o.path = M.removeDotSegments(o.path));
    var r = o.protocol;
    return null !== o.authority && (r += "//" + o.authority), r += o.path, null !== o.query && (r += "?" + o.query), null !== n.fragment && (r += "#" + n.fragment), "" === r && (r = "./"), r;
  }, M.removeBase = function (e, t) {
    if (null === e) return t;
    e && !N.isString(e) || (e = M.parse(e || ""));
    var n = "";
    if ("" !== e.href ? n += (e.protocol || "") + "//" + (e.authority || "") : t.indexOf("//") && (n += "//"), 0 !== t.indexOf(n)) return t;
    var o = M.parse(t.substr(n.length)),
        r = e.normalizedPath.split("/"),
        a = o.normalizedPath.split("/"),
        i = o.fragment || o.query ? 0 : 1;

    for (; r.length > 0 && a.length > i && r[0] === a[0];) {
      r.shift(), a.shift();
    }

    var s = "";

    if (r.length > 0) {
      r.pop();

      for (var _e38 = 0; _e38 < r.length; ++_e38) {
        s += "../";
      }
    }

    return s += a.join("/"), null !== o.query && (s += "?" + o.query), null !== o.fragment && (s += "#" + o.fragment), "" === s && (s = "./"), s;
  }, M.removeDotSegments = function (e) {
    if (0 === e.length) return "";
    var t = e.split("/"),
        n = [];

    for (; t.length > 0;) {
      var _e39 = t.shift(),
          _o20 = 0 === t.length;

      "." !== _e39 ? ".." !== _e39 ? n.push(_e39) : (n.pop(), _o20 && n.push("")) : _o20 && n.push("");
    }

    return "/" === e[0] && n.length > 0 && "" !== n[0] && n.unshift(""), 1 === n.length && "" === n[0] ? "/" : n.join("/");
  };
  var J = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  M.isAbsolute = function (e) {
    return N.isString(e) && J.test(e);
  }, M.isRelative = function (e) {
    return N.isString(e);
  };
  var B = F;

  function F(e) {
    var t = this;
    if (t instanceof F || (t = new F()), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function (e) {
      t.push(e);
    });else if (arguments.length > 0) for (var n = 0, o = arguments.length; n < o; n++) {
      t.push(arguments[n]);
    }
    return t;
  }

  function U(e, t, n) {
    var o = t === e.head ? new z(n, null, t, e) : new z(n, t, t.next, e);
    return null === o.next && (e.tail = o), null === o.prev && (e.head = o), e.length++, o;
  }

  function q(e, t) {
    e.tail = new z(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++;
  }

  function V(e, t) {
    e.head = new z(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++;
  }

  function z(e, t, n, o) {
    if (!(this instanceof z)) return new z(e, t, n, o);
    this.list = o, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null;
  }

  F.Node = z, F.create = F, F.prototype.removeNode = function (e) {
    if (e.list !== this) throw new Error("removing node which does not belong to this list");
    var t = e.next,
        n = e.prev;
    return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t;
  }, F.prototype.unshiftNode = function (e) {
    if (e !== this.head) {
      e.list && e.list.removeNode(e);
      var t = this.head;
      e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++;
    }
  }, F.prototype.pushNode = function (e) {
    if (e !== this.tail) {
      e.list && e.list.removeNode(e);
      var t = this.tail;
      e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++;
    }
  }, F.prototype.push = function () {
    for (var e = 0, t = arguments.length; e < t; e++) {
      q(this, arguments[e]);
    }

    return this.length;
  }, F.prototype.unshift = function () {
    for (var e = 0, t = arguments.length; e < t; e++) {
      V(this, arguments[e]);
    }

    return this.length;
  }, F.prototype.pop = function () {
    if (this.tail) {
      var e = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e;
    }
  }, F.prototype.shift = function () {
    if (this.head) {
      var e = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e;
    }
  }, F.prototype.forEach = function (e, t) {
    t = t || this;

    for (var n = this.head, o = 0; null !== n; o++) {
      e.call(t, n.value, o, this), n = n.next;
    }
  }, F.prototype.forEachReverse = function (e, t) {
    t = t || this;

    for (var n = this.tail, o = this.length - 1; null !== n; o--) {
      e.call(t, n.value, o, this), n = n.prev;
    }
  }, F.prototype.get = function (e) {
    for (var t = 0, n = this.head; null !== n && t < e; t++) {
      n = n.next;
    }

    if (t === e && null !== n) return n.value;
  }, F.prototype.getReverse = function (e) {
    for (var t = 0, n = this.tail; null !== n && t < e; t++) {
      n = n.prev;
    }

    if (t === e && null !== n) return n.value;
  }, F.prototype.map = function (e, t) {
    t = t || this;

    for (var n = new F(), o = this.head; null !== o;) {
      n.push(e.call(t, o.value, this)), o = o.next;
    }

    return n;
  }, F.prototype.mapReverse = function (e, t) {
    t = t || this;

    for (var n = new F(), o = this.tail; null !== o;) {
      n.push(e.call(t, o.value, this)), o = o.prev;
    }

    return n;
  }, F.prototype.reduce = function (e, t) {
    var n,
        o = this.head;
    if (arguments.length > 1) n = t;else {
      if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
      o = this.head.next, n = this.head.value;
    }

    for (var r = 0; null !== o; r++) {
      n = e(n, o.value, r), o = o.next;
    }

    return n;
  }, F.prototype.reduceReverse = function (e, t) {
    var n,
        o = this.tail;
    if (arguments.length > 1) n = t;else {
      if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
      o = this.tail.prev, n = this.tail.value;
    }

    for (var r = this.length - 1; null !== o; r--) {
      n = e(n, o.value, r), o = o.prev;
    }

    return n;
  }, F.prototype.toArray = function () {
    for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) {
      e[t] = n.value, n = n.next;
    }

    return e;
  }, F.prototype.toArrayReverse = function () {
    for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) {
      e[t] = n.value, n = n.prev;
    }

    return e;
  }, F.prototype.slice = function (e, t) {
    (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
    var n = new F();
    if (t < e || t < 0) return n;
    e < 0 && (e = 0), t > this.length && (t = this.length);

    for (var o = 0, r = this.head; null !== r && o < e; o++) {
      r = r.next;
    }

    for (; null !== r && o < t; o++, r = r.next) {
      n.push(r.value);
    }

    return n;
  }, F.prototype.sliceReverse = function (e, t) {
    (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
    var n = new F();
    if (t < e || t < 0) return n;
    e < 0 && (e = 0), t > this.length && (t = this.length);

    for (var o = this.length, r = this.tail; null !== r && o > t; o--) {
      r = r.prev;
    }

    for (; null !== r && o > e; o--, r = r.prev) {
      n.push(r.value);
    }

    return n;
  }, F.prototype.splice = function (e, t) {
    e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);

    for (var n = 0, o = this.head; null !== o && n < e; n++) {
      o = o.next;
    }

    var r = [];

    for (n = 0; o && n < t; n++) {
      r.push(o.value), o = this.removeNode(o);
    }

    null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev);

    for (n = 2; n < arguments.length; n++) {
      o = U(this, o, arguments[n]);
    }

    return r;
  }, F.prototype.reverse = function () {
    for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
      var o = n.prev;
      n.prev = n.next, n.next = o;
    }

    return this.head = t, this.tail = e, this;
  };

  try {
    !function (e) {
      e.prototype[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _e40;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _e40 = this.head;

              case 1:
                if (!_e40) {
                  _context12.next = 7;
                  break;
                }

                _context12.next = 4;
                return _e40.value;

              case 4:
                _e40 = _e40.next;
                _context12.next = 1;
                break;

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      });
    }(F);
  } catch (e) {}

  var $ = Symbol("max"),
      G = Symbol("length"),
      H = Symbol("lengthCalculator"),
      Q = Symbol("allowStale"),
      K = Symbol("maxAge"),
      X = Symbol("dispose"),
      Z = Symbol("noDisposeOnSet"),
      W = Symbol("lruList"),
      Y = Symbol("cache"),
      ee = Symbol("updateAgeOnGet"),
      te = function te() {
    return 1;
  };

  var ne = function ne(e, t, n) {
    var o = e[Y].get(t);

    if (o) {
      var _t23 = o.value;

      if (oe(e, _t23)) {
        if (ae(e, o), !e[Q]) return;
      } else n && (e[ee] && (o.value.now = Date.now()), e[W].unshiftNode(o));

      return _t23.value;
    }
  },
      oe = function oe(e, t) {
    if (!t || !t.maxAge && !e[K]) return !1;
    var n = Date.now() - t.now;
    return t.maxAge ? n > t.maxAge : e[K] && n > e[K];
  },
      re = function re(e) {
    if (e[G] > e[$]) for (var _t24 = e[W].tail; e[G] > e[$] && null !== _t24;) {
      var _n18 = _t24.prev;
      ae(e, _t24), _t24 = _n18;
    }
  },
      ae = function ae(e, t) {
    if (t) {
      var _n19 = t.value;
      e[X] && e[X](_n19.key, _n19.value), e[G] -= _n19.length, e[Y]["delete"](_n19.key), e[W].removeNode(t);
    }
  };

  var ie = /*#__PURE__*/_createClass$1(function ie(e, t, n, o, r) {
    _classCallCheck$1(this, ie);

    this.key = e, this.value = t, this.length = n, this.now = o, this.maxAge = r || 0;
  });

  var se = function se(e, t, n, o) {
    var r = n.value;
    oe(e, r) && (ae(e, n), e[Q] || (r = void 0)), r && t.call(o, r.value, r.key, e);
  };

  var le = /*#__PURE__*/function () {
    function le(e) {
      _classCallCheck$1(this, le);

      if ("number" == typeof e && (e = {
        max: e
      }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
      this[$] = e.max || 1 / 0;
      var t = e.length || te;
      if (this[H] = "function" != typeof t ? te : t, this[Q] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
      this[K] = e.maxAge || 0, this[X] = e.dispose, this[Z] = e.noDisposeOnSet || !1, this[ee] = e.updateAgeOnGet || !1, this.reset();
    }

    _createClass$1(le, [{
      key: "max",
      get: function get() {
        return this[$];
      },
      set: function set(e) {
        if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
        this[$] = e || 1 / 0, re(this);
      }
    }, {
      key: "allowStale",
      get: function get() {
        return this[Q];
      },
      set: function set(e) {
        this[Q] = !!e;
      }
    }, {
      key: "maxAge",
      get: function get() {
        return this[K];
      },
      set: function set(e) {
        if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
        this[K] = e, re(this);
      }
    }, {
      key: "lengthCalculator",
      get: function get() {
        return this[H];
      },
      set: function set(e) {
        var _this4 = this;

        "function" != typeof e && (e = te), e !== this[H] && (this[H] = e, this[G] = 0, this[W].forEach(function (e) {
          e.length = _this4[H](e.value, e.key), _this4[G] += e.length;
        })), re(this);
      }
    }, {
      key: "length",
      get: function get() {
        return this[G];
      }
    }, {
      key: "itemCount",
      get: function get() {
        return this[W].length;
      }
    }, {
      key: "rforEach",
      value: function rforEach(e, t) {
        t = t || this;

        for (var _n20 = this[W].tail; null !== _n20;) {
          var _o21 = _n20.prev;
          se(this, e, _n20, t), _n20 = _o21;
        }
      }
    }, {
      key: "forEach",
      value: function forEach(e, t) {
        t = t || this;

        for (var _n21 = this[W].head; null !== _n21;) {
          var _o22 = _n21.next;
          se(this, e, _n21, t), _n21 = _o22;
        }
      }
    }, {
      key: "keys",
      value: function keys() {
        return this[W].toArray().map(function (e) {
          return e.key;
        });
      }
    }, {
      key: "values",
      value: function values() {
        return this[W].toArray().map(function (e) {
          return e.value;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this5 = this;

        this[X] && this[W] && this[W].length && this[W].forEach(function (e) {
          return _this5[X](e.key, e.value);
        }), this[Y] = new Map(), this[W] = new B(), this[G] = 0;
      }
    }, {
      key: "dump",
      value: function dump() {
        var _this6 = this;

        return this[W].map(function (e) {
          return !oe(_this6, e) && {
            k: e.key,
            v: e.value,
            e: e.now + (e.maxAge || 0)
          };
        }).toArray().filter(function (e) {
          return e;
        });
      }
    }, {
      key: "dumpLru",
      value: function dumpLru() {
        return this[W];
      }
    }, {
      key: "set",
      value: function set(e, t, n) {
        if ((n = n || this[K]) && "number" != typeof n) throw new TypeError("maxAge must be a number");
        var o = n ? Date.now() : 0,
            r = this[H](t, e);

        if (this[Y].has(e)) {
          if (r > this[$]) return ae(this, this[Y].get(e)), !1;
          var _a11 = this[Y].get(e).value;
          return this[X] && (this[Z] || this[X](e, _a11.value)), _a11.now = o, _a11.maxAge = n, _a11.value = t, this[G] += r - _a11.length, _a11.length = r, this.get(e), re(this), !0;
        }

        var a = new ie(e, t, r, o, n);
        return a.length > this[$] ? (this[X] && this[X](e, t), !1) : (this[G] += a.length, this[W].unshift(a), this[Y].set(e, this[W].head), re(this), !0);
      }
    }, {
      key: "has",
      value: function has(e) {
        if (!this[Y].has(e)) return !1;
        var t = this[Y].get(e).value;
        return !oe(this, t);
      }
    }, {
      key: "get",
      value: function get(e) {
        return ne(this, e, !0);
      }
    }, {
      key: "peek",
      value: function peek(e) {
        return ne(this, e, !1);
      }
    }, {
      key: "pop",
      value: function pop() {
        var e = this[W].tail;
        return e ? (ae(this, e), e.value) : null;
      }
    }, {
      key: "del",
      value: function del(e) {
        ae(this, this[Y].get(e));
      }
    }, {
      key: "load",
      value: function load(e) {
        this.reset();
        var t = Date.now();

        for (var _n22 = e.length - 1; _n22 >= 0; _n22--) {
          var _o23 = e[_n22],
              _r12 = _o23.e || 0;

          if (0 === _r12) this.set(_o23.k, _o23.v);else {
            var _e41 = _r12 - t;

            _e41 > 0 && this.set(_o23.k, _o23.v, _e41);
          }
        }
      }
    }, {
      key: "prune",
      value: function prune() {
        var _this7 = this;

        this[Y].forEach(function (e, t) {
          return ne(_this7, t, !1);
        });
      }
    }]);

    return le;
  }();

  var ce = /*#__PURE__*/function () {
    function ce(_ref10) {
      var e = _ref10.document;

      _classCallCheck$1(this, ce);

      this.document = e, this.cache = new le({
        max: 10
      });
    }

    _createClass$1(ce, [{
      key: "getProcessed",
      value: function getProcessed(e) {
        return this.cache.get(e);
      }
    }, {
      key: "setProcessed",
      value: function setProcessed(e, t) {
        this.cache.set(e, t);
      }
    }]);

    return ce;
  }();

  var de = N.isArray,
      ue = N.isObject,
      pe = N.isString,
      he = E.asArray,
      fe = P.prependBase;

  var ve = /*#__PURE__*/function () {
    function ve(_ref11) {
      var e = _ref11.sharedCache;

      _classCallCheck$1(this, ve);

      this.perOpCache = new Map(), this.sharedCache = e;
    }

    _createClass$1(ve, [{
      key: "resolve",
      value: function () {
        var _resolve = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_ref12) {
          var e, t, n, o, _ref12$cycles, r, a, _iterator31, _step31, _i14, _t25, _s6, _l4;

          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  e = _ref12.activeCtx, t = _ref12.context, n = _ref12.documentLoader, o = _ref12.base, _ref12$cycles = _ref12.cycles, r = _ref12$cycles === void 0 ? new Set() : _ref12$cycles;
                  t && ue(t) && t["@context"] && (t = t["@context"]), t = he(t);
                  a = [];
                  _iterator31 = _createForOfIteratorHelper(t);
                  _context13.prev = 4;

                  _iterator31.s();

                case 6:
                  if ((_step31 = _iterator31.n()).done) {
                    _context13.next = 26;
                    break;
                  }

                  _i14 = _step31.value;

                  if (!pe(_i14)) {
                    _context13.next = 17;
                    break;
                  }

                  _t25 = this._get(_i14);
                  _context13.t0 = _t25;

                  if (_context13.t0) {
                    _context13.next = 15;
                    break;
                  }

                  _context13.next = 14;
                  return this._resolveRemoteContext({
                    activeCtx: e,
                    url: _i14,
                    documentLoader: n,
                    base: o,
                    cycles: r
                  });

                case 14:
                  _t25 = _context13.sent;

                case 15:
                  de(_t25) ? a.push.apply(a, _toConsumableArray(_t25)) : a.push(_t25);
                  return _context13.abrupt("continue", 24);

                case 17:
                  if (!(null === _i14)) {
                    _context13.next = 20;
                    break;
                  }

                  a.push(new ce({
                    document: null
                  }));
                  return _context13.abrupt("continue", 24);

                case 20:
                  ue(_i14) || ge(t);
                  _s6 = JSON.stringify(_i14);
                  _l4 = this._get(_s6);
                  _l4 || (_l4 = new ce({
                    document: _i14
                  }), this._cacheResolvedContext({
                    key: _s6,
                    resolved: _l4,
                    tag: "static"
                  })), a.push(_l4);

                case 24:
                  _context13.next = 6;
                  break;

                case 26:
                  _context13.next = 31;
                  break;

                case 28:
                  _context13.prev = 28;
                  _context13.t1 = _context13["catch"](4);

                  _iterator31.e(_context13.t1);

                case 31:
                  _context13.prev = 31;

                  _iterator31.f();

                  return _context13.finish(31);

                case 34:
                  return _context13.abrupt("return", a);

                case 35:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this, [[4, 28, 31, 34]]);
        }));

        function resolve(_x17) {
          return _resolve.apply(this, arguments);
        }

        return resolve;
      }()
    }, {
      key: "_get",
      value: function _get(e) {
        var t = this.perOpCache.get(e);

        if (!t) {
          var _n23 = this.sharedCache.get(e);

          _n23 && (t = _n23.get("static"), t && this.perOpCache.set(e, t));
        }

        return t;
      }
    }, {
      key: "_cacheResolvedContext",
      value: function _cacheResolvedContext(_ref13) {
        var e = _ref13.key,
            t = _ref13.resolved,
            n = _ref13.tag;

        if (this.perOpCache.set(e, t), void 0 !== n) {
          var _o24 = this.sharedCache.get(e);

          _o24 || (_o24 = new Map(), this.sharedCache.set(e, _o24)), _o24.set(n, t);
        }

        return t;
      }
    }, {
      key: "_resolveRemoteContext",
      value: function () {
        var _resolveRemoteContext2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref14) {
          var e, t, n, o, r, _yield$this$_fetchCon, a, i, s;

          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  e = _ref14.activeCtx, t = _ref14.url, n = _ref14.documentLoader, o = _ref14.base, r = _ref14.cycles;
                  t = fe(o, t);
                  _context14.next = 4;
                  return this._fetchContext({
                    activeCtx: e,
                    url: t,
                    documentLoader: n,
                    cycles: r
                  });

                case 4:
                  _yield$this$_fetchCon = _context14.sent;
                  a = _yield$this$_fetchCon.context;
                  i = _yield$this$_fetchCon.remoteDoc;
                  ye({
                    context: a,
                    base: o = i.documentUrl || t
                  });
                  _context14.next = 10;
                  return this.resolve({
                    activeCtx: e,
                    context: a,
                    documentLoader: n,
                    base: o,
                    cycles: r
                  });

                case 10:
                  s = _context14.sent;
                  return _context14.abrupt("return", (this._cacheResolvedContext({
                    key: t,
                    resolved: s,
                    tag: i.tag
                  }), s));

                case 12:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        function _resolveRemoteContext(_x18) {
          return _resolveRemoteContext2.apply(this, arguments);
        }

        return _resolveRemoteContext;
      }()
    }, {
      key: "_fetchContext",
      value: function () {
        var _fetchContext2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref15) {
          var e, t, n, o, r, a;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  e = _ref15.activeCtx, t = _ref15.url, n = _ref15.documentLoader, o = _ref15.cycles;

                  if (!(o.size > 10)) {
                    _context15.next = 3;
                    break;
                  }

                  throw new k("Maximum number of @context URLs exceeded.", "jsonld.ContextUrlError", {
                    code: "json-ld-1.0" === e.processingMode ? "loading remote context failed" : "context overflow",
                    max: 10
                  });

                case 3:
                  if (!o.has(t)) {
                    _context15.next = 5;
                    break;
                  }

                  throw new k("Cyclical @context URLs detected.", "jsonld.ContextUrlError", {
                    code: "json-ld-1.0" === e.processingMode ? "recursive context inclusion" : "context overflow",
                    url: t
                  });

                case 5:
                  o.add(t);
                  _context15.prev = 6;
                  _context15.next = 9;
                  return n(t);

                case 9:
                  a = _context15.sent;
                  r = a.document || null;
                  pe(r) && (r = JSON.parse(r));
                  _context15.next = 17;
                  break;

                case 14:
                  _context15.prev = 14;
                  _context15.t0 = _context15["catch"](6);
                  throw new k("Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.", "jsonld.InvalidUrl", {
                    code: "loading remote context failed",
                    url: t,
                    cause: _context15.t0
                  });

                case 17:
                  if (ue(r)) {
                    _context15.next = 19;
                    break;
                  }

                  throw new k("Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.", "jsonld.InvalidUrl", {
                    code: "invalid remote context",
                    url: t
                  });

                case 19:
                  return _context15.abrupt("return", (r = "@context" in r ? {
                    "@context": r["@context"]
                  } : {
                    "@context": {}
                  }, a.contextUrl && (de(r["@context"]) || (r["@context"] = [r["@context"]]), r["@context"].push(a.contextUrl)), {
                    context: r,
                    remoteDoc: a
                  }));

                case 20:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, null, [[6, 14]]);
        }));

        function _fetchContext(_x19) {
          return _fetchContext2.apply(this, arguments);
        }

        return _fetchContext;
      }()
    }]);

    return ve;
  }();

  function ge(e) {
    throw new k("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", {
      code: "invalid local context",
      context: e
    });
  }

  function ye(_ref16) {
    var e = _ref16.context,
        t = _ref16.base;
    if (!e) return;
    var n = e["@context"];
    if (pe(n)) e["@context"] = fe(t, n);else if (de(n)) for (var _e42 = 0; _e42 < n.length; ++_e42) {
      var _o25 = n[_e42];
      pe(_o25) ? n[_e42] = fe(t, _o25) : ue(_o25) && ye({
        context: {
          "@context": _o25
        },
        base: t
      });
    } else if (ue(n)) for (var _e43 in n) {
      ye({
        context: n[_e43],
        base: t
      });
    }
  }

  var me = j.NQuads;
  var xe = N.isArray,
      be = N.isObject,
      we = N.isString,
      je = N.isUndefined,
      Ie = P.isAbsolute,
      Ne = P.isRelative,
      Se = P.prependBase,
      Oe = E.asArray,
      ke = E.compareShortestLeast,
      Ce = new Map(),
      Le = /^@[a-zA-Z]+$/,
      Ae = {};
  var De = Ae;

  function Te(e, t, n, o, r, a) {
    if (null === t || !we(t) || Ae.isKeyword(t)) return t;
    if (t.match(Le)) return null;

    if (o && o.hasOwnProperty(t) && !0 !== r.get(t) && Ae.createTermDefinition({
      activeCtx: e,
      localCtx: o,
      term: t,
      defined: r,
      options: a
    }), (n = n || {}).vocab) {
      var _n24 = e.mappings.get(t);

      if (null === _n24) return null;
      if (be(_n24) && "@id" in _n24) return _n24["@id"];
    }

    var i = t.indexOf(":");

    if (i > 0) {
      var _n25 = t.substr(0, i),
          _s7 = t.substr(i + 1);

      if ("_" === _n25 || 0 === _s7.indexOf("//")) return t;
      o && o.hasOwnProperty(_n25) && Ae.createTermDefinition({
        activeCtx: e,
        localCtx: o,
        term: _n25,
        defined: r,
        options: a
      });

      var _l5 = e.mappings.get(_n25);

      if (_l5 && _l5._prefix) return _l5["@id"] + _s7;
      if (Ie(t)) return t;
    }

    if (n.vocab && "@vocab" in e) return e["@vocab"] + t;

    if (n.base && "@base" in e) {
      if (e["@base"]) return Se(Se(a.base, e["@base"]), t);
    } else if (n.base) return Se(a.base, t);

    return t;
  }

  function Re(e, t) {
    if (!e || "object" != _typeof(e) || !t || "object" != _typeof(t)) return e === t;
    var n = Array.isArray(e);
    if (n !== Array.isArray(t)) return !1;

    if (n) {
      if (e.length !== t.length) return !1;

      for (var _n26 = 0; _n26 < e.length; ++_n26) {
        if (!Re(e[_n26], t[_n26])) return !1;
      }

      return !0;
    }

    var o = Object.keys(e),
        r = Object.keys(t);
    if (o.length !== r.length) return !1;

    for (var _n27 in e) {
      var _o26 = e[_n27],
          _r13 = t[_n27];
      if ("@container" === _n27 && Array.isArray(_o26) && Array.isArray(_r13) && (_o26 = _o26.slice().sort(), _r13 = _r13.slice().sort()), !Re(_o26, _r13)) return !1;
    }

    return !0;
  }

  Ae.process = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref17) {
      var e, t, n, _ref17$propagate, o, _ref17$overrideProtec, r, _ref17$cycles, a, i, s, _iterator32, _step32, _o27, _i15, _r14, _t26, _r15, _i16, _Object$entries, _Object$entries$_i, _t27, _n28, _l6, _c2, _e44, _e45, _e46, _t28, _n29, _o28, _r16, _a12, _n30, _e47, _e48, _t29, _o29, _e49;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e = _ref17.activeCtx, t = _ref17.localCtx, n = _ref17.options, _ref17$propagate = _ref17.propagate, o = _ref17$propagate === void 0 ? !0 : _ref17$propagate, _ref17$overrideProtec = _ref17.overrideProtected, r = _ref17$overrideProtec === void 0 ? !1 : _ref17$overrideProtec, _ref17$cycles = _ref17.cycles, a = _ref17$cycles === void 0 ? new Set() : _ref17$cycles;
              be(t) && "@context" in t && xe(t["@context"]) && (t = t["@context"]);

              if (!(0 === Oe(t).length)) {
                _context16.next = 4;
                break;
              }

              return _context16.abrupt("return", e);

            case 4:
              _context16.next = 6;
              return n.contextResolver.resolve({
                activeCtx: e,
                context: t,
                documentLoader: n.documentLoader,
                base: n.base
              });

            case 6:
              i = _context16.sent;
              be(i[0].document) && "boolean" == typeof i[0].document["@propagate"] && (o = i[0].document["@propagate"]);
              s = e;
              o || s.previousContext || (s = s.clone(), s.previousContext = e);
              _iterator32 = _createForOfIteratorHelper(i);
              _context16.prev = 11;

              _iterator32.s();

            case 13:
              if ((_step32 = _iterator32.n()).done) {
                _context16.next = 144;
                break;
              }

              _o27 = _step32.value;
              _i15 = _o27.document;

              if (!(e = s, null === _i15)) {
                _context16.next = 35;
                break;
              }

              if (!(!r && 0 !== Object.keys(e["protected"]).length)) {
                _context16.next = 33;
                break;
              }

              _r14 = n && n.protectedMode || "error";

              if (!("error" === _r14)) {
                _context16.next = 21;
                break;
              }

              throw new k("Tried to nullify a context with protected terms outside of a term definition.", "jsonld.SyntaxError", {
                code: "invalid context nullification"
              });

            case 21:
              if (!("warn" === _r14)) {
                _context16.next = 32;
                break;
              }

              console.warn("WARNING: invalid context nullification");
              _t26 = _o27.getProcessed(e);

              if (!_t26) {
                _context16.next = 27;
                break;
              }

              s = e = _t26;
              return _context16.abrupt("continue", 142);

            case 27:
              _r15 = e;
              s = e = Ae.getInitialContext(n).clone();

              for (_i16 = 0, _Object$entries = Object.entries(_r15["protected"]); _i16 < _Object$entries.length; _i16++) {
                _Object$entries$_i = _slicedToArray$1(_Object$entries[_i16], 2), _t27 = _Object$entries$_i[0], _n28 = _Object$entries$_i[1];
                _n28 && (e.mappings[_t27] = E.clone(_r15.mappings[_t27]));
              }

              e["protected"] = E.clone(_r15["protected"]), _o27.setProcessed(_r15, s);
              return _context16.abrupt("continue", 142);

            case 32:
              throw new k("Invalid protectedMode.", "jsonld.SyntaxError", {
                code: "invalid protected mode",
                context: t,
                protectedMode: _r14
              });

            case 33:
              s = e = Ae.getInitialContext(n).clone();
              return _context16.abrupt("continue", 142);

            case 35:
              _l6 = _o27.getProcessed(e);

              if (!_l6) {
                _context16.next = 39;
                break;
              }

              s = e = _l6;
              return _context16.abrupt("continue", 142);

            case 39:
              if (!(be(_i15) && "@context" in _i15 && (_i15 = _i15["@context"]), !be(_i15))) {
                _context16.next = 41;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", {
                code: "invalid local context",
                context: _i15
              });

            case 41:
              s = s.clone();
              _c2 = new Map();

              if (!("@version" in _i15)) {
                _context16.next = 49;
                break;
              }

              if (!(1.1 !== _i15["@version"])) {
                _context16.next = 46;
                break;
              }

              throw new k("Unsupported JSON-LD version: " + _i15["@version"], "jsonld.UnsupportedVersion", {
                code: "invalid @version value",
                context: _i15
              });

            case 46:
              if (!(e.processingMode && "json-ld-1.0" === e.processingMode)) {
                _context16.next = 48;
                break;
              }

              throw new k("@version: " + _i15["@version"] + " not compatible with " + e.processingMode, "jsonld.ProcessingModeConflict", {
                code: "processing mode conflict",
                context: _i15
              });

            case 48:
              s.processingMode = "json-ld-1.1", s["@version"] = _i15["@version"], _c2.set("@version", !0);

            case 49:
              if (!(s.processingMode = s.processingMode || e.processingMode, "@base" in _i15)) {
                _context16.next = 59;
                break;
              }

              _e44 = _i15["@base"];

              if (!(null === _e44 || Ie(_e44))) {
                _context16.next = 55;
                break;
              }
              _context16.next = 58;
              break;

            case 55:
              if (Ne(_e44)) {
                _context16.next = 57;
                break;
              }

              throw new k('Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.', "jsonld.SyntaxError", {
                code: "invalid base IRI",
                context: _i15
              });

            case 57:
              _e44 = Se(s["@base"], _e44);

            case 58:
              s["@base"] = _e44, _c2.set("@base", !0);

            case 59:
              if (!("@vocab" in _i15)) {
                _context16.next = 71;
                break;
              }

              _e45 = _i15["@vocab"];

              if (!(null === _e45)) {
                _context16.next = 65;
                break;
              }

              delete s["@vocab"];
              _context16.next = 70;
              break;

            case 65:
              if (we(_e45)) {
                _context16.next = 67;
                break;
              }

              throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.', "jsonld.SyntaxError", {
                code: "invalid vocab mapping",
                context: _i15
              });

            case 67:
              if (!(!Ie(_e45) && Ae.processingMode(s, 1))) {
                _context16.next = 69;
                break;
              }

              throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.', "jsonld.SyntaxError", {
                code: "invalid vocab mapping",
                context: _i15
              });

            case 69:
              s["@vocab"] = Te(s, _e45, {
                vocab: !0,
                base: !0
              }, void 0, void 0, n);

            case 70:
              _c2.set("@vocab", !0);

            case 71:
              if (!("@language" in _i15)) {
                _context16.next = 81;
                break;
              }

              _e46 = _i15["@language"];

              if (!(null === _e46)) {
                _context16.next = 77;
                break;
              }

              delete s["@language"];
              _context16.next = 80;
              break;

            case 77:
              if (we(_e46)) {
                _context16.next = 79;
                break;
              }

              throw new k('Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.', "jsonld.SyntaxError", {
                code: "invalid default language",
                context: _i15
              });

            case 79:
              s["@language"] = _e46.toLowerCase();

            case 80:
              _c2.set("@language", !0);

            case 81:
              if (!("@direction" in _i15)) {
                _context16.next = 93;
                break;
              }

              _t28 = _i15["@direction"];

              if (!("json-ld-1.0" === e.processingMode)) {
                _context16.next = 85;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @direction not compatible with " + e.processingMode, "jsonld.SyntaxError", {
                code: "invalid context member",
                context: _i15
              });

            case 85:
              if (!(null === _t28)) {
                _context16.next = 89;
                break;
              }

              delete s["@direction"];
              _context16.next = 92;
              break;

            case 89:
              if (!("ltr" !== _t28 && "rtl" !== _t28)) {
                _context16.next = 91;
                break;
              }

              throw new k('Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".', "jsonld.SyntaxError", {
                code: "invalid base direction",
                context: _i15
              });

            case 91:
              s["@direction"] = _t28;

            case 92:
              _c2.set("@direction", !0);

            case 93:
              if (!("@propagate" in _i15)) {
                _context16.next = 100;
                break;
              }

              _n29 = _i15["@propagate"];

              if (!("json-ld-1.0" === e.processingMode)) {
                _context16.next = 97;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @propagate not compatible with " + e.processingMode, "jsonld.SyntaxError", {
                code: "invalid context entry",
                context: _i15
              });

            case 97:
              if (!("boolean" != typeof _n29)) {
                _context16.next = 99;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @propagate value must be a boolean.", "jsonld.SyntaxError", {
                code: "invalid @propagate value",
                context: t
              });

            case 99:
              _c2.set("@propagate", !0);

            case 100:
              if (!("@import" in _i15)) {
                _context16.next = 122;
                break;
              }

              _o28 = _i15["@import"];

              if (!("json-ld-1.0" === e.processingMode)) {
                _context16.next = 104;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @import not compatible with " + e.processingMode, "jsonld.SyntaxError", {
                code: "invalid context entry",
                context: _i15
              });

            case 104:
              if (we(_o28)) {
                _context16.next = 106;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @import must be a string.", "jsonld.SyntaxError", {
                code: "invalid @import value",
                context: t
              });

            case 106:
              _context16.next = 108;
              return n.contextResolver.resolve({
                activeCtx: e,
                context: _o28,
                documentLoader: n.documentLoader,
                base: n.base
              });

            case 108:
              _r16 = _context16.sent;

              if (!(1 !== _r16.length)) {
                _context16.next = 111;
                break;
              }

              throw new k("Invalid JSON-LD syntax; @import must reference a single context.", "jsonld.SyntaxError", {
                code: "invalid remote context",
                context: t
              });

            case 111:
              _a12 = _r16[0].getProcessed(e);

              if (!_a12) {
                _context16.next = 116;
                break;
              }

              _i15 = _a12;
              _context16.next = 121;
              break;

            case 116:
              _n30 = _r16[0].document;

              if (!("@import" in _n30)) {
                _context16.next = 119;
                break;
              }

              throw new k("Invalid JSON-LD syntax: imported context must not include @import.", "jsonld.SyntaxError", {
                code: "invalid context entry",
                context: t
              });

            case 119:
              for (_e47 in _n30) {
                _i15.hasOwnProperty(_e47) || (_i15[_e47] = _n30[_e47]);
              }

              _r16[0].setProcessed(e, _i15);

            case 121:
              _c2.set("@import", !0);

            case 122:
              _c2.set("@protected", _i15["@protected"] || !1);

              _context16.t0 = regeneratorRuntime.keys(_i15);

            case 124:
              if ((_context16.t1 = _context16.t0()).done) {
                _context16.next = 141;
                break;
              }

              _e48 = _context16.t1.value;

              if (!(Ae.createTermDefinition({
                activeCtx: s,
                localCtx: _i15,
                term: _e48,
                defined: _c2,
                options: n,
                overrideProtected: r
              }), be(_i15[_e48]) && "@context" in _i15[_e48])) {
                _context16.next = 139;
                break;
              }

              _t29 = _i15[_e48]["@context"];
              _o29 = !0;

              if (we(_t29)) {
                _e49 = Se(n.base, _t29);
                a.has(_e49) ? _o29 = !1 : a.add(_e49);
              }

              if (!_o29) {
                _context16.next = 139;
                break;
              }

              _context16.prev = 131;
              _context16.next = 134;
              return Ae.process({
                activeCtx: s.clone(),
                localCtx: _i15[_e48]["@context"],
                overrideProtected: !0,
                options: n,
                cycles: a
              });

            case 134:
              _context16.next = 139;
              break;

            case 136:
              _context16.prev = 136;
              _context16.t2 = _context16["catch"](131);
              throw new k("Invalid JSON-LD syntax; invalid scoped context.", "jsonld.SyntaxError", {
                code: "invalid scoped context",
                context: _i15[_e48]["@context"],
                term: _e48
              });

            case 139:
              _context16.next = 124;
              break;

            case 141:
              _o27.setProcessed(e, s);

            case 142:
              _context16.next = 13;
              break;

            case 144:
              _context16.next = 149;
              break;

            case 146:
              _context16.prev = 146;
              _context16.t3 = _context16["catch"](11);

              _iterator32.e(_context16.t3);

            case 149:
              _context16.prev = 149;

              _iterator32.f();

              return _context16.finish(149);

            case 152:
              return _context16.abrupt("return", s);

            case 153:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[11, 146, 149, 152], [131, 136]]);
    }));

    return function (_x20) {
      return _ref18.apply(this, arguments);
    };
  }(), Ae.createTermDefinition = function (_ref19) {
    var e = _ref19.activeCtx,
        t = _ref19.localCtx,
        n = _ref19.term,
        o = _ref19.defined,
        r = _ref19.options,
        _ref19$overrideProtec = _ref19.overrideProtected,
        a = _ref19$overrideProtec === void 0 ? !1 : _ref19$overrideProtec;

    if (o.has(n)) {
      if (o.get(n)) return;
      throw new k("Cyclical context definition detected.", "jsonld.CyclicalContext", {
        code: "cyclic IRI mapping",
        context: t,
        term: n
      });
    }

    var i;

    if (o.set(n, !1), t.hasOwnProperty(n) && (i = t[n]), "@type" === n && be(i) && "@set" === (i["@container"] || "@set") && Ae.processingMode(e, 1.1)) {
      var _e50 = ["@container", "@id", "@protected"],
          _o30 = Object.keys(i);

      if (0 === _o30.length || _o30.some(function (t) {
        return !_e50.includes(t);
      })) throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", {
        code: "keyword redefinition",
        context: t,
        term: n
      });
    } else {
      if (Ae.isKeyword(n)) throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", {
        code: "keyword redefinition",
        context: t,
        term: n
      });
      if (n.match(Le)) return void console.warn('WARNING: terms beginning with "@" are reserved for future use and ignored', {
        term: n
      });
      if ("" === n) throw new k("Invalid JSON-LD syntax; a term cannot be an empty string.", "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
    }

    var s = e.mappings.get(n);
    e.mappings.has(n) && e.mappings["delete"](n);
    var l = !1;
    if ((we(i) || null === i) && (l = !0, i = {
      "@id": i
    }), !be(i)) throw new k("Invalid JSON-LD syntax; @context term values must be strings or objects.", "jsonld.SyntaxError", {
      code: "invalid term definition",
      context: t
    });
    var c = {};
    e.mappings.set(n, c), c.reverse = !1;
    var d = ["@container", "@id", "@language", "@reverse", "@type"];
    Ae.processingMode(e, 1.1) && d.push("@context", "@direction", "@index", "@nest", "@prefix", "@protected");

    for (var _e51 in i) {
      if (!d.includes(_e51)) throw new k("Invalid JSON-LD syntax; a term definition must not contain " + _e51, "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
    }

    var u = n.indexOf(":");

    if (c._termHasColon = u > 0, "@reverse" in i) {
      if ("@id" in i) throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.", "jsonld.SyntaxError", {
        code: "invalid reverse property",
        context: t
      });
      if ("@nest" in i) throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.", "jsonld.SyntaxError", {
        code: "invalid reverse property",
        context: t
      });
      var _a13 = i["@reverse"];
      if (!we(_a13)) throw new k("Invalid JSON-LD syntax; a @context @reverse value must be a string.", "jsonld.SyntaxError", {
        code: "invalid IRI mapping",
        context: t
      });
      if (!Ae.isKeyword(_a13) && _a13.match(Le)) return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored', {
        reverse: _a13
      }), void (s ? e.mappings.set(n, s) : e.mappings["delete"](n));

      var _l7 = Te(e, _a13, {
        vocab: !0,
        base: !1
      }, t, o, r);

      if (!Ie(_l7)) throw new k("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.", "jsonld.SyntaxError", {
        code: "invalid IRI mapping",
        context: t
      });
      c["@id"] = _l7, c.reverse = !0;
    } else if ("@id" in i) {
      var _a14 = i["@id"];
      if (_a14 && !we(_a14)) throw new k("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.", "jsonld.SyntaxError", {
        code: "invalid IRI mapping",
        context: t
      });
      if (null === _a14) c["@id"] = null;else {
        if (!Ae.isKeyword(_a14) && _a14.match(Le)) return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored', {
          id: _a14
        }), void (s ? e.mappings.set(n, s) : e.mappings["delete"](n));

        if (_a14 !== n) {
          if (_a14 = Te(e, _a14, {
            vocab: !0,
            base: !1
          }, t, o, r), !Ie(_a14) && !Ae.isKeyword(_a14)) throw new k("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.", "jsonld.SyntaxError", {
            code: "invalid IRI mapping",
            context: t
          });

          if (n.match(/(?::[^:])|\//)) {
            if (Te(e, n, {
              vocab: !0,
              base: !1
            }, t, new Map(o).set(n, !0), r) !== _a14) throw new k("Invalid JSON-LD syntax; term in form of IRI must expand to definition.", "jsonld.SyntaxError", {
              code: "invalid IRI mapping",
              context: t
            });
          }

          c["@id"] = _a14, c._prefix = l && !c._termHasColon && _a14.match(/[:\/\?#\[\]@]$/);
        }
      }
    }

    if (!("@id" in c)) if (c._termHasColon) {
      var _a15 = n.substr(0, u);

      if (t.hasOwnProperty(_a15) && Ae.createTermDefinition({
        activeCtx: e,
        localCtx: t,
        term: _a15,
        defined: o,
        options: r
      }), e.mappings.has(_a15)) {
        var _t30 = n.substr(u + 1);

        c["@id"] = e.mappings.get(_a15)["@id"] + _t30;
      } else c["@id"] = n;
    } else if ("@type" === n) c["@id"] = n;else {
      if (!("@vocab" in e)) throw new k("Invalid JSON-LD syntax; @context terms must define an @id.", "jsonld.SyntaxError", {
        code: "invalid IRI mapping",
        context: t,
        term: n
      });
      c["@id"] = e["@vocab"] + n;
    }

    if ((!0 === i["@protected"] || !0 === o.get("@protected") && !1 !== i["@protected"]) && (e["protected"][n] = !0, c["protected"] = !0), o.set(n, !0), "@type" in i) {
      var _n31 = i["@type"];
      if (!we(_n31)) throw new k("Invalid JSON-LD syntax; an @context @type value must be a string.", "jsonld.SyntaxError", {
        code: "invalid type mapping",
        context: t
      });

      if ("@json" === _n31 || "@none" === _n31) {
        if (Ae.processingMode(e, 1)) throw new k("Invalid JSON-LD syntax; an @context @type value must not be \"".concat(_n31, "\" in JSON-LD 1.0 mode."), "jsonld.SyntaxError", {
          code: "invalid type mapping",
          context: t
        });
      } else if ("@id" !== _n31 && "@vocab" !== _n31) {
        if (_n31 = Te(e, _n31, {
          vocab: !0,
          base: !1
        }, t, o, r), !Ie(_n31)) throw new k("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.", "jsonld.SyntaxError", {
          code: "invalid type mapping",
          context: t
        });
        if (0 === _n31.indexOf("_:")) throw new k("Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.", "jsonld.SyntaxError", {
          code: "invalid type mapping",
          context: t
        });
      }

      c["@type"] = _n31;
    }

    if ("@container" in i) {
      var _n32 = we(i["@container"]) ? [i["@container"]] : i["@container"] || [],
          _o31 = ["@list", "@set", "@index", "@language"];

      var _r17 = !0;

      var _a16 = _n32.includes("@set");

      if (Ae.processingMode(e, 1.1)) {
        if (_o31.push("@graph", "@id", "@type"), _n32.includes("@list")) {
          if (1 !== _n32.length) throw new k("Invalid JSON-LD syntax; @context @container with @list must have no other values", "jsonld.SyntaxError", {
            code: "invalid container mapping",
            context: t
          });
        } else if (_n32.includes("@graph")) {
          if (_n32.some(function (e) {
            return "@graph" !== e && "@id" !== e && "@index" !== e && "@set" !== e;
          })) throw new k("Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set", "jsonld.SyntaxError", {
            code: "invalid container mapping",
            context: t
          });
        } else _r17 &= _n32.length <= (_a16 ? 2 : 1);

        if (_n32.includes("@type") && (c["@type"] = c["@type"] || "@id", !["@id", "@vocab"].includes(c["@type"]))) throw new k("Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.", "jsonld.SyntaxError", {
          code: "invalid type mapping",
          context: t
        });
      } else _r17 &= !xe(i["@container"]), _r17 &= _n32.length <= 1;

      if (_r17 &= _n32.every(function (e) {
        return _o31.includes(e);
      }), _r17 &= !(_a16 && _n32.includes("@list")), !_r17) throw new k("Invalid JSON-LD syntax; @context @container value must be one of the following: " + _o31.join(", "), "jsonld.SyntaxError", {
        code: "invalid container mapping",
        context: t
      });
      if (c.reverse && !_n32.every(function (e) {
        return ["@index", "@set"].includes(e);
      })) throw new k("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.", "jsonld.SyntaxError", {
        code: "invalid reverse property",
        context: t
      });
      c["@container"] = _n32;
    }

    if ("@index" in i) {
      if (!("@container" in i) || !c["@container"].includes("@index")) throw new k("Invalid JSON-LD syntax; @index without @index in @container: \"".concat(i["@index"], "\" on term \"").concat(n, "\"."), "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
      if (!we(i["@index"]) || 0 === i["@index"].indexOf("@")) throw new k("Invalid JSON-LD syntax; @index must expand to an IRI: \"".concat(i["@index"], "\" on term \"").concat(n, "\"."), "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
      c["@index"] = i["@index"];
    }

    if ("@context" in i && (c["@context"] = i["@context"]), "@language" in i && !("@type" in i)) {
      var _e52 = i["@language"];
      if (null !== _e52 && !we(_e52)) throw new k("Invalid JSON-LD syntax; @context @language value must be a string or null.", "jsonld.SyntaxError", {
        code: "invalid language mapping",
        context: t
      });
      null !== _e52 && (_e52 = _e52.toLowerCase()), c["@language"] = _e52;
    }

    if ("@prefix" in i) {
      if (n.match(/:|\//)) throw new k("Invalid JSON-LD syntax; @context @prefix used on a compact IRI term", "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
      if (Ae.isKeyword(c["@id"])) throw new k("Invalid JSON-LD syntax; keywords may not be used as prefixes", "jsonld.SyntaxError", {
        code: "invalid term definition",
        context: t
      });
      if ("boolean" != typeof i["@prefix"]) throw new k("Invalid JSON-LD syntax; @context value for @prefix must be boolean", "jsonld.SyntaxError", {
        code: "invalid @prefix value",
        context: t
      });
      c._prefix = !0 === i["@prefix"];
    }

    if ("@direction" in i) {
      var _e53 = i["@direction"];
      if (null !== _e53 && "ltr" !== _e53 && "rtl" !== _e53) throw new k('Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".', "jsonld.SyntaxError", {
        code: "invalid base direction",
        context: t
      });
      c["@direction"] = _e53;
    }

    if ("@nest" in i) {
      var _e54 = i["@nest"];
      if (!we(_e54) || "@nest" !== _e54 && 0 === _e54.indexOf("@")) throw new k("Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.", "jsonld.SyntaxError", {
        code: "invalid @nest value",
        context: t
      });
      c["@nest"] = _e54;
    } // disallow aliasing @context and @preserve


    var p = c["@id"];
    if ("@context" === p || "@preserve" === p) throw new k("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.", "jsonld.SyntaxError", {
      code: "invalid keyword alias",
      context: t
    });

    if (s && s["protected"] && !a && (e["protected"][n] = !0, c["protected"] = !0, !Re(s, c))) {
      var _e55 = r && r.protectedMode || "error";

      if ("error" === _e55) throw new k("Invalid JSON-LD syntax; tried to redefine \"".concat(n, "\" which is a protected term."), "jsonld.SyntaxError", {
        code: "protected term redefinition",
        context: t,
        term: n
      });
      if ("warn" === _e55) return void console.warn("WARNING: protected term redefinition", {
        term: n
      });
      throw new k("Invalid protectedMode.", "jsonld.SyntaxError", {
        code: "invalid protected mode",
        context: t,
        term: n,
        protectedMode: _e55
      });
    }
  }, Ae.expandIri = function (e, t, n, o) {
    return Te(e, t, n, void 0, void 0, o);
  }, Ae.getInitialContext = function (e) {
    var t = JSON.stringify({
      processingMode: e.processingMode
    }),
        n = Ce.get(t);
    if (n) return n;
    var o = {
      processingMode: e.processingMode,
      mappings: new Map(),
      inverse: null,
      getInverse: function getInverse() {
        var e = this;
        if (e.inverse) return e.inverse;

        var t = e.inverse = {},
            n = e.fastCurieMap = {},
            o = {},
            i = (e["@language"] || "@none").toLowerCase(),
            s = e["@direction"],
            l = e.mappings,
            c = _toConsumableArray(l.keys()).sort(ke);

        var _iterator33 = _createForOfIteratorHelper(c),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var _e57 = _step33.value;

            var _r18 = l.get(_e57);

            if (null === _r18) continue;

            var _c3 = _r18["@container"] || "@none";

            if (_c3 = [].concat(_c3).sort().join(""), null === _r18["@id"]) continue;

            var _d = Oe(_r18["@id"]);

            var _iterator34 = _createForOfIteratorHelper(_d),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _l8 = _step34.value;
                var _d2 = t[_l8];

                var _u = Ae.isKeyword(_l8);

                if (_d2) _u || _r18._termHasColon || o[_l8].push(_e57);else if (t[_l8] = _d2 = {}, !_u && !_r18._termHasColon) {
                  o[_l8] = [_e57];
                  var _t31 = {
                    iri: _l8,
                    terms: o[_l8]
                  };
                  _l8[0] in n ? n[_l8[0]].push(_t31) : n[_l8[0]] = [_t31];
                }
                if (_d2[_c3] || (_d2[_c3] = {
                  "@language": {},
                  "@type": {},
                  "@any": {}
                }), _d2 = _d2[_c3], a(_e57, _d2["@any"], "@none"), _r18.reverse) a(_e57, _d2["@type"], "@reverse");else if ("@none" === _r18["@type"]) a(_e57, _d2["@any"], "@none"), a(_e57, _d2["@language"], "@none"), a(_e57, _d2["@type"], "@none");else if ("@type" in _r18) a(_e57, _d2["@type"], _r18["@type"]);else if ("@language" in _r18 && "@direction" in _r18) {
                  var _t32 = _r18["@language"],
                      _n33 = _r18["@direction"];
                  a(_e57, _d2["@language"], _t32 && _n33 ? "".concat(_t32, "_").concat(_n33).toLowerCase() : _t32 ? _t32.toLowerCase() : _n33 ? "_".concat(_n33) : "@null");
                } else "@language" in _r18 ? a(_e57, _d2["@language"], (_r18["@language"] || "@null").toLowerCase()) : "@direction" in _r18 ? _r18["@direction"] ? a(_e57, _d2["@language"], "_".concat(_r18["@direction"])) : a(_e57, _d2["@language"], "@none") : s ? (a(_e57, _d2["@language"], "_".concat(s)), a(_e57, _d2["@language"], "@none"), a(_e57, _d2["@type"], "@none")) : (a(_e57, _d2["@language"], i), a(_e57, _d2["@language"], "@none"), a(_e57, _d2["@type"], "@none"));
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }

        for (var _e56 in n) {
          r(n, _e56, 1);
        }

        return t;
      },
      clone: function clone() {
        var e = {};
        e.mappings = E.clone(this.mappings), e.clone = this.clone, e.inverse = null, e.getInverse = this.getInverse, e["protected"] = E.clone(this["protected"]), this.previousContext && (e.previousContext = this.previousContext.clone());
        e.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (e["@base"] = this["@base"]);
        "@language" in this && (e["@language"] = this["@language"]);
        "@vocab" in this && (e["@vocab"] = this["@vocab"]);
        return e;
      },
      revertToPreviousContext: function revertToPreviousContext() {
        if (!this.previousContext) return this;
        return this.previousContext.clone();
      },
      "protected": {}
    };
    return 1e4 === Ce.size && Ce.clear(), Ce.set(t, o), o;

    function r(e, t, n) {
      var o = e[t],
          a = e[t] = {};
      var i, s;

      var _iterator35 = _createForOfIteratorHelper(o),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _e59 = _step35.value;
          i = _e59.iri, s = n >= i.length ? "" : i[n], s in a ? a[s].push(_e59) : a[s] = [_e59];
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }

      for (var _e58 in a) {
        "" !== _e58 && r(a, _e58, n + 1);
      }
    }

    function a(e, t, n) {
      t.hasOwnProperty(n) || (t[n] = e);
    }
  }, Ae.getContextValue = function (e, t, n) {
    if (null === t) {
      if ("@context" === n) return;
      return null;
    }

    if (e.mappings.has(t)) {
      var _o32 = e.mappings.get(t);

      if (je(n)) return _o32;
      if (_o32.hasOwnProperty(n)) return _o32[n];
    }

    return "@language" === n && n in e || "@direction" === n && n in e ? e[n] : "@context" !== n ? null : void 0;
  }, Ae.processingMode = function (e, t) {
    return t.toString() >= "1.1" ? !e.processingMode || e.processingMode >= "json-ld-" + t.toString() : "json-ld-1.0" === e.processingMode;
  }, Ae.isKeyword = function (e) {
    if (!we(e) || "@" !== e[0]) return !1;

    switch (e) {
      case "@base":
      case "@container":
      case "@context":
      case "@default":
      case "@direction":
      case "@embed":
      case "@explicit":
      case "@graph":
      case "@id":
      case "@included":
      case "@index":
      case "@json":
      case "@language":
      case "@list":
      case "@nest":
      case "@none":
      case "@omitDefault":
      case "@prefix":
      case "@preserve":
      case "@protected":
      case "@requireAll":
      case "@reverse":
      case "@set":
      case "@type":
      case "@value":
      case "@version":
      case "@vocab":
        return !0;
    }

    return !1;
  };
  var Ee = N.isArray,
      _e = N.isObject,
      Me = N.isEmptyObject,
      Pe = N.isString,
      Je = N.isUndefined,
      Be = O.isList,
      Fe = O.isValue,
      Ue = O.isGraph,
      qe = O.isSubject,
      Ve = De.expandIri,
      ze = De.getContextValue,
      $e = De.isKeyword,
      Ge = De.process,
      He = De.processingMode,
      Qe = P.isAbsolute,
      Ke = E.addValue,
      Xe = E.asArray,
      Ze = E.getValues,
      We = E.validateTypeValue,
      Ye = {};
  var et = Ye;
  var tt = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;

  function nt(_x21) {
    return _nt.apply(this, arguments);
  }

  function _nt() {
    _nt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(_ref20) {
      var e, t, n, o, r, _ref20$options, a, i, s, l, c, d, u, p, h, _iterator79, _step79, _s25, _d8, _f5, _v, _n64, _iterator81, _step81, _e104, _iterator82, _step82, _e105, _e106, _t81, _e107, _n65, _o59, _r37, _g2, _y, _m, _t82, _n66, _o60, _e108, _o61, _e109, _e110, _t83, _n67, _i35, _u5, _d7, _u6, _iterator80, _step80, _o58;

      return regeneratorRuntime.wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              e = _ref20.activeCtx, t = _ref20.activeProperty, n = _ref20.expandedActiveProperty, o = _ref20.element, r = _ref20.expandedParent, _ref20$options = _ref20.options, a = _ref20$options === void 0 ? {} : _ref20$options, i = _ref20.insideList, s = _ref20.typeKey, l = _ref20.typeScopedContext, c = _ref20.expansionMap;
              d = Object.keys(o).sort(), u = [];
              h = o[s] && "@json" === Ve(e, Ee(o[s]) ? o[s][0] : o[s], {
                vocab: !0
              }, a);
              _iterator79 = _createForOfIteratorHelper(d);
              _context37.prev = 4;

              _iterator79.s();

            case 6:
              if ((_step79 = _iterator79.n()).done) {
                _context37.next = 188;
                break;
              }

              _s25 = _step79.value;
              _d8 = void 0, _f5 = o[_s25];

              if (!("@context" === _s25)) {
                _context37.next = 11;
                break;
              }

              return _context37.abrupt("continue", 186);

            case 11:
              _v = Ve(e, _s25, {
                vocab: !0
              }, a);

              if (!((null === _v || !Qe(_v) && !$e(_v)) && (_v = c({
                unmappedProperty: _s25,
                activeCtx: e,
                activeProperty: t,
                parent: o,
                options: a,
                insideList: i,
                value: _f5,
                expandedParent: r
              }), void 0 === _v))) {
                _context37.next = 14;
                break;
              }

              return _context37.abrupt("continue", 186);

            case 14:
              if (!$e(_v)) {
                _context37.next = 19;
                break;
              }

              if (!("@reverse" === n)) {
                _context37.next = 17;
                break;
              }

              throw new k("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.", "jsonld.SyntaxError", {
                code: "invalid reverse property map",
                value: _f5
              });

            case 17:
              if (!(_v in r && "@included" !== _v && "@type" !== _v)) {
                _context37.next = 19;
                break;
              }

              throw new k("Invalid JSON-LD syntax; colliding keywords detected.", "jsonld.SyntaxError", {
                code: "colliding keywords",
                keyword: _v
              });

            case 19:
              if (!("@id" === _v)) {
                _context37.next = 34;
                break;
              }

              if (Pe(_f5)) {
                _context37.next = 32;
                break;
              }

              if (a.isFrame) {
                _context37.next = 23;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@id" value must a string.', "jsonld.SyntaxError", {
                code: "invalid @id value",
                value: _f5
              });

            case 23:
              if (!_e(_f5)) {
                _context37.next = 28;
                break;
              }

              if (Me(_f5)) {
                _context37.next = 26;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", {
                code: "invalid @id value",
                value: _f5
              });

            case 26:
              _context37.next = 32;
              break;

            case 28:
              if (Ee(_f5)) {
                _context37.next = 30;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", {
                code: "invalid @id value",
                value: _f5
              });

            case 30:
              if (_f5.every(function (e) {
                return Pe(e);
              })) {
                _context37.next = 32;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", {
                code: "invalid @id value",
                value: _f5
              });

            case 32:
              Ke(r, "@id", Xe(_f5).map(function (t) {
                return Pe(t) ? Ve(e, t, {
                  base: !0
                }, a) : t;
              }), {
                propertyIsArray: a.isFrame
              });
              return _context37.abrupt("continue", 186);

            case 34:
              if (!("@type" === _v)) {
                _context37.next = 37;
                break;
              }

              _e(_f5) && (_f5 = Object.fromEntries(Object.entries(_f5).map(function (_ref48) {
                var _ref49 = _slicedToArray$1(_ref48, 2),
                    e = _ref49[0],
                    t = _ref49[1];

                return [Ve(l, e, {
                  vocab: !0
                }), Xe(t).map(function (e) {
                  return Ve(l, e, {
                    base: !0,
                    vocab: !0
                  });
                })];
              }))), We(_f5, a.isFrame), Ke(r, "@type", Xe(_f5).map(function (e) {
                return Pe(e) ? Ve(l, e, {
                  base: !0,
                  vocab: !0
                }, a) : e;
              }), {
                propertyIsArray: a.isFrame
              });
              return _context37.abrupt("continue", 186);

            case 37:
              if (!("@included" === _v && He(e, 1.1))) {
                _context37.next = 47;
                break;
              }

              _context37.t0 = Xe;
              _context37.next = 41;
              return Ye.expand({
                activeCtx: e,
                activeProperty: t,
                element: _f5,
                options: a,
                expansionMap: c
              });

            case 41:
              _context37.t1 = _context37.sent;
              _n64 = (0, _context37.t0)(_context37.t1);

              if (_n64.every(function (e) {
                return qe(e);
              })) {
                _context37.next = 45;
                break;
              }

              throw new k("Invalid JSON-LD syntax; values of @included must expand to node objects.", "jsonld.SyntaxError", {
                code: "invalid @included value",
                value: _f5
              });

            case 45:
              Ke(r, "@included", _n64, {
                propertyIsArray: !0
              });
              return _context37.abrupt("continue", 186);

            case 47:
              if (!("@graph" === _v && !_e(_f5) && !Ee(_f5))) {
                _context37.next = 49;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@graph" value must not be an object or an array.', "jsonld.SyntaxError", {
                code: "invalid @graph value",
                value: _f5
              });

            case 49:
              if (!("@value" === _v)) {
                _context37.next = 52;
                break;
              }

              p = _f5, h && He(e, 1.1) ? r["@value"] = _f5 : Ke(r, "@value", _f5, {
                propertyIsArray: a.isFrame
              });
              return _context37.abrupt("continue", 186);

            case 52:
              if (!("@language" === _v)) {
                _context37.next = 62;
                break;
              }

              if (!(null === _f5)) {
                _context37.next = 55;
                break;
              }

              return _context37.abrupt("continue", 186);

            case 55:
              if (!(!Pe(_f5) && !a.isFrame)) {
                _context37.next = 57;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@language" value must be a string.', "jsonld.SyntaxError", {
                code: "invalid language-tagged string",
                value: _f5
              });

            case 57:
              _f5 = Xe(_f5).map(function (e) {
                return Pe(e) ? e.toLowerCase() : e;
              });
              _iterator81 = _createForOfIteratorHelper(_f5);

              try {
                for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
                  _e104 = _step81.value;
                  Pe(_e104) && !_e104.match(tt) && console.warn("@language must be valid BCP47: ".concat(_e104));
                }
              } catch (err) {
                _iterator81.e(err);
              } finally {
                _iterator81.f();
              }

              Ke(r, "@language", _f5, {
                propertyIsArray: a.isFrame
              });
              return _context37.abrupt("continue", 186);

            case 62:
              if (!("@direction" === _v)) {
                _context37.next = 85;
                break;
              }

              if (!(!Pe(_f5) && !a.isFrame)) {
                _context37.next = 65;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@direction" value must be a string.', "jsonld.SyntaxError", {
                code: "invalid base direction",
                value: _f5
              });

            case 65:
              _f5 = Xe(_f5);
              _iterator82 = _createForOfIteratorHelper(_f5);
              _context37.prev = 67;

              _iterator82.s();

            case 69:
              if ((_step82 = _iterator82.n()).done) {
                _context37.next = 75;
                break;
              }

              _e105 = _step82.value;

              if (!(Pe(_e105) && "ltr" !== _e105 && "rtl" !== _e105)) {
                _context37.next = 73;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".', "jsonld.SyntaxError", {
                code: "invalid base direction",
                value: _f5
              });

            case 73:
              _context37.next = 69;
              break;

            case 75:
              _context37.next = 80;
              break;

            case 77:
              _context37.prev = 77;
              _context37.t2 = _context37["catch"](67);

              _iterator82.e(_context37.t2);

            case 80:
              _context37.prev = 80;

              _iterator82.f();

              return _context37.finish(80);

            case 83:
              Ke(r, "@direction", _f5, {
                propertyIsArray: a.isFrame
              });
              return _context37.abrupt("continue", 186);

            case 85:
              if (!("@index" === _v)) {
                _context37.next = 90;
                break;
              }

              if (Pe(_f5)) {
                _context37.next = 88;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@index" value must be a string.', "jsonld.SyntaxError", {
                code: "invalid @index value",
                value: _f5
              });

            case 88:
              Ke(r, "@index", _f5);
              return _context37.abrupt("continue", 186);

            case 90:
              if (!("@reverse" === _v)) {
                _context37.next = 118;
                break;
              }

              if (_e(_f5)) {
                _context37.next = 93;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@reverse" value must be an object.', "jsonld.SyntaxError", {
                code: "invalid @reverse value",
                value: _f5
              });

            case 93:
              _context37.next = 95;
              return Ye.expand({
                activeCtx: e,
                activeProperty: "@reverse",
                element: _f5,
                options: a,
                expansionMap: c
              });

            case 95:
              _d8 = _context37.sent;

              if (!("@reverse" in _d8)) {
                _context37.next = 98;
                break;
              }

              for (_e106 in _d8["@reverse"]) {
                Ke(r, _e106, _d8["@reverse"][_e106], {
                  propertyIsArray: !0
                });
              }

            case 98:
              _t81 = r["@reverse"] || null;
              _context37.t3 = regeneratorRuntime.keys(_d8);

            case 100:
              if ((_context37.t4 = _context37.t3()).done) {
                _context37.next = 117;
                break;
              }

              _e107 = _context37.t4.value;

              if (!("@reverse" === _e107)) {
                _context37.next = 104;
                break;
              }

              return _context37.abrupt("continue", 100);

            case 104:
              null === _t81 && (_t81 = r["@reverse"] = {}), Ke(_t81, _e107, [], {
                propertyIsArray: !0
              });
              _n65 = _d8[_e107];
              _o59 = 0;

            case 107:
              if (!(_o59 < _n65.length)) {
                _context37.next = 115;
                break;
              }

              _r37 = _n65[_o59];

              if (!(Fe(_r37) || Be(_r37))) {
                _context37.next = 111;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", {
                code: "invalid reverse property value",
                value: _d8
              });

            case 111:
              Ke(_t81, _e107, _r37, {
                propertyIsArray: !0
              });

            case 112:
              ++_o59;
              _context37.next = 107;
              break;

            case 115:
              _context37.next = 100;
              break;

            case 117:
              return _context37.abrupt("continue", 186);

            case 118:
              if (!("@nest" === _v)) {
                _context37.next = 121;
                break;
              }

              u.push(_s25);
              return _context37.abrupt("continue", 186);

            case 121:
              _g2 = e;
              _y = ze(e, _s25, "@context");
              _context37.t5 = Je(_y);

              if (_context37.t5) {
                _context37.next = 128;
                break;
              }

              _context37.next = 127;
              return Ge({
                activeCtx: e,
                localCtx: _y,
                propagate: !0,
                overrideProtected: !0,
                options: a
              });

            case 127:
              _g2 = _context37.sent;

            case 128:
              _m = ze(_g2, _s25, "@container") || [];

              if (!(_m.includes("@language") && _e(_f5))) {
                _context37.next = 133;
                break;
              }

              _d8 = rt(_g2, _f5, ze(_g2, _s25, "@direction"), a);
              _context37.next = 170;
              break;

            case 133:
              if (!(_m.includes("@index") && _e(_f5))) {
                _context37.next = 140;
                break;
              }

              _t82 = _m.includes("@graph"), _n66 = ze(_g2, _s25, "@index") || "@index", _o60 = "@index" !== _n66 && Ve(e, _n66, {
                vocab: !0
              }, a);
              _context37.next = 137;
              return at({
                activeCtx: _g2,
                options: a,
                activeProperty: _s25,
                value: _f5,
                expansionMap: c,
                asGraph: _t82,
                indexKey: _n66,
                propertyIndex: _o60
              });

            case 137:
              _d8 = _context37.sent;
              _context37.next = 170;
              break;

            case 140:
              if (!(_m.includes("@id") && _e(_f5))) {
                _context37.next = 147;
                break;
              }

              _e108 = _m.includes("@graph");
              _context37.next = 144;
              return at({
                activeCtx: _g2,
                options: a,
                activeProperty: _s25,
                value: _f5,
                expansionMap: c,
                asGraph: _e108,
                indexKey: "@id"
              });

            case 144:
              _d8 = _context37.sent;
              _context37.next = 170;
              break;

            case 147:
              if (!(_m.includes("@type") && _e(_f5))) {
                _context37.next = 153;
                break;
              }

              _context37.next = 150;
              return at({
                activeCtx: _g2.revertToPreviousContext(),
                options: a,
                activeProperty: _s25,
                value: _f5,
                expansionMap: c,
                asGraph: !1,
                indexKey: "@type"
              });

            case 150:
              _d8 = _context37.sent;
              _context37.next = 170;
              break;

            case 153:
              _o61 = "@list" === _v;

              if (!(_o61 || "@set" === _v)) {
                _context37.next = 162;
                break;
              }

              _e109 = t;
              _o61 && "@graph" === n && (_e109 = null);
              _context37.next = 159;
              return Ye.expand({
                activeCtx: _g2,
                activeProperty: _e109,
                element: _f5,
                options: a,
                insideList: _o61,
                expansionMap: c
              });

            case 159:
              _d8 = _context37.sent;
              _context37.next = 170;
              break;

            case 162:
              if (!("@json" === ze(e, _s25, "@type"))) {
                _context37.next = 166;
                break;
              }

              _context37.t6 = {
                "@type": "@json",
                "@value": _f5
              };
              _context37.next = 169;
              break;

            case 166:
              _context37.next = 168;
              return Ye.expand({
                activeCtx: _g2,
                activeProperty: _s25,
                element: _f5,
                options: a,
                insideList: !1,
                expansionMap: c
              });

            case 168:
              _context37.t6 = _context37.sent;

            case 169:
              _d8 = _context37.t6;

            case 170:
              if (!(null !== _d8 || "@value" === _v || (_d8 = c({
                unmappedValue: _f5,
                expandedProperty: _v,
                activeCtx: _g2,
                activeProperty: t,
                parent: o,
                options: a,
                insideList: i,
                key: _s25,
                expandedParent: r
              }), void 0 !== _d8))) {
                _context37.next = 186;
                break;
              }

              if (!("@list" !== _v && !Be(_d8) && _m.includes("@list") && (_d8 = {
                "@list": Xe(_d8)
              }), _m.includes("@graph") && !_m.some(function (e) {
                return "@id" === e || "@index" === e;
              }) && (_d8 = Xe(_d8).map(function (e) {
                return {
                  "@graph": Xe(e)
                };
              })), _g2.mappings.has(_s25) && _g2.mappings.get(_s25).reverse)) {
                _context37.next = 185;
                break;
              }

              _e110 = r["@reverse"] = r["@reverse"] || {};
              _d8 = Xe(_d8);
              _t83 = 0;

            case 175:
              if (!(_t83 < _d8.length)) {
                _context37.next = 183;
                break;
              }

              _n67 = _d8[_t83];

              if (!(Fe(_n67) || Be(_n67))) {
                _context37.next = 179;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", {
                code: "invalid reverse property value",
                value: _d8
              });

            case 179:
              Ke(_e110, _v, _n67, {
                propertyIsArray: !0
              });

            case 180:
              ++_t83;
              _context37.next = 175;
              break;

            case 183:
              _context37.next = 186;
              break;

            case 185:
              Ke(r, _v, _d8, {
                propertyIsArray: !0
              });

            case 186:
              _context37.next = 6;
              break;

            case 188:
              _context37.next = 193;
              break;

            case 190:
              _context37.prev = 190;
              _context37.t7 = _context37["catch"](4);

              _iterator79.e(_context37.t7);

            case 193:
              _context37.prev = 193;

              _iterator79.f();

              return _context37.finish(193);

            case 196:
              if (!("@value" in r)) {
                _context37.next = 203;
                break;
              }

              if (!("@json" === r["@type"] && He(e, 1.1))) {
                _context37.next = 201;
                break;
              }
              _context37.next = 203;
              break;

            case 201:
              if (!((_e(p) || Ee(p)) && !a.isFrame)) {
                _context37.next = 203;
                break;
              }

              throw new k('Invalid JSON-LD syntax; "@value" value must not be an object or an array.', "jsonld.SyntaxError", {
                code: "invalid value object value",
                value: p
              });

            case 203:
              _i35 = 0, _u5 = u;

            case 204:
              if (!(_i35 < _u5.length)) {
                _context37.next = 229;
                break;
              }

              _d7 = _u5[_i35];
              _u6 = Ee(o[_d7]) ? o[_d7] : [o[_d7]];
              _iterator80 = _createForOfIteratorHelper(_u6);
              _context37.prev = 208;

              _iterator80.s();

            case 210:
              if ((_step80 = _iterator80.n()).done) {
                _context37.next = 218;
                break;
              }

              _o58 = _step80.value;

              if (!(!_e(_o58) || Object.keys(_o58).some(function (t) {
                return "@value" === Ve(e, t, {
                  vocab: !0
                }, a);
              }))) {
                _context37.next = 214;
                break;
              }

              throw new k("Invalid JSON-LD syntax; nested value must be a node object.", "jsonld.SyntaxError", {
                code: "invalid @nest value",
                value: _o58
              });

            case 214:
              _context37.next = 216;
              return nt({
                activeCtx: e,
                activeProperty: t,
                expandedActiveProperty: n,
                element: _o58,
                expandedParent: r,
                options: a,
                insideList: i,
                typeScopedContext: l,
                typeKey: s,
                expansionMap: c
              });

            case 216:
              _context37.next = 210;
              break;

            case 218:
              _context37.next = 223;
              break;

            case 220:
              _context37.prev = 220;
              _context37.t8 = _context37["catch"](208);

              _iterator80.e(_context37.t8);

            case 223:
              _context37.prev = 223;

              _iterator80.f();

              return _context37.finish(223);

            case 226:
              _i35++;
              _context37.next = 204;
              break;

            case 229:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37, null, [[4, 190, 193, 196], [67, 77, 80, 83], [208, 220, 223, 226]]);
    }));
    return _nt.apply(this, arguments);
  }

  function ot(_ref21) {
    var e = _ref21.activeCtx,
        t = _ref21.activeProperty,
        n = _ref21.value,
        o = _ref21.options;
    if (null == n) return null;
    var r = Ve(e, t, {
      vocab: !0
    }, o);
    if ("@id" === r) return Ve(e, n, {
      base: !0
    }, o);
    if ("@type" === r) return Ve(e, n, {
      vocab: !0,
      base: !0
    }, o);
    var a = ze(e, t, "@type");
    if (("@id" === a || "@graph" === r) && Pe(n)) return {
      "@id": Ve(e, n, {
        base: !0
      }, o)
    };
    if ("@vocab" === a && Pe(n)) return {
      "@id": Ve(e, n, {
        vocab: !0,
        base: !0
      }, o)
    };
    if ($e(r)) return n;
    var i = {};
    if (a && !["@id", "@vocab", "@none"].includes(a)) i["@type"] = a;else if (Pe(n)) {
      var _n34 = ze(e, t, "@language");

      null !== _n34 && (i["@language"] = _n34);

      var _o33 = ze(e, t, "@direction");

      null !== _o33 && (i["@direction"] = _o33);
    }
    return ["boolean", "number", "string"].includes(_typeof(n)) || (n = n.toString()), i["@value"] = n, i;
  }

  function rt(e, t, n, o) {
    var r = [],
        a = Object.keys(t).sort();

    var _iterator36 = _createForOfIteratorHelper(a),
        _step36;

    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var _i17 = _step36.value;

        var _a17 = Ve(e, _i17, {
          vocab: !0
        }, o);

        var _s8 = t[_i17];
        Ee(_s8) || (_s8 = [_s8]);

        var _iterator37 = _createForOfIteratorHelper(_s8),
            _step37;

        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var _e60 = _step37.value;
            if (null === _e60) continue;
            if (!Pe(_e60)) throw new k("Invalid JSON-LD syntax; language map values must be strings.", "jsonld.SyntaxError", {
              code: "invalid language map value",
              languageMap: t
            });
            var _o34 = {
              "@value": _e60
            };
            "@none" !== _a17 && (_o34["@language"] = _i17.toLowerCase()), n && (_o34["@direction"] = n), r.push(_o34);
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }

    return r;
  }

  function at(_x22) {
    return _at.apply(this, arguments);
  }

  function _at() {
    _at = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(_ref22) {
      var e, t, n, o, r, a, i, s, l, c, d, _iterator83, _step83, _u7, _n68, _c13, p, _iterator84, _step84, _e111;

      return regeneratorRuntime.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              e = _ref22.activeCtx, t = _ref22.options, n = _ref22.activeProperty, o = _ref22.value, r = _ref22.expansionMap, a = _ref22.asGraph, i = _ref22.indexKey, s = _ref22.propertyIndex;
              l = [], c = Object.keys(o).sort(), d = "@type" === i;
              _iterator83 = _createForOfIteratorHelper(c);
              _context38.prev = 3;

              _iterator83.s();

            case 5:
              if ((_step83 = _iterator83.n()).done) {
                _context38.next = 46;
                break;
              }

              _u7 = _step83.value;

              if (!d) {
                _context38.next = 14;
                break;
              }

              _n68 = ze(e, _u7, "@context");
              _context38.t0 = Je(_n68);

              if (_context38.t0) {
                _context38.next = 14;
                break;
              }

              _context38.next = 13;
              return Ge({
                activeCtx: e,
                localCtx: _n68,
                propagate: !1,
                options: t
              });

            case 13:
              e = _context38.sent;

            case 14:
              _c13 = void 0, p = o[_u7];
              Ee(p) || (p = [p]);
              _context38.next = 18;
              return Ye.expand({
                activeCtx: e,
                activeProperty: n,
                element: p,
                options: t,
                insideList: !1,
                insideIndex: !0,
                expansionMap: r
              });

            case 18:
              p = _context38.sent;
              _c13 = s ? "@none" === _u7 ? "@none" : ot({
                activeCtx: e,
                activeProperty: i,
                value: _u7,
                options: t
              }) : Ve(e, _u7, {
                vocab: !0
              }, t);
              "@id" === i ? _u7 = Ve(e, _u7, {
                base: !0
              }, t) : d && (_u7 = _c13);
              _iterator84 = _createForOfIteratorHelper(p);
              _context38.prev = 22;

              _iterator84.s();

            case 24:
              if ((_step84 = _iterator84.n()).done) {
                _context38.next = 36;
                break;
              }

              _e111 = _step84.value;

              if (!(a && !Ue(_e111) && (_e111 = {
                "@graph": [_e111]
              }), "@type" === i)) {
                _context38.next = 30;
                break;
              }

              "@none" === _c13 || (_e111["@type"] ? _e111["@type"] = [_u7].concat(_e111["@type"]) : _e111["@type"] = [_u7]);
              _context38.next = 33;
              break;

            case 30:
              if (!(Fe(_e111) && !["@language", "@type", "@index"].includes(i))) {
                _context38.next = 32;
                break;
              }

              throw new k("Invalid JSON-LD syntax; Attempt to add illegal key to value object: \"".concat(i, "\"."), "jsonld.SyntaxError", {
                code: "invalid value object",
                value: _e111
              });

            case 32:
              s ? "@none" !== _c13 && Ke(_e111, s, _c13, {
                propertyIsArray: !0,
                prependValue: !0
              }) : "@none" === _c13 || i in _e111 || (_e111[i] = _u7);

            case 33:
              l.push(_e111);

            case 34:
              _context38.next = 24;
              break;

            case 36:
              _context38.next = 41;
              break;

            case 38:
              _context38.prev = 38;
              _context38.t1 = _context38["catch"](22);

              _iterator84.e(_context38.t1);

            case 41:
              _context38.prev = 41;

              _iterator84.f();

              return _context38.finish(41);

            case 44:
              _context38.next = 5;
              break;

            case 46:
              _context38.next = 51;
              break;

            case 48:
              _context38.prev = 48;
              _context38.t2 = _context38["catch"](3);

              _iterator83.e(_context38.t2);

            case 51:
              _context38.prev = 51;

              _iterator83.f();

              return _context38.finish(51);

            case 54:
              return _context38.abrupt("return", l);

            case 55:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38, null, [[3, 48, 51, 54], [22, 38, 41, 44]]);
    }));
    return _at.apply(this, arguments);
  }

  Ye.expand = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(_ref23) {
      var e, _ref23$activeProperty, t, n, _ref23$options, o, _ref23$insideList, r, _ref23$insideIndex, a, _ref23$typeScopedCont, i, _ref23$expansionMap, s, _a18, _l9, _c4, _c5, _d3, l, c, d, u, _iterator38, _step38, _t33, _n35, p, _iterator39, _step39, _t34, _r19, _a23, _iterator40, _step40, _t35, _n36, h, f, _a19, _i18, _l10, _a20, _a21, _a22;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e = _ref23.activeCtx, _ref23$activeProperty = _ref23.activeProperty, t = _ref23$activeProperty === void 0 ? null : _ref23$activeProperty, n = _ref23.element, _ref23$options = _ref23.options, o = _ref23$options === void 0 ? {} : _ref23$options, _ref23$insideList = _ref23.insideList, r = _ref23$insideList === void 0 ? !1 : _ref23$insideList, _ref23$insideIndex = _ref23.insideIndex, a = _ref23$insideIndex === void 0 ? !1 : _ref23$insideIndex, _ref23$typeScopedCont = _ref23.typeScopedContext, i = _ref23$typeScopedCont === void 0 ? null : _ref23$typeScopedCont, _ref23$expansionMap = _ref23.expansionMap, s = _ref23$expansionMap === void 0 ? function () {} : _ref23$expansionMap;

              if (!(null == n)) {
                _context17.next = 3;
                break;
              }

              return _context17.abrupt("return", null);

            case 3:
              if (!("@default" === t && (o = Object.assign({}, o, {
                isFrame: !1
              })), !Ee(n) && !_e(n))) {
                _context17.next = 10;
                break;
              }

              if (!(!r && (null === t || "@graph" === Ve(e, t, {
                vocab: !0
              }, o)))) {
                _context17.next = 9;
                break;
              }

              _context17.next = 7;
              return s({
                unmappedValue: n,
                activeCtx: e,
                activeProperty: t,
                options: o,
                insideList: r
              });

            case 7:
              _a18 = _context17.sent;
              return _context17.abrupt("return", void 0 === _a18 ? null : _a18);

            case 9:
              return _context17.abrupt("return", ot({
                activeCtx: e,
                activeProperty: t,
                value: n,
                options: o
              }));

            case 10:
              if (!Ee(n)) {
                _context17.next = 33;
                break;
              }

              _l9 = [];
              _c4 = ze(e, t, "@container") || [];
              r = r || _c4.includes("@list");
              _c5 = 0;

            case 15:
              if (!(_c5 < n.length)) {
                _context17.next = 32;
                break;
              }

              _context17.next = 18;
              return Ye.expand({
                activeCtx: e,
                activeProperty: t,
                element: n[_c5],
                options: o,
                expansionMap: s,
                insideIndex: a,
                typeScopedContext: i
              });

            case 18:
              _d3 = _context17.sent;
              r && Ee(_d3) && (_d3 = {
                "@list": _d3
              });
              _context17.t0 = null === _d3;

              if (!_context17.t0) {
                _context17.next = 26;
                break;
              }

              _context17.next = 24;
              return s({
                unmappedValue: n[_c5],
                activeCtx: e,
                activeProperty: t,
                parent: n,
                index: _c5,
                options: o,
                expandedParent: _l9,
                insideList: r
              });

            case 24:
              _d3 = _context17.sent;
              _context17.t0 = void 0 === _d3;

            case 26:
              _context17.t1 = _context17.t0;

              if (_context17.t1) {
                _context17.next = 29;
                break;
              }

              Ee(_d3) ? _l9 = _l9.concat(_d3) : _l9.push(_d3);

            case 29:
              ++_c5;
              _context17.next = 15;
              break;

            case 32:
              return _context17.abrupt("return", _l9);

            case 33:
              l = Ve(e, t, {
                vocab: !0
              }, o), c = ze(e, t, "@context");
              i = i || (e.previousContext ? e : null);
              d = Object.keys(n).sort(), u = !a;

              if (!(u && i && d.length <= 2 && !d.includes("@context"))) {
                _context17.next = 59;
                break;
              }

              _iterator38 = _createForOfIteratorHelper(d);
              _context17.prev = 38;

              _iterator38.s();

            case 40:
              if ((_step38 = _iterator38.n()).done) {
                _context17.next = 51;
                break;
              }

              _t33 = _step38.value;
              _n35 = Ve(i, _t33, {
                vocab: !0
              }, o);

              if (!("@value" === _n35)) {
                _context17.next = 46;
                break;
              }

              u = !1, e = i;
              return _context17.abrupt("break", 51);

            case 46:
              if (!("@id" === _n35 && 1 === d.length)) {
                _context17.next = 49;
                break;
              }

              u = !1;
              return _context17.abrupt("break", 51);

            case 49:
              _context17.next = 40;
              break;

            case 51:
              _context17.next = 56;
              break;

            case 53:
              _context17.prev = 53;
              _context17.t2 = _context17["catch"](38);

              _iterator38.e(_context17.t2);

            case 56:
              _context17.prev = 56;

              _iterator38.f();

              return _context17.finish(56);

            case 59:
              u && (e = e.revertToPreviousContext());
              _context17.t3 = Je(c);

              if (_context17.t3) {
                _context17.next = 65;
                break;
              }

              _context17.next = 64;
              return Ge({
                activeCtx: e,
                localCtx: c,
                propagate: !0,
                overrideProtected: !0,
                options: o
              });

            case 64:
              e = _context17.sent;

            case 65:
              _context17.t4 = "@context" in n;

              if (!_context17.t4) {
                _context17.next = 70;
                break;
              }

              _context17.next = 69;
              return Ge({
                activeCtx: e,
                localCtx: n["@context"],
                options: o
              });

            case 69:
              e = _context17.sent;

            case 70:
              i = e;
              p = null;
              _iterator39 = _createForOfIteratorHelper(d);
              _context17.prev = 73;

              _iterator39.s();

            case 75:
              if ((_step39 = _iterator39.n()).done) {
                _context17.next = 103;
                break;
              }

              _t34 = _step39.value;

              if (!("@type" === Ve(e, _t34, {
                vocab: !0
              }, o))) {
                _context17.next = 101;
                break;
              }

              p = p || _t34;
              _r19 = n[_t34], _a23 = Array.isArray(_r19) ? _r19.length > 1 ? _r19.slice().sort() : _r19 : [_r19];
              _iterator40 = _createForOfIteratorHelper(_a23);
              _context17.prev = 81;

              _iterator40.s();

            case 83:
              if ((_step40 = _iterator40.n()).done) {
                _context17.next = 93;
                break;
              }

              _t35 = _step40.value;
              _n36 = ze(i, _t35, "@context");
              _context17.t5 = Je(_n36);

              if (_context17.t5) {
                _context17.next = 91;
                break;
              }

              _context17.next = 90;
              return Ge({
                activeCtx: e,
                localCtx: _n36,
                options: o,
                propagate: !1
              });

            case 90:
              e = _context17.sent;

            case 91:
              _context17.next = 83;
              break;

            case 93:
              _context17.next = 98;
              break;

            case 95:
              _context17.prev = 95;
              _context17.t6 = _context17["catch"](81);

              _iterator40.e(_context17.t6);

            case 98:
              _context17.prev = 98;

              _iterator40.f();

              return _context17.finish(98);

            case 101:
              _context17.next = 75;
              break;

            case 103:
              _context17.next = 108;
              break;

            case 105:
              _context17.prev = 105;
              _context17.t7 = _context17["catch"](73);

              _iterator39.e(_context17.t7);

            case 108:
              _context17.prev = 108;

              _iterator39.f();

              return _context17.finish(108);

            case 111:
              h = {};
              _context17.next = 114;
              return nt({
                activeCtx: e,
                activeProperty: t,
                expandedActiveProperty: l,
                element: n,
                expandedParent: h,
                options: o,
                insideList: r,
                typeKey: p,
                typeScopedContext: i,
                expansionMap: s
              });

            case 114:
              d = Object.keys(h);
              f = d.length;

              if (!("@value" in h)) {
                _context17.next = 140;
                break;
              }

              if (!("@type" in h && ("@language" in h || "@direction" in h))) {
                _context17.next = 119;
                break;
              }

              throw new k('Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".', "jsonld.SyntaxError", {
                code: "invalid value object",
                element: h
              });

            case 119:
              _a19 = f - 1;

              if (!("@type" in h && (_a19 -= 1), "@index" in h && (_a19 -= 1), "@language" in h && (_a19 -= 1), "@direction" in h && (_a19 -= 1), 0 !== _a19)) {
                _context17.next = 122;
                break;
              }

              throw new k('Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".', "jsonld.SyntaxError", {
                code: "invalid value object",
                element: h
              });

            case 122:
              _i18 = null === h["@value"] ? [] : Xe(h["@value"]), _l10 = Ze(h, "@type");

              if (!(He(e, 1.1) && _l10.includes("@json") && 1 === _l10.length)) {
                _context17.next = 127;
                break;
              }
              _context17.next = 138;
              break;

            case 127:
              if (!(0 === _i18.length)) {
                _context17.next = 134;
                break;
              }

              _context17.next = 130;
              return s({
                unmappedValue: h,
                activeCtx: e,
                activeProperty: t,
                element: n,
                options: o,
                insideList: r
              });

            case 130:
              _a20 = _context17.sent;
              h = void 0 !== _a20 ? _a20 : null;
              _context17.next = 138;
              break;

            case 134:
              if (!(!_i18.every(function (e) {
                return Pe(e) || Me(e);
              }) && "@language" in h)) {
                _context17.next = 136;
                break;
              }

              throw new k("Invalid JSON-LD syntax; only strings may be language-tagged.", "jsonld.SyntaxError", {
                code: "invalid language-tagged value",
                element: h
              });

            case 136:
              if (_l10.every(function (e) {
                return Qe(e) && !(Pe(e) && 0 === e.indexOf("_:")) || Me(e);
              })) {
                _context17.next = 138;
                break;
              }

              throw new k('Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".', "jsonld.SyntaxError", {
                code: "invalid typed value",
                element: h
              });

            case 138:
              _context17.next = 155;
              break;

            case 140:
              if (!("@type" in h && !Ee(h["@type"]))) {
                _context17.next = 144;
                break;
              }

              h["@type"] = [h["@type"]];
              _context17.next = 155;
              break;

            case 144:
              if (!("@set" in h || "@list" in h)) {
                _context17.next = 150;
                break;
              }

              if (!(f > 1 && (2 !== f || !("@index" in h)))) {
                _context17.next = 147;
                break;
              }

              throw new k('Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".', "jsonld.SyntaxError", {
                code: "invalid set or list object",
                element: h
              });

            case 147:
              "@set" in h && (h = h["@set"], d = Object.keys(h), f = d.length);
              _context17.next = 155;
              break;

            case 150:
              if (!(1 === f && "@language" in h)) {
                _context17.next = 155;
                break;
              }

              _context17.next = 153;
              return s(h, {
                unmappedValue: h,
                activeCtx: e,
                activeProperty: t,
                element: n,
                options: o,
                insideList: r
              });

            case 153:
              _a21 = _context17.sent;
              h = void 0 !== _a21 ? _a21 : null;

            case 155:
              if (!(_e(h) && !o.keepFreeFloatingNodes && !r && (null === t || "@graph" === l) && (0 === f || "@value" in h || "@list" in h || 1 === f && "@id" in h))) {
                _context17.next = 160;
                break;
              }

              _context17.next = 158;
              return s({
                unmappedValue: h,
                activeCtx: e,
                activeProperty: t,
                element: n,
                options: o,
                insideList: r
              });

            case 158:
              _a22 = _context17.sent;
              h = void 0 !== _a22 ? _a22 : null;

            case 160:
              return _context17.abrupt("return", h);

            case 161:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[38, 53, 56, 59], [73, 105, 108, 111], [81, 95, 98, 101]]);
    }));

    return function (_x23) {
      return _ref24.apply(this, arguments);
    };
  }();

  var it = De.isKeyword,
      st = {};
  var lt = st;
  st.createMergedNodeMap = function (e, t) {
    var n = (t = t || {}).issuer || new E.IdentifierIssuer("_:b"),
        o = {
      "@default": {}
    };
    return st.createNodeMap(e, o, "@default", n), st.mergeNodeMaps(o);
  }, st.createNodeMap = function (e, t, n, o, r, a) {
    if (N.isArray(e)) {
      var _iterator41 = _createForOfIteratorHelper(e),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var _r20 = _step41.value;
          st.createNodeMap(_r20, t, n, o, void 0, a);
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }

      return;
    }

    if (!N.isObject(e)) return void (a && a.push(e));

    if (O.isValue(e)) {
      if ("@type" in e) {
        var _t36 = e["@type"];
        0 === _t36.indexOf("_:") && (e["@type"] = _t36 = o.getId(_t36));
      }

      return void (a && a.push(e));
    }

    if (a && O.isList(e)) {
      var _i19 = [];
      return st.createNodeMap(e["@list"], t, n, o, r, _i19), void a.push({
        "@list": _i19
      });
    }

    if ("@type" in e) {
      var _t37 = e["@type"];

      var _iterator42 = _createForOfIteratorHelper(_t37),
          _step42;

      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var _e61 = _step42.value;
          0 === _e61.indexOf("_:") && o.getId(_e61);
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }
    }

    N.isUndefined(r) && (r = O.isBlankNode(e) ? o.getId(e["@id"]) : e["@id"]), a && a.push({
      "@id": r
    });
    var i = t[n],
        s = i[r] = i[r] || {};
    s["@id"] = r;
    var l = Object.keys(e).sort();

    var _iterator43 = _createForOfIteratorHelper(l),
        _step43;

    try {
      for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
        var _a24 = _step43.value;
        if ("@id" === _a24) continue;

        if ("@reverse" === _a24) {
          var _a25 = {
            "@id": r
          },
              _s9 = e["@reverse"];

          for (var _e62 in _s9) {
            var _r21 = _s9[_e62];

            var _iterator44 = _createForOfIteratorHelper(_r21),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _s10 = _step44.value;
                var _r22 = _s10["@id"];
                O.isBlankNode(_s10) && (_r22 = o.getId(_r22)), st.createNodeMap(_s10, t, n, o, _r22), E.addValue(i[_r22], _e62, _a25, {
                  propertyIsArray: !0,
                  allowDuplicate: !1
                });
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
          }

          continue;
        }

        if ("@graph" === _a24) {
          r in t || (t[r] = {}), st.createNodeMap(e[_a24], t, r, o);
          continue;
        }

        if ("@included" === _a24) {
          st.createNodeMap(e[_a24], t, n, o);
          continue;
        }

        if ("@type" !== _a24 && it(_a24)) {
          if ("@index" === _a24 && _a24 in s && (e[_a24] !== s[_a24] || e[_a24]["@id"] !== s[_a24]["@id"])) throw new k("Invalid JSON-LD syntax; conflicting @index property detected.", "jsonld.SyntaxError", {
            code: "conflicting indexes",
            subject: s
          });
          s[_a24] = e[_a24];
          continue;
        }

        var _l11 = e[_a24];

        if (0 === _a24.indexOf("_:") && (_a24 = o.getId(_a24)), 0 !== _l11.length) {
          var _iterator45 = _createForOfIteratorHelper(_l11),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var _e63 = _step45.value;

              if ("@type" === _a24 && (_e63 = 0 === _e63.indexOf("_:") ? o.getId(_e63) : _e63), O.isSubject(_e63) || O.isSubjectReference(_e63)) {
                if ("@id" in _e63 && !_e63["@id"]) continue;

                var _r23 = O.isBlankNode(_e63) ? o.getId(_e63["@id"]) : _e63["@id"];

                E.addValue(s, _a24, {
                  "@id": _r23
                }, {
                  propertyIsArray: !0,
                  allowDuplicate: !1
                }), st.createNodeMap(_e63, t, n, o, _r23);
              } else if (O.isValue(_e63)) E.addValue(s, _a24, _e63, {
                propertyIsArray: !0,
                allowDuplicate: !1
              });else if (O.isList(_e63)) {
                var _i20 = [];
                st.createNodeMap(_e63["@list"], t, n, o, r, _i20), _e63 = {
                  "@list": _i20
                }, E.addValue(s, _a24, _e63, {
                  propertyIsArray: !0,
                  allowDuplicate: !1
                });
              } else st.createNodeMap(_e63, t, n, o, r), E.addValue(s, _a24, _e63, {
                propertyIsArray: !0,
                allowDuplicate: !1
              });
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        } else E.addValue(s, _a24, [], {
          propertyIsArray: !0
        });
      }
    } catch (err) {
      _iterator43.e(err);
    } finally {
      _iterator43.f();
    }
  }, st.mergeNodeMapGraphs = function (e) {
    var t = {};

    var _iterator46 = _createForOfIteratorHelper(Object.keys(e).sort()),
        _step46;

    try {
      for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
        var _n37 = _step46.value;

        var _iterator47 = _createForOfIteratorHelper(Object.keys(e[_n37]).sort()),
            _step47;

        try {
          for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
            var _o35 = _step47.value;
            var r = e[_n37][_o35];
            _o35 in t || (t[_o35] = {
              "@id": _o35
            });
            var _a26 = t[_o35];

            var _iterator48 = _createForOfIteratorHelper(Object.keys(r).sort()),
                _step48;

            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var _e64 = _step48.value;
                if (it(_e64) && "@type" !== _e64) _a26[_e64] = E.clone(r[_e64]);else {
                  var _iterator49 = _createForOfIteratorHelper(r[_e64]),
                      _step49;

                  try {
                    for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                      var _t38 = _step49.value;
                      E.addValue(_a26, _e64, E.clone(_t38), {
                        propertyIsArray: !0,
                        allowDuplicate: !1
                      });
                    }
                  } catch (err) {
                    _iterator49.e(err);
                  } finally {
                    _iterator49.f();
                  }
                }
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }
          }
        } catch (err) {
          _iterator47.e(err);
        } finally {
          _iterator47.f();
        }
      }
    } catch (err) {
      _iterator46.e(err);
    } finally {
      _iterator46.f();
    }

    return t;
  }, st.mergeNodeMaps = function (e) {
    var t = e["@default"],
        n = Object.keys(e).sort();

    var _iterator50 = _createForOfIteratorHelper(n),
        _step50;

    try {
      for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
        var _o36 = _step50.value;
        if ("@default" === _o36) continue;
        var _n38 = e[_o36];
        var r = t[_o36];
        r ? "@graph" in r || (r["@graph"] = []) : t[_o36] = r = {
          "@id": _o36,
          "@graph": []
        };
        var _a27 = r["@graph"];

        var _iterator51 = _createForOfIteratorHelper(Object.keys(_n38).sort()),
            _step51;

        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var _e65 = _step51.value;
            var _t39 = _n38[_e65];
            O.isSubjectReference(_t39) || _a27.push(_t39);
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
      }
    } catch (err) {
      _iterator50.e(err);
    } finally {
      _iterator50.f();
    }

    return t;
  };
  var ct = O.isSubjectReference,
      dt = lt.createMergedNodeMap,
      ut = {};
  var pt = ut;

  ut.flatten = function (e) {
    var t = dt(e),
        n = [],
        o = Object.keys(t).sort();

    for (var _e66 = 0; _e66 < o.length; ++_e66) {
      var r = t[o[_e66]];
      ct(r) || n.push(r);
    }

    return n;
  };

  var ht = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      ft = "http://www.w3.org/2001/XMLSchema#";
  var vt = {
    LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
    LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
    RDF: ht,
    RDF_LIST: ht + "List",
    RDF_FIRST: ht + "first",
    RDF_REST: ht + "rest",
    RDF_NIL: ht + "nil",
    RDF_TYPE: ht + "type",
    RDF_PLAIN_LITERAL: ht + "PlainLiteral",
    RDF_XML_LITERAL: ht + "XMLLiteral",
    RDF_JSON_LITERAL: ht + "JSON",
    RDF_OBJECT: ht + "object",
    RDF_LANGSTRING: ht + "langString",
    XSD: ft,
    XSD_BOOLEAN: ft + "boolean",
    XSD_DOUBLE: ft + "double",
    XSD_INTEGER: ft + "integer",
    XSD_STRING: ft + "string"
  };
  var gt = vt.RDF_LIST,
      yt = vt.RDF_FIRST,
      mt = vt.RDF_REST,
      xt = vt.RDF_NIL,
      bt = vt.RDF_TYPE,
      wt = vt.RDF_JSON_LITERAL,
      jt = vt.XSD_BOOLEAN,
      It = vt.XSD_DOUBLE,
      Nt = vt.XSD_INTEGER,
      St = vt.XSD_STRING,
      Ot = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/,
      kt = {};
  var Ct = kt;

  function Lt(e, t, n) {
    if (e.termType.endsWith("Node")) return {
      "@id": e.value
    };
    var o = {
      "@value": e.value
    };
    if (e.language) o["@language"] = e.language;else {
      var r = e.datatype.value;

      if (r || (r = St), r === wt) {
        r = "@json";

        try {
          o["@value"] = JSON.parse(o["@value"]);
        } catch (e) {
          throw new k("JSON literal could not be parsed.", "jsonld.InvalidJsonLiteral", {
            code: "invalid JSON literal",
            value: o["@value"],
            cause: e
          });
        }
      }

      if (t) {
        if (r === jt) "true" === o["@value"] ? o["@value"] = !0 : "false" === o["@value"] && (o["@value"] = !1);else if (N.isNumeric(o["@value"])) if (r === Nt) {
          var _e67 = parseInt(o["@value"], 10);

          _e67.toFixed(0) === o["@value"] && (o["@value"] = _e67);
        } else r === It && (o["@value"] = parseFloat(o["@value"]));
        [jt, Nt, It, St].includes(r) || (o["@type"] = r);
      } else if ("i18n-datatype" === n && r.startsWith("https://www.w3.org/ns/i18n#")) {
        var _r$split = r.split(/[#_]/),
            _r$split2 = _slicedToArray$1(_r$split, 3),
            _e68 = _r$split2[1],
            _t40 = _r$split2[2];

        _e68.length > 0 && (o["@language"] = _e68, _e68.match(Ot) || console.warn("@language must be valid BCP47: ".concat(_e68))), o["@direction"] = _t40;
      } else r !== St && (o["@type"] = r);
    }
    return o;
  }

  kt.fromRDF = /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e, _ref25) {
      var _ref25$useRdfType, t, _ref25$useNativeTypes, n, _ref25$rdfDirection, o, r, a, i, _iterator52, _step52, _s13, _e72, _l13, _c6, _d4, _u2, _p, _h2, _f, _e73, _e69, _t41, _n39, _iterator53, _step53, _e70, _n40, _o37, _r24, _a28, _s11, _l12, _i21, _s12, _e71, s, l, _iterator54, _step54, _e74, _t42, _n41, _o38, _r25, _iterator55, _step55, _e75, _t43;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _ref25$useRdfType = _ref25.useRdfType, t = _ref25$useRdfType === void 0 ? !1 : _ref25$useRdfType, _ref25$useNativeTypes = _ref25.useNativeTypes, n = _ref25$useNativeTypes === void 0 ? !1 : _ref25$useNativeTypes, _ref25$rdfDirection = _ref25.rdfDirection, o = _ref25$rdfDirection === void 0 ? null : _ref25$rdfDirection;
              r = {}, a = {
                "@default": r
              }, i = {};
              _iterator52 = _createForOfIteratorHelper(e);
              _context18.prev = 3;

              _iterator52.s();

            case 5:
              if ((_step52 = _iterator52.n()).done) {
                _context18.next = 19;
                break;
              }

              _s13 = _step52.value;
              _e72 = "DefaultGraph" === _s13.graph.termType ? "@default" : _s13.graph.value;
              _e72 in a || (a[_e72] = {}), "@default" === _e72 || _e72 in r || (r[_e72] = {
                "@id": _e72
              });
              _l13 = a[_e72], _c6 = _s13.subject.value, _d4 = _s13.predicate.value, _u2 = _s13.object;
              _c6 in _l13 || (_l13[_c6] = {
                "@id": _c6
              });
              _p = _l13[_c6], _h2 = _u2.termType.endsWith("Node");

              if (!(_h2 && !(_u2.value in _l13) && (_l13[_u2.value] = {
                "@id": _u2.value
              }), _d4 === bt && !t && _h2)) {
                _context18.next = 15;
                break;
              }

              E.addValue(_p, "@type", _u2.value, {
                propertyIsArray: !0
              });
              return _context18.abrupt("continue", 17);

            case 15:
              _f = Lt(_u2, n, o);
              if (E.addValue(_p, _d4, _f, {
                propertyIsArray: !0
              }), _h2) if (_u2.value === xt) {
                _e73 = _l13[_u2.value];
                "usages" in _e73 || (_e73.usages = []), _e73.usages.push({
                  node: _p,
                  property: _d4,
                  value: _f
                });
              } else _u2.value in i ? i[_u2.value] = !1 : i[_u2.value] = {
                node: _p,
                property: _d4,
                value: _f
              };

            case 17:
              _context18.next = 5;
              break;

            case 19:
              _context18.next = 24;
              break;

            case 21:
              _context18.prev = 21;
              _context18.t0 = _context18["catch"](3);

              _iterator52.e(_context18.t0);

            case 24:
              _context18.prev = 24;

              _iterator52.f();

              return _context18.finish(24);

            case 27:
              _context18.t1 = regeneratorRuntime.keys(a);

            case 28:
              if ((_context18.t2 = _context18.t1()).done) {
                _context18.next = 37;
                break;
              }

              _e69 = _context18.t2.value;
              _t41 = a[_e69];

              if (xt in _t41) {
                _context18.next = 33;
                break;
              }

              return _context18.abrupt("continue", 28);

            case 33:
              _n39 = _t41[xt];

              if (_n39.usages) {
                _iterator53 = _createForOfIteratorHelper(_n39.usages);

                try {
                  for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                    _e70 = _step53.value;
                    _n40 = _e70.node, _o37 = _e70.property, _r24 = _e70.value;
                    _a28 = [], _s11 = [];
                    _l12 = Object.keys(_n40).length;

                    for (; _o37 === mt && N.isObject(i[_n40["@id"]]) && N.isArray(_n40[yt]) && 1 === _n40[yt].length && N.isArray(_n40[mt]) && 1 === _n40[mt].length && (3 === _l12 || 4 === _l12 && N.isArray(_n40["@type"]) && 1 === _n40["@type"].length && _n40["@type"][0] === gt) && (_a28.push(_n40[yt][0]), _s11.push(_n40["@id"]), _e70 = i[_n40["@id"]], _n40 = _e70.node, _o37 = _e70.property, _r24 = _e70.value, _l12 = Object.keys(_n40).length, O.isBlankNode(_n40));) {
                      ;
                    }

                    delete _r24["@id"], _r24["@list"] = _a28.reverse();

                    for (_i21 = 0, _s12 = _s11; _i21 < _s12.length; _i21++) {
                      _e71 = _s12[_i21];
                      delete _t41[_e71];
                    }
                  }
                } catch (err) {
                  _iterator53.e(err);
                } finally {
                  _iterator53.f();
                }

                delete _n39.usages;
              }

              _context18.next = 28;
              break;

            case 37:
              s = [], l = Object.keys(r).sort();
              _iterator54 = _createForOfIteratorHelper(l);

              try {
                for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                  _e74 = _step54.value;
                  _t42 = r[_e74];

                  if (_e74 in a) {
                    _n41 = _t42["@graph"] = [], _o38 = a[_e74], _r25 = Object.keys(_o38).sort();
                    _iterator55 = _createForOfIteratorHelper(_r25);

                    try {
                      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                        _e75 = _step55.value;
                        _t43 = _o38[_e75];
                        O.isSubjectReference(_t43) || _n41.push(_t43);
                      }
                    } catch (err) {
                      _iterator55.e(err);
                    } finally {
                      _iterator55.f();
                    }
                  }

                  O.isSubjectReference(_t42) || s.push(_t42);
                }
              } catch (err) {
                _iterator54.e(err);
              } finally {
                _iterator54.f();
              }

              return _context18.abrupt("return", s);

            case 41:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, null, [[3, 21, 24, 27]]);
    }));

    return function (_x24, _x25) {
      return _ref26.apply(this, arguments);
    };
  }();

  var At = function e(t) {
    return null === t || "object" != _typeof(t) || null != t.toJSON ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce(function (t, n, o) {
      return t + (0 === o ? "" : ",") + e(void 0 === n || "symbol" == _typeof(n) ? null : n);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce(function (n, o, r) {
      if (void 0 === t[o] || "symbol" == _typeof(t[o])) return n;
      return n + (0 === n.length ? "" : ",") + e(o) + ":" + e(t[o]);
    }, "") + "}";
  };

  var Dt = lt.createNodeMap,
      Tt = De.isKeyword,
      Rt = vt.RDF_FIRST,
      Et = vt.RDF_REST,
      _t = vt.RDF_NIL,
      Mt = vt.RDF_TYPE,
      Pt = vt.RDF_JSON_LITERAL,
      Jt = vt.RDF_LANGSTRING,
      Bt = vt.XSD_BOOLEAN,
      Ft = vt.XSD_DOUBLE,
      Ut = vt.XSD_INTEGER,
      qt = vt.XSD_STRING,
      Vt = P.isAbsolute,
      zt = {};
  var $t = zt;

  function Gt(e, t, n, o, r) {
    var a = Object.keys(t).sort();

    var _iterator56 = _createForOfIteratorHelper(a),
        _step56;

    try {
      for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
        var _i22 = _step56.value;

        var _a29 = t[_i22],
            _s14 = Object.keys(_a29).sort();

        var _iterator57 = _createForOfIteratorHelper(_s14),
            _step57;

        try {
          for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
            var _t44 = _step57.value;
            var _s15 = _a29[_t44];
            if ("@type" === _t44) _t44 = Mt;else if (Tt(_t44)) continue;

            var _iterator58 = _createForOfIteratorHelper(_s15),
                _step58;

            try {
              for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                var _a30 = _step58.value;
                var _s16 = {
                  termType: _i22.startsWith("_:") ? "BlankNode" : "NamedNode",
                  value: _i22
                };
                if (!Vt(_i22)) continue;
                var _l14 = {
                  termType: _t44.startsWith("_:") ? "BlankNode" : "NamedNode",
                  value: _t44
                };
                if (!Vt(_t44)) continue;
                if ("BlankNode" === _l14.termType && !r.produceGeneralizedRdf) continue;

                var _c7 = Ht(_a30, o, e, n, r.rdfDirection);

                _c7 && e.push({
                  subject: _s16,
                  predicate: _l14,
                  object: _c7,
                  graph: n
                });
              }
            } catch (err) {
              _iterator58.e(err);
            } finally {
              _iterator58.f();
            }
          }
        } catch (err) {
          _iterator57.e(err);
        } finally {
          _iterator57.f();
        }
      }
    } catch (err) {
      _iterator56.e(err);
    } finally {
      _iterator56.f();
    }
  }

  function Ht(e, t, n, o, r) {
    var a = {};

    if (O.isValue(e)) {
      a.termType = "Literal", a.value = void 0, a.datatype = {
        termType: "NamedNode"
      };
      var _t45 = e["@value"];

      var _n42 = e["@type"] || null;

      if ("@json" === _n42) a.value = At(_t45), a.datatype.value = Pt;else if (N.isBoolean(_t45)) a.value = _t45.toString(), a.datatype.value = _n42 || Bt;else if (N.isDouble(_t45) || _n42 === Ft) N.isDouble(_t45) || (_t45 = parseFloat(_t45)), a.value = _t45.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), a.datatype.value = _n42 || Ft;else if (N.isNumber(_t45)) a.value = _t45.toFixed(0), a.datatype.value = _n42 || Ut;else if ("i18n-datatype" === r && "@direction" in e) {
        var _n43 = "https://www.w3.org/ns/i18n#" + (e["@language"] || "") + "_".concat(e["@direction"]);

        a.datatype.value = _n43, a.value = _t45;
      } else "@language" in e ? (a.value = _t45, a.datatype.value = _n42 || Jt, a.language = e["@language"]) : (a.value = _t45, a.datatype.value = _n42 || qt);
    } else if (O.isList(e)) {
      var _i23 = function (e, t, n, o, r) {
        var a = {
          termType: "NamedNode",
          value: Rt
        },
            i = {
          termType: "NamedNode",
          value: Et
        },
            s = {
          termType: "NamedNode",
          value: _t
        },
            l = e.pop(),
            c = l ? {
          termType: "BlankNode",
          value: t.getId()
        } : s;
        var d = c;

        var _iterator59 = _createForOfIteratorHelper(e),
            _step59;

        try {
          for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
            var _s17 = _step59.value;

            var _e77 = Ht(_s17, t, n, o, r),
                _l15 = {
              termType: "BlankNode",
              value: t.getId()
            };

            n.push({
              subject: d,
              predicate: a,
              object: _e77,
              graph: o
            }), n.push({
              subject: d,
              predicate: i,
              object: _l15,
              graph: o
            }), d = _l15;
          }
        } catch (err) {
          _iterator59.e(err);
        } finally {
          _iterator59.f();
        }

        if (l) {
          var _e76 = Ht(l, t, n, o, r);

          n.push({
            subject: d,
            predicate: a,
            object: _e76,
            graph: o
          }), n.push({
            subject: d,
            predicate: i,
            object: s,
            graph: o
          });
        }

        return c;
      }(e["@list"], t, n, o, r);

      a.termType = _i23.termType, a.value = _i23.value;
    } else {
      var _t46 = N.isObject(e) ? e["@id"] : e;

      a.termType = _t46.startsWith("_:") ? "BlankNode" : "NamedNode", a.value = _t46;
    }

    return "NamedNode" !== a.termType || Vt(a.value) ? a : null;
  }

  zt.toRDF = function (e, t) {
    var n = new E.IdentifierIssuer("_:b"),
        o = {
      "@default": {}
    };
    Dt(e, o, "@default", n);
    var r = [],
        a = Object.keys(o).sort();

    var _iterator60 = _createForOfIteratorHelper(a),
        _step60;

    try {
      for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
        var _e78 = _step60.value;

        var _a31 = void 0;

        if ("@default" === _e78) _a31 = {
          termType: "DefaultGraph",
          value: ""
        };else {
          if (!Vt(_e78)) continue;
          _a31 = _e78.startsWith("_:") ? {
            termType: "BlankNode"
          } : {
            termType: "NamedNode"
          }, _a31.value = _e78;
        }
        Gt(r, o[_e78], _a31, n, t);
      }
    } catch (err) {
      _iterator60.e(err);
    } finally {
      _iterator60.f();
    }

    return r;
  };

  var Qt = De.isKeyword,
      Kt = lt.createNodeMap,
      Xt = lt.mergeNodeMapGraphs,
      Zt = {};
  var Wt = Zt;

  function Yt(e) {
    var t = {};

    for (var _n44 in e) {
      void 0 !== e[_n44] && (t["@" + _n44] = [e[_n44]]);
    }

    return [t];
  }

  function en(e, t, n) {
    for (var _o39 = n.length - 1; _o39 >= 0; --_o39) {
      var r = n[_o39];
      if (r.graph === t && r.subject["@id"] === e["@id"]) return !0;
    }

    return !1;
  }

  function tn(e, t, n) {
    var o = "@" + n;
    var r = o in e ? e[o][0] : t[n];
    if ("embed" === n) if (!0 === r) r = "@once";else if (!1 === r) r = "@never";else if ("@always" !== r && "@never" !== r && "@link" !== r && "@first" !== r && "@last" !== r && "@once" !== r) throw new k("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", {
      code: "invalid @embed value",
      frame: e
    });
    return r;
  }

  function nn(e) {
    if (!N.isArray(e) || 1 !== e.length || !N.isObject(e[0])) throw new k("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.", "jsonld.SyntaxError", {
      frame: e
    });

    if ("@id" in e[0]) {
      var _iterator61 = _createForOfIteratorHelper(E.asArray(e[0]["@id"])),
          _step61;

      try {
        for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
          var _t47 = _step61.value;
          if (!N.isObject(_t47) && !P.isAbsolute(_t47) || N.isString(_t47) && 0 === _t47.indexOf("_:")) throw new k("Invalid JSON-LD syntax; invalid @id in frame.", "jsonld.SyntaxError", {
            code: "invalid frame",
            frame: e
          });
        }
      } catch (err) {
        _iterator61.e(err);
      } finally {
        _iterator61.f();
      }
    }

    if ("@type" in e[0]) {
      var _iterator62 = _createForOfIteratorHelper(E.asArray(e[0]["@type"])),
          _step62;

      try {
        for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
          var _t48 = _step62.value;
          if (!N.isObject(_t48) && !P.isAbsolute(_t48) || N.isString(_t48) && 0 === _t48.indexOf("_:")) throw new k("Invalid JSON-LD syntax; invalid @type in frame.", "jsonld.SyntaxError", {
            code: "invalid frame",
            frame: e
          });
        }
      } catch (err) {
        _iterator62.e(err);
      } finally {
        _iterator62.f();
      }
    }
  }

  function on(e, t, n, o) {
    var r = !0,
        a = !1;

    for (var _i24 in n) {
      var _s18 = !1;

      var _l16 = E.getValues(t, _i24),
          _c8 = 0 === E.getValues(n, _i24).length;

      if ("@id" === _i24) {
        if (N.isEmptyObject(n["@id"][0] || {}) ? _s18 = !0 : n["@id"].length >= 0 && (_s18 = n["@id"].includes(_l16[0])), !o.requireAll) return _s18;
      } else if ("@type" === _i24) {
        if (r = !1, _c8) {
          if (_l16.length > 0) return !1;
          _s18 = !0;
        } else if (1 === n["@type"].length && N.isEmptyObject(n["@type"][0])) _s18 = _l16.length > 0;else {
          var _iterator63 = _createForOfIteratorHelper(n["@type"]),
              _step63;

          try {
            var _loop2 = function _loop2() {
              var e = _step63.value;
              _s18 = !(!N.isObject(e) || !("@default" in e)) || _s18 || _l16.some(function (t) {
                return t === e;
              });
            };

            for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator63.e(err);
          } finally {
            _iterator63.f();
          }
        }

        if (!o.requireAll) return _s18;
      } else {
        if (Qt(_i24)) continue;
        {
          var _ret = function () {
            var t = E.getValues(n, _i24)[0];
            var a = !1;
            if (t && (nn([t]), a = "@default" in t), r = !1, 0 === _l16.length && a) return "continue";
            if (_l16.length > 0 && _c8) return {
              v: !1
            };

            if (void 0 === t) {
              if (_l16.length > 0) return {
                v: !1
              };
              _s18 = !0;
            } else if (O.isList(t)) {
              var _n45 = t["@list"][0];

              if (O.isList(_l16[0])) {
                var _t49 = _l16[0]["@list"];
                O.isValue(_n45) ? _s18 = _t49.some(function (e) {
                  return cn(_n45, e);
                }) : (O.isSubject(_n45) || O.isSubjectReference(_n45)) && (_s18 = _t49.some(function (t) {
                  return ln(e, _n45, t, o);
                }));
              }
            } else _s18 = O.isValue(t) ? _l16.some(function (e) {
              return cn(t, e);
            }) : O.isSubjectReference(t) ? _l16.some(function (n) {
              return ln(e, t, n, o);
            }) : !!N.isObject(t) && _l16.length > 0;
          }();

          if (_ret === "continue") continue;
          if (_typeof(_ret) === "object") return _ret.v;
        }
      }

      if (!_s18 && o.requireAll) return !1;
      a = a || _s18;
    }

    return r || a;
  }

  function rn(e, t) {
    var n = e.uniqueEmbeds[e.graph],
        o = n[t],
        r = o.parent,
        a = o.property,
        i = {
      "@id": t
    };

    if (N.isArray(r)) {
      for (var _e79 = 0; _e79 < r.length; ++_e79) {
        if (E.compareValues(r[_e79], i)) {
          r[_e79] = i;
          break;
        }
      }
    } else {
      var _e80 = N.isArray(r[a]);

      E.removeValue(r, a, i, {
        propertyIsArray: _e80
      }), E.addValue(r, a, i, {
        propertyIsArray: _e80
      });
    }

    var s = function s(e) {
      var t = Object.keys(n);

      for (var _i25 = 0, _t50 = t; _i25 < _t50.length; _i25++) {
        var _o40 = _t50[_i25];
        _o40 in n && N.isObject(n[_o40].parent) && n[_o40].parent["@id"] === e && (delete n[_o40], s(_o40));
      }
    };

    s(t);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */


  function an(e, t) {
    if (N.isArray(e)) return e.map(function (e) {
      return an(e, t);
    });

    if (N.isObject(e)) {
      // remove @preserve
      if ("@preserve" in e) return e["@preserve"][0];
      if (O.isValue(e)) return e;
      if (O.isList(e)) return e["@list"] = an(e["@list"], t), e;

      if ("@id" in e) {
        var _n46 = e["@id"];

        if (t.link.hasOwnProperty(_n46)) {
          var _o41 = t.link[_n46].indexOf(e);

          if (-1 !== _o41) return t.link[_n46][_o41];

          t.link[_n46].push(e);
        } else t.link[_n46] = [e];
      }

      for (var _n47 in e) {
        "@id" === _n47 && t.bnodesToClear.includes(e[_n47]) ? delete e["@id"] : e[_n47] = an(e[_n47], t);
      }
    }

    return e;
  }

  function sn(e, t, n) {
    N.isObject(e) ? E.addValue(e, t, n, {
      propertyIsArray: !0
    }) : e.push(n);
  }

  function ln(e, t, n, o) {
    if (!("@id" in n)) return !1;
    var r = e.subjects[n["@id"]];
    return r && on(e, r, t, o);
  }

  function cn(e, t) {
    var n = t["@value"],
        o = t["@type"],
        r = t["@language"],
        a = e["@value"] ? N.isArray(e["@value"]) ? e["@value"] : [e["@value"]] : [],
        i = e["@type"] ? N.isArray(e["@type"]) ? e["@type"] : [e["@type"]] : [],
        s = e["@language"] ? N.isArray(e["@language"]) ? e["@language"] : [e["@language"]] : [];
    return 0 === a.length && 0 === i.length && 0 === s.length || !(!a.includes(n) && !N.isEmptyObject(a[0])) && !!(!o && 0 === i.length || i.includes(o) || o && N.isEmptyObject(i[0])) && !!(!r && 0 === s.length || s.includes(r) || r && N.isEmptyObject(s[0]));
  }

  Zt.frameMergedOrDefault = function (e, t, n) {
    var o = {
      options: n,
      embedded: !1,
      graph: "@default",
      graphMap: {
        "@default": {}
      },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    },
        r = new E.IdentifierIssuer("_:b");
    Kt(e, o.graphMap, "@default", r), n.merged && (o.graphMap["@merged"] = Xt(o.graphMap), o.graph = "@merged"), o.subjects = o.graphMap[o.graph];
    var a = [];
    return Zt.frame(o, Object.keys(o.subjects).sort(), t, a), n.pruneBlankNodeIdentifiers && (n.bnodesToClear = Object.keys(o.bnodeMap).filter(function (e) {
      return 1 === o.bnodeMap[e].length;
    })), // remove @preserve from results
    n.link = {}, an(a, n);
  }, Zt.frame = function (e, t, n, o) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    nn(n), n = n[0];
    var a = e.options,
        i = {
      embed: tn(n, a, "embed"),
      explicit: tn(n, a, "explicit"),
      requireAll: tn(n, a, "requireAll")
    };
    e.link.hasOwnProperty(e.graph) || (e.link[e.graph] = {});

    var s = e.link[e.graph],
        l = function (e, t, n, o) {
      var r = {};

      var _iterator64 = _createForOfIteratorHelper(t),
          _step64;

      try {
        for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
          var _a32 = _step64.value;
          var _t51 = e.graphMap[e.graph][_a32];
          on(e, _t51, n, o) && (r[_a32] = _t51);
        }
      } catch (err) {
        _iterator64.e(err);
      } finally {
        _iterator64.f();
      }

      return r;
    }(e, t, n, i),
        c = Object.keys(l).sort();

    var _iterator65 = _createForOfIteratorHelper(c),
        _step65;

    try {
      var _loop3 = function _loop3() {
        var d = _step65.value;
        var c = l[d];

        if (null === r ? e.uniqueEmbeds = _defineProperty$1({}, e.graph, {}) : e.uniqueEmbeds[e.graph] = e.uniqueEmbeds[e.graph] || {}, "@link" === i.embed && d in s) {
          sn(o, r, s[d]);
          return "continue";
        }

        var u = {
          "@id": d
        };
        if (0 === d.indexOf("_:") && E.addValue(e.bnodeMap, d, u, {
          propertyIsArray: !0
        }), s[d] = u, ("@first" === i.embed || "@last" === i.embed) && e.is11) throw new k("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", {
          code: "invalid @embed value",
          frame: n
        });
        if (e.embedded || !e.uniqueEmbeds[e.graph].hasOwnProperty(d)) if (!e.embedded || "@never" !== i.embed && !en(c, e.graph, e.subjectStack)) {
          if (!e.embedded || "@first" != i.embed && "@once" != i.embed || !e.uniqueEmbeds[e.graph].hasOwnProperty(d)) {
            if ("@last" === i.embed && d in e.uniqueEmbeds[e.graph] && rn(e, d), e.uniqueEmbeds[e.graph][d] = {
              parent: o,
              property: r
            }, e.subjectStack.push({
              subject: c,
              graph: e.graph
            }), d in e.graphMap) {
              var _t52 = !1,
                  _o42 = null;

              "@graph" in n ? (_o42 = n["@graph"][0], _t52 = !("@merged" === d || "@default" === d), N.isObject(_o42) || (_o42 = {})) : (_t52 = "@merged" !== e.graph, _o42 = {}), _t52 && Zt.frame(_objectSpread2(_objectSpread2({}, e), {}, {
                graph: d,
                embedded: !1
              }), Object.keys(e.graphMap[d]).sort(), [_o42], u, "@graph");
            }

            "@included" in n && Zt.frame(_objectSpread2(_objectSpread2({}, e), {}, {
              embedded: !1
            }), t, n["@included"], u, "@included");

            var _iterator66 = _createForOfIteratorHelper(Object.keys(c).sort()),
                _step66;

            try {
              for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                var _t53 = _step66.value;

                if (Qt(_t53)) {
                  if (u[_t53] = E.clone(c[_t53]), "@type" === _t53) {
                    var _iterator69 = _createForOfIteratorHelper(c["@type"]),
                        _step69;

                    try {
                      for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                        var _t54 = _step69.value;
                        0 === _t54.indexOf("_:") && E.addValue(e.bnodeMap, _t54, u, {
                          propertyIsArray: !0
                        });
                      }
                    } catch (err) {
                      _iterator69.e(err);
                    } finally {
                      _iterator69.f();
                    }
                  }
                } else if (!i.explicit || _t53 in n) {
                  var _iterator70 = _createForOfIteratorHelper(c[_t53]),
                      _step70;

                  try {
                    for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                      var _o43 = _step70.value;

                      var _r26 = _t53 in n ? n[_t53] : Yt(i);

                      if (O.isList(_o43)) {
                        var _r27 = n[_t53] && n[_t53][0] && n[_t53][0]["@list"] ? n[_t53][0]["@list"] : Yt(i),
                            _a33 = {
                          "@list": []
                        };

                        sn(u, _t53, _a33);
                        var _s19 = _o43["@list"];

                        var _iterator71 = _createForOfIteratorHelper(_s19),
                            _step71;

                        try {
                          for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                            var _t55 = _step71.value;
                            O.isSubjectReference(_t55) ? Zt.frame(_objectSpread2(_objectSpread2({}, e), {}, {
                              embedded: !0
                            }), [_t55["@id"]], _r27, _a33, "@list") : sn(_a33, "@list", E.clone(_t55));
                          }
                        } catch (err) {
                          _iterator71.e(err);
                        } finally {
                          _iterator71.f();
                        }
                      } else O.isSubjectReference(_o43) ? Zt.frame(_objectSpread2(_objectSpread2({}, e), {}, {
                        embedded: !0
                      }), [_o43["@id"]], _r26, u, _t53) : cn(_r26[0], _o43) && sn(u, _t53, E.clone(_o43));
                    }
                  } catch (err) {
                    _iterator70.e(err);
                  } finally {
                    _iterator70.f();
                  }
                }
              }
            } catch (err) {
              _iterator66.e(err);
            } finally {
              _iterator66.f();
            }

            var _iterator67 = _createForOfIteratorHelper(Object.keys(n).sort()),
                _step67;

            try {
              for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                var _e81 = _step67.value;

                if ("@type" === _e81) {
                  if (!N.isObject(n[_e81][0]) || !("@default" in n[_e81][0])) continue;
                } else if (Qt(_e81)) continue;

                var _t56 = n[_e81][0] || {};

                if (!tn(_t56, a, "omitDefault") && !(_e81 in u)) {
                  var _n48 = "@null";
                  "@default" in _t56 && (_n48 = E.clone(_t56["@default"])), N.isArray(_n48) || (_n48 = [_n48]), u[_e81] = [{
                    "@preserve": _n48
                  }];
                }
              }
            } catch (err) {
              _iterator67.e(err);
            } finally {
              _iterator67.f();
            }

            var _iterator68 = _createForOfIteratorHelper(Object.keys(n["@reverse"] || {}).sort()),
                _step68;

            try {
              for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                var _t57 = _step68.value;
                var _o44 = n["@reverse"][_t57];

                for (var _i26 = 0, _Object$keys = Object.keys(e.subjects); _i26 < _Object$keys.length; _i26++) {
                  var _n49 = _Object$keys[_i26];
                  E.getValues(e.subjects[_n49], _t57).some(function (e) {
                    return e["@id"] === d;
                  }) && (u["@reverse"] = u["@reverse"] || {}, E.addValue(u["@reverse"], _t57, [], {
                    propertyIsArray: !0
                  }), Zt.frame(_objectSpread2(_objectSpread2({}, e), {}, {
                    embedded: !0
                  }), [_n49], _o44, u["@reverse"][_t57], r));
                }
              }
            } catch (err) {
              _iterator68.e(err);
            } finally {
              _iterator68.f();
            }

            sn(o, r, u), e.subjectStack.pop();
          } else sn(o, r, u);
        } else sn(o, r, u);
      };

      for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
        var _ret2 = _loop3();

        if (_ret2 === "continue") continue;
      }
    } catch (err) {
      _iterator65.e(err);
    } finally {
      _iterator65.f();
    }
  }, Zt.cleanupNull = function (e, t) {
    if (N.isArray(e)) {
      return e.map(function (e) {
        return Zt.cleanupNull(e, t);
      }).filter(function (e) {
        return e;
      });
    }

    if ("@null" === e) return null;

    if (N.isObject(e)) {
      if ("@id" in e) {
        var _n50 = e["@id"];

        if (t.link.hasOwnProperty(_n50)) {
          var _o45 = t.link[_n50].indexOf(e);

          if (-1 !== _o45) return t.link[_n50][_o45];

          t.link[_n50].push(e);
        } else t.link[_n50] = [e];
      }

      for (var _n51 in e) {
        e[_n51] = Zt.cleanupNull(e[_n51], t);
      }
    }

    return e;
  };
  var dn = N.isArray,
      un = N.isObject,
      pn = N.isString,
      hn = N.isUndefined,
      fn = O.isList,
      vn = O.isValue,
      gn = O.isGraph,
      yn = O.isSimpleGraph,
      mn = O.isSubjectReference,
      xn = De.expandIri,
      bn = De.getContextValue,
      wn = De.isKeyword,
      jn = De.process,
      In = De.processingMode,
      Nn = P.removeBase,
      Sn = P.prependBase,
      On = E.addValue,
      kn = E.asArray,
      Cn = E.compareShortestLeast,
      Ln = {};
  var An = Ln;

  function Dn(e, t, n) {
    if ("@nest" !== xn(e, t, {
      vocab: !0
    }, n)) throw new k("JSON-LD compact error; nested property must have an @nest value resolving to @nest.", "jsonld.SyntaxError", {
      code: "invalid @nest value"
    });
  }

  Ln.compact = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(_ref27) {
      var e, _ref27$activeProperty, t, n, _ref27$options, o, _ref27$compactionMap, r, _a34, _i27, _s20, a, _ret3;

      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              e = _ref27.activeCtx, _ref27$activeProperty = _ref27.activeProperty, t = _ref27$activeProperty === void 0 ? null : _ref27$activeProperty, n = _ref27.element, _ref27$options = _ref27.options, o = _ref27$options === void 0 ? {} : _ref27$options, _ref27$compactionMap = _ref27.compactionMap, r = _ref27$compactionMap === void 0 ? function () {} : _ref27$compactionMap;

              if (!dn(n)) {
                _context20.next = 22;
                break;
              }

              _a34 = [];
              _i27 = 0;

            case 4:
              if (!(_i27 < n.length)) {
                _context20.next = 20;
                break;
              }

              _context20.next = 7;
              return Ln.compact({
                activeCtx: e,
                activeProperty: t,
                element: n[_i27],
                options: o,
                compactionMap: r
              });

            case 7:
              _s20 = _context20.sent;
              _context20.t0 = null === _s20;

              if (!_context20.t0) {
                _context20.next = 14;
                break;
              }

              _context20.next = 12;
              return r({
                unmappedValue: n[_i27],
                activeCtx: e,
                activeProperty: t,
                parent: n,
                index: _i27,
                options: o
              });

            case 12:
              _s20 = _context20.sent;
              _context20.t0 = void 0 === _s20;

            case 14:
              _context20.t1 = _context20.t0;

              if (_context20.t1) {
                _context20.next = 17;
                break;
              }

              _a34.push(_s20);

            case 17:
              ++_i27;
              _context20.next = 4;
              break;

            case 20:
              if (o.compactArrays && 1 === _a34.length) {
                0 === (bn(e, t, "@container") || []).length && (_a34 = _a34[0]);
              }

              return _context20.abrupt("return", _a34);

            case 22:
              a = bn(e, t, "@context");
              _context20.t2 = hn(a);

              if (_context20.t2) {
                _context20.next = 28;
                break;
              }

              _context20.next = 27;
              return jn({
                activeCtx: e,
                localCtx: a,
                propagate: !0,
                overrideProtected: !0,
                options: o
              });

            case 27:
              e = _context20.sent;

            case 28:
              if (!un(n)) {
                _context20.next = 33;
                break;
              }

              return _context20.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                var _kn3, _kn4;

                var _e82, _t58, _r28, a, i, s, l, c, d, _iterator72, _step72, _t59, _n52, _r29, u, _iterator73, _step73, _l17, _c9, _t60, _t61, _n53, _r30, _iterator74, _step74, _t62, _n54, _s21, _c10, _d5, _u3, _p2, _h3, _f2, _r31, _a35, _a36, _i28, _o46, _r32, _kn, _kn2, _e83, _t63, _a37, _s22, _e84, _n55, _n56, _t64, _n57, _r33, _a38, _n58, _t65, _n59, _o47, _t66;

                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        if (!(o.link && "@id" in n && o.link.hasOwnProperty(n["@id"]))) {
                          _context19.next = 9;
                          break;
                        }

                        _e82 = o.link[n["@id"]];
                        _t58 = 0;

                      case 3:
                        if (!(_t58 < _e82.length)) {
                          _context19.next = 9;
                          break;
                        }

                        if (!(_e82[_t58].expanded === n)) {
                          _context19.next = 6;
                          break;
                        }

                        return _context19.abrupt("return", {
                          v: _e82[_t58].compacted
                        });

                      case 6:
                        ++_t58;
                        _context19.next = 3;
                        break;

                      case 9:
                        if (!(vn(n) || mn(n))) {
                          _context19.next = 12;
                          break;
                        }

                        _r28 = Ln.compactValue({
                          activeCtx: e,
                          activeProperty: t,
                          value: n,
                          options: o
                        });
                        return _context19.abrupt("return", {
                          v: (o.link && mn(n) && (o.link.hasOwnProperty(n["@id"]) || (o.link[n["@id"]] = []), o.link[n["@id"]].push({
                            expanded: n,
                            compacted: _r28
                          })), _r28)
                        });

                      case 12:
                        if (!fn(n)) {
                          _context19.next = 15;
                          break;
                        }

                        if (!(bn(e, t, "@container") || []).includes("@list")) {
                          _context19.next = 15;
                          break;
                        }

                        return _context19.abrupt("return", {
                          v: Ln.compact({
                            activeCtx: e,
                            activeProperty: t,
                            element: n["@list"],
                            options: o,
                            compactionMap: r
                          })
                        });

                      case 15:
                        a = "@reverse" === t, i = {}, s = e;
                        vn(n) || mn(n) || (e = e.revertToPreviousContext());
                        l = bn(s, t, "@context");
                        _context19.t0 = hn(l);

                        if (_context19.t0) {
                          _context19.next = 23;
                          break;
                        }

                        _context19.next = 22;
                        return jn({
                          activeCtx: e,
                          localCtx: l,
                          propagate: !0,
                          overrideProtected: !0,
                          options: o
                        });

                      case 22:
                        e = _context19.sent;

                      case 23:
                        o.link && "@id" in n && (o.link.hasOwnProperty(n["@id"]) || (o.link[n["@id"]] = []), o.link[n["@id"]].push({
                          expanded: n,
                          compacted: i
                        }));
                        c = n["@type"] || [];
                        c.length > 1 && (c = Array.from(c).sort());
                        d = e;
                        _iterator72 = _createForOfIteratorHelper(c);
                        _context19.prev = 28;

                        _iterator72.s();

                      case 30:
                        if ((_step72 = _iterator72.n()).done) {
                          _context19.next = 40;
                          break;
                        }

                        _t59 = _step72.value;
                        _n52 = Ln.compactIri({
                          activeCtx: d,
                          iri: _t59,
                          relativeTo: {
                            vocab: !0
                          }
                        }), _r29 = bn(s, _n52, "@context");
                        _context19.t1 = hn(_r29);

                        if (_context19.t1) {
                          _context19.next = 38;
                          break;
                        }

                        _context19.next = 37;
                        return jn({
                          activeCtx: e,
                          localCtx: _r29,
                          options: o,
                          propagate: !1
                        });

                      case 37:
                        e = _context19.sent;

                      case 38:
                        _context19.next = 30;
                        break;

                      case 40:
                        _context19.next = 45;
                        break;

                      case 42:
                        _context19.prev = 42;
                        _context19.t2 = _context19["catch"](28);

                        _iterator72.e(_context19.t2);

                      case 45:
                        _context19.prev = 45;

                        _iterator72.f();

                        return _context19.finish(45);

                      case 48:
                        u = Object.keys(n).sort();
                        _iterator73 = _createForOfIteratorHelper(u);
                        _context19.prev = 50;

                        _iterator73.s();

                      case 52:
                        if ((_step73 = _iterator73.n()).done) {
                          _context19.next = 186;
                          break;
                        }

                        _l17 = _step73.value;
                        _c9 = n[_l17];

                        if (!("@id" !== _l17)) {
                          _context19.next = 181;
                          break;
                        }

                        if (!("@type" !== _l17)) {
                          _context19.next = 175;
                          break;
                        }

                        if (!("@reverse" !== _l17)) {
                          _context19.next = 168;
                          break;
                        }

                        if (!("@preserve" !== _l17)) {
                          _context19.next = 162;
                          break;
                        }

                        if (!("@index" !== _l17)) {
                          _context19.next = 156;
                          break;
                        }

                        if (!("@graph" !== _l17 && "@list" !== _l17 && "@included" !== _l17 && wn(_l17))) {
                          _context19.next = 65;
                          break;
                        }

                        _t60 = Ln.compactIri({
                          activeCtx: e,
                          iri: _l17,
                          relativeTo: {
                            vocab: !0
                          }
                        });
                        On(i, _t60, _c9);
                        _context19.next = 154;
                        break;

                      case 65:
                        if (dn(_c9)) {
                          _context19.next = 67;
                          break;
                        }

                        throw new k("JSON-LD expansion error; expanded value must be an array.", "jsonld.SyntaxError");

                      case 67:
                        if (0 === _c9.length) {
                          _t61 = Ln.compactIri({
                            activeCtx: e,
                            iri: _l17,
                            value: _c9,
                            relativeTo: {
                              vocab: !0
                            },
                            reverse: a
                          }), _n53 = e.mappings.has(_t61) ? e.mappings.get(_t61)["@nest"] : null;
                          _r30 = i;
                          _n53 && (Dn(e, _n53, o), un(i[_n53]) || (i[_n53] = {}), _r30 = i[_n53]), On(_r30, _t61, _c9, {
                            propertyIsArray: !0
                          });
                        }

                        _iterator74 = _createForOfIteratorHelper(_c9);
                        _context19.prev = 69;

                        _iterator74.s();

                      case 71:
                        if ((_step74 = _iterator74.n()).done) {
                          _context19.next = 146;
                          break;
                        }

                        _t62 = _step74.value;
                        _n54 = Ln.compactIri({
                          activeCtx: e,
                          iri: _l17,
                          value: _t62,
                          relativeTo: {
                            vocab: !0
                          },
                          reverse: a
                        }), _s21 = e.mappings.has(_n54) ? e.mappings.get(_n54)["@nest"] : null;
                        _c10 = i;
                        _s21 && (Dn(e, _s21, o), un(i[_s21]) || (i[_s21] = {}), _c10 = i[_s21]);
                        _d5 = bn(e, _n54, "@container") || [], _u3 = gn(_t62), _p2 = fn(_t62);
                        _h3 = void 0;
                        _p2 ? _h3 = _t62["@list"] : _u3 && (_h3 = _t62["@graph"]);
                        _context19.next = 81;
                        return Ln.compact({
                          activeCtx: e,
                          activeProperty: _n54,
                          element: _p2 || _u3 ? _h3 : _t62,
                          options: o,
                          compactionMap: r
                        });

                      case 81:
                        _f2 = _context19.sent;

                        if (!_p2) {
                          _context19.next = 87;
                          break;
                        }

                        if (!(dn(_f2) || (_f2 = [_f2]), _d5.includes("@list"))) {
                          _context19.next = 86;
                          break;
                        }

                        On(_c10, _n54, _f2, {
                          valueIsArray: !0,
                          allowDuplicate: !0
                        });
                        return _context19.abrupt("continue", 144);

                      case 86:
                        _f2 = _defineProperty$1({}, Ln.compactIri({
                          activeCtx: e,
                          iri: "@list",
                          relativeTo: {
                            vocab: !0
                          }
                        }), _f2), "@index" in _t62 && (_f2[Ln.compactIri({
                          activeCtx: e,
                          iri: "@index",
                          relativeTo: {
                            vocab: !0
                          }
                        })] = _t62["@index"]);

                      case 87:
                        if (!_u3) {
                          _context19.next = 91;
                          break;
                        }

                        if (_d5.includes("@graph") && (_d5.includes("@id") || _d5.includes("@index") && yn(_t62))) {
                          _r31 = void 0;
                          _c10.hasOwnProperty(_n54) ? _r31 = _c10[_n54] : _c10[_n54] = _r31 = {};
                          _a35 = (_d5.includes("@id") ? _t62["@id"] : _t62["@index"]) || Ln.compactIri({
                            activeCtx: e,
                            iri: "@none",
                            relativeTo: {
                              vocab: !0
                            }
                          });
                          On(_r31, _a35, _f2, {
                            propertyIsArray: !o.compactArrays || _d5.includes("@set")
                          });
                        } else _d5.includes("@graph") && yn(_t62) ? (dn(_f2) && _f2.length > 1 && (_f2 = {
                          "@included": _f2
                        }), On(_c10, _n54, _f2, {
                          propertyIsArray: !o.compactArrays || _d5.includes("@set")
                        })) : (dn(_f2) && 1 === _f2.length && o.compactArrays && (_f2 = _f2[0]), _f2 = _defineProperty$1({}, Ln.compactIri({
                          activeCtx: e,
                          iri: "@graph",
                          relativeTo: {
                            vocab: !0
                          }
                        }), _f2), "@id" in _t62 && (_f2[Ln.compactIri({
                          activeCtx: e,
                          iri: "@id",
                          relativeTo: {
                            vocab: !0
                          }
                        })] = _t62["@id"]), "@index" in _t62 && (_f2[Ln.compactIri({
                          activeCtx: e,
                          iri: "@index",
                          relativeTo: {
                            vocab: !0
                          }
                        })] = _t62["@index"]), On(_c10, _n54, _f2, {
                          propertyIsArray: !o.compactArrays || _d5.includes("@set")
                        }));

                        _context19.next = 144;
                        break;

                      case 91:
                        if (!(_d5.includes("@language") || _d5.includes("@index") || _d5.includes("@id") || _d5.includes("@type"))) {
                          _context19.next = 142;
                          break;
                        }

                        _a36 = void 0, _i28 = void 0;

                        if (!(_c10.hasOwnProperty(_n54) ? _a36 = _c10[_n54] : _c10[_n54] = _a36 = {}, _d5.includes("@language"))) {
                          _context19.next = 97;
                          break;
                        }

                        vn(_f2) && (_f2 = _f2["@value"]), _i28 = _t62["@language"];
                        _context19.next = 139;
                        break;

                      case 97:
                        if (!_d5.includes("@index")) {
                          _context19.next = 118;
                          break;
                        }

                        _o46 = bn(e, _n54, "@index") || "@index", _r32 = Ln.compactIri({
                          activeCtx: e,
                          iri: _o46,
                          relativeTo: {
                            vocab: !0
                          }
                        });

                        if (!("@index" === _o46)) {
                          _context19.next = 103;
                          break;
                        }

                        _i28 = _t62["@index"], delete _f2[_r32];
                        _context19.next = 116;
                        break;

                      case 103:
                        _e83 = void 0;

                        if (!((_kn = kn(_f2[_o46] || []), _kn2 = _toArray(_kn), _i28 = _kn2[0], _e83 = _kn2.slice(1), _kn), pn(_i28))) {
                          _context19.next = 115;
                          break;
                        }

                        _context19.t3 = _e83.length;
                        _context19.next = _context19.t3 === 0 ? 108 : _context19.t3 === 1 ? 110 : 112;
                        break;

                      case 108:
                        delete _f2[_o46];
                        return _context19.abrupt("break", 113);

                      case 110:
                        _f2[_o46] = _e83[0];
                        return _context19.abrupt("break", 113);

                      case 112:
                        _f2[_o46] = _e83;

                      case 113:
                        _context19.next = 116;
                        break;

                      case 115:
                        _i28 = null;

                      case 116:
                        _context19.next = 139;
                        break;

                      case 118:
                        if (!_d5.includes("@id")) {
                          _context19.next = 123;
                          break;
                        }

                        _t63 = Ln.compactIri({
                          activeCtx: e,
                          iri: "@id",
                          relativeTo: {
                            vocab: !0
                          }
                        });
                        _i28 = _f2[_t63], delete _f2[_t63];
                        _context19.next = 139;
                        break;

                      case 123:
                        if (!_d5.includes("@type")) {
                          _context19.next = 139;
                          break;
                        }

                        _a37 = Ln.compactIri({
                          activeCtx: e,
                          iri: "@type",
                          relativeTo: {
                            vocab: !0
                          }
                        });
                        _s22 = void 0;
                        _context19.t4 = ((_kn3 = kn(_f2[_a37] || []), _kn4 = _toArray(_kn3), _i28 = _kn4[0], _s22 = _kn4.slice(1), _kn3), _s22.length);
                        _context19.next = _context19.t4 === 0 ? 129 : _context19.t4 === 1 ? 131 : 133;
                        break;

                      case 129:
                        delete _f2[_a37];
                        return _context19.abrupt("break", 134);

                      case 131:
                        _f2[_a37] = _s22[0];
                        return _context19.abrupt("break", 134);

                      case 133:
                        _f2[_a37] = _s22;

                      case 134:
                        _context19.t5 = 1 === Object.keys(_f2).length && "@id" in _t62;

                        if (!_context19.t5) {
                          _context19.next = 139;
                          break;
                        }

                        _context19.next = 138;
                        return Ln.compact({
                          activeCtx: e,
                          activeProperty: _n54,
                          element: {
                            "@id": _t62["@id"]
                          },
                          options: o,
                          compactionMap: r
                        });

                      case 138:
                        _f2 = _context19.sent;

                      case 139:
                        _i28 || (_i28 = Ln.compactIri({
                          activeCtx: e,
                          iri: "@none",
                          relativeTo: {
                            vocab: !0
                          }
                        })), On(_a36, _i28, _f2, {
                          propertyIsArray: _d5.includes("@set")
                        });
                        _context19.next = 144;
                        break;

                      case 142:
                        _e84 = !o.compactArrays || _d5.includes("@set") || _d5.includes("@list") || dn(_f2) && 0 === _f2.length || "@list" === _l17 || "@graph" === _l17;
                        On(_c10, _n54, _f2, {
                          propertyIsArray: _e84
                        });

                      case 144:
                        _context19.next = 71;
                        break;

                      case 146:
                        _context19.next = 151;
                        break;

                      case 148:
                        _context19.prev = 148;
                        _context19.t6 = _context19["catch"](69);

                        _iterator74.e(_context19.t6);

                      case 151:
                        _context19.prev = 151;

                        _iterator74.f();

                        return _context19.finish(151);

                      case 154:
                        _context19.next = 160;
                        break;

                      case 156:
                        if (!(bn(e, t, "@container") || []).includes("@index")) {
                          _context19.next = 158;
                          break;
                        }

                        return _context19.abrupt("continue", 184);

                      case 158:
                        _n55 = Ln.compactIri({
                          activeCtx: e,
                          iri: _l17,
                          relativeTo: {
                            vocab: !0
                          }
                        });
                        On(i, _n55, _c9);

                      case 160:
                        _context19.next = 166;
                        break;

                      case 162:
                        _context19.next = 164;
                        return Ln.compact({
                          activeCtx: e,
                          activeProperty: t,
                          element: _c9,
                          options: o,
                          compactionMap: r
                        });

                      case 164:
                        _n56 = _context19.sent;
                        dn(_n56) && 0 === _n56.length || On(i, _l17, _n56);

                      case 166:
                        _context19.next = 173;
                        break;

                      case 168:
                        _context19.next = 170;
                        return Ln.compact({
                          activeCtx: e,
                          activeProperty: "@reverse",
                          element: _c9,
                          options: o,
                          compactionMap: r
                        });

                      case 170:
                        _t64 = _context19.sent;

                        for (_n57 in _t64) {
                          if (e.mappings.has(_n57) && e.mappings.get(_n57).reverse) {
                            _r33 = _t64[_n57], _a38 = (bn(e, _n57, "@container") || []).includes("@set") || !o.compactArrays;
                            On(i, _n57, _r33, {
                              propertyIsArray: _a38
                            }), delete _t64[_n57];
                          }
                        }

                        if (Object.keys(_t64).length > 0) {
                          _n58 = Ln.compactIri({
                            activeCtx: e,
                            iri: _l17,
                            relativeTo: {
                              vocab: !0
                            }
                          });
                          On(i, _n58, _t64);
                        }

                      case 173:
                        _context19.next = 179;
                        break;

                      case 175:
                        _t65 = kn(_c9).map(function (e) {
                          return Ln.compactIri({
                            activeCtx: s,
                            iri: e,
                            relativeTo: {
                              vocab: !0
                            }
                          });
                        });
                        1 === _t65.length && (_t65 = _t65[0]);
                        _n59 = Ln.compactIri({
                          activeCtx: e,
                          iri: "@type",
                          relativeTo: {
                            vocab: !0
                          }
                        }), _o47 = (bn(e, _n59, "@container") || []).includes("@set") && In(e, 1.1) || dn(_t65) && 0 === _c9.length;
                        On(i, _n59, _t65, {
                          propertyIsArray: _o47
                        });

                      case 179:
                        _context19.next = 184;
                        break;

                      case 181:
                        _t66 = kn(_c9).map(function (t) {
                          return Ln.compactIri({
                            activeCtx: e,
                            iri: t,
                            relativeTo: {
                              vocab: !1
                            },
                            base: o.base
                          });
                        });
                        1 === _t66.length && (_t66 = _t66[0]);
                        i[Ln.compactIri({
                          activeCtx: e,
                          iri: "@id",
                          relativeTo: {
                            vocab: !0
                          }
                        })] = _t66;

                      case 184:
                        _context19.next = 52;
                        break;

                      case 186:
                        _context19.next = 191;
                        break;

                      case 188:
                        _context19.prev = 188;
                        _context19.t7 = _context19["catch"](50);

                        _iterator73.e(_context19.t7);

                      case 191:
                        _context19.prev = 191;

                        _iterator73.f();

                        return _context19.finish(191);

                      case 194:
                        return _context19.abrupt("return", {
                          v: i
                        });

                      case 195:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, null, [[28, 42, 45, 48], [50, 188, 191, 194], [69, 148, 151, 154]]);
              })(), "t3", 30);

            case 30:
              _ret3 = _context20.t3;

              if (!(_typeof(_ret3) === "object")) {
                _context20.next = 33;
                break;
              }

              return _context20.abrupt("return", _ret3.v);

            case 33:
              return _context20.abrupt("return", n);

            case 34:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));

    return function (_x26) {
      return _ref28.apply(this, arguments);
    };
  }(), Ln.compactIri = function (_ref29) {
    var e = _ref29.activeCtx,
        t = _ref29.iri,
        _ref29$value = _ref29.value,
        n = _ref29$value === void 0 ? null : _ref29$value,
        _ref29$relativeTo = _ref29.relativeTo,
        o = _ref29$relativeTo === void 0 ? {
      vocab: !1
    } : _ref29$relativeTo,
        _ref29$reverse = _ref29.reverse,
        r = _ref29$reverse === void 0 ? !1 : _ref29$reverse,
        _ref29$base = _ref29.base,
        a = _ref29$base === void 0 ? null : _ref29$base;
    if (null === t) return t;
    e.isPropertyTermScoped && e.previousContext && (e = e.previousContext);
    var i = e.getInverse();
    if (wn(t) && t in i && "@none" in i[t] && "@type" in i[t]["@none"] && "@none" in i[t]["@none"]["@type"]) return i[t]["@none"]["@type"]["@none"];

    if (o.vocab && t in i) {
      var _o48 = e["@language"] || "@none",
          _a39 = [];

      un(n) && "@index" in n && !("@graph" in n) && _a39.push("@index", "@index@set"), un(n) && "@preserve" in n && (n = n["@preserve"][0]), gn(n) ? ("@index" in n && _a39.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in n && _a39.push("@graph@id", "@graph@id@set"), _a39.push("@graph", "@graph@set", "@set"), "@index" in n || _a39.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in n || _a39.push("@graph@id", "@graph@id@set")) : un(n) && !vn(n) && _a39.push("@id", "@id@set", "@type", "@set@type");
      var _i29 = "@language",
          _s23 = "@null";
      if (r) _i29 = "@type", _s23 = "@reverse", _a39.push("@set");else if (fn(n)) {
        "@index" in n || _a39.push("@list");
        var _e85 = n["@list"];
        if (0 === _e85.length) _i29 = "@any", _s23 = "@none";else {
          var _t67 = 0 === _e85.length ? _o48 : null,
              _n60 = null;

          for (var _o49 = 0; _o49 < _e85.length; ++_o49) {
            var _r34 = _e85[_o49];
            var _a40 = "@none",
                _i30 = "@none";
            if (vn(_r34)) {
              if ("@direction" in _r34) {
                _a40 = "".concat((_r34["@language"] || "").toLowerCase(), "_").concat(_r34["@direction"]);
              } else "@language" in _r34 ? _a40 = _r34["@language"].toLowerCase() : "@type" in _r34 ? _i30 = _r34["@type"] : _a40 = "@null";
            } else _i30 = "@id";
            if (null === _t67 ? _t67 = _a40 : _a40 !== _t67 && vn(_r34) && (_t67 = "@none"), null === _n60 ? _n60 = _i30 : _i30 !== _n60 && (_n60 = "@none"), "@none" === _t67 && "@none" === _n60) break;
          }

          _t67 = _t67 || "@none", _n60 = _n60 || "@none", "@none" !== _n60 ? (_i29 = "@type", _s23 = _n60) : _s23 = _t67;
        }
      } else {
        if (vn(n)) {
          if ("@language" in n && !("@index" in n)) {
            _a39.push("@language", "@language@set"), _s23 = n["@language"];
            var _e86 = n["@direction"];
            _e86 && (_s23 = "".concat(_s23, "_").concat(_e86));
          } else "@direction" in n && !("@index" in n) ? _s23 = "_".concat(n["@direction"]) : "@type" in n && (_i29 = "@type", _s23 = n["@type"]);
        } else _i29 = "@type", _s23 = "@id";

        _a39.push("@set");
      }
      _a39.push("@none"), un(n) && !("@index" in n) && _a39.push("@index", "@index@set"), vn(n) && 1 === Object.keys(n).length && _a39.push("@language", "@language@set");

      var _l18 = function (e, t, n, o, r, a) {
        null === a && (a = "@null");
        var i = [];

        if (("@id" === a || "@reverse" === a) && un(n) && "@id" in n) {
          "@reverse" === a && i.push("@reverse");

          var _t68 = Ln.compactIri({
            activeCtx: e,
            iri: n["@id"],
            relativeTo: {
              vocab: !0
            }
          });

          e.mappings.has(_t68) && e.mappings.get(_t68) && e.mappings.get(_t68)["@id"] === n["@id"] ? i.push.apply(i, ["@vocab", "@id"]) : i.push.apply(i, ["@id", "@vocab"]);
        } else {
          i.push(a);

          var _e87 = i.find(function (e) {
            return e.includes("_");
          });

          _e87 && i.push(_e87.replace(/^[^_]+_/, "_"));
        }

        i.push("@none");
        var s = e.inverse[t];

        var _iterator75 = _createForOfIteratorHelper(o),
            _step75;

        try {
          for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
            var _e88 = _step75.value;
            if (!(_e88 in s)) continue;
            var _t69 = s[_e88][r];

            var _iterator76 = _createForOfIteratorHelper(i),
                _step76;

            try {
              for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
                var _e89 = _step76.value;
                if (_e89 in _t69) return _t69[_e89];
              }
            } catch (err) {
              _iterator76.e(err);
            } finally {
              _iterator76.f();
            }
          }
        } catch (err) {
          _iterator75.e(err);
        } finally {
          _iterator75.f();
        }

        return null;
      }(e, t, n, _a39, _i29, _s23);

      if (null !== _l18) return _l18;
    }

    if (o.vocab && "@vocab" in e) {
      var _n61 = e["@vocab"];

      if (0 === t.indexOf(_n61) && t !== _n61) {
        var _o50 = t.substr(_n61.length);

        if (!e.mappings.has(_o50)) return _o50;
      }
    }

    var s = null;
    var l = [];
    var c = e.fastCurieMap;
    var d = t.length - 1;

    for (var _e90 = 0; _e90 < d && t[_e90] in c; ++_e90) {
      c = c[t[_e90]], "" in c && l.push(c[""][0]);
    }

    for (var _o51 = l.length - 1; _o51 >= 0; --_o51) {
      var _r35 = l[_o51],
          _a41 = _r35.terms;

      var _iterator77 = _createForOfIteratorHelper(_a41),
          _step77;

      try {
        for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
          var _o52 = _step77.value;

          var _a42 = _o52 + ":" + t.substr(_r35.iri.length);

          e.mappings.get(_o52)._prefix && (!e.mappings.has(_a42) || null === n && e.mappings.get(_a42)["@id"] === t) && (null === s || Cn(_a42, s) < 0) && (s = _a42);
        }
      } catch (err) {
        _iterator77.e(err);
      } finally {
        _iterator77.f();
      }
    }

    if (null !== s) return s;

    var _iterator78 = _createForOfIteratorHelper(e.mappings),
        _step78;

    try {
      for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
        var _step78$value = _slicedToArray$1(_step78.value, 2),
            _n62 = _step78$value[0],
            _o53 = _step78$value[1];

        if (_o53 && _o53._prefix && t.startsWith(_n62 + ":")) throw new k("Absolute IRI \"".concat(t, "\" confused with prefix \"").concat(_n62, "\"."), "jsonld.SyntaxError", {
          code: "IRI confused with prefix",
          context: e
        });
      }
    } catch (err) {
      _iterator78.e(err);
    } finally {
      _iterator78.f();
    }

    return o.vocab ? t : "@base" in e ? e["@base"] ? Nn(Sn(a, e["@base"]), t) : t : Nn(a, t);
  }, Ln.compactValue = function (_ref30) {
    var e = _ref30.activeCtx,
        t = _ref30.activeProperty,
        n = _ref30.value,
        o = _ref30.options;

    if (vn(n)) {
      var _o54 = bn(e, t, "@type"),
          _r36 = bn(e, t, "@language"),
          _a43 = bn(e, t, "@direction"),
          _i31 = bn(e, t, "@container") || [],
          _s24 = "@index" in n && !_i31.includes("@index");

      if (!_s24 && "@none" !== _o54) {
        if (n["@type"] === _o54) return n["@value"];
        if ("@language" in n && n["@language"] === _r36 && "@direction" in n && n["@direction"] === _a43) return n["@value"];
        if ("@language" in n && n["@language"] === _r36) return n["@value"];
        if ("@direction" in n && n["@direction"] === _a43) return n["@value"];
      }

      var _l19 = Object.keys(n).length,
          _c11 = 1 === _l19 || 2 === _l19 && "@index" in n && !_s24,
          _d6 = ("@language" in e),
          _u4 = pn(n["@value"]),
          _p3 = e.mappings.has(t) && null === e.mappings.get(t)["@language"];

      if (_c11 && "@none" !== _o54 && (!_d6 || !_u4 || _p3)) return n["@value"];
      var _h4 = {};
      return _s24 && (_h4[Ln.compactIri({
        activeCtx: e,
        iri: "@index",
        relativeTo: {
          vocab: !0
        }
      })] = n["@index"]), "@type" in n ? _h4[Ln.compactIri({
        activeCtx: e,
        iri: "@type",
        relativeTo: {
          vocab: !0
        }
      })] = Ln.compactIri({
        activeCtx: e,
        iri: n["@type"],
        relativeTo: {
          vocab: !0
        }
      }) : "@language" in n && (_h4[Ln.compactIri({
        activeCtx: e,
        iri: "@language",
        relativeTo: {
          vocab: !0
        }
      })] = n["@language"]), "@direction" in n && (_h4[Ln.compactIri({
        activeCtx: e,
        iri: "@direction",
        relativeTo: {
          vocab: !0
        }
      })] = n["@direction"]), _h4[Ln.compactIri({
        activeCtx: e,
        iri: "@value",
        relativeTo: {
          vocab: !0
        }
      })] = n["@value"], _h4;
    }

    var r = xn(e, t, {
      vocab: !0
    }, o),
        a = bn(e, t, "@type"),
        i = Ln.compactIri({
      activeCtx: e,
      iri: n["@id"],
      relativeTo: {
        vocab: "@vocab" === a
      },
      base: o.base
    });
    return "@id" === a || "@vocab" === a || "@graph" === r ? i : _defineProperty$1({}, Ln.compactIri({
      activeCtx: e,
      iri: "@id",
      relativeTo: {
        vocab: !0
      }
    }), i);
  };

  var Tn = /*#__PURE__*/function () {
    function Tn() {
      _classCallCheck$1(this, Tn);

      this._requests = {};
    }

    _createClass$1(Tn, [{
      key: "wrapLoader",
      value: function wrapLoader(e) {
        var t = this;
        return t._loader = e, function () {
          return t.add.apply(t, arguments);
        };
      }
    }, {
      key: "add",
      value: function () {
        var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  t = this._requests[e];

                  if (!t) {
                    _context21.next = 3;
                    break;
                  }

                  return _context21.abrupt("return", Promise.resolve(t));

                case 3:
                  t = this._requests[e] = this._loader(e);
                  _context21.prev = 4;
                  _context21.next = 7;
                  return t;

                case 7:
                  return _context21.abrupt("return", _context21.sent);

                case 8:
                  _context21.prev = 8;
                  delete this._requests[e];
                  return _context21.finish(8);

                case 11:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21, this, [[4,, 8, 11]]);
        }));

        function add(_x27) {
          return _add.apply(this, arguments);
        }

        return add;
      }()
    }]);

    return Tn;
  }();

  var Rn = E.parseLinkHeader,
      En = E.buildHeaders,
      _n = vt.LINK_HEADER_CONTEXT,
      Mn = P.prependBase;

  var Pn = function Pn() {
    var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      strictSSL: !0,
      maxRedirects: -1,
      headers: {}
    },
        e = _ref32.secure,
        _ref32$strictSSL = _ref32.strictSSL,
        t = _ref32$strictSSL === void 0 ? !0 : _ref32$strictSSL,
        _ref32$maxRedirects = _ref32.maxRedirects,
        n = _ref32$maxRedirects === void 0 ? -1 : _ref32$maxRedirects,
        o = _ref32.request,
        _ref32$headers = _ref32.headers,
        r = _ref32$headers === void 0 ? {} : _ref32$headers;

    r = En(r), o = o || x;
    var a = x;
    return new Tn().wrapLoader(function (e) {
      return i(e, []);
    });

    function i(_x28, _x29) {
      return _i32.apply(this, arguments);
    }

    function _i32() {
      _i32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(s, l) {
        var c, d, u, _c12, p, h, f, _e91, _t70;

        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!(0 !== s.indexOf("http:") && 0 !== s.indexOf("https:"))) {
                  _context22.next = 2;
                  break;
                }

                throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", {
                  code: "loading document failed",
                  url: s
                });

              case 2:
                if (!(e && 0 !== s.indexOf("https"))) {
                  _context22.next = 4;
                  break;
                }

                throw new k('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".', "jsonld.InvalidUrl", {
                  code: "loading document failed",
                  url: s
                });

              case 4:
                d = null;

                if (!(null !== d)) {
                  _context22.next = 7;
                  break;
                }

                return _context22.abrupt("return", d);

              case 7:
                u = null;
                _context22.prev = 8;
                _context22.next = 11;
                return function (e, t) {
                  return new Promise(function (n, o) {
                    e(t, function (e, t, r) {
                      e ? o(e) : n({
                        res: t,
                        body: r
                      });
                    });
                  });
                }(o, {
                  url: s,
                  headers: r,
                  strictSSL: t,
                  followRedirect: !1
                });

              case 11:
                c = _context22.sent;
                _context22.next = 17;
                break;

              case 14:
                _context22.prev = 14;
                _context22.t0 = _context22["catch"](8);
                throw new k("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
                  code: "loading document failed",
                  url: s,
                  cause: _context22.t0
                });

              case 17:
                _c12 = c, p = _c12.res, h = _c12.body;
                d = {
                  contextUrl: null,
                  documentUrl: s,
                  document: h || null
                };
                f = a.STATUS_CODES[p.statusCode];

                if (!(p.statusCode >= 400)) {
                  _context22.next = 22;
                  break;
                }

                throw new k("URL \"".concat(s, "\" could not be dereferenced: ").concat(f), "jsonld.InvalidUrl", {
                  code: "loading document failed",
                  url: s,
                  httpStatusCode: p.statusCode
                });

              case 22:
                if (!(p.headers.link && "application/ld+json" !== p.headers["content-type"])) {
                  _context22.next = 27;
                  break;
                }

                _e91 = Rn(p.headers.link), _t70 = _e91[_n];

                if (!Array.isArray(_t70)) {
                  _context22.next = 26;
                  break;
                }

                throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
                  code: "multiple context link headers",
                  url: s
                });

              case 26:
                _t70 && (d.contextUrl = _t70.target), u = _e91.alternate, u && "application/ld+json" == u.type && !(p.headers["content-type"] || "").match(/^application\/(\w*\+)?json$/) && (p.headers.location = Mn(s, u.target));

              case 27:
                if (!((u || p.statusCode >= 300 && p.statusCode < 400) && p.headers.location)) {
                  _context22.next = 33;
                  break;
                }

                if (!(l.length === n)) {
                  _context22.next = 30;
                  break;
                }

                throw new k("URL could not be dereferenced; there were too many redirects.", "jsonld.TooManyRedirects", {
                  code: "loading document failed",
                  url: s,
                  httpStatusCode: p.statusCode,
                  redirects: l
                });

              case 30:
                if (!(-1 !== l.indexOf(s))) {
                  _context22.next = 32;
                  break;
                }

                throw new k("URL could not be dereferenced; infinite redirection was detected.", "jsonld.InfiniteRedirectDetected", {
                  code: "recursive context inclusion",
                  url: s,
                  httpStatusCode: p.statusCode,
                  redirects: l
                });

              case 32:
                return _context22.abrupt("return", (l.push(s), i(p.headers.location, l)));

              case 33:
                return _context22.abrupt("return", (l.push(s), d));

              case 34:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[8, 14]]);
      }));
      return _i32.apply(this, arguments);
    }
  };

  var Jn = E.parseLinkHeader,
      Bn = E.buildHeaders,
      Fn = vt.LINK_HEADER_CONTEXT,
      Un = P.prependBase,
      qn = /(^|(\r\n))link:/i;

  var Vn = function Vn() {
    var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      headers: {}
    },
        e = _ref33.secure,
        _ref33$headers = _ref33.headers,
        t = _ref33$headers === void 0 ? {} : _ref33$headers,
        n = _ref33.xhr;

    t = Bn(t);
    return new Tn().wrapLoader( /*#__PURE__*/function () {
      var _o55 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(r) {
        var a, i, s, l, c, _e93, _t71;

        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (!(0 !== r.indexOf("http:") && 0 !== r.indexOf("https:"))) {
                  _context23.next = 2;
                  break;
                }

                throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", {
                  code: "loading document failed",
                  url: r
                });

              case 2:
                if (!(e && 0 !== r.indexOf("https"))) {
                  _context23.next = 4;
                  break;
                }

                throw new k('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".', "jsonld.InvalidUrl", {
                  code: "loading document failed",
                  url: r
                });

              case 4:
                _context23.prev = 4;
                _context23.next = 7;
                return function (e, t, n) {
                  var o = new (e = e || XMLHttpRequest)();
                  return new Promise(function (e, r) {
                    o.onload = function () {
                      return e(o);
                    }, o.onerror = function (e) {
                      return r(e);
                    }, o.open("GET", t, !0);

                    for (var _e92 in n) {
                      o.setRequestHeader(_e92, n[_e92]);
                    }

                    o.send();
                  });
                }(n, r, t);

              case 7:
                a = _context23.sent;
                _context23.next = 13;
                break;

              case 10:
                _context23.prev = 10;
                _context23.t0 = _context23["catch"](4);
                throw new k("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
                  code: "loading document failed",
                  url: r,
                  cause: _context23.t0
                });

              case 13:
                if (!(a.status >= 400)) {
                  _context23.next = 15;
                  break;
                }

                throw new k("URL could not be dereferenced: " + a.statusText, "jsonld.LoadDocumentError", {
                  code: "loading document failed",
                  url: r,
                  httpStatusCode: a.status
                });

              case 15:
                i = {
                  contextUrl: null,
                  documentUrl: r,
                  document: a.response
                }, s = null;
                l = a.getResponseHeader("Content-Type");
                qn.test(a.getAllResponseHeaders()) && (c = a.getResponseHeader("Link"));

                if (!(c && "application/ld+json" !== l)) {
                  _context23.next = 29;
                  break;
                }

                _e93 = Jn(c), _t71 = _e93[Fn];

                if (!Array.isArray(_t71)) {
                  _context23.next = 22;
                  break;
                }

                throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
                  code: "multiple context link headers",
                  url: r
                });

              case 22:
                _t71 && (i.contextUrl = _t71.target);
                s = _e93.alternate;
                _context23.t1 = s && "application/ld+json" == s.type && !(l || "").match(/^application\/(\w*\+)?json$/);

                if (!_context23.t1) {
                  _context23.next = 29;
                  break;
                }

                _context23.next = 28;
                return o(Un(r, s.target));

              case 28:
                i = _context23.sent;

              case 29:
                return _context23.abrupt("return", i);

              case 30:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[4, 10]]);
      }));

      function o(_x30) {
        return _o55.apply(this, arguments);
      }

      return o;
    }());
  };
  /**
   * A JavaScript implementation of the JSON-LD API.
   * @author Dave Longley
   * @license BSD 3-Clause License
   */


  var zn = E.IdentifierIssuer,
      $n = et.expand,
      Gn = pt.flatten,
      Hn = Ct.fromRDF,
      Qn = $t.toRDF,
      Kn = Wt.frameMergedOrDefault,
      Xn = Wt.cleanupNull,
      Zn = N.isArray,
      Wn = N.isObject,
      Yn = N.isString,
      eo = O.isSubjectReference,
      to = De.expandIri,
      no = De.getInitialContext,
      oo = De.process,
      ro = De.processingMode,
      ao = An.compact,
      io = An.compactIri,
      so = lt.createNodeMap,
      lo = lt.createMergedNodeMap,
      co = lt.mergeNodeMaps,
      uo = "undefined" != typeof process && process.versions && process.versions.node,
      po = !uo && ("undefined" != typeof window || "undefined" != typeof self),
      ho = function ho(t) {
    var n = {},
        o = new le({
      max: 100
    });

    function r(e, _ref34) {
      var _ref34$documentLoader = _ref34.documentLoader,
          n = _ref34$documentLoader === void 0 ? t.documentLoader : _ref34$documentLoader,
          o = _objectWithoutProperties(_ref34, _excluded);

      return Object.assign({}, {
        documentLoader: n
      }, o, e);
    }

    return t.compact = /*#__PURE__*/function () {
      var _ref35 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e, n, a) {
        var i,
            s,
            l,
            c,
            _e94,
            d,
            _e95,
            _t72,
            _e96,
            _t73,
            _args24 = arguments;

        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!(_args24.length < 2)) {
                  _context24.next = 2;
                  break;
                }

                throw new TypeError("Could not compact, too few arguments.");

              case 2:
                if (!(null === n)) {
                  _context24.next = 4;
                  break;
                }

                throw new k("The compaction context must not be null.", "jsonld.CompactError", {
                  code: "invalid local context"
                });

              case 4:
                if (!(null === e)) {
                  _context24.next = 6;
                  break;
                }

                return _context24.abrupt("return", null);

              case 6:
                (a = r(a, {
                  base: Yn(e) ? e : "",
                  compactArrays: !0,
                  compactToRelative: !0,
                  graph: !1,
                  skipExpansion: !1,
                  link: !1,
                  issuer: new zn("_:b"),
                  contextResolver: new ve({
                    sharedCache: o
                  })
                })).link && (a.skipExpansion = !0);
                a.compactToRelative || delete a.base;

                if (!a.skipExpansion) {
                  _context24.next = 12;
                  break;
                }

                _context24.t0 = e;
                _context24.next = 15;
                break;

              case 12:
                _context24.next = 14;
                return t.expand(e, a);

              case 14:
                _context24.t0 = _context24.sent;

              case 15:
                i = _context24.t0;
                _context24.next = 18;
                return t.processContext(no(a), n, a);

              case 18:
                s = _context24.sent;
                _context24.next = 21;
                return ao({
                  activeCtx: s,
                  element: i,
                  options: a,
                  compactionMap: a.compactionMap
                });

              case 21:
                l = _context24.sent;
                a.compactArrays && !a.graph && Zn(l) ? 1 === l.length ? l = l[0] : 0 === l.length && (l = {}) : a.graph && Wn(l) && (l = [l]), Wn(n) && "@context" in n && (n = n["@context"]), n = E.clone(n), Zn(n) || (n = [n]);
                c = n;
                n = [];

                for (_e94 = 0; _e94 < c.length; ++_e94) {
                  (!Wn(c[_e94]) || Object.keys(c[_e94]).length > 0) && n.push(c[_e94]);
                }

                d = n.length > 0;

                if (1 === n.length && (n = n[0]), Zn(l)) {
                  _e95 = io({
                    activeCtx: s,
                    iri: "@graph",
                    relativeTo: {
                      vocab: !0
                    }
                  }), _t72 = l;
                  l = {}, d && (l["@context"] = n), l[_e95] = _t72;
                } else if (Wn(l) && d) {
                  _e96 = l;
                  l = {
                    "@context": n
                  };

                  for (_t73 in _e96) {
                    l[_t73] = _e96[_t73];
                  }
                }

                return _context24.abrupt("return", l);

              case 29:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      return function (_x31, _x32, _x33) {
        return _ref35.apply(this, arguments);
      };
    }(), t.expand = /*#__PURE__*/function () {
      var _ref36 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e, n) {
        var a,
            i,
            _e97,
            s,
            _o56,
            l,
            _i34,
            _i33,
            _e98,
            c,
            _args25 = arguments;

        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (!(_args25.length < 1)) {
                  _context25.next = 2;
                  break;
                }

                throw new TypeError("Could not expand, too few arguments.");

              case 2:
                !1 === (n = r(n, {
                  keepFreeFloatingNodes: !1,
                  contextResolver: new ve({
                    sharedCache: o
                  })
                })).expansionMap && (n.expansionMap = void 0);
                a = {}, i = [];

                if ("expandContext" in n) {
                  _e97 = E.clone(n.expandContext);
                  Wn(_e97) && "@context" in _e97 ? a.expandContext = _e97 : a.expandContext = {
                    "@context": _e97
                  }, i.push(a.expandContext);
                }

                if (!Yn(e)) {
                  _context25.next = 12;
                  break;
                }

                _context25.next = 8;
                return t.get(e, n);

              case 8:
                _o56 = _context25.sent;
                s = _o56.documentUrl, a.input = _o56.document, _o56.contextUrl && (a.remoteContext = {
                  "@context": _o56.contextUrl
                }, i.push(a.remoteContext));
                _context25.next = 13;
                break;

              case 12:
                a.input = E.clone(e);

              case 13:
                "base" in n || (n.base = s || "");
                l = no(n);
                _i34 = 0, _i33 = i;

              case 16:
                if (!(_i34 < _i33.length)) {
                  _context25.next = 24;
                  break;
                }

                _e98 = _i33[_i34];
                _context25.next = 20;
                return oo({
                  activeCtx: l,
                  localCtx: _e98,
                  options: n
                });

              case 20:
                l = _context25.sent;

              case 21:
                _i34++;
                _context25.next = 16;
                break;

              case 24:
                _context25.next = 26;
                return $n({
                  activeCtx: l,
                  element: a.input,
                  options: n,
                  expansionMap: n.expansionMap
                });

              case 26:
                c = _context25.sent;
                return _context25.abrupt("return", (Wn(c) && "@graph" in c && 1 === Object.keys(c).length ? c = c["@graph"] : null === c && (c = []), Zn(c) || (c = [c]), c));

              case 28:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      return function (_x34, _x35) {
        return _ref36.apply(this, arguments);
      };
    }(), t.flatten = /*#__PURE__*/function () {
      var _ref37 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e, n, a) {
        var i,
            s,
            l,
            _args26 = arguments;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(_args26.length < 1)) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return", new TypeError("Could not flatten, too few arguments."));

              case 2:
                n = "function" == typeof n ? null : n || null, a = r(a, {
                  base: Yn(e) ? e : "",
                  contextResolver: new ve({
                    sharedCache: o
                  })
                });
                _context26.next = 5;
                return t.expand(e, a);

              case 5:
                i = _context26.sent;
                s = Gn(i);

                if (!(null === n)) {
                  _context26.next = 9;
                  break;
                }

                return _context26.abrupt("return", s);

              case 9:
                a.graph = !0, a.skipExpansion = !0;
                _context26.next = 12;
                return t.compact(s, n, a);

              case 12:
                l = _context26.sent;
                return _context26.abrupt("return", l);

              case 14:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }));

      return function (_x36, _x37, _x38) {
        return _ref37.apply(this, arguments);
      };
    }(), t.frame = /*#__PURE__*/function () {
      var _ref38 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e, n, a) {
        var _e99,
            _t74,
            i,
            s,
            l,
            c,
            d,
            u,
            p,
            h,
            _args27 = arguments;

        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!(_args27.length < 2)) {
                  _context27.next = 2;
                  break;
                }

                throw new TypeError("Could not frame, too few arguments.");

              case 2:
                if (!(a = r(a, {
                  base: Yn(e) ? e : "",
                  embed: "@once",
                  explicit: !1,
                  requireAll: !1,
                  omitDefault: !1,
                  bnodesToClear: [],
                  contextResolver: new ve({
                    sharedCache: o
                  })
                }), Yn(n))) {
                  _context27.next = 7;
                  break;
                }

                _context27.next = 5;
                return t.get(n, a);

              case 5:
                _e99 = _context27.sent;

                if (n = _e99.document, _e99.contextUrl) {
                  _t74 = n["@context"];
                  _t74 ? Zn(_t74) ? _t74.push(_e99.contextUrl) : _t74 = [_t74, _e99.contextUrl] : _t74 = _e99.contextUrl, n["@context"] = _t74;
                }

              case 7:
                i = n && n["@context"] || {};
                _context27.next = 10;
                return t.processContext(no(a), i, a);

              case 10:
                s = _context27.sent;
                a.hasOwnProperty("omitGraph") || (a.omitGraph = ro(s, 1.1)), a.hasOwnProperty("pruneBlankNodeIdentifiers") || (a.pruneBlankNodeIdentifiers = ro(s, 1.1));
                _context27.next = 14;
                return t.expand(e, a);

              case 14:
                l = _context27.sent;
                c = _objectSpread2({}, a);
                c.isFrame = !0, c.keepFreeFloatingNodes = !0;
                _context27.next = 19;
                return t.expand(n, c);

              case 19:
                d = _context27.sent;
                u = Object.keys(n).map(function (e) {
                  return to(s, e, {
                    vocab: !0
                  });
                });
                c.merged = !u.includes("@graph"), c.is11 = ro(s, 1.1);
                p = Kn(l, d, c);
                c.graph = !a.omitGraph, c.skipExpansion = !0, c.link = {}, c.framing = !0;
                _context27.next = 26;
                return t.compact(p, i, c);

              case 26:
                h = _context27.sent;
                return _context27.abrupt("return", (c.link = {}, h = Xn(h, c), h));

              case 28:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }));

      return function (_x39, _x40, _x41) {
        return _ref38.apply(this, arguments);
      };
    }(), t.link = /*#__PURE__*/function () {
      var _ref39 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, n, o) {
        var r;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                r = {};
                return _context28.abrupt("return", (n && (r["@context"] = n), r["@embed"] = "@link", t.frame(e, r, o)));

              case 2:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28);
      }));

      return function (_x42, _x43, _x44) {
        return _ref39.apply(this, arguments);
      };
    }(), t.normalize = t.canonize = /*#__PURE__*/function () {
      var _ref40 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e, n) {
        var _t75,
            a,
            i,
            _args29 = arguments;

        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (!(_args29.length < 1)) {
                  _context29.next = 2;
                  break;
                }

                throw new TypeError("Could not canonize, too few arguments.");

              case 2:
                if (!("inputFormat" in (n = r(n, {
                  base: Yn(e) ? e : "",
                  algorithm: "URDNA2015",
                  skipExpansion: !1,
                  contextResolver: new ve({
                    sharedCache: o
                  })
                })))) {
                  _context29.next = 7;
                  break;
                }

                if (!("application/n-quads" !== n.inputFormat && "application/nquads" !== n.inputFormat)) {
                  _context29.next = 5;
                  break;
                }

                throw new k("Unknown canonicalization input format.", "jsonld.CanonizeError");

              case 5:
                _t75 = me.parse(e);
                return _context29.abrupt("return", j.canonize(_t75, n));

              case 7:
                a = _objectSpread2({}, n);
                delete a.format, a.produceGeneralizedRdf = !1;
                _context29.next = 11;
                return t.toRDF(e, a);

              case 11:
                i = _context29.sent;
                return _context29.abrupt("return", j.canonize(i, n));

              case 13:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }));

      return function (_x45, _x46) {
        return _ref40.apply(this, arguments);
      };
    }(), t.fromRDF = /*#__PURE__*/function () {
      var _ref41 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e, t) {
        var _t76,
            o,
            _t77,
            a,
            i,
            _args30 = arguments;

        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!(_args30.length < 1)) {
                  _context30.next = 2;
                  break;
                }

                throw new TypeError("Could not convert from RDF, too few arguments.");

              case 2:
                t = r(t, {
                  format: Yn(e) ? "application/n-quads" : void 0
                });
                _t76 = t, o = _t76.format;
                _t77 = t, a = _t77.rdfParser;

                if (!o) {
                  _context30.next = 10;
                  break;
                }

                if (!(a = a || n[o], !a)) {
                  _context30.next = 8;
                  break;
                }

                throw new k("Unknown input format.", "jsonld.UnknownFormat", {
                  format: o
                });

              case 8:
                _context30.next = 11;
                break;

              case 10:
                a = function a() {
                  return e;
                };

              case 11:
                _context30.next = 13;
                return a(e);

              case 13:
                i = _context30.sent;
                return _context30.abrupt("return", Hn(i, t));

              case 15:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30);
      }));

      return function (_x47, _x48) {
        return _ref41.apply(this, arguments);
      };
    }(), t.toRDF = /*#__PURE__*/function () {
      var _ref42 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(e, n) {
        var a,
            i,
            _args31 = arguments;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!(_args31.length < 1)) {
                  _context31.next = 2;
                  break;
                }

                throw new TypeError("Could not convert to RDF, too few arguments.");

              case 2:
                if (!(n = r(n, {
                  base: Yn(e) ? e : "",
                  skipExpansion: !1,
                  contextResolver: new ve({
                    sharedCache: o
                  })
                })).skipExpansion) {
                  _context31.next = 6;
                  break;
                }

                _context31.t0 = e;
                _context31.next = 9;
                break;

              case 6:
                _context31.next = 8;
                return t.expand(e, n);

              case 8:
                _context31.t0 = _context31.sent;

              case 9:
                a = _context31.t0;
                i = Qn(a, n);

                if (!n.format) {
                  _context31.next = 17;
                  break;
                }

                if (!("application/n-quads" === n.format || "application/nquads" === n.format)) {
                  _context31.next = 16;
                  break;
                }

                _context31.next = 15;
                return me.serialize(i);

              case 15:
                return _context31.abrupt("return", _context31.sent);

              case 16:
                throw new k("Unknown output format.", "jsonld.UnknownFormat", {
                  format: n.format
                });

              case 17:
                return _context31.abrupt("return", i);

              case 18:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31);
      }));

      return function (_x49, _x50) {
        return _ref42.apply(this, arguments);
      };
    }(), t.createNodeMap = /*#__PURE__*/function () {
      var _ref43 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e, n) {
        var a,
            _args32 = arguments;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (!(_args32.length < 1)) {
                  _context32.next = 2;
                  break;
                }

                throw new TypeError("Could not create node map, too few arguments.");

              case 2:
                n = r(n, {
                  base: Yn(e) ? e : "",
                  contextResolver: new ve({
                    sharedCache: o
                  })
                });
                _context32.next = 5;
                return t.expand(e, n);

              case 5:
                a = _context32.sent;
                return _context32.abrupt("return", lo(a, n));

              case 7:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32);
      }));

      return function (_x51, _x52) {
        return _ref43.apply(this, arguments);
      };
    }(), t.merge = /*#__PURE__*/function () {
      var _ref44 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(e, n, a) {
        var i,
            s,
            l,
            c,
            _e100,
            _t78,
            _n63,
            _e101,
            _t79,
            _o57,
            _e102,
            d,
            u,
            p,
            _e103,
            _t80,
            h,
            _args33 = arguments;

        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                if (!(_args33.length < 1)) {
                  _context33.next = 2;
                  break;
                }

                throw new TypeError("Could not merge, too few arguments.");

              case 2:
                if (Zn(e)) {
                  _context33.next = 4;
                  break;
                }

                throw new TypeError('Could not merge, "docs" must be an array.');

              case 4:
                n = "function" == typeof n ? null : n || null, a = r(a, {
                  contextResolver: new ve({
                    sharedCache: o
                  })
                });
                _context33.next = 7;
                return Promise.all(e.map(function (e) {
                  var n = _objectSpread2({}, a);

                  return t.expand(e, n);
                }));

              case 7:
                i = _context33.sent;
                s = !0;
                "mergeNodes" in a && (s = a.mergeNodes);
                l = a.issuer || new zn("_:b"), c = {
                  "@default": {}
                };
                _e100 = 0;

              case 12:
                if (!(_e100 < i.length)) {
                  _context33.next = 29;
                  break;
                }

                _t78 = E.relabelBlankNodes(i[_e100], {
                  issuer: new zn("_:b" + _e100 + "-")
                }), _n63 = s || 0 === _e100 ? c : {
                  "@default": {}
                };

                if (!(so(_t78, _n63, "@default", l), _n63 !== c)) {
                  _context33.next = 26;
                  break;
                }

                _context33.t0 = regeneratorRuntime.keys(_n63);

              case 16:
                if ((_context33.t1 = _context33.t0()).done) {
                  _context33.next = 26;
                  break;
                }

                _e101 = _context33.t1.value;
                _t79 = _n63[_e101];

                if (_e101 in c) {
                  _context33.next = 22;
                  break;
                }

                c[_e101] = _t79;
                return _context33.abrupt("continue", 16);

              case 22:
                _o57 = c[_e101];

                for (_e102 in _t79) {
                  _e102 in _o57 || (_o57[_e102] = _t79[_e102]);
                }

                _context33.next = 16;
                break;

              case 26:
                ++_e100;
                _context33.next = 12;
                break;

              case 29:
                d = co(c), u = [], p = Object.keys(d).sort();

                for (_e103 = 0; _e103 < p.length; ++_e103) {
                  _t80 = d[p[_e103]];
                  eo(_t80) || u.push(_t80);
                }

                if (!(null === n)) {
                  _context33.next = 33;
                  break;
                }

                return _context33.abrupt("return", u);

              case 33:
                a.graph = !0, a.skipExpansion = !0;
                _context33.next = 36;
                return t.compact(u, n, a);

              case 36:
                h = _context33.sent;
                return _context33.abrupt("return", h);

              case 38:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33);
      }));

      return function (_x53, _x54, _x55) {
        return _ref44.apply(this, arguments);
      };
    }(), Object.defineProperty(t, "documentLoader", {
      get: function get() {
        return t._documentLoader;
      },
      set: function set(e) {
        return t._documentLoader = e;
      }
    }), t.documentLoader = /*#__PURE__*/function () {
      var _ref45 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(e) {
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                throw new k("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", {
                  code: "loading document failed",
                  url: e
                });

              case 1:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }));

      return function (_x56) {
        return _ref45.apply(this, arguments);
      };
    }(), t.get = /*#__PURE__*/function () {
      var _ref46 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(e, n) {
        var o, r;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                o = "function" == typeof n.documentLoader ? n.documentLoader : t.documentLoader;
                _context35.next = 3;
                return o(e);

              case 3:
                r = _context35.sent;
                _context35.prev = 4;

                if (r.document) {
                  _context35.next = 7;
                  break;
                }

                throw new k("No remote document found at the given URL.", "jsonld.NullRemoteDocument");

              case 7:
                Yn(r.document) && (r.document = JSON.parse(r.document));
                _context35.next = 13;
                break;

              case 10:
                _context35.prev = 10;
                _context35.t0 = _context35["catch"](4);
                throw new k("Could not retrieve a JSON-LD document from the URL.", "jsonld.LoadDocumentError", {
                  code: "loading document failed",
                  cause: _context35.t0,
                  remoteDoc: r
                });

              case 13:
                return _context35.abrupt("return", r);

              case 14:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, null, [[4, 10]]);
      }));

      return function (_x57, _x58) {
        return _ref46.apply(this, arguments);
      };
    }(), t.processContext = /*#__PURE__*/function () {
      var _ref47 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(e, t, n) {
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", (n = r(n, {
                  base: "",
                  contextResolver: new ve({
                    sharedCache: o
                  })
                }), null === t ? no(n) : (t = E.clone(t), Wn(t) && "@context" in t || (t = {
                  "@context": t
                }), oo({
                  activeCtx: e,
                  localCtx: t,
                  options: n
                }))));

              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }));

      return function (_x59, _x60, _x61) {
        return _ref47.apply(this, arguments);
      };
    }(), t.getContextValue = De.getContextValue, t.documentLoaders = {}, t.documentLoaders.node = Pn, t.documentLoaders.xhr = Vn, t.useDocumentLoader = function (e) {
      if (!(e in t.documentLoaders)) throw new k('Unknown document loader type: "' + e + '"', "jsonld.UnknownDocumentLoader", {
        type: e
      });
      t.documentLoader = t.documentLoaders[e].apply(t, Array.prototype.slice.call(arguments, 1));
    }, t.registerRDFParser = function (e, t) {
      n[e] = t;
    }, t.unregisterRDFParser = function (e) {
      delete n[e];
    }, t.registerRDFParser("application/n-quads", me.parse), t.registerRDFParser("application/nquads", me.parse), t.url = P, t.util = E, Object.assign(t, E), t.promises = t, t.RequestQueue = Tn, t.JsonLdProcessor = function (e) {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck$1(this, t);
        }

        _createClass$1(t, [{
          key: "toString",
          value: function toString() {
            return "[object JsonLdProcessor]";
          }
        }]);

        return t;
      }();

      return Object.defineProperty(t, "prototype", {
        writable: !1,
        enumerable: !1
      }), Object.defineProperty(t.prototype, "constructor", {
        writable: !0,
        enumerable: !1,
        configurable: !0,
        value: t
      }), t.compact = function (t, n) {
        return arguments.length < 2 ? Promise.reject(new TypeError("Could not compact, too few arguments.")) : e.compact(t, n);
      }, t.expand = function (t) {
        return arguments.length < 1 ? Promise.reject(new TypeError("Could not expand, too few arguments.")) : e.expand(t);
      }, t.flatten = function (t) {
        return arguments.length < 1 ? Promise.reject(new TypeError("Could not flatten, too few arguments.")) : e.flatten(t);
      }, t;
    }(t), po && void 0 === e.JsonLdProcessor && Object.defineProperty(e, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: t.JsonLdProcessor
    }), uo ? t.useDocumentLoader("node") : "undefined" != typeof XMLHttpRequest && t.useDocumentLoader("xhr"), t;
  };

  var fo = function fo() {
    return ho(function () {
      return fo();
    });
  };

  ho(fo);
  var jsonld = Object.assign({
    expand: function expand(json) {
      return json;
    },
    compact: function compact(json, context) {
      return json;
    }
  }, fo);

  const lastPart = (text) => {
      return text.split(/\:|\/|\,|\#/).pop();
  };

  const expand = (binding, context) => {
      const bindingSplit = binding.split(':');
      if (context[bindingSplit[0]]) {
          binding = context[bindingSplit[0]] + bindingSplit[1];
      }
      return binding;
  };

  const JsonLdProxy = (data, context, extraCommands = {}, defaultAlias = null) => {
      if (typeof data !== 'object')
          return data;
      const convertProp = (prop) => {
          if (prop.toString().includes(':')) {
              const propSplit = prop.toString().split(':');
              if (context === null || context === void 0 ? void 0 : context[propSplit[0]]) {
                  prop = prop.toString().replace(propSplit[0] + ':', context[propSplit[0]]);
              }
          }
          return prop;
      };
      return new Proxy(data, {
          get(target, prop, receiver) {
              var _a, _b;
              if (prop === '_proxyType')
                  return 'JsonLdProxy';
              prop = convertProp(prop);
              if (prop === '$' && !('$' in extraCommands))
                  return target;
              if (prop === '_alias')
                  return defaultAlias;
              if (prop === '_' && !('_' in extraCommands)) {
                  const getFirst = (thing) => { var _a, _b; return Array.isArray(thing) ? getFirst(thing[0]) : (_b = (_a = thing === null || thing === void 0 ? void 0 : thing['@id']) !== null && _a !== void 0 ? _a : thing === null || thing === void 0 ? void 0 : thing['@value']) !== null && _b !== void 0 ? _b : thing; };
                  return JsonLdProxy(getFirst(target), context, extraCommands, defaultAlias);
              }
              if (prop === 'isProxy')
                  return true;
              for (const [command, callback] of Object.entries(extraCommands)) {
                  if (prop === command)
                      return callback(target);
              }
              if (prop[0] === '*') {
                  const lastPartToFind = prop.toString().substr(1);
                  for (const key of Object.keys(target)) {
                      if (lastPart(key) === lastPartToFind) {
                          prop = key;
                      }
                  }
              }
              const isOurProperty = !Reflect.has({}, prop) && !Reflect.has([], prop) && Reflect.has(target, prop);
              if (defaultAlias && !prop.toString().includes(':') && !Reflect.has({}, prop) && !Reflect.has([], prop)) {
                  const newProp = convertProp(defaultAlias + ':' + prop.toString());
                  const isOurProperty = !Reflect.has({}, newProp) && !Reflect.has([], newProp) && Reflect.has(target, newProp);
                  if (isOurProperty && Reflect.has(target, newProp)) {
                      return JsonLdProxy(target[newProp], context, extraCommands, defaultAlias);
                  }
              }
              if (((_b = (_a = target[prop]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['@list']) && isOurProperty) {
                  return JsonLdProxy(target[prop][0]['@list'], context, extraCommands, defaultAlias);
              }
              if (isOurProperty && target[prop]) {
                  return JsonLdProxy(target[prop], context, extraCommands, defaultAlias);
              }
              if (['filter'].includes(prop.toString())) {
                  const requestedMethod = Reflect.get(target, prop, receiver);
                  return (...input) => {
                      return requestedMethod.apply(target.map(item => JsonLdProxy(item, context, extraCommands, defaultAlias)), input);
                  };
              }
              return Reflect.get(target, prop, receiver);
          },
          set(target, prop, value) {
              prop = convertProp(prop);
              target[prop] = value;
              return true;
          }
      });
  };

  var cjs$5 = function cjs(_) {
    return {
      // About: get: _.get.bind(_)
      // It looks like WebKit/Safari didn't optimize bind at all,
      // so that using bind slows it down by 60%.
      // Firefox and Chrome are just fine in both cases,
      // so let's use the approach that works fast everywhere 👍
      get: function get(key) {
        return _.get(key);
      },
      set: function set(key, value) {
        return _.set(key, value), value;
      }
    };
  };

  var attr = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/;
  var empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
  var node = /<[a-z][^>]+$/i;
  var notNode = />[^<>]*$/;
  var selfClosing = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig;
  var trimEnd = /\s+$/;

  var isNode = function isNode(template, i) {
    return 0 < i-- && (node.test(template[i]) || !notNode.test(template[i]) && isNode(template, i));
  };

  var regular = function regular(original, name, extra) {
    return empty.test(name) ? original : "<".concat(name).concat(extra.replace(trimEnd, ''), "></").concat(name, ">");
  };

  var cjs$4 = function cjs(template, prefix, svg) {
    var text = [];
    var length = template.length;

    var _loop = function _loop(i) {
      var chunk = template[i - 1];
      text.push(attr.test(chunk) && isNode(template, i) ? chunk.replace(attr, function (_, $1, $2) {
        return "".concat(prefix).concat(i - 1, "=").concat($2 || '"').concat($1).concat($2 ? '' : '"');
      }) : "".concat(chunk, "<!--").concat(prefix).concat(i - 1, "-->"));
    };

    for (var i = 1; i < length; i++) {
      _loop(i);
    }

    text.push(template[length - 1]);
    var output = text.join('').trim();
    return svg ? output : output.replace(selfClosing, regular);
  };

  var isArray$2 = Array.isArray;
  var _ref$1 = [],
      indexOf = _ref$1.indexOf,
      slice$1 = _ref$1.slice;
  var isArray_1 = isArray$2;
  var indexOf_1 = indexOf;
  var slice_1 = slice$1;
  var cjs$3 = {
    isArray: isArray_1,
    indexOf: indexOf_1,
    slice: slice_1
  };

  var slice = cjs$3.slice;
  var ELEMENT_NODE = 1;
  var nodeType = 111;

  var remove = function remove(_ref) {
    var firstChild = _ref.firstChild,
        lastChild = _ref.lastChild;
    var range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
  };

  var diffable = function diffable(node, operation) {
    return node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
  };

  var diffable_1 = diffable;

  var persistent = function persistent(fragment) {
    var childNodes = fragment.childNodes;
    var length = childNodes.length;
    if (length < 2) return length ? childNodes[0] : fragment;
    var nodes = slice.call(childNodes, 0);
    var firstChild = nodes[0];
    var lastChild = nodes[length - 1];
    return {
      ELEMENT_NODE: ELEMENT_NODE,
      nodeType: nodeType,
      firstChild: firstChild,
      lastChild: lastChild,
      valueOf: function valueOf() {
        if (childNodes.length !== length) {
          var i = 0;

          while (i < length) {
            fragment.appendChild(nodes[i++]);
          }
        }

        return fragment;
      }
    };
  };

  var persistent_1 = persistent;

  /**
   * ISC License
   *
   * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */

  /**
   * @param {Node} parentNode The container where children live
   * @param {Node[]} a The list of current/live children
   * @param {Node[]} b The list of future children
   * @param {(entry: Node, action: number) => Node} get
   * The callback invoked per each entry related DOM operation.
   * @param {Node} [before] The optional node used as anchor to insert before.
   * @returns {Node[]} The same list of future children.
   */

  var cjs$2 = function cjs(parentNode, a, b, get, before) {
    var bLength = b.length;
    var aEnd = a.length;
    var bEnd = bLength;
    var aStart = 0;
    var bStart = 0;
    var map = null;

    while (aStart < aEnd || bStart < bEnd) {
      // append head, tail, or nodes in between: fast path
      if (aEnd === aStart) {
        // we could be in a situation where the rest of nodes that
        // need to be added are not at the end, and in such case
        // the node to `insertBefore`, if the index is more than 0
        // must be retrieved, otherwise it's gonna be the first item.
        var node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;

        while (bStart < bEnd) {
          parentNode.insertBefore(get(b[bStart++], 1), node);
        }
      } // remove head or tail: fast path
      else if (bEnd === bStart) {
        while (aStart < aEnd) {
          // remove the node only if it's unknown or not live
          if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
          aStart++;
        }
      } // same node: fast path
      else if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
      } // same tail: fast path
      else if (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      } // The once here single last swap "fast path" has been removed in v1.1.0
      // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
      // reverse swap: also fast path
      else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        // this is a "shrink" operation that could happen in these cases:
        // [1, 2, 3, 4, 5]
        // [1, 4, 3, 2, 5]
        // or asymmetric too
        // [1, 2, 3, 4, 5]
        // [1, 2, 3, 5, 6, 4]
        var _node = get(a[--aEnd], -1).nextSibling;
        parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
        parentNode.insertBefore(get(b[--bEnd], 1), _node); // mark the future index as identical (yeah, it's dirty, but cheap 👍)
        // The main reason to do this, is that when a[aEnd] will be reached,
        // the loop will likely be on the fast path, as identical to b[bEnd].
        // In the best case scenario, the next loop will skip the tail,
        // but in the worst one, this node will be considered as already
        // processed, bailing out pretty quickly from the map index check

        a[aEnd] = b[bEnd];
      } // map based fallback, "slow" path
      else {
        // the map requires an O(bEnd - bStart) operation once
        // to store all future nodes indexes for later purposes.
        // In the worst case scenario, this is a full O(N) cost,
        // and such scenario happens at least when all nodes are different,
        // but also if both first and last items of the lists are different
        if (!map) {
          map = new Map();
          var i = bStart;

          while (i < bEnd) {
            map.set(b[i], i++);
          }
        } // if it's a future node, hence it needs some handling


        if (map.has(a[aStart])) {
          // grab the index of such node, 'cause it might have been processed
          var index = map.get(a[aStart]); // if it's not already processed, look on demand for the next LCS

          if (bStart < index && index < bEnd) {
            var _i = aStart; // counts the amount of nodes that are the same in the future

            var sequence = 1;

            while (++_i < aEnd && _i < bEnd && map.get(a[_i]) === index + sequence) {
              sequence++;
            } // effort decision here: if the sequence is longer than replaces
            // needed to reach such sequence, which would brings again this loop
            // to the fast path, prepend the difference before a sequence,
            // and move only the future list index forward, so that aStart
            // and bStart will be aligned again, hence on the fast path.
            // An example considering aStart and bStart are both 0:
            // a: [1, 2, 3, 4]
            // b: [7, 1, 2, 3, 6]
            // this would place 7 before 1 and, from that time on, 1, 2, and 3
            // will be processed at zero cost


            if (sequence > index - bStart) {
              var _node2 = get(a[aStart], 0);

              while (bStart < index) {
                parentNode.insertBefore(get(b[bStart++], 1), _node2);
              }
            } // if the effort wasn't good enough, fallback to a replace,
            // moving both source and target indexes forward, hoping that some
            // similar node will be found later on, to go back to the fast path
            else {
              parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
            }
          } // otherwise move the source forward, 'cause there's nothing to do
          else aStart++;
        } // this node has no meaning in the future list, so it's more than safe
        // to remove it, and check the next live node out instead, meaning
        // that only the live list index should be forwarded
        else parentNode.removeChild(get(a[aStart++], -1));
      }
    }

    return b;
  };

  var isArray$1 = cjs$3.isArray; // flag for foreign checks (slower path, fast by default)

  var aria = function aria(node) {
    return function (values) {
      for (var key in values) {
        var name = key === 'role' ? key : "aria-".concat(key);
        var value = values[key];
        if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
      }
    };
  };

  var aria_1 = aria;

  var attribute = function attribute(node, name) {
    var oldValue,
        orphan = true;
    var attributeNode = document.createAttributeNS(null, name);
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;

        if (oldValue == null) {
          if (!orphan) {
            node.removeAttributeNode(attributeNode);
            orphan = true;
          }
        } else {
          var value = newValue;

          if (value == null) {
            if (!orphan) node.removeAttributeNode(attributeNode);
            orphan = true;
          } else {
            attributeNode.value = value;

            if (orphan) {
              node.setAttributeNodeNS(attributeNode);
              orphan = false;
            }
          }
        }
      }
    };
  };

  var attribute_1 = attribute;

  var _boolean = function _boolean(node, key, oldValue) {
    return function (newValue) {
      if (oldValue !== !!newValue) {
        // when IE won't be around anymore ...
        // node.toggleAttribute(key, oldValue = !!newValue);
        if (oldValue = !!newValue) node.setAttribute(key, '');else node.removeAttribute(key);
      }
    };
  };

  var boolean_1 = _boolean;

  var data = function data(_ref) {
    var dataset = _ref.dataset;
    return function (values) {
      for (var key in values) {
        var value = values[key];
        if (value == null) delete dataset[key];else dataset[key] = value;
      }
    };
  };

  var event = function event(node, name) {
    var oldValue,
        lower,
        type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
    return function (newValue) {
      var info = isArray$1(newValue) ? newValue : [newValue, false];

      if (oldValue !== info[0]) {
        if (oldValue) node.removeEventListener(type, oldValue, info[1]);
        if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
      }
    };
  };

  var event_1 = event;

  var ref = function ref(node) {
    var oldValue;
    return function (value) {
      if (oldValue !== value) {
        oldValue = value;
        if (typeof value === 'function') value(node);else value.current = node;
      }
    };
  };

  var ref_1 = ref;

  var setter = function setter(node, key) {
    return key === 'dataset' ? data(node) : function (value) {
      node[key] = value;
    };
  };

  var setter_1 = setter;

  var text = function text(node) {
    var oldValue;
    return function (newValue) {
      if (oldValue != newValue) {
        oldValue = newValue;
        node.textContent = newValue == null ? '' : newValue;
      }
    };
  };

  var text_1 = text;

  var reducePath = function reducePath(_ref, i) {
    var childNodes = _ref.childNodes;
    return childNodes[i];
  }; // this helper avoid code bloat around handleAnything() callback


  var diff = function diff(comment, oldNodes, newNodes) {
    return cjs$2(comment.parentNode, // TODO: there is a possible edge case where a node has been
    //       removed manually, or it was a keyed one, attached
    //       to a shared reference between renders.
    //       In this case udomdiff might fail at removing such node
    //       as its parent won't be the expected one.
    //       The best way to avoid this issue is to filter oldNodes
    //       in search of those not live, or not in the current parent
    //       anymore, but this would require both a change to uwire,
    //       exposing a parentNode from the firstChild, as example,
    //       but also a filter per each diff that should exclude nodes
    //       that are not in there, penalizing performance quite a lot.
    //       As this has been also a potential issue with domdiff,
    //       and both lighterhtml and hyperHTML might fail with this
    //       very specific edge case, I might as well document this possible
    //       "diffing shenanigan" and call it a day.
    oldNodes, newNodes, diffable_1, comment);
  }; // if an interpolation represents a comment, the whole
  // diffing will be related to such comment.
  // This helper is in charge of understanding how the new
  // content for such interpolation/hole should be updated


  var handleAnything = function handleAnything(comment) {
    var oldValue,
        text,
        nodes = [];

    var anyContent = function anyContent(newValue) {
      switch (_typeof(newValue)) {
        // primitives are handled as text content
        case 'string':
        case 'number':
        case 'boolean':
          if (oldValue !== newValue) {
            oldValue = newValue;
            if (!text) text = document.createTextNode('');
            text.data = newValue;
            nodes = diff(comment, nodes, [text]);
          }

          break;
        // null, and undefined are used to cleanup previous content

        case 'object':
        case 'undefined':
          if (newValue == null) {
            if (oldValue != newValue) {
              oldValue = newValue;
              nodes = diff(comment, nodes, []);
            }

            break;
          } // arrays and nodes have a special treatment


          if (isArray_1(newValue)) {
            oldValue = newValue; // arrays can be used to cleanup, if empty

            if (newValue.length === 0) nodes = diff(comment, nodes, []); // or diffed, if these contains nodes or "wires"
            else if (_typeof(newValue[0]) === 'object') nodes = diff(comment, nodes, newValue); // in all other cases the content is stringified as is
            else anyContent(String(newValue));
            break;
          } // if the new value is a DOM node, or a wire, and it's
          // different from the one already live, then it's diffed.
          // if the node is a fragment, it's appended once via its childNodes
          // There is no `else` here, meaning if the content
          // is not expected one, nothing happens, as easy as that.


          if (oldValue !== newValue && 'ELEMENT_NODE' in newValue) {
            oldValue = newValue;
            nodes = diff(comment, nodes, newValue.nodeType === 11 ? slice_1.call(newValue.childNodes) : [newValue]);
          }

          break;

        case 'function':
          anyContent(newValue(comment));
          break;
      }
    };

    return anyContent;
  }; // attributes can be:
  //  * ref=${...}      for hooks and other purposes
  //  * aria=${...}     for aria attributes
  //  * ?boolean=${...} for boolean attributes
  //  * .dataset=${...} for dataset related attributes
  //  * .setter=${...}  for Custom Elements setters or nodes with setters
  //                    such as buttons, details, options, select, etc
  //  * @event=${...}   to explicitly handle event listeners
  //  * onevent=${...}  to automatically handle event listeners
  //  * generic=${...}  to handle an attribute just like an attribute


  var handleAttribute = function handleAttribute(node, name
  /*, svg*/
  ) {
    switch (name[0]) {
      case '?':
        return boolean_1(node, name.slice(1), false);

      case '.':
        return setter_1(node, name.slice(1));

      case '@':
        return event_1(node, 'on' + name.slice(1));

      case 'o':
        if (name[1] === 'n') return event_1(node, name);
    }

    switch (name) {
      case 'ref':
        return ref_1(node);

      case 'aria':
        return aria_1(node);
    }

    return attribute_1(node, name
    /*, svg*/
    );
  }; // each mapped update carries the update type and its path
  // the type is either node, attribute, or text, while
  // the path is how to retrieve the related node to update.
  // In the attribute case, the attribute name is also carried along.


  function handlers(options) {
    var type = options.type,
        path = options.path;
    var node = path.reduceRight(reducePath, this);
    return type === 'node' ? handleAnything(node) : type === 'attr' ? handleAttribute(node, options.name
    /*, options.svg*/
    ) : text_1(node);
  }

  /*! (c) Andrea Giammarchi - ISC */
  var createContent = function (document) {

    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = ('content' in create(TEMPLATE));
    var createHTML = HAS_CONTENT ? function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } : function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;

      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }

      append(content, childNodes);
      return content;
    };
    return function createContent(markup, type) {
      return (type === 'svg' ? createSVG : createHTML)(markup);
    };

    function append(root, childNodes) {
      var length = childNodes.length;

      while (length--) {
        root.appendChild(childNodes[0]);
      }
    }

    function create(element) {
      return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    } // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE


    function createSVG(svg) {
      var content = create(FRAGMENT);
      var template = create('div');
      template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
      append(content, template.firstChild.childNodes);
      return content;
    }
  }(document);

  var cjs$1 = createContent;

  var isImportNodeLengthWrong = document.importNode.length != 1; // IE11 and old Edge discard empty nodes when cloning, potentially
  // resulting in broken paths to find updates. The workaround here
  // is to import once, upfront, the fragment that will be cloned
  // later on, so that paths are retrieved from one already parsed,
  // hence without missing child nodes once re-cloned.

  var createFragment = isImportNodeLengthWrong ? function (text, type, normalize) {
    return document.importNode(cjs$1(text, type, normalize), true);
  } : cjs$1; // IE11 and old Edge have a different createTreeWalker signature that
  // has been deprecated in other browsers. This export is needed only
  // to guarantee the TreeWalker doesn't show warnings and, ultimately, works

  var createWalker = isImportNodeLengthWrong ? function (fragment) {
    return document.createTreeWalker(fragment, 1 | 128, null, false);
  } : function (fragment) {
    return document.createTreeWalker(fragment, 1 | 128);
  };

  // related to its child nodes, so that it's possible
  // to retrieve later on exact node via reducePath

  var createPath = function createPath(node) {
    var path = [];
    var _node = node,
        parentNode = _node.parentNode;

    while (parentNode) {
      path.push(indexOf_1.call(parentNode.childNodes, node));
      node = parentNode;
      parentNode = node.parentNode;
    }

    return path;
  }; // the prefix is used to identify either comments, attributes, or nodes
  // that contain the related unique id. In the attribute cases
  // isµX="attribute-name" will be used to map current X update to that
  // attribute name, while comments will be like <!--isµX-->, to map
  // the update to that specific comment node, hence its parent.
  // style and textarea will have <!--isµX--> text content, and are handled
  // directly through text-only updates.


  var prefix = 'isµ'; // Template Literals are unique per scope and static, meaning a template
  // should be parsed once, and once only, as it will always represent the same
  // content, within the exact same amount of updates each time.
  // This cache relates each template to its unique content and updates.

  var cache$1 = cjs$5(new WeakMap()); // a RegExp that helps checking nodes that cannot contain comments

  var textOnly = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
  var createCache = function createCache() {
    return {
      stack: [],
      // each template gets a stack for each interpolation "hole"
      entry: null,
      // each entry contains details, such as:
      //  * the template that is representing
      //  * the type of node it represents (html or svg)
      //  * the content fragment with all nodes
      //  * the list of updates per each node (template holes)
      //  * the "wired" node or fragment that will get updates
      // if the template or type are different from the previous one
      // the entry gets re-created each time
      wire: null // each rendered node represent some wired content and
      // this reference to the latest one. If different, the node
      // will be cleaned up and the new "wire" will be appended

    };
  }; // the entry stored in the rendered node cache, and per each "hole"

  var createEntry = function createEntry(type, template) {
    var _mapUpdates = mapUpdates(type, template),
        content = _mapUpdates.content,
        updates = _mapUpdates.updates;

    return {
      type: type,
      template: template,
      content: content,
      updates: updates,
      wire: null
    };
  }; // a template is instrumented to be able to retrieve where updates are needed.
  // Each unique template becomes a fragment, cloned once per each other
  // operation based on the same template, i.e. data => html`<p>${data}</p>`


  var mapTemplate = function mapTemplate(type, template) {
    var text = cjs$4(template, prefix, type === 'svg');
    var content = createFragment(text, type); // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree

    var tw = createWalker(content);
    var nodes = [];
    var length = template.length - 1;
    var i = 0; // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>

    var search = "".concat(prefix).concat(i);

    while (i < length) {
      var node = tw.nextNode(); // if not all updates are bound but there's nothing else to crawl
      // it means that there is something wrong with the template.

      if (!node) throw "bad template: ".concat(text); // if the current node is a comment, and it contains isµX
      // it means the update should take care of any content

      if (node.nodeType === 8) {
        // The only comments to be considered are those
        // which content is exactly the same as the searched one.
        if (node.data === search) {
          nodes.push({
            type: 'node',
            path: createPath(node)
          });
          search = "".concat(prefix).concat(++i);
        }
      } else {
        // if the node is not a comment, loop through all its attributes
        // named isµX and relate attribute updates to this node and the
        // attribute name, retrieved through node.getAttribute("isµX")
        // the isµX attribute will be removed as irrelevant for the layout
        // let svg = -1;
        while (node.hasAttribute(search)) {
          nodes.push({
            type: 'attr',
            path: createPath(node),
            name: node.getAttribute(search) //svg: svg < 0 ? (svg = ('ownerSVGElement' in node ? 1 : 0)) : svg

          });
          node.removeAttribute(search);
          search = "".concat(prefix).concat(++i);
        } // if the node was a style, textarea, or others, check its content
        // and if it is <!--isµX--> then update tex-only this node


        if (textOnly.test(node.tagName) && node.textContent.trim() === "<!--".concat(search, "-->")) {
          node.textContent = '';
          nodes.push({
            type: 'text',
            path: createPath(node)
          });
          search = "".concat(prefix).concat(++i);
        }
      }
    } // once all nodes to update, or their attributes, are known, the content
    // will be cloned in the future to represent the template, and all updates
    // related to such content retrieved right away without needing to re-crawl
    // the exact same template, and its content, more than once.


    return {
      content: content,
      nodes: nodes
    };
  }; // if a template is unknown, perform the previous mapping, otherwise grab
  // its details such as the fragment with all nodes, and updates info.


  var mapUpdates = function mapUpdates(type, template) {
    var _ref = cache$1.get(template) || cache$1.set(template, mapTemplate(type, template)),
        content = _ref.content,
        nodes = _ref.nodes; // clone deeply the fragment


    var fragment = document.importNode(content, true); // and relate an update handler per each node that needs one

    var updates = nodes.map(handlers, fragment); // return the fragment and all updates to use within its nodes

    return {
      content: fragment,
      updates: updates
    };
  }; // as html and svg can be nested calls, but no parent node is known
  // until rendered somewhere, the unroll operation is needed to
  // discover what to do with each interpolation, which will result
  // into an update operation.


  var unroll = function unroll(info, _ref2) {
    var type = _ref2.type,
        template = _ref2.template,
        values = _ref2.values;
    var length = values.length; // interpolations can contain holes and arrays, so these need
    // to be recursively discovered

    unrollValues(info, values, length);
    var entry = info.entry; // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.

    if (!entry || entry.template !== template || entry.type !== type) info.entry = entry = createEntry(type, template);
    var _entry = entry,
        content = _entry.content,
        updates = _entry.updates,
        wire = _entry.wire; // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.

    for (var i = 0; i < length; i++) {
      updates[i](values[i]);
    } // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.


    return wire || (entry.wire = persistent_1(content));
  }; // the stack retains, per each interpolation value, the cache
  // related to each interpolation value, or null, if the render
  // was conditional and the value is not special (Array or Hole)

  var unrollValues = function unrollValues(_ref3, values, length) {
    var stack = _ref3.stack;

    for (var i = 0; i < length; i++) {
      var hole = values[i]; // each Hole gets unrolled and re-assigned as value
      // so that domdiff will deal with a node/wire, not with a hole

      if (hole instanceof Hole) values[i] = unroll(stack[i] || (stack[i] = createCache()), hole); // arrays are recursively resolved so that each entry will contain
      // also a DOM node or a wire, hence it can be diffed if/when needed
      else if (isArray_1(hole)) unrollValues(stack[i] || (stack[i] = createCache()), hole, hole.length); // if the value is nothing special, the stack doesn't need to retain data
      // this is useful also to cleanup previously retained data, if the value
      // was a Hole, or an Array, but not anymore, i.e.:
      // const update = content => html`<div>${content}</div>`;
      // update(listOfItems); update(null); update(html`hole`)
      else stack[i] = null;
    }

    if (length < stack.length) stack.splice(length);
  };
  /**
   * Holds all details wrappers needed to render the content further on.
   * @constructor
   * @param {string} type The hole type, either `html` or `svg`.
   * @param {string[]} template The template literals used to the define the content.
   * @param {Array} values Zero, one, or more interpolated values to render.
   */


  function Hole(type, template, values) {
    this.type = type;
    this.template = template;
    this.values = values;
  }

  var create = Object.create,
      defineProperties$1 = Object.defineProperties; // both `html` and `svg` template literal tags are polluted
  // with a `for(ref[, id])` and a `node` tag too

  var tag$1 = function tag(type) {
    // both `html` and `svg` tags have their own cache
    var keyed = cjs$5(new WeakMap()); // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away

    var fixed = function fixed(cache) {
      return function (template) {
        for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
        }

        return unroll(cache, {
          type: type,
          template: template,
          values: values
        });
      };
    };

    return defineProperties$1( // non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    function (template) {
      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      return new Hole(type, template, values);
    }, {
      "for": {
        // keyed operations need a reference object, usually the parent node
        // which is showing keyed results, and optionally a unique id per each
        // related node, handy with JSON results and mutable list of objects
        // that usually carry a unique identifier
        value: function value(ref, id) {
          var memo = keyed.get(ref) || keyed.set(ref, create(null));
          return memo[id] || (memo[id] = fixed(createCache()));
        }
      },
      node: {
        // it is possible to create one-off content out of the box via node tag
        // this might return the single created node, or a fragment with all
        // nodes present at the root level and, of course, their child nodes
        value: function value(template) {
          for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            values[_key3 - 1] = arguments[_key3];
          }

          return unroll(createCache(), {
            type: type,
            template: template,
            values: values
          }).valueOf();
        }
      }
    });
  }; // each rendered node gets its own cache


  var cache = cjs$5(new WeakMap()); // rendering means understanding what `html` or `svg` tags returned
  // and it relates a specific node to its own unique cache.
  // Each time the content to render changes, the node is cleaned up
  // and the new new content is appended, and if such content is a Hole
  // then it's "unrolled" to resolve all its inner nodes.

  var render$1 = function render(where, what) {
    var hole = typeof what === 'function' ? what() : what;
    var info = cache.get(where) || cache.set(where, createCache());
    var wire = hole instanceof Hole ? unroll(info, hole) : hole;

    if (wire !== info.wire) {
      info.wire = wire;
      where.textContent = ''; // valueOf() simply returns the node itself, but in case it was a "wire"
      // it will eventually re-append all nodes to its fragment so that such
      // fragment can be re-appended many times in a meaningful way
      // (wires are basically persistent fragments facades with special behavior)

      where.appendChild(wire.valueOf());
    }

    return where;
  };

  var html$1 = tag$1('html');
  var svg = tag$1('svg');

  class TranslatedText extends Hole {
      constructor(type, template = [], values = []) {
          super(type, template, values);
          const text = type;
          const context = template;
          this.text = text;
          this.template = [text];
          this.values = [];
          this.context = context;
          this.type = 'html';
      }
      toString() {
          return this.text;
      }
  }
  function mixString(a, b, asCodeString = false) {
      let total = Math.max(a.length, b.length);
      let string = '';
      for (let part = 0; part < total; part++) {
          let valueString = '';
          if (typeof b[part] === 'object') {
              let keys = Object.keys(b[part]);
              valueString = asCodeString ? '{' + keys[0] + '}' : b[part][keys[0]];
          }
          else if (typeof b[part] === 'string') {
              valueString = b[part];
          }
          string += a[part] + valueString;
      }
      return string;
  }
  function I18n(language, prefix = '', possibleLanguageCodes, skipImportLanguage = 'en') {
      return __awaiter(this, void 0, void 0, function* () {
          let translations = {};
          translations[language] = {};
          if (possibleLanguageCodes.includes(language) && language !== skipImportLanguage) {
              try {
                  const filePath = `/js/Translations/${(prefix ? prefix + '.' : '') + language}.js`;
                  translations[language] = (yield import(filePath)).Translations;
              }
              catch (exception) {
                  console.info(exception);
              }
          }
          function Translate(context, ...values) {
              if (typeof context === 'string') {
                  return (strings, ...values) => {
                      let translatedText = Translate(strings, ...values);
                      translatedText.context = context;
                      return translatedText;
                  };
              }
              else {
                  let stringsToTranslate = context;
                  let codeString = mixString(stringsToTranslate, values, true);
                  if (typeof translations[language][codeString] === 'undefined') {
                      return new TranslatedText(mixString(stringsToTranslate, values));
                  }
                  else {
                      let translatedString = translations[language][codeString];
                      let tokens = Object.assign({}, ...values);
                      let replacements = translatedString.match(/{[a-zA-Z]*}/g);
                      if (replacements) {
                          replacements.forEach(replacement => {
                              let variableName = replacement.substr(1).substr(0, replacement.length - 2);
                              translatedString = translatedString.replace(replacement, tokens[variableName]);
                          });
                      }
                      return new TranslatedText(translatedString);
                  }
              }
          }
          Translate.constructor.prototype.direct = (variable) => {
              if (typeof translations[language][variable] === 'undefined') {
                  return new TranslatedText(variable);
              }
              else {
                  return new TranslatedText(translations[language][variable]);
              }
          };
          return Translate;
      });
  }

  var languages = [["aa", "Afar"], ["ab", "Abkhazian"], ["ae", "Avestan"], ["af", "Afrikaans"], ["ak", "Akan"], ["am", "Amharic"], ["an", "Aragonese"], ["ar", "Arabic"], ["as", "Assamese"], ["av", "Avaric"], ["ay", "Aymara"], ["az", "Azerbaijani"], ["ba", "Bashkir"], ["be", "Belarusian"], ["bg", "Bulgarian"], ["bh", "Bihari languages"], ["bi", "Bislama"], ["bm", "Bambara"], ["bn", "Bengali, Bangla"], ["bo", "Tibetan"], ["br", "Breton"], ["bs", "Bosnian"], ["ca", "Catalan, Valencian"], ["ce", "Chechen"], ["ch", "Chamorro"], ["co", "Corsican"], ["cr", "Cree"], ["cs", "Czech"], ["cu", "Church Slavic, Church Slavonic, Old Bulgarian, Old Church Slavonic, Old Slavonic"], ["cv", "Chuvash"], ["cy", "Welsh"], ["da", "Danish"], ["de", "German"], ["dv", "Dhivehi, Divehi, Maldivian"], ["dz", "Dzongkha"], ["ee", "Ewe"], ["el", "Modern Greek (1453-)"], ["en", "English"], ["eo", "Esperanto"], ["es", "Spanish, Castilian"], ["et", "Estonian"], ["eu", "Basque"], ["fa", "Persian"], ["ff", "Fulah"], ["fi", "Finnish"], ["fj", "Fijian"], ["fo", "Faroese"], ["fr", "French"], ["fy", "Western Frisian"], ["ga", "Irish"], ["gd", "Scottish Gaelic, Gaelic"], ["gl", "Galician"], ["gn", "Guarani"], ["gu", "Gujarati"], ["gv", "Manx"], ["ha", "Hausa"], ["he", "Hebrew"], ["hi", "Hindi"], ["ho", "Hiri Motu"], ["hr", "Croatian"], ["ht", "Haitian, Haitian Creole"], ["hu", "Hungarian"], ["hy", "Armenian"], ["hz", "Herero"], ["ia", "Interlingua (International Auxiliary Language Association)"], ["id", "Indonesian"], ["ie", "Interlingue, Occidental"], ["ig", "Igbo"], ["ii", "Sichuan Yi, Nuosu"], ["ik", "Inupiaq"], ["in", "Indonesian"], ["io", "Ido"], ["is", "Icelandic"], ["it", "Italian"], ["iu", "Inuktitut"], ["iw", "Hebrew"], ["ja", "Japanese"], ["ji", "Yiddish"], ["jv", "Javanese"], ["jw", "Javanese"], ["ka", "Georgian"], ["kg", "Kongo"], ["ki", "Kikuyu, Gikuyu"], ["kj", "Kuanyama, Kwanyama"], ["kk", "Kazakh"], ["kl", "Kalaallisut, Greenlandic"], ["km", "Khmer, Central Khmer"], ["kn", "Kannada"], ["ko", "Korean"], ["kr", "Kanuri"], ["ks", "Kashmiri"], ["ku", "Kurdish"], ["kv", "Komi"], ["kw", "Cornish"], ["ky", "Kirghiz, Kyrgyz"], ["la", "Latin"], ["lb", "Luxembourgish, Letzeburgesch"], ["lg", "Ganda, Luganda"], ["li", "Limburgan, Limburger, Limburgish"], ["ln", "Lingala"], ["lo", "Lao"], ["lt", "Lithuanian"], ["lu", "Luba-Katanga"], ["lv", "Latvian"], ["mg", "Malagasy"], ["mh", "Marshallese"], ["mi", "Maori"], ["mk", "Macedonian"], ["ml", "Malayalam"], ["mn", "Mongolian"], ["mo", "Moldavian, Moldovan"], ["mr", "Marathi"], ["ms", "Malay (macrolanguage)"], ["mt", "Maltese"], ["my", "Burmese"], ["na", "Nauru"], ["nb", "Norwegian Bokmål"], ["nd", "North Ndebele"], ["ne", "Nepali (macrolanguage)"], ["ng", "Ndonga"], ["nl", "Dutch, Flemish"], ["nn", "Norwegian Nynorsk"], ["no", "Norwegian"], ["nr", "South Ndebele"], ["nv", "Navajo, Navaho"], ["ny", "Nyanja, Chewa, Chichewa"], ["oc", "Occitan (post 1500)"], ["oj", "Ojibwa"], ["om", "Oromo"], ["or", "Oriya (macrolanguage), Odia (macrolanguage)"], ["os", "Ossetian, Ossetic"], ["pa", "Panjabi, Punjabi"], ["pi", "Pali"], ["pl", "Polish"], ["ps", "Pushto, Pashto"], ["pt", "Portuguese"], ["qu", "Quechua"], ["rm", "Romansh"], ["rn", "Rundi"], ["ro", "Romanian, Moldavian, Moldovan"], ["ru", "Russian"], ["rw", "Kinyarwanda"], ["sa", "Sanskrit"], ["sc", "Sardinian"], ["sd", "Sindhi"], ["se", "Northern Sami"], ["sg", "Sango"], ["sh", "Serbo-Croatian"], ["si", "Sinhala, Sinhalese"], ["sk", "Slovak"], ["sl", "Slovenian"], ["sm", "Samoan"], ["sn", "Shona"], ["so", "Somali"], ["sq", "Albanian"], ["sr", "Serbian"], ["ss", "Swati"], ["st", "Southern Sotho"], ["su", "Sundanese"], ["sv", "Swedish"], ["sw", "Swahili (macrolanguage)"], ["ta", "Tamil"], ["te", "Telugu"], ["tg", "Tajik"], ["th", "Thai"], ["ti", "Tigrinya"], ["tk", "Turkmen"], ["tl", "Tagalog"], ["tn", "Tswana"], ["to", "Tonga (Tonga Islands)"], ["tr", "Turkish"], ["ts", "Tsonga"], ["tt", "Tatar"], ["tw", "Twi"], ["ty", "Tahitian"], ["ug", "Uighur, Uyghur"], ["uk", "Ukrainian"], ["ur", "Urdu"], ["uz", "Uzbek"], ["ve", "Venda"], ["vi", "Vietnamese"], ["vo", "Volapük"], ["wa", "Walloon"], ["wo", "Wolof"], ["xh", "Xhosa"], ["yi", "Yiddish"], ["yo", "Yoruba"], ["za", "Zhuang, Chuang"], ["zh", "Chinese"], ["zu", "Zulu"], ["aaa", "Ghotuo"], ["aab", "Alumu-Tesu"], ["aac", "Ari"], ["aad", "Amal"], ["aae", "Arbëreshë Albanian"], ["aaf", "Aranadan"], ["aag", "Ambrak"], ["aah", "Abu' Arapesh"], ["aai", "Arifama-Miniafia"], ["aak", "Ankave"], ["aal", "Afade"], ["aam", "Aramanik"], ["aan", "Anambé"], ["aao", "Algerian Saharan Arabic"], ["aap", "Pará Arára"], ["aaq", "Eastern Abnaki"], ["aas", "Aasáx"], ["aat", "Arvanitika Albanian"], ["aau", "Abau"], ["aav", "Austro-Asiatic languages"], ["aaw", "Solong"], ["aax", "Mandobo Atas"], ["aaz", "Amarasi"], ["aba", "Abé"], ["abb", "Bankon"], ["abc", "Ambala Ayta"], ["abd", "Manide"], ["abe", "Western Abnaki"], ["abf", "Abai Sungai"], ["abg", "Abaga"], ["abh", "Tajiki Arabic"], ["abi", "Abidji"], ["abj", "Aka-Bea"], ["abl", "Lampung Nyo"], ["abm", "Abanyom"], ["abn", "Abua"], ["abo", "Abon"], ["abp", "Abellen Ayta"], ["abq", "Abaza"], ["abr", "Abron"], ["abs", "Ambonese Malay"], ["abt", "Ambulas"], ["abu", "Abure"], ["abv", "Baharna Arabic"], ["abw", "Pal"], ["abx", "Inabaknon"], ["aby", "Aneme Wake"], ["abz", "Abui"], ["aca", "Achagua"], ["acb", "Áncá"], ["acd", "Gikyode"], ["ace", "Achinese"], ["acf", "Saint Lucian Creole French"], ["ach", "Acoli"], ["aci", "Aka-Cari"], ["ack", "Aka-Kora"], ["acl", "Akar-Bale"], ["acm", "Mesopotamian Arabic"], ["acn", "Achang"], ["acp", "Eastern Acipa"], ["acq", "Ta'izzi-Adeni Arabic"], ["acr", "Achi"], ["acs", "Acroá"], ["act", "Achterhoeks"], ["acu", "Achuar-Shiwiar"], ["acv", "Achumawi"], ["acw", "Hijazi Arabic"], ["acx", "Omani Arabic"], ["acy", "Cypriot Arabic"], ["acz", "Acheron"], ["ada", "Adangme"], ["adb", "Atauran"], ["add", "Lidzonka, Dzodinka"], ["ade", "Adele"], ["adf", "Dhofari Arabic"], ["adg", "Andegerebinha"], ["adh", "Adhola"], ["adi", "Adi"], ["adj", "Adioukrou"], ["adl", "Galo"], ["adn", "Adang"], ["ado", "Abu"], ["adp", "Adap"], ["adq", "Adangbe"], ["adr", "Adonara"], ["ads", "Adamorobe Sign Language"], ["adt", "Adnyamathanha"], ["adu", "Aduge"], ["adw", "Amundava"], ["adx", "Amdo Tibetan"], ["ady", "Adyghe, Adygei"], ["adz", "Adzera"], ["aea", "Areba"], ["aeb", "Tunisian Arabic"], ["aec", "Saidi Arabic"], ["aed", "Argentine Sign Language"], ["aee", "Northeast Pashai, Northeast Pashayi"], ["aek", "Haeke"], ["ael", "Ambele"], ["aem", "Arem"], ["aen", "Armenian Sign Language"], ["aeq", "Aer"], ["aer", "Eastern Arrernte"], ["aes", "Alsea"], ["aeu", "Akeu"], ["aew", "Ambakich"], ["aey", "Amele"], ["aez", "Aeka"], ["afa", "Afro-Asiatic languages"], ["afb", "Gulf Arabic"], ["afd", "Andai"], ["afe", "Putukwam"], ["afg", "Afghan Sign Language"], ["afh", "Afrihili"], ["afi", "Akrukay, Chini"], ["afk", "Nanubae"], ["afn", "Defaka"], ["afo", "Eloyi"], ["afp", "Tapei"], ["afs", "Afro-Seminole Creole"], ["aft", "Afitti"], ["afu", "Awutu"], ["afz", "Obokuitai"], ["aga", "Aguano"], ["agb", "Legbo"], ["agc", "Agatu"], ["agd", "Agarabi"], ["age", "Angal"], ["agf", "Arguni"], ["agg", "Angor"], ["agh", "Ngelima"], ["agi", "Agariya"], ["agj", "Argobba"], ["agk", "Isarog Agta"], ["agl", "Fembe"], ["agm", "Angaataha"], ["agn", "Agutaynen"], ["ago", "Tainae"], ["agp", "Paranan"], ["agq", "Aghem"], ["agr", "Aguaruna"], ["ags", "Esimbi"], ["agt", "Central Cagayan Agta"], ["agu", "Aguacateco"], ["agv", "Remontado Dumagat"], ["agw", "Kahua"], ["agx", "Aghul"], ["agy", "Southern Alta"], ["agz", "Mt. Iriga Agta"], ["aha", "Ahanta"], ["ahb", "Axamb"], ["ahg", "Qimant"], ["ahh", "Aghu"], ["ahi", "Tiagbamrin Aizi"], ["ahk", "Akha"], ["ahl", "Igo"], ["ahm", "Mobumrin Aizi"], ["ahn", "Àhàn"], ["aho", "Ahom"], ["ahp", "Aproumu Aizi"], ["ahr", "Ahirani"], ["ahs", "Ashe"], ["aht", "Ahtena"], ["aia", "Arosi"], ["aib", "Ainu (China)"], ["aic", "Ainbai"], ["aid", "Alngith"], ["aie", "Amara"], ["aif", "Agi"], ["aig", "Antigua and Barbuda Creole English"], ["aih", "Ai-Cham"], ["aii", "Assyrian Neo-Aramaic"], ["aij", "Lishanid Noshan"], ["aik", "Ake"], ["ail", "Aimele"], ["aim", "Aimol"], ["ain", "Ainu (Japan)"], ["aio", "Aiton"], ["aip", "Burumakok"], ["aiq", "Aimaq"], ["air", "Airoran"], ["ais", "Nataoran Amis"], ["ait", "Arikem"], ["aiw", "Aari"], ["aix", "Aighon"], ["aiy", "Ali"], ["aja", "Aja (South Sudan)"], ["ajg", "Aja (Benin)"], ["aji", "Ajië"], ["ajn", "Andajin"], ["ajp", "South Levantine Arabic"], ["ajt", "Judeo-Tunisian Arabic"], ["aju", "Judeo-Moroccan Arabic"], ["ajw", "Ajawa"], ["ajz", "Amri Karbi"], ["akb", "Batak Angkola"], ["akc", "Mpur"], ["akd", "Ukpet-Ehom"], ["ake", "Akawaio"], ["akf", "Akpa"], ["akg", "Anakalangu"], ["akh", "Angal Heneng"], ["aki", "Aiome"], ["akj", "Aka-Jeru"], ["akk", "Akkadian"], ["akl", "Aklanon"], ["akm", "Aka-Bo"], ["ako", "Akurio"], ["akp", "Siwu"], ["akq", "Ak"], ["akr", "Araki"], ["aks", "Akaselem"], ["akt", "Akolet"], ["aku", "Akum"], ["akv", "Akhvakh"], ["akw", "Akwa"], ["akx", "Aka-Kede"], ["aky", "Aka-Kol"], ["akz", "Alabama"], ["ala", "Alago"], ["alc", "Qawasqar"], ["ald", "Alladian"], ["ale", "Aleut"], ["alf", "Alege"], ["alg", "Algonquian languages"], ["alh", "Alawa"], ["ali", "Amaimon"], ["alj", "Alangan"], ["alk", "Alak"], ["all", "Allar"], ["alm", "Amblong"], ["aln", "Gheg Albanian"], ["alo", "Larike-Wakasihu"], ["alp", "Alune"], ["alq", "Algonquin"], ["alr", "Alutor"], ["als", "Tosk Albanian"], ["alt", "Southern Altai"], ["alu", "'Are'are"], ["alv", "Atlantic-Congo languages"], ["alw", "Alaba-K’abeena, Wanbasana"], ["alx", "Amol"], ["aly", "Alyawarr"], ["alz", "Alur"], ["ama", "Amanayé"], ["amb", "Ambo"], ["amc", "Amahuaca"], ["ame", "Yanesha'"], ["amf", "Hamer-Banna"], ["amg", "Amurdak"], ["ami", "Amis"], ["amj", "Amdang"], ["amk", "Ambai"], ["aml", "War-Jaintia"], ["amm", "Ama (Papua New Guinea)"], ["amn", "Amanab"], ["amo", "Amo"], ["amp", "Alamblak"], ["amq", "Amahai"], ["amr", "Amarakaeri"], ["ams", "Southern Amami-Oshima"], ["amt", "Amto"], ["amu", "Guerrero Amuzgo"], ["amv", "Ambelau"], ["amw", "Western Neo-Aramaic"], ["amx", "Anmatyerre"], ["amy", "Ami"], ["amz", "Atampaya"], ["ana", "Andaqui"], ["anb", "Andoa"], ["anc", "Ngas"], ["and", "Ansus"], ["ane", "Xârâcùù"], ["anf", "Animere"], ["ang", "Old English (ca. 450-1100)"], ["anh", "Nend"], ["ani", "Andi"], ["anj", "Anor"], ["ank", "Goemai"], ["anl", "Anu-Hkongso Chin"], ["anm", "Anal"], ["ann", "Obolo"], ["ano", "Andoque"], ["anp", "Angika"], ["anq", "Jarawa (India)"], ["anr", "Andh"], ["ans", "Anserma"], ["ant", "Antakarinya, Antikarinya"], ["anu", "Anuak"], ["anv", "Denya"], ["anw", "Anaang"], ["anx", "Andra-Hus"], ["any", "Anyin"], ["anz", "Anem"], ["aoa", "Angolar"], ["aob", "Abom"], ["aoc", "Pemon"], ["aod", "Andarum"], ["aoe", "Angal Enen"], ["aof", "Bragat"], ["aog", "Angoram"], ["aoh", "Arma"], ["aoi", "Anindilyakwa"], ["aoj", "Mufian"], ["aok", "Arhö"], ["aol", "Alor"], ["aom", "Ömie"], ["aon", "Bumbita Arapesh"], ["aor", "Aore"], ["aos", "Taikat"], ["aot", "Atong (India), A'tong"], ["aou", "A'ou"], ["aox", "Atorada"], ["aoz", "Uab Meto"], ["apa", "Apache languages"], ["apb", "Sa'a"], ["apc", "North Levantine Arabic"], ["apd", "Sudanese Arabic"], ["ape", "Bukiyip"], ["apf", "Pahanan Agta"], ["apg", "Ampanang"], ["aph", "Athpariya"], ["api", "Apiaká"], ["apj", "Jicarilla Apache"], ["apk", "Kiowa Apache"], ["apl", "Lipan Apache"], ["apm", "Mescalero-Chiricahua Apache"], ["apn", "Apinayé"], ["apo", "Ambul"], ["app", "Apma"], ["apq", "A-Pucikwar"], ["apr", "Arop-Lokep"], ["aps", "Arop-Sissano"], ["apt", "Apatani"], ["apu", "Apurinã"], ["apv", "Alapmunte"], ["apw", "Western Apache"], ["apx", "Aputai"], ["apy", "Apalaí"], ["apz", "Safeyoka"], ["aqa", "Alacalufan languages"], ["aqc", "Archi"], ["aqd", "Ampari Dogon"], ["aqg", "Arigidi"], ["aqk", "Aninka"], ["aql", "Algic languages"], ["aqm", "Atohwaim"], ["aqn", "Northern Alta"], ["aqp", "Atakapa"], ["aqr", "Arhâ"], ["aqt", "Angaité"], ["aqz", "Akuntsu"], ["arb", "Standard Arabic"], ["arc", "Official Aramaic (700-300 BCE), Imperial Aramaic (700-300 BCE)"], ["ard", "Arabana"], ["are", "Western Arrarnta"], ["arh", "Arhuaco"], ["ari", "Arikara"], ["arj", "Arapaso"], ["ark", "Arikapú"], ["arl", "Arabela"], ["arn", "Mapudungun, Mapuche"], ["aro", "Araona"], ["arp", "Arapaho"], ["arq", "Algerian Arabic"], ["arr", "Karo (Brazil)"], ["ars", "Najdi Arabic"], ["art", "Artificial languages"], ["aru", "Aruá (Amazonas State), Arawá"], ["arv", "Arbore"], ["arw", "Arawak"], ["arx", "Aruá (Rodonia State)"], ["ary", "Moroccan Arabic"], ["arz", "Egyptian Arabic"], ["asa", "Asu (Tanzania)"], ["asb", "Assiniboine"], ["asc", "Casuarina Coast Asmat"], ["asd", "Asas"], ["ase", "American Sign Language"], ["asf", "Auslan, Australian Sign Language"], ["asg", "Cishingini"], ["ash", "Abishira"], ["asi", "Buruwai"], ["asj", "Sari"], ["ask", "Ashkun"], ["asl", "Asilulu"], ["asn", "Xingú Asuriní"], ["aso", "Dano"], ["asp", "Algerian Sign Language"], ["asq", "Austrian Sign Language"], ["asr", "Asuri"], ["ass", "Ipulo"], ["ast", "Asturian, Asturleonese, Bable, Leonese"], ["asu", "Tocantins Asurini"], ["asv", "Asoa"], ["asw", "Australian Aborigines Sign Language"], ["asx", "Muratayak"], ["asy", "Yaosakor Asmat"], ["asz", "As"], ["ata", "Pele-Ata"], ["atb", "Zaiwa"], ["atc", "Atsahuaca"], ["atd", "Ata Manobo"], ["ate", "Atemble"], ["atg", "Ivbie North-Okpela-Arhe"], ["ath", "Athapascan languages"], ["ati", "Attié"], ["atj", "Atikamekw"], ["atk", "Ati"], ["atl", "Mt. Iraya Agta"], ["atm", "Ata"], ["atn", "Ashtiani"], ["ato", "Atong (Cameroon)"], ["atp", "Pudtol Atta"], ["atq", "Aralle-Tabulahan"], ["atr", "Waimiri-Atroari"], ["ats", "Gros Ventre"], ["att", "Pamplona Atta"], ["atu", "Reel"], ["atv", "Northern Altai"], ["atw", "Atsugewi"], ["atx", "Arutani"], ["aty", "Aneityum"], ["atz", "Arta"], ["aua", "Asumboa"], ["aub", "Alugu"], ["auc", "Waorani"], ["aud", "Anuta"], ["aue", "ǂKxʼauǁʼein"], ["auf", "Arauan languages"], ["aug", "Aguna"], ["auh", "Aushi"], ["aui", "Anuki"], ["auj", "Awjilah"], ["auk", "Heyo"], ["aul", "Aulua"], ["aum", "Asu (Nigeria)"], ["aun", "Molmo One"], ["auo", "Auyokawa"], ["aup", "Makayam"], ["auq", "Anus, Korur"], ["aur", "Aruek"], ["aus", "Australian languages"], ["aut", "Austral"], ["auu", "Auye"], ["auw", "Awyi"], ["aux", "Aurá"], ["auy", "Awiyaana"], ["auz", "Uzbeki Arabic"], ["avb", "Avau"], ["avd", "Alviri-Vidari"], ["avi", "Avikam"], ["avk", "Kotava"], ["avl", "Eastern Egyptian Bedawi Arabic"], ["avm", "Angkamuthi"], ["avn", "Avatime"], ["avo", "Agavotaguerra"], ["avs", "Aushiri"], ["avt", "Au"], ["avu", "Avokaya"], ["avv", "Avá-Canoeiro"], ["awa", "Awadhi"], ["awb", "Awa (Papua New Guinea)"], ["awc", "Cicipu"], ["awd", "Arawakan languages"], ["awe", "Awetí"], ["awg", "Anguthimri"], ["awh", "Awbono"], ["awi", "Aekyom"], ["awk", "Awabakal"], ["awm", "Arawum"], ["awn", "Awngi"], ["awo", "Awak"], ["awr", "Awera"], ["aws", "South Awyu"], ["awt", "Araweté"], ["awu", "Central Awyu"], ["awv", "Jair Awyu"], ["aww", "Awun"], ["awx", "Awara"], ["awy", "Edera Awyu"], ["axb", "Abipon"], ["axe", "Ayerrerenge"], ["axg", "Mato Grosso Arára"], ["axk", "Yaka (Central African Republic)"], ["axl", "Lower Southern Aranda"], ["axm", "Middle Armenian"], ["axx", "Xârâgurè"], ["aya", "Awar"], ["ayb", "Ayizo Gbe"], ["ayc", "Southern Aymara"], ["ayd", "Ayabadhu"], ["aye", "Ayere"], ["ayg", "Ginyanga"], ["ayh", "Hadrami Arabic"], ["ayi", "Leyigha"], ["ayk", "Akuku"], ["ayl", "Libyan Arabic"], ["ayn", "Sanaani Arabic"], ["ayo", "Ayoreo"], ["ayp", "North Mesopotamian Arabic"], ["ayq", "Ayi (Papua New Guinea)"], ["ayr", "Central Aymara"], ["ays", "Sorsogon Ayta"], ["ayt", "Magbukun Ayta"], ["ayu", "Ayu"], ["ayx", "Ayi (China)"], ["ayy", "Tayabas Ayta"], ["ayz", "Mai Brat"], ["aza", "Azha"], ["azb", "South Azerbaijani"], ["azc", "Uto-Aztecan languages"], ["azd", "Eastern Durango Nahuatl"], ["azg", "San Pedro Amuzgos Amuzgo"], ["azj", "North Azerbaijani"], ["azm", "Ipalapa Amuzgo"], ["azn", "Western Durango Nahuatl"], ["azo", "Awing"], ["azt", "Faire Atta"], ["azz", "Highland Puebla Nahuatl"], ["baa", "Babatana"], ["bab", "Bainouk-Gunyuño"], ["bac", "Badui"], ["bad", "Banda languages"], ["bae", "Baré"], ["baf", "Nubaca"], ["bag", "Tuki"], ["bah", "Bahamas Creole English"], ["bai", "Bamileke languages"], ["baj", "Barakai"], ["bal", "Baluchi"], ["ban", "Balinese"], ["bao", "Waimaha"], ["bap", "Bantawa"], ["bar", "Bavarian"], ["bas", "Basa (Cameroon)"], ["bat", "Baltic languages"], ["bau", "Bada (Nigeria)"], ["bav", "Vengo"], ["baw", "Bambili-Bambui"], ["bax", "Bamun"], ["bay", "Batuley"], ["baz", "Tunen"], ["bba", "Baatonum"], ["bbb", "Barai"], ["bbc", "Batak Toba"], ["bbd", "Bau"], ["bbe", "Bangba"], ["bbf", "Baibai"], ["bbg", "Barama"], ["bbh", "Bugan"], ["bbi", "Barombi"], ["bbj", "Ghomálá'"], ["bbk", "Babanki"], ["bbl", "Bats"], ["bbm", "Babango"], ["bbn", "Uneapa"], ["bbo", "Northern Bobo Madaré, Konabéré"], ["bbp", "West Central Banda"], ["bbq", "Bamali"], ["bbr", "Girawa"], ["bbs", "Bakpinka"], ["bbt", "Mburku"], ["bbu", "Kulung (Nigeria)"], ["bbv", "Karnai"], ["bbw", "Baba"], ["bbx", "Bubia"], ["bby", "Befang"], ["bbz", "Babalia Creole Arabic"], ["bca", "Central Bai"], ["bcb", "Bainouk-Samik"], ["bcc", "Southern Balochi"], ["bcd", "North Babar"], ["bce", "Bamenyam"], ["bcf", "Bamu"], ["bcg", "Baga Pokur"], ["bch", "Bariai"], ["bci", "Baoulé"], ["bcj", "Bardi"], ["bck", "Bunuba"], ["bcl", "Central Bikol"], ["bcm", "Bannoni"], ["bcn", "Bali (Nigeria)"], ["bco", "Kaluli"], ["bcp", "Bali (Democratic Republic of Congo)"], ["bcq", "Bench"], ["bcr", "Babine"], ["bcs", "Kohumono"], ["bct", "Bendi"], ["bcu", "Awad Bing"], ["bcv", "Shoo-Minda-Nye"], ["bcw", "Bana"], ["bcy", "Bacama"], ["bcz", "Bainouk-Gunyaamolo"], ["bda", "Bayot"], ["bdb", "Basap"], ["bdc", "Emberá-Baudó"], ["bdd", "Bunama"], ["bde", "Bade"], ["bdf", "Biage"], ["bdg", "Bonggi"], ["bdh", "Baka (South Sudan)"], ["bdi", "Burun"], ["bdj", "Bai (South Sudan), Bai"], ["bdk", "Budukh"], ["bdl", "Indonesian Bajau"], ["bdm", "Buduma"], ["bdn", "Baldemu"], ["bdo", "Morom"], ["bdp", "Bende"], ["bdq", "Bahnar"], ["bdr", "West Coast Bajau"], ["bds", "Burunge"], ["bdt", "Bokoto"], ["bdu", "Oroko"], ["bdv", "Bodo Parja"], ["bdw", "Baham"], ["bdx", "Budong-Budong"], ["bdy", "Bandjalang"], ["bdz", "Badeshi"], ["bea", "Beaver"], ["beb", "Bebele"], ["bec", "Iceve-Maci"], ["bed", "Bedoanas"], ["bee", "Byangsi"], ["bef", "Benabena"], ["beg", "Belait"], ["beh", "Biali"], ["bei", "Bekati'"], ["bej", "Beja, Bedawiyet"], ["bek", "Bebeli"], ["bem", "Bemba (Zambia)"], ["beo", "Beami"], ["bep", "Besoa"], ["beq", "Beembe"], ["ber", "Berber languages"], ["bes", "Besme"], ["bet", "Guiberoua Béte"], ["beu", "Blagar"], ["bev", "Daloa Bété"], ["bew", "Betawi"], ["bex", "Jur Modo"], ["bey", "Beli (Papua New Guinea)"], ["bez", "Bena (Tanzania)"], ["bfa", "Bari"], ["bfb", "Pauri Bareli"], ["bfc", "Panyi Bai, Northern Bai"], ["bfd", "Bafut"], ["bfe", "Betaf, Tena"], ["bff", "Bofi"], ["bfg", "Busang Kayan"], ["bfh", "Blafe"], ["bfi", "British Sign Language"], ["bfj", "Bafanji"], ["bfk", "Ban Khor Sign Language"], ["bfl", "Banda-Ndélé"], ["bfm", "Mmen"], ["bfn", "Bunak"], ["bfo", "Malba Birifor"], ["bfp", "Beba"], ["bfq", "Badaga"], ["bfr", "Bazigar"], ["bfs", "Southern Bai"], ["bft", "Balti"], ["bfu", "Gahri"], ["bfw", "Bondo"], ["bfx", "Bantayanon"], ["bfy", "Bagheli"], ["bfz", "Mahasu Pahari"], ["bga", "Gwamhi-Wuri"], ["bgb", "Bobongko"], ["bgc", "Haryanvi"], ["bgd", "Rathwi Bareli"], ["bge", "Bauria"], ["bgf", "Bangandu"], ["bgg", "Bugun"], ["bgi", "Giangan"], ["bgj", "Bangolan"], ["bgk", "Bit, Buxinhua"], ["bgl", "Bo (Laos)"], ["bgm", "Baga Mboteni"], ["bgn", "Western Balochi"], ["bgo", "Baga Koga"], ["bgp", "Eastern Balochi"], ["bgq", "Bagri"], ["bgr", "Bawm Chin"], ["bgs", "Tagabawa"], ["bgt", "Bughotu"], ["bgu", "Mbongno"], ["bgv", "Warkay-Bipim"], ["bgw", "Bhatri"], ["bgx", "Balkan Gagauz Turkish"], ["bgy", "Benggoi"], ["bgz", "Banggai"], ["bha", "Bharia"], ["bhb", "Bhili"], ["bhc", "Biga"], ["bhd", "Bhadrawahi"], ["bhe", "Bhaya"], ["bhf", "Odiai"], ["bhg", "Binandere"], ["bhh", "Bukharic"], ["bhi", "Bhilali"], ["bhj", "Bahing"], ["bhk", "Albay Bicolano"], ["bhl", "Bimin"], ["bhm", "Bathari"], ["bhn", "Bohtan Neo-Aramaic"], ["bho", "Bhojpuri"], ["bhp", "Bima"], ["bhq", "Tukang Besi South"], ["bhr", "Bara Malagasy"], ["bhs", "Buwal"], ["bht", "Bhattiyali"], ["bhu", "Bhunjia"], ["bhv", "Bahau"], ["bhw", "Biak"], ["bhx", "Bhalay"], ["bhy", "Bhele"], ["bhz", "Bada (Indonesia)"], ["bia", "Badimaya"], ["bib", "Bissa, Bisa"], ["bic", "Bikaru"], ["bid", "Bidiyo"], ["bie", "Bepour"], ["bif", "Biafada"], ["big", "Biangai"], ["bij", "Vaghat-Ya-Bijim-Legeri"], ["bik", "Bikol"], ["bil", "Bile"], ["bim", "Bimoba"], ["bin", "Bini, Edo"], ["bio", "Nai"], ["bip", "Bila"], ["biq", "Bipi"], ["bir", "Bisorio"], ["bit", "Berinomo"], ["biu", "Biete"], ["biv", "Southern Birifor"], ["biw", "Kol (Cameroon)"], ["bix", "Bijori"], ["biy", "Birhor"], ["biz", "Baloi"], ["bja", "Budza"], ["bjb", "Banggarla"], ["bjc", "Bariji"], ["bjd", "Bandjigali"], ["bje", "Biao-Jiao Mien"], ["bjf", "Barzani Jewish Neo-Aramaic"], ["bjg", "Bidyogo"], ["bjh", "Bahinemo"], ["bji", "Burji"], ["bjj", "Kanauji"], ["bjk", "Barok"], ["bjl", "Bulu (Papua New Guinea)"], ["bjm", "Bajelani"], ["bjn", "Banjar"], ["bjo", "Mid-Southern Banda"], ["bjp", "Fanamaket"], ["bjq", "Southern Betsimisaraka Malagasy"], ["bjr", "Binumarien"], ["bjs", "Bajan"], ["bjt", "Balanta-Ganja"], ["bju", "Busuu"], ["bjv", "Bedjond"], ["bjw", "Bakwé"], ["bjx", "Banao Itneg"], ["bjy", "Bayali"], ["bjz", "Baruga"], ["bka", "Kyak"], ["bkb", "Finallig"], ["bkc", "Baka (Cameroon)"], ["bkd", "Binukid, Talaandig"], ["bkf", "Beeke"], ["bkg", "Buraka"], ["bkh", "Bakoko"], ["bki", "Baki"], ["bkj", "Pande"], ["bkk", "Brokskat"], ["bkl", "Berik"], ["bkm", "Kom (Cameroon)"], ["bkn", "Bukitan"], ["bko", "Kwa'"], ["bkp", "Boko (Democratic Republic of Congo)"], ["bkq", "Bakairí"], ["bkr", "Bakumpai"], ["bks", "Northern Sorsoganon"], ["bkt", "Boloki"], ["bku", "Buhid"], ["bkv", "Bekwarra"], ["bkw", "Bekwel"], ["bkx", "Baikeno"], ["bky", "Bokyi"], ["bkz", "Bungku"], ["bla", "Siksika"], ["blb", "Bilua"], ["blc", "Bella Coola"], ["bld", "Bolango"], ["ble", "Balanta-Kentohe"], ["blf", "Buol"], ["blg", "Balau"], ["blh", "Kuwaa"], ["bli", "Bolia"], ["blj", "Bolongan"], ["blk", "Pa'o Karen, Pa'O"], ["bll", "Biloxi"], ["blm", "Beli (South Sudan)"], ["bln", "Southern Catanduanes Bikol"], ["blo", "Anii"], ["blp", "Blablanga"], ["blq", "Baluan-Pam"], ["blr", "Blang"], ["bls", "Balaesang"], ["blt", "Tai Dam"], ["blv", "Kibala, Bolo"], ["blw", "Balangao"], ["blx", "Mag-Indi Ayta"], ["bly", "Notre"], ["blz", "Balantak"], ["bma", "Lame"], ["bmb", "Bembe"], ["bmc", "Biem"], ["bmd", "Baga Manduri"], ["bme", "Limassa"], ["bmf", "Bom-Kim"], ["bmg", "Bamwe"], ["bmh", "Kein"], ["bmi", "Bagirmi"], ["bmj", "Bote-Majhi"], ["bmk", "Ghayavi"], ["bml", "Bomboli"], ["bmm", "Northern Betsimisaraka Malagasy"], ["bmn", "Bina (Papua New Guinea)"], ["bmo", "Bambalang"], ["bmp", "Bulgebi"], ["bmq", "Bomu"], ["bmr", "Muinane"], ["bms", "Bilma Kanuri"], ["bmt", "Biao Mon"], ["bmu", "Somba-Siawari"], ["bmv", "Bum"], ["bmw", "Bomwali"], ["bmx", "Baimak"], ["bmy", "Bemba (Democratic Republic of Congo)"], ["bmz", "Baramu"], ["bna", "Bonerate"], ["bnb", "Bookan"], ["bnc", "Bontok"], ["bnd", "Banda (Indonesia)"], ["bne", "Bintauna"], ["bnf", "Masiwang"], ["bng", "Benga"], ["bni", "Bangi"], ["bnj", "Eastern Tawbuid"], ["bnk", "Bierebo"], ["bnl", "Boon"], ["bnm", "Batanga"], ["bnn", "Bunun"], ["bno", "Bantoanon"], ["bnp", "Bola"], ["bnq", "Bantik"], ["bnr", "Butmas-Tur"], ["bns", "Bundeli"], ["bnt", "Bantu languages"], ["bnu", "Bentong"], ["bnv", "Bonerif, Beneraf, Edwas"], ["bnw", "Bisis"], ["bnx", "Bangubangu"], ["bny", "Bintulu"], ["bnz", "Beezen"], ["boa", "Bora"], ["bob", "Aweer"], ["boe", "Mundabli"], ["bof", "Bolon"], ["bog", "Bamako Sign Language"], ["boh", "Boma"], ["boi", "Barbareño"], ["boj", "Anjam"], ["bok", "Bonjo"], ["bol", "Bole"], ["bom", "Berom"], ["bon", "Bine"], ["boo", "Tiemacèwè Bozo"], ["bop", "Bonkiman"], ["boq", "Bogaya"], ["bor", "Borôro"], ["bot", "Bongo"], ["bou", "Bondei"], ["bov", "Tuwuli"], ["bow", "Rema"], ["box", "Buamu"], ["boy", "Bodo (Central African Republic)"], ["boz", "Tiéyaxo Bozo"], ["bpa", "Daakaka"], ["bpb", "Barbacoas"], ["bpd", "Banda-Banda"], ["bpe", "Bauni"], ["bpg", "Bonggo"], ["bph", "Botlikh"], ["bpi", "Bagupi"], ["bpj", "Binji"], ["bpk", "Orowe, 'Ôrôê"], ["bpl", "Broome Pearling Lugger Pidgin"], ["bpm", "Biyom"], ["bpn", "Dzao Min"], ["bpo", "Anasi"], ["bpp", "Kaure"], ["bpq", "Banda Malay"], ["bpr", "Koronadal Blaan"], ["bps", "Sarangani Blaan"], ["bpt", "Barrow Point"], ["bpu", "Bongu"], ["bpv", "Bian Marind"], ["bpw", "Bo (Papua New Guinea)"], ["bpx", "Palya Bareli"], ["bpy", "Bishnupriya"], ["bpz", "Bilba"], ["bqa", "Tchumbuli"], ["bqb", "Bagusa"], ["bqc", "Boko (Benin), Boo"], ["bqd", "Bung"], ["bqf", "Baga Kaloum"], ["bqg", "Bago-Kusuntu"], ["bqh", "Baima"], ["bqi", "Bakhtiari"], ["bqj", "Bandial"], ["bqk", "Banda-Mbrès"], ["bql", "Bilakura"], ["bqm", "Wumboko"], ["bqn", "Bulgarian Sign Language"], ["bqo", "Balo"], ["bqp", "Busa"], ["bqq", "Biritai"], ["bqr", "Burusu"], ["bqs", "Bosngun"], ["bqt", "Bamukumbit"], ["bqu", "Boguru"], ["bqv", "Koro Wachi, Begbere-Ejar"], ["bqw", "Buru (Nigeria)"], ["bqx", "Baangi"], ["bqy", "Bengkala Sign Language"], ["bqz", "Bakaka"], ["bra", "Braj"], ["brb", "Lave"], ["brc", "Berbice Creole Dutch"], ["brd", "Baraamu"], ["brf", "Bira"], ["brg", "Baure"], ["brh", "Brahui"], ["bri", "Mokpwe"], ["brj", "Bieria"], ["brk", "Birked"], ["brl", "Birwa"], ["brm", "Barambu"], ["brn", "Boruca"], ["bro", "Brokkat"], ["brp", "Barapasi"], ["brq", "Breri"], ["brr", "Birao"], ["brs", "Baras"], ["brt", "Bitare"], ["bru", "Eastern Bru"], ["brv", "Western Bru"], ["brw", "Bellari"], ["brx", "Bodo (India)"], ["bry", "Burui"], ["brz", "Bilbil"], ["bsa", "Abinomn"], ["bsb", "Brunei Bisaya"], ["bsc", "Bassari, Oniyan"], ["bse", "Wushi"], ["bsf", "Bauchi"], ["bsg", "Bashkardi"], ["bsh", "Kati"], ["bsi", "Bassossi"], ["bsj", "Bangwinji"], ["bsk", "Burushaski"], ["bsl", "Basa-Gumna"], ["bsm", "Busami"], ["bsn", "Barasana-Eduria"], ["bso", "Buso"], ["bsp", "Baga Sitemu"], ["bsq", "Bassa"], ["bsr", "Bassa-Kontagora"], ["bss", "Akoose"], ["bst", "Basketo"], ["bsu", "Bahonsuai"], ["bsv", "Baga Sobané"], ["bsw", "Baiso"], ["bsx", "Yangkam"], ["bsy", "Sabah Bisaya"], ["bta", "Bata"], ["btb", "Beti (Cameroon)"], ["btc", "Bati (Cameroon)"], ["btd", "Batak Dairi"], ["bte", "Gamo-Ningi"], ["btf", "Birgit"], ["btg", "Gagnoa Bété"], ["bth", "Biatah Bidayuh"], ["bti", "Burate"], ["btj", "Bacanese Malay"], ["btk", "Batak languages"], ["btl", "Bhatola"], ["btm", "Batak Mandailing"], ["btn", "Ratagnon"], ["bto", "Rinconada Bikol"], ["btp", "Budibud"], ["btq", "Batek"], ["btr", "Baetora"], ["bts", "Batak Simalungun"], ["btt", "Bete-Bendi"], ["btu", "Batu"], ["btv", "Bateri"], ["btw", "Butuanon"], ["btx", "Batak Karo"], ["bty", "Bobot"], ["btz", "Batak Alas-Kluet"], ["bua", "Buriat"], ["bub", "Bua"], ["buc", "Bushi"], ["bud", "Ntcham"], ["bue", "Beothuk"], ["buf", "Bushoong"], ["bug", "Buginese"], ["buh", "Younuo Bunu"], ["bui", "Bongili"], ["buj", "Basa-Gurmana"], ["buk", "Bugawac"], ["bum", "Bulu (Cameroon)"], ["bun", "Sherbro"], ["buo", "Terei"], ["bup", "Busoa"], ["buq", "Brem"], ["bus", "Bokobaru"], ["but", "Bungain"], ["buu", "Budu"], ["buv", "Bun"], ["buw", "Bubi"], ["bux", "Boghom"], ["buy", "Bullom So"], ["buz", "Bukwen"], ["bva", "Barein"], ["bvb", "Bube"], ["bvc", "Baelelea"], ["bvd", "Baeggu"], ["bve", "Berau Malay"], ["bvf", "Boor"], ["bvg", "Bonkeng"], ["bvh", "Bure"], ["bvi", "Belanda Viri"], ["bvj", "Baan"], ["bvk", "Bukat"], ["bvl", "Bolivian Sign Language"], ["bvm", "Bamunka"], ["bvn", "Buna"], ["bvo", "Bolgo"], ["bvp", "Bumang"], ["bvq", "Birri"], ["bvr", "Burarra"], ["bvt", "Bati (Indonesia)"], ["bvu", "Bukit Malay"], ["bvv", "Baniva"], ["bvw", "Boga"], ["bvx", "Dibole"], ["bvy", "Baybayanon"], ["bvz", "Bauzi"], ["bwa", "Bwatoo"], ["bwb", "Namosi-Naitasiri-Serua"], ["bwc", "Bwile"], ["bwd", "Bwaidoka"], ["bwe", "Bwe Karen"], ["bwf", "Boselewa"], ["bwg", "Barwe"], ["bwh", "Bishuo"], ["bwi", "Baniwa"], ["bwj", "Láá Láá Bwamu"], ["bwk", "Bauwaki"], ["bwl", "Bwela"], ["bwm", "Biwat"], ["bwn", "Wunai Bunu"], ["bwo", "Boro (Ethiopia), Borna (Ethiopia)"], ["bwp", "Mandobo Bawah"], ["bwq", "Southern Bobo Madaré"], ["bwr", "Bura-Pabir"], ["bws", "Bomboma"], ["bwt", "Bafaw-Balong"], ["bwu", "Buli (Ghana)"], ["bww", "Bwa"], ["bwx", "Bu-Nao Bunu"], ["bwy", "Cwi Bwamu"], ["bwz", "Bwisi"], ["bxa", "Tairaha"], ["bxb", "Belanda Bor"], ["bxc", "Molengue"], ["bxd", "Pela"], ["bxe", "Birale"], ["bxf", "Bilur, Minigir"], ["bxg", "Bangala"], ["bxh", "Buhutu"], ["bxi", "Pirlatapa"], ["bxj", "Bayungu"], ["bxk", "Bukusu, Lubukusu"], ["bxl", "Jalkunan"], ["bxm", "Mongolia Buriat"], ["bxn", "Burduna"], ["bxo", "Barikanchi"], ["bxp", "Bebil"], ["bxq", "Beele"], ["bxr", "Russia Buriat"], ["bxs", "Busam"], ["bxu", "China Buriat"], ["bxv", "Berakou"], ["bxw", "Bankagooma"], ["bxx", "Borna (Democratic Republic of Congo)"], ["bxz", "Binahari"], ["bya", "Batak"], ["byb", "Bikya"], ["byc", "Ubaghara"], ["byd", "Benyadu'"], ["bye", "Pouye"], ["byf", "Bete"], ["byg", "Baygo"], ["byh", "Bhujel"], ["byi", "Buyu"], ["byj", "Bina (Nigeria)"], ["byk", "Biao"], ["byl", "Bayono"], ["bym", "Bidjara"], ["byn", "Bilin, Blin"], ["byo", "Biyo"], ["byp", "Bumaji"], ["byq", "Basay"], ["byr", "Baruya, Yipma"], ["bys", "Burak"], ["byt", "Berti"], ["byv", "Medumba"], ["byw", "Belhariya"], ["byx", "Qaqet"], ["byy", "Buya"], ["byz", "Banaro"], ["bza", "Bandi"], ["bzb", "Andio"], ["bzc", "Southern Betsimisaraka Malagasy"], ["bzd", "Bribri"], ["bze", "Jenaama Bozo"], ["bzf", "Boikin"], ["bzg", "Babuza"], ["bzh", "Mapos Buang"], ["bzi", "Bisu"], ["bzj", "Belize Kriol English"], ["bzk", "Nicaragua Creole English"], ["bzl", "Boano (Sulawesi)"], ["bzm", "Bolondo"], ["bzn", "Boano (Maluku)"], ["bzo", "Bozaba"], ["bzp", "Kemberano"], ["bzq", "Buli (Indonesia)"], ["bzr", "Biri"], ["bzs", "Brazilian Sign Language"], ["bzt", "Brithenig"], ["bzu", "Burmeso"], ["bzv", "Naami"], ["bzw", "Basa (Nigeria)"], ["bzx", "Kɛlɛngaxo Bozo"], ["bzy", "Obanliku"], ["bzz", "Evant"], ["caa", "Chortí"], ["cab", "Garifuna"], ["cac", "Chuj"], ["cad", "Caddo"], ["cae", "Lehar, Laalaa"], ["caf", "Southern Carrier"], ["cag", "Nivaclé"], ["cah", "Cahuarano"], ["cai", "Central American Indian languages"], ["caj", "Chané"], ["cak", "Kaqchikel, Cakchiquel"], ["cal", "Carolinian"], ["cam", "Cemuhî"], ["can", "Chambri"], ["cao", "Chácobo"], ["cap", "Chipaya"], ["caq", "Car Nicobarese"], ["car", "Galibi Carib"], ["cas", "Tsimané"], ["cau", "Caucasian languages"], ["cav", "Cavineña"], ["caw", "Callawalla"], ["cax", "Chiquitano"], ["cay", "Cayuga"], ["caz", "Canichana"], ["cba", "Chibchan languages"], ["cbb", "Cabiyarí"], ["cbc", "Carapana"], ["cbd", "Carijona"], ["cbe", "Chipiajes"], ["cbg", "Chimila"], ["cbh", "Cagua"], ["cbi", "Chachi"], ["cbj", "Ede Cabe"], ["cbk", "Chavacano"], ["cbl", "Bualkhaw Chin"], ["cbn", "Nyahkur"], ["cbo", "Izora"], ["cbq", "Tsucuba, Cuba"], ["cbr", "Cashibo-Cacataibo"], ["cbs", "Cashinahua"], ["cbt", "Chayahuita"], ["cbu", "Candoshi-Shapra"], ["cbv", "Cacua"], ["cbw", "Kinabalian"], ["cby", "Carabayo"], ["cca", "Cauca"], ["ccc", "Chamicuro"], ["ccd", "Cafundo Creole"], ["cce", "Chopi"], ["ccg", "Samba Daka"], ["cch", "Atsam"], ["ccj", "Kasanga"], ["ccl", "Cutchi-Swahili"], ["ccm", "Malaccan Creole Malay"], ["ccn", "North Caucasian languages"], ["cco", "Comaltepec Chinantec"], ["ccp", "Chakma"], ["ccq", "Chaungtha"], ["ccr", "Cacaopera"], ["ccs", "South Caucasian languages"], ["cda", "Choni"], ["cdc", "Chadic languages"], ["cdd", "Caddoan languages"], ["cde", "Chenchu"], ["cdf", "Chiru"], ["cdg", "Chamari"], ["cdh", "Chambeali"], ["cdi", "Chodri"], ["cdj", "Churahi"], ["cdm", "Chepang"], ["cdn", "Chaudangsi"], ["cdo", "Min Dong Chinese"], ["cdr", "Cinda-Regi-Tiyal"], ["cds", "Chadian Sign Language"], ["cdy", "Chadong"], ["cdz", "Koda"], ["cea", "Lower Chehalis"], ["ceb", "Cebuano"], ["ceg", "Chamacoco"], ["cek", "Eastern Khumi Chin"], ["cel", "Celtic languages"], ["cen", "Cen"], ["cet", "Centúúm"], ["cey", "Ekai Chin"], ["cfa", "Dijim-Bwilim"], ["cfd", "Cara"], ["cfg", "Como Karim"], ["cfm", "Falam Chin"], ["cga", "Changriwa"], ["cgc", "Kagayanen"], ["cgg", "Chiga"], ["cgk", "Chocangacakha"], ["chb", "Chibcha"], ["chc", "Catawba"], ["chd", "Highland Oaxaca Chontal"], ["chf", "Tabasco Chontal"], ["chg", "Chagatai"], ["chh", "Chinook"], ["chj", "Ojitlán Chinantec"], ["chk", "Chuukese"], ["chl", "Cahuilla"], ["chm", "Mari (Russia)"], ["chn", "Chinook jargon"], ["cho", "Choctaw"], ["chp", "Chipewyan, Dene Suline"], ["chq", "Quiotepec Chinantec"], ["chr", "Cherokee"], ["cht", "Cholón"], ["chw", "Chuwabu"], ["chx", "Chantyal"], ["chy", "Cheyenne"], ["chz", "Ozumacín Chinantec"], ["cia", "Cia-Cia"], ["cib", "Ci Gbe"], ["cic", "Chickasaw"], ["cid", "Chimariko"], ["cie", "Cineni"], ["cih", "Chinali"], ["cik", "Chitkuli Kinnauri"], ["cim", "Cimbrian"], ["cin", "Cinta Larga"], ["cip", "Chiapanec"], ["cir", "Tiri, Haméa, Méa"], ["ciw", "Chippewa"], ["ciy", "Chaima"], ["cja", "Western Cham"], ["cje", "Chru"], ["cjh", "Upper Chehalis"], ["cji", "Chamalal"], ["cjk", "Chokwe"], ["cjm", "Eastern Cham"], ["cjn", "Chenapian"], ["cjo", "Ashéninka Pajonal"], ["cjp", "Cabécar"], ["cjr", "Chorotega"], ["cjs", "Shor"], ["cjv", "Chuave"], ["cjy", "Jinyu Chinese"], ["cka", "Khumi Awa Chin"], ["ckb", "Central Kurdish"], ["ckh", "Chak"], ["ckl", "Cibak"], ["ckm", "Chakavian"], ["ckn", "Kaang Chin"], ["cko", "Anufo"], ["ckq", "Kajakse"], ["ckr", "Kairak"], ["cks", "Tayo"], ["ckt", "Chukot"], ["cku", "Koasati"], ["ckv", "Kavalan"], ["ckx", "Caka"], ["cky", "Cakfem-Mushere"], ["ckz", "Cakchiquel-Quiché Mixed Language"], ["cla", "Ron"], ["clc", "Chilcotin"], ["cld", "Chaldean Neo-Aramaic"], ["cle", "Lealao Chinantec"], ["clh", "Chilisso"], ["cli", "Chakali"], ["clj", "Laitu Chin"], ["clk", "Idu-Mishmi"], ["cll", "Chala"], ["clm", "Clallam"], ["clo", "Lowland Oaxaca Chontal"], ["clt", "Lautu Chin"], ["clu", "Caluyanun"], ["clw", "Chulym"], ["cly", "Eastern Highland Chatino"], ["cma", "Maa"], ["cmc", "Chamic languages"], ["cme", "Cerma"], ["cmg", "Classical Mongolian"], ["cmi", "Emberá-Chamí"], ["cmk", "Chimakum"], ["cml", "Campalagian"], ["cmm", "Michigamea"], ["cmn", "Mandarin Chinese"], ["cmo", "Central Mnong"], ["cmr", "Mro-Khimi Chin"], ["cms", "Messapic"], ["cmt", "Camtho"], ["cna", "Changthang"], ["cnb", "Chinbon Chin"], ["cnc", "Côông"], ["cng", "Northern Qiang"], ["cnh", "Hakha Chin, Haka Chin"], ["cni", "Asháninka"], ["cnk", "Khumi Chin"], ["cnl", "Lalana Chinantec"], ["cno", "Con"], ["cnp", "Northern Ping Chinese, Northern Pinghua"], ["cnr", "Montenegrin"], ["cns", "Central Asmat"], ["cnt", "Tepetotutla Chinantec"], ["cnu", "Chenoua"], ["cnw", "Ngawn Chin"], ["cnx", "Middle Cornish"], ["coa", "Cocos Islands Malay"], ["cob", "Chicomuceltec"], ["coc", "Cocopa"], ["cod", "Cocama-Cocamilla"], ["coe", "Koreguaje"], ["cof", "Colorado"], ["cog", "Chong"], ["coh", "Chonyi-Dzihana-Kauma, Chichonyi-Chidzihana-Chikauma"], ["coj", "Cochimi"], ["cok", "Santa Teresa Cora"], ["col", "Columbia-Wenatchi"], ["com", "Comanche"], ["con", "Cofán"], ["coo", "Comox"], ["cop", "Coptic"], ["coq", "Coquille"], ["cot", "Caquinte"], ["cou", "Wamey"], ["cov", "Cao Miao"], ["cow", "Cowlitz"], ["cox", "Nanti"], ["coy", "Coyaima"], ["coz", "Chochotec"], ["cpa", "Palantla Chinantec"], ["cpb", "Ucayali-Yurúa Ashéninka"], ["cpc", "Ajyíninka Apurucayali"], ["cpe", "English-based creoles and pidgins"], ["cpf", "French-based creoles and pidgins"], ["cpg", "Cappadocian Greek"], ["cpi", "Chinese Pidgin English"], ["cpn", "Cherepon"], ["cpo", "Kpeego"], ["cpp", "Portuguese-based creoles and pidgins"], ["cps", "Capiznon"], ["cpu", "Pichis Ashéninka"], ["cpx", "Pu-Xian Chinese"], ["cpy", "South Ucayali Ashéninka"], ["cqd", "Chuanqiandian Cluster Miao"], ["cqu", "Chilean Quechua"], ["cra", "Chara"], ["crb", "Island Carib"], ["crc", "Lonwolwol"], ["crd", "Coeur d'Alene"], ["crf", "Caramanta"], ["crg", "Michif"], ["crh", "Crimean Tatar, Crimean Turkish"], ["cri", "Sãotomense"], ["crj", "Southern East Cree"], ["crk", "Plains Cree"], ["crl", "Northern East Cree"], ["crm", "Moose Cree"], ["crn", "El Nayar Cora"], ["cro", "Crow"], ["crp", "Creoles and pidgins"], ["crq", "Iyo'wujwa Chorote"], ["crr", "Carolina Algonquian"], ["crs", "Seselwa Creole French"], ["crt", "Iyojwa'ja Chorote"], ["crv", "Chaura"], ["crw", "Chrau"], ["crx", "Carrier"], ["cry", "Cori"], ["crz", "Cruzeño"], ["csa", "Chiltepec Chinantec"], ["csb", "Kashubian"], ["csc", "Catalan Sign Language, Lengua de señas catalana, Llengua de Signes Catalana"], ["csd", "Chiangmai Sign Language"], ["cse", "Czech Sign Language"], ["csf", "Cuba Sign Language"], ["csg", "Chilean Sign Language"], ["csh", "Asho Chin"], ["csi", "Coast Miwok"], ["csj", "Songlai Chin"], ["csk", "Jola-Kasa"], ["csl", "Chinese Sign Language"], ["csm", "Central Sierra Miwok"], ["csn", "Colombian Sign Language"], ["cso", "Sochiapam Chinantec, Sochiapan Chinantec"], ["csp", "Southern Ping Chinese, Southern Pinghua"], ["csq", "Croatia Sign Language"], ["csr", "Costa Rican Sign Language"], ["css", "Southern Ohlone"], ["cst", "Northern Ohlone"], ["csu", "Central Sudanic languages"], ["csv", "Sumtu Chin"], ["csw", "Swampy Cree"], ["csx", "Cambodian Sign Language"], ["csy", "Siyin Chin"], ["csz", "Coos"], ["cta", "Tataltepec Chatino"], ["ctc", "Chetco"], ["ctd", "Tedim Chin"], ["cte", "Tepinapa Chinantec"], ["ctg", "Chittagonian"], ["cth", "Thaiphum Chin"], ["ctl", "Tlacoatzintepec Chinantec"], ["ctm", "Chitimacha"], ["ctn", "Chhintange"], ["cto", "Emberá-Catío"], ["ctp", "Western Highland Chatino"], ["cts", "Northern Catanduanes Bikol"], ["ctt", "Wayanad Chetti"], ["ctu", "Chol"], ["cty", "Moundadan Chetty"], ["ctz", "Zacatepec Chatino"], ["cua", "Cua"], ["cub", "Cubeo"], ["cuc", "Usila Chinantec"], ["cug", "Chungmboko, Cung"], ["cuh", "Chuka, Gichuka"], ["cui", "Cuiba"], ["cuj", "Mashco Piro"], ["cuk", "San Blas Kuna"], ["cul", "Culina, Kulina"], ["cum", "Cumeral"], ["cuo", "Cumanagoto"], ["cup", "Cupeño"], ["cuq", "Cun"], ["cur", "Chhulung"], ["cus", "Cushitic languages"], ["cut", "Teutila Cuicatec"], ["cuu", "Tai Ya"], ["cuv", "Cuvok"], ["cuw", "Chukwa"], ["cux", "Tepeuxila Cuicatec"], ["cuy", "Cuitlatec"], ["cvg", "Chug"], ["cvn", "Valle Nacional Chinantec"], ["cwa", "Kabwa"], ["cwb", "Maindo"], ["cwd", "Woods Cree"], ["cwe", "Kwere"], ["cwg", "Chewong, Cheq Wong"], ["cwt", "Kuwaataay"], ["cya", "Nopala Chatino"], ["cyb", "Cayubaba"], ["cyo", "Cuyonon"], ["czh", "Huizhou Chinese"], ["czk", "Knaanic"], ["czn", "Zenzontepec Chatino"], ["czo", "Min Zhong Chinese"], ["czt", "Zotung Chin"], ["daa", "Dangaléat"], ["dac", "Dambi"], ["dad", "Marik"], ["dae", "Duupa"], ["daf", "Dan"], ["dag", "Dagbani"], ["dah", "Gwahatike"], ["dai", "Day"], ["daj", "Dar Fur Daju"], ["dak", "Dakota"], ["dal", "Dahalo"], ["dam", "Damakawa"], ["dao", "Daai Chin"], ["dap", "Nisi (India)"], ["daq", "Dandami Maria"], ["dar", "Dargwa"], ["das", "Daho-Doo"], ["dau", "Dar Sila Daju"], ["dav", "Taita, Dawida"], ["daw", "Davawenyo"], ["dax", "Dayi"], ["day", "Land Dayak languages"], ["daz", "Dao"], ["dba", "Bangime"], ["dbb", "Deno"], ["dbd", "Dadiya"], ["dbe", "Dabe"], ["dbf", "Edopi"], ["dbg", "Dogul Dom Dogon"], ["dbi", "Doka"], ["dbj", "Ida'an"], ["dbl", "Dyirbal"], ["dbm", "Duguri"], ["dbn", "Duriankere"], ["dbo", "Dulbu"], ["dbp", "Duwai"], ["dbq", "Daba"], ["dbr", "Dabarre"], ["dbt", "Ben Tey Dogon"], ["dbu", "Bondum Dom Dogon"], ["dbv", "Dungu"], ["dbw", "Bankan Tey Dogon"], ["dby", "Dibiyaso"], ["dcc", "Deccan"], ["dcr", "Negerhollands"], ["dda", "Dadi Dadi"], ["ddd", "Dongotono"], ["dde", "Doondo"], ["ddg", "Fataluku"], ["ddi", "West Goodenough"], ["ddj", "Jaru"], ["ddn", "Dendi (Benin)"], ["ddo", "Dido"], ["ddr", "Dhudhuroa"], ["dds", "Donno So Dogon"], ["ddw", "Dawera-Daweloor"], ["dec", "Dagik"], ["ded", "Dedua"], ["dee", "Dewoin"], ["def", "Dezfuli"], ["deg", "Degema"], ["deh", "Dehwari"], ["dei", "Demisa"], ["dek", "Dek"], ["del", "Delaware"], ["dem", "Dem"], ["den", "Slave (Athapascan)"], ["dep", "Pidgin Delaware"], ["deq", "Dendi (Central African Republic)"], ["der", "Deori"], ["des", "Desano"], ["dev", "Domung"], ["dez", "Dengese"], ["dga", "Southern Dagaare"], ["dgb", "Bunoge Dogon"], ["dgc", "Casiguran Dumagat Agta"], ["dgd", "Dagaari Dioula"], ["dge", "Degenan"], ["dgg", "Doga"], ["dgh", "Dghwede"], ["dgi", "Northern Dagara"], ["dgk", "Dagba"], ["dgl", "Andaandi, Dongolawi"], ["dgn", "Dagoman"], ["dgo", "Dogri (individual language)"], ["dgr", "Dogrib, Tłı̨chǫ"], ["dgs", "Dogoso"], ["dgt", "Ndra'ngith"], ["dgu", "Degaru"], ["dgw", "Daungwurrung"], ["dgx", "Doghoro"], ["dgz", "Daga"], ["dha", "Dhanwar (India)"], ["dhd", "Dhundari"], ["dhg", "Dhangu-Djangu, Dhangu, Djangu"], ["dhi", "Dhimal"], ["dhl", "Dhalandji"], ["dhm", "Zemba"], ["dhn", "Dhanki"], ["dho", "Dhodia"], ["dhr", "Dhargari"], ["dhs", "Dhaiso"], ["dhu", "Dhurga"], ["dhv", "Dehu, Drehu"], ["dhw", "Dhanwar (Nepal)"], ["dhx", "Dhungaloo"], ["dia", "Dia"], ["dib", "South Central Dinka"], ["dic", "Lakota Dida"], ["did", "Didinga"], ["dif", "Dieri, Diyari"], ["dig", "Digo, Chidigo"], ["dih", "Kumiai"], ["dii", "Dimbong"], ["dij", "Dai"], ["dik", "Southwestern Dinka"], ["dil", "Dilling"], ["dim", "Dime"], ["din", "Dinka"], ["dio", "Dibo"], ["dip", "Northeastern Dinka"], ["diq", "Dimli (individual language)"], ["dir", "Dirim"], ["dis", "Dimasa"], ["dit", "Dirari"], ["diu", "Diriku"], ["diw", "Northwestern Dinka"], ["dix", "Dixon Reef"], ["diy", "Diuwe"], ["diz", "Ding"], ["dja", "Djadjawurrung"], ["djb", "Djinba"], ["djc", "Dar Daju Daju"], ["djd", "Djamindjung, Ngaliwurru"], ["dje", "Zarma"], ["djf", "Djangun"], ["dji", "Djinang"], ["djj", "Djeebbana"], ["djk", "Eastern Maroon Creole, Businenge Tongo, Nenge"], ["djl", "Djiwarli"], ["djm", "Jamsay Dogon"], ["djn", "Jawoyn, Djauan"], ["djo", "Jangkang"], ["djr", "Djambarrpuyngu"], ["dju", "Kapriman"], ["djw", "Djawi"], ["dka", "Dakpakha"], ["dkg", "Kadung"], ["dkk", "Dakka"], ["dkl", "Kolum So Dogon"], ["dkr", "Kuijau"], ["dks", "Southeastern Dinka"], ["dkx", "Mazagway"], ["dlg", "Dolgan"], ["dlk", "Dahalik"], ["dlm", "Dalmatian"], ["dln", "Darlong"], ["dma", "Duma"], ["dmb", "Mombo Dogon"], ["dmc", "Gavak"], ["dmd", "Madhi Madhi"], ["dme", "Dugwor"], ["dmf", "Medefaidrin"], ["dmg", "Upper Kinabatangan"], ["dmk", "Domaaki"], ["dml", "Dameli"], ["dmm", "Dama"], ["dmn", "Mande languages"], ["dmo", "Kemedzung"], ["dmr", "East Damar"], ["dms", "Dampelas"], ["dmu", "Dubu, Tebi"], ["dmv", "Dumpas"], ["dmw", "Mudburra"], ["dmx", "Dema"], ["dmy", "Demta, Sowari"], ["dna", "Upper Grand Valley Dani"], ["dnd", "Daonda"], ["dne", "Ndendeule"], ["dng", "Dungan"], ["dni", "Lower Grand Valley Dani"], ["dnj", "Dan"], ["dnk", "Dengka"], ["dnn", "Dzùùngoo"], ["dno", "Ndrulo, Northern Lendu"], ["dnr", "Danaru"], ["dnt", "Mid Grand Valley Dani"], ["dnu", "Danau"], ["dnv", "Danu"], ["dnw", "Western Dani"], ["dny", "Dení"], ["doa", "Dom"], ["dob", "Dobu"], ["doc", "Northern Dong"], ["doe", "Doe"], ["dof", "Domu"], ["doh", "Dong"], ["doi", "Dogri (macrolanguage)"], ["dok", "Dondo"], ["dol", "Doso"], ["don", "Toura (Papua New Guinea)"], ["doo", "Dongo"], ["dop", "Lukpa"], ["doq", "Dominican Sign Language"], ["dor", "Dori'o"], ["dos", "Dogosé"], ["dot", "Dass"], ["dov", "Dombe"], ["dow", "Doyayo"], ["dox", "Bussa"], ["doy", "Dompo"], ["doz", "Dorze"], ["dpp", "Papar"], ["dra", "Dravidian languages"], ["drb", "Dair"], ["drc", "Minderico"], ["drd", "Darmiya"], ["dre", "Dolpo"], ["drg", "Rungus"], ["drh", "Darkhat"], ["dri", "C'Lela"], ["drl", "Paakantyi"], ["drn", "West Damar"], ["dro", "Daro-Matu Melanau"], ["drq", "Dura"], ["drr", "Dororo"], ["drs", "Gedeo"], ["drt", "Drents"], ["dru", "Rukai"], ["drw", "Darwazi"], ["dry", "Darai"], ["dsb", "Lower Sorbian"], ["dse", "Dutch Sign Language"], ["dsh", "Daasanach"], ["dsi", "Disa"], ["dsl", "Danish Sign Language"], ["dsn", "Dusner"], ["dso", "Desiya"], ["dsq", "Tadaksahak"], ["dta", "Daur"], ["dtb", "Labuk-Kinabatangan Kadazan"], ["dtd", "Ditidaht"], ["dth", "Adithinngithigh"], ["dti", "Ana Tinga Dogon"], ["dtk", "Tene Kan Dogon"], ["dtm", "Tomo Kan Dogon"], ["dtn", "Daatsʼíin"], ["dto", "Tommo So Dogon"], ["dtp", "Kadazan Dusun, Central Dusun"], ["dtr", "Lotud"], ["dts", "Toro So Dogon"], ["dtt", "Toro Tegu Dogon"], ["dtu", "Tebul Ure Dogon"], ["dty", "Dotyali"], ["dua", "Duala"], ["dub", "Dubli"], ["duc", "Duna"], ["dud", "Hun-Saare"], ["due", "Umiray Dumaget Agta"], ["duf", "Dumbea, Drubea"], ["dug", "Duruma, Chiduruma"], ["duh", "Dungra Bhil"], ["dui", "Dumun"], ["duj", "Dhuwal"], ["duk", "Uyajitaya"], ["dul", "Alabat Island Agta"], ["dum", "Middle Dutch (ca. 1050-1350)"], ["dun", "Dusun Deyah"], ["duo", "Dupaninan Agta"], ["dup", "Duano"], ["duq", "Dusun Malang"], ["dur", "Dii"], ["dus", "Dumi"], ["duu", "Drung"], ["duv", "Duvle"], ["duw", "Dusun Witu"], ["dux", "Duungooma"], ["duy", "Dicamay Agta"], ["duz", "Duli-Gey"], ["dva", "Duau"], ["dwa", "Diri"], ["dwk", "Dawik Kui"], ["dwl", "Walo Kumbe Dogon"], ["dwr", "Dawro"], ["dws", "Dutton World Speedwords"], ["dwu", "Dhuwal"], ["dww", "Dawawa"], ["dwy", "Dhuwaya"], ["dwz", "Dewas Rai"], ["dya", "Dyan"], ["dyb", "Dyaberdyaber"], ["dyd", "Dyugun"], ["dyg", "Villa Viciosa Agta"], ["dyi", "Djimini Senoufo"], ["dym", "Yanda Dom Dogon"], ["dyn", "Dyangadi, Dhanggatti"], ["dyo", "Jola-Fonyi"], ["dyu", "Dyula"], ["dyy", "Djabugay, Dyaabugay"], ["dza", "Tunzu"], ["dzd", "Daza"], ["dze", "Djiwarli"], ["dzg", "Dazaga"], ["dzl", "Dzalakha"], ["dzn", "Dzando"], ["eaa", "Karenggapa"], ["ebc", "Beginci"], ["ebg", "Ebughu"], ["ebk", "Eastern Bontok"], ["ebo", "Teke-Ebo"], ["ebr", "Ebrié"], ["ebu", "Embu, Kiembu"], ["ecr", "Eteocretan"], ["ecs", "Ecuadorian Sign Language"], ["ecy", "Eteocypriot"], ["eee", "E"], ["efa", "Efai"], ["efe", "Efe"], ["efi", "Efik"], ["ega", "Ega"], ["egl", "Emilian"], ["ego", "Eggon"], ["egx", "Egyptian languages"], ["egy", "Egyptian (Ancient)"], ["ehs", "Miyakubo Sign Language"], ["ehu", "Ehueun"], ["eip", "Eipomek"], ["eit", "Eitiep"], ["eiv", "Askopan"], ["eja", "Ejamat"], ["eka", "Ekajuk"], ["ekc", "Eastern Karnic"], ["eke", "Ekit"], ["ekg", "Ekari"], ["eki", "Eki"], ["ekk", "Standard Estonian"], ["ekl", "Kol (Bangladesh), Kol"], ["ekm", "Elip"], ["eko", "Koti"], ["ekp", "Ekpeye"], ["ekr", "Yace"], ["eky", "Eastern Kayah"], ["ele", "Elepi"], ["elh", "El Hugeirat"], ["eli", "Nding"], ["elk", "Elkei"], ["elm", "Eleme"], ["elo", "El Molo"], ["elp", "Elpaputih"], ["elu", "Elu"], ["elx", "Elamite"], ["ema", "Emai-Iuleha-Ora"], ["emb", "Embaloh"], ["eme", "Emerillon"], ["emg", "Eastern Meohang"], ["emi", "Mussau-Emira"], ["emk", "Eastern Maninkakan"], ["emm", "Mamulique"], ["emn", "Eman"], ["emo", "Emok"], ["emp", "Northern Emberá"], ["emq", "Eastern Minyag"], ["ems", "Pacific Gulf Yupik"], ["emu", "Eastern Muria"], ["emw", "Emplawas"], ["emx", "Erromintxela"], ["emy", "Epigraphic Mayan"], ["emz", "Mbessa"], ["ena", "Apali"], ["enb", "Markweeta"], ["enc", "En"], ["end", "Ende"], ["enf", "Forest Enets"], ["enh", "Tundra Enets"], ["enl", "Enlhet"], ["enm", "Middle English (1100-1500)"], ["enn", "Engenni"], ["eno", "Enggano"], ["enq", "Enga"], ["enr", "Emumu, Emem"], ["enu", "Enu"], ["env", "Enwan (Edu State)"], ["enw", "Enwan (Akwa Ibom State)"], ["enx", "Enxet"], ["eot", "Beti (Côte d'Ivoire)"], ["epi", "Epie"], ["era", "Eravallan"], ["erg", "Sie"], ["erh", "Eruwa"], ["eri", "Ogea"], ["erk", "South Efate"], ["ero", "Horpa"], ["err", "Erre"], ["ers", "Ersu"], ["ert", "Eritai"], ["erw", "Erokwanas"], ["ese", "Ese Ejja"], ["esg", "Aheri Gondi"], ["esh", "Eshtehardi"], ["esi", "North Alaskan Inupiatun"], ["esk", "Northwest Alaska Inupiatun"], ["esl", "Egypt Sign Language"], ["esm", "Esuma"], ["esn", "Salvadoran Sign Language"], ["eso", "Estonian Sign Language"], ["esq", "Esselen"], ["ess", "Central Siberian Yupik"], ["esu", "Central Yupik"], ["esx", "Eskimo-Aleut languages"], ["esy", "Eskayan"], ["etb", "Etebi"], ["etc", "Etchemin"], ["eth", "Ethiopian Sign Language"], ["etn", "Eton (Vanuatu)"], ["eto", "Eton (Cameroon)"], ["etr", "Edolo"], ["ets", "Yekhee"], ["ett", "Etruscan"], ["etu", "Ejagham"], ["etx", "Eten"], ["etz", "Semimi"], ["euq", "Basque (family)"], ["eve", "Even"], ["evh", "Uvbie"], ["evn", "Evenki"], ["ewo", "Ewondo"], ["ext", "Extremaduran"], ["eya", "Eyak"], ["eyo", "Keiyo"], ["eza", "Ezaa"], ["eze", "Uzekwe"], ["faa", "Fasu"], ["fab", "Fa d'Ambu"], ["fad", "Wagi"], ["faf", "Fagani"], ["fag", "Finongan"], ["fah", "Baissa Fali"], ["fai", "Faiwol"], ["faj", "Faita"], ["fak", "Fang (Cameroon)"], ["fal", "South Fali"], ["fam", "Fam"], ["fan", "Fang (Equatorial Guinea)"], ["fap", "Paloor"], ["far", "Fataleka"], ["fat", "Fanti"], ["fau", "Fayu"], ["fax", "Fala"], ["fay", "Southwestern Fars"], ["faz", "Northwestern Fars"], ["fbl", "West Albay Bikol"], ["fcs", "Quebec Sign Language"], ["fer", "Feroge"], ["ffi", "Foia Foia"], ["ffm", "Maasina Fulfulde"], ["fgr", "Fongoro"], ["fia", "Nobiin"], ["fie", "Fyer"], ["fif", "Faifi"], ["fil", "Filipino, Pilipino"], ["fip", "Fipa"], ["fir", "Firan"], ["fit", "Tornedalen Finnish"], ["fiu", "Finno-Ugrian languages"], ["fiw", "Fiwaga"], ["fkk", "Kirya-Konzəl"], ["fkv", "Kven Finnish"], ["fla", "Kalispel-Pend d'Oreille"], ["flh", "Foau"], ["fli", "Fali"], ["fll", "North Fali"], ["fln", "Flinders Island"], ["flr", "Fuliiru"], ["fly", "Flaaitaal, Tsotsitaal"], ["fmp", "Fe'fe'"], ["fmu", "Far Western Muria"], ["fnb", "Fanbak"], ["fng", "Fanagalo"], ["fni", "Fania"], ["fod", "Foodo"], ["foi", "Foi"], ["fom", "Foma"], ["fon", "Fon"], ["for", "Fore"], ["fos", "Siraya"], ["fox", "Formosan languages"], ["fpe", "Fernando Po Creole English"], ["fqs", "Fas"], ["frc", "Cajun French"], ["frd", "Fordata"], ["frk", "Frankish"], ["frm", "Middle French (ca. 1400-1600)"], ["fro", "Old French (842-ca. 1400)"], ["frp", "Arpitan, Francoprovençal"], ["frq", "Forak"], ["frr", "Northern Frisian"], ["frs", "Eastern Frisian"], ["frt", "Fortsenal"], ["fse", "Finnish Sign Language"], ["fsl", "French Sign Language"], ["fss", "Finland-Swedish Sign Language, finlandssvenskt teckenspråk, suomenruotsalainen viittomakieli"], ["fub", "Adamawa Fulfulde"], ["fuc", "Pulaar"], ["fud", "East Futuna"], ["fue", "Borgu Fulfulde"], ["fuf", "Pular"], ["fuh", "Western Niger Fulfulde"], ["fui", "Bagirmi Fulfulde"], ["fuj", "Ko"], ["fum", "Fum"], ["fun", "Fulniô"], ["fuq", "Central-Eastern Niger Fulfulde"], ["fur", "Friulian"], ["fut", "Futuna-Aniwa"], ["fuu", "Furu"], ["fuv", "Nigerian Fulfulde"], ["fuy", "Fuyug"], ["fvr", "Fur"], ["fwa", "Fwâi"], ["fwe", "Fwe"], ["gaa", "Ga"], ["gab", "Gabri"], ["gac", "Mixed Great Andamanese"], ["gad", "Gaddang"], ["gae", "Guarequena"], ["gaf", "Gende"], ["gag", "Gagauz"], ["gah", "Alekano"], ["gai", "Borei"], ["gaj", "Gadsup"], ["gak", "Gamkonora"], ["gal", "Galolen"], ["gam", "Kandawo"], ["gan", "Gan Chinese"], ["gao", "Gants"], ["gap", "Gal"], ["gaq", "Gata'"], ["gar", "Galeya"], ["gas", "Adiwasi Garasia"], ["gat", "Kenati"], ["gau", "Mudhili Gadaba"], ["gav", "Gabutamon"], ["gaw", "Nobonob"], ["gax", "Borana-Arsi-Guji Oromo"], ["gay", "Gayo"], ["gaz", "West Central Oromo"], ["gba", "Gbaya (Central African Republic)"], ["gbb", "Kaytetye"], ["gbc", "Garawa"], ["gbd", "Karajarri"], ["gbe", "Niksek"], ["gbf", "Gaikundi"], ["gbg", "Gbanziri"], ["gbh", "Defi Gbe"], ["gbi", "Galela"], ["gbj", "Bodo Gadaba"], ["gbk", "Gaddi"], ["gbl", "Gamit"], ["gbm", "Garhwali"], ["gbn", "Mo'da"], ["gbo", "Northern Grebo"], ["gbp", "Gbaya-Bossangoa"], ["gbq", "Gbaya-Bozoum"], ["gbr", "Gbagyi"], ["gbs", "Gbesi Gbe"], ["gbu", "Gagadu"], ["gbv", "Gbanu"], ["gbw", "Gabi-Gabi"], ["gbx", "Eastern Xwla Gbe"], ["gby", "Gbari"], ["gbz", "Zoroastrian Dari"], ["gcc", "Mali"], ["gcd", "Ganggalida"], ["gce", "Galice"], ["gcf", "Guadeloupean Creole French"], ["gcl", "Grenadian Creole English"], ["gcn", "Gaina"], ["gcr", "Guianese Creole French"], ["gct", "Colonia Tovar German"], ["gda", "Gade Lohar"], ["gdb", "Pottangi Ollar Gadaba"], ["gdc", "Gugu Badhun"], ["gdd", "Gedaged"], ["gde", "Gude"], ["gdf", "Guduf-Gava"], ["gdg", "Ga'dang"], ["gdh", "Gadjerawang, Gajirrabeng"], ["gdi", "Gundi"], ["gdj", "Gurdjar"], ["gdk", "Gadang"], ["gdl", "Dirasha"], ["gdm", "Laal"], ["gdn", "Umanakaina"], ["gdo", "Ghodoberi"], ["gdq", "Mehri"], ["gdr", "Wipi"], ["gds", "Ghandruk Sign Language"], ["gdt", "Kungardutyi"], ["gdu", "Gudu"], ["gdx", "Godwari"], ["gea", "Geruma"], ["geb", "Kire"], ["gec", "Gboloo Grebo"], ["ged", "Gade"], ["gef", "Gerai"], ["geg", "Gengle"], ["geh", "Hutterite German, Hutterisch"], ["gei", "Gebe"], ["gej", "Gen"], ["gek", "Ywom"], ["gel", "ut-Ma'in"], ["gem", "Germanic languages"], ["geq", "Geme"], ["ges", "Geser-Gorom"], ["gev", "Eviya"], ["gew", "Gera"], ["gex", "Garre"], ["gey", "Enya"], ["gez", "Geez"], ["gfk", "Patpatar"], ["gft", "Gafat"], ["gfx", "Mangetti Dune ǃXung"], ["gga", "Gao"], ["ggb", "Gbii"], ["ggd", "Gugadj"], ["gge", "Gurr-goni"], ["ggg", "Gurgula"], ["ggk", "Kungarakany"], ["ggl", "Ganglau"], ["ggn", "Eastern Gurung"], ["ggo", "Southern Gondi"], ["ggr", "Aghu Tharnggalu"], ["ggt", "Gitua"], ["ggu", "Gagu, Gban"], ["ggw", "Gogodala"], ["gha", "Ghadamès"], ["ghc", "Hiberno-Scottish Gaelic"], ["ghe", "Southern Ghale"], ["ghh", "Northern Ghale"], ["ghk", "Geko Karen"], ["ghl", "Ghulfan"], ["ghn", "Ghanongga"], ["gho", "Ghomara"], ["ghr", "Ghera"], ["ghs", "Guhu-Samane"], ["ght", "Kuke, Kutang Ghale"], ["gia", "Kija"], ["gib", "Gibanawa"], ["gic", "Gail"], ["gid", "Gidar"], ["gie", "Gaɓogbo, Guébie"], ["gig", "Goaria"], ["gih", "Githabul"], ["gii", "Girirra"], ["gil", "Gilbertese"], ["gim", "Gimi (Eastern Highlands)"], ["gin", "Hinukh"], ["gio", "Gelao"], ["gip", "Gimi (West New Britain)"], ["giq", "Green Gelao"], ["gir", "Red Gelao"], ["gis", "North Giziga"], ["git", "Gitxsan"], ["giu", "Mulao"], ["giw", "White Gelao"], ["gix", "Gilima"], ["giy", "Giyug"], ["giz", "South Giziga"], ["gji", "Geji"], ["gjk", "Kachi Koli"], ["gjm", "Gunditjmara"], ["gjn", "Gonja"], ["gjr", "Gurindji Kriol"], ["gju", "Gujari"], ["gka", "Guya"], ["gkd", "Magɨ (Madang Province)"], ["gke", "Ndai"], ["gkn", "Gokana"], ["gko", "Kok-Nar"], ["gkp", "Guinea Kpelle"], ["gku", "ǂUngkue"], ["glb", "Belning"], ["glc", "Bon Gula"], ["gld", "Nanai"], ["glh", "Northwest Pashai, Northwest Pashayi"], ["gli", "Guliguli"], ["glj", "Gula Iro"], ["glk", "Gilaki"], ["gll", "Garlali"], ["glo", "Galambu"], ["glr", "Glaro-Twabo"], ["glu", "Gula (Chad)"], ["glw", "Glavda"], ["gly", "Gule"], ["gma", "Gambera"], ["gmb", "Gula'alaa"], ["gmd", "Mághdì"], ["gme", "East Germanic languages"], ["gmg", "Magɨyi"], ["gmh", "Middle High German (ca. 1050-1500)"], ["gml", "Middle Low German"], ["gmm", "Gbaya-Mbodomo"], ["gmn", "Gimnime"], ["gmq", "North Germanic languages"], ["gmr", "Mirning, Mirniny"], ["gmu", "Gumalu"], ["gmv", "Gamo"], ["gmw", "West Germanic languages"], ["gmx", "Magoma"], ["gmy", "Mycenaean Greek"], ["gmz", "Mgbolizhia"], ["gna", "Kaansa"], ["gnb", "Gangte"], ["gnc", "Guanche"], ["gnd", "Zulgo-Gemzek"], ["gne", "Ganang"], ["gng", "Ngangam"], ["gnh", "Lere"], ["gni", "Gooniyandi"], ["gnj", "Ngen"], ["gnk", "ǁGana"], ["gnl", "Gangulu"], ["gnm", "Ginuman"], ["gnn", "Gumatj"], ["gno", "Northern Gondi"], ["gnq", "Gana"], ["gnr", "Gureng Gureng"], ["gnt", "Guntai"], ["gnu", "Gnau"], ["gnw", "Western Bolivian Guaraní"], ["gnz", "Ganzi"], ["goa", "Guro"], ["gob", "Playero"], ["goc", "Gorakor"], ["god", "Godié"], ["goe", "Gongduk"], ["gof", "Gofa"], ["gog", "Gogo"], ["goh", "Old High German (ca. 750-1050)"], ["goi", "Gobasi"], ["goj", "Gowlan"], ["gok", "Gowli"], ["gol", "Gola"], ["gom", "Goan Konkani"], ["gon", "Gondi"], ["goo", "Gone Dau"], ["gop", "Yeretuar"], ["goq", "Gorap"], ["gor", "Gorontalo"], ["gos", "Gronings"], ["got", "Gothic"], ["gou", "Gavar"], ["gow", "Gorowa"], ["gox", "Gobu"], ["goy", "Goundo"], ["goz", "Gozarkhani"], ["gpa", "Gupa-Abawa"], ["gpe", "Ghanaian Pidgin English"], ["gpn", "Taiap"], ["gqa", "Ga'anda"], ["gqi", "Guiqiong"], ["gqn", "Guana (Brazil)"], ["gqr", "Gor"], ["gqu", "Qau"], ["gra", "Rajput Garasia"], ["grb", "Grebo"], ["grc", "Ancient Greek (to 1453)"], ["grd", "Guruntum-Mbaaru"], ["grg", "Madi"], ["grh", "Gbiri-Niragu"], ["gri", "Ghari"], ["grj", "Southern Grebo"], ["grk", "Greek languages"], ["grm", "Kota Marudu Talantang"], ["gro", "Groma"], ["grq", "Gorovu"], ["grr", "Taznatit"], ["grs", "Gresi"], ["grt", "Garo"], ["gru", "Kistane"], ["grv", "Central Grebo"], ["grw", "Gweda"], ["grx", "Guriaso"], ["gry", "Barclayville Grebo"], ["grz", "Guramalum"], ["gse", "Ghanaian Sign Language"], ["gsg", "German Sign Language"], ["gsl", "Gusilay"], ["gsm", "Guatemalan Sign Language"], ["gsn", "Nema, Gusan"], ["gso", "Southwest Gbaya"], ["gsp", "Wasembo"], ["gss", "Greek Sign Language"], ["gsw", "Swiss German, Alemannic, Alsatian"], ["gta", "Guató"], ["gti", "Gbati-ri"], ["gtu", "Aghu-Tharnggala"], ["gua", "Shiki"], ["gub", "Guajajára"], ["guc", "Wayuu"], ["gud", "Yocoboué Dida"], ["gue", "Gurindji"], ["guf", "Gupapuyngu"], ["gug", "Paraguayan Guaraní"], ["guh", "Guahibo"], ["gui", "Eastern Bolivian Guaraní"], ["guk", "Gumuz"], ["gul", "Sea Island Creole English"], ["gum", "Guambiano"], ["gun", "Mbyá Guaraní"], ["guo", "Guayabero"], ["gup", "Gunwinggu"], ["guq", "Aché"], ["gur", "Farefare"], ["gus", "Guinean Sign Language"], ["gut", "Maléku Jaíka"], ["guu", "Yanomamö"], ["guv", "Gey"], ["guw", "Gun"], ["gux", "Gourmanchéma"], ["guz", "Gusii, Ekegusii"], ["gva", "Guana (Paraguay)"], ["gvc", "Guanano"], ["gve", "Duwet"], ["gvf", "Golin"], ["gvj", "Guajá"], ["gvl", "Gulay"], ["gvm", "Gurmana"], ["gvn", "Kuku-Yalanji"], ["gvo", "Gavião Do Jiparaná"], ["gvp", "Pará Gavião"], ["gvr", "Gurung"], ["gvs", "Gumawana"], ["gvy", "Guyani"], ["gwa", "Mbato"], ["gwb", "Gwa"], ["gwc", "Gawri, Kalami"], ["gwd", "Gawwada"], ["gwe", "Gweno"], ["gwf", "Gowro"], ["gwg", "Moo"], ["gwi", "Gwichʼin"], ["gwj", "ǀGwi"], ["gwm", "Awngthim"], ["gwn", "Gwandara"], ["gwr", "Gwere"], ["gwt", "Gawar-Bati"], ["gwu", "Guwamu"], ["gww", "Kwini"], ["gwx", "Gua"], ["gxx", "Wè Southern"], ["gya", "Northwest Gbaya"], ["gyb", "Garus"], ["gyd", "Kayardild"], ["gye", "Gyem"], ["gyf", "Gungabula"], ["gyg", "Gbayi"], ["gyi", "Gyele"], ["gyl", "Gayil"], ["gym", "Ngäbere"], ["gyn", "Guyanese Creole English"], ["gyo", "Gyalsumdo"], ["gyr", "Guarayu"], ["gyy", "Gunya"], ["gyz", "Geji, Gyaazi"], ["gza", "Ganza"], ["gzi", "Gazi"], ["gzn", "Gane"], ["haa", "Han"], ["hab", "Hanoi Sign Language"], ["hac", "Gurani"], ["had", "Hatam"], ["hae", "Eastern Oromo"], ["haf", "Haiphong Sign Language"], ["hag", "Hanga"], ["hah", "Hahon"], ["hai", "Haida"], ["haj", "Hajong"], ["hak", "Hakka Chinese"], ["hal", "Halang"], ["ham", "Hewa"], ["han", "Hangaza"], ["hao", "Hakö"], ["hap", "Hupla"], ["haq", "Ha"], ["har", "Harari"], ["has", "Haisla"], ["hav", "Havu"], ["haw", "Hawaiian"], ["hax", "Southern Haida"], ["hay", "Haya"], ["haz", "Hazaragi"], ["hba", "Hamba"], ["hbb", "Huba"], ["hbn", "Heiban"], ["hbo", "Ancient Hebrew"], ["hbu", "Habu"], ["hca", "Andaman Creole Hindi"], ["hch", "Huichol"], ["hdn", "Northern Haida"], ["hds", "Honduras Sign Language"], ["hdy", "Hadiyya"], ["hea", "Northern Qiandong Miao"], ["hed", "Herdé"], ["heg", "Helong"], ["heh", "Hehe"], ["hei", "Heiltsuk"], ["hem", "Hemba"], ["hgm", "Haiǁom"], ["hgw", "Haigwai"], ["hhi", "Hoia Hoia"], ["hhr", "Kerak"], ["hhy", "Hoyahoya"], ["hia", "Lamang"], ["hib", "Hibito"], ["hid", "Hidatsa"], ["hif", "Fiji Hindi"], ["hig", "Kamwe"], ["hih", "Pamosu"], ["hii", "Hinduri"], ["hij", "Hijuk"], ["hik", "Seit-Kaitetu"], ["hil", "Hiligaynon"], ["him", "Himachali languages, Western Pahari languages"], ["hio", "Tsoa"], ["hir", "Himarimã"], ["hit", "Hittite"], ["hiw", "Hiw"], ["hix", "Hixkaryána"], ["hji", "Haji"], ["hka", "Kahe"], ["hke", "Hunde"], ["hkh", "Khah, Poguli"], ["hkk", "Hunjara-Kaina Ke"], ["hkn", "Mel-Khaonh"], ["hks", "Hong Kong Sign Language, Heung Kong Sau Yue"], ["hla", "Halia"], ["hlb", "Halbi"], ["hld", "Halang Doan"], ["hle", "Hlersu"], ["hlt", "Matu Chin"], ["hlu", "Hieroglyphic Luwian"], ["hma", "Southern Mashan Hmong, Southern Mashan Miao"], ["hmb", "Humburi Senni Songhay"], ["hmc", "Central Huishui Hmong, Central Huishui Miao"], ["hmd", "Large Flowery Miao, A-hmaos, Da-Hua Miao"], ["hme", "Eastern Huishui Hmong, Eastern Huishui Miao"], ["hmf", "Hmong Don"], ["hmg", "Southwestern Guiyang Hmong"], ["hmh", "Southwestern Huishui Hmong, Southwestern Huishui Miao"], ["hmi", "Northern Huishui Hmong, Northern Huishui Miao"], ["hmj", "Ge, Gejia"], ["hmk", "Maek"], ["hml", "Luopohe Hmong, Luopohe Miao"], ["hmm", "Central Mashan Hmong, Central Mashan Miao"], ["hmn", "Hmong, Mong"], ["hmp", "Northern Mashan Hmong, Northern Mashan Miao"], ["hmq", "Eastern Qiandong Miao"], ["hmr", "Hmar"], ["hms", "Southern Qiandong Miao"], ["hmt", "Hamtai"], ["hmu", "Hamap"], ["hmv", "Hmong Dô"], ["hmw", "Western Mashan Hmong, Western Mashan Miao"], ["hmx", "Hmong-Mien languages"], ["hmy", "Southern Guiyang Hmong, Southern Guiyang Miao"], ["hmz", "Hmong Shua, Sinicized Miao"], ["hna", "Mina (Cameroon)"], ["hnd", "Southern Hindko"], ["hne", "Chhattisgarhi"], ["hng", "Hungu"], ["hnh", "ǁAni"], ["hni", "Hani"], ["hnj", "Hmong Njua, Mong Leng, Mong Njua"], ["hnn", "Hanunoo"], ["hno", "Northern Hindko"], ["hns", "Caribbean Hindustani"], ["hnu", "Hung"], ["hoa", "Hoava"], ["hob", "Mari (Madang Province)"], ["hoc", "Ho"], ["hod", "Holma"], ["hoe", "Horom"], ["hoh", "Hobyót"], ["hoi", "Holikachuk"], ["hoj", "Hadothi, Haroti"], ["hok", "Hokan languages"], ["hol", "Holu"], ["hom", "Homa"], ["hoo", "Holoholo"], ["hop", "Hopi"], ["hor", "Horo"], ["hos", "Ho Chi Minh City Sign Language"], ["hot", "Hote, Malê"], ["hov", "Hovongan"], ["how", "Honi"], ["hoy", "Holiya"], ["hoz", "Hozo"], ["hpo", "Hpon"], ["hps", "Hawai'i Sign Language (HSL), Hawai'i Pidgin Sign Language"], ["hra", "Hrangkhol"], ["hrc", "Niwer Mil"], ["hre", "Hre"], ["hrk", "Haruku"], ["hrm", "Horned Miao"], ["hro", "Haroi"], ["hrp", "Nhirrpi"], ["hrr", "Horuru"], ["hrt", "Hértevin"], ["hru", "Hruso"], ["hrw", "Warwar Feni"], ["hrx", "Hunsrik"], ["hrz", "Harzani"], ["hsb", "Upper Sorbian"], ["hsh", "Hungarian Sign Language"], ["hsl", "Hausa Sign Language"], ["hsn", "Xiang Chinese"], ["hss", "Harsusi"], ["hti", "Hoti"], ["hto", "Minica Huitoto"], ["hts", "Hadza"], ["htu", "Hitu"], ["htx", "Middle Hittite"], ["hub", "Huambisa"], ["huc", "ǂHua, ǂʼAmkhoe"], ["hud", "Huaulu"], ["hue", "San Francisco Del Mar Huave"], ["huf", "Humene"], ["hug", "Huachipaeri"], ["huh", "Huilliche"], ["hui", "Huli"], ["huj", "Northern Guiyang Hmong, Northern Guiyang Miao"], ["huk", "Hulung"], ["hul", "Hula"], ["hum", "Hungana"], ["huo", "Hu"], ["hup", "Hupa"], ["huq", "Tsat"], ["hur", "Halkomelem"], ["hus", "Huastec"], ["hut", "Humla"], ["huu", "Murui Huitoto"], ["huv", "San Mateo Del Mar Huave"], ["huw", "Hukumina"], ["hux", "Nüpode Huitoto"], ["huy", "Hulaulá"], ["huz", "Hunzib"], ["hvc", "Haitian Vodoun Culture Language"], ["hve", "San Dionisio Del Mar Huave"], ["hvk", "Haveke"], ["hvn", "Sabu"], ["hvv", "Santa María Del Mar Huave"], ["hwa", "Wané"], ["hwc", "Hawai'i Creole English, Hawai'i Pidgin"], ["hwo", "Hwana"], ["hya", "Hya"], ["hyw", "Western Armenian"], ["hyx", "Armenian (family)"], ["iai", "Iaai"], ["ian", "Iatmul"], ["iap", "Iapama"], ["iar", "Purari"], ["iba", "Iban"], ["ibb", "Ibibio"], ["ibd", "Iwaidja"], ["ibe", "Akpes"], ["ibg", "Ibanag"], ["ibh", "Bih"], ["ibi", "Ibilo"], ["ibl", "Ibaloi"], ["ibm", "Agoi"], ["ibn", "Ibino"], ["ibr", "Ibuoro"], ["ibu", "Ibu"], ["iby", "Ibani"], ["ica", "Ede Ica"], ["ich", "Etkywan"], ["icl", "Icelandic Sign Language"], ["icr", "Islander Creole English"], ["ida", "Idakho-Isukha-Tiriki, Luidakho-Luisukha-Lutirichi"], ["idb", "Indo-Portuguese"], ["idc", "Idon, Ajiya"], ["idd", "Ede Idaca"], ["ide", "Idere"], ["idi", "Idi"], ["idr", "Indri"], ["ids", "Idesa"], ["idt", "Idaté"], ["idu", "Idoma"], ["ifa", "Amganad Ifugao"], ["ifb", "Batad Ifugao, Ayangan Ifugao"], ["ife", "Ifè"], ["iff", "Ifo"], ["ifk", "Tuwali Ifugao"], ["ifm", "Teke-Fuumu"], ["ifu", "Mayoyao Ifugao"], ["ify", "Keley-I Kallahan"], ["igb", "Ebira"], ["ige", "Igede"], ["igg", "Igana"], ["igl", "Igala"], ["igm", "Kanggape"], ["ign", "Ignaciano"], ["igo", "Isebe"], ["igs", "Interglossa"], ["igw", "Igwe"], ["ihb", "Iha Based Pidgin"], ["ihi", "Ihievbe"], ["ihp", "Iha"], ["ihw", "Bidhawal"], ["iin", "Thiin"], ["iir", "Indo-Iranian languages"], ["ijc", "Izon"], ["ije", "Biseni"], ["ijj", "Ede Ije"], ["ijn", "Kalabari"], ["ijo", "Ijo languages"], ["ijs", "Southeast Ijo"], ["ike", "Eastern Canadian Inuktitut"], ["iki", "Iko"], ["ikk", "Ika"], ["ikl", "Ikulu"], ["iko", "Olulumo-Ikom"], ["ikp", "Ikpeshi"], ["ikr", "Ikaranggal"], ["iks", "Inuit Sign Language"], ["ikt", "Inuinnaqtun, Western Canadian Inuktitut"], ["ikv", "Iku-Gora-Ankwa"], ["ikw", "Ikwere"], ["ikx", "Ik"], ["ikz", "Ikizu"], ["ila", "Ile Ape"], ["ilb", "Ila"], ["ilg", "Garig-Ilgar"], ["ili", "Ili Turki"], ["ilk", "Ilongot"], ["ill", "Iranun"], ["ilm", "Iranun (Malaysia)"], ["ilo", "Iloko"], ["ilp", "Iranun (Philippines)"], ["ils", "International Sign"], ["ilu", "Ili'uun"], ["ilv", "Ilue"], ["ilw", "Talur"], ["ima", "Mala Malasar"], ["ime", "Imeraguen"], ["imi", "Anamgura"], ["iml", "Miluk"], ["imn", "Imonda"], ["imo", "Imbongu"], ["imr", "Imroing"], ["ims", "Marsian"], ["imy", "Milyan"], ["inb", "Inga"], ["inc", "Indic languages"], ["ine", "Indo-European languages"], ["ing", "Degexit'an"], ["inh", "Ingush"], ["inj", "Jungle Inga"], ["inl", "Indonesian Sign Language"], ["inm", "Minaean"], ["inn", "Isinai"], ["ino", "Inoke-Yate"], ["inp", "Iñapari"], ["ins", "Indian Sign Language"], ["int", "Intha"], ["inz", "Ineseño"], ["ior", "Inor"], ["iou", "Tuma-Irumu"], ["iow", "Iowa-Oto"], ["ipi", "Ipili"], ["ipo", "Ipiko"], ["iqu", "Iquito"], ["iqw", "Ikwo"], ["ira", "Iranian languages"], ["ire", "Iresim"], ["irh", "Irarutu"], ["iri", "Rigwe, Irigwe"], ["irk", "Iraqw"], ["irn", "Irántxe"], ["iro", "Iroquoian languages"], ["irr", "Ir"], ["iru", "Irula"], ["irx", "Kamberau"], ["iry", "Iraya"], ["isa", "Isabi"], ["isc", "Isconahua"], ["isd", "Isnag"], ["ise", "Italian Sign Language"], ["isg", "Irish Sign Language"], ["ish", "Esan"], ["isi", "Nkem-Nkum"], ["isk", "Ishkashimi"], ["ism", "Masimasi"], ["isn", "Isanzu"], ["iso", "Isoko"], ["isr", "Israeli Sign Language"], ["ist", "Istriot"], ["isu", "Isu (Menchum Division)"], ["itb", "Binongan Itneg"], ["itc", "Italic languages"], ["itd", "Southern Tidung"], ["ite", "Itene"], ["iti", "Inlaod Itneg"], ["itk", "Judeo-Italian"], ["itl", "Itelmen"], ["itm", "Itu Mbon Uzo"], ["ito", "Itonama"], ["itr", "Iteri"], ["its", "Isekiri"], ["itt", "Maeng Itneg"], ["itv", "Itawit"], ["itw", "Ito"], ["itx", "Itik"], ["ity", "Moyadan Itneg"], ["itz", "Itzá"], ["ium", "Iu Mien"], ["ivb", "Ibatan"], ["ivv", "Ivatan"], ["iwk", "I-Wak"], ["iwm", "Iwam"], ["iwo", "Iwur"], ["iws", "Sepik Iwam"], ["ixc", "Ixcatec"], ["ixl", "Ixil"], ["iya", "Iyayu"], ["iyo", "Mesaka"], ["iyx", "Yaka (Congo)"], ["izh", "Ingrian"], ["izi", "Izi-Ezaa-Ikwo-Mgbo"], ["izr", "Izere"], ["izz", "Izii"], ["jaa", "Jamamadí"], ["jab", "Hyam"], ["jac", "Popti', Jakalteko"], ["jad", "Jahanka"], ["jae", "Yabem"], ["jaf", "Jara"], ["jah", "Jah Hut"], ["jaj", "Zazao"], ["jak", "Jakun"], ["jal", "Yalahatan"], ["jam", "Jamaican Creole English"], ["jan", "Jandai"], ["jao", "Yanyuwa"], ["jaq", "Yaqay"], ["jar", "Jarawa (Nigeria)"], ["jas", "New Caledonian Javanese"], ["jat", "Jakati"], ["jau", "Yaur"], ["jax", "Jambi Malay"], ["jay", "Yan-nhangu, Nhangu"], ["jaz", "Jawe"], ["jbe", "Judeo-Berber"], ["jbi", "Badjiri"], ["jbj", "Arandai"], ["jbk", "Barikewa"], ["jbm", "Bijim"], ["jbn", "Nafusi"], ["jbo", "Lojban"], ["jbr", "Jofotek-Bromnya"], ["jbt", "Jabutí"], ["jbu", "Jukun Takum"], ["jbw", "Yawijibaya"], ["jcs", "Jamaican Country Sign Language"], ["jct", "Krymchak"], ["jda", "Jad"], ["jdg", "Jadgali"], ["jdt", "Judeo-Tat"], ["jeb", "Jebero"], ["jee", "Jerung"], ["jeg", "Jeng"], ["jeh", "Jeh"], ["jei", "Yei"], ["jek", "Jeri Kuo"], ["jel", "Yelmek"], ["jen", "Dza"], ["jer", "Jere"], ["jet", "Manem"], ["jeu", "Jonkor Bourmataguil"], ["jgb", "Ngbee"], ["jge", "Judeo-Georgian"], ["jgk", "Gwak"], ["jgo", "Ngomba"], ["jhi", "Jehai"], ["jhs", "Jhankot Sign Language"], ["jia", "Jina"], ["jib", "Jibu"], ["jic", "Tol"], ["jid", "Bu (Kaduna State)"], ["jie", "Jilbe"], ["jig", "Jingulu, Djingili"], ["jih", "sTodsde, Shangzhai"], ["jii", "Jiiddu"], ["jil", "Jilim"], ["jim", "Jimi (Cameroon)"], ["jio", "Jiamao"], ["jiq", "Guanyinqiao, Lavrung"], ["jit", "Jita"], ["jiu", "Youle Jinuo"], ["jiv", "Shuar"], ["jiy", "Buyuan Jinuo"], ["jje", "Jejueo"], ["jjr", "Bankal"], ["jka", "Kaera"], ["jkm", "Mobwa Karen"], ["jko", "Kubo"], ["jkp", "Paku Karen"], ["jkr", "Koro (India)"], ["jks", "Amami Koniya Sign Language"], ["jku", "Labir"], ["jle", "Ngile"], ["jls", "Jamaican Sign Language"], ["jma", "Dima"], ["jmb", "Zumbun"], ["jmc", "Machame"], ["jmd", "Yamdena"], ["jmi", "Jimi (Nigeria)"], ["jml", "Jumli"], ["jmn", "Makuri Naga"], ["jmr", "Kamara"], ["jms", "Mashi (Nigeria)"], ["jmw", "Mouwase"], ["jmx", "Western Juxtlahuaca Mixtec"], ["jna", "Jangshung"], ["jnd", "Jandavra"], ["jng", "Yangman"], ["jni", "Janji"], ["jnj", "Yemsa"], ["jnl", "Rawat"], ["jns", "Jaunsari"], ["job", "Joba"], ["jod", "Wojenaka"], ["jog", "Jogi"], ["jor", "Jorá"], ["jos", "Jordanian Sign Language"], ["jow", "Jowulu"], ["jpa", "Jewish Palestinian Aramaic"], ["jpr", "Judeo-Persian"], ["jpx", "Japanese (family)"], ["jqr", "Jaqaru"], ["jra", "Jarai"], ["jrb", "Judeo-Arabic"], ["jrr", "Jiru"], ["jrt", "Jakattoe"], ["jru", "Japrería"], ["jsl", "Japanese Sign Language"], ["jua", "Júma"], ["jub", "Wannu"], ["juc", "Jurchen"], ["jud", "Worodougou"], ["juh", "Hõne"], ["jui", "Ngadjuri"], ["juk", "Wapan"], ["jul", "Jirel"], ["jum", "Jumjum"], ["jun", "Juang"], ["juo", "Jiba"], ["jup", "Hupdë"], ["jur", "Jurúna"], ["jus", "Jumla Sign Language"], ["jut", "Jutish"], ["juu", "Ju"], ["juw", "Wãpha"], ["juy", "Juray"], ["jvd", "Javindo"], ["jvn", "Caribbean Javanese"], ["jwi", "Jwira-Pepesa"], ["jya", "Jiarong"], ["jye", "Judeo-Yemeni Arabic"], ["jyy", "Jaya"], ["kaa", "Kara-Kalpak, Karakalpak"], ["kab", "Kabyle"], ["kac", "Kachin, Jingpho"], ["kad", "Adara"], ["kae", "Ketangalan"], ["kaf", "Katso"], ["kag", "Kajaman"], ["kah", "Kara (Central African Republic)"], ["kai", "Karekare"], ["kaj", "Jju"], ["kak", "Kalanguya, Kayapa Kallahan"], ["kam", "Kamba (Kenya)"], ["kao", "Xaasongaxango"], ["kap", "Bezhta"], ["kaq", "Capanahua"], ["kar", "Karen languages"], ["kav", "Katukína"], ["kaw", "Kawi"], ["kax", "Kao"], ["kay", "Kamayurá"], ["kba", "Kalarko"], ["kbb", "Kaxuiâna"], ["kbc", "Kadiwéu"], ["kbd", "Kabardian"], ["kbe", "Kanju"], ["kbf", "Kakauhua"], ["kbg", "Khamba"], ["kbh", "Camsá"], ["kbi", "Kaptiau"], ["kbj", "Kari"], ["kbk", "Grass Koiari"], ["kbl", "Kanembu"], ["kbm", "Iwal"], ["kbn", "Kare (Central African Republic)"], ["kbo", "Keliko"], ["kbp", "Kabiyè"], ["kbq", "Kamano"], ["kbr", "Kafa"], ["kbs", "Kande"], ["kbt", "Abadi"], ["kbu", "Kabutra"], ["kbv", "Dera (Indonesia)"], ["kbw", "Kaiep"], ["kbx", "Ap Ma"], ["kby", "Manga Kanuri"], ["kbz", "Duhwa"], ["kca", "Khanty"], ["kcb", "Kawacha"], ["kcc", "Lubila"], ["kcd", "Ngkâlmpw Kanum"], ["kce", "Kaivi"], ["kcf", "Ukaan"], ["kcg", "Tyap"], ["kch", "Vono"], ["kci", "Kamantan"], ["kcj", "Kobiana"], ["kck", "Kalanga"], ["kcl", "Kela (Papua New Guinea), Kala"], ["kcm", "Gula (Central African Republic)"], ["kcn", "Nubi"], ["kco", "Kinalakna"], ["kcp", "Kanga"], ["kcq", "Kamo"], ["kcr", "Katla"], ["kcs", "Koenoem"], ["kct", "Kaian"], ["kcu", "Kami (Tanzania)"], ["kcv", "Kete"], ["kcw", "Kabwari"], ["kcx", "Kachama-Ganjule"], ["kcy", "Korandje"], ["kcz", "Konongo"], ["kda", "Worimi"], ["kdc", "Kutu"], ["kdd", "Yankunytjatjara"], ["kde", "Makonde"], ["kdf", "Mamusi"], ["kdg", "Seba"], ["kdh", "Tem"], ["kdi", "Kumam"], ["kdj", "Karamojong"], ["kdk", "Numèè, Kwényi"], ["kdl", "Tsikimba"], ["kdm", "Kagoma"], ["kdn", "Kunda"], ["kdo", "Kordofanian languages"], ["kdp", "Kaningdon-Nindem"], ["kdq", "Koch"], ["kdr", "Karaim"], ["kdt", "Kuy"], ["kdu", "Kadaru"], ["kdv", "Kado"], ["kdw", "Koneraw"], ["kdx", "Kam"], ["kdy", "Keder, Keijar"], ["kdz", "Kwaja"], ["kea", "Kabuverdianu"], ["keb", "Kélé"], ["kec", "Keiga"], ["ked", "Kerewe"], ["kee", "Eastern Keres"], ["kef", "Kpessi"], ["keg", "Tese"], ["keh", "Keak"], ["kei", "Kei"], ["kej", "Kadar"], ["kek", "Kekchí"], ["kel", "Kela (Democratic Republic of Congo)"], ["kem", "Kemak"], ["ken", "Kenyang"], ["keo", "Kakwa"], ["kep", "Kaikadi"], ["keq", "Kamar"], ["ker", "Kera"], ["kes", "Kugbo"], ["ket", "Ket"], ["keu", "Akebu"], ["kev", "Kanikkaran"], ["kew", "West Kewa"], ["kex", "Kukna"], ["key", "Kupia"], ["kez", "Kukele"], ["kfa", "Kodava"], ["kfb", "Northwestern Kolami"], ["kfc", "Konda-Dora"], ["kfd", "Korra Koraga"], ["kfe", "Kota (India)"], ["kff", "Koya"], ["kfg", "Kudiya"], ["kfh", "Kurichiya"], ["kfi", "Kannada Kurumba"], ["kfj", "Kemiehua"], ["kfk", "Kinnauri"], ["kfl", "Kung"], ["kfm", "Khunsari"], ["kfn", "Kuk"], ["kfo", "Koro (Côte d'Ivoire)"], ["kfp", "Korwa"], ["kfq", "Korku"], ["kfr", "Kachhi, Kutchi"], ["kfs", "Bilaspuri"], ["kft", "Kanjari"], ["kfu", "Katkari"], ["kfv", "Kurmukar"], ["kfw", "Kharam Naga"], ["kfx", "Kullu Pahari"], ["kfy", "Kumaoni"], ["kfz", "Koromfé"], ["kga", "Koyaga"], ["kgb", "Kawe"], ["kgc", "Kasseng"], ["kgd", "Kataang"], ["kge", "Komering"], ["kgf", "Kube"], ["kgg", "Kusunda"], ["kgh", "Upper Tanudan Kalinga"], ["kgi", "Selangor Sign Language"], ["kgj", "Gamale Kham"], ["kgk", "Kaiwá"], ["kgl", "Kunggari"], ["kgm", "Karipúna"], ["kgn", "Karingani"], ["kgo", "Krongo"], ["kgp", "Kaingang"], ["kgq", "Kamoro"], ["kgr", "Abun"], ["kgs", "Kumbainggar"], ["kgt", "Somyev"], ["kgu", "Kobol"], ["kgv", "Karas"], ["kgw", "Karon Dori"], ["kgx", "Kamaru"], ["kgy", "Kyerung"], ["kha", "Khasi"], ["khb", "Lü"], ["khc", "Tukang Besi North"], ["khd", "Bädi Kanum"], ["khe", "Korowai"], ["khf", "Khuen"], ["khg", "Khams Tibetan"], ["khh", "Kehu"], ["khi", "Khoisan languages"], ["khj", "Kuturmi"], ["khk", "Halh Mongolian"], ["khl", "Lusi"], ["khn", "Khandesi"], ["kho", "Khotanese, Sakan"], ["khp", "Kapori, Kapauri"], ["khq", "Koyra Chiini Songhay"], ["khr", "Kharia"], ["khs", "Kasua"], ["kht", "Khamti"], ["khu", "Nkhumbi"], ["khv", "Khvarshi"], ["khw", "Khowar"], ["khx", "Kanu"], ["khy", "Kele (Democratic Republic of Congo)"], ["khz", "Keapara"], ["kia", "Kim"], ["kib", "Koalib"], ["kic", "Kickapoo"], ["kid", "Koshin"], ["kie", "Kibet"], ["kif", "Eastern Parbate Kham"], ["kig", "Kimaama, Kimaghima"], ["kih", "Kilmeri"], ["kii", "Kitsai"], ["kij", "Kilivila"], ["kil", "Kariya"], ["kim", "Karagas"], ["kio", "Kiowa"], ["kip", "Sheshi Kham"], ["kiq", "Kosadle, Kosare"], ["kis", "Kis"], ["kit", "Agob"], ["kiu", "Kirmanjki (individual language)"], ["kiv", "Kimbu"], ["kiw", "Northeast Kiwai"], ["kix", "Khiamniungan Naga"], ["kiy", "Kirikiri"], ["kiz", "Kisi"], ["kja", "Mlap"], ["kjb", "Q'anjob'al, Kanjobal"], ["kjc", "Coastal Konjo"], ["kjd", "Southern Kiwai"], ["kje", "Kisar"], ["kjf", "Khalaj [Indo-Iranian]"], ["kjg", "Khmu"], ["kjh", "Khakas"], ["kji", "Zabana"], ["kjj", "Khinalugh"], ["kjk", "Highland Konjo"], ["kjl", "Western Parbate Kham"], ["kjm", "Kháng"], ["kjn", "Kunjen"], ["kjo", "Harijan Kinnauri"], ["kjp", "Pwo Eastern Karen"], ["kjq", "Western Keres"], ["kjr", "Kurudu"], ["kjs", "East Kewa"], ["kjt", "Phrae Pwo Karen"], ["kju", "Kashaya"], ["kjv", "Kaikavian Literary Language"], ["kjx", "Ramopa"], ["kjy", "Erave"], ["kjz", "Bumthangkha"], ["kka", "Kakanda"], ["kkb", "Kwerisa"], ["kkc", "Odoodee"], ["kkd", "Kinuku"], ["kke", "Kakabe"], ["kkf", "Kalaktang Monpa"], ["kkg", "Mabaka Valley Kalinga"], ["kkh", "Khün"], ["kki", "Kagulu"], ["kkj", "Kako"], ["kkk", "Kokota"], ["kkl", "Kosarek Yale"], ["kkm", "Kiong"], ["kkn", "Kon Keu"], ["kko", "Karko"], ["kkp", "Gugubera, Koko-Bera"], ["kkq", "Kaeku"], ["kkr", "Kir-Balar"], ["kks", "Giiwo"], ["kkt", "Koi"], ["kku", "Tumi"], ["kkv", "Kangean"], ["kkw", "Teke-Kukuya"], ["kkx", "Kohin"], ["kky", "Guugu Yimidhirr, Guguyimidjir"], ["kkz", "Kaska"], ["kla", "Klamath-Modoc"], ["klb", "Kiliwa"], ["klc", "Kolbila"], ["kld", "Gamilaraay"], ["kle", "Kulung (Nepal)"], ["klf", "Kendeje"], ["klg", "Tagakaulo"], ["klh", "Weliki"], ["kli", "Kalumpang"], ["klj", "Khalaj"], ["klk", "Kono (Nigeria)"], ["kll", "Kagan Kalagan"], ["klm", "Migum"], ["kln", "Kalenjin"], ["klo", "Kapya"], ["klp", "Kamasa"], ["klq", "Rumu"], ["klr", "Khaling"], ["kls", "Kalasha"], ["klt", "Nukna"], ["klu", "Klao"], ["klv", "Maskelynes"], ["klw", "Tado, Lindu"], ["klx", "Koluwawa"], ["kly", "Kalao"], ["klz", "Kabola"], ["kma", "Konni"], ["kmb", "Kimbundu"], ["kmc", "Southern Dong"], ["kmd", "Majukayang Kalinga"], ["kme", "Bakole"], ["kmf", "Kare (Papua New Guinea)"], ["kmg", "Kâte"], ["kmh", "Kalam"], ["kmi", "Kami (Nigeria)"], ["kmj", "Kumarbhag Paharia"], ["kmk", "Limos Kalinga"], ["kml", "Tanudan Kalinga"], ["kmm", "Kom (India)"], ["kmn", "Awtuw"], ["kmo", "Kwoma"], ["kmp", "Gimme"], ["kmq", "Kwama"], ["kmr", "Northern Kurdish"], ["kms", "Kamasau"], ["kmt", "Kemtuik"], ["kmu", "Kanite"], ["kmv", "Karipúna Creole French"], ["kmw", "Komo (Democratic Republic of Congo)"], ["kmx", "Waboda"], ["kmy", "Koma"], ["kmz", "Khorasani Turkish"], ["kna", "Dera (Nigeria)"], ["knb", "Lubuagan Kalinga"], ["knc", "Central Kanuri"], ["knd", "Konda"], ["kne", "Kankanaey"], ["knf", "Mankanya"], ["kng", "Koongo"], ["kni", "Kanufi"], ["knj", "Western Kanjobal"], ["knk", "Kuranko"], ["knl", "Keninjal"], ["knm", "Kanamarí"], ["knn", "Konkani (individual language)"], ["kno", "Kono (Sierra Leone)"], ["knp", "Kwanja"], ["knq", "Kintaq"], ["knr", "Kaningra"], ["kns", "Kensiu"], ["knt", "Panoan Katukína"], ["knu", "Kono (Guinea)"], ["knv", "Tabo"], ["knw", "Kung-Ekoka"], ["knx", "Kendayan, Salako"], ["kny", "Kanyok"], ["knz", "Kalamsé"], ["koa", "Konomala"], ["koc", "Kpati"], ["kod", "Kodi"], ["koe", "Kacipo-Bale Suri"], ["kof", "Kubi"], ["kog", "Cogui, Kogi"], ["koh", "Koyo"], ["koi", "Komi-Permyak"], ["koj", "Sara Dunjo"], ["kok", "Konkani (macrolanguage)"], ["kol", "Kol (Papua New Guinea)"], ["koo", "Konzo"], ["kop", "Waube"], ["koq", "Kota (Gabon)"], ["kos", "Kosraean"], ["kot", "Lagwan"], ["kou", "Koke"], ["kov", "Kudu-Camo"], ["kow", "Kugama"], ["kox", "Coxima"], ["koy", "Koyukon"], ["koz", "Korak"], ["kpa", "Kutto"], ["kpb", "Mullu Kurumba"], ["kpc", "Curripaco"], ["kpd", "Koba"], ["kpe", "Kpelle"], ["kpf", "Komba"], ["kpg", "Kapingamarangi"], ["kph", "Kplang"], ["kpi", "Kofei"], ["kpj", "Karajá"], ["kpk", "Kpan"], ["kpl", "Kpala"], ["kpm", "Koho"], ["kpn", "Kepkiriwát"], ["kpo", "Ikposo"], ["kpp", "Paku Karen"], ["kpq", "Korupun-Sela"], ["kpr", "Korafe-Yegha"], ["kps", "Tehit"], ["kpt", "Karata"], ["kpu", "Kafoa"], ["kpv", "Komi-Zyrian"], ["kpw", "Kobon"], ["kpx", "Mountain Koiali"], ["kpy", "Koryak"], ["kpz", "Kupsabiny"], ["kqa", "Mum"], ["kqb", "Kovai"], ["kqc", "Doromu-Koki"], ["kqd", "Koy Sanjaq Surat"], ["kqe", "Kalagan"], ["kqf", "Kakabai"], ["kqg", "Khe"], ["kqh", "Kisankasa"], ["kqi", "Koitabu"], ["kqj", "Koromira"], ["kqk", "Kotafon Gbe"], ["kql", "Kyenele"], ["kqm", "Khisa"], ["kqn", "Kaonde"], ["kqo", "Eastern Krahn"], ["kqp", "Kimré"], ["kqq", "Krenak"], ["kqr", "Kimaragang"], ["kqs", "Northern Kissi"], ["kqt", "Klias River Kadazan"], ["kqu", "Seroa"], ["kqv", "Okolod"], ["kqw", "Kandas"], ["kqx", "Mser"], ["kqy", "Koorete"], ["kqz", "Korana"], ["kra", "Kumhali"], ["krb", "Karkin"], ["krc", "Karachay-Balkar"], ["krd", "Kairui-Midiki"], ["kre", "Panará"], ["krf", "Koro (Vanuatu)"], ["krh", "Kurama"], ["kri", "Krio"], ["krj", "Kinaray-A"], ["krk", "Kerek"], ["krl", "Karelian"], ["krm", "Krim"], ["krn", "Sapo"], ["kro", "Kru languages"], ["krp", "Korop"], ["krr", "Krung"], ["krs", "Gbaya (Sudan)"], ["krt", "Tumari Kanuri"], ["kru", "Kurukh"], ["krv", "Kavet"], ["krw", "Western Krahn"], ["krx", "Karon"], ["kry", "Kryts"], ["krz", "Sota Kanum"], ["ksa", "Shuwa-Zamani"], ["ksb", "Shambala"], ["ksc", "Southern Kalinga"], ["ksd", "Kuanua"], ["kse", "Kuni"], ["ksf", "Bafia"], ["ksg", "Kusaghe"], ["ksh", "Kölsch"], ["ksi", "Krisa, I'saka"], ["ksj", "Uare"], ["ksk", "Kansa"], ["ksl", "Kumalu"], ["ksm", "Kumba"], ["ksn", "Kasiguranin"], ["kso", "Kofa"], ["ksp", "Kaba"], ["ksq", "Kwaami"], ["ksr", "Borong"], ["kss", "Southern Kisi"], ["kst", "Winyé"], ["ksu", "Khamyang"], ["ksv", "Kusu"], ["ksw", "S'gaw Karen"], ["ksx", "Kedang"], ["ksy", "Kharia Thar"], ["ksz", "Kodaku"], ["kta", "Katua"], ["ktb", "Kambaata"], ["ktc", "Kholok"], ["ktd", "Kokata, Kukatha"], ["kte", "Nubri"], ["ktf", "Kwami"], ["ktg", "Kalkutung"], ["kth", "Karanga"], ["kti", "North Muyu"], ["ktj", "Plapo Krumen"], ["ktk", "Kaniet"], ["ktl", "Koroshi"], ["ktm", "Kurti"], ["ktn", "Karitiâna"], ["kto", "Kuot"], ["ktp", "Kaduo"], ["ktq", "Katabaga"], ["ktr", "Kota Marudu Tinagas"], ["kts", "South Muyu"], ["ktt", "Ketum"], ["ktu", "Kituba (Democratic Republic of Congo)"], ["ktv", "Eastern Katu"], ["ktw", "Kato"], ["ktx", "Kaxararí"], ["kty", "Kango (Bas-Uélé District)"], ["ktz", "Juǀʼhoan, Juǀʼhoansi"], ["kub", "Kutep"], ["kuc", "Kwinsu"], ["kud", "'Auhelawa"], ["kue", "Kuman (Papua New Guinea)"], ["kuf", "Western Katu"], ["kug", "Kupa"], ["kuh", "Kushi"], ["kui", "Kuikúro-Kalapálo, Kalapalo"], ["kuj", "Kuria"], ["kuk", "Kepo'"], ["kul", "Kulere"], ["kum", "Kumyk"], ["kun", "Kunama"], ["kuo", "Kumukio"], ["kup", "Kunimaipa"], ["kuq", "Karipuna"], ["kus", "Kusaal"], ["kut", "Kutenai"], ["kuu", "Upper Kuskokwim"], ["kuv", "Kur"], ["kuw", "Kpagua"], ["kux", "Kukatja"], ["kuy", "Kuuku-Ya'u"], ["kuz", "Kunza"], ["kva", "Bagvalal"], ["kvb", "Kubu"], ["kvc", "Kove"], ["kvd", "Kui (Indonesia)"], ["kve", "Kalabakan"], ["kvf", "Kabalai"], ["kvg", "Kuni-Boazi"], ["kvh", "Komodo"], ["kvi", "Kwang"], ["kvj", "Psikye"], ["kvk", "Korean Sign Language"], ["kvl", "Kayaw"], ["kvm", "Kendem"], ["kvn", "Border Kuna"], ["kvo", "Dobel"], ["kvp", "Kompane"], ["kvq", "Geba Karen"], ["kvr", "Kerinci"], ["kvs", "Kunggara"], ["kvt", "Lahta Karen, Lahta"], ["kvu", "Yinbaw Karen"], ["kvv", "Kola"], ["kvw", "Wersing"], ["kvx", "Parkari Koli"], ["kvy", "Yintale Karen, Yintale"], ["kvz", "Tsakwambo, Tsaukambo"], ["kwa", "Dâw"], ["kwb", "Kwa"], ["kwc", "Likwala"], ["kwd", "Kwaio"], ["kwe", "Kwerba"], ["kwf", "Kwara'ae"], ["kwg", "Sara Kaba Deme"], ["kwh", "Kowiai"], ["kwi", "Awa-Cuaiquer"], ["kwj", "Kwanga"], ["kwk", "Kwakiutl"], ["kwl", "Kofyar"], ["kwm", "Kwambi"], ["kwn", "Kwangali"], ["kwo", "Kwomtari"], ["kwp", "Kodia"], ["kwq", "Kwak"], ["kwr", "Kwer"], ["kws", "Kwese"], ["kwt", "Kwesten"], ["kwu", "Kwakum"], ["kwv", "Sara Kaba Náà"], ["kww", "Kwinti"], ["kwx", "Khirwar"], ["kwy", "San Salvador Kongo"], ["kwz", "Kwadi"], ["kxa", "Kairiru"], ["kxb", "Krobu"], ["kxc", "Konso, Khonso"], ["kxd", "Brunei"], ["kxe", "Kakihum"], ["kxf", "Manumanaw Karen, Manumanaw"], ["kxh", "Karo (Ethiopia)"], ["kxi", "Keningau Murut"], ["kxj", "Kulfa"], ["kxk", "Zayein Karen"], ["kxl", "Nepali Kurux"], ["kxm", "Northern Khmer"], ["kxn", "Kanowit-Tanjong Melanau"], ["kxo", "Kanoé"], ["kxp", "Wadiyara Koli"], ["kxq", "Smärky Kanum"], ["kxr", "Koro (Papua New Guinea)"], ["kxs", "Kangjia"], ["kxt", "Koiwat"], ["kxu", "Kui (India)"], ["kxv", "Kuvi"], ["kxw", "Konai"], ["kxx", "Likuba"], ["kxy", "Kayong"], ["kxz", "Kerewo"], ["kya", "Kwaya"], ["kyb", "Butbut Kalinga"], ["kyc", "Kyaka"], ["kyd", "Karey"], ["kye", "Krache"], ["kyf", "Kouya"], ["kyg", "Keyagana"], ["kyh", "Karok"], ["kyi", "Kiput"], ["kyj", "Karao"], ["kyk", "Kamayo"], ["kyl", "Kalapuya"], ["kym", "Kpatili"], ["kyn", "Northern Binukidnon"], ["kyo", "Kelon"], ["kyp", "Kang"], ["kyq", "Kenga"], ["kyr", "Kuruáya"], ["kys", "Baram Kayan"], ["kyt", "Kayagar"], ["kyu", "Western Kayah"], ["kyv", "Kayort"], ["kyw", "Kudmali"], ["kyx", "Rapoisi"], ["kyy", "Kambaira"], ["kyz", "Kayabí"], ["kza", "Western Karaboro"], ["kzb", "Kaibobo"], ["kzc", "Bondoukou Kulango"], ["kzd", "Kadai"], ["kze", "Kosena"], ["kzf", "Da'a Kaili"], ["kzg", "Kikai"], ["kzh", "Kenuzi-Dongola"], ["kzi", "Kelabit"], ["kzj", "Coastal Kadazan"], ["kzk", "Kazukuru"], ["kzl", "Kayeli"], ["kzm", "Kais"], ["kzn", "Kokola"], ["kzo", "Kaningi"], ["kzp", "Kaidipang"], ["kzq", "Kaike"], ["kzr", "Karang"], ["kzs", "Sugut Dusun"], ["kzt", "Tambunan Dusun"], ["kzu", "Kayupulau"], ["kzv", "Komyandaret"], ["kzw", "Karirí-Xocó"], ["kzx", "Kamarian"], ["kzy", "Kango (Tshopo District)"], ["kzz", "Kalabra"], ["laa", "Southern Subanen"], ["lab", "Linear A"], ["lac", "Lacandon"], ["lad", "Ladino"], ["lae", "Pattani"], ["laf", "Lafofa"], ["lag", "Langi"], ["lah", "Lahnda"], ["lai", "Lambya"], ["laj", "Lango (Uganda)"], ["lak", "Laka (Nigeria)"], ["lal", "Lalia"], ["lam", "Lamba"], ["lan", "Laru"], ["lap", "Laka (Chad)"], ["laq", "Qabiao"], ["lar", "Larteh"], ["las", "Lama (Togo)"], ["lau", "Laba"], ["law", "Lauje"], ["lax", "Tiwa"], ["lay", "Lama Bai"], ["laz", "Aribwatsa"], ["lba", "Lui"], ["lbb", "Label"], ["lbc", "Lakkia"], ["lbe", "Lak"], ["lbf", "Tinani"], ["lbg", "Laopang"], ["lbi", "La'bi"], ["lbj", "Ladakhi"], ["lbk", "Central Bontok"], ["lbl", "Libon Bikol"], ["lbm", "Lodhi"], ["lbn", "Rmeet"], ["lbo", "Laven"], ["lbq", "Wampar"], ["lbr", "Lohorung"], ["lbs", "Libyan Sign Language"], ["lbt", "Lachi"], ["lbu", "Labu"], ["lbv", "Lavatbura-Lamusong"], ["lbw", "Tolaki"], ["lbx", "Lawangan"], ["lby", "Lamalama, Lamu-Lamu"], ["lbz", "Lardil"], ["lcc", "Legenyem"], ["lcd", "Lola"], ["lce", "Loncong, Sekak"], ["lcf", "Lubu"], ["lch", "Luchazi"], ["lcl", "Lisela"], ["lcm", "Tungag"], ["lcp", "Western Lawa"], ["lcq", "Luhu"], ["lcs", "Lisabata-Nuniali"], ["lda", "Kla-Dan"], ["ldb", "Dũya"], ["ldd", "Luri"], ["ldg", "Lenyima"], ["ldh", "Lamja-Dengsa-Tola"], ["ldi", "Laari"], ["ldj", "Lemoro"], ["ldk", "Leelau"], ["ldl", "Kaan"], ["ldm", "Landoma"], ["ldn", "Láadan"], ["ldo", "Loo"], ["ldp", "Tso"], ["ldq", "Lufu"], ["lea", "Lega-Shabunda"], ["leb", "Lala-Bisa"], ["lec", "Leco"], ["led", "Lendu"], ["lee", "Lyélé"], ["lef", "Lelemi"], ["leg", "Lengua"], ["leh", "Lenje"], ["lei", "Lemio"], ["lej", "Lengola"], ["lek", "Leipon"], ["lel", "Lele (Democratic Republic of Congo)"], ["lem", "Nomaande"], ["len", "Lenca"], ["leo", "Leti (Cameroon)"], ["lep", "Lepcha"], ["leq", "Lembena"], ["ler", "Lenkau"], ["les", "Lese"], ["let", "Lesing-Gelimi, Amio-Gelimi"], ["leu", "Kara (Papua New Guinea)"], ["lev", "Lamma"], ["lew", "Ledo Kaili"], ["lex", "Luang"], ["ley", "Lemolang"], ["lez", "Lezghian"], ["lfa", "Lefa"], ["lfn", "Lingua Franca Nova"], ["lga", "Lungga"], ["lgb", "Laghu"], ["lgg", "Lugbara"], ["lgh", "Laghuu"], ["lgi", "Lengilu"], ["lgk", "Lingarak, Neverver"], ["lgl", "Wala"], ["lgm", "Lega-Mwenga"], ["lgn", "T'apo, Opuuo"], ["lgq", "Logba"], ["lgr", "Lengo"], ["lgt", "Pahi"], ["lgu", "Longgu"], ["lgz", "Ligenza"], ["lha", "Laha (Viet Nam)"], ["lhh", "Laha (Indonesia)"], ["lhi", "Lahu Shi"], ["lhl", "Lahul Lohar"], ["lhm", "Lhomi"], ["lhn", "Lahanan"], ["lhp", "Lhokpu"], ["lhs", "Mlahsö"], ["lht", "Lo-Toga"], ["lhu", "Lahu"], ["lia", "West-Central Limba"], ["lib", "Likum"], ["lic", "Hlai"], ["lid", "Nyindrou"], ["lie", "Likila"], ["lif", "Limbu"], ["lig", "Ligbi"], ["lih", "Lihir"], ["lii", "Lingkhim"], ["lij", "Ligurian"], ["lik", "Lika"], ["lil", "Lillooet"], ["lio", "Liki"], ["lip", "Sekpele"], ["liq", "Libido"], ["lir", "Liberian English"], ["lis", "Lisu"], ["liu", "Logorik"], ["liv", "Liv"], ["liw", "Col"], ["lix", "Liabuku"], ["liy", "Banda-Bambari"], ["liz", "Libinza"], ["lja", "Golpa"], ["lje", "Rampi"], ["lji", "Laiyolo"], ["ljl", "Li'o"], ["ljp", "Lampung Api"], ["ljw", "Yirandali"], ["ljx", "Yuru"], ["lka", "Lakalei"], ["lkb", "Kabras, Lukabaras"], ["lkc", "Kucong"], ["lkd", "Lakondê"], ["lke", "Kenyi"], ["lkh", "Lakha"], ["lki", "Laki"], ["lkj", "Remun"], ["lkl", "Laeko-Libuat"], ["lkm", "Kalaamaya"], ["lkn", "Lakon, Vure"], ["lko", "Khayo, Olukhayo"], ["lkr", "Päri"], ["lks", "Kisa, Olushisa"], ["lkt", "Lakota"], ["lku", "Kungkari"], ["lky", "Lokoya"], ["lla", "Lala-Roba"], ["llb", "Lolo"], ["llc", "Lele (Guinea)"], ["lld", "Ladin"], ["lle", "Lele (Papua New Guinea)"], ["llf", "Hermit"], ["llg", "Lole"], ["llh", "Lamu"], ["lli", "Teke-Laali"], ["llj", "Ladji Ladji"], ["llk", "Lelak"], ["lll", "Lilau"], ["llm", "Lasalimu"], ["lln", "Lele (Chad)"], ["llo", "Khlor"], ["llp", "North Efate"], ["llq", "Lolak"], ["lls", "Lithuanian Sign Language"], ["llu", "Lau"], ["llx", "Lauan"], ["lma", "East Limba"], ["lmb", "Merei"], ["lmc", "Limilngan"], ["lmd", "Lumun"], ["lme", "Pévé"], ["lmf", "South Lembata"], ["lmg", "Lamogai"], ["lmh", "Lambichhong"], ["lmi", "Lombi"], ["lmj", "West Lembata"], ["lmk", "Lamkang"], ["lml", "Hano"], ["lmm", "Lamam"], ["lmn", "Lambadi"], ["lmo", "Lombard"], ["lmp", "Limbum"], ["lmq", "Lamatuka"], ["lmr", "Lamalera"], ["lmu", "Lamenu"], ["lmv", "Lomaiviti"], ["lmw", "Lake Miwok"], ["lmx", "Laimbue"], ["lmy", "Lamboya"], ["lmz", "Lumbee"], ["lna", "Langbashe"], ["lnb", "Mbalanhu"], ["lnd", "Lundayeh, Lun Bawang"], ["lng", "Langobardic"], ["lnh", "Lanoh"], ["lni", "Daantanai'"], ["lnj", "Leningitij"], ["lnl", "South Central Banda"], ["lnm", "Langam"], ["lnn", "Lorediakarkar"], ["lno", "Lango (South Sudan)"], ["lns", "Lamnso'"], ["lnu", "Longuda"], ["lnw", "Lanima"], ["lnz", "Lonzo"], ["loa", "Loloda"], ["lob", "Lobi"], ["loc", "Inonhan"], ["loe", "Saluan"], ["lof", "Logol"], ["log", "Logo"], ["loh", "Narim"], ["loi", "Loma (Côte d'Ivoire)"], ["loj", "Lou"], ["lok", "Loko"], ["lol", "Mongo"], ["lom", "Loma (Liberia)"], ["lon", "Malawi Lomwe"], ["loo", "Lombo"], ["lop", "Lopa"], ["loq", "Lobala"], ["lor", "Téén"], ["los", "Loniu"], ["lot", "Otuho"], ["lou", "Louisiana Creole"], ["lov", "Lopi"], ["low", "Tampias Lobu"], ["lox", "Loun"], ["loy", "Loke"], ["loz", "Lozi"], ["lpa", "Lelepa"], ["lpe", "Lepki"], ["lpn", "Long Phuri Naga"], ["lpo", "Lipo"], ["lpx", "Lopit"], ["lra", "Rara Bakati'"], ["lrc", "Northern Luri"], ["lre", "Laurentian"], ["lrg", "Laragia"], ["lri", "Marachi, Olumarachi"], ["lrk", "Loarki"], ["lrl", "Lari"], ["lrm", "Marama, Olumarama"], ["lrn", "Lorang"], ["lro", "Laro"], ["lrr", "Southern Yamphu"], ["lrt", "Larantuka Malay"], ["lrv", "Larevat"], ["lrz", "Lemerig"], ["lsa", "Lasgerdi"], ["lsb", "Burundian Sign Language, Langue des Signes Burundaise"], ["lsd", "Lishana Deni"], ["lse", "Lusengo"], ["lsg", "Lyons Sign Language"], ["lsh", "Lish"], ["lsi", "Lashi"], ["lsl", "Latvian Sign Language"], ["lsm", "Saamia, Olusamia"], ["lsn", "Tibetan Sign Language"], ["lso", "Laos Sign Language"], ["lsp", "Panamanian Sign Language, Lengua de Señas Panameñas"], ["lsr", "Aruop"], ["lss", "Lasi"], ["lst", "Trinidad and Tobago Sign Language"], ["lsv", "Sivia Sign Language"], ["lsy", "Mauritian Sign Language"], ["ltc", "Late Middle Chinese"], ["ltg", "Latgalian"], ["lth", "Thur"], ["lti", "Leti (Indonesia)"], ["ltn", "Latundê"], ["lto", "Tsotso, Olutsotso"], ["lts", "Tachoni, Lutachoni"], ["ltu", "Latu"], ["lua", "Luba-Lulua"], ["luc", "Aringa"], ["lud", "Ludian"], ["lue", "Luvale"], ["luf", "Laua"], ["lui", "Luiseno"], ["luj", "Luna"], ["luk", "Lunanakha"], ["lul", "Olu'bo"], ["lum", "Luimbi"], ["lun", "Lunda"], ["luo", "Luo (Kenya and Tanzania), Dholuo"], ["lup", "Lumbu"], ["luq", "Lucumi"], ["lur", "Laura"], ["lus", "Lushai"], ["lut", "Lushootseed"], ["luu", "Lumba-Yakkha"], ["luv", "Luwati"], ["luw", "Luo (Cameroon)"], ["luy", "Luyia, Oluluyia"], ["luz", "Southern Luri"], ["lva", "Maku'a"], ["lvi", "Lavi"], ["lvk", "Lavukaleve"], ["lvs", "Standard Latvian"], ["lvu", "Levuka"], ["lwa", "Lwalu"], ["lwe", "Lewo Eleng"], ["lwg", "Wanga, Oluwanga"], ["lwh", "White Lachi"], ["lwl", "Eastern Lawa"], ["lwm", "Laomian"], ["lwo", "Luwo"], ["lws", "Malawian Sign Language"], ["lwt", "Lewotobi"], ["lwu", "Lawu"], ["lww", "Lewo"], ["lxm", "Lakurumau"], ["lya", "Layakha"], ["lyg", "Lyngngam"], ["lyn", "Luyana"], ["lzh", "Literary Chinese"], ["lzl", "Litzlitz"], ["lzn", "Leinong Naga"], ["lzz", "Laz"], ["maa", "San Jerónimo Tecóatl Mazatec"], ["mab", "Yutanduchi Mixtec"], ["mad", "Madurese"], ["mae", "Bo-Rukul"], ["maf", "Mafa"], ["mag", "Magahi"], ["mai", "Maithili"], ["maj", "Jalapa De Díaz Mazatec"], ["mak", "Makasar"], ["mam", "Mam"], ["man", "Mandingo, Manding"], ["map", "Austronesian languages"], ["maq", "Chiquihuitlán Mazatec"], ["mas", "Masai"], ["mat", "San Francisco Matlatzinca"], ["mau", "Huautla Mazatec"], ["mav", "Sateré-Mawé"], ["maw", "Mampruli"], ["max", "North Moluccan Malay"], ["maz", "Central Mazahua"], ["mba", "Higaonon"], ["mbb", "Western Bukidnon Manobo"], ["mbc", "Macushi"], ["mbd", "Dibabawon Manobo"], ["mbe", "Molale"], ["mbf", "Baba Malay"], ["mbh", "Mangseng"], ["mbi", "Ilianen Manobo"], ["mbj", "Nadëb"], ["mbk", "Malol"], ["mbl", "Maxakalí"], ["mbm", "Ombamba"], ["mbn", "Macaguán"], ["mbo", "Mbo (Cameroon)"], ["mbp", "Malayo"], ["mbq", "Maisin"], ["mbr", "Nukak Makú"], ["mbs", "Sarangani Manobo"], ["mbt", "Matigsalug Manobo"], ["mbu", "Mbula-Bwazza"], ["mbv", "Mbulungish"], ["mbw", "Maring"], ["mbx", "Mari (East Sepik Province)"], ["mby", "Memoni"], ["mbz", "Amoltepec Mixtec"], ["mca", "Maca"], ["mcb", "Machiguenga"], ["mcc", "Bitur"], ["mcd", "Sharanahua"], ["mce", "Itundujia Mixtec"], ["mcf", "Matsés"], ["mcg", "Mapoyo"], ["mch", "Maquiritari"], ["mci", "Mese"], ["mcj", "Mvanip"], ["mck", "Mbunda"], ["mcl", "Macaguaje"], ["mcm", "Malaccan Creole Portuguese"], ["mcn", "Masana"], ["mco", "Coatlán Mixe"], ["mcp", "Makaa"], ["mcq", "Ese"], ["mcr", "Menya"], ["mcs", "Mambai"], ["mct", "Mengisa"], ["mcu", "Cameroon Mambila"], ["mcv", "Minanibai"], ["mcw", "Mawa (Chad)"], ["mcx", "Mpiemo"], ["mcy", "South Watut"], ["mcz", "Mawan"], ["mda", "Mada (Nigeria)"], ["mdb", "Morigi"], ["mdc", "Male (Papua New Guinea)"], ["mdd", "Mbum"], ["mde", "Maba (Chad)"], ["mdf", "Moksha"], ["mdg", "Massalat"], ["mdh", "Maguindanaon"], ["mdi", "Mamvu"], ["mdj", "Mangbetu"], ["mdk", "Mangbutu"], ["mdl", "Maltese Sign Language"], ["mdm", "Mayogo"], ["mdn", "Mbati"], ["mdp", "Mbala"], ["mdq", "Mbole"], ["mdr", "Mandar"], ["mds", "Maria (Papua New Guinea)"], ["mdt", "Mbere"], ["mdu", "Mboko"], ["mdv", "Santa Lucía Monteverde Mixtec"], ["mdw", "Mbosi"], ["mdx", "Dizin"], ["mdy", "Male (Ethiopia)"], ["mdz", "Suruí Do Pará"], ["mea", "Menka"], ["meb", "Ikobi"], ["mec", "Marra"], ["med", "Melpa"], ["mee", "Mengen"], ["mef", "Megam"], ["meg", "Mea"], ["meh", "Southwestern Tlaxiaco Mixtec"], ["mei", "Midob"], ["mej", "Meyah"], ["mek", "Mekeo"], ["mel", "Central Melanau"], ["mem", "Mangala"], ["men", "Mende (Sierra Leone)"], ["meo", "Kedah Malay"], ["mep", "Miriwoong"], ["meq", "Merey"], ["mer", "Meru"], ["mes", "Masmaje"], ["met", "Mato"], ["meu", "Motu"], ["mev", "Mano"], ["mew", "Maaka"], ["mey", "Hassaniyya"], ["mez", "Menominee"], ["mfa", "Pattani Malay"], ["mfb", "Bangka"], ["mfc", "Mba"], ["mfd", "Mendankwe-Nkwen"], ["mfe", "Morisyen"], ["mff", "Naki"], ["mfg", "Mogofin"], ["mfh", "Matal"], ["mfi", "Wandala"], ["mfj", "Mefele"], ["mfk", "North Mofu"], ["mfl", "Putai"], ["mfm", "Marghi South"], ["mfn", "Cross River Mbembe"], ["mfo", "Mbe"], ["mfp", "Makassar Malay"], ["mfq", "Moba"], ["mfr", "Marrithiyel"], ["mfs", "Mexican Sign Language"], ["mft", "Mokerang"], ["mfu", "Mbwela"], ["mfv", "Mandjak"], ["mfw", "Mulaha"], ["mfx", "Melo"], ["mfy", "Mayo"], ["mfz", "Mabaan"], ["mga", "Middle Irish (900-1200)"], ["mgb", "Mararit"], ["mgc", "Morokodo"], ["mgd", "Moru"], ["mge", "Mango"], ["mgf", "Maklew"], ["mgg", "Mpumpong"], ["mgh", "Makhuwa-Meetto"], ["mgi", "Lijili"], ["mgj", "Abureni"], ["mgk", "Mawes"], ["mgl", "Maleu-Kilenge"], ["mgm", "Mambae"], ["mgn", "Mbangi"], ["mgo", "Meta'"], ["mgp", "Eastern Magar"], ["mgq", "Malila"], ["mgr", "Mambwe-Lungu"], ["mgs", "Manda (Tanzania)"], ["mgt", "Mongol"], ["mgu", "Mailu"], ["mgv", "Matengo"], ["mgw", "Matumbi"], ["mgx", "Omati"], ["mgy", "Mbunga"], ["mgz", "Mbugwe"], ["mha", "Manda (India)"], ["mhb", "Mahongwe"], ["mhc", "Mocho"], ["mhd", "Mbugu"], ["mhe", "Besisi, Mah Meri"], ["mhf", "Mamaa"], ["mhg", "Margu"], ["mhh", "Maskoy Pidgin"], ["mhi", "Ma'di"], ["mhj", "Mogholi"], ["mhk", "Mungaka"], ["mhl", "Mauwake"], ["mhm", "Makhuwa-Moniga"], ["mhn", "Mócheno"], ["mho", "Mashi (Zambia)"], ["mhp", "Balinese Malay"], ["mhq", "Mandan"], ["mhr", "Eastern Mari"], ["mhs", "Buru (Indonesia)"], ["mht", "Mandahuaca"], ["mhu", "Digaro-Mishmi, Darang Deng"], ["mhw", "Mbukushu"], ["mhx", "Maru, Lhaovo"], ["mhy", "Ma'anyan"], ["mhz", "Mor (Mor Islands)"], ["mia", "Miami"], ["mib", "Atatláhuca Mixtec"], ["mic", "Mi'kmaq, Micmac"], ["mid", "Mandaic"], ["mie", "Ocotepec Mixtec"], ["mif", "Mofu-Gudur"], ["mig", "San Miguel El Grande Mixtec"], ["mih", "Chayuco Mixtec"], ["mii", "Chigmecatitlán Mixtec"], ["mij", "Abar, Mungbam"], ["mik", "Mikasuki"], ["mil", "Peñoles Mixtec"], ["mim", "Alacatlatzala Mixtec"], ["min", "Minangkabau"], ["mio", "Pinotepa Nacional Mixtec"], ["mip", "Apasco-Apoala Mixtec"], ["miq", "Mískito"], ["mir", "Isthmus Mixe"], ["mis", "Uncoded languages"], ["mit", "Southern Puebla Mixtec"], ["miu", "Cacaloxtepec Mixtec"], ["miw", "Akoye"], ["mix", "Mixtepec Mixtec"], ["miy", "Ayutla Mixtec"], ["miz", "Coatzospan Mixtec"], ["mja", "Mahei"], ["mjb", "Makalero"], ["mjc", "San Juan Colorado Mixtec"], ["mjd", "Northwest Maidu"], ["mje", "Muskum"], ["mjg", "Tu"], ["mjh", "Mwera (Nyasa)"], ["mji", "Kim Mun"], ["mjj", "Mawak"], ["mjk", "Matukar"], ["mjl", "Mandeali"], ["mjm", "Medebur"], ["mjn", "Ma (Papua New Guinea)"], ["mjo", "Malankuravan"], ["mjp", "Malapandaram"], ["mjq", "Malaryan"], ["mjr", "Malavedan"], ["mjs", "Miship"], ["mjt", "Sauria Paharia"], ["mju", "Manna-Dora"], ["mjv", "Mannan"], ["mjw", "Karbi"], ["mjx", "Mahali"], ["mjy", "Mahican"], ["mjz", "Majhi"], ["mka", "Mbre"], ["mkb", "Mal Paharia"], ["mkc", "Siliput"], ["mke", "Mawchi"], ["mkf", "Miya"], ["mkg", "Mak (China)"], ["mkh", "Mon-Khmer languages"], ["mki", "Dhatki"], ["mkj", "Mokilese"], ["mkk", "Byep"], ["mkl", "Mokole"], ["mkm", "Moklen"], ["mkn", "Kupang Malay"], ["mko", "Mingang Doso"], ["mkp", "Moikodi"], ["mkq", "Bay Miwok"], ["mkr", "Malas"], ["mks", "Silacayoapan Mixtec"], ["mkt", "Vamale"], ["mku", "Konyanka Maninka"], ["mkv", "Mafea"], ["mkw", "Kituba (Congo)"], ["mkx", "Kinamiging Manobo"], ["mky", "East Makian"], ["mkz", "Makasae"], ["mla", "Malo"], ["mlb", "Mbule"], ["mlc", "Cao Lan"], ["mld", "Malakhel"], ["mle", "Manambu"], ["mlf", "Mal"], ["mlh", "Mape"], ["mli", "Malimpung"], ["mlj", "Miltu"], ["mlk", "Ilwana, Kiwilwana"], ["mll", "Malua Bay"], ["mlm", "Mulam"], ["mln", "Malango"], ["mlo", "Mlomp"], ["mlp", "Bargam"], ["mlq", "Western Maninkakan"], ["mlr", "Vame"], ["mls", "Masalit"], ["mlu", "To'abaita"], ["mlv", "Motlav, Mwotlap"], ["mlw", "Moloko"], ["mlx", "Malfaxal, Naha'ai"], ["mlz", "Malaynon"], ["mma", "Mama"], ["mmb", "Momina"], ["mmc", "Michoacán Mazahua"], ["mmd", "Maonan"], ["mme", "Mae"], ["mmf", "Mundat"], ["mmg", "North Ambrym"], ["mmh", "Mehináku"], ["mmi", "Musar"], ["mmj", "Majhwar"], ["mmk", "Mukha-Dora"], ["mml", "Man Met"], ["mmm", "Maii"], ["mmn", "Mamanwa"], ["mmo", "Mangga Buang"], ["mmp", "Siawi"], ["mmq", "Musak"], ["mmr", "Western Xiangxi Miao"], ["mmt", "Malalamai"], ["mmu", "Mmaala"], ["mmv", "Miriti"], ["mmw", "Emae"], ["mmx", "Madak"], ["mmy", "Migaama"], ["mmz", "Mabaale"], ["mna", "Mbula"], ["mnb", "Muna"], ["mnc", "Manchu"], ["mnd", "Mondé"], ["mne", "Naba"], ["mnf", "Mundani"], ["mng", "Eastern Mnong"], ["mnh", "Mono (Democratic Republic of Congo)"], ["mni", "Manipuri"], ["mnj", "Munji"], ["mnk", "Mandinka"], ["mnl", "Tiale"], ["mnm", "Mapena"], ["mnn", "Southern Mnong"], ["mno", "Manobo languages"], ["mnp", "Min Bei Chinese"], ["mnq", "Minriq"], ["mnr", "Mono (USA)"], ["mns", "Mansi"], ["mnt", "Maykulan"], ["mnu", "Mer"], ["mnv", "Rennell-Bellona"], ["mnw", "Mon"], ["mnx", "Manikion"], ["mny", "Manyawa"], ["mnz", "Moni"], ["moa", "Mwan"], ["moc", "Mocoví"], ["mod", "Mobilian"], ["moe", "Innu, Montagnais"], ["mof", "Mohegan-Montauk-Narragansett"], ["mog", "Mongondow"], ["moh", "Mohawk"], ["moi", "Mboi"], ["moj", "Monzombo"], ["mok", "Morori"], ["mom", "Mangue"], ["moo", "Monom"], ["mop", "Mopán Maya"], ["moq", "Mor (Bomberai Peninsula)"], ["mor", "Moro"], ["mos", "Mossi"], ["mot", "Barí"], ["mou", "Mogum"], ["mov", "Mohave"], ["mow", "Moi (Congo)"], ["mox", "Molima"], ["moy", "Shekkacho"], ["moz", "Mukulu, Gergiko"], ["mpa", "Mpoto"], ["mpb", "Malak Malak, Mullukmulluk"], ["mpc", "Mangarrayi"], ["mpd", "Machinere"], ["mpe", "Majang"], ["mpg", "Marba"], ["mph", "Maung"], ["mpi", "Mpade"], ["mpj", "Martu Wangka, Wangkajunga"], ["mpk", "Mbara (Chad)"], ["mpl", "Middle Watut"], ["mpm", "Yosondúa Mixtec"], ["mpn", "Mindiri"], ["mpo", "Miu"], ["mpp", "Migabac"], ["mpq", "Matís"], ["mpr", "Vangunu"], ["mps", "Dadibi"], ["mpt", "Mian"], ["mpu", "Makuráp"], ["mpv", "Mungkip"], ["mpw", "Mapidian"], ["mpx", "Misima-Panaeati"], ["mpy", "Mapia"], ["mpz", "Mpi"], ["mqa", "Maba (Indonesia)"], ["mqb", "Mbuko"], ["mqc", "Mangole"], ["mqe", "Matepi"], ["mqf", "Momuna"], ["mqg", "Kota Bangun Kutai Malay"], ["mqh", "Tlazoyaltepec Mixtec"], ["mqi", "Mariri"], ["mqj", "Mamasa"], ["mqk", "Rajah Kabunsuwan Manobo"], ["mql", "Mbelime"], ["mqm", "South Marquesan"], ["mqn", "Moronene"], ["mqo", "Modole"], ["mqp", "Manipa"], ["mqq", "Minokok"], ["mqr", "Mander"], ["mqs", "West Makian"], ["mqt", "Mok"], ["mqu", "Mandari"], ["mqv", "Mosimo"], ["mqw", "Murupi"], ["mqx", "Mamuju"], ["mqy", "Manggarai"], ["mqz", "Pano"], ["mra", "Mlabri"], ["mrb", "Marino"], ["mrc", "Maricopa"], ["mrd", "Western Magar"], ["mre", "Martha's Vineyard Sign Language"], ["mrf", "Elseng"], ["mrg", "Mising"], ["mrh", "Mara Chin"], ["mrj", "Western Mari"], ["mrk", "Hmwaveke"], ["mrl", "Mortlockese"], ["mrm", "Merlav, Mwerlap"], ["mrn", "Cheke Holo"], ["mro", "Mru"], ["mrp", "Morouas"], ["mrq", "North Marquesan"], ["mrr", "Maria (India)"], ["mrs", "Maragus"], ["mrt", "Marghi Central"], ["mru", "Mono (Cameroon)"], ["mrv", "Mangareva"], ["mrw", "Maranao"], ["mrx", "Maremgi, Dineor"], ["mry", "Mandaya"], ["mrz", "Marind"], ["msb", "Masbatenyo"], ["msc", "Sankaran Maninka"], ["msd", "Yucatec Maya Sign Language"], ["mse", "Musey"], ["msf", "Mekwei"], ["msg", "Moraid"], ["msh", "Masikoro Malagasy"], ["msi", "Sabah Malay"], ["msj", "Ma (Democratic Republic of Congo)"], ["msk", "Mansaka"], ["msl", "Molof, Poule"], ["msm", "Agusan Manobo"], ["msn", "Vurës"], ["mso", "Mombum"], ["msp", "Maritsauá"], ["msq", "Caac"], ["msr", "Mongolian Sign Language"], ["mss", "West Masela"], ["mst", "Cataelano Mandaya"], ["msu", "Musom"], ["msv", "Maslam"], ["msw", "Mansoanka"], ["msx", "Moresada"], ["msy", "Aruamu"], ["msz", "Momare"], ["mta", "Cotabato Manobo"], ["mtb", "Anyin Morofo"], ["mtc", "Munit"], ["mtd", "Mualang"], ["mte", "Mono (Solomon Islands)"], ["mtf", "Murik (Papua New Guinea)"], ["mtg", "Una"], ["mth", "Munggui"], ["mti", "Maiwa (Papua New Guinea)"], ["mtj", "Moskona"], ["mtk", "Mbe'"], ["mtl", "Montol"], ["mtm", "Mator"], ["mtn", "Matagalpa"], ["mto", "Totontepec Mixe"], ["mtp", "Wichí Lhamtés Nocten"], ["mtq", "Muong"], ["mtr", "Mewari"], ["mts", "Yora"], ["mtt", "Mota"], ["mtu", "Tututepec Mixtec"], ["mtv", "Asaro'o"], ["mtw", "Southern Binukidnon"], ["mtx", "Tidaá Mixtec"], ["mty", "Nabi"], ["mua", "Mundang"], ["mub", "Mubi"], ["muc", "Ajumbu"], ["mud", "Mednyj Aleut"], ["mue", "Media Lengua"], ["mug", "Musgu"], ["muh", "Mündü"], ["mui", "Musi"], ["muj", "Mabire"], ["muk", "Mugom"], ["mul", "Multiple languages"], ["mum", "Maiwala"], ["mun", "Munda languages"], ["muo", "Nyong"], ["mup", "Malvi"], ["muq", "Eastern Xiangxi Miao"], ["mur", "Murle"], ["mus", "Creek"], ["mut", "Western Muria"], ["muu", "Yaaku"], ["muv", "Muthuvan"], ["mux", "Bo-Ung"], ["muy", "Muyang"], ["muz", "Mursi"], ["mva", "Manam"], ["mvb", "Mattole"], ["mvd", "Mamboru"], ["mve", "Marwari (Pakistan)"], ["mvf", "Peripheral Mongolian"], ["mvg", "Yucuañe Mixtec"], ["mvh", "Mulgi"], ["mvi", "Miyako"], ["mvk", "Mekmek"], ["mvl", "Mbara (Australia)"], ["mvm", "Muya"], ["mvn", "Minaveha"], ["mvo", "Marovo"], ["mvp", "Duri"], ["mvq", "Moere"], ["mvr", "Marau"], ["mvs", "Massep"], ["mvt", "Mpotovoro"], ["mvu", "Marfa"], ["mvv", "Tagal Murut"], ["mvw", "Machinga"], ["mvx", "Meoswar"], ["mvy", "Indus Kohistani"], ["mvz", "Mesqan"], ["mwa", "Mwatebu"], ["mwb", "Juwal"], ["mwc", "Are"], ["mwd", "Mudbura"], ["mwe", "Mwera (Chimwera)"], ["mwf", "Murrinh-Patha"], ["mwg", "Aiklep"], ["mwh", "Mouk-Aria"], ["mwi", "Labo, Ninde"], ["mwj", "Maligo"], ["mwk", "Kita Maninkakan"], ["mwl", "Mirandese"], ["mwm", "Sar"], ["mwn", "Nyamwanga"], ["mwo", "Central Maewo"], ["mwp", "Kala Lagaw Ya"], ["mwq", "Mün Chin"], ["mwr", "Marwari"], ["mws", "Mwimbi-Muthambi"], ["mwt", "Moken"], ["mwu", "Mittu"], ["mwv", "Mentawai"], ["mww", "Hmong Daw"], ["mwx", "Mediak"], ["mwy", "Mosiro"], ["mwz", "Moingi"], ["mxa", "Northwest Oaxaca Mixtec"], ["mxb", "Tezoatlán Mixtec"], ["mxc", "Manyika"], ["mxd", "Modang"], ["mxe", "Mele-Fila"], ["mxf", "Malgbe"], ["mxg", "Mbangala"], ["mxh", "Mvuba"], ["mxi", "Mozarabic"], ["mxj", "Miju-Mishmi, Geman Deng"], ["mxk", "Monumbo"], ["mxl", "Maxi Gbe"], ["mxm", "Meramera"], ["mxn", "Moi (Indonesia)"], ["mxo", "Mbowe"], ["mxp", "Tlahuitoltepec Mixe"], ["mxq", "Juquila Mixe"], ["mxr", "Murik (Malaysia)"], ["mxs", "Huitepec Mixtec"], ["mxt", "Jamiltepec Mixtec"], ["mxu", "Mada (Cameroon)"], ["mxv", "Metlatónoc Mixtec"], ["mxw", "Namo"], ["mxx", "Mahou, Mawukakan"], ["mxy", "Southeastern Nochixtlán Mixtec"], ["mxz", "Central Masela"], ["myb", "Mbay"], ["myc", "Mayeka"], ["myd", "Maramba"], ["mye", "Myene"], ["myf", "Bambassi"], ["myg", "Manta"], ["myh", "Makah"], ["myi", "Mina (India)"], ["myj", "Mangayat"], ["myk", "Mamara Senoufo"], ["myl", "Moma"], ["mym", "Me'en"], ["myn", "Mayan languages"], ["myo", "Anfillo"], ["myp", "Pirahã"], ["myq", "Forest Maninka"], ["myr", "Muniche"], ["mys", "Mesmes"], ["myt", "Sangab Mandaya"], ["myu", "Mundurukú"], ["myv", "Erzya"], ["myw", "Muyuw"], ["myx", "Masaaba"], ["myy", "Macuna"], ["myz", "Classical Mandaic"], ["mza", "Santa María Zacatepec Mixtec"], ["mzb", "Tumzabt"], ["mzc", "Madagascar Sign Language"], ["mzd", "Malimba"], ["mze", "Morawa"], ["mzg", "Monastic Sign Language"], ["mzh", "Wichí Lhamtés Güisnay"], ["mzi", "Ixcatlán Mazatec"], ["mzj", "Manya"], ["mzk", "Nigeria Mambila"], ["mzl", "Mazatlán Mixe"], ["mzm", "Mumuye"], ["mzn", "Mazanderani"], ["mzo", "Matipuhy"], ["mzp", "Movima"], ["mzq", "Mori Atas"], ["mzr", "Marúbo"], ["mzs", "Macanese"], ["mzt", "Mintil"], ["mzu", "Inapang"], ["mzv", "Manza"], ["mzw", "Deg"], ["mzx", "Mawayana"], ["mzy", "Mozambican Sign Language"], ["mzz", "Maiadomu"], ["naa", "Namla"], ["nab", "Southern Nambikuára"], ["nac", "Narak"], ["nad", "Nijadali"], ["nae", "Naka'ela"], ["naf", "Nabak"], ["nag", "Naga Pidgin"], ["nah", "Nahuatl languages"], ["nai", "North American Indian languages"], ["naj", "Nalu"], ["nak", "Nakanai"], ["nal", "Nalik"], ["nam", "Ngan'gityemerri"], ["nan", "Min Nan Chinese"], ["nao", "Naaba"], ["nap", "Neapolitan"], ["naq", "Khoekhoe, Nama (Namibia)"], ["nar", "Iguta"], ["nas", "Naasioi"], ["nat", "Ca̱hungwa̱rya̱, Hungworo"], ["naw", "Nawuri"], ["nax", "Nakwi"], ["nay", "Ngarrindjeri"], ["naz", "Coatepec Nahuatl"], ["nba", "Nyemba"], ["nbb", "Ndoe"], ["nbc", "Chang Naga"], ["nbd", "Ngbinda"], ["nbe", "Konyak Naga"], ["nbf", "Naxi"], ["nbg", "Nagarchal"], ["nbh", "Ngamo"], ["nbi", "Mao Naga"], ["nbj", "Ngarinyman"], ["nbk", "Nake"], ["nbm", "Ngbaka Ma'bo"], ["nbn", "Kuri"], ["nbo", "Nkukoli"], ["nbp", "Nnam"], ["nbq", "Nggem"], ["nbr", "Numana"], ["nbs", "Namibian Sign Language"], ["nbt", "Na"], ["nbu", "Rongmei Naga"], ["nbv", "Ngamambo"], ["nbw", "Southern Ngbandi"], ["nbx", "Ngura"], ["nby", "Ningera"], ["nca", "Iyo"], ["ncb", "Central Nicobarese"], ["ncc", "Ponam"], ["ncd", "Nachering"], ["nce", "Yale"], ["ncf", "Notsi"], ["ncg", "Nisga'a"], ["nch", "Central Huasteca Nahuatl"], ["nci", "Classical Nahuatl"], ["ncj", "Northern Puebla Nahuatl"], ["nck", "Na-kara"], ["ncl", "Michoacán Nahuatl"], ["ncm", "Nambo"], ["ncn", "Nauna"], ["nco", "Sibe"], ["ncp", "Ndaktup"], ["ncq", "Northern Katang"], ["ncr", "Ncane"], ["ncs", "Nicaraguan Sign Language"], ["nct", "Chothe Naga"], ["ncu", "Chumburung"], ["ncx", "Central Puebla Nahuatl"], ["ncz", "Natchez"], ["nda", "Ndasa"], ["ndb", "Kenswei Nsei"], ["ndc", "Ndau"], ["ndd", "Nde-Nsele-Nta"], ["ndf", "Nadruvian"], ["ndg", "Ndengereko"], ["ndh", "Ndali"], ["ndi", "Samba Leko"], ["ndj", "Ndamba"], ["ndk", "Ndaka"], ["ndl", "Ndolo"], ["ndm", "Ndam"], ["ndn", "Ngundi"], ["ndp", "Ndo"], ["ndq", "Ndombe"], ["ndr", "Ndoola"], ["nds", "Low German, Low Saxon"], ["ndt", "Ndunga"], ["ndu", "Dugun"], ["ndv", "Ndut"], ["ndw", "Ndobo"], ["ndx", "Nduga"], ["ndy", "Lutos"], ["ndz", "Ndogo"], ["nea", "Eastern Ngad'a"], ["neb", "Toura (Côte d'Ivoire)"], ["nec", "Nedebang"], ["ned", "Nde-Gbite"], ["nee", "Nêlêmwa-Nixumwak"], ["nef", "Nefamese"], ["neg", "Negidal"], ["neh", "Nyenkha"], ["nei", "Neo-Hittite"], ["nej", "Neko"], ["nek", "Neku"], ["nem", "Nemi"], ["nen", "Nengone"], ["neo", "Ná-Meo"], ["neq", "North Central Mixe"], ["ner", "Yahadian"], ["nes", "Bhoti Kinnauri"], ["net", "Nete"], ["neu", "Neo"], ["nev", "Nyaheun"], ["new", "Newari, Nepal Bhasa"], ["nex", "Neme"], ["ney", "Neyo"], ["nez", "Nez Perce"], ["nfa", "Dhao"], ["nfd", "Ahwai"], ["nfl", "Ayiwo, Äiwoo"], ["nfr", "Nafaanra"], ["nfu", "Mfumte"], ["nga", "Ngbaka"], ["ngb", "Northern Ngbandi"], ["ngc", "Ngombe (Democratic Republic of Congo)"], ["ngd", "Ngando (Central African Republic)"], ["nge", "Ngemba"], ["ngf", "Trans-New Guinea languages"], ["ngg", "Ngbaka Manza"], ["ngh", "Nǁng"], ["ngi", "Ngizim"], ["ngj", "Ngie"], ["ngk", "Dalabon"], ["ngl", "Lomwe"], ["ngm", "Ngatik Men's Creole"], ["ngn", "Ngwo"], ["ngo", "Ngoni"], ["ngp", "Ngulu"], ["ngq", "Ngurimi, Ngoreme"], ["ngr", "Engdewu"], ["ngs", "Gvoko"], ["ngt", "Kriang, Ngeq"], ["ngu", "Guerrero Nahuatl"], ["ngv", "Nagumi"], ["ngw", "Ngwaba"], ["ngx", "Nggwahyi"], ["ngy", "Tibea"], ["ngz", "Ngungwel"], ["nha", "Nhanda"], ["nhb", "Beng"], ["nhc", "Tabasco Nahuatl"], ["nhd", "Chiripá, Ava Guaraní"], ["nhe", "Eastern Huasteca Nahuatl"], ["nhf", "Nhuwala"], ["nhg", "Tetelcingo Nahuatl"], ["nhh", "Nahari"], ["nhi", "Zacatlán-Ahuacatlán-Tepetzintla Nahuatl"], ["nhk", "Isthmus-Cosoleacaque Nahuatl"], ["nhm", "Morelos Nahuatl"], ["nhn", "Central Nahuatl"], ["nho", "Takuu"], ["nhp", "Isthmus-Pajapan Nahuatl"], ["nhq", "Huaxcaleca Nahuatl"], ["nhr", "Naro"], ["nht", "Ometepec Nahuatl"], ["nhu", "Noone"], ["nhv", "Temascaltepec Nahuatl"], ["nhw", "Western Huasteca Nahuatl"], ["nhx", "Isthmus-Mecayapan Nahuatl"], ["nhy", "Northern Oaxaca Nahuatl"], ["nhz", "Santa María La Alta Nahuatl"], ["nia", "Nias"], ["nib", "Nakame"], ["nic", "Niger-Kordofanian languages"], ["nid", "Ngandi"], ["nie", "Niellim"], ["nif", "Nek"], ["nig", "Ngalakgan"], ["nih", "Nyiha (Tanzania)"], ["nii", "Nii"], ["nij", "Ngaju"], ["nik", "Southern Nicobarese"], ["nil", "Nila"], ["nim", "Nilamba"], ["nin", "Ninzo"], ["nio", "Nganasan"], ["niq", "Nandi"], ["nir", "Nimboran"], ["nis", "Nimi"], ["nit", "Southeastern Kolami"], ["niu", "Niuean"], ["niv", "Gilyak"], ["niw", "Nimo"], ["nix", "Hema"], ["niy", "Ngiti"], ["niz", "Ningil"], ["nja", "Nzanyi"], ["njb", "Nocte Naga"], ["njd", "Ndonde Hamba"], ["njh", "Lotha Naga"], ["nji", "Gudanji"], ["njj", "Njen"], ["njl", "Njalgulgule"], ["njm", "Angami Naga"], ["njn", "Liangmai Naga"], ["njo", "Ao Naga"], ["njr", "Njerep"], ["njs", "Nisa"], ["njt", "Ndyuka-Trio Pidgin"], ["nju", "Ngadjunmaya"], ["njx", "Kunyi"], ["njy", "Njyem"], ["njz", "Nyishi"], ["nka", "Nkoya"], ["nkb", "Khoibu Naga"], ["nkc", "Nkongho"], ["nkd", "Koireng"], ["nke", "Duke"], ["nkf", "Inpui Naga"], ["nkg", "Nekgini"], ["nkh", "Khezha Naga"], ["nki", "Thangal Naga"], ["nkj", "Nakai"], ["nkk", "Nokuku"], ["nkm", "Namat"], ["nkn", "Nkangala"], ["nko", "Nkonya"], ["nkp", "Niuatoputapu"], ["nkq", "Nkami"], ["nkr", "Nukuoro"], ["nks", "North Asmat"], ["nkt", "Nyika (Tanzania)"], ["nku", "Bouna Kulango"], ["nkv", "Nyika (Malawi and Zambia)"], ["nkw", "Nkutu"], ["nkx", "Nkoroo"], ["nkz", "Nkari"], ["nla", "Ngombale"], ["nlc", "Nalca"], ["nle", "East Nyala"], ["nlg", "Gela"], ["nli", "Grangali"], ["nlj", "Nyali"], ["nlk", "Ninia Yali"], ["nll", "Nihali"], ["nlm", "Mankiyali"], ["nln", "Durango Nahuatl"], ["nlo", "Ngul"], ["nlq", "Lao Naga"], ["nlr", "Ngarla"], ["nlu", "Nchumbulu"], ["nlv", "Orizaba Nahuatl"], ["nlw", "Walangama"], ["nlx", "Nahali"], ["nly", "Nyamal"], ["nlz", "Nalögo"], ["nma", "Maram Naga"], ["nmb", "Big Nambas, V'ënen Taut"], ["nmc", "Ngam"], ["nmd", "Ndumu"], ["nme", "Mzieme Naga"], ["nmf", "Tangkhul Naga (India)"], ["nmg", "Kwasio"], ["nmh", "Monsang Naga"], ["nmi", "Nyam"], ["nmj", "Ngombe (Central African Republic)"], ["nmk", "Namakura"], ["nml", "Ndemli"], ["nmm", "Manangba"], ["nmn", "ǃXóõ"], ["nmo", "Moyon Naga"], ["nmp", "Nimanbur"], ["nmq", "Nambya"], ["nmr", "Nimbari"], ["nms", "Letemboi"], ["nmt", "Namonuito"], ["nmu", "Northeast Maidu"], ["nmv", "Ngamini"], ["nmw", "Nimoa, Rifao"], ["nmx", "Nama (Papua New Guinea)"], ["nmy", "Namuyi"], ["nmz", "Nawdm"], ["nna", "Nyangumarta"], ["nnb", "Nande"], ["nnc", "Nancere"], ["nnd", "West Ambae"], ["nne", "Ngandyera"], ["nnf", "Ngaing"], ["nng", "Maring Naga"], ["nnh", "Ngiemboon"], ["nni", "North Nuaulu"], ["nnj", "Nyangatom"], ["nnk", "Nankina"], ["nnl", "Northern Rengma Naga"], ["nnm", "Namia"], ["nnn", "Ngete"], ["nnp", "Wancho Naga"], ["nnq", "Ngindo"], ["nnr", "Narungga"], ["nns", "Ningye"], ["nnt", "Nanticoke"], ["nnu", "Dwang"], ["nnv", "Nugunu (Australia)"], ["nnw", "Southern Nuni"], ["nnx", "Ngong"], ["nny", "Nyangga"], ["nnz", "Nda'nda'"], ["noa", "Woun Meu"], ["noc", "Nuk"], ["nod", "Northern Thai"], ["noe", "Nimadi"], ["nof", "Nomane"], ["nog", "Nogai"], ["noh", "Nomu"], ["noi", "Noiri"], ["noj", "Nonuya"], ["nok", "Nooksack"], ["nol", "Nomlaki"], ["nom", "Nocamán"], ["non", "Old Norse"], ["noo", "Nootka"], ["nop", "Numanggang"], ["noq", "Ngongo"], ["nos", "Eastern Nisu"], ["not", "Nomatsiguenga"], ["nou", "Ewage-Notu"], ["nov", "Novial"], ["now", "Nyambo"], ["noy", "Noy"], ["noz", "Nayi"], ["npa", "Nar Phu"], ["npb", "Nupbikha"], ["npg", "Ponyo-Gongwang Naga"], ["nph", "Phom Naga"], ["npi", "Nepali (individual language)"], ["npl", "Southeastern Puebla Nahuatl"], ["npn", "Mondropolon"], ["npo", "Pochuri Naga"], ["nps", "Nipsan"], ["npu", "Puimei Naga"], ["npx", "Noipx"], ["npy", "Napu"], ["nqg", "Southern Nago"], ["nqk", "Kura Ede Nago"], ["nql", "Ngendelengo"], ["nqm", "Ndom"], ["nqn", "Nen"], ["nqo", "N'Ko, N’Ko"], ["nqq", "Kyan-Karyaw Naga"], ["nqt", "Nteng"], ["nqy", "Akyaung Ari Naga"], ["nra", "Ngom"], ["nrb", "Nara"], ["nrc", "Noric"], ["nre", "Southern Rengma Naga"], ["nrf", "Jèrriais, Guernésiais"], ["nrg", "Narango"], ["nri", "Chokri Naga"], ["nrk", "Ngarla"], ["nrl", "Ngarluma"], ["nrm", "Narom"], ["nrn", "Norn"], ["nrp", "North Picene"], ["nrr", "Norra, Nora"], ["nrt", "Northern Kalapuya"], ["nru", "Narua"], ["nrx", "Ngurmbur"], ["nrz", "Lala"], ["nsa", "Sangtam Naga"], ["nsb", "Lower Nossob"], ["nsc", "Nshi"], ["nsd", "Southern Nisu"], ["nse", "Nsenga"], ["nsf", "Northwestern Nisu"], ["nsg", "Ngasa"], ["nsh", "Ngoshie"], ["nsi", "Nigerian Sign Language"], ["nsk", "Naskapi"], ["nsl", "Norwegian Sign Language"], ["nsm", "Sumi Naga"], ["nsn", "Nehan"], ["nso", "Pedi, Northern Sotho, Sepedi"], ["nsp", "Nepalese Sign Language"], ["nsq", "Northern Sierra Miwok"], ["nsr", "Maritime Sign Language"], ["nss", "Nali"], ["nst", "Tase Naga"], ["nsu", "Sierra Negra Nahuatl"], ["nsv", "Southwestern Nisu"], ["nsw", "Navut"], ["nsx", "Nsongo"], ["nsy", "Nasal"], ["nsz", "Nisenan"], ["ntd", "Northern Tidung"], ["nte", "Nathembo"], ["ntg", "Ngantangarra"], ["nti", "Natioro"], ["ntj", "Ngaanyatjarra"], ["ntk", "Ikoma-Nata-Isenye"], ["ntm", "Nateni"], ["nto", "Ntomba"], ["ntp", "Northern Tepehuan"], ["ntr", "Delo"], ["nts", "Natagaimas"], ["ntu", "Natügu"], ["ntw", "Nottoway"], ["ntx", "Tangkhul Naga (Myanmar)"], ["nty", "Mantsi"], ["ntz", "Natanzi"], ["nua", "Yuanga"], ["nub", "Nubian languages"], ["nuc", "Nukuini"], ["nud", "Ngala"], ["nue", "Ngundu"], ["nuf", "Nusu"], ["nug", "Nungali"], ["nuh", "Ndunda"], ["nui", "Ngumbi"], ["nuj", "Nyole"], ["nuk", "Nuu-chah-nulth, Nuuchahnulth"], ["nul", "Nusa Laut"], ["num", "Niuafo'ou"], ["nun", "Anong"], ["nuo", "Nguôn"], ["nup", "Nupe-Nupe-Tako"], ["nuq", "Nukumanu"], ["nur", "Nukuria"], ["nus", "Nuer"], ["nut", "Nung (Viet Nam)"], ["nuu", "Ngbundu"], ["nuv", "Northern Nuni"], ["nuw", "Nguluwan"], ["nux", "Mehek"], ["nuy", "Nunggubuyu"], ["nuz", "Tlamacazapa Nahuatl"], ["nvh", "Nasarian"], ["nvm", "Namiae"], ["nvo", "Nyokon"], ["nwa", "Nawathinehena"], ["nwb", "Nyabwa"], ["nwc", "Classical Newari, Classical Nepal Bhasa, Old Newari"], ["nwe", "Ngwe"], ["nwg", "Ngayawung"], ["nwi", "Southwest Tanna"], ["nwm", "Nyamusa-Molo"], ["nwo", "Nauo"], ["nwr", "Nawaru"], ["nwx", "Middle Newar"], ["nwy", "Nottoway-Meherrin"], ["nxa", "Nauete"], ["nxd", "Ngando (Democratic Republic of Congo)"], ["nxe", "Nage"], ["nxg", "Ngad'a"], ["nxi", "Nindi"], ["nxk", "Koki Naga"], ["nxl", "South Nuaulu"], ["nxm", "Numidian"], ["nxn", "Ngawun"], ["nxo", "Ndambomo"], ["nxq", "Naxi"], ["nxr", "Ninggerum"], ["nxu", "Narau"], ["nxx", "Nafri"], ["nyb", "Nyangbo"], ["nyc", "Nyanga-li"], ["nyd", "Nyore, Olunyole"], ["nye", "Nyengo"], ["nyf", "Giryama, Kigiryama"], ["nyg", "Nyindu"], ["nyh", "Nyikina"], ["nyi", "Ama (Sudan)"], ["nyj", "Nyanga"], ["nyk", "Nyaneka"], ["nyl", "Nyeu"], ["nym", "Nyamwezi"], ["nyn", "Nyankole"], ["nyo", "Nyoro"], ["nyp", "Nyang'i"], ["nyq", "Nayini"], ["nyr", "Nyiha (Malawi)"], ["nys", "Nyungar"], ["nyt", "Nyawaygi"], ["nyu", "Nyungwe"], ["nyv", "Nyulnyul"], ["nyw", "Nyaw"], ["nyx", "Nganyaywana"], ["nyy", "Nyakyusa-Ngonde"], ["nza", "Tigon Mbembe"], ["nzb", "Njebi"], ["nzd", "Nzadi"], ["nzi", "Nzima"], ["nzk", "Nzakara"], ["nzm", "Zeme Naga"], ["nzs", "New Zealand Sign Language"], ["nzu", "Teke-Nzikou"], ["nzy", "Nzakambay"], ["nzz", "Nanga Dama Dogon"], ["oaa", "Orok"], ["oac", "Oroch"], ["oar", "Old Aramaic (up to 700 BCE), Ancient Aramaic (up to 700 BCE)"], ["oav", "Old Avar"], ["obi", "Obispeño"], ["obk", "Southern Bontok"], ["obl", "Oblo"], ["obm", "Moabite"], ["obo", "Obo Manobo"], ["obr", "Old Burmese"], ["obt", "Old Breton"], ["obu", "Obulom"], ["oca", "Ocaina"], ["och", "Old Chinese"], ["ocm", "Old Cham"], ["oco", "Old Cornish"], ["ocu", "Atzingo Matlatzinca"], ["oda", "Odut"], ["odk", "Od"], ["odt", "Old Dutch"], ["odu", "Odual"], ["ofo", "Ofo"], ["ofs", "Old Frisian"], ["ofu", "Efutop"], ["ogb", "Ogbia"], ["ogc", "Ogbah"], ["oge", "Old Georgian"], ["ogg", "Ogbogolo"], ["ogo", "Khana"], ["ogu", "Ogbronuagum"], ["oht", "Old Hittite"], ["ohu", "Old Hungarian"], ["oia", "Oirata"], ["oin", "Inebu One"], ["ojb", "Northwestern Ojibwa"], ["ojc", "Central Ojibwa"], ["ojg", "Eastern Ojibwa"], ["ojp", "Old Japanese"], ["ojs", "Severn Ojibwa"], ["ojv", "Ontong Java"], ["ojw", "Western Ojibwa"], ["oka", "Okanagan"], ["okb", "Okobo"], ["okc", "Kobo"], ["okd", "Okodia"], ["oke", "Okpe (Southwestern Edo)"], ["okg", "Koko Babangk"], ["okh", "Koresh-e Rostam"], ["oki", "Okiek"], ["okj", "Oko-Juwoi"], ["okk", "Kwamtim One"], ["okl", "Old Kentish Sign Language"], ["okm", "Middle Korean (10th-16th cent.)"], ["okn", "Oki-No-Erabu"], ["oko", "Old Korean (3rd-9th cent.)"], ["okr", "Kirike"], ["oks", "Oko-Eni-Osayen"], ["oku", "Oku"], ["okv", "Orokaiva"], ["okx", "Okpe (Northwestern Edo)"], ["okz", "Old Khmer"], ["ola", "Walungge"], ["old", "Mochi"], ["ole", "Olekha"], ["olk", "Olkol"], ["olm", "Oloma"], ["olo", "Livvi"], ["olr", "Olrat"], ["olt", "Old Lithuanian"], ["olu", "Kuvale"], ["oma", "Omaha-Ponca"], ["omb", "East Ambae"], ["omc", "Mochica"], ["ome", "Omejes"], ["omg", "Omagua"], ["omi", "Omi"], ["omk", "Omok"], ["oml", "Ombo"], ["omn", "Minoan"], ["omo", "Utarmbung"], ["omp", "Old Manipuri"], ["omq", "Oto-Manguean languages"], ["omr", "Old Marathi"], ["omt", "Omotik"], ["omu", "Omurano"], ["omv", "Omotic languages"], ["omw", "South Tairora"], ["omx", "Old Mon"], ["omy", "Old Malay"], ["ona", "Ona"], ["onb", "Lingao"], ["one", "Oneida"], ["ong", "Olo"], ["oni", "Onin"], ["onj", "Onjob"], ["onk", "Kabore One"], ["onn", "Onobasulu"], ["ono", "Onondaga"], ["onp", "Sartang"], ["onr", "Northern One"], ["ons", "Ono"], ["ont", "Ontenu"], ["onu", "Unua"], ["onw", "Old Nubian"], ["onx", "Onin Based Pidgin"], ["ood", "Tohono O'odham"], ["oog", "Ong"], ["oon", "Önge"], ["oor", "Oorlams"], ["oos", "Old Ossetic"], ["opa", "Okpamheri"], ["opk", "Kopkaka"], ["opm", "Oksapmin"], ["opo", "Opao"], ["opt", "Opata"], ["opy", "Ofayé"], ["ora", "Oroha"], ["orc", "Orma"], ["ore", "Orejón"], ["org", "Oring"], ["orh", "Oroqen"], ["orn", "Orang Kanaq"], ["oro", "Orokolo"], ["orr", "Oruma"], ["ors", "Orang Seletar"], ["ort", "Adivasi Oriya"], ["oru", "Ormuri"], ["orv", "Old Russian"], ["orw", "Oro Win"], ["orx", "Oro"], ["ory", "Odia (individual language), Oriya (individual language)"], ["orz", "Ormu"], ["osa", "Osage"], ["osc", "Oscan"], ["osi", "Osing"], ["osn", "Old Sundanese"], ["oso", "Ososo"], ["osp", "Old Spanish"], ["ost", "Osatu"], ["osu", "Southern One"], ["osx", "Old Saxon"], ["ota", "Ottoman Turkish (1500-1928)"], ["otb", "Old Tibetan"], ["otd", "Ot Danum"], ["ote", "Mezquital Otomi"], ["oti", "Oti"], ["otk", "Old Turkish"], ["otl", "Tilapa Otomi"], ["otm", "Eastern Highland Otomi"], ["otn", "Tenango Otomi"], ["oto", "Otomian languages"], ["otq", "Querétaro Otomi"], ["otr", "Otoro"], ["ots", "Estado de México Otomi"], ["ott", "Temoaya Otomi"], ["otu", "Otuke"], ["otw", "Ottawa"], ["otx", "Texcatepec Otomi"], ["oty", "Old Tamil"], ["otz", "Ixtenco Otomi"], ["oua", "Tagargrent"], ["oub", "Glio-Oubi"], ["oue", "Oune"], ["oui", "Old Uighur"], ["oum", "Ouma"], ["oun", "ǃOǃung"], ["ovd", "Elfdalian, Övdalian"], ["owi", "Owiniga"], ["owl", "Old Welsh"], ["oyb", "Oy"], ["oyd", "Oyda"], ["oym", "Wayampi"], ["oyy", "Oya'oya"], ["ozm", "Koonzime"], ["paa", "Papuan languages"], ["pab", "Parecís"], ["pac", "Pacoh"], ["pad", "Paumarí"], ["pae", "Pagibete"], ["paf", "Paranawát"], ["pag", "Pangasinan"], ["pah", "Tenharim"], ["pai", "Pe"], ["pak", "Parakanã"], ["pal", "Pahlavi"], ["pam", "Pampanga, Kapampangan"], ["pao", "Northern Paiute"], ["pap", "Papiamento"], ["paq", "Parya"], ["par", "Panamint, Timbisha"], ["pas", "Papasena"], ["pat", "Papitalai"], ["pau", "Palauan"], ["pav", "Pakaásnovos"], ["paw", "Pawnee"], ["pax", "Pankararé"], ["pay", "Pech"], ["paz", "Pankararú"], ["pbb", "Páez"], ["pbc", "Patamona"], ["pbe", "Mezontla Popoloca"], ["pbf", "Coyotepec Popoloca"], ["pbg", "Paraujano"], ["pbh", "E'ñapa Woromaipu"], ["pbi", "Parkwa"], ["pbl", "Mak (Nigeria)"], ["pbm", "Puebla Mazatec"], ["pbn", "Kpasam"], ["pbo", "Papel"], ["pbp", "Badyara"], ["pbr", "Pangwa"], ["pbs", "Central Pame"], ["pbt", "Southern Pashto"], ["pbu", "Northern Pashto"], ["pbv", "Pnar"], ["pby", "Pyu (Papua New Guinea)"], ["pbz", "Palu"], ["pca", "Santa Inés Ahuatempan Popoloca"], ["pcb", "Pear"], ["pcc", "Bouyei"], ["pcd", "Picard"], ["pce", "Ruching Palaung"], ["pcf", "Paliyan"], ["pcg", "Paniya"], ["pch", "Pardhan"], ["pci", "Duruwa"], ["pcj", "Parenga"], ["pck", "Paite Chin"], ["pcl", "Pardhi"], ["pcm", "Nigerian Pidgin"], ["pcn", "Piti"], ["pcp", "Pacahuara"], ["pcr", "Panang"], ["pcw", "Pyapun"], ["pda", "Anam"], ["pdc", "Pennsylvania German"], ["pdi", "Pa Di"], ["pdn", "Podena, Fedan"], ["pdo", "Padoe"], ["pdt", "Plautdietsch"], ["pdu", "Kayan"], ["pea", "Peranakan Indonesian"], ["peb", "Eastern Pomo"], ["ped", "Mala (Papua New Guinea)"], ["pee", "Taje"], ["pef", "Northeastern Pomo"], ["peg", "Pengo"], ["peh", "Bonan"], ["pei", "Chichimeca-Jonaz"], ["pej", "Northern Pomo"], ["pek", "Penchal"], ["pel", "Pekal"], ["pem", "Phende"], ["peo", "Old Persian (ca. 600-400 B.C.)"], ["pep", "Kunja"], ["peq", "Southern Pomo"], ["pes", "Iranian Persian"], ["pev", "Pémono"], ["pex", "Petats"], ["pey", "Petjo"], ["pez", "Eastern Penan"], ["pfa", "Pááfang"], ["pfe", "Pere"], ["pfl", "Pfaelzisch"], ["pga", "Sudanese Creole Arabic"], ["pgd", "Gāndhārī"], ["pgg", "Pangwali"], ["pgi", "Pagi"], ["pgk", "Rerep"], ["pgl", "Primitive Irish"], ["pgn", "Paelignian"], ["pgs", "Pangseng"], ["pgu", "Pagu"], ["pgy", "Pongyong"], ["pgz", "Papua New Guinean Sign Language"], ["pha", "Pa-Hng"], ["phd", "Phudagi"], ["phg", "Phuong"], ["phh", "Phukha"], ["phi", "Philippine languages"], ["phk", "Phake"], ["phl", "Phalura, Palula"], ["phm", "Phimbi"], ["phn", "Phoenician"], ["pho", "Phunoi"], ["phq", "Phana'"], ["phr", "Pahari-Potwari"], ["pht", "Phu Thai"], ["phu", "Phuan"], ["phv", "Pahlavani"], ["phw", "Phangduwali"], ["pia", "Pima Bajo"], ["pib", "Yine"], ["pic", "Pinji"], ["pid", "Piaroa"], ["pie", "Piro"], ["pif", "Pingelapese"], ["pig", "Pisabo"], ["pih", "Pitcairn-Norfolk"], ["pii", "Pini"], ["pij", "Pijao"], ["pil", "Yom"], ["pim", "Powhatan"], ["pin", "Piame"], ["pio", "Piapoco"], ["pip", "Pero"], ["pir", "Piratapuyo"], ["pis", "Pijin"], ["pit", "Pitta Pitta"], ["piu", "Pintupi-Luritja"], ["piv", "Pileni, Vaeakau-Taumako"], ["piw", "Pimbwe"], ["pix", "Piu"], ["piy", "Piya-Kwonci"], ["piz", "Pije"], ["pjt", "Pitjantjatjara"], ["pka", "Ardhamāgadhī Prākrit"], ["pkb", "Pokomo, Kipfokomo"], ["pkc", "Paekche"], ["pkg", "Pak-Tong"], ["pkh", "Pankhu"], ["pkn", "Pakanha"], ["pko", "Pökoot"], ["pkp", "Pukapuka"], ["pkr", "Attapady Kurumba"], ["pks", "Pakistan Sign Language"], ["pkt", "Maleng"], ["pku", "Paku"], ["pla", "Miani"], ["plb", "Polonombauk"], ["plc", "Central Palawano"], ["pld", "Polari"], ["ple", "Palu'e"], ["plf", "Central Malayo-Polynesian languages"], ["plg", "Pilagá"], ["plh", "Paulohi"], ["plj", "Polci"], ["plk", "Kohistani Shina"], ["pll", "Shwe Palaung"], ["pln", "Palenquero"], ["plo", "Oluta Popoluca"], ["plp", "Palpa"], ["plq", "Palaic"], ["plr", "Palaka Senoufo"], ["pls", "San Marcos Tlacoyalco Popoloca, San Marcos Tlalcoyalco Popoloca"], ["plt", "Plateau Malagasy"], ["plu", "Palikúr"], ["plv", "Southwest Palawano"], ["plw", "Brooke's Point Palawano"], ["ply", "Bolyu"], ["plz", "Paluan"], ["pma", "Paama"], ["pmb", "Pambia"], ["pmc", "Palumata"], ["pmd", "Pallanganmiddang"], ["pme", "Pwaamei"], ["pmf", "Pamona"], ["pmh", "Māhārāṣṭri Prākrit"], ["pmi", "Northern Pumi"], ["pmj", "Southern Pumi"], ["pmk", "Pamlico"], ["pml", "Lingua Franca"], ["pmm", "Pomo"], ["pmn", "Pam"], ["pmo", "Pom"], ["pmq", "Northern Pame"], ["pmr", "Paynamar"], ["pms", "Piemontese"], ["pmt", "Tuamotuan"], ["pmu", "Mirpur Panjabi"], ["pmw", "Plains Miwok"], ["pmx", "Poumei Naga"], ["pmy", "Papuan Malay"], ["pmz", "Southern Pame"], ["pna", "Punan Bah-Biau"], ["pnb", "Western Panjabi"], ["pnc", "Pannei"], ["pnd", "Mpinda"], ["pne", "Western Penan"], ["png", "Pangu, Pongu"], ["pnh", "Penrhyn"], ["pni", "Aoheng"], ["pnj", "Pinjarup"], ["pnk", "Paunaka"], ["pnl", "Paleni"], ["pnm", "Punan Batu 1"], ["pnn", "Pinai-Hagahai"], ["pno", "Panobo"], ["pnp", "Pancana"], ["pnq", "Pana (Burkina Faso)"], ["pnr", "Panim"], ["pns", "Ponosakan"], ["pnt", "Pontic"], ["pnu", "Jiongnai Bunu"], ["pnv", "Pinigura"], ["pnw", "Banyjima, Panytyima"], ["pnx", "Phong-Kniang"], ["pny", "Pinyin"], ["pnz", "Pana (Central African Republic)"], ["poc", "Poqomam"], ["pod", "Ponares"], ["poe", "San Juan Atzingo Popoloca"], ["pof", "Poke"], ["pog", "Potiguára"], ["poh", "Poqomchi'"], ["poi", "Highland Popoluca"], ["pok", "Pokangá"], ["pom", "Southeastern Pomo"], ["pon", "Pohnpeian"], ["poo", "Central Pomo"], ["pop", "Pwapwâ"], ["poq", "Texistepec Popoluca"], ["pos", "Sayula Popoluca"], ["pot", "Potawatomi"], ["pov", "Upper Guinea Crioulo"], ["pow", "San Felipe Otlaltepec Popoloca"], ["pox", "Polabian"], ["poy", "Pogolo"], ["poz", "Malayo-Polynesian languages"], ["ppa", "Pao"], ["ppe", "Papi"], ["ppi", "Paipai"], ["ppk", "Uma"], ["ppl", "Pipil, Nicarao"], ["ppm", "Papuma"], ["ppn", "Papapana"], ["ppo", "Folopa"], ["ppp", "Pelende"], ["ppq", "Pei"], ["ppr", "Piru"], ["pps", "San Luís Temalacayuca Popoloca"], ["ppt", "Pare"], ["ppu", "Papora"], ["pqa", "Pa'a"], ["pqe", "Eastern Malayo-Polynesian languages"], ["pqm", "Malecite-Passamaquoddy"], ["pqw", "Western Malayo-Polynesian languages"], ["pra", "Prakrit languages"], ["prb", "Lua'"], ["prc", "Parachi"], ["prd", "Parsi-Dari"], ["pre", "Principense"], ["prf", "Paranan"], ["prg", "Prussian"], ["prh", "Porohanon"], ["pri", "Paicî"], ["prk", "Parauk"], ["prl", "Peruvian Sign Language"], ["prm", "Kibiri"], ["prn", "Prasuni"], ["pro", "Old Provençal (to 1500), Old Occitan (to 1500)"], ["prp", "Parsi"], ["prq", "Ashéninka Perené"], ["prr", "Puri"], ["prs", "Dari, Afghan Persian"], ["prt", "Phai"], ["pru", "Puragi"], ["prw", "Parawen"], ["prx", "Purik"], ["pry", "Pray 3"], ["prz", "Providencia Sign Language"], ["psa", "Asue Awyu"], ["psc", "Persian Sign Language"], ["psd", "Plains Indian Sign Language"], ["pse", "Central Malay"], ["psg", "Penang Sign Language"], ["psh", "Southwest Pashai, Southwest Pashayi"], ["psi", "Southeast Pashai, Southeast Pashayi"], ["psl", "Puerto Rican Sign Language"], ["psm", "Pauserna"], ["psn", "Panasuan"], ["pso", "Polish Sign Language"], ["psp", "Philippine Sign Language"], ["psq", "Pasi"], ["psr", "Portuguese Sign Language"], ["pss", "Kaulong"], ["pst", "Central Pashto"], ["psu", "Sauraseni Prākrit"], ["psw", "Port Sandwich"], ["psy", "Piscataway"], ["pta", "Pai Tavytera"], ["pth", "Pataxó Hã-Ha-Hãe"], ["pti", "Pindiini, Wangkatha"], ["ptn", "Patani"], ["pto", "Zo'é"], ["ptp", "Patep"], ["ptq", "Pattapu"], ["ptr", "Piamatsina"], ["ptt", "Enrekang"], ["ptu", "Bambam"], ["ptv", "Port Vato"], ["ptw", "Pentlatch"], ["pty", "Pathiya"], ["pua", "Western Highland Purepecha"], ["pub", "Purum"], ["puc", "Punan Merap"], ["pud", "Punan Aput"], ["pue", "Puelche"], ["puf", "Punan Merah"], ["pug", "Phuie"], ["pui", "Puinave"], ["puj", "Punan Tubu"], ["puk", "Pu Ko"], ["pum", "Puma"], ["puo", "Puoc"], ["pup", "Pulabu"], ["puq", "Puquina"], ["pur", "Puruborá"], ["put", "Putoh"], ["puu", "Punu"], ["puw", "Puluwatese"], ["pux", "Puare"], ["puy", "Purisimeño"], ["puz", "Purum Naga"], ["pwa", "Pawaia"], ["pwb", "Panawa"], ["pwg", "Gapapaiwa"], ["pwi", "Patwin"], ["pwm", "Molbog"], ["pwn", "Paiwan"], ["pwo", "Pwo Western Karen"], ["pwr", "Powari"], ["pww", "Pwo Northern Karen"], ["pxm", "Quetzaltepec Mixe"], ["pye", "Pye Krumen"], ["pym", "Fyam"], ["pyn", "Poyanáwa"], ["pys", "Paraguayan Sign Language, Lengua de Señas del Paraguay"], ["pyu", "Puyuma"], ["pyx", "Pyu (Myanmar)"], ["pyy", "Pyen"], ["pzn", "Para Naga"], ["qaa..qtz", "Private use"], ["qua", "Quapaw"], ["qub", "Huallaga Huánuco Quechua"], ["quc", "K'iche', Quiché"], ["qud", "Calderón Highland Quichua"], ["quf", "Lambayeque Quechua"], ["qug", "Chimborazo Highland Quichua"], ["quh", "South Bolivian Quechua"], ["qui", "Quileute"], ["quk", "Chachapoyas Quechua"], ["qul", "North Bolivian Quechua"], ["qum", "Sipacapense"], ["qun", "Quinault"], ["qup", "Southern Pastaza Quechua"], ["quq", "Quinqui"], ["qur", "Yanahuanca Pasco Quechua"], ["qus", "Santiago del Estero Quichua"], ["quv", "Sacapulteco"], ["quw", "Tena Lowland Quichua"], ["qux", "Yauyos Quechua"], ["quy", "Ayacucho Quechua"], ["quz", "Cusco Quechua"], ["qva", "Ambo-Pasco Quechua"], ["qvc", "Cajamarca Quechua"], ["qve", "Eastern Apurímac Quechua"], ["qvh", "Huamalíes-Dos de Mayo Huánuco Quechua"], ["qvi", "Imbabura Highland Quichua"], ["qvj", "Loja Highland Quichua"], ["qvl", "Cajatambo North Lima Quechua"], ["qvm", "Margos-Yarowilca-Lauricocha Quechua"], ["qvn", "North Junín Quechua"], ["qvo", "Napo Lowland Quechua"], ["qvp", "Pacaraos Quechua"], ["qvs", "San Martín Quechua"], ["qvw", "Huaylla Wanca Quechua"], ["qvy", "Queyu"], ["qvz", "Northern Pastaza Quichua"], ["qwa", "Corongo Ancash Quechua"], ["qwc", "Classical Quechua"], ["qwe", "Quechuan (family)"], ["qwh", "Huaylas Ancash Quechua"], ["qwm", "Kuman (Russia)"], ["qws", "Sihuas Ancash Quechua"], ["qwt", "Kwalhioqua-Tlatskanai"], ["qxa", "Chiquián Ancash Quechua"], ["qxc", "Chincha Quechua"], ["qxh", "Panao Huánuco Quechua"], ["qxl", "Salasaca Highland Quichua"], ["qxn", "Northern Conchucos Ancash Quechua"], ["qxo", "Southern Conchucos Ancash Quechua"], ["qxp", "Puno Quechua"], ["qxq", "Qashqa'i"], ["qxr", "Cañar Highland Quichua"], ["qxs", "Southern Qiang"], ["qxt", "Santa Ana de Tusi Pasco Quechua"], ["qxu", "Arequipa-La Unión Quechua"], ["qxw", "Jauja Wanca Quechua"], ["qya", "Quenya"], ["qyp", "Quiripi"], ["raa", "Dungmali"], ["rab", "Camling"], ["rac", "Rasawa"], ["rad", "Rade"], ["raf", "Western Meohang"], ["rag", "Logooli, Lulogooli"], ["rah", "Rabha"], ["rai", "Ramoaaina"], ["raj", "Rajasthani"], ["rak", "Tulu-Bohuai"], ["ral", "Ralte"], ["ram", "Canela"], ["ran", "Riantana"], ["rao", "Rao"], ["rap", "Rapanui"], ["raq", "Saam"], ["rar", "Rarotongan, Cook Islands Maori"], ["ras", "Tegali"], ["rat", "Razajerdi"], ["rau", "Raute"], ["rav", "Sampang"], ["raw", "Rawang"], ["rax", "Rang"], ["ray", "Rapa"], ["raz", "Rahambuu"], ["rbb", "Rumai Palaung"], ["rbk", "Northern Bontok"], ["rbl", "Miraya Bikol"], ["rbp", "Barababaraba"], ["rcf", "Réunion Creole French"], ["rdb", "Rudbari"], ["rea", "Rerau"], ["reb", "Rembong"], ["ree", "Rejang Kayan"], ["reg", "Kara (Tanzania)"], ["rei", "Reli"], ["rej", "Rejang"], ["rel", "Rendille"], ["rem", "Remo"], ["ren", "Rengao"], ["rer", "Rer Bare"], ["res", "Reshe"], ["ret", "Retta"], ["rey", "Reyesano"], ["rga", "Roria"], ["rge", "Romano-Greek"], ["rgk", "Rangkas"], ["rgn", "Romagnol"], ["rgr", "Resígaro"], ["rgs", "Southern Roglai"], ["rgu", "Ringgou"], ["rhg", "Rohingya"], ["rhp", "Yahang"], ["ria", "Riang (India)"], ["rie", "Rien"], ["rif", "Tarifit"], ["ril", "Riang Lang, Riang (Myanmar)"], ["rim", "Nyaturu"], ["rin", "Nungu"], ["rir", "Ribun"], ["rit", "Ritharrngu"], ["riu", "Riung"], ["rjg", "Rajong"], ["rji", "Raji"], ["rjs", "Rajbanshi"], ["rka", "Kraol"], ["rkb", "Rikbaktsa"], ["rkh", "Rakahanga-Manihiki"], ["rki", "Rakhine"], ["rkm", "Marka"], ["rkt", "Rangpuri, Kamta"], ["rkw", "Arakwal"], ["rma", "Rama"], ["rmb", "Rembarrnga"], ["rmc", "Carpathian Romani"], ["rmd", "Traveller Danish"], ["rme", "Angloromani"], ["rmf", "Kalo Finnish Romani"], ["rmg", "Traveller Norwegian"], ["rmh", "Murkim"], ["rmi", "Lomavren"], ["rmk", "Romkun"], ["rml", "Baltic Romani"], ["rmm", "Roma"], ["rmn", "Balkan Romani"], ["rmo", "Sinte Romani"], ["rmp", "Rempi"], ["rmq", "Caló"], ["rmr", "Caló"], ["rms", "Romanian Sign Language"], ["rmt", "Domari"], ["rmu", "Tavringer Romani"], ["rmv", "Romanova"], ["rmw", "Welsh Romani"], ["rmx", "Romam"], ["rmy", "Vlax Romani"], ["rmz", "Marma"], ["rna", "Runa"], ["rnd", "Ruund"], ["rng", "Ronga"], ["rnl", "Ranglong"], ["rnn", "Roon"], ["rnp", "Rongpo"], ["rnr", "Nari Nari"], ["rnw", "Rungwa"], ["roa", "Romance languages"], ["rob", "Tae'"], ["roc", "Cacgia Roglai"], ["rod", "Rogo"], ["roe", "Ronji"], ["rof", "Rombo"], ["rog", "Northern Roglai"], ["rol", "Romblomanon"], ["rom", "Romany"], ["roo", "Rotokas"], ["rop", "Kriol"], ["ror", "Rongga"], ["rou", "Runga"], ["row", "Dela-Oenale"], ["rpn", "Repanbitip"], ["rpt", "Rapting"], ["rri", "Ririo"], ["rro", "Waima"], ["rrt", "Arritinngithigh"], ["rsb", "Romano-Serbian"], ["rsi", "Rennellese Sign Language"], ["rsl", "Russian Sign Language"], ["rsm", "Miriwoong Sign Language"], ["rtc", "Rungtu Chin"], ["rth", "Ratahan"], ["rtm", "Rotuman"], ["rts", "Yurats"], ["rtw", "Rathawi"], ["rub", "Gungu"], ["ruc", "Ruuli"], ["rue", "Rusyn"], ["ruf", "Luguru"], ["rug", "Roviana"], ["ruh", "Ruga"], ["rui", "Rufiji"], ["ruk", "Che"], ["ruo", "Istro Romanian"], ["rup", "Macedo-Romanian, Aromanian, Arumanian"], ["ruq", "Megleno Romanian"], ["rut", "Rutul"], ["ruu", "Lanas Lobu"], ["ruy", "Mala (Nigeria)"], ["ruz", "Ruma"], ["rwa", "Rawo"], ["rwk", "Rwa"], ["rwl", "Ruwila"], ["rwm", "Amba (Uganda)"], ["rwo", "Rawa"], ["rwr", "Marwari (India)"], ["rxd", "Ngardi"], ["rxw", "Karuwali, Garuwali"], ["ryn", "Northern Amami-Oshima"], ["rys", "Yaeyama"], ["ryu", "Central Okinawan"], ["rzh", "Rāziḥī"], ["saa", "Saba"], ["sab", "Buglere"], ["sac", "Meskwaki"], ["sad", "Sandawe"], ["sae", "Sabanê"], ["saf", "Safaliba"], ["sah", "Yakut"], ["sai", "South American Indian languages"], ["saj", "Sahu"], ["sak", "Sake"], ["sal", "Salishan languages"], ["sam", "Samaritan Aramaic"], ["sao", "Sause"], ["sap", "Sanapaná"], ["saq", "Samburu"], ["sar", "Saraveca"], ["sas", "Sasak"], ["sat", "Santali"], ["sau", "Saleman"], ["sav", "Saafi-Saafi"], ["saw", "Sawi"], ["sax", "Sa"], ["say", "Saya"], ["saz", "Saurashtra"], ["sba", "Ngambay"], ["sbb", "Simbo"], ["sbc", "Kele (Papua New Guinea)"], ["sbd", "Southern Samo"], ["sbe", "Saliba"], ["sbf", "Chabu, Shabo"], ["sbg", "Seget"], ["sbh", "Sori-Harengan"], ["sbi", "Seti"], ["sbj", "Surbakhal"], ["sbk", "Safwa"], ["sbl", "Botolan Sambal"], ["sbm", "Sagala"], ["sbn", "Sindhi Bhil"], ["sbo", "Sabüm"], ["sbp", "Sangu (Tanzania)"], ["sbq", "Sileibi"], ["sbr", "Sembakung Murut"], ["sbs", "Subiya"], ["sbt", "Kimki"], ["sbu", "Stod Bhoti"], ["sbv", "Sabine"], ["sbw", "Simba"], ["sbx", "Seberuang"], ["sby", "Soli"], ["sbz", "Sara Kaba"], ["sca", "Sansu"], ["scb", "Chut"], ["sce", "Dongxiang"], ["scf", "San Miguel Creole French"], ["scg", "Sanggau"], ["sch", "Sakachep"], ["sci", "Sri Lankan Creole Malay"], ["sck", "Sadri"], ["scl", "Shina"], ["scn", "Sicilian"], ["sco", "Scots"], ["scp", "Hyolmo, Helambu Sherpa"], ["scq", "Sa'och"], ["scs", "North Slavey"], ["sct", "Southern Katang"], ["scu", "Shumcho"], ["scv", "Sheni"], ["scw", "Sha"], ["scx", "Sicel"], ["sda", "Toraja-Sa'dan"], ["sdb", "Shabak"], ["sdc", "Sassarese Sardinian"], ["sde", "Surubu"], ["sdf", "Sarli"], ["sdg", "Savi"], ["sdh", "Southern Kurdish"], ["sdj", "Suundi"], ["sdk", "Sos Kundi"], ["sdl", "Saudi Arabian Sign Language"], ["sdm", "Semandang"], ["sdn", "Gallurese Sardinian"], ["sdo", "Bukar-Sadung Bidayuh"], ["sdp", "Sherdukpen"], ["sdq", "Semandang"], ["sdr", "Oraon Sadri"], ["sds", "Sened"], ["sdt", "Shuadit"], ["sdu", "Sarudu"], ["sdv", "Eastern Sudanic languages"], ["sdx", "Sibu Melanau"], ["sdz", "Sallands"], ["sea", "Semai"], ["seb", "Shempire Senoufo"], ["sec", "Sechelt"], ["sed", "Sedang"], ["see", "Seneca"], ["sef", "Cebaara Senoufo"], ["seg", "Segeju"], ["seh", "Sena"], ["sei", "Seri"], ["sej", "Sene"], ["sek", "Sekani"], ["sel", "Selkup"], ["sem", "Semitic languages"], ["sen", "Nanerigé Sénoufo"], ["seo", "Suarmin"], ["sep", "Sìcìté Sénoufo"], ["seq", "Senara Sénoufo"], ["ser", "Serrano"], ["ses", "Koyraboro Senni Songhai"], ["set", "Sentani"], ["seu", "Serui-Laut"], ["sev", "Nyarafolo Senoufo"], ["sew", "Sewa Bay"], ["sey", "Secoya"], ["sez", "Senthang Chin"], ["sfb", "Langue des signes de Belgique Francophone, French Belgian Sign Language"], ["sfe", "Eastern Subanen"], ["sfm", "Small Flowery Miao"], ["sfs", "South African Sign Language"], ["sfw", "Sehwi"], ["sga", "Old Irish (to 900)"], ["sgb", "Mag-antsi Ayta"], ["sgc", "Kipsigis"], ["sgd", "Surigaonon"], ["sge", "Segai"], ["sgg", "Swiss-German Sign Language"], ["sgh", "Shughni"], ["sgi", "Suga"], ["sgj", "Surgujia"], ["sgk", "Sangkong"], ["sgl", "Sanglechi-Ishkashimi"], ["sgm", "Singa"], ["sgn", "Sign languages"], ["sgo", "Songa"], ["sgp", "Singpho"], ["sgr", "Sangisari"], ["sgs", "Samogitian"], ["sgt", "Brokpake"], ["sgu", "Salas"], ["sgw", "Sebat Bet Gurage"], ["sgx", "Sierra Leone Sign Language"], ["sgy", "Sanglechi"], ["sgz", "Sursurunga"], ["sha", "Shall-Zwall"], ["shb", "Ninam"], ["shc", "Sonde"], ["shd", "Kundal Shahi"], ["she", "Sheko"], ["shg", "Shua"], ["shh", "Shoshoni"], ["shi", "Tachelhit"], ["shj", "Shatt"], ["shk", "Shilluk"], ["shl", "Shendu"], ["shm", "Shahrudi"], ["shn", "Shan"], ["sho", "Shanga"], ["shp", "Shipibo-Conibo"], ["shq", "Sala"], ["shr", "Shi"], ["shs", "Shuswap"], ["sht", "Shasta"], ["shu", "Chadian Arabic"], ["shv", "Shehri"], ["shw", "Shwai"], ["shx", "She"], ["shy", "Tachawit"], ["shz", "Syenara Senoufo"], ["sia", "Akkala Sami"], ["sib", "Sebop"], ["sid", "Sidamo"], ["sie", "Simaa"], ["sif", "Siamou"], ["sig", "Paasaal"], ["sih", "Zire, Sîshëë"], ["sii", "Shom Peng"], ["sij", "Numbami"], ["sik", "Sikiana"], ["sil", "Tumulung Sisaala"], ["sim", "Mende (Papua New Guinea)"], ["sio", "Siouan languages"], ["sip", "Sikkimese"], ["siq", "Sonia"], ["sir", "Siri"], ["sis", "Siuslaw"], ["sit", "Sino-Tibetan languages"], ["siu", "Sinagen"], ["siv", "Sumariup"], ["siw", "Siwai"], ["six", "Sumau"], ["siy", "Sivandi"], ["siz", "Siwi"], ["sja", "Epena"], ["sjb", "Sajau Basap"], ["sjd", "Kildin Sami"], ["sje", "Pite Sami"], ["sjg", "Assangori"], ["sjk", "Kemi Sami"], ["sjl", "Sajalong, Miji"], ["sjm", "Mapun"], ["sjn", "Sindarin"], ["sjo", "Xibe"], ["sjp", "Surjapuri"], ["sjr", "Siar-Lak"], ["sjs", "Senhaja De Srair"], ["sjt", "Ter Sami"], ["sju", "Ume Sami"], ["sjw", "Shawnee"], ["ska", "Skagit"], ["skb", "Saek"], ["skc", "Ma Manda"], ["skd", "Southern Sierra Miwok"], ["ske", "Seke (Vanuatu)"], ["skf", "Sakirabiá"], ["skg", "Sakalava Malagasy"], ["skh", "Sikule"], ["ski", "Sika"], ["skj", "Seke (Nepal)"], ["skk", "Sok"], ["skm", "Kutong"], ["skn", "Kolibugan Subanon"], ["sko", "Seko Tengah"], ["skp", "Sekapan"], ["skq", "Sininkere"], ["skr", "Saraiki, Seraiki"], ["sks", "Maia"], ["skt", "Sakata"], ["sku", "Sakao"], ["skv", "Skou"], ["skw", "Skepi Creole Dutch"], ["skx", "Seko Padang"], ["sky", "Sikaiana"], ["skz", "Sekar"], ["sla", "Slavic languages"], ["slc", "Sáliba"], ["sld", "Sissala"], ["sle", "Sholaga"], ["slf", "Swiss-Italian Sign Language"], ["slg", "Selungai Murut"], ["slh", "Southern Puget Sound Salish"], ["sli", "Lower Silesian"], ["slj", "Salumá"], ["sll", "Salt-Yui"], ["slm", "Pangutaran Sama"], ["sln", "Salinan"], ["slp", "Lamaholot"], ["slq", "Salchuq"], ["slr", "Salar"], ["sls", "Singapore Sign Language"], ["slt", "Sila"], ["slu", "Selaru"], ["slw", "Sialum"], ["slx", "Salampasu"], ["sly", "Selayar"], ["slz", "Ma'ya"], ["sma", "Southern Sami"], ["smb", "Simbari"], ["smc", "Som"], ["smd", "Sama"], ["smf", "Auwe"], ["smg", "Simbali"], ["smh", "Samei"], ["smi", "Sami languages"], ["smj", "Lule Sami"], ["smk", "Bolinao"], ["sml", "Central Sama"], ["smm", "Musasa"], ["smn", "Inari Sami"], ["smp", "Samaritan"], ["smq", "Samo"], ["smr", "Simeulue"], ["sms", "Skolt Sami"], ["smt", "Simte"], ["smu", "Somray"], ["smv", "Samvedi"], ["smw", "Sumbawa"], ["smx", "Samba"], ["smy", "Semnani"], ["smz", "Simeku"], ["snb", "Sebuyau"], ["snc", "Sinaugoro"], ["sne", "Bau Bidayuh"], ["snf", "Noon"], ["sng", "Sanga (Democratic Republic of Congo)"], ["snh", "Shinabo"], ["sni", "Sensi"], ["snj", "Riverain Sango"], ["snk", "Soninke"], ["snl", "Sangil"], ["snm", "Southern Ma'di"], ["snn", "Siona"], ["sno", "Snohomish"], ["snp", "Siane"], ["snq", "Sangu (Gabon)"], ["snr", "Sihan"], ["sns", "South West Bay, Nahavaq"], ["snu", "Senggi, Viid"], ["snv", "Sa'ban"], ["snw", "Selee"], ["snx", "Sam"], ["sny", "Saniyo-Hiyewe"], ["snz", "Kou"], ["soa", "Thai Song"], ["sob", "Sobei"], ["soc", "So (Democratic Republic of Congo)"], ["sod", "Songoora"], ["soe", "Songomeno"], ["sog", "Sogdian"], ["soh", "Aka"], ["soi", "Sonha"], ["soj", "Soi"], ["sok", "Sokoro"], ["sol", "Solos"], ["son", "Songhai languages"], ["soo", "Songo"], ["sop", "Songe"], ["soq", "Kanasi"], ["sor", "Somrai"], ["sos", "Seeku"], ["sou", "Southern Thai"], ["sov", "Sonsorol"], ["sow", "Sowanda"], ["sox", "Swo"], ["soy", "Miyobe"], ["soz", "Temi"], ["spb", "Sepa (Indonesia)"], ["spc", "Sapé"], ["spd", "Saep"], ["spe", "Sepa (Papua New Guinea)"], ["spg", "Sian"], ["spi", "Saponi"], ["spk", "Sengo"], ["spl", "Selepet"], ["spm", "Akukem"], ["spn", "Sanapaná"], ["spo", "Spokane"], ["spp", "Supyire Senoufo"], ["spq", "Loreto-Ucayali Spanish"], ["spr", "Saparua"], ["sps", "Saposa"], ["spt", "Spiti Bhoti"], ["spu", "Sapuan"], ["spv", "Sambalpuri, Kosli"], ["spx", "South Picene"], ["spy", "Sabaot"], ["sqa", "Shama-Sambuga"], ["sqh", "Shau"], ["sqj", "Albanian languages"], ["sqk", "Albanian Sign Language"], ["sqm", "Suma"], ["sqn", "Susquehannock"], ["sqo", "Sorkhei"], ["sqq", "Sou"], ["sqr", "Siculo Arabic"], ["sqs", "Sri Lankan Sign Language"], ["sqt", "Soqotri"], ["squ", "Squamish"], ["sqx", "Kufr Qassem Sign Language (KQSL)"], ["sra", "Saruga"], ["srb", "Sora"], ["src", "Logudorese Sardinian"], ["sre", "Sara"], ["srf", "Nafi"], ["srg", "Sulod"], ["srh", "Sarikoli"], ["sri", "Siriano"], ["srk", "Serudung Murut"], ["srl", "Isirawa"], ["srm", "Saramaccan"], ["srn", "Sranan Tongo"], ["sro", "Campidanese Sardinian"], ["srq", "Sirionó"], ["srr", "Serer"], ["srs", "Sarsi"], ["srt", "Sauri"], ["sru", "Suruí"], ["srv", "Southern Sorsoganon"], ["srw", "Serua"], ["srx", "Sirmauri"], ["sry", "Sera"], ["srz", "Shahmirzadi"], ["ssa", "Nilo-Saharan languages"], ["ssb", "Southern Sama"], ["ssc", "Suba-Simbiti"], ["ssd", "Siroi"], ["sse", "Balangingi, Bangingih Sama"], ["ssf", "Thao"], ["ssg", "Seimat"], ["ssh", "Shihhi Arabic"], ["ssi", "Sansi"], ["ssj", "Sausi"], ["ssk", "Sunam"], ["ssl", "Western Sisaala"], ["ssm", "Semnam"], ["ssn", "Waata"], ["sso", "Sissano"], ["ssp", "Spanish Sign Language"], ["ssq", "So'a"], ["ssr", "Swiss-French Sign Language"], ["sss", "Sô"], ["sst", "Sinasina"], ["ssu", "Susuami"], ["ssv", "Shark Bay"], ["ssx", "Samberigi"], ["ssy", "Saho"], ["ssz", "Sengseng"], ["sta", "Settla"], ["stb", "Northern Subanen"], ["std", "Sentinel"], ["ste", "Liana-Seti"], ["stf", "Seta"], ["stg", "Trieng"], ["sth", "Shelta"], ["sti", "Bulo Stieng"], ["stj", "Matya Samo"], ["stk", "Arammba"], ["stl", "Stellingwerfs"], ["stm", "Setaman"], ["stn", "Owa"], ["sto", "Stoney"], ["stp", "Southeastern Tepehuan"], ["stq", "Saterfriesisch"], ["str", "Straits Salish"], ["sts", "Shumashti"], ["stt", "Budeh Stieng"], ["stu", "Samtao"], ["stv", "Silt'e"], ["stw", "Satawalese"], ["sty", "Siberian Tatar"], ["sua", "Sulka"], ["sub", "Suku"], ["suc", "Western Subanon"], ["sue", "Suena"], ["sug", "Suganga"], ["sui", "Suki"], ["suj", "Shubi"], ["suk", "Sukuma"], ["sul", "Surigaonon"], ["sum", "Sumo-Mayangna"], ["suo", "Bouni"], ["suq", "Tirmaga-Chai Suri, Suri"], ["sur", "Mwaghavul"], ["sus", "Susu"], ["sut", "Subtiaba"], ["suv", "Puroik"], ["suw", "Sumbwa"], ["sux", "Sumerian"], ["suy", "Suyá"], ["suz", "Sunwar"], ["sva", "Svan"], ["svb", "Ulau-Suain"], ["svc", "Vincentian Creole English"], ["sve", "Serili"], ["svk", "Slovakian Sign Language"], ["svm", "Slavomolisano"], ["svr", "Savara"], ["svs", "Savosavo"], ["svx", "Skalvian"], ["swb", "Maore Comorian"], ["swc", "Congo Swahili"], ["swf", "Sere"], ["swg", "Swabian"], ["swh", "Swahili (individual language), Kiswahili"], ["swi", "Sui"], ["swj", "Sira"], ["swk", "Malawi Sena"], ["swl", "Swedish Sign Language"], ["swm", "Samosa"], ["swn", "Sawknah"], ["swo", "Shanenawa"], ["swp", "Suau"], ["swq", "Sharwa"], ["swr", "Saweru"], ["sws", "Seluwasan"], ["swt", "Sawila"], ["swu", "Suwawa"], ["swv", "Shekhawati"], ["sww", "Sowa"], ["swx", "Suruahá"], ["swy", "Sarua"], ["sxb", "Suba"], ["sxc", "Sicanian"], ["sxe", "Sighu"], ["sxg", "Shuhi, Shixing"], ["sxk", "Southern Kalapuya"], ["sxl", "Selian"], ["sxm", "Samre"], ["sxn", "Sangir"], ["sxo", "Sorothaptic"], ["sxr", "Saaroa"], ["sxs", "Sasaru"], ["sxu", "Upper Saxon"], ["sxw", "Saxwe Gbe"], ["sya", "Siang"], ["syb", "Central Subanen"], ["syc", "Classical Syriac"], ["syd", "Samoyedic languages"], ["syi", "Seki"], ["syk", "Sukur"], ["syl", "Sylheti"], ["sym", "Maya Samo"], ["syn", "Senaya"], ["syo", "Suoy"], ["syr", "Syriac"], ["sys", "Sinyar"], ["syw", "Kagate"], ["syx", "Samay"], ["syy", "Al-Sayyid Bedouin Sign Language"], ["sza", "Semelai"], ["szb", "Ngalum"], ["szc", "Semaq Beri"], ["szd", "Seru"], ["sze", "Seze"], ["szg", "Sengele"], ["szl", "Silesian"], ["szn", "Sula"], ["szp", "Suabo"], ["szs", "Solomon Islands Sign Language"], ["szv", "Isu (Fako Division)"], ["szw", "Sawai"], ["szy", "Sakizaya"], ["taa", "Lower Tanana"], ["tab", "Tabassaran"], ["tac", "Lowland Tarahumara"], ["tad", "Tause"], ["tae", "Tariana"], ["taf", "Tapirapé"], ["tag", "Tagoi"], ["tai", "Tai languages"], ["taj", "Eastern Tamang"], ["tak", "Tala"], ["tal", "Tal"], ["tan", "Tangale"], ["tao", "Yami"], ["tap", "Taabwa"], ["taq", "Tamasheq"], ["tar", "Central Tarahumara"], ["tas", "Tay Boi"], ["tau", "Upper Tanana"], ["tav", "Tatuyo"], ["taw", "Tai"], ["tax", "Tamki"], ["tay", "Atayal"], ["taz", "Tocho"], ["tba", "Aikanã"], ["tbb", "Tapeba"], ["tbc", "Takia"], ["tbd", "Kaki Ae"], ["tbe", "Tanimbili"], ["tbf", "Mandara"], ["tbg", "North Tairora"], ["tbh", "Dharawal, Thurawal"], ["tbi", "Gaam"], ["tbj", "Tiang"], ["tbk", "Calamian Tagbanwa"], ["tbl", "Tboli"], ["tbm", "Tagbu"], ["tbn", "Barro Negro Tunebo"], ["tbo", "Tawala"], ["tbp", "Taworta, Diebroud"], ["tbq", "Tibeto-Burman languages"], ["tbr", "Tumtum"], ["tbs", "Tanguat"], ["tbt", "Tembo (Kitembo)"], ["tbu", "Tubar"], ["tbv", "Tobo"], ["tbw", "Tagbanwa"], ["tbx", "Kapin"], ["tby", "Tabaru"], ["tbz", "Ditammari"], ["tca", "Ticuna"], ["tcb", "Tanacross"], ["tcc", "Datooga"], ["tcd", "Tafi"], ["tce", "Southern Tutchone"], ["tcf", "Malinaltepec Me'phaa, Malinaltepec Tlapanec"], ["tcg", "Tamagario"], ["tch", "Turks And Caicos Creole English"], ["tci", "Wára"], ["tck", "Tchitchege"], ["tcl", "Taman (Myanmar)"], ["tcm", "Tanahmerah"], ["tcn", "Tichurong"], ["tco", "Taungyo"], ["tcp", "Tawr Chin"], ["tcq", "Kaiy"], ["tcs", "Torres Strait Creole, Yumplatok"], ["tct", "T'en"], ["tcu", "Southeastern Tarahumara"], ["tcw", "Tecpatlán Totonac"], ["tcx", "Toda"], ["tcy", "Tulu"], ["tcz", "Thado Chin"], ["tda", "Tagdal"], ["tdb", "Panchpargania"], ["tdc", "Emberá-Tadó"], ["tdd", "Tai Nüa"], ["tde", "Tiranige Diga Dogon"], ["tdf", "Talieng"], ["tdg", "Western Tamang"], ["tdh", "Thulung"], ["tdi", "Tomadino"], ["tdj", "Tajio"], ["tdk", "Tambas"], ["tdl", "Sur"], ["tdm", "Taruma"], ["tdn", "Tondano"], ["tdo", "Teme"], ["tdq", "Tita"], ["tdr", "Todrah"], ["tds", "Doutai"], ["tdt", "Tetun Dili"], ["tdu", "Tempasuk Dusun"], ["tdv", "Toro"], ["tdx", "Tandroy-Mahafaly Malagasy"], ["tdy", "Tadyawan"], ["tea", "Temiar"], ["teb", "Tetete"], ["tec", "Terik"], ["ted", "Tepo Krumen"], ["tee", "Huehuetla Tepehua"], ["tef", "Teressa"], ["teg", "Teke-Tege"], ["teh", "Tehuelche"], ["tei", "Torricelli"], ["tek", "Ibali Teke"], ["tem", "Timne"], ["ten", "Tama (Colombia)"], ["teo", "Teso"], ["tep", "Tepecano"], ["teq", "Temein"], ["ter", "Tereno"], ["tes", "Tengger"], ["tet", "Tetum"], ["teu", "Soo"], ["tev", "Teor"], ["tew", "Tewa (USA)"], ["tex", "Tennet"], ["tey", "Tulishi"], ["tez", "Tetserret"], ["tfi", "Tofin Gbe"], ["tfn", "Tanaina"], ["tfo", "Tefaro"], ["tfr", "Teribe"], ["tft", "Ternate"], ["tga", "Sagalla"], ["tgb", "Tobilung"], ["tgc", "Tigak"], ["tgd", "Ciwogai"], ["tge", "Eastern Gorkha Tamang"], ["tgf", "Chalikha"], ["tgg", "Tangga"], ["tgh", "Tobagonian Creole English"], ["tgi", "Lawunuia"], ["tgj", "Tagin"], ["tgn", "Tandaganon"], ["tgo", "Sudest"], ["tgp", "Tangoa"], ["tgq", "Tring"], ["tgr", "Tareng"], ["tgs", "Nume"], ["tgt", "Central Tagbanwa"], ["tgu", "Tanggu"], ["tgv", "Tingui-Boto"], ["tgw", "Tagwana Senoufo"], ["tgx", "Tagish"], ["tgy", "Togoyo"], ["tgz", "Tagalaka"], ["thc", "Tai Hang Tong"], ["thd", "Kuuk Thaayorre, Thayore"], ["the", "Chitwania Tharu"], ["thf", "Thangmi"], ["thh", "Northern Tarahumara"], ["thi", "Tai Long"], ["thk", "Tharaka, Kitharaka"], ["thl", "Dangaura Tharu"], ["thm", "Aheu"], ["thn", "Thachanadan"], ["thp", "Thompson"], ["thq", "Kochila Tharu"], ["thr", "Rana Tharu"], ["ths", "Thakali"], ["tht", "Tahltan"], ["thu", "Thuri"], ["thv", "Tahaggart Tamahaq"], ["thw", "Thudam"], ["thx", "The"], ["thy", "Tha"], ["thz", "Tayart Tamajeq"], ["tia", "Tidikelt Tamazight"], ["tic", "Tira"], ["tid", "Tidong"], ["tie", "Tingal"], ["tif", "Tifal"], ["tig", "Tigre"], ["tih", "Timugon Murut"], ["tii", "Tiene"], ["tij", "Tilung"], ["tik", "Tikar"], ["til", "Tillamook"], ["tim", "Timbe"], ["tin", "Tindi"], ["tio", "Teop"], ["tip", "Trimuris"], ["tiq", "Tiéfo"], ["tis", "Masadiit Itneg"], ["tit", "Tinigua"], ["tiu", "Adasen"], ["tiv", "Tiv"], ["tiw", "Tiwi"], ["tix", "Southern Tiwa"], ["tiy", "Tiruray"], ["tiz", "Tai Hongjin"], ["tja", "Tajuasohn"], ["tjg", "Tunjung"], ["tji", "Northern Tujia"], ["tjj", "Tjungundji"], ["tjl", "Tai Laing"], ["tjm", "Timucua"], ["tjn", "Tonjon"], ["tjo", "Temacine Tamazight"], ["tjp", "Tjupany"], ["tjs", "Southern Tujia"], ["tju", "Tjurruru"], ["tjw", "Djabwurrung"], ["tka", "Truká"], ["tkb", "Buksa"], ["tkd", "Tukudede"], ["tke", "Takwane"], ["tkf", "Tukumanféd"], ["tkg", "Tesaka Malagasy"], ["tkk", "Takpa"], ["tkl", "Tokelau"], ["tkm", "Takelma"], ["tkn", "Toku-No-Shima"], ["tkp", "Tikopia"], ["tkq", "Tee"], ["tkr", "Tsakhur"], ["tks", "Takestani"], ["tkt", "Kathoriya Tharu"], ["tku", "Upper Necaxa Totonac"], ["tkv", "Mur Pano"], ["tkw", "Teanu"], ["tkx", "Tangko"], ["tkz", "Takua"], ["tla", "Southwestern Tepehuan"], ["tlb", "Tobelo"], ["tlc", "Yecuatla Totonac"], ["tld", "Talaud"], ["tlf", "Telefol"], ["tlg", "Tofanma"], ["tlh", "Klingon, tlhIngan Hol"], ["tli", "Tlingit"], ["tlj", "Talinga-Bwisi"], ["tlk", "Taloki"], ["tll", "Tetela"], ["tlm", "Tolomako"], ["tln", "Talondo'"], ["tlo", "Talodi"], ["tlp", "Filomena Mata-Coahuitlán Totonac"], ["tlq", "Tai Loi"], ["tlr", "Talise"], ["tls", "Tambotalo"], ["tlt", "Sou Nama, Teluti"], ["tlu", "Tulehu"], ["tlv", "Taliabu"], ["tlw", "South Wemale"], ["tlx", "Khehek"], ["tly", "Talysh"], ["tma", "Tama (Chad)"], ["tmb", "Katbol, Avava"], ["tmc", "Tumak"], ["tmd", "Haruai"], ["tme", "Tremembé"], ["tmf", "Toba-Maskoy"], ["tmg", "Ternateño"], ["tmh", "Tamashek"], ["tmi", "Tutuba"], ["tmj", "Samarokena"], ["tmk", "Northwestern Tamang"], ["tml", "Tamnim Citak"], ["tmm", "Tai Thanh"], ["tmn", "Taman (Indonesia)"], ["tmo", "Temoq"], ["tmp", "Tai Mène"], ["tmq", "Tumleo"], ["tmr", "Jewish Babylonian Aramaic (ca. 200-1200 CE)"], ["tms", "Tima"], ["tmt", "Tasmate"], ["tmu", "Iau"], ["tmv", "Tembo (Motembo)"], ["tmw", "Temuan"], ["tmy", "Tami"], ["tmz", "Tamanaku"], ["tna", "Tacana"], ["tnb", "Western Tunebo"], ["tnc", "Tanimuca-Retuarã"], ["tnd", "Angosturas Tunebo"], ["tne", "Tinoc Kallahan"], ["tnf", "Tangshewi"], ["tng", "Tobanga"], ["tnh", "Maiani"], ["tni", "Tandia"], ["tnk", "Kwamera"], ["tnl", "Lenakel"], ["tnm", "Tabla"], ["tnn", "North Tanna"], ["tno", "Toromono"], ["tnp", "Whitesands"], ["tnq", "Taino"], ["tnr", "Ménik"], ["tns", "Tenis"], ["tnt", "Tontemboan"], ["tnu", "Tay Khang"], ["tnv", "Tangchangya"], ["tnw", "Tonsawang"], ["tnx", "Tanema"], ["tny", "Tongwe"], ["tnz", "Ten'edn"], ["tob", "Toba"], ["toc", "Coyutla Totonac"], ["tod", "Toma"], ["toe", "Tomedes"], ["tof", "Gizrra"], ["tog", "Tonga (Nyasa)"], ["toh", "Gitonga"], ["toi", "Tonga (Zambia)"], ["toj", "Tojolabal"], ["tol", "Tolowa"], ["tom", "Tombulu"], ["too", "Xicotepec De Juárez Totonac"], ["top", "Papantla Totonac"], ["toq", "Toposa"], ["tor", "Togbo-Vara Banda"], ["tos", "Highland Totonac"], ["tou", "Tho"], ["tov", "Upper Taromi"], ["tow", "Jemez"], ["tox", "Tobian"], ["toy", "Topoiyo"], ["toz", "To"], ["tpa", "Taupota"], ["tpc", "Azoyú Me'phaa, Azoyú Tlapanec"], ["tpe", "Tippera"], ["tpf", "Tarpia"], ["tpg", "Kula"], ["tpi", "Tok Pisin"], ["tpj", "Tapieté"], ["tpk", "Tupinikin"], ["tpl", "Tlacoapa Me'phaa, Tlacoapa Tlapanec"], ["tpm", "Tampulma"], ["tpn", "Tupinambá"], ["tpo", "Tai Pao"], ["tpp", "Pisaflores Tepehua"], ["tpq", "Tukpa"], ["tpr", "Tuparí"], ["tpt", "Tlachichilco Tepehua"], ["tpu", "Tampuan"], ["tpv", "Tanapag"], ["tpw", "Tupí"], ["tpx", "Acatepec Me'phaa, Acatepec Tlapanec"], ["tpy", "Trumai"], ["tpz", "Tinputz"], ["tqb", "Tembé"], ["tql", "Lehali"], ["tqm", "Turumsa"], ["tqn", "Tenino"], ["tqo", "Toaripi"], ["tqp", "Tomoip"], ["tqq", "Tunni"], ["tqr", "Torona"], ["tqt", "Western Totonac"], ["tqu", "Touo"], ["tqw", "Tonkawa"], ["tra", "Tirahi"], ["trb", "Terebu"], ["trc", "Copala Triqui"], ["trd", "Turi"], ["tre", "East Tarangan"], ["trf", "Trinidadian Creole English"], ["trg", "Lishán Didán"], ["trh", "Turaka"], ["tri", "Trió"], ["trj", "Toram"], ["trk", "Turkic languages"], ["trl", "Traveller Scottish"], ["trm", "Tregami"], ["trn", "Trinitario"], ["tro", "Tarao Naga"], ["trp", "Kok Borok"], ["trq", "San Martín Itunyoso Triqui"], ["trr", "Taushiro"], ["trs", "Chicahuaxtla Triqui"], ["trt", "Tunggare"], ["tru", "Turoyo, Surayt"], ["trv", "Taroko"], ["trw", "Torwali"], ["trx", "Tringgus-Sembaan Bidayuh"], ["try", "Turung"], ["trz", "Torá"], ["tsa", "Tsaangi"], ["tsb", "Tsamai"], ["tsc", "Tswa"], ["tsd", "Tsakonian"], ["tse", "Tunisian Sign Language"], ["tsf", "Southwestern Tamang"], ["tsg", "Tausug"], ["tsh", "Tsuvan"], ["tsi", "Tsimshian"], ["tsj", "Tshangla"], ["tsk", "Tseku"], ["tsl", "Ts'ün-Lao"], ["tsm", "Turkish Sign Language, Türk İşaret Dili"], ["tsp", "Northern Toussian"], ["tsq", "Thai Sign Language"], ["tsr", "Akei"], ["tss", "Taiwan Sign Language"], ["tst", "Tondi Songway Kiini"], ["tsu", "Tsou"], ["tsv", "Tsogo"], ["tsw", "Tsishingini"], ["tsx", "Mubami"], ["tsy", "Tebul Sign Language"], ["tsz", "Purepecha"], ["tta", "Tutelo"], ["ttb", "Gaa"], ["ttc", "Tektiteko"], ["ttd", "Tauade"], ["tte", "Bwanabwana"], ["ttf", "Tuotomb"], ["ttg", "Tutong"], ["tth", "Upper Ta'oih"], ["tti", "Tobati"], ["ttj", "Tooro"], ["ttk", "Totoro"], ["ttl", "Totela"], ["ttm", "Northern Tutchone"], ["ttn", "Towei"], ["tto", "Lower Ta'oih"], ["ttp", "Tombelala"], ["ttq", "Tawallammat Tamajaq"], ["ttr", "Tera"], ["tts", "Northeastern Thai"], ["ttt", "Muslim Tat"], ["ttu", "Torau"], ["ttv", "Titan"], ["ttw", "Long Wat"], ["tty", "Sikaritai"], ["ttz", "Tsum"], ["tua", "Wiarumus"], ["tub", "Tübatulabal"], ["tuc", "Mutu"], ["tud", "Tuxá"], ["tue", "Tuyuca"], ["tuf", "Central Tunebo"], ["tug", "Tunia"], ["tuh", "Taulil"], ["tui", "Tupuri"], ["tuj", "Tugutil"], ["tul", "Tula"], ["tum", "Tumbuka"], ["tun", "Tunica"], ["tuo", "Tucano"], ["tup", "Tupi languages"], ["tuq", "Tedaga"], ["tus", "Tuscarora"], ["tut", "Altaic languages"], ["tuu", "Tututni"], ["tuv", "Turkana"], ["tuw", "Tungus languages"], ["tux", "Tuxináwa"], ["tuy", "Tugen"], ["tuz", "Turka"], ["tva", "Vaghua"], ["tvd", "Tsuvadi"], ["tve", "Te'un"], ["tvk", "Southeast Ambrym"], ["tvl", "Tuvalu"], ["tvm", "Tela-Masbuar"], ["tvn", "Tavoyan"], ["tvo", "Tidore"], ["tvs", "Taveta"], ["tvt", "Tutsa Naga"], ["tvu", "Tunen"], ["tvw", "Sedoa"], ["tvx", "Taivoan"], ["tvy", "Timor Pidgin"], ["twa", "Twana"], ["twb", "Western Tawbuid"], ["twc", "Teshenawa"], ["twd", "Twents"], ["twe", "Tewa (Indonesia)"], ["twf", "Northern Tiwa"], ["twg", "Tereweng"], ["twh", "Tai Dón"], ["twl", "Tawara"], ["twm", "Tawang Monpa"], ["twn", "Twendi"], ["two", "Tswapong"], ["twp", "Ere"], ["twq", "Tasawaq"], ["twr", "Southwestern Tarahumara"], ["twt", "Turiwára"], ["twu", "Termanu"], ["tww", "Tuwari"], ["twx", "Tewe"], ["twy", "Tawoyan"], ["txa", "Tombonuo"], ["txb", "Tokharian B"], ["txc", "Tsetsaut"], ["txe", "Totoli"], ["txg", "Tangut"], ["txh", "Thracian"], ["txi", "Ikpeng"], ["txj", "Tarjumo"], ["txm", "Tomini"], ["txn", "West Tarangan"], ["txo", "Toto"], ["txq", "Tii"], ["txr", "Tartessian"], ["txs", "Tonsea"], ["txt", "Citak"], ["txu", "Kayapó"], ["txx", "Tatana"], ["txy", "Tanosy Malagasy"], ["tya", "Tauya"], ["tye", "Kyanga"], ["tyh", "O'du"], ["tyi", "Teke-Tsaayi"], ["tyj", "Tai Do, Tai Yo"], ["tyl", "Thu Lao"], ["tyn", "Kombai"], ["typ", "Thaypan"], ["tyr", "Tai Daeng"], ["tys", "Tày Sa Pa"], ["tyt", "Tày Tac"], ["tyu", "Kua"], ["tyv", "Tuvinian"], ["tyx", "Teke-Tyee"], ["tyy", "Tiyaa"], ["tyz", "Tày"], ["tza", "Tanzanian Sign Language"], ["tzh", "Tzeltal"], ["tzj", "Tz'utujil"], ["tzl", "Talossan"], ["tzm", "Central Atlas Tamazight"], ["tzn", "Tugun"], ["tzo", "Tzotzil"], ["tzx", "Tabriak"], ["uam", "Uamué"], ["uan", "Kuan"], ["uar", "Tairuma"], ["uba", "Ubang"], ["ubi", "Ubi"], ["ubl", "Buhi'non Bikol"], ["ubr", "Ubir"], ["ubu", "Umbu-Ungu"], ["uby", "Ubykh"], ["uda", "Uda"], ["ude", "Udihe"], ["udg", "Muduga"], ["udi", "Udi"], ["udj", "Ujir"], ["udl", "Wuzlam"], ["udm", "Udmurt"], ["udu", "Uduk"], ["ues", "Kioko"], ["ufi", "Ufim"], ["uga", "Ugaritic"], ["ugb", "Kuku-Ugbanh"], ["uge", "Ughele"], ["ugn", "Ugandan Sign Language"], ["ugo", "Ugong"], ["ugy", "Uruguayan Sign Language"], ["uha", "Uhami"], ["uhn", "Damal"], ["uis", "Uisai"], ["uiv", "Iyive"], ["uji", "Tanjijili"], ["uka", "Kaburi"], ["ukg", "Ukuriguma"], ["ukh", "Ukhwejo"], ["uki", "Kui (India)"], ["ukk", "Muak Sa-aak"], ["ukl", "Ukrainian Sign Language"], ["ukp", "Ukpe-Bayobiri"], ["ukq", "Ukwa"], ["uks", "Urubú-Kaapor Sign Language, Kaapor Sign Language"], ["uku", "Ukue"], ["ukv", "Kuku"], ["ukw", "Ukwuani-Aboh-Ndoni"], ["uky", "Kuuk-Yak"], ["ula", "Fungwa"], ["ulb", "Ulukwumi"], ["ulc", "Ulch"], ["ule", "Lule"], ["ulf", "Usku, Afra"], ["uli", "Ulithian"], ["ulk", "Meriam Mir"], ["ull", "Ullatan"], ["ulm", "Ulumanda'"], ["uln", "Unserdeutsch"], ["ulu", "Uma' Lung"], ["ulw", "Ulwa"], ["uma", "Umatilla"], ["umb", "Umbundu"], ["umc", "Marrucinian"], ["umd", "Umbindhamu"], ["umg", "Morrobalama, Umbuygamu"], ["umi", "Ukit"], ["umm", "Umon"], ["umn", "Makyan Naga"], ["umo", "Umotína"], ["ump", "Umpila"], ["umr", "Umbugarla"], ["ums", "Pendau"], ["umu", "Munsee"], ["una", "North Watut"], ["und", "Undetermined"], ["une", "Uneme"], ["ung", "Ngarinyin"], ["uni", "Uni"], ["unk", "Enawené-Nawé"], ["unm", "Unami"], ["unn", "Kurnai"], ["unp", "Worora"], ["unr", "Mundari"], ["unu", "Unubahe"], ["unx", "Munda"], ["unz", "Unde Kaili"], ["uok", "Uokha"], ["upi", "Umeda"], ["upv", "Uripiv-Wala-Rano-Atchin"], ["ura", "Urarina"], ["urb", "Urubú-Kaapor, Kaapor"], ["urc", "Urningangg"], ["ure", "Uru"], ["urf", "Uradhi"], ["urg", "Urigina"], ["urh", "Urhobo"], ["uri", "Urim"], ["urj", "Uralic languages"], ["urk", "Urak Lawoi'"], ["url", "Urali"], ["urm", "Urapmin"], ["urn", "Uruangnirin"], ["uro", "Ura (Papua New Guinea)"], ["urp", "Uru-Pa-In"], ["urr", "Lehalurup, Löyöp"], ["urt", "Urat"], ["uru", "Urumi"], ["urv", "Uruava"], ["urw", "Sop"], ["urx", "Urimo"], ["ury", "Orya"], ["urz", "Uru-Eu-Wau-Wau"], ["usa", "Usarufa"], ["ush", "Ushojo"], ["usi", "Usui"], ["usk", "Usaghade"], ["usp", "Uspanteco"], ["uss", "us-Saare"], ["usu", "Uya"], ["uta", "Otank"], ["ute", "Ute-Southern Paiute"], ["uth", "ut-Hun"], ["utp", "Amba (Solomon Islands)"], ["utr", "Etulo"], ["utu", "Utu"], ["uum", "Urum"], ["uun", "Kulon-Pazeh"], ["uur", "Ura (Vanuatu)"], ["uuu", "U"], ["uve", "West Uvean, Fagauvea"], ["uvh", "Uri"], ["uvl", "Lote"], ["uwa", "Kuku-Uwanh"], ["uya", "Doko-Uyanga"], ["uzn", "Northern Uzbek"], ["uzs", "Southern Uzbek"], ["vaa", "Vaagri Booli"], ["vae", "Vale"], ["vaf", "Vafsi"], ["vag", "Vagla"], ["vah", "Varhadi-Nagpuri"], ["vai", "Vai"], ["vaj", "Sekele, Northwestern ǃKung, Vasekele"], ["val", "Vehes"], ["vam", "Vanimo"], ["van", "Valman"], ["vao", "Vao"], ["vap", "Vaiphei"], ["var", "Huarijio"], ["vas", "Vasavi"], ["vau", "Vanuma"], ["vav", "Varli"], ["vay", "Wayu"], ["vbb", "Southeast Babar"], ["vbk", "Southwestern Bontok"], ["vec", "Venetian"], ["ved", "Veddah"], ["vel", "Veluws"], ["vem", "Vemgo-Mabas"], ["veo", "Ventureño"], ["vep", "Veps"], ["ver", "Mom Jango"], ["vgr", "Vaghri"], ["vgt", "Vlaamse Gebarentaal, Flemish Sign Language"], ["vic", "Virgin Islands Creole English"], ["vid", "Vidunda"], ["vif", "Vili"], ["vig", "Viemo"], ["vil", "Vilela"], ["vin", "Vinza"], ["vis", "Vishavan"], ["vit", "Viti"], ["viv", "Iduna"], ["vka", "Kariyarra"], ["vki", "Ija-Zuba"], ["vkj", "Kujarge"], ["vkk", "Kaur"], ["vkl", "Kulisusu"], ["vkm", "Kamakan"], ["vkn", "Koro Nulu"], ["vko", "Kodeoha"], ["vkp", "Korlai Creole Portuguese"], ["vkt", "Tenggarong Kutai Malay"], ["vku", "Kurrama"], ["vkz", "Koro Zuba"], ["vlp", "Valpei"], ["vls", "Vlaams"], ["vma", "Martuyhunira"], ["vmb", "Barbaram"], ["vmc", "Juxtlahuaca Mixtec"], ["vmd", "Mudu Koraga"], ["vme", "East Masela"], ["vmf", "Mainfränkisch"], ["vmg", "Lungalunga"], ["vmh", "Maraghei"], ["vmi", "Miwa"], ["vmj", "Ixtayutla Mixtec"], ["vmk", "Makhuwa-Shirima"], ["vml", "Malgana"], ["vmm", "Mitlatongo Mixtec"], ["vmp", "Soyaltepec Mazatec"], ["vmq", "Soyaltepec Mixtec"], ["vmr", "Marenje"], ["vms", "Moksela"], ["vmu", "Muluridyi"], ["vmv", "Valley Maidu"], ["vmw", "Makhuwa"], ["vmx", "Tamazola Mixtec"], ["vmy", "Ayautla Mazatec"], ["vmz", "Mazatlán Mazatec"], ["vnk", "Vano, Lovono"], ["vnm", "Vinmavis, Neve'ei"], ["vnp", "Vunapu"], ["vor", "Voro"], ["vot", "Votic"], ["vra", "Vera'a"], ["vro", "Võro"], ["vrs", "Varisi"], ["vrt", "Burmbar, Banam Bay"], ["vsi", "Moldova Sign Language"], ["vsl", "Venezuelan Sign Language"], ["vsv", "Valencian Sign Language, Llengua de signes valenciana"], ["vto", "Vitou"], ["vum", "Vumbu"], ["vun", "Vunjo"], ["vut", "Vute"], ["vwa", "Awa (China)"], ["waa", "Walla Walla"], ["wab", "Wab"], ["wac", "Wasco-Wishram"], ["wad", "Wamesa, Wondama"], ["wae", "Walser"], ["waf", "Wakoná"], ["wag", "Wa'ema"], ["wah", "Watubela"], ["wai", "Wares"], ["waj", "Waffa"], ["wak", "Wakashan languages"], ["wal", "Wolaytta, Wolaitta"], ["wam", "Wampanoag"], ["wan", "Wan"], ["wao", "Wappo"], ["wap", "Wapishana"], ["waq", "Wagiman"], ["war", "Waray (Philippines)"], ["was", "Washo"], ["wat", "Kaninuwa"], ["wau", "Waurá"], ["wav", "Waka"], ["waw", "Waiwai"], ["wax", "Watam, Marangis"], ["way", "Wayana"], ["waz", "Wampur"], ["wba", "Warao"], ["wbb", "Wabo"], ["wbe", "Waritai"], ["wbf", "Wara"], ["wbh", "Wanda"], ["wbi", "Vwanji"], ["wbj", "Alagwa"], ["wbk", "Waigali"], ["wbl", "Wakhi"], ["wbm", "Wa"], ["wbp", "Warlpiri"], ["wbq", "Waddar"], ["wbr", "Wagdi"], ["wbs", "West Bengal Sign Language"], ["wbt", "Warnman"], ["wbv", "Wajarri"], ["wbw", "Woi"], ["wca", "Yanomámi"], ["wci", "Waci Gbe"], ["wdd", "Wandji"], ["wdg", "Wadaginam"], ["wdj", "Wadjiginy"], ["wdk", "Wadikali"], ["wdu", "Wadjigu"], ["wdy", "Wadjabangayi"], ["wea", "Wewaw"], ["wec", "Wè Western"], ["wed", "Wedau"], ["weg", "Wergaia"], ["weh", "Weh"], ["wei", "Kiunum"], ["wem", "Weme Gbe"], ["wen", "Sorbian languages"], ["weo", "Wemale"], ["wep", "Westphalien"], ["wer", "Weri"], ["wes", "Cameroon Pidgin"], ["wet", "Perai"], ["weu", "Rawngtu Chin"], ["wew", "Wejewa"], ["wfg", "Yafi, Zorop"], ["wga", "Wagaya"], ["wgb", "Wagawaga"], ["wgg", "Wangkangurru, Wangganguru"], ["wgi", "Wahgi"], ["wgo", "Waigeo"], ["wgu", "Wirangu"], ["wgw", "Wagawaga"], ["wgy", "Warrgamay"], ["wha", "Sou Upaa, Manusela"], ["whg", "North Wahgi"], ["whk", "Wahau Kenyah"], ["whu", "Wahau Kayan"], ["wib", "Southern Toussian"], ["wic", "Wichita"], ["wie", "Wik-Epa"], ["wif", "Wik-Keyangan"], ["wig", "Wik Ngathan"], ["wih", "Wik-Me'anha"], ["wii", "Minidien"], ["wij", "Wik-Iiyanh"], ["wik", "Wikalkan"], ["wil", "Wilawila"], ["wim", "Wik-Mungkan"], ["win", "Ho-Chunk"], ["wir", "Wiraféd"], ["wit", "Wintu"], ["wiu", "Wiru"], ["wiv", "Vitu"], ["wiw", "Wirangu"], ["wiy", "Wiyot"], ["wja", "Waja"], ["wji", "Warji"], ["wka", "Kw'adza"], ["wkb", "Kumbaran"], ["wkd", "Wakde, Mo"], ["wkl", "Kalanadi"], ["wkr", "Keerray-Woorroong"], ["wku", "Kunduvadi"], ["wkw", "Wakawaka"], ["wky", "Wangkayutyuru"], ["wla", "Walio"], ["wlc", "Mwali Comorian"], ["wle", "Wolane"], ["wlg", "Kunbarlang"], ["wlh", "Welaun"], ["wli", "Waioli"], ["wlk", "Wailaki"], ["wll", "Wali (Sudan)"], ["wlm", "Middle Welsh"], ["wlo", "Wolio"], ["wlr", "Wailapa"], ["wls", "Wallisian"], ["wlu", "Wuliwuli"], ["wlv", "Wichí Lhamtés Vejoz"], ["wlw", "Walak"], ["wlx", "Wali (Ghana)"], ["wly", "Waling"], ["wma", "Mawa (Nigeria)"], ["wmb", "Wambaya"], ["wmc", "Wamas"], ["wmd", "Mamaindé"], ["wme", "Wambule"], ["wmg", "Western Minyag"], ["wmh", "Waima'a"], ["wmi", "Wamin"], ["wmm", "Maiwa (Indonesia)"], ["wmn", "Waamwang"], ["wmo", "Wom (Papua New Guinea)"], ["wms", "Wambon"], ["wmt", "Walmajarri"], ["wmw", "Mwani"], ["wmx", "Womo"], ["wnb", "Wanambre"], ["wnc", "Wantoat"], ["wnd", "Wandarang"], ["wne", "Waneci"], ["wng", "Wanggom"], ["wni", "Ndzwani Comorian"], ["wnk", "Wanukaka"], ["wnm", "Wanggamala"], ["wnn", "Wunumara"], ["wno", "Wano"], ["wnp", "Wanap"], ["wnu", "Usan"], ["wnw", "Wintu"], ["wny", "Wanyi, Waanyi"], ["woa", "Kuwema, Tyaraity"], ["wob", "Wè Northern"], ["woc", "Wogeo"], ["wod", "Wolani"], ["woe", "Woleaian"], ["wof", "Gambian Wolof"], ["wog", "Wogamusin"], ["woi", "Kamang"], ["wok", "Longto"], ["wom", "Wom (Nigeria)"], ["won", "Wongo"], ["woo", "Manombai"], ["wor", "Woria"], ["wos", "Hanga Hundi"], ["wow", "Wawonii"], ["woy", "Weyto"], ["wpc", "Maco"], ["wra", "Warapu"], ["wrb", "Waluwarra, Warluwara"], ["wrd", "Warduji"], ["wrg", "Warungu, Gudjal"], ["wrh", "Wiradjuri"], ["wri", "Wariyangga"], ["wrk", "Garrwa"], ["wrl", "Warlmanpa"], ["wrm", "Warumungu"], ["wrn", "Warnang"], ["wro", "Worrorra"], ["wrp", "Waropen"], ["wrr", "Wardaman"], ["wrs", "Waris"], ["wru", "Waru"], ["wrv", "Waruna"], ["wrw", "Gugu Warra"], ["wrx", "Wae Rana"], ["wry", "Merwari"], ["wrz", "Waray (Australia)"], ["wsa", "Warembori"], ["wsg", "Adilabad Gondi"], ["wsi", "Wusi"], ["wsk", "Waskia"], ["wsr", "Owenia"], ["wss", "Wasa"], ["wsu", "Wasu"], ["wsv", "Wotapuri-Katarqalai"], ["wtf", "Watiwa"], ["wth", "Wathawurrung"], ["wti", "Berta"], ["wtk", "Watakataui"], ["wtm", "Mewati"], ["wtw", "Wotu"], ["wua", "Wikngenchera"], ["wub", "Wunambal"], ["wud", "Wudu"], ["wuh", "Wutunhua"], ["wul", "Silimo"], ["wum", "Wumbvu"], ["wun", "Bungu"], ["wur", "Wurrugu"], ["wut", "Wutung"], ["wuu", "Wu Chinese"], ["wuv", "Wuvulu-Aua"], ["wux", "Wulna"], ["wuy", "Wauyai"], ["wwa", "Waama"], ["wwb", "Wakabunga"], ["wwo", "Wetamut, Dorig"], ["wwr", "Warrwa"], ["www", "Wawa"], ["wxa", "Waxianghua"], ["wxw", "Wardandi"], ["wya", "Wyandot"], ["wyb", "Wangaaybuwan-Ngiyambaa"], ["wyi", "Woiwurrung"], ["wym", "Wymysorys"], ["wyr", "Wayoró"], ["wyy", "Western Fijian"], ["xaa", "Andalusian Arabic"], ["xab", "Sambe"], ["xac", "Kachari"], ["xad", "Adai"], ["xae", "Aequian"], ["xag", "Aghwan"], ["xai", "Kaimbé"], ["xaj", "Ararandewára"], ["xak", "Máku"], ["xal", "Kalmyk, Oirat"], ["xam", "ǀXam"], ["xan", "Xamtanga"], ["xao", "Khao"], ["xap", "Apalachee"], ["xaq", "Aquitanian"], ["xar", "Karami"], ["xas", "Kamas"], ["xat", "Katawixi"], ["xau", "Kauwera"], ["xav", "Xavánte"], ["xaw", "Kawaiisu"], ["xay", "Kayan Mahakam"], ["xba", "Kamba (Brazil)"], ["xbb", "Lower Burdekin"], ["xbc", "Bactrian"], ["xbd", "Bindal"], ["xbe", "Bigambal"], ["xbg", "Bunganditj"], ["xbi", "Kombio"], ["xbj", "Birrpayi"], ["xbm", "Middle Breton"], ["xbn", "Kenaboi"], ["xbo", "Bolgarian"], ["xbp", "Bibbulman"], ["xbr", "Kambera"], ["xbw", "Kambiwá"], ["xbx", "Kabixí"], ["xby", "Batjala, Batyala"], ["xcb", "Cumbric"], ["xcc", "Camunic"], ["xce", "Celtiberian"], ["xcg", "Cisalpine Gaulish"], ["xch", "Chemakum, Chimakum"], ["xcl", "Classical Armenian"], ["xcm", "Comecrudo"], ["xcn", "Cotoname"], ["xco", "Chorasmian"], ["xcr", "Carian"], ["xct", "Classical Tibetan"], ["xcu", "Curonian"], ["xcv", "Chuvantsy"], ["xcw", "Coahuilteco"], ["xcy", "Cayuse"], ["xda", "Darkinyung"], ["xdc", "Dacian"], ["xdk", "Dharuk"], ["xdm", "Edomite"], ["xdo", "Kwandu"], ["xdy", "Malayic Dayak"], ["xeb", "Eblan"], ["xed", "Hdi"], ["xeg", "ǁXegwi"], ["xel", "Kelo"], ["xem", "Kembayan"], ["xep", "Epi-Olmec"], ["xer", "Xerénte"], ["xes", "Kesawai"], ["xet", "Xetá"], ["xeu", "Keoru-Ahia"], ["xfa", "Faliscan"], ["xga", "Galatian"], ["xgb", "Gbin"], ["xgd", "Gudang"], ["xgf", "Gabrielino-Fernandeño"], ["xgg", "Goreng"], ["xgi", "Garingbal"], ["xgl", "Galindan"], ["xgm", "Dharumbal, Guwinmal"], ["xgn", "Mongolian languages"], ["xgr", "Garza"], ["xgu", "Unggumi"], ["xgw", "Guwa"], ["xha", "Harami"], ["xhc", "Hunnic"], ["xhd", "Hadrami"], ["xhe", "Khetrani"], ["xhr", "Hernican"], ["xht", "Hattic"], ["xhu", "Hurrian"], ["xhv", "Khua"], ["xia", "Xiandao"], ["xib", "Iberian"], ["xii", "Xiri"], ["xil", "Illyrian"], ["xin", "Xinca"], ["xip", "Xipináwa"], ["xir", "Xiriâna"], ["xis", "Kisan"], ["xiv", "Indus Valley Language"], ["xiy", "Xipaya"], ["xjb", "Minjungbal"], ["xjt", "Jaitmatang"], ["xka", "Kalkoti"], ["xkb", "Northern Nago"], ["xkc", "Kho'ini"], ["xkd", "Mendalam Kayan"], ["xke", "Kereho"], ["xkf", "Khengkha"], ["xkg", "Kagoro"], ["xkh", "Karahawyana"], ["xki", "Kenyan Sign Language"], ["xkj", "Kajali"], ["xkk", "Kaco'"], ["xkl", "Mainstream Kenyah"], ["xkn", "Kayan River Kayan"], ["xko", "Kiorr"], ["xkp", "Kabatei"], ["xkq", "Koroni"], ["xkr", "Xakriabá"], ["xks", "Kumbewaha"], ["xkt", "Kantosi"], ["xku", "Kaamba"], ["xkv", "Kgalagadi"], ["xkw", "Kembra"], ["xkx", "Karore"], ["xky", "Uma' Lasan"], ["xkz", "Kurtokha"], ["xla", "Kamula"], ["xlb", "Loup B"], ["xlc", "Lycian"], ["xld", "Lydian"], ["xle", "Lemnian"], ["xlg", "Ligurian (Ancient)"], ["xli", "Liburnian"], ["xln", "Alanic"], ["xlo", "Loup A"], ["xlp", "Lepontic"], ["xls", "Lusitanian"], ["xlu", "Cuneiform Luwian"], ["xly", "Elymian"], ["xma", "Mushungulu"], ["xmb", "Mbonga"], ["xmc", "Makhuwa-Marrevone"], ["xmd", "Mbudum"], ["xme", "Median"], ["xmf", "Mingrelian"], ["xmg", "Mengaka"], ["xmh", "Kugu-Muminh"], ["xmj", "Majera"], ["xmk", "Ancient Macedonian"], ["xml", "Malaysian Sign Language"], ["xmm", "Manado Malay"], ["xmn", "Manichaean Middle Persian"], ["xmo", "Morerebi"], ["xmp", "Kuku-Mu'inh"], ["xmq", "Kuku-Mangk"], ["xmr", "Meroitic"], ["xms", "Moroccan Sign Language"], ["xmt", "Matbat"], ["xmu", "Kamu"], ["xmv", "Antankarana Malagasy, Tankarana Malagasy"], ["xmw", "Tsimihety Malagasy"], ["xmx", "Maden"], ["xmy", "Mayaguduna"], ["xmz", "Mori Bawah"], ["xna", "Ancient North Arabian"], ["xnb", "Kanakanabu"], ["xnd", "Na-Dene languages"], ["xng", "Middle Mongolian"], ["xnh", "Kuanhua"], ["xni", "Ngarigu"], ["xnj", "Ngoni (Tanzania)"], ["xnk", "Nganakarti"], ["xnm", "Ngumbarl"], ["xnn", "Northern Kankanay"], ["xno", "Anglo-Norman"], ["xnq", "Ngoni (Mozambique)"], ["xnr", "Kangri"], ["xns", "Kanashi"], ["xnt", "Narragansett"], ["xnu", "Nukunul"], ["xny", "Nyiyaparli"], ["xnz", "Kenzi, Mattoki"], ["xoc", "O'chi'chi'"], ["xod", "Kokoda"], ["xog", "Soga"], ["xoi", "Kominimung"], ["xok", "Xokleng"], ["xom", "Komo (Sudan)"], ["xon", "Konkomba"], ["xoo", "Xukurú"], ["xop", "Kopar"], ["xor", "Korubo"], ["xow", "Kowaki"], ["xpa", "Pirriya"], ["xpb", "Northeastern Tasmanian, Pyemmairrener"], ["xpc", "Pecheneg"], ["xpd", "Oyster Bay Tasmanian"], ["xpe", "Liberia Kpelle"], ["xpf", "Southeast Tasmanian, Nuenonne"], ["xpg", "Phrygian"], ["xph", "North Midlands Tasmanian, Tyerrenoterpanner"], ["xpi", "Pictish"], ["xpj", "Mpalitjanh"], ["xpk", "Kulina Pano"], ["xpl", "Port Sorell Tasmanian"], ["xpm", "Pumpokol"], ["xpn", "Kapinawá"], ["xpo", "Pochutec"], ["xpp", "Puyo-Paekche"], ["xpq", "Mohegan-Pequot"], ["xpr", "Parthian"], ["xps", "Pisidian"], ["xpt", "Punthamara"], ["xpu", "Punic"], ["xpv", "Northern Tasmanian, Tommeginne"], ["xpw", "Northwestern Tasmanian, Peerapper"], ["xpx", "Southwestern Tasmanian, Toogee"], ["xpy", "Puyo"], ["xpz", "Bruny Island Tasmanian"], ["xqa", "Karakhanid"], ["xqt", "Qatabanian"], ["xra", "Krahô"], ["xrb", "Eastern Karaboro"], ["xrd", "Gundungurra"], ["xre", "Kreye"], ["xrg", "Minang"], ["xri", "Krikati-Timbira"], ["xrm", "Armazic"], ["xrn", "Arin"], ["xrq", "Karranga"], ["xrr", "Raetic"], ["xrt", "Aranama-Tamique"], ["xru", "Marriammu"], ["xrw", "Karawa"], ["xsa", "Sabaean"], ["xsb", "Sambal"], ["xsc", "Scythian"], ["xsd", "Sidetic"], ["xse", "Sempan"], ["xsh", "Shamang"], ["xsi", "Sio"], ["xsj", "Subi"], ["xsl", "South Slavey"], ["xsm", "Kasem"], ["xsn", "Sanga (Nigeria)"], ["xso", "Solano"], ["xsp", "Silopi"], ["xsq", "Makhuwa-Saka"], ["xsr", "Sherpa"], ["xss", "Assan"], ["xsu", "Sanumá"], ["xsv", "Sudovian"], ["xsy", "Saisiyat"], ["xta", "Alcozauca Mixtec"], ["xtb", "Chazumba Mixtec"], ["xtc", "Katcha-Kadugli-Miri"], ["xtd", "Diuxi-Tilantongo Mixtec"], ["xte", "Ketengban"], ["xtg", "Transalpine Gaulish"], ["xth", "Yitha Yitha"], ["xti", "Sinicahua Mixtec"], ["xtj", "San Juan Teita Mixtec"], ["xtl", "Tijaltepec Mixtec"], ["xtm", "Magdalena Peñasco Mixtec"], ["xtn", "Northern Tlaxiaco Mixtec"], ["xto", "Tokharian A"], ["xtp", "San Miguel Piedras Mixtec"], ["xtq", "Tumshuqese"], ["xtr", "Early Tripuri"], ["xts", "Sindihui Mixtec"], ["xtt", "Tacahua Mixtec"], ["xtu", "Cuyamecalco Mixtec"], ["xtv", "Thawa"], ["xtw", "Tawandê"], ["xty", "Yoloxochitl Mixtec"], ["xtz", "Tasmanian"], ["xua", "Alu Kurumba"], ["xub", "Betta Kurumba"], ["xud", "Umiida"], ["xug", "Kunigami"], ["xuj", "Jennu Kurumba"], ["xul", "Ngunawal, Nunukul"], ["xum", "Umbrian"], ["xun", "Unggaranggu"], ["xuo", "Kuo"], ["xup", "Upper Umpqua"], ["xur", "Urartian"], ["xut", "Kuthant"], ["xuu", "Kxoe, Khwedam"], ["xve", "Venetic"], ["xvi", "Kamviri"], ["xvn", "Vandalic"], ["xvo", "Volscian"], ["xvs", "Vestinian"], ["xwa", "Kwaza"], ["xwc", "Woccon"], ["xwd", "Wadi Wadi"], ["xwe", "Xwela Gbe"], ["xwg", "Kwegu"], ["xwj", "Wajuk"], ["xwk", "Wangkumara"], ["xwl", "Western Xwla Gbe"], ["xwo", "Written Oirat"], ["xwr", "Kwerba Mamberamo"], ["xwt", "Wotjobaluk"], ["xww", "Wemba Wemba"], ["xxb", "Boro (Ghana)"], ["xxk", "Ke'o"], ["xxm", "Minkin"], ["xxr", "Koropó"], ["xxt", "Tambora"], ["xya", "Yaygir"], ["xyb", "Yandjibara"], ["xyj", "Mayi-Yapi"], ["xyk", "Mayi-Kulan"], ["xyl", "Yalakalore"], ["xyt", "Mayi-Thakurti"], ["xyy", "Yorta Yorta"], ["xzh", "Zhang-Zhung"], ["xzm", "Zemgalian"], ["xzp", "Ancient Zapotec"], ["yaa", "Yaminahua"], ["yab", "Yuhup"], ["yac", "Pass Valley Yali"], ["yad", "Yagua"], ["yae", "Pumé"], ["yaf", "Yaka (Democratic Republic of Congo)"], ["yag", "Yámana"], ["yah", "Yazgulyam"], ["yai", "Yagnobi"], ["yaj", "Banda-Yangere"], ["yak", "Yakama"], ["yal", "Yalunka"], ["yam", "Yamba"], ["yan", "Mayangna"], ["yao", "Yao"], ["yap", "Yapese"], ["yaq", "Yaqui"], ["yar", "Yabarana"], ["yas", "Nugunu (Cameroon)"], ["yat", "Yambeta"], ["yau", "Yuwana"], ["yav", "Yangben"], ["yaw", "Yawalapití"], ["yax", "Yauma"], ["yay", "Agwagwune"], ["yaz", "Lokaa"], ["yba", "Yala"], ["ybb", "Yemba"], ["ybd", "Yangbye"], ["ybe", "West Yugur"], ["ybh", "Yakha"], ["ybi", "Yamphu"], ["ybj", "Hasha"], ["ybk", "Bokha"], ["ybl", "Yukuben"], ["ybm", "Yaben"], ["ybn", "Yabaâna"], ["ybo", "Yabong"], ["ybx", "Yawiyo"], ["yby", "Yaweyuha"], ["ych", "Chesu"], ["ycl", "Lolopo"], ["ycn", "Yucuna"], ["ycp", "Chepya"], ["yda", "Yanda"], ["ydd", "Eastern Yiddish"], ["yde", "Yangum Dey"], ["ydg", "Yidgha"], ["ydk", "Yoidik"], ["yds", "Yiddish Sign Language"], ["yea", "Ravula"], ["yec", "Yeniche"], ["yee", "Yimas"], ["yei", "Yeni"], ["yej", "Yevanic"], ["yel", "Yela"], ["yen", "Yendang"], ["yer", "Tarok"], ["yes", "Nyankpa"], ["yet", "Yetfa"], ["yeu", "Yerukula"], ["yev", "Yapunda"], ["yey", "Yeyi"], ["yga", "Malyangapa"], ["ygi", "Yiningayi"], ["ygl", "Yangum Gel"], ["ygm", "Yagomi"], ["ygp", "Gepo"], ["ygr", "Yagaria"], ["ygs", "Yolŋu Sign Language"], ["ygu", "Yugul"], ["ygw", "Yagwoia"], ["yha", "Baha Buyang"], ["yhd", "Judeo-Iraqi Arabic"], ["yhl", "Hlepho Phowa"], ["yhs", "Yan-nhaŋu Sign Language"], ["yia", "Yinggarda"], ["yif", "Ache"], ["yig", "Wusa Nasu"], ["yih", "Western Yiddish"], ["yii", "Yidiny"], ["yij", "Yindjibarndi"], ["yik", "Dongshanba Lalo"], ["yil", "Yindjilandji"], ["yim", "Yimchungru Naga"], ["yin", "Riang Lai, Yinchia"], ["yip", "Pholo"], ["yiq", "Miqie"], ["yir", "North Awyu"], ["yis", "Yis"], ["yit", "Eastern Lalu"], ["yiu", "Awu"], ["yiv", "Northern Nisu"], ["yix", "Axi Yi"], ["yiy", "Yir Yoront"], ["yiz", "Azhe"], ["yka", "Yakan"], ["ykg", "Northern Yukaghir"], ["yki", "Yoke"], ["ykk", "Yakaikeke"], ["ykl", "Khlula"], ["ykm", "Kap"], ["ykn", "Kua-nsi"], ["yko", "Yasa"], ["ykr", "Yekora"], ["ykt", "Kathu"], ["yku", "Kuamasi"], ["yky", "Yakoma"], ["yla", "Yaul"], ["ylb", "Yaleba"], ["yle", "Yele"], ["ylg", "Yelogu"], ["yli", "Angguruk Yali"], ["yll", "Yil"], ["ylm", "Limi"], ["yln", "Langnian Buyang"], ["ylo", "Naluo Yi"], ["ylr", "Yalarnnga"], ["ylu", "Aribwaung"], ["yly", "Nyâlayu, Nyelâyu"], ["yma", "Yamphe"], ["ymb", "Yambes"], ["ymc", "Southern Muji"], ["ymd", "Muda"], ["yme", "Yameo"], ["ymg", "Yamongeri"], ["ymh", "Mili"], ["ymi", "Moji"], ["ymk", "Makwe"], ["yml", "Iamalele"], ["ymm", "Maay"], ["ymn", "Yamna, Sunum"], ["ymo", "Yangum Mon"], ["ymp", "Yamap"], ["ymq", "Qila Muji"], ["ymr", "Malasar"], ["yms", "Mysian"], ["ymt", "Mator-Taygi-Karagas"], ["ymx", "Northern Muji"], ["ymz", "Muzi"], ["yna", "Aluo"], ["ynd", "Yandruwandha"], ["yne", "Lang'e"], ["yng", "Yango"], ["ynh", "Yangho"], ["ynk", "Naukan Yupik"], ["ynl", "Yangulam"], ["ynn", "Yana"], ["yno", "Yong"], ["ynq", "Yendang"], ["yns", "Yansi"], ["ynu", "Yahuna"], ["yob", "Yoba"], ["yog", "Yogad"], ["yoi", "Yonaguni"], ["yok", "Yokuts"], ["yol", "Yola"], ["yom", "Yombe"], ["yon", "Yongkom"], ["yos", "Yos"], ["yot", "Yotti"], ["yox", "Yoron"], ["yoy", "Yoy"], ["ypa", "Phala"], ["ypb", "Labo Phowa"], ["ypg", "Phola"], ["yph", "Phupha"], ["ypk", "Yupik languages"], ["ypm", "Phuma"], ["ypn", "Ani Phowa"], ["ypo", "Alo Phola"], ["ypp", "Phupa"], ["ypz", "Phuza"], ["yra", "Yerakai"], ["yrb", "Yareba"], ["yre", "Yaouré"], ["yri", "Yarí"], ["yrk", "Nenets"], ["yrl", "Nhengatu"], ["yrm", "Yirrk-Mel"], ["yrn", "Yerong"], ["yro", "Yaroamë"], ["yrs", "Yarsun"], ["yrw", "Yarawata"], ["yry", "Yarluyandi"], ["ysc", "Yassic"], ["ysd", "Samatao"], ["ysg", "Sonaga"], ["ysl", "Yugoslavian Sign Language"], ["ysm", "Myanmar Sign Language"], ["ysn", "Sani"], ["yso", "Nisi (China)"], ["ysp", "Southern Lolopo"], ["ysr", "Sirenik Yupik"], ["yss", "Yessan-Mayo"], ["ysy", "Sanie"], ["yta", "Talu"], ["ytl", "Tanglang"], ["ytp", "Thopho"], ["ytw", "Yout Wam"], ["yty", "Yatay"], ["yua", "Yucateco, Yucatec Maya"], ["yub", "Yugambal"], ["yuc", "Yuchi"], ["yud", "Judeo-Tripolitanian Arabic"], ["yue", "Yue Chinese, Cantonese"], ["yuf", "Havasupai-Walapai-Yavapai"], ["yug", "Yug"], ["yui", "Yurutí"], ["yuj", "Karkar-Yuri"], ["yuk", "Yuki"], ["yul", "Yulu"], ["yum", "Quechan"], ["yun", "Bena (Nigeria)"], ["yup", "Yukpa"], ["yuq", "Yuqui"], ["yur", "Yurok"], ["yut", "Yopno"], ["yuu", "Yugh"], ["yuw", "Yau (Morobe Province)"], ["yux", "Southern Yukaghir"], ["yuy", "East Yugur"], ["yuz", "Yuracare"], ["yva", "Yawa"], ["yvt", "Yavitero"], ["ywa", "Kalou"], ["ywg", "Yinhawangka"], ["ywl", "Western Lalu"], ["ywn", "Yawanawa"], ["ywq", "Wuding-Luquan Yi"], ["ywr", "Yawuru"], ["ywt", "Xishanba Lalo, Central Lalo"], ["ywu", "Wumeng Nasu"], ["yww", "Yawarawarga"], ["yxa", "Mayawali"], ["yxg", "Yagara"], ["yxl", "Yardliyawarra"], ["yxm", "Yinwum"], ["yxu", "Yuyu"], ["yxy", "Yabula Yabula"], ["yyr", "Yir Yoront"], ["yyu", "Yau (Sandaun Province)"], ["yyz", "Ayizi"], ["yzg", "E'ma Buyang"], ["yzk", "Zokhuo"], ["zaa", "Sierra de Juárez Zapotec"], ["zab", "Western Tlacolula Valley Zapotec, San Juan Guelavía Zapotec"], ["zac", "Ocotlán Zapotec"], ["zad", "Cajonos Zapotec"], ["zae", "Yareni Zapotec"], ["zaf", "Ayoquesco Zapotec"], ["zag", "Zaghawa"], ["zah", "Zangwal"], ["zai", "Isthmus Zapotec"], ["zaj", "Zaramo"], ["zak", "Zanaki"], ["zal", "Zauzou"], ["zam", "Miahuatlán Zapotec"], ["zao", "Ozolotepec Zapotec"], ["zap", "Zapotec"], ["zaq", "Aloápam Zapotec"], ["zar", "Rincón Zapotec"], ["zas", "Santo Domingo Albarradas Zapotec"], ["zat", "Tabaa Zapotec"], ["zau", "Zangskari"], ["zav", "Yatzachi Zapotec"], ["zaw", "Mitla Zapotec"], ["zax", "Xadani Zapotec"], ["zay", "Zayse-Zergulla, Zaysete"], ["zaz", "Zari"], ["zba", "Balaibalan"], ["zbc", "Central Berawan"], ["zbe", "East Berawan"], ["zbl", "Blissymbols, Bliss, Blissymbolics"], ["zbt", "Batui"], ["zbu", "Bu (Bauchi State)"], ["zbw", "West Berawan"], ["zca", "Coatecas Altas Zapotec"], ["zch", "Central Hongshuihe Zhuang"], ["zdj", "Ngazidja Comorian"], ["zea", "Zeeuws"], ["zeg", "Zenag"], ["zeh", "Eastern Hongshuihe Zhuang"], ["zen", "Zenaga"], ["zga", "Kinga"], ["zgb", "Guibei Zhuang"], ["zgh", "Standard Moroccan Tamazight"], ["zgm", "Minz Zhuang"], ["zgn", "Guibian Zhuang"], ["zgr", "Magori"], ["zhb", "Zhaba"], ["zhd", "Dai Zhuang"], ["zhi", "Zhire"], ["zhn", "Nong Zhuang"], ["zhw", "Zhoa"], ["zhx", "Chinese (family)"], ["zia", "Zia"], ["zib", "Zimbabwe Sign Language"], ["zik", "Zimakani"], ["zil", "Zialo"], ["zim", "Mesme"], ["zin", "Zinza"], ["zir", "Ziriya"], ["ziw", "Zigula"], ["ziz", "Zizilivakan"], ["zka", "Kaimbulawa"], ["zkb", "Koibal"], ["zkd", "Kadu"], ["zkg", "Koguryo"], ["zkh", "Khorezmian"], ["zkk", "Karankawa"], ["zkn", "Kanan"], ["zko", "Kott"], ["zkp", "São Paulo Kaingáng"], ["zkr", "Zakhring"], ["zkt", "Kitan"], ["zku", "Kaurna"], ["zkv", "Krevinian"], ["zkz", "Khazar"], ["zla", "Zula"], ["zle", "East Slavic languages"], ["zlj", "Liujiang Zhuang"], ["zlm", "Malay (individual language)"], ["zln", "Lianshan Zhuang"], ["zlq", "Liuqian Zhuang"], ["zls", "South Slavic languages"], ["zlw", "West Slavic languages"], ["zma", "Manda (Australia)"], ["zmb", "Zimba"], ["zmc", "Margany"], ["zmd", "Maridan"], ["zme", "Mangerr"], ["zmf", "Mfinu"], ["zmg", "Marti Ke"], ["zmh", "Makolkol"], ["zmi", "Negeri Sembilan Malay"], ["zmj", "Maridjabin"], ["zmk", "Mandandanyi"], ["zml", "Matngala"], ["zmm", "Marimanindji, Marramaninyshi"], ["zmn", "Mbangwe"], ["zmo", "Molo"], ["zmp", "Mpuono"], ["zmq", "Mituku"], ["zmr", "Maranunggu"], ["zms", "Mbesa"], ["zmt", "Maringarr"], ["zmu", "Muruwari"], ["zmv", "Mbariman-Gudhinma"], ["zmw", "Mbo (Democratic Republic of Congo)"], ["zmx", "Bomitaba"], ["zmy", "Mariyedi"], ["zmz", "Mbandja"], ["zna", "Zan Gula"], ["znd", "Zande languages"], ["zne", "Zande (individual language)"], ["zng", "Mang"], ["znk", "Manangkari"], ["zns", "Mangas"], ["zoc", "Copainalá Zoque"], ["zoh", "Chimalapa Zoque"], ["zom", "Zou"], ["zoo", "Asunción Mixtepec Zapotec"], ["zoq", "Tabasco Zoque"], ["zor", "Rayón Zoque"], ["zos", "Francisco León Zoque"], ["zpa", "Lachiguiri Zapotec"], ["zpb", "Yautepec Zapotec"], ["zpc", "Choapan Zapotec"], ["zpd", "Southeastern Ixtlán Zapotec"], ["zpe", "Petapa Zapotec"], ["zpf", "San Pedro Quiatoni Zapotec"], ["zpg", "Guevea De Humboldt Zapotec"], ["zph", "Totomachapan Zapotec"], ["zpi", "Santa María Quiegolani Zapotec"], ["zpj", "Quiavicuzas Zapotec"], ["zpk", "Tlacolulita Zapotec"], ["zpl", "Lachixío Zapotec"], ["zpm", "Mixtepec Zapotec"], ["zpn", "Santa Inés Yatzechi Zapotec"], ["zpo", "Amatlán Zapotec"], ["zpp", "El Alto Zapotec"], ["zpq", "Zoogocho Zapotec"], ["zpr", "Santiago Xanica Zapotec"], ["zps", "Coatlán Zapotec"], ["zpt", "San Vicente Coatlán Zapotec"], ["zpu", "Yalálag Zapotec"], ["zpv", "Chichicapan Zapotec"], ["zpw", "Zaniza Zapotec"], ["zpx", "San Baltazar Loxicha Zapotec"], ["zpy", "Mazaltepec Zapotec"], ["zpz", "Texmelucan Zapotec"], ["zqe", "Qiubei Zhuang"], ["zra", "Kara (Korea)"], ["zrg", "Mirgan"], ["zrn", "Zerenkel"], ["zro", "Záparo"], ["zrp", "Zarphatic"], ["zrs", "Mairasi"], ["zsa", "Sarasira"], ["zsk", "Kaskean"], ["zsl", "Zambian Sign Language"], ["zsm", "Standard Malay"], ["zsr", "Southern Rincon Zapotec"], ["zsu", "Sukurum"], ["zte", "Elotepec Zapotec"], ["ztg", "Xanaguía Zapotec"], ["ztl", "Lapaguía-Guivini Zapotec"], ["ztm", "San Agustín Mixtepec Zapotec"], ["ztn", "Santa Catarina Albarradas Zapotec"], ["ztp", "Loxicha Zapotec"], ["ztq", "Quioquitani-Quierí Zapotec"], ["zts", "Tilquiapan Zapotec"], ["ztt", "Tejalapan Zapotec"], ["ztu", "Güilá Zapotec"], ["ztx", "Zaachila Zapotec"], ["zty", "Yatee Zapotec"], ["zua", "Zeem"], ["zuh", "Tokano"], ["zum", "Kumzari"], ["zun", "Zuni"], ["zuy", "Zumaya"], ["zwa", "Zay"], ["zxx", "No linguistic content, Not applicable"], ["zyb", "Yongbei Zhuang"], ["zyg", "Yang Zhuang"], ["zyj", "Youjiang Zhuang"], ["zyn", "Yongnan Zhuang"], ["zyp", "Zyphe Chin"], ["zza", "Zaza, Dimili, Dimli (macrolanguage), Kirdki, Kirmanjki (macrolanguage), Zazaki"], ["zzj", "Zuojiang Zhuang"]];

  const getLanguageLabel = (langCode) => __awaiter(void 0, void 0, void 0, function* () {
      var _a;
      const [realLangCode, script] = langCode.split('-');
      const scriptMapping = {
          'latn': t.direct('Latin').toString(),
          'cyrl': t.direct('Cyrillic').toString()
      };
      const language = languages.find(language => language[0] === realLangCode);
      return (language === null || language === void 0 ? void 0 : language[1]) ? `${language[1]}${script ? ` (${(_a = scriptMapping === null || scriptMapping === void 0 ? void 0 : scriptMapping[script.toLowerCase()]) !== null && _a !== void 0 ? _a : script})` : ''}` : langCode;
  });
  const langCodesToObject = (langCodes) => __awaiter(void 0, void 0, void 0, function* () {
      const languages = {};
      for (const langCode of langCodes) {
          languages[langCode] = yield getLanguageLabel(langCode);
      }
      return languages;
  });
  let currentUiLanguage = 'en';
  let currentL10nLanguage;
  let uiLanguages = { 'en': 'English' };
  let l10nLanguages = { 'en': 'English' };
  let requiredL10nLanguages = [];
  class LanguageService extends EventTarget {
      constructor() {
          super();
          this.ready = false;
      }
      init(rdfForm) {
          return __awaiter(this, void 0, void 0, function* () {
              yield this.setUiLanguage('en');
              const continueInit = () => __awaiter(this, void 0, void 0, function* () {
                  var _a, _b, _c;
                  const usedLanguages = yield this.extractUsedLanguages(rdfForm.formData.proxy);
                  const defaultLanguages = (_a = JSON.parse(rdfForm.getAttribute('languages'))) !== null && _a !== void 0 ? _a : (usedLanguages.length ? yield langCodesToObject(usedLanguages) : {});
                  const parsedLanguages = JSON.parse(rdfForm.getAttribute('l10n-languages'));
                  this.l10nLanguages = Object.assign({}, parsedLanguages, defaultLanguages);
                  if (rdfForm.getAttribute('required-l10n-languages')) {
                      requiredL10nLanguages = rdfForm.getAttribute('required-l10n-languages').split(',');
                  }
                  if (rdfForm.getAttribute('selected-l10n-language') && rdfForm.getAttribute('selected-l10n-language').toLowerCase() in this.l10nLanguages) {
                      this.l10nLanguage = rdfForm.getAttribute('selected-l10n-language').toLowerCase();
                  }
                  this.uiLanguages = (_b = JSON.parse(rdfForm.getAttribute('ui-languages'))) !== null && _b !== void 0 ? _b : {};
                  yield this.setUiLanguage((_c = rdfForm.getAttribute('selected-language')) !== null && _c !== void 0 ? _c : 'en');
                  this.ready = true;
                  this.dispatchEvent(new CustomEvent('ready'));
              });
              rdfForm.formData.ready ? continueInit() : rdfForm.formData.addEventListener('ready', continueInit, { once: true });
          });
      }
      get requiredL10nLanguages() {
          return requiredL10nLanguages;
      }
      get uiLanguage() {
          return currentUiLanguage;
      }
      setUiLanguage(languageCode) {
          return __awaiter(this, void 0, void 0, function* () {
              currentUiLanguage = languageCode;
              t = yield I18n(languageCode, 'RdfForm', Object.keys(this.uiLanguages), 'en');
              this.dispatchEvent(new CustomEvent('language-change'));
          });
      }
      set l10nLanguage(langCode) {
          currentL10nLanguage = langCode;
          this.dispatchEvent(new CustomEvent('l10n-change', {
              detail: langCode
          }));
      }
      get l10nLanguage() {
          return currentL10nLanguage;
      }
      set l10nLanguages(languages) {
          const oldLanguageCodes = Object.keys(l10nLanguages);
          const newLanguageCodes = Object.keys(languages);
          let languageCodesToAdd = newLanguageCodes.filter(x => !oldLanguageCodes.includes(x));
          let languageCodesToDelete = oldLanguageCodes.filter(x => !newLanguageCodes.includes(x));
          if (languageCodesToDelete.includes(currentL10nLanguage)) {
              currentL10nLanguage = newLanguageCodes[0];
          }
          for (const langCode of languageCodesToAdd) {
              this.dispatchEvent(new CustomEvent('this.added', {
                  detail: langCode
              }));
          }
          for (const langCode of languageCodesToDelete) {
              this.dispatchEvent(new CustomEvent('this.removed', {
                  detail: langCode
              }));
          }
          l10nLanguages = languages;
          if (!currentL10nLanguage) {
              currentL10nLanguage = Object.keys(l10nLanguages)[0];
          }
      }
      get l10nLanguages() {
          return l10nLanguages;
      }
      set uiLanguages(languages) {
          uiLanguages = languages;
      }
      get uiLanguages() {
          return uiLanguages;
      }
      multilingualValue(values, type = 'ui') {
          var _a, _b, _c;
          if (!Array.isArray(values))
              values = [values];
          const currentLanguageMatch = values.find(value => value['@language'] === (type === 'ui' ? this.uiLanguage : this.l10nLanguage));
          const fallbackNoLanguageMatch = values.find(value => !value['@language']);
          return (_c = (_b = (_a = currentLanguageMatch === null || currentLanguageMatch === void 0 ? void 0 : currentLanguageMatch['@value']) !== null && _a !== void 0 ? _a : fallbackNoLanguageMatch === null || fallbackNoLanguageMatch === void 0 ? void 0 : fallbackNoLanguageMatch['@value']) !== null && _b !== void 0 ? _b : currentLanguageMatch === null || currentLanguageMatch === void 0 ? void 0 : currentLanguageMatch['@id']) !== null && _c !== void 0 ? _c : fallbackNoLanguageMatch === null || fallbackNoLanguageMatch === void 0 ? void 0 : fallbackNoLanguageMatch['@id'];
      }
      extractUsedLanguages(jsonLd) {
          const languageCodes = new Set();
          const process = (thing) => {
              if (!thing)
                  return;
              const iterateble = Array.isArray(thing) ? thing.entries() : Object.entries(thing);
              for (const [key, value] of iterateble) {
                  if (key === '@language')
                      languageCodes.add(value);
                  if (typeof value !== 'string')
                      process(value);
              }
          };
          process(jsonLd);
          return [...languageCodes.values()];
      }
  }
  const Language = new LanguageService();
  let t;

  const only = (...type) => {
      return (item) => { var _a; return (_a = item['@type']) === null || _a === void 0 ? void 0 : _a.some(rdfClass => type.includes(lastPart(rdfClass))); };
  };
  class FormDefinition extends EventTarget {
      constructor(form) {
          super();
          this.sourceDefinitionCompacted = {};
          this.context = { form: null };
          this.ready = false;
          this.chain = new Map();
          this.chainReferences = new Map();
          this.ontology = [];
          this.form = form;
          this.formUrl = this.form.getAttribute('form');
          if (!this.formUrl)
              throw new Error('No data attribute "form" was found on the custom element.');
          this.init();
      }
      init() {
          var _a;
          return __awaiter(this, void 0, void 0, function* () {
              const proxy = (_a = this.form.getAttribute('proxy')) !== null && _a !== void 0 ? _a : '';
              this.roles = this.form.getAttribute('roles') ? this.form.getAttribute('roles').split(',') : [];
              const definitionResponse = yield fetch(proxy + this.formUrl.replace('http:', location.protocol));
              const definitionTurtle = yield definitionResponse.text();
              this.sourceDefinitionCompacted = ttl2jsonld(definitionTurtle);
              Object.assign(this.context, this.sourceDefinitionCompacted['@context']);
              if (!this.context.form)
                  throw new Error('The prefix form was not found in the form definition.');
              if (!this.sourceDefinitionCompacted['@graph'])
                  throw new Error('Missing fields inside form definition');
              this.sourceDefinitionExpanded = JsonLdProxy(yield jsonld.expand(this.sourceDefinitionCompacted), this.context, {
                  '_': (value) => Language.multilingualValue(value, 'ui')
              });
              yield this.resolveSubForms(this.sourceDefinitionExpanded);
              if (!this.info)
                  throw new Error('The form definition did not define a form itself.');
              const ontologyCompacted = yield fetch(proxy + this.context.form.replace('http:', location.protocol)).then((response) => __awaiter(this, void 0, void 0, function* () { return ttl2jsonld(yield response.text()); }));
              Object.assign(this.context, ontologyCompacted['@context']);
              this.ontology = JsonLdProxy(yield jsonld.expand(ontologyCompacted), this.context);
              this.chain = this.createChain();
              this.ready = true;
              this.dispatchEvent(new CustomEvent('ready'));
          });
      }
      get prefix() {
          return this.context.form;
      }
      get info() {
          return this.sourceDefinitionExpanded.find(only('Form'));
      }
      get fieldsToRemove() {
          var _a, _b, _c, _d;
          const formRemovals = JSON.parse((_a = this.form.getAttribute('fields-to-remove')) !== null && _a !== void 0 ? _a : '[]');
          return (_d = [...((_c = (_b = this.info['form:remove']) === null || _b === void 0 ? void 0 : _b.map(item => item._)) !== null && _c !== void 0 ? _c : []), ...formRemovals].map(collapsed => expand(collapsed, this.context))) !== null && _d !== void 0 ? _d : [];
      }
      get fields() {
          return this.sourceDefinitionExpanded.filter(only('Field'))
              .filter(field => !this.fieldsToRemove.includes(field['@id']));
      }
      get elements() {
          return this.sourceDefinitionExpanded.filter(only('Field', 'Container', 'UiComponent'))
              .filter(field => !this.fieldsToRemove.includes(field['@id']));
      }
      resolveSubForms(formDefinition) {
          var _a, _b, _c, _d, _e;
          return __awaiter(this, void 0, void 0, function* () {
              const proxy = (_a = this.form.getAttribute('proxy')) !== null && _a !== void 0 ? _a : '';
              const fields = formDefinition.filter(only('Field'));
              for (const field of fields) {
                  const subformUrl = field['form:subform'];
                  if ((subformUrl === null || subformUrl === void 0 ? void 0 : subformUrl.length) > 1)
                      throw new Error('Multiple sub forms were found for one field.');
                  if (subformUrl) {
                      const subformResponse = yield fetch(proxy + subformUrl._.replace('http:', location.protocol));
                      const subformTurtle = yield subformResponse.text();
                      const subformDefinitionCompacted = ttl2jsonld(subformTurtle);
                      const subformDefinitionExpanded = JsonLdProxy(yield jsonld.expand(subformDefinitionCompacted), subformDefinitionCompacted['@context'], {
                          '_': (value) => Language.multilingualValue(value, 'ui')
                      });
                      yield this.resolveSubForms(subformDefinitionExpanded);
                      Object.assign(this.context, subformDefinitionCompacted['@context']);
                      for (const subFormfield of subformDefinitionExpanded) {
                          if (field['form:container']) {
                              subFormfield['form:container'] = field['form:container'].$;
                          }
                          if ((_b = field['form:order']) === null || _b === void 0 ? void 0 : _b._) {
                              subFormfield['form:order'] = [{ '@value': ((_d = (_c = field['form:order']) === null || _c === void 0 ? void 0 : _c._) !== null && _d !== void 0 ? _d : 0) + parseFloat('0.' + ((_e = subFormfield['form:order']) === null || _e === void 0 ? void 0 : _e._)) }];
                          }
                      }
                      const fieldIndex = formDefinition.map(field => field.$).indexOf(field.$);
                      formDefinition.$.splice(fieldIndex, 1, ...subformDefinitionExpanded.map(field => field.$));
                  }
              }
              return formDefinition;
          });
      }
      applyFieldAccessRoles(fields) {
          return fields.filter(field => {
              if (field['form:access']) {
                  return this.roles.some(userRole => field['form:access'].map(role => role['@id']).includes(userRole));
              }
              return true;
          });
      }
      createChain() {
          const recursiveChainCreator = (fields) => {
              var _a, _b;
              const chain = new Map();
              fields.sort((a, b) => { var _a, _b, _c, _d; return ((_b = (_a = a['form:order']) === null || _a === void 0 ? void 0 : _a._) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = b['form:order']) === null || _c === void 0 ? void 0 : _c._) !== null && _d !== void 0 ? _d : 0); });
              for (const field of fields) {
                  const fieldBindings = this.getBindingsOfField(field);
                  let children = [];
                  if (((_a = field['form:widget']) === null || _a === void 0 ? void 0 : _a._) === 'group' || lastPart(field['@type'][0]) === 'Container') {
                      const nestingType = ((_b = field['form:widget']) === null || _b === void 0 ? void 0 : _b._) === 'group' ? 'group' : 'container';
                      children = this.applyFieldAccessRoles(this.elements.filter(innerField => { var _a; return ((_a = innerField === null || innerField === void 0 ? void 0 : innerField[`form:${nestingType}`]) === null || _a === void 0 ? void 0 : _a._) === lastPart(field['@id']); }));
                  }
                  chain.set(fieldBindings.length ? fieldBindings : field.$, [field, recursiveChainCreator(children)]);
              }
              return chain;
          };
          const firstLevelFields = this.applyFieldAccessRoles(this.elements.filter(field => !field['form:group'] && !field['form:container']));
          return recursiveChainCreator(firstLevelFields);
      }
      getBindingsOfField(field) {
          const bindings = [];
          for (const [fieldProperty, propertySetting] of Object.entries(field)) {
              const fieldMetaProperties = this.ontology.find(predicate => lastPart(predicate === null || predicate === void 0 ? void 0 : predicate['@id']) === lastPart(fieldProperty));
              if (fieldMetaProperties && fieldMetaProperties['form:isBindingProperty'] && Array.isArray(propertySetting)) {
                  bindings.push(...propertySetting.$.flatMap(item => item['@id']));
              }
          }
          return bindings;
      }
  }

  const isFetchable = (string) => {
      return string.startsWith('http') || string.startsWith('blob') || string.substr(0, 1) === '/';
  };

  class RdfFormData extends EventTarget {
      constructor(form) {
          super();
          this.ready = false;
          this.proxy = { $: null };
          this.form = form;
          this.formDefinition = this.form.formDefinition;
          this.dataAsTextOrUrl = this.form.getAttribute('data');
          this.formDefinition.addEventListener('ready', () => this.init());
      }
      init() {
          var _a;
          return __awaiter(this, void 0, void 0, function* () {
              let dataText;
              if (!this.dataAsTextOrUrl)
                  this.sourceData = [];
              if (this.dataAsTextOrUrl && isFetchable(this.dataAsTextOrUrl)) {
                  const dataResponse = yield fetch(this.dataAsTextOrUrl);
                  dataText = yield dataResponse.text();
              }
              else {
                  dataText = this.dataAsTextOrUrl;
              }
              try {
                  this.sourceDataCompacted = JSON.parse(dataText);
              }
              catch (e) {
                  this.sourceDataCompacted = ttl2jsonld(dataText);
              }
              this.sourceData = yield jsonld.expand(this.sourceDataCompacted);
              if (Array.isArray(this.sourceData))
                  this.sourceData = this.sourceData.pop();
              if (!this.sourceData)
                  this.sourceData = {};
              if (!((_a = this.sourceData) === null || _a === void 0 ? void 0 : _a['@type']))
                  this.sourceData['@type'] = this.formDefinition.info['form:binding'].map(rdfClass => rdfClass['@id']);
              this.createProxy();
              this.ready = true;
              this.dispatchEvent(new CustomEvent('ready'));
          });
      }
      get context() {
          var _a;
          return Object.assign({}, this.formDefinition.context, (_a = this.sourceDataCompacted) === null || _a === void 0 ? void 0 : _a['@context']);
      }
      createProxy() {
          const context = this.context;
          this.proxy = JsonLdProxy(this.sourceData, context, {
              '_': (value) => Language.multilingualValue(value, 'l10n')
          });
      }
  }

  class Registry extends EventTarget {
      constructor(rdfForm) {
          super();
          this.ready = false;
          this.registeredFieldClasses = {};
          this.form = rdfForm;
          this.init();
      }
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              const event = new CustomEvent('register-elements', { detail: { fields: [] } });
              this.form.dispatchEvent(event);
              Object.assign(this.registeredFieldClasses, event.detail.fields);
              this.ready = true;
              this.dispatchEvent(new CustomEvent('ready'));
          });
      }
      setupElement(definition, bindings, value = null, itemValues = {}, parentValues = null, render = () => null, parent, index = null, children = []) {
          var _a, _b, _c;
          return __awaiter(this, void 0, void 0, function* () {
              const widget = ((_a = definition['form:widget']) === null || _a === void 0 ? void 0 : _a._) && this.registeredFieldClasses[(_b = definition['form:widget']) === null || _b === void 0 ? void 0 : _b._] ? definition['form:widget']._ : 'unknown';
              let elementClass = this.registeredFieldClasses[widget];
              if (!elementClass) {
                  console.log(this.registeredFieldClasses);
                  throw new Error('Unknown widget type: ' + ((_c = definition['form:widget']) === null || _c === void 0 ? void 0 : _c._));
              }
              return new elementClass(definition, bindings, value, itemValues, parentValues, render, parent, index, children);
          });
      }
  }

  var isArray = Array.isArray;

  var sync = function sync(values, i) {
    var resolved = [];

    for (var length = values.length; i < length; i++) {
      resolved.push(isArray(values[i]) ? sync(values[i], 0) : values[i]);
    }

    return Promise.all(resolved);
  };
  /**
   * Returns a template literal tag abe to resolve, recursively, any possible
   * asynchronous interpolation.
   * @param {function} tag a template literal tag.
   * @returns {function} a template literal tag that resolves interpolations
   *                     before passing these to the initial template literal.
   */


  var cjs = function cjs(tag) {
    function invoke(template, values) {
      return tag.apply(this, [template].concat(values));
    }

    return function (template) {
      return sync(arguments, 1).then(invoke.bind(this, template));
    };
  };

  var defineProperties = Object.defineProperties;

  var tag = function tag(original) {
    var wrap = cjs$5(new WeakMap());
    return defineProperties(cjs(original), {
      "for": {
        value: function value(ref, id) {
          var tag = original["for"](ref, id);
          return wrap.get(tag) || wrap.set(tag, cjs(tag));
        }
      },
      node: {
        value: cjs(original.node)
      }
    });
  };

  var html = tag(html$1);
  tag(svg);
  var render = function render(where, what) {
    var hole = typeof what === 'function' ? what() : what;
    return Promise.resolve(hole).then(function (what) {
      return render$1(where, what);
    });
  };

  const flatMapProxy = (data, binding) => {
      const flat = data.flatMap(item => item[binding]);
      return new Proxy(data, {
          get(target, prop, receiver) {
              if (prop === '_proxyType')
                  return 'flatMapProxy';
              return Reflect.get(flat, prop, receiver);
          },
          has(target, prop) {
              return Reflect.has(flat, prop);
          },
          deleteProperty(target, prop) {
              return true;
          }
      });
  };

  const containerProxy = (data, mainBinding) => {
      return new Proxy(data, {
          get: function (target, prop) {
              if (prop === '_proxyType')
                  return 'containerProxy';
              if (!data[mainBinding])
                  return false;
              return Reflect.get(data[mainBinding], prop);
          },
          has: function (target, prop) {
              if (!data[mainBinding])
                  return false;
              return Reflect.has(data[mainBinding], prop);
          },
          set: function (target, prop, value) {
              if (!data[mainBinding]) {
                  data[mainBinding] = [{ '@list': [] }];
                  return true;
              }
              else {
                  return Reflect.set(data[mainBinding], prop, value);
              }
          }
      });
  };

  var rdfForm = ".actions {\n  display: flex;\n  gap: 10px;\n}\n.actions.top > .language-switcher {\n  flex: 0 0 130px;\n  margin-left: auto;\n}\n\ninput, textarea, select {\n  flex: 1 1 auto;\n  padding: 8px;\n  border: 1px solid var(--color-gray);\n  border-radius: var(--radius);\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput[readonly] {\n  background: none;\n  border: none;\n  position: relative;\n  top: 1px;\n  outline: none;\n  padding: 0;\n  line-height: 30px;\n}\n\n:host > * {\n  margin-bottom: 25px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.svg-inline--fa.fa-w-8 {\n  width: 8px;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 10px;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 11px;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 14px;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 16px;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 20px;\n}\n\n.button {\n  padding: 10px;\n  border-radius: var(--radius);\n  background: var(--color-gray);\n  cursor: pointer;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.button.big {\n  padding: 20px 40px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.button.primary {\n  background: var(--color-primary);\n}\n.button.secondary {\n  background: var(--color-secondary);\n}\n.button.danger {\n  background: var(--color-danger);\n  color: white;\n}\n.button.danger svg path {\n  fill: white;\n}\n.button svg {\n  display: block;\n  pointer-events: none;\n}\n.button.is-working {\n  position: relative;\n  background: var(--color-primary-darker);\n  color: white;\n}\n.button.is-working:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  z-index: 1;\n  background-size: 37px;\n  animation: move 2s linear infinite;\n  overflow: hidden;\n}\n.button:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease-in-out;\n}\n.button:hover:after {\n  opacity: 0.2;\n}\n\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 50px 50px;\n  }\n}\n.icon-button {\n  cursor: pointer;\n}\n.icon-button svg {\n  position: relative;\n  top: 3px;\n}\n\n.label {\n  font-weight: bold;\n  padding-bottom: 10px;\n  display: flex;\n  align-items: flex-end;\n}\n.label small {\n  color: var(--color-gray-medium);\n  font-weight: normal;\n}\n\n.label-required-star {\n  margin-left: 5px;\n}\n\n.form-element {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  margin-bottom: 10px;\n  flex: 1 1 auto;\n}\n.form-element .description {\n  font-size: 14px;\n  margin-bottom: 10px;\n  margin-inline: 5px;\n  line-height: 22px;\n  font-style: italic;\n  color: var(--color-gray-medium);\n}\n.form-element > .label {\n  height: 46px;\n}\n.form-element textarea:invalid,\n.form-element input:invalid {\n  box-shadow: none;\n}\n\n.items {\n  padding: 5px;\n  margin-bottom: 10px;\n  background: var(--background-color);\n  border-radius: var(--radius);\n}\n\n.item {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 5px;\n  position: relative;\n  align-items: flex-start;\n}\n.item:not(:last-child) {\n  border-bottom: 1px dashed var(--color-gray);\n}\n.item:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 5px;\n  left: 3px;\n  width: calc(100% - 6px);\n  height: calc(100% - 10px);\n  pointer-events: none;\n}\n.item[loading=true]:after {\n  background: linear-gradient(-45deg, rgba(200, 200, 200, 0.2) 25%, transparent 25%, transparent 50%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.2) 75%, transparent 75%, transparent);\n  z-index: 1;\n  background-size: 50px 50px;\n  animation: move 2s linear infinite;\n}\n.item .button {\n  height: 35px;\n  width: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item .sub-item {\n  flex: 1 1 10%;\n}\n.item .sub-item select {\n  width: 100%;\n}\n.item .sub-item input {\n  box-sizing: content-box;\n  width: calc(100% - 20px);\n}\n\n.item-footer {\n  flex: 0 0 100%;\n}\n\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 50px 50px;\n  }\n}\n.form-element.no-label > .items {\n  padding: 0;\n  margin-inline: -5px;\n}\n\n:host {\n  --radius: 4px;\n  --background-color: #eef6f4;\n  --background-color-secondary: #dbdbdb;\n  --color-gray-light: #ecebeb;\n  --color-gray: #c3c3c3;\n  --color-gray-dark: #827575;\n  --color-gray-blue: #f3f5f9;\n  --color-gray-medium: #908989;\n  --color-primary: #99e9ab;\n  --color-primary-darker: #45a35b;\n  --color-secondary: #b0c6b4;\n  --color-danger: #cd4d4d;\n  --color-text: #102406;\n  font-family: \"Helvetica Neue\", sans-serif;\n  margin: 0 auto;\n  display: block;\n  color: var(--color-text);\n}\n\n.search-suggestions {\n  flex: 0 0 100%;\n  padding: 0;\n  background: white;\n  margin: 0;\n  margin-top: 10px;\n  list-style: none;\n  border: 1px solid var(--color-gray);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.search-suggestions .search-suggestion {\n  display: flex;\n  align-items: center;\n}\n.search-suggestions .search-suggestion .image {\n  width: 40px;\n  height: 40px;\n  display: block;\n  margin-right: 10px;\n  background: var(--color-gray);\n}\n.search-suggestions .search-suggestion .image img {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n}\n.search-suggestions .search-suggestion .title {\n  padding: 10px;\n}\n.search-suggestions .search-suggestion:not(.no-results):hover {\n  cursor: pointer;\n  background: var(--background-color);\n}\n.search-suggestions .search-suggestion.no-results {\n  cursor: default;\n}\n.search-suggestions .search-suggestion + .search-suggestion {\n  border-top: 1px dashed var(--color-gray);\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n  background: white;\n}\nselect:not([multiple]) {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"gray\" d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\"></path></svg>');\n  background-repeat: no-repeat;\n  background-size: 14px;\n  background-position: calc(100% - 10px) center;\n  padding-right: 30px;\n}\n\n.ss-main {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  color: var(--color-text);\n  width: 100%;\n}\n.ss-main .ss-single-selected {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid var(--color-gray);\n  background-color: white;\n  outline: 0;\n  box-sizing: border-box;\n  transition: background-color 0.2s;\n}\n.ss-main .ss-single-selected.ss-disabled {\n  background-color: var(--color-gray-light);\n  cursor: not-allowed;\n}\n.ss-main .ss-single-selected.ss-open-above {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.ss-main .ss-single-selected.ss-open-below {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ss-main .ss-single-selected .placeholder {\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n  width: calc(100% - 30px);\n  line-height: 1em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.ss-main .ss-single-selected .placeholder * {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: auto;\n}\n.ss-main .ss-single-selected .placeholder .ss-disabled {\n  color: var(--color-gray-light);\n}\n.ss-main .ss-single-selected .ss-deselect {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 1 auto;\n  margin: 0 6px 0 6px;\n  font-weight: bold;\n}\n.ss-main .ss-single-selected .ss-deselect.ss-hide {\n  display: none;\n}\n.ss-main .ss-single-selected .ss-arrow {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 1 auto;\n  margin: 0 6px 0 6px;\n}\n.ss-main .ss-single-selected .ss-arrow span {\n  border: solid var(--color-text);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 3px;\n  transition: transform 0.2s, margin 0.2s;\n}\n.ss-main .ss-single-selected .ss-arrow span.arrow-up {\n  transform: rotate(-135deg);\n  margin: 3px 0 0 0;\n}\n.ss-main .ss-single-selected .ss-arrow span.arrow-down {\n  transform: rotate(45deg);\n  margin: -3px 0 0 0;\n}\n.ss-main .ss-multi-selected {\n  display: flex;\n  min-height: 33px;\n  flex-direction: row;\n  border: solid 1px var(--color-gray);\n  background: white;\n  border-radius: var(--radius);\n}\n.ss-main .ss-multi-selected.ss-disabled {\n  background-color: var(--color-gray-light);\n  cursor: not-allowed;\n}\n.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {\n  color: var(--color-text);\n}\n.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {\n  cursor: not-allowed;\n}\n.ss-main .ss-multi-selected.ss-open-above {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.ss-main .ss-multi-selected.ss-open-below {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ss-main .ss-multi-selected .ss-values {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  flex: 1 1 100%;\n  padding: 4px;\n  width: calc(100% - 30px);\n}\n.ss-main .ss-multi-selected .ss-values .ss-disabled {\n  display: flex;\n  padding: 4px 5px;\n  font-size: 16px;\n  margin: 2px 0;\n  line-height: 1em;\n  align-items: center;\n  width: 100%;\n  color: var(--color-gray-light);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ss-main .ss-multi-selected .ss-values .ss-value {\n  display: flex;\n  user-select: none;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 6px;\n  margin: 2px 5px 2px 0;\n  color: var(--text);\n  background-color: var(--color-gray);\n  border-radius: var(--radius);\n}\n.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {\n  margin: 0 0 0 5px;\n  cursor: pointer;\n}\n.ss-main .ss-multi-selected .ss-add {\n  display: flex;\n  flex: 0 1 3px;\n  align-items: center;\n  margin-right: 16px;\n}\n.ss-main .ss-multi-selected .ss-add .ss-plus {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--color-gray-medium);\n  position: relative;\n  height: 15px;\n  width: 3px;\n  transition: transform 0.2s;\n}\n.ss-main .ss-multi-selected .ss-add .ss-plus:after {\n  background: var(--color-gray-medium);\n  content: \"\";\n  position: absolute;\n  height: 3px;\n  width: 15px;\n  left: -6px;\n  top: 6px;\n}\n.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {\n  transform: rotate(45deg);\n}\n\n.ss-content {\n  position: absolute;\n  width: 100%;\n  margin: -1px 0 0 0;\n  box-sizing: border-box;\n  border: solid 1px var(--color-gray);\n  z-index: 1010;\n  background-color: white;\n  transform-origin: center top;\n  transition: transform 0.2s, opacity 0.2s;\n  opacity: 0;\n  transform: scaleY(0);\n}\n.ss-content.ss-open {\n  display: block;\n  opacity: 1;\n  transform: scaleY(1);\n}\n.ss-content .ss-search {\n  display: flex;\n  flex-direction: row;\n}\n.ss-content .ss-search.ss-hide {\n  height: 0;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n}\n.ss-content .ss-search.ss-hide input {\n  height: 0;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n}\n.ss-content .ss-search input {\n  display: inline-flex;\n  font-size: inherit;\n  line-height: inherit;\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n  height: 30px;\n  padding: 6px 8px;\n  margin: 0;\n  border: none;\n  background-color: white;\n  outline: 0;\n  text-align: left;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: textfield;\n}\n.ss-content .ss-search input:focus {\n  box-shadow: none;\n}\n.ss-content .ss-search input::placeholder {\n  vertical-align: middle;\n}\n.ss-content .ss-search .ss-addable {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 22px;\n  font-weight: bold;\n  flex: 0 0 30px;\n  height: 30px;\n  color: var(--color-gray-medium);\n  margin: 0 3px 0 12px;\n  border-radius: var(--radius);\n  box-sizing: border-box;\n}\n.ss-content .ss-addable {\n  padding-top: 0;\n}\n.ss-content .ss-list {\n  max-height: 200px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: left;\n}\n.ss-content .ss-list .ss-optgroup .ss-optgroup-label {\n  padding: 6px 10px 6px 10px;\n  font-weight: bold;\n}\n.ss-content .ss-list .ss-optgroup .ss-option {\n  padding: 6px 6px 6px 25px;\n}\n.ss-content .ss-list .ss-optgroup-label-selectable {\n  cursor: pointer;\n}\n.ss-content .ss-list .ss-optgroup-label-selectable:hover {\n  color: var(--text);\n  background-color: var(--color-gray);\n}\n.ss-content .ss-list .ss-option {\n  padding: 6px 10px 6px 10px;\n  cursor: pointer;\n  user-select: none;\n}\n.ss-content .ss-list .ss-option * {\n  display: inline-block;\n}\n.ss-content .ss-list .ss-option:hover, .ss-content .ss-list .ss-option.ss-highlighted {\n  color: var(--text);\n  background-color: var(--color-gray);\n}\n.ss-content .ss-list .ss-option.ss-disabled {\n  cursor: not-allowed;\n  color: var(--color-gray-light);\n  background-color: white;\n}\n.ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected {\n  color: var(--text);\n  background-color: rgba(var(--color-gray), 0.1);\n}\n.ss-content .ss-list .ss-option.ss-hide {\n  display: none;\n}\n.ss-content .ss-list .ss-option .ss-search-highlight {\n  background-color: var(--color-gray);\n}\n\n.ss-value-delete svg {\n  position: relative;\n  top: 2px;\n  margin-top: -4px;\n  width: 8px !important;\n}\n.ss-value-delete svg path {\n  fill: var(--color-text);\n}\n\n.pell {\n  border: 1px solid rgba(10, 10, 10, 0.1);\n  box-sizing: border-box;\n}\n\n.pell-content {\n  box-sizing: border-box;\n  height: 300px;\n  outline: 0;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.pell-actionbar {\n  background-color: #FFF;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.1);\n}\n\n.pell-button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  outline: 0;\n  width: 30px;\n  vertical-align: bottom;\n}\n\n.pell-button-selected {\n  background-color: #F0F0F0;\n}\n\n.checkbox-label {\n  flex: 1 1 100%;\n  cursor: pointer;\n}\n.checkbox-label > input {\n  margin-left: 0;\n}\n\n.form-element[type=duration] .granularity {\n  display: flex;\n}\n\n.form-element[type=group] {\n  display: flex;\n}\n.form-element[type=group] > .items > .item:not(:first-child) > .form-element > .label {\n  display: none;\n}\n.form-element[type=group] > .items > .item {\n  flex-wrap: nowrap;\n}\n.form-element[type=group] > .items > .item > .button {\n  margin-bottom: 6px;\n  align-self: flex-end;\n}\n.form-element[type=group] > .items > .item > .form-element {\n  flex: 1 1 100px;\n  margin-bottom: 0;\n  min-width: 80px;\n}\n.form-element[type=group] > .items > .item > .form-element .label {\n  height: auto;\n  color: var(--text);\n  font-style: italic;\n  padding-top: 7px;\n  padding-bottom: 5px;\n  font-size: 14px;\n}\n.form-element[type=group] > .items > .item > .form-element > .items {\n  padding: 0;\n  margin-bottom: 0;\n}\n.form-element[type=group] > .items > .item > .form-element > .items > .item {\n  padding-left: 0;\n  padding-right: 0;\n}\n.form-element[type=group] > .items > .item > .form-element > .items > .item input, .form-element[type=group] > .items > .item > .form-element > .items > .item select {\n  min-width: 80px;\n}\n.form-element[type=group] > .items > .item > .form-element[type=reference] {\n  min-width: 300px;\n}\n.form-element[type=group] > .items > .item > .form-element[type=reference] .item {\n  width: 100%;\n}\n.form-element[type=group] > .items > .item > .form-element[type=reference] .item .button.edit {\n  margin-left: auto;\n}\n\n.form-element[type=reference] .items {\n  display: flex;\n  flex-wrap: wrap;\n}\n.form-element[type=reference] .inner {\n  display: flex;\n  width: 100%;\n}\n.form-element[type=reference] .search-suggestions {\n  top: 29px;\n  left: 5px;\n  right: 5px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  position: absolute;\n  z-index: 10;\n}\n.form-element[type=reference] .item {\n  align-items: center;\n  gap: 0;\n}\n.form-element[type=reference] .item input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  outline: none;\n}\n.form-element[type=reference] .item:not(:last-child) {\n  border-bottom: none;\n}\n.form-element[type=reference] .item[has-suggestions] .button {\n  border-bottom-right-radius: 0;\n}\n.form-element[type=reference] .item[has-suggestions] input {\n  border-bottom-left-radius: 0;\n}\n.form-element[type=reference] .item .button:not(:last-child):not(.remove) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-element[type=reference] .item * + .button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-element[type=reference] .reference-loading {\n  padding-left: 10px;\n  font-size: 12px;\n}\n.form-element[type=reference] .reference-label {\n  background: white;\n  border-top-left-radius: var(--radius);\n  border-bottom-left-radius: var(--radius);\n  border: 1px solid var(--color-gray);\n  padding-right: 10px;\n  display: flex;\n  flex: 1 1 auto;\n  width: auto;\n  align-items: center;\n  height: 35px;\n}\n.form-element[type=reference] .reference-label a, .form-element[type=reference] .reference-label span {\n  margin-left: 10px;\n}\n.form-element[type=reference] .reference-label[type=text] {\n  padding-left: 10px;\n}\n.form-element[type=reference] .reference-label .image {\n  width: 33px;\n  height: 33px;\n  border-top-left-radius: var(--radius);\n  border-bottom-left-radius: var(--radius);\n  background-color: var(--color-gray);\n  overflow: hidden;\n}\n.form-element[type=reference] .reference-label .image img {\n  object-fit: cover;\n  object-position: center;\n  width: 100%;\n  height: 100%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 35px;\n  border-radius: var(--radius);\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-gray-light);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: var(--radius);\n}\n.switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  border-radius: var(--radius);\n  left: 8px;\n  bottom: 6px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border: 1px solid var(--color-gray);\n}\n.switch input:checked + .slider {\n  background-color: var(--color-secondary);\n}\n.switch input:focus + .slider {\n  box-shadow: 0 0 1px var(--color-secondary);\n}\n.switch input:checked + .slider:before {\n  transform: translateX(23px);\n}\n\n.form-element[type=url-image] img {\n  max-width: 100%;\n  max-height: 300px;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.form-element[type=url-image] .top {\n  display: flex;\n  width: 100%;\n  gap: 10px;\n}\n.form-element[type=url-image] .image-wrapper {\n  display: inline-flex;\n  position: relative;\n}\n.form-element[type=url-image] .focal-point-description {\n  background: var(--color-primary);\n  padding: 5px;\n}\n.form-element[type=url-image] .focal-point {\n  pointer-events: none;\n  position: absolute;\n  border-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDcuOSA3LjkiIHZlcnNpb249IjEuMSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4OS4wNjI0OCkiPgo8cGF0aCBkPSJNMi44IDI4OS4ySDEuMmMtMC42IDAtMSAwLjQtMSAxdjEuN203LjcgMHYtMS43YzAtMC41LTAuNS0xLTEtMUg1LjFtLTUgNXYxLjdjMCAwLjUgMC41IDEgMSAxaDEuNm0yLjMgMGgxLjZjMC42IDAgMS0wLjQgMS0xdi0xLjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDowLjM7c3Ryb2tlOndoaXRlIi8+PC9nPjwvc3ZnPg==\") 13/35px/0 space;\n  mix-blend-mode: difference;\n  filter: saturate(100%) contrast(200%);\n}\n.form-element[type=url-image] .focal-point:before, .form-element[type=url-image] .focal-point:after {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 0px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.form-element[type=url-image] .focal-point:after {\n  transform: translate(-50%, -50%) rotate(90deg);\n}\n.form-element[type=url-image] .item {\n  flex-direction: column;\n}\n.form-element[type=url-image] input {\n  width: 100%;\n}\n\n.form-element[type=color] input[type=color] {\n  height: 60px;\n  max-width: 60px;\n}\n\n.form-element[type=container] > .items {\n  padding: 0;\n  background: none;\n  margin-bottom: 0;\n}\n.form-element[type=container] > .items > .item {\n  padding: 0;\n  margin-bottom: 0;\n}\n.form-element[type=container] > .items > .item .form-element {\n  flex: 1 1 30%;\n  margin-bottom: 0;\n}\n\n.form-element.column > .items > .item {\n  flex-direction: column;\n}\n.form-element.column > .items > .item > .form-element {\n  width: 100%;\n}\n\n.form-element[type=details] summary {\n  cursor: pointer;\n}\n.form-element[type=details] summary > .label {\n  display: inline-flex;\n  pointer-events: none;\n  height: 46px;\n}\n\n[name=sidebar] .form-element[type=details] > .items {\n  background-color: var(--color-gray-blue);\n  --background-color: #e8eaf0;\n  --color-primary: #b0bcd9;\n  --color-secondary: #cdd3e2;\n}\n\n.form-element[type=language-picker] {\n  background: none;\n  border: 0;\n}\n.form-element[type=language-picker] .items, .form-element[type=language-picker] .item {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  background: none;\n}\n.form-element[type=language-picker] .language-switcher {\n  flex: 1 1 100px;\n  margin-top: 3px;\n  display: flex;\n}\n.form-element[type=language-picker] .language-switcher svg {\n  position: relative;\n  top: 2px;\n  margin-right: 10px;\n}\n.form-element[type=language-picker] .language-switcher svg path {\n  fill: var(--color-gray-medium);\n}\n.form-element[type=language-picker] .item .ss-main {\n  flex: 1 1 80%;\n}\n.form-element[type=language-picker] .item .ss-multi-selected {\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  border-radius: 0 !important;\n}\n.form-element[type=language-picker] .item .ss-multi-selected::-webkit-scrollbar {\n  display: none;\n}\n.form-element[type=language-picker] .item .ss-multi-selected:before, .form-element[type=language-picker] .item .ss-multi-selected:after {\n  content: \"\";\n  display: block;\n  width: 100px;\n  pointer-events: none;\n  height: calc(100% - 1px);\n  position: absolute;\n  bottom: 1px;\n  z-index: 2;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n.form-element[type=language-picker] .item .ss-multi-selected:before {\n  left: 0;\n  background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n.form-element[type=language-picker] .item .ss-multi-selected:after {\n  right: 39px;\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n.form-element[type=language-picker] .item .ss-multi-selected.hide-left-shadow:before {\n  opacity: 0;\n}\n.form-element[type=language-picker] .item .ss-multi-selected.hide-right-shadow:after {\n  opacity: 0;\n}\n.form-element[type=language-picker] .item .ss-values {\n  padding: 0;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  width: auto;\n  padding-inline-end: 40px;\n}\n.form-element[type=language-picker] .item .ss-values:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid var(--color-gray);\n}\n.form-element[type=language-picker] .item .ss-values .ss-value:not(.active) .ss-value-text {\n  color: var(--color-gray-dark);\n}\n.form-element[type=language-picker] .item .ss-values .ss-value.active {\n  position: sticky;\n  left: 0;\n  right: 40px;\n  z-index: 3;\n}\n.form-element[type=language-picker] .item .ss-values > .ss-disabled {\n  cursor: pointer;\n  color: var(--text);\n  padding: 15px 0;\n}\n.form-element[type=language-picker] .item .ss-add {\n  cursor: pointer;\n  flex: 0 1 30px;\n  position: relative;\n  padding-inline-start: 30px;\n  padding-inline-end: 10px;\n  width: 40px;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  margin-right: 0;\n  background: white;\n  border-bottom: 1px solid var(--color-gray);\n  right: 0px;\n  z-index: 4;\n}\n.form-element[type=language-picker] .item .ss-add .ss-plus {\n  position: absolute;\n  left: 50%;\n}\n.form-element[type=language-picker] .item .ss-content.ss-open {\n  margin-top: 20px;\n  border-radius: var(--radius);\n}\n.form-element[type=language-picker] .item .ss-multi-selected {\n  border: 0;\n}\n.form-element[type=language-picker] .item .ss-value {\n  position: relative;\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 14px;\n  cursor: pointer;\n  font-size: 16px;\n  border: 1px solid var(--color-gray);\n  background: var(--color-gray-light);\n}\n.form-element[type=language-picker] .item .ss-value.active {\n  background: white;\n  border-bottom-color: white;\n}\n.form-element[type=language-picker] .item .ss-value .ss-value-delete svg {\n  width: 10px !important;\n  margin-left: 4px;\n}\n.form-element[type=language-picker] .item .ss-value .ss-value-delete svg path {\n  fill: var(--color-gray-medium);\n}\n\n.wysiwyg-wrapper {\n  width: 100%;\n}\n\n.form-element[type=password] .column {\n  flex: 1 1 40%;\n}\n.form-element[type=password] .column > * {\n  width: 100%;\n}\n\n:host form .form-element[name=main] {\n  width: calc(100% - 440px);\n  float: left;\n  margin-right: 40px;\n}\n:host form .form-element[name=sidebar] {\n  width: 400px;\n  float: right;\n}\n:host form .actions {\n  flex-direction: row-reverse;\n  float: left;\n  clear: both;\n  margin-bottom: 40px;\n  width: 100%;\n  border-top: 1px solid var(--color-gray);\n  padding: 20px 0;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  margin-top: 20px;\n}";

  var RdfFormCss = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': rdfForm
  });

  var displayOnly = ".label small,\n.ss-add,\n.ss-value-delete,\n.icon-button {\n  display: none !important;\n}\n\n.ss-multi-selected {\n  pointer-events: none;\n}\n\n.ss-value {\n  pointer-events: all;\n}\n\n.items,\n.item,\n.label {\n  display: inline !important;\n  background: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.item:not(:last-child) {\n  border: none !important;\n}\n\n.form-element {\n  display: block !important;\n}\n\n.reference-label {\n  border: none !important;\n  display: inline-flex !important;\n  height: auto !important;\n  padding-inline-end: 0 !important;\n}\n.reference-label .image {\n  width: 16px !important;\n  height: 16px !important;\n  margin-right: 4px !important;\n}\n.reference-label .reference-text {\n  margin-left: 0 !important;\n}\n.reference-label a {\n  margin-left: 0 !important;\n}\n\n.form-element:not([type=language-picker]) {\n  margin-bottom: 4px !important;\n}\n\n.form-element[type=language-picker] {\n  margin-bottom: 30px !important;\n}\n\ndetails summary::-webkit-details-marker {\n  display: none;\n}\n\ndetails {\n  margin-top: 14px !important;\n}\ndetails > .items {\n  display: block !important;\n}\ndetails > summary {\n  list-style: none;\n  pointer-events: none;\n  margin-bottom: 6px !important;\n  font-style: italic;\n}\ndetails > summary .label {\n  font-weight: 100 !important;\n}\n\n.form-element[type=url-image] .items {\n  display: flex !important;\n  margin-top: 10px !important;\n}\n.form-element[type=url-image] .items img {\n  border: 1px solid var(--color-gray);\n  margin-inline-end: 30px;\n}\n\n.form-element[type=language-picker] .item .ss-values .ss-value.active,\n.form-element[type=language-picker] .item .ss-multi-selected::after {\n  right: 0;\n}\n\n.form-element[type=language-picker] .item .ss-values {\n  padding-inline-end: 0 !important;\n}\n.form-element[type=language-picker] .item .ss-values .ss-value:last-child {\n  margin-inline-end: 0 !important;\n}";

  var OnlyDisplay = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': displayOnly
  });

  class Renderer extends EventTarget {
      constructor(rdfForm) {
          super();
          this.ready = false;
          this.fieldInstances = new Map();
          this.extraStylesheets = new Set();
          this.init();
          this.form = rdfForm;
      }
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              this.ready = true;
              this.dispatchEvent(new CustomEvent('ready'));
          });
      }
      render() {
          return __awaiter(this, void 0, void 0, function* () {
              const templates = yield this.nest(this.form.formDefinition.chain, this.form.registry, this.form.formData.proxy, this.form);
              const formSubmit = (event) => {
                  event.preventDefault();
                  event.stopImmediatePropagation();
                  this.form.dispatchEvent(new CustomEvent('submit', { detail: {
                          proxy: this.form.formData.proxy,
                          expanded: this.form.formData.proxy.$,
                      } }));
              };
              const isDisplayOnly = this.form.getAttribute('display');
              render(this.form.shadow, html `
      <style>:host { display: none; }</style>
      <style>${RdfFormCss}</style>

      ${[...this.extraStylesheets.values()].map(link => html `<link href=${link} rel='stylesheet' type='text/css'>`)}

      ${isDisplayOnly ? html `<style>${OnlyDisplay}</style>` : null}


      ${!isDisplayOnly ? html `
      <form onsubmit=${formSubmit}>
        ${templates}
        <div class="actions">
          <button class="button save primary big">${t `Save`}</button>
        </div>
      </form>

      ` : templates}
    `);
          });
      }
      nest(formDefinition, registry, formData, parent) {
          var _a, _b, _c;
          return __awaiter(this, void 0, void 0, function* () {
              const templates = [];
              const isDisplayOnly = this.form.getAttribute('display');
              for (const [bindings, [field, children]] of formDefinition.entries()) {
                  const mainBinding = (_a = field['form:binding']) === null || _a === void 0 ? void 0 : _a._;
                  const isContainer = lastPart(field['@type'][0]) === 'Container';
                  const isUiComponent = lastPart(field['@type'][0]) === 'UiComponent';
                  let wrapperFieldInstance = isUiComponent || isContainer ? this.fieldInstances.get(field.$) : false;
                  if (!wrapperFieldInstance)
                      wrapperFieldInstance = yield registry.setupElement(field, bindings, null, null, formData, () => this.render(), parent, null, children);
                  if (!wrapperFieldInstance)
                      continue;
                  if (!this.fieldInstances.has(field.$))
                      this.fieldInstances.set(field.$, wrapperFieldInstance);
                  const innerTemplates = [];
                  if (mainBinding && !isContainer) {
                      let applicableValues = (formData === null || formData === void 0 ? void 0 : formData[mainBinding]) ? [...formData[mainBinding].values()]
                          .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : [];
                      if (formData && Array.isArray(formData.$)) {
                          applicableValues = flatMapProxy(formData, mainBinding)
                              .filter((value) => value && !value['@language'] || value && value['@language'] === Language.l10nLanguage);
                      }
                      if (applicableValues.length) {
                          for (const [index, value] of applicableValues.entries()) {
                              const fieldInstance = (_b = this.fieldInstances.get(value.$)) !== null && _b !== void 0 ? _b : yield registry.setupElement(field, bindings, value, formData === null || formData === void 0 ? void 0 : formData[index], formData, () => this.render(), parent, index, children);
                              if (!this.fieldInstances.has(value.$))
                                  this.fieldInstances.set(value.$, fieldInstance);
                              const childValues = ((_c = field['form:widget']) === null || _c === void 0 ? void 0 : _c._) === 'group' ? formData[mainBinding][index] : formData[mainBinding];
                              const childTemplates = children.size ? yield this.nest(children, registry, childValues, wrapperFieldInstance) : [];
                              innerTemplates.push(isDisplayOnly ? fieldInstance.itemDisplay(childTemplates) : fieldInstance.item(childTemplates));
                          }
                      }
                      else if (!isDisplayOnly) {
                          const childTemplates = children.size ? yield this.nest(children, registry, [], wrapperFieldInstance) : [];
                          innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
                      }
                  }
                  else if (isUiComponent) {
                      const childTemplates = children.size ? yield this.nest(children, registry, formData, wrapperFieldInstance) : [];
                      innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
                  }
                  else if (isContainer) {
                      const childTemplates = children.size ? yield this.nest(children, registry, mainBinding ? containerProxy(formData, mainBinding) : formData, wrapperFieldInstance) : [];
                      innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
                  }
                  templates.push(isDisplayOnly ? wrapperFieldInstance.wrapperDisplay(innerTemplates) : wrapperFieldInstance.wrapper(innerTemplates));
              }
              return templates;
          });
      }
  }

  const expandProxiesInConsole = () => {
      const originalConsoleLog = console.log;
      console.log = (...rawInputs) => {
          const inputs = [...rawInputs];
          for (let [index, input] of inputs.entries()) {
              if (input === null || input === void 0 ? void 0 : input.isProxy)
                  inputs[index] = input.$;
          }
          originalConsoleLog(...inputs);
      };
  };

  const faTimes = {
      prefix: 'fas',
      iconName: 'times',
      icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
  };
  const faPlus = {
      prefix: 'fas',
      iconName: 'plus',
      icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
  };
  const faLanguage = {
      prefix: 'fas',
      iconName: 'language',
      icon: [640, 512, [], "f1ab", "M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"]
  };

  const kebabize = str => {
      if (str.split('').every(letter => letter.toUpperCase() === letter))
          return str.toLowerCase();
      return str.split('').map((letter, index) => {
          return letter.toUpperCase() === letter
              ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
              : letter;
      }).join('');
  };

  const attributesDiff = (attributes, callback = null) => node => {
      for (const key of Object.keys(attributes)) {
          if (attributes[key]) {
              const attributeValue = Array.isArray(attributes[key]) ? attributes[key].join(' ') : attributes[key];
              if (typeof attributeValue !== 'string' || attributeValue.trim())
                  node.setAttribute(key, attributeValue);
          }
          else {
              node.removeAttribute(key);
          }
          if (callback) {
              callback(node);
              callback = null;
          }
      }
  };

  /*!
   * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var PERFORMANCE = _PERFORMANCE;
  !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';

  (function () {
    try {
      return "development" === 'production';
    } catch (e) {
      return false;
    }
  })();

  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;
  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];
  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }

  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }

  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }

  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }

  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }

  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(_abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (_abstract.attributes && (_abstract.attributes.fill || force)) {
      _abstract.attributes.fill = 'black';
    }

    return _abstract;
  }

  function deGroup(_abstract2) {
    if (_abstract2.tag === 'g') {
      return _abstract2.children;
    } else {
      return [_abstract2];
    }
  }

  function makeIconMasking(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        explicitMaskId = _ref.maskId,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
    var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: deGroup(maskPath)
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon(_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol(_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }

  var noop$1 = function noop() {};

  config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };
  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;

  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = ('far' in styles);
    reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };

  build();
  namespace.styles;

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }

  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;
  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  });

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  ({
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  });
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  });
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  });
  namespace.styles;

  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }

  namespace.styles;
  var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

  function css() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val["abstract"].map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();
  var _cssInserted = false;
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });

  class FaIcon extends Hole {
      constructor(icon) {
          super('svg', [icon], []);
      }
  }
  function fa(iconInput) {
      return new FaIcon(icon(iconInput).html[0]);
  }

  function debounce(func, wait, immediate = false) {
      var timeout;
      return function () {
          var context = this, args = arguments;
          var later = function () {
              timeout = null;
              if (!immediate)
                  func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow)
              func.apply(context, args);
      };
  }

  class ElementBase extends EventTarget {
      constructor(...args) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
          super();
          this.jsonldKey = 'value';
          this.mainBinding = null;
          this.render = () => null;
          this.suggestions = [];
          this.index = null;
          this.children = [];
          this.attributes = {
              type: 'input',
              class: [],
              disabled: null,
              readonly: null,
              placeholder: null,
              required: null,
              multiple: null,
              rows: null,
              open: null,
          };
          this.wrapperAttributes = {
              open: false,
              class: ['form-element']
          };
          this.labelAttributes = {
              class: ['label']
          };
          const [definition, bindings, value, itemValues, parentValues, render, parent, index, children] = args;
          this.definition = definition;
          this.bindings = bindings;
          this.mainBinding = (_a = definition['form:binding']) === null || _a === void 0 ? void 0 : _a._;
          this.parentValues = parentValues;
          this.itemValues = itemValues;
          this.value = value;
          this.render = render;
          this.parent = parent;
          this.index = index;
          this.children = children;
          this.debouncedRender = debounce(this.render.bind(this), 300);
          if (this.definition['form:jsonLdKey']) {
              this.jsonldKey = this.definition['form:jsonLdKey']._;
          }
          if ((_b = this.definition['form:placeholder']) === null || _b === void 0 ? void 0 : _b._)
              this.attributes.placeholder = (_c = this.definition['form:placeholder']) === null || _c === void 0 ? void 0 : _c._;
          if (((_d = this.definition['form:required']) === null || _d === void 0 ? void 0 : _d._) === true)
              this.attributes.required = true;
          if (((_e = this.definition['form:multiple']) === null || _e === void 0 ? void 0 : _e._) === true)
              this.attributes.multiple = true;
          if (((_f = this.definition['form:readonly']) === null || _f === void 0 ? void 0 : _f._) === true)
              this.attributes.readonly = true;
          if (((_g = this.definition['form:disabled']) === null || _g === void 0 ? void 0 : _g._) === true)
              this.attributes.disabled = true;
          if (((_h = this.definition['form:open']) === null || _h === void 0 ? void 0 : _h._) !== undefined)
              this.wrapperAttributes.open = this.definition['form:open']._;
          if (((_j = this.definition['form:rows']) === null || _j === void 0 ? void 0 : _j._) !== undefined)
              this.attributes.rows = parseInt(this.definition['form:rows']._);
          if ((_k = this.definition['form:cssClass']) === null || _k === void 0 ? void 0 : _k._)
              this.wrapperAttributes.class.push(this.definition['form:cssClass']._);
          if (!((_l = this.definition['form:label']) === null || _l === void 0 ? void 0 : _l._))
              this.wrapperAttributes.class.push('no-label');
      }
      get proxy() {
          var _a;
          return (_a = this.form) === null || _a === void 0 ? void 0 : _a.proxy;
      }
      get t() {
          return this.form.t;
      }
      get form() {
          let pointer = this;
          while (pointer.parent) {
              pointer = pointer.parent;
          }
          return pointer.registry ? pointer : null;
      }
      on(event) {
          if (['keyup', 'change'].includes(event.type)) {
              if (!this.value)
                  this.addItem();
              if (this.value)
                  this.value[`@${this.jsonldKey}`] = event.target.value;
          }
      }
      get removable() {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
          if (((_b = (_a = this.definition) === null || _a === void 0 ? void 0 : _a['form:removable']) === null || _b === void 0 ? void 0 : _b._) === false)
              return false;
          const hasValue = (_c = this.value) === null || _c === void 0 ? void 0 : _c._;
          const parentIsGroup = this.parent instanceof ElementBase ? ((_f = (_e = (_d = this.parent) === null || _d === void 0 ? void 0 : _d.definition) === null || _e === void 0 ? void 0 : _e['form:widget']) === null || _f === void 0 ? void 0 : _f._) === 'group' : false;
          const isGroup = ((_h = (_g = this.definition) === null || _g === void 0 ? void 0 : _g['form:widget']) === null || _h === void 0 ? void 0 : _h._) === 'group';
          const isRequired = (_k = (_j = this.definition) === null || _j === void 0 ? void 0 : _j['form:required']) === null || _k === void 0 ? void 0 : _k._;
          return !isRequired && hasValue && !parentIsGroup || isGroup;
      }
      get languages() {
          var _a;
          return Language.extractUsedLanguages((_a = this.parentValues) === null || _a === void 0 ? void 0 : _a[this.mainBinding]);
      }
      addItem() {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (this.bindings.length > 1) {
              if (!this.parentValues[this.mainBinding])
                  this.parentValues[this.mainBinding] = [];
              const emptyObject = {};
              for (const binding of this.bindings) {
                  emptyObject[binding] = [];
              }
              emptyObject[this.mainBinding].push({});
              this.parentValues.push(emptyObject);
              this.itemValues = emptyObject;
              this.value = emptyObject[this.mainBinding][0];
          }
          else if (((_a = this.definition['form:widget']) === null || _a === void 0 ? void 0 : _a._) === 'group') {
              if (!this.parentValues[this.mainBinding]) {
                  this.parentValues[this.mainBinding] = [{ '@list': [{}] }];
              }
              const firstItem = (_c = (_b = this.parentValues[this.mainBinding]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.$;
              const clone = JSON.parse(JSON.stringify(firstItem));
              for (const [field, values] of Object.entries(clone)) {
                  if (values === null || values === void 0 ? void 0 : values[0]['@id'])
                      values[0]['@id'] = null;
                  if (values === null || values === void 0 ? void 0 : values[0]['@value'])
                      values[0]['@value'] = '';
                  if (values === null || values === void 0 ? void 0 : values[0]['@language'])
                      values[0]['@value'] = Language.l10nLanguage;
              }
              (_d = this.parentValues) === null || _d === void 0 ? void 0 : _d[this.mainBinding].push(clone);
              this.value = clone;
          }
          else {
              const value = { [`@${this.jsonldKey}`]: null };
              ((_e = this.parentValues) === null || _e === void 0 ? void 0 : _e[this.mainBinding]) ? Language.extractUsedLanguages(this.parentValues) : [];
              if (this.languages.length || ((_f = this.definition['form:translatable']) === null || _f === void 0 ? void 0 : _f._) === 'always')
                  value['@language'] = Language.l10nLanguage;
              if (!((_g = this.parentValues) === null || _g === void 0 ? void 0 : _g[this.mainBinding]))
                  this.parentValues[this.mainBinding] = [];
              (_h = this.parentValues) === null || _h === void 0 ? void 0 : _h[this.mainBinding].push(value);
              this.value = value;
          }
      }
      removeItem() {
          var _a, _b;
          if (this.bindings.length > 1) {
              const valueArray = this.parentValues.$;
              if (valueArray) {
                  const index = valueArray.indexOf(this.itemValues.$);
                  valueArray.splice(index, 1);
              }
          }
          else {
              const valueArray = (_b = this.parentValues[(_a = this.definition['form:binding']) === null || _a === void 0 ? void 0 : _a._]) === null || _b === void 0 ? void 0 : _b.$;
              if (valueArray) {
                  const index = valueArray.indexOf(this.value.$);
                  valueArray.splice(index, 1);
              }
          }
      }
      wrapperDisplay(innerTemplates = []) {
          return this.wrapper(innerTemplates, true);
      }
      itemDisplay(childTemplates = []) {
          return html `
    <div class="item">
      ${this.valueDisplay()}
      ${childTemplates}
    </div>`;
      }
      valueDisplay() {
          var _a;
          return html `${(_a = this.value) === null || _a === void 0 ? void 0 : _a._}`;
      }
      wrapper(innerTemplates = [], isDisplayOnly = false) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function* () {
              const type = kebabize(this.constructor.name);
              const shouldShowEmpty = ((_a = this.definition['form:translatable']) === null || _a === void 0 ? void 0 : _a._) === 'always' && !Language.l10nLanguage;
              return html `
    ${!shouldShowEmpty && (!isDisplayOnly || innerTemplates.length > 0) ? html `
    <div ref=${attributesDiff(this.wrapperAttributes)} name=${kebabize(lastPart(this.definition['@id']))} type="${type}">
    ${this.label()}
    ${innerTemplates.length ? html `
      <div class="items">
        ${this.description()}
        ${innerTemplates}
      </div>
    ` : ''}
      ${((_b = this.definition['form:multiple']) === null || _b === void 0 ? void 0 : _b._) && !isDisplayOnly ? html `<div>${this.addButton()}</div>` : html ``}
    </div>
    ` : html ``}`;
          });
      }
      description() {
          var _a, _b;
          return ((_a = this.definition['form:description']) === null || _a === void 0 ? void 0 : _a._) ? html `<p class="description">${(_b = this.definition['form:description']) === null || _b === void 0 ? void 0 : _b._}</p>` : null;
      }
      item(childTemplates = []) {
          return html `
    <div class="item">
      ${this.input()}
      ${this.removeButton()}
      ${childTemplates}
    </div>`;
      }
      addButton() {
          return html `<button type="button" class="button add primary" onclick="${() => __awaiter(this, void 0, void 0, function* () {
            yield this.addItem();
            this.render();
        })}">
      ${fa(faPlus)}
    </button>`;
      }
      removeButton() {
          return this.removable ? html `<button type="button" class="button remove danger" onclick="${() => {
            this.removeItem();
            this.render();
        }}">
      ${fa(faTimes)}
    </button>` : html ``;
      }
      input() {
          var _a, _b;
          return html `
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${(_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a._) !== null && _b !== void 0 ? _b : ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />
    `;
      }
      disableLanguage() {
          const values = this.parentValues[this.mainBinding];
          if (values) {
              values.splice(1);
              delete values[0]['@language'];
          }
      }
      enableLanguage() {
          if (!this.parentValues[this.mainBinding])
              this.parentValues[this.mainBinding] = this.parentValues[this.mainBinding] = [];
          const values = this.parentValues[this.mainBinding];
          if (values.length) {
              values[0]['@language'] = Language.l10nLanguage;
          }
          else {
              values.push({ '@language': Language.l10nLanguage });
          }
      }
      label() {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          return __awaiter(this, void 0, void 0, function* () {
              let languageLabel = '';
              const isDisplayOnly = this.form.getAttribute('display');
              if ((_a = this.definition['form:translatable']) === null || _a === void 0 ? void 0 : _a._) {
                  const applicableValues = ((_b = this.parentValues) === null || _b === void 0 ? void 0 : _b[this.mainBinding]) ? [...this.parentValues[this.mainBinding].values()]
                      .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : [];
                  const language = applicableValues.map((value) => value['@language'])[0];
                  if (language) {
                      languageLabel = `(${Language.l10nLanguages[language]})`;
                  }
                  else if (applicableValues.length === 0 && ((_c = this.definition['form:translatable']) === null || _c === void 0 ? void 0 : _c._) === 'always') {
                      languageLabel = `(${Language.l10nLanguages[Language.l10nLanguage]})`;
                  }
              }
              const disableLanguage = () => {
                  this.disableLanguage();
                  this.render();
              };
              const enableLanguage = () => {
                  this.enableLanguage();
                  this.render();
              };
              return ((_d = this.definition['form:label']) === null || _d === void 0 ? void 0 : _d._) ? html `
      <label ref=${attributesDiff(this.labelAttributes)}>
        ${this.definition['form:label']._}${isDisplayOnly ? ':' : ''}
        <small>&nbsp;<em>
        ${languageLabel && !isDisplayOnly ? html `${languageLabel}` : html ``}
        ${((_e = this.definition['form:translatable']) === null || _e === void 0 ? void 0 : _e._) && ((_f = this.definition['form:translatable']) === null || _f === void 0 ? void 0 : _f._) !== 'always' && languageLabel ? html `<span title=${this.t.direct('Disable translations for this field').toString()} class="icon-button disable-language" onclick=${disableLanguage}>${fa(faTimes)}</span>` : html ``}
        ${((_g = this.definition['form:translatable']) === null || _g === void 0 ? void 0 : _g._) && ((_h = this.definition['form:translatable']) === null || _h === void 0 ? void 0 : _h._) !== 'always' && !languageLabel ? html `<span title=${this.t.direct('Enable translations for this field').toString()} class="icon-button enable-language" onclick=${enableLanguage}>${fa(faLanguage)}</span>` : html ``}
        </em></small>
      </label>
    ` : html ``;
          });
      }
      referenceLabel(uri, meta) {
          return __awaiter(this, void 0, void 0, function* () {
              if (!meta) {
                  const subject = lastPart(uri).replace(/_|-/g, ' ');
                  meta = { label: subject };
              }
              return html `
      <div class="reference-label">
        ${(meta === null || meta === void 0 ? void 0 : meta.label) === false ? html `<span class="reference-loading">${this.t `Could not load data`}</span>` : html `
          ${(meta === null || meta === void 0 ? void 0 : meta.thumbnail) ? html `<div class="image"><img src="${`//images.weserv.nl/?url=${meta === null || meta === void 0 ? void 0 : meta.thumbnail}&default=${meta === null || meta === void 0 ? void 0 : meta.thumbnail}&w=100&h=100`}"></div>` : ''}
          ${(meta === null || meta === void 0 ? void 0 : meta.label) ? (isFetchable(uri) ? html `<a href="${uri}" target="_blank">${meta === null || meta === void 0 ? void 0 : meta.label}</a>` : html `<span class="reference-text">${meta === null || meta === void 0 ? void 0 : meta.label}</span>`) : html `<span class="reference-loading">${this.t `Loading...`}</span>`}
        `}
      </div>
    `;
          });
      }
  }

  let fields;
  const init = (givenFields = null) => {
      fields = givenFields;
  };
  class RdfForm extends HTMLElement {
      constructor() {
          super();
          this.ready = false;
          this.proxy = null;
          this.addEventListener('register-elements', (event) => event.detail.fields = fields);
      }
      connectedCallback() {
          return __awaiter(this, void 0, void 0, function* () {
              if (this.shadow)
                  return;
              this.shadow = this.attachShadow({ mode: 'open' });
              this.formDefinition = new FormDefinition(this);
              this.formData = new RdfFormData(this);
              this.registry = new Registry(this);
              this.renderer = new Renderer(this);
              this.language = Language;
              yield this.language.init(this);
              this.t = t;
              this.language.addEventListener('l10n-change', (event) => this.dispatchEvent(new CustomEvent('l10n-change', {
                  detail: event.detail
              })));
              this.proxy = this.getAttribute('proxy');
              if (this.getAttribute('debug') !== null)
                  expandProxiesInConsole();
              const components = [
                  this.formDefinition,
                  this.formData,
                  this.registry,
                  this.language,
                  this.renderer
              ];
              for (const component of components) {
                  component.addEventListener('ready', () => {
                      if (components.every(component => component.ready) && !this.ready) {
                          this.ready = true;
                          this.renderer.render();
                          this.dispatchEvent(new CustomEvent('ready'));
                      }
                  });
              }
          });
      }
  }
  customElements.define('rdf-form', RdfForm);

  exports.ElementBase = ElementBase;
  exports.JsonLdProxy = JsonLdProxy;
  exports.RdfForm = RdfForm;
  exports.init = init;
  exports.languages = languages;

  return exports;

})({});
