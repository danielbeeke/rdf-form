import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BHDNV6PI.js";

// src/js/vendor/ttl2jsonld.js
"use strict";
function peg$subclass(t2, r2) {
  function e5() {
    this.constructor = t2;
  }
  e5.prototype = r2.prototype, t2.prototype = new e5();
}
function peg$SyntaxError(t2, r2, e5, n2) {
  this.message = t2, this.expected = r2, this.found = e5, this.location = n2, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, peg$SyntaxError);
}
function peg$parse(t2, r2) {
  r2 = r2 !== void 0 ? r2 : {};
  var e5, n2 = {}, u2 = { turtleDoc: qe2 }, s2 = qe2, a2 = function(t3) {
    var r3 = vn2.toJSON();
    return r3["@graph"] = [], t3.filter((t4) => Array.isArray(t4)).forEach((t4) => {
      t4.forEach((t5) => {
        r3["@graph"].push(t5);
      });
    }), r3["@graph"].length === 1 && (Object.assign(r3, r3["@graph"][0]), delete r3["@graph"]), r3;
  }, c2 = ".", o2 = ke2(".", false), f2 = function(t3) {
    return t3;
  }, i2 = "#", h2 = ke2("#", false), l2 = /^[^\n]/, A2 = Be2(["\n"], true, false), p2 = "\n", d2 = ke2("\n", false), g2 = function(t3) {
    return t3.join("");
  }, v2 = "@prefix", w2 = ke2("@prefix", false), b2 = function(t3, r3) {
    return vn2.addPrefix(t3 === "" ? "0" : t3, r3), {};
  }, C2 = "@base", x2 = ke2("@base", false), F2 = function(t3) {
    return vn2.addBase(t3), {};
  }, y2 = /^[Bb]/, m2 = Be2(["B", "b"], false, false), S2 = /^[Aa]/, j2 = Be2(["A", "a"], false, false), E2 = /^[Ss]/, I2 = Be2(["S", "s"], false, false), $2 = /^[Ee]/, D2 = Be2(["E", "e"], false, false), L2 = /^[Pp]/, M2 = Be2(["P", "p"], false, false), R2 = /^[Rr]/, X2 = Be2(["R", "r"], false, false), O2 = /^[Ff]/, P2 = Be2(["F", "f"], false, false), z2 = /^[Ii]/, Z2 = Be2(["I", "i"], false, false), _2 = /^[Xx]/, k2 = Be2(["X", "x"], false, false), B2 = function(t3, r3) {
    var e6 = {};
    return typeof t3 == "string" && t3 !== "[]" ? e6["@id"] = t3 : typeof t3 == "object" && Object.assign(e6, t3), r3 && Object.assign(e6, r3), [e6];
  }, U2 = function(t3, r3) {
    var e6 = {};
    return t3 && Object.assign(e6, t3), r3 && Object.assign(e6, r3), [e6];
  }, J2 = ";", N2 = ke2(";", false), T2 = function(t3, r3, e6, n3) {
    var u3 = {};
    return u3[e6] = n3, u3;
  }, q2 = function(t3, r3, e6) {
    return e6;
  }, G2 = function(t3, r3, e6) {
    var n3 = {};
    return e6.unshift(function(t4, r4) {
      var e7 = {};
      return e7[t4] = r4, e7;
    }(t3, r3)), e6.forEach((t4) => {
      t4 && Object.keys(t4).forEach((r4) => {
        t4[r4].forEach((t5) => {
          r4 === "@type" && t5["@id"] !== void 0 && (t5 = t5["@id"]), n3[r4] === void 0 ? n3[r4] = t5 : Array.isArray(n3[r4]) ? n3[r4].push(t5) : n3[r4] = [n3[r4], t5];
        });
      });
    }), n3;
  }, H2 = ",", K2 = ke2(",", false), Q2 = function(t3, r3) {
    return r3;
  }, V2 = function(t3, r3) {
    return r3.unshift(t3), r3;
  }, W2 = "a", Y2 = ke2("a", false), tt2 = function() {
    return "@type";
  }, rt2 = function(t3) {
    return wn2(t3, true);
  }, et2 = function(t3) {
    return wn2(t3, false);
  }, nt2 = function(t3) {
    return t3 === "[]" ? {} : { "@id": t3 };
  }, ut2 = function(t3) {
    return { "@id": t3 };
  }, st2 = "[", at2 = ke2("[", false), ct2 = "]", ot2 = ke2("]", false), ft2 = "(", it2 = ke2("(", false), ht2 = ")", lt2 = ke2(")", false), At2 = function(t3) {
    return { "@list": t3 };
  }, pt2 = function(t3, r3) {
    return { "@value": t3, "@language": r3 };
  }, dt2 = "^^", gt2 = ke2("^^", false), vt2 = function(t3, r3) {
    if (r3 === "http://www.w3.org/2001/XMLSchema#boolean" && t3 === "true")
      return true;
    if (r3 === "http://www.w3.org/2001/XMLSchema#boolean" && t3 === "false")
      return false;
    if (r3 === "http://www.w3.org/2001/XMLSchema#integer")
      return parseInt(t3);
    if (r3 === "http://www.w3.org/2001/XMLSchema#double")
      return parseFloat(t3);
    const e6 = vn2.resolve(r3, true);
    if (e6) {
      const n3 = r3.split(":")[0];
      if (e6 === "http://www.w3.org/2001/XMLSchema#boolean" && t3 === "true")
        return vn2.decrement(n3), true;
      if (e6 === "http://www.w3.org/2001/XMLSchema#boolean" && t3 === "false")
        return vn2.decrement(n3), false;
      if (e6 === "http://www.w3.org/2001/XMLSchema#integer")
        return vn2.decrement(n3), parseInt(t3);
      if (e6 === "http://www.w3.org/2001/XMLSchema#double")
        return vn2.decrement(n3), parseFloat(t3);
    }
    return { "@value": t3, "@type": r3 };
  }, wt2 = "true", bt2 = ke2("true", false), Ct2 = function() {
    return true;
  }, xt2 = "false", Ft2 = ke2("false", false), yt2 = function() {
    return false;
  }, mt2 = function(t3) {
    return t3 + ":";
  }, St2 = "<", jt2 = ke2("<", false), Et2 = /^[^\0- <>"{}|\^`\\]/, It2 = Be2([["\0", " "], "<", ">", '"', "{", "}", "|", "^", "`", "\\"], true, false), $t2 = ">", Dt2 = ke2(">", false), Lt2 = function(t3) {
    const r3 = t3.map((t4) => 65536 <= t4.codePointAt(0) && t4.codePointAt(0) <= 983039 ? "a" : t4.length === 1 ? t4 : t4.length === 6 ? String.fromCharCode("0x" + t4.substring(2)) : t4.length === 10 ? String.fromCodePoint("0x" + t4.substring(2)) : t4).join("");
    if (r3.match(/^[^\u0000-\u0020<>"{}|^`\\]*$/)) {
      var e6 = t3.join("");
      try {
        return vn2.resolve(e6);
      } catch (t4) {
        _e2("Invalid IRIREF " + e6);
      }
    } else
      _e2("Invalid IRIREF " + t3.join("") + " / " + r3);
  }, Mt2 = ":", Rt2 = ke2(":", false), Xt2 = function(t3) {
    return t3 = t3 || "0", vn2.hasPrefix(t3) === false && _e2("undefined prefix " + t3), t3;
  }, Ot2 = function(t3) {
    return t3 || "";
  }, Pt2 = function(t3, r3) {
    return vn2.increment(t3), vn2.resolve(t3 + ":" + r3);
  }, zt2 = "_:", Zt2 = ke2("_:", false), _t2 = /^[0-9]/, kt2 = Be2([["0", "9"]], false, false), Bt2 = "@", Ut2 = ke2("@", false), Jt2 = /^[a-zA-Z]/, Nt2 = Be2([["a", "z"], ["A", "Z"]], false, false), Tt2 = "-", qt2 = ke2("-", false), Gt2 = /^[a-zA-Z0-9]/, Ht2 = Be2([["a", "z"], ["A", "Z"], ["0", "9"]], false, false), Kt2 = function(t3, r3) {
    return "-" + r3.join("");
  }, Qt2 = function(t3, r3) {
    return t3.join("") + r3.join("");
  }, Vt2 = /^[+\-]/, Wt2 = Be2(["+", "-"], false, false), Yt2 = function(t3) {
    return parseInt(t3);
  }, tr = function(t3) {
    return { "@value": t3, "@type": "http://www.w3.org/2001/XMLSchema#decimal" };
  }, rr = function(t3) {
    return { "@value": t3, "@type": "http://www.w3.org/2001/XMLSchema#double" };
  }, er = /^[eE]/, nr = Be2(["e", "E"], false, false), ur = '"', sr = ke2('"', false), ar = /^[^"\\\n\r]/, cr = Be2(['"', "\\", "\n", "\r"], true, false), or = "'", fr = ke2("'", false), ir = /^[^'\\\n\r]/, hr = Be2(["'", "\\", "\n", "\r"], true, false), lr = "'''", Ar = ke2("'''", false), pr = /^[^'\\]/, dr = Be2(["'", "\\"], true, false), gr = "''", vr = ke2("''", false), wr = function(t3, r3) {
    return "''" + r3.join("");
  }, br = function(t3, r3) {
    return "'" + r3.join("");
  }, Cr = function(t3, r3) {
    return t3.join("") + r3.join("");
  }, xr = '"""', Fr = ke2('"""', false), yr = /^[^"\\]/, mr = Be2(['"', "\\"], true, false), Sr = '""', jr = ke2('""', false), Er = function(t3, r3) {
    return '""' + r3.join("");
  }, Ir = function(t3, r3) {
    return '"' + r3.join("");
  }, $r = "\\U", Dr = ke2("\\U", false), Lr = function(t3) {
    return String.fromCodePoint(parseInt(t3.join(""), 16));
  }, Mr = "\\u", Rr = ke2("\\u", false), Xr = function(t3) {
    return String.fromCharCode(parseInt(t3.join(""), 16));
  }, Or = "\\t", Pr = ke2("\\t", false), zr = function() {
    return "	";
  }, Zr = "\\b", _r = ke2("\\b", false), kr = function() {
    return "\b";
  }, Br = "\\n", Ur = ke2("\\n", false), Jr = function() {
    return "\n";
  }, Nr = "\\r", Tr = ke2("\\r", false), qr = function() {
    return "\r";
  }, Gr = "\\f", Hr = ke2("\\f", false), Kr = function() {
    return "\f";
  }, Qr = '\\"', Vr = ke2('\\"', false), Wr = function() {
    return '"';
  }, Yr = "\\'", te2 = ke2("\\'", false), re2 = function() {
    return "'";
  }, ee2 = "\\\\", ne2 = ke2("\\\\", false), ue2 = function() {
    return "\\";
  }, se2 = /^[ \t\r\n]/, ae2 = Be2([" ", "	", "\r", "\n"], false, false), ce2 = function() {
    return "[]";
  }, oe2 = /^[\uD800-\uDBFF]/, fe2 = Be2([["\uD800", "\uDBFF"]], false, false), ie2 = /^[\uDC00-\uDFFF]/, he2 = Be2([["\uDC00", "\uDFFF"]], false, false), le2 = function(t3, r3) {
    return t3 + r3;
  }, Ae2 = /^[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, pe2 = Be2([["A", "Z"], ["a", "z"], ["\xC0", "\xD6"], ["\xD8", "\xF6"], ["\xF8", "\u02FF"], ["\u0370", "\u037D"], ["\u037F", "\u1FFF"], ["\u200C", "\u200D"], ["\u2070", "\u218F"], ["\u2C00", "\u2FEF"], ["\u3001", "\uD7FF"], ["\uF900", "\uFDCF"], ["\uFDF0", "\uFFFD"]], false, false), de2 = "_", ge2 = ke2("_", false), ve2 = "\xB7", we2 = ke2("\xB7", false), be2 = /^[\u0300-\u036F]/, Ce2 = Be2([["\u0300", "\u036F"]], false, false), xe2 = /^[\u203F-\u2040]/, Fe2 = Be2([["\u203F", "\u2040"]], false, false), ye2 = function(t3, r3, e6, n3) {
    return e6.join("") + n3.join("");
  }, me2 = function(t3, r3, e6) {
    return t3 + r3.join("") + e6.join("");
  }, Se2 = "%", je2 = ke2("%", false), Ee2 = /^[0-9A-Fa-f]/, Ie2 = Be2([["0", "9"], ["A", "F"], ["a", "f"]], false, false), $e2 = "\\", De2 = ke2("\\", false), Le2 = /^[_~.!$&'()*+,;=\/?#@%\-]/, Me2 = Be2(["_", "~", ".", "!", "$", "&", "'", "(", ")", "*", "+", ",", ";", "=", "/", "?", "#", "@", "%", "-"], false, false), Re2 = 0, Xe2 = 0, Oe2 = [{ line: 1, column: 1 }], Pe2 = 0, ze2 = [], Ze2 = 0;
  if ("startRule" in r2) {
    if (!(r2.startRule in u2))
      throw new Error(`Can't start parsing from rule "` + r2.startRule + '".');
    s2 = u2[r2.startRule];
  }
  function _e2(t3, r3) {
    throw function(t4, r4) {
      return new peg$SyntaxError(t4, null, null, r4);
    }(t3, r3 = r3 !== void 0 ? r3 : Je2(Xe2, Re2));
  }
  function ke2(t3, r3) {
    return { type: "literal", text: t3, ignoreCase: r3 };
  }
  function Be2(t3, r3, e6) {
    return { type: "class", parts: t3, inverted: r3, ignoreCase: e6 };
  }
  function Ue2(r3) {
    var e6, n3 = Oe2[r3];
    if (n3)
      return n3;
    for (e6 = r3 - 1; !Oe2[e6]; )
      e6--;
    for (n3 = { line: (n3 = Oe2[e6]).line, column: n3.column }; e6 < r3; )
      t2.charCodeAt(e6) === 10 ? (n3.line++, n3.column = 1) : n3.column++, e6++;
    return Oe2[r3] = n3, n3;
  }
  function Je2(t3, r3) {
    var e6 = Ue2(t3), n3 = Ue2(r3);
    return { start: { offset: t3, line: e6.line, column: e6.column }, end: { offset: r3, line: n3.line, column: n3.column } };
  }
  function Ne2(t3) {
    Re2 < Pe2 || (Re2 > Pe2 && (Pe2 = Re2, ze2 = []), ze2.push(t3));
  }
  function Te2(t3, r3, e6) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(t3, r3), t3, r3, e6);
  }
  function qe2() {
    var t3, r3, e6, u3;
    for (t3 = Re2, r3 = [], e6 = Ge2(); e6 !== n2; )
      r3.push(e6), e6 = Ge2();
    if (r3 !== n2) {
      for (e6 = [], u3 = He2(); u3 !== n2; )
        e6.push(u3), u3 = He2();
      e6 !== n2 ? (Xe2 = t3, t3 = r3 = a2(r3)) : (Re2 = t3, t3 = n2);
    } else
      Re2 = t3, t3 = n2;
    return t3;
  }
  function Ge2() {
    var r3, e6, u3, s3;
    if ((r3 = function() {
      var r4;
      (r4 = function() {
        var r5, e7, u4, s4, a3, f3, i3, h3, l3;
        for (r5 = Re2, e7 = [], u4 = He2(); u4 !== n2; )
          e7.push(u4), u4 = He2();
        if (e7 !== n2)
          if (t2.substr(Re2, 7) === v2 ? (u4 = v2, Re2 += 7) : (u4 = n2, Ze2 === 0 && Ne2(w2)), u4 !== n2) {
            for (s4 = [], a3 = He2(); a3 !== n2; )
              s4.push(a3), a3 = He2();
            if (s4 !== n2)
              if ((a3 = an2()) !== n2) {
                for (f3 = [], i3 = He2(); i3 !== n2; )
                  f3.push(i3), i3 = He2();
                if (f3 !== n2)
                  if ((i3 = un2()) !== n2) {
                    for (h3 = [], l3 = He2(); l3 !== n2; )
                      h3.push(l3), l3 = He2();
                    h3 !== n2 ? (t2.charCodeAt(Re2) === 46 ? (l3 = c2, Re2++) : (l3 = n2, Ze2 === 0 && Ne2(o2)), l3 !== n2 ? (Xe2 = r5, e7 = b2(a3, i3), r5 = e7) : (Re2 = r5, r5 = n2)) : (Re2 = r5, r5 = n2);
                  } else
                    Re2 = r5, r5 = n2;
                else
                  Re2 = r5, r5 = n2;
              } else
                Re2 = r5, r5 = n2;
            else
              Re2 = r5, r5 = n2;
          } else
            Re2 = r5, r5 = n2;
        else
          Re2 = r5, r5 = n2;
        return r5;
      }()) === n2 && (r4 = function() {
        var r5, e7, u4, s4, a3, f3, i3;
        r5 = Re2, e7 = [], u4 = He2();
        for (; u4 !== n2; )
          e7.push(u4), u4 = He2();
        if (e7 !== n2)
          if (t2.substr(Re2, 5) === C2 ? (u4 = C2, Re2 += 5) : (u4 = n2, Ze2 === 0 && Ne2(x2)), u4 !== n2) {
            for (s4 = [], a3 = He2(); a3 !== n2; )
              s4.push(a3), a3 = He2();
            if (s4 !== n2)
              if ((a3 = un2()) !== n2) {
                for (f3 = [], i3 = He2(); i3 !== n2; )
                  f3.push(i3), i3 = He2();
                f3 !== n2 ? (t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2)), i3 !== n2 ? (Xe2 = r5, e7 = F2(a3), r5 = e7) : (Re2 = r5, r5 = n2)) : (Re2 = r5, r5 = n2);
              } else
                Re2 = r5, r5 = n2;
            else
              Re2 = r5, r5 = n2;
          } else
            Re2 = r5, r5 = n2;
        else
          Re2 = r5, r5 = n2;
        return r5;
      }()) === n2 && (r4 = function() {
        var r5, e7, u4, s4, a3, c3, o3, f3, i3, h3, l3, A3;
        r5 = Re2, e7 = [], u4 = He2();
        for (; u4 !== n2; )
          e7.push(u4), u4 = He2();
        if (e7 !== n2)
          if (L2.test(t2.charAt(Re2)) ? (u4 = t2.charAt(Re2), Re2++) : (u4 = n2, Ze2 === 0 && Ne2(M2)), u4 !== n2)
            if (R2.test(t2.charAt(Re2)) ? (s4 = t2.charAt(Re2), Re2++) : (s4 = n2, Ze2 === 0 && Ne2(X2)), s4 !== n2)
              if ($2.test(t2.charAt(Re2)) ? (a3 = t2.charAt(Re2), Re2++) : (a3 = n2, Ze2 === 0 && Ne2(D2)), a3 !== n2)
                if (O2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(P2)), c3 !== n2)
                  if (z2.test(t2.charAt(Re2)) ? (o3 = t2.charAt(Re2), Re2++) : (o3 = n2, Ze2 === 0 && Ne2(Z2)), o3 !== n2)
                    if (_2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(k2)), f3 !== n2) {
                      for (i3 = [], h3 = He2(); h3 !== n2; )
                        i3.push(h3), h3 = He2();
                      if (i3 !== n2)
                        if ((h3 = an2()) !== n2) {
                          for (l3 = [], A3 = He2(); A3 !== n2; )
                            l3.push(A3), A3 = He2();
                          l3 !== n2 && (A3 = un2()) !== n2 ? (Xe2 = r5, e7 = b2(h3, A3), r5 = e7) : (Re2 = r5, r5 = n2);
                        } else
                          Re2 = r5, r5 = n2;
                      else
                        Re2 = r5, r5 = n2;
                    } else
                      Re2 = r5, r5 = n2;
                  else
                    Re2 = r5, r5 = n2;
                else
                  Re2 = r5, r5 = n2;
              else
                Re2 = r5, r5 = n2;
            else
              Re2 = r5, r5 = n2;
          else
            Re2 = r5, r5 = n2;
        else
          Re2 = r5, r5 = n2;
        return r5;
      }()) === n2 && (r4 = function() {
        var r5, e7, u4, s4, a3, c3, o3, f3;
        r5 = Re2, e7 = [], u4 = He2();
        for (; u4 !== n2; )
          e7.push(u4), u4 = He2();
        if (e7 !== n2)
          if (y2.test(t2.charAt(Re2)) ? (u4 = t2.charAt(Re2), Re2++) : (u4 = n2, Ze2 === 0 && Ne2(m2)), u4 !== n2)
            if (S2.test(t2.charAt(Re2)) ? (s4 = t2.charAt(Re2), Re2++) : (s4 = n2, Ze2 === 0 && Ne2(j2)), s4 !== n2)
              if (E2.test(t2.charAt(Re2)) ? (a3 = t2.charAt(Re2), Re2++) : (a3 = n2, Ze2 === 0 && Ne2(I2)), a3 !== n2)
                if ($2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(D2)), c3 !== n2) {
                  for (o3 = [], f3 = He2(); f3 !== n2; )
                    o3.push(f3), f3 = He2();
                  o3 !== n2 && (f3 = un2()) !== n2 ? (Xe2 = r5, e7 = F2(f3), r5 = e7) : (Re2 = r5, r5 = n2);
                } else
                  Re2 = r5, r5 = n2;
              else
                Re2 = r5, r5 = n2;
            else
              Re2 = r5, r5 = n2;
          else
            Re2 = r5, r5 = n2;
        else
          Re2 = r5, r5 = n2;
        return r5;
      }());
      return r4;
    }()) === n2)
      if (r3 = Re2, (e6 = function() {
        var t3, r4, e7;
        t3 = Re2, (r4 = function() {
          var t4, r5;
          return t4 = Re2, (r5 = tn2()) !== n2 && (Xe2 = t4, r5 = rt2(r5)), (t4 = r5) === n2 && (t4 = nn2()) === n2 && (t4 = en2()), t4;
        }()) !== n2 && (e7 = Ke2()) !== n2 ? (Xe2 = t3, r4 = B2(r4, e7), t3 = r4) : (Re2 = t3, t3 = n2);
        t3 === n2 && (t3 = Re2, (r4 = Ye2()) !== n2 ? ((e7 = Ke2()) === n2 && (e7 = null), e7 !== n2 ? (Xe2 = t3, r4 = U2(r4, e7), t3 = r4) : (Re2 = t3, t3 = n2)) : (Re2 = t3, t3 = n2));
        return t3;
      }()) !== n2) {
        for (u3 = [], s3 = He2(); s3 !== n2; )
          u3.push(s3), s3 = He2();
        u3 !== n2 ? (t2.charCodeAt(Re2) === 46 ? (s3 = c2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(o2)), s3 !== n2 ? (Xe2 = r3, r3 = e6 = f2(e6)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2);
      } else
        Re2 = r3, r3 = n2;
    return r3;
  }
  function He2() {
    var r3;
    return (r3 = function() {
      var r4;
      se2.test(t2.charAt(Re2)) ? (r4 = t2.charAt(Re2), Re2++) : (r4 = n2, Ze2 === 0 && Ne2(ae2));
      return r4;
    }()) === n2 && (r3 = function() {
      var r4, e6, u3, s3;
      if (r4 = Re2, t2.charCodeAt(Re2) === 35 ? (e6 = i2, Re2++) : (e6 = n2, Ze2 === 0 && Ne2(h2)), e6 !== n2) {
        for (u3 = [], l2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(A2)); s3 !== n2; )
          u3.push(s3), l2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(A2));
        u3 !== n2 ? (t2.charCodeAt(Re2) === 10 ? (s3 = p2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(d2)), s3 !== n2 ? (Xe2 = r4, r4 = e6 = g2(u3)) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
      } else
        Re2 = r4, r4 = n2;
      return r4;
    }()), r3;
  }
  function Ke2() {
    var r3, e6, u3, s3, a3, c3, o3, f3, i3, h3;
    if (r3 = Re2, (e6 = Ve2()) !== n2)
      if ((u3 = Qe2()) !== n2) {
        for (s3 = [], a3 = Re2, c3 = [], o3 = He2(); o3 !== n2; )
          c3.push(o3), o3 = He2();
        for (c3 !== n2 ? (t2.charCodeAt(Re2) === 59 ? (o3 = J2, Re2++) : (o3 = n2, Ze2 === 0 && Ne2(N2)), o3 !== n2 ? (f3 = Re2, (i3 = Ve2()) !== n2 && (h3 = Qe2()) !== n2 ? (Xe2 = f3, f3 = i3 = T2(e6, u3, i3, h3)) : (Re2 = f3, f3 = n2), f3 === n2 && (f3 = null), f3 !== n2 ? (Xe2 = a3, a3 = c3 = q2(e6, u3, f3)) : (Re2 = a3, a3 = n2)) : (Re2 = a3, a3 = n2)) : (Re2 = a3, a3 = n2); a3 !== n2; ) {
          for (s3.push(a3), a3 = Re2, c3 = [], o3 = He2(); o3 !== n2; )
            c3.push(o3), o3 = He2();
          c3 !== n2 ? (t2.charCodeAt(Re2) === 59 ? (o3 = J2, Re2++) : (o3 = n2, Ze2 === 0 && Ne2(N2)), o3 !== n2 ? (f3 = Re2, (i3 = Ve2()) !== n2 && (h3 = Qe2()) !== n2 ? (Xe2 = f3, f3 = i3 = T2(e6, u3, i3, h3)) : (Re2 = f3, f3 = n2), f3 === n2 && (f3 = null), f3 !== n2 ? (Xe2 = a3, a3 = c3 = q2(e6, u3, f3)) : (Re2 = a3, a3 = n2)) : (Re2 = a3, a3 = n2)) : (Re2 = a3, a3 = n2);
        }
        s3 !== n2 ? (Xe2 = r3, r3 = e6 = G2(e6, u3, s3)) : (Re2 = r3, r3 = n2);
      } else
        Re2 = r3, r3 = n2;
    else
      Re2 = r3, r3 = n2;
    return r3;
  }
  function Qe2() {
    var r3, e6, u3, s3, a3, c3, o3;
    if (r3 = Re2, (e6 = We2()) !== n2) {
      for (u3 = [], s3 = Re2, a3 = [], c3 = He2(); c3 !== n2; )
        a3.push(c3), c3 = He2();
      for (a3 !== n2 ? (t2.charCodeAt(Re2) === 44 ? (c3 = H2, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(K2)), c3 !== n2 && (o3 = We2()) !== n2 ? (Xe2 = s3, s3 = a3 = Q2(e6, o3)) : (Re2 = s3, s3 = n2)) : (Re2 = s3, s3 = n2); s3 !== n2; ) {
        for (u3.push(s3), s3 = Re2, a3 = [], c3 = He2(); c3 !== n2; )
          a3.push(c3), c3 = He2();
        a3 !== n2 ? (t2.charCodeAt(Re2) === 44 ? (c3 = H2, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(K2)), c3 !== n2 && (o3 = We2()) !== n2 ? (Xe2 = s3, s3 = a3 = Q2(e6, o3)) : (Re2 = s3, s3 = n2)) : (Re2 = s3, s3 = n2);
      }
      u3 !== n2 ? (Xe2 = r3, r3 = e6 = V2(e6, u3)) : (Re2 = r3, r3 = n2);
    } else
      Re2 = r3, r3 = n2;
    return r3;
  }
  function Ve2() {
    var r3, e6, u3;
    if (r3 = Re2, (e6 = function() {
      var t3, r4, e7;
      t3 = Re2, r4 = [], e7 = He2();
      for (; e7 !== n2; )
        r4.push(e7), e7 = He2();
      r4 !== n2 && (e7 = en2()) !== n2 ? (Xe2 = t3, r4 = f2(e7), t3 = r4) : (Re2 = t3, t3 = n2);
      return t3;
    }()) !== n2 && (Xe2 = r3, e6 = f2(e6)), (r3 = e6) === n2) {
      for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
        e6.push(u3), u3 = He2();
      e6 !== n2 ? (t2.charCodeAt(Re2) === 97 ? (u3 = W2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(Y2)), u3 !== n2 ? (Xe2 = r3, r3 = e6 = tt2()) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2);
    }
    return r3;
  }
  function We2() {
    var r3, e6;
    return (r3 = function() {
      var r4;
      (r4 = function() {
        var r5, e7, u3, s3, a3, c3, o3;
        for (r5 = Re2, e7 = [], u3 = He2(); u3 !== n2; )
          e7.push(u3), u3 = He2();
        if (e7 !== n2)
          if ((u3 = rn2()) !== n2) {
            for (s3 = [], a3 = He2(); a3 !== n2; )
              s3.push(a3), a3 = He2();
            s3 !== n2 && (a3 = function() {
              var r6, e8, u4, s4, a4, c4, o4, f3;
              if (r6 = Re2, t2.charCodeAt(Re2) === 64 ? (e8 = Bt2, Re2++) : (e8 = n2, Ze2 === 0 && Ne2(Ut2)), e8 !== n2) {
                if (u4 = [], Jt2.test(t2.charAt(Re2)) ? (s4 = t2.charAt(Re2), Re2++) : (s4 = n2, Ze2 === 0 && Ne2(Nt2)), s4 !== n2)
                  for (; s4 !== n2; )
                    u4.push(s4), Jt2.test(t2.charAt(Re2)) ? (s4 = t2.charAt(Re2), Re2++) : (s4 = n2, Ze2 === 0 && Ne2(Nt2));
                else
                  u4 = n2;
                if (u4 !== n2) {
                  if (s4 = [], a4 = Re2, t2.charCodeAt(Re2) === 45 ? (c4 = Tt2, Re2++) : (c4 = n2, Ze2 === 0 && Ne2(qt2)), c4 !== n2) {
                    if (o4 = [], Gt2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(Ht2)), f3 !== n2)
                      for (; f3 !== n2; )
                        o4.push(f3), Gt2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(Ht2));
                    else
                      o4 = n2;
                    o4 !== n2 ? (Xe2 = a4, c4 = Kt2(u4, o4), a4 = c4) : (Re2 = a4, a4 = n2);
                  } else
                    Re2 = a4, a4 = n2;
                  for (; a4 !== n2; )
                    if (s4.push(a4), a4 = Re2, t2.charCodeAt(Re2) === 45 ? (c4 = Tt2, Re2++) : (c4 = n2, Ze2 === 0 && Ne2(qt2)), c4 !== n2) {
                      if (o4 = [], Gt2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(Ht2)), f3 !== n2)
                        for (; f3 !== n2; )
                          o4.push(f3), Gt2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(Ht2));
                      else
                        o4 = n2;
                      o4 !== n2 ? (Xe2 = a4, c4 = Kt2(u4, o4), a4 = c4) : (Re2 = a4, a4 = n2);
                    } else
                      Re2 = a4, a4 = n2;
                  s4 !== n2 ? (Xe2 = r6, e8 = Qt2(u4, s4), r6 = e8) : (Re2 = r6, r6 = n2);
                } else
                  Re2 = r6, r6 = n2;
              } else
                Re2 = r6, r6 = n2;
              return r6;
            }()) !== n2 ? (Xe2 = r5, e7 = pt2(u3, a3), r5 = e7) : (Re2 = r5, r5 = n2);
          } else
            Re2 = r5, r5 = n2;
        else
          Re2 = r5, r5 = n2;
        if (r5 === n2) {
          for (r5 = Re2, e7 = [], u3 = He2(); u3 !== n2; )
            e7.push(u3), u3 = He2();
          if (e7 !== n2)
            if ((u3 = rn2()) !== n2) {
              for (s3 = [], a3 = He2(); a3 !== n2; )
                s3.push(a3), a3 = He2();
              if (s3 !== n2)
                if (t2.substr(Re2, 2) === dt2 ? (a3 = dt2, Re2 += 2) : (a3 = n2, Ze2 === 0 && Ne2(gt2)), a3 !== n2) {
                  for (c3 = [], o3 = He2(); o3 !== n2; )
                    c3.push(o3), o3 = He2();
                  c3 !== n2 && (o3 = en2()) !== n2 ? (Xe2 = r5, e7 = vt2(u3, o3), r5 = e7) : (Re2 = r5, r5 = n2);
                } else
                  Re2 = r5, r5 = n2;
              else
                Re2 = r5, r5 = n2;
            } else
              Re2 = r5, r5 = n2;
          else
            Re2 = r5, r5 = n2;
          if (r5 === n2) {
            for (r5 = Re2, e7 = [], u3 = He2(); u3 !== n2; )
              e7.push(u3), u3 = He2();
            e7 !== n2 && (u3 = rn2()) !== n2 ? (Xe2 = r5, e7 = f2(u3), r5 = e7) : (Re2 = r5, r5 = n2);
          }
        }
        return r5;
      }()) === n2 && (r4 = function() {
        var r5, e7, u3;
        r5 = Re2, e7 = [], u3 = He2();
        for (; u3 !== n2; )
          e7.push(u3), u3 = He2();
        e7 !== n2 ? ((u3 = function() {
          var r6, e8, u4, s3, a3, f3, i3, h3, l3;
          r6 = Re2, e8 = Re2, u4 = Re2, Vt2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Wt2));
          s3 === n2 && (s3 = null);
          if (s3 !== n2) {
            if (a3 = Re2, f3 = [], _t2.test(t2.charAt(Re2)) ? (i3 = t2.charAt(Re2), Re2++) : (i3 = n2, Ze2 === 0 && Ne2(kt2)), i3 !== n2)
              for (; i3 !== n2; )
                f3.push(i3), _t2.test(t2.charAt(Re2)) ? (i3 = t2.charAt(Re2), Re2++) : (i3 = n2, Ze2 === 0 && Ne2(kt2));
            else
              f3 = n2;
            if (f3 !== n2)
              if (t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2)), i3 !== n2) {
                for (h3 = [], _t2.test(t2.charAt(Re2)) ? (l3 = t2.charAt(Re2), Re2++) : (l3 = n2, Ze2 === 0 && Ne2(kt2)); l3 !== n2; )
                  h3.push(l3), _t2.test(t2.charAt(Re2)) ? (l3 = t2.charAt(Re2), Re2++) : (l3 = n2, Ze2 === 0 && Ne2(kt2));
                h3 !== n2 && (l3 = cn2()) !== n2 ? a3 = f3 = [f3, i3, h3, l3] : (Re2 = a3, a3 = n2);
              } else
                Re2 = a3, a3 = n2;
            else
              Re2 = a3, a3 = n2;
            if (a3 === n2) {
              if (a3 = Re2, t2.charCodeAt(Re2) === 46 ? (f3 = c2, Re2++) : (f3 = n2, Ze2 === 0 && Ne2(o2)), f3 !== n2) {
                if (i3 = [], _t2.test(t2.charAt(Re2)) ? (h3 = t2.charAt(Re2), Re2++) : (h3 = n2, Ze2 === 0 && Ne2(kt2)), h3 !== n2)
                  for (; h3 !== n2; )
                    i3.push(h3), _t2.test(t2.charAt(Re2)) ? (h3 = t2.charAt(Re2), Re2++) : (h3 = n2, Ze2 === 0 && Ne2(kt2));
                else
                  i3 = n2;
                i3 !== n2 && (h3 = cn2()) !== n2 ? a3 = f3 = [f3, i3, h3] : (Re2 = a3, a3 = n2);
              } else
                Re2 = a3, a3 = n2;
              if (a3 === n2) {
                if (a3 = Re2, f3 = [], _t2.test(t2.charAt(Re2)) ? (i3 = t2.charAt(Re2), Re2++) : (i3 = n2, Ze2 === 0 && Ne2(kt2)), i3 !== n2)
                  for (; i3 !== n2; )
                    f3.push(i3), _t2.test(t2.charAt(Re2)) ? (i3 = t2.charAt(Re2), Re2++) : (i3 = n2, Ze2 === 0 && Ne2(kt2));
                else
                  f3 = n2;
                f3 !== n2 && (i3 = cn2()) !== n2 ? a3 = f3 = [f3, i3] : (Re2 = a3, a3 = n2);
              }
            }
            a3 !== n2 ? u4 = s3 = [s3, a3] : (Re2 = u4, u4 = n2);
          } else
            Re2 = u4, u4 = n2;
          e8 = u4 !== n2 ? t2.substring(e8, Re2) : u4;
          e8 !== n2 && (Xe2 = r6, e8 = rr(e8));
          return r6 = e8;
        }()) === n2 && (u3 = function() {
          var r6, e8, u4, s3, a3, f3, i3, h3;
          r6 = Re2, e8 = Re2, u4 = Re2, Vt2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Wt2));
          s3 === n2 && (s3 = null);
          if (s3 !== n2) {
            for (a3 = [], _t2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(kt2)); f3 !== n2; )
              a3.push(f3), _t2.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(kt2));
            if (a3 !== n2)
              if (t2.charCodeAt(Re2) === 46 ? (f3 = c2, Re2++) : (f3 = n2, Ze2 === 0 && Ne2(o2)), f3 !== n2) {
                if (i3 = [], _t2.test(t2.charAt(Re2)) ? (h3 = t2.charAt(Re2), Re2++) : (h3 = n2, Ze2 === 0 && Ne2(kt2)), h3 !== n2)
                  for (; h3 !== n2; )
                    i3.push(h3), _t2.test(t2.charAt(Re2)) ? (h3 = t2.charAt(Re2), Re2++) : (h3 = n2, Ze2 === 0 && Ne2(kt2));
                else
                  i3 = n2;
                i3 !== n2 ? u4 = s3 = [s3, a3, f3, i3] : (Re2 = u4, u4 = n2);
              } else
                Re2 = u4, u4 = n2;
            else
              Re2 = u4, u4 = n2;
          } else
            Re2 = u4, u4 = n2;
          e8 = u4 !== n2 ? t2.substring(e8, Re2) : u4;
          e8 !== n2 && (Xe2 = r6, e8 = tr(e8));
          return r6 = e8;
        }()) === n2 && (u3 = function() {
          var r6, e8, u4, s3, a3, c3;
          r6 = Re2, e8 = Re2, u4 = Re2, Vt2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Wt2));
          s3 === n2 && (s3 = null);
          if (s3 !== n2) {
            if (a3 = [], _t2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(kt2)), c3 !== n2)
              for (; c3 !== n2; )
                a3.push(c3), _t2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(kt2));
            else
              a3 = n2;
            a3 !== n2 ? u4 = s3 = [s3, a3] : (Re2 = u4, u4 = n2);
          } else
            Re2 = u4, u4 = n2;
          e8 = u4 !== n2 ? t2.substring(e8, Re2) : u4;
          e8 !== n2 && (Xe2 = r6, e8 = Yt2(e8));
          return r6 = e8;
        }()), u3 !== n2 ? (Xe2 = r5, e7 = f2(u3), r5 = e7) : (Re2 = r5, r5 = n2)) : (Re2 = r5, r5 = n2);
        return r5;
      }()) === n2 && (r4 = function() {
        var r5, e7, u3;
        r5 = Re2, e7 = [], u3 = He2();
        for (; u3 !== n2; )
          e7.push(u3), u3 = He2();
        e7 !== n2 ? (t2.substr(Re2, 4) === wt2 ? (u3 = wt2, Re2 += 4) : (u3 = n2, Ze2 === 0 && Ne2(bt2)), u3 !== n2 ? (Xe2 = r5, e7 = Ct2(), r5 = e7) : (Re2 = r5, r5 = n2)) : (Re2 = r5, r5 = n2);
        if (r5 === n2) {
          for (r5 = Re2, e7 = [], u3 = He2(); u3 !== n2; )
            e7.push(u3), u3 = He2();
          e7 !== n2 ? (t2.substr(Re2, 5) === xt2 ? (u3 = xt2, Re2 += 5) : (u3 = n2, Ze2 === 0 && Ne2(Ft2)), u3 !== n2 ? (Xe2 = r5, e7 = yt2(), r5 = e7) : (Re2 = r5, r5 = n2)) : (Re2 = r5, r5 = n2);
        }
        return r5;
      }());
      return r4;
    }()) === n2 && (r3 = Re2, (e6 = tn2()) !== n2 && (Xe2 = r3, e6 = et2(e6)), (r3 = e6) === n2 && (r3 = Re2, (e6 = nn2()) !== n2 && (Xe2 = r3, e6 = nt2(e6)), (r3 = e6) === n2 && (r3 = Re2, (e6 = Ye2()) !== n2 && (Xe2 = r3, e6 = f2(e6)), (r3 = e6) === n2 && (r3 = Re2, (e6 = en2()) !== n2 && (Xe2 = r3, e6 = ut2(e6)), r3 = e6)))), r3;
  }
  function Ye2() {
    var r3, e6, u3, s3, a3, c3;
    for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
      e6.push(u3), u3 = He2();
    if (e6 !== n2)
      if (t2.charCodeAt(Re2) === 91 ? (u3 = st2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(at2)), u3 !== n2)
        if ((s3 = Ke2()) !== n2) {
          for (a3 = [], c3 = He2(); c3 !== n2; )
            a3.push(c3), c3 = He2();
          a3 !== n2 ? (t2.charCodeAt(Re2) === 93 ? (c3 = ct2, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(ot2)), c3 !== n2 ? (Xe2 = r3, r3 = e6 = f2(s3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2);
        } else
          Re2 = r3, r3 = n2;
      else
        Re2 = r3, r3 = n2;
    else
      Re2 = r3, r3 = n2;
    return r3;
  }
  function tn2() {
    var r3, e6, u3, s3, a3, c3;
    for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
      e6.push(u3), u3 = He2();
    if (e6 !== n2)
      if (t2.charCodeAt(Re2) === 40 ? (u3 = ft2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(it2)), u3 !== n2) {
        for (s3 = [], a3 = We2(); a3 !== n2; )
          s3.push(a3), a3 = We2();
        if (s3 !== n2) {
          for (a3 = [], c3 = He2(); c3 !== n2; )
            a3.push(c3), c3 = He2();
          a3 !== n2 ? (t2.charCodeAt(Re2) === 41 ? (c3 = ht2, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(lt2)), c3 !== n2 ? (Xe2 = r3, r3 = e6 = At2(s3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2);
        } else
          Re2 = r3, r3 = n2;
      } else
        Re2 = r3, r3 = n2;
    else
      Re2 = r3, r3 = n2;
    return r3;
  }
  function rn2() {
    var r3, e6, u3;
    for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
      e6.push(u3), u3 = He2();
    return e6 !== n2 ? ((u3 = function() {
      var r4, e7, u4, s3, a3, c3, o3, f3;
      r4 = Re2, t2.substr(Re2, 3) === lr ? (e7 = lr, Re2 += 3) : (e7 = n2, Ze2 === 0 && Ne2(Ar));
      if (e7 !== n2) {
        for (u4 = [], pr.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(dr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2()); s3 !== n2; )
          u4.push(s3), pr.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(dr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2());
        if (u4 !== n2) {
          if (s3 = [], a3 = Re2, t2.substr(Re2, 2) === gr ? (c3 = gr, Re2 += 2) : (c3 = n2, Ze2 === 0 && Ne2(vr)), c3 !== n2) {
            if (o3 = [], pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
              for (; f3 !== n2; )
                o3.push(f3), pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
            else
              o3 = n2;
            o3 !== n2 ? (Xe2 = a3, c3 = wr(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
          } else
            Re2 = a3, a3 = n2;
          if (a3 === n2)
            if (a3 = Re2, t2.charCodeAt(Re2) === 39 ? (c3 = or, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(fr)), c3 !== n2) {
              if (o3 = [], pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                for (; f3 !== n2; )
                  o3.push(f3), pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
              else
                o3 = n2;
              o3 !== n2 ? (Xe2 = a3, c3 = br(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
            } else
              Re2 = a3, a3 = n2;
          for (; a3 !== n2; ) {
            if (s3.push(a3), a3 = Re2, t2.substr(Re2, 2) === gr ? (c3 = gr, Re2 += 2) : (c3 = n2, Ze2 === 0 && Ne2(vr)), c3 !== n2) {
              if (o3 = [], pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                for (; f3 !== n2; )
                  o3.push(f3), pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
              else
                o3 = n2;
              o3 !== n2 ? (Xe2 = a3, c3 = wr(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
            } else
              Re2 = a3, a3 = n2;
            if (a3 === n2)
              if (a3 = Re2, t2.charCodeAt(Re2) === 39 ? (c3 = or, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(fr)), c3 !== n2) {
                if (o3 = [], pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                  for (; f3 !== n2; )
                    o3.push(f3), pr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(dr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
                else
                  o3 = n2;
                o3 !== n2 ? (Xe2 = a3, c3 = br(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
              } else
                Re2 = a3, a3 = n2;
          }
          s3 !== n2 ? (t2.substr(Re2, 3) === lr ? (a3 = lr, Re2 += 3) : (a3 = n2, Ze2 === 0 && Ne2(Ar)), a3 !== n2 ? (Xe2 = r4, e7 = Cr(u4, s3), r4 = e7) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
        } else
          Re2 = r4, r4 = n2;
      } else
        Re2 = r4, r4 = n2;
      return r4;
    }()) === n2 && (u3 = function() {
      var r4, e7, u4, s3, a3, c3, o3, f3;
      r4 = Re2, t2.substr(Re2, 3) === xr ? (e7 = xr, Re2 += 3) : (e7 = n2, Ze2 === 0 && Ne2(Fr));
      if (e7 !== n2) {
        for (u4 = [], yr.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(mr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2()); s3 !== n2; )
          u4.push(s3), yr.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(mr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2());
        if (u4 !== n2) {
          if (s3 = [], a3 = Re2, t2.substr(Re2, 2) === Sr ? (c3 = Sr, Re2 += 2) : (c3 = n2, Ze2 === 0 && Ne2(jr)), c3 !== n2) {
            if (o3 = [], yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
              for (; f3 !== n2; )
                o3.push(f3), yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
            else
              o3 = n2;
            o3 !== n2 ? (Xe2 = a3, c3 = Er(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
          } else
            Re2 = a3, a3 = n2;
          if (a3 === n2)
            if (a3 = Re2, t2.charCodeAt(Re2) === 34 ? (c3 = ur, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(sr)), c3 !== n2) {
              if (o3 = [], yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                for (; f3 !== n2; )
                  o3.push(f3), yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
              else
                o3 = n2;
              o3 !== n2 ? (Xe2 = a3, c3 = Ir(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
            } else
              Re2 = a3, a3 = n2;
          for (; a3 !== n2; ) {
            if (s3.push(a3), a3 = Re2, t2.substr(Re2, 2) === Sr ? (c3 = Sr, Re2 += 2) : (c3 = n2, Ze2 === 0 && Ne2(jr)), c3 !== n2) {
              if (o3 = [], yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                for (; f3 !== n2; )
                  o3.push(f3), yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
              else
                o3 = n2;
              o3 !== n2 ? (Xe2 = a3, c3 = Er(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
            } else
              Re2 = a3, a3 = n2;
            if (a3 === n2)
              if (a3 = Re2, t2.charCodeAt(Re2) === 34 ? (c3 = ur, Re2++) : (c3 = n2, Ze2 === 0 && Ne2(sr)), c3 !== n2) {
                if (o3 = [], yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2()), f3 !== n2)
                  for (; f3 !== n2; )
                    o3.push(f3), yr.test(t2.charAt(Re2)) ? (f3 = t2.charAt(Re2), Re2++) : (f3 = n2, Ze2 === 0 && Ne2(mr)), f3 === n2 && (f3 = fn2()) === n2 && (f3 = on2());
                else
                  o3 = n2;
                o3 !== n2 ? (Xe2 = a3, c3 = Ir(u4, o3), a3 = c3) : (Re2 = a3, a3 = n2);
              } else
                Re2 = a3, a3 = n2;
          }
          s3 !== n2 ? (t2.substr(Re2, 3) === xr ? (a3 = xr, Re2 += 3) : (a3 = n2, Ze2 === 0 && Ne2(Fr)), a3 !== n2 ? (Xe2 = r4, e7 = Cr(u4, s3), r4 = e7) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
        } else
          Re2 = r4, r4 = n2;
      } else
        Re2 = r4, r4 = n2;
      return r4;
    }()) === n2 && (u3 = function() {
      var r4, e7, u4, s3;
      r4 = Re2, t2.charCodeAt(Re2) === 39 ? (e7 = or, Re2++) : (e7 = n2, Ze2 === 0 && Ne2(fr));
      if (e7 !== n2) {
        for (u4 = [], ir.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(hr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2()); s3 !== n2; )
          u4.push(s3), ir.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(hr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2());
        u4 !== n2 ? (t2.charCodeAt(Re2) === 39 ? (s3 = or, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(fr)), s3 !== n2 ? (Xe2 = r4, e7 = g2(u4), r4 = e7) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
      } else
        Re2 = r4, r4 = n2;
      return r4;
    }()) === n2 && (u3 = function() {
      var r4, e7, u4, s3;
      r4 = Re2, t2.charCodeAt(Re2) === 34 ? (e7 = ur, Re2++) : (e7 = n2, Ze2 === 0 && Ne2(sr));
      if (e7 !== n2) {
        for (u4 = [], ar.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(cr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2()); s3 !== n2; )
          u4.push(s3), ar.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(cr)), s3 === n2 && (s3 = fn2()) === n2 && (s3 = on2());
        u4 !== n2 ? (t2.charCodeAt(Re2) === 34 ? (s3 = ur, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(sr)), s3 !== n2 ? (Xe2 = r4, e7 = g2(u4), r4 = e7) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
      } else
        Re2 = r4, r4 = n2;
      return r4;
    }()), u3 !== n2 ? (Xe2 = r3, r3 = e6 = f2(u3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2), r3;
  }
  function en2() {
    var r3, e6, u3;
    for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
      e6.push(u3), u3 = He2();
    if (e6 !== n2 && (u3 = un2()) !== n2 ? (Xe2 = r3, r3 = e6 = f2(u3)) : (Re2 = r3, r3 = n2), r3 === n2) {
      for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
        e6.push(u3), u3 = He2();
      e6 !== n2 && (u3 = function() {
        var r4, e7;
        (r4 = function() {
          var r5, e8, u4;
          return r5 = Re2, (e8 = sn2()) !== n2 && (u4 = function() {
            var r6, e9, u5, s3, a3, f3, i3, h3;
            if (r6 = Re2, (e9 = ln2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (e9 = Mt2, Re2++) : (e9 = n2, Ze2 === 0 && Ne2(Rt2)), e9 === n2 && (_t2.test(t2.charAt(Re2)) ? (e9 = t2.charAt(Re2), Re2++) : (e9 = n2, Ze2 === 0 && Ne2(kt2)), e9 === n2 && (e9 = dn2()))), e9 !== n2) {
              for (u5 = [], (s3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (s3 = Mt2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Rt2)), s3 === n2 && (s3 = dn2())); s3 !== n2; )
                u5.push(s3), (s3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (s3 = Mt2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Rt2)), s3 === n2 && (s3 = dn2()));
              if (u5 !== n2) {
                if (s3 = [], a3 = Re2, f3 = [], t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2)), i3 !== n2)
                  for (; i3 !== n2; )
                    f3.push(i3), t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2));
                else
                  f3 = n2;
                if (f3 !== n2) {
                  if (i3 = [], (h3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (h3 = Mt2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(Rt2)), h3 === n2 && (h3 = dn2())), h3 !== n2)
                    for (; h3 !== n2; )
                      i3.push(h3), (h3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (h3 = Mt2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(Rt2)), h3 === n2 && (h3 = dn2()));
                  else
                    i3 = n2;
                  i3 !== n2 ? (Xe2 = a3, f3 = ye2(e9, u5, f3, i3), a3 = f3) : (Re2 = a3, a3 = n2);
                } else
                  Re2 = a3, a3 = n2;
                for (; a3 !== n2; ) {
                  if (s3.push(a3), a3 = Re2, f3 = [], t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2)), i3 !== n2)
                    for (; i3 !== n2; )
                      f3.push(i3), t2.charCodeAt(Re2) === 46 ? (i3 = c2, Re2++) : (i3 = n2, Ze2 === 0 && Ne2(o2));
                  else
                    f3 = n2;
                  if (f3 !== n2) {
                    if (i3 = [], (h3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (h3 = Mt2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(Rt2)), h3 === n2 && (h3 = dn2())), h3 !== n2)
                      for (; h3 !== n2; )
                        i3.push(h3), (h3 = An2()) === n2 && (t2.charCodeAt(Re2) === 58 ? (h3 = Mt2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(Rt2)), h3 === n2 && (h3 = dn2()));
                    else
                      i3 = n2;
                    i3 !== n2 ? (Xe2 = a3, f3 = ye2(e9, u5, f3, i3), a3 = f3) : (Re2 = a3, a3 = n2);
                  } else
                    Re2 = a3, a3 = n2;
                }
                s3 !== n2 ? (Xe2 = r6, e9 = me2(e9, u5, s3), r6 = e9) : (Re2 = r6, r6 = n2);
              } else
                Re2 = r6, r6 = n2;
            } else
              Re2 = r6, r6 = n2;
            return r6;
          }()) !== n2 ? (Xe2 = r5, e8 = Pt2(e8, u4), r5 = e8) : (Re2 = r5, r5 = n2), r5;
        }()) === n2 && (r4 = Re2, (e7 = sn2()) !== n2 && (Xe2 = r4, e7 = mt2(e7)), r4 = e7);
        return r4;
      }()) !== n2 ? (Xe2 = r3, r3 = e6 = f2(u3)) : (Re2 = r3, r3 = n2);
    }
    return r3;
  }
  function nn2() {
    var r3, e6, u3;
    for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
      e6.push(u3), u3 = He2();
    if (e6 !== n2 && (u3 = function() {
      var r4, e7, u4, s3, a3, f3, i3, h3, l3, A3;
      r4 = Re2, e7 = Re2, t2.substr(Re2, 2) === zt2 ? (u4 = zt2, Re2 += 2) : (u4 = n2, Ze2 === 0 && Ne2(Zt2));
      if (u4 !== n2)
        if ((s3 = ln2()) === n2 && (_t2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(kt2))), s3 !== n2) {
          for (a3 = [], f3 = An2(); f3 !== n2; )
            a3.push(f3), f3 = An2();
          if (a3 !== n2) {
            if (f3 = [], i3 = Re2, h3 = [], t2.charCodeAt(Re2) === 46 ? (l3 = c2, Re2++) : (l3 = n2, Ze2 === 0 && Ne2(o2)), l3 !== n2)
              for (; l3 !== n2; )
                h3.push(l3), t2.charCodeAt(Re2) === 46 ? (l3 = c2, Re2++) : (l3 = n2, Ze2 === 0 && Ne2(o2));
            else
              h3 = n2;
            if (h3 !== n2) {
              if (l3 = [], (A3 = An2()) !== n2)
                for (; A3 !== n2; )
                  l3.push(A3), A3 = An2();
              else
                l3 = n2;
              l3 !== n2 ? i3 = h3 = [h3, l3] : (Re2 = i3, i3 = n2);
            } else
              Re2 = i3, i3 = n2;
            for (; i3 !== n2; ) {
              if (f3.push(i3), i3 = Re2, h3 = [], t2.charCodeAt(Re2) === 46 ? (l3 = c2, Re2++) : (l3 = n2, Ze2 === 0 && Ne2(o2)), l3 !== n2)
                for (; l3 !== n2; )
                  h3.push(l3), t2.charCodeAt(Re2) === 46 ? (l3 = c2, Re2++) : (l3 = n2, Ze2 === 0 && Ne2(o2));
              else
                h3 = n2;
              if (h3 !== n2) {
                if (l3 = [], (A3 = An2()) !== n2)
                  for (; A3 !== n2; )
                    l3.push(A3), A3 = An2();
                else
                  l3 = n2;
                l3 !== n2 ? i3 = h3 = [h3, l3] : (Re2 = i3, i3 = n2);
              } else
                Re2 = i3, i3 = n2;
            }
            f3 !== n2 ? e7 = u4 = [u4, s3, a3, f3] : (Re2 = e7, e7 = n2);
          } else
            Re2 = e7, e7 = n2;
        } else
          Re2 = e7, e7 = n2;
      else
        Re2 = e7, e7 = n2;
      r4 = e7 !== n2 ? t2.substring(r4, Re2) : e7;
      return r4;
    }()) !== n2 ? (Xe2 = r3, r3 = e6 = f2(u3)) : (Re2 = r3, r3 = n2), r3 === n2) {
      for (r3 = Re2, e6 = [], u3 = He2(); u3 !== n2; )
        e6.push(u3), u3 = He2();
      e6 !== n2 && (u3 = function() {
        var r4, e7, u4, s3;
        r4 = Re2, t2.charCodeAt(Re2) === 91 ? (e7 = st2, Re2++) : (e7 = n2, Ze2 === 0 && Ne2(at2));
        if (e7 !== n2) {
          for (u4 = [], s3 = He2(); s3 !== n2; )
            u4.push(s3), s3 = He2();
          u4 !== n2 ? (t2.charCodeAt(Re2) === 93 ? (s3 = ct2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(ot2)), s3 !== n2 ? (Xe2 = r4, e7 = ce2(), r4 = e7) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
        } else
          Re2 = r4, r4 = n2;
        return r4;
      }()) !== n2 ? (Xe2 = r3, r3 = e6 = f2(u3)) : (Re2 = r3, r3 = n2);
    }
    return r3;
  }
  function un2() {
    var r3, e6, u3, s3;
    if (r3 = Re2, t2.charCodeAt(Re2) === 60 ? (e6 = St2, Re2++) : (e6 = n2, Ze2 === 0 && Ne2(jt2)), e6 !== n2) {
      for (u3 = [], Et2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(It2)), s3 === n2 && (s3 = on2()); s3 !== n2; )
        u3.push(s3), Et2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(It2)), s3 === n2 && (s3 = on2());
      u3 !== n2 ? (t2.charCodeAt(Re2) === 62 ? (s3 = $t2, Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Dt2)), s3 !== n2 ? (Xe2 = r3, r3 = e6 = Lt2(u3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2);
    } else
      Re2 = r3, r3 = n2;
    return r3;
  }
  function sn2() {
    var r3, e6, u3;
    return r3 = Re2, (e6 = pn2()) === n2 && (e6 = null), e6 !== n2 ? (t2.charCodeAt(Re2) === 58 ? (u3 = Mt2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(Rt2)), u3 !== n2 ? (Xe2 = r3, r3 = e6 = Xt2(e6)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2), r3;
  }
  function an2() {
    var r3, e6, u3;
    return r3 = Re2, (e6 = pn2()) === n2 && (e6 = null), e6 !== n2 ? (t2.charCodeAt(Re2) === 58 ? (u3 = Mt2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(Rt2)), u3 !== n2 ? (Xe2 = r3, r3 = e6 = Ot2(e6)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2), r3;
  }
  function cn2() {
    var r3, e6, u3, s3, a3, c3;
    if (r3 = Re2, e6 = Re2, er.test(t2.charAt(Re2)) ? (u3 = t2.charAt(Re2), Re2++) : (u3 = n2, Ze2 === 0 && Ne2(nr)), u3 !== n2)
      if (Vt2.test(t2.charAt(Re2)) ? (s3 = t2.charAt(Re2), Re2++) : (s3 = n2, Ze2 === 0 && Ne2(Wt2)), s3 === n2 && (s3 = null), s3 !== n2) {
        if (a3 = [], _t2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(kt2)), c3 !== n2)
          for (; c3 !== n2; )
            a3.push(c3), _t2.test(t2.charAt(Re2)) ? (c3 = t2.charAt(Re2), Re2++) : (c3 = n2, Ze2 === 0 && Ne2(kt2));
        else
          a3 = n2;
        a3 !== n2 ? e6 = u3 = [u3, s3, a3] : (Re2 = e6, e6 = n2);
      } else
        Re2 = e6, e6 = n2;
    else
      Re2 = e6, e6 = n2;
    return r3 = e6 !== n2 ? t2.substring(r3, Re2) : e6;
  }
  function on2() {
    var r3, e6, u3, s3, a3, c3, o3, f3, i3, h3, l3;
    return r3 = Re2, t2.substr(Re2, 2) === $r ? (e6 = $r, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Dr)), e6 !== n2 ? (u3 = Re2, (s3 = gn2()) !== n2 && (a3 = gn2()) !== n2 && (c3 = gn2()) !== n2 && (o3 = gn2()) !== n2 && (f3 = gn2()) !== n2 && (i3 = gn2()) !== n2 && (h3 = gn2()) !== n2 && (l3 = gn2()) !== n2 ? u3 = s3 = [s3, a3, c3, o3, f3, i3, h3, l3] : (Re2 = u3, u3 = n2), u3 !== n2 ? (Xe2 = r3, r3 = e6 = Lr(u3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2), r3 === n2 && (r3 = Re2, t2.substr(Re2, 2) === Mr ? (e6 = Mr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Rr)), e6 !== n2 ? (u3 = Re2, (s3 = gn2()) !== n2 && (a3 = gn2()) !== n2 && (c3 = gn2()) !== n2 && (o3 = gn2()) !== n2 ? u3 = s3 = [s3, a3, c3, o3] : (Re2 = u3, u3 = n2), u3 !== n2 ? (Xe2 = r3, r3 = e6 = Xr(u3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2)), r3;
  }
  function fn2() {
    var r3, e6;
    return r3 = Re2, t2.substr(Re2, 2) === Or ? (e6 = Or, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Pr)), e6 !== n2 && (Xe2 = r3, e6 = zr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Zr ? (e6 = Zr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(_r)), e6 !== n2 && (Xe2 = r3, e6 = kr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Br ? (e6 = Br, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Ur)), e6 !== n2 && (Xe2 = r3, e6 = Jr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Nr ? (e6 = Nr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Tr)), e6 !== n2 && (Xe2 = r3, e6 = qr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Gr ? (e6 = Gr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Hr)), e6 !== n2 && (Xe2 = r3, e6 = Kr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Qr ? (e6 = Qr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(Vr)), e6 !== n2 && (Xe2 = r3, e6 = Wr()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === Yr ? (e6 = Yr, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(te2)), e6 !== n2 && (Xe2 = r3, e6 = re2()), (r3 = e6) === n2 && (r3 = Re2, t2.substr(Re2, 2) === ee2 ? (e6 = ee2, Re2 += 2) : (e6 = n2, Ze2 === 0 && Ne2(ne2)), e6 !== n2 && (Xe2 = r3, e6 = ue2()), r3 = e6))))))), r3;
  }
  function hn2() {
    var r3, e6, u3;
    return r3 = Re2, oe2.test(t2.charAt(Re2)) ? (e6 = t2.charAt(Re2), Re2++) : (e6 = n2, Ze2 === 0 && Ne2(fe2)), e6 !== n2 ? (ie2.test(t2.charAt(Re2)) ? (u3 = t2.charAt(Re2), Re2++) : (u3 = n2, Ze2 === 0 && Ne2(he2)), u3 !== n2 ? (Xe2 = r3, r3 = e6 = le2(e6, u3)) : (Re2 = r3, r3 = n2)) : (Re2 = r3, r3 = n2), r3 === n2 && (Ae2.test(t2.charAt(Re2)) ? (r3 = t2.charAt(Re2), Re2++) : (r3 = n2, Ze2 === 0 && Ne2(pe2))), r3;
  }
  function ln2() {
    var r3;
    return (r3 = hn2()) === n2 && (t2.charCodeAt(Re2) === 95 ? (r3 = de2, Re2++) : (r3 = n2, Ze2 === 0 && Ne2(ge2))), r3;
  }
  function An2() {
    var r3;
    return (r3 = ln2()) === n2 && (t2.charCodeAt(Re2) === 45 ? (r3 = Tt2, Re2++) : (r3 = n2, Ze2 === 0 && Ne2(qt2)), r3 === n2 && (_t2.test(t2.charAt(Re2)) ? (r3 = t2.charAt(Re2), Re2++) : (r3 = n2, Ze2 === 0 && Ne2(kt2)), r3 === n2 && (t2.charCodeAt(Re2) === 183 ? (r3 = ve2, Re2++) : (r3 = n2, Ze2 === 0 && Ne2(we2)), r3 === n2 && (be2.test(t2.charAt(Re2)) ? (r3 = t2.charAt(Re2), Re2++) : (r3 = n2, Ze2 === 0 && Ne2(Ce2)), r3 === n2 && (xe2.test(t2.charAt(Re2)) ? (r3 = t2.charAt(Re2), Re2++) : (r3 = n2, Ze2 === 0 && Ne2(Fe2))))))), r3;
  }
  function pn2() {
    var r3, e6, u3, s3, a3, f3, i3, h3, l3;
    if (r3 = Re2, e6 = Re2, (u3 = hn2()) !== n2) {
      for (s3 = [], a3 = An2(); a3 !== n2; )
        s3.push(a3), a3 = An2();
      if (s3 !== n2) {
        if (a3 = [], f3 = Re2, i3 = [], t2.charCodeAt(Re2) === 46 ? (h3 = c2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(o2)), h3 !== n2)
          for (; h3 !== n2; )
            i3.push(h3), t2.charCodeAt(Re2) === 46 ? (h3 = c2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(o2));
        else
          i3 = n2;
        if (i3 !== n2) {
          if (h3 = [], (l3 = An2()) !== n2)
            for (; l3 !== n2; )
              h3.push(l3), l3 = An2();
          else
            h3 = n2;
          h3 !== n2 ? f3 = i3 = [i3, h3] : (Re2 = f3, f3 = n2);
        } else
          Re2 = f3, f3 = n2;
        for (; f3 !== n2; ) {
          if (a3.push(f3), f3 = Re2, i3 = [], t2.charCodeAt(Re2) === 46 ? (h3 = c2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(o2)), h3 !== n2)
            for (; h3 !== n2; )
              i3.push(h3), t2.charCodeAt(Re2) === 46 ? (h3 = c2, Re2++) : (h3 = n2, Ze2 === 0 && Ne2(o2));
          else
            i3 = n2;
          if (i3 !== n2) {
            if (h3 = [], (l3 = An2()) !== n2)
              for (; l3 !== n2; )
                h3.push(l3), l3 = An2();
            else
              h3 = n2;
            h3 !== n2 ? f3 = i3 = [i3, h3] : (Re2 = f3, f3 = n2);
          } else
            Re2 = f3, f3 = n2;
        }
        a3 !== n2 ? e6 = u3 = [u3, s3, a3] : (Re2 = e6, e6 = n2);
      } else
        Re2 = e6, e6 = n2;
    } else
      Re2 = e6, e6 = n2;
    return r3 = e6 !== n2 ? t2.substring(r3, Re2) : e6;
  }
  function dn2() {
    var r3;
    return (r3 = function() {
      var r4, e6, u3, s3, a3;
      r4 = Re2, e6 = Re2, t2.charCodeAt(Re2) === 37 ? (u3 = Se2, Re2++) : (u3 = n2, Ze2 === 0 && Ne2(je2));
      u3 !== n2 && (s3 = gn2()) !== n2 && (a3 = gn2()) !== n2 ? e6 = u3 = [u3, s3, a3] : (Re2 = e6, e6 = n2);
      r4 = e6 !== n2 ? t2.substring(r4, Re2) : e6;
      return r4;
    }()) === n2 && (r3 = function() {
      var r4, e6, u3;
      r4 = Re2, t2.charCodeAt(Re2) === 92 ? (e6 = $e2, Re2++) : (e6 = n2, Ze2 === 0 && Ne2(De2));
      e6 !== n2 ? (Le2.test(t2.charAt(Re2)) ? (u3 = t2.charAt(Re2), Re2++) : (u3 = n2, Ze2 === 0 && Ne2(Me2)), u3 !== n2 ? (Xe2 = r4, e6 = f2(u3), r4 = e6) : (Re2 = r4, r4 = n2)) : (Re2 = r4, r4 = n2);
      return r4;
    }()), r3;
  }
  function gn2() {
    var r3;
    return Ee2.test(t2.charAt(Re2)) ? (r3 = t2.charAt(Re2), Re2++) : (r3 = n2, Ze2 === 0 && Ne2(Ie2)), r3;
  }
  var vn2 = { base: [], data: {}, addBase: function(t3) {
    if (vn2.base.length === 0)
      return void vn2.base.push(t3);
    const r3 = vn2.base[vn2.base.length - 1];
    r3 !== t3 && vn2.base.push(new URL(t3, r3).toString());
  }, addPrefix: function(t3, r3) {
    const e6 = vn2.data[t3];
    e6 === void 0 ? vn2.data[t3] = [{ uri: r3, count: 0 }] : e6[e6.length - 1].uri !== r3 && e6.push({ uri: r3, count: 0 });
  }, hasPrefix: function(t3) {
    return this.data[t3] !== void 0;
  }, resolve: function(t3, e6) {
    const n3 = Object.keys(vn2.data).find((r3) => t3.indexOf(r3 + ":") === 0);
    if (n3 !== void 0) {
      const r3 = vn2.data[n3];
      if (r3.length === 1 && e6 !== true)
        return t3;
      const u4 = r3[r3.length - 1].uri;
      return t3.replace(n3 + ":", u4);
    }
    var u3 = vn2.base.length === 0 ? r2.baseIRI : vn2.base[vn2.base.length - 1];
    return !u3 || t3.match(/^(http:|https:|urn:|file:)/) ? t3 : t3.indexOf("//") === 0 && u3 ? u3.split("//")[0] + t3 : new URL(t3, u3).toString();
  }, increment: function(t3) {
    const r3 = vn2.data[t3];
    r3 !== void 0 && r3[r3.length - 1].count++;
  }, decrement: function(t3) {
    const r3 = vn2.data[t3];
    r3 !== void 0 && r3[r3.length - 1].count--;
  }, toJSON: function() {
    const t3 = {};
    return vn2.base.length > 0 && (t3["@context"] === void 0 && (t3["@context"] = {}), t3["@context"]["@base"] = vn2.base[0]), Object.keys(vn2.data).forEach((r3) => {
      const e6 = vn2.data[r3][0];
      e6.uri === "http://www.w3.org/2001/XMLSchema#" && e6.count < 1 || (t3["@context"] === void 0 && (t3["@context"] = {}), t3["@context"][r3] = e6.uri);
    }), t3;
  } };
  function wn2(t3, r3) {
    if (t3["@list"] === void 0)
      return t3;
    if (!r3 && !t3["@list"].find((t4) => t4["@list"] !== void 0))
      return t3;
    if (t3["@list"].length === 0)
      return { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil" };
    var e6 = {}, n3 = null;
    return t3["@list"].forEach((t4) => {
      n3 === null ? n3 = e6 : (n3["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = {}, n3 = n3["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"]), n3["http://www.w3.org/1999/02/22-rdf-syntax-ns#first"] = wn2(t4, true), n3["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil" };
    }), e6;
  }
  if ((e5 = s2()) !== n2 && Re2 === t2.length)
    return e5;
  throw e5 !== n2 && Re2 < t2.length && Ne2({ type: "end" }), Te2(ze2, Pe2 < t2.length ? t2.charAt(Pe2) : null, Pe2 < t2.length ? Je2(Pe2, Pe2 + 1) : Je2(Pe2, Pe2));
}
peg$subclass(peg$SyntaxError, Error), peg$SyntaxError.buildMessage = function(t2, r2) {
  var e5 = { literal: function(t3) {
    return '"' + u2(t3.text) + '"';
  }, class: function(t3) {
    var r3, e6 = "";
    for (r3 = 0; r3 < t3.parts.length; r3++)
      e6 += t3.parts[r3] instanceof Array ? s2(t3.parts[r3][0]) + "-" + s2(t3.parts[r3][1]) : s2(t3.parts[r3]);
    return "[" + (t3.inverted ? "^" : "") + e6 + "]";
  }, any: function(t3) {
    return "any character";
  }, end: function(t3) {
    return "end of input";
  }, other: function(t3) {
    return t3.description;
  } };
  function n2(t3) {
    return t3.charCodeAt(0).toString(16).toUpperCase();
  }
  function u2(t3) {
    return t3.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t4) {
      return "\\x0" + n2(t4);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t4) {
      return "\\x" + n2(t4);
    });
  }
  function s2(t3) {
    return t3.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t4) {
      return "\\x0" + n2(t4);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t4) {
      return "\\x" + n2(t4);
    });
  }
  return "Expected " + function(t3) {
    var r3, n3, u3, s3 = new Array(t3.length);
    for (r3 = 0; r3 < t3.length; r3++)
      s3[r3] = (u3 = t3[r3], e5[u3.type](u3));
    if (s3.sort(), s3.length > 0) {
      for (r3 = 1, n3 = 1; r3 < s3.length; r3++)
        s3[r3 - 1] !== s3[r3] && (s3[n3] = s3[r3], n3++);
      s3.length = n3;
    }
    switch (s3.length) {
      case 1:
        return s3[0];
      case 2:
        return s3[0] + " or " + s3[1];
      default:
        return s3.slice(0, -1).join(", ") + ", or " + s3[s3.length - 1];
    }
  }(t2) + " but " + function(t3) {
    return t3 ? '"' + u2(t3) + '"' : "end of input";
  }(r2) + " found.";
};
var ttl2jsonld = peg$parse;

// src/js/vendor/jsonld.js
var e = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function t(e5) {
  if (e5.__esModule)
    return e5;
  var t2 = Object.defineProperty({}, "__esModule", { value: true });
  return Object.keys(e5).forEach(function(n2) {
    var o2 = Object.getOwnPropertyDescriptor(e5, n2);
    Object.defineProperty(t2, n2, o2.get ? o2 : { enumerable: true, get: function() {
      return e5[n2];
    } });
  }), t2;
}
var n = class e2 {
  constructor(e5, t2 = new Map(), n2 = 0) {
    this.prefix = e5, this._existing = t2, this.counter = n2;
  }
  clone() {
    const { prefix: t2, _existing: n2, counter: o2 } = this;
    return new e2(t2, new Map(n2), o2);
  }
  getId(e5) {
    const t2 = e5 && this._existing.get(e5);
    if (t2)
      return t2;
    const n2 = this.prefix + this.counter;
    return this.counter++, e5 && this._existing.set(e5, n2), n2;
  }
  hasId(e5) {
    return this._existing.has(e5);
  }
  getOldIds() {
    return [...this._existing.keys()];
  }
};
!function(e5, t2) {
  if (!e5.setImmediate) {
    var n2, o2, r2, a2, i2, s2 = 1, l2 = {}, c2 = false, d2 = e5.document, u2 = Object.getPrototypeOf && Object.getPrototypeOf(e5);
    u2 = u2 && u2.setTimeout ? u2 : e5, {}.toString.call(e5.process) === "[object process]" ? n2 = function(e6) {
      process.nextTick(function() {
        h2(e6);
      });
    } : !function() {
      if (e5.postMessage && !e5.importScripts) {
        var t3 = true, n3 = e5.onmessage;
        return e5.onmessage = function() {
          t3 = false;
        }, e5.postMessage("", "*"), e5.onmessage = n3, t3;
      }
    }() ? e5.MessageChannel ? ((r2 = new MessageChannel()).port1.onmessage = function(e6) {
      h2(e6.data);
    }, n2 = function(e6) {
      r2.port2.postMessage(e6);
    }) : d2 && "onreadystatechange" in d2.createElement("script") ? (o2 = d2.documentElement, n2 = function(e6) {
      var t3 = d2.createElement("script");
      t3.onreadystatechange = function() {
        h2(e6), t3.onreadystatechange = null, o2.removeChild(t3), t3 = null;
      }, o2.appendChild(t3);
    }) : n2 = function(e6) {
      setTimeout(h2, 0, e6);
    } : (a2 = "setImmediate$" + Math.random() + "$", i2 = function(t3) {
      t3.source === e5 && typeof t3.data == "string" && t3.data.indexOf(a2) === 0 && h2(+t3.data.slice(a2.length));
    }, e5.addEventListener ? e5.addEventListener("message", i2, false) : e5.attachEvent("onmessage", i2), n2 = function(t3) {
      e5.postMessage(a2 + t3, "*");
    }), u2.setImmediate = function(e6) {
      typeof e6 != "function" && (e6 = new Function("" + e6));
      for (var t3 = new Array(arguments.length - 1), o3 = 0; o3 < t3.length; o3++)
        t3[o3] = arguments[o3 + 1];
      var r3 = { callback: e6, args: t3 };
      return l2[s2] = r3, n2(s2), s2++;
    }, u2.clearImmediate = p2;
  }
  function p2(e6) {
    delete l2[e6];
  }
  function h2(e6) {
    if (c2)
      setTimeout(h2, 0, e6);
    else {
      var t3 = l2[e6];
      if (t3) {
        c2 = true;
        try {
          !function(e7) {
            var t4 = e7.callback, n3 = e7.args;
            switch (n3.length) {
              case 0:
                t4();
                break;
              case 1:
                t4(n3[0]);
                break;
              case 2:
                t4(n3[0], n3[1]);
                break;
              case 3:
                t4(n3[0], n3[1], n3[2]);
                break;
              default:
                t4.apply(void 0, n3);
            }
          }(t3);
        } finally {
          p2(e6), c2 = false;
        }
      }
    }
  }
}(typeof self == "undefined" ? e : self);
var o = self.crypto || self.msCrypto;
var r = class {
  constructor(e5) {
    if (!o || !o.subtle)
      throw new Error("crypto.subtle not found.");
    if (e5 === "sha256")
      this.algorithm = { name: "SHA-256" };
    else {
      if (e5 !== "sha1")
        throw new Error(`Unsupport algorithm "${e5}".`);
      this.algorithm = { name: "SHA-1" };
    }
    this._content = "";
  }
  update(e5) {
    this._content += e5;
  }
  digest() {
    return __async(this, null, function* () {
      const e5 = new TextEncoder().encode(this._content), t2 = new Uint8Array(yield o.subtle.digest(this.algorithm, e5));
      let n2 = "";
      for (let e6 = 0; e6 < t2.length; ++e6)
        n2 += t2[e6].toString(16).padStart(2, "0");
      return n2;
    });
  }
};
var a = class {
  constructor(e5) {
    this.current = e5.sort(), this.done = false, this.dir = new Map();
    for (let t2 = 0; t2 < e5.length; ++t2)
      this.dir.set(e5[t2], true);
  }
  hasNext() {
    return !this.done;
  }
  next() {
    const { current: e5, dir: t2 } = this, n2 = e5.slice();
    let o2 = null, r2 = 0;
    const a2 = e5.length;
    for (let n3 = 0; n3 < a2; ++n3) {
      const i2 = e5[n3], s2 = t2.get(i2);
      (o2 === null || i2 > o2) && (s2 && n3 > 0 && i2 > e5[n3 - 1] || !s2 && n3 < a2 - 1 && i2 > e5[n3 + 1]) && (o2 = i2, r2 = n3);
    }
    if (o2 === null)
      this.done = true;
    else {
      const n3 = t2.get(o2) ? r2 - 1 : r2 + 1;
      e5[r2] = e5[n3], e5[n3] = o2;
      for (const n4 of e5)
        n4 > o2 && t2.set(n4, !t2.get(n4));
    }
    return n2;
  }
};
var i = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString";
var s = "http://www.w3.org/2001/XMLSchema#string";
var l = { eoln: /(?:\r\n)|(?:\n)|(?:\r)/g };
l.empty = new RegExp("^[ \\t]*$"), l.quad = new RegExp('^[ \\t]*(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9])(?:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040.])*(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040]))?))[ \\t]+(?:<([^:]+:[^>]*)>)[ \\t]+(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9])(?:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040.])*(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040]))?)|(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:(?:\\^\\^(?:<([^:]+:[^>]*)>))|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9])(?:(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040.])*(?:[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_0-9-\xB7\u0300-\u036F\u203F-\u2040]))?))[ \\t]*\\.))[ \\t]*$');
var c = class e3 {
  static parse(e5) {
    const t2 = [], n2 = {}, o2 = e5.split(l.eoln);
    let r2 = 0;
    for (const e6 of o2) {
      if (r2++, l.empty.test(e6))
        continue;
      const o3 = e6.match(l.quad);
      if (o3 === null)
        throw new Error("N-Quads parse error on line " + r2 + ".");
      const a2 = { subject: null, predicate: null, object: null, graph: null };
      if (o3[1] !== void 0 ? a2.subject = { termType: "NamedNode", value: o3[1] } : a2.subject = { termType: "BlankNode", value: o3[2] }, a2.predicate = { termType: "NamedNode", value: o3[3] }, o3[4] !== void 0 ? a2.object = { termType: "NamedNode", value: o3[4] } : o3[5] !== void 0 ? a2.object = { termType: "BlankNode", value: o3[5] } : (a2.object = { termType: "Literal", value: void 0, datatype: { termType: "NamedNode" } }, o3[7] !== void 0 ? a2.object.datatype.value = o3[7] : o3[8] !== void 0 ? (a2.object.datatype.value = i, a2.object.language = o3[8]) : a2.object.datatype.value = s, a2.object.value = o3[6].replace(p, function(e7, t3, n3, o4) {
        if (t3)
          switch (t3) {
            case "t":
              return "	";
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
        if (n3)
          return String.fromCharCode(parseInt(n3, 16));
        if (o4)
          throw new Error("Unsupported U escape");
      })), o3[9] !== void 0 ? a2.graph = { termType: "NamedNode", value: o3[9] } : o3[10] !== void 0 ? a2.graph = { termType: "BlankNode", value: o3[10] } : a2.graph = { termType: "DefaultGraph", value: "" }, a2.graph.value in n2) {
        let e7 = true;
        const o4 = n2[a2.graph.value];
        for (const t3 of o4)
          if (d(t3, a2)) {
            e7 = false;
            break;
          }
        e7 && (o4.push(a2), t2.push(a2));
      } else
        n2[a2.graph.value] = [a2], t2.push(a2);
    }
    return t2;
  }
  static serialize(t2) {
    Array.isArray(t2) || (t2 = e3.legacyDatasetToQuads(t2));
    const n2 = [];
    for (const o2 of t2)
      n2.push(e3.serializeQuad(o2));
    return n2.sort().join("");
  }
  static serializeQuad(e5) {
    const t2 = e5.subject, n2 = e5.predicate, o2 = e5.object, r2 = e5.graph;
    let a2 = "";
    return t2.termType === "NamedNode" ? a2 += `<${t2.value}>` : a2 += `${t2.value}`, a2 += ` <${n2.value}> `, o2.termType === "NamedNode" ? a2 += `<${o2.value}>` : o2.termType === "BlankNode" ? a2 += o2.value : (a2 += `"${function(e6) {
      return e6.replace(u, function(e7) {
        switch (e7) {
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
    }(o2.value)}"`, o2.datatype.value === i ? o2.language && (a2 += `@${o2.language}`) : o2.datatype.value !== s && (a2 += `^^<${o2.datatype.value}>`)), r2.termType === "NamedNode" ? a2 += ` <${r2.value}>` : r2.termType === "BlankNode" && (a2 += ` ${r2.value}`), a2 += " .\n", a2;
  }
  static legacyDatasetToQuads(e5) {
    const t2 = [], n2 = { "blank node": "BlankNode", IRI: "NamedNode", literal: "Literal" };
    for (const o2 in e5) {
      e5[o2].forEach((e6) => {
        const r2 = {};
        for (const t3 in e6) {
          const o3 = e6[t3], a2 = { termType: n2[o3.type], value: o3.value };
          a2.termType === "Literal" && (a2.datatype = { termType: "NamedNode" }, "datatype" in o3 && (a2.datatype.value = o3.datatype), "language" in o3 ? ("datatype" in o3 || (a2.datatype.value = i), a2.language = o3.language) : "datatype" in o3 || (a2.datatype.value = s)), r2[t3] = a2;
        }
        r2.graph = o2 === "@default" ? { termType: "DefaultGraph", value: "" } : { termType: o2.startsWith("_:") ? "BlankNode" : "NamedNode", value: o2 }, t2.push(r2);
      });
    }
    return t2;
  }
};
function d(e5, t2) {
  return e5.subject.termType === t2.subject.termType && e5.object.termType === t2.object.termType && (e5.subject.value === t2.subject.value && e5.predicate.value === t2.predicate.value && e5.object.value === t2.object.value && (e5.object.termType !== "Literal" || e5.object.datatype.termType === t2.object.datatype.termType && e5.object.language === t2.object.language && e5.object.datatype.value === t2.object.datatype.value));
}
var u = /["\\\n\r]/g;
var p = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
var h = class {
  constructor() {
    this.name = "URDNA2015", this.blankNodeInfo = new Map(), this.canonicalIssuer = new n("_:c14n"), this.hashAlgorithm = "sha256", this.quads = null;
  }
  main(e5) {
    return __async(this, null, function* () {
      this.quads = e5;
      for (const t3 of e5)
        this._addBlankNodeQuadInfo({ quad: t3, component: t3.subject }), this._addBlankNodeQuadInfo({ quad: t3, component: t3.object }), this._addBlankNodeQuadInfo({ quad: t3, component: t3.graph });
      const t2 = new Map(), o2 = [...this.blankNodeInfo.keys()];
      let r2 = 0;
      for (const e6 of o2)
        ++r2 % 100 == 0 && (yield this._yield()), yield this._hashAndTrackBlankNode({ id: e6, hashToBlankNodes: t2 });
      const a2 = [...t2.keys()].sort(), i2 = [];
      for (const e6 of a2) {
        const n2 = t2.get(e6);
        if (n2.length > 1) {
          i2.push(n2);
          continue;
        }
        const o3 = n2[0];
        this.canonicalIssuer.getId(o3);
      }
      for (const e6 of i2) {
        const t3 = [];
        for (const o3 of e6) {
          if (this.canonicalIssuer.hasId(o3))
            continue;
          const e7 = new n("_:b");
          e7.getId(o3);
          const r3 = yield this.hashNDegreeQuads(o3, e7);
          t3.push(r3);
        }
        t3.sort(f);
        for (const e7 of t3) {
          const t4 = e7.issuer.getOldIds();
          for (const e8 of t4)
            this.canonicalIssuer.getId(e8);
        }
      }
      const s2 = [];
      for (const e6 of this.quads) {
        const t3 = __spreadValues({}, e6);
        t3.subject = this._useCanonicalId({ component: t3.subject }), t3.object = this._useCanonicalId({ component: t3.object }), t3.graph = this._useCanonicalId({ component: t3.graph }), s2.push(c.serializeQuad(t3));
      }
      return s2.sort(), s2.join("");
    });
  }
  hashFirstDegreeQuads(e5) {
    return __async(this, null, function* () {
      const t2 = [], n2 = this.blankNodeInfo.get(e5), o2 = n2.quads;
      for (const n3 of o2) {
        const o3 = { subject: null, predicate: n3.predicate, object: null, graph: null };
        o3.subject = this.modifyFirstDegreeComponent(e5, n3.subject, "subject"), o3.object = this.modifyFirstDegreeComponent(e5, n3.object, "object"), o3.graph = this.modifyFirstDegreeComponent(e5, n3.graph, "graph"), t2.push(c.serializeQuad(o3));
      }
      t2.sort();
      const a2 = new r(this.hashAlgorithm);
      for (const e6 of t2)
        a2.update(e6);
      return n2.hash = yield a2.digest(), n2.hash;
    });
  }
  hashRelatedBlankNode(e5, t2, n2, o2) {
    return __async(this, null, function* () {
      let a2;
      a2 = this.canonicalIssuer.hasId(e5) ? this.canonicalIssuer.getId(e5) : n2.hasId(e5) ? n2.getId(e5) : this.blankNodeInfo.get(e5).hash;
      const i2 = new r(this.hashAlgorithm);
      return i2.update(o2), o2 !== "g" && i2.update(this.getRelatedPredicate(t2)), i2.update(a2), i2.digest();
    });
  }
  hashNDegreeQuads(e5, t2) {
    return __async(this, null, function* () {
      const n2 = new r(this.hashAlgorithm), o2 = yield this.createHashToRelated(e5, t2), i2 = [...o2.keys()].sort();
      for (const e6 of i2) {
        n2.update(e6);
        let r2, i3 = "";
        const s2 = new a(o2.get(e6));
        let l2 = 0;
        for (; s2.hasNext(); ) {
          const e7 = s2.next();
          ++l2 % 3 == 0 && (yield this._yield());
          let n3 = t2.clone(), o3 = "";
          const a2 = [];
          let c2 = false;
          for (const t3 of e7)
            if (this.canonicalIssuer.hasId(t3) ? o3 += this.canonicalIssuer.getId(t3) : (n3.hasId(t3) || a2.push(t3), o3 += n3.getId(t3)), i3.length !== 0 && o3 > i3) {
              c2 = true;
              break;
            }
          if (!c2) {
            for (const e8 of a2) {
              const t3 = yield this.hashNDegreeQuads(e8, n3);
              if (o3 += n3.getId(e8), o3 += `<${t3.hash}>`, n3 = t3.issuer, i3.length !== 0 && o3 > i3) {
                c2 = true;
                break;
              }
            }
            c2 || (i3.length === 0 || o3 < i3) && (i3 = o3, r2 = n3);
          }
        }
        n2.update(i3), t2 = r2;
      }
      return { hash: yield n2.digest(), issuer: t2 };
    });
  }
  modifyFirstDegreeComponent(e5, t2) {
    return t2.termType !== "BlankNode" ? t2 : { termType: "BlankNode", value: t2.value === e5 ? "_:a" : "_:z" };
  }
  getRelatedPredicate(e5) {
    return `<${e5.predicate.value}>`;
  }
  createHashToRelated(e5, t2) {
    return __async(this, null, function* () {
      const n2 = new Map(), o2 = this.blankNodeInfo.get(e5).quads;
      let r2 = 0;
      for (const a2 of o2)
        ++r2 % 100 == 0 && (yield this._yield()), yield Promise.all([this._addRelatedBlankNodeHash({ quad: a2, component: a2.subject, position: "s", id: e5, issuer: t2, hashToRelated: n2 }), this._addRelatedBlankNodeHash({ quad: a2, component: a2.object, position: "o", id: e5, issuer: t2, hashToRelated: n2 }), this._addRelatedBlankNodeHash({ quad: a2, component: a2.graph, position: "g", id: e5, issuer: t2, hashToRelated: n2 })]);
      return n2;
    });
  }
  _hashAndTrackBlankNode(_0) {
    return __async(this, arguments, function* ({ id: e5, hashToBlankNodes: t2 }) {
      const n2 = yield this.hashFirstDegreeQuads(e5), o2 = t2.get(n2);
      o2 ? o2.push(e5) : t2.set(n2, [e5]);
    });
  }
  _addBlankNodeQuadInfo({ quad: e5, component: t2 }) {
    if (t2.termType !== "BlankNode")
      return;
    const n2 = t2.value, o2 = this.blankNodeInfo.get(n2);
    o2 ? o2.quads.add(e5) : this.blankNodeInfo.set(n2, { quads: new Set([e5]), hash: null });
  }
  _addRelatedBlankNodeHash(_0) {
    return __async(this, arguments, function* ({ quad: e5, component: t2, position: n2, id: o2, issuer: r2, hashToRelated: a2 }) {
      if (t2.termType !== "BlankNode" || t2.value === o2)
        return;
      const i2 = t2.value, s2 = yield this.hashRelatedBlankNode(i2, e5, r2, n2), l2 = a2.get(s2);
      l2 ? l2.push(i2) : a2.set(s2, [i2]);
    });
  }
  _useCanonicalId({ component: e5 }) {
    return e5.termType !== "BlankNode" || e5.value.startsWith(this.canonicalIssuer.prefix) ? e5 : { termType: "BlankNode", value: this.canonicalIssuer.getId(e5.value) };
  }
  _yield() {
    return __async(this, null, function* () {
      return new Promise((e5) => setImmediate(e5));
    });
  }
};
function f(e5, t2) {
  return e5.hash < t2.hash ? -1 : e5.hash > t2.hash ? 1 : 0;
}
var v = class extends h {
  constructor() {
    super(), this.name = "URGNA2012", this.hashAlgorithm = "sha1";
  }
  modifyFirstDegreeComponent(e5, t2, n2) {
    return t2.termType !== "BlankNode" ? t2 : n2 === "graph" ? { termType: "BlankNode", value: "_:g" } : { termType: "BlankNode", value: t2.value === e5 ? "_:a" : "_:z" };
  }
  getRelatedPredicate(e5) {
    return e5.predicate.value;
  }
  createHashToRelated(e5, t2) {
    return __async(this, null, function* () {
      const n2 = new Map(), o2 = this.blankNodeInfo.get(e5).quads;
      let r2 = 0;
      for (const a2 of o2) {
        let o3, i2;
        if (a2.subject.termType === "BlankNode" && a2.subject.value !== e5)
          i2 = a2.subject.value, o3 = "p";
        else {
          if (a2.object.termType !== "BlankNode" || a2.object.value === e5)
            continue;
          i2 = a2.object.value, o3 = "r";
        }
        ++r2 % 100 == 0 && (yield this._yield());
        const s2 = yield this.hashRelatedBlankNode(i2, a2, t2, o3), l2 = n2.get(s2);
        l2 ? l2.push(i2) : n2.set(s2, [i2]);
      }
      return n2;
    });
  }
};
var g = class {
  constructor() {
    this.name = "URDNA2015", this.blankNodeInfo = new Map(), this.canonicalIssuer = new n("_:c14n"), this.hashAlgorithm = "sha256", this.quads = null;
  }
  main(e5) {
    this.quads = e5;
    for (const t3 of e5)
      this._addBlankNodeQuadInfo({ quad: t3, component: t3.subject }), this._addBlankNodeQuadInfo({ quad: t3, component: t3.object }), this._addBlankNodeQuadInfo({ quad: t3, component: t3.graph });
    const t2 = new Map(), o2 = [...this.blankNodeInfo.keys()];
    for (const e6 of o2)
      this._hashAndTrackBlankNode({ id: e6, hashToBlankNodes: t2 });
    const r2 = [...t2.keys()].sort(), a2 = [];
    for (const e6 of r2) {
      const n2 = t2.get(e6);
      if (n2.length > 1) {
        a2.push(n2);
        continue;
      }
      const o3 = n2[0];
      this.canonicalIssuer.getId(o3);
    }
    for (const e6 of a2) {
      const t3 = [];
      for (const o3 of e6) {
        if (this.canonicalIssuer.hasId(o3))
          continue;
        const e7 = new n("_:b");
        e7.getId(o3);
        const r3 = this.hashNDegreeQuads(o3, e7);
        t3.push(r3);
      }
      t3.sort(y);
      for (const e7 of t3) {
        const t4 = e7.issuer.getOldIds();
        for (const e8 of t4)
          this.canonicalIssuer.getId(e8);
      }
    }
    const i2 = [];
    for (const e6 of this.quads) {
      const t3 = __spreadValues({}, e6);
      t3.subject = this._useCanonicalId({ component: t3.subject }), t3.object = this._useCanonicalId({ component: t3.object }), t3.graph = this._useCanonicalId({ component: t3.graph }), i2.push(c.serializeQuad(t3));
    }
    return i2.sort(), i2.join("");
  }
  hashFirstDegreeQuads(e5) {
    const t2 = [], n2 = this.blankNodeInfo.get(e5), o2 = n2.quads;
    for (const n3 of o2) {
      const o3 = { subject: null, predicate: n3.predicate, object: null, graph: null };
      o3.subject = this.modifyFirstDegreeComponent(e5, n3.subject, "subject"), o3.object = this.modifyFirstDegreeComponent(e5, n3.object, "object"), o3.graph = this.modifyFirstDegreeComponent(e5, n3.graph, "graph"), t2.push(c.serializeQuad(o3));
    }
    t2.sort();
    const a2 = new r(this.hashAlgorithm);
    for (const e6 of t2)
      a2.update(e6);
    return n2.hash = a2.digest(), n2.hash;
  }
  hashRelatedBlankNode(e5, t2, n2, o2) {
    let a2;
    a2 = this.canonicalIssuer.hasId(e5) ? this.canonicalIssuer.getId(e5) : n2.hasId(e5) ? n2.getId(e5) : this.blankNodeInfo.get(e5).hash;
    const i2 = new r(this.hashAlgorithm);
    return i2.update(o2), o2 !== "g" && i2.update(this.getRelatedPredicate(t2)), i2.update(a2), i2.digest();
  }
  hashNDegreeQuads(e5, t2) {
    const n2 = new r(this.hashAlgorithm), o2 = this.createHashToRelated(e5, t2), i2 = [...o2.keys()].sort();
    for (const e6 of i2) {
      n2.update(e6);
      let r2, i3 = "";
      const s2 = new a(o2.get(e6));
      for (; s2.hasNext(); ) {
        const e7 = s2.next();
        let n3 = t2.clone(), o3 = "";
        const a2 = [];
        let l2 = false;
        for (const t3 of e7)
          if (this.canonicalIssuer.hasId(t3) ? o3 += this.canonicalIssuer.getId(t3) : (n3.hasId(t3) || a2.push(t3), o3 += n3.getId(t3)), i3.length !== 0 && o3 > i3) {
            l2 = true;
            break;
          }
        if (!l2) {
          for (const e8 of a2) {
            const t3 = this.hashNDegreeQuads(e8, n3);
            if (o3 += n3.getId(e8), o3 += `<${t3.hash}>`, n3 = t3.issuer, i3.length !== 0 && o3 > i3) {
              l2 = true;
              break;
            }
          }
          l2 || (i3.length === 0 || o3 < i3) && (i3 = o3, r2 = n3);
        }
      }
      n2.update(i3), t2 = r2;
    }
    return { hash: n2.digest(), issuer: t2 };
  }
  modifyFirstDegreeComponent(e5, t2) {
    return t2.termType !== "BlankNode" ? t2 : { termType: "BlankNode", value: t2.value === e5 ? "_:a" : "_:z" };
  }
  getRelatedPredicate(e5) {
    return `<${e5.predicate.value}>`;
  }
  createHashToRelated(e5, t2) {
    const n2 = new Map(), o2 = this.blankNodeInfo.get(e5).quads;
    for (const r2 of o2)
      this._addRelatedBlankNodeHash({ quad: r2, component: r2.subject, position: "s", id: e5, issuer: t2, hashToRelated: n2 }), this._addRelatedBlankNodeHash({ quad: r2, component: r2.object, position: "o", id: e5, issuer: t2, hashToRelated: n2 }), this._addRelatedBlankNodeHash({ quad: r2, component: r2.graph, position: "g", id: e5, issuer: t2, hashToRelated: n2 });
    return n2;
  }
  _hashAndTrackBlankNode({ id: e5, hashToBlankNodes: t2 }) {
    const n2 = this.hashFirstDegreeQuads(e5), o2 = t2.get(n2);
    o2 ? o2.push(e5) : t2.set(n2, [e5]);
  }
  _addBlankNodeQuadInfo({ quad: e5, component: t2 }) {
    if (t2.termType !== "BlankNode")
      return;
    const n2 = t2.value, o2 = this.blankNodeInfo.get(n2);
    o2 ? o2.quads.add(e5) : this.blankNodeInfo.set(n2, { quads: new Set([e5]), hash: null });
  }
  _addRelatedBlankNodeHash({ quad: e5, component: t2, position: n2, id: o2, issuer: r2, hashToRelated: a2 }) {
    if (t2.termType !== "BlankNode" || t2.value === o2)
      return;
    const i2 = t2.value, s2 = this.hashRelatedBlankNode(i2, e5, r2, n2), l2 = a2.get(s2);
    l2 ? l2.push(i2) : a2.set(s2, [i2]);
  }
  _useCanonicalId({ component: e5 }) {
    return e5.termType !== "BlankNode" || e5.value.startsWith(this.canonicalIssuer.prefix) ? e5 : { termType: "BlankNode", value: this.canonicalIssuer.getId(e5.value) };
  }
};
function y(e5, t2) {
  return e5.hash < t2.hash ? -1 : e5.hash > t2.hash ? 1 : 0;
}
var m = class extends g {
  constructor() {
    super(), this.name = "URGNA2012", this.hashAlgorithm = "sha1";
  }
  modifyFirstDegreeComponent(e5, t2, n2) {
    return t2.termType !== "BlankNode" ? t2 : n2 === "graph" ? { termType: "BlankNode", value: "_:g" } : { termType: "BlankNode", value: t2.value === e5 ? "_:a" : "_:z" };
  }
  getRelatedPredicate(e5) {
    return e5.predicate.value;
  }
  createHashToRelated(e5, t2) {
    const n2 = new Map(), o2 = this.blankNodeInfo.get(e5).quads;
    for (const r2 of o2) {
      let o3, a2;
      if (r2.subject.termType === "BlankNode" && r2.subject.value !== e5)
        a2 = r2.subject.value, o3 = "p";
      else {
        if (r2.object.termType !== "BlankNode" || r2.object.value === e5)
          continue;
        a2 = r2.object.value, o3 = "r";
      }
      const i2 = this.hashRelatedBlankNode(a2, r2, t2, o3), s2 = n2.get(i2);
      s2 ? s2.push(a2) : n2.set(i2, [a2]);
    }
    return n2;
  }
};
var x = t(Object.freeze({ __proto__: null, default: {} }));
var b;
try {
  b = x;
} catch (e5) {
}
var w = {};
var j = w;
w.NQuads = c, w.IdentifierIssuer = n, w._rdfCanonizeNative = function(e5) {
  return e5 && (b = e5), b;
}, w.canonize = function(e5, t2) {
  return __async(this, null, function* () {
    if (Array.isArray(e5) || (e5 = w.NQuads.legacyDatasetToQuads(e5)), t2.useNative) {
      if (!b)
        throw new Error("rdf-canonize-native not available");
      return new Promise((n2, o2) => b.canonize(e5, t2, (e6, t3) => e6 ? o2(e6) : n2(t3)));
    }
    if (t2.algorithm === "URDNA2015")
      return new h(t2).main(e5);
    if (t2.algorithm === "URGNA2012")
      return new v(t2).main(e5);
    if (!("algorithm" in t2))
      throw new Error("No RDF Dataset Canonicalization algorithm specified.");
    throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + t2.algorithm);
  });
}, w._canonizeSync = function(e5, t2) {
  if (Array.isArray(e5) || (e5 = w.NQuads.legacyDatasetToQuads(e5)), t2.useNative) {
    if (b)
      return b.canonizeSync(e5, t2);
    throw new Error("rdf-canonize-native not available");
  }
  if (t2.algorithm === "URDNA2015")
    return new g(t2).main(e5);
  if (t2.algorithm === "URGNA2012")
    return new m(t2).main(e5);
  if (!("algorithm" in t2))
    throw new Error("No RDF Dataset Canonicalization algorithm specified.");
  throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + t2.algorithm);
};
var I = {};
var N = I;
I.isArray = Array.isArray, I.isBoolean = (e5) => typeof e5 == "boolean" || Object.prototype.toString.call(e5) === "[object Boolean]", I.isDouble = (e5) => I.isNumber(e5) && (String(e5).indexOf(".") !== -1 || Math.abs(e5) >= 1e21), I.isEmptyObject = (e5) => I.isObject(e5) && Object.keys(e5).length === 0, I.isNumber = (e5) => typeof e5 == "number" || Object.prototype.toString.call(e5) === "[object Number]", I.isNumeric = (e5) => !isNaN(parseFloat(e5)) && isFinite(e5), I.isObject = (e5) => Object.prototype.toString.call(e5) === "[object Object]", I.isString = (e5) => typeof e5 == "string" || Object.prototype.toString.call(e5) === "[object String]", I.isUndefined = (e5) => e5 === void 0;
var S = {};
var O = S;
S.isSubject = (e5) => {
  if (N.isObject(e5) && !("@value" in e5 || "@set" in e5 || "@list" in e5)) {
    return Object.keys(e5).length > 1 || !("@id" in e5);
  }
  return false;
}, S.isSubjectReference = (e5) => N.isObject(e5) && Object.keys(e5).length === 1 && "@id" in e5, S.isValue = (e5) => N.isObject(e5) && "@value" in e5, S.isList = (e5) => N.isObject(e5) && "@list" in e5, S.isGraph = (e5) => N.isObject(e5) && "@graph" in e5 && Object.keys(e5).filter((e6) => e6 !== "@id" && e6 !== "@index").length === 1, S.isSimpleGraph = (e5) => S.isGraph(e5) && !("@id" in e5), S.isBlankNode = (e5) => !!N.isObject(e5) && ("@id" in e5 ? e5["@id"].indexOf("_:") === 0 : Object.keys(e5).length === 0 || !("@value" in e5 || "@set" in e5 || "@list" in e5));
var k = class extends Error {
  constructor(e5 = "An unspecified JSON-LD error occurred.", t2 = "jsonld.Error", n2 = {}) {
    super(e5), this.name = t2, this.message = e5, this.details = n2;
  }
};
var C = j.IdentifierIssuer;
var L = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g;
var A = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/;
var D = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g;
var T = { accept: "application/ld+json, application/json" };
var R = {};
var E = R;
function _(e5, t2) {
  if (N.isArray(t2))
    for (let n2 = 0; n2 < t2.length; ++n2)
      t2[n2] = _(e5, t2[n2]);
  else if (O.isList(t2))
    t2["@list"] = _(e5, t2["@list"]);
  else if (N.isObject(t2)) {
    O.isBlankNode(t2) && (t2["@id"] = e5.getId(t2["@id"]));
    const n2 = Object.keys(t2).sort();
    for (let o2 = 0; o2 < n2.length; ++o2) {
      const r2 = n2[o2];
      r2 !== "@id" && (t2[r2] = _(e5, t2[r2]));
    }
  }
  return t2;
}
R.IdentifierIssuer = C, R.clone = function(e5) {
  if (e5 && typeof e5 == "object") {
    let t2;
    if (N.isArray(e5)) {
      t2 = [];
      for (let n2 = 0; n2 < e5.length; ++n2)
        t2[n2] = R.clone(e5[n2]);
    } else if (e5 instanceof Map) {
      t2 = new Map();
      for (const [n2, o2] of e5)
        t2.set(n2, R.clone(o2));
    } else if (e5 instanceof Set) {
      t2 = new Set();
      for (const n2 of e5)
        t2.add(R.clone(n2));
    } else if (N.isObject(e5)) {
      t2 = {};
      for (const n2 in e5)
        t2[n2] = R.clone(e5[n2]);
    } else
      t2 = e5.toString();
    return t2;
  }
  return e5;
}, R.asArray = function(e5) {
  return Array.isArray(e5) ? e5 : [e5];
}, R.buildHeaders = (e5 = {}) => {
  if (Object.keys(e5).some((e6) => e6.toLowerCase() === "accept"))
    throw new RangeError('Accept header may not be specified; only "' + T.accept + '" is supported.');
  return Object.assign({ Accept: T.accept }, e5);
}, R.parseLinkHeader = (e5) => {
  const t2 = {}, n2 = e5.match(L);
  for (let e6 = 0; e6 < n2.length; ++e6) {
    let o2 = n2[e6].match(A);
    if (!o2)
      continue;
    const r2 = { target: o2[1] }, a2 = o2[2];
    for (; o2 = D.exec(a2); )
      r2[o2[1]] = o2[2] === void 0 ? o2[3] : o2[2];
    const i2 = r2.rel || "";
    Array.isArray(t2[i2]) ? t2[i2].push(r2) : t2.hasOwnProperty(i2) ? t2[i2] = [t2[i2], r2] : t2[i2] = r2;
  }
  return t2;
}, R.validateTypeValue = (e5, t2) => {
  if (!(N.isString(e5) || N.isArray(e5) && e5.every((e6) => N.isString(e6)))) {
    if (t2 && N.isObject(e5))
      switch (Object.keys(e5).length) {
        case 0:
          return;
        case 1:
          if ("@default" in e5 && R.asArray(e5["@default"]).every((e6) => N.isString(e6)))
            return;
      }
    throw new k('Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.', "jsonld.SyntaxError", { code: "invalid type value", value: e5 });
  }
}, R.hasProperty = (e5, t2) => {
  if (e5.hasOwnProperty(t2)) {
    const n2 = e5[t2];
    return !N.isArray(n2) || n2.length > 0;
  }
  return false;
}, R.hasValue = (e5, t2, n2) => {
  if (R.hasProperty(e5, t2)) {
    let o2 = e5[t2];
    const r2 = O.isList(o2);
    if (N.isArray(o2) || r2) {
      r2 && (o2 = o2["@list"]);
      for (let e6 = 0; e6 < o2.length; ++e6)
        if (R.compareValues(n2, o2[e6]))
          return true;
    } else if (!N.isArray(n2))
      return R.compareValues(n2, o2);
  }
  return false;
}, R.addValue = (e5, t2, n2, o2) => {
  if ("propertyIsArray" in (o2 = o2 || {}) || (o2.propertyIsArray = false), "valueIsArray" in o2 || (o2.valueIsArray = false), "allowDuplicate" in o2 || (o2.allowDuplicate = true), "prependValue" in o2 || (o2.prependValue = false), o2.valueIsArray)
    e5[t2] = n2;
  else if (N.isArray(n2)) {
    n2.length === 0 && o2.propertyIsArray && !e5.hasOwnProperty(t2) && (e5[t2] = []), o2.prependValue && (n2 = n2.concat(e5[t2]), e5[t2] = []);
    for (let r2 = 0; r2 < n2.length; ++r2)
      R.addValue(e5, t2, n2[r2], o2);
  } else if (e5.hasOwnProperty(t2)) {
    const r2 = !o2.allowDuplicate && R.hasValue(e5, t2, n2);
    N.isArray(e5[t2]) || r2 && !o2.propertyIsArray || (e5[t2] = [e5[t2]]), r2 || (o2.prependValue ? e5[t2].unshift(n2) : e5[t2].push(n2));
  } else
    e5[t2] = o2.propertyIsArray ? [n2] : n2;
}, R.getValues = (e5, t2) => [].concat(e5[t2] || []), R.removeProperty = (e5, t2) => {
  delete e5[t2];
}, R.removeValue = (e5, t2, n2, o2) => {
  "propertyIsArray" in (o2 = o2 || {}) || (o2.propertyIsArray = false);
  const r2 = R.getValues(e5, t2).filter((e6) => !R.compareValues(e6, n2));
  r2.length === 0 ? R.removeProperty(e5, t2) : r2.length !== 1 || o2.propertyIsArray ? e5[t2] = r2 : e5[t2] = r2[0];
}, R.relabelBlankNodes = (e5, t2) => _((t2 = t2 || {}).issuer || new C("_:b"), e5), R.compareValues = (e5, t2) => e5 === t2 || (!(!O.isValue(e5) || !O.isValue(t2) || e5["@value"] !== t2["@value"] || e5["@type"] !== t2["@type"] || e5["@language"] !== t2["@language"] || e5["@index"] !== t2["@index"]) || !!(N.isObject(e5) && "@id" in e5 && N.isObject(t2) && "@id" in t2) && e5["@id"] === t2["@id"]), R.compareShortestLeast = (e5, t2) => e5.length < t2.length ? -1 : t2.length < e5.length ? 1 : e5 === t2 ? 0 : e5 < t2 ? -1 : 1;
var M = {};
var P = M;
M.parsers = { simple: { keys: ["href", "scheme", "authority", "path", "query", "fragment"], regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/ }, full: { keys: ["href", "protocol", "scheme", "authority", "auth", "user", "password", "hostname", "port", "path", "directory", "file", "query", "fragment"], regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/ } }, M.parse = (e5, t2) => {
  const n2 = {}, o2 = M.parsers[t2 || "full"], r2 = o2.regex.exec(e5);
  let a2 = o2.keys.length;
  for (; a2--; )
    n2[o2.keys[a2]] = r2[a2] === void 0 ? null : r2[a2];
  return (n2.scheme === "https" && n2.port === "443" || n2.scheme === "http" && n2.port === "80") && (n2.href = n2.href.replace(":" + n2.port, ""), n2.authority = n2.authority.replace(":" + n2.port, ""), n2.port = null), n2.normalizedPath = M.removeDotSegments(n2.path), n2;
}, M.prependBase = (e5, t2) => {
  if (e5 === null)
    return t2;
  if (M.isAbsolute(t2))
    return t2;
  e5 && !N.isString(e5) || (e5 = M.parse(e5 || ""));
  const n2 = M.parse(t2), o2 = { protocol: e5.protocol || "" };
  if (n2.authority !== null)
    o2.authority = n2.authority, o2.path = n2.path, o2.query = n2.query;
  else if (o2.authority = e5.authority, n2.path === "")
    o2.path = e5.path, n2.query !== null ? o2.query = n2.query : o2.query = e5.query;
  else {
    if (n2.path.indexOf("/") === 0)
      o2.path = n2.path;
    else {
      let t3 = e5.path;
      t3 = t3.substr(0, t3.lastIndexOf("/") + 1), (t3.length > 0 || e5.authority) && t3.substr(-1) !== "/" && (t3 += "/"), t3 += n2.path, o2.path = t3;
    }
    o2.query = n2.query;
  }
  n2.path !== "" && (o2.path = M.removeDotSegments(o2.path));
  let r2 = o2.protocol;
  return o2.authority !== null && (r2 += "//" + o2.authority), r2 += o2.path, o2.query !== null && (r2 += "?" + o2.query), n2.fragment !== null && (r2 += "#" + n2.fragment), r2 === "" && (r2 = "./"), r2;
}, M.removeBase = (e5, t2) => {
  if (e5 === null)
    return t2;
  e5 && !N.isString(e5) || (e5 = M.parse(e5 || ""));
  let n2 = "";
  if (e5.href !== "" ? n2 += (e5.protocol || "") + "//" + (e5.authority || "") : t2.indexOf("//") && (n2 += "//"), t2.indexOf(n2) !== 0)
    return t2;
  const o2 = M.parse(t2.substr(n2.length)), r2 = e5.normalizedPath.split("/"), a2 = o2.normalizedPath.split("/"), i2 = o2.fragment || o2.query ? 0 : 1;
  for (; r2.length > 0 && a2.length > i2 && r2[0] === a2[0]; )
    r2.shift(), a2.shift();
  let s2 = "";
  if (r2.length > 0) {
    r2.pop();
    for (let e6 = 0; e6 < r2.length; ++e6)
      s2 += "../";
  }
  return s2 += a2.join("/"), o2.query !== null && (s2 += "?" + o2.query), o2.fragment !== null && (s2 += "#" + o2.fragment), s2 === "" && (s2 = "./"), s2;
}, M.removeDotSegments = (e5) => {
  if (e5.length === 0)
    return "";
  const t2 = e5.split("/"), n2 = [];
  for (; t2.length > 0; ) {
    const e6 = t2.shift(), o2 = t2.length === 0;
    e6 !== "." ? e6 !== ".." ? n2.push(e6) : (n2.pop(), o2 && n2.push("")) : o2 && n2.push("");
  }
  return e5[0] === "/" && n2.length > 0 && n2[0] !== "" && n2.unshift(""), n2.length === 1 && n2[0] === "" ? "/" : n2.join("/");
};
var J = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
M.isAbsolute = (e5) => N.isString(e5) && J.test(e5), M.isRelative = (e5) => N.isString(e5);
var B = F;
function F(e5) {
  var t2 = this;
  if (t2 instanceof F || (t2 = new F()), t2.tail = null, t2.head = null, t2.length = 0, e5 && typeof e5.forEach == "function")
    e5.forEach(function(e6) {
      t2.push(e6);
    });
  else if (arguments.length > 0)
    for (var n2 = 0, o2 = arguments.length; n2 < o2; n2++)
      t2.push(arguments[n2]);
  return t2;
}
function U(e5, t2, n2) {
  var o2 = t2 === e5.head ? new z(n2, null, t2, e5) : new z(n2, t2, t2.next, e5);
  return o2.next === null && (e5.tail = o2), o2.prev === null && (e5.head = o2), e5.length++, o2;
}
function q(e5, t2) {
  e5.tail = new z(t2, e5.tail, null, e5), e5.head || (e5.head = e5.tail), e5.length++;
}
function V(e5, t2) {
  e5.head = new z(t2, null, e5.head, e5), e5.tail || (e5.tail = e5.head), e5.length++;
}
function z(e5, t2, n2, o2) {
  if (!(this instanceof z))
    return new z(e5, t2, n2, o2);
  this.list = o2, this.value = e5, t2 ? (t2.next = this, this.prev = t2) : this.prev = null, n2 ? (n2.prev = this, this.next = n2) : this.next = null;
}
F.Node = z, F.create = F, F.prototype.removeNode = function(e5) {
  if (e5.list !== this)
    throw new Error("removing node which does not belong to this list");
  var t2 = e5.next, n2 = e5.prev;
  return t2 && (t2.prev = n2), n2 && (n2.next = t2), e5 === this.head && (this.head = t2), e5 === this.tail && (this.tail = n2), e5.list.length--, e5.next = null, e5.prev = null, e5.list = null, t2;
}, F.prototype.unshiftNode = function(e5) {
  if (e5 !== this.head) {
    e5.list && e5.list.removeNode(e5);
    var t2 = this.head;
    e5.list = this, e5.next = t2, t2 && (t2.prev = e5), this.head = e5, this.tail || (this.tail = e5), this.length++;
  }
}, F.prototype.pushNode = function(e5) {
  if (e5 !== this.tail) {
    e5.list && e5.list.removeNode(e5);
    var t2 = this.tail;
    e5.list = this, e5.prev = t2, t2 && (t2.next = e5), this.tail = e5, this.head || (this.head = e5), this.length++;
  }
}, F.prototype.push = function() {
  for (var e5 = 0, t2 = arguments.length; e5 < t2; e5++)
    q(this, arguments[e5]);
  return this.length;
}, F.prototype.unshift = function() {
  for (var e5 = 0, t2 = arguments.length; e5 < t2; e5++)
    V(this, arguments[e5]);
  return this.length;
}, F.prototype.pop = function() {
  if (this.tail) {
    var e5 = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e5;
  }
}, F.prototype.shift = function() {
  if (this.head) {
    var e5 = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e5;
  }
}, F.prototype.forEach = function(e5, t2) {
  t2 = t2 || this;
  for (var n2 = this.head, o2 = 0; n2 !== null; o2++)
    e5.call(t2, n2.value, o2, this), n2 = n2.next;
}, F.prototype.forEachReverse = function(e5, t2) {
  t2 = t2 || this;
  for (var n2 = this.tail, o2 = this.length - 1; n2 !== null; o2--)
    e5.call(t2, n2.value, o2, this), n2 = n2.prev;
}, F.prototype.get = function(e5) {
  for (var t2 = 0, n2 = this.head; n2 !== null && t2 < e5; t2++)
    n2 = n2.next;
  if (t2 === e5 && n2 !== null)
    return n2.value;
}, F.prototype.getReverse = function(e5) {
  for (var t2 = 0, n2 = this.tail; n2 !== null && t2 < e5; t2++)
    n2 = n2.prev;
  if (t2 === e5 && n2 !== null)
    return n2.value;
}, F.prototype.map = function(e5, t2) {
  t2 = t2 || this;
  for (var n2 = new F(), o2 = this.head; o2 !== null; )
    n2.push(e5.call(t2, o2.value, this)), o2 = o2.next;
  return n2;
}, F.prototype.mapReverse = function(e5, t2) {
  t2 = t2 || this;
  for (var n2 = new F(), o2 = this.tail; o2 !== null; )
    n2.push(e5.call(t2, o2.value, this)), o2 = o2.prev;
  return n2;
}, F.prototype.reduce = function(e5, t2) {
  var n2, o2 = this.head;
  if (arguments.length > 1)
    n2 = t2;
  else {
    if (!this.head)
      throw new TypeError("Reduce of empty list with no initial value");
    o2 = this.head.next, n2 = this.head.value;
  }
  for (var r2 = 0; o2 !== null; r2++)
    n2 = e5(n2, o2.value, r2), o2 = o2.next;
  return n2;
}, F.prototype.reduceReverse = function(e5, t2) {
  var n2, o2 = this.tail;
  if (arguments.length > 1)
    n2 = t2;
  else {
    if (!this.tail)
      throw new TypeError("Reduce of empty list with no initial value");
    o2 = this.tail.prev, n2 = this.tail.value;
  }
  for (var r2 = this.length - 1; o2 !== null; r2--)
    n2 = e5(n2, o2.value, r2), o2 = o2.prev;
  return n2;
}, F.prototype.toArray = function() {
  for (var e5 = new Array(this.length), t2 = 0, n2 = this.head; n2 !== null; t2++)
    e5[t2] = n2.value, n2 = n2.next;
  return e5;
}, F.prototype.toArrayReverse = function() {
  for (var e5 = new Array(this.length), t2 = 0, n2 = this.tail; n2 !== null; t2++)
    e5[t2] = n2.value, n2 = n2.prev;
  return e5;
}, F.prototype.slice = function(e5, t2) {
  (t2 = t2 || this.length) < 0 && (t2 += this.length), (e5 = e5 || 0) < 0 && (e5 += this.length);
  var n2 = new F();
  if (t2 < e5 || t2 < 0)
    return n2;
  e5 < 0 && (e5 = 0), t2 > this.length && (t2 = this.length);
  for (var o2 = 0, r2 = this.head; r2 !== null && o2 < e5; o2++)
    r2 = r2.next;
  for (; r2 !== null && o2 < t2; o2++, r2 = r2.next)
    n2.push(r2.value);
  return n2;
}, F.prototype.sliceReverse = function(e5, t2) {
  (t2 = t2 || this.length) < 0 && (t2 += this.length), (e5 = e5 || 0) < 0 && (e5 += this.length);
  var n2 = new F();
  if (t2 < e5 || t2 < 0)
    return n2;
  e5 < 0 && (e5 = 0), t2 > this.length && (t2 = this.length);
  for (var o2 = this.length, r2 = this.tail; r2 !== null && o2 > t2; o2--)
    r2 = r2.prev;
  for (; r2 !== null && o2 > e5; o2--, r2 = r2.prev)
    n2.push(r2.value);
  return n2;
}, F.prototype.splice = function(e5, t2) {
  e5 > this.length && (e5 = this.length - 1), e5 < 0 && (e5 = this.length + e5);
  for (var n2 = 0, o2 = this.head; o2 !== null && n2 < e5; n2++)
    o2 = o2.next;
  var r2 = [];
  for (n2 = 0; o2 && n2 < t2; n2++)
    r2.push(o2.value), o2 = this.removeNode(o2);
  o2 === null && (o2 = this.tail), o2 !== this.head && o2 !== this.tail && (o2 = o2.prev);
  for (n2 = 2; n2 < arguments.length; n2++)
    o2 = U(this, o2, arguments[n2]);
  return r2;
}, F.prototype.reverse = function() {
  for (var e5 = this.head, t2 = this.tail, n2 = e5; n2 !== null; n2 = n2.prev) {
    var o2 = n2.prev;
    n2.prev = n2.next, n2.next = o2;
  }
  return this.head = t2, this.tail = e5, this;
};
try {
  !function(e5) {
    e5.prototype[Symbol.iterator] = function* () {
      for (let e6 = this.head; e6; e6 = e6.next)
        yield e6.value;
    };
  }(F);
} catch (e5) {
}
var $ = Symbol("max");
var G = Symbol("length");
var H = Symbol("lengthCalculator");
var Q = Symbol("allowStale");
var K = Symbol("maxAge");
var X = Symbol("dispose");
var Z = Symbol("noDisposeOnSet");
var W = Symbol("lruList");
var Y = Symbol("cache");
var ee = Symbol("updateAgeOnGet");
var te = () => 1;
var ne = (e5, t2, n2) => {
  const o2 = e5[Y].get(t2);
  if (o2) {
    const t3 = o2.value;
    if (oe(e5, t3)) {
      if (ae(e5, o2), !e5[Q])
        return;
    } else
      n2 && (e5[ee] && (o2.value.now = Date.now()), e5[W].unshiftNode(o2));
    return t3.value;
  }
};
var oe = (e5, t2) => {
  if (!t2 || !t2.maxAge && !e5[K])
    return false;
  const n2 = Date.now() - t2.now;
  return t2.maxAge ? n2 > t2.maxAge : e5[K] && n2 > e5[K];
};
var re = (e5) => {
  if (e5[G] > e5[$])
    for (let t2 = e5[W].tail; e5[G] > e5[$] && t2 !== null; ) {
      const n2 = t2.prev;
      ae(e5, t2), t2 = n2;
    }
};
var ae = (e5, t2) => {
  if (t2) {
    const n2 = t2.value;
    e5[X] && e5[X](n2.key, n2.value), e5[G] -= n2.length, e5[Y].delete(n2.key), e5[W].removeNode(t2);
  }
};
var ie = class {
  constructor(e5, t2, n2, o2, r2) {
    this.key = e5, this.value = t2, this.length = n2, this.now = o2, this.maxAge = r2 || 0;
  }
};
var se = (e5, t2, n2, o2) => {
  let r2 = n2.value;
  oe(e5, r2) && (ae(e5, n2), e5[Q] || (r2 = void 0)), r2 && t2.call(o2, r2.value, r2.key, e5);
};
var le = class {
  constructor(e5) {
    if (typeof e5 == "number" && (e5 = { max: e5 }), e5 || (e5 = {}), e5.max && (typeof e5.max != "number" || e5.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[$] = e5.max || 1 / 0;
    const t2 = e5.length || te;
    if (this[H] = typeof t2 != "function" ? te : t2, this[Q] = e5.stale || false, e5.maxAge && typeof e5.maxAge != "number")
      throw new TypeError("maxAge must be a number");
    this[K] = e5.maxAge || 0, this[X] = e5.dispose, this[Z] = e5.noDisposeOnSet || false, this[ee] = e5.updateAgeOnGet || false, this.reset();
  }
  set max(e5) {
    if (typeof e5 != "number" || e5 < 0)
      throw new TypeError("max must be a non-negative number");
    this[$] = e5 || 1 / 0, re(this);
  }
  get max() {
    return this[$];
  }
  set allowStale(e5) {
    this[Q] = !!e5;
  }
  get allowStale() {
    return this[Q];
  }
  set maxAge(e5) {
    if (typeof e5 != "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[K] = e5, re(this);
  }
  get maxAge() {
    return this[K];
  }
  set lengthCalculator(e5) {
    typeof e5 != "function" && (e5 = te), e5 !== this[H] && (this[H] = e5, this[G] = 0, this[W].forEach((e6) => {
      e6.length = this[H](e6.value, e6.key), this[G] += e6.length;
    })), re(this);
  }
  get lengthCalculator() {
    return this[H];
  }
  get length() {
    return this[G];
  }
  get itemCount() {
    return this[W].length;
  }
  rforEach(e5, t2) {
    t2 = t2 || this;
    for (let n2 = this[W].tail; n2 !== null; ) {
      const o2 = n2.prev;
      se(this, e5, n2, t2), n2 = o2;
    }
  }
  forEach(e5, t2) {
    t2 = t2 || this;
    for (let n2 = this[W].head; n2 !== null; ) {
      const o2 = n2.next;
      se(this, e5, n2, t2), n2 = o2;
    }
  }
  keys() {
    return this[W].toArray().map((e5) => e5.key);
  }
  values() {
    return this[W].toArray().map((e5) => e5.value);
  }
  reset() {
    this[X] && this[W] && this[W].length && this[W].forEach((e5) => this[X](e5.key, e5.value)), this[Y] = new Map(), this[W] = new B(), this[G] = 0;
  }
  dump() {
    return this[W].map((e5) => !oe(this, e5) && { k: e5.key, v: e5.value, e: e5.now + (e5.maxAge || 0) }).toArray().filter((e5) => e5);
  }
  dumpLru() {
    return this[W];
  }
  set(e5, t2, n2) {
    if ((n2 = n2 || this[K]) && typeof n2 != "number")
      throw new TypeError("maxAge must be a number");
    const o2 = n2 ? Date.now() : 0, r2 = this[H](t2, e5);
    if (this[Y].has(e5)) {
      if (r2 > this[$])
        return ae(this, this[Y].get(e5)), false;
      const a3 = this[Y].get(e5).value;
      return this[X] && (this[Z] || this[X](e5, a3.value)), a3.now = o2, a3.maxAge = n2, a3.value = t2, this[G] += r2 - a3.length, a3.length = r2, this.get(e5), re(this), true;
    }
    const a2 = new ie(e5, t2, r2, o2, n2);
    return a2.length > this[$] ? (this[X] && this[X](e5, t2), false) : (this[G] += a2.length, this[W].unshift(a2), this[Y].set(e5, this[W].head), re(this), true);
  }
  has(e5) {
    if (!this[Y].has(e5))
      return false;
    const t2 = this[Y].get(e5).value;
    return !oe(this, t2);
  }
  get(e5) {
    return ne(this, e5, true);
  }
  peek(e5) {
    return ne(this, e5, false);
  }
  pop() {
    const e5 = this[W].tail;
    return e5 ? (ae(this, e5), e5.value) : null;
  }
  del(e5) {
    ae(this, this[Y].get(e5));
  }
  load(e5) {
    this.reset();
    const t2 = Date.now();
    for (let n2 = e5.length - 1; n2 >= 0; n2--) {
      const o2 = e5[n2], r2 = o2.e || 0;
      if (r2 === 0)
        this.set(o2.k, o2.v);
      else {
        const e6 = r2 - t2;
        e6 > 0 && this.set(o2.k, o2.v, e6);
      }
    }
  }
  prune() {
    this[Y].forEach((e5, t2) => ne(this, t2, false));
  }
};
var ce = class {
  constructor({ document: e5 }) {
    this.document = e5, this.cache = new le({ max: 10 });
  }
  getProcessed(e5) {
    return this.cache.get(e5);
  }
  setProcessed(e5, t2) {
    this.cache.set(e5, t2);
  }
};
var { isArray: de, isObject: ue, isString: pe } = N;
var { asArray: he } = E;
var { prependBase: fe } = P;
var ve = class {
  constructor({ sharedCache: e5 }) {
    this.perOpCache = new Map(), this.sharedCache = e5;
  }
  resolve(_0) {
    return __async(this, arguments, function* ({ activeCtx: e5, context: t2, documentLoader: n2, base: o2, cycles: r2 = new Set() }) {
      t2 && ue(t2) && t2["@context"] && (t2 = t2["@context"]), t2 = he(t2);
      const a2 = [];
      for (const i2 of t2) {
        if (pe(i2)) {
          let t3 = this._get(i2);
          t3 || (t3 = yield this._resolveRemoteContext({ activeCtx: e5, url: i2, documentLoader: n2, base: o2, cycles: r2 })), de(t3) ? a2.push(...t3) : a2.push(t3);
          continue;
        }
        if (i2 === null) {
          a2.push(new ce({ document: null }));
          continue;
        }
        ue(i2) || ge(t2);
        const s2 = JSON.stringify(i2);
        let l2 = this._get(s2);
        l2 || (l2 = new ce({ document: i2 }), this._cacheResolvedContext({ key: s2, resolved: l2, tag: "static" })), a2.push(l2);
      }
      return a2;
    });
  }
  _get(e5) {
    let t2 = this.perOpCache.get(e5);
    if (!t2) {
      const n2 = this.sharedCache.get(e5);
      n2 && (t2 = n2.get("static"), t2 && this.perOpCache.set(e5, t2));
    }
    return t2;
  }
  _cacheResolvedContext({ key: e5, resolved: t2, tag: n2 }) {
    if (this.perOpCache.set(e5, t2), n2 !== void 0) {
      let o2 = this.sharedCache.get(e5);
      o2 || (o2 = new Map(), this.sharedCache.set(e5, o2)), o2.set(n2, t2);
    }
    return t2;
  }
  _resolveRemoteContext(_0) {
    return __async(this, arguments, function* ({ activeCtx: e5, url: t2, documentLoader: n2, base: o2, cycles: r2 }) {
      t2 = fe(o2, t2);
      const { context: a2, remoteDoc: i2 } = yield this._fetchContext({ activeCtx: e5, url: t2, documentLoader: n2, cycles: r2 });
      ye({ context: a2, base: o2 = i2.documentUrl || t2 });
      const s2 = yield this.resolve({ activeCtx: e5, context: a2, documentLoader: n2, base: o2, cycles: r2 });
      return this._cacheResolvedContext({ key: t2, resolved: s2, tag: i2.tag }), s2;
    });
  }
  _fetchContext(_0) {
    return __async(this, arguments, function* ({ activeCtx: e5, url: t2, documentLoader: n2, cycles: o2 }) {
      if (o2.size > 10)
        throw new k("Maximum number of @context URLs exceeded.", "jsonld.ContextUrlError", { code: e5.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow", max: 10 });
      if (o2.has(t2))
        throw new k("Cyclical @context URLs detected.", "jsonld.ContextUrlError", { code: e5.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow", url: t2 });
      let r2, a2;
      o2.add(t2);
      try {
        a2 = yield n2(t2), r2 = a2.document || null, pe(r2) && (r2 = JSON.parse(r2));
      } catch (e6) {
        throw new k("Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.", "jsonld.InvalidUrl", { code: "loading remote context failed", url: t2, cause: e6 });
      }
      if (!ue(r2))
        throw new k("Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.", "jsonld.InvalidUrl", { code: "invalid remote context", url: t2 });
      return r2 = "@context" in r2 ? { "@context": r2["@context"] } : { "@context": {} }, a2.contextUrl && (de(r2["@context"]) || (r2["@context"] = [r2["@context"]]), r2["@context"].push(a2.contextUrl)), { context: r2, remoteDoc: a2 };
    });
  }
};
function ge(e5) {
  throw new k("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", { code: "invalid local context", context: e5 });
}
function ye({ context: e5, base: t2 }) {
  if (!e5)
    return;
  const n2 = e5["@context"];
  if (pe(n2))
    e5["@context"] = fe(t2, n2);
  else if (de(n2))
    for (let e6 = 0; e6 < n2.length; ++e6) {
      const o2 = n2[e6];
      pe(o2) ? n2[e6] = fe(t2, o2) : ue(o2) && ye({ context: { "@context": o2 }, base: t2 });
    }
  else if (ue(n2))
    for (const e6 in n2)
      ye({ context: n2[e6], base: t2 });
}
var me = j.NQuads;
var { isArray: xe, isObject: be, isString: we, isUndefined: je } = N;
var { isAbsolute: Ie, isRelative: Ne, prependBase: Se } = P;
var { asArray: Oe, compareShortestLeast: ke } = E;
var Ce = new Map();
var Le = /^@[a-zA-Z]+$/;
var Ae = {};
var De = Ae;
function Te(e5, t2, n2, o2, r2, a2) {
  if (t2 === null || !we(t2) || Ae.isKeyword(t2))
    return t2;
  if (t2.match(Le))
    return null;
  if (o2 && o2.hasOwnProperty(t2) && r2.get(t2) !== true && Ae.createTermDefinition({ activeCtx: e5, localCtx: o2, term: t2, defined: r2, options: a2 }), (n2 = n2 || {}).vocab) {
    const n3 = e5.mappings.get(t2);
    if (n3 === null)
      return null;
    if (be(n3) && "@id" in n3)
      return n3["@id"];
  }
  const i2 = t2.indexOf(":");
  if (i2 > 0) {
    const n3 = t2.substr(0, i2), s2 = t2.substr(i2 + 1);
    if (n3 === "_" || s2.indexOf("//") === 0)
      return t2;
    o2 && o2.hasOwnProperty(n3) && Ae.createTermDefinition({ activeCtx: e5, localCtx: o2, term: n3, defined: r2, options: a2 });
    const l2 = e5.mappings.get(n3);
    if (l2 && l2._prefix)
      return l2["@id"] + s2;
    if (Ie(t2))
      return t2;
  }
  if (n2.vocab && "@vocab" in e5)
    return e5["@vocab"] + t2;
  if (n2.base && "@base" in e5) {
    if (e5["@base"])
      return Se(Se(a2.base, e5["@base"]), t2);
  } else if (n2.base)
    return Se(a2.base, t2);
  return t2;
}
function Re(e5, t2) {
  if (!e5 || typeof e5 != "object" || !t2 || typeof t2 != "object")
    return e5 === t2;
  const n2 = Array.isArray(e5);
  if (n2 !== Array.isArray(t2))
    return false;
  if (n2) {
    if (e5.length !== t2.length)
      return false;
    for (let n3 = 0; n3 < e5.length; ++n3)
      if (!Re(e5[n3], t2[n3]))
        return false;
    return true;
  }
  const o2 = Object.keys(e5), r2 = Object.keys(t2);
  if (o2.length !== r2.length)
    return false;
  for (const n3 in e5) {
    let o3 = e5[n3], r3 = t2[n3];
    if (n3 === "@container" && Array.isArray(o3) && Array.isArray(r3) && (o3 = o3.slice().sort(), r3 = r3.slice().sort()), !Re(o3, r3))
      return false;
  }
  return true;
}
Ae.process = (_0) => __async(void 0, [_0], function* ({ activeCtx: e5, localCtx: t2, options: n2, propagate: o2 = true, overrideProtected: r2 = false, cycles: a2 = new Set() }) {
  be(t2) && "@context" in t2 && xe(t2["@context"]) && (t2 = t2["@context"]);
  if (Oe(t2).length === 0)
    return e5;
  const i2 = yield n2.contextResolver.resolve({ activeCtx: e5, context: t2, documentLoader: n2.documentLoader, base: n2.base });
  be(i2[0].document) && typeof i2[0].document["@propagate"] == "boolean" && (o2 = i2[0].document["@propagate"]);
  let s2 = e5;
  o2 || s2.previousContext || (s2 = s2.clone(), s2.previousContext = e5);
  for (const o3 of i2) {
    let { document: i3 } = o3;
    if (e5 = s2, i3 === null) {
      if (!r2 && Object.keys(e5.protected).length !== 0) {
        const r3 = n2 && n2.protectedMode || "error";
        if (r3 === "error")
          throw new k("Tried to nullify a context with protected terms outside of a term definition.", "jsonld.SyntaxError", { code: "invalid context nullification" });
        if (r3 === "warn") {
          console.warn("WARNING: invalid context nullification");
          const t3 = o3.getProcessed(e5);
          if (t3) {
            s2 = e5 = t3;
            continue;
          }
          const r4 = e5;
          s2 = e5 = Ae.getInitialContext(n2).clone();
          for (const [t4, n3] of Object.entries(r4.protected))
            n3 && (e5.mappings[t4] = E.clone(r4.mappings[t4]));
          e5.protected = E.clone(r4.protected), o3.setProcessed(r4, s2);
          continue;
        }
        throw new k("Invalid protectedMode.", "jsonld.SyntaxError", { code: "invalid protected mode", context: t2, protectedMode: r3 });
      }
      s2 = e5 = Ae.getInitialContext(n2).clone();
      continue;
    }
    const l2 = o3.getProcessed(e5);
    if (l2) {
      s2 = e5 = l2;
      continue;
    }
    if (be(i3) && "@context" in i3 && (i3 = i3["@context"]), !be(i3))
      throw new k("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", { code: "invalid local context", context: i3 });
    s2 = s2.clone();
    const c2 = new Map();
    if ("@version" in i3) {
      if (i3["@version"] !== 1.1)
        throw new k("Unsupported JSON-LD version: " + i3["@version"], "jsonld.UnsupportedVersion", { code: "invalid @version value", context: i3 });
      if (e5.processingMode && e5.processingMode === "json-ld-1.0")
        throw new k("@version: " + i3["@version"] + " not compatible with " + e5.processingMode, "jsonld.ProcessingModeConflict", { code: "processing mode conflict", context: i3 });
      s2.processingMode = "json-ld-1.1", s2["@version"] = i3["@version"], c2.set("@version", true);
    }
    if (s2.processingMode = s2.processingMode || e5.processingMode, "@base" in i3) {
      let e6 = i3["@base"];
      if (e6 === null || Ie(e6))
        ;
      else {
        if (!Ne(e6))
          throw new k('Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.', "jsonld.SyntaxError", { code: "invalid base IRI", context: i3 });
        e6 = Se(s2["@base"], e6);
      }
      s2["@base"] = e6, c2.set("@base", true);
    }
    if ("@vocab" in i3) {
      const e6 = i3["@vocab"];
      if (e6 === null)
        delete s2["@vocab"];
      else {
        if (!we(e6))
          throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.', "jsonld.SyntaxError", { code: "invalid vocab mapping", context: i3 });
        if (!Ie(e6) && Ae.processingMode(s2, 1))
          throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.', "jsonld.SyntaxError", { code: "invalid vocab mapping", context: i3 });
        s2["@vocab"] = Te(s2, e6, { vocab: true, base: true }, void 0, void 0, n2);
      }
      c2.set("@vocab", true);
    }
    if ("@language" in i3) {
      const e6 = i3["@language"];
      if (e6 === null)
        delete s2["@language"];
      else {
        if (!we(e6))
          throw new k('Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.', "jsonld.SyntaxError", { code: "invalid default language", context: i3 });
        s2["@language"] = e6.toLowerCase();
      }
      c2.set("@language", true);
    }
    if ("@direction" in i3) {
      const t3 = i3["@direction"];
      if (e5.processingMode === "json-ld-1.0")
        throw new k("Invalid JSON-LD syntax; @direction not compatible with " + e5.processingMode, "jsonld.SyntaxError", { code: "invalid context member", context: i3 });
      if (t3 === null)
        delete s2["@direction"];
      else {
        if (t3 !== "ltr" && t3 !== "rtl")
          throw new k('Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", context: i3 });
        s2["@direction"] = t3;
      }
      c2.set("@direction", true);
    }
    if ("@propagate" in i3) {
      const n3 = i3["@propagate"];
      if (e5.processingMode === "json-ld-1.0")
        throw new k("Invalid JSON-LD syntax; @propagate not compatible with " + e5.processingMode, "jsonld.SyntaxError", { code: "invalid context entry", context: i3 });
      if (typeof n3 != "boolean")
        throw new k("Invalid JSON-LD syntax; @propagate value must be a boolean.", "jsonld.SyntaxError", { code: "invalid @propagate value", context: t2 });
      c2.set("@propagate", true);
    }
    if ("@import" in i3) {
      const o4 = i3["@import"];
      if (e5.processingMode === "json-ld-1.0")
        throw new k("Invalid JSON-LD syntax; @import not compatible with " + e5.processingMode, "jsonld.SyntaxError", { code: "invalid context entry", context: i3 });
      if (!we(o4))
        throw new k("Invalid JSON-LD syntax; @import must be a string.", "jsonld.SyntaxError", { code: "invalid @import value", context: t2 });
      const r3 = yield n2.contextResolver.resolve({ activeCtx: e5, context: o4, documentLoader: n2.documentLoader, base: n2.base });
      if (r3.length !== 1)
        throw new k("Invalid JSON-LD syntax; @import must reference a single context.", "jsonld.SyntaxError", { code: "invalid remote context", context: t2 });
      const a3 = r3[0].getProcessed(e5);
      if (a3)
        i3 = a3;
      else {
        const n3 = r3[0].document;
        if ("@import" in n3)
          throw new k("Invalid JSON-LD syntax: imported context must not include @import.", "jsonld.SyntaxError", { code: "invalid context entry", context: t2 });
        for (const e6 in n3)
          i3.hasOwnProperty(e6) || (i3[e6] = n3[e6]);
        r3[0].setProcessed(e5, i3);
      }
      c2.set("@import", true);
    }
    c2.set("@protected", i3["@protected"] || false);
    for (const e6 in i3)
      if (Ae.createTermDefinition({ activeCtx: s2, localCtx: i3, term: e6, defined: c2, options: n2, overrideProtected: r2 }), be(i3[e6]) && "@context" in i3[e6]) {
        const t3 = i3[e6]["@context"];
        let o4 = true;
        if (we(t3)) {
          const e7 = Se(n2.base, t3);
          a2.has(e7) ? o4 = false : a2.add(e7);
        }
        if (o4)
          try {
            yield Ae.process({ activeCtx: s2.clone(), localCtx: i3[e6]["@context"], overrideProtected: true, options: n2, cycles: a2 });
          } catch (t4) {
            throw new k("Invalid JSON-LD syntax; invalid scoped context.", "jsonld.SyntaxError", { code: "invalid scoped context", context: i3[e6]["@context"], term: e6 });
          }
      }
    o3.setProcessed(e5, s2);
  }
  return s2;
}), Ae.createTermDefinition = ({ activeCtx: e5, localCtx: t2, term: n2, defined: o2, options: r2, overrideProtected: a2 = false }) => {
  if (o2.has(n2)) {
    if (o2.get(n2))
      return;
    throw new k("Cyclical context definition detected.", "jsonld.CyclicalContext", { code: "cyclic IRI mapping", context: t2, term: n2 });
  }
  let i2;
  if (o2.set(n2, false), t2.hasOwnProperty(n2) && (i2 = t2[n2]), n2 === "@type" && be(i2) && (i2["@container"] || "@set") === "@set" && Ae.processingMode(e5, 1.1)) {
    const e6 = ["@container", "@id", "@protected"], o3 = Object.keys(i2);
    if (o3.length === 0 || o3.some((t3) => !e6.includes(t3)))
      throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", { code: "keyword redefinition", context: t2, term: n2 });
  } else {
    if (Ae.isKeyword(n2))
      throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", { code: "keyword redefinition", context: t2, term: n2 });
    if (n2.match(Le))
      return void console.warn('WARNING: terms beginning with "@" are reserved for future use and ignored', { term: n2 });
    if (n2 === "")
      throw new k("Invalid JSON-LD syntax; a term cannot be an empty string.", "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
  }
  const s2 = e5.mappings.get(n2);
  e5.mappings.has(n2) && e5.mappings.delete(n2);
  let l2 = false;
  if ((we(i2) || i2 === null) && (l2 = true, i2 = { "@id": i2 }), !be(i2))
    throw new k("Invalid JSON-LD syntax; @context term values must be strings or objects.", "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
  const c2 = {};
  e5.mappings.set(n2, c2), c2.reverse = false;
  const d2 = ["@container", "@id", "@language", "@reverse", "@type"];
  Ae.processingMode(e5, 1.1) && d2.push("@context", "@direction", "@index", "@nest", "@prefix", "@protected");
  for (const e6 in i2)
    if (!d2.includes(e6))
      throw new k("Invalid JSON-LD syntax; a term definition must not contain " + e6, "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
  const u2 = n2.indexOf(":");
  if (c2._termHasColon = u2 > 0, "@reverse" in i2) {
    if ("@id" in i2)
      throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t2 });
    if ("@nest" in i2)
      throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t2 });
    const a3 = i2["@reverse"];
    if (!we(a3))
      throw new k("Invalid JSON-LD syntax; a @context @reverse value must be a string.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2 });
    if (!Ae.isKeyword(a3) && a3.match(Le))
      return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored', { reverse: a3 }), void (s2 ? e5.mappings.set(n2, s2) : e5.mappings.delete(n2));
    const l3 = Te(e5, a3, { vocab: true, base: false }, t2, o2, r2);
    if (!Ie(l3))
      throw new k("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2 });
    c2["@id"] = l3, c2.reverse = true;
  } else if ("@id" in i2) {
    let a3 = i2["@id"];
    if (a3 && !we(a3))
      throw new k("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2 });
    if (a3 === null)
      c2["@id"] = null;
    else {
      if (!Ae.isKeyword(a3) && a3.match(Le))
        return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored', { id: a3 }), void (s2 ? e5.mappings.set(n2, s2) : e5.mappings.delete(n2));
      if (a3 !== n2) {
        if (a3 = Te(e5, a3, { vocab: true, base: false }, t2, o2, r2), !Ie(a3) && !Ae.isKeyword(a3))
          throw new k("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2 });
        if (n2.match(/(?::[^:])|\//)) {
          if (Te(e5, n2, { vocab: true, base: false }, t2, new Map(o2).set(n2, true), r2) !== a3)
            throw new k("Invalid JSON-LD syntax; term in form of IRI must expand to definition.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2 });
        }
        c2["@id"] = a3, c2._prefix = l2 && !c2._termHasColon && a3.match(/[:\/\?#\[\]@]$/);
      }
    }
  }
  if (!("@id" in c2))
    if (c2._termHasColon) {
      const a3 = n2.substr(0, u2);
      if (t2.hasOwnProperty(a3) && Ae.createTermDefinition({ activeCtx: e5, localCtx: t2, term: a3, defined: o2, options: r2 }), e5.mappings.has(a3)) {
        const t3 = n2.substr(u2 + 1);
        c2["@id"] = e5.mappings.get(a3)["@id"] + t3;
      } else
        c2["@id"] = n2;
    } else if (n2 === "@type")
      c2["@id"] = n2;
    else {
      if (!("@vocab" in e5))
        throw new k("Invalid JSON-LD syntax; @context terms must define an @id.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t2, term: n2 });
      c2["@id"] = e5["@vocab"] + n2;
    }
  if ((i2["@protected"] === true || o2.get("@protected") === true && i2["@protected"] !== false) && (e5.protected[n2] = true, c2.protected = true), o2.set(n2, true), "@type" in i2) {
    let n3 = i2["@type"];
    if (!we(n3))
      throw new k("Invalid JSON-LD syntax; an @context @type value must be a string.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t2 });
    if (n3 === "@json" || n3 === "@none") {
      if (Ae.processingMode(e5, 1))
        throw new k(`Invalid JSON-LD syntax; an @context @type value must not be "${n3}" in JSON-LD 1.0 mode.`, "jsonld.SyntaxError", { code: "invalid type mapping", context: t2 });
    } else if (n3 !== "@id" && n3 !== "@vocab") {
      if (n3 = Te(e5, n3, { vocab: true, base: false }, t2, o2, r2), !Ie(n3))
        throw new k("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t2 });
      if (n3.indexOf("_:") === 0)
        throw new k("Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t2 });
    }
    c2["@type"] = n3;
  }
  if ("@container" in i2) {
    const n3 = we(i2["@container"]) ? [i2["@container"]] : i2["@container"] || [], o3 = ["@list", "@set", "@index", "@language"];
    let r3 = true;
    const a3 = n3.includes("@set");
    if (Ae.processingMode(e5, 1.1)) {
      if (o3.push("@graph", "@id", "@type"), n3.includes("@list")) {
        if (n3.length !== 1)
          throw new k("Invalid JSON-LD syntax; @context @container with @list must have no other values", "jsonld.SyntaxError", { code: "invalid container mapping", context: t2 });
      } else if (n3.includes("@graph")) {
        if (n3.some((e6) => e6 !== "@graph" && e6 !== "@id" && e6 !== "@index" && e6 !== "@set"))
          throw new k("Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set", "jsonld.SyntaxError", { code: "invalid container mapping", context: t2 });
      } else
        r3 &= n3.length <= (a3 ? 2 : 1);
      if (n3.includes("@type") && (c2["@type"] = c2["@type"] || "@id", !["@id", "@vocab"].includes(c2["@type"])))
        throw new k("Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t2 });
    } else
      r3 &= !xe(i2["@container"]), r3 &= n3.length <= 1;
    if (r3 &= n3.every((e6) => o3.includes(e6)), r3 &= !(a3 && n3.includes("@list")), !r3)
      throw new k("Invalid JSON-LD syntax; @context @container value must be one of the following: " + o3.join(", "), "jsonld.SyntaxError", { code: "invalid container mapping", context: t2 });
    if (c2.reverse && !n3.every((e6) => ["@index", "@set"].includes(e6)))
      throw new k("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t2 });
    c2["@container"] = n3;
  }
  if ("@index" in i2) {
    if (!("@container" in i2) || !c2["@container"].includes("@index"))
      throw new k(`Invalid JSON-LD syntax; @index without @index in @container: "${i2["@index"]}" on term "${n2}".`, "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
    if (!we(i2["@index"]) || i2["@index"].indexOf("@") === 0)
      throw new k(`Invalid JSON-LD syntax; @index must expand to an IRI: "${i2["@index"]}" on term "${n2}".`, "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
    c2["@index"] = i2["@index"];
  }
  if ("@context" in i2 && (c2["@context"] = i2["@context"]), "@language" in i2 && !("@type" in i2)) {
    let e6 = i2["@language"];
    if (e6 !== null && !we(e6))
      throw new k("Invalid JSON-LD syntax; @context @language value must be a string or null.", "jsonld.SyntaxError", { code: "invalid language mapping", context: t2 });
    e6 !== null && (e6 = e6.toLowerCase()), c2["@language"] = e6;
  }
  if ("@prefix" in i2) {
    if (n2.match(/:|\//))
      throw new k("Invalid JSON-LD syntax; @context @prefix used on a compact IRI term", "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
    if (Ae.isKeyword(c2["@id"]))
      throw new k("Invalid JSON-LD syntax; keywords may not be used as prefixes", "jsonld.SyntaxError", { code: "invalid term definition", context: t2 });
    if (typeof i2["@prefix"] != "boolean")
      throw new k("Invalid JSON-LD syntax; @context value for @prefix must be boolean", "jsonld.SyntaxError", { code: "invalid @prefix value", context: t2 });
    c2._prefix = i2["@prefix"] === true;
  }
  if ("@direction" in i2) {
    const e6 = i2["@direction"];
    if (e6 !== null && e6 !== "ltr" && e6 !== "rtl")
      throw new k('Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", context: t2 });
    c2["@direction"] = e6;
  }
  if ("@nest" in i2) {
    const e6 = i2["@nest"];
    if (!we(e6) || e6 !== "@nest" && e6.indexOf("@") === 0)
      throw new k("Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.", "jsonld.SyntaxError", { code: "invalid @nest value", context: t2 });
    c2["@nest"] = e6;
  }
  const p2 = c2["@id"];
  if (p2 === "@context" || p2 === "@preserve")
    throw new k("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.", "jsonld.SyntaxError", { code: "invalid keyword alias", context: t2 });
  if (s2 && s2.protected && !a2 && (e5.protected[n2] = true, c2.protected = true, !Re(s2, c2))) {
    const e6 = r2 && r2.protectedMode || "error";
    if (e6 === "error")
      throw new k(`Invalid JSON-LD syntax; tried to redefine "${n2}" which is a protected term.`, "jsonld.SyntaxError", { code: "protected term redefinition", context: t2, term: n2 });
    if (e6 === "warn")
      return void console.warn("WARNING: protected term redefinition", { term: n2 });
    throw new k("Invalid protectedMode.", "jsonld.SyntaxError", { code: "invalid protected mode", context: t2, term: n2, protectedMode: e6 });
  }
}, Ae.expandIri = (e5, t2, n2, o2) => Te(e5, t2, n2, void 0, void 0, o2), Ae.getInitialContext = (e5) => {
  const t2 = JSON.stringify({ processingMode: e5.processingMode }), n2 = Ce.get(t2);
  if (n2)
    return n2;
  const o2 = { processingMode: e5.processingMode, mappings: new Map(), inverse: null, getInverse: function() {
    const e6 = this;
    if (e6.inverse)
      return e6.inverse;
    const t3 = e6.inverse = {}, n3 = e6.fastCurieMap = {}, o3 = {}, i2 = (e6["@language"] || "@none").toLowerCase(), s2 = e6["@direction"], l2 = e6.mappings, c2 = [...l2.keys()].sort(ke);
    for (const e7 of c2) {
      const r3 = l2.get(e7);
      if (r3 === null)
        continue;
      let c3 = r3["@container"] || "@none";
      if (c3 = [].concat(c3).sort().join(""), r3["@id"] === null)
        continue;
      const d2 = Oe(r3["@id"]);
      for (const l3 of d2) {
        let d3 = t3[l3];
        const u2 = Ae.isKeyword(l3);
        if (d3)
          u2 || r3._termHasColon || o3[l3].push(e7);
        else if (t3[l3] = d3 = {}, !u2 && !r3._termHasColon) {
          o3[l3] = [e7];
          const t4 = { iri: l3, terms: o3[l3] };
          l3[0] in n3 ? n3[l3[0]].push(t4) : n3[l3[0]] = [t4];
        }
        if (d3[c3] || (d3[c3] = { "@language": {}, "@type": {}, "@any": {} }), d3 = d3[c3], a2(e7, d3["@any"], "@none"), r3.reverse)
          a2(e7, d3["@type"], "@reverse");
        else if (r3["@type"] === "@none")
          a2(e7, d3["@any"], "@none"), a2(e7, d3["@language"], "@none"), a2(e7, d3["@type"], "@none");
        else if ("@type" in r3)
          a2(e7, d3["@type"], r3["@type"]);
        else if ("@language" in r3 && "@direction" in r3) {
          const t4 = r3["@language"], n4 = r3["@direction"];
          a2(e7, d3["@language"], t4 && n4 ? `${t4}_${n4}`.toLowerCase() : t4 ? t4.toLowerCase() : n4 ? `_${n4}` : "@null");
        } else
          "@language" in r3 ? a2(e7, d3["@language"], (r3["@language"] || "@null").toLowerCase()) : "@direction" in r3 ? r3["@direction"] ? a2(e7, d3["@language"], `_${r3["@direction"]}`) : a2(e7, d3["@language"], "@none") : s2 ? (a2(e7, d3["@language"], `_${s2}`), a2(e7, d3["@language"], "@none"), a2(e7, d3["@type"], "@none")) : (a2(e7, d3["@language"], i2), a2(e7, d3["@language"], "@none"), a2(e7, d3["@type"], "@none"));
      }
    }
    for (const e7 in n3)
      r2(n3, e7, 1);
    return t3;
  }, clone: function() {
    const e6 = {};
    e6.mappings = E.clone(this.mappings), e6.clone = this.clone, e6.inverse = null, e6.getInverse = this.getInverse, e6.protected = E.clone(this.protected), this.previousContext && (e6.previousContext = this.previousContext.clone());
    e6.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (e6["@base"] = this["@base"]);
    "@language" in this && (e6["@language"] = this["@language"]);
    "@vocab" in this && (e6["@vocab"] = this["@vocab"]);
    return e6;
  }, revertToPreviousContext: function() {
    if (!this.previousContext)
      return this;
    return this.previousContext.clone();
  }, protected: {} };
  return Ce.size === 1e4 && Ce.clear(), Ce.set(t2, o2), o2;
  function r2(e6, t3, n3) {
    const o3 = e6[t3], a3 = e6[t3] = {};
    let i2, s2;
    for (const e7 of o3)
      i2 = e7.iri, s2 = n3 >= i2.length ? "" : i2[n3], s2 in a3 ? a3[s2].push(e7) : a3[s2] = [e7];
    for (const e7 in a3)
      e7 !== "" && r2(a3, e7, n3 + 1);
  }
  function a2(e6, t3, n3) {
    t3.hasOwnProperty(n3) || (t3[n3] = e6);
  }
}, Ae.getContextValue = (e5, t2, n2) => {
  if (t2 === null) {
    if (n2 === "@context")
      return;
    return null;
  }
  if (e5.mappings.has(t2)) {
    const o2 = e5.mappings.get(t2);
    if (je(n2))
      return o2;
    if (o2.hasOwnProperty(n2))
      return o2[n2];
  }
  return n2 === "@language" && n2 in e5 || n2 === "@direction" && n2 in e5 ? e5[n2] : n2 !== "@context" ? null : void 0;
}, Ae.processingMode = (e5, t2) => t2.toString() >= "1.1" ? !e5.processingMode || e5.processingMode >= "json-ld-" + t2.toString() : e5.processingMode === "json-ld-1.0", Ae.isKeyword = (e5) => {
  if (!we(e5) || e5[0] !== "@")
    return false;
  switch (e5) {
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
      return true;
  }
  return false;
};
var { isArray: Ee, isObject: _e, isEmptyObject: Me, isString: Pe, isUndefined: Je } = N;
var { isList: Be, isValue: Fe, isGraph: Ue, isSubject: qe } = O;
var { expandIri: Ve, getContextValue: ze, isKeyword: $e, process: Ge, processingMode: He } = De;
var { isAbsolute: Qe } = P;
var { addValue: Ke, asArray: Xe, getValues: Ze, validateTypeValue: We } = E;
var Ye = {};
var et = Ye;
var tt = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;
function nt(_0) {
  return __async(this, arguments, function* ({ activeCtx: e5, activeProperty: t2, expandedActiveProperty: n2, element: o2, expandedParent: r2, options: a2 = {}, insideList: i2, typeKey: s2, typeScopedContext: l2, expansionMap: c2 }) {
    const d2 = Object.keys(o2).sort(), u2 = [];
    let p2;
    const h2 = o2[s2] && Ve(e5, Ee(o2[s2]) ? o2[s2][0] : o2[s2], { vocab: true }, a2) === "@json";
    for (const s3 of d2) {
      let d3, f2 = o2[s3];
      if (s3 === "@context")
        continue;
      let v2 = Ve(e5, s3, { vocab: true }, a2);
      if ((v2 === null || !Qe(v2) && !$e(v2)) && (v2 = c2({ unmappedProperty: s3, activeCtx: e5, activeProperty: t2, parent: o2, options: a2, insideList: i2, value: f2, expandedParent: r2 }), v2 === void 0))
        continue;
      if ($e(v2)) {
        if (n2 === "@reverse")
          throw new k("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.", "jsonld.SyntaxError", { code: "invalid reverse property map", value: f2 });
        if (v2 in r2 && v2 !== "@included" && v2 !== "@type")
          throw new k("Invalid JSON-LD syntax; colliding keywords detected.", "jsonld.SyntaxError", { code: "colliding keywords", keyword: v2 });
      }
      if (v2 === "@id") {
        if (!Pe(f2)) {
          if (!a2.isFrame)
            throw new k('Invalid JSON-LD syntax; "@id" value must a string.', "jsonld.SyntaxError", { code: "invalid @id value", value: f2 });
          if (_e(f2)) {
            if (!Me(f2))
              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: f2 });
          } else {
            if (!Ee(f2))
              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: f2 });
            if (!f2.every((e6) => Pe(e6)))
              throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: f2 });
          }
        }
        Ke(r2, "@id", Xe(f2).map((t3) => Pe(t3) ? Ve(e5, t3, { base: true }, a2) : t3), { propertyIsArray: a2.isFrame });
        continue;
      }
      if (v2 === "@type") {
        _e(f2) && (f2 = Object.fromEntries(Object.entries(f2).map(([e6, t3]) => [Ve(l2, e6, { vocab: true }), Xe(t3).map((e7) => Ve(l2, e7, { base: true, vocab: true }))]))), We(f2, a2.isFrame), Ke(r2, "@type", Xe(f2).map((e6) => Pe(e6) ? Ve(l2, e6, { base: true, vocab: true }, a2) : e6), { propertyIsArray: a2.isFrame });
        continue;
      }
      if (v2 === "@included" && He(e5, 1.1)) {
        const n3 = Xe(yield Ye.expand({ activeCtx: e5, activeProperty: t2, element: f2, options: a2, expansionMap: c2 }));
        if (!n3.every((e6) => qe(e6)))
          throw new k("Invalid JSON-LD syntax; values of @included must expand to node objects.", "jsonld.SyntaxError", { code: "invalid @included value", value: f2 });
        Ke(r2, "@included", n3, { propertyIsArray: true });
        continue;
      }
      if (v2 === "@graph" && !_e(f2) && !Ee(f2))
        throw new k('Invalid JSON-LD syntax; "@graph" value must not be an object or an array.', "jsonld.SyntaxError", { code: "invalid @graph value", value: f2 });
      if (v2 === "@value") {
        p2 = f2, h2 && He(e5, 1.1) ? r2["@value"] = f2 : Ke(r2, "@value", f2, { propertyIsArray: a2.isFrame });
        continue;
      }
      if (v2 === "@language") {
        if (f2 === null)
          continue;
        if (!Pe(f2) && !a2.isFrame)
          throw new k('Invalid JSON-LD syntax; "@language" value must be a string.', "jsonld.SyntaxError", { code: "invalid language-tagged string", value: f2 });
        f2 = Xe(f2).map((e6) => Pe(e6) ? e6.toLowerCase() : e6);
        for (const e6 of f2)
          Pe(e6) && !e6.match(tt) && console.warn(`@language must be valid BCP47: ${e6}`);
        Ke(r2, "@language", f2, { propertyIsArray: a2.isFrame });
        continue;
      }
      if (v2 === "@direction") {
        if (!Pe(f2) && !a2.isFrame)
          throw new k('Invalid JSON-LD syntax; "@direction" value must be a string.', "jsonld.SyntaxError", { code: "invalid base direction", value: f2 });
        f2 = Xe(f2);
        for (const e6 of f2)
          if (Pe(e6) && e6 !== "ltr" && e6 !== "rtl")
            throw new k('Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", value: f2 });
        Ke(r2, "@direction", f2, { propertyIsArray: a2.isFrame });
        continue;
      }
      if (v2 === "@index") {
        if (!Pe(f2))
          throw new k('Invalid JSON-LD syntax; "@index" value must be a string.', "jsonld.SyntaxError", { code: "invalid @index value", value: f2 });
        Ke(r2, "@index", f2);
        continue;
      }
      if (v2 === "@reverse") {
        if (!_e(f2))
          throw new k('Invalid JSON-LD syntax; "@reverse" value must be an object.', "jsonld.SyntaxError", { code: "invalid @reverse value", value: f2 });
        if (d3 = yield Ye.expand({ activeCtx: e5, activeProperty: "@reverse", element: f2, options: a2, expansionMap: c2 }), "@reverse" in d3)
          for (const e6 in d3["@reverse"])
            Ke(r2, e6, d3["@reverse"][e6], { propertyIsArray: true });
        let t3 = r2["@reverse"] || null;
        for (const e6 in d3) {
          if (e6 === "@reverse")
            continue;
          t3 === null && (t3 = r2["@reverse"] = {}), Ke(t3, e6, [], { propertyIsArray: true });
          const n3 = d3[e6];
          for (let o3 = 0; o3 < n3.length; ++o3) {
            const r3 = n3[o3];
            if (Fe(r3) || Be(r3))
              throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", { code: "invalid reverse property value", value: d3 });
            Ke(t3, e6, r3, { propertyIsArray: true });
          }
        }
        continue;
      }
      if (v2 === "@nest") {
        u2.push(s3);
        continue;
      }
      let g2 = e5;
      const y2 = ze(e5, s3, "@context");
      Je(y2) || (g2 = yield Ge({ activeCtx: e5, localCtx: y2, propagate: true, overrideProtected: true, options: a2 }));
      const m2 = ze(g2, s3, "@container") || [];
      if (m2.includes("@language") && _e(f2)) {
        d3 = rt(g2, f2, ze(g2, s3, "@direction"), a2);
      } else if (m2.includes("@index") && _e(f2)) {
        const t3 = m2.includes("@graph"), n3 = ze(g2, s3, "@index") || "@index", o3 = n3 !== "@index" && Ve(e5, n3, { vocab: true }, a2);
        d3 = yield at({ activeCtx: g2, options: a2, activeProperty: s3, value: f2, expansionMap: c2, asGraph: t3, indexKey: n3, propertyIndex: o3 });
      } else if (m2.includes("@id") && _e(f2)) {
        const e6 = m2.includes("@graph");
        d3 = yield at({ activeCtx: g2, options: a2, activeProperty: s3, value: f2, expansionMap: c2, asGraph: e6, indexKey: "@id" });
      } else if (m2.includes("@type") && _e(f2))
        d3 = yield at({ activeCtx: g2.revertToPreviousContext(), options: a2, activeProperty: s3, value: f2, expansionMap: c2, asGraph: false, indexKey: "@type" });
      else {
        const o3 = v2 === "@list";
        if (o3 || v2 === "@set") {
          let e6 = t2;
          o3 && n2 === "@graph" && (e6 = null), d3 = yield Ye.expand({ activeCtx: g2, activeProperty: e6, element: f2, options: a2, insideList: o3, expansionMap: c2 });
        } else
          d3 = ze(e5, s3, "@type") === "@json" ? { "@type": "@json", "@value": f2 } : yield Ye.expand({ activeCtx: g2, activeProperty: s3, element: f2, options: a2, insideList: false, expansionMap: c2 });
      }
      if (d3 !== null || v2 === "@value" || (d3 = c2({ unmappedValue: f2, expandedProperty: v2, activeCtx: g2, activeProperty: t2, parent: o2, options: a2, insideList: i2, key: s3, expandedParent: r2 }), d3 !== void 0))
        if (v2 !== "@list" && !Be(d3) && m2.includes("@list") && (d3 = { "@list": Xe(d3) }), m2.includes("@graph") && !m2.some((e6) => e6 === "@id" || e6 === "@index") && (d3 = Xe(d3).map((e6) => ({ "@graph": Xe(e6) }))), g2.mappings.has(s3) && g2.mappings.get(s3).reverse) {
          const e6 = r2["@reverse"] = r2["@reverse"] || {};
          d3 = Xe(d3);
          for (let t3 = 0; t3 < d3.length; ++t3) {
            const n3 = d3[t3];
            if (Fe(n3) || Be(n3))
              throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", { code: "invalid reverse property value", value: d3 });
            Ke(e6, v2, n3, { propertyIsArray: true });
          }
        } else
          Ke(r2, v2, d3, { propertyIsArray: true });
    }
    if ("@value" in r2) {
      if (r2["@type"] === "@json" && He(e5, 1.1))
        ;
      else if ((_e(p2) || Ee(p2)) && !a2.isFrame)
        throw new k('Invalid JSON-LD syntax; "@value" value must not be an object or an array.', "jsonld.SyntaxError", { code: "invalid value object value", value: p2 });
    }
    for (const d3 of u2) {
      const u3 = Ee(o2[d3]) ? o2[d3] : [o2[d3]];
      for (const o3 of u3) {
        if (!_e(o3) || Object.keys(o3).some((t3) => Ve(e5, t3, { vocab: true }, a2) === "@value"))
          throw new k("Invalid JSON-LD syntax; nested value must be a node object.", "jsonld.SyntaxError", { code: "invalid @nest value", value: o3 });
        yield nt({ activeCtx: e5, activeProperty: t2, expandedActiveProperty: n2, element: o3, expandedParent: r2, options: a2, insideList: i2, typeScopedContext: l2, typeKey: s2, expansionMap: c2 });
      }
    }
  });
}
function ot({ activeCtx: e5, activeProperty: t2, value: n2, options: o2 }) {
  if (n2 == null)
    return null;
  const r2 = Ve(e5, t2, { vocab: true }, o2);
  if (r2 === "@id")
    return Ve(e5, n2, { base: true }, o2);
  if (r2 === "@type")
    return Ve(e5, n2, { vocab: true, base: true }, o2);
  const a2 = ze(e5, t2, "@type");
  if ((a2 === "@id" || r2 === "@graph") && Pe(n2))
    return { "@id": Ve(e5, n2, { base: true }, o2) };
  if (a2 === "@vocab" && Pe(n2))
    return { "@id": Ve(e5, n2, { vocab: true, base: true }, o2) };
  if ($e(r2))
    return n2;
  const i2 = {};
  if (a2 && !["@id", "@vocab", "@none"].includes(a2))
    i2["@type"] = a2;
  else if (Pe(n2)) {
    const n3 = ze(e5, t2, "@language");
    n3 !== null && (i2["@language"] = n3);
    const o3 = ze(e5, t2, "@direction");
    o3 !== null && (i2["@direction"] = o3);
  }
  return ["boolean", "number", "string"].includes(typeof n2) || (n2 = n2.toString()), i2["@value"] = n2, i2;
}
function rt(e5, t2, n2, o2) {
  const r2 = [], a2 = Object.keys(t2).sort();
  for (const i2 of a2) {
    const a3 = Ve(e5, i2, { vocab: true }, o2);
    let s2 = t2[i2];
    Ee(s2) || (s2 = [s2]);
    for (const e6 of s2) {
      if (e6 === null)
        continue;
      if (!Pe(e6))
        throw new k("Invalid JSON-LD syntax; language map values must be strings.", "jsonld.SyntaxError", { code: "invalid language map value", languageMap: t2 });
      const o3 = { "@value": e6 };
      a3 !== "@none" && (o3["@language"] = i2.toLowerCase()), n2 && (o3["@direction"] = n2), r2.push(o3);
    }
  }
  return r2;
}
function at(_0) {
  return __async(this, arguments, function* ({ activeCtx: e5, options: t2, activeProperty: n2, value: o2, expansionMap: r2, asGraph: a2, indexKey: i2, propertyIndex: s2 }) {
    const l2 = [], c2 = Object.keys(o2).sort(), d2 = i2 === "@type";
    for (let u2 of c2) {
      if (d2) {
        const n3 = ze(e5, u2, "@context");
        Je(n3) || (e5 = yield Ge({ activeCtx: e5, localCtx: n3, propagate: false, options: t2 }));
      }
      let c3, p2 = o2[u2];
      Ee(p2) || (p2 = [p2]), p2 = yield Ye.expand({ activeCtx: e5, activeProperty: n2, element: p2, options: t2, insideList: false, insideIndex: true, expansionMap: r2 }), c3 = s2 ? u2 === "@none" ? "@none" : ot({ activeCtx: e5, activeProperty: i2, value: u2, options: t2 }) : Ve(e5, u2, { vocab: true }, t2), i2 === "@id" ? u2 = Ve(e5, u2, { base: true }, t2) : d2 && (u2 = c3);
      for (let e6 of p2) {
        if (a2 && !Ue(e6) && (e6 = { "@graph": [e6] }), i2 === "@type")
          c3 === "@none" || (e6["@type"] ? e6["@type"] = [u2].concat(e6["@type"]) : e6["@type"] = [u2]);
        else {
          if (Fe(e6) && !["@language", "@type", "@index"].includes(i2))
            throw new k(`Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${i2}".`, "jsonld.SyntaxError", { code: "invalid value object", value: e6 });
          s2 ? c3 !== "@none" && Ke(e6, s2, c3, { propertyIsArray: true, prependValue: true }) : c3 === "@none" || i2 in e6 || (e6[i2] = u2);
        }
        l2.push(e6);
      }
    }
    return l2;
  });
}
Ye.expand = (_0) => __async(void 0, [_0], function* ({ activeCtx: e5, activeProperty: t2 = null, element: n2, options: o2 = {}, insideList: r2 = false, insideIndex: a2 = false, typeScopedContext: i2 = null, expansionMap: s2 = () => {
} }) {
  if (n2 == null)
    return null;
  if (t2 === "@default" && (o2 = Object.assign({}, o2, { isFrame: false })), !Ee(n2) && !_e(n2)) {
    if (!r2 && (t2 === null || Ve(e5, t2, { vocab: true }, o2) === "@graph")) {
      const a3 = yield s2({ unmappedValue: n2, activeCtx: e5, activeProperty: t2, options: o2, insideList: r2 });
      return a3 === void 0 ? null : a3;
    }
    return ot({ activeCtx: e5, activeProperty: t2, value: n2, options: o2 });
  }
  if (Ee(n2)) {
    let l3 = [];
    const c3 = ze(e5, t2, "@container") || [];
    r2 = r2 || c3.includes("@list");
    for (let c4 = 0; c4 < n2.length; ++c4) {
      let d3 = yield Ye.expand({ activeCtx: e5, activeProperty: t2, element: n2[c4], options: o2, expansionMap: s2, insideIndex: a2, typeScopedContext: i2 });
      r2 && Ee(d3) && (d3 = { "@list": d3 }), d3 === null && (d3 = yield s2({ unmappedValue: n2[c4], activeCtx: e5, activeProperty: t2, parent: n2, index: c4, options: o2, expandedParent: l3, insideList: r2 }), d3 === void 0) || (Ee(d3) ? l3 = l3.concat(d3) : l3.push(d3));
    }
    return l3;
  }
  const l2 = Ve(e5, t2, { vocab: true }, o2), c2 = ze(e5, t2, "@context");
  i2 = i2 || (e5.previousContext ? e5 : null);
  let d2 = Object.keys(n2).sort(), u2 = !a2;
  if (u2 && i2 && d2.length <= 2 && !d2.includes("@context"))
    for (const t3 of d2) {
      const n3 = Ve(i2, t3, { vocab: true }, o2);
      if (n3 === "@value") {
        u2 = false, e5 = i2;
        break;
      }
      if (n3 === "@id" && d2.length === 1) {
        u2 = false;
        break;
      }
    }
  u2 && (e5 = e5.revertToPreviousContext()), Je(c2) || (e5 = yield Ge({ activeCtx: e5, localCtx: c2, propagate: true, overrideProtected: true, options: o2 })), "@context" in n2 && (e5 = yield Ge({ activeCtx: e5, localCtx: n2["@context"], options: o2 })), i2 = e5;
  let p2 = null;
  for (const t3 of d2) {
    if (Ve(e5, t3, { vocab: true }, o2) === "@type") {
      p2 = p2 || t3;
      const r3 = n2[t3], a3 = Array.isArray(r3) ? r3.length > 1 ? r3.slice().sort() : r3 : [r3];
      for (const t4 of a3) {
        const n3 = ze(i2, t4, "@context");
        Je(n3) || (e5 = yield Ge({ activeCtx: e5, localCtx: n3, options: o2, propagate: false }));
      }
    }
  }
  let h2 = {};
  yield nt({ activeCtx: e5, activeProperty: t2, expandedActiveProperty: l2, element: n2, expandedParent: h2, options: o2, insideList: r2, typeKey: p2, typeScopedContext: i2, expansionMap: s2 }), d2 = Object.keys(h2);
  let f2 = d2.length;
  if ("@value" in h2) {
    if ("@type" in h2 && ("@language" in h2 || "@direction" in h2))
      throw new k('Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".', "jsonld.SyntaxError", { code: "invalid value object", element: h2 });
    let a3 = f2 - 1;
    if ("@type" in h2 && (a3 -= 1), "@index" in h2 && (a3 -= 1), "@language" in h2 && (a3 -= 1), "@direction" in h2 && (a3 -= 1), a3 !== 0)
      throw new k('Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".', "jsonld.SyntaxError", { code: "invalid value object", element: h2 });
    const i3 = h2["@value"] === null ? [] : Xe(h2["@value"]), l3 = Ze(h2, "@type");
    if (He(e5, 1.1) && l3.includes("@json") && l3.length === 1)
      ;
    else if (i3.length === 0) {
      const a4 = yield s2({ unmappedValue: h2, activeCtx: e5, activeProperty: t2, element: n2, options: o2, insideList: r2 });
      h2 = a4 !== void 0 ? a4 : null;
    } else {
      if (!i3.every((e6) => Pe(e6) || Me(e6)) && "@language" in h2)
        throw new k("Invalid JSON-LD syntax; only strings may be language-tagged.", "jsonld.SyntaxError", { code: "invalid language-tagged value", element: h2 });
      if (!l3.every((e6) => Qe(e6) && !(Pe(e6) && e6.indexOf("_:") === 0) || Me(e6)))
        throw new k('Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".', "jsonld.SyntaxError", { code: "invalid typed value", element: h2 });
    }
  } else if ("@type" in h2 && !Ee(h2["@type"]))
    h2["@type"] = [h2["@type"]];
  else if ("@set" in h2 || "@list" in h2) {
    if (f2 > 1 && (f2 !== 2 || !("@index" in h2)))
      throw new k('Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".', "jsonld.SyntaxError", { code: "invalid set or list object", element: h2 });
    "@set" in h2 && (h2 = h2["@set"], d2 = Object.keys(h2), f2 = d2.length);
  } else if (f2 === 1 && "@language" in h2) {
    const a3 = yield s2(h2, { unmappedValue: h2, activeCtx: e5, activeProperty: t2, element: n2, options: o2, insideList: r2 });
    h2 = a3 !== void 0 ? a3 : null;
  }
  if (_e(h2) && !o2.keepFreeFloatingNodes && !r2 && (t2 === null || l2 === "@graph") && (f2 === 0 || "@value" in h2 || "@list" in h2 || f2 === 1 && "@id" in h2)) {
    const a3 = yield s2({ unmappedValue: h2, activeCtx: e5, activeProperty: t2, element: n2, options: o2, insideList: r2 });
    h2 = a3 !== void 0 ? a3 : null;
  }
  return h2;
});
var { isKeyword: it } = De;
var st = {};
var lt = st;
st.createMergedNodeMap = (e5, t2) => {
  const n2 = (t2 = t2 || {}).issuer || new E.IdentifierIssuer("_:b"), o2 = { "@default": {} };
  return st.createNodeMap(e5, o2, "@default", n2), st.mergeNodeMaps(o2);
}, st.createNodeMap = (e5, t2, n2, o2, r2, a2) => {
  if (N.isArray(e5)) {
    for (const r3 of e5)
      st.createNodeMap(r3, t2, n2, o2, void 0, a2);
    return;
  }
  if (!N.isObject(e5))
    return void (a2 && a2.push(e5));
  if (O.isValue(e5)) {
    if ("@type" in e5) {
      let t3 = e5["@type"];
      t3.indexOf("_:") === 0 && (e5["@type"] = t3 = o2.getId(t3));
    }
    return void (a2 && a2.push(e5));
  }
  if (a2 && O.isList(e5)) {
    const i3 = [];
    return st.createNodeMap(e5["@list"], t2, n2, o2, r2, i3), void a2.push({ "@list": i3 });
  }
  if ("@type" in e5) {
    const t3 = e5["@type"];
    for (const e6 of t3)
      e6.indexOf("_:") === 0 && o2.getId(e6);
  }
  N.isUndefined(r2) && (r2 = O.isBlankNode(e5) ? o2.getId(e5["@id"]) : e5["@id"]), a2 && a2.push({ "@id": r2 });
  const i2 = t2[n2], s2 = i2[r2] = i2[r2] || {};
  s2["@id"] = r2;
  const l2 = Object.keys(e5).sort();
  for (let a3 of l2) {
    if (a3 === "@id")
      continue;
    if (a3 === "@reverse") {
      const a4 = { "@id": r2 }, s3 = e5["@reverse"];
      for (const e6 in s3) {
        const r3 = s3[e6];
        for (const s4 of r3) {
          let r4 = s4["@id"];
          O.isBlankNode(s4) && (r4 = o2.getId(r4)), st.createNodeMap(s4, t2, n2, o2, r4), E.addValue(i2[r4], e6, a4, { propertyIsArray: true, allowDuplicate: false });
        }
      }
      continue;
    }
    if (a3 === "@graph") {
      r2 in t2 || (t2[r2] = {}), st.createNodeMap(e5[a3], t2, r2, o2);
      continue;
    }
    if (a3 === "@included") {
      st.createNodeMap(e5[a3], t2, n2, o2);
      continue;
    }
    if (a3 !== "@type" && it(a3)) {
      if (a3 === "@index" && a3 in s2 && (e5[a3] !== s2[a3] || e5[a3]["@id"] !== s2[a3]["@id"]))
        throw new k("Invalid JSON-LD syntax; conflicting @index property detected.", "jsonld.SyntaxError", { code: "conflicting indexes", subject: s2 });
      s2[a3] = e5[a3];
      continue;
    }
    const l3 = e5[a3];
    if (a3.indexOf("_:") === 0 && (a3 = o2.getId(a3)), l3.length !== 0)
      for (let e6 of l3)
        if (a3 === "@type" && (e6 = e6.indexOf("_:") === 0 ? o2.getId(e6) : e6), O.isSubject(e6) || O.isSubjectReference(e6)) {
          if ("@id" in e6 && !e6["@id"])
            continue;
          const r3 = O.isBlankNode(e6) ? o2.getId(e6["@id"]) : e6["@id"];
          E.addValue(s2, a3, { "@id": r3 }, { propertyIsArray: true, allowDuplicate: false }), st.createNodeMap(e6, t2, n2, o2, r3);
        } else if (O.isValue(e6))
          E.addValue(s2, a3, e6, { propertyIsArray: true, allowDuplicate: false });
        else if (O.isList(e6)) {
          const i3 = [];
          st.createNodeMap(e6["@list"], t2, n2, o2, r2, i3), e6 = { "@list": i3 }, E.addValue(s2, a3, e6, { propertyIsArray: true, allowDuplicate: false });
        } else
          st.createNodeMap(e6, t2, n2, o2, r2), E.addValue(s2, a3, e6, { propertyIsArray: true, allowDuplicate: false });
    else
      E.addValue(s2, a3, [], { propertyIsArray: true });
  }
}, st.mergeNodeMapGraphs = (e5) => {
  const t2 = {};
  for (const n2 of Object.keys(e5).sort())
    for (const o2 of Object.keys(e5[n2]).sort()) {
      const r2 = e5[n2][o2];
      o2 in t2 || (t2[o2] = { "@id": o2 });
      const a2 = t2[o2];
      for (const e6 of Object.keys(r2).sort())
        if (it(e6) && e6 !== "@type")
          a2[e6] = E.clone(r2[e6]);
        else
          for (const t3 of r2[e6])
            E.addValue(a2, e6, E.clone(t3), { propertyIsArray: true, allowDuplicate: false });
    }
  return t2;
}, st.mergeNodeMaps = (e5) => {
  const t2 = e5["@default"], n2 = Object.keys(e5).sort();
  for (const o2 of n2) {
    if (o2 === "@default")
      continue;
    const n3 = e5[o2];
    let r2 = t2[o2];
    r2 ? "@graph" in r2 || (r2["@graph"] = []) : t2[o2] = r2 = { "@id": o2, "@graph": [] };
    const a2 = r2["@graph"];
    for (const e6 of Object.keys(n3).sort()) {
      const t3 = n3[e6];
      O.isSubjectReference(t3) || a2.push(t3);
    }
  }
  return t2;
};
var { isSubjectReference: ct } = O;
var { createMergedNodeMap: dt } = lt;
var ut = {};
var pt = ut;
ut.flatten = (e5) => {
  const t2 = dt(e5), n2 = [], o2 = Object.keys(t2).sort();
  for (let e6 = 0; e6 < o2.length; ++e6) {
    const r2 = t2[o2[e6]];
    ct(r2) || n2.push(r2);
  }
  return n2;
};
var ht = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
var ft = "http://www.w3.org/2001/XMLSchema#";
var vt = { LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context", LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context", RDF: ht, RDF_LIST: ht + "List", RDF_FIRST: ht + "first", RDF_REST: ht + "rest", RDF_NIL: ht + "nil", RDF_TYPE: ht + "type", RDF_PLAIN_LITERAL: ht + "PlainLiteral", RDF_XML_LITERAL: ht + "XMLLiteral", RDF_JSON_LITERAL: ht + "JSON", RDF_OBJECT: ht + "object", RDF_LANGSTRING: ht + "langString", XSD: ft, XSD_BOOLEAN: ft + "boolean", XSD_DOUBLE: ft + "double", XSD_INTEGER: ft + "integer", XSD_STRING: ft + "string" };
var { RDF_LIST: gt, RDF_FIRST: yt, RDF_REST: mt, RDF_NIL: xt, RDF_TYPE: bt, RDF_JSON_LITERAL: wt, XSD_BOOLEAN: jt, XSD_DOUBLE: It, XSD_INTEGER: Nt, XSD_STRING: St } = vt;
var Ot = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;
var kt = {};
var Ct = kt;
function Lt(e5, t2, n2) {
  if (e5.termType.endsWith("Node"))
    return { "@id": e5.value };
  const o2 = { "@value": e5.value };
  if (e5.language)
    o2["@language"] = e5.language;
  else {
    let r2 = e5.datatype.value;
    if (r2 || (r2 = St), r2 === wt) {
      r2 = "@json";
      try {
        o2["@value"] = JSON.parse(o2["@value"]);
      } catch (e6) {
        throw new k("JSON literal could not be parsed.", "jsonld.InvalidJsonLiteral", { code: "invalid JSON literal", value: o2["@value"], cause: e6 });
      }
    }
    if (t2) {
      if (r2 === jt)
        o2["@value"] === "true" ? o2["@value"] = true : o2["@value"] === "false" && (o2["@value"] = false);
      else if (N.isNumeric(o2["@value"]))
        if (r2 === Nt) {
          const e6 = parseInt(o2["@value"], 10);
          e6.toFixed(0) === o2["@value"] && (o2["@value"] = e6);
        } else
          r2 === It && (o2["@value"] = parseFloat(o2["@value"]));
      [jt, Nt, It, St].includes(r2) || (o2["@type"] = r2);
    } else if (n2 === "i18n-datatype" && r2.startsWith("https://www.w3.org/ns/i18n#")) {
      const [, e6, t3] = r2.split(/[#_]/);
      e6.length > 0 && (o2["@language"] = e6, e6.match(Ot) || console.warn(`@language must be valid BCP47: ${e6}`)), o2["@direction"] = t3;
    } else
      r2 !== St && (o2["@type"] = r2);
  }
  return o2;
}
kt.fromRDF = (_0, _1) => __async(void 0, [_0, _1], function* (e5, { useRdfType: t2 = false, useNativeTypes: n2 = false, rdfDirection: o2 = null }) {
  const r2 = {}, a2 = { "@default": r2 }, i2 = {};
  for (const s3 of e5) {
    const e6 = s3.graph.termType === "DefaultGraph" ? "@default" : s3.graph.value;
    e6 in a2 || (a2[e6] = {}), e6 === "@default" || e6 in r2 || (r2[e6] = { "@id": e6 });
    const l3 = a2[e6], c2 = s3.subject.value, d2 = s3.predicate.value, u2 = s3.object;
    c2 in l3 || (l3[c2] = { "@id": c2 });
    const p2 = l3[c2], h2 = u2.termType.endsWith("Node");
    if (h2 && !(u2.value in l3) && (l3[u2.value] = { "@id": u2.value }), d2 === bt && !t2 && h2) {
      E.addValue(p2, "@type", u2.value, { propertyIsArray: true });
      continue;
    }
    const f2 = Lt(u2, n2, o2);
    if (E.addValue(p2, d2, f2, { propertyIsArray: true }), h2)
      if (u2.value === xt) {
        const e7 = l3[u2.value];
        "usages" in e7 || (e7.usages = []), e7.usages.push({ node: p2, property: d2, value: f2 });
      } else
        u2.value in i2 ? i2[u2.value] = false : i2[u2.value] = { node: p2, property: d2, value: f2 };
  }
  for (const e6 in a2) {
    const t3 = a2[e6];
    if (!(xt in t3))
      continue;
    const n3 = t3[xt];
    if (n3.usages) {
      for (let e7 of n3.usages) {
        let n4 = e7.node, o3 = e7.property, r3 = e7.value;
        const a3 = [], s3 = [];
        let l3 = Object.keys(n4).length;
        for (; o3 === mt && N.isObject(i2[n4["@id"]]) && N.isArray(n4[yt]) && n4[yt].length === 1 && N.isArray(n4[mt]) && n4[mt].length === 1 && (l3 === 3 || l3 === 4 && N.isArray(n4["@type"]) && n4["@type"].length === 1 && n4["@type"][0] === gt) && (a3.push(n4[yt][0]), s3.push(n4["@id"]), e7 = i2[n4["@id"]], n4 = e7.node, o3 = e7.property, r3 = e7.value, l3 = Object.keys(n4).length, O.isBlankNode(n4)); )
          ;
        delete r3["@id"], r3["@list"] = a3.reverse();
        for (const e8 of s3)
          delete t3[e8];
      }
      delete n3.usages;
    }
  }
  const s2 = [], l2 = Object.keys(r2).sort();
  for (const e6 of l2) {
    const t3 = r2[e6];
    if (e6 in a2) {
      const n3 = t3["@graph"] = [], o3 = a2[e6], r3 = Object.keys(o3).sort();
      for (const e7 of r3) {
        const t4 = o3[e7];
        O.isSubjectReference(t4) || n3.push(t4);
      }
    }
    O.isSubjectReference(t3) || s2.push(t3);
  }
  return s2;
});
var At = function e4(t2) {
  return t2 === null || typeof t2 != "object" || t2.toJSON != null ? JSON.stringify(t2) : Array.isArray(t2) ? "[" + t2.reduce((t3, n2, o2) => t3 + (o2 === 0 ? "" : ",") + e4(n2 === void 0 || typeof n2 == "symbol" ? null : n2), "") + "]" : "{" + Object.keys(t2).sort().reduce((n2, o2, r2) => {
    if (t2[o2] === void 0 || typeof t2[o2] == "symbol")
      return n2;
    return n2 + (n2.length === 0 ? "" : ",") + e4(o2) + ":" + e4(t2[o2]);
  }, "") + "}";
};
var { createNodeMap: Dt } = lt;
var { isKeyword: Tt } = De;
var { RDF_FIRST: Rt, RDF_REST: Et, RDF_NIL: _t, RDF_TYPE: Mt, RDF_JSON_LITERAL: Pt, RDF_LANGSTRING: Jt, XSD_BOOLEAN: Bt, XSD_DOUBLE: Ft, XSD_INTEGER: Ut, XSD_STRING: qt } = vt;
var { isAbsolute: Vt } = P;
var zt = {};
var $t = zt;
function Gt(e5, t2, n2, o2, r2) {
  const a2 = Object.keys(t2).sort();
  for (const i2 of a2) {
    const a3 = t2[i2], s2 = Object.keys(a3).sort();
    for (let t3 of s2) {
      const s3 = a3[t3];
      if (t3 === "@type")
        t3 = Mt;
      else if (Tt(t3))
        continue;
      for (const a4 of s3) {
        const s4 = { termType: i2.startsWith("_:") ? "BlankNode" : "NamedNode", value: i2 };
        if (!Vt(i2))
          continue;
        const l2 = { termType: t3.startsWith("_:") ? "BlankNode" : "NamedNode", value: t3 };
        if (!Vt(t3))
          continue;
        if (l2.termType === "BlankNode" && !r2.produceGeneralizedRdf)
          continue;
        const c2 = Ht(a4, o2, e5, n2, r2.rdfDirection);
        c2 && e5.push({ subject: s4, predicate: l2, object: c2, graph: n2 });
      }
    }
  }
}
function Ht(e5, t2, n2, o2, r2) {
  const a2 = {};
  if (O.isValue(e5)) {
    a2.termType = "Literal", a2.value = void 0, a2.datatype = { termType: "NamedNode" };
    let t3 = e5["@value"];
    const n3 = e5["@type"] || null;
    if (n3 === "@json")
      a2.value = At(t3), a2.datatype.value = Pt;
    else if (N.isBoolean(t3))
      a2.value = t3.toString(), a2.datatype.value = n3 || Bt;
    else if (N.isDouble(t3) || n3 === Ft)
      N.isDouble(t3) || (t3 = parseFloat(t3)), a2.value = t3.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), a2.datatype.value = n3 || Ft;
    else if (N.isNumber(t3))
      a2.value = t3.toFixed(0), a2.datatype.value = n3 || Ut;
    else if (r2 === "i18n-datatype" && "@direction" in e5) {
      const n4 = "https://www.w3.org/ns/i18n#" + (e5["@language"] || "") + `_${e5["@direction"]}`;
      a2.datatype.value = n4, a2.value = t3;
    } else
      "@language" in e5 ? (a2.value = t3, a2.datatype.value = n3 || Jt, a2.language = e5["@language"]) : (a2.value = t3, a2.datatype.value = n3 || qt);
  } else if (O.isList(e5)) {
    const i2 = function(e6, t3, n3, o3, r3) {
      const a3 = { termType: "NamedNode", value: Rt }, i3 = { termType: "NamedNode", value: Et }, s2 = { termType: "NamedNode", value: _t }, l2 = e6.pop(), c2 = l2 ? { termType: "BlankNode", value: t3.getId() } : s2;
      let d2 = c2;
      for (const s3 of e6) {
        const e7 = Ht(s3, t3, n3, o3, r3), l3 = { termType: "BlankNode", value: t3.getId() };
        n3.push({ subject: d2, predicate: a3, object: e7, graph: o3 }), n3.push({ subject: d2, predicate: i3, object: l3, graph: o3 }), d2 = l3;
      }
      if (l2) {
        const e7 = Ht(l2, t3, n3, o3, r3);
        n3.push({ subject: d2, predicate: a3, object: e7, graph: o3 }), n3.push({ subject: d2, predicate: i3, object: s2, graph: o3 });
      }
      return c2;
    }(e5["@list"], t2, n2, o2, r2);
    a2.termType = i2.termType, a2.value = i2.value;
  } else {
    const t3 = N.isObject(e5) ? e5["@id"] : e5;
    a2.termType = t3.startsWith("_:") ? "BlankNode" : "NamedNode", a2.value = t3;
  }
  return a2.termType !== "NamedNode" || Vt(a2.value) ? a2 : null;
}
zt.toRDF = (e5, t2) => {
  const n2 = new E.IdentifierIssuer("_:b"), o2 = { "@default": {} };
  Dt(e5, o2, "@default", n2);
  const r2 = [], a2 = Object.keys(o2).sort();
  for (const e6 of a2) {
    let a3;
    if (e6 === "@default")
      a3 = { termType: "DefaultGraph", value: "" };
    else {
      if (!Vt(e6))
        continue;
      a3 = e6.startsWith("_:") ? { termType: "BlankNode" } : { termType: "NamedNode" }, a3.value = e6;
    }
    Gt(r2, o2[e6], a3, n2, t2);
  }
  return r2;
};
var { isKeyword: Qt } = De;
var { createNodeMap: Kt, mergeNodeMapGraphs: Xt } = lt;
var Zt = {};
var Wt = Zt;
function Yt(e5) {
  const t2 = {};
  for (const n2 in e5)
    e5[n2] !== void 0 && (t2["@" + n2] = [e5[n2]]);
  return [t2];
}
function en(e5, t2, n2) {
  for (let o2 = n2.length - 1; o2 >= 0; --o2) {
    const r2 = n2[o2];
    if (r2.graph === t2 && r2.subject["@id"] === e5["@id"])
      return true;
  }
  return false;
}
function tn(e5, t2, n2) {
  const o2 = "@" + n2;
  let r2 = o2 in e5 ? e5[o2][0] : t2[n2];
  if (n2 === "embed") {
    if (r2 === true)
      r2 = "@once";
    else if (r2 === false)
      r2 = "@never";
    else if (r2 !== "@always" && r2 !== "@never" && r2 !== "@link" && r2 !== "@first" && r2 !== "@last" && r2 !== "@once")
      throw new k("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", { code: "invalid @embed value", frame: e5 });
  }
  return r2;
}
function nn(e5) {
  if (!N.isArray(e5) || e5.length !== 1 || !N.isObject(e5[0]))
    throw new k("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.", "jsonld.SyntaxError", { frame: e5 });
  if ("@id" in e5[0]) {
    for (const t2 of E.asArray(e5[0]["@id"]))
      if (!N.isObject(t2) && !P.isAbsolute(t2) || N.isString(t2) && t2.indexOf("_:") === 0)
        throw new k("Invalid JSON-LD syntax; invalid @id in frame.", "jsonld.SyntaxError", { code: "invalid frame", frame: e5 });
  }
  if ("@type" in e5[0]) {
    for (const t2 of E.asArray(e5[0]["@type"]))
      if (!N.isObject(t2) && !P.isAbsolute(t2) || N.isString(t2) && t2.indexOf("_:") === 0)
        throw new k("Invalid JSON-LD syntax; invalid @type in frame.", "jsonld.SyntaxError", { code: "invalid frame", frame: e5 });
  }
}
function on(e5, t2, n2, o2) {
  let r2 = true, a2 = false;
  for (const i2 in n2) {
    let s2 = false;
    const l2 = E.getValues(t2, i2), c2 = E.getValues(n2, i2).length === 0;
    if (i2 === "@id") {
      if (N.isEmptyObject(n2["@id"][0] || {}) ? s2 = true : n2["@id"].length >= 0 && (s2 = n2["@id"].includes(l2[0])), !o2.requireAll)
        return s2;
    } else if (i2 === "@type") {
      if (r2 = false, c2) {
        if (l2.length > 0)
          return false;
        s2 = true;
      } else if (n2["@type"].length === 1 && N.isEmptyObject(n2["@type"][0]))
        s2 = l2.length > 0;
      else
        for (const e6 of n2["@type"])
          s2 = !(!N.isObject(e6) || !("@default" in e6)) || (s2 || l2.some((t3) => t3 === e6));
      if (!o2.requireAll)
        return s2;
    } else {
      if (Qt(i2))
        continue;
      {
        const t3 = E.getValues(n2, i2)[0];
        let a3 = false;
        if (t3 && (nn([t3]), a3 = "@default" in t3), r2 = false, l2.length === 0 && a3)
          continue;
        if (l2.length > 0 && c2)
          return false;
        if (t3 === void 0) {
          if (l2.length > 0)
            return false;
          s2 = true;
        } else if (O.isList(t3)) {
          const n3 = t3["@list"][0];
          if (O.isList(l2[0])) {
            const t4 = l2[0]["@list"];
            O.isValue(n3) ? s2 = t4.some((e6) => cn(n3, e6)) : (O.isSubject(n3) || O.isSubjectReference(n3)) && (s2 = t4.some((t5) => ln(e5, n3, t5, o2)));
          }
        } else
          s2 = O.isValue(t3) ? l2.some((e6) => cn(t3, e6)) : O.isSubjectReference(t3) ? l2.some((n3) => ln(e5, t3, n3, o2)) : !!N.isObject(t3) && l2.length > 0;
      }
    }
    if (!s2 && o2.requireAll)
      return false;
    a2 = a2 || s2;
  }
  return r2 || a2;
}
function rn(e5, t2) {
  const n2 = e5.uniqueEmbeds[e5.graph], o2 = n2[t2], r2 = o2.parent, a2 = o2.property, i2 = { "@id": t2 };
  if (N.isArray(r2)) {
    for (let e6 = 0; e6 < r2.length; ++e6)
      if (E.compareValues(r2[e6], i2)) {
        r2[e6] = i2;
        break;
      }
  } else {
    const e6 = N.isArray(r2[a2]);
    E.removeValue(r2, a2, i2, { propertyIsArray: e6 }), E.addValue(r2, a2, i2, { propertyIsArray: e6 });
  }
  const s2 = (e6) => {
    const t3 = Object.keys(n2);
    for (const o3 of t3)
      o3 in n2 && N.isObject(n2[o3].parent) && n2[o3].parent["@id"] === e6 && (delete n2[o3], s2(o3));
  };
  s2(t2);
}
function an(e5, t2) {
  if (N.isArray(e5))
    return e5.map((e6) => an(e6, t2));
  if (N.isObject(e5)) {
    if ("@preserve" in e5)
      return e5["@preserve"][0];
    if (O.isValue(e5))
      return e5;
    if (O.isList(e5))
      return e5["@list"] = an(e5["@list"], t2), e5;
    if ("@id" in e5) {
      const n2 = e5["@id"];
      if (t2.link.hasOwnProperty(n2)) {
        const o2 = t2.link[n2].indexOf(e5);
        if (o2 !== -1)
          return t2.link[n2][o2];
        t2.link[n2].push(e5);
      } else
        t2.link[n2] = [e5];
    }
    for (const n2 in e5)
      n2 === "@id" && t2.bnodesToClear.includes(e5[n2]) ? delete e5["@id"] : e5[n2] = an(e5[n2], t2);
  }
  return e5;
}
function sn(e5, t2, n2) {
  N.isObject(e5) ? E.addValue(e5, t2, n2, { propertyIsArray: true }) : e5.push(n2);
}
function ln(e5, t2, n2, o2) {
  if (!("@id" in n2))
    return false;
  const r2 = e5.subjects[n2["@id"]];
  return r2 && on(e5, r2, t2, o2);
}
function cn(e5, t2) {
  const n2 = t2["@value"], o2 = t2["@type"], r2 = t2["@language"], a2 = e5["@value"] ? N.isArray(e5["@value"]) ? e5["@value"] : [e5["@value"]] : [], i2 = e5["@type"] ? N.isArray(e5["@type"]) ? e5["@type"] : [e5["@type"]] : [], s2 = e5["@language"] ? N.isArray(e5["@language"]) ? e5["@language"] : [e5["@language"]] : [];
  return a2.length === 0 && i2.length === 0 && s2.length === 0 || !(!a2.includes(n2) && !N.isEmptyObject(a2[0])) && (!!(!o2 && i2.length === 0 || i2.includes(o2) || o2 && N.isEmptyObject(i2[0])) && !!(!r2 && s2.length === 0 || s2.includes(r2) || r2 && N.isEmptyObject(s2[0])));
}
Zt.frameMergedOrDefault = (e5, t2, n2) => {
  const o2 = { options: n2, embedded: false, graph: "@default", graphMap: { "@default": {} }, subjectStack: [], link: {}, bnodeMap: {} }, r2 = new E.IdentifierIssuer("_:b");
  Kt(e5, o2.graphMap, "@default", r2), n2.merged && (o2.graphMap["@merged"] = Xt(o2.graphMap), o2.graph = "@merged"), o2.subjects = o2.graphMap[o2.graph];
  const a2 = [];
  return Zt.frame(o2, Object.keys(o2.subjects).sort(), t2, a2), n2.pruneBlankNodeIdentifiers && (n2.bnodesToClear = Object.keys(o2.bnodeMap).filter((e6) => o2.bnodeMap[e6].length === 1)), n2.link = {}, an(a2, n2);
}, Zt.frame = (e5, t2, n2, o2, r2 = null) => {
  nn(n2), n2 = n2[0];
  const a2 = e5.options, i2 = { embed: tn(n2, a2, "embed"), explicit: tn(n2, a2, "explicit"), requireAll: tn(n2, a2, "requireAll") };
  e5.link.hasOwnProperty(e5.graph) || (e5.link[e5.graph] = {});
  const s2 = e5.link[e5.graph], l2 = function(e6, t3, n3, o3) {
    const r3 = {};
    for (const a3 of t3) {
      const t4 = e6.graphMap[e6.graph][a3];
      on(e6, t4, n3, o3) && (r3[a3] = t4);
    }
    return r3;
  }(e5, t2, n2, i2), c2 = Object.keys(l2).sort();
  for (const d2 of c2) {
    const c3 = l2[d2];
    if (r2 === null ? e5.uniqueEmbeds = { [e5.graph]: {} } : e5.uniqueEmbeds[e5.graph] = e5.uniqueEmbeds[e5.graph] || {}, i2.embed === "@link" && d2 in s2) {
      sn(o2, r2, s2[d2]);
      continue;
    }
    const u2 = { "@id": d2 };
    if (d2.indexOf("_:") === 0 && E.addValue(e5.bnodeMap, d2, u2, { propertyIsArray: true }), s2[d2] = u2, (i2.embed === "@first" || i2.embed === "@last") && e5.is11)
      throw new k("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", { code: "invalid @embed value", frame: n2 });
    if (e5.embedded || !e5.uniqueEmbeds[e5.graph].hasOwnProperty(d2))
      if (!e5.embedded || i2.embed !== "@never" && !en(c3, e5.graph, e5.subjectStack))
        if (!e5.embedded || i2.embed != "@first" && i2.embed != "@once" || !e5.uniqueEmbeds[e5.graph].hasOwnProperty(d2)) {
          if (i2.embed === "@last" && d2 in e5.uniqueEmbeds[e5.graph] && rn(e5, d2), e5.uniqueEmbeds[e5.graph][d2] = { parent: o2, property: r2 }, e5.subjectStack.push({ subject: c3, graph: e5.graph }), d2 in e5.graphMap) {
            let t3 = false, o3 = null;
            "@graph" in n2 ? (o3 = n2["@graph"][0], t3 = !(d2 === "@merged" || d2 === "@default"), N.isObject(o3) || (o3 = {})) : (t3 = e5.graph !== "@merged", o3 = {}), t3 && Zt.frame(__spreadProps(__spreadValues({}, e5), { graph: d2, embedded: false }), Object.keys(e5.graphMap[d2]).sort(), [o3], u2, "@graph");
          }
          "@included" in n2 && Zt.frame(__spreadProps(__spreadValues({}, e5), { embedded: false }), t2, n2["@included"], u2, "@included");
          for (const t3 of Object.keys(c3).sort())
            if (Qt(t3)) {
              if (u2[t3] = E.clone(c3[t3]), t3 === "@type")
                for (const t4 of c3["@type"])
                  t4.indexOf("_:") === 0 && E.addValue(e5.bnodeMap, t4, u2, { propertyIsArray: true });
            } else if (!i2.explicit || t3 in n2)
              for (const o3 of c3[t3]) {
                const r3 = t3 in n2 ? n2[t3] : Yt(i2);
                if (O.isList(o3)) {
                  const r4 = n2[t3] && n2[t3][0] && n2[t3][0]["@list"] ? n2[t3][0]["@list"] : Yt(i2), a3 = { "@list": [] };
                  sn(u2, t3, a3);
                  const s3 = o3["@list"];
                  for (const t4 of s3)
                    O.isSubjectReference(t4) ? Zt.frame(__spreadProps(__spreadValues({}, e5), { embedded: true }), [t4["@id"]], r4, a3, "@list") : sn(a3, "@list", E.clone(t4));
                } else
                  O.isSubjectReference(o3) ? Zt.frame(__spreadProps(__spreadValues({}, e5), { embedded: true }), [o3["@id"]], r3, u2, t3) : cn(r3[0], o3) && sn(u2, t3, E.clone(o3));
              }
          for (const e6 of Object.keys(n2).sort()) {
            if (e6 === "@type") {
              if (!N.isObject(n2[e6][0]) || !("@default" in n2[e6][0]))
                continue;
            } else if (Qt(e6))
              continue;
            const t3 = n2[e6][0] || {};
            if (!tn(t3, a2, "omitDefault") && !(e6 in u2)) {
              let n3 = "@null";
              "@default" in t3 && (n3 = E.clone(t3["@default"])), N.isArray(n3) || (n3 = [n3]), u2[e6] = [{ "@preserve": n3 }];
            }
          }
          for (const t3 of Object.keys(n2["@reverse"] || {}).sort()) {
            const o3 = n2["@reverse"][t3];
            for (const n3 of Object.keys(e5.subjects)) {
              E.getValues(e5.subjects[n3], t3).some((e6) => e6["@id"] === d2) && (u2["@reverse"] = u2["@reverse"] || {}, E.addValue(u2["@reverse"], t3, [], { propertyIsArray: true }), Zt.frame(__spreadProps(__spreadValues({}, e5), { embedded: true }), [n3], o3, u2["@reverse"][t3], r2));
            }
          }
          sn(o2, r2, u2), e5.subjectStack.pop();
        } else
          sn(o2, r2, u2);
      else
        sn(o2, r2, u2);
  }
}, Zt.cleanupNull = (e5, t2) => {
  if (N.isArray(e5)) {
    return e5.map((e6) => Zt.cleanupNull(e6, t2)).filter((e6) => e6);
  }
  if (e5 === "@null")
    return null;
  if (N.isObject(e5)) {
    if ("@id" in e5) {
      const n2 = e5["@id"];
      if (t2.link.hasOwnProperty(n2)) {
        const o2 = t2.link[n2].indexOf(e5);
        if (o2 !== -1)
          return t2.link[n2][o2];
        t2.link[n2].push(e5);
      } else
        t2.link[n2] = [e5];
    }
    for (const n2 in e5)
      e5[n2] = Zt.cleanupNull(e5[n2], t2);
  }
  return e5;
};
var { isArray: dn, isObject: un, isString: pn, isUndefined: hn } = N;
var { isList: fn, isValue: vn, isGraph: gn, isSimpleGraph: yn, isSubjectReference: mn } = O;
var { expandIri: xn, getContextValue: bn, isKeyword: wn, process: jn, processingMode: In } = De;
var { removeBase: Nn, prependBase: Sn } = P;
var { addValue: On, asArray: kn, compareShortestLeast: Cn } = E;
var Ln = {};
var An = Ln;
function Dn(e5, t2, n2) {
  if (xn(e5, t2, { vocab: true }, n2) !== "@nest")
    throw new k("JSON-LD compact error; nested property must have an @nest value resolving to @nest.", "jsonld.SyntaxError", { code: "invalid @nest value" });
}
Ln.compact = (_0) => __async(void 0, [_0], function* ({ activeCtx: e5, activeProperty: t2 = null, element: n2, options: o2 = {}, compactionMap: r2 = () => {
} }) {
  if (dn(n2)) {
    let a3 = [];
    for (let i2 = 0; i2 < n2.length; ++i2) {
      let s2 = yield Ln.compact({ activeCtx: e5, activeProperty: t2, element: n2[i2], options: o2, compactionMap: r2 });
      s2 === null && (s2 = yield r2({ unmappedValue: n2[i2], activeCtx: e5, activeProperty: t2, parent: n2, index: i2, options: o2 }), s2 === void 0) || a3.push(s2);
    }
    if (o2.compactArrays && a3.length === 1) {
      (bn(e5, t2, "@container") || []).length === 0 && (a3 = a3[0]);
    }
    return a3;
  }
  const a2 = bn(e5, t2, "@context");
  if (hn(a2) || (e5 = yield jn({ activeCtx: e5, localCtx: a2, propagate: true, overrideProtected: true, options: o2 })), un(n2)) {
    if (o2.link && "@id" in n2 && o2.link.hasOwnProperty(n2["@id"])) {
      const e6 = o2.link[n2["@id"]];
      for (let t3 = 0; t3 < e6.length; ++t3)
        if (e6[t3].expanded === n2)
          return e6[t3].compacted;
    }
    if (vn(n2) || mn(n2)) {
      const r3 = Ln.compactValue({ activeCtx: e5, activeProperty: t2, value: n2, options: o2 });
      return o2.link && mn(n2) && (o2.link.hasOwnProperty(n2["@id"]) || (o2.link[n2["@id"]] = []), o2.link[n2["@id"]].push({ expanded: n2, compacted: r3 })), r3;
    }
    if (fn(n2)) {
      if ((bn(e5, t2, "@container") || []).includes("@list"))
        return Ln.compact({ activeCtx: e5, activeProperty: t2, element: n2["@list"], options: o2, compactionMap: r2 });
    }
    const a3 = t2 === "@reverse", i2 = {}, s2 = e5;
    vn(n2) || mn(n2) || (e5 = e5.revertToPreviousContext());
    const l2 = bn(s2, t2, "@context");
    hn(l2) || (e5 = yield jn({ activeCtx: e5, localCtx: l2, propagate: true, overrideProtected: true, options: o2 })), o2.link && "@id" in n2 && (o2.link.hasOwnProperty(n2["@id"]) || (o2.link[n2["@id"]] = []), o2.link[n2["@id"]].push({ expanded: n2, compacted: i2 }));
    let c2 = n2["@type"] || [];
    c2.length > 1 && (c2 = Array.from(c2).sort());
    const d2 = e5;
    for (const t3 of c2) {
      const n3 = Ln.compactIri({ activeCtx: d2, iri: t3, relativeTo: { vocab: true } }), r3 = bn(s2, n3, "@context");
      hn(r3) || (e5 = yield jn({ activeCtx: e5, localCtx: r3, options: o2, propagate: false }));
    }
    const u2 = Object.keys(n2).sort();
    for (const l3 of u2) {
      const c3 = n2[l3];
      if (l3 !== "@id")
        if (l3 !== "@type")
          if (l3 !== "@reverse")
            if (l3 !== "@preserve")
              if (l3 !== "@index")
                if (l3 !== "@graph" && l3 !== "@list" && l3 !== "@included" && wn(l3)) {
                  const t3 = Ln.compactIri({ activeCtx: e5, iri: l3, relativeTo: { vocab: true } });
                  On(i2, t3, c3);
                } else {
                  if (!dn(c3))
                    throw new k("JSON-LD expansion error; expanded value must be an array.", "jsonld.SyntaxError");
                  if (c3.length === 0) {
                    const t3 = Ln.compactIri({ activeCtx: e5, iri: l3, value: c3, relativeTo: { vocab: true }, reverse: a3 }), n3 = e5.mappings.has(t3) ? e5.mappings.get(t3)["@nest"] : null;
                    let r3 = i2;
                    n3 && (Dn(e5, n3, o2), un(i2[n3]) || (i2[n3] = {}), r3 = i2[n3]), On(r3, t3, c3, { propertyIsArray: true });
                  }
                  for (const t3 of c3) {
                    const n3 = Ln.compactIri({ activeCtx: e5, iri: l3, value: t3, relativeTo: { vocab: true }, reverse: a3 }), s3 = e5.mappings.has(n3) ? e5.mappings.get(n3)["@nest"] : null;
                    let c4 = i2;
                    s3 && (Dn(e5, s3, o2), un(i2[s3]) || (i2[s3] = {}), c4 = i2[s3]);
                    const d3 = bn(e5, n3, "@container") || [], u3 = gn(t3), p2 = fn(t3);
                    let h2;
                    p2 ? h2 = t3["@list"] : u3 && (h2 = t3["@graph"]);
                    let f2 = yield Ln.compact({ activeCtx: e5, activeProperty: n3, element: p2 || u3 ? h2 : t3, options: o2, compactionMap: r2 });
                    if (p2) {
                      if (dn(f2) || (f2 = [f2]), d3.includes("@list")) {
                        On(c4, n3, f2, { valueIsArray: true, allowDuplicate: true });
                        continue;
                      }
                      f2 = { [Ln.compactIri({ activeCtx: e5, iri: "@list", relativeTo: { vocab: true } })]: f2 }, "@index" in t3 && (f2[Ln.compactIri({ activeCtx: e5, iri: "@index", relativeTo: { vocab: true } })] = t3["@index"]);
                    }
                    if (u3)
                      if (d3.includes("@graph") && (d3.includes("@id") || d3.includes("@index") && yn(t3))) {
                        let r3;
                        c4.hasOwnProperty(n3) ? r3 = c4[n3] : c4[n3] = r3 = {};
                        const a4 = (d3.includes("@id") ? t3["@id"] : t3["@index"]) || Ln.compactIri({ activeCtx: e5, iri: "@none", relativeTo: { vocab: true } });
                        On(r3, a4, f2, { propertyIsArray: !o2.compactArrays || d3.includes("@set") });
                      } else
                        d3.includes("@graph") && yn(t3) ? (dn(f2) && f2.length > 1 && (f2 = { "@included": f2 }), On(c4, n3, f2, { propertyIsArray: !o2.compactArrays || d3.includes("@set") })) : (dn(f2) && f2.length === 1 && o2.compactArrays && (f2 = f2[0]), f2 = { [Ln.compactIri({ activeCtx: e5, iri: "@graph", relativeTo: { vocab: true } })]: f2 }, "@id" in t3 && (f2[Ln.compactIri({ activeCtx: e5, iri: "@id", relativeTo: { vocab: true } })] = t3["@id"]), "@index" in t3 && (f2[Ln.compactIri({ activeCtx: e5, iri: "@index", relativeTo: { vocab: true } })] = t3["@index"]), On(c4, n3, f2, { propertyIsArray: !o2.compactArrays || d3.includes("@set") }));
                    else if (d3.includes("@language") || d3.includes("@index") || d3.includes("@id") || d3.includes("@type")) {
                      let a4, i3;
                      if (c4.hasOwnProperty(n3) ? a4 = c4[n3] : c4[n3] = a4 = {}, d3.includes("@language"))
                        vn(f2) && (f2 = f2["@value"]), i3 = t3["@language"];
                      else if (d3.includes("@index")) {
                        const o3 = bn(e5, n3, "@index") || "@index", r3 = Ln.compactIri({ activeCtx: e5, iri: o3, relativeTo: { vocab: true } });
                        if (o3 === "@index")
                          i3 = t3["@index"], delete f2[r3];
                        else {
                          let e6;
                          if ([i3, ...e6] = kn(f2[o3] || []), pn(i3))
                            switch (e6.length) {
                              case 0:
                                delete f2[o3];
                                break;
                              case 1:
                                f2[o3] = e6[0];
                                break;
                              default:
                                f2[o3] = e6;
                            }
                          else
                            i3 = null;
                        }
                      } else if (d3.includes("@id")) {
                        const t4 = Ln.compactIri({ activeCtx: e5, iri: "@id", relativeTo: { vocab: true } });
                        i3 = f2[t4], delete f2[t4];
                      } else if (d3.includes("@type")) {
                        const a5 = Ln.compactIri({ activeCtx: e5, iri: "@type", relativeTo: { vocab: true } });
                        let s4;
                        switch ([i3, ...s4] = kn(f2[a5] || []), s4.length) {
                          case 0:
                            delete f2[a5];
                            break;
                          case 1:
                            f2[a5] = s4[0];
                            break;
                          default:
                            f2[a5] = s4;
                        }
                        Object.keys(f2).length === 1 && "@id" in t3 && (f2 = yield Ln.compact({ activeCtx: e5, activeProperty: n3, element: { "@id": t3["@id"] }, options: o2, compactionMap: r2 }));
                      }
                      i3 || (i3 = Ln.compactIri({ activeCtx: e5, iri: "@none", relativeTo: { vocab: true } })), On(a4, i3, f2, { propertyIsArray: d3.includes("@set") });
                    } else {
                      const e6 = !o2.compactArrays || d3.includes("@set") || d3.includes("@list") || dn(f2) && f2.length === 0 || l3 === "@list" || l3 === "@graph";
                      On(c4, n3, f2, { propertyIsArray: e6 });
                    }
                  }
                }
              else {
                if ((bn(e5, t2, "@container") || []).includes("@index"))
                  continue;
                const n3 = Ln.compactIri({ activeCtx: e5, iri: l3, relativeTo: { vocab: true } });
                On(i2, n3, c3);
              }
            else {
              const n3 = yield Ln.compact({ activeCtx: e5, activeProperty: t2, element: c3, options: o2, compactionMap: r2 });
              dn(n3) && n3.length === 0 || On(i2, l3, n3);
            }
          else {
            const t3 = yield Ln.compact({ activeCtx: e5, activeProperty: "@reverse", element: c3, options: o2, compactionMap: r2 });
            for (const n3 in t3)
              if (e5.mappings.has(n3) && e5.mappings.get(n3).reverse) {
                const r3 = t3[n3], a4 = (bn(e5, n3, "@container") || []).includes("@set") || !o2.compactArrays;
                On(i2, n3, r3, { propertyIsArray: a4 }), delete t3[n3];
              }
            if (Object.keys(t3).length > 0) {
              const n3 = Ln.compactIri({ activeCtx: e5, iri: l3, relativeTo: { vocab: true } });
              On(i2, n3, t3);
            }
          }
        else {
          let t3 = kn(c3).map((e6) => Ln.compactIri({ activeCtx: s2, iri: e6, relativeTo: { vocab: true } }));
          t3.length === 1 && (t3 = t3[0]);
          const n3 = Ln.compactIri({ activeCtx: e5, iri: "@type", relativeTo: { vocab: true } }), o3 = (bn(e5, n3, "@container") || []).includes("@set") && In(e5, 1.1) || dn(t3) && c3.length === 0;
          On(i2, n3, t3, { propertyIsArray: o3 });
        }
      else {
        let t3 = kn(c3).map((t4) => Ln.compactIri({ activeCtx: e5, iri: t4, relativeTo: { vocab: false }, base: o2.base }));
        t3.length === 1 && (t3 = t3[0]);
        i2[Ln.compactIri({ activeCtx: e5, iri: "@id", relativeTo: { vocab: true } })] = t3;
      }
    }
    return i2;
  }
  return n2;
}), Ln.compactIri = ({ activeCtx: e5, iri: t2, value: n2 = null, relativeTo: o2 = { vocab: false }, reverse: r2 = false, base: a2 = null }) => {
  if (t2 === null)
    return t2;
  e5.isPropertyTermScoped && e5.previousContext && (e5 = e5.previousContext);
  const i2 = e5.getInverse();
  if (wn(t2) && t2 in i2 && "@none" in i2[t2] && "@type" in i2[t2]["@none"] && "@none" in i2[t2]["@none"]["@type"])
    return i2[t2]["@none"]["@type"]["@none"];
  if (o2.vocab && t2 in i2) {
    const o3 = e5["@language"] || "@none", a3 = [];
    un(n2) && "@index" in n2 && !("@graph" in n2) && a3.push("@index", "@index@set"), un(n2) && "@preserve" in n2 && (n2 = n2["@preserve"][0]), gn(n2) ? ("@index" in n2 && a3.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in n2 && a3.push("@graph@id", "@graph@id@set"), a3.push("@graph", "@graph@set", "@set"), "@index" in n2 || a3.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in n2 || a3.push("@graph@id", "@graph@id@set")) : un(n2) && !vn(n2) && a3.push("@id", "@id@set", "@type", "@set@type");
    let i3 = "@language", s3 = "@null";
    if (r2)
      i3 = "@type", s3 = "@reverse", a3.push("@set");
    else if (fn(n2)) {
      "@index" in n2 || a3.push("@list");
      const e6 = n2["@list"];
      if (e6.length === 0)
        i3 = "@any", s3 = "@none";
      else {
        let t3 = e6.length === 0 ? o3 : null, n3 = null;
        for (let o4 = 0; o4 < e6.length; ++o4) {
          const r3 = e6[o4];
          let a4 = "@none", i4 = "@none";
          if (vn(r3))
            if ("@direction" in r3) {
              a4 = `${(r3["@language"] || "").toLowerCase()}_${r3["@direction"]}`;
            } else
              "@language" in r3 ? a4 = r3["@language"].toLowerCase() : "@type" in r3 ? i4 = r3["@type"] : a4 = "@null";
          else
            i4 = "@id";
          if (t3 === null ? t3 = a4 : a4 !== t3 && vn(r3) && (t3 = "@none"), n3 === null ? n3 = i4 : i4 !== n3 && (n3 = "@none"), t3 === "@none" && n3 === "@none")
            break;
        }
        t3 = t3 || "@none", n3 = n3 || "@none", n3 !== "@none" ? (i3 = "@type", s3 = n3) : s3 = t3;
      }
    } else {
      if (vn(n2))
        if ("@language" in n2 && !("@index" in n2)) {
          a3.push("@language", "@language@set"), s3 = n2["@language"];
          const e6 = n2["@direction"];
          e6 && (s3 = `${s3}_${e6}`);
        } else
          "@direction" in n2 && !("@index" in n2) ? s3 = `_${n2["@direction"]}` : "@type" in n2 && (i3 = "@type", s3 = n2["@type"]);
      else
        i3 = "@type", s3 = "@id";
      a3.push("@set");
    }
    a3.push("@none"), un(n2) && !("@index" in n2) && a3.push("@index", "@index@set"), vn(n2) && Object.keys(n2).length === 1 && a3.push("@language", "@language@set");
    const l3 = function(e6, t3, n3, o4, r3, a4) {
      a4 === null && (a4 = "@null");
      const i4 = [];
      if ((a4 === "@id" || a4 === "@reverse") && un(n3) && "@id" in n3) {
        a4 === "@reverse" && i4.push("@reverse");
        const t4 = Ln.compactIri({ activeCtx: e6, iri: n3["@id"], relativeTo: { vocab: true } });
        e6.mappings.has(t4) && e6.mappings.get(t4) && e6.mappings.get(t4)["@id"] === n3["@id"] ? i4.push.apply(i4, ["@vocab", "@id"]) : i4.push.apply(i4, ["@id", "@vocab"]);
      } else {
        i4.push(a4);
        const e7 = i4.find((e8) => e8.includes("_"));
        e7 && i4.push(e7.replace(/^[^_]+_/, "_"));
      }
      i4.push("@none");
      const s4 = e6.inverse[t3];
      for (const e7 of o4) {
        if (!(e7 in s4))
          continue;
        const t4 = s4[e7][r3];
        for (const e8 of i4)
          if (e8 in t4)
            return t4[e8];
      }
      return null;
    }(e5, t2, n2, a3, i3, s3);
    if (l3 !== null)
      return l3;
  }
  if (o2.vocab && "@vocab" in e5) {
    const n3 = e5["@vocab"];
    if (t2.indexOf(n3) === 0 && t2 !== n3) {
      const o3 = t2.substr(n3.length);
      if (!e5.mappings.has(o3))
        return o3;
    }
  }
  let s2 = null;
  const l2 = [];
  let c2 = e5.fastCurieMap;
  const d2 = t2.length - 1;
  for (let e6 = 0; e6 < d2 && t2[e6] in c2; ++e6)
    c2 = c2[t2[e6]], "" in c2 && l2.push(c2[""][0]);
  for (let o3 = l2.length - 1; o3 >= 0; --o3) {
    const r3 = l2[o3], a3 = r3.terms;
    for (const o4 of a3) {
      const a4 = o4 + ":" + t2.substr(r3.iri.length);
      e5.mappings.get(o4)._prefix && (!e5.mappings.has(a4) || n2 === null && e5.mappings.get(a4)["@id"] === t2) && (s2 === null || Cn(a4, s2) < 0) && (s2 = a4);
    }
  }
  if (s2 !== null)
    return s2;
  for (const [n3, o3] of e5.mappings)
    if (o3 && o3._prefix && t2.startsWith(n3 + ":"))
      throw new k(`Absolute IRI "${t2}" confused with prefix "${n3}".`, "jsonld.SyntaxError", { code: "IRI confused with prefix", context: e5 });
  return o2.vocab ? t2 : "@base" in e5 ? e5["@base"] ? Nn(Sn(a2, e5["@base"]), t2) : t2 : Nn(a2, t2);
}, Ln.compactValue = ({ activeCtx: e5, activeProperty: t2, value: n2, options: o2 }) => {
  if (vn(n2)) {
    const o3 = bn(e5, t2, "@type"), r3 = bn(e5, t2, "@language"), a3 = bn(e5, t2, "@direction"), i3 = bn(e5, t2, "@container") || [], s2 = "@index" in n2 && !i3.includes("@index");
    if (!s2 && o3 !== "@none") {
      if (n2["@type"] === o3)
        return n2["@value"];
      if ("@language" in n2 && n2["@language"] === r3 && "@direction" in n2 && n2["@direction"] === a3)
        return n2["@value"];
      if ("@language" in n2 && n2["@language"] === r3)
        return n2["@value"];
      if ("@direction" in n2 && n2["@direction"] === a3)
        return n2["@value"];
    }
    const l2 = Object.keys(n2).length, c2 = l2 === 1 || l2 === 2 && "@index" in n2 && !s2, d2 = "@language" in e5, u2 = pn(n2["@value"]), p2 = e5.mappings.has(t2) && e5.mappings.get(t2)["@language"] === null;
    if (c2 && o3 !== "@none" && (!d2 || !u2 || p2))
      return n2["@value"];
    const h2 = {};
    return s2 && (h2[Ln.compactIri({ activeCtx: e5, iri: "@index", relativeTo: { vocab: true } })] = n2["@index"]), "@type" in n2 ? h2[Ln.compactIri({ activeCtx: e5, iri: "@type", relativeTo: { vocab: true } })] = Ln.compactIri({ activeCtx: e5, iri: n2["@type"], relativeTo: { vocab: true } }) : "@language" in n2 && (h2[Ln.compactIri({ activeCtx: e5, iri: "@language", relativeTo: { vocab: true } })] = n2["@language"]), "@direction" in n2 && (h2[Ln.compactIri({ activeCtx: e5, iri: "@direction", relativeTo: { vocab: true } })] = n2["@direction"]), h2[Ln.compactIri({ activeCtx: e5, iri: "@value", relativeTo: { vocab: true } })] = n2["@value"], h2;
  }
  const r2 = xn(e5, t2, { vocab: true }, o2), a2 = bn(e5, t2, "@type"), i2 = Ln.compactIri({ activeCtx: e5, iri: n2["@id"], relativeTo: { vocab: a2 === "@vocab" }, base: o2.base });
  return a2 === "@id" || a2 === "@vocab" || r2 === "@graph" ? i2 : { [Ln.compactIri({ activeCtx: e5, iri: "@id", relativeTo: { vocab: true } })]: i2 };
};
var Tn = class {
  constructor() {
    this._requests = {};
  }
  wrapLoader(e5) {
    const t2 = this;
    return t2._loader = e5, function() {
      return t2.add.apply(t2, arguments);
    };
  }
  add(e5) {
    return __async(this, null, function* () {
      let t2 = this._requests[e5];
      if (t2)
        return Promise.resolve(t2);
      t2 = this._requests[e5] = this._loader(e5);
      try {
        return yield t2;
      } finally {
        delete this._requests[e5];
      }
    });
  }
};
var { parseLinkHeader: Rn, buildHeaders: En } = E;
var { LINK_HEADER_CONTEXT: _n } = vt;
var { prependBase: Mn } = P;
var Pn = ({ secure: e5, strictSSL: t2 = true, maxRedirects: n2 = -1, request: o2, headers: r2 = {} } = { strictSSL: true, maxRedirects: -1, headers: {} }) => {
  r2 = En(r2), o2 = o2 || x;
  const a2 = x;
  return new Tn().wrapLoader(function(e6) {
    return i2(e6, []);
  });
  function i2(s2, l2) {
    return __async(this, null, function* () {
      if (s2.indexOf("http:") !== 0 && s2.indexOf("https:") !== 0)
        throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", { code: "loading document failed", url: s2 });
      if (e5 && s2.indexOf("https") !== 0)
        throw new k(`URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`, "jsonld.InvalidUrl", { code: "loading document failed", url: s2 });
      let c2, d2 = null;
      if (d2 !== null)
        return d2;
      let u2 = null;
      try {
        c2 = yield function(e6, t3) {
          return new Promise((n3, o3) => {
            e6(t3, (e7, t4, r3) => {
              e7 ? o3(e7) : n3({ res: t4, body: r3 });
            });
          });
        }(o2, { url: s2, headers: r2, strictSSL: t2, followRedirect: false });
      } catch (e6) {
        throw new k("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", { code: "loading document failed", url: s2, cause: e6 });
      }
      const { res: p2, body: h2 } = c2;
      d2 = { contextUrl: null, documentUrl: s2, document: h2 || null };
      const f2 = a2.STATUS_CODES[p2.statusCode];
      if (p2.statusCode >= 400)
        throw new k(`URL "${s2}" could not be dereferenced: ${f2}`, "jsonld.InvalidUrl", { code: "loading document failed", url: s2, httpStatusCode: p2.statusCode });
      if (p2.headers.link && p2.headers["content-type"] !== "application/ld+json") {
        const e6 = Rn(p2.headers.link), t3 = e6[_n];
        if (Array.isArray(t3))
          throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", { code: "multiple context link headers", url: s2 });
        t3 && (d2.contextUrl = t3.target), u2 = e6.alternate, u2 && u2.type == "application/ld+json" && !(p2.headers["content-type"] || "").match(/^application\/(\w*\+)?json$/) && (p2.headers.location = Mn(s2, u2.target));
      }
      if ((u2 || p2.statusCode >= 300 && p2.statusCode < 400) && p2.headers.location) {
        if (l2.length === n2)
          throw new k("URL could not be dereferenced; there were too many redirects.", "jsonld.TooManyRedirects", { code: "loading document failed", url: s2, httpStatusCode: p2.statusCode, redirects: l2 });
        if (l2.indexOf(s2) !== -1)
          throw new k("URL could not be dereferenced; infinite redirection was detected.", "jsonld.InfiniteRedirectDetected", { code: "recursive context inclusion", url: s2, httpStatusCode: p2.statusCode, redirects: l2 });
        return l2.push(s2), i2(p2.headers.location, l2);
      }
      return l2.push(s2), d2;
    });
  }
};
var { parseLinkHeader: Jn, buildHeaders: Bn } = E;
var { LINK_HEADER_CONTEXT: Fn } = vt;
var { prependBase: Un } = P;
var qn = /(^|(\r\n))link:/i;
var Vn = ({ secure: e5, headers: t2 = {}, xhr: n2 } = { headers: {} }) => {
  t2 = Bn(t2);
  return new Tn().wrapLoader(function o2(r2) {
    return __async(this, null, function* () {
      if (r2.indexOf("http:") !== 0 && r2.indexOf("https:") !== 0)
        throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", { code: "loading document failed", url: r2 });
      if (e5 && r2.indexOf("https") !== 0)
        throw new k(`URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`, "jsonld.InvalidUrl", { code: "loading document failed", url: r2 });
      let a2;
      try {
        a2 = yield function(e6, t3, n3) {
          const o3 = new (e6 = e6 || XMLHttpRequest)();
          return new Promise((e7, r3) => {
            o3.onload = () => e7(o3), o3.onerror = (e8) => r3(e8), o3.open("GET", t3, true);
            for (const e8 in n3)
              o3.setRequestHeader(e8, n3[e8]);
            o3.send();
          });
        }(n2, r2, t2);
      } catch (e6) {
        throw new k("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", { code: "loading document failed", url: r2, cause: e6 });
      }
      if (a2.status >= 400)
        throw new k("URL could not be dereferenced: " + a2.statusText, "jsonld.LoadDocumentError", { code: "loading document failed", url: r2, httpStatusCode: a2.status });
      let i2 = { contextUrl: null, documentUrl: r2, document: a2.response }, s2 = null;
      const l2 = a2.getResponseHeader("Content-Type");
      let c2;
      qn.test(a2.getAllResponseHeaders()) && (c2 = a2.getResponseHeader("Link"));
      if (c2 && l2 !== "application/ld+json") {
        const e6 = Jn(c2), t3 = e6[Fn];
        if (Array.isArray(t3))
          throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", { code: "multiple context link headers", url: r2 });
        t3 && (i2.contextUrl = t3.target), s2 = e6.alternate, s2 && s2.type == "application/ld+json" && !(l2 || "").match(/^application\/(\w*\+)?json$/) && (i2 = yield o2(Un(r2, s2.target)));
      }
      return i2;
    });
  });
};
var zn = E.IdentifierIssuer;
var { expand: $n } = et;
var { flatten: Gn } = pt;
var { fromRDF: Hn } = Ct;
var { toRDF: Qn } = $t;
var { frameMergedOrDefault: Kn, cleanupNull: Xn } = Wt;
var { isArray: Zn, isObject: Wn, isString: Yn } = N;
var { isSubjectReference: eo } = O;
var { expandIri: to, getInitialContext: no, process: oo, processingMode: ro } = De;
var { compact: ao, compactIri: io } = An;
var { createNodeMap: so, createMergedNodeMap: lo, mergeNodeMaps: co } = lt;
var uo = typeof process != "undefined" && process.versions && process.versions.node;
var po = !uo && (typeof window != "undefined" || typeof self != "undefined");
var ho = function(t2) {
  const n2 = {}, o2 = new le({ max: 100 });
  function r2(e5, _a) {
    var _b = _a, { documentLoader: n3 = t2.documentLoader } = _b, o3 = __objRest(_b, ["documentLoader"]);
    return Object.assign({}, { documentLoader: n3 }, o3, e5);
  }
  return t2.compact = function(_0, _1, _2) {
    return __async(this, arguments, function* (e5, n3, a2) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (n3 === null)
        throw new k("The compaction context must not be null.", "jsonld.CompactError", { code: "invalid local context" });
      if (e5 === null)
        return null;
      let i2;
      (a2 = r2(a2, { base: Yn(e5) ? e5 : "", compactArrays: true, compactToRelative: true, graph: false, skipExpansion: false, link: false, issuer: new zn("_:b"), contextResolver: new ve({ sharedCache: o2 }) })).link && (a2.skipExpansion = true), a2.compactToRelative || delete a2.base, i2 = a2.skipExpansion ? e5 : yield t2.expand(e5, a2);
      const s2 = yield t2.processContext(no(a2), n3, a2);
      let l2 = yield ao({ activeCtx: s2, element: i2, options: a2, compactionMap: a2.compactionMap });
      a2.compactArrays && !a2.graph && Zn(l2) ? l2.length === 1 ? l2 = l2[0] : l2.length === 0 && (l2 = {}) : a2.graph && Wn(l2) && (l2 = [l2]), Wn(n3) && "@context" in n3 && (n3 = n3["@context"]), n3 = E.clone(n3), Zn(n3) || (n3 = [n3]);
      const c2 = n3;
      n3 = [];
      for (let e6 = 0; e6 < c2.length; ++e6)
        (!Wn(c2[e6]) || Object.keys(c2[e6]).length > 0) && n3.push(c2[e6]);
      const d2 = n3.length > 0;
      if (n3.length === 1 && (n3 = n3[0]), Zn(l2)) {
        const e6 = io({ activeCtx: s2, iri: "@graph", relativeTo: { vocab: true } }), t3 = l2;
        l2 = {}, d2 && (l2["@context"] = n3), l2[e6] = t3;
      } else if (Wn(l2) && d2) {
        const e6 = l2;
        l2 = { "@context": n3 };
        for (const t3 in e6)
          l2[t3] = e6[t3];
      }
      return l2;
    });
  }, t2.expand = function(_0, _1) {
    return __async(this, arguments, function* (e5, n3) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      (n3 = r2(n3, { keepFreeFloatingNodes: false, contextResolver: new ve({ sharedCache: o2 }) })).expansionMap === false && (n3.expansionMap = void 0);
      const a2 = {}, i2 = [];
      if ("expandContext" in n3) {
        const e6 = E.clone(n3.expandContext);
        Wn(e6) && "@context" in e6 ? a2.expandContext = e6 : a2.expandContext = { "@context": e6 }, i2.push(a2.expandContext);
      }
      let s2;
      if (Yn(e5)) {
        const o3 = yield t2.get(e5, n3);
        s2 = o3.documentUrl, a2.input = o3.document, o3.contextUrl && (a2.remoteContext = { "@context": o3.contextUrl }, i2.push(a2.remoteContext));
      } else
        a2.input = E.clone(e5);
      "base" in n3 || (n3.base = s2 || "");
      let l2 = no(n3);
      for (const e6 of i2)
        l2 = yield oo({ activeCtx: l2, localCtx: e6, options: n3 });
      let c2 = yield $n({ activeCtx: l2, element: a2.input, options: n3, expansionMap: n3.expansionMap });
      return Wn(c2) && "@graph" in c2 && Object.keys(c2).length === 1 ? c2 = c2["@graph"] : c2 === null && (c2 = []), Zn(c2) || (c2 = [c2]), c2;
    });
  }, t2.flatten = function(_0, _1, _2) {
    return __async(this, arguments, function* (e5, n3, a2) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      n3 = typeof n3 == "function" ? null : n3 || null, a2 = r2(a2, { base: Yn(e5) ? e5 : "", contextResolver: new ve({ sharedCache: o2 }) });
      const i2 = yield t2.expand(e5, a2), s2 = Gn(i2);
      if (n3 === null)
        return s2;
      a2.graph = true, a2.skipExpansion = true;
      const l2 = yield t2.compact(s2, n3, a2);
      return l2;
    });
  }, t2.frame = function(_0, _1, _2) {
    return __async(this, arguments, function* (e5, n3, a2) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (a2 = r2(a2, { base: Yn(e5) ? e5 : "", embed: "@once", explicit: false, requireAll: false, omitDefault: false, bnodesToClear: [], contextResolver: new ve({ sharedCache: o2 }) }), Yn(n3)) {
        const e6 = yield t2.get(n3, a2);
        if (n3 = e6.document, e6.contextUrl) {
          let t3 = n3["@context"];
          t3 ? Zn(t3) ? t3.push(e6.contextUrl) : t3 = [t3, e6.contextUrl] : t3 = e6.contextUrl, n3["@context"] = t3;
        }
      }
      const i2 = n3 && n3["@context"] || {}, s2 = yield t2.processContext(no(a2), i2, a2);
      a2.hasOwnProperty("omitGraph") || (a2.omitGraph = ro(s2, 1.1)), a2.hasOwnProperty("pruneBlankNodeIdentifiers") || (a2.pruneBlankNodeIdentifiers = ro(s2, 1.1));
      const l2 = yield t2.expand(e5, a2), c2 = __spreadValues({}, a2);
      c2.isFrame = true, c2.keepFreeFloatingNodes = true;
      const d2 = yield t2.expand(n3, c2), u2 = Object.keys(n3).map((e6) => to(s2, e6, { vocab: true }));
      c2.merged = !u2.includes("@graph"), c2.is11 = ro(s2, 1.1);
      const p2 = Kn(l2, d2, c2);
      c2.graph = !a2.omitGraph, c2.skipExpansion = true, c2.link = {}, c2.framing = true;
      let h2 = yield t2.compact(p2, i2, c2);
      return c2.link = {}, h2 = Xn(h2, c2), h2;
    });
  }, t2.link = function(e5, n3, o3) {
    return __async(this, null, function* () {
      const r3 = {};
      return n3 && (r3["@context"] = n3), r3["@embed"] = "@link", t2.frame(e5, r3, o3);
    });
  }, t2.normalize = t2.canonize = function(_0, _1) {
    return __async(this, arguments, function* (e5, n3) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if ("inputFormat" in (n3 = r2(n3, { base: Yn(e5) ? e5 : "", algorithm: "URDNA2015", skipExpansion: false, contextResolver: new ve({ sharedCache: o2 }) }))) {
        if (n3.inputFormat !== "application/n-quads" && n3.inputFormat !== "application/nquads")
          throw new k("Unknown canonicalization input format.", "jsonld.CanonizeError");
        const t3 = me.parse(e5);
        return j.canonize(t3, n3);
      }
      const a2 = __spreadValues({}, n3);
      delete a2.format, a2.produceGeneralizedRdf = false;
      const i2 = yield t2.toRDF(e5, a2);
      return j.canonize(i2, n3);
    });
  }, t2.fromRDF = function(_0, _1) {
    return __async(this, arguments, function* (e5, t3) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      t3 = r2(t3, { format: Yn(e5) ? "application/n-quads" : void 0 });
      const { format: o3 } = t3;
      let { rdfParser: a2 } = t3;
      if (o3) {
        if (a2 = a2 || n2[o3], !a2)
          throw new k("Unknown input format.", "jsonld.UnknownFormat", { format: o3 });
      } else
        a2 = () => e5;
      const i2 = yield a2(e5);
      return Hn(i2, t3);
    });
  }, t2.toRDF = function(_0, _1) {
    return __async(this, arguments, function* (e5, n3) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      let a2;
      a2 = (n3 = r2(n3, { base: Yn(e5) ? e5 : "", skipExpansion: false, contextResolver: new ve({ sharedCache: o2 }) })).skipExpansion ? e5 : yield t2.expand(e5, n3);
      const i2 = Qn(a2, n3);
      if (n3.format) {
        if (n3.format === "application/n-quads" || n3.format === "application/nquads")
          return yield me.serialize(i2);
        throw new k("Unknown output format.", "jsonld.UnknownFormat", { format: n3.format });
      }
      return i2;
    });
  }, t2.createNodeMap = function(_0, _1) {
    return __async(this, arguments, function* (e5, n3) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      n3 = r2(n3, { base: Yn(e5) ? e5 : "", contextResolver: new ve({ sharedCache: o2 }) });
      const a2 = yield t2.expand(e5, n3);
      return lo(a2, n3);
    });
  }, t2.merge = function(_0, _1, _2) {
    return __async(this, arguments, function* (e5, n3, a2) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!Zn(e5))
        throw new TypeError('Could not merge, "docs" must be an array.');
      n3 = typeof n3 == "function" ? null : n3 || null, a2 = r2(a2, { contextResolver: new ve({ sharedCache: o2 }) });
      const i2 = yield Promise.all(e5.map((e6) => {
        const n4 = __spreadValues({}, a2);
        return t2.expand(e6, n4);
      }));
      let s2 = true;
      "mergeNodes" in a2 && (s2 = a2.mergeNodes);
      const l2 = a2.issuer || new zn("_:b"), c2 = { "@default": {} };
      for (let e6 = 0; e6 < i2.length; ++e6) {
        const t3 = E.relabelBlankNodes(i2[e6], { issuer: new zn("_:b" + e6 + "-") }), n4 = s2 || e6 === 0 ? c2 : { "@default": {} };
        if (so(t3, n4, "@default", l2), n4 !== c2)
          for (const e7 in n4) {
            const t4 = n4[e7];
            if (!(e7 in c2)) {
              c2[e7] = t4;
              continue;
            }
            const o3 = c2[e7];
            for (const e8 in t4)
              e8 in o3 || (o3[e8] = t4[e8]);
          }
      }
      const d2 = co(c2), u2 = [], p2 = Object.keys(d2).sort();
      for (let e6 = 0; e6 < p2.length; ++e6) {
        const t3 = d2[p2[e6]];
        eo(t3) || u2.push(t3);
      }
      if (n3 === null)
        return u2;
      a2.graph = true, a2.skipExpansion = true;
      const h2 = yield t2.compact(u2, n3, a2);
      return h2;
    });
  }, Object.defineProperty(t2, "documentLoader", { get: () => t2._documentLoader, set: (e5) => t2._documentLoader = e5 }), t2.documentLoader = (e5) => __async(this, null, function* () {
    throw new k("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", { code: "loading document failed", url: e5 });
  }), t2.get = function(e5, n3) {
    return __async(this, null, function* () {
      let o3;
      o3 = typeof n3.documentLoader == "function" ? n3.documentLoader : t2.documentLoader;
      const r3 = yield o3(e5);
      try {
        if (!r3.document)
          throw new k("No remote document found at the given URL.", "jsonld.NullRemoteDocument");
        Yn(r3.document) && (r3.document = JSON.parse(r3.document));
      } catch (e6) {
        throw new k("Could not retrieve a JSON-LD document from the URL.", "jsonld.LoadDocumentError", { code: "loading document failed", cause: e6, remoteDoc: r3 });
      }
      return r3;
    });
  }, t2.processContext = function(e5, t3, n3) {
    return __async(this, null, function* () {
      return n3 = r2(n3, { base: "", contextResolver: new ve({ sharedCache: o2 }) }), t3 === null ? no(n3) : (t3 = E.clone(t3), Wn(t3) && "@context" in t3 || (t3 = { "@context": t3 }), oo({ activeCtx: e5, localCtx: t3, options: n3 }));
    });
  }, t2.getContextValue = De.getContextValue, t2.documentLoaders = {}, t2.documentLoaders.node = Pn, t2.documentLoaders.xhr = Vn, t2.useDocumentLoader = function(e5) {
    if (!(e5 in t2.documentLoaders))
      throw new k('Unknown document loader type: "' + e5 + '"', "jsonld.UnknownDocumentLoader", { type: e5 });
    t2.documentLoader = t2.documentLoaders[e5].apply(t2, Array.prototype.slice.call(arguments, 1));
  }, t2.registerRDFParser = function(e5, t3) {
    n2[e5] = t3;
  }, t2.unregisterRDFParser = function(e5) {
    delete n2[e5];
  }, t2.registerRDFParser("application/n-quads", me.parse), t2.registerRDFParser("application/nquads", me.parse), t2.url = P, t2.util = E, Object.assign(t2, E), t2.promises = t2, t2.RequestQueue = Tn, t2.JsonLdProcessor = ((e5) => {
    class t3 {
      toString() {
        return "[object JsonLdProcessor]";
      }
    }
    return Object.defineProperty(t3, "prototype", { writable: false, enumerable: false }), Object.defineProperty(t3.prototype, "constructor", { writable: true, enumerable: false, configurable: true, value: t3 }), t3.compact = function(t4, n3) {
      return arguments.length < 2 ? Promise.reject(new TypeError("Could not compact, too few arguments.")) : e5.compact(t4, n3);
    }, t3.expand = function(t4) {
      return arguments.length < 1 ? Promise.reject(new TypeError("Could not expand, too few arguments.")) : e5.expand(t4);
    }, t3.flatten = function(t4) {
      return arguments.length < 1 ? Promise.reject(new TypeError("Could not flatten, too few arguments.")) : e5.flatten(t4);
    }, t3;
  })(t2), po && e.JsonLdProcessor === void 0 && Object.defineProperty(e, "JsonLdProcessor", { writable: true, enumerable: false, configurable: true, value: t2.JsonLdProcessor }), uo ? t2.useDocumentLoader("node") : typeof XMLHttpRequest != "undefined" && t2.useDocumentLoader("xhr"), t2;
};
var fo = function() {
  return ho(function() {
    return fo();
  });
};
ho(fo);
var jsonld = Object.assign({
  expand: (json) => json,
  compact: (json, context) => json
}, fo);

export {
  ttl2jsonld,
  jsonld
};
/**
 * A JavaScript implementation of the JSON-LD API.
 * @author Dave Longley
 * @license BSD 3-Clause License
 */
/**
 * Removes the @preserve keywords from expanded result of framing.
 *
 * @param input the framed, framed output.
 * @param options the framing options used.
 *
 * @return the resulting output.
 */
// disallow aliasing @context and @preserve
// remove @preserve
//# sourceMappingURL=chunk-P7UPKBCD.js.map
