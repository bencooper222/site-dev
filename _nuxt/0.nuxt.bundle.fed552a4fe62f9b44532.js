webpackJsonp([0],{141:function(e,t,n){function a(e){n(163)}var i=n(17)(n(143),n(158),a,null,null);e.exports=i.exports},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{white:{type:Boolean,default:!1}}}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(149),i=n.n(a),o=n(155),s=n.n(o),r=n(156),l=n.n(r),d=n(154),A=n.n(d);t.default={components:{mlhbadge:s.a,separator:l.a,infobox:A.a},mounted:function(){this.rellax=new i.a(".parallax")},destroyed:function(){this.rellax.destroy()}}},145:function(e,t,n){t=e.exports=n(25)(!0),t.push([e.i,".scroll-container{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column}.scroll-container,.top-viewport{display:-webkit-box;display:-ms-flexbox;display:flex}.top-viewport{height:100vh}.title-text{margin-top:17.5vh;z-index:-2;position:absolute;text-align:center;left:0;right:0}.title{width:290px}@media (min-width:360px){.title{width:320px}}@media (min-width:432px){.title{width:390px}}@media (min-width:576px){.title{width:495px}}@media (min-width:768px){.title{width:635px}}.subtitle{font-size:16px;color:#374c5f}@media (min-width:360px){.subtitle{font-size:18px}}@media (min-width:432px){.subtitle{font-size:22px}}@media (min-width:576px){.subtitle{font-size:28px}}@media (min-width:768px){.subtitle{font-size:36px}}.batman-building{position:absolute;max-width:512px;left:0;right:0;margin:33vh auto 0;z-index:-1}.page-content{background:#fff;z-index:1}.feature-block{padding:36px}@media (min-width:768px){.feature-block{padding:60px}}.text-contents{max-width:1200px;margin-left:auto;margin-right:auto}.text-contents h1{text-align:center}@media (min-width:768px){.text-contents h1{font-size:36px}}.description{background:#253340;color:#fff}.schedule{background:#626a73;color:#fff}","",{version:3,sources:["C:/Users/Yunyu/Documents/vandyhacks/pages/index.vue"],names:[],mappings:"AACA,kBAAkB,iBAAiB,4BAA4B,6BAA6B,qBAAqB,gBAAiB,CACjI,AACD,gCAFkI,oBAAoB,oBAAoB,YAAY,CAGrL,AADD,cAAmE,YAAY,CAC9E,AACD,YAAY,kBAAkB,WAAW,kBAAkB,kBAAkB,OAAO,OAAO,CAC1F,AACD,OAAO,WAAW,CACjB,AACD,yBACA,OAAO,WAAW,CACjB,CACA,AACD,yBACA,OAAO,WAAW,CACjB,CACA,AACD,yBACA,OAAO,WAAW,CACjB,CACA,AACD,yBACA,OAAO,WAAW,CACjB,CACA,AACD,UAAU,eAAe,aAAa,CACrC,AACD,yBACA,UAAU,cAAc,CACvB,CACA,AACD,yBACA,UAAU,cAAc,CACvB,CACA,AACD,yBACA,UAAU,cAAc,CACvB,CACA,AACD,yBACA,UAAU,cAAc,CACvB,CACA,AACD,iBAAiB,kBAAkB,gBAAgB,OAAO,QAAQ,mBAAmB,UAAU,CAC9F,AACD,cAAc,gBAAgB,SAAS,CACtC,AACD,eAAe,YAAY,CAC1B,AACD,yBACA,eAAe,YAAY,CAC1B,CACA,AACD,eAAe,iBAAiB,iBAAiB,iBAAiB,CACjE,AACD,kBAAkB,iBAAiB,CAClC,AACD,yBACA,kBAAkB,cAAc,CAC/B,CACA,AACD,aAAa,mBAAmB,UAAW,CAC1C,AACD,UAAU,mBAAmB,UAAW,CACvC",file:"index.vue",sourcesContent:["\n.scroll-container{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.top-viewport{display:-webkit-box;display:-ms-flexbox;display:flex;height:100vh\n}\n.title-text{margin-top:17.5vh;z-index:-2;position:absolute;text-align:center;left:0;right:0\n}\n.title{width:290px\n}\n@media (min-width: 360px){\n.title{width:320px\n}\n}\n@media (min-width: 432px){\n.title{width:390px\n}\n}\n@media (min-width: 576px){\n.title{width:495px\n}\n}\n@media (min-width: 768px){\n.title{width:635px\n}\n}\n.subtitle{font-size:16px;color:#374c5f\n}\n@media (min-width: 360px){\n.subtitle{font-size:18px\n}\n}\n@media (min-width: 432px){\n.subtitle{font-size:22px\n}\n}\n@media (min-width: 576px){\n.subtitle{font-size:28px\n}\n}\n@media (min-width: 768px){\n.subtitle{font-size:36px\n}\n}\n.batman-building{position:absolute;max-width:512px;left:0;right:0;margin:33vh auto 0;z-index:-1\n}\n.page-content{background:#fff;z-index:1\n}\n.feature-block{padding:36px\n}\n@media (min-width: 768px){\n.feature-block{padding:60px\n}\n}\n.text-contents{max-width:1200px;margin-left:auto;margin-right:auto\n}\n.text-contents h1{text-align:center\n}\n@media (min-width: 768px){\n.text-contents h1{font-size:36px\n}\n}\n.description{background:#253340;color:white\n}\n.schedule{background:#626a73;color:white\n}\n"],sourceRoot:""}])},146:function(e,t,n){t=e.exports=n(25)(!0),t.push([e.i,".separator[data-v-7abaaae3]{width:60px;height:4px;background:#000;margin:20px auto}.separator.white[data-v-7abaaae3]{background:#fff}","",{version:3,sources:["C:/Users/Yunyu/Documents/vandyhacks/components/Separator.vue"],names:[],mappings:"AACA,4BAA4B,WAAW,WAAW,gBAAgB,gBAAgB,CACjF,AACD,kCAAkC,eAAe,CAChD",file:"Separator.vue",sourcesContent:["\n.separator[data-v-7abaaae3]{width:60px;height:4px;background:#000;margin:20px auto\n}\n.separator.white[data-v-7abaaae3]{background:#fff\n}\n"],sourceRoot:""}])},147:function(e,t,n){t=e.exports=n(25)(!0),t.push([e.i,"#mlh-trust-badge{display:block;min-width:50px;max-width:50px;position:absolute;right:15px;top:0;width:10%;z-index:0}@media (min-width:960px){#mlh-trust-badge{max-width:75px;right:35px}}@media (min-width:1200px){#mlh-trust-badge{max-width:96px;right:50px}}","",{version:3,sources:["C:/Users/Yunyu/Documents/vandyhacks/components/MlhBadge.vue"],names:[],mappings:"AACA,iBAAiB,cAAc,eAAe,eAAe,kBAAkB,WAAW,MAAM,UAAU,SAAS,CAClH,AACD,yBACA,iBAAiB,eAAe,UAAU,CACzC,CACA,AACD,0BACA,iBAAiB,eAAe,UAAU,CACzC,CACA",file:"MlhBadge.vue",sourcesContent:["\n#mlh-trust-badge{display:block;min-width:50px;max-width:50px;position:absolute;right:15px;top:0;width:10%;z-index:0\n}\n@media (min-width: 960px){\n#mlh-trust-badge{max-width:75px;right:35px\n}\n}\n@media (min-width: 1200px){\n#mlh-trust-badge{max-width:96px;right:50px\n}\n}\n"],sourceRoot:""}])},148:function(e,t,n){t=e.exports=n(25)(!0),t.push([e.i,".infobox[data-v-db9e804a]{margin-top:10px;background:#dee2e0;padding:25px}","",{version:3,sources:["C:/Users/Yunyu/Documents/vandyhacks/components/Infobox.vue"],names:[],mappings:"AACA,0BAA0B,gBAAgB,mBAAmB,YAAY,CACxE",file:"Infobox.vue",sourcesContent:["\n.infobox[data-v-db9e804a]{margin-top:10px;background:#dee2e0;padding:25px\n}\n"],sourceRoot:""}])},149:function(e,t,n){var a,i,o;!function(n,s){i=[],a=s,void 0!==(o="function"==typeof a?a.apply(t,i):a)&&(e.exports=o)}(0,function(){var e=function(t,n){"use strict";var a=Object.create(e.prototype),i=0,o=0,s=[],r=!1,l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};if(a.options={speed:-2,center:!1},n&&Object.keys(n).forEach(function(e){a.options[e]=n[e]}),a.options.speed<-10?a.options.speed=-10:a.options.speed>10&&(a.options.speed=10),t||(t=".rellax"),document.getElementsByClassName(t.replace(".","")))a.elems=document.getElementsByClassName(t.replace(".",""));else{if(!1===document.querySelector(t))throw new Error("The elements you're trying to select don't exist.");a.elems=querySelector(t)}var d=function(e){var t=e.getAttribute("data-rellax-percentage")||a.options.center?document.body.scrollTop:0,n=t+e.getBoundingClientRect().top,i=e.clientHeight||e.offsetHeight||e.scrollHeight,s=e.getAttribute("data-rellax-percentage")?e.getAttribute("data-rellax-percentage"):(t-n+o)/(i+o);a.options.center&&(s=.5);var r=e.getAttribute("data-rellax-speed")?A(e.getAttribute("data-rellax-speed"),10):a.options.speed;(e.getAttribute("data-rellax-percentage")||a.options.center)&&(r=e.getAttribute("data-rellax-speed")?A(e.getAttribute("data-rellax-speed"),5):A(a.options.speed,5));var l=u(s,r),d=e.style.cssText,c="";if(d.indexOf("transform")>=0){var p=d.indexOf("transform"),m=d.slice(p),h=m.indexOf(";");c=h?" "+m.slice(11,h).replace(/\s/g,""):" "+m.slice(11).replace(/\s/g,"")}return{base:l,top:n,height:i,speed:r,style:d,transform:c}},A=function(e,t){return e<-t?-t:e>t?t:e},c=function(){var e=i;return i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,e!=i},u=function(e,t){var n=t*(100*(1-e));return Math.round(n)},p=function(){c()&&!1===r&&m(),l(p)},m=function(){for(var e=0;e<a.elems.length;e++){var t=(i-s[e].top+o)/(s[e].height+o),n=u(t,s[e].speed)-s[e].base,r=" translate3d(0,"+n+"px,0)"+s[e].transform;a.elems[e].style.cssText=s[e].style+"-webkit-transform:"+r+";-moz-transform:"+r+";transform:"+r+";"}};return a.destroy=function(){for(var e=0;e<a.elems.length;e++)a.elems[e].style.cssText=s[e].style;r=!0},function(){o=window.innerHeight,c();for(var e=0;e<a.elems.length;e++){var t=d(a.elems[e]);s.push(t)}window.addEventListener("resize",function(){m()}),p(),m()}(),a};return e})},150:function(e,t,n){e.exports=n.p+"img/batman.e07f1a5.svg"},151:function(e,t,n){e.exports=n.p+"img/vandyhacks-text.859ba41.svg"},154:function(e,t,n){function a(e){n(166)}var i=n(17)(null,n(161),a,"data-v-db9e804a",null);e.exports=i.exports},155:function(e,t,n){function a(e){n(165)}var i=n(17)(null,n(160),a,null,null);e.exports=i.exports},156:function(e,t,n){function a(e){n(164)}var i=n(17)(n(142),n(159),a,"data-v-7abaaae3",null);e.exports=i.exports},158:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"scroll-container"},[a("div",{staticClass:"top-viewport"},[a("mlhbadge"),e._m(0),a("img",{staticClass:"batman-building parallax",attrs:{alt:"AT&T Building",src:n(150),"data-rellax-speed":"-5"}})],1),a("div",{staticClass:"page-content"},[a("div",{staticClass:"description feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("Welcome to VandyHacks IV")]),a("separator",{attrs:{white:""}}),a("p",[e._v("Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call the rockin' city of Nashville, Tennessee home. Now, we're proud to bring you VandyHacks IV - and it's gonna be even bigger and better. From October 20-22, 400+ students from universities all over the nation will meet at Vanderbilt University for a weekend of collaboration, innovation, and great food.")])],1)]),a("div",{staticClass:"feature-new feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("What's new")]),a("separator"),a("div",{staticClass:"row"},[a("infobox",[e._v("Certain vengeful hey scorpion beguiling recast calmly outside across piranha well this fumbling besides and that prudently splashed some hellish jeez away abusive weak this gloated oh crud hence unihibitedly the fluid far more a nutria one ducked darn that against met wow ireful victorious constitutionally a much seagull recast came less a stared mocking more bowed.")]),a("infobox",[e._v("A goodness bawdy shuffled the gradually unwound selfish oh brilliant far dove darn whooped much goat far less rode blubbered wailed house the gazelle gosh as opposite overpaid before and and far and flustered since oriole attentively rethought hamster eagle aside jeez this a smirked as nauseatingly anteater underneath tenaciously since lynx well assisted depending.")]),a("infobox",[e._v("Partook amazingly arose greyhound a unobtrusive wombat mastodon hugged goodness regardless much elusive but thus wild dear opaque more more by a a more rashly however frenetic goodness wow gosh hyena where plankton much indefatigably far a that jeez toward goodness as hello far raccoon temperately overshot wherever abidingly goodness hyena hung.")])],1)],1)]),a("div",{staticClass:"schedule feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("Schedule")]),a("separator",{attrs:{white:""}}),a("p",[e._v("\n          As spoiled dolphin jeez neglectfully after less more and less filled antagonistically far and examined while far quail darn far saucily alert circa rabbit or noticeable according wow wherever cuffed alas but creepy congenially the one alertly dwelled scorpion fussy mawkish sordid much far circa next one darn towards more or irrespective antelope simply alas as the gorilla hotly forward along up gibbered where more excepting across boundless massive jeez frowned some tangible mammoth far between far that.\n        ")])],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title-text parallax",attrs:{"data-rellax-speed":"-6"}},[a("img",{staticClass:"title",attrs:{alt:"VandyHacks IV",src:n(151)}}),a("h2",{staticClass:"subtitle"},[e._v("\n        October 20-22 at Vanderbilt University\n      ")])])}]}},159:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:{separator:!0,white:e.white}})},staticRenderFns:[]}},160:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{id:"mlh-trust-badge",href:"https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray",rel:"noopener",target:"_blank"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg",alt:"Major League Hacking 2017 Hackathon Season"}})])}]}},161:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"infobox"},[e._t("default")],2)])},staticRenderFns:[]}},163:function(e,t,n){var a=n(145);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(26)("41d7f716",a,!0)},164:function(e,t,n){var a=n(146);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(26)("22bff98a",a,!0)},165:function(e,t,n){var a=n(147);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(26)("5c43bf51",a,!0)},166:function(e,t,n){var a=n(148);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(26)("7b1d826a",a,!0)}});