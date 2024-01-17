import{c as d,h as g}from"./codemirror.es2-5884f31a.js";import{k as h}from"./dialog.es2-02b3b4e7.js";var b=Object.defineProperty,p=(c,l)=>b(c,"name",{value:l,configurable:!0});function f(c,l){for(var o=0;o<l.length;o++){const s=l[o];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in c)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(c,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}p(f,"_mergeNamespaces");var y={exports:{}};(function(c,l){(function(o){o(d(),h())})(function(o){o.defineOption("search",{bottom:!1});function s(e,r,n,t,u){e.openDialog?e.openDialog(r,u,{value:t,selectValueOnOpen:!0,bottom:e.options.search.bottom}):u(prompt(n,t))}p(s,"dialog");function i(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}p(i,"getJumpDialog");function a(e,r){var n=Number(r);return/^[-+]/.test(r)?e.getCursor().line+n:n-1}p(a,"interpretLine"),o.commands.jumpToLine=function(e){var r=e.getCursor();s(e,i(e),e.phrase("Jump to line:"),r.line+1+":"+r.ch,function(n){if(n){var t;if(t=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(n))e.setCursor(a(e,t[1]),Number(t[2]));else if(t=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(n)){var u=Math.round(e.lineCount()*Number(t[1])/100);/^[-+]/.test(t[1])&&(u=r.line+u+1),e.setCursor(u-1,r.ch)}else(t=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(n))&&e.setCursor(a(e,t[1]),r.ch)}})},o.keyMap.default["Alt-G"]="jumpToLine"})})();var m=y.exports;const v=g(m),x=f({__proto__:null,default:v},[m]);export{x as j};
