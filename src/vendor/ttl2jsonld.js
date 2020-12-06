
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },

          "class": function(expectation) {
            var escapedParts = "",
                i;

            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i]);
            }

            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },

          any: function(expectation) {
            return "any character";
          },

          end: function(expectation) {
            return "end of input";
          },

          other: function(expectation) {
            return expectation.description;
          }
        };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/"/g,  '\\"')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/\]/g, '\\]')
        .replace(/\^/g, '\\^')
        .replace(/-/g,  '\\-')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i, j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},

        peg$startRuleFunctions = { turtleDoc: peg$parseturtleDoc },
        peg$startRuleFunction  = peg$parseturtleDoc,

        peg$c0 = function(statements) {
          var jsonld = context.toJSON();
          jsonld["@graph"] = [];
          statements.filter(a=>Array.isArray(a)).forEach(a=>{
            a.forEach(b=>{
              jsonld["@graph"].push(b);
            });
          });

          if(jsonld["@graph"].length===1){
            Object.assign(jsonld,jsonld["@graph"][0]);
            delete jsonld["@graph"];
          }

          return jsonld;
        },
        peg$c1 = ".",
        peg$c2 = peg$literalExpectation(".", false),
        peg$c3 = function(a) {return a;},
        peg$c4 = "#",
        peg$c5 = peg$literalExpectation("#", false),
        peg$c6 = /^[^\n]/,
        peg$c7 = peg$classExpectation(["\n"], true, false),
        peg$c8 = "\n",
        peg$c9 = peg$literalExpectation("\n", false),
        peg$c10 = function(a) {return a.join("");},
        peg$c11 = "@prefix",
        peg$c12 = peg$literalExpectation("@prefix", false),
        peg$c13 = function(a, b) {
          context.addPrefix(a==="" ? "0" : a,b);
          return {};
        },
        peg$c14 = "@base",
        peg$c15 = peg$literalExpectation("@base", false),
        peg$c16 = function(a) {
          context.addBase(a);
          return {};
        },
        peg$c17 = /^[Bb]/,
        peg$c18 = peg$classExpectation(["B", "b"], false, false),
        peg$c19 = /^[Aa]/,
        peg$c20 = peg$classExpectation(["A", "a"], false, false),
        peg$c21 = /^[Ss]/,
        peg$c22 = peg$classExpectation(["S", "s"], false, false),
        peg$c23 = /^[Ee]/,
        peg$c24 = peg$classExpectation(["E", "e"], false, false),
        peg$c25 = /^[Pp]/,
        peg$c26 = peg$classExpectation(["P", "p"], false, false),
        peg$c27 = /^[Rr]/,
        peg$c28 = peg$classExpectation(["R", "r"], false, false),
        peg$c29 = /^[Ff]/,
        peg$c30 = peg$classExpectation(["F", "f"], false, false),
        peg$c31 = /^[Ii]/,
        peg$c32 = peg$classExpectation(["I", "i"], false, false),
        peg$c33 = /^[Xx]/,
        peg$c34 = peg$classExpectation(["X", "x"], false, false),
        peg$c35 = function(s, p) {
          var x = {};
          if(typeof s==='string' && s!=='[]') x["@id"] = s;
          else if(typeof s==='object') Object.assign(x,s);
          if(p) Object.assign(x,p);
          return [x];
        },
        peg$c36 = function(s, p) {
          var x = {};
          if(s) Object.assign(x,s);
          if(p) Object.assign(x,p);
          return [x];
        },
        peg$c37 = ";",
        peg$c38 = peg$literalExpectation(";", false),
        peg$c39 = function(a, b, e, f) {var x={};x[e]=f;return x;},
        peg$c40 = function(a, b, d) {return d;},
        peg$c41 = function(a, b, c) {
          var x = {};
          c.unshift(createObject(a,b));
          c.forEach(t=>{
            if(!t) return;
            Object.keys(t).forEach(key=>{
              t[key].forEach(val=>{
                if(key==="@type" && val["@id"]!==undefined) val = val["@id"];
                if(x[key]===undefined) x[key] = val;
                else if(Array.isArray(x[key])) x[key].push(val);
                else x[key] = [x[key],val];
              });
            });
          });
          return x;
        },
        peg$c42 = ",",
        peg$c43 = peg$literalExpectation(",", false),
        peg$c44 = function(a, c) {return c;},
        peg$c45 = function(a, b) {
          b.unshift(a);
          return b;
        },
        peg$c46 = "a",
        peg$c47 = peg$literalExpectation("a", false),
        peg$c48 = function() {return '@type';},
        peg$c49 = function(a) {return expandList(a,true);},
        peg$c50 = function(a) {return expandList(a,false);},
        peg$c51 = function(a) {return a==="[]" ? {} : {"@id":a};},
        peg$c52 = function(a) {return {"@id":a};},
        peg$c53 = "[",
        peg$c54 = peg$literalExpectation("[", false),
        peg$c55 = "]",
        peg$c56 = peg$literalExpectation("]", false),
        peg$c57 = "(",
        peg$c58 = peg$literalExpectation("(", false),
        peg$c59 = ")",
        peg$c60 = peg$literalExpectation(")", false),
        peg$c61 = function(a) {return {"@list":a};},
        peg$c62 = function(a, b) {return {"@value":a,"@language":b};},
        peg$c63 = "^^",
        peg$c64 = peg$literalExpectation("^^", false),
        peg$c65 = function(a, b) {
            if(b==="http://www.w3.org/2001/XMLSchema#boolean" && a==="true") return true;
            if(b==="http://www.w3.org/2001/XMLSchema#boolean" && a==="false") return false;
            if(b==="http://www.w3.org/2001/XMLSchema#integer") return parseInt(a);
            if(b==="http://www.w3.org/2001/XMLSchema#double") return parseFloat(a);

            const uri = context.resolve(b,true);
            if(uri){
              const prefix = b.split(":")[0];
              if(uri==="http://www.w3.org/2001/XMLSchema#boolean" && a==="true"){
                context.decrement(prefix);
                return true;
              }
              if(uri==="http://www.w3.org/2001/XMLSchema#boolean" && a==="false"){
                context.decrement(prefix);
                return false;
              }
              if(uri==="http://www.w3.org/2001/XMLSchema#integer"){
                context.decrement(prefix);
                return parseInt(a);
              }
              if(uri==="http://www.w3.org/2001/XMLSchema#double"){
                context.decrement(prefix);
                return parseFloat(a);
              }
            }
            return {"@value":a,"@type":b};
          },
        peg$c66 = "true",
        peg$c67 = peg$literalExpectation("true", false),
        peg$c68 = function() {return true;},
        peg$c69 = "false",
        peg$c70 = peg$literalExpectation("false", false),
        peg$c71 = function() {return false;},
        peg$c72 = function(a) {return a+":";},
        peg$c73 = "<",
        peg$c74 = peg$literalExpectation("<", false),
        peg$c75 = /^[^\0- <>"{}|\^`\\]/,
        peg$c76 = peg$classExpectation([["\0", " "], "<", ">", "\"", "{", "}", "|", "^", "`", "\\"], true, false),
        peg$c77 = ">",
        peg$c78 = peg$literalExpectation(">", false),
        peg$c79 = function(a) {
          const decoded = a.map(s=> {
            if(0x10000 <= s.codePointAt(0) && s.codePointAt(0) <= 0xeffff) return 'a';
            if(s.length===1) return s;
            if(s.length===6) return String.fromCharCode("0x"+s.substring(2));
            if(s.length===10) return String.fromCodePoint("0x"+s.substring(2));
            return s;
          }).join("");
          if(decoded.match(/^[^\u0000-\u0020<>"{}|^`\\]*$/)){
            var join = a.join("");
            try{
              return context.resolve(join);
            }catch(e){
              error("Invalid IRIREF "+join);
            }
          }
          else error("Invalid IRIREF "+a.join("")+" / "+decoded);
        },
        peg$c80 = ":",
        peg$c81 = peg$literalExpectation(":", false),
        peg$c82 = function(a) {
          a = a || "0";
          if(context.hasPrefix(a)===false)
            error("undefined prefix "+a);
          return a;
        },
        peg$c83 = function(a) {return (a||"");},
        peg$c84 = function(a, b) {
          context.increment(a);
          return context.resolve(a+":"+b);
        },
        peg$c85 = "_:",
        peg$c86 = peg$literalExpectation("_:", false),
        peg$c87 = /^[0-9]/,
        peg$c88 = peg$classExpectation([["0", "9"]], false, false),
        peg$c89 = "@",
        peg$c90 = peg$literalExpectation("@", false),
        peg$c91 = /^[a-zA-Z]/,
        peg$c92 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
        peg$c93 = "-",
        peg$c94 = peg$literalExpectation("-", false),
        peg$c95 = /^[a-zA-Z0-9]/,
        peg$c96 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
        peg$c97 = function(a, s) {return '-'+s.join("");},
        peg$c98 = function(a, b) {return a.join("")+b.join("");},
        peg$c99 = /^[+\-]/,
        peg$c100 = peg$classExpectation(["+", "-"], false, false),
        peg$c101 = function(a) { return parseInt(a);},
        peg$c102 = function(a) {
          return {
            "@value" : a,
            "@type" : "http://www.w3.org/2001/XMLSchema#decimal"
          }
        },
        peg$c103 = function(a) {
          return {
            "@value" : a,
            "@type" : "http://www.w3.org/2001/XMLSchema#double"
          };
        },
        peg$c104 = /^[eE]/,
        peg$c105 = peg$classExpectation(["e", "E"], false, false),
        peg$c106 = "\"",
        peg$c107 = peg$literalExpectation("\"", false),
        peg$c108 = /^[^"\\\n\r]/,
        peg$c109 = peg$classExpectation(["\"", "\\", "\n", "\r"], true, false),
        peg$c110 = "'",
        peg$c111 = peg$literalExpectation("'", false),
        peg$c112 = /^[^'\\\n\r]/,
        peg$c113 = peg$classExpectation(["'", "\\", "\n", "\r"], true, false),
        peg$c114 = "'''",
        peg$c115 = peg$literalExpectation("'''", false),
        peg$c116 = /^[^'\\]/,
        peg$c117 = peg$classExpectation(["'", "\\"], true, false),
        peg$c118 = "''",
        peg$c119 = peg$literalExpectation("''", false),
        peg$c120 = function(head, a) {return "''"+a.join("");},
        peg$c121 = function(head, a) {return "'" +a.join("");},
        peg$c122 = function(head, body) {return head.join("")+body.join("");},
        peg$c123 = "\"\"\"",
        peg$c124 = peg$literalExpectation("\"\"\"", false),
        peg$c125 = /^[^"\\]/,
        peg$c126 = peg$classExpectation(["\"", "\\"], true, false),
        peg$c127 = "\"\"",
        peg$c128 = peg$literalExpectation("\"\"", false),
        peg$c129 = function(head, a) {return '""'+a.join("");},
        peg$c130 = function(head, a) {return '"' +a.join("");},
        peg$c131 = "\\U",
        peg$c132 = peg$literalExpectation("\\U", false),
        peg$c133 = function(hex) {
            return String.fromCodePoint(parseInt(hex.join(""),16));
          },
        peg$c134 = "\\u",
        peg$c135 = peg$literalExpectation("\\u", false),
        peg$c136 = function(hex) {
            return String.fromCharCode(parseInt(hex.join(""),16));
          },
        peg$c137 = "\\t",
        peg$c138 = peg$literalExpectation("\\t", false),
        peg$c139 = function() {return '\t';},
        peg$c140 = "\\b",
        peg$c141 = peg$literalExpectation("\\b", false),
        peg$c142 = function() {return '\b';},
        peg$c143 = "\\n",
        peg$c144 = peg$literalExpectation("\\n", false),
        peg$c145 = function() {return '\n';},
        peg$c146 = "\\r",
        peg$c147 = peg$literalExpectation("\\r", false),
        peg$c148 = function() {return '\r';},
        peg$c149 = "\\f",
        peg$c150 = peg$literalExpectation("\\f", false),
        peg$c151 = function() {return '\f';},
        peg$c152 = "\\\"",
        peg$c153 = peg$literalExpectation("\\\"", false),
        peg$c154 = function() {return '"';},
        peg$c155 = "\\'",
        peg$c156 = peg$literalExpectation("\\'", false),
        peg$c157 = function() {return "'";},
        peg$c158 = "\\\\",
        peg$c159 = peg$literalExpectation("\\\\", false),
        peg$c160 = function() {return '\\';},
        peg$c161 = /^[ \t\r\n]/,
        peg$c162 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false),
        peg$c163 = function() {return "[]";},
        peg$c164 = /^[\uD800-\uDBFF]/,
        peg$c165 = peg$classExpectation([["\uD800", "\uDBFF"]], false, false),
        peg$c166 = /^[\uDC00-\uDFFF]/,
        peg$c167 = peg$classExpectation([["\uDC00", "\uDFFF"]], false, false),
        peg$c168 = function(a, b) {return a+b;},
        peg$c169 = /^[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        peg$c170 = peg$classExpectation([["A", "Z"], ["a", "z"], ["\xC0", "\xD6"], ["\xD8", "\xF6"], ["\xF8", "\u02FF"], ["\u0370", "\u037D"], ["\u037F", "\u1FFF"], ["\u200C", "\u200D"], ["\u2070", "\u218F"], ["\u2C00", "\u2FEF"], ["\u3001", "\uD7FF"], ["\uF900", "\uFDCF"], ["\uFDF0", "\uFFFD"]], false, false),
        peg$c171 = "_",
        peg$c172 = peg$literalExpectation("_", false),
        peg$c173 = "\xB7",
        peg$c174 = peg$literalExpectation("\xB7", false),
        peg$c175 = /^[\u0300-\u036F]/,
        peg$c176 = peg$classExpectation([["\u0300", "\u036F"]], false, false),
        peg$c177 = /^[\u203F-\u2040]/,
        peg$c178 = peg$classExpectation([["\u203F", "\u2040"]], false, false),
        peg$c179 = function(head, body, a, b) {return a.join("")+b.join("");},
        peg$c180 = function(head, body, tail) {return head+body.join("")+tail.join("");},
        peg$c181 = "%",
        peg$c182 = peg$literalExpectation("%", false),
        peg$c183 = /^[0-9A-Fa-f]/,
        peg$c184 = peg$classExpectation([["0", "9"], ["A", "F"], ["a", "f"]], false, false),
        peg$c185 = "\\",
        peg$c186 = peg$literalExpectation("\\", false),
        peg$c187 = /^[_~.!$&'()*+,;=\/?#@%\-]/,
        peg$c188 = peg$classExpectation(["_", "~", ".", "!", "$", "&", "'", "(", ")", "*", "+", ",", ";", "=", "/", "?", "#", "@", "%", "-"], false, false),

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos], p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseturtleDoc() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsestatement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsestatement();
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseIGNORE();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseIGNORE();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsestatement() {
      var s0, s1, s2, s3;

      s0 = peg$parsedirective();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsetriples();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseIGNORE();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseIGNORE();
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s3 = peg$c1;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseCOMMENT() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c4;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c5); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c6.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c6.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIGNORE() {
      var s0;

      s0 = peg$parseWS();
      if (s0 === peg$FAILED) {
        s0 = peg$parseCOMMENT();
      }

      return s0;
    }

    function peg$parsedirective() {
      var s0;

      s0 = peg$parseprefixID();
      if (s0 === peg$FAILED) {
        s0 = peg$parsebase();
        if (s0 === peg$FAILED) {
          s0 = peg$parsesparqlPrefix();
          if (s0 === peg$FAILED) {
            s0 = peg$parsesparqlBase();
          }
        }
      }

      return s0;
    }

    function peg$parseprefixID() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 7) === peg$c11) {
          s2 = peg$c11;
          peg$currPos += 7;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseIGNORE();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseIGNORE();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsePNAME_NS_NO_CHECK();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseIGNORE();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseIGNORE();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseIRIREF();
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parseIGNORE();
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parseIGNORE();
                  }
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                      s8 = peg$c1;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c2); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c13(s4, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsebase() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c14) {
          s2 = peg$c14;
          peg$currPos += 5;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseIGNORE();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseIGNORE();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseIRIREF();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseIGNORE();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseIGNORE();
              }
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c1;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c2); }
                }
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c16(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsesparqlBase() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (peg$c17.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c19.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c21.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c22); }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c23.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c24); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseIGNORE();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseIGNORE();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseIRIREF();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c16(s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsesparqlPrefix() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c27.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c23.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c24); }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c29.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c30); }
              }
              if (s5 !== peg$FAILED) {
                if (peg$c31.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c32); }
                }
                if (s6 !== peg$FAILED) {
                  if (peg$c33.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$parseIGNORE();
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$parseIGNORE();
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsePNAME_NS_NO_CHECK();
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$parseIGNORE();
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$parseIGNORE();
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseIRIREF();
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c13(s9, s11);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsetriples() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsesubject();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepredicateObjectList();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c35(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseblankNodePropertyList();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsepredicateObjectList();
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c36(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsepredicateObjectList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseverb();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseobjectList();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parseIGNORE();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parseIGNORE();
          }
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 59) {
              s6 = peg$c37;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c38); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$currPos;
              s8 = peg$parseverb();
              if (s8 !== peg$FAILED) {
                s9 = peg$parseobjectList();
                if (s9 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s8 = peg$c39(s1, s2, s8, s9);
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c40(s1, s2, s7);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parseIGNORE();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseIGNORE();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 59) {
                s6 = peg$c37;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c38); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$parseverb();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseobjectList();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c39(s1, s2, s8, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c40(s1, s2, s7);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseobjectList() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseobject();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parseIGNORE();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseIGNORE();
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c42;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseobject();
            if (s6 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c44(s1, s6);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parseIGNORE();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseIGNORE();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c42;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c43); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseobject();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c44(s1, s6);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseverb() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsepredicate();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c3(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseIGNORE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseIGNORE();
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 97) {
            s2 = peg$c46;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c48();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsesubject() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsecollection();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c49(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseBlankNode();
        if (s0 === peg$FAILED) {
          s0 = peg$parseiri();
        }
      }

      return s0;
    }

    function peg$parsepredicate() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseiri();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseobject() {
      var s0, s1;

      s0 = peg$parseliteral();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsecollection();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c50(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseBlankNode();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c51(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseblankNodePropertyList();
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseiri();
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c52(s1);
              }
              s0 = s1;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseliteral() {
      var s0;

      s0 = peg$parseRDFLiteral();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNumericLiteral();
        if (s0 === peg$FAILED) {
          s0 = peg$parseBooleanLiteral();
        }
      }

      return s0;
    }

    function peg$parseblankNodePropertyList() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 91) {
          s2 = peg$c53;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsepredicateObjectList();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseIGNORE();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseIGNORE();
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c55;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c56); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c3(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsecollection() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c57;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseobject();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseobject();
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseIGNORE();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseIGNORE();
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c59;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c60); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseNumericLiteral() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseDOUBLE();
        if (s2 === peg$FAILED) {
          s2 = peg$parseDECIMAL();
          if (s2 === peg$FAILED) {
            s2 = peg$parseINTEGER();
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRDFLiteral() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseString();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseIGNORE();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseIGNORE();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseLANGTAG();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c62(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseIGNORE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseIGNORE();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseString();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseIGNORE();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseIGNORE();
            }
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c63) {
                s4 = peg$c63;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c64); }
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseIGNORE();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseIGNORE();
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseiri();
                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c65(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parseIGNORE();
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseIGNORE();
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseString();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }

      return s0;
    }

    function peg$parseBooleanLiteral() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c66) {
          s2 = peg$c66;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c67); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c68();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseIGNORE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseIGNORE();
        }
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c69) {
            s2 = peg$c69;
            peg$currPos += 5;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c70); }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c71();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseString() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSTRING_LITERAL_LONG_SINGLE_QUOTE();
        if (s2 === peg$FAILED) {
          s2 = peg$parseSTRING_LITERAL_LONG_QUOTE();
          if (s2 === peg$FAILED) {
            s2 = peg$parseSTRING_LITERAL_SINGLE_QUOTE();
            if (s2 === peg$FAILED) {
              s2 = peg$parseSTRING_LITERAL_QUOTE();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseiri() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIRIREF();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseIGNORE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseIGNORE();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsePrefixedName();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c3(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parsePrefixedName() {
      var s0, s1;

      s0 = peg$parsePNAME_LN();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsePNAME_NS();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c72(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseBlankNode() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseIGNORE();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseIGNORE();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseBLANK_NODE_LABEL();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseIGNORE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseIGNORE();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseANON();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c3(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseIRIREF() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c73;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c74); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c75.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c76); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseUCHAR();
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c75.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c76); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseUCHAR();
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 62) {
            s3 = peg$c77;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c78); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c79(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePNAME_NS() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsePN_PREFIX();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c80;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c81); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c82(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePNAME_NS_NO_CHECK() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsePN_PREFIX();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c80;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c81); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c83(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePNAME_LN() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsePNAME_NS();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePN_LOCAL();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c84(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseBLANK_NODE_LABEL() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c85) {
        s2 = peg$c85;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c86); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePN_CHARS_U();
        if (s3 === peg$FAILED) {
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsePN_CHARS();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsePN_CHARS();
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = [];
            if (input.charCodeAt(peg$currPos) === 46) {
              s8 = peg$c1;
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
            }
            if (s8 !== peg$FAILED) {
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                if (input.charCodeAt(peg$currPos) === 46) {
                  s8 = peg$c1;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c2); }
                }
              }
            } else {
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s8 = [];
              s9 = peg$parsePN_CHARS();
              if (s9 !== peg$FAILED) {
                while (s9 !== peg$FAILED) {
                  s8.push(s9);
                  s9 = peg$parsePN_CHARS();
                }
              } else {
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = [];
              if (input.charCodeAt(peg$currPos) === 46) {
                s8 = peg$c1;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c2); }
              }
              if (s8 !== peg$FAILED) {
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s8 = peg$c1;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c2); }
                  }
                }
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s8 = [];
                s9 = peg$parsePN_CHARS();
                if (s9 !== peg$FAILED) {
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parsePN_CHARS();
                  }
                } else {
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s7 = [s7, s8];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parseLANGTAG() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c89;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c90); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c91.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c92); }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c91.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c92); }
            }
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 45) {
            s5 = peg$c93;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c94); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c95.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c96); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c95.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c96); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c97(s2, s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 45) {
              s5 = peg$c93;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c94); }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c95.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c96); }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c95.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c96); }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c97(s2, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c98(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseINTEGER() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      if (peg$c99.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c100); }
      }
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        if (peg$c87.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c88); }
        }
        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
          }
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c101(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseDECIMAL() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      if (peg$c99.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c100); }
      }
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        if (peg$c87.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c88); }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s5 = peg$c1;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c87.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c88); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c102(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseDOUBLE() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      if (peg$c99.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c100); }
      }
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        s5 = [];
        if (peg$c87.test(input.charAt(peg$currPos))) {
          s6 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c88); }
        }
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s6 = peg$c1;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              if (peg$c87.test(input.charAt(peg$currPos))) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c88); }
              }
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parseEXPONENT();
              if (s8 !== peg$FAILED) {
                s5 = [s5, s6, s7, s8];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 === peg$FAILED) {
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s5 = peg$c1;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c87.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c88); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseEXPONENT();
              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = peg$currPos;
            s5 = [];
            if (peg$c87.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c88); }
            }
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                if (peg$c87.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c88); }
                }
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseEXPONENT();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c103(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseEXPONENT() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c104.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c105); }
      }
      if (s2 !== peg$FAILED) {
        if (peg$c99.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c100); }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c87.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c88); }
              }
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parseSTRING_LITERAL_QUOTE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c106;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c107); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c108.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c109); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseECHAR();
          if (s3 === peg$FAILED) {
            s3 = peg$parseUCHAR();
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c108.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c109); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseECHAR();
            if (s3 === peg$FAILED) {
              s3 = peg$parseUCHAR();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c106;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTRING_LITERAL_SINGLE_QUOTE() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c110;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c111); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c112.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c113); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseECHAR();
          if (s3 === peg$FAILED) {
            s3 = peg$parseUCHAR();
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c112.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c113); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseECHAR();
            if (s3 === peg$FAILED) {
              s3 = peg$parseUCHAR();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c110;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c111); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTRING_LITERAL_LONG_SINGLE_QUOTE() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c114) {
        s1 = peg$c114;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c115); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c116.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c117); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseECHAR();
          if (s3 === peg$FAILED) {
            s3 = peg$parseUCHAR();
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c116.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c117); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseECHAR();
            if (s3 === peg$FAILED) {
              s3 = peg$parseUCHAR();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c118) {
            s5 = peg$c118;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c119); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c116.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c117); }
            }
            if (s7 === peg$FAILED) {
              s7 = peg$parseECHAR();
              if (s7 === peg$FAILED) {
                s7 = peg$parseUCHAR();
              }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c116.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c117); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$parseECHAR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseUCHAR();
                  }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c120(s2, s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 39) {
              s5 = peg$c110;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c111); }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c116.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c117); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$parseECHAR();
                if (s7 === peg$FAILED) {
                  s7 = peg$parseUCHAR();
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c116.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c117); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseECHAR();
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseUCHAR();
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c121(s2, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c118) {
              s5 = peg$c118;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c119); }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c116.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c117); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$parseECHAR();
                if (s7 === peg$FAILED) {
                  s7 = peg$parseUCHAR();
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c116.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c117); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseECHAR();
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseUCHAR();
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c120(s2, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 39) {
                s5 = peg$c110;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c111); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                if (peg$c116.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c117); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$parseECHAR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseUCHAR();
                  }
                }
                if (s7 !== peg$FAILED) {
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    if (peg$c116.test(input.charAt(peg$currPos))) {
                      s7 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c117); }
                    }
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseECHAR();
                      if (s7 === peg$FAILED) {
                        s7 = peg$parseUCHAR();
                      }
                    }
                  }
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c121(s2, s6);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c114) {
              s4 = peg$c114;
              peg$currPos += 3;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c115); }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c122(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseSTRING_LITERAL_LONG_QUOTE() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c123) {
        s1 = peg$c123;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c124); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c125.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c126); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseECHAR();
          if (s3 === peg$FAILED) {
            s3 = peg$parseUCHAR();
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c125.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c126); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseECHAR();
            if (s3 === peg$FAILED) {
              s3 = peg$parseUCHAR();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c127) {
            s5 = peg$c127;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c128); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c125.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c126); }
            }
            if (s7 === peg$FAILED) {
              s7 = peg$parseECHAR();
              if (s7 === peg$FAILED) {
                s7 = peg$parseUCHAR();
              }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c125.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c126); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$parseECHAR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseUCHAR();
                  }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c129(s2, s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 34) {
              s5 = peg$c106;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c107); }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c125.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c126); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$parseECHAR();
                if (s7 === peg$FAILED) {
                  s7 = peg$parseUCHAR();
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c125.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c126); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseECHAR();
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseUCHAR();
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c130(s2, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c127) {
              s5 = peg$c127;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c128); }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              if (peg$c125.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c126); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$parseECHAR();
                if (s7 === peg$FAILED) {
                  s7 = peg$parseUCHAR();
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  if (peg$c125.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c126); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseECHAR();
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseUCHAR();
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c129(s2, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 34) {
                s5 = peg$c106;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c107); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                if (peg$c125.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c126); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$parseECHAR();
                  if (s7 === peg$FAILED) {
                    s7 = peg$parseUCHAR();
                  }
                }
                if (s7 !== peg$FAILED) {
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    if (peg$c125.test(input.charAt(peg$currPos))) {
                      s7 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c126); }
                    }
                    if (s7 === peg$FAILED) {
                      s7 = peg$parseECHAR();
                      if (s7 === peg$FAILED) {
                        s7 = peg$parseUCHAR();
                      }
                    }
                  }
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c130(s2, s6);
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c123) {
              s4 = peg$c123;
              peg$currPos += 3;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c124); }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c122(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseUCHAR() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c131) {
        s1 = peg$c131;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c132); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseHEX();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseHEX();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseHEX();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseHEX();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseHEX();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseHEX();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseHEX();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseHEX();
                      if (s10 !== peg$FAILED) {
                        s3 = [s3, s4, s5, s6, s7, s8, s9, s10];
                        s2 = s3;
                      } else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s2;
                      s2 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c133(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c134) {
          s1 = peg$c134;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c135); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parseHEX();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseHEX();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseHEX();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseHEX();
                if (s6 !== peg$FAILED) {
                  s3 = [s3, s4, s5, s6];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c136(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseECHAR() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c137) {
        s1 = peg$c137;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c138); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c139();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c140) {
          s1 = peg$c140;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c141); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c142();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c143) {
            s1 = peg$c143;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c144); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c145();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c146) {
              s1 = peg$c146;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c147); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c148();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c149) {
                s1 = peg$c149;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c150); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c151();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c152) {
                  s1 = peg$c152;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c153); }
                }
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c154();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c155) {
                    s1 = peg$c155;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c156); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c157();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c158) {
                      s1 = peg$c158;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c159); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c160();
                    }
                    s0 = s1;
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseWS() {
      var s0;

      if (peg$c161.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c162); }
      }

      return s0;
    }

    function peg$parseANON() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c53;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c54); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseIGNORE();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseIGNORE();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c55;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c163();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePN_CHARS_BASE() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c164.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c165); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c166.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c167); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c168(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        if (peg$c169.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c170); }
        }
      }

      return s0;
    }

    function peg$parsePN_CHARS_U() {
      var s0;

      s0 = peg$parsePN_CHARS_BASE();
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 95) {
          s0 = peg$c171;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c172); }
        }
      }

      return s0;
    }

    function peg$parsePN_CHARS() {
      var s0;

      s0 = peg$parsePN_CHARS_U();
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s0 = peg$c93;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c94); }
        }
        if (s0 === peg$FAILED) {
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 183) {
              s0 = peg$c173;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c174); }
            }
            if (s0 === peg$FAILED) {
              if (peg$c175.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c176); }
              }
              if (s0 === peg$FAILED) {
                if (peg$c177.test(input.charAt(peg$currPos))) {
                  s0 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c178); }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsePN_PREFIX() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsePN_CHARS_BASE();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsePN_CHARS();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsePN_CHARS();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = [];
          if (input.charCodeAt(peg$currPos) === 46) {
            s7 = peg$c1;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s7 !== peg$FAILED) {
            while (s7 !== peg$FAILED) {
              s6.push(s7);
              if (input.charCodeAt(peg$currPos) === 46) {
                s7 = peg$c1;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c2); }
              }
            }
          } else {
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parsePN_CHARS();
            if (s8 !== peg$FAILED) {
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parsePN_CHARS();
              }
            } else {
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = [];
            if (input.charCodeAt(peg$currPos) === 46) {
              s7 = peg$c1;
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (input.charCodeAt(peg$currPos) === 46) {
                  s7 = peg$c1;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c2); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parsePN_CHARS();
              if (s8 !== peg$FAILED) {
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parsePN_CHARS();
                }
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parsePN_LOCAL() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parsePN_CHARS_U();
      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s1 = peg$c80;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c81); }
        }
        if (s1 === peg$FAILED) {
          if (peg$c87.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
          if (s1 === peg$FAILED) {
            s1 = peg$parsePLX();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsePN_CHARS();
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c80;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c81); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parsePLX();
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsePN_CHARS();
          if (s3 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s3 = peg$c80;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c81); }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$parsePLX();
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          if (input.charCodeAt(peg$currPos) === 46) {
            s6 = peg$c1;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (input.charCodeAt(peg$currPos) === 46) {
                s6 = peg$c1;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c2); }
              }
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            s7 = peg$parsePN_CHARS();
            if (s7 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s7 = peg$c80;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c81); }
              }
              if (s7 === peg$FAILED) {
                s7 = peg$parsePLX();
              }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parsePN_CHARS();
                if (s7 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 58) {
                    s7 = peg$c80;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c81); }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$parsePLX();
                  }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c179(s1, s2, s5, s6);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = [];
            if (input.charCodeAt(peg$currPos) === 46) {
              s6 = peg$c1;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
            }
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                if (input.charCodeAt(peg$currPos) === 46) {
                  s6 = peg$c1;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c2); }
                }
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parsePN_CHARS();
              if (s7 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                  s7 = peg$c80;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c81); }
                }
                if (s7 === peg$FAILED) {
                  s7 = peg$parsePLX();
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsePN_CHARS();
                  if (s7 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c80;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c81); }
                    }
                    if (s7 === peg$FAILED) {
                      s7 = peg$parsePLX();
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c179(s1, s2, s5, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c180(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePLX() {
      var s0;

      s0 = peg$parsePERCENT();
      if (s0 === peg$FAILED) {
        s0 = peg$parsePN_LOCAL_ESC();
      }

      return s0;
    }

    function peg$parsePERCENT() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 37) {
        s2 = peg$c181;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c182); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseHEX();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseHEX();
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parseHEX() {
      var s0;

      if (peg$c183.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c184); }
      }

      return s0;
    }

    function peg$parsePN_LOCAL_ESC() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c185;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c186); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c187.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c188); }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }


      var URL = typeof require === 'undefined' ? URL : require("url").URL;
      function createObject(property,value){var a={};a[property]=value;return a;}
      var context = {
        base : [],
        data : {},
        addBase : function(uri){
          if(context.base.length===0){
            context.base.push(uri);
            return;
          }
          const last = context.base[context.base.length-1];
          if(last!==uri) context.base.push(new URL(uri,last).toString());
        },
        addPrefix : function(prefix,uri){
          const list = context.data[prefix];
          if(list===undefined){
            context.data[prefix] = [{uri:uri,count:0}];
          }else if(list[list.length-1].uri!==uri){
            list.push({uri:uri,count:0});
          }
        },
        hasPrefix : function(prefix){
          return this.data[prefix]!==undefined;
        },
        resolve : function(pname,force){
          const prefix = Object.keys(context.data).find(key=>pname.indexOf(key+":")===0);
          if(prefix!==undefined) {
            const list = context.data[prefix];
            if(list.length===1 && force!==true) return pname;
            const uri = list[list.length-1].uri;
            return pname.replace(prefix+":",uri);
          }else{
            var base = context.base.length === 0 ? options.baseIRI : context.base[context.base.length-1];
            if(!base || pname.match(/^(http:|https:|urn:|file:)/)) return pname;
            if(pname.indexOf("//")===0 && base) return base.split("//")[0]+pname;
            return new URL(pname,base).toString();
          }
        },
        increment : function(prefix){
          const list = context.data[prefix];
          if(list!==undefined)list[list.length-1].count++;
        },
        decrement : function(prefix){
          const list = context.data[prefix];
          if(list!==undefined)list[list.length-1].count--;
        },
        toJSON : function(){
          const root = {};
          if(context.base.length>0){
            if(root["@context"]===undefined)root["@context"] = {};
            root["@context"]["@base"] = context.base[0];
          }
          Object.keys(context.data).forEach(key=>{
            const head = context.data[key][0];
            if(head.uri==="http://www.w3.org/2001/XMLSchema#" && head.count < 1) return;
            if(root["@context"]===undefined) root["@context"] = {};
            root["@context"][key] = head.uri;
          });
          return root;
        }
      };

      function expandList(container,force){
        if(container["@list"]===undefined) return container;
        if(!force && !container["@list"].find(x=>x["@list"]!==undefined)) return container;

        if(container["@list"].length===0)
          return {"@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"};

        var root = {};
        var focus = null;
        container["@list"].forEach(b=>{
          if(focus===null) focus = root;
          else {
            focus["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = {};
            focus = focus["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"];
          }
          focus["http://www.w3.org/1999/02/22-rdf-syntax-ns#first"] = expandList(b,true);
          focus["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"] = {
            "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
          };
        });
        return root;
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  export const ttl2jsonld = peg$parse
  export const SyntaxError = peg$SyntaxError
