/**
* @license Input Mask plugin for jquery
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 2.4.21
*/
!function(a){function b(a){var b=document.createElement("input"),a="on"+a,c=a in b;return c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),b=null,c}function c(b,d,e){var f=e.aliases[b];return!!f&&(f.alias&&c(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,d),!0)}function d(b){function e(c){b.numericInput&&(c=c.split("").reverse().join(""));var d=!1,e=0,f=b.greedy,g=b.repeat;"*"==g&&(f=!1),1==c.length&&0==f&&0!=g&&(b.placeholder="");for(var h=a.map(c.split(""),function(a,c){var f=[];if(a==b.escapeChar)d=!0;else if(a!=b.optionalmarker.start&&a!=b.optionalmarker.end||d){var g=b.definitions[a];if(g&&!d)for(var h=0;h<g.cardinality;h++)f.push(b.placeholder.charAt((e+h)%b.placeholder.length));else f.push(a),d=!1;return e+=f.length,f}}),i=h.slice(),j=1;j<g&&f;j++)i=i.concat(h.slice());return{mask:i,repeat:g,greedy:f}}function f(c){b.numericInput&&(c=c.split("").reverse().join(""));var d=!1,e=!1,f=!1;return a.map(c.split(""),function(a,c){var g=[];if(a==b.escapeChar)e=!0;else if(a!=b.optionalmarker.start||e){if(a!=b.optionalmarker.end||e){var h=b.definitions[a];if(h&&!e){for(var i=h.prevalidator,j=i?i.length:0,k=1;k<h.cardinality;k++){var l=j>=k?i[k-1]:[],m=l.validator,n=l.cardinality;g.push({fn:m?"string"==typeof m?new RegExp(m):new function(){this.test=m}:new RegExp("."),cardinality:n?n:1,optionality:d,newBlockMarker:1==d&&f,offset:0,casing:h.casing,def:h.definitionSymbol||a}),1==d&&(f=!1)}g.push({fn:h.validator?"string"==typeof h.validator?new RegExp(h.validator):new function(){this.test=h.validator}:new RegExp("."),cardinality:h.cardinality,optionality:d,newBlockMarker:f,offset:0,casing:h.casing,def:h.definitionSymbol||a})}else g.push({fn:null,cardinality:0,optionality:d,newBlockMarker:f,offset:0,casing:null,def:a}),e=!1;return f=!1,g}d=!1,f=!0}else d=!0,f=!0})}function g(a){return b.optionalmarker.start+a+b.optionalmarker.end}function h(a){for(var c=0,d=0,e=a.length,f=0;f<e&&(a.charAt(f)==b.optionalmarker.start&&c++,a.charAt(f)==b.optionalmarker.end&&d++,!(c>0&&c==d));f++);var g=[a.substring(0,f)];return f<e&&g.push(a.substring(f+1,e)),g}function i(a){for(var c=a.length,d=0;d<c&&a.charAt(d)!=b.optionalmarker.start;d++);var e=[a.substring(0,d)];return d<c&&e.push(a.substring(d+1,c)),e}function j(b,k,l){var n,o,m=h(k),p=i(m[0]);p.length>1?(n=b+p[0]+g(p[1])+(m.length>1?m[1]:""),a.inArray(n,d)==-1&&""!=n&&(d.push(n),o=e(n),c.push({mask:n,_buffer:o.mask,buffer:o.mask.slice(),tests:f(n),lastValidPosition:-1,greedy:o.greedy,repeat:o.repeat,metadata:l})),n=b+p[0]+(m.length>1?m[1]:""),a.inArray(n,d)==-1&&""!=n&&(d.push(n),o=e(n),c.push({mask:n,_buffer:o.mask,buffer:o.mask.slice(),tests:f(n),lastValidPosition:-1,greedy:o.greedy,repeat:o.repeat,metadata:l})),i(p[1]).length>1&&j(b+p[0],p[1]+m[1],l),m.length>1&&i(m[1]).length>1&&(j(b+p[0]+g(p[1]),m[1],l),j(b+p[0],m[1],l))):(n=b+m,a.inArray(n,d)==-1&&""!=n&&(d.push(n),o=e(n),c.push({mask:n,_buffer:o.mask,buffer:o.mask.slice(),tests:f(n),lastValidPosition:-1,greedy:o.greedy,repeat:o.repeat,metadata:l})))}var c=[],d=[];return a.isFunction(b.mask)&&(b.mask=b.mask.call(this,b)),a.isArray(b.mask)?a.each(b.mask,function(a,b){void 0!=b.mask?j("",b.mask.toString(),b):j("",b.toString())}):j("",b.mask.toString()),b.greedy?c:c.sort(function(a,b){return a.mask.length-b.mask.length})}function m(b,c,d,h){function q(){return b[c]}function r(){return q().tests}function s(){return q()._buffer}function t(){return q().buffer}function u(e,f,g){function h(a,b,c,e){for(var f=x(a),g=c?1:0,h="",i=b.buffer,j=b.tests[f].cardinality;j>g;j--)h+=C(i,f-(j-1));return c&&(h+=c),null!=b.tests[f].fn?b.tests[f].fn.test(h,i,a,e,d):(c==C(b._buffer.slice(),a,!0)||c==d.skipOptionalPartCharacter)&&{refresh:!0,c:C(b._buffer.slice(),a,!0),pos:a}}function i(c,d){var g=!1;if(a.each(d,function(b,d){if(g=a.inArray(d.activeMasksetIndex,c)==-1&&d.result!==!1)return!1}),g)d=a.map(d,function(d,e){return a.inArray(d.activeMasksetIndex,c)==-1?d:void(b[d.activeMasksetIndex].lastValidPosition=n)});else{var k,i=-1,j=-1;a.each(d,function(b,d){a.inArray(d.activeMasksetIndex,c)!=-1&&d.result!==!1&(i==-1||i>d.result.pos)&&(i=d.result.pos,j=d.activeMasksetIndex)}),d=a.map(d,function(d,g){if(a.inArray(d.activeMasksetIndex,c)!=-1){if(d.result.pos==i)return d;if(d.result!==!1){for(var l=e;l<i;l++){if(k=h(l,b[d.activeMasksetIndex],b[j].buffer[l],!0),k===!1){b[d.activeMasksetIndex].lastValidPosition=i-1;break}B(b[d.activeMasksetIndex].buffer,l,b[j].buffer[l],!0),b[d.activeMasksetIndex].lastValidPosition=l}return k=h(i,b[d.activeMasksetIndex],f,!0),k!==!1&&(B(b[d.activeMasksetIndex].buffer,i,f,!0),b[d.activeMasksetIndex].lastValidPosition=i),d}}})}return d}if(g=g===!0){var j=h(e,q(),f,g);return j===!0&&(j={pos:e}),j}var k=[],j=!1,l=c,m=t().slice(),n=q().lastValidPosition,p=(A(e),[]);return a.each(b,function(a,b){if("object"==typeof b){c=a;var o,d=e,i=q().lastValidPosition;if(i==n){if(d-n>1)for(var r=i==-1?0:i;r<d&&(o=h(r,q(),m[r],!0),o!==!1);r++){B(t(),r,m[r],!0),o===!0&&(o={pos:r});var s=o.pos||r;q().lastValidPosition<s&&(q().lastValidPosition=s)}if(!w(d)&&!h(d,q(),f,g)){for(var u=z(d)-d,v=0;v<u&&h(++d,q(),f,g)===!1;v++);p.push(c)}}if((q().lastValidPosition>=n||c==l)&&d>=0&&d<y()){if(j=h(d,q(),f,g),j!==!1){j===!0&&(j={pos:d});var s=j.pos||d;q().lastValidPosition<s&&(q().lastValidPosition=s)}k.push({activeMasksetIndex:a,result:j})}}}),c=l,i(p,k)}function v(){var d=c,e={activeMasksetIndex:0,lastValidPosition:-1,next:-1};a.each(b,function(a,b){"object"==typeof b&&(c=a,q().lastValidPosition>e.lastValidPosition?(e.activeMasksetIndex=a,e.lastValidPosition=q().lastValidPosition,e.next=z(q().lastValidPosition)):q().lastValidPosition==e.lastValidPosition&&(e.next==-1||e.next>z(q().lastValidPosition))&&(e.activeMasksetIndex=a,e.lastValidPosition=q().lastValidPosition,e.next=z(q().lastValidPosition)))}),c=e.lastValidPosition!=-1&&b[d].lastValidPosition==e.lastValidPosition?d:e.activeMasksetIndex,d!=c&&(F(t(),z(e.lastValidPosition),y()),q().writeOutBuffer=!0),m.data("_inputmask").activeMasksetIndex=c}function w(a){var b=x(a),c=r()[b];return void 0!=c&&c.fn}function x(a){return a%r().length}function y(){return d.getMaskLength(s(),q().greedy,q().repeat,t(),d)}function z(a){var b=y();if(a>=b)return b;for(var c=a;++c<b&&!w(c););return c}function A(a){var b=a;if(b<=0)return 0;for(;--b>0&&!w(b););return b}function B(a,b,c,d){d&&(b=D(a,b));var e=r()[x(b)],f=c;if(void 0!=f&&void 0!=e)switch(e.casing){case"upper":f=c.toUpperCase();break;case"lower":f=c.toLowerCase()}a[b]=f}function C(a,b,c){return c&&(b=D(a,b)),a[b]}function D(a,b){for(var c;void 0==a[b]&&a.length<y();)for(c=0;void 0!==s()[c];)a.push(s()[c++]);return b}function E(a,b,c){a._valueSet(b.join("")),void 0!=c&&O(a,c)}function F(a,b,c,d){for(var e=b,f=y();e<c&&e<f;e++)d===!0?w(e)||B(a,e,""):B(a,e,C(s().slice(),e,!0))}function G(a,b){var c=x(b);B(a,b,C(s(),c))}function H(a){return d.placeholder.charAt(a%d.placeholder.length)}function I(d,e,f,g,h){var i=void 0!=g?g.slice():K(d._valueGet()).split("");a.each(b,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)}),f!==!0&&(c=0),e&&d._valueSet("");y();a.each(i,function(b,c){if(h===!0){var g=q().p,i=g==-1?g:A(g),j=i==-1?b:z(i);a.inArray(c,s().slice(i+1,j))==-1&&X.call(d,void 0,!0,c.charCodeAt(0),e,f,b)}else X.call(d,void 0,!0,c.charCodeAt(0),e,f,b)}),f===!0&&q().p!=-1&&(q().lastValidPosition=A(q().p))}function J(b){return a.inputmask.escapeRegex.call(this,b)}function K(a){return a.replace(new RegExp("("+J(s().join(""))+")*$"),"")}function L(a){for(var d,e,b=t(),c=b.slice(),e=c.length-1;e>=0;e--){var d=x(e);if(!r()[d].optionality)break;if(w(e)&&u(e,b[e],!0))break;c.pop()}E(a,c)}function M(b,c){if(!r()||c!==!0&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var e=a.map(t(),function(a,b){return w(b)&&u(b,a,!0)?a:null}),f=(k?e.reverse():e).join("");return void 0!=d.onUnMask?d.onUnMask.call(this,t().join(""),f):f}function N(a){if(k&&"number"==typeof a&&(!d.greedy||""!=d.placeholder)){var b=t().length;a=b-a}return a}function O(b,c,e){var h,f=b.jquery&&b.length>0?b[0]:b;return"number"!=typeof c?a(b).is(":visible")?(f.setSelectionRange?(c=f.selectionStart,e=f.selectionEnd):document.selection&&document.selection.createRange&&(h=document.selection.createRange(),c=0-h.duplicate().moveStart("character",-1e5),e=c+h.text.length),c=N(c),e=N(e),{begin:c,end:e}):{begin:0,end:0}:(c=N(c),e=N(e),a(b).is(":visible")&&(e="number"==typeof e?e:c,f.scrollLeft=f.scrollWidth,0==d.insertMode&&c==e&&e++,f.setSelectionRange?(f.selectionStart=c,f.selectionEnd=g?c:e):f.createTextRange&&(h=f.createTextRange(),h.collapse(!0),h.moveEnd("character",e),h.moveStart("character",c),h.select())),void 0)}function P(e){if("*"!=d.repeat){var f=!1,g=0,h=c;return a.each(b,function(a,b){if("object"==typeof b){c=a;var d=A(y());if(b.lastValidPosition>=g&&b.lastValidPosition==d){for(var h=!0,i=0;i<=d;i++){var j=w(i),k=x(i);if(j&&(void 0==e[i]||e[i]==H(i))||!j&&e[i]!=s()[k]){h=!1;break}}if(f=f||h)return!1}g=b.lastValidPosition}}),c=h,f}}function Q(a,b){return k?a-b>1||a-b==1&&d.insertMode:b-a>1||b-a==1&&d.insertMode}function R(b){var c=a._data(b).events;a.each(c,function(b,c){a.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){return this.readOnly||this.disabled?void a.preventDefault:c.apply(this,arguments)}}})})}function S(b){var c;if(Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value")),c&&c.get){if(!b._valueGet){var d=c.get,e=c.set;b._valueGet=function(){return k?d.call(this).split("").reverse().join(""):d.call(this)},b._valueSet=function(a){e.call(this,k?a.split("").reverse().join(""):a)},Object.defineProperty(b,"value",{get:function(){var b=a(this),c=a(this).data("_inputmask"),e=c.masksets,f=c.activeMasksetIndex;return c&&c.opts.autoUnmask?b.inputmask("unmaskedvalue"):d.call(this)!=e[f]._buffer.join("")?d.call(this):""},set:function(b){e.call(this,b),a(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&b.__lookupGetter__("value")){if(!b._valueGet){var d=b.__lookupGetter__("value"),e=b.__lookupSetter__("value");b._valueGet=function(){return k?d.call(this).split("").reverse().join(""):d.call(this)},b._valueSet=function(a){e.call(this,k?a.split("").reverse().join(""):a)},b.__defineGetter__("value",function(){var b=a(this),c=a(this).data("_inputmask"),e=c.masksets,f=c.activeMasksetIndex;return c&&c.opts.autoUnmask?b.inputmask("unmaskedvalue"):d.call(this)!=e[f]._buffer.join("")?d.call(this):""}),b.__defineSetter__("value",function(b){e.call(this,b),a(this).triggerHandler("setvalue.inputmask")})}}else if(b._valueGet||(b._valueGet=function(){return k?this.value.split("").reverse().join(""):this.value},b._valueSet=function(a){this.value=k?a.split("").reverse().join(""):a}),void 0==a.valHooks.text||1!=a.valHooks.text.inputmaskpatch){var d=a.valHooks.text&&a.valHooks.text.get?a.valHooks.text.get:function(a){return a.value},e=a.valHooks.text&&a.valHooks.text.set?a.valHooks.text.set:function(a,b){return a.value=b,a};jQuery.extend(a.valHooks,{text:{get:function(b){var c=a(b);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");var e=d(b),f=c.data("_inputmask"),g=f.masksets,h=f.activeMasksetIndex;return e!=g[h]._buffer.join("")?e:""}return d(b)},set:function(b,c){var d=a(b),f=e(b,c);return d.data("_inputmask")&&d.triggerHandler("setvalue.inputmask"),f},inputmaskpatch:!0}})}}function T(a,b,c,d){var e=t();if(d!==!1)for(;!w(a)&&a-1>=0;)a--;for(var f=a;f<b&&f<y();f++)if(w(f)){G(e,f);var g=z(f),h=C(e,g);if(h!=H(g))if(g<y()&&u(f,h,!0)!==!1&&r()[x(f)].def==r()[x(g)].def)B(e,f,h,!0);else if(w(f))break}else G(e,f);if(void 0!=c&&B(e,A(b),c),0==q().greedy){var i=K(e.join("")).split("");e.length=i.length;for(var f=0,j=e.length;f<j;f++)e[f]=i[f];0==e.length&&(q().buffer=s().slice())}return a}function U(a,b,c){var d=t();if(C(d,a,!0)!=H(a))for(var e=A(b);e>a&&e>=0;e--)if(w(e)){var f=A(e),g=C(d,f);g!=H(f)&&u(f,g,!0)!==!1&&r()[x(e)].def==r()[x(f)].def&&(B(d,e,g,!0),G(d,f))}else G(d,e);void 0!=c&&C(d,a)==H(a)&&B(d,a,c);var h=d.length;if(0==q().greedy){var i=K(d.join("")).split("");d.length=i.length;for(var e=0,j=d.length;e<j;e++)d[e]=i[e];0==d.length&&(q().buffer=s().slice())}return b-(h-d.length)}function V(a,c,e){if(d.numericInput||k){switch(c){case d.keyCode.BACKSPACE:c=d.keyCode.DELETE;break;case d.keyCode.DELETE:c=d.keyCode.BACKSPACE}if(k){var f=e.end;e.end=e.begin,e.begin=f}}var g=!0;if(e.begin==e.end){var h=c==d.keyCode.BACKSPACE?e.begin-1:e.begin;d.isNumeric&&""!=d.radixPoint&&t()[h]==d.radixPoint&&(e.begin=t().length-1==h?e.begin:c==d.keyCode.BACKSPACE?h:z(h),e.end=e.begin),g=!1,c==d.keyCode.BACKSPACE?e.begin--:c==d.keyCode.DELETE&&e.end++}else e.end-e.begin!=1||d.insertMode||(g=!1,c==d.keyCode.BACKSPACE&&e.begin--);F(t(),e.begin,e.end);var i=y();if(0==d.greedy)T(e.begin,i,void 0,!k&&c==d.keyCode.BACKSPACE&&!g);else{for(var j=e.begin,l=e.begin;l<e.end;l++)!w(l)&&g||(j=T(e.begin,i,void 0,!k&&c==d.keyCode.BACKSPACE&&!g));g||(e.begin=j)}var m=z(-1);F(t(),e.begin,e.end,!0),I(a,!1,void 0==b[1]||m>=e.end,t()),q().lastValidPosition<m?(q().lastValidPosition=-1,q().p=m):q().p=e.begin}function W(b){n=!1;var c=this,e=a(c),g=b.keyCode,h=O(c);g==d.keyCode.BACKSPACE||g==d.keyCode.DELETE||f&&127==g||b.ctrlKey&&88==g?(b.preventDefault(),88==g&&(l=t().join("")),V(c,g,h),v(),E(c,t(),q().p),c._valueGet()==s().join("")&&e.trigger("cleared"),d.showTooltip&&e.prop("title",q().mask)):g==d.keyCode.END||g==d.keyCode.PAGE_DOWN?setTimeout(function(){var a=z(q().lastValidPosition);d.insertMode||a!=y()||b.shiftKey||a--,O(c,b.shiftKey?h.begin:a,a)},0):g==d.keyCode.HOME&&!b.shiftKey||g==d.keyCode.PAGE_UP?O(c,0,b.shiftKey?h.begin:0):g==d.keyCode.ESCAPE||90==g&&b.ctrlKey?(I(c,!0,!1,l.split("")),e.click()):g!=d.keyCode.INSERT||b.shiftKey||b.ctrlKey?0!=d.insertMode||b.shiftKey||(g==d.keyCode.RIGHT?setTimeout(function(){var a=O(c);O(c,a.begin)},0):g==d.keyCode.LEFT&&setTimeout(function(){var a=O(c);O(c,a.begin-1)},0)):(d.insertMode=!d.insertMode,O(c,d.insertMode||h.begin!=y()?h.begin:h.begin-1));var i=O(c);d.onKeyDown.call(this,b,t(),d)===!0&&O(c,i.begin,i.end),p=a.inArray(g,d.ignorables)!=-1}function X(e,f,g,h,i,j){if(void 0==g&&n)return!1;n=!0;var k=this,l=a(k);e=e||window.event;var g=f?g:e.which||e.charCode||e.keyCode;if(!(f===!0||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||p))return!0;if(g){f!==!0&&46==g&&0==e.shiftKey&&","==d.radixPoint&&(g=44);var m,r,s,w=String.fromCharCode(g);if(f){var x=i?j:q().lastValidPosition+1;m={begin:x,end:x}}else m=O(k);var D=Q(m.begin,m.end),F=c;D&&(c=F,a.each(b,function(a,b){"object"==typeof b&&(c=a,q().undoBuffer=t().join(""))}),V(k,d.keyCode.DELETE,m),d.insertMode||a.each(b,function(a,b){"object"==typeof b&&(c=a,U(m.begin,y()),q().lastValidPosition=z(q().lastValidPosition))}),c=F);var G=t().join("").indexOf(d.radixPoint);d.isNumeric&&f!==!0&&G!=-1&&(d.greedy&&m.begin<=G?(m.begin=A(m.begin),m.end=m.begin):w==d.radixPoint&&(m.begin=G,m.end=m.begin));var I=m.begin;r=u(I,w,i),i===!0&&(r=[{activeMasksetIndex:c,result:r}]);var J=-1;if(a.each(r,function(a,b){c=b.activeMasksetIndex,q().writeOutBuffer=!0;var e=b.result;if(e!==!1){var f=!1,g=t();if(e!==!0&&(f=e.refresh,I=void 0!=e.pos?e.pos:I,w=void 0!=e.c?e.c:w),f!==!0){if(1==d.insertMode){for(var h=y(),j=g.slice();C(j,h,!0)!=H(h)&&h>=I;)h=0==h?-1:A(h);if(h>=I){U(I,y(),w);var k=q().lastValidPosition,l=z(k);l!=y()&&k>=I&&C(t().slice(),l,!0)!=H(l)&&(q().lastValidPosition=l)}else q().writeOutBuffer=!1}else B(g,I,w,!0);(J==-1||J>z(I))&&(J=z(I))}else if(!i){var m=I<y()?I+1:I;(J==-1||J>m)&&(J=m)}J>q().p&&(q().p=J)}}),i!==!0&&(c=F,v()),h!==!1&&(a.each(r,function(a,b){if(b.activeMasksetIndex==c)return s=b,!1}),void 0!=s)){var K=this;if(setTimeout(function(){d.onKeyValidation.call(K,s.result,d)},0),q().writeOutBuffer&&s.result!==!1){var M,L=t();M=f?void 0:d.numericInput?I>G?A(J):w==d.radixPoint?J-1:A(J-1):J,E(k,L,M),f!==!0&&setTimeout(function(){P(L)===!0&&l.trigger("complete"),o=!0,l.trigger("input")},0)}else D&&(q().buffer=q().undoBuffer.split(""))}d.showTooltip&&l.prop("title",q().mask),e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)}}function Y(b){var c=a(this),e=this,f=b.keyCode,g=t();d.onKeyUp.call(this,b,g,d),f==d.keyCode.TAB&&d.showMaskOnFocus&&(c.hasClass("focus.inputmask")&&0==e._valueGet().length?(g=s().slice(),E(e,g),O(e,0),l=t().join("")):(E(e,g),g.join("")==s().join("")&&a.inArray(d.radixPoint,g)!=-1?(O(e,N(0)),c.click()):O(e,N(0),N(y()))))}function Z(b){if(o===!0)return o=!1,!0;var c=this,d=a(c);I(c,!1,!1),E(c,t()),P(t())===!0&&d.trigger("complete"),d.click()}function $(b){if(o===!0)return o=!1,!0;var c=this,e=a(c),f=O(c),g=c._valueGet();g.charAt(f.begin)==t()[f.begin]||w(f.begin)?(I(c,!1,!1),E(c,t()),P(t())===!0&&e.trigger("complete"),e.click()):(b.keyCode=d.keyCode.BACKSPACE,W.call(c,b)),b.preventDefault()}function _(f){if(m=a(f),m.is(":input")){if(m.data("_inputmask",{masksets:b,activeMasksetIndex:c,opts:d,isRTL:!1}),d.showTooltip&&m.prop("title",q().mask),q().greedy=q().greedy?q().greedy:0==q().repeat,null!=m.attr("maxLength")){var g=m.prop("maxLength");g>-1&&a.each(b,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=g)}),y()>=g&&g>-1&&(g<s().length&&(s().length=g),0==q().greedy&&(q().repeat=Math.round(g/s().length)),m.prop("maxLength",2*y()))}if(S(f),d.numericInput&&(d.isNumeric=d.numericInput),("rtl"==f.dir||d.numericInput&&d.rightAlignNumerics||d.isNumeric&&d.rightAlignNumerics)&&m.css("text-align","right"),"rtl"==f.dir||d.numericInput){f.dir="ltr",m.removeAttr("dir");var h=m.data("_inputmask");h.isRTL=!0,m.data("_inputmask",h),k=!0}m.unbind(".inputmask"),m.removeClass("focus.inputmask"),m.closest("form").bind("submit",function(){l!=t().join("")&&m.change()}).bind("reset",function(){setTimeout(function(){m.trigger("setvalue")},0)}),m.bind("mouseenter.inputmask",function(){var b=a(this),c=this;!b.hasClass("focus.inputmask")&&d.showMaskOnHover&&c._valueGet()!=t().join("")&&E(c,t())}).bind("blur.inputmask",function(){var e=a(this),f=this,g=f._valueGet(),h=t();e.removeClass("focus.inputmask"),l!=t().join("")&&e.change(),d.clearMaskOnLostFocus&&""!=g&&(g==s().join("")?f._valueSet(""):L(f)),P(h)===!1&&(e.trigger("incomplete"),d.clearIncomplete&&(a.each(b,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),c=0,d.clearMaskOnLostFocus?f._valueSet(""):(h=s().slice(),E(f,h))))}).bind("focus.inputmask",function(){var b=a(this),c=this,e=c._valueGet();d.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==e)&&c._valueGet()!=t().join("")&&E(c,t(),z(q().lastValidPosition)),b.addClass("focus.inputmask"),l=t().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;d.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||c._valueGet()==b.attr("placeholder")||(c._valueGet()==s().join("")||""==c._valueGet()?c._valueSet(""):L(c)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var c=O(b),e=t();if(c.begin==c.end){var h,f=k?N(c.begin):c.begin,g=q().lastValidPosition;h=d.isNumeric&&d.skipRadixDance===!1&&""!=d.radixPoint&&a.inArray(d.radixPoint,e)!=-1?d.numericInput?z(a.inArray(d.radixPoint,e)):a.inArray(d.radixPoint,e):z(g),f<h?w(f)?O(b,f):O(b,z(f)):O(b,h)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){O(a,0,z(q().lastValidPosition))},0)}).bind(i+".inputmask dragdrop.inputmask drop.inputmask",function(b){if(o===!0)return o=!1,!0;var c=this,e=a(c);return"propertychange"==b.type&&c._valueGet().length<=y()||void setTimeout(function(){var a=void 0!=d.onBeforePaste?d.onBeforePaste.call(this,c._valueGet()):c._valueGet();I(c,!0,!1,a.split(""),!0),P(t())===!0&&e.trigger("complete"),e.click()},0)}).bind("setvalue.inputmask",function(){var a=this;I(a,!0),l=t().join(""),a._valueGet()==s().join("")&&a._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared).bind("keyup.inputmask",Y),m.bind("keydown.inputmask",W).bind("keypress.inputmask",X).bind("keyup.inputmask",Y),j&&m.bind("input.inputmask",$),e&&m.bind("input.inputmask",Z),I(f,!0,!1),l=t().join("");var n;try{n=document.activeElement}catch(a){}n===f?(m.addClass("focus.inputmask"),O(f,z(q().lastValidPosition))):d.clearMaskOnLostFocus?t().join("")==s().join("")?f._valueSet(""):L(f):E(f,t()),R(f)}}var m,k=!1,l=t().join(""),n=!1,o=!1,p=!1;if(void 0!=h)switch(h.action){case"isComplete":return P(h.buffer);case"unmaskedvalue":return k=h.$input.data("_inputmask").isRTL,M(h.$input,h.skipDatepickerCheck);case"mask":_(h.el);break;case"format":return m=a({}),m.data("_inputmask",{masksets:b,activeMasksetIndex:c,opts:d,isRTL:d.numericInput}),d.numericInput&&(d.isNumeric=d.numericInput,k=!0),I(m,!1,!1,h.value.split(""),!0),t().join("")}}if(void 0===a.fn.inputmask){var e=null!==navigator.userAgent.match(new RegExp("msie 10","i")),f=null!==navigator.userAgent.match(new RegExp("iphone","i")),g=null!==navigator.userAgent.match(new RegExp("android.*safari.*","i")),h=null!==navigator.userAgent.match(new RegExp("android.*chrome.*","i")),i=b("paste")?"paste":b("input")?"input":"propertychange",j=!1;if(h){var k=navigator.userAgent.match(new RegExp("chrome.*","i")),l=parseInt(new RegExp(/[0-9]+/).exec(k));j=32==l}a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:a.noop,onKeyDown:a.noop,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-zА-яЁё]",cardinality:1},"*":{validator:"[A-Za-zА-яЁё0-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(a,b,c,d,e){var f=a.length;return b||("*"==c?f=d.length+1:c>1&&(f+=a.length*(c-1))),f}},escapeRegex:function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},format:function(b,e){var f=a.extend(!0,{},a.inputmask.defaults,e);return c(f.alias,e,f),m(d(f),0,f,{action:"format",value:b})}},a.fn.inputmask=function(b,e){var g,f=a.extend(!0,{},a.inputmask.defaults,e),h=0;if("string"==typeof b)switch(b){case"mask":return c(f.alias,e,f),g=d(f),0==g.length?this:this.each(function(){m(a.extend(!0,{},g),0,f,{action:"mask",el:this})});case"unmaskedvalue":var i=a(this);return i.data("_inputmask")?(g=i.data("_inputmask").masksets,h=i.data("_inputmask").activeMasksetIndex,f=i.data("_inputmask").opts,m(g,h,f,{action:"unmaskedvalue",$input:i})):i.val();case"remove":return this.each(function(){var b=a(this),c=this;if(b.data("_inputmask")){g=b.data("_inputmask").masksets,h=b.data("_inputmask").activeMasksetIndex,f=b.data("_inputmask").opts,c._valueSet(m(g,h,f,{action:"unmaskedvalue",$input:b,skipDatepickerCheck:!0})),b.removeData("_inputmask"),b.unbind(".inputmask"),b.removeClass("focus.inputmask");var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(c,"value")),d&&d.get?c._valueGet&&Object.defineProperty(c,"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet));try{delete c._valueGet,delete c._valueSet}catch(a){c._valueGet=void 0,c._valueSet=void 0}}});case"getemptymask":return this.data("_inputmask")?(g=this.data("_inputmask").masksets,h=this.data("_inputmask").activeMasksetIndex,g[h]._buffer.join("")):"";case"hasMaskedValue":return!!this.data("_inputmask")&&!this.data("_inputmask").opts.autoUnmask;case"isComplete":return g=this.data("_inputmask").masksets,h=this.data("_inputmask").activeMasksetIndex,f=this.data("_inputmask").opts,m(g,h,f,{action:"isComplete",buffer:this[0]._valueGet().split("")});case"getmetadata":return this.data("_inputmask")?(g=this.data("_inputmask").masksets,h=this.data("_inputmask").activeMasksetIndex,g[h].metadata):void 0;default:return c(b,e,f)||(f.mask=b),g=d(f),0==g.length?this:this.each(function(){m(a.extend(!0,{},g),h,f,{action:"mask",el:this})})}else{if("object"==typeof b)return f=a.extend(!0,{},a.inputmask.defaults,b),c(f.alias,b,f),g=d(f),0==g.length?this:this.each(function(){m(a.extend(!0,{},g),h,f,{action:"mask",el:this})});if(void 0==b)return this.each(function(){var b=a(this).attr("data-inputmask");if(b&&""!=b)try{b=b.replace(new RegExp("'","g"),'"');var d=a.parseJSON("{"+b+"}");a.extend(!0,d,e),f=a.extend(!0,{},a.inputmask.defaults,d),c(f.alias,d,f),f.alias=void 0,a(this).inputmask(f)}catch(a){}})}}}}(jQuery);