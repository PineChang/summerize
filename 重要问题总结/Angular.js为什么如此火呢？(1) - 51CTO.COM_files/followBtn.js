var $Debug=(function(){var a=[];function c(f,k,d){var g;var j=f!=null?f:"";var h={color:null,bgcolor:null,html:null};var i=d!=null?d:"log";k=k!=null?k:{};for(g in h){if(k[g]!=null){h[g]=k[g]}}a.push({label:j,cmd:i,opts:h,time:new Date()})}function b(d,f){c(d,f,"log")}b.fatal=function(d,f){c(d,f,"fatal")};b.error=function(d,f){c(d,f,"error")};b.warning=function(d,f){c(d,f,"warning")};b.info=function(d,f){c(d,f,"info")};b.log=function(d,f){c(d,f,"log")};b.clear=function(){a=[]};b.contentList=a;return b})();var Jobs=(function(){var d=function(f){if(typeof f==="string"){return document.getElementById(f)}else{return f}};var c=function(f,i,h){var g=d(f);if(g==null){return}i=i||"click";if((typeof h).toLowerCase()!="function"){return}if(g.attachEvent){g.attachEvent("on"+i,h)}else{if(g.addEventListener){g.addEventListener(i,h,false)}else{g["on"+i]=h}}};var a=(function(){var g=[];var f=false;var h=function(){if(f==true){return}f=true;for(var k=0,j=g.length;k<j;k++){if((typeof g[k]).toLowerCase()=="function"){g[k].call()}}g=[]};if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if((/loaded|complete/).test(document.readyState)){h()}});if(window==window.top){setTimeout(function(){try{document.documentElement.doScroll("left")}catch(i){setTimeout(arguments.callee,0);return}h()},500)}}else{if(document.addEventListener){c(document,"DOMContentLoaded",h)}else{if(/WebKit/i.test(navigator.userAgent)){(function(){if(/loaded|complete/i.test(document.readyState)){h();return}setTimeout(arguments.callee,25)})()}}}c(window,"load",h);return function(i){if(f==false){g.push(i)}else{if((typeof i).toLowerCase()=="function"){i.call()}}}})();function b(){var h={};var f=[];function g(){var m=0;var k=f.length;var l,i,j;(function(){if(k>m){l=f[m];i=h[l];j=new Date();if(typeof i=="undefined"){$Debug.fatal("<b>Job ["+l+"] 未定义!</b>",{html:true});return}try{i.call()}catch(n){$Debug.fatal("<b>Job ["+l+"] 执行失败!</b><br/>&nbsp;"+n.name+"<br/>&nbsp;"+(n.message||n.description)+(n.fileName?"<br/>&nbsp;"+n.fileName:"")+(n.lineNumber?"<br/>&nbsp;"+n.lineNumber:""),{html:true})}finally{$Debug.info("<b>Job ["+l+"] 执行成功("+(new Date()-j)+"毫秒)</b>",{html:true})}m++;setTimeout(arguments.callee,25)}})()}this.regist=function(j,i){if(h[j]==null){h[j]=i}f.push(j)};a(g)}return new b()})();if(!$CONFIG){$CONFIG={}}var scope=$CONFIG;Function.prototype.bind2=function(b){var a=this;return function(){return a.apply(b,arguments)}};scope.$VERSION="t3";scope.$BASEIMG="http://timg.sjs.sinajs.cn/"+scope.$VERSION+"/";scope.$BASECSS="http://timg.sjs.sinajs.cn/"+scope.$VERSION+"/";scope.$BASEJS="http://tjs.sjs.sinajs.cn/"+scope.$VERSION+"/";scope.$BASESTATIC="http://tjs.sjs.sinajs.cn/"+scope.$VERSION+"/";scope._ua=navigator.userAgent.toLowerCase();scope.$IE=/msie/.test(scope._ua);scope.$OPERA=/opera/.test(scope._ua);scope.$MOZ=/gecko/.test(scope._ua);scope.$IE5=/msie 5 /.test(scope._ua);scope.$IE55=/msie 5.5/.test(scope._ua);scope.$IE6=/msie 6/.test(scope._ua);scope.$IE7=/msie 7/.test(scope._ua);scope.$SAFARI=/safari/.test(scope._ua);scope.$winXP=/windows nt 5.1/.test(scope._ua);scope.$winVista=/windows nt 6.0/.test(scope._ua);var $IE=scope.$IE,$MOZ=scope.$MOZ,$IE6=scope.$IE6;function $import(a){}var Boot={};Boot.addDOMLoadEvent=function(a){if(!window.__load_events){var b=function(){if(arguments.callee.done){return}arguments.callee.done=true;if(window.__load_timer){clearInterval(window.__load_timer);window.__load_timer=null}for(var c=0;c<window.__load_events.length;c++){window.__load_events[c]()}window.__load_events=null};if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false)}if(/WebKit/i.test(navigator.userAgent)){window.__load_timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){b()}},10)}if(window.ActiveXObject){window.__load_timer=setInterval(function(){try{document.body.doScroll("left");b()}catch(c){}},10)}window.onload=b;window.__load_events=[]}window.__load_events.push(a)};Boot.getJsVersion=function(){var a=false;if($CONFIG){a=$CONFIG.js?$CONFIG.js:""}if(a){return"?v="+a}else{return""}};try{Boot.addDOMLoadEvent(main)}catch(e){}if(typeof Sina=="undefined"){Sina={}}Sina.pkg=function(c){if(!c||!c.length){return null}var d=c.split(".");var b=Sina;for(var a=(d[0]=="Sina")?1:0;a<d.length;++a){b[d[a]]=b[d[a]]||{};b=b[d[a]]}return b};function $E(b){var a=typeof b=="string"?document.getElementById(b):b;if(a!=null){return a}else{}return null}function $C(a){return document.createElement(a)}function $N(a){return document.getElementsByName(a)}try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}if(typeof App=="undefined"){var App={}}Sina.pkg("Core");if(typeof Core=="undefined"){Core=Sina.Core}Sina.pkg("Core.Events");Core.Events.addEvent=function(g,d,c,a){var f=$E(g);if(f==null){$Debug("addEvent 找不到对象："+g);return}if(typeof a=="undefined"){a=false}if(typeof c=="undefined"){c="click"}if(f.addEventListener){f.addEventListener(c,d,a);return true}else{if(f.attachEvent){var b=f.attachEvent("on"+c,d);return true}else{f["on"+c]=d}}};Sina.pkg("Core.Base");(function(){var a=function(){var b=navigator.userAgent.toLowerCase();this.$IE=/msie/.test(b);this.$OPERA=/opera/.test(b);this.$MOZ=/gecko/.test(b);this.$IE5=/msie 5 /.test(b);this.$IE55=/msie 5.5/.test(b);this.$IE6=/msie 6/.test(b);this.$IE7=/msie 7/.test(b);this.$SAFARI=/safari/.test(b);this.$winXP=/windows nt 5.1/.test(b);this.$winVista=/windows nt 6.0/.test(b);this.$FF2=/Firefox\/2/i.test(b);this.$IOS=/\((iPhone|iPad|iPod)/i.test(b)};Core.Base.detect=new a()})();Core.Events.getEvent=function(){return window.event};if(!Core.Base.detect.$IE){Core.Events.getEvent=function(){if(window.event){return window.event}var b=arguments.callee.caller;var a;var c=0;while(b!=null&&c<40){a=b.arguments[0];if(a&&(a.constructor==Event||a.constructor==MouseEvent)){return a}c++;b=b.caller}return a}}Core.Events.stopEvent=function(a){var b=a?a:Core.Events.getEvent();b.cancelBubble=true;b.returnValue=false};if(!$IE){Core.Events.stopEvent=function(a){var b=a?a:Core.Events.getEvent();b.preventDefault();b.stopPropagation()}}Sina.pkg("Core.String");Core.String.byteLength=function(b){if(typeof b=="undefined"){return 0}var a=b.match(/[^\x00-\x80]/g);return(b.length+(!a?0:a.length))};Sina.pkg("Core.Dom");Core.Dom.getElementsByClass=function(c,b,h){c=c||document;var d=[];h=" "+h+" ";var k=c.getElementsByTagName(b),g=k.length;for(var f=0;f<g;++f){var a=k[f];if(a.nodeType==1){var j=" "+a.className+" ";if(j.indexOf(h)!=-1){d[d.length]=a}}}return d};Core.Dom.byClz=Core.Dom.getElementsByClass;Sina.pkg("Core.Array");Core.Array.foreach=function(d,c){if(d==null&&d.constructor!=Array){return[]}var f=0,b=d.length,g=[];while(f<b){var a=c(d[f],f);if(a!==null){g[g.length]=a}f++}return g};Sina.pkg("Utils");if(typeof Utils=="undefined"){Utils=Sina.Utils}Sina.pkg("Utils.Io");Utils.Url=function(a){a=a||"";this.url=a;this.query={};this.parse()};Utils.Url.prototype={parse:function(a){if(a){this.url=a}this.parseAnchor();this.parseParam()},parseAnchor:function(){var a=this.url.match(/\#(.*)/);a=a?a[1]:null;this._anchor=a;if(a!=null){this.anchor=this.getNameValuePair(a);this.url=this.url.replace(/\#.*/,"")}},parseParam:function(){var a=this.url.match(/\?([^\?]*)/);a=a?a[1]:null;if(a!=null){this.url=this.url.replace(/\?([^\?]*)/,"");this.query=this.getNameValuePair(a)}},getNameValuePair:function(b){var a={};b.replace(/([^&=]*)(?:\=([^&]*))?/gim,function(c,f,d){if(f==""){return}a[f]=d||""});return a},getParam:function(a){return this.query[a]||""},clearParam:function(){this.query={}},setParam:function(a,b){if(a==null||a==""||typeof(a)!="string"){throw new Error("no param name set")}this.query=this.query||{};this.query[a]=b},setParams:function(a){this.query=a},serialize:function(c){var a=[];for(var b in c){if(c[b]==null||c[b]==""){a.push(b+"=")}else{a.push(b+"="+c[b])}}return a.join("&")},toString:function(){var a=this.serialize(this.query);return this.url+(a.length>0?"?"+a:"")+(this.anchor?"#"+this.serialize(this.anchor):"")},getHashStr:function(a){return this.anchor?"#"+this.serialize(this.anchor):(a?"#":"")}};Core.String.encodeDoubleByte=function(a){if(typeof a!="string"){return a}return encodeURIComponent(a)};Utils.Io.Ajax={createRequest:function(){var c=null;try{c=new XMLHttpRequest()}catch(b){try{c=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{c=ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}}if(c==null){$Debug.error("<b>create request failed</b>",{html:true})}else{return c}},request:function(a,b){b=b||{};b.onComplete=b.onComplete||function(){};b.onException=b.onException||function(){};b.onTimeout=b.onTimeout||function(){};b.timeout=b.timeout?b.timeout:-1;b.returnType=b.returnType||"txt";b.method=b.method||"get";b.data=b.data||{};b.headers=b.headers||{};if(typeof b.GET!="undefined"&&typeof b.GET.url_random!="undefined"&&b.GET.url_random==0){this.rand=false;b.GET.url_random=null}this.loadData(a,b)},loadData:function(url,option){var request=this.createRequest(),tmpArr=[];var _url=new Utils.Url(url),item;var timer;if(option.POST){for(var postkey in option.POST){var postvalue=option.POST[postkey];if(postvalue!=null){tmpArr.push(postkey+"="+Core.String.encodeDoubleByte(postvalue))}}}var sParameter=tmpArr.join("&")||"";if(option.GET){for(var key in option.GET){if(key!="url_random"){_url.setParam(key,Core.String.encodeDoubleByte(option.GET[key]))}}}if(this.rand!=false){_url.setParam("rnd",Math.random())}if(option.timeout>-1){timer=setTimeout(option.onTimeout,option.timeout)}request.onreadystatechange=function(){if(request.readyState==4){var response,type=option.returnType;try{switch(type){case"txt":response=request.responseText;break;case"xml":if(Core.Base.detect.$IE){response=request.responseXML}else{var Dparser=new DOMParser();response=Dparser.parseFromString(request.responseText,"text/xml")}break;case"json":response=eval("("+request.responseText+")");break}option.onComplete(response);clearTimeout(timer)}catch(e){option.onException(e.message,_url);return false}}};try{if(option.POST){request.open("POST",_url,true);request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(option.headers){for(item in option.headers){request.setRequestHeader(item,option.headers[item])}}request.send(sParameter)}else{request.open("GET",_url,true);if(option.headers){for(item in option.headers){request.setRequestHeader(item,option.headers[item])}}request.send(null)}}catch(e){option.onException(e.message,_url);return false}}};scope.loginKit=function(){var b=document.cookie+";";var g=["SUP","=([^;]*)?;"].join("");var a=["(\\?|&)","uid","=([^&]*)(&|$)"].join("");var f=b.match(new RegExp(g,"i"));f=(f)?f[1]||"":"";f=unescape(f);var c=f.match(new RegExp(a));c=(c)?c[2]||"":"";var d=scope["$oid"];return{uid:c,isLogin:!!c,isAdmin:c&&d&&(c==d)}};scope.$isLogin=function(){return scope.loginKit().isLogin};scope.$isAdmin=function(){return scope.loginKit().isAdmin};var sysLang={zh_cn:{n001:"一键关注",n002:"请选择关注对象",n003:"已关注",n004:"请登录",n005:"开通微博",n006:"请重试",n007:"您确定要关注",n008:"这",n009:"个用户吗？"},zh_tw:{n001:"一鍵關注",n002:"請選擇關注對象",n003:"已關注",n004:"請登入",n005:"開通微博",n006:"請重試",n007:"您確定要關注",n008:"這",n009:"個用戶嗎？"}},Lang;Jobs.regist("Language_init",function(){Lang=sysLang[$CONFIG.$language?$CONFIG.$language:"zh_cn"]});(function(o){var h=0;var q="";var d=8;o.hex_md5=function(t){return i(g(k(t),t.length*d))};o.b64_md5=function(t){return n(g(k(t),t.length*d))};o.str_md5=function(t){return r(g(k(t),t.length*d))};o.hex_hmac_md5=function(t,u){return i(j(t,u))};o.b64_hmac_md5=function(t,u){return n(j(t,u))};o.str_hmac_md5=function(t,u){return r(j(t,u))};function s(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function g(E,z){E[z>>5]|=128<<((z)%32);E[(((z+64)>>>9)<<4)+14]=z;var D=1732584193;var C=-271733879;var B=-1732584194;var A=271733878;for(var v=0;v<E.length;v+=16){var y=D;var w=C;var u=B;var t=A;D=b(D,C,B,A,E[v+0],7,-680876936);A=b(A,D,C,B,E[v+1],12,-389564586);B=b(B,A,D,C,E[v+2],17,606105819);C=b(C,B,A,D,E[v+3],22,-1044525330);D=b(D,C,B,A,E[v+4],7,-176418897);A=b(A,D,C,B,E[v+5],12,1200080426);B=b(B,A,D,C,E[v+6],17,-1473231341);C=b(C,B,A,D,E[v+7],22,-45705983);D=b(D,C,B,A,E[v+8],7,1770035416);A=b(A,D,C,B,E[v+9],12,-1958414417);B=b(B,A,D,C,E[v+10],17,-42063);C=b(C,B,A,D,E[v+11],22,-1990404162);D=b(D,C,B,A,E[v+12],7,1804603682);A=b(A,D,C,B,E[v+13],12,-40341101);B=b(B,A,D,C,E[v+14],17,-1502002290);C=b(C,B,A,D,E[v+15],22,1236535329);D=f(D,C,B,A,E[v+1],5,-165796510);A=f(A,D,C,B,E[v+6],9,-1069501632);B=f(B,A,D,C,E[v+11],14,643717713);C=f(C,B,A,D,E[v+0],20,-373897302);D=f(D,C,B,A,E[v+5],5,-701558691);A=f(A,D,C,B,E[v+10],9,38016083);B=f(B,A,D,C,E[v+15],14,-660478335);C=f(C,B,A,D,E[v+4],20,-405537848);D=f(D,C,B,A,E[v+9],5,568446438);A=f(A,D,C,B,E[v+14],9,-1019803690);B=f(B,A,D,C,E[v+3],14,-187363961);C=f(C,B,A,D,E[v+8],20,1163531501);D=f(D,C,B,A,E[v+13],5,-1444681467);A=f(A,D,C,B,E[v+2],9,-51403784);B=f(B,A,D,C,E[v+7],14,1735328473);C=f(C,B,A,D,E[v+12],20,-1926607734);D=l(D,C,B,A,E[v+5],4,-378558);A=l(A,D,C,B,E[v+8],11,-2022574463);B=l(B,A,D,C,E[v+11],16,1839030562);C=l(C,B,A,D,E[v+14],23,-35309556);D=l(D,C,B,A,E[v+1],4,-1530992060);A=l(A,D,C,B,E[v+4],11,1272893353);B=l(B,A,D,C,E[v+7],16,-155497632);C=l(C,B,A,D,E[v+10],23,-1094730640);D=l(D,C,B,A,E[v+13],4,681279174);A=l(A,D,C,B,E[v+0],11,-358537222);B=l(B,A,D,C,E[v+3],16,-722521979);C=l(C,B,A,D,E[v+6],23,76029189);D=l(D,C,B,A,E[v+9],4,-640364487);A=l(A,D,C,B,E[v+12],11,-421815835);B=l(B,A,D,C,E[v+15],16,530742520);C=l(C,B,A,D,E[v+2],23,-995338651);D=a(D,C,B,A,E[v+0],6,-198630844);A=a(A,D,C,B,E[v+7],10,1126891415);B=a(B,A,D,C,E[v+14],15,-1416354905);C=a(C,B,A,D,E[v+5],21,-57434055);D=a(D,C,B,A,E[v+12],6,1700485571);A=a(A,D,C,B,E[v+3],10,-1894986606);B=a(B,A,D,C,E[v+10],15,-1051523);C=a(C,B,A,D,E[v+1],21,-2054922799);D=a(D,C,B,A,E[v+8],6,1873313359);A=a(A,D,C,B,E[v+15],10,-30611744);B=a(B,A,D,C,E[v+6],15,-1560198380);C=a(C,B,A,D,E[v+13],21,1309151649);D=a(D,C,B,A,E[v+4],6,-145523070);A=a(A,D,C,B,E[v+11],10,-1120210379);B=a(B,A,D,C,E[v+2],15,718787259);C=a(C,B,A,D,E[v+9],21,-343485551);D=m(D,y);C=m(C,w);B=m(B,u);A=m(A,t)}return Array(D,C,B,A)}function c(A,w,v,u,z,y){return m(p(m(m(w,A),m(u,y)),z),v)}function b(w,v,B,A,u,z,y){return c((v&B)|((~v)&A),w,v,u,z,y)}function f(w,v,B,A,u,z,y){return c((v&A)|(B&(~A)),w,v,u,z,y)}function l(w,v,B,A,u,z,y){return c(v^B^A,w,v,u,z,y)}function a(w,v,B,A,u,z,y){return c(B^(v|(~A)),w,v,u,z,y)}function j(v,y){var x=k(v);if(x.length>16){x=g(x,v.length*d)}var t=Array(16),w=Array(16);for(var u=0;u<16;u++){t[u]=x[u]^909522486;w[u]=x[u]^1549556828}var z=g(t.concat(k(y)),512+y.length*d);return g(w.concat(z),512+128)}function m(t,w){var v=(t&65535)+(w&65535);var u=(t>>16)+(w>>16)+(v>>16);return(u<<16)|(v&65535)}function p(t,u){return(t<<u)|(t>>>(32-u))}function k(w){var v=Array();var t=(1<<d)-1;for(var u=0;u<w.length*d;u+=d){v[u>>5]|=(w.charCodeAt(u/d)&t)<<(u%32)}return v}function r(v){var w="";var t=(1<<d)-1;for(var u=0;u<v.length*32;u+=d){w+=String.fromCharCode((v[u>>5]>>>(u%32))&t)}return w}function i(v){var u=h?"0123456789ABCDEF":"0123456789abcdef";var w="";for(var t=0;t<v.length*4;t++){w+=u.charAt((v[t>>2]>>((t%4)*8+4))&15)+u.charAt((v[t>>2]>>((t%4)*8))&15)}return w}function n(w){var v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var y="";for(var u=0;u<w.length*4;u+=3){var x=(((w[u>>2]>>8*(u%4))&255)<<16)|(((w[u+1>>2]>>8*((u+1)%4))&255)<<8)|((w[u+2>>2]>>8*((u+2)%4))&255);for(var t=0;t<4;t++){if(u*8+t*6>w.length*32){y+=q}else{y+=v.charAt((x>>6*(3-t))&63)}}}return y}})(App);Jobs.regist("base_init",function(){setTimeout(function(){App.setTextAlign()},10);var a=scope.loginKit().isLogin;if(!a&&$E("reg_btn")){$E("reg_btn").style.display=""}});App.setTextAlign=function(){var a=Core.Dom.getElementsByClass(null,"div","vf_info");Core.Array.foreach(a,function(d,c){var b=Core.String.byteLength(d.innerHTML);if(b*6>105){d.className="vf_info txt_left"}})};Jobs.regist("init_widget",function(){var m=function(n,o){return(o||document).getElementsByTagName(n||"*")};var a=/chrome/.test(navigator.userAgent.toLowerCase());scope.postLogin=0;var l=function(u){var v=[],r=[],s,o;for(var q=0,t=u.length;q<t;q++){o=u[q];s=o.getAttribute("uid");if(s){v.push(o);r.push(s)}}r=encodeURIComponent(r.join(",")||"");var n=scope.loginKit().uid;var p=new Image();p.src="http://rs.sinajs.cn/a.gif?uid="+n+"&uids="+r+"&refer="+(scope.refer||"")+"&url="+encodeURIComponent(document.referrer)+"&login="+(scope.loginKit().isLogin?1:0)+"&rnd="+new Date().valueOf();return v};var b=m("ul")[0],d=m("span",b),f=false;if(d.length==0){f=true;d=m("input",b)}var g=l(m("a",b));Core.Array.foreach(d,function(p,o){var n=g[o];if(f){p.checked=(n.className=="current")}Core.Events.addEvent(p,function(){if(!f){Core.Events.stopEvent();n.className=(n.className=="")?"current":""}else{n.className=p.checked?"current":""}if(n.className=="current"){App.showFollowBtn()}},"click")});b=d=l=null;App.showFollowBtn=function(){};App.followAll=function(n){if(!scope.loginKit().isLogin){App.loginIframe(n);return}var s=[];Core.Array.foreach(g,function(C,B){if(C.className=="current"){s.push(C.getAttribute("uid"))}});var x=n&&n.parentNode;var o=function(C,B){if(x){x.innerHTML="<span "+(B?'onclick="App.followAll( this );"':"")+' class="btndisable_l concern_done"><em>'+C+"</em></span>"}};App.showFollowBtn=function(){if(x){x.innerHTML='<a onclick="App.followAll( this );" href="javascript:;" class="btngreen_l"><em><span>'+Lang.n001+"</span></em></a>"}};if(s.length==0){o(Lang.n002);return}if(n&&n.tagName.toLocaleLowerCase()=="a"){var z=n.getElementsByTagName("span")[0];if(z){z.className="ico_lding";n.className="btngreen_l btngreen_l_wdt1"}}var w="/widget/relationship/aj_follow.php";if(/weibo.com/.test(location.host)){w=w.replace(/\/widget/,"")}var u=document.getElementsByTagName("img"),t=[];var y=true;if(typeof $CONFIG!="undefined"&&typeof $CONFIG.$confirm!="undefined"){y=($CONFIG.$confirm!=1)}if(y){for(var p=0,r=u.length;p<r;p++){var A=u[p];if(/^http:\/\/tp\d\.sinaimg\.cn/.test(A.src)&&A.parentNode.className=="current"){t.push(A.getAttribute("title"))}}if(window.confirm(Lang.n007+"【"+t.slice(0,3).join("、")+"】"+(s.length>3?"等":Lang.n008)+s.length+Lang.n009)){q()}else{z.className="";n.className="btngreen_l"}}else{q()}function q(){var B=v();Utils.Io.Ajax.request(w,{POST:{uids:s.join(","),appkey:scope.$appkey,login:scope.postLogin,ch:scope.ch||"",refer:scope.refer||"",refer_url:document.referrer},headers:{Etag:B||""},onComplete:function(C){var D=C&&C.code;if(D=="A00006"){o(Lang.n003);try{SUDA.uaTrack("weibo_bulkfollow_widget","loginfollow:::"+s.join(","))}catch(E){}}else{if(D=="M00005"){o(Lang.n004,true);if(!a){try{App.loginIframe(x.getElementsByTagName("a")[0])}catch(E){}}}else{if(D=="M00006"){if(x){x.innerHTML='<a class="btngreen_l" href="javascript:;" onclick="App.loginIframe( this );" user_count="widget_bulkfollow_fullinfo"><em><span>'+Lang.n005+"</span></em></a>"}if(!a){try{App.loginIframe(x.getElementsByTagName("a")[0])}catch(E){}}}else{var F=C&&C.data||Lang.n006;o(F,true)}}}},onException:function(C){o(Lang.n006,true)},returnType:"json"})}function v(){var B=scope.loginKit().uid.substr(0,5)+conf.js.substr(0,6)+"relationship";B=App.hex_md5(B);B=B.substr(4,10);return B}};App.loginIframe=function(p){var q=function(t){t=t||"1";var s=scope.loginKit().uid;(new Image()).src="http://rs.sinajs.cn/r.gif?uid="+s+"&appid="+$CONFIG.$appkey+"&refer="+(scope.refer||"")+"&cat=3&step="+t+"&rnd="+(+new Date())};App.loginBackUrlCallBack=function(){q(2);App.followAll(p)};scope.postLogin=1;var r=[];Core.Array.foreach(g,function(t,s){if(t.className=="current"){r.push(t.getAttribute("uid"))}});var o="http://service.weibo.com/reg/loginindex.php?regbackurl=http%3A%2F%2Fweibo.com&backurl=http%3A%2F%2F"+location.host+"%2Fstaticjs%2FloginProxy.html&vsrc=app_bulkfollow&appsrc="+scope.$appsrc+"&showlogo=0&invitecode="+r.join(",")+"&rnd="+(new Date().valueOf());if(/weibo.com/.test(location.host)){o=o.replace(/\/widget/,"")}if(scope.$spr){o+="&c="+scope.$spr}var n=window.open(o,"miniblog_login",["toolbar=0,status=0,resizable=1,width=620,height=540,left=",(screen.width-620)/2,",top=",(screen.height-450)/2].join(""));n.focus();q()};try{var j=Core.Dom.getElementsByClass(null,"ul","t_user_lst")[0];var k=j.parentNode.offsetWidth-2-14;var i=j.getElemensByTagName("li");if((k/86)>=i.length){var c=(k%86)/2>>0;if(c<7){return}j.style.margin="0 "+c+"px"}}catch(h){}});