(function(){function e(a){throw a;}var h=void 0,j=!0,k=null,n=!1;function p(a){return function(){return this[a]}}function q(a){return function(){return a}}var s,t=this;function u(a){a.F=function(){return a.pb||(a.pb=new a)}}
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){return"array"==aa(a)}function ba(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function w(a){return"string"==typeof a}function x(a){return"function"==aa(a)}function ca(a){var b=typeof a;return"object"==b&&a!=k||"function"==b}function y(a){return a[da]||(a[da]=++ea)}var da="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ea=0;
function fa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function A(a,b){function c(){}c.prototype=b.prototype;a.e=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ga(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function ha(a){if(!ia.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(la,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ma,"&quot;"));return a}var ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,ia=/[&<>\"]/;var B=Array.prototype,na=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(w(a))return!w(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=w(a)?a.split(""):a,f=0;f<d;f++)f in g&&b.call(c,g[f],f,a)};function oa(a){for(var b=pa,c=w(b)?b.split(""):b,d=b.length-1;0<=d;--d)d in c&&a.call(h,c[d],d,b)}
function qa(a){var b=pa;if(b.reduce)return b.reduce(a,0);var c=0;C(b,function(d,g){c=a.call(h,c,d,g,b)});return c}var ra=B.every?function(a,b,c){return B.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=w(a)?a.split(""):a,f=0;f<d;f++)if(f in g&&!b.call(c,g[f],f,a))return n;return j};function sa(a,b){return 0<=na(a,b)}function D(a,b){var c=na(a,b);0<=c&&B.splice.call(a,c,1)}function ta(a){return B.concat.apply(B,arguments)}
function ua(a){if(v(a))return ta(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function va(a,b,c,d){B.splice.apply(a,wa(arguments,1))}function wa(a,b,c){return 2>=arguments.length?B.slice.call(a,b):B.slice.call(a,b,c)};var xa,ya,za,Aa;function Ba(){return t.navigator?t.navigator.userAgent:k}Aa=za=ya=xa=n;var Ca;if(Ca=Ba()){var Da=t.navigator;xa=0==Ca.indexOf("Opera");ya=!xa&&-1!=Ca.indexOf("MSIE");za=!xa&&-1!=Ca.indexOf("WebKit");Aa=!xa&&!za&&"Gecko"==Da.product}var Ea=xa,E=ya,F=Aa,G=za,Fa=t.navigator,Ga=-1!=(Fa&&Fa.platform||"").indexOf("Mac"),Ha;
a:{var Ja="",Ka;if(Ea&&t.opera)var La=t.opera.version,Ja="function"==typeof La?La():La;else if(F?Ka=/rv\:([^\);]+)(\)|;)/:E?Ka=/MSIE\s+([^\);]+)(\)|;)/:G&&(Ka=/WebKit\/(\S+)/),Ka)var Ma=Ka.exec(Ba()),Ja=Ma?Ma[1]:"";if(E){var Na,Oa=t.document;Na=Oa?Oa.documentMode:h;if(Na>parseFloat(Ja)){Ha=""+Na;break a}}Ha=Ja}var Pa={};
function H(a){var b;if(!(b=Pa[a])){b=0;for(var c=ga(""+Ha).split("."),d=ga(""+a).split("."),g=Math.max(c.length,d.length),f=0;0==b&&f<g;f++){var i=c[f]||"",l=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),o=RegExp("(\\d*)(\\D*)","g");do{var z=m.exec(i)||["","",""],r=o.exec(l)||["","",""];if(0==z[0].length&&0==r[0].length)break;b=((0==z[1].length?0:parseInt(z[1],10))<(0==r[1].length?0:parseInt(r[1],10))?-1:(0==z[1].length?0:parseInt(z[1],10))>(0==r[1].length?0:parseInt(r[1],10))?1:0)||((0==z[2].length)<(0==
r[2].length)?-1:(0==z[2].length)>(0==r[2].length)?1:0)||(z[2]<r[2]?-1:z[2]>r[2]?1:0)}while(0==b)}b=Pa[a]=0<=b}return b}var Qa={};function Ra(){return Qa[9]||(Qa[9]=E&&!!document.documentMode&&9<=document.documentMode)};function Sa(a,b,c,d,g){if(!E&&(!G||!H("525")))return j;if(Ga&&g)return Ta(a);if(g&&!d||!c&&(17==b||18==b)||E&&d&&b==a)return n;switch(a){case 13:return!(E&&Ra());case 27:return!G}return Ta(a)}function Ta(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||G&&0==a)return j;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return j;default:return n}};var Ua,Va=!E||Ra();!F&&!E||E&&Ra()||F&&H("1.9.1");E&&H("9");function Wa(a){return(a=a.className)&&"function"==typeof a.split?a.split(/\s+/):[]}function Xa(a,b){var c=Wa(a),d=wa(arguments,1),g;g=c;for(var f=0,i=0;i<d.length;i++)sa(g,d[i])||(g.push(d[i]),f++);g=f==d.length;a.className=c.join(" ");return g}function Ya(a,b){var c=Wa(a),d=wa(arguments,1),g;g=c;for(var f=0,i=0;i<g.length;i++)sa(d,g[i])&&(va(g,i--,1),f++);g=f==d.length;a.className=c.join(" ");return g};function Za(a,b){for(var c in a)b.call(h,a[c],c,a)}function $a(a,b,c){b in a&&e(Error('The object already contains the key "'+b+'"'));a[b]=c}var ab="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function bb(a,b){for(var c,d,g=1;g<arguments.length;g++){d=arguments[g];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function cb(a){return a?new db(eb(a)):Ua||(Ua=new db)}function fb(a,b){Za(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in gb?a.setAttribute(gb[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})}var gb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function hb(a,b,c){function d(c){c&&b.appendChild(w(c)?a.createTextNode(c):c)}for(var g=2;g<c.length;g++){var f=c[g];ba(f)&&!(ca(f)&&0<f.nodeType)?C(ib(f)?ua(f):f,d):d(f)}}function jb(a){var b=document,c=b.createElement("div");E?(c.innerHTML="<br>"+a,c.removeChild(c.firstChild)):c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(a=b.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);return a}function kb(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function lb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function mb(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function eb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function nb(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else kb(a),a.appendChild(eb(a).createTextNode(b))}function ob(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?(a=a.tabIndex,"number"==typeof a&&0<=a&&32768>a):n}
function ib(a){if(a&&"number"==typeof a.length){if(ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(x(a))return"function"==typeof a.item}return n}function db(a){this.A=a||t.document||document}s=db.prototype;s.ua=cb;s.a=function(a){return w(a)?this.A.getElementById(a):a};
s.i=function(a,b,c){var d=this.A,g=arguments,f=g[0],i=g[1];if(!Va&&i&&(i.name||i.type)){f=["<",f];i.name&&f.push(' name="',ha(i.name),'"');if(i.type){f.push(' type="',ha(i.type),'"');var l={};bb(l,i);i=l;delete i.type}f.push(">");f=f.join("")}f=d.createElement(f);i&&(w(i)?f.className=i:v(i)?Xa.apply(k,[f].concat(i)):fb(f,i));2<g.length&&hb(d,f,g);return f};s.createElement=function(a){return this.A.createElement(a)};s.createTextNode=function(a){return this.A.createTextNode(a)};
s.appendChild=function(a,b){a.appendChild(b)};s.contains=mb;function pb(){}pb.prototype.Ha=n;pb.prototype.I=function(){this.Ha||(this.Ha=j,this.k())};pb.prototype.k=function(){this.eb&&qb.apply(k,this.eb)};function qb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ba(d)?qb.apply(k,d):d&&"function"==typeof d.I&&d.I()}};var rb=!E||Ra(),sb=!E||Ra(),tb=E&&!H("8");!G||H("528");F&&H("1.9b")||E&&H("8")||Ea&&H("9.5")||G&&H("528");!F||H("8");function I(a,b){this.type=a;this.currentTarget=this.target=b}A(I,pb);s=I.prototype;s.k=function(){delete this.type;delete this.target;delete this.currentTarget};s.W=n;s.ja=j;s.stopPropagation=function(){this.W=j};s.preventDefault=function(){this.ja=n};function ub(a){ub[" "](a);return a}ub[" "]=function(){};function J(a,b){a&&this.ha(a,b)}A(J,I);var vb=[1,4,2];s=J.prototype;s.target=k;s.relatedTarget=k;s.offsetX=0;s.offsetY=0;s.clientX=0;s.clientY=0;s.screenX=0;s.screenY=0;s.button=0;s.keyCode=0;s.charCode=0;s.ctrlKey=n;s.altKey=n;s.shiftKey=n;s.metaKey=n;s.Pa=n;s.J=k;
s.ha=function(a,b){var c=this.type=a.type;I.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var g;a:{try{ub(d.nodeName);g=j;break a}catch(f){}g=n}g||(d=k)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=G||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Pa=Ga?a.metaKey:a.ctrlKey;this.state=a.state;this.J=a;delete this.ja;delete this.W};function wb(a){return rb?0==a.J.button:"click"==a.type?j:!!(a.J.button&vb[0])}
s.stopPropagation=function(){J.e.stopPropagation.call(this);this.J.stopPropagation?this.J.stopPropagation():this.J.cancelBubble=j};s.preventDefault=function(){J.e.preventDefault.call(this);var a=this.J;if(a.preventDefault)a.preventDefault();else if(a.returnValue=n,tb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};s.k=function(){J.e.k.call(this);this.relatedTarget=this.currentTarget=this.target=this.J=k};function xb(){}var yb=0;s=xb.prototype;s.key=0;s.X=n;s.Sa=n;s.ha=function(a,b,c,d,g,f){x(a)?this.Wa=j:a&&a.handleEvent&&x(a.handleEvent)?this.Wa=n:e(Error("Invalid listener argument"));this.ba=a;this.$a=b;this.src=c;this.type=d;this.capture=!!g;this.xa=f;this.Sa=n;this.key=++yb;this.X=n};s.handleEvent=function(a){return this.Wa?this.ba.call(this.xa||this.src,a):this.ba.handleEvent.call(this.ba,a)};var zb={},K={},M={},Ab={};
function N(a,b,c,d,g){if(b){if(v(b)){for(var f=0;f<b.length;f++)N(a,b[f],c,d,g);return k}var d=!!d,i=K;b in i||(i[b]={z:0,v:0});i=i[b];d in i||(i[d]={z:0,v:0},i.z++);var i=i[d],l=y(a),m;i.v++;if(i[l]){m=i[l];for(f=0;f<m.length;f++)if(i=m[f],i.ba==c&&i.xa==g){if(i.X)break;return m[f].key}}else m=i[l]=[],i.z++;f=Bb();f.src=a;i=new xb;i.ha(c,f,a,b,d,g);c=i.key;f.key=c;m.push(i);zb[c]=i;M[l]||(M[l]=[]);M[l].push(i);a.addEventListener?(a==t||!a.Ta)&&a.addEventListener(b,f,d):a.attachEvent(b in Ab?Ab[b]:
Ab[b]="on"+b,f);return c}e(Error("Invalid event type"))}function Bb(){var a=Cb,b=sb?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Db(a,b,c,d,g){if(v(b))for(var f=0;f<b.length;f++)Db(a,b[f],c,d,g);else if(d=!!d,a=Eb(a,b,d))for(f=0;f<a.length;f++)if(a[f].ba==c&&a[f].capture==d&&a[f].xa==g){O(a[f].key);break}}
function O(a){if(!zb[a])return n;var b=zb[a];if(b.X)return n;var c=b.src,d=b.type,g=b.$a,f=b.capture;c.removeEventListener?(c==t||!c.Ta)&&c.removeEventListener(d,g,f):c.detachEvent&&c.detachEvent(d in Ab?Ab[d]:Ab[d]="on"+d,g);c=y(c);g=K[d][f][c];if(M[c]){var i=M[c];D(i,b);0==i.length&&delete M[c]}b.X=j;g.Xa=j;Fb(d,f,c,g);delete zb[a];return j}
function Fb(a,b,c,d){if(!d.Ca&&d.Xa){for(var g=0,f=0;g<d.length;g++)d[g].X?d[g].$a.src=k:(g!=f&&(d[f]=d[g]),f++);d.length=f;d.Xa=n;0==f&&(delete K[a][b][c],K[a][b].z--,0==K[a][b].z&&(delete K[a][b],K[a].z--),0==K[a].z&&delete K[a])}}function Gb(a){var b,c=0,d=b==k;b=!!b;if(a==k)Za(M,function(a){for(var f=a.length-1;0<=f;f--){var g=a[f];if(d||b==g.capture)O(g.key),c++}});else if(a=y(a),M[a])for(var a=M[a],g=a.length-1;0<=g;g--){var f=a[g];if(d||b==f.capture)O(f.key),c++}}
function Eb(a,b,c){var d=K;return b in d&&(d=d[b],c in d&&(d=d[c],a=y(a),d[a]))?d[a]:k}function Hb(a,b,c,d,g){var f=1,b=y(b);if(a[b]){a.v--;a=a[b];a.Ca?a.Ca++:a.Ca=1;try{for(var i=a.length,l=0;l<i;l++){var m=a[l];m&&!m.X&&(f&=Ib(m,g)!==n)}}finally{a.Ca--,Fb(c,d,b,a)}}return Boolean(f)}function Ib(a,b){var c=a.handleEvent(b);a.Sa&&O(a.key);return c}
function Cb(a,b){if(!zb[a])return j;var c=zb[a],d=c.type,g=K;if(!(d in g))return j;var g=g[d],f,i;if(!sb){var l;if(!(l=b))a:{l=["window","event"];for(var m=t;f=l.shift();)if(m[f]!=k)m=m[f];else{l=k;break a}l=m}f=l;l=j in g;m=n in g;if(l){if(0>f.keyCode||f.returnValue!=h)return j;a:{var o=n;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(z){o=j}if(o||f.returnValue==h)f.returnValue=j}}o=new J;o.ha(f,this);f=j;try{if(l){for(var r=[],Ia=o.currentTarget;Ia;Ia=Ia.parentNode)r.push(Ia);i=g[j];i.v=i.z;for(var L=
r.length-1;!o.W&&0<=L&&i.v;L--)o.currentTarget=r[L],f&=Hb(i,r[L],d,j,o);if(m){i=g[n];i.v=i.z;for(L=0;!o.W&&L<r.length&&i.v;L++)o.currentTarget=r[L],f&=Hb(i,r[L],d,n,o)}}else f=Ib(c,o)}finally{r&&(r.length=0),o.I()}return f}d=new J(b,this);try{f=Ib(c,d)}finally{d.I()}return f};function Jb(a){this.Va=a;this.Ba=[]}A(Jb,pb);var Kb=[];function P(a,b,c,d){v(c)||(Kb[0]=c,c=Kb);for(var g=0;g<c.length;g++)a.Ba.push(N(b,c[g],d||a,n,a.Va||a));return a}function Q(a,b,c,d,g,f){if(v(c))for(var i=0;i<c.length;i++)Q(a,b,c[i],d,g,f);else{a:{d=d||a;f=f||a.Va||a;g=!!g;if(b=Eb(b,c,g))for(c=0;c<b.length;c++)if(!b[c].X&&b[c].ba==d&&b[c].capture==g&&b[c].xa==f){b=b[c];break a}b=k}b&&(b=b.key,O(b),D(a.Ba,b))}return a}function Lb(a){C(a.Ba,O);a.Ba.length=0}
Jb.prototype.k=function(){Jb.e.k.call(this);Lb(this)};Jb.prototype.handleEvent=function(){e(Error("EventHandler.handleEvent not implemented"))};function Mb(){}A(Mb,pb);s=Mb.prototype;s.Ta=j;s.Da=k;s.Qa=function(a){this.Da=a};s.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};s.removeEventListener=function(a,b,c,d){Db(this,a,b,c,d)};
s.dispatchEvent=function(a){var b=a.type||a,c=K;if(b in c){if(w(a))a=new I(a,this);else if(a instanceof I)a.target=a.target||this;else{var d=a,a=new I(b,this);bb(a,d)}var d=1,g,c=c[b],b=j in c,f;if(b){g=[];for(f=this;f;f=f.Da)g.push(f);f=c[j];f.v=f.z;for(var i=g.length-1;!a.W&&0<=i&&f.v;i--)a.currentTarget=g[i],d&=Hb(f,g[i],a.type,j,a)&&a.ja!=n}if(n in c)if(f=c[n],f.v=f.z,b)for(i=0;!a.W&&i<g.length&&f.v;i++)a.currentTarget=g[i],d&=Hb(f,g[i],a.type,n,a)&&a.ja!=n;else for(g=this;!a.W&&g&&f.v;g=g.Da)a.currentTarget=
g,d&=Hb(f,g,a.type,n,a)&&a.ja!=n;a=Boolean(d)}else a=j;return a};s.k=function(){Mb.e.k.call(this);Gb(this);this.Da=k};var Nb=F?"MozUserSelect":G?"WebkitUserSelect":k;function Ob(a,b,c){c=!c?a.getElementsByTagName("*"):k;if(Nb){if(b=b?"none":"",a.style[Nb]=b,c)for(var a=0,d;d=c[a];a++)d.style[Nb]=b}else if(E||Ea)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)};function Pb(){}u(Pb);Pb.prototype.qb=0;Pb.F();function R(a){this.B=a||cb();this.ka=Qb}A(R,Mb);R.prototype.ob=Pb.F();var Qb=k;function Rb(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}e(Error("Invalid component state"))}s=R.prototype;s.aa=k;s.d=n;s.b=k;s.ka=k;s.ia=k;s.n=k;s.m=k;s.q=k;s.bb=n;
function Sb(a){return a.aa||(a.aa=":"+(a.ob.qb++).toString(36))}function Tb(a,b){if(a.n&&a.n.q){var c=a.n.q,d=a.aa;d in c&&delete c[d];$a(a.n.q,b,a)}a.aa=b}s.a=p("b");function Ub(a){return a.Z||(a.Z=new Jb(a))}function Vb(a,b){a==b&&e(Error("Unable to set parent component"));b&&a.n&&a.aa&&Wb(a.n,a.aa)&&a.n!=b&&e(Error("Unable to set parent component"));a.n=b;R.e.Qa.call(a,b)}s.getParent=p("n");s.Qa=function(a){this.n&&this.n!=a&&e(Error("Method not supported"));R.e.Qa.call(this,a)};s.ua=p("B");
s.i=function(){this.b=this.B.createElement("div")};function Xb(a,b,c){a.d&&e(Error("Component already rendered"));a.b||a.i();b?b.insertBefore(a.b,c||k):a.B.A.body.appendChild(a.b);(!a.n||a.n.d)&&a.r()}s.P=function(a){this.d&&e(Error("Component already rendered"));if(a&&this.D(a)){this.bb=j;if(!this.B||this.B.A!=eb(a))this.B=cb(a);this.Ga(a);this.r()}else e(Error("Invalid element to decorate"))};s.D=q(j);s.Ga=function(a){this.b=a};s.r=function(){this.d=j;S(this,function(a){!a.d&&a.a()&&a.r()})};
s.R=function(){S(this,function(a){a.d&&a.R()});this.Z&&Lb(this.Z);this.d=n};s.k=function(){R.e.k.call(this);this.d&&this.R();this.Z&&(this.Z.I(),delete this.Z);S(this,function(a){a.I()});!this.bb&&this.b&&lb(this.b);this.n=this.ia=this.b=this.q=this.m=k};s.qa=function(a,b){this.Fa(a,Yb(this),b)};
s.Fa=function(a,b,c){a.d&&(c||!this.d)&&e(Error("Component already rendered"));(0>b||b>Yb(this))&&e(Error("Child component index out of bounds"));if(!this.q||!this.m)this.q={},this.m=[];a.getParent()==this?(this.q[Sb(a)]=a,D(this.m,a)):$a(this.q,Sb(a),a);Vb(a,this);va(this.m,b,0,a);a.d&&this.d&&a.getParent()==this?(c=this.s(),c.insertBefore(a.a(),c.childNodes[b]||k)):c?(this.b||this.i(),b=T(this,b+1),Xb(a,this.s(),b?b.b:k)):this.d&&!a.d&&a.b&&a.r()};s.s=p("b");
function Zb(a){if(a.ka==k){var b;a:{b=a.d?a.b:a.B.A.body;var c=eb(b);if(c.defaultView&&c.defaultView.getComputedStyle&&(b=c.defaultView.getComputedStyle(b,k))){b=b.direction||b.getPropertyValue("direction");break a}b=""}a.ka="rtl"==(b||((a.d?a.b:a.B.A.body).currentStyle?(a.d?a.b:a.B.A.body).currentStyle.direction:k)||(a.d?a.b:a.B.A.body).style&&(a.d?a.b:a.B.A.body).style.direction)}return a.ka}s.na=function(a){this.d&&e(Error("Component already rendered"));this.ka=a};
function Yb(a){return a.m?a.m.length:0}function Wb(a,b){return a.q&&b?(b in a.q?a.q[b]:h)||k:k}function T(a,b){return a.m?a.m[b]||k:k}function S(a,b,c){a.m&&C(a.m,b,c)}function $b(a,b){return a.m&&b?na(a.m,b):-1}s.removeChild=function(a,b){if(a){var c=w(a)?a:Sb(a),a=Wb(this,c);if(c&&a){var d=this.q;c in d&&delete d[c];D(this.m,a);b&&(a.R(),a.b&&lb(a.b));Vb(a,k)}}a||e(Error("Child is not in parent component"));return a};function ac(a,b){a&&bc(this,a,b)}A(ac,Mb);s=ac.prototype;s.b=k;s.za=k;s.Na=k;s.Aa=k;s.O=-1;s.N=-1;
var cc={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},dc={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},ec={61:187,59:186},fc=E||G&&H("525");s=ac.prototype;
s.kb=function(a){if(G&&(17==this.O&&!a.ctrlKey||18==this.O&&!a.altKey))this.N=this.O=-1;fc&&!Sa(a.keyCode,this.O,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):this.N=F&&a.keyCode in ec?ec[a.keyCode]:a.keyCode};s.lb=function(){this.N=this.O=-1};
s.handleEvent=function(a){var b=a.J,c,d;E&&"keypress"==a.type?(c=this.N,d=13!=c&&27!=c?b.keyCode:0):G&&"keypress"==a.type?(c=this.N,d=0<=b.charCode&&63232>b.charCode&&Ta(c)?b.charCode:0):Ea?(c=this.N,d=Ta(c)?b.keyCode:0):(c=b.keyCode||this.N,d=b.charCode||0,Ga&&63==d&&!c&&(c=191));var g=c,f=b.keyIdentifier;c?63232<=c&&c in cc?g=cc[c]:25==c&&a.shiftKey&&(g=9):f&&f in dc&&(g=dc[f]);a=g==this.O;this.O=g;b=new gc(g,d,a,b);try{this.dispatchEvent(b)}finally{b.I()}};s.a=p("b");
function bc(a,b,c){a.Aa&&a.detach();a.b=b;a.za=N(a.b,"keypress",a,c);a.Na=N(a.b,"keydown",a.kb,c,a);a.Aa=N(a.b,"keyup",a.lb,c,a)}s.detach=function(){this.za&&(O(this.za),O(this.Na),O(this.Aa),this.Aa=this.Na=this.za=k);this.b=k;this.N=this.O=-1};s.k=function(){ac.e.k.call(this);this.detach()};function gc(a,b,c,d){d&&this.ha(d,h);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}A(gc,J);function hc(a,b){a.setAttribute("role",b);a.tb=b};function U(){}var ic;u(U);s=U.prototype;s.i=function(a){var b=a.ua().i("div",this.Ja(a).join(" "),a.w);jc(a,b);return b};s.s=function(a){return a};s.Q=function(a,b,c){if(a=a.a?a.a():a)if(E&&!H("7")){var d=kc(Wa(a),b);d.push(b);fa(c?Xa:Ya,a).apply(k,d)}else c?Xa(a,b):Ya(a,b)};s.D=q(j);
s.P=function(a,b){b.id&&Tb(a,b.id);var c=this.s(b);c&&c.firstChild?lc(a,c.firstChild.nextSibling?ua(c.childNodes):c.firstChild):a.w=k;var d=0,g=this.t(),f=this.t(),i=n,l=n,c=n,m=Wa(b);C(m,function(a){if(!i&&a==g)i=j,f==g&&(l=j);else if(!l&&a==f)l=j;else{var b=d;if(!this.ab){this.sa||mc(this);var c=this.sa,m={},o;for(o in c)m[c[o]]=o;this.ab=m}a=parseInt(this.ab[a],10);d=b|(isNaN(a)?0:a)}},this);a.f=d;i||(m.push(g),f==g&&(l=j));l||m.push(f);var o=a.C;o&&m.push.apply(m,o);if(E&&!H("7")){var z=kc(m);
0<z.length&&(m.push.apply(m,z),c=j)}if(!i||!l||o||c)b.className=m.join(" ");jc(a,b);return b};s.ya=function(a){Zb(a)&&this.na(a.a(),j);a.isEnabled()&&this.ca(a,a.h)};function jc(a,b){a.isEnabled()||V(b,1,j);a.f&8&&V(b,8,j);a.o&16&&V(b,16,!!(a.f&16));a.o&64&&V(b,64,!!(a.f&64))}s.la=function(a,b){Ob(a,!b,!E&&!Ea)};s.na=function(a,b){this.Q(a,this.t()+"-rtl",b)};s.S=function(a){var b;return a.o&32&&(b=a.j())?ob(b):n};
s.ca=function(a,b){var c;if(a.o&32&&(c=a.j())){if(!b&&a.f&32){try{c.blur()}catch(d){}a.f&32&&a.ea(k)}ob(c)!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};s.Y=function(a,b){a.style.display=b?"":"none"};s.p=function(a,b,c){var d=a.a();if(d){var g=nc(this,b);g&&this.Q(a,g,c);V(d,b,c)}};function V(a,b,c){ic||(ic={1:"disabled",8:"selected",16:"checked",64:"expanded"});(b=ic[b])&&a.setAttribute("aria-"+b,c)}
s.K=function(a,b){var c=this.s(a);if(c&&(kb(c),b))if(w(b))nb(c,b);else{var d=function(a){if(a){var b=eb(c);c.appendChild(w(a)?b.createTextNode(a):a)}};v(b)?C(b,d):ba(b)&&!("nodeType"in b)?C(ua(b),d):d(b)}};s.j=function(a){return a.a()};s.t=q("goog-control");s.Ja=function(a){var b=this.t(),c=[b],d=this.t();d!=b&&c.push(d);b=a.f;for(d=[];b;){var g=b&-b;d.push(nc(this,g));b&=~g}c.push.apply(c,d);(a=a.C)&&c.push.apply(c,a);E&&!H("7")&&c.push.apply(c,kc(c));return c};
function kc(a,b){var c=[];b&&(a=a.concat([b]));C([],function(d){ra(d,fa(sa,a))&&(!b||sa(d,b))&&c.push(d.join("_"))});return c}function nc(a,b){a.sa||mc(a);return a.sa[b]}function mc(a){var b=a.t();a.sa={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}};function oc(a,b){a||e(Error("Invalid class name "+a));x(b)||e(Error("Invalid decorator function "+b));pc[a]=b}var qc={},pc={};function W(a,b,c){R.call(this,c);if(!b){for(var b=this.constructor,d;b;){d=y(b);if(d=qc[d])break;b=b.e?b.e.constructor:k}b=d?x(d.F)?d.F():new d:k}this.c=b;this.w=a}A(W,R);s=W.prototype;s.w=k;s.f=0;s.o=39;s.da=255;s.pa=0;s.h=j;s.C=k;s.fa=j;s.ra=n;s.Za=k;s.j=function(){return this.c.j(this)};s.va=function(){return this.u||(this.u=new ac)};s.Q=function(a,b){b?a&&(this.C?sa(this.C,a)||this.C.push(a):this.C=[a],this.c.Q(this,a,j)):a&&this.C&&(D(this.C,a),0==this.C.length&&(this.C=k),this.c.Q(this,a,n))};
s.i=function(){var a=this.c.i(this);this.b=a;var b=this.Za||h;b&&hc(a,b);this.ra||this.c.la(a,n);this.h||this.c.Y(a,n)};s.s=function(){return this.c.s(this.a())};s.D=function(a){return this.c.D(a)};s.Ga=function(a){this.b=a=this.c.P(this,a);var b=this.Za||h;b&&hc(a,b);this.ra||this.c.la(a,n);this.h="none"!=a.style.display};
s.r=function(){W.e.r.call(this);this.c.ya(this);if(this.o&-2&&(this.fa&&rc(this,j),this.o&32)){var a=this.j();if(a){var b=this.va();bc(b,a);P(P(P(Ub(this),b,"key",this.M),a,"focus",this.wa),a,"blur",this.ea)}}};function rc(a,b){var c=Ub(a),d=a.a();b?(P(P(P(P(c,d,"mouseover",a.Ma),d,"mousedown",a.$),d,"mouseup",a.ga),d,"mouseout",a.La),E&&P(c,d,"dblclick",a.Ua)):(Q(Q(Q(Q(c,d,"mouseover",a.Ma),d,"mousedown",a.$),d,"mouseup",a.ga),d,"mouseout",a.La),E&&Q(c,d,"dblclick",a.Ua))}
s.R=function(){W.e.R.call(this);this.u&&this.u.detach();this.h&&this.isEnabled()&&this.c.ca(this,n)};s.k=function(){W.e.k.call(this);this.u&&(this.u.I(),delete this.u);delete this.c;this.C=this.w=k};s.K=function(a){this.c.K(this.a(),a);this.w=a};function lc(a,b){a.w=b}s.na=function(a){W.e.na.call(this,a);var b=this.a();b&&this.c.na(b,a)};s.la=function(a){this.ra=a;var b=this.a();b&&this.c.la(b,a)};
s.Y=function(a,b){if(b||this.h!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.a();c&&this.c.Y(c,a);this.isEnabled()&&this.c.ca(this,a);this.h=a;return j}return n};s.isEnabled=function(){return!(this.f&1)};s.ma=function(a){var b=this.getParent();if((!b||"function"!=typeof b.isEnabled||b.isEnabled())&&X(this,1,!a))a||(this.setActive(n),this.G(n)),this.h&&this.c.ca(this,a),this.p(1,!a)};s.G=function(a){X(this,2,a)&&this.p(2,a)};s.setActive=function(a){X(this,4,a)&&this.p(4,a)};
s.oa=function(a){X(this,8,a)&&this.p(8,a)};function sc(a,b){X(a,16,b)&&a.p(16,b)}s.Ea=function(a){X(this,32,a)&&this.p(32,a)};function tc(a,b){X(a,64,b)&&a.p(64,b)}s.p=function(a,b){this.o&a&&b!=!!(this.f&a)&&(this.c.p(this,a,b),this.f=b?this.f|a:this.f&~a)};function uc(a,b,c){a.d&&a.f&b&&!c&&e(Error("Component already rendered"));!c&&a.f&b&&a.p(b,n);a.o=c?a.o|b:a.o&~b}function Y(a,b){return!!(a.da&b)&&!!(a.o&b)}
function X(a,b,c){return!!(a.o&b)&&!!(a.f&b)!=c&&(!(a.pa&b)||a.dispatchEvent(Rb(b,c)))&&!a.Ha}s.Ma=function(a){(!a.relatedTarget||!mb(this.a(),a.relatedTarget))&&this.dispatchEvent("enter")&&this.isEnabled()&&Y(this,2)&&this.G(j)};s.La=function(a){if((!a.relatedTarget||!mb(this.a(),a.relatedTarget))&&this.dispatchEvent("leave"))Y(this,4)&&this.setActive(n),Y(this,2)&&this.G(n)};
s.$=function(a){if(this.isEnabled()&&(Y(this,2)&&this.G(j),wb(a)&&(!G||!Ga||!a.ctrlKey)))Y(this,4)&&this.setActive(j),this.c.S(this)&&this.j().focus();!this.ra&&wb(a)&&(!G||!Ga||!a.ctrlKey)&&a.preventDefault()};s.ga=function(a){this.isEnabled()&&(Y(this,2)&&this.G(j),this.f&4&&vc(this,a)&&Y(this,4)&&this.setActive(n))};s.Ua=function(a){this.isEnabled()&&vc(this,a)};
function vc(a,b){Y(a,16)&&sc(a,!(a.f&16));Y(a,8)&&a.oa(j);Y(a,64)&&tc(a,!(a.f&64));var c=new I("action",a);b&&(c.altKey=b.altKey,c.ctrlKey=b.ctrlKey,c.metaKey=b.metaKey,c.shiftKey=b.shiftKey,c.Pa=b.Pa);return a.dispatchEvent(c)}s.wa=function(){Y(this,32)&&this.Ea(j)};s.ea=function(){Y(this,4)&&this.setActive(n);Y(this,32)&&this.Ea(n)};s.M=function(a){return this.h&&this.isEnabled()&&this.Ka(a)?(a.preventDefault(),a.stopPropagation(),j):n};s.Ka=function(a){return 13==a.keyCode&&vc(this,a)};
x(W)||e(Error("Invalid component class "+W));x(U)||e(Error("Invalid renderer class "+U));var wc=y(W);qc[wc]=U;oc("goog-control",function(){return new W(k)});function xc(){this.Ya=yc.value;this.ta=n};E&&H(8);"ScriptEngine"in t&&"JScript"==t.ScriptEngine()&&(t.ScriptEngineMajorVersion(),t.ScriptEngineMinorVersion(),t.ScriptEngineBuildVersion());function zc(a){return"object"===typeof a&&a&&0===a.sb?a.content:(""+a).replace(Ac,Bc)}var Cc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Bc(a){return Cc[a]}var Ac=/[\x00\x22\x26\x27\x3c\x3e]/g;function Dc(a){return'<span class="number">'+zc(a.U)+'</span> <span class="word">'+(1<a.U?"items":"item")+"</span> left."}function Ec(a){return'<a href="#">Clear <span class="number-done">'+zc(a.U)+'</span> <span class="word-done">'+(1<a.U?"items":"item")+"</span></a>"};function Fc(){}A(Fc,U);u(Fc);Fc.prototype.i=function(a){var b='<span class="todo-clear">'+Ec({U:a.w})+"</span>",b=jb(b);jc(a,b);return b};Fc.prototype.D=q(n);Fc.prototype.K=function(a,b){a.innerHTML=Ec({U:b})};Fc.prototype.p=function(a,b,c){(a=a.a())&&V(a,b,c)};function Gc(){}A(Gc,U);u(Gc);Gc.prototype.i=function(a){var b='<span class="todo-count">'+Dc({U:a.w})+"</span>",b=jb(b);jc(a,b);return b};Gc.prototype.D=q(n);Gc.prototype.K=function(a,b){a.innerHTML=Dc({U:b})};Gc.prototype.p=function(a,b,c){(a=a.a())&&V(a,b,c)};function Hc(){}A(Hc,U);u(Hc);Hc.prototype.i=function(a){var b='<li><div><div class="display"><input class="check" type="checkbox" /><div class="todo-content" style="cursor: pointer;">'+zc(a.w)+'</div><span class="todo-destroy"></span></div><div class="edit"><input class="todo-input" type="text"/></div></div></li>',b=jb(b);jc(a,b);return b};
Hc.prototype.p=function(a,b,c){var d=a.a();if(d){switch(b){case 16:this.Q(a,"done",c);(d?Ic(d).childNodes[0]:k).checked=c;break;case 8:this.Q(a,"editing",c)}V(d,b,c)}};Hc.prototype.j=function(a){return Jc(a.a())};function Ic(a){return a?a.childNodes[0].childNodes[0]:k}Hc.prototype.s=function(a){return a?Ic(a).childNodes[1]:k};function Jc(a){return a?a.childNodes[0].childNodes[1].childNodes[0]:k};function Z(a){W.call(this,"",Hc.F(),a);uc(this,16,j);uc(this,8,j);this.da&=-17;this.da&=-9;this.la(j)}A(Z,W);Z.prototype.r=function(){Z.e.r.call(this);P(Ub(this),this.a(),"click",function(a){a.preventDefault()})};Z.prototype.ga=function(a){Z.e.ga.call(this,a);this.isEnabled()&&(a.target===(this.a()?Ic(this.a()).childNodes[0]:k)?(sc(this,!(this.f&16)),this.dispatchEvent("edit")):a.target===(this.a()?Ic(this.a()).childNodes[2]:k)?this.dispatchEvent("destroy"):this.f&8||this.oa(j))};
Z.prototype.Ea=function(a){Z.e.Ea.call(this,a);!a&&this.f&8&&(this.K(Jc(this.a()).value),this.oa(n),this.dispatchEvent("edit"))};Z.prototype.oa=function(a){Z.e.oa.call(this,a);a&&(a=Jc(this.a()),a.value=this.w,a.focus())};function Kc(){}A(Kc,U);u(Kc);Kc.prototype.i=function(a){return a.ua().i("div",this.t())};Kc.prototype.P=function(a,b){b.id&&Tb(a,b.id);if("HR"==b.tagName){var c=b,b=this.i(a);c.parentNode&&c.parentNode.insertBefore(b,c);lb(c)}else Xa(b,this.t());return b};Kc.prototype.K=function(){};Kc.prototype.t=q("goog-menuseparator");function Lc(a,b){W.call(this,k,a||Kc.F(),b);uc(this,1,n);uc(this,2,n);uc(this,4,n);uc(this,32,n);this.f=1}A(Lc,W);Lc.prototype.r=function(){Lc.e.r.call(this);hc(this.a(),"separator")};oc("goog-menuseparator",function(){return new Lc});function Mc(){}u(Mc);function Nc(a,b){a&&(a.tabIndex=b?0:-1)}s=Mc.prototype;s.i=function(a){return a.ua().i("div",this.Ja(a).join(" "))};s.s=function(a){return a};s.D=function(a){return"DIV"==a.tagName};s.P=function(a,b){b.id&&Tb(a,b.id);var c=this.t(),d=n,g=Wa(b);g&&C(g,function(b){b==c?d=j:b&&(b==c+"-disabled"?a.ma(n):b==c+"-horizontal"?Oc(a,Pc):b==c+"-vertical"&&Oc(a,Qc))},this);d||Xa(b,c);Rc(a,this.s(b));return b};
function Rc(a,b){if(b)for(var c=b.firstChild,d;c&&c.parentNode==b;){d=c.nextSibling;if(1==c.nodeType){var g;a:{g=h;for(var f=Wa(c),i=0,l=f.length;i<l;i++)if(g=f[i]in pc?pc[f[i]]():k)break a;g=k}g&&(g.b=c,a.isEnabled()||g.ma(n),a.qa(g),g.P(c))}else(!c.nodeValue||""==ga(c.nodeValue))&&b.removeChild(c);c=d}}s.ya=function(a){a=a.a();Ob(a,j,F);E&&(a.hideFocus=j)};s.j=function(a){return a.a()};s.t=q("goog-container");
s.Ja=function(a){var b=this.t(),c=[b,a.V==Pc?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function $(a,b,c){R.call(this,c);this.c=b||Mc.F();this.V=a||Qc}A($,R);var Pc="horizontal",Qc="vertical";s=$.prototype;s.Oa=k;s.u=k;s.c=k;s.V=k;s.h=j;s.L=j;s.Ia=j;s.l=-1;s.g=k;s.T=n;s.Ra=n;s.rb=j;s.H=k;s.j=function(){return this.Oa||this.c.j(this)};s.va=function(){return this.u||(this.u=new ac(this.j()))};s.i=function(){this.b=this.c.i(this)};s.s=function(){return this.c.s(this.a())};s.D=function(a){return this.c.D(a)};s.Ga=function(a){this.b=this.c.P(this,a);"none"==a.style.display&&(this.h=n)};
s.r=function(){$.e.r.call(this);S(this,function(a){a.d&&Sc(this,a)},this);var a=this.a();this.c.ya(this);this.Y(this.h,j);P(P(P(P(P(P(P(P(Ub(this),this,"enter",this.ib),this,"highlight",this.jb),this,"unhighlight",this.nb),this,"open",this.mb),this,"close",this.gb),a,"mousedown",this.$),eb(a),"mouseup",this.hb),a,["mousedown","mouseup","mouseover","mouseout"],this.fb);this.S()&&Tc(this,j)};
function Tc(a,b){var c=Ub(a),d=a.j();b?P(P(P(c,d,"focus",a.wa),d,"blur",a.ea),a.va(),"key",a.M):Q(Q(Q(c,d,"focus",a.wa),d,"blur",a.ea),a.va(),"key",a.M)}s.R=function(){Uc(this,-1);this.g&&tc(this.g,n);this.T=n;$.e.R.call(this)};s.k=function(){$.e.k.call(this);this.u&&(this.u.I(),this.u=k);this.c=this.g=this.H=this.Oa=k};s.ib=q(j);
s.jb=function(a){var b=$b(this,a.target);if(-1<b&&b!=this.l){var c=T(this,this.l);c&&c.G(n);this.l=b;c=T(this,this.l);this.T&&c.setActive(j);this.rb&&this.g&&c!=this.g&&(c.o&64?tc(c,j):tc(this.g,n))}this.a().setAttribute("aria-activedescendant",a.target.a().id)};s.nb=function(a){a.target==T(this,this.l)&&(this.l=-1);this.a().setAttribute("aria-activedescendant","")};s.mb=function(a){if((a=a.target)&&a!=this.g&&a.getParent()==this)this.g&&tc(this.g,n),this.g=a};
s.gb=function(a){a.target==this.g&&(this.g=k)};s.$=function(a){this.L&&(this.T=j);var b=this.j();b&&ob(b)?b.focus():a.preventDefault()};s.hb=function(){this.T=n};s.fb=function(a){var b;a:{b=a.target;if(this.H)for(var c=this.a();b&&b!==c;){var d=b.id;if(d in this.H){b=this.H[d];break a}b=b.parentNode}b=k}if(b)switch(a.type){case "mousedown":b.$(a);break;case "mouseup":b.ga(a);break;case "mouseover":b.Ma(a);break;case "mouseout":b.La(a)}};s.wa=function(){};
s.ea=function(){Uc(this,-1);this.T=n;this.g&&tc(this.g,n)};s.M=function(a){return this.isEnabled()&&this.h&&(0!=Yb(this)||this.Oa)&&this.Ka(a)?(a.preventDefault(),a.stopPropagation(),j):n};
s.Ka=function(a){var b=T(this,this.l);if(b&&"function"==typeof b.M&&b.M(a)||this.g&&this.g!=b&&"function"==typeof this.g.M&&this.g.M(a))return j;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return n;switch(a.keyCode){case 27:if(this.S())this.j().blur();else return n;break;case 36:Vc(this);break;case 35:Wc(this);break;case 38:if(this.V==Qc)Xc(this);else return n;break;case 37:if(this.V==Pc)Zb(this)?Yc(this):Xc(this);else return n;break;case 40:if(this.V==Qc)Yc(this);else return n;break;case 39:if(this.V==
Pc)Zb(this)?Xc(this):Yc(this);else return n;break;default:return n}return j};function Sc(a,b){var c=b.a(),c=c.id||(c.id=Sb(b));a.H||(a.H={});a.H[c]=b}s.qa=function(a,b){$.e.qa.call(this,a,b)};s.Fa=function(a,b,c){a.pa|=2;a.pa|=64;(this.S()||!this.Ra)&&uc(a,32,n);a.d&&n!=a.fa&&rc(a,n);a.fa=n;$.e.Fa.call(this,a,b,c);a.d&&this.d&&Sc(this,a);b<=this.l&&this.l++};
s.removeChild=function(a,b){if(a=w(a)?Wb(this,a):a){var c=$b(this,a);-1!=c&&(c==this.l?a.G(n):c<this.l&&this.l--);var d=a.a();d&&d.id&&this.H&&(c=this.H,d=d.id,d in c&&delete c[d])}c=a=$.e.removeChild.call(this,a,b);c.d&&j!=c.fa&&rc(c,j);c.fa=j;return a};function Oc(a,b){a.a()&&e(Error("Component already rendered"));a.V=b}
s.Y=function(a,b){if(b||this.h!=a&&this.dispatchEvent(a?"show":"hide")){this.h=a;var c=this.a();c&&(c.style.display=a?"":"none",this.S()&&Nc(this.j(),this.L&&this.h),b||this.dispatchEvent(this.h?"aftershow":"afterhide"));return j}return n};s.isEnabled=p("L");s.ma=function(a){if(this.L!=a&&this.dispatchEvent(a?"enable":"disable"))a?(this.L=j,S(this,function(a){a.cb?delete a.cb:a.ma(j)})):(S(this,function(a){a.isEnabled()?a.ma(n):a.cb=j}),this.T=this.L=n),this.S()&&Nc(this.j(),a&&this.h)};s.S=p("Ia");
s.ca=function(a){a!=this.Ia&&this.d&&Tc(this,a);this.Ia=a;this.L&&this.h&&Nc(this.j(),a)};function Uc(a,b){var c=T(a,b);c?c.G(j):-1<a.l&&T(a,a.l).G(n)}s.G=function(a){Uc(this,$b(this,a))};function Vc(a){Zc(a,function(a,c){return(a+1)%c},Yb(a)-1)}function Wc(a){Zc(a,function(a,c){a--;return 0>a?c-1:a},0)}function Yc(a){Zc(a,function(a,c){return(a+1)%c},a.l)}function Xc(a){Zc(a,function(a,c){a--;return 0>a?c-1:a},a.l)}
function Zc(a,b,c){for(var c=0>c?$b(a,a.g):c,d=Yb(a),c=b.call(a,c,d),g=0;g<=d;){var f=T(a,c);if(f&&f.h&&f.isEnabled()&&f.o&2){Uc(a,c);break}g++;c=b.call(a,c,d)}};function $c(){}A($c,Mc);u($c);$c.prototype.D=function(a){return"UL"==a.tagName};$c.prototype.ya=function(){};function ad(a){$.call(this,Qc,$c.F(),a);this.ca(n);this.Ra=j}A(ad,$);ad.prototype.$=function(){this.L&&(this.T=j)};var pa=[],bd=document.getElementById("todo-stats"),cd=new W(k,Gc.F());Xb(cd,bd);var dd=new W(k,Fc.F());Xb(dd,bd);N(dd,"action",function(){oa(function(a){a.ta&&(D(pa,a),S(ed,function(b){b.ia===a&&ed.removeChild(b,j)}))});fd()});function fd(){var a=qa(function(a,b){return b.ta?a+1:a}),b=pa.length-a;cd.K(b);cd.Y(0<b);dd.K(a);dd.Y(0<a)}fd();var ed=new ad;ed.P(document.getElementById("todo-list"));N(ed,"edit",function(a){var a=a.target,b=a.ia;b.Ya=a.w;b.ta=!!(a.f&16);fd()});
N(ed,"destroy",function(a){a=a.target;D(pa,a.ia);ed.removeChild(a,j);fd()});var yc=document.getElementById("new-todo");N(yc,"keyup",function(a){if(13===a.keyCode){var a=new xc,b=new Z;pa.push(a);b.K(a.Ya);sc(b,a.ta);b.ia=a;ed.qa(b,j);yc.value="";fd()}});})();
