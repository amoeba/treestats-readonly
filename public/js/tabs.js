var tabs=function(){"use strict";var a="inactive",s=function(s){if(s){var e=-1,i=-1,r=s.parentNode.parentNode.childNodes;for(var c in r)if(t(r[c],"tabbar")){var n=r[c].childNodes;for(var o in n)t(n[o],"tab")&&(e+=1,n[o]==s?(i=e,n[o].classList.remove(a),n[o].classList.add("active")):(n[o].classList.add(a),n[o].classList.remove("active")))}if(s.parentNode&&s.parentNode.parentNode){var d=s.parentNode.parentNode.childNodes;for(var c in e=-1,d)t(d[c],"box")&&((e+=1)==i?(d[c].classList.remove(a),d[c].classList.add("active")):(d[c].classList.remove("active"),d[c].classList.add(a)))}}},t=function(a,s){return!(!a||!a.classList)&&a.classList.contains(s)};return function(a){for(var e=a.childNodes,i=0;i<e.length;i++)if(t(e[i],"tabbar"))for(var r=e[i].childNodes,c=0;c<r.length;c++)t(r[c],"tab")&&r[c].addEventListener("click",function(){s(this)},{passive:!0})}}();
//# sourceMappingURL=tabs.js.map
