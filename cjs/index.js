'use strict';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function peg$subclass(t,r){function e(){this.constructor=t;}e.prototype=r.prototype,t.prototype=new e;}function peg$SyntaxError(t,r,e,n){this.message=t,this.expected=r,this.found=e,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,peg$SyntaxError);}function peg$parse(t,r){r=void 0!==r?r:{};var e,n={},u={turtleDoc:qe},s=qe,a=function(t){var r=vn.toJSON();return r["@graph"]=[],t.filter(t=>Array.isArray(t)).forEach(t=>{t.forEach(t=>{r["@graph"].push(t);});}),1===r["@graph"].length&&(Object.assign(r,r["@graph"][0]),delete r["@graph"]),r},c=".",o=ke(".",!1),f=function(t){return t},i="#",h=ke("#",!1),l=/^[^\n]/,A=Be(["\n"],!0,!1),p="\n",d=ke("\n",!1),g=function(t){return t.join("")},v="@prefix",w=ke("@prefix",!1),b=function(t,r){return vn.addPrefix(""===t?"0":t,r),{}},C="@base",x=ke("@base",!1),F=function(t){return vn.addBase(t),{}},y=/^[Bb]/,m=Be(["B","b"],!1,!1),S=/^[Aa]/,j=Be(["A","a"],!1,!1),E=/^[Ss]/,I=Be(["S","s"],!1,!1),$=/^[Ee]/,D=Be(["E","e"],!1,!1),L=/^[Pp]/,M=Be(["P","p"],!1,!1),R=/^[Rr]/,X=Be(["R","r"],!1,!1),O=/^[Ff]/,P=Be(["F","f"],!1,!1),z=/^[Ii]/,Z=Be(["I","i"],!1,!1),_=/^[Xx]/,k=Be(["X","x"],!1,!1),B=function(t,r){var e={};return "string"==typeof t&&"[]"!==t?e["@id"]=t:"object"==typeof t&&Object.assign(e,t),r&&Object.assign(e,r),[e]},U=function(t,r){var e={};return t&&Object.assign(e,t),r&&Object.assign(e,r),[e]},J=";",N=ke(";",!1),T=function(t,r,e,n){var u={};return u[e]=n,u},q=function(t,r,e){return e},G=function(t,r,e){var n={};return e.unshift(function(t,r){var e={};return e[t]=r,e}(t,r)),e.forEach(t=>{t&&Object.keys(t).forEach(r=>{t[r].forEach(t=>{"@type"===r&&void 0!==t["@id"]&&(t=t["@id"]),void 0===n[r]?n[r]=t:Array.isArray(n[r])?n[r].push(t):n[r]=[n[r],t];});});}),n},H=",",K=ke(",",!1),Q=function(t,r){return r},V=function(t,r){return r.unshift(t),r},W="a",Y=ke("a",!1),tt=function(){return "@type"},rt=function(t){return wn(t,!0)},et=function(t){return wn(t,!1)},nt=function(t){return "[]"===t?{}:{"@id":t}},ut=function(t){return {"@id":t}},st="[",at=ke("[",!1),ct="]",ot=ke("]",!1),ft="(",it=ke("(",!1),ht=")",lt=ke(")",!1),At=function(t){return {"@list":t}},pt=function(t,r){return {"@value":t,"@language":r}},dt="^^",gt=ke("^^",!1),vt=function(t,r){if("http://www.w3.org/2001/XMLSchema#boolean"===r&&"true"===t)return !0;if("http://www.w3.org/2001/XMLSchema#boolean"===r&&"false"===t)return !1;if("http://www.w3.org/2001/XMLSchema#integer"===r)return parseInt(t);if("http://www.w3.org/2001/XMLSchema#double"===r)return parseFloat(t);const e=vn.resolve(r,!0);if(e){const n=r.split(":")[0];if("http://www.w3.org/2001/XMLSchema#boolean"===e&&"true"===t)return vn.decrement(n),!0;if("http://www.w3.org/2001/XMLSchema#boolean"===e&&"false"===t)return vn.decrement(n),!1;if("http://www.w3.org/2001/XMLSchema#integer"===e)return vn.decrement(n),parseInt(t);if("http://www.w3.org/2001/XMLSchema#double"===e)return vn.decrement(n),parseFloat(t)}return {"@value":t,"@type":r}},wt="true",bt=ke("true",!1),Ct=function(){return !0},xt="false",Ft=ke("false",!1),yt=function(){return !1},mt=function(t){return t+":"},St="<",jt=ke("<",!1),Et=/^[^\0- <>"{}|\^`\\]/,It=Be([["\0"," "],"<",">",'"',"{","}","|","^","`","\\"],!0,!1),$t=">",Dt=ke(">",!1),Lt=function(t){const r=t.map(t=>65536<=t.codePointAt(0)&&t.codePointAt(0)<=983039?"a":1===t.length?t:6===t.length?String.fromCharCode("0x"+t.substring(2)):10===t.length?String.fromCodePoint("0x"+t.substring(2)):t).join("");if(r.match(/^[^\u0000-\u0020<>"{}|^`\\]*$/)){var e=t.join("");try{return vn.resolve(e)}catch(t){_e("Invalid IRIREF "+e);}}else _e("Invalid IRIREF "+t.join("")+" / "+r);},Mt=":",Rt=ke(":",!1),Xt=function(t){return t=t||"0",!1===vn.hasPrefix(t)&&_e("undefined prefix "+t),t},Ot=function(t){return t||""},Pt=function(t,r){return vn.increment(t),vn.resolve(t+":"+r)},zt="_:",Zt=ke("_:",!1),_t=/^[0-9]/,kt=Be([["0","9"]],!1,!1),Bt="@",Ut=ke("@",!1),Jt=/^[a-zA-Z]/,Nt=Be([["a","z"],["A","Z"]],!1,!1),Tt="-",qt=ke("-",!1),Gt=/^[a-zA-Z0-9]/,Ht=Be([["a","z"],["A","Z"],["0","9"]],!1,!1),Kt=function(t,r){return "-"+r.join("")},Qt=function(t,r){return t.join("")+r.join("")},Vt=/^[+\-]/,Wt=Be(["+","-"],!1,!1),Yt=function(t){return parseInt(t)},tr=function(t){return {"@value":t,"@type":"http://www.w3.org/2001/XMLSchema#decimal"}},rr=function(t){return {"@value":t,"@type":"http://www.w3.org/2001/XMLSchema#double"}},er=/^[eE]/,nr=Be(["e","E"],!1,!1),ur='"',sr=ke('"',!1),ar=/^[^"\\\n\r]/,cr=Be(['"',"\\","\n","\r"],!0,!1),or="'",fr=ke("'",!1),ir=/^[^'\\\n\r]/,hr=Be(["'","\\","\n","\r"],!0,!1),lr="'''",Ar=ke("'''",!1),pr=/^[^'\\]/,dr=Be(["'","\\"],!0,!1),gr="''",vr=ke("''",!1),wr=function(t,r){return "''"+r.join("")},br=function(t,r){return "'"+r.join("")},Cr=function(t,r){return t.join("")+r.join("")},xr='"""',Fr=ke('"""',!1),yr=/^[^"\\]/,mr=Be(['"',"\\"],!0,!1),Sr='""',jr=ke('""',!1),Er=function(t,r){return '""'+r.join("")},Ir=function(t,r){return '"'+r.join("")},$r="\\U",Dr=ke("\\U",!1),Lr=function(t){return String.fromCodePoint(parseInt(t.join(""),16))},Mr="\\u",Rr=ke("\\u",!1),Xr=function(t){return String.fromCharCode(parseInt(t.join(""),16))},Or="\\t",Pr=ke("\\t",!1),zr=function(){return "\t"},Zr="\\b",_r=ke("\\b",!1),kr=function(){return "\b"},Br="\\n",Ur=ke("\\n",!1),Jr=function(){return "\n"},Nr="\\r",Tr=ke("\\r",!1),qr=function(){return "\r"},Gr="\\f",Hr=ke("\\f",!1),Kr=function(){return "\f"},Qr='\\"',Vr=ke('\\"',!1),Wr=function(){return '"'},Yr="\\'",te=ke("\\'",!1),re=function(){return "'"},ee="\\\\",ne=ke("\\\\",!1),ue=function(){return "\\"},se=/^[ \t\r\n]/,ae=Be([" ","\t","\r","\n"],!1,!1),ce=function(){return "[]"},oe=/^[\uD800-\uDBFF]/,fe=Be([["\ud800","\udbff"]],!1,!1),ie=/^[\uDC00-\uDFFF]/,he=Be([["\udc00","\udfff"]],!1,!1),le=function(t,r){return t+r},Ae=/^[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,pe=Be([["A","Z"],["a","z"],["À","Ö"],["Ø","ö"],["ø","˿"],["Ͱ","ͽ"],["Ϳ","῿"],["‌","‍"],["⁰","↏"],["Ⰰ","⿯"],["、","퟿"],["豈","﷏"],["ﷰ","�"]],!1,!1),de="_",ge=ke("_",!1),ve="·",we=ke("·",!1),be=/^[\u0300-\u036F]/,Ce=Be([["̀","ͯ"]],!1,!1),xe=/^[\u203F-\u2040]/,Fe=Be([["‿","⁀"]],!1,!1),ye=function(t,r,e,n){return e.join("")+n.join("")},me=function(t,r,e){return t+r.join("")+e.join("")},Se="%",je=ke("%",!1),Ee=/^[0-9A-Fa-f]/,Ie=Be([["0","9"],["A","F"],["a","f"]],!1,!1),$e="\\",De=ke("\\",!1),Le=/^[_~.!$&'()*+,;=\/?#@%\-]/,Me=Be(["_","~",".","!","$","&","'","(",")","*","+",",",";","=","/","?","#","@","%","-"],!1,!1),Re=0,Xe=0,Oe=[{line:1,column:1}],Pe=0,ze=[];if("startRule"in r){if(!(r.startRule in u))throw new Error("Can't start parsing from rule \""+r.startRule+'".');s=u[r.startRule];}function _e(t,r){throw function(t,r){return new peg$SyntaxError(t,null,null,r)}(t,r=void 0!==r?r:Je(Xe,Re))}function ke(t,r){return {type:"literal",text:t,ignoreCase:r}}function Be(t,r,e){return {type:"class",parts:t,inverted:r,ignoreCase:e}}function Ue(r){var e,n=Oe[r];if(n)return n;for(e=r-1;!Oe[e];)e--;for(n={line:(n=Oe[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Oe[r]=n,n}function Je(t,r){var e=Ue(t),n=Ue(r);return {start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function Ne(t){Re<Pe||(Re>Pe&&(Pe=Re,ze=[]),ze.push(t));}function Te(t,r,e){return new peg$SyntaxError(peg$SyntaxError.buildMessage(t,r),t,r,e)}function qe(){var t,r,e,u;for(t=Re,r=[],e=Ge();e!==n;)r.push(e),e=Ge();if(r!==n){for(e=[],u=He();u!==n;)e.push(u),u=He();e!==n?(Xe=t,t=r=a(r)):(Re=t,t=n);}else Re=t,t=n;return t}function Ge(){var r,e,u,s;if((r=function(){var r;(r=function(){var r,e,u,s,a,f,i,h,l;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n)if(t.substr(Re,7)===v?(u=v,Re+=7):(u=n,Ne(w)),u!==n){for(s=[],a=He();a!==n;)s.push(a),a=He();if(s!==n)if((a=an())!==n){for(f=[],i=He();i!==n;)f.push(i),i=He();if(f!==n)if((i=un())!==n){for(h=[],l=He();l!==n;)h.push(l),l=He();h!==n?(46===t.charCodeAt(Re)?(l=c,Re++):(l=n,Ne(o)),l!==n?(Xe=r,e=b(a,i),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;return r}())===n&&(r=function(){var r,e,u,s,a,f,i;r=Re,e=[],u=He();for(;u!==n;)e.push(u),u=He();if(e!==n)if(t.substr(Re,5)===C?(u=C,Re+=5):(u=n,Ne(x)),u!==n){for(s=[],a=He();a!==n;)s.push(a),a=He();if(s!==n)if((a=un())!==n){for(f=[],i=He();i!==n;)f.push(i),i=He();f!==n?(46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o)),i!==n?(Xe=r,e=F(a),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;return r}())===n&&(r=function(){var r,e,u,s,a,c,o,f,i,h,l,A;r=Re,e=[],u=He();for(;u!==n;)e.push(u),u=He();if(e!==n)if(L.test(t.charAt(Re))?(u=t.charAt(Re),Re++):(u=n,Ne(M)),u!==n)if(R.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(X)),s!==n)if($.test(t.charAt(Re))?(a=t.charAt(Re),Re++):(a=n,Ne(D)),a!==n)if(O.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(P)),c!==n)if(z.test(t.charAt(Re))?(o=t.charAt(Re),Re++):(o=n,Ne(Z)),o!==n)if(_.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(k)),f!==n){for(i=[],h=He();h!==n;)i.push(h),h=He();if(i!==n)if((h=an())!==n){for(l=[],A=He();A!==n;)l.push(A),A=He();l!==n&&(A=un())!==n?(Xe=r,e=b(h,A),r=e):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;return r}())===n&&(r=function(){var r,e,u,s,a,c,o,f;r=Re,e=[],u=He();for(;u!==n;)e.push(u),u=He();if(e!==n)if(y.test(t.charAt(Re))?(u=t.charAt(Re),Re++):(u=n,Ne(m)),u!==n)if(S.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(j)),s!==n)if(E.test(t.charAt(Re))?(a=t.charAt(Re),Re++):(a=n,Ne(I)),a!==n)if($.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(D)),c!==n){for(o=[],f=He();f!==n;)o.push(f),f=He();o!==n&&(f=un())!==n?(Xe=r,e=F(f),r=e):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;return r}());return r}())===n)if(r=Re,(e=function(){var t,r,e;t=Re,(r=function(){var t,r;return t=Re,(r=tn())!==n&&(Xe=t,r=rt(r)),(t=r)===n&&(t=nn())===n&&(t=en()),t}())!==n&&(e=Ke())!==n?(Xe=t,r=B(r,e),t=r):(Re=t,t=n);t===n&&(t=Re,(r=Ye())!==n?((e=Ke())===n&&(e=null),e!==n?(Xe=t,r=U(r,e),t=r):(Re=t,t=n)):(Re=t,t=n));return t}())!==n){for(u=[],s=He();s!==n;)u.push(s),s=He();u!==n?(46===t.charCodeAt(Re)?(s=c,Re++):(s=n,Ne(o)),s!==n?(Xe=r,r=e=f(e)):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}function He(){var r;return (r=function(){var r;se.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(ae));return r}())===n&&(r=function(){var r,e,u,s;if(r=Re,35===t.charCodeAt(Re)?(e=i,Re++):(e=n,Ne(h)),e!==n){for(u=[],l.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(A));s!==n;)u.push(s),l.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(A));u!==n?(10===t.charCodeAt(Re)?(s=p,Re++):(s=n,Ne(d)),s!==n?(Xe=r,r=e=g(u)):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}()),r}function Ke(){var r,e,u,s,a,c,o,f,i,h;if(r=Re,(e=Ve())!==n)if((u=Qe())!==n){for(s=[],a=Re,c=[],o=He();o!==n;)c.push(o),o=He();for(c!==n?(59===t.charCodeAt(Re)?(o=J,Re++):(o=n,Ne(N)),o!==n?(f=Re,(i=Ve())!==n&&(h=Qe())!==n?(Xe=f,f=i=T(e,u,i,h)):(Re=f,f=n),f===n&&(f=null),f!==n?(Xe=a,a=c=q(e,u,f)):(Re=a,a=n)):(Re=a,a=n)):(Re=a,a=n);a!==n;){for(s.push(a),a=Re,c=[],o=He();o!==n;)c.push(o),o=He();c!==n?(59===t.charCodeAt(Re)?(o=J,Re++):(o=n,Ne(N)),o!==n?(f=Re,(i=Ve())!==n&&(h=Qe())!==n?(Xe=f,f=i=T(e,u,i,h)):(Re=f,f=n),f===n&&(f=null),f!==n?(Xe=a,a=c=q(e,u,f)):(Re=a,a=n)):(Re=a,a=n)):(Re=a,a=n);}s!==n?(Xe=r,r=e=G(e,u,s)):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;return r}function Qe(){var r,e,u,s,a,c,o;if(r=Re,(e=We())!==n){for(u=[],s=Re,a=[],c=He();c!==n;)a.push(c),c=He();for(a!==n?(44===t.charCodeAt(Re)?(c=H,Re++):(c=n,Ne(K)),c!==n&&(o=We())!==n?(Xe=s,s=a=Q(e,o)):(Re=s,s=n)):(Re=s,s=n);s!==n;){for(u.push(s),s=Re,a=[],c=He();c!==n;)a.push(c),c=He();a!==n?(44===t.charCodeAt(Re)?(c=H,Re++):(c=n,Ne(K)),c!==n&&(o=We())!==n?(Xe=s,s=a=Q(e,o)):(Re=s,s=n)):(Re=s,s=n);}u!==n?(Xe=r,r=e=V(e,u)):(Re=r,r=n);}else Re=r,r=n;return r}function Ve(){var r,e,u;if(r=Re,(e=function(){var t,r,e;t=Re,r=[],e=He();for(;e!==n;)r.push(e),e=He();r!==n&&(e=en())!==n?(Xe=t,r=f(e),t=r):(Re=t,t=n);return t}())!==n&&(Xe=r,e=f(e)),(r=e)===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();e!==n?(97===t.charCodeAt(Re)?(u=W,Re++):(u=n,Ne(Y)),u!==n?(Xe=r,r=e=tt()):(Re=r,r=n)):(Re=r,r=n);}return r}function We(){var r,e;return (r=function(){var r;(r=function(){var r,e,u,s,a,c,o;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n)if((u=rn())!==n){for(s=[],a=He();a!==n;)s.push(a),a=He();s!==n&&(a=function(){var r,e,u,s,a,c,o,f;if(r=Re,64===t.charCodeAt(Re)?(e=Bt,Re++):(e=n,Ne(Ut)),e!==n){if(u=[],Jt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Nt)),s!==n)for(;s!==n;)u.push(s),Jt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Nt));else u=n;if(u!==n){if(s=[],a=Re,45===t.charCodeAt(Re)?(c=Tt,Re++):(c=n,Ne(qt)),c!==n){if(o=[],Gt.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(Ht)),f!==n)for(;f!==n;)o.push(f),Gt.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(Ht));else o=n;o!==n?(Xe=a,c=Kt(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;for(;a!==n;)if(s.push(a),a=Re,45===t.charCodeAt(Re)?(c=Tt,Re++):(c=n,Ne(qt)),c!==n){if(o=[],Gt.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(Ht)),f!==n)for(;f!==n;)o.push(f),Gt.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(Ht));else o=n;o!==n?(Xe=a,c=Kt(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;s!==n?(Xe=r,e=Qt(u,s),r=e):(Re=r,r=n);}else Re=r,r=n;}else Re=r,r=n;return r}())!==n?(Xe=r,e=pt(u,a),r=e):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;if(r===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n)if((u=rn())!==n){for(s=[],a=He();a!==n;)s.push(a),a=He();if(s!==n)if(t.substr(Re,2)===dt?(a=dt,Re+=2):(a=n,Ne(gt)),a!==n){for(c=[],o=He();o!==n;)c.push(o),o=He();c!==n&&(o=en())!==n?(Xe=r,e=vt(u,o),r=e):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;if(r===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();e!==n&&(u=rn())!==n?(Xe=r,e=f(u),r=e):(Re=r,r=n);}}return r}())===n&&(r=function(){var r,e,u;r=Re,e=[],u=He();for(;u!==n;)e.push(u),u=He();e!==n?((u=function(){var r,e,u,s,a,f,i,h,l;r=Re,e=Re,u=Re,Vt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Wt));s===n&&(s=null);if(s!==n){if(a=Re,f=[],_t.test(t.charAt(Re))?(i=t.charAt(Re),Re++):(i=n,Ne(kt)),i!==n)for(;i!==n;)f.push(i),_t.test(t.charAt(Re))?(i=t.charAt(Re),Re++):(i=n,Ne(kt));else f=n;if(f!==n)if(46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o)),i!==n){for(h=[],_t.test(t.charAt(Re))?(l=t.charAt(Re),Re++):(l=n,Ne(kt));l!==n;)h.push(l),_t.test(t.charAt(Re))?(l=t.charAt(Re),Re++):(l=n,Ne(kt));h!==n&&(l=cn())!==n?a=f=[f,i,h,l]:(Re=a,a=n);}else Re=a,a=n;else Re=a,a=n;if(a===n){if(a=Re,46===t.charCodeAt(Re)?(f=c,Re++):(f=n,Ne(o)),f!==n){if(i=[],_t.test(t.charAt(Re))?(h=t.charAt(Re),Re++):(h=n,Ne(kt)),h!==n)for(;h!==n;)i.push(h),_t.test(t.charAt(Re))?(h=t.charAt(Re),Re++):(h=n,Ne(kt));else i=n;i!==n&&(h=cn())!==n?a=f=[f,i,h]:(Re=a,a=n);}else Re=a,a=n;if(a===n){if(a=Re,f=[],_t.test(t.charAt(Re))?(i=t.charAt(Re),Re++):(i=n,Ne(kt)),i!==n)for(;i!==n;)f.push(i),_t.test(t.charAt(Re))?(i=t.charAt(Re),Re++):(i=n,Ne(kt));else f=n;f!==n&&(i=cn())!==n?a=f=[f,i]:(Re=a,a=n);}}a!==n?u=s=[s,a]:(Re=u,u=n);}else Re=u,u=n;e=u!==n?t.substring(e,Re):u;e!==n&&(Xe=r,e=rr(e));return r=e}())===n&&(u=function(){var r,e,u,s,a,f,i,h;r=Re,e=Re,u=Re,Vt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Wt));s===n&&(s=null);if(s!==n){for(a=[],_t.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(kt));f!==n;)a.push(f),_t.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(kt));if(a!==n)if(46===t.charCodeAt(Re)?(f=c,Re++):(f=n,Ne(o)),f!==n){if(i=[],_t.test(t.charAt(Re))?(h=t.charAt(Re),Re++):(h=n,Ne(kt)),h!==n)for(;h!==n;)i.push(h),_t.test(t.charAt(Re))?(h=t.charAt(Re),Re++):(h=n,Ne(kt));else i=n;i!==n?u=s=[s,a,f,i]:(Re=u,u=n);}else Re=u,u=n;else Re=u,u=n;}else Re=u,u=n;e=u!==n?t.substring(e,Re):u;e!==n&&(Xe=r,e=tr(e));return r=e}())===n&&(u=function(){var r,e,u,s,a,c;r=Re,e=Re,u=Re,Vt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Wt));s===n&&(s=null);if(s!==n){if(a=[],_t.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(kt)),c!==n)for(;c!==n;)a.push(c),_t.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(kt));else a=n;a!==n?u=s=[s,a]:(Re=u,u=n);}else Re=u,u=n;e=u!==n?t.substring(e,Re):u;e!==n&&(Xe=r,e=Yt(e));return r=e}()),u!==n?(Xe=r,e=f(u),r=e):(Re=r,r=n)):(Re=r,r=n);return r}())===n&&(r=function(){var r,e,u;r=Re,e=[],u=He();for(;u!==n;)e.push(u),u=He();e!==n?(t.substr(Re,4)===wt?(u=wt,Re+=4):(u=n,Ne(bt)),u!==n?(Xe=r,e=Ct(),r=e):(Re=r,r=n)):(Re=r,r=n);if(r===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();e!==n?(t.substr(Re,5)===xt?(u=xt,Re+=5):(u=n,Ne(Ft)),u!==n?(Xe=r,e=yt(),r=e):(Re=r,r=n)):(Re=r,r=n);}return r}());return r}())===n&&(r=Re,(e=tn())!==n&&(Xe=r,e=et(e)),(r=e)===n&&(r=Re,(e=nn())!==n&&(Xe=r,e=nt(e)),(r=e)===n&&(r=Re,(e=Ye())!==n&&(Xe=r,e=f(e)),(r=e)===n&&(r=Re,(e=en())!==n&&(Xe=r,e=ut(e)),r=e)))),r}function Ye(){var r,e,u,s,a,c;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n)if(91===t.charCodeAt(Re)?(u=st,Re++):(u=n,Ne(at)),u!==n)if((s=Ke())!==n){for(a=[],c=He();c!==n;)a.push(c),c=He();a!==n?(93===t.charCodeAt(Re)?(c=ct,Re++):(c=n,Ne(ot)),c!==n?(Xe=r,r=e=f(s)):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;else Re=r,r=n;else Re=r,r=n;return r}function tn(){var r,e,u,s,a,c;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n)if(40===t.charCodeAt(Re)?(u=ft,Re++):(u=n,Ne(it)),u!==n){for(s=[],a=We();a!==n;)s.push(a),a=We();if(s!==n){for(a=[],c=He();c!==n;)a.push(c),c=He();a!==n?(41===t.charCodeAt(Re)?(c=ht,Re++):(c=n,Ne(lt)),c!==n?(Xe=r,r=e=At(s)):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;}else Re=r,r=n;else Re=r,r=n;return r}function rn(){var r,e,u;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();return e!==n?((u=function(){var r,e,u,s,a,c,o,f;r=Re,t.substr(Re,3)===lr?(e=lr,Re+=3):(e=n,Ne(Ar));if(e!==n){for(u=[],pr.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(dr)),s===n&&(s=fn())===n&&(s=on());s!==n;)u.push(s),pr.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(dr)),s===n&&(s=fn())===n&&(s=on());if(u!==n){if(s=[],a=Re,t.substr(Re,2)===gr?(c=gr,Re+=2):(c=n,Ne(vr)),c!==n){if(o=[],pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=wr(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;if(a===n)if(a=Re,39===t.charCodeAt(Re)?(c=or,Re++):(c=n,Ne(fr)),c!==n){if(o=[],pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=br(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;for(;a!==n;){if(s.push(a),a=Re,t.substr(Re,2)===gr?(c=gr,Re+=2):(c=n,Ne(vr)),c!==n){if(o=[],pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=wr(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;if(a===n)if(a=Re,39===t.charCodeAt(Re)?(c=or,Re++):(c=n,Ne(fr)),c!==n){if(o=[],pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),pr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(dr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=br(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;}s!==n?(t.substr(Re,3)===lr?(a=lr,Re+=3):(a=n,Ne(Ar)),a!==n?(Xe=r,e=Cr(u,s),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;}else Re=r,r=n;return r}())===n&&(u=function(){var r,e,u,s,a,c,o,f;r=Re,t.substr(Re,3)===xr?(e=xr,Re+=3):(e=n,Ne(Fr));if(e!==n){for(u=[],yr.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(mr)),s===n&&(s=fn())===n&&(s=on());s!==n;)u.push(s),yr.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(mr)),s===n&&(s=fn())===n&&(s=on());if(u!==n){if(s=[],a=Re,t.substr(Re,2)===Sr?(c=Sr,Re+=2):(c=n,Ne(jr)),c!==n){if(o=[],yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=Er(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;if(a===n)if(a=Re,34===t.charCodeAt(Re)?(c=ur,Re++):(c=n,Ne(sr)),c!==n){if(o=[],yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=Ir(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;for(;a!==n;){if(s.push(a),a=Re,t.substr(Re,2)===Sr?(c=Sr,Re+=2):(c=n,Ne(jr)),c!==n){if(o=[],yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=Er(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;if(a===n)if(a=Re,34===t.charCodeAt(Re)?(c=ur,Re++):(c=n,Ne(sr)),c!==n){if(o=[],yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on()),f!==n)for(;f!==n;)o.push(f),yr.test(t.charAt(Re))?(f=t.charAt(Re),Re++):(f=n,Ne(mr)),f===n&&(f=fn())===n&&(f=on());else o=n;o!==n?(Xe=a,c=Ir(u,o),a=c):(Re=a,a=n);}else Re=a,a=n;}s!==n?(t.substr(Re,3)===xr?(a=xr,Re+=3):(a=n,Ne(Fr)),a!==n?(Xe=r,e=Cr(u,s),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;}else Re=r,r=n;return r}())===n&&(u=function(){var r,e,u,s;r=Re,39===t.charCodeAt(Re)?(e=or,Re++):(e=n,Ne(fr));if(e!==n){for(u=[],ir.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(hr)),s===n&&(s=fn())===n&&(s=on());s!==n;)u.push(s),ir.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(hr)),s===n&&(s=fn())===n&&(s=on());u!==n?(39===t.charCodeAt(Re)?(s=or,Re++):(s=n,Ne(fr)),s!==n?(Xe=r,e=g(u),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}())===n&&(u=function(){var r,e,u,s;r=Re,34===t.charCodeAt(Re)?(e=ur,Re++):(e=n,Ne(sr));if(e!==n){for(u=[],ar.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(cr)),s===n&&(s=fn())===n&&(s=on());s!==n;)u.push(s),ar.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(cr)),s===n&&(s=fn())===n&&(s=on());u!==n?(34===t.charCodeAt(Re)?(s=ur,Re++):(s=n,Ne(sr)),s!==n?(Xe=r,e=g(u),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}()),u!==n?(Xe=r,r=e=f(u)):(Re=r,r=n)):(Re=r,r=n),r}function en(){var r,e,u;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n&&(u=un())!==n?(Xe=r,r=e=f(u)):(Re=r,r=n),r===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();e!==n&&(u=function(){var r,e;(r=function(){var r,e,u;return r=Re,(e=sn())!==n&&(u=function(){var r,e,u,s,a,f,i,h;if(r=Re,(e=ln())===n&&(58===t.charCodeAt(Re)?(e=Mt,Re++):(e=n,Ne(Rt)),e===n&&(_t.test(t.charAt(Re))?(e=t.charAt(Re),Re++):(e=n,Ne(kt)),e===n&&(e=dn()))),e!==n){for(u=[],(s=An())===n&&(58===t.charCodeAt(Re)?(s=Mt,Re++):(s=n,Ne(Rt)),s===n&&(s=dn()));s!==n;)u.push(s),(s=An())===n&&(58===t.charCodeAt(Re)?(s=Mt,Re++):(s=n,Ne(Rt)),s===n&&(s=dn()));if(u!==n){if(s=[],a=Re,f=[],46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o)),i!==n)for(;i!==n;)f.push(i),46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o));else f=n;if(f!==n){if(i=[],(h=An())===n&&(58===t.charCodeAt(Re)?(h=Mt,Re++):(h=n,Ne(Rt)),h===n&&(h=dn())),h!==n)for(;h!==n;)i.push(h),(h=An())===n&&(58===t.charCodeAt(Re)?(h=Mt,Re++):(h=n,Ne(Rt)),h===n&&(h=dn()));else i=n;i!==n?(Xe=a,f=ye(e,u,f,i),a=f):(Re=a,a=n);}else Re=a,a=n;for(;a!==n;){if(s.push(a),a=Re,f=[],46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o)),i!==n)for(;i!==n;)f.push(i),46===t.charCodeAt(Re)?(i=c,Re++):(i=n,Ne(o));else f=n;if(f!==n){if(i=[],(h=An())===n&&(58===t.charCodeAt(Re)?(h=Mt,Re++):(h=n,Ne(Rt)),h===n&&(h=dn())),h!==n)for(;h!==n;)i.push(h),(h=An())===n&&(58===t.charCodeAt(Re)?(h=Mt,Re++):(h=n,Ne(Rt)),h===n&&(h=dn()));else i=n;i!==n?(Xe=a,f=ye(e,u,f,i),a=f):(Re=a,a=n);}else Re=a,a=n;}s!==n?(Xe=r,e=me(e,u,s),r=e):(Re=r,r=n);}else Re=r,r=n;}else Re=r,r=n;return r}())!==n?(Xe=r,e=Pt(e,u),r=e):(Re=r,r=n),r}())===n&&(r=Re,(e=sn())!==n&&(Xe=r,e=mt(e)),r=e);return r}())!==n?(Xe=r,r=e=f(u)):(Re=r,r=n);}return r}function nn(){var r,e,u;for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();if(e!==n&&(u=function(){var r,e,u,s,a,f,i,h,l,A;r=Re,e=Re,t.substr(Re,2)===zt?(u=zt,Re+=2):(u=n,Ne(Zt));if(u!==n)if((s=ln())===n&&(_t.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(kt))),s!==n){for(a=[],f=An();f!==n;)a.push(f),f=An();if(a!==n){if(f=[],i=Re,h=[],46===t.charCodeAt(Re)?(l=c,Re++):(l=n,Ne(o)),l!==n)for(;l!==n;)h.push(l),46===t.charCodeAt(Re)?(l=c,Re++):(l=n,Ne(o));else h=n;if(h!==n){if(l=[],(A=An())!==n)for(;A!==n;)l.push(A),A=An();else l=n;l!==n?i=h=[h,l]:(Re=i,i=n);}else Re=i,i=n;for(;i!==n;){if(f.push(i),i=Re,h=[],46===t.charCodeAt(Re)?(l=c,Re++):(l=n,Ne(o)),l!==n)for(;l!==n;)h.push(l),46===t.charCodeAt(Re)?(l=c,Re++):(l=n,Ne(o));else h=n;if(h!==n){if(l=[],(A=An())!==n)for(;A!==n;)l.push(A),A=An();else l=n;l!==n?i=h=[h,l]:(Re=i,i=n);}else Re=i,i=n;}f!==n?e=u=[u,s,a,f]:(Re=e,e=n);}else Re=e,e=n;}else Re=e,e=n;else Re=e,e=n;r=e!==n?t.substring(r,Re):e;return r}())!==n?(Xe=r,r=e=f(u)):(Re=r,r=n),r===n){for(r=Re,e=[],u=He();u!==n;)e.push(u),u=He();e!==n&&(u=function(){var r,e,u,s;r=Re,91===t.charCodeAt(Re)?(e=st,Re++):(e=n,Ne(at));if(e!==n){for(u=[],s=He();s!==n;)u.push(s),s=He();u!==n?(93===t.charCodeAt(Re)?(s=ct,Re++):(s=n,Ne(ot)),s!==n?(Xe=r,e=ce(),r=e):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}())!==n?(Xe=r,r=e=f(u)):(Re=r,r=n);}return r}function un(){var r,e,u,s;if(r=Re,60===t.charCodeAt(Re)?(e=St,Re++):(e=n,Ne(jt)),e!==n){for(u=[],Et.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(It)),s===n&&(s=on());s!==n;)u.push(s),Et.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(It)),s===n&&(s=on());u!==n?(62===t.charCodeAt(Re)?(s=$t,Re++):(s=n,Ne(Dt)),s!==n?(Xe=r,r=e=Lt(u)):(Re=r,r=n)):(Re=r,r=n);}else Re=r,r=n;return r}function sn(){var r,e,u;return r=Re,(e=pn())===n&&(e=null),e!==n?(58===t.charCodeAt(Re)?(u=Mt,Re++):(u=n,Ne(Rt)),u!==n?(Xe=r,r=e=Xt(e)):(Re=r,r=n)):(Re=r,r=n),r}function an(){var r,e,u;return r=Re,(e=pn())===n&&(e=null),e!==n?(58===t.charCodeAt(Re)?(u=Mt,Re++):(u=n,Ne(Rt)),u!==n?(Xe=r,r=e=Ot(e)):(Re=r,r=n)):(Re=r,r=n),r}function cn(){var r,e,u,s,a,c;if(r=Re,e=Re,er.test(t.charAt(Re))?(u=t.charAt(Re),Re++):(u=n,Ne(nr)),u!==n)if(Vt.test(t.charAt(Re))?(s=t.charAt(Re),Re++):(s=n,Ne(Wt)),s===n&&(s=null),s!==n){if(a=[],_t.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(kt)),c!==n)for(;c!==n;)a.push(c),_t.test(t.charAt(Re))?(c=t.charAt(Re),Re++):(c=n,Ne(kt));else a=n;a!==n?e=u=[u,s,a]:(Re=e,e=n);}else Re=e,e=n;else Re=e,e=n;return r=e!==n?t.substring(r,Re):e}function on(){var r,e,u,s,a,c,o,f,i,h,l;return r=Re,t.substr(Re,2)===$r?(e=$r,Re+=2):(e=n,Ne(Dr)),e!==n?(u=Re,(s=gn())!==n&&(a=gn())!==n&&(c=gn())!==n&&(o=gn())!==n&&(f=gn())!==n&&(i=gn())!==n&&(h=gn())!==n&&(l=gn())!==n?u=s=[s,a,c,o,f,i,h,l]:(Re=u,u=n),u!==n?(Xe=r,r=e=Lr(u)):(Re=r,r=n)):(Re=r,r=n),r===n&&(r=Re,t.substr(Re,2)===Mr?(e=Mr,Re+=2):(e=n,Ne(Rr)),e!==n?(u=Re,(s=gn())!==n&&(a=gn())!==n&&(c=gn())!==n&&(o=gn())!==n?u=s=[s,a,c,o]:(Re=u,u=n),u!==n?(Xe=r,r=e=Xr(u)):(Re=r,r=n)):(Re=r,r=n)),r}function fn(){var r,e;return r=Re,t.substr(Re,2)===Or?(e=Or,Re+=2):(e=n,Ne(Pr)),e!==n&&(Xe=r,e=zr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Zr?(e=Zr,Re+=2):(e=n,Ne(_r)),e!==n&&(Xe=r,e=kr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Br?(e=Br,Re+=2):(e=n,Ne(Ur)),e!==n&&(Xe=r,e=Jr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Nr?(e=Nr,Re+=2):(e=n,Ne(Tr)),e!==n&&(Xe=r,e=qr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Gr?(e=Gr,Re+=2):(e=n,Ne(Hr)),e!==n&&(Xe=r,e=Kr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Qr?(e=Qr,Re+=2):(e=n,Ne(Vr)),e!==n&&(Xe=r,e=Wr()),(r=e)===n&&(r=Re,t.substr(Re,2)===Yr?(e=Yr,Re+=2):(e=n,Ne(te)),e!==n&&(Xe=r,e=re()),(r=e)===n&&(r=Re,t.substr(Re,2)===ee?(e=ee,Re+=2):(e=n,Ne(ne)),e!==n&&(Xe=r,e=ue()),r=e))))))),r}function hn(){var r,e,u;return r=Re,oe.test(t.charAt(Re))?(e=t.charAt(Re),Re++):(e=n,Ne(fe)),e!==n?(ie.test(t.charAt(Re))?(u=t.charAt(Re),Re++):(u=n,Ne(he)),u!==n?(Xe=r,r=e=le(e,u)):(Re=r,r=n)):(Re=r,r=n),r===n&&(Ae.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(pe))),r}function ln(){var r;return (r=hn())===n&&(95===t.charCodeAt(Re)?(r=de,Re++):(r=n,Ne(ge))),r}function An(){var r;return (r=ln())===n&&(45===t.charCodeAt(Re)?(r=Tt,Re++):(r=n,Ne(qt)),r===n&&(_t.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(kt)),r===n&&(183===t.charCodeAt(Re)?(r=ve,Re++):(r=n,Ne(we)),r===n&&(be.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(Ce)),r===n&&(xe.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(Fe))))))),r}function pn(){var r,e,u,s,a,f,i,h,l;if(r=Re,e=Re,(u=hn())!==n){for(s=[],a=An();a!==n;)s.push(a),a=An();if(s!==n){if(a=[],f=Re,i=[],46===t.charCodeAt(Re)?(h=c,Re++):(h=n,Ne(o)),h!==n)for(;h!==n;)i.push(h),46===t.charCodeAt(Re)?(h=c,Re++):(h=n,Ne(o));else i=n;if(i!==n){if(h=[],(l=An())!==n)for(;l!==n;)h.push(l),l=An();else h=n;h!==n?f=i=[i,h]:(Re=f,f=n);}else Re=f,f=n;for(;f!==n;){if(a.push(f),f=Re,i=[],46===t.charCodeAt(Re)?(h=c,Re++):(h=n,Ne(o)),h!==n)for(;h!==n;)i.push(h),46===t.charCodeAt(Re)?(h=c,Re++):(h=n,Ne(o));else i=n;if(i!==n){if(h=[],(l=An())!==n)for(;l!==n;)h.push(l),l=An();else h=n;h!==n?f=i=[i,h]:(Re=f,f=n);}else Re=f,f=n;}a!==n?e=u=[u,s,a]:(Re=e,e=n);}else Re=e,e=n;}else Re=e,e=n;return r=e!==n?t.substring(r,Re):e}function dn(){var r;return (r=function(){var r,e,u,s,a;r=Re,e=Re,37===t.charCodeAt(Re)?(u=Se,Re++):(u=n,Ne(je));u!==n&&(s=gn())!==n&&(a=gn())!==n?e=u=[u,s,a]:(Re=e,e=n);r=e!==n?t.substring(r,Re):e;return r}())===n&&(r=function(){var r,e,u;r=Re,92===t.charCodeAt(Re)?(e=$e,Re++):(e=n,Ne(De));e!==n?(Le.test(t.charAt(Re))?(u=t.charAt(Re),Re++):(u=n,Ne(Me)),u!==n?(Xe=r,e=f(u),r=e):(Re=r,r=n)):(Re=r,r=n);return r}()),r}function gn(){var r;return Ee.test(t.charAt(Re))?(r=t.charAt(Re),Re++):(r=n,Ne(Ie)),r}var vn={base:[],data:{},addBase:function(t){if(0===vn.base.length)return void vn.base.push(t);const r=vn.base[vn.base.length-1];r!==t&&vn.base.push(new URL(t,r).toString());},addPrefix:function(t,r){const e=vn.data[t];void 0===e?vn.data[t]=[{uri:r,count:0}]:e[e.length-1].uri!==r&&e.push({uri:r,count:0});},hasPrefix:function(t){return void 0!==this.data[t]},resolve:function(t,e){const n=Object.keys(vn.data).find(r=>0===t.indexOf(r+":"));if(void 0!==n){const r=vn.data[n];if(1===r.length&&!0!==e)return t;const u=r[r.length-1].uri;return t.replace(n+":",u)}var u=0===vn.base.length?r.baseIRI:vn.base[vn.base.length-1];return !u||t.match(/^(http:|https:|urn:|file:)/)?t:0===t.indexOf("//")&&u?u.split("//")[0]+t:new URL(t,u).toString()},increment:function(t){const r=vn.data[t];void 0!==r&&r[r.length-1].count++;},decrement:function(t){const r=vn.data[t];void 0!==r&&r[r.length-1].count--;},toJSON:function(){const t={};return vn.base.length>0&&(void 0===t["@context"]&&(t["@context"]={}),t["@context"]["@base"]=vn.base[0]),Object.keys(vn.data).forEach(r=>{const e=vn.data[r][0];"http://www.w3.org/2001/XMLSchema#"===e.uri&&e.count<1||(void 0===t["@context"]&&(t["@context"]={}),t["@context"][r]=e.uri);}),t}};function wn(t,r){if(void 0===t["@list"])return t;if(!r&&!t["@list"].find(t=>void 0!==t["@list"]))return t;if(0===t["@list"].length)return {"@id":"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"};var e={},n=null;return t["@list"].forEach(t=>{null===n?n=e:(n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"]={},n=n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"]),n["http://www.w3.org/1999/02/22-rdf-syntax-ns#first"]=wn(t,!0),n["http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"]={"@id":"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"};}),e}if((e=s())!==n&&Re===t.length)return e;throw e!==n&&Re<t.length&&Ne({type:"end"}),Te(ze,Pe<t.length?t.charAt(Pe):null,Pe<t.length?Je(Pe,Pe+1):Je(Pe,Pe))}peg$subclass(peg$SyntaxError,Error),peg$SyntaxError.buildMessage=function(t,r){var e={literal:function(t){return '"'+u(t.text)+'"'},class:function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?s(t.parts[r][0])+"-"+s(t.parts[r][1]):s(t.parts[r]);return "["+(t.inverted?"^":"")+e+"]"},any:function(t){return "any character"},end:function(t){return "end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return "\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return "\\x"+n(t)})}function s(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return "\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return "\\x"+n(t)})}return "Expected "+function(t){var r,n,u,s=new Array(t.length);for(r=0;r<t.length;r++)s[r]=(u=t[r],e[u.type](u));if(s.sort(),s.length>0){for(r=1,n=1;r<s.length;r++)s[r-1]!==s[r]&&(s[n]=s[r],n++);s.length=n;}switch(s.length){case 1:return s[0];case 2:return s[0]+" or "+s[1];default:return s.slice(0,-1).join(", ")+", or "+s[s.length-1]}}(t)+" but "+function(t){return t?'"'+u(t)+'"':"end of input"}(r)+" found."};const ttl2jsonld=peg$parse;

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t$1(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}});})),t}var n=class e{constructor(e,t=new Map,n=0){this.prefix=e,this._existing=t,this.counter=n;}clone(){const{prefix:t,_existing:n,counter:o}=this;return new e(t,new Map(n),o)}getId(e){const t=e&&this._existing.get(e);if(t)return t;const n=this.prefix+this.counter;return this.counter++,e&&this._existing.set(e,n),n}hasId(e){return this._existing.has(e)}getOldIds(){return [...this._existing.keys()]}};!function(e,t){if(!e.setImmediate){var n,o,r,a,i,s=1,l={},c=!1,d=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){h(e);}));}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1;},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){h(e.data);},n=function(e){r.port2.postMessage(e);}):d&&"onreadystatechange"in d.createElement("script")?(o=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null;},o.appendChild(t);}):n=function(e){setTimeout(h,0,e);}:(a="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length));},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(t){e.postMessage(a+t,"*");}),u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o+1];var r={callback:e,args:t};return l[s]=r,n(s),s++},u.clearImmediate=p;}function p(e){delete l[e];}function h(e){if(c)setTimeout(h,0,e);else {var t=l[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n);}}(t);}finally{p(e),c=!1;}}}}}("undefined"==typeof self?e:self);const o=self.crypto||self.msCrypto;var r=class{constructor(e){if(!o||!o.subtle)throw new Error("crypto.subtle not found.");if("sha256"===e)this.algorithm={name:"SHA-256"};else {if("sha1"!==e)throw new Error(`Unsupport algorithm "${e}".`);this.algorithm={name:"SHA-1"};}this._content="";}update(e){this._content+=e;}async digest(){const e=(new TextEncoder).encode(this._content),t=new Uint8Array(await o.subtle.digest(this.algorithm,e));let n="";for(let e=0;e<t.length;++e)n+=t[e].toString(16).padStart(2,"0");return n}},a=class{constructor(e){this.current=e.sort(),this.done=!1,this.dir=new Map;for(let t=0;t<e.length;++t)this.dir.set(e[t],!0);}hasNext(){return !this.done}next(){const{current:e,dir:t}=this,n=e.slice();let o=null,r=0;const a=e.length;for(let n=0;n<a;++n){const i=e[n],s=t.get(i);(null===o||i>o)&&(s&&n>0&&i>e[n-1]||!s&&n<a-1&&i>e[n+1])&&(o=i,r=n);}if(null===o)this.done=!0;else {const n=t.get(o)?r-1:r+1;e[r]=e[n],e[n]=o;for(const n of e)n>o&&t.set(n,!t.get(n));}return n}};const i="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",s="http://www.w3.org/2001/XMLSchema#string",l={eoln:/(?:\r\n)|(?:\n)|(?:\r)/g};l.empty=new RegExp("^[ \\t]*$"),l.quad=new RegExp('^[ \\t]*(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]+(?:<([^:]+:[^>]*)>)[ \\t]+(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?)|(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:(?:\\^\\^(?:<([^:]+:[^>]*)>))|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]*\\.))[ \\t]*$');var c=class e{static parse(e){const t=[],n={},o=e.split(l.eoln);let r=0;for(const e of o){if(r++,l.empty.test(e))continue;const o=e.match(l.quad);if(null===o)throw new Error("N-Quads parse error on line "+r+".");const a={subject:null,predicate:null,object:null,graph:null};if(void 0!==o[1]?a.subject={termType:"NamedNode",value:o[1]}:a.subject={termType:"BlankNode",value:o[2]},a.predicate={termType:"NamedNode",value:o[3]},void 0!==o[4]?a.object={termType:"NamedNode",value:o[4]}:void 0!==o[5]?a.object={termType:"BlankNode",value:o[5]}:(a.object={termType:"Literal",value:void 0,datatype:{termType:"NamedNode"}},void 0!==o[7]?a.object.datatype.value=o[7]:void 0!==o[8]?(a.object.datatype.value=i,a.object.language=o[8]):a.object.datatype.value=s,a.object.value=o[6].replace(p,(function(e,t,n,o){if(t)switch(t){case"t":return "\t";case"b":return "\b";case"n":return "\n";case"r":return "\r";case"f":return "\f";case'"':return '"';case"'":return "'";case"\\":return "\\"}if(n)return String.fromCharCode(parseInt(n,16));if(o)throw new Error("Unsupported U escape")}))),void 0!==o[9]?a.graph={termType:"NamedNode",value:o[9]}:void 0!==o[10]?a.graph={termType:"BlankNode",value:o[10]}:a.graph={termType:"DefaultGraph",value:""},a.graph.value in n){let e=!0;const o=n[a.graph.value];for(const t of o)if(d(t,a)){e=!1;break}e&&(o.push(a),t.push(a));}else n[a.graph.value]=[a],t.push(a);}return t}static serialize(t){Array.isArray(t)||(t=e.legacyDatasetToQuads(t));const n=[];for(const o of t)n.push(e.serializeQuad(o));return n.sort().join("")}static serializeQuad(e){const t=e.subject,n=e.predicate,o=e.object,r=e.graph;let a="";return "NamedNode"===t.termType?a+=`<${t.value}>`:a+=`${t.value}`,a+=` <${n.value}> `,"NamedNode"===o.termType?a+=`<${o.value}>`:"BlankNode"===o.termType?a+=o.value:(a+=`"${function(e){return e.replace(u,(function(e){switch(e){case'"':return '\\"';case"\\":return "\\\\";case"\n":return "\\n";case"\r":return "\\r"}}))}(o.value)}"`,o.datatype.value===i?o.language&&(a+=`@${o.language}`):o.datatype.value!==s&&(a+=`^^<${o.datatype.value}>`)),"NamedNode"===r.termType?a+=` <${r.value}>`:"BlankNode"===r.termType&&(a+=` ${r.value}`),a+=" .\n",a}static legacyDatasetToQuads(e){const t=[],n={"blank node":"BlankNode",IRI:"NamedNode",literal:"Literal"};for(const o in e){e[o].forEach((e=>{const r={};for(const t in e){const o=e[t],a={termType:n[o.type],value:o.value};"Literal"===a.termType&&(a.datatype={termType:"NamedNode"},"datatype"in o&&(a.datatype.value=o.datatype),"language"in o?("datatype"in o||(a.datatype.value=i),a.language=o.language):"datatype"in o||(a.datatype.value=s)),r[t]=a;}r.graph="@default"===o?{termType:"DefaultGraph",value:""}:{termType:o.startsWith("_:")?"BlankNode":"NamedNode",value:o},t.push(r);}));}return t}};function d(e,t){return e.subject.termType===t.subject.termType&&e.object.termType===t.object.termType&&(e.subject.value===t.subject.value&&e.predicate.value===t.predicate.value&&e.object.value===t.object.value&&("Literal"!==e.object.termType||e.object.datatype.termType===t.object.datatype.termType&&e.object.language===t.object.language&&e.object.datatype.value===t.object.datatype.value))}const u=/["\\\n\r]/g;const p=/(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;var h=class{constructor(){this.name="URDNA2015",this.blankNodeInfo=new Map,this.canonicalIssuer=new n("_:c14n"),this.hashAlgorithm="sha256",this.quads=null;}async main(e){this.quads=e;for(const t of e)this._addBlankNodeQuadInfo({quad:t,component:t.subject}),this._addBlankNodeQuadInfo({quad:t,component:t.object}),this._addBlankNodeQuadInfo({quad:t,component:t.graph});const t=new Map,o=[...this.blankNodeInfo.keys()];let r=0;for(const e of o)++r%100==0&&await this._yield(),await this._hashAndTrackBlankNode({id:e,hashToBlankNodes:t});const a=[...t.keys()].sort(),i=[];for(const e of a){const n=t.get(e);if(n.length>1){i.push(n);continue}const o=n[0];this.canonicalIssuer.getId(o);}for(const e of i){const t=[];for(const o of e){if(this.canonicalIssuer.hasId(o))continue;const e=new n("_:b");e.getId(o);const r=await this.hashNDegreeQuads(o,e);t.push(r);}t.sort(f);for(const e of t){const t=e.issuer.getOldIds();for(const e of t)this.canonicalIssuer.getId(e);}}const s=[];for(const e of this.quads){const t={...e};t.subject=this._useCanonicalId({component:t.subject}),t.object=this._useCanonicalId({component:t.object}),t.graph=this._useCanonicalId({component:t.graph}),s.push(c.serializeQuad(t));}return s.sort(),s.join("")}async hashFirstDegreeQuads(e){const t=[],n=this.blankNodeInfo.get(e),o=n.quads;for(const n of o){const o={subject:null,predicate:n.predicate,object:null,graph:null};o.subject=this.modifyFirstDegreeComponent(e,n.subject,"subject"),o.object=this.modifyFirstDegreeComponent(e,n.object,"object"),o.graph=this.modifyFirstDegreeComponent(e,n.graph,"graph"),t.push(c.serializeQuad(o));}t.sort();const a=new r(this.hashAlgorithm);for(const e of t)a.update(e);return n.hash=await a.digest(),n.hash}async hashRelatedBlankNode(e,t,n,o){let a;a=this.canonicalIssuer.hasId(e)?this.canonicalIssuer.getId(e):n.hasId(e)?n.getId(e):this.blankNodeInfo.get(e).hash;const i=new r(this.hashAlgorithm);return i.update(o),"g"!==o&&i.update(this.getRelatedPredicate(t)),i.update(a),i.digest()}async hashNDegreeQuads(e,t){const n=new r(this.hashAlgorithm),o=await this.createHashToRelated(e,t),i=[...o.keys()].sort();for(const e of i){n.update(e);let r,i="";const s=new a(o.get(e));let l=0;for(;s.hasNext();){const e=s.next();++l%3==0&&await this._yield();let n=t.clone(),o="";const a=[];let c=!1;for(const t of e)if(this.canonicalIssuer.hasId(t)?o+=this.canonicalIssuer.getId(t):(n.hasId(t)||a.push(t),o+=n.getId(t)),0!==i.length&&o>i){c=!0;break}if(!c){for(const e of a){const t=await this.hashNDegreeQuads(e,n);if(o+=n.getId(e),o+=`<${t.hash}>`,n=t.issuer,0!==i.length&&o>i){c=!0;break}}c||(0===i.length||o<i)&&(i=o,r=n);}}n.update(i),t=r;}return {hash:await n.digest(),issuer:t}}modifyFirstDegreeComponent(e,t){return "BlankNode"!==t.termType?t:{termType:"BlankNode",value:t.value===e?"_:a":"_:z"}}getRelatedPredicate(e){return `<${e.predicate.value}>`}async createHashToRelated(e,t){const n=new Map,o=this.blankNodeInfo.get(e).quads;let r=0;for(const a of o)++r%100==0&&await this._yield(),await Promise.all([this._addRelatedBlankNodeHash({quad:a,component:a.subject,position:"s",id:e,issuer:t,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:a,component:a.object,position:"o",id:e,issuer:t,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:a,component:a.graph,position:"g",id:e,issuer:t,hashToRelated:n})]);return n}async _hashAndTrackBlankNode({id:e,hashToBlankNodes:t}){const n=await this.hashFirstDegreeQuads(e),o=t.get(n);o?o.push(e):t.set(n,[e]);}_addBlankNodeQuadInfo({quad:e,component:t}){if("BlankNode"!==t.termType)return;const n=t.value,o=this.blankNodeInfo.get(n);o?o.quads.add(e):this.blankNodeInfo.set(n,{quads:new Set([e]),hash:null});}async _addRelatedBlankNodeHash({quad:e,component:t,position:n,id:o,issuer:r,hashToRelated:a}){if("BlankNode"!==t.termType||t.value===o)return;const i=t.value,s=await this.hashRelatedBlankNode(i,e,r,n),l=a.get(s);l?l.push(i):a.set(s,[i]);}_useCanonicalId({component:e}){return "BlankNode"!==e.termType||e.value.startsWith(this.canonicalIssuer.prefix)?e:{termType:"BlankNode",value:this.canonicalIssuer.getId(e.value)}}async _yield(){return new Promise((e=>setImmediate(e)))}};function f(e,t){return e.hash<t.hash?-1:e.hash>t.hash?1:0}var v=class extends h{constructor(){super(),this.name="URGNA2012",this.hashAlgorithm="sha1";}modifyFirstDegreeComponent(e,t,n){return "BlankNode"!==t.termType?t:"graph"===n?{termType:"BlankNode",value:"_:g"}:{termType:"BlankNode",value:t.value===e?"_:a":"_:z"}}getRelatedPredicate(e){return e.predicate.value}async createHashToRelated(e,t){const n=new Map,o=this.blankNodeInfo.get(e).quads;let r=0;for(const a of o){let o,i;if("BlankNode"===a.subject.termType&&a.subject.value!==e)i=a.subject.value,o="p";else {if("BlankNode"!==a.object.termType||a.object.value===e)continue;i=a.object.value,o="r";}++r%100==0&&await this._yield();const s=await this.hashRelatedBlankNode(i,a,t,o),l=n.get(s);l?l.push(i):n.set(s,[i]);}return n}},g=class{constructor(){this.name="URDNA2015",this.blankNodeInfo=new Map,this.canonicalIssuer=new n("_:c14n"),this.hashAlgorithm="sha256",this.quads=null;}main(e){this.quads=e;for(const t of e)this._addBlankNodeQuadInfo({quad:t,component:t.subject}),this._addBlankNodeQuadInfo({quad:t,component:t.object}),this._addBlankNodeQuadInfo({quad:t,component:t.graph});const t=new Map,o=[...this.blankNodeInfo.keys()];for(const e of o)this._hashAndTrackBlankNode({id:e,hashToBlankNodes:t});const r=[...t.keys()].sort(),a=[];for(const e of r){const n=t.get(e);if(n.length>1){a.push(n);continue}const o=n[0];this.canonicalIssuer.getId(o);}for(const e of a){const t=[];for(const o of e){if(this.canonicalIssuer.hasId(o))continue;const e=new n("_:b");e.getId(o);const r=this.hashNDegreeQuads(o,e);t.push(r);}t.sort(y);for(const e of t){const t=e.issuer.getOldIds();for(const e of t)this.canonicalIssuer.getId(e);}}const i=[];for(const e of this.quads){const t={...e};t.subject=this._useCanonicalId({component:t.subject}),t.object=this._useCanonicalId({component:t.object}),t.graph=this._useCanonicalId({component:t.graph}),i.push(c.serializeQuad(t));}return i.sort(),i.join("")}hashFirstDegreeQuads(e){const t=[],n=this.blankNodeInfo.get(e),o=n.quads;for(const n of o){const o={subject:null,predicate:n.predicate,object:null,graph:null};o.subject=this.modifyFirstDegreeComponent(e,n.subject,"subject"),o.object=this.modifyFirstDegreeComponent(e,n.object,"object"),o.graph=this.modifyFirstDegreeComponent(e,n.graph,"graph"),t.push(c.serializeQuad(o));}t.sort();const a=new r(this.hashAlgorithm);for(const e of t)a.update(e);return n.hash=a.digest(),n.hash}hashRelatedBlankNode(e,t,n,o){let a;a=this.canonicalIssuer.hasId(e)?this.canonicalIssuer.getId(e):n.hasId(e)?n.getId(e):this.blankNodeInfo.get(e).hash;const i=new r(this.hashAlgorithm);return i.update(o),"g"!==o&&i.update(this.getRelatedPredicate(t)),i.update(a),i.digest()}hashNDegreeQuads(e,t){const n=new r(this.hashAlgorithm),o=this.createHashToRelated(e,t),i=[...o.keys()].sort();for(const e of i){n.update(e);let r,i="";const s=new a(o.get(e));for(;s.hasNext();){const e=s.next();let n=t.clone(),o="";const a=[];let l=!1;for(const t of e)if(this.canonicalIssuer.hasId(t)?o+=this.canonicalIssuer.getId(t):(n.hasId(t)||a.push(t),o+=n.getId(t)),0!==i.length&&o>i){l=!0;break}if(!l){for(const e of a){const t=this.hashNDegreeQuads(e,n);if(o+=n.getId(e),o+=`<${t.hash}>`,n=t.issuer,0!==i.length&&o>i){l=!0;break}}l||(0===i.length||o<i)&&(i=o,r=n);}}n.update(i),t=r;}return {hash:n.digest(),issuer:t}}modifyFirstDegreeComponent(e,t){return "BlankNode"!==t.termType?t:{termType:"BlankNode",value:t.value===e?"_:a":"_:z"}}getRelatedPredicate(e){return `<${e.predicate.value}>`}createHashToRelated(e,t){const n=new Map,o=this.blankNodeInfo.get(e).quads;for(const r of o)this._addRelatedBlankNodeHash({quad:r,component:r.subject,position:"s",id:e,issuer:t,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:r,component:r.object,position:"o",id:e,issuer:t,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:r,component:r.graph,position:"g",id:e,issuer:t,hashToRelated:n});return n}_hashAndTrackBlankNode({id:e,hashToBlankNodes:t}){const n=this.hashFirstDegreeQuads(e),o=t.get(n);o?o.push(e):t.set(n,[e]);}_addBlankNodeQuadInfo({quad:e,component:t}){if("BlankNode"!==t.termType)return;const n=t.value,o=this.blankNodeInfo.get(n);o?o.quads.add(e):this.blankNodeInfo.set(n,{quads:new Set([e]),hash:null});}_addRelatedBlankNodeHash({quad:e,component:t,position:n,id:o,issuer:r,hashToRelated:a}){if("BlankNode"!==t.termType||t.value===o)return;const i=t.value,s=this.hashRelatedBlankNode(i,e,r,n),l=a.get(s);l?l.push(i):a.set(s,[i]);}_useCanonicalId({component:e}){return "BlankNode"!==e.termType||e.value.startsWith(this.canonicalIssuer.prefix)?e:{termType:"BlankNode",value:this.canonicalIssuer.getId(e.value)}}};function y(e,t){return e.hash<t.hash?-1:e.hash>t.hash?1:0}var m=class extends g{constructor(){super(),this.name="URGNA2012",this.hashAlgorithm="sha1";}modifyFirstDegreeComponent(e,t,n){return "BlankNode"!==t.termType?t:"graph"===n?{termType:"BlankNode",value:"_:g"}:{termType:"BlankNode",value:t.value===e?"_:a":"_:z"}}getRelatedPredicate(e){return e.predicate.value}createHashToRelated(e,t){const n=new Map,o=this.blankNodeInfo.get(e).quads;for(const r of o){let o,a;if("BlankNode"===r.subject.termType&&r.subject.value!==e)a=r.subject.value,o="p";else {if("BlankNode"!==r.object.termType||r.object.value===e)continue;a=r.object.value,o="r";}const i=this.hashRelatedBlankNode(a,r,t,o),s=n.get(i);s?s.push(a):n.set(i,[a]);}return n}},x=t$1(Object.freeze({__proto__:null,default:{}}));let b;try{b=x;}catch(e){}const w$1={};var j=w$1;w$1.NQuads=c,w$1.IdentifierIssuer=n,w$1._rdfCanonizeNative=function(e){return e&&(b=e),b},w$1.canonize=async function(e,t){if(Array.isArray(e)||(e=w$1.NQuads.legacyDatasetToQuads(e)),t.useNative){if(!b)throw new Error("rdf-canonize-native not available");return new Promise(((n,o)=>b.canonize(e,t,((e,t)=>e?o(e):n(t)))))}if("URDNA2015"===t.algorithm)return new h(t).main(e);if("URGNA2012"===t.algorithm)return new v(t).main(e);if(!("algorithm"in t))throw new Error("No RDF Dataset Canonicalization algorithm specified.");throw new Error("Invalid RDF Dataset Canonicalization algorithm: "+t.algorithm)},w$1._canonizeSync=function(e,t){if(Array.isArray(e)||(e=w$1.NQuads.legacyDatasetToQuads(e)),t.useNative){if(b)return b.canonizeSync(e,t);throw new Error("rdf-canonize-native not available")}if("URDNA2015"===t.algorithm)return new g(t).main(e);if("URGNA2012"===t.algorithm)return new m(t).main(e);if(!("algorithm"in t))throw new Error("No RDF Dataset Canonicalization algorithm specified.");throw new Error("Invalid RDF Dataset Canonicalization algorithm: "+t.algorithm)};const I={};var N=I;I.isArray=Array.isArray,I.isBoolean=e=>"boolean"==typeof e||"[object Boolean]"===Object.prototype.toString.call(e),I.isDouble=e=>I.isNumber(e)&&(-1!==String(e).indexOf(".")||Math.abs(e)>=1e21),I.isEmptyObject=e=>I.isObject(e)&&0===Object.keys(e).length,I.isNumber=e=>"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e),I.isNumeric=e=>!isNaN(parseFloat(e))&&isFinite(e),I.isObject=e=>"[object Object]"===Object.prototype.toString.call(e),I.isString=e=>"string"==typeof e||"[object String]"===Object.prototype.toString.call(e),I.isUndefined=e=>void 0===e;const S={};var O=S;S.isSubject=e=>{if(N.isObject(e)&&!("@value"in e||"@set"in e||"@list"in e)){return Object.keys(e).length>1||!("@id"in e)}return !1},S.isSubjectReference=e=>N.isObject(e)&&1===Object.keys(e).length&&"@id"in e,S.isValue=e=>N.isObject(e)&&"@value"in e,S.isList=e=>N.isObject(e)&&"@list"in e,S.isGraph=e=>N.isObject(e)&&"@graph"in e&&1===Object.keys(e).filter((e=>"@id"!==e&&"@index"!==e)).length,S.isSimpleGraph=e=>S.isGraph(e)&&!("@id"in e),S.isBlankNode=e=>!!N.isObject(e)&&("@id"in e?0===e["@id"].indexOf("_:"):0===Object.keys(e).length||!("@value"in e||"@set"in e||"@list"in e));var k=class extends Error{constructor(e="An unspecified JSON-LD error occurred.",t="jsonld.Error",n={}){super(e),this.name=t,this.message=e,this.details=n;}};const C=j.IdentifierIssuer,L=/(?:<[^>]*?>|"[^"]*?"|[^,])+/g,A=/\s*<([^>]*?)>\s*(?:;\s*(.*))?/,D=/(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g,T={accept:"application/ld+json, application/json"},R={};var E=R;function _(e,t){if(N.isArray(t))for(let n=0;n<t.length;++n)t[n]=_(e,t[n]);else if(O.isList(t))t["@list"]=_(e,t["@list"]);else if(N.isObject(t)){O.isBlankNode(t)&&(t["@id"]=e.getId(t["@id"]));const n=Object.keys(t).sort();for(let o=0;o<n.length;++o){const r=n[o];"@id"!==r&&(t[r]=_(e,t[r]));}}return t}R.IdentifierIssuer=C,R.clone=function(e){if(e&&"object"==typeof e){let t;if(N.isArray(e)){t=[];for(let n=0;n<e.length;++n)t[n]=R.clone(e[n]);}else if(e instanceof Map){t=new Map;for(const[n,o]of e)t.set(n,R.clone(o));}else if(e instanceof Set){t=new Set;for(const n of e)t.add(R.clone(n));}else if(N.isObject(e)){t={};for(const n in e)t[n]=R.clone(e[n]);}else t=e.toString();return t}return e},R.asArray=function(e){return Array.isArray(e)?e:[e]},R.buildHeaders=(e={})=>{if(Object.keys(e).some((e=>"accept"===e.toLowerCase())))throw new RangeError('Accept header may not be specified; only "'+T.accept+'" is supported.');return Object.assign({Accept:T.accept},e)},R.parseLinkHeader=e=>{const t={},n=e.match(L);for(let e=0;e<n.length;++e){let o=n[e].match(A);if(!o)continue;const r={target:o[1]},a=o[2];for(;o=D.exec(a);)r[o[1]]=void 0===o[2]?o[3]:o[2];const i=r.rel||"";Array.isArray(t[i])?t[i].push(r):t.hasOwnProperty(i)?t[i]=[t[i],r]:t[i]=r;}return t},R.validateTypeValue=(e,t)=>{if(!(N.isString(e)||N.isArray(e)&&e.every((e=>N.isString(e))))){if(t&&N.isObject(e))switch(Object.keys(e).length){case 0:return;case 1:if("@default"in e&&R.asArray(e["@default"]).every((e=>N.isString(e))))return}throw new k('Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',"jsonld.SyntaxError",{code:"invalid type value",value:e})}},R.hasProperty=(e,t)=>{if(e.hasOwnProperty(t)){const n=e[t];return !N.isArray(n)||n.length>0}return !1},R.hasValue=(e,t,n)=>{if(R.hasProperty(e,t)){let o=e[t];const r=O.isList(o);if(N.isArray(o)||r){r&&(o=o["@list"]);for(let e=0;e<o.length;++e)if(R.compareValues(n,o[e]))return !0}else if(!N.isArray(n))return R.compareValues(n,o)}return !1},R.addValue=(e,t,n,o)=>{if("propertyIsArray"in(o=o||{})||(o.propertyIsArray=!1),"valueIsArray"in o||(o.valueIsArray=!1),"allowDuplicate"in o||(o.allowDuplicate=!0),"prependValue"in o||(o.prependValue=!1),o.valueIsArray)e[t]=n;else if(N.isArray(n)){0===n.length&&o.propertyIsArray&&!e.hasOwnProperty(t)&&(e[t]=[]),o.prependValue&&(n=n.concat(e[t]),e[t]=[]);for(let r=0;r<n.length;++r)R.addValue(e,t,n[r],o);}else if(e.hasOwnProperty(t)){const r=!o.allowDuplicate&&R.hasValue(e,t,n);N.isArray(e[t])||r&&!o.propertyIsArray||(e[t]=[e[t]]),r||(o.prependValue?e[t].unshift(n):e[t].push(n));}else e[t]=o.propertyIsArray?[n]:n;},R.getValues=(e,t)=>[].concat(e[t]||[]),R.removeProperty=(e,t)=>{delete e[t];},R.removeValue=(e,t,n,o)=>{"propertyIsArray"in(o=o||{})||(o.propertyIsArray=!1);const r=R.getValues(e,t).filter((e=>!R.compareValues(e,n)));0===r.length?R.removeProperty(e,t):1!==r.length||o.propertyIsArray?e[t]=r:e[t]=r[0];},R.relabelBlankNodes=(e,t)=>_((t=t||{}).issuer||new C("_:b"),e),R.compareValues=(e,t)=>e===t||(!(!O.isValue(e)||!O.isValue(t)||e["@value"]!==t["@value"]||e["@type"]!==t["@type"]||e["@language"]!==t["@language"]||e["@index"]!==t["@index"])||!!(N.isObject(e)&&"@id"in e&&N.isObject(t)&&"@id"in t)&&e["@id"]===t["@id"]),R.compareShortestLeast=(e,t)=>e.length<t.length?-1:t.length<e.length?1:e===t?0:e<t?-1:1;const M={};var P=M;M.parsers={simple:{keys:["href","scheme","authority","path","query","fragment"],regex:/^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/},full:{keys:["href","protocol","scheme","authority","auth","user","password","hostname","port","path","directory","file","query","fragment"],regex:/^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/}},M.parse=(e,t)=>{const n={},o=M.parsers[t||"full"],r=o.regex.exec(e);let a=o.keys.length;for(;a--;)n[o.keys[a]]=void 0===r[a]?null:r[a];return ("https"===n.scheme&&"443"===n.port||"http"===n.scheme&&"80"===n.port)&&(n.href=n.href.replace(":"+n.port,""),n.authority=n.authority.replace(":"+n.port,""),n.port=null),n.normalizedPath=M.removeDotSegments(n.path),n},M.prependBase=(e,t)=>{if(null===e)return t;if(M.isAbsolute(t))return t;e&&!N.isString(e)||(e=M.parse(e||""));const n=M.parse(t),o={protocol:e.protocol||""};if(null!==n.authority)o.authority=n.authority,o.path=n.path,o.query=n.query;else if(o.authority=e.authority,""===n.path)o.path=e.path,null!==n.query?o.query=n.query:o.query=e.query;else {if(0===n.path.indexOf("/"))o.path=n.path;else {let t=e.path;t=t.substr(0,t.lastIndexOf("/")+1),(t.length>0||e.authority)&&"/"!==t.substr(-1)&&(t+="/"),t+=n.path,o.path=t;}o.query=n.query;}""!==n.path&&(o.path=M.removeDotSegments(o.path));let r=o.protocol;return null!==o.authority&&(r+="//"+o.authority),r+=o.path,null!==o.query&&(r+="?"+o.query),null!==n.fragment&&(r+="#"+n.fragment),""===r&&(r="./"),r},M.removeBase=(e,t)=>{if(null===e)return t;e&&!N.isString(e)||(e=M.parse(e||""));let n="";if(""!==e.href?n+=(e.protocol||"")+"//"+(e.authority||""):t.indexOf("//")&&(n+="//"),0!==t.indexOf(n))return t;const o=M.parse(t.substr(n.length)),r=e.normalizedPath.split("/"),a=o.normalizedPath.split("/"),i=o.fragment||o.query?0:1;for(;r.length>0&&a.length>i&&r[0]===a[0];)r.shift(),a.shift();let s="";if(r.length>0){r.pop();for(let e=0;e<r.length;++e)s+="../";}return s+=a.join("/"),null!==o.query&&(s+="?"+o.query),null!==o.fragment&&(s+="#"+o.fragment),""===s&&(s="./"),s},M.removeDotSegments=e=>{if(0===e.length)return "";const t=e.split("/"),n=[];for(;t.length>0;){const e=t.shift(),o=0===t.length;"."!==e?".."!==e?n.push(e):(n.pop(),o&&n.push("")):o&&n.push("");}return "/"===e[0]&&n.length>0&&""!==n[0]&&n.unshift(""),1===n.length&&""===n[0]?"/":n.join("/")};const J=/^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;M.isAbsolute=e=>N.isString(e)&&J.test(e),M.isRelative=e=>N.isString(e);var B=F;function F(e){var t=this;if(t instanceof F||(t=new F),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e);}));else if(arguments.length>0)for(var n=0,o=arguments.length;n<o;n++)t.push(arguments[n]);return t}function U(e,t,n){var o=t===e.head?new z(n,null,t,e):new z(n,t,t.next,e);return null===o.next&&(e.tail=o),null===o.prev&&(e.head=o),e.length++,o}function q(e,t){e.tail=new z(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++;}function V(e,t){e.head=new z(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++;}function z(e,t,n,o){if(!(this instanceof z))return new z(e,t,n,o);this.list=o,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null;}F.Node=z,F.create=F,F.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,n=e.prev;return t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null,t},F.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++;}},F.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++;}},F.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)q(this,arguments[e]);return this.length},F.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)V(this,arguments[e]);return this.length},F.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},F.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},F.prototype.forEach=function(e,t){t=t||this;for(var n=this.head,o=0;null!==n;o++)e.call(t,n.value,o,this),n=n.next;},F.prototype.forEachReverse=function(e,t){t=t||this;for(var n=this.tail,o=this.length-1;null!==n;o--)e.call(t,n.value,o,this),n=n.prev;},F.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)n=n.next;if(t===e&&null!==n)return n.value},F.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)n=n.prev;if(t===e&&null!==n)return n.value},F.prototype.map=function(e,t){t=t||this;for(var n=new F,o=this.head;null!==o;)n.push(e.call(t,o.value,this)),o=o.next;return n},F.prototype.mapReverse=function(e,t){t=t||this;for(var n=new F,o=this.tail;null!==o;)n.push(e.call(t,o.value,this)),o=o.prev;return n},F.prototype.reduce=function(e,t){var n,o=this.head;if(arguments.length>1)n=t;else {if(!this.head)throw new TypeError("Reduce of empty list with no initial value");o=this.head.next,n=this.head.value;}for(var r=0;null!==o;r++)n=e(n,o.value,r),o=o.next;return n},F.prototype.reduceReverse=function(e,t){var n,o=this.tail;if(arguments.length>1)n=t;else {if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");o=this.tail.prev,n=this.tail.value;}for(var r=this.length-1;null!==o;r--)n=e(n,o.value,r),o=o.prev;return n},F.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next;return e},F.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev;return e},F.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new F;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=0,r=this.head;null!==r&&o<e;o++)r=r.next;for(;null!==r&&o<t;o++,r=r.next)n.push(r.value);return n},F.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new F;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=this.length,r=this.tail;null!==r&&o>t;o--)r=r.prev;for(;null!==r&&o>e;o--,r=r.prev)n.push(r.value);return n},F.prototype.splice=function(e,t){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var n=0,o=this.head;null!==o&&n<e;n++)o=o.next;var r=[];for(n=0;o&&n<t;n++)r.push(o.value),o=this.removeNode(o);null===o&&(o=this.tail),o!==this.head&&o!==this.tail&&(o=o.prev);for(n=2;n<arguments.length;n++)o=U(this,o,arguments[n]);return r},F.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var o=n.prev;n.prev=n.next,n.next=o;}return this.head=t,this.tail=e,this};try{!function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value;};}(F);}catch(e){}const $=Symbol("max"),G=Symbol("length"),H=Symbol("lengthCalculator"),Q=Symbol("allowStale"),K=Symbol("maxAge"),X=Symbol("dispose"),Z=Symbol("noDisposeOnSet"),W=Symbol("lruList"),Y=Symbol("cache"),ee=Symbol("updateAgeOnGet"),te=()=>1;const ne=(e,t,n)=>{const o=e[Y].get(t);if(o){const t=o.value;if(oe(e,t)){if(ae(e,o),!e[Q])return}else n&&(e[ee]&&(o.value.now=Date.now()),e[W].unshiftNode(o));return t.value}},oe=(e,t)=>{if(!t||!t.maxAge&&!e[K])return !1;const n=Date.now()-t.now;return t.maxAge?n>t.maxAge:e[K]&&n>e[K]},re=e=>{if(e[G]>e[$])for(let t=e[W].tail;e[G]>e[$]&&null!==t;){const n=t.prev;ae(e,t),t=n;}},ae=(e,t)=>{if(t){const n=t.value;e[X]&&e[X](n.key,n.value),e[G]-=n.length,e[Y].delete(n.key),e[W].removeNode(t);}};class ie{constructor(e,t,n,o,r){this.key=e,this.value=t,this.length=n,this.now=o,this.maxAge=r||0;}}const se=(e,t,n,o)=>{let r=n.value;oe(e,r)&&(ae(e,n),e[Q]||(r=void 0)),r&&t.call(o,r.value,r.key,e);};var le=class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[$]=e.max||1/0;const t=e.length||te;if(this[H]="function"!=typeof t?te:t,this[Q]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[K]=e.maxAge||0,this[X]=e.dispose,this[Z]=e.noDisposeOnSet||!1,this[ee]=e.updateAgeOnGet||!1,this.reset();}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[$]=e||1/0,re(this);}get max(){return this[$]}set allowStale(e){this[Q]=!!e;}get allowStale(){return this[Q]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[K]=e,re(this);}get maxAge(){return this[K]}set lengthCalculator(e){"function"!=typeof e&&(e=te),e!==this[H]&&(this[H]=e,this[G]=0,this[W].forEach((e=>{e.length=this[H](e.value,e.key),this[G]+=e.length;}))),re(this);}get lengthCalculator(){return this[H]}get length(){return this[G]}get itemCount(){return this[W].length}rforEach(e,t){t=t||this;for(let n=this[W].tail;null!==n;){const o=n.prev;se(this,e,n,t),n=o;}}forEach(e,t){t=t||this;for(let n=this[W].head;null!==n;){const o=n.next;se(this,e,n,t),n=o;}}keys(){return this[W].toArray().map((e=>e.key))}values(){return this[W].toArray().map((e=>e.value))}reset(){this[X]&&this[W]&&this[W].length&&this[W].forEach((e=>this[X](e.key,e.value))),this[Y]=new Map,this[W]=new B,this[G]=0;}dump(){return this[W].map((e=>!oe(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[W]}set(e,t,n){if((n=n||this[K])&&"number"!=typeof n)throw new TypeError("maxAge must be a number");const o=n?Date.now():0,r=this[H](t,e);if(this[Y].has(e)){if(r>this[$])return ae(this,this[Y].get(e)),!1;const a=this[Y].get(e).value;return this[X]&&(this[Z]||this[X](e,a.value)),a.now=o,a.maxAge=n,a.value=t,this[G]+=r-a.length,a.length=r,this.get(e),re(this),!0}const a=new ie(e,t,r,o,n);return a.length>this[$]?(this[X]&&this[X](e,t),!1):(this[G]+=a.length,this[W].unshift(a),this[Y].set(e,this[W].head),re(this),!0)}has(e){if(!this[Y].has(e))return !1;const t=this[Y].get(e).value;return !oe(this,t)}get(e){return ne(this,e,!0)}peek(e){return ne(this,e,!1)}pop(){const e=this[W].tail;return e?(ae(this,e),e.value):null}del(e){ae(this,this[Y].get(e));}load(e){this.reset();const t=Date.now();for(let n=e.length-1;n>=0;n--){const o=e[n],r=o.e||0;if(0===r)this.set(o.k,o.v);else {const e=r-t;e>0&&this.set(o.k,o.v,e);}}}prune(){this[Y].forEach(((e,t)=>ne(this,t,!1)));}};var ce=class{constructor({document:e}){this.document=e,this.cache=new le({max:10});}getProcessed(e){return this.cache.get(e)}setProcessed(e,t){this.cache.set(e,t);}};const{isArray:de,isObject:ue,isString:pe}=N,{asArray:he}=E,{prependBase:fe}=P;var ve=class{constructor({sharedCache:e}){this.perOpCache=new Map,this.sharedCache=e;}async resolve({activeCtx:e,context:t,documentLoader:n,base:o,cycles:r=new Set}){t&&ue(t)&&t["@context"]&&(t=t["@context"]),t=he(t);const a=[];for(const i of t){if(pe(i)){let t=this._get(i);t||(t=await this._resolveRemoteContext({activeCtx:e,url:i,documentLoader:n,base:o,cycles:r})),de(t)?a.push(...t):a.push(t);continue}if(null===i){a.push(new ce({document:null}));continue}ue(i)||ge(t);const s=JSON.stringify(i);let l=this._get(s);l||(l=new ce({document:i}),this._cacheResolvedContext({key:s,resolved:l,tag:"static"})),a.push(l);}return a}_get(e){let t=this.perOpCache.get(e);if(!t){const n=this.sharedCache.get(e);n&&(t=n.get("static"),t&&this.perOpCache.set(e,t));}return t}_cacheResolvedContext({key:e,resolved:t,tag:n}){if(this.perOpCache.set(e,t),void 0!==n){let o=this.sharedCache.get(e);o||(o=new Map,this.sharedCache.set(e,o)),o.set(n,t);}return t}async _resolveRemoteContext({activeCtx:e,url:t,documentLoader:n,base:o,cycles:r}){t=fe(o,t);const{context:a,remoteDoc:i}=await this._fetchContext({activeCtx:e,url:t,documentLoader:n,cycles:r});ye({context:a,base:o=i.documentUrl||t});const s=await this.resolve({activeCtx:e,context:a,documentLoader:n,base:o,cycles:r});return this._cacheResolvedContext({key:t,resolved:s,tag:i.tag}),s}async _fetchContext({activeCtx:e,url:t,documentLoader:n,cycles:o}){if(o.size>10)throw new k("Maximum number of @context URLs exceeded.","jsonld.ContextUrlError",{code:"json-ld-1.0"===e.processingMode?"loading remote context failed":"context overflow",max:10});if(o.has(t))throw new k("Cyclical @context URLs detected.","jsonld.ContextUrlError",{code:"json-ld-1.0"===e.processingMode?"recursive context inclusion":"context overflow",url:t});let r,a;o.add(t);try{a=await n(t),r=a.document||null,pe(r)&&(r=JSON.parse(r));}catch(e){throw new k("Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.","jsonld.InvalidUrl",{code:"loading remote context failed",url:t,cause:e})}if(!ue(r))throw new k("Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.","jsonld.InvalidUrl",{code:"invalid remote context",url:t});return r="@context"in r?{"@context":r["@context"]}:{"@context":{}},a.contextUrl&&(de(r["@context"])||(r["@context"]=[r["@context"]]),r["@context"].push(a.contextUrl)),{context:r,remoteDoc:a}}};function ge(e){throw new k("Invalid JSON-LD syntax; @context must be an object.","jsonld.SyntaxError",{code:"invalid local context",context:e})}function ye({context:e,base:t}){if(!e)return;const n=e["@context"];if(pe(n))e["@context"]=fe(t,n);else if(de(n))for(let e=0;e<n.length;++e){const o=n[e];pe(o)?n[e]=fe(t,o):ue(o)&&ye({context:{"@context":o},base:t});}else if(ue(n))for(const e in n)ye({context:n[e],base:t});}var me=j.NQuads;const{isArray:xe,isObject:be,isString:we,isUndefined:je}=N,{isAbsolute:Ie,isRelative:Ne,prependBase:Se}=P,{asArray:Oe,compareShortestLeast:ke}=E,Ce=new Map,Le=/^@[a-zA-Z]+$/,Ae={};var De=Ae;function Te(e,t,n,o,r,a){if(null===t||!we(t)||Ae.isKeyword(t))return t;if(t.match(Le))return null;if(o&&o.hasOwnProperty(t)&&!0!==r.get(t)&&Ae.createTermDefinition({activeCtx:e,localCtx:o,term:t,defined:r,options:a}),(n=n||{}).vocab){const n=e.mappings.get(t);if(null===n)return null;if(be(n)&&"@id"in n)return n["@id"]}const i=t.indexOf(":");if(i>0){const n=t.substr(0,i),s=t.substr(i+1);if("_"===n||0===s.indexOf("//"))return t;o&&o.hasOwnProperty(n)&&Ae.createTermDefinition({activeCtx:e,localCtx:o,term:n,defined:r,options:a});const l=e.mappings.get(n);if(l&&l._prefix)return l["@id"]+s;if(Ie(t))return t}if(n.vocab&&"@vocab"in e)return e["@vocab"]+t;if(n.base&&"@base"in e){if(e["@base"])return Se(Se(a.base,e["@base"]),t)}else if(n.base)return Se(a.base,t);return t}function Re(e,t){if(!e||"object"!=typeof e||!t||"object"!=typeof t)return e===t;const n=Array.isArray(e);if(n!==Array.isArray(t))return !1;if(n){if(e.length!==t.length)return !1;for(let n=0;n<e.length;++n)if(!Re(e[n],t[n]))return !1;return !0}const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return !1;for(const n in e){let o=e[n],r=t[n];if("@container"===n&&Array.isArray(o)&&Array.isArray(r)&&(o=o.slice().sort(),r=r.slice().sort()),!Re(o,r))return !1}return !0}Ae.process=async({activeCtx:e,localCtx:t,options:n,propagate:o=!0,overrideProtected:r=!1,cycles:a=new Set})=>{be(t)&&"@context"in t&&xe(t["@context"])&&(t=t["@context"]);if(0===Oe(t).length)return e;const i=await n.contextResolver.resolve({activeCtx:e,context:t,documentLoader:n.documentLoader,base:n.base});be(i[0].document)&&"boolean"==typeof i[0].document["@propagate"]&&(o=i[0].document["@propagate"]);let s=e;o||s.previousContext||(s=s.clone(),s.previousContext=e);for(const o of i){let{document:i}=o;if(e=s,null===i){if(!r&&0!==Object.keys(e.protected).length){const r=n&&n.protectedMode||"error";if("error"===r)throw new k("Tried to nullify a context with protected terms outside of a term definition.","jsonld.SyntaxError",{code:"invalid context nullification"});if("warn"===r){console.warn("WARNING: invalid context nullification");const t=o.getProcessed(e);if(t){s=e=t;continue}const r=e;s=e=Ae.getInitialContext(n).clone();for(const[t,n]of Object.entries(r.protected))n&&(e.mappings[t]=E.clone(r.mappings[t]));e.protected=E.clone(r.protected),o.setProcessed(r,s);continue}throw new k("Invalid protectedMode.","jsonld.SyntaxError",{code:"invalid protected mode",context:t,protectedMode:r})}s=e=Ae.getInitialContext(n).clone();continue}const l=o.getProcessed(e);if(l){s=e=l;continue}if(be(i)&&"@context"in i&&(i=i["@context"]),!be(i))throw new k("Invalid JSON-LD syntax; @context must be an object.","jsonld.SyntaxError",{code:"invalid local context",context:i});s=s.clone();const c=new Map;if("@version"in i){if(1.1!==i["@version"])throw new k("Unsupported JSON-LD version: "+i["@version"],"jsonld.UnsupportedVersion",{code:"invalid @version value",context:i});if(e.processingMode&&"json-ld-1.0"===e.processingMode)throw new k("@version: "+i["@version"]+" not compatible with "+e.processingMode,"jsonld.ProcessingModeConflict",{code:"processing mode conflict",context:i});s.processingMode="json-ld-1.1",s["@version"]=i["@version"],c.set("@version",!0);}if(s.processingMode=s.processingMode||e.processingMode,"@base"in i){let e=i["@base"];if(null===e||Ie(e));else {if(!Ne(e))throw new k('Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',"jsonld.SyntaxError",{code:"invalid base IRI",context:i});e=Se(s["@base"],e);}s["@base"]=e,c.set("@base",!0);}if("@vocab"in i){const e=i["@vocab"];if(null===e)delete s["@vocab"];else {if(!we(e))throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',"jsonld.SyntaxError",{code:"invalid vocab mapping",context:i});if(!Ie(e)&&Ae.processingMode(s,1))throw new k('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',"jsonld.SyntaxError",{code:"invalid vocab mapping",context:i});s["@vocab"]=Te(s,e,{vocab:!0,base:!0},void 0,void 0,n);}c.set("@vocab",!0);}if("@language"in i){const e=i["@language"];if(null===e)delete s["@language"];else {if(!we(e))throw new k('Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',"jsonld.SyntaxError",{code:"invalid default language",context:i});s["@language"]=e.toLowerCase();}c.set("@language",!0);}if("@direction"in i){const t=i["@direction"];if("json-ld-1.0"===e.processingMode)throw new k("Invalid JSON-LD syntax; @direction not compatible with "+e.processingMode,"jsonld.SyntaxError",{code:"invalid context member",context:i});if(null===t)delete s["@direction"];else {if("ltr"!==t&&"rtl"!==t)throw new k('Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',"jsonld.SyntaxError",{code:"invalid base direction",context:i});s["@direction"]=t;}c.set("@direction",!0);}if("@propagate"in i){const n=i["@propagate"];if("json-ld-1.0"===e.processingMode)throw new k("Invalid JSON-LD syntax; @propagate not compatible with "+e.processingMode,"jsonld.SyntaxError",{code:"invalid context entry",context:i});if("boolean"!=typeof n)throw new k("Invalid JSON-LD syntax; @propagate value must be a boolean.","jsonld.SyntaxError",{code:"invalid @propagate value",context:t});c.set("@propagate",!0);}if("@import"in i){const o=i["@import"];if("json-ld-1.0"===e.processingMode)throw new k("Invalid JSON-LD syntax; @import not compatible with "+e.processingMode,"jsonld.SyntaxError",{code:"invalid context entry",context:i});if(!we(o))throw new k("Invalid JSON-LD syntax; @import must be a string.","jsonld.SyntaxError",{code:"invalid @import value",context:t});const r=await n.contextResolver.resolve({activeCtx:e,context:o,documentLoader:n.documentLoader,base:n.base});if(1!==r.length)throw new k("Invalid JSON-LD syntax; @import must reference a single context.","jsonld.SyntaxError",{code:"invalid remote context",context:t});const a=r[0].getProcessed(e);if(a)i=a;else {const n=r[0].document;if("@import"in n)throw new k("Invalid JSON-LD syntax: imported context must not include @import.","jsonld.SyntaxError",{code:"invalid context entry",context:t});for(const e in n)i.hasOwnProperty(e)||(i[e]=n[e]);r[0].setProcessed(e,i);}c.set("@import",!0);}c.set("@protected",i["@protected"]||!1);for(const e in i)if(Ae.createTermDefinition({activeCtx:s,localCtx:i,term:e,defined:c,options:n,overrideProtected:r}),be(i[e])&&"@context"in i[e]){const t=i[e]["@context"];let o=!0;if(we(t)){const e=Se(n.base,t);a.has(e)?o=!1:a.add(e);}if(o)try{await Ae.process({activeCtx:s.clone(),localCtx:i[e]["@context"],overrideProtected:!0,options:n,cycles:a});}catch(t){throw new k("Invalid JSON-LD syntax; invalid scoped context.","jsonld.SyntaxError",{code:"invalid scoped context",context:i[e]["@context"],term:e})}}o.setProcessed(e,s);}return s},Ae.createTermDefinition=({activeCtx:e,localCtx:t,term:n,defined:o,options:r,overrideProtected:a=!1})=>{if(o.has(n)){if(o.get(n))return;throw new k("Cyclical context definition detected.","jsonld.CyclicalContext",{code:"cyclic IRI mapping",context:t,term:n})}let i;if(o.set(n,!1),t.hasOwnProperty(n)&&(i=t[n]),"@type"===n&&be(i)&&"@set"===(i["@container"]||"@set")&&Ae.processingMode(e,1.1)){const e=["@container","@id","@protected"],o=Object.keys(i);if(0===o.length||o.some((t=>!e.includes(t))))throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.","jsonld.SyntaxError",{code:"keyword redefinition",context:t,term:n})}else {if(Ae.isKeyword(n))throw new k("Invalid JSON-LD syntax; keywords cannot be overridden.","jsonld.SyntaxError",{code:"keyword redefinition",context:t,term:n});if(n.match(Le))return void console.warn('WARNING: terms beginning with "@" are reserved for future use and ignored',{term:n});if(""===n)throw new k("Invalid JSON-LD syntax; a term cannot be an empty string.","jsonld.SyntaxError",{code:"invalid term definition",context:t})}const s=e.mappings.get(n);e.mappings.has(n)&&e.mappings.delete(n);let l=!1;if((we(i)||null===i)&&(l=!0,i={"@id":i}),!be(i))throw new k("Invalid JSON-LD syntax; @context term values must be strings or objects.","jsonld.SyntaxError",{code:"invalid term definition",context:t});const c={};e.mappings.set(n,c),c.reverse=!1;const d=["@container","@id","@language","@reverse","@type"];Ae.processingMode(e,1.1)&&d.push("@context","@direction","@index","@nest","@prefix","@protected");for(const e in i)if(!d.includes(e))throw new k("Invalid JSON-LD syntax; a term definition must not contain "+e,"jsonld.SyntaxError",{code:"invalid term definition",context:t});const u=n.indexOf(":");if(c._termHasColon=u>0,"@reverse"in i){if("@id"in i)throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.","jsonld.SyntaxError",{code:"invalid reverse property",context:t});if("@nest"in i)throw new k("Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.","jsonld.SyntaxError",{code:"invalid reverse property",context:t});const a=i["@reverse"];if(!we(a))throw new k("Invalid JSON-LD syntax; a @context @reverse value must be a string.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t});if(!Ae.isKeyword(a)&&a.match(Le))return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored',{reverse:a}),void(s?e.mappings.set(n,s):e.mappings.delete(n));const l=Te(e,a,{vocab:!0,base:!1},t,o,r);if(!Ie(l))throw new k("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t});c["@id"]=l,c.reverse=!0;}else if("@id"in i){let a=i["@id"];if(a&&!we(a))throw new k("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t});if(null===a)c["@id"]=null;else {if(!Ae.isKeyword(a)&&a.match(Le))return console.warn('WARNING: values beginning with "@" are reserved for future use and ignored',{id:a}),void(s?e.mappings.set(n,s):e.mappings.delete(n));if(a!==n){if(a=Te(e,a,{vocab:!0,base:!1},t,o,r),!Ie(a)&&!Ae.isKeyword(a))throw new k("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t});if(n.match(/(?::[^:])|\//)){if(Te(e,n,{vocab:!0,base:!1},t,new Map(o).set(n,!0),r)!==a)throw new k("Invalid JSON-LD syntax; term in form of IRI must expand to definition.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t})}c["@id"]=a,c._prefix=l&&!c._termHasColon&&a.match(/[:\/\?#\[\]@]$/);}}}if(!("@id"in c))if(c._termHasColon){const a=n.substr(0,u);if(t.hasOwnProperty(a)&&Ae.createTermDefinition({activeCtx:e,localCtx:t,term:a,defined:o,options:r}),e.mappings.has(a)){const t=n.substr(u+1);c["@id"]=e.mappings.get(a)["@id"]+t;}else c["@id"]=n;}else if("@type"===n)c["@id"]=n;else {if(!("@vocab"in e))throw new k("Invalid JSON-LD syntax; @context terms must define an @id.","jsonld.SyntaxError",{code:"invalid IRI mapping",context:t,term:n});c["@id"]=e["@vocab"]+n;}if((!0===i["@protected"]||!0===o.get("@protected")&&!1!==i["@protected"])&&(e.protected[n]=!0,c.protected=!0),o.set(n,!0),"@type"in i){let n=i["@type"];if(!we(n))throw new k("Invalid JSON-LD syntax; an @context @type value must be a string.","jsonld.SyntaxError",{code:"invalid type mapping",context:t});if("@json"===n||"@none"===n){if(Ae.processingMode(e,1))throw new k(`Invalid JSON-LD syntax; an @context @type value must not be "${n}" in JSON-LD 1.0 mode.`,"jsonld.SyntaxError",{code:"invalid type mapping",context:t})}else if("@id"!==n&&"@vocab"!==n){if(n=Te(e,n,{vocab:!0,base:!1},t,o,r),!Ie(n))throw new k("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.","jsonld.SyntaxError",{code:"invalid type mapping",context:t});if(0===n.indexOf("_:"))throw new k("Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.","jsonld.SyntaxError",{code:"invalid type mapping",context:t})}c["@type"]=n;}if("@container"in i){const n=we(i["@container"])?[i["@container"]]:i["@container"]||[],o=["@list","@set","@index","@language"];let r=!0;const a=n.includes("@set");if(Ae.processingMode(e,1.1)){if(o.push("@graph","@id","@type"),n.includes("@list")){if(1!==n.length)throw new k("Invalid JSON-LD syntax; @context @container with @list must have no other values","jsonld.SyntaxError",{code:"invalid container mapping",context:t})}else if(n.includes("@graph")){if(n.some((e=>"@graph"!==e&&"@id"!==e&&"@index"!==e&&"@set"!==e)))throw new k("Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set","jsonld.SyntaxError",{code:"invalid container mapping",context:t})}else r&=n.length<=(a?2:1);if(n.includes("@type")&&(c["@type"]=c["@type"]||"@id",!["@id","@vocab"].includes(c["@type"])))throw new k("Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.","jsonld.SyntaxError",{code:"invalid type mapping",context:t})}else r&=!xe(i["@container"]),r&=n.length<=1;if(r&=n.every((e=>o.includes(e))),r&=!(a&&n.includes("@list")),!r)throw new k("Invalid JSON-LD syntax; @context @container value must be one of the following: "+o.join(", "),"jsonld.SyntaxError",{code:"invalid container mapping",context:t});if(c.reverse&&!n.every((e=>["@index","@set"].includes(e))))throw new k("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.","jsonld.SyntaxError",{code:"invalid reverse property",context:t});c["@container"]=n;}if("@index"in i){if(!("@container"in i)||!c["@container"].includes("@index"))throw new k(`Invalid JSON-LD syntax; @index without @index in @container: "${i["@index"]}" on term "${n}".`,"jsonld.SyntaxError",{code:"invalid term definition",context:t});if(!we(i["@index"])||0===i["@index"].indexOf("@"))throw new k(`Invalid JSON-LD syntax; @index must expand to an IRI: "${i["@index"]}" on term "${n}".`,"jsonld.SyntaxError",{code:"invalid term definition",context:t});c["@index"]=i["@index"];}if("@context"in i&&(c["@context"]=i["@context"]),"@language"in i&&!("@type"in i)){let e=i["@language"];if(null!==e&&!we(e))throw new k("Invalid JSON-LD syntax; @context @language value must be a string or null.","jsonld.SyntaxError",{code:"invalid language mapping",context:t});null!==e&&(e=e.toLowerCase()),c["@language"]=e;}if("@prefix"in i){if(n.match(/:|\//))throw new k("Invalid JSON-LD syntax; @context @prefix used on a compact IRI term","jsonld.SyntaxError",{code:"invalid term definition",context:t});if(Ae.isKeyword(c["@id"]))throw new k("Invalid JSON-LD syntax; keywords may not be used as prefixes","jsonld.SyntaxError",{code:"invalid term definition",context:t});if("boolean"!=typeof i["@prefix"])throw new k("Invalid JSON-LD syntax; @context value for @prefix must be boolean","jsonld.SyntaxError",{code:"invalid @prefix value",context:t});c._prefix=!0===i["@prefix"];}if("@direction"in i){const e=i["@direction"];if(null!==e&&"ltr"!==e&&"rtl"!==e)throw new k('Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',"jsonld.SyntaxError",{code:"invalid base direction",context:t});c["@direction"]=e;}if("@nest"in i){const e=i["@nest"];if(!we(e)||"@nest"!==e&&0===e.indexOf("@"))throw new k("Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.","jsonld.SyntaxError",{code:"invalid @nest value",context:t});c["@nest"]=e;}
// disallow aliasing @context and @preserve
const p=c["@id"];if("@context"===p||"@preserve"===p)throw new k("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.","jsonld.SyntaxError",{code:"invalid keyword alias",context:t});if(s&&s.protected&&!a&&(e.protected[n]=!0,c.protected=!0,!Re(s,c))){const e=r&&r.protectedMode||"error";if("error"===e)throw new k(`Invalid JSON-LD syntax; tried to redefine "${n}" which is a protected term.`,"jsonld.SyntaxError",{code:"protected term redefinition",context:t,term:n});if("warn"===e)return void console.warn("WARNING: protected term redefinition",{term:n});throw new k("Invalid protectedMode.","jsonld.SyntaxError",{code:"invalid protected mode",context:t,term:n,protectedMode:e})}},Ae.expandIri=(e,t,n,o)=>Te(e,t,n,void 0,void 0,o),Ae.getInitialContext=e=>{const t=JSON.stringify({processingMode:e.processingMode}),n=Ce.get(t);if(n)return n;const o={processingMode:e.processingMode,mappings:new Map,inverse:null,getInverse:function(){const e=this;if(e.inverse)return e.inverse;const t=e.inverse={},n=e.fastCurieMap={},o={},i=(e["@language"]||"@none").toLowerCase(),s=e["@direction"],l=e.mappings,c=[...l.keys()].sort(ke);for(const e of c){const r=l.get(e);if(null===r)continue;let c=r["@container"]||"@none";if(c=[].concat(c).sort().join(""),null===r["@id"])continue;const d=Oe(r["@id"]);for(const l of d){let d=t[l];const u=Ae.isKeyword(l);if(d)u||r._termHasColon||o[l].push(e);else if(t[l]=d={},!u&&!r._termHasColon){o[l]=[e];const t={iri:l,terms:o[l]};l[0]in n?n[l[0]].push(t):n[l[0]]=[t];}if(d[c]||(d[c]={"@language":{},"@type":{},"@any":{}}),d=d[c],a(e,d["@any"],"@none"),r.reverse)a(e,d["@type"],"@reverse");else if("@none"===r["@type"])a(e,d["@any"],"@none"),a(e,d["@language"],"@none"),a(e,d["@type"],"@none");else if("@type"in r)a(e,d["@type"],r["@type"]);else if("@language"in r&&"@direction"in r){const t=r["@language"],n=r["@direction"];a(e,d["@language"],t&&n?`${t}_${n}`.toLowerCase():t?t.toLowerCase():n?`_${n}`:"@null");}else "@language"in r?a(e,d["@language"],(r["@language"]||"@null").toLowerCase()):"@direction"in r?r["@direction"]?a(e,d["@language"],`_${r["@direction"]}`):a(e,d["@language"],"@none"):s?(a(e,d["@language"],`_${s}`),a(e,d["@language"],"@none"),a(e,d["@type"],"@none")):(a(e,d["@language"],i),a(e,d["@language"],"@none"),a(e,d["@type"],"@none"));}}for(const e in n)r(n,e,1);return t},clone:function(){const e={};e.mappings=E.clone(this.mappings),e.clone=this.clone,e.inverse=null,e.getInverse=this.getInverse,e.protected=E.clone(this.protected),this.previousContext&&(e.previousContext=this.previousContext.clone());e.revertToPreviousContext=this.revertToPreviousContext,"@base"in this&&(e["@base"]=this["@base"]);"@language"in this&&(e["@language"]=this["@language"]);"@vocab"in this&&(e["@vocab"]=this["@vocab"]);return e},revertToPreviousContext:function(){if(!this.previousContext)return this;return this.previousContext.clone()},protected:{}};return 1e4===Ce.size&&Ce.clear(),Ce.set(t,o),o;function r(e,t,n){const o=e[t],a=e[t]={};let i,s;for(const e of o)i=e.iri,s=n>=i.length?"":i[n],s in a?a[s].push(e):a[s]=[e];for(const e in a)""!==e&&r(a,e,n+1);}function a(e,t,n){t.hasOwnProperty(n)||(t[n]=e);}},Ae.getContextValue=(e,t,n)=>{if(null===t){if("@context"===n)return;return null}if(e.mappings.has(t)){const o=e.mappings.get(t);if(je(n))return o;if(o.hasOwnProperty(n))return o[n]}return "@language"===n&&n in e||"@direction"===n&&n in e?e[n]:"@context"!==n?null:void 0},Ae.processingMode=(e,t)=>t.toString()>="1.1"?!e.processingMode||e.processingMode>="json-ld-"+t.toString():"json-ld-1.0"===e.processingMode,Ae.isKeyword=e=>{if(!we(e)||"@"!==e[0])return !1;switch(e){case"@base":case"@container":case"@context":case"@default":case"@direction":case"@embed":case"@explicit":case"@graph":case"@id":case"@included":case"@index":case"@json":case"@language":case"@list":case"@nest":case"@none":case"@omitDefault":case"@prefix":case"@preserve":case"@protected":case"@requireAll":case"@reverse":case"@set":case"@type":case"@value":case"@version":case"@vocab":return !0}return !1};const{isArray:Ee,isObject:_e,isEmptyObject:Me,isString:Pe,isUndefined:Je}=N,{isList:Be,isValue:Fe,isGraph:Ue,isSubject:qe}=O,{expandIri:Ve,getContextValue:ze,isKeyword:$e,process:Ge,processingMode:He}=De,{isAbsolute:Qe}=P,{addValue:Ke,asArray:Xe,getValues:Ze,validateTypeValue:We}=E,Ye={};var et=Ye;const tt=/^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;async function nt({activeCtx:e,activeProperty:t,expandedActiveProperty:n,element:o,expandedParent:r,options:a={},insideList:i,typeKey:s,typeScopedContext:l,expansionMap:c}){const d=Object.keys(o).sort(),u=[];let p;const h=o[s]&&"@json"===Ve(e,Ee(o[s])?o[s][0]:o[s],{vocab:!0},a);for(const s of d){let d,f=o[s];if("@context"===s)continue;let v=Ve(e,s,{vocab:!0},a);if((null===v||!Qe(v)&&!$e(v))&&(v=c({unmappedProperty:s,activeCtx:e,activeProperty:t,parent:o,options:a,insideList:i,value:f,expandedParent:r}),void 0===v))continue;if($e(v)){if("@reverse"===n)throw new k("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.","jsonld.SyntaxError",{code:"invalid reverse property map",value:f});if(v in r&&"@included"!==v&&"@type"!==v)throw new k("Invalid JSON-LD syntax; colliding keywords detected.","jsonld.SyntaxError",{code:"colliding keywords",keyword:v})}if("@id"===v){if(!Pe(f)){if(!a.isFrame)throw new k('Invalid JSON-LD syntax; "@id" value must a string.',"jsonld.SyntaxError",{code:"invalid @id value",value:f});if(_e(f)){if(!Me(f))throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',"jsonld.SyntaxError",{code:"invalid @id value",value:f})}else {if(!Ee(f))throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',"jsonld.SyntaxError",{code:"invalid @id value",value:f});if(!f.every((e=>Pe(e))))throw new k('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',"jsonld.SyntaxError",{code:"invalid @id value",value:f})}}Ke(r,"@id",Xe(f).map((t=>Pe(t)?Ve(e,t,{base:!0},a):t)),{propertyIsArray:a.isFrame});continue}if("@type"===v){_e(f)&&(f=Object.fromEntries(Object.entries(f).map((([e,t])=>[Ve(l,e,{vocab:!0}),Xe(t).map((e=>Ve(l,e,{base:!0,vocab:!0})))])))),We(f,a.isFrame),Ke(r,"@type",Xe(f).map((e=>Pe(e)?Ve(l,e,{base:!0,vocab:!0},a):e)),{propertyIsArray:a.isFrame});continue}if("@included"===v&&He(e,1.1)){const n=Xe(await Ye.expand({activeCtx:e,activeProperty:t,element:f,options:a,expansionMap:c}));if(!n.every((e=>qe(e))))throw new k("Invalid JSON-LD syntax; values of @included must expand to node objects.","jsonld.SyntaxError",{code:"invalid @included value",value:f});Ke(r,"@included",n,{propertyIsArray:!0});continue}if("@graph"===v&&!_e(f)&&!Ee(f))throw new k('Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',"jsonld.SyntaxError",{code:"invalid @graph value",value:f});if("@value"===v){p=f,h&&He(e,1.1)?r["@value"]=f:Ke(r,"@value",f,{propertyIsArray:a.isFrame});continue}if("@language"===v){if(null===f)continue;if(!Pe(f)&&!a.isFrame)throw new k('Invalid JSON-LD syntax; "@language" value must be a string.',"jsonld.SyntaxError",{code:"invalid language-tagged string",value:f});f=Xe(f).map((e=>Pe(e)?e.toLowerCase():e));for(const e of f)Pe(e)&&!e.match(tt)&&console.warn(`@language must be valid BCP47: ${e}`);Ke(r,"@language",f,{propertyIsArray:a.isFrame});continue}if("@direction"===v){if(!Pe(f)&&!a.isFrame)throw new k('Invalid JSON-LD syntax; "@direction" value must be a string.',"jsonld.SyntaxError",{code:"invalid base direction",value:f});f=Xe(f);for(const e of f)if(Pe(e)&&"ltr"!==e&&"rtl"!==e)throw new k('Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',"jsonld.SyntaxError",{code:"invalid base direction",value:f});Ke(r,"@direction",f,{propertyIsArray:a.isFrame});continue}if("@index"===v){if(!Pe(f))throw new k('Invalid JSON-LD syntax; "@index" value must be a string.',"jsonld.SyntaxError",{code:"invalid @index value",value:f});Ke(r,"@index",f);continue}if("@reverse"===v){if(!_e(f))throw new k('Invalid JSON-LD syntax; "@reverse" value must be an object.',"jsonld.SyntaxError",{code:"invalid @reverse value",value:f});if(d=await Ye.expand({activeCtx:e,activeProperty:"@reverse",element:f,options:a,expansionMap:c}),"@reverse"in d)for(const e in d["@reverse"])Ke(r,e,d["@reverse"][e],{propertyIsArray:!0});let t=r["@reverse"]||null;for(const e in d){if("@reverse"===e)continue;null===t&&(t=r["@reverse"]={}),Ke(t,e,[],{propertyIsArray:!0});const n=d[e];for(let o=0;o<n.length;++o){const r=n[o];if(Fe(r)||Be(r))throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',"jsonld.SyntaxError",{code:"invalid reverse property value",value:d});Ke(t,e,r,{propertyIsArray:!0});}}continue}if("@nest"===v){u.push(s);continue}let g=e;const y=ze(e,s,"@context");Je(y)||(g=await Ge({activeCtx:e,localCtx:y,propagate:!0,overrideProtected:!0,options:a}));const m=ze(g,s,"@container")||[];if(m.includes("@language")&&_e(f)){d=rt(g,f,ze(g,s,"@direction"),a);}else if(m.includes("@index")&&_e(f)){const t=m.includes("@graph"),n=ze(g,s,"@index")||"@index",o="@index"!==n&&Ve(e,n,{vocab:!0},a);d=await at({activeCtx:g,options:a,activeProperty:s,value:f,expansionMap:c,asGraph:t,indexKey:n,propertyIndex:o});}else if(m.includes("@id")&&_e(f)){const e=m.includes("@graph");d=await at({activeCtx:g,options:a,activeProperty:s,value:f,expansionMap:c,asGraph:e,indexKey:"@id"});}else if(m.includes("@type")&&_e(f))d=await at({activeCtx:g.revertToPreviousContext(),options:a,activeProperty:s,value:f,expansionMap:c,asGraph:!1,indexKey:"@type"});else {const o="@list"===v;if(o||"@set"===v){let e=t;o&&"@graph"===n&&(e=null),d=await Ye.expand({activeCtx:g,activeProperty:e,element:f,options:a,insideList:o,expansionMap:c});}else d="@json"===ze(e,s,"@type")?{"@type":"@json","@value":f}:await Ye.expand({activeCtx:g,activeProperty:s,element:f,options:a,insideList:!1,expansionMap:c});}if(null!==d||"@value"===v||(d=c({unmappedValue:f,expandedProperty:v,activeCtx:g,activeProperty:t,parent:o,options:a,insideList:i,key:s,expandedParent:r}),void 0!==d))if("@list"!==v&&!Be(d)&&m.includes("@list")&&(d={"@list":Xe(d)}),m.includes("@graph")&&!m.some((e=>"@id"===e||"@index"===e))&&(d=Xe(d).map((e=>({"@graph":Xe(e)})))),g.mappings.has(s)&&g.mappings.get(s).reverse){const e=r["@reverse"]=r["@reverse"]||{};d=Xe(d);for(let t=0;t<d.length;++t){const n=d[t];if(Fe(n)||Be(n))throw new k('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',"jsonld.SyntaxError",{code:"invalid reverse property value",value:d});Ke(e,v,n,{propertyIsArray:!0});}}else Ke(r,v,d,{propertyIsArray:!0});}if("@value"in r)if("@json"===r["@type"]&&He(e,1.1));else if((_e(p)||Ee(p))&&!a.isFrame)throw new k('Invalid JSON-LD syntax; "@value" value must not be an object or an array.',"jsonld.SyntaxError",{code:"invalid value object value",value:p});for(const d of u){const u=Ee(o[d])?o[d]:[o[d]];for(const o of u){if(!_e(o)||Object.keys(o).some((t=>"@value"===Ve(e,t,{vocab:!0},a))))throw new k("Invalid JSON-LD syntax; nested value must be a node object.","jsonld.SyntaxError",{code:"invalid @nest value",value:o});await nt({activeCtx:e,activeProperty:t,expandedActiveProperty:n,element:o,expandedParent:r,options:a,insideList:i,typeScopedContext:l,typeKey:s,expansionMap:c});}}}function ot({activeCtx:e,activeProperty:t,value:n,options:o}){if(null==n)return null;const r=Ve(e,t,{vocab:!0},o);if("@id"===r)return Ve(e,n,{base:!0},o);if("@type"===r)return Ve(e,n,{vocab:!0,base:!0},o);const a=ze(e,t,"@type");if(("@id"===a||"@graph"===r)&&Pe(n))return {"@id":Ve(e,n,{base:!0},o)};if("@vocab"===a&&Pe(n))return {"@id":Ve(e,n,{vocab:!0,base:!0},o)};if($e(r))return n;const i={};if(a&&!["@id","@vocab","@none"].includes(a))i["@type"]=a;else if(Pe(n)){const n=ze(e,t,"@language");null!==n&&(i["@language"]=n);const o=ze(e,t,"@direction");null!==o&&(i["@direction"]=o);}return ["boolean","number","string"].includes(typeof n)||(n=n.toString()),i["@value"]=n,i}function rt(e,t,n,o){const r=[],a=Object.keys(t).sort();for(const i of a){const a=Ve(e,i,{vocab:!0},o);let s=t[i];Ee(s)||(s=[s]);for(const e of s){if(null===e)continue;if(!Pe(e))throw new k("Invalid JSON-LD syntax; language map values must be strings.","jsonld.SyntaxError",{code:"invalid language map value",languageMap:t});const o={"@value":e};"@none"!==a&&(o["@language"]=i.toLowerCase()),n&&(o["@direction"]=n),r.push(o);}}return r}async function at({activeCtx:e,options:t,activeProperty:n,value:o,expansionMap:r,asGraph:a,indexKey:i,propertyIndex:s}){const l=[],c=Object.keys(o).sort(),d="@type"===i;for(let u of c){if(d){const n=ze(e,u,"@context");Je(n)||(e=await Ge({activeCtx:e,localCtx:n,propagate:!1,options:t}));}let c,p=o[u];Ee(p)||(p=[p]),p=await Ye.expand({activeCtx:e,activeProperty:n,element:p,options:t,insideList:!1,insideIndex:!0,expansionMap:r}),c=s?"@none"===u?"@none":ot({activeCtx:e,activeProperty:i,value:u,options:t}):Ve(e,u,{vocab:!0},t),"@id"===i?u=Ve(e,u,{base:!0},t):d&&(u=c);for(let e of p){if(a&&!Ue(e)&&(e={"@graph":[e]}),"@type"===i)"@none"===c||(e["@type"]?e["@type"]=[u].concat(e["@type"]):e["@type"]=[u]);else {if(Fe(e)&&!["@language","@type","@index"].includes(i))throw new k(`Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${i}".`,"jsonld.SyntaxError",{code:"invalid value object",value:e});s?"@none"!==c&&Ke(e,s,c,{propertyIsArray:!0,prependValue:!0}):"@none"===c||i in e||(e[i]=u);}l.push(e);}}return l}Ye.expand=async({activeCtx:e,activeProperty:t=null,element:n,options:o={},insideList:r=!1,insideIndex:a=!1,typeScopedContext:i=null,expansionMap:s=(()=>{})})=>{if(null==n)return null;if("@default"===t&&(o=Object.assign({},o,{isFrame:!1})),!Ee(n)&&!_e(n)){if(!r&&(null===t||"@graph"===Ve(e,t,{vocab:!0},o))){const a=await s({unmappedValue:n,activeCtx:e,activeProperty:t,options:o,insideList:r});return void 0===a?null:a}return ot({activeCtx:e,activeProperty:t,value:n,options:o})}if(Ee(n)){let l=[];const c=ze(e,t,"@container")||[];r=r||c.includes("@list");for(let c=0;c<n.length;++c){let d=await Ye.expand({activeCtx:e,activeProperty:t,element:n[c],options:o,expansionMap:s,insideIndex:a,typeScopedContext:i});r&&Ee(d)&&(d={"@list":d}),null===d&&(d=await s({unmappedValue:n[c],activeCtx:e,activeProperty:t,parent:n,index:c,options:o,expandedParent:l,insideList:r}),void 0===d)||(Ee(d)?l=l.concat(d):l.push(d));}return l}const l=Ve(e,t,{vocab:!0},o),c=ze(e,t,"@context");i=i||(e.previousContext?e:null);let d=Object.keys(n).sort(),u=!a;if(u&&i&&d.length<=2&&!d.includes("@context"))for(const t of d){const n=Ve(i,t,{vocab:!0},o);if("@value"===n){u=!1,e=i;break}if("@id"===n&&1===d.length){u=!1;break}}u&&(e=e.revertToPreviousContext()),Je(c)||(e=await Ge({activeCtx:e,localCtx:c,propagate:!0,overrideProtected:!0,options:o})),"@context"in n&&(e=await Ge({activeCtx:e,localCtx:n["@context"],options:o})),i=e;let p=null;for(const t of d){if("@type"===Ve(e,t,{vocab:!0},o)){p=p||t;const r=n[t],a=Array.isArray(r)?r.length>1?r.slice().sort():r:[r];for(const t of a){const n=ze(i,t,"@context");Je(n)||(e=await Ge({activeCtx:e,localCtx:n,options:o,propagate:!1}));}}}let h={};await nt({activeCtx:e,activeProperty:t,expandedActiveProperty:l,element:n,expandedParent:h,options:o,insideList:r,typeKey:p,typeScopedContext:i,expansionMap:s}),d=Object.keys(h);let f=d.length;if("@value"in h){if("@type"in h&&("@language"in h||"@direction"in h))throw new k('Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',"jsonld.SyntaxError",{code:"invalid value object",element:h});let a=f-1;if("@type"in h&&(a-=1),"@index"in h&&(a-=1),"@language"in h&&(a-=1),"@direction"in h&&(a-=1),0!==a)throw new k('Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',"jsonld.SyntaxError",{code:"invalid value object",element:h});const i=null===h["@value"]?[]:Xe(h["@value"]),l=Ze(h,"@type");if(He(e,1.1)&&l.includes("@json")&&1===l.length);else if(0===i.length){const a=await s({unmappedValue:h,activeCtx:e,activeProperty:t,element:n,options:o,insideList:r});h=void 0!==a?a:null;}else {if(!i.every((e=>Pe(e)||Me(e)))&&"@language"in h)throw new k("Invalid JSON-LD syntax; only strings may be language-tagged.","jsonld.SyntaxError",{code:"invalid language-tagged value",element:h});if(!l.every((e=>Qe(e)&&!(Pe(e)&&0===e.indexOf("_:"))||Me(e))))throw new k('Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',"jsonld.SyntaxError",{code:"invalid typed value",element:h})}}else if("@type"in h&&!Ee(h["@type"]))h["@type"]=[h["@type"]];else if("@set"in h||"@list"in h){if(f>1&&(2!==f||!("@index"in h)))throw new k('Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',"jsonld.SyntaxError",{code:"invalid set or list object",element:h});"@set"in h&&(h=h["@set"],d=Object.keys(h),f=d.length);}else if(1===f&&"@language"in h){const a=await s(h,{unmappedValue:h,activeCtx:e,activeProperty:t,element:n,options:o,insideList:r});h=void 0!==a?a:null;}if(_e(h)&&!o.keepFreeFloatingNodes&&!r&&(null===t||"@graph"===l)&&(0===f||"@value"in h||"@list"in h||1===f&&"@id"in h)){const a=await s({unmappedValue:h,activeCtx:e,activeProperty:t,element:n,options:o,insideList:r});h=void 0!==a?a:null;}return h};const{isKeyword:it}=De,st={};var lt=st;st.createMergedNodeMap=(e,t)=>{const n=(t=t||{}).issuer||new E.IdentifierIssuer("_:b"),o={"@default":{}};return st.createNodeMap(e,o,"@default",n),st.mergeNodeMaps(o)},st.createNodeMap=(e,t,n,o,r,a)=>{if(N.isArray(e)){for(const r of e)st.createNodeMap(r,t,n,o,void 0,a);return}if(!N.isObject(e))return void(a&&a.push(e));if(O.isValue(e)){if("@type"in e){let t=e["@type"];0===t.indexOf("_:")&&(e["@type"]=t=o.getId(t));}return void(a&&a.push(e))}if(a&&O.isList(e)){const i=[];return st.createNodeMap(e["@list"],t,n,o,r,i),void a.push({"@list":i})}if("@type"in e){const t=e["@type"];for(const e of t)0===e.indexOf("_:")&&o.getId(e);}N.isUndefined(r)&&(r=O.isBlankNode(e)?o.getId(e["@id"]):e["@id"]),a&&a.push({"@id":r});const i=t[n],s=i[r]=i[r]||{};s["@id"]=r;const l=Object.keys(e).sort();for(let a of l){if("@id"===a)continue;if("@reverse"===a){const a={"@id":r},s=e["@reverse"];for(const e in s){const r=s[e];for(const s of r){let r=s["@id"];O.isBlankNode(s)&&(r=o.getId(r)),st.createNodeMap(s,t,n,o,r),E.addValue(i[r],e,a,{propertyIsArray:!0,allowDuplicate:!1});}}continue}if("@graph"===a){r in t||(t[r]={}),st.createNodeMap(e[a],t,r,o);continue}if("@included"===a){st.createNodeMap(e[a],t,n,o);continue}if("@type"!==a&&it(a)){if("@index"===a&&a in s&&(e[a]!==s[a]||e[a]["@id"]!==s[a]["@id"]))throw new k("Invalid JSON-LD syntax; conflicting @index property detected.","jsonld.SyntaxError",{code:"conflicting indexes",subject:s});s[a]=e[a];continue}const l=e[a];if(0===a.indexOf("_:")&&(a=o.getId(a)),0!==l.length)for(let e of l)if("@type"===a&&(e=0===e.indexOf("_:")?o.getId(e):e),O.isSubject(e)||O.isSubjectReference(e)){if("@id"in e&&!e["@id"])continue;const r=O.isBlankNode(e)?o.getId(e["@id"]):e["@id"];E.addValue(s,a,{"@id":r},{propertyIsArray:!0,allowDuplicate:!1}),st.createNodeMap(e,t,n,o,r);}else if(O.isValue(e))E.addValue(s,a,e,{propertyIsArray:!0,allowDuplicate:!1});else if(O.isList(e)){const i=[];st.createNodeMap(e["@list"],t,n,o,r,i),e={"@list":i},E.addValue(s,a,e,{propertyIsArray:!0,allowDuplicate:!1});}else st.createNodeMap(e,t,n,o,r),E.addValue(s,a,e,{propertyIsArray:!0,allowDuplicate:!1});else E.addValue(s,a,[],{propertyIsArray:!0});}},st.mergeNodeMapGraphs=e=>{const t={};for(const n of Object.keys(e).sort())for(const o of Object.keys(e[n]).sort()){const r=e[n][o];o in t||(t[o]={"@id":o});const a=t[o];for(const e of Object.keys(r).sort())if(it(e)&&"@type"!==e)a[e]=E.clone(r[e]);else for(const t of r[e])E.addValue(a,e,E.clone(t),{propertyIsArray:!0,allowDuplicate:!1});}return t},st.mergeNodeMaps=e=>{const t=e["@default"],n=Object.keys(e).sort();for(const o of n){if("@default"===o)continue;const n=e[o];let r=t[o];r?"@graph"in r||(r["@graph"]=[]):t[o]=r={"@id":o,"@graph":[]};const a=r["@graph"];for(const e of Object.keys(n).sort()){const t=n[e];O.isSubjectReference(t)||a.push(t);}}return t};const{isSubjectReference:ct}=O,{createMergedNodeMap:dt}=lt,ut={};var pt=ut;ut.flatten=e=>{const t=dt(e),n=[],o=Object.keys(t).sort();for(let e=0;e<o.length;++e){const r=t[o[e]];ct(r)||n.push(r);}return n};const ht="http://www.w3.org/1999/02/22-rdf-syntax-ns#",ft="http://www.w3.org/2001/XMLSchema#";var vt={LINK_HEADER_REL:"http://www.w3.org/ns/json-ld#context",LINK_HEADER_CONTEXT:"http://www.w3.org/ns/json-ld#context",RDF:ht,RDF_LIST:ht+"List",RDF_FIRST:ht+"first",RDF_REST:ht+"rest",RDF_NIL:ht+"nil",RDF_TYPE:ht+"type",RDF_PLAIN_LITERAL:ht+"PlainLiteral",RDF_XML_LITERAL:ht+"XMLLiteral",RDF_JSON_LITERAL:ht+"JSON",RDF_OBJECT:ht+"object",RDF_LANGSTRING:ht+"langString",XSD:ft,XSD_BOOLEAN:ft+"boolean",XSD_DOUBLE:ft+"double",XSD_INTEGER:ft+"integer",XSD_STRING:ft+"string"};const{RDF_LIST:gt,RDF_FIRST:yt,RDF_REST:mt,RDF_NIL:xt,RDF_TYPE:bt,RDF_JSON_LITERAL:wt,XSD_BOOLEAN:jt,XSD_DOUBLE:It,XSD_INTEGER:Nt,XSD_STRING:St}=vt,Ot=/^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/,kt={};var Ct=kt;function Lt(e,t,n){if(e.termType.endsWith("Node"))return {"@id":e.value};const o={"@value":e.value};if(e.language)o["@language"]=e.language;else {let r=e.datatype.value;if(r||(r=St),r===wt){r="@json";try{o["@value"]=JSON.parse(o["@value"]);}catch(e){throw new k("JSON literal could not be parsed.","jsonld.InvalidJsonLiteral",{code:"invalid JSON literal",value:o["@value"],cause:e})}}if(t){if(r===jt)"true"===o["@value"]?o["@value"]=!0:"false"===o["@value"]&&(o["@value"]=!1);else if(N.isNumeric(o["@value"]))if(r===Nt){const e=parseInt(o["@value"],10);e.toFixed(0)===o["@value"]&&(o["@value"]=e);}else r===It&&(o["@value"]=parseFloat(o["@value"]));[jt,Nt,It,St].includes(r)||(o["@type"]=r);}else if("i18n-datatype"===n&&r.startsWith("https://www.w3.org/ns/i18n#")){const[,e,t]=r.split(/[#_]/);e.length>0&&(o["@language"]=e,e.match(Ot)||console.warn(`@language must be valid BCP47: ${e}`)),o["@direction"]=t;}else r!==St&&(o["@type"]=r);}return o}kt.fromRDF=async(e,{useRdfType:t=!1,useNativeTypes:n=!1,rdfDirection:o=null})=>{const r={},a={"@default":r},i={};for(const s of e){const e="DefaultGraph"===s.graph.termType?"@default":s.graph.value;e in a||(a[e]={}),"@default"===e||e in r||(r[e]={"@id":e});const l=a[e],c=s.subject.value,d=s.predicate.value,u=s.object;c in l||(l[c]={"@id":c});const p=l[c],h=u.termType.endsWith("Node");if(h&&!(u.value in l)&&(l[u.value]={"@id":u.value}),d===bt&&!t&&h){E.addValue(p,"@type",u.value,{propertyIsArray:!0});continue}const f=Lt(u,n,o);if(E.addValue(p,d,f,{propertyIsArray:!0}),h)if(u.value===xt){const e=l[u.value];"usages"in e||(e.usages=[]),e.usages.push({node:p,property:d,value:f});}else u.value in i?i[u.value]=!1:i[u.value]={node:p,property:d,value:f};}for(const e in a){const t=a[e];if(!(xt in t))continue;const n=t[xt];if(n.usages){for(let e of n.usages){let n=e.node,o=e.property,r=e.value;const a=[],s=[];let l=Object.keys(n).length;for(;o===mt&&N.isObject(i[n["@id"]])&&N.isArray(n[yt])&&1===n[yt].length&&N.isArray(n[mt])&&1===n[mt].length&&(3===l||4===l&&N.isArray(n["@type"])&&1===n["@type"].length&&n["@type"][0]===gt)&&(a.push(n[yt][0]),s.push(n["@id"]),e=i[n["@id"]],n=e.node,o=e.property,r=e.value,l=Object.keys(n).length,O.isBlankNode(n)););delete r["@id"],r["@list"]=a.reverse();for(const e of s)delete t[e];}delete n.usages;}}const s=[],l=Object.keys(r).sort();for(const e of l){const t=r[e];if(e in a){const n=t["@graph"]=[],o=a[e],r=Object.keys(o).sort();for(const e of r){const t=o[e];O.isSubjectReference(t)||n.push(t);}}O.isSubjectReference(t)||s.push(t);}return s};var At=function e(t){return null===t||"object"!=typeof t||null!=t.toJSON?JSON.stringify(t):Array.isArray(t)?"["+t.reduce(((t,n,o)=>t+(0===o?"":",")+e(void 0===n||"symbol"==typeof n?null:n)),"")+"]":"{"+Object.keys(t).sort().reduce(((n,o,r)=>{if(void 0===t[o]||"symbol"==typeof t[o])return n;return n+(0===n.length?"":",")+e(o)+":"+e(t[o])}),"")+"}"};const{createNodeMap:Dt}=lt,{isKeyword:Tt}=De,{RDF_FIRST:Rt,RDF_REST:Et,RDF_NIL:_t,RDF_TYPE:Mt,RDF_JSON_LITERAL:Pt,RDF_LANGSTRING:Jt,XSD_BOOLEAN:Bt,XSD_DOUBLE:Ft,XSD_INTEGER:Ut,XSD_STRING:qt}=vt,{isAbsolute:Vt}=P,zt={};var $t=zt;function Gt(e,t,n,o,r){const a=Object.keys(t).sort();for(const i of a){const a=t[i],s=Object.keys(a).sort();for(let t of s){const s=a[t];if("@type"===t)t=Mt;else if(Tt(t))continue;for(const a of s){const s={termType:i.startsWith("_:")?"BlankNode":"NamedNode",value:i};if(!Vt(i))continue;const l={termType:t.startsWith("_:")?"BlankNode":"NamedNode",value:t};if(!Vt(t))continue;if("BlankNode"===l.termType&&!r.produceGeneralizedRdf)continue;const c=Ht(a,o,e,n,r.rdfDirection);c&&e.push({subject:s,predicate:l,object:c,graph:n});}}}}function Ht(e,t,n,o,r){const a={};if(O.isValue(e)){a.termType="Literal",a.value=void 0,a.datatype={termType:"NamedNode"};let t=e["@value"];const n=e["@type"]||null;if("@json"===n)a.value=At(t),a.datatype.value=Pt;else if(N.isBoolean(t))a.value=t.toString(),a.datatype.value=n||Bt;else if(N.isDouble(t)||n===Ft)N.isDouble(t)||(t=parseFloat(t)),a.value=t.toExponential(15).replace(/(\d)0*e\+?/,"$1E"),a.datatype.value=n||Ft;else if(N.isNumber(t))a.value=t.toFixed(0),a.datatype.value=n||Ut;else if("i18n-datatype"===r&&"@direction"in e){const n="https://www.w3.org/ns/i18n#"+(e["@language"]||"")+`_${e["@direction"]}`;a.datatype.value=n,a.value=t;}else "@language"in e?(a.value=t,a.datatype.value=n||Jt,a.language=e["@language"]):(a.value=t,a.datatype.value=n||qt);}else if(O.isList(e)){const i=function(e,t,n,o,r){const a={termType:"NamedNode",value:Rt},i={termType:"NamedNode",value:Et},s={termType:"NamedNode",value:_t},l=e.pop(),c=l?{termType:"BlankNode",value:t.getId()}:s;let d=c;for(const s of e){const e=Ht(s,t,n,o,r),l={termType:"BlankNode",value:t.getId()};n.push({subject:d,predicate:a,object:e,graph:o}),n.push({subject:d,predicate:i,object:l,graph:o}),d=l;}if(l){const e=Ht(l,t,n,o,r);n.push({subject:d,predicate:a,object:e,graph:o}),n.push({subject:d,predicate:i,object:s,graph:o});}return c}(e["@list"],t,n,o,r);a.termType=i.termType,a.value=i.value;}else {const t=N.isObject(e)?e["@id"]:e;a.termType=t.startsWith("_:")?"BlankNode":"NamedNode",a.value=t;}return "NamedNode"!==a.termType||Vt(a.value)?a:null}zt.toRDF=(e,t)=>{const n=new E.IdentifierIssuer("_:b"),o={"@default":{}};Dt(e,o,"@default",n);const r=[],a=Object.keys(o).sort();for(const e of a){let a;if("@default"===e)a={termType:"DefaultGraph",value:""};else {if(!Vt(e))continue;a=e.startsWith("_:")?{termType:"BlankNode"}:{termType:"NamedNode"},a.value=e;}Gt(r,o[e],a,n,t);}return r};const{isKeyword:Qt}=De,{createNodeMap:Kt,mergeNodeMapGraphs:Xt}=lt,Zt={};var Wt=Zt;function Yt(e){const t={};for(const n in e)void 0!==e[n]&&(t["@"+n]=[e[n]]);return [t]}function en(e,t,n){for(let o=n.length-1;o>=0;--o){const r=n[o];if(r.graph===t&&r.subject["@id"]===e["@id"])return !0}return !1}function tn(e,t,n){const o="@"+n;let r=o in e?e[o][0]:t[n];if("embed"===n)if(!0===r)r="@once";else if(!1===r)r="@never";else if("@always"!==r&&"@never"!==r&&"@link"!==r&&"@first"!==r&&"@last"!==r&&"@once"!==r)throw new k("Invalid JSON-LD syntax; invalid value of @embed.","jsonld.SyntaxError",{code:"invalid @embed value",frame:e});return r}function nn(e){if(!N.isArray(e)||1!==e.length||!N.isObject(e[0]))throw new k("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.","jsonld.SyntaxError",{frame:e});if("@id"in e[0])for(const t of E.asArray(e[0]["@id"]))if(!N.isObject(t)&&!P.isAbsolute(t)||N.isString(t)&&0===t.indexOf("_:"))throw new k("Invalid JSON-LD syntax; invalid @id in frame.","jsonld.SyntaxError",{code:"invalid frame",frame:e});if("@type"in e[0])for(const t of E.asArray(e[0]["@type"]))if(!N.isObject(t)&&!P.isAbsolute(t)||N.isString(t)&&0===t.indexOf("_:"))throw new k("Invalid JSON-LD syntax; invalid @type in frame.","jsonld.SyntaxError",{code:"invalid frame",frame:e})}function on(e,t,n,o){let r=!0,a=!1;for(const i in n){let s=!1;const l=E.getValues(t,i),c=0===E.getValues(n,i).length;if("@id"===i){if(N.isEmptyObject(n["@id"][0]||{})?s=!0:n["@id"].length>=0&&(s=n["@id"].includes(l[0])),!o.requireAll)return s}else if("@type"===i){if(r=!1,c){if(l.length>0)return !1;s=!0;}else if(1===n["@type"].length&&N.isEmptyObject(n["@type"][0]))s=l.length>0;else for(const e of n["@type"])s=!(!N.isObject(e)||!("@default"in e))||(s||l.some((t=>t===e)));if(!o.requireAll)return s}else {if(Qt(i))continue;{const t=E.getValues(n,i)[0];let a=!1;if(t&&(nn([t]),a="@default"in t),r=!1,0===l.length&&a)continue;if(l.length>0&&c)return !1;if(void 0===t){if(l.length>0)return !1;s=!0;}else if(O.isList(t)){const n=t["@list"][0];if(O.isList(l[0])){const t=l[0]["@list"];O.isValue(n)?s=t.some((e=>cn(n,e))):(O.isSubject(n)||O.isSubjectReference(n))&&(s=t.some((t=>ln(e,n,t,o))));}}else s=O.isValue(t)?l.some((e=>cn(t,e))):O.isSubjectReference(t)?l.some((n=>ln(e,t,n,o))):!!N.isObject(t)&&l.length>0;}}if(!s&&o.requireAll)return !1;a=a||s;}return r||a}function rn(e,t){const n=e.uniqueEmbeds[e.graph],o=n[t],r=o.parent,a=o.property,i={"@id":t};if(N.isArray(r)){for(let e=0;e<r.length;++e)if(E.compareValues(r[e],i)){r[e]=i;break}}else {const e=N.isArray(r[a]);E.removeValue(r,a,i,{propertyIsArray:e}),E.addValue(r,a,i,{propertyIsArray:e});}const s=e=>{const t=Object.keys(n);for(const o of t)o in n&&N.isObject(n[o].parent)&&n[o].parent["@id"]===e&&(delete n[o],s(o));};s(t);}
/**
 * Removes the @preserve keywords from expanded result of framing.
 *
 * @param input the framed, framed output.
 * @param options the framing options used.
 *
 * @return the resulting output.
 */function an(e,t){if(N.isArray(e))return e.map((e=>an(e,t)));if(N.isObject(e)){
// remove @preserve
if("@preserve"in e)return e["@preserve"][0];if(O.isValue(e))return e;if(O.isList(e))return e["@list"]=an(e["@list"],t),e;if("@id"in e){const n=e["@id"];if(t.link.hasOwnProperty(n)){const o=t.link[n].indexOf(e);if(-1!==o)return t.link[n][o];t.link[n].push(e);}else t.link[n]=[e];}for(const n in e)"@id"===n&&t.bnodesToClear.includes(e[n])?delete e["@id"]:e[n]=an(e[n],t);}return e}function sn(e,t,n){N.isObject(e)?E.addValue(e,t,n,{propertyIsArray:!0}):e.push(n);}function ln(e,t,n,o){if(!("@id"in n))return !1;const r=e.subjects[n["@id"]];return r&&on(e,r,t,o)}function cn(e,t){const n=t["@value"],o=t["@type"],r=t["@language"],a=e["@value"]?N.isArray(e["@value"])?e["@value"]:[e["@value"]]:[],i=e["@type"]?N.isArray(e["@type"])?e["@type"]:[e["@type"]]:[],s=e["@language"]?N.isArray(e["@language"])?e["@language"]:[e["@language"]]:[];return 0===a.length&&0===i.length&&0===s.length||!(!a.includes(n)&&!N.isEmptyObject(a[0]))&&(!!(!o&&0===i.length||i.includes(o)||o&&N.isEmptyObject(i[0]))&&!!(!r&&0===s.length||s.includes(r)||r&&N.isEmptyObject(s[0])))}Zt.frameMergedOrDefault=(e,t,n)=>{const o={options:n,embedded:!1,graph:"@default",graphMap:{"@default":{}},subjectStack:[],link:{},bnodeMap:{}},r=new E.IdentifierIssuer("_:b");Kt(e,o.graphMap,"@default",r),n.merged&&(o.graphMap["@merged"]=Xt(o.graphMap),o.graph="@merged"),o.subjects=o.graphMap[o.graph];const a=[];return Zt.frame(o,Object.keys(o.subjects).sort(),t,a),n.pruneBlankNodeIdentifiers&&(n.bnodesToClear=Object.keys(o.bnodeMap).filter((e=>1===o.bnodeMap[e].length))),
// remove @preserve from results
n.link={},an(a,n)},Zt.frame=(e,t,n,o,r=null)=>{nn(n),n=n[0];const a=e.options,i={embed:tn(n,a,"embed"),explicit:tn(n,a,"explicit"),requireAll:tn(n,a,"requireAll")};e.link.hasOwnProperty(e.graph)||(e.link[e.graph]={});const s=e.link[e.graph],l=function(e,t,n,o){const r={};for(const a of t){const t=e.graphMap[e.graph][a];on(e,t,n,o)&&(r[a]=t);}return r}(e,t,n,i),c=Object.keys(l).sort();for(const d of c){const c=l[d];if(null===r?e.uniqueEmbeds={[e.graph]:{}}:e.uniqueEmbeds[e.graph]=e.uniqueEmbeds[e.graph]||{},"@link"===i.embed&&d in s){sn(o,r,s[d]);continue}const u={"@id":d};if(0===d.indexOf("_:")&&E.addValue(e.bnodeMap,d,u,{propertyIsArray:!0}),s[d]=u,("@first"===i.embed||"@last"===i.embed)&&e.is11)throw new k("Invalid JSON-LD syntax; invalid value of @embed.","jsonld.SyntaxError",{code:"invalid @embed value",frame:n});if(e.embedded||!e.uniqueEmbeds[e.graph].hasOwnProperty(d))if(!e.embedded||"@never"!==i.embed&&!en(c,e.graph,e.subjectStack))if(!e.embedded||"@first"!=i.embed&&"@once"!=i.embed||!e.uniqueEmbeds[e.graph].hasOwnProperty(d)){if("@last"===i.embed&&d in e.uniqueEmbeds[e.graph]&&rn(e,d),e.uniqueEmbeds[e.graph][d]={parent:o,property:r},e.subjectStack.push({subject:c,graph:e.graph}),d in e.graphMap){let t=!1,o=null;"@graph"in n?(o=n["@graph"][0],t=!("@merged"===d||"@default"===d),N.isObject(o)||(o={})):(t="@merged"!==e.graph,o={}),t&&Zt.frame({...e,graph:d,embedded:!1},Object.keys(e.graphMap[d]).sort(),[o],u,"@graph");}"@included"in n&&Zt.frame({...e,embedded:!1},t,n["@included"],u,"@included");for(const t of Object.keys(c).sort())if(Qt(t)){if(u[t]=E.clone(c[t]),"@type"===t)for(const t of c["@type"])0===t.indexOf("_:")&&E.addValue(e.bnodeMap,t,u,{propertyIsArray:!0});}else if(!i.explicit||t in n)for(const o of c[t]){const r=t in n?n[t]:Yt(i);if(O.isList(o)){const r=n[t]&&n[t][0]&&n[t][0]["@list"]?n[t][0]["@list"]:Yt(i),a={"@list":[]};sn(u,t,a);const s=o["@list"];for(const t of s)O.isSubjectReference(t)?Zt.frame({...e,embedded:!0},[t["@id"]],r,a,"@list"):sn(a,"@list",E.clone(t));}else O.isSubjectReference(o)?Zt.frame({...e,embedded:!0},[o["@id"]],r,u,t):cn(r[0],o)&&sn(u,t,E.clone(o));}for(const e of Object.keys(n).sort()){if("@type"===e){if(!N.isObject(n[e][0])||!("@default"in n[e][0]))continue}else if(Qt(e))continue;const t=n[e][0]||{};if(!tn(t,a,"omitDefault")&&!(e in u)){let n="@null";"@default"in t&&(n=E.clone(t["@default"])),N.isArray(n)||(n=[n]),u[e]=[{"@preserve":n}];}}for(const t of Object.keys(n["@reverse"]||{}).sort()){const o=n["@reverse"][t];for(const n of Object.keys(e.subjects)){E.getValues(e.subjects[n],t).some((e=>e["@id"]===d))&&(u["@reverse"]=u["@reverse"]||{},E.addValue(u["@reverse"],t,[],{propertyIsArray:!0}),Zt.frame({...e,embedded:!0},[n],o,u["@reverse"][t],r));}}sn(o,r,u),e.subjectStack.pop();}else sn(o,r,u);else sn(o,r,u);}},Zt.cleanupNull=(e,t)=>{if(N.isArray(e)){return e.map((e=>Zt.cleanupNull(e,t))).filter((e=>e))}if("@null"===e)return null;if(N.isObject(e)){if("@id"in e){const n=e["@id"];if(t.link.hasOwnProperty(n)){const o=t.link[n].indexOf(e);if(-1!==o)return t.link[n][o];t.link[n].push(e);}else t.link[n]=[e];}for(const n in e)e[n]=Zt.cleanupNull(e[n],t);}return e};const{isArray:dn,isObject:un,isString:pn,isUndefined:hn}=N,{isList:fn,isValue:vn,isGraph:gn,isSimpleGraph:yn,isSubjectReference:mn}=O,{expandIri:xn,getContextValue:bn,isKeyword:wn,process:jn,processingMode:In}=De,{removeBase:Nn,prependBase:Sn}=P,{addValue:On,asArray:kn,compareShortestLeast:Cn}=E,Ln={};var An=Ln;function Dn(e,t,n){if("@nest"!==xn(e,t,{vocab:!0},n))throw new k("JSON-LD compact error; nested property must have an @nest value resolving to @nest.","jsonld.SyntaxError",{code:"invalid @nest value"})}Ln.compact=async({activeCtx:e,activeProperty:t=null,element:n,options:o={},compactionMap:r=(()=>{})})=>{if(dn(n)){let a=[];for(let i=0;i<n.length;++i){let s=await Ln.compact({activeCtx:e,activeProperty:t,element:n[i],options:o,compactionMap:r});null===s&&(s=await r({unmappedValue:n[i],activeCtx:e,activeProperty:t,parent:n,index:i,options:o}),void 0===s)||a.push(s);}if(o.compactArrays&&1===a.length){0===(bn(e,t,"@container")||[]).length&&(a=a[0]);}return a}const a=bn(e,t,"@context");if(hn(a)||(e=await jn({activeCtx:e,localCtx:a,propagate:!0,overrideProtected:!0,options:o})),un(n)){if(o.link&&"@id"in n&&o.link.hasOwnProperty(n["@id"])){const e=o.link[n["@id"]];for(let t=0;t<e.length;++t)if(e[t].expanded===n)return e[t].compacted}if(vn(n)||mn(n)){const r=Ln.compactValue({activeCtx:e,activeProperty:t,value:n,options:o});return o.link&&mn(n)&&(o.link.hasOwnProperty(n["@id"])||(o.link[n["@id"]]=[]),o.link[n["@id"]].push({expanded:n,compacted:r})),r}if(fn(n)){if((bn(e,t,"@container")||[]).includes("@list"))return Ln.compact({activeCtx:e,activeProperty:t,element:n["@list"],options:o,compactionMap:r})}const a="@reverse"===t,i={},s=e;vn(n)||mn(n)||(e=e.revertToPreviousContext());const l=bn(s,t,"@context");hn(l)||(e=await jn({activeCtx:e,localCtx:l,propagate:!0,overrideProtected:!0,options:o})),o.link&&"@id"in n&&(o.link.hasOwnProperty(n["@id"])||(o.link[n["@id"]]=[]),o.link[n["@id"]].push({expanded:n,compacted:i}));let c=n["@type"]||[];c.length>1&&(c=Array.from(c).sort());const d=e;for(const t of c){const n=Ln.compactIri({activeCtx:d,iri:t,relativeTo:{vocab:!0}}),r=bn(s,n,"@context");hn(r)||(e=await jn({activeCtx:e,localCtx:r,options:o,propagate:!1}));}const u=Object.keys(n).sort();for(const l of u){const c=n[l];if("@id"!==l)if("@type"!==l)if("@reverse"!==l)if("@preserve"!==l)if("@index"!==l)if("@graph"!==l&&"@list"!==l&&"@included"!==l&&wn(l)){const t=Ln.compactIri({activeCtx:e,iri:l,relativeTo:{vocab:!0}});On(i,t,c);}else {if(!dn(c))throw new k("JSON-LD expansion error; expanded value must be an array.","jsonld.SyntaxError");if(0===c.length){const t=Ln.compactIri({activeCtx:e,iri:l,value:c,relativeTo:{vocab:!0},reverse:a}),n=e.mappings.has(t)?e.mappings.get(t)["@nest"]:null;let r=i;n&&(Dn(e,n,o),un(i[n])||(i[n]={}),r=i[n]),On(r,t,c,{propertyIsArray:!0});}for(const t of c){const n=Ln.compactIri({activeCtx:e,iri:l,value:t,relativeTo:{vocab:!0},reverse:a}),s=e.mappings.has(n)?e.mappings.get(n)["@nest"]:null;let c=i;s&&(Dn(e,s,o),un(i[s])||(i[s]={}),c=i[s]);const d=bn(e,n,"@container")||[],u=gn(t),p=fn(t);let h;p?h=t["@list"]:u&&(h=t["@graph"]);let f=await Ln.compact({activeCtx:e,activeProperty:n,element:p||u?h:t,options:o,compactionMap:r});if(p){if(dn(f)||(f=[f]),d.includes("@list")){On(c,n,f,{valueIsArray:!0,allowDuplicate:!0});continue}f={[Ln.compactIri({activeCtx:e,iri:"@list",relativeTo:{vocab:!0}})]:f},"@index"in t&&(f[Ln.compactIri({activeCtx:e,iri:"@index",relativeTo:{vocab:!0}})]=t["@index"]);}if(u)if(d.includes("@graph")&&(d.includes("@id")||d.includes("@index")&&yn(t))){let r;c.hasOwnProperty(n)?r=c[n]:c[n]=r={};const a=(d.includes("@id")?t["@id"]:t["@index"])||Ln.compactIri({activeCtx:e,iri:"@none",relativeTo:{vocab:!0}});On(r,a,f,{propertyIsArray:!o.compactArrays||d.includes("@set")});}else d.includes("@graph")&&yn(t)?(dn(f)&&f.length>1&&(f={"@included":f}),On(c,n,f,{propertyIsArray:!o.compactArrays||d.includes("@set")})):(dn(f)&&1===f.length&&o.compactArrays&&(f=f[0]),f={[Ln.compactIri({activeCtx:e,iri:"@graph",relativeTo:{vocab:!0}})]:f},"@id"in t&&(f[Ln.compactIri({activeCtx:e,iri:"@id",relativeTo:{vocab:!0}})]=t["@id"]),"@index"in t&&(f[Ln.compactIri({activeCtx:e,iri:"@index",relativeTo:{vocab:!0}})]=t["@index"]),On(c,n,f,{propertyIsArray:!o.compactArrays||d.includes("@set")}));else if(d.includes("@language")||d.includes("@index")||d.includes("@id")||d.includes("@type")){let a,i;if(c.hasOwnProperty(n)?a=c[n]:c[n]=a={},d.includes("@language"))vn(f)&&(f=f["@value"]),i=t["@language"];else if(d.includes("@index")){const o=bn(e,n,"@index")||"@index",r=Ln.compactIri({activeCtx:e,iri:o,relativeTo:{vocab:!0}});if("@index"===o)i=t["@index"],delete f[r];else {let e;if([i,...e]=kn(f[o]||[]),pn(i))switch(e.length){case 0:delete f[o];break;case 1:f[o]=e[0];break;default:f[o]=e;}else i=null;}}else if(d.includes("@id")){const t=Ln.compactIri({activeCtx:e,iri:"@id",relativeTo:{vocab:!0}});i=f[t],delete f[t];}else if(d.includes("@type")){const a=Ln.compactIri({activeCtx:e,iri:"@type",relativeTo:{vocab:!0}});let s;switch([i,...s]=kn(f[a]||[]),s.length){case 0:delete f[a];break;case 1:f[a]=s[0];break;default:f[a]=s;}1===Object.keys(f).length&&"@id"in t&&(f=await Ln.compact({activeCtx:e,activeProperty:n,element:{"@id":t["@id"]},options:o,compactionMap:r}));}i||(i=Ln.compactIri({activeCtx:e,iri:"@none",relativeTo:{vocab:!0}})),On(a,i,f,{propertyIsArray:d.includes("@set")});}else {const e=!o.compactArrays||d.includes("@set")||d.includes("@list")||dn(f)&&0===f.length||"@list"===l||"@graph"===l;On(c,n,f,{propertyIsArray:e});}}}else {if((bn(e,t,"@container")||[]).includes("@index"))continue;const n=Ln.compactIri({activeCtx:e,iri:l,relativeTo:{vocab:!0}});On(i,n,c);}else {const n=await Ln.compact({activeCtx:e,activeProperty:t,element:c,options:o,compactionMap:r});dn(n)&&0===n.length||On(i,l,n);}else {const t=await Ln.compact({activeCtx:e,activeProperty:"@reverse",element:c,options:o,compactionMap:r});for(const n in t)if(e.mappings.has(n)&&e.mappings.get(n).reverse){const r=t[n],a=(bn(e,n,"@container")||[]).includes("@set")||!o.compactArrays;On(i,n,r,{propertyIsArray:a}),delete t[n];}if(Object.keys(t).length>0){const n=Ln.compactIri({activeCtx:e,iri:l,relativeTo:{vocab:!0}});On(i,n,t);}}else {let t=kn(c).map((e=>Ln.compactIri({activeCtx:s,iri:e,relativeTo:{vocab:!0}})));1===t.length&&(t=t[0]);const n=Ln.compactIri({activeCtx:e,iri:"@type",relativeTo:{vocab:!0}}),o=(bn(e,n,"@container")||[]).includes("@set")&&In(e,1.1)||dn(t)&&0===c.length;On(i,n,t,{propertyIsArray:o});}else {let t=kn(c).map((t=>Ln.compactIri({activeCtx:e,iri:t,relativeTo:{vocab:!1},base:o.base})));1===t.length&&(t=t[0]);i[Ln.compactIri({activeCtx:e,iri:"@id",relativeTo:{vocab:!0}})]=t;}}return i}return n},Ln.compactIri=({activeCtx:e,iri:t,value:n=null,relativeTo:o={vocab:!1},reverse:r=!1,base:a=null})=>{if(null===t)return t;e.isPropertyTermScoped&&e.previousContext&&(e=e.previousContext);const i=e.getInverse();if(wn(t)&&t in i&&"@none"in i[t]&&"@type"in i[t]["@none"]&&"@none"in i[t]["@none"]["@type"])return i[t]["@none"]["@type"]["@none"];if(o.vocab&&t in i){const o=e["@language"]||"@none",a=[];un(n)&&"@index"in n&&!("@graph"in n)&&a.push("@index","@index@set"),un(n)&&"@preserve"in n&&(n=n["@preserve"][0]),gn(n)?("@index"in n&&a.push("@graph@index","@graph@index@set","@index","@index@set"),"@id"in n&&a.push("@graph@id","@graph@id@set"),a.push("@graph","@graph@set","@set"),"@index"in n||a.push("@graph@index","@graph@index@set","@index","@index@set"),"@id"in n||a.push("@graph@id","@graph@id@set")):un(n)&&!vn(n)&&a.push("@id","@id@set","@type","@set@type");let i="@language",s="@null";if(r)i="@type",s="@reverse",a.push("@set");else if(fn(n)){"@index"in n||a.push("@list");const e=n["@list"];if(0===e.length)i="@any",s="@none";else {let t=0===e.length?o:null,n=null;for(let o=0;o<e.length;++o){const r=e[o];let a="@none",i="@none";if(vn(r))if("@direction"in r){a=`${(r["@language"]||"").toLowerCase()}_${r["@direction"]}`;}else "@language"in r?a=r["@language"].toLowerCase():"@type"in r?i=r["@type"]:a="@null";else i="@id";if(null===t?t=a:a!==t&&vn(r)&&(t="@none"),null===n?n=i:i!==n&&(n="@none"),"@none"===t&&"@none"===n)break}t=t||"@none",n=n||"@none","@none"!==n?(i="@type",s=n):s=t;}}else {if(vn(n))if("@language"in n&&!("@index"in n)){a.push("@language","@language@set"),s=n["@language"];const e=n["@direction"];e&&(s=`${s}_${e}`);}else "@direction"in n&&!("@index"in n)?s=`_${n["@direction"]}`:"@type"in n&&(i="@type",s=n["@type"]);else i="@type",s="@id";a.push("@set");}a.push("@none"),un(n)&&!("@index"in n)&&a.push("@index","@index@set"),vn(n)&&1===Object.keys(n).length&&a.push("@language","@language@set");const l=function(e,t,n,o,r,a){null===a&&(a="@null");const i=[];if(("@id"===a||"@reverse"===a)&&un(n)&&"@id"in n){"@reverse"===a&&i.push("@reverse");const t=Ln.compactIri({activeCtx:e,iri:n["@id"],relativeTo:{vocab:!0}});e.mappings.has(t)&&e.mappings.get(t)&&e.mappings.get(t)["@id"]===n["@id"]?i.push.apply(i,["@vocab","@id"]):i.push.apply(i,["@id","@vocab"]);}else {i.push(a);const e=i.find((e=>e.includes("_")));e&&i.push(e.replace(/^[^_]+_/,"_"));}i.push("@none");const s=e.inverse[t];for(const e of o){if(!(e in s))continue;const t=s[e][r];for(const e of i)if(e in t)return t[e]}return null}(e,t,n,a,i,s);if(null!==l)return l}if(o.vocab&&"@vocab"in e){const n=e["@vocab"];if(0===t.indexOf(n)&&t!==n){const o=t.substr(n.length);if(!e.mappings.has(o))return o}}let s=null;const l=[];let c=e.fastCurieMap;const d=t.length-1;for(let e=0;e<d&&t[e]in c;++e)c=c[t[e]],""in c&&l.push(c[""][0]);for(let o=l.length-1;o>=0;--o){const r=l[o],a=r.terms;for(const o of a){const a=o+":"+t.substr(r.iri.length);e.mappings.get(o)._prefix&&(!e.mappings.has(a)||null===n&&e.mappings.get(a)["@id"]===t)&&(null===s||Cn(a,s)<0)&&(s=a);}}if(null!==s)return s;for(const[n,o]of e.mappings)if(o&&o._prefix&&t.startsWith(n+":"))throw new k(`Absolute IRI "${t}" confused with prefix "${n}".`,"jsonld.SyntaxError",{code:"IRI confused with prefix",context:e});return o.vocab?t:"@base"in e?e["@base"]?Nn(Sn(a,e["@base"]),t):t:Nn(a,t)},Ln.compactValue=({activeCtx:e,activeProperty:t,value:n,options:o})=>{if(vn(n)){const o=bn(e,t,"@type"),r=bn(e,t,"@language"),a=bn(e,t,"@direction"),i=bn(e,t,"@container")||[],s="@index"in n&&!i.includes("@index");if(!s&&"@none"!==o){if(n["@type"]===o)return n["@value"];if("@language"in n&&n["@language"]===r&&"@direction"in n&&n["@direction"]===a)return n["@value"];if("@language"in n&&n["@language"]===r)return n["@value"];if("@direction"in n&&n["@direction"]===a)return n["@value"]}const l=Object.keys(n).length,c=1===l||2===l&&"@index"in n&&!s,d="@language"in e,u=pn(n["@value"]),p=e.mappings.has(t)&&null===e.mappings.get(t)["@language"];if(c&&"@none"!==o&&(!d||!u||p))return n["@value"];const h={};return s&&(h[Ln.compactIri({activeCtx:e,iri:"@index",relativeTo:{vocab:!0}})]=n["@index"]),"@type"in n?h[Ln.compactIri({activeCtx:e,iri:"@type",relativeTo:{vocab:!0}})]=Ln.compactIri({activeCtx:e,iri:n["@type"],relativeTo:{vocab:!0}}):"@language"in n&&(h[Ln.compactIri({activeCtx:e,iri:"@language",relativeTo:{vocab:!0}})]=n["@language"]),"@direction"in n&&(h[Ln.compactIri({activeCtx:e,iri:"@direction",relativeTo:{vocab:!0}})]=n["@direction"]),h[Ln.compactIri({activeCtx:e,iri:"@value",relativeTo:{vocab:!0}})]=n["@value"],h}const r=xn(e,t,{vocab:!0},o),a=bn(e,t,"@type"),i=Ln.compactIri({activeCtx:e,iri:n["@id"],relativeTo:{vocab:"@vocab"===a},base:o.base});return "@id"===a||"@vocab"===a||"@graph"===r?i:{[Ln.compactIri({activeCtx:e,iri:"@id",relativeTo:{vocab:!0}})]:i}};var Tn=class{constructor(){this._requests={};}wrapLoader(e){const t=this;return t._loader=e,function(){return t.add.apply(t,arguments)}}async add(e){let t=this._requests[e];if(t)return Promise.resolve(t);t=this._requests[e]=this._loader(e);try{return await t}finally{delete this._requests[e];}}};const{parseLinkHeader:Rn,buildHeaders:En}=E,{LINK_HEADER_CONTEXT:_n}=vt,{prependBase:Mn}=P;var Pn=({secure:e,strictSSL:t=!0,maxRedirects:n=-1,request:o,headers:r={}}={strictSSL:!0,maxRedirects:-1,headers:{}})=>{r=En(r),o=o||x;const a=x;return (new Tn).wrapLoader((function(e){return i(e,[])}));async function i(s,l){if(0!==s.indexOf("http:")&&0!==s.indexOf("https:"))throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.',"jsonld.InvalidUrl",{code:"loading document failed",url:s});if(e&&0!==s.indexOf("https"))throw new k('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".',"jsonld.InvalidUrl",{code:"loading document failed",url:s});let c,d=null;if(null!==d)return d;let u=null;try{c=await function(e,t){return new Promise(((n,o)=>{e(t,((e,t,r)=>{e?o(e):n({res:t,body:r});}));}))}(o,{url:s,headers:r,strictSSL:t,followRedirect:!1});}catch(e){throw new k("URL could not be dereferenced, an error occurred.","jsonld.LoadDocumentError",{code:"loading document failed",url:s,cause:e})}const{res:p,body:h}=c;d={contextUrl:null,documentUrl:s,document:h||null};const f=a.STATUS_CODES[p.statusCode];if(p.statusCode>=400)throw new k(`URL "${s}" could not be dereferenced: ${f}`,"jsonld.InvalidUrl",{code:"loading document failed",url:s,httpStatusCode:p.statusCode});if(p.headers.link&&"application/ld+json"!==p.headers["content-type"]){const e=Rn(p.headers.link),t=e[_n];if(Array.isArray(t))throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.","jsonld.InvalidUrl",{code:"multiple context link headers",url:s});t&&(d.contextUrl=t.target),u=e.alternate,u&&"application/ld+json"==u.type&&!(p.headers["content-type"]||"").match(/^application\/(\w*\+)?json$/)&&(p.headers.location=Mn(s,u.target));}if((u||p.statusCode>=300&&p.statusCode<400)&&p.headers.location){if(l.length===n)throw new k("URL could not be dereferenced; there were too many redirects.","jsonld.TooManyRedirects",{code:"loading document failed",url:s,httpStatusCode:p.statusCode,redirects:l});if(-1!==l.indexOf(s))throw new k("URL could not be dereferenced; infinite redirection was detected.","jsonld.InfiniteRedirectDetected",{code:"recursive context inclusion",url:s,httpStatusCode:p.statusCode,redirects:l});return l.push(s),i(p.headers.location,l)}return l.push(s),d}};const{parseLinkHeader:Jn,buildHeaders:Bn}=E,{LINK_HEADER_CONTEXT:Fn}=vt,{prependBase:Un}=P,qn=/(^|(\r\n))link:/i;var Vn=({secure:e,headers:t={},xhr:n}={headers:{}})=>{t=Bn(t);return (new Tn).wrapLoader((async function o(r){if(0!==r.indexOf("http:")&&0!==r.indexOf("https:"))throw new k('URL could not be dereferenced; only "http" and "https" URLs are supported.',"jsonld.InvalidUrl",{code:"loading document failed",url:r});if(e&&0!==r.indexOf("https"))throw new k('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".',"jsonld.InvalidUrl",{code:"loading document failed",url:r});let a;try{a=await function(e,t,n){const o=new(e=e||XMLHttpRequest);return new Promise(((e,r)=>{o.onload=()=>e(o),o.onerror=e=>r(e),o.open("GET",t,!0);for(const e in n)o.setRequestHeader(e,n[e]);o.send();}))}(n,r,t);}catch(e){throw new k("URL could not be dereferenced, an error occurred.","jsonld.LoadDocumentError",{code:"loading document failed",url:r,cause:e})}if(a.status>=400)throw new k("URL could not be dereferenced: "+a.statusText,"jsonld.LoadDocumentError",{code:"loading document failed",url:r,httpStatusCode:a.status});let i={contextUrl:null,documentUrl:r,document:a.response},s=null;const l=a.getResponseHeader("Content-Type");let c;qn.test(a.getAllResponseHeaders())&&(c=a.getResponseHeader("Link"));if(c&&"application/ld+json"!==l){const e=Jn(c),t=e[Fn];if(Array.isArray(t))throw new k("URL could not be dereferenced, it has more than one associated HTTP Link Header.","jsonld.InvalidUrl",{code:"multiple context link headers",url:r});t&&(i.contextUrl=t.target),s=e.alternate,s&&"application/ld+json"==s.type&&!(l||"").match(/^application\/(\w*\+)?json$/)&&(i=await o(Un(r,s.target)));}return i}))};
/**
 * A JavaScript implementation of the JSON-LD API.
 * @author Dave Longley
 * @license BSD 3-Clause License
 */
const zn=E.IdentifierIssuer,{expand:$n}=et,{flatten:Gn}=pt,{fromRDF:Hn}=Ct,{toRDF:Qn}=$t,{frameMergedOrDefault:Kn,cleanupNull:Xn}=Wt,{isArray:Zn,isObject:Wn,isString:Yn}=N,{isSubjectReference:eo}=O,{expandIri:to,getInitialContext:no,process:oo,processingMode:ro}=De,{compact:ao,compactIri:io}=An,{createNodeMap:so,createMergedNodeMap:lo,mergeNodeMaps:co}=lt,uo="undefined"!=typeof process&&process.versions&&process.versions.node,po=!uo&&("undefined"!=typeof window||"undefined"!=typeof self),ho=function(t){const n={},o=new le({max:100});function r(e,{documentLoader:n=t.documentLoader,...o}){return Object.assign({},{documentLoader:n},o,e)}return t.compact=async function(e,n,a){if(arguments.length<2)throw new TypeError("Could not compact, too few arguments.");if(null===n)throw new k("The compaction context must not be null.","jsonld.CompactError",{code:"invalid local context"});if(null===e)return null;let i;(a=r(a,{base:Yn(e)?e:"",compactArrays:!0,compactToRelative:!0,graph:!1,skipExpansion:!1,link:!1,issuer:new zn("_:b"),contextResolver:new ve({sharedCache:o})})).link&&(a.skipExpansion=!0),a.compactToRelative||delete a.base,i=a.skipExpansion?e:await t.expand(e,a);const s=await t.processContext(no(a),n,a);let l=await ao({activeCtx:s,element:i,options:a,compactionMap:a.compactionMap});a.compactArrays&&!a.graph&&Zn(l)?1===l.length?l=l[0]:0===l.length&&(l={}):a.graph&&Wn(l)&&(l=[l]),Wn(n)&&"@context"in n&&(n=n["@context"]),n=E.clone(n),Zn(n)||(n=[n]);const c=n;n=[];for(let e=0;e<c.length;++e)(!Wn(c[e])||Object.keys(c[e]).length>0)&&n.push(c[e]);const d=n.length>0;if(1===n.length&&(n=n[0]),Zn(l)){const e=io({activeCtx:s,iri:"@graph",relativeTo:{vocab:!0}}),t=l;l={},d&&(l["@context"]=n),l[e]=t;}else if(Wn(l)&&d){const e=l;l={"@context":n};for(const t in e)l[t]=e[t];}return l},t.expand=async function(e,n){if(arguments.length<1)throw new TypeError("Could not expand, too few arguments.");!1===(n=r(n,{keepFreeFloatingNodes:!1,contextResolver:new ve({sharedCache:o})})).expansionMap&&(n.expansionMap=void 0);const a={},i=[];if("expandContext"in n){const e=E.clone(n.expandContext);Wn(e)&&"@context"in e?a.expandContext=e:a.expandContext={"@context":e},i.push(a.expandContext);}let s;if(Yn(e)){const o=await t.get(e,n);s=o.documentUrl,a.input=o.document,o.contextUrl&&(a.remoteContext={"@context":o.contextUrl},i.push(a.remoteContext));}else a.input=E.clone(e);"base"in n||(n.base=s||"");let l=no(n);for(const e of i)l=await oo({activeCtx:l,localCtx:e,options:n});let c=await $n({activeCtx:l,element:a.input,options:n,expansionMap:n.expansionMap});return Wn(c)&&"@graph"in c&&1===Object.keys(c).length?c=c["@graph"]:null===c&&(c=[]),Zn(c)||(c=[c]),c},t.flatten=async function(e,n,a){if(arguments.length<1)return new TypeError("Could not flatten, too few arguments.");n="function"==typeof n?null:n||null,a=r(a,{base:Yn(e)?e:"",contextResolver:new ve({sharedCache:o})});const i=await t.expand(e,a),s=Gn(i);if(null===n)return s;a.graph=!0,a.skipExpansion=!0;const l=await t.compact(s,n,a);return l},t.frame=async function(e,n,a){if(arguments.length<2)throw new TypeError("Could not frame, too few arguments.");if(a=r(a,{base:Yn(e)?e:"",embed:"@once",explicit:!1,requireAll:!1,omitDefault:!1,bnodesToClear:[],contextResolver:new ve({sharedCache:o})}),Yn(n)){const e=await t.get(n,a);if(n=e.document,e.contextUrl){let t=n["@context"];t?Zn(t)?t.push(e.contextUrl):t=[t,e.contextUrl]:t=e.contextUrl,n["@context"]=t;}}const i=n&&n["@context"]||{},s=await t.processContext(no(a),i,a);a.hasOwnProperty("omitGraph")||(a.omitGraph=ro(s,1.1)),a.hasOwnProperty("pruneBlankNodeIdentifiers")||(a.pruneBlankNodeIdentifiers=ro(s,1.1));const l=await t.expand(e,a),c={...a};c.isFrame=!0,c.keepFreeFloatingNodes=!0;const d=await t.expand(n,c),u=Object.keys(n).map((e=>to(s,e,{vocab:!0})));c.merged=!u.includes("@graph"),c.is11=ro(s,1.1);const p=Kn(l,d,c);c.graph=!a.omitGraph,c.skipExpansion=!0,c.link={},c.framing=!0;let h=await t.compact(p,i,c);return c.link={},h=Xn(h,c),h},t.link=async function(e,n,o){const r={};return n&&(r["@context"]=n),r["@embed"]="@link",t.frame(e,r,o)},t.normalize=t.canonize=async function(e,n){if(arguments.length<1)throw new TypeError("Could not canonize, too few arguments.");if("inputFormat"in(n=r(n,{base:Yn(e)?e:"",algorithm:"URDNA2015",skipExpansion:!1,contextResolver:new ve({sharedCache:o})}))){if("application/n-quads"!==n.inputFormat&&"application/nquads"!==n.inputFormat)throw new k("Unknown canonicalization input format.","jsonld.CanonizeError");const t=me.parse(e);return j.canonize(t,n)}const a={...n};delete a.format,a.produceGeneralizedRdf=!1;const i=await t.toRDF(e,a);return j.canonize(i,n)},t.fromRDF=async function(e,t){if(arguments.length<1)throw new TypeError("Could not convert from RDF, too few arguments.");t=r(t,{format:Yn(e)?"application/n-quads":void 0});const{format:o}=t;let{rdfParser:a}=t;if(o){if(a=a||n[o],!a)throw new k("Unknown input format.","jsonld.UnknownFormat",{format:o})}else a=()=>e;const i=await a(e);return Hn(i,t)},t.toRDF=async function(e,n){if(arguments.length<1)throw new TypeError("Could not convert to RDF, too few arguments.");let a;a=(n=r(n,{base:Yn(e)?e:"",skipExpansion:!1,contextResolver:new ve({sharedCache:o})})).skipExpansion?e:await t.expand(e,n);const i=Qn(a,n);if(n.format){if("application/n-quads"===n.format||"application/nquads"===n.format)return await me.serialize(i);throw new k("Unknown output format.","jsonld.UnknownFormat",{format:n.format})}return i},t.createNodeMap=async function(e,n){if(arguments.length<1)throw new TypeError("Could not create node map, too few arguments.");n=r(n,{base:Yn(e)?e:"",contextResolver:new ve({sharedCache:o})});const a=await t.expand(e,n);return lo(a,n)},t.merge=async function(e,n,a){if(arguments.length<1)throw new TypeError("Could not merge, too few arguments.");if(!Zn(e))throw new TypeError('Could not merge, "docs" must be an array.');n="function"==typeof n?null:n||null,a=r(a,{contextResolver:new ve({sharedCache:o})});const i=await Promise.all(e.map((e=>{const n={...a};return t.expand(e,n)})));let s=!0;"mergeNodes"in a&&(s=a.mergeNodes);const l=a.issuer||new zn("_:b"),c={"@default":{}};for(let e=0;e<i.length;++e){const t=E.relabelBlankNodes(i[e],{issuer:new zn("_:b"+e+"-")}),n=s||0===e?c:{"@default":{}};if(so(t,n,"@default",l),n!==c)for(const e in n){const t=n[e];if(!(e in c)){c[e]=t;continue}const o=c[e];for(const e in t)e in o||(o[e]=t[e]);}}const d=co(c),u=[],p=Object.keys(d).sort();for(let e=0;e<p.length;++e){const t=d[p[e]];eo(t)||u.push(t);}if(null===n)return u;a.graph=!0,a.skipExpansion=!0;const h=await t.compact(u,n,a);return h},Object.defineProperty(t,"documentLoader",{get:()=>t._documentLoader,set:e=>t._documentLoader=e}),t.documentLoader=async e=>{throw new k("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.","jsonld.LoadDocumentError",{code:"loading document failed",url:e})},t.get=async function(e,n){let o;o="function"==typeof n.documentLoader?n.documentLoader:t.documentLoader;const r=await o(e);try{if(!r.document)throw new k("No remote document found at the given URL.","jsonld.NullRemoteDocument");Yn(r.document)&&(r.document=JSON.parse(r.document));}catch(e){throw new k("Could not retrieve a JSON-LD document from the URL.","jsonld.LoadDocumentError",{code:"loading document failed",cause:e,remoteDoc:r})}return r},t.processContext=async function(e,t,n){return n=r(n,{base:"",contextResolver:new ve({sharedCache:o})}),null===t?no(n):(t=E.clone(t),Wn(t)&&"@context"in t||(t={"@context":t}),oo({activeCtx:e,localCtx:t,options:n}))},t.getContextValue=De.getContextValue,t.documentLoaders={},t.documentLoaders.node=Pn,t.documentLoaders.xhr=Vn,t.useDocumentLoader=function(e){if(!(e in t.documentLoaders))throw new k('Unknown document loader type: "'+e+'"',"jsonld.UnknownDocumentLoader",{type:e});t.documentLoader=t.documentLoaders[e].apply(t,Array.prototype.slice.call(arguments,1));},t.registerRDFParser=function(e,t){n[e]=t;},t.unregisterRDFParser=function(e){delete n[e];},t.registerRDFParser("application/n-quads",me.parse),t.registerRDFParser("application/nquads",me.parse),t.url=P,t.util=E,Object.assign(t,E),t.promises=t,t.RequestQueue=Tn,t.JsonLdProcessor=(e=>{class t{toString(){return "[object JsonLdProcessor]"}}return Object.defineProperty(t,"prototype",{writable:!1,enumerable:!1}),Object.defineProperty(t.prototype,"constructor",{writable:!0,enumerable:!1,configurable:!0,value:t}),t.compact=function(t,n){return arguments.length<2?Promise.reject(new TypeError("Could not compact, too few arguments.")):e.compact(t,n)},t.expand=function(t){return arguments.length<1?Promise.reject(new TypeError("Could not expand, too few arguments.")):e.expand(t)},t.flatten=function(t){return arguments.length<1?Promise.reject(new TypeError("Could not flatten, too few arguments.")):e.flatten(t)},t})(t),po&&void 0===e.JsonLdProcessor&&Object.defineProperty(e,"JsonLdProcessor",{writable:!0,enumerable:!1,configurable:!0,value:t.JsonLdProcessor}),uo?t.useDocumentLoader("node"):"undefined"!=typeof XMLHttpRequest&&t.useDocumentLoader("xhr"),t};
const fo=function(){return ho((function(){return fo()}))};ho(fo);const jsonld = Object.assign({
  expand: (json) => json,
  compact: (json, context) => json
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

var cjs$5 = _ => ({
  // About: get: _.get.bind(_)
  // It looks like WebKit/Safari didn't optimize bind at all,
  // so that using bind slows it down by 60%.
  // Firefox and Chrome are just fine in both cases,
  // so let's use the approach that works fast everywhere 👍
  get: key => _.get(key),
  set: (key, value) => (_.set(key, value), value)
});

const attr = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/;
const empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const node = /<[a-z][^>]+$/i;
const notNode = />[^<>]*$/;
const selfClosing = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig;
const trimEnd = /\s+$/;

const isNode = (template, i) => (
    0 < i-- && (
    node.test(template[i]) || (
      !notNode.test(template[i]) && isNode(template, i)
    )
  )
);

const regular = (original, name, extra) => empty.test(name) ?
                  original : `<${name}${extra.replace(trimEnd,'')}></${name}>`;

var cjs$4 = (template, prefix, svg) => {
  const text = [];
  const {length} = template;
  for (let i = 1; i < length; i++) {
    const chunk = template[i - 1];
    text.push(attr.test(chunk) && isNode(template, i) ?
      chunk.replace(
        attr,
        (_, $1, $2) => `${prefix}${i - 1}=${$2 || '"'}${$1}${$2 ? '' : '"'}`
      ) :
      `${chunk}<!--${prefix}${i - 1}-->`
    );
  }
  text.push(template[length - 1]);
  const output = text.join('').trim();
  return svg ? output : output.replace(selfClosing, regular);
};

const {isArray: isArray$2} = Array;
const {indexOf, slice: slice$1} = [];

var isArray_1 = isArray$2;
var indexOf_1 = indexOf;
var slice_1 = slice$1;

var cjs$3 = {
	isArray: isArray_1,
	indexOf: indexOf_1,
	slice: slice_1
};

const {slice} = cjs$3;

const ELEMENT_NODE = 1;
const nodeType = 111;

const remove = ({firstChild, lastChild}) => {
  const range = document.createRange();
  range.setStartAfter(firstChild);
  range.setEndAfter(lastChild);
  range.deleteContents();
  return firstChild;
};

const diffable = (node, operation) => node.nodeType === nodeType ?
  ((1 / operation) < 0 ?
    (operation ? remove(node) : node.lastChild) :
    (operation ? node.valueOf() : node.firstChild)) :
  node
;
var diffable_1 = diffable;

const persistent = fragment => {
  const {childNodes} = fragment;
  const {length} = childNodes;
  if (length < 2)
    return length ? childNodes[0] : fragment;
  const nodes = slice.call(childNodes, 0);
  const firstChild = nodes[0];
  const lastChild = nodes[length - 1];
  return {
    ELEMENT_NODE,
    nodeType,
    firstChild,
    lastChild,
    valueOf() {
      if (childNodes.length !== length) {
        let i = 0;
        while (i < length)
          fragment.appendChild(nodes[i++]);
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
var cjs$2 = (parentNode, a, b, get, before) => {
  const bLength = b.length;
  let aEnd = a.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map = null;
  while (aStart < aEnd || bStart < bEnd) {
    // append head, tail, or nodes in between: fast path
    if (aEnd === aStart) {
      // we could be in a situation where the rest of nodes that
      // need to be added are not at the end, and in such case
      // the node to `insertBefore`, if the index is more than 0
      // must be retrieved, otherwise it's gonna be the first item.
      const node = bEnd < bLength ?
        (bStart ?
          (get(b[bStart - 1], -0).nextSibling) :
          get(b[bEnd - bStart], 0)) :
        before;
      while (bStart < bEnd)
        parentNode.insertBefore(get(b[bStart++], 1), node);
    }
    // remove head or tail: fast path
    else if (bEnd === bStart) {
      while (aStart < aEnd) {
        // remove the node only if it's unknown or not live
        if (!map || !map.has(a[aStart]))
          parentNode.removeChild(get(a[aStart], -1));
        aStart++;
      }
    }
    // same node: fast path
    else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    }
    // same tail: fast path
    else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    // The once here single last swap "fast path" has been removed in v1.1.0
    // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
    // reverse swap: also fast path
    else if (
      a[aStart] === b[bEnd - 1] &&
      b[bStart] === a[aEnd - 1]
    ) {
      // this is a "shrink" operation that could happen in these cases:
      // [1, 2, 3, 4, 5]
      // [1, 4, 3, 2, 5]
      // or asymmetric too
      // [1, 2, 3, 4, 5]
      // [1, 2, 3, 5, 6, 4]
      const node = get(a[--aEnd], -1).nextSibling;
      parentNode.insertBefore(
        get(b[bStart++], 1),
        get(a[aStart++], -1).nextSibling
      );
      parentNode.insertBefore(get(b[--bEnd], 1), node);
      // mark the future index as identical (yeah, it's dirty, but cheap 👍)
      // The main reason to do this, is that when a[aEnd] will be reached,
      // the loop will likely be on the fast path, as identical to b[bEnd].
      // In the best case scenario, the next loop will skip the tail,
      // but in the worst one, this node will be considered as already
      // processed, bailing out pretty quickly from the map index check
      a[aEnd] = b[bEnd];
    }
    // map based fallback, "slow" path
    else {
      // the map requires an O(bEnd - bStart) operation once
      // to store all future nodes indexes for later purposes.
      // In the worst case scenario, this is a full O(N) cost,
      // and such scenario happens at least when all nodes are different,
      // but also if both first and last items of the lists are different
      if (!map) {
        map = new Map;
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      // if it's a future node, hence it needs some handling
      if (map.has(a[aStart])) {
        // grab the index of such node, 'cause it might have been processed
        const index = map.get(a[aStart]);
        // if it's not already processed, look on demand for the next LCS
        if (bStart < index && index < bEnd) {
          let i = aStart;
          // counts the amount of nodes that are the same in the future
          let sequence = 1;
          while (++i < aEnd && i < bEnd && map.get(a[i]) === (index + sequence))
            sequence++;
          // effort decision here: if the sequence is longer than replaces
          // needed to reach such sequence, which would brings again this loop
          // to the fast path, prepend the difference before a sequence,
          // and move only the future list index forward, so that aStart
          // and bStart will be aligned again, hence on the fast path.
          // An example considering aStart and bStart are both 0:
          // a: [1, 2, 3, 4]
          // b: [7, 1, 2, 3, 6]
          // this would place 7 before 1 and, from that time on, 1, 2, and 3
          // will be processed at zero cost
          if (sequence > (index - bStart)) {
            const node = get(a[aStart], 0);
            while (bStart < index)
              parentNode.insertBefore(get(b[bStart++], 1), node);
          }
          // if the effort wasn't good enough, fallback to a replace,
          // moving both source and target indexes forward, hoping that some
          // similar node will be found later on, to go back to the fast path
          else {
            parentNode.replaceChild(
              get(b[bStart++], 1),
              get(a[aStart++], -1)
            );
          }
        }
        // otherwise move the source forward, 'cause there's nothing to do
        else
          aStart++;
      }
      // this node has no meaning in the future list, so it's more than safe
      // to remove it, and check the next live node out instead, meaning
      // that only the live list index should be forwarded
      else
        parentNode.removeChild(get(a[aStart++], -1));
    }
  }
  return b;
};

const {isArray: isArray$1} = cjs$3;

const aria = node => values => {
  for (const key in values) {
    const name = key === 'role' ? key : `aria-${key}`;
    const value = values[key];
    if (value == null)
      node.removeAttribute(name);
    else
      node.setAttribute(name, value);
  }
};
var aria_1 = aria;

const attribute = (node, name) => {
  let oldValue, orphan = true;
  const attributeNode = document.createAttributeNS(null, name);
  return newValue => {
    if (oldValue !== newValue) {
      oldValue = newValue;
      if (oldValue == null) {
        if (!orphan) {
          node.removeAttributeNode(attributeNode);
          orphan = true;
        }
      }
      else {
        const value = newValue;
        if (value == null) {
          if (!orphan)
            node.removeAttributeNode(attributeNode);
            orphan = true;
        }
        else {
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

const boolean = (node, key, oldValue) => newValue => {
  if (oldValue !== !!newValue) {
    // when IE won't be around anymore ...
    // node.toggleAttribute(key, oldValue = !!newValue);
    if ((oldValue = !!newValue))
      node.setAttribute(key, '');
    else
      node.removeAttribute(key);
  }
};
var boolean_1 = boolean;

const data = ({dataset}) => values => {
  for (const key in values) {
    const value = values[key];
    if (value == null)
      delete dataset[key];
    else
      dataset[key] = value;
  }
};

const event = (node, name) => {
  let oldValue, lower, type = name.slice(2);
  if (!(name in node) && (lower = name.toLowerCase()) in node)
    type = lower.slice(2);
  return newValue => {
    const info = isArray$1(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue)
        node.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0])
        node.addEventListener(type, oldValue, info[1]);
    }
  };
};
var event_1 = event;

const ref = node => {
  let oldValue;
  return value => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === 'function')
        value(node);
      else
        value.current = node;
    }
  };
};
var ref_1 = ref;

const setter = (node, key) => key === 'dataset' ?
  data(node) :
  value => {
    node[key] = value;
  };
var setter_1 = setter;

const text = node => {
  let oldValue;
  return newValue => {
    if (oldValue != newValue) {
      oldValue = newValue;
      node.textContent = newValue == null ? '' : newValue;
    }
  };
};
var text_1 = text;

// from a generic path, retrieves the exact targeted node
const reducePath = ({childNodes}, i) => childNodes[i];

// this helper avoid code bloat around handleAnything() callback
const diff = (comment, oldNodes, newNodes) => cjs$2(
  comment.parentNode,
  // TODO: there is a possible edge case where a node has been
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
  oldNodes,
  newNodes,
  diffable_1,
  comment
);

// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
const handleAnything = comment => {
  let oldValue, text, nodes = [];
  const anyContent = newValue => {
    switch (typeof newValue) {
      // primitives are handled as text content
      case 'string':
      case 'number':
      case 'boolean':
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (!text)
            text = document.createTextNode('');
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
        }
        // arrays and nodes have a special treatment
        if (isArray_1(newValue)) {
          oldValue = newValue;
          // arrays can be used to cleanup, if empty
          if (newValue.length === 0)
            nodes = diff(comment, nodes, []);
          // or diffed, if these contains nodes or "wires"
          else if (typeof newValue[0] === 'object')
            nodes = diff(comment, nodes, newValue);
          // in all other cases the content is stringified as is
          else
            anyContent(String(newValue));
          break;
        }
        // if the new value is a DOM node, or a wire, and it's
        // different from the one already live, then it's diffed.
        // if the node is a fragment, it's appended once via its childNodes
        // There is no `else` here, meaning if the content
        // is not expected one, nothing happens, as easy as that.
        if (oldValue !== newValue && 'ELEMENT_NODE' in newValue) {
          oldValue = newValue;
          nodes = diff(
            comment,
            nodes,
            newValue.nodeType === 11 ?
              slice_1.call(newValue.childNodes) :
              [newValue]
          );
        }
        break;
      case 'function':
        anyContent(newValue(comment));
        break;
    }
  };
  return anyContent;
};

// attributes can be:
//  * ref=${...}      for hooks and other purposes
//  * aria=${...}     for aria attributes
//  * ?boolean=${...} for boolean attributes
//  * .dataset=${...} for dataset related attributes
//  * .setter=${...}  for Custom Elements setters or nodes with setters
//                    such as buttons, details, options, select, etc
//  * @event=${...}   to explicitly handle event listeners
//  * onevent=${...}  to automatically handle event listeners
//  * generic=${...}  to handle an attribute just like an attribute
const handleAttribute = (node, name/*, svg*/) => {
  switch (name[0]) {
    case '?': return boolean_1(node, name.slice(1), false);
    case '.': return setter_1(node, name.slice(1));
    case '@': return event_1(node, 'on' + name.slice(1));
    case 'o': if (name[1] === 'n') return event_1(node, name);
  }

  switch (name) {
    case 'ref': return ref_1(node);
    case 'aria': return aria_1(node);
  }

  return attribute_1(node, name/*, svg*/);
};

// each mapped update carries the update type and its path
// the type is either node, attribute, or text, while
// the path is how to retrieve the related node to update.
// In the attribute case, the attribute name is also carried along.
function handlers(options) {
  const {type, path} = options;
  const node = path.reduceRight(reducePath, this);
  return type === 'node' ?
    handleAnything(node) :
    (type === 'attr' ?
      handleAttribute(node, options.name/*, options.svg*/) :
      text_1(node));
}

/*! (c) Andrea Giammarchi - ISC */
var createContent = (function (document) {  var FRAGMENT = 'fragment';
  var TEMPLATE = 'template';
  var HAS_CONTENT = 'content' in create(TEMPLATE);

  var createHTML = HAS_CONTENT ?
    function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } :
    function (html) {
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
    while (length--)
      root.appendChild(childNodes[0]);
  }

  function create(element) {
    return element === FRAGMENT ?
      document.createDocumentFragment() :
      document.createElementNS('http://www.w3.org/1999/xhtml', element);
  }

  // it could use createElementNS when hasNode is there
  // but this fallback is equally fast and easier to maintain
  // it is also battle tested already in all IE
  function createSVG(svg) {
    var content = create(FRAGMENT);
    var template = create('div');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
    append(content, template.firstChild.childNodes);
    return content;
  }

}(document));
var cjs$1 = createContent;

// this "hack" tells the library if the browser is IE11 or old Edge
const isImportNodeLengthWrong = document.importNode.length != 1;

// IE11 and old Edge discard empty nodes when cloning, potentially
// resulting in broken paths to find updates. The workaround here
// is to import once, upfront, the fragment that will be cloned
// later on, so that paths are retrieved from one already parsed,
// hence without missing child nodes once re-cloned.
const createFragment = isImportNodeLengthWrong ?
  (text, type, normalize) => document.importNode(
    cjs$1(text, type, normalize),
    true
  ) :
  cjs$1;

// IE11 and old Edge have a different createTreeWalker signature that
// has been deprecated in other browsers. This export is needed only
// to guarantee the TreeWalker doesn't show warnings and, ultimately, works
const createWalker = isImportNodeLengthWrong ?
  fragment => document.createTreeWalker(fragment, 1 | 128, null, false) :
  fragment => document.createTreeWalker(fragment, 1 | 128);

// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
const createPath = node => {
  const path = [];
  let {parentNode} = node;
  while (parentNode) {
    path.push(indexOf_1.call(parentNode.childNodes, node));
    node = parentNode;
    parentNode = node.parentNode;
  }
  return path;
};

// the prefix is used to identify either comments, attributes, or nodes
// that contain the related unique id. In the attribute cases
// isµX="attribute-name" will be used to map current X update to that
// attribute name, while comments will be like <!--isµX-->, to map
// the update to that specific comment node, hence its parent.
// style and textarea will have <!--isµX--> text content, and are handled
// directly through text-only updates.
const prefix = 'isµ';

// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
const cache$1 = cjs$5(new WeakMap);

// a RegExp that helps checking nodes that cannot contain comments
const textOnly = /^(?:plaintext|script|style|textarea|title|xmp)$/i;

const createCache = () => ({
  stack: [],    // each template gets a stack for each interpolation "hole"

  entry: null,  // each entry contains details, such as:
                //  * the template that is representing
                //  * the type of node it represents (html or svg)
                //  * the content fragment with all nodes
                //  * the list of updates per each node (template holes)
                //  * the "wired" node or fragment that will get updates
                // if the template or type are different from the previous one
                // the entry gets re-created each time

  wire: null    // each rendered node represent some wired content and
                // this reference to the latest one. If different, the node
                // will be cleaned up and the new "wire" will be appended
});

// the entry stored in the rendered node cache, and per each "hole"
const createEntry = (type, template) => {
  const {content, updates} = mapUpdates(type, template);
  return {type, template, content, updates, wire: null};
};

// a template is instrumented to be able to retrieve where updates are needed.
// Each unique template becomes a fragment, cloned once per each other
// operation based on the same template, i.e. data => html`<p>${data}</p>`
const mapTemplate = (type, template) => {
  const text = cjs$4(template, prefix, type === 'svg');
  const content = createFragment(text, type);
  // once instrumented and reproduced as fragment, it's crawled
  // to find out where each update is in the fragment tree
  const tw = createWalker(content);
  const nodes = [];
  const length = template.length - 1;
  let i = 0;
  // updates are searched via unique names, linearly increased across the tree
  // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
  let search = `${prefix}${i}`;
  while (i < length) {
    const node = tw.nextNode();
    // if not all updates are bound but there's nothing else to crawl
    // it means that there is something wrong with the template.
    if (!node)
      throw `bad template: ${text}`;
    // if the current node is a comment, and it contains isµX
    // it means the update should take care of any content
    if (node.nodeType === 8) {
      // The only comments to be considered are those
      // which content is exactly the same as the searched one.
      if (node.data === search) {
        nodes.push({type: 'node', path: createPath(node)});
        search = `${prefix}${++i}`;
      }
    }
    else {
      // if the node is not a comment, loop through all its attributes
      // named isµX and relate attribute updates to this node and the
      // attribute name, retrieved through node.getAttribute("isµX")
      // the isµX attribute will be removed as irrelevant for the layout
      // let svg = -1;
      while (node.hasAttribute(search)) {
        nodes.push({
          type: 'attr',
          path: createPath(node),
          name: node.getAttribute(search),
          //svg: svg < 0 ? (svg = ('ownerSVGElement' in node ? 1 : 0)) : svg
        });
        node.removeAttribute(search);
        search = `${prefix}${++i}`;
      }
      // if the node was a style, textarea, or others, check its content
      // and if it is <!--isµX--> then update tex-only this node
      if (
        textOnly.test(node.tagName) &&
        node.textContent.trim() === `<!--${search}-->`
      ){
        node.textContent = '';
        nodes.push({type: 'text', path: createPath(node)});
        search = `${prefix}${++i}`;
      }
    }
  }
  // once all nodes to update, or their attributes, are known, the content
  // will be cloned in the future to represent the template, and all updates
  // related to such content retrieved right away without needing to re-crawl
  // the exact same template, and its content, more than once.
  return {content, nodes};
};

// if a template is unknown, perform the previous mapping, otherwise grab
// its details such as the fragment with all nodes, and updates info.
const mapUpdates = (type, template) => {
  const {content, nodes} = (
    cache$1.get(template) ||
    cache$1.set(template, mapTemplate(type, template))
  );
  // clone deeply the fragment
  const fragment = document.importNode(content, true);
  // and relate an update handler per each node that needs one
  const updates = nodes.map(handlers, fragment);
  // return the fragment and all updates to use within its nodes
  return {content: fragment, updates};
};

// as html and svg can be nested calls, but no parent node is known
// until rendered somewhere, the unroll operation is needed to
// discover what to do with each interpolation, which will result
// into an update operation.
const unroll = (info, {type, template, values}) => {
  const {length} = values;
  // interpolations can contain holes and arrays, so these need
  // to be recursively discovered
  unrollValues(info, values, length);
  let {entry} = info;
  // if the cache entry is either null or different from the template
  // and the type this unroll should resolve, create a new entry
  // assigning a new content fragment and the list of updates.
  if (!entry || (entry.template !== template || entry.type !== type))
    info.entry = (entry = createEntry(type, template));
  const {content, updates, wire} = entry;
  // even if the fragment and its nodes is not live yet,
  // it is already possible to update via interpolations values.
  for (let i = 0; i < length; i++)
    updates[i](values[i]);
  // if the entry was new, or representing a different template or type,
  // create a new persistent entity to use during diffing.
  // This is simply a DOM node, when the template has a single container,
  // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
  return wire || (entry.wire = persistent_1(content));
};

// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
const unrollValues = ({stack}, values, length) => {
  for (let i = 0; i < length; i++) {
    const hole = values[i];
    // each Hole gets unrolled and re-assigned as value
    // so that domdiff will deal with a node/wire, not with a hole
    if (hole instanceof Hole)
      values[i] = unroll(
        stack[i] || (stack[i] = createCache()),
        hole
      );
    // arrays are recursively resolved so that each entry will contain
    // also a DOM node or a wire, hence it can be diffed if/when needed
    else if (isArray_1(hole))
      unrollValues(
        stack[i] || (stack[i] = createCache()),
        hole,
        hole.length
      );
    // if the value is nothing special, the stack doesn't need to retain data
    // this is useful also to cleanup previously retained data, if the value
    // was a Hole, or an Array, but not anymore, i.e.:
    // const update = content => html`<div>${content}</div>`;
    // update(listOfItems); update(null); update(html`hole`)
    else
      stack[i] = null;
  }
  if (length < stack.length)
    stack.splice(length);
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

const {create, defineProperties: defineProperties$1} = Object;

// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
const tag$1 = type => {
  // both `html` and `svg` tags have their own cache
  const keyed = cjs$5(new WeakMap);
  // keyed operations always re-use the same cache and unroll
  // the template and its interpolations right away
  const fixed = cache => (template, ...values) => unroll(
    cache,
    {type, template, values}
  );
  return defineProperties$1(
    // non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values) => new Hole(type, template, values),
    {
      for: {
        // keyed operations need a reference object, usually the parent node
        // which is showing keyed results, and optionally a unique id per each
        // related node, handy with JSON results and mutable list of objects
        // that usually carry a unique identifier
        value(ref, id) {
          const memo = keyed.get(ref) || keyed.set(ref, create(null));
          return memo[id] || (memo[id] = fixed(createCache()));
        }
      },
      node: {
        // it is possible to create one-off content out of the box via node tag
        // this might return the single created node, or a fragment with all
        // nodes present at the root level and, of course, their child nodes
        value: (template, ...values) => unroll(
          createCache(),
          {type, template, values}
        ).valueOf()
      }
    }
  );
};

// each rendered node gets its own cache
const cache = cjs$5(new WeakMap);

// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
const render$1 = (where, what) => {
  const hole = typeof what === 'function' ? what() : what;
  const info = cache.get(where) || cache.set(where, createCache());
  const wire = hole instanceof Hole ? unroll(info, hole) : hole;
  if (wire !== info.wire) {
    info.wire = wire;
    where.textContent = '';
    // valueOf() simply returns the node itself, but in case it was a "wire"
    // it will eventually re-append all nodes to its fragment so that such
    // fragment can be re-appended many times in a meaningful way
    // (wires are basically persistent fragments facades with special behavior)
    where.appendChild(wire.valueOf());
  }
  return where;
};

const html$1 = tag$1('html');
const svg = tag$1('svg');

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

const languages=[["aa","Afar"],["ab","Abkhazian"],["ae","Avestan"],["af","Afrikaans"],["ak","Akan"],["am","Amharic"],["an","Aragonese"],["ar","Arabic"],["as","Assamese"],["av","Avaric"],["ay","Aymara"],["az","Azerbaijani"],["ba","Bashkir"],["be","Belarusian"],["bg","Bulgarian"],["bh","Bihari languages"],["bi","Bislama"],["bm","Bambara"],["bn","Bengali, Bangla"],["bo","Tibetan"],["br","Breton"],["bs","Bosnian"],["ca","Catalan, Valencian"],["ce","Chechen"],["ch","Chamorro"],["co","Corsican"],["cr","Cree"],["cs","Czech"],["cu","Church Slavic, Church Slavonic, Old Bulgarian, Old Church Slavonic, Old Slavonic"],["cv","Chuvash"],["cy","Welsh"],["da","Danish"],["de","German"],["dv","Dhivehi, Divehi, Maldivian"],["dz","Dzongkha"],["ee","Ewe"],["el","Modern Greek (1453-)"],["en","English"],["eo","Esperanto"],["es","Spanish, Castilian"],["et","Estonian"],["eu","Basque"],["fa","Persian"],["ff","Fulah"],["fi","Finnish"],["fj","Fijian"],["fo","Faroese"],["fr","French"],["fy","Western Frisian"],["ga","Irish"],["gd","Scottish Gaelic, Gaelic"],["gl","Galician"],["gn","Guarani"],["gu","Gujarati"],["gv","Manx"],["ha","Hausa"],["he","Hebrew"],["hi","Hindi"],["ho","Hiri Motu"],["hr","Croatian"],["ht","Haitian, Haitian Creole"],["hu","Hungarian"],["hy","Armenian"],["hz","Herero"],["ia","Interlingua (International Auxiliary Language Association)"],["id","Indonesian"],["ie","Interlingue, Occidental"],["ig","Igbo"],["ii","Sichuan Yi, Nuosu"],["ik","Inupiaq"],["in","Indonesian"],["io","Ido"],["is","Icelandic"],["it","Italian"],["iu","Inuktitut"],["iw","Hebrew"],["ja","Japanese"],["ji","Yiddish"],["jv","Javanese"],["jw","Javanese"],["ka","Georgian"],["kg","Kongo"],["ki","Kikuyu, Gikuyu"],["kj","Kuanyama, Kwanyama"],["kk","Kazakh"],["kl","Kalaallisut, Greenlandic"],["km","Khmer, Central Khmer"],["kn","Kannada"],["ko","Korean"],["kr","Kanuri"],["ks","Kashmiri"],["ku","Kurdish"],["kv","Komi"],["kw","Cornish"],["ky","Kirghiz, Kyrgyz"],["la","Latin"],["lb","Luxembourgish, Letzeburgesch"],["lg","Ganda, Luganda"],["li","Limburgan, Limburger, Limburgish"],["ln","Lingala"],["lo","Lao"],["lt","Lithuanian"],["lu","Luba-Katanga"],["lv","Latvian"],["mg","Malagasy"],["mh","Marshallese"],["mi","Maori"],["mk","Macedonian"],["ml","Malayalam"],["mn","Mongolian"],["mo","Moldavian, Moldovan"],["mr","Marathi"],["ms","Malay (macrolanguage)"],["mt","Maltese"],["my","Burmese"],["na","Nauru"],["nb","Norwegian Bokmål"],["nd","North Ndebele"],["ne","Nepali (macrolanguage)"],["ng","Ndonga"],["nl","Dutch, Flemish"],["nn","Norwegian Nynorsk"],["no","Norwegian"],["nr","South Ndebele"],["nv","Navajo, Navaho"],["ny","Nyanja, Chewa, Chichewa"],["oc","Occitan (post 1500)"],["oj","Ojibwa"],["om","Oromo"],["or","Oriya (macrolanguage), Odia (macrolanguage)"],["os","Ossetian, Ossetic"],["pa","Panjabi, Punjabi"],["pi","Pali"],["pl","Polish"],["ps","Pushto, Pashto"],["pt","Portuguese"],["qu","Quechua"],["rm","Romansh"],["rn","Rundi"],["ro","Romanian, Moldavian, Moldovan"],["ru","Russian"],["rw","Kinyarwanda"],["sa","Sanskrit"],["sc","Sardinian"],["sd","Sindhi"],["se","Northern Sami"],["sg","Sango"],["sh","Serbo-Croatian"],["si","Sinhala, Sinhalese"],["sk","Slovak"],["sl","Slovenian"],["sm","Samoan"],["sn","Shona"],["so","Somali"],["sq","Albanian"],["sr","Serbian"],["ss","Swati"],["st","Southern Sotho"],["su","Sundanese"],["sv","Swedish"],["sw","Swahili (macrolanguage)"],["ta","Tamil"],["te","Telugu"],["tg","Tajik"],["th","Thai"],["ti","Tigrinya"],["tk","Turkmen"],["tl","Tagalog"],["tn","Tswana"],["to","Tonga (Tonga Islands)"],["tr","Turkish"],["ts","Tsonga"],["tt","Tatar"],["tw","Twi"],["ty","Tahitian"],["ug","Uighur, Uyghur"],["uk","Ukrainian"],["ur","Urdu"],["uz","Uzbek"],["ve","Venda"],["vi","Vietnamese"],["vo","Volapük"],["wa","Walloon"],["wo","Wolof"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["za","Zhuang, Chuang"],["zh","Chinese"],["zu","Zulu"],["aaa","Ghotuo"],["aab","Alumu-Tesu"],["aac","Ari"],["aad","Amal"],["aae","Arbëreshë Albanian"],["aaf","Aranadan"],["aag","Ambrak"],["aah","Abu' Arapesh"],["aai","Arifama-Miniafia"],["aak","Ankave"],["aal","Afade"],["aam","Aramanik"],["aan","Anambé"],["aao","Algerian Saharan Arabic"],["aap","Pará Arára"],["aaq","Eastern Abnaki"],["aas","Aasáx"],["aat","Arvanitika Albanian"],["aau","Abau"],["aav","Austro-Asiatic languages"],["aaw","Solong"],["aax","Mandobo Atas"],["aaz","Amarasi"],["aba","Abé"],["abb","Bankon"],["abc","Ambala Ayta"],["abd","Manide"],["abe","Western Abnaki"],["abf","Abai Sungai"],["abg","Abaga"],["abh","Tajiki Arabic"],["abi","Abidji"],["abj","Aka-Bea"],["abl","Lampung Nyo"],["abm","Abanyom"],["abn","Abua"],["abo","Abon"],["abp","Abellen Ayta"],["abq","Abaza"],["abr","Abron"],["abs","Ambonese Malay"],["abt","Ambulas"],["abu","Abure"],["abv","Baharna Arabic"],["abw","Pal"],["abx","Inabaknon"],["aby","Aneme Wake"],["abz","Abui"],["aca","Achagua"],["acb","Áncá"],["acd","Gikyode"],["ace","Achinese"],["acf","Saint Lucian Creole French"],["ach","Acoli"],["aci","Aka-Cari"],["ack","Aka-Kora"],["acl","Akar-Bale"],["acm","Mesopotamian Arabic"],["acn","Achang"],["acp","Eastern Acipa"],["acq","Ta'izzi-Adeni Arabic"],["acr","Achi"],["acs","Acroá"],["act","Achterhoeks"],["acu","Achuar-Shiwiar"],["acv","Achumawi"],["acw","Hijazi Arabic"],["acx","Omani Arabic"],["acy","Cypriot Arabic"],["acz","Acheron"],["ada","Adangme"],["adb","Atauran"],["add","Lidzonka, Dzodinka"],["ade","Adele"],["adf","Dhofari Arabic"],["adg","Andegerebinha"],["adh","Adhola"],["adi","Adi"],["adj","Adioukrou"],["adl","Galo"],["adn","Adang"],["ado","Abu"],["adp","Adap"],["adq","Adangbe"],["adr","Adonara"],["ads","Adamorobe Sign Language"],["adt","Adnyamathanha"],["adu","Aduge"],["adw","Amundava"],["adx","Amdo Tibetan"],["ady","Adyghe, Adygei"],["adz","Adzera"],["aea","Areba"],["aeb","Tunisian Arabic"],["aec","Saidi Arabic"],["aed","Argentine Sign Language"],["aee","Northeast Pashai, Northeast Pashayi"],["aek","Haeke"],["ael","Ambele"],["aem","Arem"],["aen","Armenian Sign Language"],["aeq","Aer"],["aer","Eastern Arrernte"],["aes","Alsea"],["aeu","Akeu"],["aew","Ambakich"],["aey","Amele"],["aez","Aeka"],["afa","Afro-Asiatic languages"],["afb","Gulf Arabic"],["afd","Andai"],["afe","Putukwam"],["afg","Afghan Sign Language"],["afh","Afrihili"],["afi","Akrukay, Chini"],["afk","Nanubae"],["afn","Defaka"],["afo","Eloyi"],["afp","Tapei"],["afs","Afro-Seminole Creole"],["aft","Afitti"],["afu","Awutu"],["afz","Obokuitai"],["aga","Aguano"],["agb","Legbo"],["agc","Agatu"],["agd","Agarabi"],["age","Angal"],["agf","Arguni"],["agg","Angor"],["agh","Ngelima"],["agi","Agariya"],["agj","Argobba"],["agk","Isarog Agta"],["agl","Fembe"],["agm","Angaataha"],["agn","Agutaynen"],["ago","Tainae"],["agp","Paranan"],["agq","Aghem"],["agr","Aguaruna"],["ags","Esimbi"],["agt","Central Cagayan Agta"],["agu","Aguacateco"],["agv","Remontado Dumagat"],["agw","Kahua"],["agx","Aghul"],["agy","Southern Alta"],["agz","Mt. Iriga Agta"],["aha","Ahanta"],["ahb","Axamb"],["ahg","Qimant"],["ahh","Aghu"],["ahi","Tiagbamrin Aizi"],["ahk","Akha"],["ahl","Igo"],["ahm","Mobumrin Aizi"],["ahn","Àhàn"],["aho","Ahom"],["ahp","Aproumu Aizi"],["ahr","Ahirani"],["ahs","Ashe"],["aht","Ahtena"],["aia","Arosi"],["aib","Ainu (China)"],["aic","Ainbai"],["aid","Alngith"],["aie","Amara"],["aif","Agi"],["aig","Antigua and Barbuda Creole English"],["aih","Ai-Cham"],["aii","Assyrian Neo-Aramaic"],["aij","Lishanid Noshan"],["aik","Ake"],["ail","Aimele"],["aim","Aimol"],["ain","Ainu (Japan)"],["aio","Aiton"],["aip","Burumakok"],["aiq","Aimaq"],["air","Airoran"],["ais","Nataoran Amis"],["ait","Arikem"],["aiw","Aari"],["aix","Aighon"],["aiy","Ali"],["aja","Aja (South Sudan)"],["ajg","Aja (Benin)"],["aji","Ajië"],["ajn","Andajin"],["ajp","South Levantine Arabic"],["ajt","Judeo-Tunisian Arabic"],["aju","Judeo-Moroccan Arabic"],["ajw","Ajawa"],["ajz","Amri Karbi"],["akb","Batak Angkola"],["akc","Mpur"],["akd","Ukpet-Ehom"],["ake","Akawaio"],["akf","Akpa"],["akg","Anakalangu"],["akh","Angal Heneng"],["aki","Aiome"],["akj","Aka-Jeru"],["akk","Akkadian"],["akl","Aklanon"],["akm","Aka-Bo"],["ako","Akurio"],["akp","Siwu"],["akq","Ak"],["akr","Araki"],["aks","Akaselem"],["akt","Akolet"],["aku","Akum"],["akv","Akhvakh"],["akw","Akwa"],["akx","Aka-Kede"],["aky","Aka-Kol"],["akz","Alabama"],["ala","Alago"],["alc","Qawasqar"],["ald","Alladian"],["ale","Aleut"],["alf","Alege"],["alg","Algonquian languages"],["alh","Alawa"],["ali","Amaimon"],["alj","Alangan"],["alk","Alak"],["all","Allar"],["alm","Amblong"],["aln","Gheg Albanian"],["alo","Larike-Wakasihu"],["alp","Alune"],["alq","Algonquin"],["alr","Alutor"],["als","Tosk Albanian"],["alt","Southern Altai"],["alu","'Are'are"],["alv","Atlantic-Congo languages"],["alw","Alaba-K’abeena, Wanbasana"],["alx","Amol"],["aly","Alyawarr"],["alz","Alur"],["ama","Amanayé"],["amb","Ambo"],["amc","Amahuaca"],["ame","Yanesha'"],["amf","Hamer-Banna"],["amg","Amurdak"],["ami","Amis"],["amj","Amdang"],["amk","Ambai"],["aml","War-Jaintia"],["amm","Ama (Papua New Guinea)"],["amn","Amanab"],["amo","Amo"],["amp","Alamblak"],["amq","Amahai"],["amr","Amarakaeri"],["ams","Southern Amami-Oshima"],["amt","Amto"],["amu","Guerrero Amuzgo"],["amv","Ambelau"],["amw","Western Neo-Aramaic"],["amx","Anmatyerre"],["amy","Ami"],["amz","Atampaya"],["ana","Andaqui"],["anb","Andoa"],["anc","Ngas"],["and","Ansus"],["ane","Xârâcùù"],["anf","Animere"],["ang","Old English (ca. 450-1100)"],["anh","Nend"],["ani","Andi"],["anj","Anor"],["ank","Goemai"],["anl","Anu-Hkongso Chin"],["anm","Anal"],["ann","Obolo"],["ano","Andoque"],["anp","Angika"],["anq","Jarawa (India)"],["anr","Andh"],["ans","Anserma"],["ant","Antakarinya, Antikarinya"],["anu","Anuak"],["anv","Denya"],["anw","Anaang"],["anx","Andra-Hus"],["any","Anyin"],["anz","Anem"],["aoa","Angolar"],["aob","Abom"],["aoc","Pemon"],["aod","Andarum"],["aoe","Angal Enen"],["aof","Bragat"],["aog","Angoram"],["aoh","Arma"],["aoi","Anindilyakwa"],["aoj","Mufian"],["aok","Arhö"],["aol","Alor"],["aom","Ömie"],["aon","Bumbita Arapesh"],["aor","Aore"],["aos","Taikat"],["aot","Atong (India), A'tong"],["aou","A'ou"],["aox","Atorada"],["aoz","Uab Meto"],["apa","Apache languages"],["apb","Sa'a"],["apc","North Levantine Arabic"],["apd","Sudanese Arabic"],["ape","Bukiyip"],["apf","Pahanan Agta"],["apg","Ampanang"],["aph","Athpariya"],["api","Apiaká"],["apj","Jicarilla Apache"],["apk","Kiowa Apache"],["apl","Lipan Apache"],["apm","Mescalero-Chiricahua Apache"],["apn","Apinayé"],["apo","Ambul"],["app","Apma"],["apq","A-Pucikwar"],["apr","Arop-Lokep"],["aps","Arop-Sissano"],["apt","Apatani"],["apu","Apurinã"],["apv","Alapmunte"],["apw","Western Apache"],["apx","Aputai"],["apy","Apalaí"],["apz","Safeyoka"],["aqa","Alacalufan languages"],["aqc","Archi"],["aqd","Ampari Dogon"],["aqg","Arigidi"],["aqk","Aninka"],["aql","Algic languages"],["aqm","Atohwaim"],["aqn","Northern Alta"],["aqp","Atakapa"],["aqr","Arhâ"],["aqt","Angaité"],["aqz","Akuntsu"],["arb","Standard Arabic"],["arc","Official Aramaic (700-300 BCE), Imperial Aramaic (700-300 BCE)"],["ard","Arabana"],["are","Western Arrarnta"],["arh","Arhuaco"],["ari","Arikara"],["arj","Arapaso"],["ark","Arikapú"],["arl","Arabela"],["arn","Mapudungun, Mapuche"],["aro","Araona"],["arp","Arapaho"],["arq","Algerian Arabic"],["arr","Karo (Brazil)"],["ars","Najdi Arabic"],["art","Artificial languages"],["aru","Aruá (Amazonas State), Arawá"],["arv","Arbore"],["arw","Arawak"],["arx","Aruá (Rodonia State)"],["ary","Moroccan Arabic"],["arz","Egyptian Arabic"],["asa","Asu (Tanzania)"],["asb","Assiniboine"],["asc","Casuarina Coast Asmat"],["asd","Asas"],["ase","American Sign Language"],["asf","Auslan, Australian Sign Language"],["asg","Cishingini"],["ash","Abishira"],["asi","Buruwai"],["asj","Sari"],["ask","Ashkun"],["asl","Asilulu"],["asn","Xingú Asuriní"],["aso","Dano"],["asp","Algerian Sign Language"],["asq","Austrian Sign Language"],["asr","Asuri"],["ass","Ipulo"],["ast","Asturian, Asturleonese, Bable, Leonese"],["asu","Tocantins Asurini"],["asv","Asoa"],["asw","Australian Aborigines Sign Language"],["asx","Muratayak"],["asy","Yaosakor Asmat"],["asz","As"],["ata","Pele-Ata"],["atb","Zaiwa"],["atc","Atsahuaca"],["atd","Ata Manobo"],["ate","Atemble"],["atg","Ivbie North-Okpela-Arhe"],["ath","Athapascan languages"],["ati","Attié"],["atj","Atikamekw"],["atk","Ati"],["atl","Mt. Iraya Agta"],["atm","Ata"],["atn","Ashtiani"],["ato","Atong (Cameroon)"],["atp","Pudtol Atta"],["atq","Aralle-Tabulahan"],["atr","Waimiri-Atroari"],["ats","Gros Ventre"],["att","Pamplona Atta"],["atu","Reel"],["atv","Northern Altai"],["atw","Atsugewi"],["atx","Arutani"],["aty","Aneityum"],["atz","Arta"],["aua","Asumboa"],["aub","Alugu"],["auc","Waorani"],["aud","Anuta"],["aue","ǂKxʼauǁʼein"],["auf","Arauan languages"],["aug","Aguna"],["auh","Aushi"],["aui","Anuki"],["auj","Awjilah"],["auk","Heyo"],["aul","Aulua"],["aum","Asu (Nigeria)"],["aun","Molmo One"],["auo","Auyokawa"],["aup","Makayam"],["auq","Anus, Korur"],["aur","Aruek"],["aus","Australian languages"],["aut","Austral"],["auu","Auye"],["auw","Awyi"],["aux","Aurá"],["auy","Awiyaana"],["auz","Uzbeki Arabic"],["avb","Avau"],["avd","Alviri-Vidari"],["avi","Avikam"],["avk","Kotava"],["avl","Eastern Egyptian Bedawi Arabic"],["avm","Angkamuthi"],["avn","Avatime"],["avo","Agavotaguerra"],["avs","Aushiri"],["avt","Au"],["avu","Avokaya"],["avv","Avá-Canoeiro"],["awa","Awadhi"],["awb","Awa (Papua New Guinea)"],["awc","Cicipu"],["awd","Arawakan languages"],["awe","Awetí"],["awg","Anguthimri"],["awh","Awbono"],["awi","Aekyom"],["awk","Awabakal"],["awm","Arawum"],["awn","Awngi"],["awo","Awak"],["awr","Awera"],["aws","South Awyu"],["awt","Araweté"],["awu","Central Awyu"],["awv","Jair Awyu"],["aww","Awun"],["awx","Awara"],["awy","Edera Awyu"],["axb","Abipon"],["axe","Ayerrerenge"],["axg","Mato Grosso Arára"],["axk","Yaka (Central African Republic)"],["axl","Lower Southern Aranda"],["axm","Middle Armenian"],["axx","Xârâgurè"],["aya","Awar"],["ayb","Ayizo Gbe"],["ayc","Southern Aymara"],["ayd","Ayabadhu"],["aye","Ayere"],["ayg","Ginyanga"],["ayh","Hadrami Arabic"],["ayi","Leyigha"],["ayk","Akuku"],["ayl","Libyan Arabic"],["ayn","Sanaani Arabic"],["ayo","Ayoreo"],["ayp","North Mesopotamian Arabic"],["ayq","Ayi (Papua New Guinea)"],["ayr","Central Aymara"],["ays","Sorsogon Ayta"],["ayt","Magbukun Ayta"],["ayu","Ayu"],["ayx","Ayi (China)"],["ayy","Tayabas Ayta"],["ayz","Mai Brat"],["aza","Azha"],["azb","South Azerbaijani"],["azc","Uto-Aztecan languages"],["azd","Eastern Durango Nahuatl"],["azg","San Pedro Amuzgos Amuzgo"],["azj","North Azerbaijani"],["azm","Ipalapa Amuzgo"],["azn","Western Durango Nahuatl"],["azo","Awing"],["azt","Faire Atta"],["azz","Highland Puebla Nahuatl"],["baa","Babatana"],["bab","Bainouk-Gunyuño"],["bac","Badui"],["bad","Banda languages"],["bae","Baré"],["baf","Nubaca"],["bag","Tuki"],["bah","Bahamas Creole English"],["bai","Bamileke languages"],["baj","Barakai"],["bal","Baluchi"],["ban","Balinese"],["bao","Waimaha"],["bap","Bantawa"],["bar","Bavarian"],["bas","Basa (Cameroon)"],["bat","Baltic languages"],["bau","Bada (Nigeria)"],["bav","Vengo"],["baw","Bambili-Bambui"],["bax","Bamun"],["bay","Batuley"],["baz","Tunen"],["bba","Baatonum"],["bbb","Barai"],["bbc","Batak Toba"],["bbd","Bau"],["bbe","Bangba"],["bbf","Baibai"],["bbg","Barama"],["bbh","Bugan"],["bbi","Barombi"],["bbj","Ghomálá'"],["bbk","Babanki"],["bbl","Bats"],["bbm","Babango"],["bbn","Uneapa"],["bbo","Northern Bobo Madaré, Konabéré"],["bbp","West Central Banda"],["bbq","Bamali"],["bbr","Girawa"],["bbs","Bakpinka"],["bbt","Mburku"],["bbu","Kulung (Nigeria)"],["bbv","Karnai"],["bbw","Baba"],["bbx","Bubia"],["bby","Befang"],["bbz","Babalia Creole Arabic"],["bca","Central Bai"],["bcb","Bainouk-Samik"],["bcc","Southern Balochi"],["bcd","North Babar"],["bce","Bamenyam"],["bcf","Bamu"],["bcg","Baga Pokur"],["bch","Bariai"],["bci","Baoulé"],["bcj","Bardi"],["bck","Bunuba"],["bcl","Central Bikol"],["bcm","Bannoni"],["bcn","Bali (Nigeria)"],["bco","Kaluli"],["bcp","Bali (Democratic Republic of Congo)"],["bcq","Bench"],["bcr","Babine"],["bcs","Kohumono"],["bct","Bendi"],["bcu","Awad Bing"],["bcv","Shoo-Minda-Nye"],["bcw","Bana"],["bcy","Bacama"],["bcz","Bainouk-Gunyaamolo"],["bda","Bayot"],["bdb","Basap"],["bdc","Emberá-Baudó"],["bdd","Bunama"],["bde","Bade"],["bdf","Biage"],["bdg","Bonggi"],["bdh","Baka (South Sudan)"],["bdi","Burun"],["bdj","Bai (South Sudan), Bai"],["bdk","Budukh"],["bdl","Indonesian Bajau"],["bdm","Buduma"],["bdn","Baldemu"],["bdo","Morom"],["bdp","Bende"],["bdq","Bahnar"],["bdr","West Coast Bajau"],["bds","Burunge"],["bdt","Bokoto"],["bdu","Oroko"],["bdv","Bodo Parja"],["bdw","Baham"],["bdx","Budong-Budong"],["bdy","Bandjalang"],["bdz","Badeshi"],["bea","Beaver"],["beb","Bebele"],["bec","Iceve-Maci"],["bed","Bedoanas"],["bee","Byangsi"],["bef","Benabena"],["beg","Belait"],["beh","Biali"],["bei","Bekati'"],["bej","Beja, Bedawiyet"],["bek","Bebeli"],["bem","Bemba (Zambia)"],["beo","Beami"],["bep","Besoa"],["beq","Beembe"],["ber","Berber languages"],["bes","Besme"],["bet","Guiberoua Béte"],["beu","Blagar"],["bev","Daloa Bété"],["bew","Betawi"],["bex","Jur Modo"],["bey","Beli (Papua New Guinea)"],["bez","Bena (Tanzania)"],["bfa","Bari"],["bfb","Pauri Bareli"],["bfc","Panyi Bai, Northern Bai"],["bfd","Bafut"],["bfe","Betaf, Tena"],["bff","Bofi"],["bfg","Busang Kayan"],["bfh","Blafe"],["bfi","British Sign Language"],["bfj","Bafanji"],["bfk","Ban Khor Sign Language"],["bfl","Banda-Ndélé"],["bfm","Mmen"],["bfn","Bunak"],["bfo","Malba Birifor"],["bfp","Beba"],["bfq","Badaga"],["bfr","Bazigar"],["bfs","Southern Bai"],["bft","Balti"],["bfu","Gahri"],["bfw","Bondo"],["bfx","Bantayanon"],["bfy","Bagheli"],["bfz","Mahasu Pahari"],["bga","Gwamhi-Wuri"],["bgb","Bobongko"],["bgc","Haryanvi"],["bgd","Rathwi Bareli"],["bge","Bauria"],["bgf","Bangandu"],["bgg","Bugun"],["bgi","Giangan"],["bgj","Bangolan"],["bgk","Bit, Buxinhua"],["bgl","Bo (Laos)"],["bgm","Baga Mboteni"],["bgn","Western Balochi"],["bgo","Baga Koga"],["bgp","Eastern Balochi"],["bgq","Bagri"],["bgr","Bawm Chin"],["bgs","Tagabawa"],["bgt","Bughotu"],["bgu","Mbongno"],["bgv","Warkay-Bipim"],["bgw","Bhatri"],["bgx","Balkan Gagauz Turkish"],["bgy","Benggoi"],["bgz","Banggai"],["bha","Bharia"],["bhb","Bhili"],["bhc","Biga"],["bhd","Bhadrawahi"],["bhe","Bhaya"],["bhf","Odiai"],["bhg","Binandere"],["bhh","Bukharic"],["bhi","Bhilali"],["bhj","Bahing"],["bhk","Albay Bicolano"],["bhl","Bimin"],["bhm","Bathari"],["bhn","Bohtan Neo-Aramaic"],["bho","Bhojpuri"],["bhp","Bima"],["bhq","Tukang Besi South"],["bhr","Bara Malagasy"],["bhs","Buwal"],["bht","Bhattiyali"],["bhu","Bhunjia"],["bhv","Bahau"],["bhw","Biak"],["bhx","Bhalay"],["bhy","Bhele"],["bhz","Bada (Indonesia)"],["bia","Badimaya"],["bib","Bissa, Bisa"],["bic","Bikaru"],["bid","Bidiyo"],["bie","Bepour"],["bif","Biafada"],["big","Biangai"],["bij","Vaghat-Ya-Bijim-Legeri"],["bik","Bikol"],["bil","Bile"],["bim","Bimoba"],["bin","Bini, Edo"],["bio","Nai"],["bip","Bila"],["biq","Bipi"],["bir","Bisorio"],["bit","Berinomo"],["biu","Biete"],["biv","Southern Birifor"],["biw","Kol (Cameroon)"],["bix","Bijori"],["biy","Birhor"],["biz","Baloi"],["bja","Budza"],["bjb","Banggarla"],["bjc","Bariji"],["bjd","Bandjigali"],["bje","Biao-Jiao Mien"],["bjf","Barzani Jewish Neo-Aramaic"],["bjg","Bidyogo"],["bjh","Bahinemo"],["bji","Burji"],["bjj","Kanauji"],["bjk","Barok"],["bjl","Bulu (Papua New Guinea)"],["bjm","Bajelani"],["bjn","Banjar"],["bjo","Mid-Southern Banda"],["bjp","Fanamaket"],["bjq","Southern Betsimisaraka Malagasy"],["bjr","Binumarien"],["bjs","Bajan"],["bjt","Balanta-Ganja"],["bju","Busuu"],["bjv","Bedjond"],["bjw","Bakwé"],["bjx","Banao Itneg"],["bjy","Bayali"],["bjz","Baruga"],["bka","Kyak"],["bkb","Finallig"],["bkc","Baka (Cameroon)"],["bkd","Binukid, Talaandig"],["bkf","Beeke"],["bkg","Buraka"],["bkh","Bakoko"],["bki","Baki"],["bkj","Pande"],["bkk","Brokskat"],["bkl","Berik"],["bkm","Kom (Cameroon)"],["bkn","Bukitan"],["bko","Kwa'"],["bkp","Boko (Democratic Republic of Congo)"],["bkq","Bakairí"],["bkr","Bakumpai"],["bks","Northern Sorsoganon"],["bkt","Boloki"],["bku","Buhid"],["bkv","Bekwarra"],["bkw","Bekwel"],["bkx","Baikeno"],["bky","Bokyi"],["bkz","Bungku"],["bla","Siksika"],["blb","Bilua"],["blc","Bella Coola"],["bld","Bolango"],["ble","Balanta-Kentohe"],["blf","Buol"],["blg","Balau"],["blh","Kuwaa"],["bli","Bolia"],["blj","Bolongan"],["blk","Pa'o Karen, Pa'O"],["bll","Biloxi"],["blm","Beli (South Sudan)"],["bln","Southern Catanduanes Bikol"],["blo","Anii"],["blp","Blablanga"],["blq","Baluan-Pam"],["blr","Blang"],["bls","Balaesang"],["blt","Tai Dam"],["blv","Kibala, Bolo"],["blw","Balangao"],["blx","Mag-Indi Ayta"],["bly","Notre"],["blz","Balantak"],["bma","Lame"],["bmb","Bembe"],["bmc","Biem"],["bmd","Baga Manduri"],["bme","Limassa"],["bmf","Bom-Kim"],["bmg","Bamwe"],["bmh","Kein"],["bmi","Bagirmi"],["bmj","Bote-Majhi"],["bmk","Ghayavi"],["bml","Bomboli"],["bmm","Northern Betsimisaraka Malagasy"],["bmn","Bina (Papua New Guinea)"],["bmo","Bambalang"],["bmp","Bulgebi"],["bmq","Bomu"],["bmr","Muinane"],["bms","Bilma Kanuri"],["bmt","Biao Mon"],["bmu","Somba-Siawari"],["bmv","Bum"],["bmw","Bomwali"],["bmx","Baimak"],["bmy","Bemba (Democratic Republic of Congo)"],["bmz","Baramu"],["bna","Bonerate"],["bnb","Bookan"],["bnc","Bontok"],["bnd","Banda (Indonesia)"],["bne","Bintauna"],["bnf","Masiwang"],["bng","Benga"],["bni","Bangi"],["bnj","Eastern Tawbuid"],["bnk","Bierebo"],["bnl","Boon"],["bnm","Batanga"],["bnn","Bunun"],["bno","Bantoanon"],["bnp","Bola"],["bnq","Bantik"],["bnr","Butmas-Tur"],["bns","Bundeli"],["bnt","Bantu languages"],["bnu","Bentong"],["bnv","Bonerif, Beneraf, Edwas"],["bnw","Bisis"],["bnx","Bangubangu"],["bny","Bintulu"],["bnz","Beezen"],["boa","Bora"],["bob","Aweer"],["boe","Mundabli"],["bof","Bolon"],["bog","Bamako Sign Language"],["boh","Boma"],["boi","Barbareño"],["boj","Anjam"],["bok","Bonjo"],["bol","Bole"],["bom","Berom"],["bon","Bine"],["boo","Tiemacèwè Bozo"],["bop","Bonkiman"],["boq","Bogaya"],["bor","Borôro"],["bot","Bongo"],["bou","Bondei"],["bov","Tuwuli"],["bow","Rema"],["box","Buamu"],["boy","Bodo (Central African Republic)"],["boz","Tiéyaxo Bozo"],["bpa","Daakaka"],["bpb","Barbacoas"],["bpd","Banda-Banda"],["bpe","Bauni"],["bpg","Bonggo"],["bph","Botlikh"],["bpi","Bagupi"],["bpj","Binji"],["bpk","Orowe, 'Ôrôê"],["bpl","Broome Pearling Lugger Pidgin"],["bpm","Biyom"],["bpn","Dzao Min"],["bpo","Anasi"],["bpp","Kaure"],["bpq","Banda Malay"],["bpr","Koronadal Blaan"],["bps","Sarangani Blaan"],["bpt","Barrow Point"],["bpu","Bongu"],["bpv","Bian Marind"],["bpw","Bo (Papua New Guinea)"],["bpx","Palya Bareli"],["bpy","Bishnupriya"],["bpz","Bilba"],["bqa","Tchumbuli"],["bqb","Bagusa"],["bqc","Boko (Benin), Boo"],["bqd","Bung"],["bqf","Baga Kaloum"],["bqg","Bago-Kusuntu"],["bqh","Baima"],["bqi","Bakhtiari"],["bqj","Bandial"],["bqk","Banda-Mbrès"],["bql","Bilakura"],["bqm","Wumboko"],["bqn","Bulgarian Sign Language"],["bqo","Balo"],["bqp","Busa"],["bqq","Biritai"],["bqr","Burusu"],["bqs","Bosngun"],["bqt","Bamukumbit"],["bqu","Boguru"],["bqv","Koro Wachi, Begbere-Ejar"],["bqw","Buru (Nigeria)"],["bqx","Baangi"],["bqy","Bengkala Sign Language"],["bqz","Bakaka"],["bra","Braj"],["brb","Lave"],["brc","Berbice Creole Dutch"],["brd","Baraamu"],["brf","Bira"],["brg","Baure"],["brh","Brahui"],["bri","Mokpwe"],["brj","Bieria"],["brk","Birked"],["brl","Birwa"],["brm","Barambu"],["brn","Boruca"],["bro","Brokkat"],["brp","Barapasi"],["brq","Breri"],["brr","Birao"],["brs","Baras"],["brt","Bitare"],["bru","Eastern Bru"],["brv","Western Bru"],["brw","Bellari"],["brx","Bodo (India)"],["bry","Burui"],["brz","Bilbil"],["bsa","Abinomn"],["bsb","Brunei Bisaya"],["bsc","Bassari, Oniyan"],["bse","Wushi"],["bsf","Bauchi"],["bsg","Bashkardi"],["bsh","Kati"],["bsi","Bassossi"],["bsj","Bangwinji"],["bsk","Burushaski"],["bsl","Basa-Gumna"],["bsm","Busami"],["bsn","Barasana-Eduria"],["bso","Buso"],["bsp","Baga Sitemu"],["bsq","Bassa"],["bsr","Bassa-Kontagora"],["bss","Akoose"],["bst","Basketo"],["bsu","Bahonsuai"],["bsv","Baga Sobané"],["bsw","Baiso"],["bsx","Yangkam"],["bsy","Sabah Bisaya"],["bta","Bata"],["btb","Beti (Cameroon)"],["btc","Bati (Cameroon)"],["btd","Batak Dairi"],["bte","Gamo-Ningi"],["btf","Birgit"],["btg","Gagnoa Bété"],["bth","Biatah Bidayuh"],["bti","Burate"],["btj","Bacanese Malay"],["btk","Batak languages"],["btl","Bhatola"],["btm","Batak Mandailing"],["btn","Ratagnon"],["bto","Rinconada Bikol"],["btp","Budibud"],["btq","Batek"],["btr","Baetora"],["bts","Batak Simalungun"],["btt","Bete-Bendi"],["btu","Batu"],["btv","Bateri"],["btw","Butuanon"],["btx","Batak Karo"],["bty","Bobot"],["btz","Batak Alas-Kluet"],["bua","Buriat"],["bub","Bua"],["buc","Bushi"],["bud","Ntcham"],["bue","Beothuk"],["buf","Bushoong"],["bug","Buginese"],["buh","Younuo Bunu"],["bui","Bongili"],["buj","Basa-Gurmana"],["buk","Bugawac"],["bum","Bulu (Cameroon)"],["bun","Sherbro"],["buo","Terei"],["bup","Busoa"],["buq","Brem"],["bus","Bokobaru"],["but","Bungain"],["buu","Budu"],["buv","Bun"],["buw","Bubi"],["bux","Boghom"],["buy","Bullom So"],["buz","Bukwen"],["bva","Barein"],["bvb","Bube"],["bvc","Baelelea"],["bvd","Baeggu"],["bve","Berau Malay"],["bvf","Boor"],["bvg","Bonkeng"],["bvh","Bure"],["bvi","Belanda Viri"],["bvj","Baan"],["bvk","Bukat"],["bvl","Bolivian Sign Language"],["bvm","Bamunka"],["bvn","Buna"],["bvo","Bolgo"],["bvp","Bumang"],["bvq","Birri"],["bvr","Burarra"],["bvt","Bati (Indonesia)"],["bvu","Bukit Malay"],["bvv","Baniva"],["bvw","Boga"],["bvx","Dibole"],["bvy","Baybayanon"],["bvz","Bauzi"],["bwa","Bwatoo"],["bwb","Namosi-Naitasiri-Serua"],["bwc","Bwile"],["bwd","Bwaidoka"],["bwe","Bwe Karen"],["bwf","Boselewa"],["bwg","Barwe"],["bwh","Bishuo"],["bwi","Baniwa"],["bwj","Láá Láá Bwamu"],["bwk","Bauwaki"],["bwl","Bwela"],["bwm","Biwat"],["bwn","Wunai Bunu"],["bwo","Boro (Ethiopia), Borna (Ethiopia)"],["bwp","Mandobo Bawah"],["bwq","Southern Bobo Madaré"],["bwr","Bura-Pabir"],["bws","Bomboma"],["bwt","Bafaw-Balong"],["bwu","Buli (Ghana)"],["bww","Bwa"],["bwx","Bu-Nao Bunu"],["bwy","Cwi Bwamu"],["bwz","Bwisi"],["bxa","Tairaha"],["bxb","Belanda Bor"],["bxc","Molengue"],["bxd","Pela"],["bxe","Birale"],["bxf","Bilur, Minigir"],["bxg","Bangala"],["bxh","Buhutu"],["bxi","Pirlatapa"],["bxj","Bayungu"],["bxk","Bukusu, Lubukusu"],["bxl","Jalkunan"],["bxm","Mongolia Buriat"],["bxn","Burduna"],["bxo","Barikanchi"],["bxp","Bebil"],["bxq","Beele"],["bxr","Russia Buriat"],["bxs","Busam"],["bxu","China Buriat"],["bxv","Berakou"],["bxw","Bankagooma"],["bxx","Borna (Democratic Republic of Congo)"],["bxz","Binahari"],["bya","Batak"],["byb","Bikya"],["byc","Ubaghara"],["byd","Benyadu'"],["bye","Pouye"],["byf","Bete"],["byg","Baygo"],["byh","Bhujel"],["byi","Buyu"],["byj","Bina (Nigeria)"],["byk","Biao"],["byl","Bayono"],["bym","Bidjara"],["byn","Bilin, Blin"],["byo","Biyo"],["byp","Bumaji"],["byq","Basay"],["byr","Baruya, Yipma"],["bys","Burak"],["byt","Berti"],["byv","Medumba"],["byw","Belhariya"],["byx","Qaqet"],["byy","Buya"],["byz","Banaro"],["bza","Bandi"],["bzb","Andio"],["bzc","Southern Betsimisaraka Malagasy"],["bzd","Bribri"],["bze","Jenaama Bozo"],["bzf","Boikin"],["bzg","Babuza"],["bzh","Mapos Buang"],["bzi","Bisu"],["bzj","Belize Kriol English"],["bzk","Nicaragua Creole English"],["bzl","Boano (Sulawesi)"],["bzm","Bolondo"],["bzn","Boano (Maluku)"],["bzo","Bozaba"],["bzp","Kemberano"],["bzq","Buli (Indonesia)"],["bzr","Biri"],["bzs","Brazilian Sign Language"],["bzt","Brithenig"],["bzu","Burmeso"],["bzv","Naami"],["bzw","Basa (Nigeria)"],["bzx","Kɛlɛngaxo Bozo"],["bzy","Obanliku"],["bzz","Evant"],["caa","Chortí"],["cab","Garifuna"],["cac","Chuj"],["cad","Caddo"],["cae","Lehar, Laalaa"],["caf","Southern Carrier"],["cag","Nivaclé"],["cah","Cahuarano"],["cai","Central American Indian languages"],["caj","Chané"],["cak","Kaqchikel, Cakchiquel"],["cal","Carolinian"],["cam","Cemuhî"],["can","Chambri"],["cao","Chácobo"],["cap","Chipaya"],["caq","Car Nicobarese"],["car","Galibi Carib"],["cas","Tsimané"],["cau","Caucasian languages"],["cav","Cavineña"],["caw","Callawalla"],["cax","Chiquitano"],["cay","Cayuga"],["caz","Canichana"],["cba","Chibchan languages"],["cbb","Cabiyarí"],["cbc","Carapana"],["cbd","Carijona"],["cbe","Chipiajes"],["cbg","Chimila"],["cbh","Cagua"],["cbi","Chachi"],["cbj","Ede Cabe"],["cbk","Chavacano"],["cbl","Bualkhaw Chin"],["cbn","Nyahkur"],["cbo","Izora"],["cbq","Tsucuba, Cuba"],["cbr","Cashibo-Cacataibo"],["cbs","Cashinahua"],["cbt","Chayahuita"],["cbu","Candoshi-Shapra"],["cbv","Cacua"],["cbw","Kinabalian"],["cby","Carabayo"],["cca","Cauca"],["ccc","Chamicuro"],["ccd","Cafundo Creole"],["cce","Chopi"],["ccg","Samba Daka"],["cch","Atsam"],["ccj","Kasanga"],["ccl","Cutchi-Swahili"],["ccm","Malaccan Creole Malay"],["ccn","North Caucasian languages"],["cco","Comaltepec Chinantec"],["ccp","Chakma"],["ccq","Chaungtha"],["ccr","Cacaopera"],["ccs","South Caucasian languages"],["cda","Choni"],["cdc","Chadic languages"],["cdd","Caddoan languages"],["cde","Chenchu"],["cdf","Chiru"],["cdg","Chamari"],["cdh","Chambeali"],["cdi","Chodri"],["cdj","Churahi"],["cdm","Chepang"],["cdn","Chaudangsi"],["cdo","Min Dong Chinese"],["cdr","Cinda-Regi-Tiyal"],["cds","Chadian Sign Language"],["cdy","Chadong"],["cdz","Koda"],["cea","Lower Chehalis"],["ceb","Cebuano"],["ceg","Chamacoco"],["cek","Eastern Khumi Chin"],["cel","Celtic languages"],["cen","Cen"],["cet","Centúúm"],["cey","Ekai Chin"],["cfa","Dijim-Bwilim"],["cfd","Cara"],["cfg","Como Karim"],["cfm","Falam Chin"],["cga","Changriwa"],["cgc","Kagayanen"],["cgg","Chiga"],["cgk","Chocangacakha"],["chb","Chibcha"],["chc","Catawba"],["chd","Highland Oaxaca Chontal"],["chf","Tabasco Chontal"],["chg","Chagatai"],["chh","Chinook"],["chj","Ojitlán Chinantec"],["chk","Chuukese"],["chl","Cahuilla"],["chm","Mari (Russia)"],["chn","Chinook jargon"],["cho","Choctaw"],["chp","Chipewyan, Dene Suline"],["chq","Quiotepec Chinantec"],["chr","Cherokee"],["cht","Cholón"],["chw","Chuwabu"],["chx","Chantyal"],["chy","Cheyenne"],["chz","Ozumacín Chinantec"],["cia","Cia-Cia"],["cib","Ci Gbe"],["cic","Chickasaw"],["cid","Chimariko"],["cie","Cineni"],["cih","Chinali"],["cik","Chitkuli Kinnauri"],["cim","Cimbrian"],["cin","Cinta Larga"],["cip","Chiapanec"],["cir","Tiri, Haméa, Méa"],["ciw","Chippewa"],["ciy","Chaima"],["cja","Western Cham"],["cje","Chru"],["cjh","Upper Chehalis"],["cji","Chamalal"],["cjk","Chokwe"],["cjm","Eastern Cham"],["cjn","Chenapian"],["cjo","Ashéninka Pajonal"],["cjp","Cabécar"],["cjr","Chorotega"],["cjs","Shor"],["cjv","Chuave"],["cjy","Jinyu Chinese"],["cka","Khumi Awa Chin"],["ckb","Central Kurdish"],["ckh","Chak"],["ckl","Cibak"],["ckm","Chakavian"],["ckn","Kaang Chin"],["cko","Anufo"],["ckq","Kajakse"],["ckr","Kairak"],["cks","Tayo"],["ckt","Chukot"],["cku","Koasati"],["ckv","Kavalan"],["ckx","Caka"],["cky","Cakfem-Mushere"],["ckz","Cakchiquel-Quiché Mixed Language"],["cla","Ron"],["clc","Chilcotin"],["cld","Chaldean Neo-Aramaic"],["cle","Lealao Chinantec"],["clh","Chilisso"],["cli","Chakali"],["clj","Laitu Chin"],["clk","Idu-Mishmi"],["cll","Chala"],["clm","Clallam"],["clo","Lowland Oaxaca Chontal"],["clt","Lautu Chin"],["clu","Caluyanun"],["clw","Chulym"],["cly","Eastern Highland Chatino"],["cma","Maa"],["cmc","Chamic languages"],["cme","Cerma"],["cmg","Classical Mongolian"],["cmi","Emberá-Chamí"],["cmk","Chimakum"],["cml","Campalagian"],["cmm","Michigamea"],["cmn","Mandarin Chinese"],["cmo","Central Mnong"],["cmr","Mro-Khimi Chin"],["cms","Messapic"],["cmt","Camtho"],["cna","Changthang"],["cnb","Chinbon Chin"],["cnc","Côông"],["cng","Northern Qiang"],["cnh","Hakha Chin, Haka Chin"],["cni","Asháninka"],["cnk","Khumi Chin"],["cnl","Lalana Chinantec"],["cno","Con"],["cnp","Northern Ping Chinese, Northern Pinghua"],["cnr","Montenegrin"],["cns","Central Asmat"],["cnt","Tepetotutla Chinantec"],["cnu","Chenoua"],["cnw","Ngawn Chin"],["cnx","Middle Cornish"],["coa","Cocos Islands Malay"],["cob","Chicomuceltec"],["coc","Cocopa"],["cod","Cocama-Cocamilla"],["coe","Koreguaje"],["cof","Colorado"],["cog","Chong"],["coh","Chonyi-Dzihana-Kauma, Chichonyi-Chidzihana-Chikauma"],["coj","Cochimi"],["cok","Santa Teresa Cora"],["col","Columbia-Wenatchi"],["com","Comanche"],["con","Cofán"],["coo","Comox"],["cop","Coptic"],["coq","Coquille"],["cot","Caquinte"],["cou","Wamey"],["cov","Cao Miao"],["cow","Cowlitz"],["cox","Nanti"],["coy","Coyaima"],["coz","Chochotec"],["cpa","Palantla Chinantec"],["cpb","Ucayali-Yurúa Ashéninka"],["cpc","Ajyíninka Apurucayali"],["cpe","English-based creoles and pidgins"],["cpf","French-based creoles and pidgins"],["cpg","Cappadocian Greek"],["cpi","Chinese Pidgin English"],["cpn","Cherepon"],["cpo","Kpeego"],["cpp","Portuguese-based creoles and pidgins"],["cps","Capiznon"],["cpu","Pichis Ashéninka"],["cpx","Pu-Xian Chinese"],["cpy","South Ucayali Ashéninka"],["cqd","Chuanqiandian Cluster Miao"],["cqu","Chilean Quechua"],["cra","Chara"],["crb","Island Carib"],["crc","Lonwolwol"],["crd","Coeur d'Alene"],["crf","Caramanta"],["crg","Michif"],["crh","Crimean Tatar, Crimean Turkish"],["cri","Sãotomense"],["crj","Southern East Cree"],["crk","Plains Cree"],["crl","Northern East Cree"],["crm","Moose Cree"],["crn","El Nayar Cora"],["cro","Crow"],["crp","Creoles and pidgins"],["crq","Iyo'wujwa Chorote"],["crr","Carolina Algonquian"],["crs","Seselwa Creole French"],["crt","Iyojwa'ja Chorote"],["crv","Chaura"],["crw","Chrau"],["crx","Carrier"],["cry","Cori"],["crz","Cruzeño"],["csa","Chiltepec Chinantec"],["csb","Kashubian"],["csc","Catalan Sign Language, Lengua de señas catalana, Llengua de Signes Catalana"],["csd","Chiangmai Sign Language"],["cse","Czech Sign Language"],["csf","Cuba Sign Language"],["csg","Chilean Sign Language"],["csh","Asho Chin"],["csi","Coast Miwok"],["csj","Songlai Chin"],["csk","Jola-Kasa"],["csl","Chinese Sign Language"],["csm","Central Sierra Miwok"],["csn","Colombian Sign Language"],["cso","Sochiapam Chinantec, Sochiapan Chinantec"],["csp","Southern Ping Chinese, Southern Pinghua"],["csq","Croatia Sign Language"],["csr","Costa Rican Sign Language"],["css","Southern Ohlone"],["cst","Northern Ohlone"],["csu","Central Sudanic languages"],["csv","Sumtu Chin"],["csw","Swampy Cree"],["csx","Cambodian Sign Language"],["csy","Siyin Chin"],["csz","Coos"],["cta","Tataltepec Chatino"],["ctc","Chetco"],["ctd","Tedim Chin"],["cte","Tepinapa Chinantec"],["ctg","Chittagonian"],["cth","Thaiphum Chin"],["ctl","Tlacoatzintepec Chinantec"],["ctm","Chitimacha"],["ctn","Chhintange"],["cto","Emberá-Catío"],["ctp","Western Highland Chatino"],["cts","Northern Catanduanes Bikol"],["ctt","Wayanad Chetti"],["ctu","Chol"],["cty","Moundadan Chetty"],["ctz","Zacatepec Chatino"],["cua","Cua"],["cub","Cubeo"],["cuc","Usila Chinantec"],["cug","Chungmboko, Cung"],["cuh","Chuka, Gichuka"],["cui","Cuiba"],["cuj","Mashco Piro"],["cuk","San Blas Kuna"],["cul","Culina, Kulina"],["cum","Cumeral"],["cuo","Cumanagoto"],["cup","Cupeño"],["cuq","Cun"],["cur","Chhulung"],["cus","Cushitic languages"],["cut","Teutila Cuicatec"],["cuu","Tai Ya"],["cuv","Cuvok"],["cuw","Chukwa"],["cux","Tepeuxila Cuicatec"],["cuy","Cuitlatec"],["cvg","Chug"],["cvn","Valle Nacional Chinantec"],["cwa","Kabwa"],["cwb","Maindo"],["cwd","Woods Cree"],["cwe","Kwere"],["cwg","Chewong, Cheq Wong"],["cwt","Kuwaataay"],["cya","Nopala Chatino"],["cyb","Cayubaba"],["cyo","Cuyonon"],["czh","Huizhou Chinese"],["czk","Knaanic"],["czn","Zenzontepec Chatino"],["czo","Min Zhong Chinese"],["czt","Zotung Chin"],["daa","Dangaléat"],["dac","Dambi"],["dad","Marik"],["dae","Duupa"],["daf","Dan"],["dag","Dagbani"],["dah","Gwahatike"],["dai","Day"],["daj","Dar Fur Daju"],["dak","Dakota"],["dal","Dahalo"],["dam","Damakawa"],["dao","Daai Chin"],["dap","Nisi (India)"],["daq","Dandami Maria"],["dar","Dargwa"],["das","Daho-Doo"],["dau","Dar Sila Daju"],["dav","Taita, Dawida"],["daw","Davawenyo"],["dax","Dayi"],["day","Land Dayak languages"],["daz","Dao"],["dba","Bangime"],["dbb","Deno"],["dbd","Dadiya"],["dbe","Dabe"],["dbf","Edopi"],["dbg","Dogul Dom Dogon"],["dbi","Doka"],["dbj","Ida'an"],["dbl","Dyirbal"],["dbm","Duguri"],["dbn","Duriankere"],["dbo","Dulbu"],["dbp","Duwai"],["dbq","Daba"],["dbr","Dabarre"],["dbt","Ben Tey Dogon"],["dbu","Bondum Dom Dogon"],["dbv","Dungu"],["dbw","Bankan Tey Dogon"],["dby","Dibiyaso"],["dcc","Deccan"],["dcr","Negerhollands"],["dda","Dadi Dadi"],["ddd","Dongotono"],["dde","Doondo"],["ddg","Fataluku"],["ddi","West Goodenough"],["ddj","Jaru"],["ddn","Dendi (Benin)"],["ddo","Dido"],["ddr","Dhudhuroa"],["dds","Donno So Dogon"],["ddw","Dawera-Daweloor"],["dec","Dagik"],["ded","Dedua"],["dee","Dewoin"],["def","Dezfuli"],["deg","Degema"],["deh","Dehwari"],["dei","Demisa"],["dek","Dek"],["del","Delaware"],["dem","Dem"],["den","Slave (Athapascan)"],["dep","Pidgin Delaware"],["deq","Dendi (Central African Republic)"],["der","Deori"],["des","Desano"],["dev","Domung"],["dez","Dengese"],["dga","Southern Dagaare"],["dgb","Bunoge Dogon"],["dgc","Casiguran Dumagat Agta"],["dgd","Dagaari Dioula"],["dge","Degenan"],["dgg","Doga"],["dgh","Dghwede"],["dgi","Northern Dagara"],["dgk","Dagba"],["dgl","Andaandi, Dongolawi"],["dgn","Dagoman"],["dgo","Dogri (individual language)"],["dgr","Dogrib, Tłı̨chǫ"],["dgs","Dogoso"],["dgt","Ndra'ngith"],["dgu","Degaru"],["dgw","Daungwurrung"],["dgx","Doghoro"],["dgz","Daga"],["dha","Dhanwar (India)"],["dhd","Dhundari"],["dhg","Dhangu-Djangu, Dhangu, Djangu"],["dhi","Dhimal"],["dhl","Dhalandji"],["dhm","Zemba"],["dhn","Dhanki"],["dho","Dhodia"],["dhr","Dhargari"],["dhs","Dhaiso"],["dhu","Dhurga"],["dhv","Dehu, Drehu"],["dhw","Dhanwar (Nepal)"],["dhx","Dhungaloo"],["dia","Dia"],["dib","South Central Dinka"],["dic","Lakota Dida"],["did","Didinga"],["dif","Dieri, Diyari"],["dig","Digo, Chidigo"],["dih","Kumiai"],["dii","Dimbong"],["dij","Dai"],["dik","Southwestern Dinka"],["dil","Dilling"],["dim","Dime"],["din","Dinka"],["dio","Dibo"],["dip","Northeastern Dinka"],["diq","Dimli (individual language)"],["dir","Dirim"],["dis","Dimasa"],["dit","Dirari"],["diu","Diriku"],["diw","Northwestern Dinka"],["dix","Dixon Reef"],["diy","Diuwe"],["diz","Ding"],["dja","Djadjawurrung"],["djb","Djinba"],["djc","Dar Daju Daju"],["djd","Djamindjung, Ngaliwurru"],["dje","Zarma"],["djf","Djangun"],["dji","Djinang"],["djj","Djeebbana"],["djk","Eastern Maroon Creole, Businenge Tongo, Nenge"],["djl","Djiwarli"],["djm","Jamsay Dogon"],["djn","Jawoyn, Djauan"],["djo","Jangkang"],["djr","Djambarrpuyngu"],["dju","Kapriman"],["djw","Djawi"],["dka","Dakpakha"],["dkg","Kadung"],["dkk","Dakka"],["dkl","Kolum So Dogon"],["dkr","Kuijau"],["dks","Southeastern Dinka"],["dkx","Mazagway"],["dlg","Dolgan"],["dlk","Dahalik"],["dlm","Dalmatian"],["dln","Darlong"],["dma","Duma"],["dmb","Mombo Dogon"],["dmc","Gavak"],["dmd","Madhi Madhi"],["dme","Dugwor"],["dmf","Medefaidrin"],["dmg","Upper Kinabatangan"],["dmk","Domaaki"],["dml","Dameli"],["dmm","Dama"],["dmn","Mande languages"],["dmo","Kemedzung"],["dmr","East Damar"],["dms","Dampelas"],["dmu","Dubu, Tebi"],["dmv","Dumpas"],["dmw","Mudburra"],["dmx","Dema"],["dmy","Demta, Sowari"],["dna","Upper Grand Valley Dani"],["dnd","Daonda"],["dne","Ndendeule"],["dng","Dungan"],["dni","Lower Grand Valley Dani"],["dnj","Dan"],["dnk","Dengka"],["dnn","Dzùùngoo"],["dno","Ndrulo, Northern Lendu"],["dnr","Danaru"],["dnt","Mid Grand Valley Dani"],["dnu","Danau"],["dnv","Danu"],["dnw","Western Dani"],["dny","Dení"],["doa","Dom"],["dob","Dobu"],["doc","Northern Dong"],["doe","Doe"],["dof","Domu"],["doh","Dong"],["doi","Dogri (macrolanguage)"],["dok","Dondo"],["dol","Doso"],["don","Toura (Papua New Guinea)"],["doo","Dongo"],["dop","Lukpa"],["doq","Dominican Sign Language"],["dor","Dori'o"],["dos","Dogosé"],["dot","Dass"],["dov","Dombe"],["dow","Doyayo"],["dox","Bussa"],["doy","Dompo"],["doz","Dorze"],["dpp","Papar"],["dra","Dravidian languages"],["drb","Dair"],["drc","Minderico"],["drd","Darmiya"],["dre","Dolpo"],["drg","Rungus"],["drh","Darkhat"],["dri","C'Lela"],["drl","Paakantyi"],["drn","West Damar"],["dro","Daro-Matu Melanau"],["drq","Dura"],["drr","Dororo"],["drs","Gedeo"],["drt","Drents"],["dru","Rukai"],["drw","Darwazi"],["dry","Darai"],["dsb","Lower Sorbian"],["dse","Dutch Sign Language"],["dsh","Daasanach"],["dsi","Disa"],["dsl","Danish Sign Language"],["dsn","Dusner"],["dso","Desiya"],["dsq","Tadaksahak"],["dta","Daur"],["dtb","Labuk-Kinabatangan Kadazan"],["dtd","Ditidaht"],["dth","Adithinngithigh"],["dti","Ana Tinga Dogon"],["dtk","Tene Kan Dogon"],["dtm","Tomo Kan Dogon"],["dtn","Daatsʼíin"],["dto","Tommo So Dogon"],["dtp","Kadazan Dusun, Central Dusun"],["dtr","Lotud"],["dts","Toro So Dogon"],["dtt","Toro Tegu Dogon"],["dtu","Tebul Ure Dogon"],["dty","Dotyali"],["dua","Duala"],["dub","Dubli"],["duc","Duna"],["dud","Hun-Saare"],["due","Umiray Dumaget Agta"],["duf","Dumbea, Drubea"],["dug","Duruma, Chiduruma"],["duh","Dungra Bhil"],["dui","Dumun"],["duj","Dhuwal"],["duk","Uyajitaya"],["dul","Alabat Island Agta"],["dum","Middle Dutch (ca. 1050-1350)"],["dun","Dusun Deyah"],["duo","Dupaninan Agta"],["dup","Duano"],["duq","Dusun Malang"],["dur","Dii"],["dus","Dumi"],["duu","Drung"],["duv","Duvle"],["duw","Dusun Witu"],["dux","Duungooma"],["duy","Dicamay Agta"],["duz","Duli-Gey"],["dva","Duau"],["dwa","Diri"],["dwk","Dawik Kui"],["dwl","Walo Kumbe Dogon"],["dwr","Dawro"],["dws","Dutton World Speedwords"],["dwu","Dhuwal"],["dww","Dawawa"],["dwy","Dhuwaya"],["dwz","Dewas Rai"],["dya","Dyan"],["dyb","Dyaberdyaber"],["dyd","Dyugun"],["dyg","Villa Viciosa Agta"],["dyi","Djimini Senoufo"],["dym","Yanda Dom Dogon"],["dyn","Dyangadi, Dhanggatti"],["dyo","Jola-Fonyi"],["dyu","Dyula"],["dyy","Djabugay, Dyaabugay"],["dza","Tunzu"],["dzd","Daza"],["dze","Djiwarli"],["dzg","Dazaga"],["dzl","Dzalakha"],["dzn","Dzando"],["eaa","Karenggapa"],["ebc","Beginci"],["ebg","Ebughu"],["ebk","Eastern Bontok"],["ebo","Teke-Ebo"],["ebr","Ebrié"],["ebu","Embu, Kiembu"],["ecr","Eteocretan"],["ecs","Ecuadorian Sign Language"],["ecy","Eteocypriot"],["eee","E"],["efa","Efai"],["efe","Efe"],["efi","Efik"],["ega","Ega"],["egl","Emilian"],["ego","Eggon"],["egx","Egyptian languages"],["egy","Egyptian (Ancient)"],["ehs","Miyakubo Sign Language"],["ehu","Ehueun"],["eip","Eipomek"],["eit","Eitiep"],["eiv","Askopan"],["eja","Ejamat"],["eka","Ekajuk"],["ekc","Eastern Karnic"],["eke","Ekit"],["ekg","Ekari"],["eki","Eki"],["ekk","Standard Estonian"],["ekl","Kol (Bangladesh), Kol"],["ekm","Elip"],["eko","Koti"],["ekp","Ekpeye"],["ekr","Yace"],["eky","Eastern Kayah"],["ele","Elepi"],["elh","El Hugeirat"],["eli","Nding"],["elk","Elkei"],["elm","Eleme"],["elo","El Molo"],["elp","Elpaputih"],["elu","Elu"],["elx","Elamite"],["ema","Emai-Iuleha-Ora"],["emb","Embaloh"],["eme","Emerillon"],["emg","Eastern Meohang"],["emi","Mussau-Emira"],["emk","Eastern Maninkakan"],["emm","Mamulique"],["emn","Eman"],["emo","Emok"],["emp","Northern Emberá"],["emq","Eastern Minyag"],["ems","Pacific Gulf Yupik"],["emu","Eastern Muria"],["emw","Emplawas"],["emx","Erromintxela"],["emy","Epigraphic Mayan"],["emz","Mbessa"],["ena","Apali"],["enb","Markweeta"],["enc","En"],["end","Ende"],["enf","Forest Enets"],["enh","Tundra Enets"],["enl","Enlhet"],["enm","Middle English (1100-1500)"],["enn","Engenni"],["eno","Enggano"],["enq","Enga"],["enr","Emumu, Emem"],["enu","Enu"],["env","Enwan (Edu State)"],["enw","Enwan (Akwa Ibom State)"],["enx","Enxet"],["eot","Beti (Côte d'Ivoire)"],["epi","Epie"],["era","Eravallan"],["erg","Sie"],["erh","Eruwa"],["eri","Ogea"],["erk","South Efate"],["ero","Horpa"],["err","Erre"],["ers","Ersu"],["ert","Eritai"],["erw","Erokwanas"],["ese","Ese Ejja"],["esg","Aheri Gondi"],["esh","Eshtehardi"],["esi","North Alaskan Inupiatun"],["esk","Northwest Alaska Inupiatun"],["esl","Egypt Sign Language"],["esm","Esuma"],["esn","Salvadoran Sign Language"],["eso","Estonian Sign Language"],["esq","Esselen"],["ess","Central Siberian Yupik"],["esu","Central Yupik"],["esx","Eskimo-Aleut languages"],["esy","Eskayan"],["etb","Etebi"],["etc","Etchemin"],["eth","Ethiopian Sign Language"],["etn","Eton (Vanuatu)"],["eto","Eton (Cameroon)"],["etr","Edolo"],["ets","Yekhee"],["ett","Etruscan"],["etu","Ejagham"],["etx","Eten"],["etz","Semimi"],["euq","Basque (family)"],["eve","Even"],["evh","Uvbie"],["evn","Evenki"],["ewo","Ewondo"],["ext","Extremaduran"],["eya","Eyak"],["eyo","Keiyo"],["eza","Ezaa"],["eze","Uzekwe"],["faa","Fasu"],["fab","Fa d'Ambu"],["fad","Wagi"],["faf","Fagani"],["fag","Finongan"],["fah","Baissa Fali"],["fai","Faiwol"],["faj","Faita"],["fak","Fang (Cameroon)"],["fal","South Fali"],["fam","Fam"],["fan","Fang (Equatorial Guinea)"],["fap","Paloor"],["far","Fataleka"],["fat","Fanti"],["fau","Fayu"],["fax","Fala"],["fay","Southwestern Fars"],["faz","Northwestern Fars"],["fbl","West Albay Bikol"],["fcs","Quebec Sign Language"],["fer","Feroge"],["ffi","Foia Foia"],["ffm","Maasina Fulfulde"],["fgr","Fongoro"],["fia","Nobiin"],["fie","Fyer"],["fif","Faifi"],["fil","Filipino, Pilipino"],["fip","Fipa"],["fir","Firan"],["fit","Tornedalen Finnish"],["fiu","Finno-Ugrian languages"],["fiw","Fiwaga"],["fkk","Kirya-Konzəl"],["fkv","Kven Finnish"],["fla","Kalispel-Pend d'Oreille"],["flh","Foau"],["fli","Fali"],["fll","North Fali"],["fln","Flinders Island"],["flr","Fuliiru"],["fly","Flaaitaal, Tsotsitaal"],["fmp","Fe'fe'"],["fmu","Far Western Muria"],["fnb","Fanbak"],["fng","Fanagalo"],["fni","Fania"],["fod","Foodo"],["foi","Foi"],["fom","Foma"],["fon","Fon"],["for","Fore"],["fos","Siraya"],["fox","Formosan languages"],["fpe","Fernando Po Creole English"],["fqs","Fas"],["frc","Cajun French"],["frd","Fordata"],["frk","Frankish"],["frm","Middle French (ca. 1400-1600)"],["fro","Old French (842-ca. 1400)"],["frp","Arpitan, Francoprovençal"],["frq","Forak"],["frr","Northern Frisian"],["frs","Eastern Frisian"],["frt","Fortsenal"],["fse","Finnish Sign Language"],["fsl","French Sign Language"],["fss","Finland-Swedish Sign Language, finlandssvenskt teckenspråk, suomenruotsalainen viittomakieli"],["fub","Adamawa Fulfulde"],["fuc","Pulaar"],["fud","East Futuna"],["fue","Borgu Fulfulde"],["fuf","Pular"],["fuh","Western Niger Fulfulde"],["fui","Bagirmi Fulfulde"],["fuj","Ko"],["fum","Fum"],["fun","Fulniô"],["fuq","Central-Eastern Niger Fulfulde"],["fur","Friulian"],["fut","Futuna-Aniwa"],["fuu","Furu"],["fuv","Nigerian Fulfulde"],["fuy","Fuyug"],["fvr","Fur"],["fwa","Fwâi"],["fwe","Fwe"],["gaa","Ga"],["gab","Gabri"],["gac","Mixed Great Andamanese"],["gad","Gaddang"],["gae","Guarequena"],["gaf","Gende"],["gag","Gagauz"],["gah","Alekano"],["gai","Borei"],["gaj","Gadsup"],["gak","Gamkonora"],["gal","Galolen"],["gam","Kandawo"],["gan","Gan Chinese"],["gao","Gants"],["gap","Gal"],["gaq","Gata'"],["gar","Galeya"],["gas","Adiwasi Garasia"],["gat","Kenati"],["gau","Mudhili Gadaba"],["gav","Gabutamon"],["gaw","Nobonob"],["gax","Borana-Arsi-Guji Oromo"],["gay","Gayo"],["gaz","West Central Oromo"],["gba","Gbaya (Central African Republic)"],["gbb","Kaytetye"],["gbc","Garawa"],["gbd","Karajarri"],["gbe","Niksek"],["gbf","Gaikundi"],["gbg","Gbanziri"],["gbh","Defi Gbe"],["gbi","Galela"],["gbj","Bodo Gadaba"],["gbk","Gaddi"],["gbl","Gamit"],["gbm","Garhwali"],["gbn","Mo'da"],["gbo","Northern Grebo"],["gbp","Gbaya-Bossangoa"],["gbq","Gbaya-Bozoum"],["gbr","Gbagyi"],["gbs","Gbesi Gbe"],["gbu","Gagadu"],["gbv","Gbanu"],["gbw","Gabi-Gabi"],["gbx","Eastern Xwla Gbe"],["gby","Gbari"],["gbz","Zoroastrian Dari"],["gcc","Mali"],["gcd","Ganggalida"],["gce","Galice"],["gcf","Guadeloupean Creole French"],["gcl","Grenadian Creole English"],["gcn","Gaina"],["gcr","Guianese Creole French"],["gct","Colonia Tovar German"],["gda","Gade Lohar"],["gdb","Pottangi Ollar Gadaba"],["gdc","Gugu Badhun"],["gdd","Gedaged"],["gde","Gude"],["gdf","Guduf-Gava"],["gdg","Ga'dang"],["gdh","Gadjerawang, Gajirrabeng"],["gdi","Gundi"],["gdj","Gurdjar"],["gdk","Gadang"],["gdl","Dirasha"],["gdm","Laal"],["gdn","Umanakaina"],["gdo","Ghodoberi"],["gdq","Mehri"],["gdr","Wipi"],["gds","Ghandruk Sign Language"],["gdt","Kungardutyi"],["gdu","Gudu"],["gdx","Godwari"],["gea","Geruma"],["geb","Kire"],["gec","Gboloo Grebo"],["ged","Gade"],["gef","Gerai"],["geg","Gengle"],["geh","Hutterite German, Hutterisch"],["gei","Gebe"],["gej","Gen"],["gek","Ywom"],["gel","ut-Ma'in"],["gem","Germanic languages"],["geq","Geme"],["ges","Geser-Gorom"],["gev","Eviya"],["gew","Gera"],["gex","Garre"],["gey","Enya"],["gez","Geez"],["gfk","Patpatar"],["gft","Gafat"],["gfx","Mangetti Dune ǃXung"],["gga","Gao"],["ggb","Gbii"],["ggd","Gugadj"],["gge","Gurr-goni"],["ggg","Gurgula"],["ggk","Kungarakany"],["ggl","Ganglau"],["ggn","Eastern Gurung"],["ggo","Southern Gondi"],["ggr","Aghu Tharnggalu"],["ggt","Gitua"],["ggu","Gagu, Gban"],["ggw","Gogodala"],["gha","Ghadamès"],["ghc","Hiberno-Scottish Gaelic"],["ghe","Southern Ghale"],["ghh","Northern Ghale"],["ghk","Geko Karen"],["ghl","Ghulfan"],["ghn","Ghanongga"],["gho","Ghomara"],["ghr","Ghera"],["ghs","Guhu-Samane"],["ght","Kuke, Kutang Ghale"],["gia","Kija"],["gib","Gibanawa"],["gic","Gail"],["gid","Gidar"],["gie","Gaɓogbo, Guébie"],["gig","Goaria"],["gih","Githabul"],["gii","Girirra"],["gil","Gilbertese"],["gim","Gimi (Eastern Highlands)"],["gin","Hinukh"],["gio","Gelao"],["gip","Gimi (West New Britain)"],["giq","Green Gelao"],["gir","Red Gelao"],["gis","North Giziga"],["git","Gitxsan"],["giu","Mulao"],["giw","White Gelao"],["gix","Gilima"],["giy","Giyug"],["giz","South Giziga"],["gji","Geji"],["gjk","Kachi Koli"],["gjm","Gunditjmara"],["gjn","Gonja"],["gjr","Gurindji Kriol"],["gju","Gujari"],["gka","Guya"],["gkd","Magɨ (Madang Province)"],["gke","Ndai"],["gkn","Gokana"],["gko","Kok-Nar"],["gkp","Guinea Kpelle"],["gku","ǂUngkue"],["glb","Belning"],["glc","Bon Gula"],["gld","Nanai"],["glh","Northwest Pashai, Northwest Pashayi"],["gli","Guliguli"],["glj","Gula Iro"],["glk","Gilaki"],["gll","Garlali"],["glo","Galambu"],["glr","Glaro-Twabo"],["glu","Gula (Chad)"],["glw","Glavda"],["gly","Gule"],["gma","Gambera"],["gmb","Gula'alaa"],["gmd","Mághdì"],["gme","East Germanic languages"],["gmg","Magɨyi"],["gmh","Middle High German (ca. 1050-1500)"],["gml","Middle Low German"],["gmm","Gbaya-Mbodomo"],["gmn","Gimnime"],["gmq","North Germanic languages"],["gmr","Mirning, Mirniny"],["gmu","Gumalu"],["gmv","Gamo"],["gmw","West Germanic languages"],["gmx","Magoma"],["gmy","Mycenaean Greek"],["gmz","Mgbolizhia"],["gna","Kaansa"],["gnb","Gangte"],["gnc","Guanche"],["gnd","Zulgo-Gemzek"],["gne","Ganang"],["gng","Ngangam"],["gnh","Lere"],["gni","Gooniyandi"],["gnj","Ngen"],["gnk","ǁGana"],["gnl","Gangulu"],["gnm","Ginuman"],["gnn","Gumatj"],["gno","Northern Gondi"],["gnq","Gana"],["gnr","Gureng Gureng"],["gnt","Guntai"],["gnu","Gnau"],["gnw","Western Bolivian Guaraní"],["gnz","Ganzi"],["goa","Guro"],["gob","Playero"],["goc","Gorakor"],["god","Godié"],["goe","Gongduk"],["gof","Gofa"],["gog","Gogo"],["goh","Old High German (ca. 750-1050)"],["goi","Gobasi"],["goj","Gowlan"],["gok","Gowli"],["gol","Gola"],["gom","Goan Konkani"],["gon","Gondi"],["goo","Gone Dau"],["gop","Yeretuar"],["goq","Gorap"],["gor","Gorontalo"],["gos","Gronings"],["got","Gothic"],["gou","Gavar"],["gow","Gorowa"],["gox","Gobu"],["goy","Goundo"],["goz","Gozarkhani"],["gpa","Gupa-Abawa"],["gpe","Ghanaian Pidgin English"],["gpn","Taiap"],["gqa","Ga'anda"],["gqi","Guiqiong"],["gqn","Guana (Brazil)"],["gqr","Gor"],["gqu","Qau"],["gra","Rajput Garasia"],["grb","Grebo"],["grc","Ancient Greek (to 1453)"],["grd","Guruntum-Mbaaru"],["grg","Madi"],["grh","Gbiri-Niragu"],["gri","Ghari"],["grj","Southern Grebo"],["grk","Greek languages"],["grm","Kota Marudu Talantang"],["gro","Groma"],["grq","Gorovu"],["grr","Taznatit"],["grs","Gresi"],["grt","Garo"],["gru","Kistane"],["grv","Central Grebo"],["grw","Gweda"],["grx","Guriaso"],["gry","Barclayville Grebo"],["grz","Guramalum"],["gse","Ghanaian Sign Language"],["gsg","German Sign Language"],["gsl","Gusilay"],["gsm","Guatemalan Sign Language"],["gsn","Nema, Gusan"],["gso","Southwest Gbaya"],["gsp","Wasembo"],["gss","Greek Sign Language"],["gsw","Swiss German, Alemannic, Alsatian"],["gta","Guató"],["gti","Gbati-ri"],["gtu","Aghu-Tharnggala"],["gua","Shiki"],["gub","Guajajára"],["guc","Wayuu"],["gud","Yocoboué Dida"],["gue","Gurindji"],["guf","Gupapuyngu"],["gug","Paraguayan Guaraní"],["guh","Guahibo"],["gui","Eastern Bolivian Guaraní"],["guk","Gumuz"],["gul","Sea Island Creole English"],["gum","Guambiano"],["gun","Mbyá Guaraní"],["guo","Guayabero"],["gup","Gunwinggu"],["guq","Aché"],["gur","Farefare"],["gus","Guinean Sign Language"],["gut","Maléku Jaíka"],["guu","Yanomamö"],["guv","Gey"],["guw","Gun"],["gux","Gourmanchéma"],["guz","Gusii, Ekegusii"],["gva","Guana (Paraguay)"],["gvc","Guanano"],["gve","Duwet"],["gvf","Golin"],["gvj","Guajá"],["gvl","Gulay"],["gvm","Gurmana"],["gvn","Kuku-Yalanji"],["gvo","Gavião Do Jiparaná"],["gvp","Pará Gavião"],["gvr","Gurung"],["gvs","Gumawana"],["gvy","Guyani"],["gwa","Mbato"],["gwb","Gwa"],["gwc","Gawri, Kalami"],["gwd","Gawwada"],["gwe","Gweno"],["gwf","Gowro"],["gwg","Moo"],["gwi","Gwichʼin"],["gwj","ǀGwi"],["gwm","Awngthim"],["gwn","Gwandara"],["gwr","Gwere"],["gwt","Gawar-Bati"],["gwu","Guwamu"],["gww","Kwini"],["gwx","Gua"],["gxx","Wè Southern"],["gya","Northwest Gbaya"],["gyb","Garus"],["gyd","Kayardild"],["gye","Gyem"],["gyf","Gungabula"],["gyg","Gbayi"],["gyi","Gyele"],["gyl","Gayil"],["gym","Ngäbere"],["gyn","Guyanese Creole English"],["gyo","Gyalsumdo"],["gyr","Guarayu"],["gyy","Gunya"],["gyz","Geji, Gyaazi"],["gza","Ganza"],["gzi","Gazi"],["gzn","Gane"],["haa","Han"],["hab","Hanoi Sign Language"],["hac","Gurani"],["had","Hatam"],["hae","Eastern Oromo"],["haf","Haiphong Sign Language"],["hag","Hanga"],["hah","Hahon"],["hai","Haida"],["haj","Hajong"],["hak","Hakka Chinese"],["hal","Halang"],["ham","Hewa"],["han","Hangaza"],["hao","Hakö"],["hap","Hupla"],["haq","Ha"],["har","Harari"],["has","Haisla"],["hav","Havu"],["haw","Hawaiian"],["hax","Southern Haida"],["hay","Haya"],["haz","Hazaragi"],["hba","Hamba"],["hbb","Huba"],["hbn","Heiban"],["hbo","Ancient Hebrew"],["hbu","Habu"],["hca","Andaman Creole Hindi"],["hch","Huichol"],["hdn","Northern Haida"],["hds","Honduras Sign Language"],["hdy","Hadiyya"],["hea","Northern Qiandong Miao"],["hed","Herdé"],["heg","Helong"],["heh","Hehe"],["hei","Heiltsuk"],["hem","Hemba"],["hgm","Haiǁom"],["hgw","Haigwai"],["hhi","Hoia Hoia"],["hhr","Kerak"],["hhy","Hoyahoya"],["hia","Lamang"],["hib","Hibito"],["hid","Hidatsa"],["hif","Fiji Hindi"],["hig","Kamwe"],["hih","Pamosu"],["hii","Hinduri"],["hij","Hijuk"],["hik","Seit-Kaitetu"],["hil","Hiligaynon"],["him","Himachali languages, Western Pahari languages"],["hio","Tsoa"],["hir","Himarimã"],["hit","Hittite"],["hiw","Hiw"],["hix","Hixkaryána"],["hji","Haji"],["hka","Kahe"],["hke","Hunde"],["hkh","Khah, Poguli"],["hkk","Hunjara-Kaina Ke"],["hkn","Mel-Khaonh"],["hks","Hong Kong Sign Language, Heung Kong Sau Yue"],["hla","Halia"],["hlb","Halbi"],["hld","Halang Doan"],["hle","Hlersu"],["hlt","Matu Chin"],["hlu","Hieroglyphic Luwian"],["hma","Southern Mashan Hmong, Southern Mashan Miao"],["hmb","Humburi Senni Songhay"],["hmc","Central Huishui Hmong, Central Huishui Miao"],["hmd","Large Flowery Miao, A-hmaos, Da-Hua Miao"],["hme","Eastern Huishui Hmong, Eastern Huishui Miao"],["hmf","Hmong Don"],["hmg","Southwestern Guiyang Hmong"],["hmh","Southwestern Huishui Hmong, Southwestern Huishui Miao"],["hmi","Northern Huishui Hmong, Northern Huishui Miao"],["hmj","Ge, Gejia"],["hmk","Maek"],["hml","Luopohe Hmong, Luopohe Miao"],["hmm","Central Mashan Hmong, Central Mashan Miao"],["hmn","Hmong, Mong"],["hmp","Northern Mashan Hmong, Northern Mashan Miao"],["hmq","Eastern Qiandong Miao"],["hmr","Hmar"],["hms","Southern Qiandong Miao"],["hmt","Hamtai"],["hmu","Hamap"],["hmv","Hmong Dô"],["hmw","Western Mashan Hmong, Western Mashan Miao"],["hmx","Hmong-Mien languages"],["hmy","Southern Guiyang Hmong, Southern Guiyang Miao"],["hmz","Hmong Shua, Sinicized Miao"],["hna","Mina (Cameroon)"],["hnd","Southern Hindko"],["hne","Chhattisgarhi"],["hng","Hungu"],["hnh","ǁAni"],["hni","Hani"],["hnj","Hmong Njua, Mong Leng, Mong Njua"],["hnn","Hanunoo"],["hno","Northern Hindko"],["hns","Caribbean Hindustani"],["hnu","Hung"],["hoa","Hoava"],["hob","Mari (Madang Province)"],["hoc","Ho"],["hod","Holma"],["hoe","Horom"],["hoh","Hobyót"],["hoi","Holikachuk"],["hoj","Hadothi, Haroti"],["hok","Hokan languages"],["hol","Holu"],["hom","Homa"],["hoo","Holoholo"],["hop","Hopi"],["hor","Horo"],["hos","Ho Chi Minh City Sign Language"],["hot","Hote, Malê"],["hov","Hovongan"],["how","Honi"],["hoy","Holiya"],["hoz","Hozo"],["hpo","Hpon"],["hps","Hawai'i Sign Language (HSL), Hawai'i Pidgin Sign Language"],["hra","Hrangkhol"],["hrc","Niwer Mil"],["hre","Hre"],["hrk","Haruku"],["hrm","Horned Miao"],["hro","Haroi"],["hrp","Nhirrpi"],["hrr","Horuru"],["hrt","Hértevin"],["hru","Hruso"],["hrw","Warwar Feni"],["hrx","Hunsrik"],["hrz","Harzani"],["hsb","Upper Sorbian"],["hsh","Hungarian Sign Language"],["hsl","Hausa Sign Language"],["hsn","Xiang Chinese"],["hss","Harsusi"],["hti","Hoti"],["hto","Minica Huitoto"],["hts","Hadza"],["htu","Hitu"],["htx","Middle Hittite"],["hub","Huambisa"],["huc","ǂHua, ǂʼAmkhoe"],["hud","Huaulu"],["hue","San Francisco Del Mar Huave"],["huf","Humene"],["hug","Huachipaeri"],["huh","Huilliche"],["hui","Huli"],["huj","Northern Guiyang Hmong, Northern Guiyang Miao"],["huk","Hulung"],["hul","Hula"],["hum","Hungana"],["huo","Hu"],["hup","Hupa"],["huq","Tsat"],["hur","Halkomelem"],["hus","Huastec"],["hut","Humla"],["huu","Murui Huitoto"],["huv","San Mateo Del Mar Huave"],["huw","Hukumina"],["hux","Nüpode Huitoto"],["huy","Hulaulá"],["huz","Hunzib"],["hvc","Haitian Vodoun Culture Language"],["hve","San Dionisio Del Mar Huave"],["hvk","Haveke"],["hvn","Sabu"],["hvv","Santa María Del Mar Huave"],["hwa","Wané"],["hwc","Hawai'i Creole English, Hawai'i Pidgin"],["hwo","Hwana"],["hya","Hya"],["hyw","Western Armenian"],["hyx","Armenian (family)"],["iai","Iaai"],["ian","Iatmul"],["iap","Iapama"],["iar","Purari"],["iba","Iban"],["ibb","Ibibio"],["ibd","Iwaidja"],["ibe","Akpes"],["ibg","Ibanag"],["ibh","Bih"],["ibi","Ibilo"],["ibl","Ibaloi"],["ibm","Agoi"],["ibn","Ibino"],["ibr","Ibuoro"],["ibu","Ibu"],["iby","Ibani"],["ica","Ede Ica"],["ich","Etkywan"],["icl","Icelandic Sign Language"],["icr","Islander Creole English"],["ida","Idakho-Isukha-Tiriki, Luidakho-Luisukha-Lutirichi"],["idb","Indo-Portuguese"],["idc","Idon, Ajiya"],["idd","Ede Idaca"],["ide","Idere"],["idi","Idi"],["idr","Indri"],["ids","Idesa"],["idt","Idaté"],["idu","Idoma"],["ifa","Amganad Ifugao"],["ifb","Batad Ifugao, Ayangan Ifugao"],["ife","Ifè"],["iff","Ifo"],["ifk","Tuwali Ifugao"],["ifm","Teke-Fuumu"],["ifu","Mayoyao Ifugao"],["ify","Keley-I Kallahan"],["igb","Ebira"],["ige","Igede"],["igg","Igana"],["igl","Igala"],["igm","Kanggape"],["ign","Ignaciano"],["igo","Isebe"],["igs","Interglossa"],["igw","Igwe"],["ihb","Iha Based Pidgin"],["ihi","Ihievbe"],["ihp","Iha"],["ihw","Bidhawal"],["iin","Thiin"],["iir","Indo-Iranian languages"],["ijc","Izon"],["ije","Biseni"],["ijj","Ede Ije"],["ijn","Kalabari"],["ijo","Ijo languages"],["ijs","Southeast Ijo"],["ike","Eastern Canadian Inuktitut"],["iki","Iko"],["ikk","Ika"],["ikl","Ikulu"],["iko","Olulumo-Ikom"],["ikp","Ikpeshi"],["ikr","Ikaranggal"],["iks","Inuit Sign Language"],["ikt","Inuinnaqtun, Western Canadian Inuktitut"],["ikv","Iku-Gora-Ankwa"],["ikw","Ikwere"],["ikx","Ik"],["ikz","Ikizu"],["ila","Ile Ape"],["ilb","Ila"],["ilg","Garig-Ilgar"],["ili","Ili Turki"],["ilk","Ilongot"],["ill","Iranun"],["ilm","Iranun (Malaysia)"],["ilo","Iloko"],["ilp","Iranun (Philippines)"],["ils","International Sign"],["ilu","Ili'uun"],["ilv","Ilue"],["ilw","Talur"],["ima","Mala Malasar"],["ime","Imeraguen"],["imi","Anamgura"],["iml","Miluk"],["imn","Imonda"],["imo","Imbongu"],["imr","Imroing"],["ims","Marsian"],["imy","Milyan"],["inb","Inga"],["inc","Indic languages"],["ine","Indo-European languages"],["ing","Degexit'an"],["inh","Ingush"],["inj","Jungle Inga"],["inl","Indonesian Sign Language"],["inm","Minaean"],["inn","Isinai"],["ino","Inoke-Yate"],["inp","Iñapari"],["ins","Indian Sign Language"],["int","Intha"],["inz","Ineseño"],["ior","Inor"],["iou","Tuma-Irumu"],["iow","Iowa-Oto"],["ipi","Ipili"],["ipo","Ipiko"],["iqu","Iquito"],["iqw","Ikwo"],["ira","Iranian languages"],["ire","Iresim"],["irh","Irarutu"],["iri","Rigwe, Irigwe"],["irk","Iraqw"],["irn","Irántxe"],["iro","Iroquoian languages"],["irr","Ir"],["iru","Irula"],["irx","Kamberau"],["iry","Iraya"],["isa","Isabi"],["isc","Isconahua"],["isd","Isnag"],["ise","Italian Sign Language"],["isg","Irish Sign Language"],["ish","Esan"],["isi","Nkem-Nkum"],["isk","Ishkashimi"],["ism","Masimasi"],["isn","Isanzu"],["iso","Isoko"],["isr","Israeli Sign Language"],["ist","Istriot"],["isu","Isu (Menchum Division)"],["itb","Binongan Itneg"],["itc","Italic languages"],["itd","Southern Tidung"],["ite","Itene"],["iti","Inlaod Itneg"],["itk","Judeo-Italian"],["itl","Itelmen"],["itm","Itu Mbon Uzo"],["ito","Itonama"],["itr","Iteri"],["its","Isekiri"],["itt","Maeng Itneg"],["itv","Itawit"],["itw","Ito"],["itx","Itik"],["ity","Moyadan Itneg"],["itz","Itzá"],["ium","Iu Mien"],["ivb","Ibatan"],["ivv","Ivatan"],["iwk","I-Wak"],["iwm","Iwam"],["iwo","Iwur"],["iws","Sepik Iwam"],["ixc","Ixcatec"],["ixl","Ixil"],["iya","Iyayu"],["iyo","Mesaka"],["iyx","Yaka (Congo)"],["izh","Ingrian"],["izi","Izi-Ezaa-Ikwo-Mgbo"],["izr","Izere"],["izz","Izii"],["jaa","Jamamadí"],["jab","Hyam"],["jac","Popti', Jakalteko"],["jad","Jahanka"],["jae","Yabem"],["jaf","Jara"],["jah","Jah Hut"],["jaj","Zazao"],["jak","Jakun"],["jal","Yalahatan"],["jam","Jamaican Creole English"],["jan","Jandai"],["jao","Yanyuwa"],["jaq","Yaqay"],["jar","Jarawa (Nigeria)"],["jas","New Caledonian Javanese"],["jat","Jakati"],["jau","Yaur"],["jax","Jambi Malay"],["jay","Yan-nhangu, Nhangu"],["jaz","Jawe"],["jbe","Judeo-Berber"],["jbi","Badjiri"],["jbj","Arandai"],["jbk","Barikewa"],["jbm","Bijim"],["jbn","Nafusi"],["jbo","Lojban"],["jbr","Jofotek-Bromnya"],["jbt","Jabutí"],["jbu","Jukun Takum"],["jbw","Yawijibaya"],["jcs","Jamaican Country Sign Language"],["jct","Krymchak"],["jda","Jad"],["jdg","Jadgali"],["jdt","Judeo-Tat"],["jeb","Jebero"],["jee","Jerung"],["jeg","Jeng"],["jeh","Jeh"],["jei","Yei"],["jek","Jeri Kuo"],["jel","Yelmek"],["jen","Dza"],["jer","Jere"],["jet","Manem"],["jeu","Jonkor Bourmataguil"],["jgb","Ngbee"],["jge","Judeo-Georgian"],["jgk","Gwak"],["jgo","Ngomba"],["jhi","Jehai"],["jhs","Jhankot Sign Language"],["jia","Jina"],["jib","Jibu"],["jic","Tol"],["jid","Bu (Kaduna State)"],["jie","Jilbe"],["jig","Jingulu, Djingili"],["jih","sTodsde, Shangzhai"],["jii","Jiiddu"],["jil","Jilim"],["jim","Jimi (Cameroon)"],["jio","Jiamao"],["jiq","Guanyinqiao, Lavrung"],["jit","Jita"],["jiu","Youle Jinuo"],["jiv","Shuar"],["jiy","Buyuan Jinuo"],["jje","Jejueo"],["jjr","Bankal"],["jka","Kaera"],["jkm","Mobwa Karen"],["jko","Kubo"],["jkp","Paku Karen"],["jkr","Koro (India)"],["jks","Amami Koniya Sign Language"],["jku","Labir"],["jle","Ngile"],["jls","Jamaican Sign Language"],["jma","Dima"],["jmb","Zumbun"],["jmc","Machame"],["jmd","Yamdena"],["jmi","Jimi (Nigeria)"],["jml","Jumli"],["jmn","Makuri Naga"],["jmr","Kamara"],["jms","Mashi (Nigeria)"],["jmw","Mouwase"],["jmx","Western Juxtlahuaca Mixtec"],["jna","Jangshung"],["jnd","Jandavra"],["jng","Yangman"],["jni","Janji"],["jnj","Yemsa"],["jnl","Rawat"],["jns","Jaunsari"],["job","Joba"],["jod","Wojenaka"],["jog","Jogi"],["jor","Jorá"],["jos","Jordanian Sign Language"],["jow","Jowulu"],["jpa","Jewish Palestinian Aramaic"],["jpr","Judeo-Persian"],["jpx","Japanese (family)"],["jqr","Jaqaru"],["jra","Jarai"],["jrb","Judeo-Arabic"],["jrr","Jiru"],["jrt","Jakattoe"],["jru","Japrería"],["jsl","Japanese Sign Language"],["jua","Júma"],["jub","Wannu"],["juc","Jurchen"],["jud","Worodougou"],["juh","Hõne"],["jui","Ngadjuri"],["juk","Wapan"],["jul","Jirel"],["jum","Jumjum"],["jun","Juang"],["juo","Jiba"],["jup","Hupdë"],["jur","Jurúna"],["jus","Jumla Sign Language"],["jut","Jutish"],["juu","Ju"],["juw","Wãpha"],["juy","Juray"],["jvd","Javindo"],["jvn","Caribbean Javanese"],["jwi","Jwira-Pepesa"],["jya","Jiarong"],["jye","Judeo-Yemeni Arabic"],["jyy","Jaya"],["kaa","Kara-Kalpak, Karakalpak"],["kab","Kabyle"],["kac","Kachin, Jingpho"],["kad","Adara"],["kae","Ketangalan"],["kaf","Katso"],["kag","Kajaman"],["kah","Kara (Central African Republic)"],["kai","Karekare"],["kaj","Jju"],["kak","Kalanguya, Kayapa Kallahan"],["kam","Kamba (Kenya)"],["kao","Xaasongaxango"],["kap","Bezhta"],["kaq","Capanahua"],["kar","Karen languages"],["kav","Katukína"],["kaw","Kawi"],["kax","Kao"],["kay","Kamayurá"],["kba","Kalarko"],["kbb","Kaxuiâna"],["kbc","Kadiwéu"],["kbd","Kabardian"],["kbe","Kanju"],["kbf","Kakauhua"],["kbg","Khamba"],["kbh","Camsá"],["kbi","Kaptiau"],["kbj","Kari"],["kbk","Grass Koiari"],["kbl","Kanembu"],["kbm","Iwal"],["kbn","Kare (Central African Republic)"],["kbo","Keliko"],["kbp","Kabiyè"],["kbq","Kamano"],["kbr","Kafa"],["kbs","Kande"],["kbt","Abadi"],["kbu","Kabutra"],["kbv","Dera (Indonesia)"],["kbw","Kaiep"],["kbx","Ap Ma"],["kby","Manga Kanuri"],["kbz","Duhwa"],["kca","Khanty"],["kcb","Kawacha"],["kcc","Lubila"],["kcd","Ngkâlmpw Kanum"],["kce","Kaivi"],["kcf","Ukaan"],["kcg","Tyap"],["kch","Vono"],["kci","Kamantan"],["kcj","Kobiana"],["kck","Kalanga"],["kcl","Kela (Papua New Guinea), Kala"],["kcm","Gula (Central African Republic)"],["kcn","Nubi"],["kco","Kinalakna"],["kcp","Kanga"],["kcq","Kamo"],["kcr","Katla"],["kcs","Koenoem"],["kct","Kaian"],["kcu","Kami (Tanzania)"],["kcv","Kete"],["kcw","Kabwari"],["kcx","Kachama-Ganjule"],["kcy","Korandje"],["kcz","Konongo"],["kda","Worimi"],["kdc","Kutu"],["kdd","Yankunytjatjara"],["kde","Makonde"],["kdf","Mamusi"],["kdg","Seba"],["kdh","Tem"],["kdi","Kumam"],["kdj","Karamojong"],["kdk","Numèè, Kwényi"],["kdl","Tsikimba"],["kdm","Kagoma"],["kdn","Kunda"],["kdo","Kordofanian languages"],["kdp","Kaningdon-Nindem"],["kdq","Koch"],["kdr","Karaim"],["kdt","Kuy"],["kdu","Kadaru"],["kdv","Kado"],["kdw","Koneraw"],["kdx","Kam"],["kdy","Keder, Keijar"],["kdz","Kwaja"],["kea","Kabuverdianu"],["keb","Kélé"],["kec","Keiga"],["ked","Kerewe"],["kee","Eastern Keres"],["kef","Kpessi"],["keg","Tese"],["keh","Keak"],["kei","Kei"],["kej","Kadar"],["kek","Kekchí"],["kel","Kela (Democratic Republic of Congo)"],["kem","Kemak"],["ken","Kenyang"],["keo","Kakwa"],["kep","Kaikadi"],["keq","Kamar"],["ker","Kera"],["kes","Kugbo"],["ket","Ket"],["keu","Akebu"],["kev","Kanikkaran"],["kew","West Kewa"],["kex","Kukna"],["key","Kupia"],["kez","Kukele"],["kfa","Kodava"],["kfb","Northwestern Kolami"],["kfc","Konda-Dora"],["kfd","Korra Koraga"],["kfe","Kota (India)"],["kff","Koya"],["kfg","Kudiya"],["kfh","Kurichiya"],["kfi","Kannada Kurumba"],["kfj","Kemiehua"],["kfk","Kinnauri"],["kfl","Kung"],["kfm","Khunsari"],["kfn","Kuk"],["kfo","Koro (Côte d'Ivoire)"],["kfp","Korwa"],["kfq","Korku"],["kfr","Kachhi, Kutchi"],["kfs","Bilaspuri"],["kft","Kanjari"],["kfu","Katkari"],["kfv","Kurmukar"],["kfw","Kharam Naga"],["kfx","Kullu Pahari"],["kfy","Kumaoni"],["kfz","Koromfé"],["kga","Koyaga"],["kgb","Kawe"],["kgc","Kasseng"],["kgd","Kataang"],["kge","Komering"],["kgf","Kube"],["kgg","Kusunda"],["kgh","Upper Tanudan Kalinga"],["kgi","Selangor Sign Language"],["kgj","Gamale Kham"],["kgk","Kaiwá"],["kgl","Kunggari"],["kgm","Karipúna"],["kgn","Karingani"],["kgo","Krongo"],["kgp","Kaingang"],["kgq","Kamoro"],["kgr","Abun"],["kgs","Kumbainggar"],["kgt","Somyev"],["kgu","Kobol"],["kgv","Karas"],["kgw","Karon Dori"],["kgx","Kamaru"],["kgy","Kyerung"],["kha","Khasi"],["khb","Lü"],["khc","Tukang Besi North"],["khd","Bädi Kanum"],["khe","Korowai"],["khf","Khuen"],["khg","Khams Tibetan"],["khh","Kehu"],["khi","Khoisan languages"],["khj","Kuturmi"],["khk","Halh Mongolian"],["khl","Lusi"],["khn","Khandesi"],["kho","Khotanese, Sakan"],["khp","Kapori, Kapauri"],["khq","Koyra Chiini Songhay"],["khr","Kharia"],["khs","Kasua"],["kht","Khamti"],["khu","Nkhumbi"],["khv","Khvarshi"],["khw","Khowar"],["khx","Kanu"],["khy","Kele (Democratic Republic of Congo)"],["khz","Keapara"],["kia","Kim"],["kib","Koalib"],["kic","Kickapoo"],["kid","Koshin"],["kie","Kibet"],["kif","Eastern Parbate Kham"],["kig","Kimaama, Kimaghima"],["kih","Kilmeri"],["kii","Kitsai"],["kij","Kilivila"],["kil","Kariya"],["kim","Karagas"],["kio","Kiowa"],["kip","Sheshi Kham"],["kiq","Kosadle, Kosare"],["kis","Kis"],["kit","Agob"],["kiu","Kirmanjki (individual language)"],["kiv","Kimbu"],["kiw","Northeast Kiwai"],["kix","Khiamniungan Naga"],["kiy","Kirikiri"],["kiz","Kisi"],["kja","Mlap"],["kjb","Q'anjob'al, Kanjobal"],["kjc","Coastal Konjo"],["kjd","Southern Kiwai"],["kje","Kisar"],["kjf","Khalaj [Indo-Iranian]"],["kjg","Khmu"],["kjh","Khakas"],["kji","Zabana"],["kjj","Khinalugh"],["kjk","Highland Konjo"],["kjl","Western Parbate Kham"],["kjm","Kháng"],["kjn","Kunjen"],["kjo","Harijan Kinnauri"],["kjp","Pwo Eastern Karen"],["kjq","Western Keres"],["kjr","Kurudu"],["kjs","East Kewa"],["kjt","Phrae Pwo Karen"],["kju","Kashaya"],["kjv","Kaikavian Literary Language"],["kjx","Ramopa"],["kjy","Erave"],["kjz","Bumthangkha"],["kka","Kakanda"],["kkb","Kwerisa"],["kkc","Odoodee"],["kkd","Kinuku"],["kke","Kakabe"],["kkf","Kalaktang Monpa"],["kkg","Mabaka Valley Kalinga"],["kkh","Khün"],["kki","Kagulu"],["kkj","Kako"],["kkk","Kokota"],["kkl","Kosarek Yale"],["kkm","Kiong"],["kkn","Kon Keu"],["kko","Karko"],["kkp","Gugubera, Koko-Bera"],["kkq","Kaeku"],["kkr","Kir-Balar"],["kks","Giiwo"],["kkt","Koi"],["kku","Tumi"],["kkv","Kangean"],["kkw","Teke-Kukuya"],["kkx","Kohin"],["kky","Guugu Yimidhirr, Guguyimidjir"],["kkz","Kaska"],["kla","Klamath-Modoc"],["klb","Kiliwa"],["klc","Kolbila"],["kld","Gamilaraay"],["kle","Kulung (Nepal)"],["klf","Kendeje"],["klg","Tagakaulo"],["klh","Weliki"],["kli","Kalumpang"],["klj","Khalaj"],["klk","Kono (Nigeria)"],["kll","Kagan Kalagan"],["klm","Migum"],["kln","Kalenjin"],["klo","Kapya"],["klp","Kamasa"],["klq","Rumu"],["klr","Khaling"],["kls","Kalasha"],["klt","Nukna"],["klu","Klao"],["klv","Maskelynes"],["klw","Tado, Lindu"],["klx","Koluwawa"],["kly","Kalao"],["klz","Kabola"],["kma","Konni"],["kmb","Kimbundu"],["kmc","Southern Dong"],["kmd","Majukayang Kalinga"],["kme","Bakole"],["kmf","Kare (Papua New Guinea)"],["kmg","Kâte"],["kmh","Kalam"],["kmi","Kami (Nigeria)"],["kmj","Kumarbhag Paharia"],["kmk","Limos Kalinga"],["kml","Tanudan Kalinga"],["kmm","Kom (India)"],["kmn","Awtuw"],["kmo","Kwoma"],["kmp","Gimme"],["kmq","Kwama"],["kmr","Northern Kurdish"],["kms","Kamasau"],["kmt","Kemtuik"],["kmu","Kanite"],["kmv","Karipúna Creole French"],["kmw","Komo (Democratic Republic of Congo)"],["kmx","Waboda"],["kmy","Koma"],["kmz","Khorasani Turkish"],["kna","Dera (Nigeria)"],["knb","Lubuagan Kalinga"],["knc","Central Kanuri"],["knd","Konda"],["kne","Kankanaey"],["knf","Mankanya"],["kng","Koongo"],["kni","Kanufi"],["knj","Western Kanjobal"],["knk","Kuranko"],["knl","Keninjal"],["knm","Kanamarí"],["knn","Konkani (individual language)"],["kno","Kono (Sierra Leone)"],["knp","Kwanja"],["knq","Kintaq"],["knr","Kaningra"],["kns","Kensiu"],["knt","Panoan Katukína"],["knu","Kono (Guinea)"],["knv","Tabo"],["knw","Kung-Ekoka"],["knx","Kendayan, Salako"],["kny","Kanyok"],["knz","Kalamsé"],["koa","Konomala"],["koc","Kpati"],["kod","Kodi"],["koe","Kacipo-Bale Suri"],["kof","Kubi"],["kog","Cogui, Kogi"],["koh","Koyo"],["koi","Komi-Permyak"],["koj","Sara Dunjo"],["kok","Konkani (macrolanguage)"],["kol","Kol (Papua New Guinea)"],["koo","Konzo"],["kop","Waube"],["koq","Kota (Gabon)"],["kos","Kosraean"],["kot","Lagwan"],["kou","Koke"],["kov","Kudu-Camo"],["kow","Kugama"],["kox","Coxima"],["koy","Koyukon"],["koz","Korak"],["kpa","Kutto"],["kpb","Mullu Kurumba"],["kpc","Curripaco"],["kpd","Koba"],["kpe","Kpelle"],["kpf","Komba"],["kpg","Kapingamarangi"],["kph","Kplang"],["kpi","Kofei"],["kpj","Karajá"],["kpk","Kpan"],["kpl","Kpala"],["kpm","Koho"],["kpn","Kepkiriwát"],["kpo","Ikposo"],["kpp","Paku Karen"],["kpq","Korupun-Sela"],["kpr","Korafe-Yegha"],["kps","Tehit"],["kpt","Karata"],["kpu","Kafoa"],["kpv","Komi-Zyrian"],["kpw","Kobon"],["kpx","Mountain Koiali"],["kpy","Koryak"],["kpz","Kupsabiny"],["kqa","Mum"],["kqb","Kovai"],["kqc","Doromu-Koki"],["kqd","Koy Sanjaq Surat"],["kqe","Kalagan"],["kqf","Kakabai"],["kqg","Khe"],["kqh","Kisankasa"],["kqi","Koitabu"],["kqj","Koromira"],["kqk","Kotafon Gbe"],["kql","Kyenele"],["kqm","Khisa"],["kqn","Kaonde"],["kqo","Eastern Krahn"],["kqp","Kimré"],["kqq","Krenak"],["kqr","Kimaragang"],["kqs","Northern Kissi"],["kqt","Klias River Kadazan"],["kqu","Seroa"],["kqv","Okolod"],["kqw","Kandas"],["kqx","Mser"],["kqy","Koorete"],["kqz","Korana"],["kra","Kumhali"],["krb","Karkin"],["krc","Karachay-Balkar"],["krd","Kairui-Midiki"],["kre","Panará"],["krf","Koro (Vanuatu)"],["krh","Kurama"],["kri","Krio"],["krj","Kinaray-A"],["krk","Kerek"],["krl","Karelian"],["krm","Krim"],["krn","Sapo"],["kro","Kru languages"],["krp","Korop"],["krr","Krung"],["krs","Gbaya (Sudan)"],["krt","Tumari Kanuri"],["kru","Kurukh"],["krv","Kavet"],["krw","Western Krahn"],["krx","Karon"],["kry","Kryts"],["krz","Sota Kanum"],["ksa","Shuwa-Zamani"],["ksb","Shambala"],["ksc","Southern Kalinga"],["ksd","Kuanua"],["kse","Kuni"],["ksf","Bafia"],["ksg","Kusaghe"],["ksh","Kölsch"],["ksi","Krisa, I'saka"],["ksj","Uare"],["ksk","Kansa"],["ksl","Kumalu"],["ksm","Kumba"],["ksn","Kasiguranin"],["kso","Kofa"],["ksp","Kaba"],["ksq","Kwaami"],["ksr","Borong"],["kss","Southern Kisi"],["kst","Winyé"],["ksu","Khamyang"],["ksv","Kusu"],["ksw","S'gaw Karen"],["ksx","Kedang"],["ksy","Kharia Thar"],["ksz","Kodaku"],["kta","Katua"],["ktb","Kambaata"],["ktc","Kholok"],["ktd","Kokata, Kukatha"],["kte","Nubri"],["ktf","Kwami"],["ktg","Kalkutung"],["kth","Karanga"],["kti","North Muyu"],["ktj","Plapo Krumen"],["ktk","Kaniet"],["ktl","Koroshi"],["ktm","Kurti"],["ktn","Karitiâna"],["kto","Kuot"],["ktp","Kaduo"],["ktq","Katabaga"],["ktr","Kota Marudu Tinagas"],["kts","South Muyu"],["ktt","Ketum"],["ktu","Kituba (Democratic Republic of Congo)"],["ktv","Eastern Katu"],["ktw","Kato"],["ktx","Kaxararí"],["kty","Kango (Bas-Uélé District)"],["ktz","Juǀʼhoan, Juǀʼhoansi"],["kub","Kutep"],["kuc","Kwinsu"],["kud","'Auhelawa"],["kue","Kuman (Papua New Guinea)"],["kuf","Western Katu"],["kug","Kupa"],["kuh","Kushi"],["kui","Kuikúro-Kalapálo, Kalapalo"],["kuj","Kuria"],["kuk","Kepo'"],["kul","Kulere"],["kum","Kumyk"],["kun","Kunama"],["kuo","Kumukio"],["kup","Kunimaipa"],["kuq","Karipuna"],["kus","Kusaal"],["kut","Kutenai"],["kuu","Upper Kuskokwim"],["kuv","Kur"],["kuw","Kpagua"],["kux","Kukatja"],["kuy","Kuuku-Ya'u"],["kuz","Kunza"],["kva","Bagvalal"],["kvb","Kubu"],["kvc","Kove"],["kvd","Kui (Indonesia)"],["kve","Kalabakan"],["kvf","Kabalai"],["kvg","Kuni-Boazi"],["kvh","Komodo"],["kvi","Kwang"],["kvj","Psikye"],["kvk","Korean Sign Language"],["kvl","Kayaw"],["kvm","Kendem"],["kvn","Border Kuna"],["kvo","Dobel"],["kvp","Kompane"],["kvq","Geba Karen"],["kvr","Kerinci"],["kvs","Kunggara"],["kvt","Lahta Karen, Lahta"],["kvu","Yinbaw Karen"],["kvv","Kola"],["kvw","Wersing"],["kvx","Parkari Koli"],["kvy","Yintale Karen, Yintale"],["kvz","Tsakwambo, Tsaukambo"],["kwa","Dâw"],["kwb","Kwa"],["kwc","Likwala"],["kwd","Kwaio"],["kwe","Kwerba"],["kwf","Kwara'ae"],["kwg","Sara Kaba Deme"],["kwh","Kowiai"],["kwi","Awa-Cuaiquer"],["kwj","Kwanga"],["kwk","Kwakiutl"],["kwl","Kofyar"],["kwm","Kwambi"],["kwn","Kwangali"],["kwo","Kwomtari"],["kwp","Kodia"],["kwq","Kwak"],["kwr","Kwer"],["kws","Kwese"],["kwt","Kwesten"],["kwu","Kwakum"],["kwv","Sara Kaba Náà"],["kww","Kwinti"],["kwx","Khirwar"],["kwy","San Salvador Kongo"],["kwz","Kwadi"],["kxa","Kairiru"],["kxb","Krobu"],["kxc","Konso, Khonso"],["kxd","Brunei"],["kxe","Kakihum"],["kxf","Manumanaw Karen, Manumanaw"],["kxh","Karo (Ethiopia)"],["kxi","Keningau Murut"],["kxj","Kulfa"],["kxk","Zayein Karen"],["kxl","Nepali Kurux"],["kxm","Northern Khmer"],["kxn","Kanowit-Tanjong Melanau"],["kxo","Kanoé"],["kxp","Wadiyara Koli"],["kxq","Smärky Kanum"],["kxr","Koro (Papua New Guinea)"],["kxs","Kangjia"],["kxt","Koiwat"],["kxu","Kui (India)"],["kxv","Kuvi"],["kxw","Konai"],["kxx","Likuba"],["kxy","Kayong"],["kxz","Kerewo"],["kya","Kwaya"],["kyb","Butbut Kalinga"],["kyc","Kyaka"],["kyd","Karey"],["kye","Krache"],["kyf","Kouya"],["kyg","Keyagana"],["kyh","Karok"],["kyi","Kiput"],["kyj","Karao"],["kyk","Kamayo"],["kyl","Kalapuya"],["kym","Kpatili"],["kyn","Northern Binukidnon"],["kyo","Kelon"],["kyp","Kang"],["kyq","Kenga"],["kyr","Kuruáya"],["kys","Baram Kayan"],["kyt","Kayagar"],["kyu","Western Kayah"],["kyv","Kayort"],["kyw","Kudmali"],["kyx","Rapoisi"],["kyy","Kambaira"],["kyz","Kayabí"],["kza","Western Karaboro"],["kzb","Kaibobo"],["kzc","Bondoukou Kulango"],["kzd","Kadai"],["kze","Kosena"],["kzf","Da'a Kaili"],["kzg","Kikai"],["kzh","Kenuzi-Dongola"],["kzi","Kelabit"],["kzj","Coastal Kadazan"],["kzk","Kazukuru"],["kzl","Kayeli"],["kzm","Kais"],["kzn","Kokola"],["kzo","Kaningi"],["kzp","Kaidipang"],["kzq","Kaike"],["kzr","Karang"],["kzs","Sugut Dusun"],["kzt","Tambunan Dusun"],["kzu","Kayupulau"],["kzv","Komyandaret"],["kzw","Karirí-Xocó"],["kzx","Kamarian"],["kzy","Kango (Tshopo District)"],["kzz","Kalabra"],["laa","Southern Subanen"],["lab","Linear A"],["lac","Lacandon"],["lad","Ladino"],["lae","Pattani"],["laf","Lafofa"],["lag","Langi"],["lah","Lahnda"],["lai","Lambya"],["laj","Lango (Uganda)"],["lak","Laka (Nigeria)"],["lal","Lalia"],["lam","Lamba"],["lan","Laru"],["lap","Laka (Chad)"],["laq","Qabiao"],["lar","Larteh"],["las","Lama (Togo)"],["lau","Laba"],["law","Lauje"],["lax","Tiwa"],["lay","Lama Bai"],["laz","Aribwatsa"],["lba","Lui"],["lbb","Label"],["lbc","Lakkia"],["lbe","Lak"],["lbf","Tinani"],["lbg","Laopang"],["lbi","La'bi"],["lbj","Ladakhi"],["lbk","Central Bontok"],["lbl","Libon Bikol"],["lbm","Lodhi"],["lbn","Rmeet"],["lbo","Laven"],["lbq","Wampar"],["lbr","Lohorung"],["lbs","Libyan Sign Language"],["lbt","Lachi"],["lbu","Labu"],["lbv","Lavatbura-Lamusong"],["lbw","Tolaki"],["lbx","Lawangan"],["lby","Lamalama, Lamu-Lamu"],["lbz","Lardil"],["lcc","Legenyem"],["lcd","Lola"],["lce","Loncong, Sekak"],["lcf","Lubu"],["lch","Luchazi"],["lcl","Lisela"],["lcm","Tungag"],["lcp","Western Lawa"],["lcq","Luhu"],["lcs","Lisabata-Nuniali"],["lda","Kla-Dan"],["ldb","Dũya"],["ldd","Luri"],["ldg","Lenyima"],["ldh","Lamja-Dengsa-Tola"],["ldi","Laari"],["ldj","Lemoro"],["ldk","Leelau"],["ldl","Kaan"],["ldm","Landoma"],["ldn","Láadan"],["ldo","Loo"],["ldp","Tso"],["ldq","Lufu"],["lea","Lega-Shabunda"],["leb","Lala-Bisa"],["lec","Leco"],["led","Lendu"],["lee","Lyélé"],["lef","Lelemi"],["leg","Lengua"],["leh","Lenje"],["lei","Lemio"],["lej","Lengola"],["lek","Leipon"],["lel","Lele (Democratic Republic of Congo)"],["lem","Nomaande"],["len","Lenca"],["leo","Leti (Cameroon)"],["lep","Lepcha"],["leq","Lembena"],["ler","Lenkau"],["les","Lese"],["let","Lesing-Gelimi, Amio-Gelimi"],["leu","Kara (Papua New Guinea)"],["lev","Lamma"],["lew","Ledo Kaili"],["lex","Luang"],["ley","Lemolang"],["lez","Lezghian"],["lfa","Lefa"],["lfn","Lingua Franca Nova"],["lga","Lungga"],["lgb","Laghu"],["lgg","Lugbara"],["lgh","Laghuu"],["lgi","Lengilu"],["lgk","Lingarak, Neverver"],["lgl","Wala"],["lgm","Lega-Mwenga"],["lgn","T'apo, Opuuo"],["lgq","Logba"],["lgr","Lengo"],["lgt","Pahi"],["lgu","Longgu"],["lgz","Ligenza"],["lha","Laha (Viet Nam)"],["lhh","Laha (Indonesia)"],["lhi","Lahu Shi"],["lhl","Lahul Lohar"],["lhm","Lhomi"],["lhn","Lahanan"],["lhp","Lhokpu"],["lhs","Mlahsö"],["lht","Lo-Toga"],["lhu","Lahu"],["lia","West-Central Limba"],["lib","Likum"],["lic","Hlai"],["lid","Nyindrou"],["lie","Likila"],["lif","Limbu"],["lig","Ligbi"],["lih","Lihir"],["lii","Lingkhim"],["lij","Ligurian"],["lik","Lika"],["lil","Lillooet"],["lio","Liki"],["lip","Sekpele"],["liq","Libido"],["lir","Liberian English"],["lis","Lisu"],["liu","Logorik"],["liv","Liv"],["liw","Col"],["lix","Liabuku"],["liy","Banda-Bambari"],["liz","Libinza"],["lja","Golpa"],["lje","Rampi"],["lji","Laiyolo"],["ljl","Li'o"],["ljp","Lampung Api"],["ljw","Yirandali"],["ljx","Yuru"],["lka","Lakalei"],["lkb","Kabras, Lukabaras"],["lkc","Kucong"],["lkd","Lakondê"],["lke","Kenyi"],["lkh","Lakha"],["lki","Laki"],["lkj","Remun"],["lkl","Laeko-Libuat"],["lkm","Kalaamaya"],["lkn","Lakon, Vure"],["lko","Khayo, Olukhayo"],["lkr","Päri"],["lks","Kisa, Olushisa"],["lkt","Lakota"],["lku","Kungkari"],["lky","Lokoya"],["lla","Lala-Roba"],["llb","Lolo"],["llc","Lele (Guinea)"],["lld","Ladin"],["lle","Lele (Papua New Guinea)"],["llf","Hermit"],["llg","Lole"],["llh","Lamu"],["lli","Teke-Laali"],["llj","Ladji Ladji"],["llk","Lelak"],["lll","Lilau"],["llm","Lasalimu"],["lln","Lele (Chad)"],["llo","Khlor"],["llp","North Efate"],["llq","Lolak"],["lls","Lithuanian Sign Language"],["llu","Lau"],["llx","Lauan"],["lma","East Limba"],["lmb","Merei"],["lmc","Limilngan"],["lmd","Lumun"],["lme","Pévé"],["lmf","South Lembata"],["lmg","Lamogai"],["lmh","Lambichhong"],["lmi","Lombi"],["lmj","West Lembata"],["lmk","Lamkang"],["lml","Hano"],["lmm","Lamam"],["lmn","Lambadi"],["lmo","Lombard"],["lmp","Limbum"],["lmq","Lamatuka"],["lmr","Lamalera"],["lmu","Lamenu"],["lmv","Lomaiviti"],["lmw","Lake Miwok"],["lmx","Laimbue"],["lmy","Lamboya"],["lmz","Lumbee"],["lna","Langbashe"],["lnb","Mbalanhu"],["lnd","Lundayeh, Lun Bawang"],["lng","Langobardic"],["lnh","Lanoh"],["lni","Daantanai'"],["lnj","Leningitij"],["lnl","South Central Banda"],["lnm","Langam"],["lnn","Lorediakarkar"],["lno","Lango (South Sudan)"],["lns","Lamnso'"],["lnu","Longuda"],["lnw","Lanima"],["lnz","Lonzo"],["loa","Loloda"],["lob","Lobi"],["loc","Inonhan"],["loe","Saluan"],["lof","Logol"],["log","Logo"],["loh","Narim"],["loi","Loma (Côte d'Ivoire)"],["loj","Lou"],["lok","Loko"],["lol","Mongo"],["lom","Loma (Liberia)"],["lon","Malawi Lomwe"],["loo","Lombo"],["lop","Lopa"],["loq","Lobala"],["lor","Téén"],["los","Loniu"],["lot","Otuho"],["lou","Louisiana Creole"],["lov","Lopi"],["low","Tampias Lobu"],["lox","Loun"],["loy","Loke"],["loz","Lozi"],["lpa","Lelepa"],["lpe","Lepki"],["lpn","Long Phuri Naga"],["lpo","Lipo"],["lpx","Lopit"],["lra","Rara Bakati'"],["lrc","Northern Luri"],["lre","Laurentian"],["lrg","Laragia"],["lri","Marachi, Olumarachi"],["lrk","Loarki"],["lrl","Lari"],["lrm","Marama, Olumarama"],["lrn","Lorang"],["lro","Laro"],["lrr","Southern Yamphu"],["lrt","Larantuka Malay"],["lrv","Larevat"],["lrz","Lemerig"],["lsa","Lasgerdi"],["lsb","Burundian Sign Language, Langue des Signes Burundaise"],["lsd","Lishana Deni"],["lse","Lusengo"],["lsg","Lyons Sign Language"],["lsh","Lish"],["lsi","Lashi"],["lsl","Latvian Sign Language"],["lsm","Saamia, Olusamia"],["lsn","Tibetan Sign Language"],["lso","Laos Sign Language"],["lsp","Panamanian Sign Language, Lengua de Señas Panameñas"],["lsr","Aruop"],["lss","Lasi"],["lst","Trinidad and Tobago Sign Language"],["lsv","Sivia Sign Language"],["lsy","Mauritian Sign Language"],["ltc","Late Middle Chinese"],["ltg","Latgalian"],["lth","Thur"],["lti","Leti (Indonesia)"],["ltn","Latundê"],["lto","Tsotso, Olutsotso"],["lts","Tachoni, Lutachoni"],["ltu","Latu"],["lua","Luba-Lulua"],["luc","Aringa"],["lud","Ludian"],["lue","Luvale"],["luf","Laua"],["lui","Luiseno"],["luj","Luna"],["luk","Lunanakha"],["lul","Olu'bo"],["lum","Luimbi"],["lun","Lunda"],["luo","Luo (Kenya and Tanzania), Dholuo"],["lup","Lumbu"],["luq","Lucumi"],["lur","Laura"],["lus","Lushai"],["lut","Lushootseed"],["luu","Lumba-Yakkha"],["luv","Luwati"],["luw","Luo (Cameroon)"],["luy","Luyia, Oluluyia"],["luz","Southern Luri"],["lva","Maku'a"],["lvi","Lavi"],["lvk","Lavukaleve"],["lvs","Standard Latvian"],["lvu","Levuka"],["lwa","Lwalu"],["lwe","Lewo Eleng"],["lwg","Wanga, Oluwanga"],["lwh","White Lachi"],["lwl","Eastern Lawa"],["lwm","Laomian"],["lwo","Luwo"],["lws","Malawian Sign Language"],["lwt","Lewotobi"],["lwu","Lawu"],["lww","Lewo"],["lxm","Lakurumau"],["lya","Layakha"],["lyg","Lyngngam"],["lyn","Luyana"],["lzh","Literary Chinese"],["lzl","Litzlitz"],["lzn","Leinong Naga"],["lzz","Laz"],["maa","San Jerónimo Tecóatl Mazatec"],["mab","Yutanduchi Mixtec"],["mad","Madurese"],["mae","Bo-Rukul"],["maf","Mafa"],["mag","Magahi"],["mai","Maithili"],["maj","Jalapa De Díaz Mazatec"],["mak","Makasar"],["mam","Mam"],["man","Mandingo, Manding"],["map","Austronesian languages"],["maq","Chiquihuitlán Mazatec"],["mas","Masai"],["mat","San Francisco Matlatzinca"],["mau","Huautla Mazatec"],["mav","Sateré-Mawé"],["maw","Mampruli"],["max","North Moluccan Malay"],["maz","Central Mazahua"],["mba","Higaonon"],["mbb","Western Bukidnon Manobo"],["mbc","Macushi"],["mbd","Dibabawon Manobo"],["mbe","Molale"],["mbf","Baba Malay"],["mbh","Mangseng"],["mbi","Ilianen Manobo"],["mbj","Nadëb"],["mbk","Malol"],["mbl","Maxakalí"],["mbm","Ombamba"],["mbn","Macaguán"],["mbo","Mbo (Cameroon)"],["mbp","Malayo"],["mbq","Maisin"],["mbr","Nukak Makú"],["mbs","Sarangani Manobo"],["mbt","Matigsalug Manobo"],["mbu","Mbula-Bwazza"],["mbv","Mbulungish"],["mbw","Maring"],["mbx","Mari (East Sepik Province)"],["mby","Memoni"],["mbz","Amoltepec Mixtec"],["mca","Maca"],["mcb","Machiguenga"],["mcc","Bitur"],["mcd","Sharanahua"],["mce","Itundujia Mixtec"],["mcf","Matsés"],["mcg","Mapoyo"],["mch","Maquiritari"],["mci","Mese"],["mcj","Mvanip"],["mck","Mbunda"],["mcl","Macaguaje"],["mcm","Malaccan Creole Portuguese"],["mcn","Masana"],["mco","Coatlán Mixe"],["mcp","Makaa"],["mcq","Ese"],["mcr","Menya"],["mcs","Mambai"],["mct","Mengisa"],["mcu","Cameroon Mambila"],["mcv","Minanibai"],["mcw","Mawa (Chad)"],["mcx","Mpiemo"],["mcy","South Watut"],["mcz","Mawan"],["mda","Mada (Nigeria)"],["mdb","Morigi"],["mdc","Male (Papua New Guinea)"],["mdd","Mbum"],["mde","Maba (Chad)"],["mdf","Moksha"],["mdg","Massalat"],["mdh","Maguindanaon"],["mdi","Mamvu"],["mdj","Mangbetu"],["mdk","Mangbutu"],["mdl","Maltese Sign Language"],["mdm","Mayogo"],["mdn","Mbati"],["mdp","Mbala"],["mdq","Mbole"],["mdr","Mandar"],["mds","Maria (Papua New Guinea)"],["mdt","Mbere"],["mdu","Mboko"],["mdv","Santa Lucía Monteverde Mixtec"],["mdw","Mbosi"],["mdx","Dizin"],["mdy","Male (Ethiopia)"],["mdz","Suruí Do Pará"],["mea","Menka"],["meb","Ikobi"],["mec","Marra"],["med","Melpa"],["mee","Mengen"],["mef","Megam"],["meg","Mea"],["meh","Southwestern Tlaxiaco Mixtec"],["mei","Midob"],["mej","Meyah"],["mek","Mekeo"],["mel","Central Melanau"],["mem","Mangala"],["men","Mende (Sierra Leone)"],["meo","Kedah Malay"],["mep","Miriwoong"],["meq","Merey"],["mer","Meru"],["mes","Masmaje"],["met","Mato"],["meu","Motu"],["mev","Mano"],["mew","Maaka"],["mey","Hassaniyya"],["mez","Menominee"],["mfa","Pattani Malay"],["mfb","Bangka"],["mfc","Mba"],["mfd","Mendankwe-Nkwen"],["mfe","Morisyen"],["mff","Naki"],["mfg","Mogofin"],["mfh","Matal"],["mfi","Wandala"],["mfj","Mefele"],["mfk","North Mofu"],["mfl","Putai"],["mfm","Marghi South"],["mfn","Cross River Mbembe"],["mfo","Mbe"],["mfp","Makassar Malay"],["mfq","Moba"],["mfr","Marrithiyel"],["mfs","Mexican Sign Language"],["mft","Mokerang"],["mfu","Mbwela"],["mfv","Mandjak"],["mfw","Mulaha"],["mfx","Melo"],["mfy","Mayo"],["mfz","Mabaan"],["mga","Middle Irish (900-1200)"],["mgb","Mararit"],["mgc","Morokodo"],["mgd","Moru"],["mge","Mango"],["mgf","Maklew"],["mgg","Mpumpong"],["mgh","Makhuwa-Meetto"],["mgi","Lijili"],["mgj","Abureni"],["mgk","Mawes"],["mgl","Maleu-Kilenge"],["mgm","Mambae"],["mgn","Mbangi"],["mgo","Meta'"],["mgp","Eastern Magar"],["mgq","Malila"],["mgr","Mambwe-Lungu"],["mgs","Manda (Tanzania)"],["mgt","Mongol"],["mgu","Mailu"],["mgv","Matengo"],["mgw","Matumbi"],["mgx","Omati"],["mgy","Mbunga"],["mgz","Mbugwe"],["mha","Manda (India)"],["mhb","Mahongwe"],["mhc","Mocho"],["mhd","Mbugu"],["mhe","Besisi, Mah Meri"],["mhf","Mamaa"],["mhg","Margu"],["mhh","Maskoy Pidgin"],["mhi","Ma'di"],["mhj","Mogholi"],["mhk","Mungaka"],["mhl","Mauwake"],["mhm","Makhuwa-Moniga"],["mhn","Mócheno"],["mho","Mashi (Zambia)"],["mhp","Balinese Malay"],["mhq","Mandan"],["mhr","Eastern Mari"],["mhs","Buru (Indonesia)"],["mht","Mandahuaca"],["mhu","Digaro-Mishmi, Darang Deng"],["mhw","Mbukushu"],["mhx","Maru, Lhaovo"],["mhy","Ma'anyan"],["mhz","Mor (Mor Islands)"],["mia","Miami"],["mib","Atatláhuca Mixtec"],["mic","Mi'kmaq, Micmac"],["mid","Mandaic"],["mie","Ocotepec Mixtec"],["mif","Mofu-Gudur"],["mig","San Miguel El Grande Mixtec"],["mih","Chayuco Mixtec"],["mii","Chigmecatitlán Mixtec"],["mij","Abar, Mungbam"],["mik","Mikasuki"],["mil","Peñoles Mixtec"],["mim","Alacatlatzala Mixtec"],["min","Minangkabau"],["mio","Pinotepa Nacional Mixtec"],["mip","Apasco-Apoala Mixtec"],["miq","Mískito"],["mir","Isthmus Mixe"],["mis","Uncoded languages"],["mit","Southern Puebla Mixtec"],["miu","Cacaloxtepec Mixtec"],["miw","Akoye"],["mix","Mixtepec Mixtec"],["miy","Ayutla Mixtec"],["miz","Coatzospan Mixtec"],["mja","Mahei"],["mjb","Makalero"],["mjc","San Juan Colorado Mixtec"],["mjd","Northwest Maidu"],["mje","Muskum"],["mjg","Tu"],["mjh","Mwera (Nyasa)"],["mji","Kim Mun"],["mjj","Mawak"],["mjk","Matukar"],["mjl","Mandeali"],["mjm","Medebur"],["mjn","Ma (Papua New Guinea)"],["mjo","Malankuravan"],["mjp","Malapandaram"],["mjq","Malaryan"],["mjr","Malavedan"],["mjs","Miship"],["mjt","Sauria Paharia"],["mju","Manna-Dora"],["mjv","Mannan"],["mjw","Karbi"],["mjx","Mahali"],["mjy","Mahican"],["mjz","Majhi"],["mka","Mbre"],["mkb","Mal Paharia"],["mkc","Siliput"],["mke","Mawchi"],["mkf","Miya"],["mkg","Mak (China)"],["mkh","Mon-Khmer languages"],["mki","Dhatki"],["mkj","Mokilese"],["mkk","Byep"],["mkl","Mokole"],["mkm","Moklen"],["mkn","Kupang Malay"],["mko","Mingang Doso"],["mkp","Moikodi"],["mkq","Bay Miwok"],["mkr","Malas"],["mks","Silacayoapan Mixtec"],["mkt","Vamale"],["mku","Konyanka Maninka"],["mkv","Mafea"],["mkw","Kituba (Congo)"],["mkx","Kinamiging Manobo"],["mky","East Makian"],["mkz","Makasae"],["mla","Malo"],["mlb","Mbule"],["mlc","Cao Lan"],["mld","Malakhel"],["mle","Manambu"],["mlf","Mal"],["mlh","Mape"],["mli","Malimpung"],["mlj","Miltu"],["mlk","Ilwana, Kiwilwana"],["mll","Malua Bay"],["mlm","Mulam"],["mln","Malango"],["mlo","Mlomp"],["mlp","Bargam"],["mlq","Western Maninkakan"],["mlr","Vame"],["mls","Masalit"],["mlu","To'abaita"],["mlv","Motlav, Mwotlap"],["mlw","Moloko"],["mlx","Malfaxal, Naha'ai"],["mlz","Malaynon"],["mma","Mama"],["mmb","Momina"],["mmc","Michoacán Mazahua"],["mmd","Maonan"],["mme","Mae"],["mmf","Mundat"],["mmg","North Ambrym"],["mmh","Mehináku"],["mmi","Musar"],["mmj","Majhwar"],["mmk","Mukha-Dora"],["mml","Man Met"],["mmm","Maii"],["mmn","Mamanwa"],["mmo","Mangga Buang"],["mmp","Siawi"],["mmq","Musak"],["mmr","Western Xiangxi Miao"],["mmt","Malalamai"],["mmu","Mmaala"],["mmv","Miriti"],["mmw","Emae"],["mmx","Madak"],["mmy","Migaama"],["mmz","Mabaale"],["mna","Mbula"],["mnb","Muna"],["mnc","Manchu"],["mnd","Mondé"],["mne","Naba"],["mnf","Mundani"],["mng","Eastern Mnong"],["mnh","Mono (Democratic Republic of Congo)"],["mni","Manipuri"],["mnj","Munji"],["mnk","Mandinka"],["mnl","Tiale"],["mnm","Mapena"],["mnn","Southern Mnong"],["mno","Manobo languages"],["mnp","Min Bei Chinese"],["mnq","Minriq"],["mnr","Mono (USA)"],["mns","Mansi"],["mnt","Maykulan"],["mnu","Mer"],["mnv","Rennell-Bellona"],["mnw","Mon"],["mnx","Manikion"],["mny","Manyawa"],["mnz","Moni"],["moa","Mwan"],["moc","Mocoví"],["mod","Mobilian"],["moe","Innu, Montagnais"],["mof","Mohegan-Montauk-Narragansett"],["mog","Mongondow"],["moh","Mohawk"],["moi","Mboi"],["moj","Monzombo"],["mok","Morori"],["mom","Mangue"],["moo","Monom"],["mop","Mopán Maya"],["moq","Mor (Bomberai Peninsula)"],["mor","Moro"],["mos","Mossi"],["mot","Barí"],["mou","Mogum"],["mov","Mohave"],["mow","Moi (Congo)"],["mox","Molima"],["moy","Shekkacho"],["moz","Mukulu, Gergiko"],["mpa","Mpoto"],["mpb","Malak Malak, Mullukmulluk"],["mpc","Mangarrayi"],["mpd","Machinere"],["mpe","Majang"],["mpg","Marba"],["mph","Maung"],["mpi","Mpade"],["mpj","Martu Wangka, Wangkajunga"],["mpk","Mbara (Chad)"],["mpl","Middle Watut"],["mpm","Yosondúa Mixtec"],["mpn","Mindiri"],["mpo","Miu"],["mpp","Migabac"],["mpq","Matís"],["mpr","Vangunu"],["mps","Dadibi"],["mpt","Mian"],["mpu","Makuráp"],["mpv","Mungkip"],["mpw","Mapidian"],["mpx","Misima-Panaeati"],["mpy","Mapia"],["mpz","Mpi"],["mqa","Maba (Indonesia)"],["mqb","Mbuko"],["mqc","Mangole"],["mqe","Matepi"],["mqf","Momuna"],["mqg","Kota Bangun Kutai Malay"],["mqh","Tlazoyaltepec Mixtec"],["mqi","Mariri"],["mqj","Mamasa"],["mqk","Rajah Kabunsuwan Manobo"],["mql","Mbelime"],["mqm","South Marquesan"],["mqn","Moronene"],["mqo","Modole"],["mqp","Manipa"],["mqq","Minokok"],["mqr","Mander"],["mqs","West Makian"],["mqt","Mok"],["mqu","Mandari"],["mqv","Mosimo"],["mqw","Murupi"],["mqx","Mamuju"],["mqy","Manggarai"],["mqz","Pano"],["mra","Mlabri"],["mrb","Marino"],["mrc","Maricopa"],["mrd","Western Magar"],["mre","Martha's Vineyard Sign Language"],["mrf","Elseng"],["mrg","Mising"],["mrh","Mara Chin"],["mrj","Western Mari"],["mrk","Hmwaveke"],["mrl","Mortlockese"],["mrm","Merlav, Mwerlap"],["mrn","Cheke Holo"],["mro","Mru"],["mrp","Morouas"],["mrq","North Marquesan"],["mrr","Maria (India)"],["mrs","Maragus"],["mrt","Marghi Central"],["mru","Mono (Cameroon)"],["mrv","Mangareva"],["mrw","Maranao"],["mrx","Maremgi, Dineor"],["mry","Mandaya"],["mrz","Marind"],["msb","Masbatenyo"],["msc","Sankaran Maninka"],["msd","Yucatec Maya Sign Language"],["mse","Musey"],["msf","Mekwei"],["msg","Moraid"],["msh","Masikoro Malagasy"],["msi","Sabah Malay"],["msj","Ma (Democratic Republic of Congo)"],["msk","Mansaka"],["msl","Molof, Poule"],["msm","Agusan Manobo"],["msn","Vurës"],["mso","Mombum"],["msp","Maritsauá"],["msq","Caac"],["msr","Mongolian Sign Language"],["mss","West Masela"],["mst","Cataelano Mandaya"],["msu","Musom"],["msv","Maslam"],["msw","Mansoanka"],["msx","Moresada"],["msy","Aruamu"],["msz","Momare"],["mta","Cotabato Manobo"],["mtb","Anyin Morofo"],["mtc","Munit"],["mtd","Mualang"],["mte","Mono (Solomon Islands)"],["mtf","Murik (Papua New Guinea)"],["mtg","Una"],["mth","Munggui"],["mti","Maiwa (Papua New Guinea)"],["mtj","Moskona"],["mtk","Mbe'"],["mtl","Montol"],["mtm","Mator"],["mtn","Matagalpa"],["mto","Totontepec Mixe"],["mtp","Wichí Lhamtés Nocten"],["mtq","Muong"],["mtr","Mewari"],["mts","Yora"],["mtt","Mota"],["mtu","Tututepec Mixtec"],["mtv","Asaro'o"],["mtw","Southern Binukidnon"],["mtx","Tidaá Mixtec"],["mty","Nabi"],["mua","Mundang"],["mub","Mubi"],["muc","Ajumbu"],["mud","Mednyj Aleut"],["mue","Media Lengua"],["mug","Musgu"],["muh","Mündü"],["mui","Musi"],["muj","Mabire"],["muk","Mugom"],["mul","Multiple languages"],["mum","Maiwala"],["mun","Munda languages"],["muo","Nyong"],["mup","Malvi"],["muq","Eastern Xiangxi Miao"],["mur","Murle"],["mus","Creek"],["mut","Western Muria"],["muu","Yaaku"],["muv","Muthuvan"],["mux","Bo-Ung"],["muy","Muyang"],["muz","Mursi"],["mva","Manam"],["mvb","Mattole"],["mvd","Mamboru"],["mve","Marwari (Pakistan)"],["mvf","Peripheral Mongolian"],["mvg","Yucuañe Mixtec"],["mvh","Mulgi"],["mvi","Miyako"],["mvk","Mekmek"],["mvl","Mbara (Australia)"],["mvm","Muya"],["mvn","Minaveha"],["mvo","Marovo"],["mvp","Duri"],["mvq","Moere"],["mvr","Marau"],["mvs","Massep"],["mvt","Mpotovoro"],["mvu","Marfa"],["mvv","Tagal Murut"],["mvw","Machinga"],["mvx","Meoswar"],["mvy","Indus Kohistani"],["mvz","Mesqan"],["mwa","Mwatebu"],["mwb","Juwal"],["mwc","Are"],["mwd","Mudbura"],["mwe","Mwera (Chimwera)"],["mwf","Murrinh-Patha"],["mwg","Aiklep"],["mwh","Mouk-Aria"],["mwi","Labo, Ninde"],["mwj","Maligo"],["mwk","Kita Maninkakan"],["mwl","Mirandese"],["mwm","Sar"],["mwn","Nyamwanga"],["mwo","Central Maewo"],["mwp","Kala Lagaw Ya"],["mwq","Mün Chin"],["mwr","Marwari"],["mws","Mwimbi-Muthambi"],["mwt","Moken"],["mwu","Mittu"],["mwv","Mentawai"],["mww","Hmong Daw"],["mwx","Mediak"],["mwy","Mosiro"],["mwz","Moingi"],["mxa","Northwest Oaxaca Mixtec"],["mxb","Tezoatlán Mixtec"],["mxc","Manyika"],["mxd","Modang"],["mxe","Mele-Fila"],["mxf","Malgbe"],["mxg","Mbangala"],["mxh","Mvuba"],["mxi","Mozarabic"],["mxj","Miju-Mishmi, Geman Deng"],["mxk","Monumbo"],["mxl","Maxi Gbe"],["mxm","Meramera"],["mxn","Moi (Indonesia)"],["mxo","Mbowe"],["mxp","Tlahuitoltepec Mixe"],["mxq","Juquila Mixe"],["mxr","Murik (Malaysia)"],["mxs","Huitepec Mixtec"],["mxt","Jamiltepec Mixtec"],["mxu","Mada (Cameroon)"],["mxv","Metlatónoc Mixtec"],["mxw","Namo"],["mxx","Mahou, Mawukakan"],["mxy","Southeastern Nochixtlán Mixtec"],["mxz","Central Masela"],["myb","Mbay"],["myc","Mayeka"],["myd","Maramba"],["mye","Myene"],["myf","Bambassi"],["myg","Manta"],["myh","Makah"],["myi","Mina (India)"],["myj","Mangayat"],["myk","Mamara Senoufo"],["myl","Moma"],["mym","Me'en"],["myn","Mayan languages"],["myo","Anfillo"],["myp","Pirahã"],["myq","Forest Maninka"],["myr","Muniche"],["mys","Mesmes"],["myt","Sangab Mandaya"],["myu","Mundurukú"],["myv","Erzya"],["myw","Muyuw"],["myx","Masaaba"],["myy","Macuna"],["myz","Classical Mandaic"],["mza","Santa María Zacatepec Mixtec"],["mzb","Tumzabt"],["mzc","Madagascar Sign Language"],["mzd","Malimba"],["mze","Morawa"],["mzg","Monastic Sign Language"],["mzh","Wichí Lhamtés Güisnay"],["mzi","Ixcatlán Mazatec"],["mzj","Manya"],["mzk","Nigeria Mambila"],["mzl","Mazatlán Mixe"],["mzm","Mumuye"],["mzn","Mazanderani"],["mzo","Matipuhy"],["mzp","Movima"],["mzq","Mori Atas"],["mzr","Marúbo"],["mzs","Macanese"],["mzt","Mintil"],["mzu","Inapang"],["mzv","Manza"],["mzw","Deg"],["mzx","Mawayana"],["mzy","Mozambican Sign Language"],["mzz","Maiadomu"],["naa","Namla"],["nab","Southern Nambikuára"],["nac","Narak"],["nad","Nijadali"],["nae","Naka'ela"],["naf","Nabak"],["nag","Naga Pidgin"],["nah","Nahuatl languages"],["nai","North American Indian languages"],["naj","Nalu"],["nak","Nakanai"],["nal","Nalik"],["nam","Ngan'gityemerri"],["nan","Min Nan Chinese"],["nao","Naaba"],["nap","Neapolitan"],["naq","Khoekhoe, Nama (Namibia)"],["nar","Iguta"],["nas","Naasioi"],["nat","Ca̱hungwa̱rya̱, Hungworo"],["naw","Nawuri"],["nax","Nakwi"],["nay","Ngarrindjeri"],["naz","Coatepec Nahuatl"],["nba","Nyemba"],["nbb","Ndoe"],["nbc","Chang Naga"],["nbd","Ngbinda"],["nbe","Konyak Naga"],["nbf","Naxi"],["nbg","Nagarchal"],["nbh","Ngamo"],["nbi","Mao Naga"],["nbj","Ngarinyman"],["nbk","Nake"],["nbm","Ngbaka Ma'bo"],["nbn","Kuri"],["nbo","Nkukoli"],["nbp","Nnam"],["nbq","Nggem"],["nbr","Numana"],["nbs","Namibian Sign Language"],["nbt","Na"],["nbu","Rongmei Naga"],["nbv","Ngamambo"],["nbw","Southern Ngbandi"],["nbx","Ngura"],["nby","Ningera"],["nca","Iyo"],["ncb","Central Nicobarese"],["ncc","Ponam"],["ncd","Nachering"],["nce","Yale"],["ncf","Notsi"],["ncg","Nisga'a"],["nch","Central Huasteca Nahuatl"],["nci","Classical Nahuatl"],["ncj","Northern Puebla Nahuatl"],["nck","Na-kara"],["ncl","Michoacán Nahuatl"],["ncm","Nambo"],["ncn","Nauna"],["nco","Sibe"],["ncp","Ndaktup"],["ncq","Northern Katang"],["ncr","Ncane"],["ncs","Nicaraguan Sign Language"],["nct","Chothe Naga"],["ncu","Chumburung"],["ncx","Central Puebla Nahuatl"],["ncz","Natchez"],["nda","Ndasa"],["ndb","Kenswei Nsei"],["ndc","Ndau"],["ndd","Nde-Nsele-Nta"],["ndf","Nadruvian"],["ndg","Ndengereko"],["ndh","Ndali"],["ndi","Samba Leko"],["ndj","Ndamba"],["ndk","Ndaka"],["ndl","Ndolo"],["ndm","Ndam"],["ndn","Ngundi"],["ndp","Ndo"],["ndq","Ndombe"],["ndr","Ndoola"],["nds","Low German, Low Saxon"],["ndt","Ndunga"],["ndu","Dugun"],["ndv","Ndut"],["ndw","Ndobo"],["ndx","Nduga"],["ndy","Lutos"],["ndz","Ndogo"],["nea","Eastern Ngad'a"],["neb","Toura (Côte d'Ivoire)"],["nec","Nedebang"],["ned","Nde-Gbite"],["nee","Nêlêmwa-Nixumwak"],["nef","Nefamese"],["neg","Negidal"],["neh","Nyenkha"],["nei","Neo-Hittite"],["nej","Neko"],["nek","Neku"],["nem","Nemi"],["nen","Nengone"],["neo","Ná-Meo"],["neq","North Central Mixe"],["ner","Yahadian"],["nes","Bhoti Kinnauri"],["net","Nete"],["neu","Neo"],["nev","Nyaheun"],["new","Newari, Nepal Bhasa"],["nex","Neme"],["ney","Neyo"],["nez","Nez Perce"],["nfa","Dhao"],["nfd","Ahwai"],["nfl","Ayiwo, Äiwoo"],["nfr","Nafaanra"],["nfu","Mfumte"],["nga","Ngbaka"],["ngb","Northern Ngbandi"],["ngc","Ngombe (Democratic Republic of Congo)"],["ngd","Ngando (Central African Republic)"],["nge","Ngemba"],["ngf","Trans-New Guinea languages"],["ngg","Ngbaka Manza"],["ngh","Nǁng"],["ngi","Ngizim"],["ngj","Ngie"],["ngk","Dalabon"],["ngl","Lomwe"],["ngm","Ngatik Men's Creole"],["ngn","Ngwo"],["ngo","Ngoni"],["ngp","Ngulu"],["ngq","Ngurimi, Ngoreme"],["ngr","Engdewu"],["ngs","Gvoko"],["ngt","Kriang, Ngeq"],["ngu","Guerrero Nahuatl"],["ngv","Nagumi"],["ngw","Ngwaba"],["ngx","Nggwahyi"],["ngy","Tibea"],["ngz","Ngungwel"],["nha","Nhanda"],["nhb","Beng"],["nhc","Tabasco Nahuatl"],["nhd","Chiripá, Ava Guaraní"],["nhe","Eastern Huasteca Nahuatl"],["nhf","Nhuwala"],["nhg","Tetelcingo Nahuatl"],["nhh","Nahari"],["nhi","Zacatlán-Ahuacatlán-Tepetzintla Nahuatl"],["nhk","Isthmus-Cosoleacaque Nahuatl"],["nhm","Morelos Nahuatl"],["nhn","Central Nahuatl"],["nho","Takuu"],["nhp","Isthmus-Pajapan Nahuatl"],["nhq","Huaxcaleca Nahuatl"],["nhr","Naro"],["nht","Ometepec Nahuatl"],["nhu","Noone"],["nhv","Temascaltepec Nahuatl"],["nhw","Western Huasteca Nahuatl"],["nhx","Isthmus-Mecayapan Nahuatl"],["nhy","Northern Oaxaca Nahuatl"],["nhz","Santa María La Alta Nahuatl"],["nia","Nias"],["nib","Nakame"],["nic","Niger-Kordofanian languages"],["nid","Ngandi"],["nie","Niellim"],["nif","Nek"],["nig","Ngalakgan"],["nih","Nyiha (Tanzania)"],["nii","Nii"],["nij","Ngaju"],["nik","Southern Nicobarese"],["nil","Nila"],["nim","Nilamba"],["nin","Ninzo"],["nio","Nganasan"],["niq","Nandi"],["nir","Nimboran"],["nis","Nimi"],["nit","Southeastern Kolami"],["niu","Niuean"],["niv","Gilyak"],["niw","Nimo"],["nix","Hema"],["niy","Ngiti"],["niz","Ningil"],["nja","Nzanyi"],["njb","Nocte Naga"],["njd","Ndonde Hamba"],["njh","Lotha Naga"],["nji","Gudanji"],["njj","Njen"],["njl","Njalgulgule"],["njm","Angami Naga"],["njn","Liangmai Naga"],["njo","Ao Naga"],["njr","Njerep"],["njs","Nisa"],["njt","Ndyuka-Trio Pidgin"],["nju","Ngadjunmaya"],["njx","Kunyi"],["njy","Njyem"],["njz","Nyishi"],["nka","Nkoya"],["nkb","Khoibu Naga"],["nkc","Nkongho"],["nkd","Koireng"],["nke","Duke"],["nkf","Inpui Naga"],["nkg","Nekgini"],["nkh","Khezha Naga"],["nki","Thangal Naga"],["nkj","Nakai"],["nkk","Nokuku"],["nkm","Namat"],["nkn","Nkangala"],["nko","Nkonya"],["nkp","Niuatoputapu"],["nkq","Nkami"],["nkr","Nukuoro"],["nks","North Asmat"],["nkt","Nyika (Tanzania)"],["nku","Bouna Kulango"],["nkv","Nyika (Malawi and Zambia)"],["nkw","Nkutu"],["nkx","Nkoroo"],["nkz","Nkari"],["nla","Ngombale"],["nlc","Nalca"],["nle","East Nyala"],["nlg","Gela"],["nli","Grangali"],["nlj","Nyali"],["nlk","Ninia Yali"],["nll","Nihali"],["nlm","Mankiyali"],["nln","Durango Nahuatl"],["nlo","Ngul"],["nlq","Lao Naga"],["nlr","Ngarla"],["nlu","Nchumbulu"],["nlv","Orizaba Nahuatl"],["nlw","Walangama"],["nlx","Nahali"],["nly","Nyamal"],["nlz","Nalögo"],["nma","Maram Naga"],["nmb","Big Nambas, V'ënen Taut"],["nmc","Ngam"],["nmd","Ndumu"],["nme","Mzieme Naga"],["nmf","Tangkhul Naga (India)"],["nmg","Kwasio"],["nmh","Monsang Naga"],["nmi","Nyam"],["nmj","Ngombe (Central African Republic)"],["nmk","Namakura"],["nml","Ndemli"],["nmm","Manangba"],["nmn","ǃXóõ"],["nmo","Moyon Naga"],["nmp","Nimanbur"],["nmq","Nambya"],["nmr","Nimbari"],["nms","Letemboi"],["nmt","Namonuito"],["nmu","Northeast Maidu"],["nmv","Ngamini"],["nmw","Nimoa, Rifao"],["nmx","Nama (Papua New Guinea)"],["nmy","Namuyi"],["nmz","Nawdm"],["nna","Nyangumarta"],["nnb","Nande"],["nnc","Nancere"],["nnd","West Ambae"],["nne","Ngandyera"],["nnf","Ngaing"],["nng","Maring Naga"],["nnh","Ngiemboon"],["nni","North Nuaulu"],["nnj","Nyangatom"],["nnk","Nankina"],["nnl","Northern Rengma Naga"],["nnm","Namia"],["nnn","Ngete"],["nnp","Wancho Naga"],["nnq","Ngindo"],["nnr","Narungga"],["nns","Ningye"],["nnt","Nanticoke"],["nnu","Dwang"],["nnv","Nugunu (Australia)"],["nnw","Southern Nuni"],["nnx","Ngong"],["nny","Nyangga"],["nnz","Nda'nda'"],["noa","Woun Meu"],["noc","Nuk"],["nod","Northern Thai"],["noe","Nimadi"],["nof","Nomane"],["nog","Nogai"],["noh","Nomu"],["noi","Noiri"],["noj","Nonuya"],["nok","Nooksack"],["nol","Nomlaki"],["nom","Nocamán"],["non","Old Norse"],["noo","Nootka"],["nop","Numanggang"],["noq","Ngongo"],["nos","Eastern Nisu"],["not","Nomatsiguenga"],["nou","Ewage-Notu"],["nov","Novial"],["now","Nyambo"],["noy","Noy"],["noz","Nayi"],["npa","Nar Phu"],["npb","Nupbikha"],["npg","Ponyo-Gongwang Naga"],["nph","Phom Naga"],["npi","Nepali (individual language)"],["npl","Southeastern Puebla Nahuatl"],["npn","Mondropolon"],["npo","Pochuri Naga"],["nps","Nipsan"],["npu","Puimei Naga"],["npx","Noipx"],["npy","Napu"],["nqg","Southern Nago"],["nqk","Kura Ede Nago"],["nql","Ngendelengo"],["nqm","Ndom"],["nqn","Nen"],["nqo","N'Ko, N’Ko"],["nqq","Kyan-Karyaw Naga"],["nqt","Nteng"],["nqy","Akyaung Ari Naga"],["nra","Ngom"],["nrb","Nara"],["nrc","Noric"],["nre","Southern Rengma Naga"],["nrf","Jèrriais, Guernésiais"],["nrg","Narango"],["nri","Chokri Naga"],["nrk","Ngarla"],["nrl","Ngarluma"],["nrm","Narom"],["nrn","Norn"],["nrp","North Picene"],["nrr","Norra, Nora"],["nrt","Northern Kalapuya"],["nru","Narua"],["nrx","Ngurmbur"],["nrz","Lala"],["nsa","Sangtam Naga"],["nsb","Lower Nossob"],["nsc","Nshi"],["nsd","Southern Nisu"],["nse","Nsenga"],["nsf","Northwestern Nisu"],["nsg","Ngasa"],["nsh","Ngoshie"],["nsi","Nigerian Sign Language"],["nsk","Naskapi"],["nsl","Norwegian Sign Language"],["nsm","Sumi Naga"],["nsn","Nehan"],["nso","Pedi, Northern Sotho, Sepedi"],["nsp","Nepalese Sign Language"],["nsq","Northern Sierra Miwok"],["nsr","Maritime Sign Language"],["nss","Nali"],["nst","Tase Naga"],["nsu","Sierra Negra Nahuatl"],["nsv","Southwestern Nisu"],["nsw","Navut"],["nsx","Nsongo"],["nsy","Nasal"],["nsz","Nisenan"],["ntd","Northern Tidung"],["nte","Nathembo"],["ntg","Ngantangarra"],["nti","Natioro"],["ntj","Ngaanyatjarra"],["ntk","Ikoma-Nata-Isenye"],["ntm","Nateni"],["nto","Ntomba"],["ntp","Northern Tepehuan"],["ntr","Delo"],["nts","Natagaimas"],["ntu","Natügu"],["ntw","Nottoway"],["ntx","Tangkhul Naga (Myanmar)"],["nty","Mantsi"],["ntz","Natanzi"],["nua","Yuanga"],["nub","Nubian languages"],["nuc","Nukuini"],["nud","Ngala"],["nue","Ngundu"],["nuf","Nusu"],["nug","Nungali"],["nuh","Ndunda"],["nui","Ngumbi"],["nuj","Nyole"],["nuk","Nuu-chah-nulth, Nuuchahnulth"],["nul","Nusa Laut"],["num","Niuafo'ou"],["nun","Anong"],["nuo","Nguôn"],["nup","Nupe-Nupe-Tako"],["nuq","Nukumanu"],["nur","Nukuria"],["nus","Nuer"],["nut","Nung (Viet Nam)"],["nuu","Ngbundu"],["nuv","Northern Nuni"],["nuw","Nguluwan"],["nux","Mehek"],["nuy","Nunggubuyu"],["nuz","Tlamacazapa Nahuatl"],["nvh","Nasarian"],["nvm","Namiae"],["nvo","Nyokon"],["nwa","Nawathinehena"],["nwb","Nyabwa"],["nwc","Classical Newari, Classical Nepal Bhasa, Old Newari"],["nwe","Ngwe"],["nwg","Ngayawung"],["nwi","Southwest Tanna"],["nwm","Nyamusa-Molo"],["nwo","Nauo"],["nwr","Nawaru"],["nwx","Middle Newar"],["nwy","Nottoway-Meherrin"],["nxa","Nauete"],["nxd","Ngando (Democratic Republic of Congo)"],["nxe","Nage"],["nxg","Ngad'a"],["nxi","Nindi"],["nxk","Koki Naga"],["nxl","South Nuaulu"],["nxm","Numidian"],["nxn","Ngawun"],["nxo","Ndambomo"],["nxq","Naxi"],["nxr","Ninggerum"],["nxu","Narau"],["nxx","Nafri"],["nyb","Nyangbo"],["nyc","Nyanga-li"],["nyd","Nyore, Olunyole"],["nye","Nyengo"],["nyf","Giryama, Kigiryama"],["nyg","Nyindu"],["nyh","Nyikina"],["nyi","Ama (Sudan)"],["nyj","Nyanga"],["nyk","Nyaneka"],["nyl","Nyeu"],["nym","Nyamwezi"],["nyn","Nyankole"],["nyo","Nyoro"],["nyp","Nyang'i"],["nyq","Nayini"],["nyr","Nyiha (Malawi)"],["nys","Nyungar"],["nyt","Nyawaygi"],["nyu","Nyungwe"],["nyv","Nyulnyul"],["nyw","Nyaw"],["nyx","Nganyaywana"],["nyy","Nyakyusa-Ngonde"],["nza","Tigon Mbembe"],["nzb","Njebi"],["nzd","Nzadi"],["nzi","Nzima"],["nzk","Nzakara"],["nzm","Zeme Naga"],["nzs","New Zealand Sign Language"],["nzu","Teke-Nzikou"],["nzy","Nzakambay"],["nzz","Nanga Dama Dogon"],["oaa","Orok"],["oac","Oroch"],["oar","Old Aramaic (up to 700 BCE), Ancient Aramaic (up to 700 BCE)"],["oav","Old Avar"],["obi","Obispeño"],["obk","Southern Bontok"],["obl","Oblo"],["obm","Moabite"],["obo","Obo Manobo"],["obr","Old Burmese"],["obt","Old Breton"],["obu","Obulom"],["oca","Ocaina"],["och","Old Chinese"],["ocm","Old Cham"],["oco","Old Cornish"],["ocu","Atzingo Matlatzinca"],["oda","Odut"],["odk","Od"],["odt","Old Dutch"],["odu","Odual"],["ofo","Ofo"],["ofs","Old Frisian"],["ofu","Efutop"],["ogb","Ogbia"],["ogc","Ogbah"],["oge","Old Georgian"],["ogg","Ogbogolo"],["ogo","Khana"],["ogu","Ogbronuagum"],["oht","Old Hittite"],["ohu","Old Hungarian"],["oia","Oirata"],["oin","Inebu One"],["ojb","Northwestern Ojibwa"],["ojc","Central Ojibwa"],["ojg","Eastern Ojibwa"],["ojp","Old Japanese"],["ojs","Severn Ojibwa"],["ojv","Ontong Java"],["ojw","Western Ojibwa"],["oka","Okanagan"],["okb","Okobo"],["okc","Kobo"],["okd","Okodia"],["oke","Okpe (Southwestern Edo)"],["okg","Koko Babangk"],["okh","Koresh-e Rostam"],["oki","Okiek"],["okj","Oko-Juwoi"],["okk","Kwamtim One"],["okl","Old Kentish Sign Language"],["okm","Middle Korean (10th-16th cent.)"],["okn","Oki-No-Erabu"],["oko","Old Korean (3rd-9th cent.)"],["okr","Kirike"],["oks","Oko-Eni-Osayen"],["oku","Oku"],["okv","Orokaiva"],["okx","Okpe (Northwestern Edo)"],["okz","Old Khmer"],["ola","Walungge"],["old","Mochi"],["ole","Olekha"],["olk","Olkol"],["olm","Oloma"],["olo","Livvi"],["olr","Olrat"],["olt","Old Lithuanian"],["olu","Kuvale"],["oma","Omaha-Ponca"],["omb","East Ambae"],["omc","Mochica"],["ome","Omejes"],["omg","Omagua"],["omi","Omi"],["omk","Omok"],["oml","Ombo"],["omn","Minoan"],["omo","Utarmbung"],["omp","Old Manipuri"],["omq","Oto-Manguean languages"],["omr","Old Marathi"],["omt","Omotik"],["omu","Omurano"],["omv","Omotic languages"],["omw","South Tairora"],["omx","Old Mon"],["omy","Old Malay"],["ona","Ona"],["onb","Lingao"],["one","Oneida"],["ong","Olo"],["oni","Onin"],["onj","Onjob"],["onk","Kabore One"],["onn","Onobasulu"],["ono","Onondaga"],["onp","Sartang"],["onr","Northern One"],["ons","Ono"],["ont","Ontenu"],["onu","Unua"],["onw","Old Nubian"],["onx","Onin Based Pidgin"],["ood","Tohono O'odham"],["oog","Ong"],["oon","Önge"],["oor","Oorlams"],["oos","Old Ossetic"],["opa","Okpamheri"],["opk","Kopkaka"],["opm","Oksapmin"],["opo","Opao"],["opt","Opata"],["opy","Ofayé"],["ora","Oroha"],["orc","Orma"],["ore","Orejón"],["org","Oring"],["orh","Oroqen"],["orn","Orang Kanaq"],["oro","Orokolo"],["orr","Oruma"],["ors","Orang Seletar"],["ort","Adivasi Oriya"],["oru","Ormuri"],["orv","Old Russian"],["orw","Oro Win"],["orx","Oro"],["ory","Odia (individual language), Oriya (individual language)"],["orz","Ormu"],["osa","Osage"],["osc","Oscan"],["osi","Osing"],["osn","Old Sundanese"],["oso","Ososo"],["osp","Old Spanish"],["ost","Osatu"],["osu","Southern One"],["osx","Old Saxon"],["ota","Ottoman Turkish (1500-1928)"],["otb","Old Tibetan"],["otd","Ot Danum"],["ote","Mezquital Otomi"],["oti","Oti"],["otk","Old Turkish"],["otl","Tilapa Otomi"],["otm","Eastern Highland Otomi"],["otn","Tenango Otomi"],["oto","Otomian languages"],["otq","Querétaro Otomi"],["otr","Otoro"],["ots","Estado de México Otomi"],["ott","Temoaya Otomi"],["otu","Otuke"],["otw","Ottawa"],["otx","Texcatepec Otomi"],["oty","Old Tamil"],["otz","Ixtenco Otomi"],["oua","Tagargrent"],["oub","Glio-Oubi"],["oue","Oune"],["oui","Old Uighur"],["oum","Ouma"],["oun","ǃOǃung"],["ovd","Elfdalian, Övdalian"],["owi","Owiniga"],["owl","Old Welsh"],["oyb","Oy"],["oyd","Oyda"],["oym","Wayampi"],["oyy","Oya'oya"],["ozm","Koonzime"],["paa","Papuan languages"],["pab","Parecís"],["pac","Pacoh"],["pad","Paumarí"],["pae","Pagibete"],["paf","Paranawát"],["pag","Pangasinan"],["pah","Tenharim"],["pai","Pe"],["pak","Parakanã"],["pal","Pahlavi"],["pam","Pampanga, Kapampangan"],["pao","Northern Paiute"],["pap","Papiamento"],["paq","Parya"],["par","Panamint, Timbisha"],["pas","Papasena"],["pat","Papitalai"],["pau","Palauan"],["pav","Pakaásnovos"],["paw","Pawnee"],["pax","Pankararé"],["pay","Pech"],["paz","Pankararú"],["pbb","Páez"],["pbc","Patamona"],["pbe","Mezontla Popoloca"],["pbf","Coyotepec Popoloca"],["pbg","Paraujano"],["pbh","E'ñapa Woromaipu"],["pbi","Parkwa"],["pbl","Mak (Nigeria)"],["pbm","Puebla Mazatec"],["pbn","Kpasam"],["pbo","Papel"],["pbp","Badyara"],["pbr","Pangwa"],["pbs","Central Pame"],["pbt","Southern Pashto"],["pbu","Northern Pashto"],["pbv","Pnar"],["pby","Pyu (Papua New Guinea)"],["pbz","Palu"],["pca","Santa Inés Ahuatempan Popoloca"],["pcb","Pear"],["pcc","Bouyei"],["pcd","Picard"],["pce","Ruching Palaung"],["pcf","Paliyan"],["pcg","Paniya"],["pch","Pardhan"],["pci","Duruwa"],["pcj","Parenga"],["pck","Paite Chin"],["pcl","Pardhi"],["pcm","Nigerian Pidgin"],["pcn","Piti"],["pcp","Pacahuara"],["pcr","Panang"],["pcw","Pyapun"],["pda","Anam"],["pdc","Pennsylvania German"],["pdi","Pa Di"],["pdn","Podena, Fedan"],["pdo","Padoe"],["pdt","Plautdietsch"],["pdu","Kayan"],["pea","Peranakan Indonesian"],["peb","Eastern Pomo"],["ped","Mala (Papua New Guinea)"],["pee","Taje"],["pef","Northeastern Pomo"],["peg","Pengo"],["peh","Bonan"],["pei","Chichimeca-Jonaz"],["pej","Northern Pomo"],["pek","Penchal"],["pel","Pekal"],["pem","Phende"],["peo","Old Persian (ca. 600-400 B.C.)"],["pep","Kunja"],["peq","Southern Pomo"],["pes","Iranian Persian"],["pev","Pémono"],["pex","Petats"],["pey","Petjo"],["pez","Eastern Penan"],["pfa","Pááfang"],["pfe","Pere"],["pfl","Pfaelzisch"],["pga","Sudanese Creole Arabic"],["pgd","Gāndhārī"],["pgg","Pangwali"],["pgi","Pagi"],["pgk","Rerep"],["pgl","Primitive Irish"],["pgn","Paelignian"],["pgs","Pangseng"],["pgu","Pagu"],["pgy","Pongyong"],["pgz","Papua New Guinean Sign Language"],["pha","Pa-Hng"],["phd","Phudagi"],["phg","Phuong"],["phh","Phukha"],["phi","Philippine languages"],["phk","Phake"],["phl","Phalura, Palula"],["phm","Phimbi"],["phn","Phoenician"],["pho","Phunoi"],["phq","Phana'"],["phr","Pahari-Potwari"],["pht","Phu Thai"],["phu","Phuan"],["phv","Pahlavani"],["phw","Phangduwali"],["pia","Pima Bajo"],["pib","Yine"],["pic","Pinji"],["pid","Piaroa"],["pie","Piro"],["pif","Pingelapese"],["pig","Pisabo"],["pih","Pitcairn-Norfolk"],["pii","Pini"],["pij","Pijao"],["pil","Yom"],["pim","Powhatan"],["pin","Piame"],["pio","Piapoco"],["pip","Pero"],["pir","Piratapuyo"],["pis","Pijin"],["pit","Pitta Pitta"],["piu","Pintupi-Luritja"],["piv","Pileni, Vaeakau-Taumako"],["piw","Pimbwe"],["pix","Piu"],["piy","Piya-Kwonci"],["piz","Pije"],["pjt","Pitjantjatjara"],["pka","Ardhamāgadhī Prākrit"],["pkb","Pokomo, Kipfokomo"],["pkc","Paekche"],["pkg","Pak-Tong"],["pkh","Pankhu"],["pkn","Pakanha"],["pko","Pökoot"],["pkp","Pukapuka"],["pkr","Attapady Kurumba"],["pks","Pakistan Sign Language"],["pkt","Maleng"],["pku","Paku"],["pla","Miani"],["plb","Polonombauk"],["plc","Central Palawano"],["pld","Polari"],["ple","Palu'e"],["plf","Central Malayo-Polynesian languages"],["plg","Pilagá"],["plh","Paulohi"],["plj","Polci"],["plk","Kohistani Shina"],["pll","Shwe Palaung"],["pln","Palenquero"],["plo","Oluta Popoluca"],["plp","Palpa"],["plq","Palaic"],["plr","Palaka Senoufo"],["pls","San Marcos Tlacoyalco Popoloca, San Marcos Tlalcoyalco Popoloca"],["plt","Plateau Malagasy"],["plu","Palikúr"],["plv","Southwest Palawano"],["plw","Brooke's Point Palawano"],["ply","Bolyu"],["plz","Paluan"],["pma","Paama"],["pmb","Pambia"],["pmc","Palumata"],["pmd","Pallanganmiddang"],["pme","Pwaamei"],["pmf","Pamona"],["pmh","Māhārāṣṭri Prākrit"],["pmi","Northern Pumi"],["pmj","Southern Pumi"],["pmk","Pamlico"],["pml","Lingua Franca"],["pmm","Pomo"],["pmn","Pam"],["pmo","Pom"],["pmq","Northern Pame"],["pmr","Paynamar"],["pms","Piemontese"],["pmt","Tuamotuan"],["pmu","Mirpur Panjabi"],["pmw","Plains Miwok"],["pmx","Poumei Naga"],["pmy","Papuan Malay"],["pmz","Southern Pame"],["pna","Punan Bah-Biau"],["pnb","Western Panjabi"],["pnc","Pannei"],["pnd","Mpinda"],["pne","Western Penan"],["png","Pangu, Pongu"],["pnh","Penrhyn"],["pni","Aoheng"],["pnj","Pinjarup"],["pnk","Paunaka"],["pnl","Paleni"],["pnm","Punan Batu 1"],["pnn","Pinai-Hagahai"],["pno","Panobo"],["pnp","Pancana"],["pnq","Pana (Burkina Faso)"],["pnr","Panim"],["pns","Ponosakan"],["pnt","Pontic"],["pnu","Jiongnai Bunu"],["pnv","Pinigura"],["pnw","Banyjima, Panytyima"],["pnx","Phong-Kniang"],["pny","Pinyin"],["pnz","Pana (Central African Republic)"],["poc","Poqomam"],["pod","Ponares"],["poe","San Juan Atzingo Popoloca"],["pof","Poke"],["pog","Potiguára"],["poh","Poqomchi'"],["poi","Highland Popoluca"],["pok","Pokangá"],["pom","Southeastern Pomo"],["pon","Pohnpeian"],["poo","Central Pomo"],["pop","Pwapwâ"],["poq","Texistepec Popoluca"],["pos","Sayula Popoluca"],["pot","Potawatomi"],["pov","Upper Guinea Crioulo"],["pow","San Felipe Otlaltepec Popoloca"],["pox","Polabian"],["poy","Pogolo"],["poz","Malayo-Polynesian languages"],["ppa","Pao"],["ppe","Papi"],["ppi","Paipai"],["ppk","Uma"],["ppl","Pipil, Nicarao"],["ppm","Papuma"],["ppn","Papapana"],["ppo","Folopa"],["ppp","Pelende"],["ppq","Pei"],["ppr","Piru"],["pps","San Luís Temalacayuca Popoloca"],["ppt","Pare"],["ppu","Papora"],["pqa","Pa'a"],["pqe","Eastern Malayo-Polynesian languages"],["pqm","Malecite-Passamaquoddy"],["pqw","Western Malayo-Polynesian languages"],["pra","Prakrit languages"],["prb","Lua'"],["prc","Parachi"],["prd","Parsi-Dari"],["pre","Principense"],["prf","Paranan"],["prg","Prussian"],["prh","Porohanon"],["pri","Paicî"],["prk","Parauk"],["prl","Peruvian Sign Language"],["prm","Kibiri"],["prn","Prasuni"],["pro","Old Provençal (to 1500), Old Occitan (to 1500)"],["prp","Parsi"],["prq","Ashéninka Perené"],["prr","Puri"],["prs","Dari, Afghan Persian"],["prt","Phai"],["pru","Puragi"],["prw","Parawen"],["prx","Purik"],["pry","Pray 3"],["prz","Providencia Sign Language"],["psa","Asue Awyu"],["psc","Persian Sign Language"],["psd","Plains Indian Sign Language"],["pse","Central Malay"],["psg","Penang Sign Language"],["psh","Southwest Pashai, Southwest Pashayi"],["psi","Southeast Pashai, Southeast Pashayi"],["psl","Puerto Rican Sign Language"],["psm","Pauserna"],["psn","Panasuan"],["pso","Polish Sign Language"],["psp","Philippine Sign Language"],["psq","Pasi"],["psr","Portuguese Sign Language"],["pss","Kaulong"],["pst","Central Pashto"],["psu","Sauraseni Prākrit"],["psw","Port Sandwich"],["psy","Piscataway"],["pta","Pai Tavytera"],["pth","Pataxó Hã-Ha-Hãe"],["pti","Pindiini, Wangkatha"],["ptn","Patani"],["pto","Zo'é"],["ptp","Patep"],["ptq","Pattapu"],["ptr","Piamatsina"],["ptt","Enrekang"],["ptu","Bambam"],["ptv","Port Vato"],["ptw","Pentlatch"],["pty","Pathiya"],["pua","Western Highland Purepecha"],["pub","Purum"],["puc","Punan Merap"],["pud","Punan Aput"],["pue","Puelche"],["puf","Punan Merah"],["pug","Phuie"],["pui","Puinave"],["puj","Punan Tubu"],["puk","Pu Ko"],["pum","Puma"],["puo","Puoc"],["pup","Pulabu"],["puq","Puquina"],["pur","Puruborá"],["put","Putoh"],["puu","Punu"],["puw","Puluwatese"],["pux","Puare"],["puy","Purisimeño"],["puz","Purum Naga"],["pwa","Pawaia"],["pwb","Panawa"],["pwg","Gapapaiwa"],["pwi","Patwin"],["pwm","Molbog"],["pwn","Paiwan"],["pwo","Pwo Western Karen"],["pwr","Powari"],["pww","Pwo Northern Karen"],["pxm","Quetzaltepec Mixe"],["pye","Pye Krumen"],["pym","Fyam"],["pyn","Poyanáwa"],["pys","Paraguayan Sign Language, Lengua de Señas del Paraguay"],["pyu","Puyuma"],["pyx","Pyu (Myanmar)"],["pyy","Pyen"],["pzn","Para Naga"],["qaa..qtz","Private use"],["qua","Quapaw"],["qub","Huallaga Huánuco Quechua"],["quc","K'iche', Quiché"],["qud","Calderón Highland Quichua"],["quf","Lambayeque Quechua"],["qug","Chimborazo Highland Quichua"],["quh","South Bolivian Quechua"],["qui","Quileute"],["quk","Chachapoyas Quechua"],["qul","North Bolivian Quechua"],["qum","Sipacapense"],["qun","Quinault"],["qup","Southern Pastaza Quechua"],["quq","Quinqui"],["qur","Yanahuanca Pasco Quechua"],["qus","Santiago del Estero Quichua"],["quv","Sacapulteco"],["quw","Tena Lowland Quichua"],["qux","Yauyos Quechua"],["quy","Ayacucho Quechua"],["quz","Cusco Quechua"],["qva","Ambo-Pasco Quechua"],["qvc","Cajamarca Quechua"],["qve","Eastern Apurímac Quechua"],["qvh","Huamalíes-Dos de Mayo Huánuco Quechua"],["qvi","Imbabura Highland Quichua"],["qvj","Loja Highland Quichua"],["qvl","Cajatambo North Lima Quechua"],["qvm","Margos-Yarowilca-Lauricocha Quechua"],["qvn","North Junín Quechua"],["qvo","Napo Lowland Quechua"],["qvp","Pacaraos Quechua"],["qvs","San Martín Quechua"],["qvw","Huaylla Wanca Quechua"],["qvy","Queyu"],["qvz","Northern Pastaza Quichua"],["qwa","Corongo Ancash Quechua"],["qwc","Classical Quechua"],["qwe","Quechuan (family)"],["qwh","Huaylas Ancash Quechua"],["qwm","Kuman (Russia)"],["qws","Sihuas Ancash Quechua"],["qwt","Kwalhioqua-Tlatskanai"],["qxa","Chiquián Ancash Quechua"],["qxc","Chincha Quechua"],["qxh","Panao Huánuco Quechua"],["qxl","Salasaca Highland Quichua"],["qxn","Northern Conchucos Ancash Quechua"],["qxo","Southern Conchucos Ancash Quechua"],["qxp","Puno Quechua"],["qxq","Qashqa'i"],["qxr","Cañar Highland Quichua"],["qxs","Southern Qiang"],["qxt","Santa Ana de Tusi Pasco Quechua"],["qxu","Arequipa-La Unión Quechua"],["qxw","Jauja Wanca Quechua"],["qya","Quenya"],["qyp","Quiripi"],["raa","Dungmali"],["rab","Camling"],["rac","Rasawa"],["rad","Rade"],["raf","Western Meohang"],["rag","Logooli, Lulogooli"],["rah","Rabha"],["rai","Ramoaaina"],["raj","Rajasthani"],["rak","Tulu-Bohuai"],["ral","Ralte"],["ram","Canela"],["ran","Riantana"],["rao","Rao"],["rap","Rapanui"],["raq","Saam"],["rar","Rarotongan, Cook Islands Maori"],["ras","Tegali"],["rat","Razajerdi"],["rau","Raute"],["rav","Sampang"],["raw","Rawang"],["rax","Rang"],["ray","Rapa"],["raz","Rahambuu"],["rbb","Rumai Palaung"],["rbk","Northern Bontok"],["rbl","Miraya Bikol"],["rbp","Barababaraba"],["rcf","Réunion Creole French"],["rdb","Rudbari"],["rea","Rerau"],["reb","Rembong"],["ree","Rejang Kayan"],["reg","Kara (Tanzania)"],["rei","Reli"],["rej","Rejang"],["rel","Rendille"],["rem","Remo"],["ren","Rengao"],["rer","Rer Bare"],["res","Reshe"],["ret","Retta"],["rey","Reyesano"],["rga","Roria"],["rge","Romano-Greek"],["rgk","Rangkas"],["rgn","Romagnol"],["rgr","Resígaro"],["rgs","Southern Roglai"],["rgu","Ringgou"],["rhg","Rohingya"],["rhp","Yahang"],["ria","Riang (India)"],["rie","Rien"],["rif","Tarifit"],["ril","Riang Lang, Riang (Myanmar)"],["rim","Nyaturu"],["rin","Nungu"],["rir","Ribun"],["rit","Ritharrngu"],["riu","Riung"],["rjg","Rajong"],["rji","Raji"],["rjs","Rajbanshi"],["rka","Kraol"],["rkb","Rikbaktsa"],["rkh","Rakahanga-Manihiki"],["rki","Rakhine"],["rkm","Marka"],["rkt","Rangpuri, Kamta"],["rkw","Arakwal"],["rma","Rama"],["rmb","Rembarrnga"],["rmc","Carpathian Romani"],["rmd","Traveller Danish"],["rme","Angloromani"],["rmf","Kalo Finnish Romani"],["rmg","Traveller Norwegian"],["rmh","Murkim"],["rmi","Lomavren"],["rmk","Romkun"],["rml","Baltic Romani"],["rmm","Roma"],["rmn","Balkan Romani"],["rmo","Sinte Romani"],["rmp","Rempi"],["rmq","Caló"],["rmr","Caló"],["rms","Romanian Sign Language"],["rmt","Domari"],["rmu","Tavringer Romani"],["rmv","Romanova"],["rmw","Welsh Romani"],["rmx","Romam"],["rmy","Vlax Romani"],["rmz","Marma"],["rna","Runa"],["rnd","Ruund"],["rng","Ronga"],["rnl","Ranglong"],["rnn","Roon"],["rnp","Rongpo"],["rnr","Nari Nari"],["rnw","Rungwa"],["roa","Romance languages"],["rob","Tae'"],["roc","Cacgia Roglai"],["rod","Rogo"],["roe","Ronji"],["rof","Rombo"],["rog","Northern Roglai"],["rol","Romblomanon"],["rom","Romany"],["roo","Rotokas"],["rop","Kriol"],["ror","Rongga"],["rou","Runga"],["row","Dela-Oenale"],["rpn","Repanbitip"],["rpt","Rapting"],["rri","Ririo"],["rro","Waima"],["rrt","Arritinngithigh"],["rsb","Romano-Serbian"],["rsi","Rennellese Sign Language"],["rsl","Russian Sign Language"],["rsm","Miriwoong Sign Language"],["rtc","Rungtu Chin"],["rth","Ratahan"],["rtm","Rotuman"],["rts","Yurats"],["rtw","Rathawi"],["rub","Gungu"],["ruc","Ruuli"],["rue","Rusyn"],["ruf","Luguru"],["rug","Roviana"],["ruh","Ruga"],["rui","Rufiji"],["ruk","Che"],["ruo","Istro Romanian"],["rup","Macedo-Romanian, Aromanian, Arumanian"],["ruq","Megleno Romanian"],["rut","Rutul"],["ruu","Lanas Lobu"],["ruy","Mala (Nigeria)"],["ruz","Ruma"],["rwa","Rawo"],["rwk","Rwa"],["rwl","Ruwila"],["rwm","Amba (Uganda)"],["rwo","Rawa"],["rwr","Marwari (India)"],["rxd","Ngardi"],["rxw","Karuwali, Garuwali"],["ryn","Northern Amami-Oshima"],["rys","Yaeyama"],["ryu","Central Okinawan"],["rzh","Rāziḥī"],["saa","Saba"],["sab","Buglere"],["sac","Meskwaki"],["sad","Sandawe"],["sae","Sabanê"],["saf","Safaliba"],["sah","Yakut"],["sai","South American Indian languages"],["saj","Sahu"],["sak","Sake"],["sal","Salishan languages"],["sam","Samaritan Aramaic"],["sao","Sause"],["sap","Sanapaná"],["saq","Samburu"],["sar","Saraveca"],["sas","Sasak"],["sat","Santali"],["sau","Saleman"],["sav","Saafi-Saafi"],["saw","Sawi"],["sax","Sa"],["say","Saya"],["saz","Saurashtra"],["sba","Ngambay"],["sbb","Simbo"],["sbc","Kele (Papua New Guinea)"],["sbd","Southern Samo"],["sbe","Saliba"],["sbf","Chabu, Shabo"],["sbg","Seget"],["sbh","Sori-Harengan"],["sbi","Seti"],["sbj","Surbakhal"],["sbk","Safwa"],["sbl","Botolan Sambal"],["sbm","Sagala"],["sbn","Sindhi Bhil"],["sbo","Sabüm"],["sbp","Sangu (Tanzania)"],["sbq","Sileibi"],["sbr","Sembakung Murut"],["sbs","Subiya"],["sbt","Kimki"],["sbu","Stod Bhoti"],["sbv","Sabine"],["sbw","Simba"],["sbx","Seberuang"],["sby","Soli"],["sbz","Sara Kaba"],["sca","Sansu"],["scb","Chut"],["sce","Dongxiang"],["scf","San Miguel Creole French"],["scg","Sanggau"],["sch","Sakachep"],["sci","Sri Lankan Creole Malay"],["sck","Sadri"],["scl","Shina"],["scn","Sicilian"],["sco","Scots"],["scp","Hyolmo, Helambu Sherpa"],["scq","Sa'och"],["scs","North Slavey"],["sct","Southern Katang"],["scu","Shumcho"],["scv","Sheni"],["scw","Sha"],["scx","Sicel"],["sda","Toraja-Sa'dan"],["sdb","Shabak"],["sdc","Sassarese Sardinian"],["sde","Surubu"],["sdf","Sarli"],["sdg","Savi"],["sdh","Southern Kurdish"],["sdj","Suundi"],["sdk","Sos Kundi"],["sdl","Saudi Arabian Sign Language"],["sdm","Semandang"],["sdn","Gallurese Sardinian"],["sdo","Bukar-Sadung Bidayuh"],["sdp","Sherdukpen"],["sdq","Semandang"],["sdr","Oraon Sadri"],["sds","Sened"],["sdt","Shuadit"],["sdu","Sarudu"],["sdv","Eastern Sudanic languages"],["sdx","Sibu Melanau"],["sdz","Sallands"],["sea","Semai"],["seb","Shempire Senoufo"],["sec","Sechelt"],["sed","Sedang"],["see","Seneca"],["sef","Cebaara Senoufo"],["seg","Segeju"],["seh","Sena"],["sei","Seri"],["sej","Sene"],["sek","Sekani"],["sel","Selkup"],["sem","Semitic languages"],["sen","Nanerigé Sénoufo"],["seo","Suarmin"],["sep","Sìcìté Sénoufo"],["seq","Senara Sénoufo"],["ser","Serrano"],["ses","Koyraboro Senni Songhai"],["set","Sentani"],["seu","Serui-Laut"],["sev","Nyarafolo Senoufo"],["sew","Sewa Bay"],["sey","Secoya"],["sez","Senthang Chin"],["sfb","Langue des signes de Belgique Francophone, French Belgian Sign Language"],["sfe","Eastern Subanen"],["sfm","Small Flowery Miao"],["sfs","South African Sign Language"],["sfw","Sehwi"],["sga","Old Irish (to 900)"],["sgb","Mag-antsi Ayta"],["sgc","Kipsigis"],["sgd","Surigaonon"],["sge","Segai"],["sgg","Swiss-German Sign Language"],["sgh","Shughni"],["sgi","Suga"],["sgj","Surgujia"],["sgk","Sangkong"],["sgl","Sanglechi-Ishkashimi"],["sgm","Singa"],["sgn","Sign languages"],["sgo","Songa"],["sgp","Singpho"],["sgr","Sangisari"],["sgs","Samogitian"],["sgt","Brokpake"],["sgu","Salas"],["sgw","Sebat Bet Gurage"],["sgx","Sierra Leone Sign Language"],["sgy","Sanglechi"],["sgz","Sursurunga"],["sha","Shall-Zwall"],["shb","Ninam"],["shc","Sonde"],["shd","Kundal Shahi"],["she","Sheko"],["shg","Shua"],["shh","Shoshoni"],["shi","Tachelhit"],["shj","Shatt"],["shk","Shilluk"],["shl","Shendu"],["shm","Shahrudi"],["shn","Shan"],["sho","Shanga"],["shp","Shipibo-Conibo"],["shq","Sala"],["shr","Shi"],["shs","Shuswap"],["sht","Shasta"],["shu","Chadian Arabic"],["shv","Shehri"],["shw","Shwai"],["shx","She"],["shy","Tachawit"],["shz","Syenara Senoufo"],["sia","Akkala Sami"],["sib","Sebop"],["sid","Sidamo"],["sie","Simaa"],["sif","Siamou"],["sig","Paasaal"],["sih","Zire, Sîshëë"],["sii","Shom Peng"],["sij","Numbami"],["sik","Sikiana"],["sil","Tumulung Sisaala"],["sim","Mende (Papua New Guinea)"],["sio","Siouan languages"],["sip","Sikkimese"],["siq","Sonia"],["sir","Siri"],["sis","Siuslaw"],["sit","Sino-Tibetan languages"],["siu","Sinagen"],["siv","Sumariup"],["siw","Siwai"],["six","Sumau"],["siy","Sivandi"],["siz","Siwi"],["sja","Epena"],["sjb","Sajau Basap"],["sjd","Kildin Sami"],["sje","Pite Sami"],["sjg","Assangori"],["sjk","Kemi Sami"],["sjl","Sajalong, Miji"],["sjm","Mapun"],["sjn","Sindarin"],["sjo","Xibe"],["sjp","Surjapuri"],["sjr","Siar-Lak"],["sjs","Senhaja De Srair"],["sjt","Ter Sami"],["sju","Ume Sami"],["sjw","Shawnee"],["ska","Skagit"],["skb","Saek"],["skc","Ma Manda"],["skd","Southern Sierra Miwok"],["ske","Seke (Vanuatu)"],["skf","Sakirabiá"],["skg","Sakalava Malagasy"],["skh","Sikule"],["ski","Sika"],["skj","Seke (Nepal)"],["skk","Sok"],["skm","Kutong"],["skn","Kolibugan Subanon"],["sko","Seko Tengah"],["skp","Sekapan"],["skq","Sininkere"],["skr","Saraiki, Seraiki"],["sks","Maia"],["skt","Sakata"],["sku","Sakao"],["skv","Skou"],["skw","Skepi Creole Dutch"],["skx","Seko Padang"],["sky","Sikaiana"],["skz","Sekar"],["sla","Slavic languages"],["slc","Sáliba"],["sld","Sissala"],["sle","Sholaga"],["slf","Swiss-Italian Sign Language"],["slg","Selungai Murut"],["slh","Southern Puget Sound Salish"],["sli","Lower Silesian"],["slj","Salumá"],["sll","Salt-Yui"],["slm","Pangutaran Sama"],["sln","Salinan"],["slp","Lamaholot"],["slq","Salchuq"],["slr","Salar"],["sls","Singapore Sign Language"],["slt","Sila"],["slu","Selaru"],["slw","Sialum"],["slx","Salampasu"],["sly","Selayar"],["slz","Ma'ya"],["sma","Southern Sami"],["smb","Simbari"],["smc","Som"],["smd","Sama"],["smf","Auwe"],["smg","Simbali"],["smh","Samei"],["smi","Sami languages"],["smj","Lule Sami"],["smk","Bolinao"],["sml","Central Sama"],["smm","Musasa"],["smn","Inari Sami"],["smp","Samaritan"],["smq","Samo"],["smr","Simeulue"],["sms","Skolt Sami"],["smt","Simte"],["smu","Somray"],["smv","Samvedi"],["smw","Sumbawa"],["smx","Samba"],["smy","Semnani"],["smz","Simeku"],["snb","Sebuyau"],["snc","Sinaugoro"],["sne","Bau Bidayuh"],["snf","Noon"],["sng","Sanga (Democratic Republic of Congo)"],["snh","Shinabo"],["sni","Sensi"],["snj","Riverain Sango"],["snk","Soninke"],["snl","Sangil"],["snm","Southern Ma'di"],["snn","Siona"],["sno","Snohomish"],["snp","Siane"],["snq","Sangu (Gabon)"],["snr","Sihan"],["sns","South West Bay, Nahavaq"],["snu","Senggi, Viid"],["snv","Sa'ban"],["snw","Selee"],["snx","Sam"],["sny","Saniyo-Hiyewe"],["snz","Kou"],["soa","Thai Song"],["sob","Sobei"],["soc","So (Democratic Republic of Congo)"],["sod","Songoora"],["soe","Songomeno"],["sog","Sogdian"],["soh","Aka"],["soi","Sonha"],["soj","Soi"],["sok","Sokoro"],["sol","Solos"],["son","Songhai languages"],["soo","Songo"],["sop","Songe"],["soq","Kanasi"],["sor","Somrai"],["sos","Seeku"],["sou","Southern Thai"],["sov","Sonsorol"],["sow","Sowanda"],["sox","Swo"],["soy","Miyobe"],["soz","Temi"],["spb","Sepa (Indonesia)"],["spc","Sapé"],["spd","Saep"],["spe","Sepa (Papua New Guinea)"],["spg","Sian"],["spi","Saponi"],["spk","Sengo"],["spl","Selepet"],["spm","Akukem"],["spn","Sanapaná"],["spo","Spokane"],["spp","Supyire Senoufo"],["spq","Loreto-Ucayali Spanish"],["spr","Saparua"],["sps","Saposa"],["spt","Spiti Bhoti"],["spu","Sapuan"],["spv","Sambalpuri, Kosli"],["spx","South Picene"],["spy","Sabaot"],["sqa","Shama-Sambuga"],["sqh","Shau"],["sqj","Albanian languages"],["sqk","Albanian Sign Language"],["sqm","Suma"],["sqn","Susquehannock"],["sqo","Sorkhei"],["sqq","Sou"],["sqr","Siculo Arabic"],["sqs","Sri Lankan Sign Language"],["sqt","Soqotri"],["squ","Squamish"],["sqx","Kufr Qassem Sign Language (KQSL)"],["sra","Saruga"],["srb","Sora"],["src","Logudorese Sardinian"],["sre","Sara"],["srf","Nafi"],["srg","Sulod"],["srh","Sarikoli"],["sri","Siriano"],["srk","Serudung Murut"],["srl","Isirawa"],["srm","Saramaccan"],["srn","Sranan Tongo"],["sro","Campidanese Sardinian"],["srq","Sirionó"],["srr","Serer"],["srs","Sarsi"],["srt","Sauri"],["sru","Suruí"],["srv","Southern Sorsoganon"],["srw","Serua"],["srx","Sirmauri"],["sry","Sera"],["srz","Shahmirzadi"],["ssa","Nilo-Saharan languages"],["ssb","Southern Sama"],["ssc","Suba-Simbiti"],["ssd","Siroi"],["sse","Balangingi, Bangingih Sama"],["ssf","Thao"],["ssg","Seimat"],["ssh","Shihhi Arabic"],["ssi","Sansi"],["ssj","Sausi"],["ssk","Sunam"],["ssl","Western Sisaala"],["ssm","Semnam"],["ssn","Waata"],["sso","Sissano"],["ssp","Spanish Sign Language"],["ssq","So'a"],["ssr","Swiss-French Sign Language"],["sss","Sô"],["sst","Sinasina"],["ssu","Susuami"],["ssv","Shark Bay"],["ssx","Samberigi"],["ssy","Saho"],["ssz","Sengseng"],["sta","Settla"],["stb","Northern Subanen"],["std","Sentinel"],["ste","Liana-Seti"],["stf","Seta"],["stg","Trieng"],["sth","Shelta"],["sti","Bulo Stieng"],["stj","Matya Samo"],["stk","Arammba"],["stl","Stellingwerfs"],["stm","Setaman"],["stn","Owa"],["sto","Stoney"],["stp","Southeastern Tepehuan"],["stq","Saterfriesisch"],["str","Straits Salish"],["sts","Shumashti"],["stt","Budeh Stieng"],["stu","Samtao"],["stv","Silt'e"],["stw","Satawalese"],["sty","Siberian Tatar"],["sua","Sulka"],["sub","Suku"],["suc","Western Subanon"],["sue","Suena"],["sug","Suganga"],["sui","Suki"],["suj","Shubi"],["suk","Sukuma"],["sul","Surigaonon"],["sum","Sumo-Mayangna"],["suo","Bouni"],["suq","Tirmaga-Chai Suri, Suri"],["sur","Mwaghavul"],["sus","Susu"],["sut","Subtiaba"],["suv","Puroik"],["suw","Sumbwa"],["sux","Sumerian"],["suy","Suyá"],["suz","Sunwar"],["sva","Svan"],["svb","Ulau-Suain"],["svc","Vincentian Creole English"],["sve","Serili"],["svk","Slovakian Sign Language"],["svm","Slavomolisano"],["svr","Savara"],["svs","Savosavo"],["svx","Skalvian"],["swb","Maore Comorian"],["swc","Congo Swahili"],["swf","Sere"],["swg","Swabian"],["swh","Swahili (individual language), Kiswahili"],["swi","Sui"],["swj","Sira"],["swk","Malawi Sena"],["swl","Swedish Sign Language"],["swm","Samosa"],["swn","Sawknah"],["swo","Shanenawa"],["swp","Suau"],["swq","Sharwa"],["swr","Saweru"],["sws","Seluwasan"],["swt","Sawila"],["swu","Suwawa"],["swv","Shekhawati"],["sww","Sowa"],["swx","Suruahá"],["swy","Sarua"],["sxb","Suba"],["sxc","Sicanian"],["sxe","Sighu"],["sxg","Shuhi, Shixing"],["sxk","Southern Kalapuya"],["sxl","Selian"],["sxm","Samre"],["sxn","Sangir"],["sxo","Sorothaptic"],["sxr","Saaroa"],["sxs","Sasaru"],["sxu","Upper Saxon"],["sxw","Saxwe Gbe"],["sya","Siang"],["syb","Central Subanen"],["syc","Classical Syriac"],["syd","Samoyedic languages"],["syi","Seki"],["syk","Sukur"],["syl","Sylheti"],["sym","Maya Samo"],["syn","Senaya"],["syo","Suoy"],["syr","Syriac"],["sys","Sinyar"],["syw","Kagate"],["syx","Samay"],["syy","Al-Sayyid Bedouin Sign Language"],["sza","Semelai"],["szb","Ngalum"],["szc","Semaq Beri"],["szd","Seru"],["sze","Seze"],["szg","Sengele"],["szl","Silesian"],["szn","Sula"],["szp","Suabo"],["szs","Solomon Islands Sign Language"],["szv","Isu (Fako Division)"],["szw","Sawai"],["szy","Sakizaya"],["taa","Lower Tanana"],["tab","Tabassaran"],["tac","Lowland Tarahumara"],["tad","Tause"],["tae","Tariana"],["taf","Tapirapé"],["tag","Tagoi"],["tai","Tai languages"],["taj","Eastern Tamang"],["tak","Tala"],["tal","Tal"],["tan","Tangale"],["tao","Yami"],["tap","Taabwa"],["taq","Tamasheq"],["tar","Central Tarahumara"],["tas","Tay Boi"],["tau","Upper Tanana"],["tav","Tatuyo"],["taw","Tai"],["tax","Tamki"],["tay","Atayal"],["taz","Tocho"],["tba","Aikanã"],["tbb","Tapeba"],["tbc","Takia"],["tbd","Kaki Ae"],["tbe","Tanimbili"],["tbf","Mandara"],["tbg","North Tairora"],["tbh","Dharawal, Thurawal"],["tbi","Gaam"],["tbj","Tiang"],["tbk","Calamian Tagbanwa"],["tbl","Tboli"],["tbm","Tagbu"],["tbn","Barro Negro Tunebo"],["tbo","Tawala"],["tbp","Taworta, Diebroud"],["tbq","Tibeto-Burman languages"],["tbr","Tumtum"],["tbs","Tanguat"],["tbt","Tembo (Kitembo)"],["tbu","Tubar"],["tbv","Tobo"],["tbw","Tagbanwa"],["tbx","Kapin"],["tby","Tabaru"],["tbz","Ditammari"],["tca","Ticuna"],["tcb","Tanacross"],["tcc","Datooga"],["tcd","Tafi"],["tce","Southern Tutchone"],["tcf","Malinaltepec Me'phaa, Malinaltepec Tlapanec"],["tcg","Tamagario"],["tch","Turks And Caicos Creole English"],["tci","Wára"],["tck","Tchitchege"],["tcl","Taman (Myanmar)"],["tcm","Tanahmerah"],["tcn","Tichurong"],["tco","Taungyo"],["tcp","Tawr Chin"],["tcq","Kaiy"],["tcs","Torres Strait Creole, Yumplatok"],["tct","T'en"],["tcu","Southeastern Tarahumara"],["tcw","Tecpatlán Totonac"],["tcx","Toda"],["tcy","Tulu"],["tcz","Thado Chin"],["tda","Tagdal"],["tdb","Panchpargania"],["tdc","Emberá-Tadó"],["tdd","Tai Nüa"],["tde","Tiranige Diga Dogon"],["tdf","Talieng"],["tdg","Western Tamang"],["tdh","Thulung"],["tdi","Tomadino"],["tdj","Tajio"],["tdk","Tambas"],["tdl","Sur"],["tdm","Taruma"],["tdn","Tondano"],["tdo","Teme"],["tdq","Tita"],["tdr","Todrah"],["tds","Doutai"],["tdt","Tetun Dili"],["tdu","Tempasuk Dusun"],["tdv","Toro"],["tdx","Tandroy-Mahafaly Malagasy"],["tdy","Tadyawan"],["tea","Temiar"],["teb","Tetete"],["tec","Terik"],["ted","Tepo Krumen"],["tee","Huehuetla Tepehua"],["tef","Teressa"],["teg","Teke-Tege"],["teh","Tehuelche"],["tei","Torricelli"],["tek","Ibali Teke"],["tem","Timne"],["ten","Tama (Colombia)"],["teo","Teso"],["tep","Tepecano"],["teq","Temein"],["ter","Tereno"],["tes","Tengger"],["tet","Tetum"],["teu","Soo"],["tev","Teor"],["tew","Tewa (USA)"],["tex","Tennet"],["tey","Tulishi"],["tez","Tetserret"],["tfi","Tofin Gbe"],["tfn","Tanaina"],["tfo","Tefaro"],["tfr","Teribe"],["tft","Ternate"],["tga","Sagalla"],["tgb","Tobilung"],["tgc","Tigak"],["tgd","Ciwogai"],["tge","Eastern Gorkha Tamang"],["tgf","Chalikha"],["tgg","Tangga"],["tgh","Tobagonian Creole English"],["tgi","Lawunuia"],["tgj","Tagin"],["tgn","Tandaganon"],["tgo","Sudest"],["tgp","Tangoa"],["tgq","Tring"],["tgr","Tareng"],["tgs","Nume"],["tgt","Central Tagbanwa"],["tgu","Tanggu"],["tgv","Tingui-Boto"],["tgw","Tagwana Senoufo"],["tgx","Tagish"],["tgy","Togoyo"],["tgz","Tagalaka"],["thc","Tai Hang Tong"],["thd","Kuuk Thaayorre, Thayore"],["the","Chitwania Tharu"],["thf","Thangmi"],["thh","Northern Tarahumara"],["thi","Tai Long"],["thk","Tharaka, Kitharaka"],["thl","Dangaura Tharu"],["thm","Aheu"],["thn","Thachanadan"],["thp","Thompson"],["thq","Kochila Tharu"],["thr","Rana Tharu"],["ths","Thakali"],["tht","Tahltan"],["thu","Thuri"],["thv","Tahaggart Tamahaq"],["thw","Thudam"],["thx","The"],["thy","Tha"],["thz","Tayart Tamajeq"],["tia","Tidikelt Tamazight"],["tic","Tira"],["tid","Tidong"],["tie","Tingal"],["tif","Tifal"],["tig","Tigre"],["tih","Timugon Murut"],["tii","Tiene"],["tij","Tilung"],["tik","Tikar"],["til","Tillamook"],["tim","Timbe"],["tin","Tindi"],["tio","Teop"],["tip","Trimuris"],["tiq","Tiéfo"],["tis","Masadiit Itneg"],["tit","Tinigua"],["tiu","Adasen"],["tiv","Tiv"],["tiw","Tiwi"],["tix","Southern Tiwa"],["tiy","Tiruray"],["tiz","Tai Hongjin"],["tja","Tajuasohn"],["tjg","Tunjung"],["tji","Northern Tujia"],["tjj","Tjungundji"],["tjl","Tai Laing"],["tjm","Timucua"],["tjn","Tonjon"],["tjo","Temacine Tamazight"],["tjp","Tjupany"],["tjs","Southern Tujia"],["tju","Tjurruru"],["tjw","Djabwurrung"],["tka","Truká"],["tkb","Buksa"],["tkd","Tukudede"],["tke","Takwane"],["tkf","Tukumanféd"],["tkg","Tesaka Malagasy"],["tkk","Takpa"],["tkl","Tokelau"],["tkm","Takelma"],["tkn","Toku-No-Shima"],["tkp","Tikopia"],["tkq","Tee"],["tkr","Tsakhur"],["tks","Takestani"],["tkt","Kathoriya Tharu"],["tku","Upper Necaxa Totonac"],["tkv","Mur Pano"],["tkw","Teanu"],["tkx","Tangko"],["tkz","Takua"],["tla","Southwestern Tepehuan"],["tlb","Tobelo"],["tlc","Yecuatla Totonac"],["tld","Talaud"],["tlf","Telefol"],["tlg","Tofanma"],["tlh","Klingon, tlhIngan Hol"],["tli","Tlingit"],["tlj","Talinga-Bwisi"],["tlk","Taloki"],["tll","Tetela"],["tlm","Tolomako"],["tln","Talondo'"],["tlo","Talodi"],["tlp","Filomena Mata-Coahuitlán Totonac"],["tlq","Tai Loi"],["tlr","Talise"],["tls","Tambotalo"],["tlt","Sou Nama, Teluti"],["tlu","Tulehu"],["tlv","Taliabu"],["tlw","South Wemale"],["tlx","Khehek"],["tly","Talysh"],["tma","Tama (Chad)"],["tmb","Katbol, Avava"],["tmc","Tumak"],["tmd","Haruai"],["tme","Tremembé"],["tmf","Toba-Maskoy"],["tmg","Ternateño"],["tmh","Tamashek"],["tmi","Tutuba"],["tmj","Samarokena"],["tmk","Northwestern Tamang"],["tml","Tamnim Citak"],["tmm","Tai Thanh"],["tmn","Taman (Indonesia)"],["tmo","Temoq"],["tmp","Tai Mène"],["tmq","Tumleo"],["tmr","Jewish Babylonian Aramaic (ca. 200-1200 CE)"],["tms","Tima"],["tmt","Tasmate"],["tmu","Iau"],["tmv","Tembo (Motembo)"],["tmw","Temuan"],["tmy","Tami"],["tmz","Tamanaku"],["tna","Tacana"],["tnb","Western Tunebo"],["tnc","Tanimuca-Retuarã"],["tnd","Angosturas Tunebo"],["tne","Tinoc Kallahan"],["tnf","Tangshewi"],["tng","Tobanga"],["tnh","Maiani"],["tni","Tandia"],["tnk","Kwamera"],["tnl","Lenakel"],["tnm","Tabla"],["tnn","North Tanna"],["tno","Toromono"],["tnp","Whitesands"],["tnq","Taino"],["tnr","Ménik"],["tns","Tenis"],["tnt","Tontemboan"],["tnu","Tay Khang"],["tnv","Tangchangya"],["tnw","Tonsawang"],["tnx","Tanema"],["tny","Tongwe"],["tnz","Ten'edn"],["tob","Toba"],["toc","Coyutla Totonac"],["tod","Toma"],["toe","Tomedes"],["tof","Gizrra"],["tog","Tonga (Nyasa)"],["toh","Gitonga"],["toi","Tonga (Zambia)"],["toj","Tojolabal"],["tol","Tolowa"],["tom","Tombulu"],["too","Xicotepec De Juárez Totonac"],["top","Papantla Totonac"],["toq","Toposa"],["tor","Togbo-Vara Banda"],["tos","Highland Totonac"],["tou","Tho"],["tov","Upper Taromi"],["tow","Jemez"],["tox","Tobian"],["toy","Topoiyo"],["toz","To"],["tpa","Taupota"],["tpc","Azoyú Me'phaa, Azoyú Tlapanec"],["tpe","Tippera"],["tpf","Tarpia"],["tpg","Kula"],["tpi","Tok Pisin"],["tpj","Tapieté"],["tpk","Tupinikin"],["tpl","Tlacoapa Me'phaa, Tlacoapa Tlapanec"],["tpm","Tampulma"],["tpn","Tupinambá"],["tpo","Tai Pao"],["tpp","Pisaflores Tepehua"],["tpq","Tukpa"],["tpr","Tuparí"],["tpt","Tlachichilco Tepehua"],["tpu","Tampuan"],["tpv","Tanapag"],["tpw","Tupí"],["tpx","Acatepec Me'phaa, Acatepec Tlapanec"],["tpy","Trumai"],["tpz","Tinputz"],["tqb","Tembé"],["tql","Lehali"],["tqm","Turumsa"],["tqn","Tenino"],["tqo","Toaripi"],["tqp","Tomoip"],["tqq","Tunni"],["tqr","Torona"],["tqt","Western Totonac"],["tqu","Touo"],["tqw","Tonkawa"],["tra","Tirahi"],["trb","Terebu"],["trc","Copala Triqui"],["trd","Turi"],["tre","East Tarangan"],["trf","Trinidadian Creole English"],["trg","Lishán Didán"],["trh","Turaka"],["tri","Trió"],["trj","Toram"],["trk","Turkic languages"],["trl","Traveller Scottish"],["trm","Tregami"],["trn","Trinitario"],["tro","Tarao Naga"],["trp","Kok Borok"],["trq","San Martín Itunyoso Triqui"],["trr","Taushiro"],["trs","Chicahuaxtla Triqui"],["trt","Tunggare"],["tru","Turoyo, Surayt"],["trv","Taroko"],["trw","Torwali"],["trx","Tringgus-Sembaan Bidayuh"],["try","Turung"],["trz","Torá"],["tsa","Tsaangi"],["tsb","Tsamai"],["tsc","Tswa"],["tsd","Tsakonian"],["tse","Tunisian Sign Language"],["tsf","Southwestern Tamang"],["tsg","Tausug"],["tsh","Tsuvan"],["tsi","Tsimshian"],["tsj","Tshangla"],["tsk","Tseku"],["tsl","Ts'ün-Lao"],["tsm","Turkish Sign Language, Türk İşaret Dili"],["tsp","Northern Toussian"],["tsq","Thai Sign Language"],["tsr","Akei"],["tss","Taiwan Sign Language"],["tst","Tondi Songway Kiini"],["tsu","Tsou"],["tsv","Tsogo"],["tsw","Tsishingini"],["tsx","Mubami"],["tsy","Tebul Sign Language"],["tsz","Purepecha"],["tta","Tutelo"],["ttb","Gaa"],["ttc","Tektiteko"],["ttd","Tauade"],["tte","Bwanabwana"],["ttf","Tuotomb"],["ttg","Tutong"],["tth","Upper Ta'oih"],["tti","Tobati"],["ttj","Tooro"],["ttk","Totoro"],["ttl","Totela"],["ttm","Northern Tutchone"],["ttn","Towei"],["tto","Lower Ta'oih"],["ttp","Tombelala"],["ttq","Tawallammat Tamajaq"],["ttr","Tera"],["tts","Northeastern Thai"],["ttt","Muslim Tat"],["ttu","Torau"],["ttv","Titan"],["ttw","Long Wat"],["tty","Sikaritai"],["ttz","Tsum"],["tua","Wiarumus"],["tub","Tübatulabal"],["tuc","Mutu"],["tud","Tuxá"],["tue","Tuyuca"],["tuf","Central Tunebo"],["tug","Tunia"],["tuh","Taulil"],["tui","Tupuri"],["tuj","Tugutil"],["tul","Tula"],["tum","Tumbuka"],["tun","Tunica"],["tuo","Tucano"],["tup","Tupi languages"],["tuq","Tedaga"],["tus","Tuscarora"],["tut","Altaic languages"],["tuu","Tututni"],["tuv","Turkana"],["tuw","Tungus languages"],["tux","Tuxináwa"],["tuy","Tugen"],["tuz","Turka"],["tva","Vaghua"],["tvd","Tsuvadi"],["tve","Te'un"],["tvk","Southeast Ambrym"],["tvl","Tuvalu"],["tvm","Tela-Masbuar"],["tvn","Tavoyan"],["tvo","Tidore"],["tvs","Taveta"],["tvt","Tutsa Naga"],["tvu","Tunen"],["tvw","Sedoa"],["tvx","Taivoan"],["tvy","Timor Pidgin"],["twa","Twana"],["twb","Western Tawbuid"],["twc","Teshenawa"],["twd","Twents"],["twe","Tewa (Indonesia)"],["twf","Northern Tiwa"],["twg","Tereweng"],["twh","Tai Dón"],["twl","Tawara"],["twm","Tawang Monpa"],["twn","Twendi"],["two","Tswapong"],["twp","Ere"],["twq","Tasawaq"],["twr","Southwestern Tarahumara"],["twt","Turiwára"],["twu","Termanu"],["tww","Tuwari"],["twx","Tewe"],["twy","Tawoyan"],["txa","Tombonuo"],["txb","Tokharian B"],["txc","Tsetsaut"],["txe","Totoli"],["txg","Tangut"],["txh","Thracian"],["txi","Ikpeng"],["txj","Tarjumo"],["txm","Tomini"],["txn","West Tarangan"],["txo","Toto"],["txq","Tii"],["txr","Tartessian"],["txs","Tonsea"],["txt","Citak"],["txu","Kayapó"],["txx","Tatana"],["txy","Tanosy Malagasy"],["tya","Tauya"],["tye","Kyanga"],["tyh","O'du"],["tyi","Teke-Tsaayi"],["tyj","Tai Do, Tai Yo"],["tyl","Thu Lao"],["tyn","Kombai"],["typ","Thaypan"],["tyr","Tai Daeng"],["tys","Tày Sa Pa"],["tyt","Tày Tac"],["tyu","Kua"],["tyv","Tuvinian"],["tyx","Teke-Tyee"],["tyy","Tiyaa"],["tyz","Tày"],["tza","Tanzanian Sign Language"],["tzh","Tzeltal"],["tzj","Tz'utujil"],["tzl","Talossan"],["tzm","Central Atlas Tamazight"],["tzn","Tugun"],["tzo","Tzotzil"],["tzx","Tabriak"],["uam","Uamué"],["uan","Kuan"],["uar","Tairuma"],["uba","Ubang"],["ubi","Ubi"],["ubl","Buhi'non Bikol"],["ubr","Ubir"],["ubu","Umbu-Ungu"],["uby","Ubykh"],["uda","Uda"],["ude","Udihe"],["udg","Muduga"],["udi","Udi"],["udj","Ujir"],["udl","Wuzlam"],["udm","Udmurt"],["udu","Uduk"],["ues","Kioko"],["ufi","Ufim"],["uga","Ugaritic"],["ugb","Kuku-Ugbanh"],["uge","Ughele"],["ugn","Ugandan Sign Language"],["ugo","Ugong"],["ugy","Uruguayan Sign Language"],["uha","Uhami"],["uhn","Damal"],["uis","Uisai"],["uiv","Iyive"],["uji","Tanjijili"],["uka","Kaburi"],["ukg","Ukuriguma"],["ukh","Ukhwejo"],["uki","Kui (India)"],["ukk","Muak Sa-aak"],["ukl","Ukrainian Sign Language"],["ukp","Ukpe-Bayobiri"],["ukq","Ukwa"],["uks","Urubú-Kaapor Sign Language, Kaapor Sign Language"],["uku","Ukue"],["ukv","Kuku"],["ukw","Ukwuani-Aboh-Ndoni"],["uky","Kuuk-Yak"],["ula","Fungwa"],["ulb","Ulukwumi"],["ulc","Ulch"],["ule","Lule"],["ulf","Usku, Afra"],["uli","Ulithian"],["ulk","Meriam Mir"],["ull","Ullatan"],["ulm","Ulumanda'"],["uln","Unserdeutsch"],["ulu","Uma' Lung"],["ulw","Ulwa"],["uma","Umatilla"],["umb","Umbundu"],["umc","Marrucinian"],["umd","Umbindhamu"],["umg","Morrobalama, Umbuygamu"],["umi","Ukit"],["umm","Umon"],["umn","Makyan Naga"],["umo","Umotína"],["ump","Umpila"],["umr","Umbugarla"],["ums","Pendau"],["umu","Munsee"],["una","North Watut"],["und","Undetermined"],["une","Uneme"],["ung","Ngarinyin"],["uni","Uni"],["unk","Enawené-Nawé"],["unm","Unami"],["unn","Kurnai"],["unp","Worora"],["unr","Mundari"],["unu","Unubahe"],["unx","Munda"],["unz","Unde Kaili"],["uok","Uokha"],["upi","Umeda"],["upv","Uripiv-Wala-Rano-Atchin"],["ura","Urarina"],["urb","Urubú-Kaapor, Kaapor"],["urc","Urningangg"],["ure","Uru"],["urf","Uradhi"],["urg","Urigina"],["urh","Urhobo"],["uri","Urim"],["urj","Uralic languages"],["urk","Urak Lawoi'"],["url","Urali"],["urm","Urapmin"],["urn","Uruangnirin"],["uro","Ura (Papua New Guinea)"],["urp","Uru-Pa-In"],["urr","Lehalurup, Löyöp"],["urt","Urat"],["uru","Urumi"],["urv","Uruava"],["urw","Sop"],["urx","Urimo"],["ury","Orya"],["urz","Uru-Eu-Wau-Wau"],["usa","Usarufa"],["ush","Ushojo"],["usi","Usui"],["usk","Usaghade"],["usp","Uspanteco"],["uss","us-Saare"],["usu","Uya"],["uta","Otank"],["ute","Ute-Southern Paiute"],["uth","ut-Hun"],["utp","Amba (Solomon Islands)"],["utr","Etulo"],["utu","Utu"],["uum","Urum"],["uun","Kulon-Pazeh"],["uur","Ura (Vanuatu)"],["uuu","U"],["uve","West Uvean, Fagauvea"],["uvh","Uri"],["uvl","Lote"],["uwa","Kuku-Uwanh"],["uya","Doko-Uyanga"],["uzn","Northern Uzbek"],["uzs","Southern Uzbek"],["vaa","Vaagri Booli"],["vae","Vale"],["vaf","Vafsi"],["vag","Vagla"],["vah","Varhadi-Nagpuri"],["vai","Vai"],["vaj","Sekele, Northwestern ǃKung, Vasekele"],["val","Vehes"],["vam","Vanimo"],["van","Valman"],["vao","Vao"],["vap","Vaiphei"],["var","Huarijio"],["vas","Vasavi"],["vau","Vanuma"],["vav","Varli"],["vay","Wayu"],["vbb","Southeast Babar"],["vbk","Southwestern Bontok"],["vec","Venetian"],["ved","Veddah"],["vel","Veluws"],["vem","Vemgo-Mabas"],["veo","Ventureño"],["vep","Veps"],["ver","Mom Jango"],["vgr","Vaghri"],["vgt","Vlaamse Gebarentaal, Flemish Sign Language"],["vic","Virgin Islands Creole English"],["vid","Vidunda"],["vif","Vili"],["vig","Viemo"],["vil","Vilela"],["vin","Vinza"],["vis","Vishavan"],["vit","Viti"],["viv","Iduna"],["vka","Kariyarra"],["vki","Ija-Zuba"],["vkj","Kujarge"],["vkk","Kaur"],["vkl","Kulisusu"],["vkm","Kamakan"],["vkn","Koro Nulu"],["vko","Kodeoha"],["vkp","Korlai Creole Portuguese"],["vkt","Tenggarong Kutai Malay"],["vku","Kurrama"],["vkz","Koro Zuba"],["vlp","Valpei"],["vls","Vlaams"],["vma","Martuyhunira"],["vmb","Barbaram"],["vmc","Juxtlahuaca Mixtec"],["vmd","Mudu Koraga"],["vme","East Masela"],["vmf","Mainfränkisch"],["vmg","Lungalunga"],["vmh","Maraghei"],["vmi","Miwa"],["vmj","Ixtayutla Mixtec"],["vmk","Makhuwa-Shirima"],["vml","Malgana"],["vmm","Mitlatongo Mixtec"],["vmp","Soyaltepec Mazatec"],["vmq","Soyaltepec Mixtec"],["vmr","Marenje"],["vms","Moksela"],["vmu","Muluridyi"],["vmv","Valley Maidu"],["vmw","Makhuwa"],["vmx","Tamazola Mixtec"],["vmy","Ayautla Mazatec"],["vmz","Mazatlán Mazatec"],["vnk","Vano, Lovono"],["vnm","Vinmavis, Neve'ei"],["vnp","Vunapu"],["vor","Voro"],["vot","Votic"],["vra","Vera'a"],["vro","Võro"],["vrs","Varisi"],["vrt","Burmbar, Banam Bay"],["vsi","Moldova Sign Language"],["vsl","Venezuelan Sign Language"],["vsv","Valencian Sign Language, Llengua de signes valenciana"],["vto","Vitou"],["vum","Vumbu"],["vun","Vunjo"],["vut","Vute"],["vwa","Awa (China)"],["waa","Walla Walla"],["wab","Wab"],["wac","Wasco-Wishram"],["wad","Wamesa, Wondama"],["wae","Walser"],["waf","Wakoná"],["wag","Wa'ema"],["wah","Watubela"],["wai","Wares"],["waj","Waffa"],["wak","Wakashan languages"],["wal","Wolaytta, Wolaitta"],["wam","Wampanoag"],["wan","Wan"],["wao","Wappo"],["wap","Wapishana"],["waq","Wagiman"],["war","Waray (Philippines)"],["was","Washo"],["wat","Kaninuwa"],["wau","Waurá"],["wav","Waka"],["waw","Waiwai"],["wax","Watam, Marangis"],["way","Wayana"],["waz","Wampur"],["wba","Warao"],["wbb","Wabo"],["wbe","Waritai"],["wbf","Wara"],["wbh","Wanda"],["wbi","Vwanji"],["wbj","Alagwa"],["wbk","Waigali"],["wbl","Wakhi"],["wbm","Wa"],["wbp","Warlpiri"],["wbq","Waddar"],["wbr","Wagdi"],["wbs","West Bengal Sign Language"],["wbt","Warnman"],["wbv","Wajarri"],["wbw","Woi"],["wca","Yanomámi"],["wci","Waci Gbe"],["wdd","Wandji"],["wdg","Wadaginam"],["wdj","Wadjiginy"],["wdk","Wadikali"],["wdu","Wadjigu"],["wdy","Wadjabangayi"],["wea","Wewaw"],["wec","Wè Western"],["wed","Wedau"],["weg","Wergaia"],["weh","Weh"],["wei","Kiunum"],["wem","Weme Gbe"],["wen","Sorbian languages"],["weo","Wemale"],["wep","Westphalien"],["wer","Weri"],["wes","Cameroon Pidgin"],["wet","Perai"],["weu","Rawngtu Chin"],["wew","Wejewa"],["wfg","Yafi, Zorop"],["wga","Wagaya"],["wgb","Wagawaga"],["wgg","Wangkangurru, Wangganguru"],["wgi","Wahgi"],["wgo","Waigeo"],["wgu","Wirangu"],["wgw","Wagawaga"],["wgy","Warrgamay"],["wha","Sou Upaa, Manusela"],["whg","North Wahgi"],["whk","Wahau Kenyah"],["whu","Wahau Kayan"],["wib","Southern Toussian"],["wic","Wichita"],["wie","Wik-Epa"],["wif","Wik-Keyangan"],["wig","Wik Ngathan"],["wih","Wik-Me'anha"],["wii","Minidien"],["wij","Wik-Iiyanh"],["wik","Wikalkan"],["wil","Wilawila"],["wim","Wik-Mungkan"],["win","Ho-Chunk"],["wir","Wiraféd"],["wit","Wintu"],["wiu","Wiru"],["wiv","Vitu"],["wiw","Wirangu"],["wiy","Wiyot"],["wja","Waja"],["wji","Warji"],["wka","Kw'adza"],["wkb","Kumbaran"],["wkd","Wakde, Mo"],["wkl","Kalanadi"],["wkr","Keerray-Woorroong"],["wku","Kunduvadi"],["wkw","Wakawaka"],["wky","Wangkayutyuru"],["wla","Walio"],["wlc","Mwali Comorian"],["wle","Wolane"],["wlg","Kunbarlang"],["wlh","Welaun"],["wli","Waioli"],["wlk","Wailaki"],["wll","Wali (Sudan)"],["wlm","Middle Welsh"],["wlo","Wolio"],["wlr","Wailapa"],["wls","Wallisian"],["wlu","Wuliwuli"],["wlv","Wichí Lhamtés Vejoz"],["wlw","Walak"],["wlx","Wali (Ghana)"],["wly","Waling"],["wma","Mawa (Nigeria)"],["wmb","Wambaya"],["wmc","Wamas"],["wmd","Mamaindé"],["wme","Wambule"],["wmg","Western Minyag"],["wmh","Waima'a"],["wmi","Wamin"],["wmm","Maiwa (Indonesia)"],["wmn","Waamwang"],["wmo","Wom (Papua New Guinea)"],["wms","Wambon"],["wmt","Walmajarri"],["wmw","Mwani"],["wmx","Womo"],["wnb","Wanambre"],["wnc","Wantoat"],["wnd","Wandarang"],["wne","Waneci"],["wng","Wanggom"],["wni","Ndzwani Comorian"],["wnk","Wanukaka"],["wnm","Wanggamala"],["wnn","Wunumara"],["wno","Wano"],["wnp","Wanap"],["wnu","Usan"],["wnw","Wintu"],["wny","Wanyi, Waanyi"],["woa","Kuwema, Tyaraity"],["wob","Wè Northern"],["woc","Wogeo"],["wod","Wolani"],["woe","Woleaian"],["wof","Gambian Wolof"],["wog","Wogamusin"],["woi","Kamang"],["wok","Longto"],["wom","Wom (Nigeria)"],["won","Wongo"],["woo","Manombai"],["wor","Woria"],["wos","Hanga Hundi"],["wow","Wawonii"],["woy","Weyto"],["wpc","Maco"],["wra","Warapu"],["wrb","Waluwarra, Warluwara"],["wrd","Warduji"],["wrg","Warungu, Gudjal"],["wrh","Wiradjuri"],["wri","Wariyangga"],["wrk","Garrwa"],["wrl","Warlmanpa"],["wrm","Warumungu"],["wrn","Warnang"],["wro","Worrorra"],["wrp","Waropen"],["wrr","Wardaman"],["wrs","Waris"],["wru","Waru"],["wrv","Waruna"],["wrw","Gugu Warra"],["wrx","Wae Rana"],["wry","Merwari"],["wrz","Waray (Australia)"],["wsa","Warembori"],["wsg","Adilabad Gondi"],["wsi","Wusi"],["wsk","Waskia"],["wsr","Owenia"],["wss","Wasa"],["wsu","Wasu"],["wsv","Wotapuri-Katarqalai"],["wtf","Watiwa"],["wth","Wathawurrung"],["wti","Berta"],["wtk","Watakataui"],["wtm","Mewati"],["wtw","Wotu"],["wua","Wikngenchera"],["wub","Wunambal"],["wud","Wudu"],["wuh","Wutunhua"],["wul","Silimo"],["wum","Wumbvu"],["wun","Bungu"],["wur","Wurrugu"],["wut","Wutung"],["wuu","Wu Chinese"],["wuv","Wuvulu-Aua"],["wux","Wulna"],["wuy","Wauyai"],["wwa","Waama"],["wwb","Wakabunga"],["wwo","Wetamut, Dorig"],["wwr","Warrwa"],["www","Wawa"],["wxa","Waxianghua"],["wxw","Wardandi"],["wya","Wyandot"],["wyb","Wangaaybuwan-Ngiyambaa"],["wyi","Woiwurrung"],["wym","Wymysorys"],["wyr","Wayoró"],["wyy","Western Fijian"],["xaa","Andalusian Arabic"],["xab","Sambe"],["xac","Kachari"],["xad","Adai"],["xae","Aequian"],["xag","Aghwan"],["xai","Kaimbé"],["xaj","Ararandewára"],["xak","Máku"],["xal","Kalmyk, Oirat"],["xam","ǀXam"],["xan","Xamtanga"],["xao","Khao"],["xap","Apalachee"],["xaq","Aquitanian"],["xar","Karami"],["xas","Kamas"],["xat","Katawixi"],["xau","Kauwera"],["xav","Xavánte"],["xaw","Kawaiisu"],["xay","Kayan Mahakam"],["xba","Kamba (Brazil)"],["xbb","Lower Burdekin"],["xbc","Bactrian"],["xbd","Bindal"],["xbe","Bigambal"],["xbg","Bunganditj"],["xbi","Kombio"],["xbj","Birrpayi"],["xbm","Middle Breton"],["xbn","Kenaboi"],["xbo","Bolgarian"],["xbp","Bibbulman"],["xbr","Kambera"],["xbw","Kambiwá"],["xbx","Kabixí"],["xby","Batjala, Batyala"],["xcb","Cumbric"],["xcc","Camunic"],["xce","Celtiberian"],["xcg","Cisalpine Gaulish"],["xch","Chemakum, Chimakum"],["xcl","Classical Armenian"],["xcm","Comecrudo"],["xcn","Cotoname"],["xco","Chorasmian"],["xcr","Carian"],["xct","Classical Tibetan"],["xcu","Curonian"],["xcv","Chuvantsy"],["xcw","Coahuilteco"],["xcy","Cayuse"],["xda","Darkinyung"],["xdc","Dacian"],["xdk","Dharuk"],["xdm","Edomite"],["xdo","Kwandu"],["xdy","Malayic Dayak"],["xeb","Eblan"],["xed","Hdi"],["xeg","ǁXegwi"],["xel","Kelo"],["xem","Kembayan"],["xep","Epi-Olmec"],["xer","Xerénte"],["xes","Kesawai"],["xet","Xetá"],["xeu","Keoru-Ahia"],["xfa","Faliscan"],["xga","Galatian"],["xgb","Gbin"],["xgd","Gudang"],["xgf","Gabrielino-Fernandeño"],["xgg","Goreng"],["xgi","Garingbal"],["xgl","Galindan"],["xgm","Dharumbal, Guwinmal"],["xgn","Mongolian languages"],["xgr","Garza"],["xgu","Unggumi"],["xgw","Guwa"],["xha","Harami"],["xhc","Hunnic"],["xhd","Hadrami"],["xhe","Khetrani"],["xhr","Hernican"],["xht","Hattic"],["xhu","Hurrian"],["xhv","Khua"],["xia","Xiandao"],["xib","Iberian"],["xii","Xiri"],["xil","Illyrian"],["xin","Xinca"],["xip","Xipináwa"],["xir","Xiriâna"],["xis","Kisan"],["xiv","Indus Valley Language"],["xiy","Xipaya"],["xjb","Minjungbal"],["xjt","Jaitmatang"],["xka","Kalkoti"],["xkb","Northern Nago"],["xkc","Kho'ini"],["xkd","Mendalam Kayan"],["xke","Kereho"],["xkf","Khengkha"],["xkg","Kagoro"],["xkh","Karahawyana"],["xki","Kenyan Sign Language"],["xkj","Kajali"],["xkk","Kaco'"],["xkl","Mainstream Kenyah"],["xkn","Kayan River Kayan"],["xko","Kiorr"],["xkp","Kabatei"],["xkq","Koroni"],["xkr","Xakriabá"],["xks","Kumbewaha"],["xkt","Kantosi"],["xku","Kaamba"],["xkv","Kgalagadi"],["xkw","Kembra"],["xkx","Karore"],["xky","Uma' Lasan"],["xkz","Kurtokha"],["xla","Kamula"],["xlb","Loup B"],["xlc","Lycian"],["xld","Lydian"],["xle","Lemnian"],["xlg","Ligurian (Ancient)"],["xli","Liburnian"],["xln","Alanic"],["xlo","Loup A"],["xlp","Lepontic"],["xls","Lusitanian"],["xlu","Cuneiform Luwian"],["xly","Elymian"],["xma","Mushungulu"],["xmb","Mbonga"],["xmc","Makhuwa-Marrevone"],["xmd","Mbudum"],["xme","Median"],["xmf","Mingrelian"],["xmg","Mengaka"],["xmh","Kugu-Muminh"],["xmj","Majera"],["xmk","Ancient Macedonian"],["xml","Malaysian Sign Language"],["xmm","Manado Malay"],["xmn","Manichaean Middle Persian"],["xmo","Morerebi"],["xmp","Kuku-Mu'inh"],["xmq","Kuku-Mangk"],["xmr","Meroitic"],["xms","Moroccan Sign Language"],["xmt","Matbat"],["xmu","Kamu"],["xmv","Antankarana Malagasy, Tankarana Malagasy"],["xmw","Tsimihety Malagasy"],["xmx","Maden"],["xmy","Mayaguduna"],["xmz","Mori Bawah"],["xna","Ancient North Arabian"],["xnb","Kanakanabu"],["xnd","Na-Dene languages"],["xng","Middle Mongolian"],["xnh","Kuanhua"],["xni","Ngarigu"],["xnj","Ngoni (Tanzania)"],["xnk","Nganakarti"],["xnm","Ngumbarl"],["xnn","Northern Kankanay"],["xno","Anglo-Norman"],["xnq","Ngoni (Mozambique)"],["xnr","Kangri"],["xns","Kanashi"],["xnt","Narragansett"],["xnu","Nukunul"],["xny","Nyiyaparli"],["xnz","Kenzi, Mattoki"],["xoc","O'chi'chi'"],["xod","Kokoda"],["xog","Soga"],["xoi","Kominimung"],["xok","Xokleng"],["xom","Komo (Sudan)"],["xon","Konkomba"],["xoo","Xukurú"],["xop","Kopar"],["xor","Korubo"],["xow","Kowaki"],["xpa","Pirriya"],["xpb","Northeastern Tasmanian, Pyemmairrener"],["xpc","Pecheneg"],["xpd","Oyster Bay Tasmanian"],["xpe","Liberia Kpelle"],["xpf","Southeast Tasmanian, Nuenonne"],["xpg","Phrygian"],["xph","North Midlands Tasmanian, Tyerrenoterpanner"],["xpi","Pictish"],["xpj","Mpalitjanh"],["xpk","Kulina Pano"],["xpl","Port Sorell Tasmanian"],["xpm","Pumpokol"],["xpn","Kapinawá"],["xpo","Pochutec"],["xpp","Puyo-Paekche"],["xpq","Mohegan-Pequot"],["xpr","Parthian"],["xps","Pisidian"],["xpt","Punthamara"],["xpu","Punic"],["xpv","Northern Tasmanian, Tommeginne"],["xpw","Northwestern Tasmanian, Peerapper"],["xpx","Southwestern Tasmanian, Toogee"],["xpy","Puyo"],["xpz","Bruny Island Tasmanian"],["xqa","Karakhanid"],["xqt","Qatabanian"],["xra","Krahô"],["xrb","Eastern Karaboro"],["xrd","Gundungurra"],["xre","Kreye"],["xrg","Minang"],["xri","Krikati-Timbira"],["xrm","Armazic"],["xrn","Arin"],["xrq","Karranga"],["xrr","Raetic"],["xrt","Aranama-Tamique"],["xru","Marriammu"],["xrw","Karawa"],["xsa","Sabaean"],["xsb","Sambal"],["xsc","Scythian"],["xsd","Sidetic"],["xse","Sempan"],["xsh","Shamang"],["xsi","Sio"],["xsj","Subi"],["xsl","South Slavey"],["xsm","Kasem"],["xsn","Sanga (Nigeria)"],["xso","Solano"],["xsp","Silopi"],["xsq","Makhuwa-Saka"],["xsr","Sherpa"],["xss","Assan"],["xsu","Sanumá"],["xsv","Sudovian"],["xsy","Saisiyat"],["xta","Alcozauca Mixtec"],["xtb","Chazumba Mixtec"],["xtc","Katcha-Kadugli-Miri"],["xtd","Diuxi-Tilantongo Mixtec"],["xte","Ketengban"],["xtg","Transalpine Gaulish"],["xth","Yitha Yitha"],["xti","Sinicahua Mixtec"],["xtj","San Juan Teita Mixtec"],["xtl","Tijaltepec Mixtec"],["xtm","Magdalena Peñasco Mixtec"],["xtn","Northern Tlaxiaco Mixtec"],["xto","Tokharian A"],["xtp","San Miguel Piedras Mixtec"],["xtq","Tumshuqese"],["xtr","Early Tripuri"],["xts","Sindihui Mixtec"],["xtt","Tacahua Mixtec"],["xtu","Cuyamecalco Mixtec"],["xtv","Thawa"],["xtw","Tawandê"],["xty","Yoloxochitl Mixtec"],["xtz","Tasmanian"],["xua","Alu Kurumba"],["xub","Betta Kurumba"],["xud","Umiida"],["xug","Kunigami"],["xuj","Jennu Kurumba"],["xul","Ngunawal, Nunukul"],["xum","Umbrian"],["xun","Unggaranggu"],["xuo","Kuo"],["xup","Upper Umpqua"],["xur","Urartian"],["xut","Kuthant"],["xuu","Kxoe, Khwedam"],["xve","Venetic"],["xvi","Kamviri"],["xvn","Vandalic"],["xvo","Volscian"],["xvs","Vestinian"],["xwa","Kwaza"],["xwc","Woccon"],["xwd","Wadi Wadi"],["xwe","Xwela Gbe"],["xwg","Kwegu"],["xwj","Wajuk"],["xwk","Wangkumara"],["xwl","Western Xwla Gbe"],["xwo","Written Oirat"],["xwr","Kwerba Mamberamo"],["xwt","Wotjobaluk"],["xww","Wemba Wemba"],["xxb","Boro (Ghana)"],["xxk","Ke'o"],["xxm","Minkin"],["xxr","Koropó"],["xxt","Tambora"],["xya","Yaygir"],["xyb","Yandjibara"],["xyj","Mayi-Yapi"],["xyk","Mayi-Kulan"],["xyl","Yalakalore"],["xyt","Mayi-Thakurti"],["xyy","Yorta Yorta"],["xzh","Zhang-Zhung"],["xzm","Zemgalian"],["xzp","Ancient Zapotec"],["yaa","Yaminahua"],["yab","Yuhup"],["yac","Pass Valley Yali"],["yad","Yagua"],["yae","Pumé"],["yaf","Yaka (Democratic Republic of Congo)"],["yag","Yámana"],["yah","Yazgulyam"],["yai","Yagnobi"],["yaj","Banda-Yangere"],["yak","Yakama"],["yal","Yalunka"],["yam","Yamba"],["yan","Mayangna"],["yao","Yao"],["yap","Yapese"],["yaq","Yaqui"],["yar","Yabarana"],["yas","Nugunu (Cameroon)"],["yat","Yambeta"],["yau","Yuwana"],["yav","Yangben"],["yaw","Yawalapití"],["yax","Yauma"],["yay","Agwagwune"],["yaz","Lokaa"],["yba","Yala"],["ybb","Yemba"],["ybd","Yangbye"],["ybe","West Yugur"],["ybh","Yakha"],["ybi","Yamphu"],["ybj","Hasha"],["ybk","Bokha"],["ybl","Yukuben"],["ybm","Yaben"],["ybn","Yabaâna"],["ybo","Yabong"],["ybx","Yawiyo"],["yby","Yaweyuha"],["ych","Chesu"],["ycl","Lolopo"],["ycn","Yucuna"],["ycp","Chepya"],["yda","Yanda"],["ydd","Eastern Yiddish"],["yde","Yangum Dey"],["ydg","Yidgha"],["ydk","Yoidik"],["yds","Yiddish Sign Language"],["yea","Ravula"],["yec","Yeniche"],["yee","Yimas"],["yei","Yeni"],["yej","Yevanic"],["yel","Yela"],["yen","Yendang"],["yer","Tarok"],["yes","Nyankpa"],["yet","Yetfa"],["yeu","Yerukula"],["yev","Yapunda"],["yey","Yeyi"],["yga","Malyangapa"],["ygi","Yiningayi"],["ygl","Yangum Gel"],["ygm","Yagomi"],["ygp","Gepo"],["ygr","Yagaria"],["ygs","Yolŋu Sign Language"],["ygu","Yugul"],["ygw","Yagwoia"],["yha","Baha Buyang"],["yhd","Judeo-Iraqi Arabic"],["yhl","Hlepho Phowa"],["yhs","Yan-nhaŋu Sign Language"],["yia","Yinggarda"],["yif","Ache"],["yig","Wusa Nasu"],["yih","Western Yiddish"],["yii","Yidiny"],["yij","Yindjibarndi"],["yik","Dongshanba Lalo"],["yil","Yindjilandji"],["yim","Yimchungru Naga"],["yin","Riang Lai, Yinchia"],["yip","Pholo"],["yiq","Miqie"],["yir","North Awyu"],["yis","Yis"],["yit","Eastern Lalu"],["yiu","Awu"],["yiv","Northern Nisu"],["yix","Axi Yi"],["yiy","Yir Yoront"],["yiz","Azhe"],["yka","Yakan"],["ykg","Northern Yukaghir"],["yki","Yoke"],["ykk","Yakaikeke"],["ykl","Khlula"],["ykm","Kap"],["ykn","Kua-nsi"],["yko","Yasa"],["ykr","Yekora"],["ykt","Kathu"],["yku","Kuamasi"],["yky","Yakoma"],["yla","Yaul"],["ylb","Yaleba"],["yle","Yele"],["ylg","Yelogu"],["yli","Angguruk Yali"],["yll","Yil"],["ylm","Limi"],["yln","Langnian Buyang"],["ylo","Naluo Yi"],["ylr","Yalarnnga"],["ylu","Aribwaung"],["yly","Nyâlayu, Nyelâyu"],["yma","Yamphe"],["ymb","Yambes"],["ymc","Southern Muji"],["ymd","Muda"],["yme","Yameo"],["ymg","Yamongeri"],["ymh","Mili"],["ymi","Moji"],["ymk","Makwe"],["yml","Iamalele"],["ymm","Maay"],["ymn","Yamna, Sunum"],["ymo","Yangum Mon"],["ymp","Yamap"],["ymq","Qila Muji"],["ymr","Malasar"],["yms","Mysian"],["ymt","Mator-Taygi-Karagas"],["ymx","Northern Muji"],["ymz","Muzi"],["yna","Aluo"],["ynd","Yandruwandha"],["yne","Lang'e"],["yng","Yango"],["ynh","Yangho"],["ynk","Naukan Yupik"],["ynl","Yangulam"],["ynn","Yana"],["yno","Yong"],["ynq","Yendang"],["yns","Yansi"],["ynu","Yahuna"],["yob","Yoba"],["yog","Yogad"],["yoi","Yonaguni"],["yok","Yokuts"],["yol","Yola"],["yom","Yombe"],["yon","Yongkom"],["yos","Yos"],["yot","Yotti"],["yox","Yoron"],["yoy","Yoy"],["ypa","Phala"],["ypb","Labo Phowa"],["ypg","Phola"],["yph","Phupha"],["ypk","Yupik languages"],["ypm","Phuma"],["ypn","Ani Phowa"],["ypo","Alo Phola"],["ypp","Phupa"],["ypz","Phuza"],["yra","Yerakai"],["yrb","Yareba"],["yre","Yaouré"],["yri","Yarí"],["yrk","Nenets"],["yrl","Nhengatu"],["yrm","Yirrk-Mel"],["yrn","Yerong"],["yro","Yaroamë"],["yrs","Yarsun"],["yrw","Yarawata"],["yry","Yarluyandi"],["ysc","Yassic"],["ysd","Samatao"],["ysg","Sonaga"],["ysl","Yugoslavian Sign Language"],["ysm","Myanmar Sign Language"],["ysn","Sani"],["yso","Nisi (China)"],["ysp","Southern Lolopo"],["ysr","Sirenik Yupik"],["yss","Yessan-Mayo"],["ysy","Sanie"],["yta","Talu"],["ytl","Tanglang"],["ytp","Thopho"],["ytw","Yout Wam"],["yty","Yatay"],["yua","Yucateco, Yucatec Maya"],["yub","Yugambal"],["yuc","Yuchi"],["yud","Judeo-Tripolitanian Arabic"],["yue","Yue Chinese, Cantonese"],["yuf","Havasupai-Walapai-Yavapai"],["yug","Yug"],["yui","Yurutí"],["yuj","Karkar-Yuri"],["yuk","Yuki"],["yul","Yulu"],["yum","Quechan"],["yun","Bena (Nigeria)"],["yup","Yukpa"],["yuq","Yuqui"],["yur","Yurok"],["yut","Yopno"],["yuu","Yugh"],["yuw","Yau (Morobe Province)"],["yux","Southern Yukaghir"],["yuy","East Yugur"],["yuz","Yuracare"],["yva","Yawa"],["yvt","Yavitero"],["ywa","Kalou"],["ywg","Yinhawangka"],["ywl","Western Lalu"],["ywn","Yawanawa"],["ywq","Wuding-Luquan Yi"],["ywr","Yawuru"],["ywt","Xishanba Lalo, Central Lalo"],["ywu","Wumeng Nasu"],["yww","Yawarawarga"],["yxa","Mayawali"],["yxg","Yagara"],["yxl","Yardliyawarra"],["yxm","Yinwum"],["yxu","Yuyu"],["yxy","Yabula Yabula"],["yyr","Yir Yoront"],["yyu","Yau (Sandaun Province)"],["yyz","Ayizi"],["yzg","E'ma Buyang"],["yzk","Zokhuo"],["zaa","Sierra de Juárez Zapotec"],["zab","Western Tlacolula Valley Zapotec, San Juan Guelavía Zapotec"],["zac","Ocotlán Zapotec"],["zad","Cajonos Zapotec"],["zae","Yareni Zapotec"],["zaf","Ayoquesco Zapotec"],["zag","Zaghawa"],["zah","Zangwal"],["zai","Isthmus Zapotec"],["zaj","Zaramo"],["zak","Zanaki"],["zal","Zauzou"],["zam","Miahuatlán Zapotec"],["zao","Ozolotepec Zapotec"],["zap","Zapotec"],["zaq","Aloápam Zapotec"],["zar","Rincón Zapotec"],["zas","Santo Domingo Albarradas Zapotec"],["zat","Tabaa Zapotec"],["zau","Zangskari"],["zav","Yatzachi Zapotec"],["zaw","Mitla Zapotec"],["zax","Xadani Zapotec"],["zay","Zayse-Zergulla, Zaysete"],["zaz","Zari"],["zba","Balaibalan"],["zbc","Central Berawan"],["zbe","East Berawan"],["zbl","Blissymbols, Bliss, Blissymbolics"],["zbt","Batui"],["zbu","Bu (Bauchi State)"],["zbw","West Berawan"],["zca","Coatecas Altas Zapotec"],["zch","Central Hongshuihe Zhuang"],["zdj","Ngazidja Comorian"],["zea","Zeeuws"],["zeg","Zenag"],["zeh","Eastern Hongshuihe Zhuang"],["zen","Zenaga"],["zga","Kinga"],["zgb","Guibei Zhuang"],["zgh","Standard Moroccan Tamazight"],["zgm","Minz Zhuang"],["zgn","Guibian Zhuang"],["zgr","Magori"],["zhb","Zhaba"],["zhd","Dai Zhuang"],["zhi","Zhire"],["zhn","Nong Zhuang"],["zhw","Zhoa"],["zhx","Chinese (family)"],["zia","Zia"],["zib","Zimbabwe Sign Language"],["zik","Zimakani"],["zil","Zialo"],["zim","Mesme"],["zin","Zinza"],["zir","Ziriya"],["ziw","Zigula"],["ziz","Zizilivakan"],["zka","Kaimbulawa"],["zkb","Koibal"],["zkd","Kadu"],["zkg","Koguryo"],["zkh","Khorezmian"],["zkk","Karankawa"],["zkn","Kanan"],["zko","Kott"],["zkp","São Paulo Kaingáng"],["zkr","Zakhring"],["zkt","Kitan"],["zku","Kaurna"],["zkv","Krevinian"],["zkz","Khazar"],["zla","Zula"],["zle","East Slavic languages"],["zlj","Liujiang Zhuang"],["zlm","Malay (individual language)"],["zln","Lianshan Zhuang"],["zlq","Liuqian Zhuang"],["zls","South Slavic languages"],["zlw","West Slavic languages"],["zma","Manda (Australia)"],["zmb","Zimba"],["zmc","Margany"],["zmd","Maridan"],["zme","Mangerr"],["zmf","Mfinu"],["zmg","Marti Ke"],["zmh","Makolkol"],["zmi","Negeri Sembilan Malay"],["zmj","Maridjabin"],["zmk","Mandandanyi"],["zml","Matngala"],["zmm","Marimanindji, Marramaninyshi"],["zmn","Mbangwe"],["zmo","Molo"],["zmp","Mpuono"],["zmq","Mituku"],["zmr","Maranunggu"],["zms","Mbesa"],["zmt","Maringarr"],["zmu","Muruwari"],["zmv","Mbariman-Gudhinma"],["zmw","Mbo (Democratic Republic of Congo)"],["zmx","Bomitaba"],["zmy","Mariyedi"],["zmz","Mbandja"],["zna","Zan Gula"],["znd","Zande languages"],["zne","Zande (individual language)"],["zng","Mang"],["znk","Manangkari"],["zns","Mangas"],["zoc","Copainalá Zoque"],["zoh","Chimalapa Zoque"],["zom","Zou"],["zoo","Asunción Mixtepec Zapotec"],["zoq","Tabasco Zoque"],["zor","Rayón Zoque"],["zos","Francisco León Zoque"],["zpa","Lachiguiri Zapotec"],["zpb","Yautepec Zapotec"],["zpc","Choapan Zapotec"],["zpd","Southeastern Ixtlán Zapotec"],["zpe","Petapa Zapotec"],["zpf","San Pedro Quiatoni Zapotec"],["zpg","Guevea De Humboldt Zapotec"],["zph","Totomachapan Zapotec"],["zpi","Santa María Quiegolani Zapotec"],["zpj","Quiavicuzas Zapotec"],["zpk","Tlacolulita Zapotec"],["zpl","Lachixío Zapotec"],["zpm","Mixtepec Zapotec"],["zpn","Santa Inés Yatzechi Zapotec"],["zpo","Amatlán Zapotec"],["zpp","El Alto Zapotec"],["zpq","Zoogocho Zapotec"],["zpr","Santiago Xanica Zapotec"],["zps","Coatlán Zapotec"],["zpt","San Vicente Coatlán Zapotec"],["zpu","Yalálag Zapotec"],["zpv","Chichicapan Zapotec"],["zpw","Zaniza Zapotec"],["zpx","San Baltazar Loxicha Zapotec"],["zpy","Mazaltepec Zapotec"],["zpz","Texmelucan Zapotec"],["zqe","Qiubei Zhuang"],["zra","Kara (Korea)"],["zrg","Mirgan"],["zrn","Zerenkel"],["zro","Záparo"],["zrp","Zarphatic"],["zrs","Mairasi"],["zsa","Sarasira"],["zsk","Kaskean"],["zsl","Zambian Sign Language"],["zsm","Standard Malay"],["zsr","Southern Rincon Zapotec"],["zsu","Sukurum"],["zte","Elotepec Zapotec"],["ztg","Xanaguía Zapotec"],["ztl","Lapaguía-Guivini Zapotec"],["ztm","San Agustín Mixtepec Zapotec"],["ztn","Santa Catarina Albarradas Zapotec"],["ztp","Loxicha Zapotec"],["ztq","Quioquitani-Quierí Zapotec"],["zts","Tilquiapan Zapotec"],["ztt","Tejalapan Zapotec"],["ztu","Güilá Zapotec"],["ztx","Zaachila Zapotec"],["zty","Yatee Zapotec"],["zua","Zeem"],["zuh","Tokano"],["zum","Kumzari"],["zun","Zuni"],["zuy","Zumaya"],["zwa","Zay"],["zxx","No linguistic content, Not applicable"],["zyb","Yongbei Zhuang"],["zyg","Yang Zhuang"],["zyj","Youjiang Zhuang"],["zyn","Yongnan Zhuang"],["zyp","Zyphe Chin"],["zza","Zaza, Dimili, Dimli (macrolanguage), Kirdki, Kirmanjki (macrolanguage), Zazaki"],["zzj","Zuojiang Zhuang"]];

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

const {isArray} = Array;

const sync = (values, i) => {
  const resolved = [];
  for (const {length} = values; i < length; i++)
    resolved.push(isArray(values[i]) ? sync(values[i], 0) : values[i]);
  return Promise.all(resolved);
};

/**
 * Returns a template literal tag abe to resolve, recursively, any possible
 * asynchronous interpolation.
 * @param {function} tag a template literal tag.
 * @returns {function} a template literal tag that resolves interpolations
 *                     before passing these to the initial template literal.
 */
var cjs = tag => {
  function invoke(template, values) {
    return tag.apply(this, [template].concat(values));
  }
  return function (template) {
    return sync(arguments, 1).then(invoke.bind(this, template));
  };
};

const {defineProperties} = Object;

const tag = original => {
  const wrap = cjs$5(new WeakMap);
  return defineProperties(
    cjs(original),
    {
      for: {
        value(ref, id) {
          const tag = original.for(ref, id);
          return wrap.get(tag) || wrap.set(tag, cjs(tag));
        }
      },
      node: {
        value: cjs(original.node)
      }
    }
  );
};

const html = tag(html$1);
tag(svg);

const render = (where, what) => {
  const hole = typeof what === 'function' ? what() : what;
  return Promise.resolve(hole).then(what => render$1(where, what));
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
            const RdfFormCss = '';
            const OnlyDisplay = '';
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

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
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

function makeIconStandard (_ref) {
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

function asIcon (_ref) {
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

function asSymbol (_ref) {
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
  var hasRegular = 'far' in styles;
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
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
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

function css () {
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

var Library =
/*#__PURE__*/
function () {
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
      return val.abstract.map(function (a) {
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
