(this["webpackJsonpdrag-and-paste-example"]=this["webpackJsonpdrag-and-paste-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(2);var r=n(0),a=n.n(r),i=n(3),o=n.n(i),s=n(1);function u(e,t){if(!t)return!0;var n=t.split(",").map((function(e){return/^\./.test(e)?{suffix:e.substr(1)}:{mime:e.split("/")}})).filter((function(e){return e.suffix||e.mime&&2===e.mime.length&&e.mime[0]&&e.mime[1]}));if(!n.length)return!0;var r=e.type.split("/"),a=r[0],i=r[1],o=e.name;return n.some((function(e){return e.suffix?e.suffix===o.split(".").pop():!!e.mime&&(e.mime[0]===a&&("*"===e.mime[1]||e.mime[1]===i))}))}var f=function(e,t){var n=a.a.useState([]),r=n[0],i=n[1],o=a.a.useRef(null);return a.a.useEffect((function(){var n=o.current;function r(e){var n=e.clipboardData&&e.clipboardData.items;if(n&&n.length)for(var r=0;r<n.length;r+=1){var a=n[r];if("file"===a.kind){var o=a.getAsFile();o&&u(o,t)&&i([o]);break}}}function a(n){if(n.preventDefault(),n.stopPropagation(),n.dataTransfer&&n.dataTransfer.files){var r=Array.from(n.dataTransfer.files).filter((function(e){return u(e,t)}));i(e?r:r.slice(0,1))}}function s(e){e.preventDefault()}return n&&(n.addEventListener("paste",r),n.addEventListener("drop",a),n.addEventListener("dragenter",s),n.addEventListener("dragover",s)),function(){n&&(n.removeEventListener("paste",r),n.removeEventListener("drop",a),n.removeEventListener("dragenter",s),n.removeEventListener("dragover",s))}}),[t,e]),[o,r]};function l(){var e=f(),t=Object(s.a)(e,2),n=t[0],r=t[1],i=a.a.useState(!1),o=Object(s.a)(i,2),u=o[0],l=o[1];return a.a.useEffect((function(){console.log("New Files",r)}),[r]),a.a.createElement("div",{ref:n,className:"app".concat(u?" focused":""),tabIndex:-1,onDragEnter:function(){return l(!0)},onDragLeave:function(){return l(!1)},onMouseLeave:function(){return u&&l(!1)}},"Drop Or Paste Here.",a.a.createElement("br",null),"Open DevTools Console",a.a.createElement("br",null),"paste only support image")}o.a.render(a.a.createElement(l,null),document.getElementById("root"))},2:function(e,t,n){},4:function(e,t,n){e.exports=n(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.f5251671.chunk.js.map