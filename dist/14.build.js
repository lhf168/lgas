webpackJsonp([14],{105:function(t,e,i){"use strict";var n=i(75);e.a={myActivityTitle:Object,data:function(){return{myActivityTitle:{name:"我的活动",showCode:1}}},mounted:function(){},components:{HeaderComponent:n.a}}},160:function(t,e,i){var n=i(161);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i(4).default;a("c227e134",n,!0,{})},161:function(t,e,i){e=t.exports=i(3)(!1),e.push([t.i,"",""])},162:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HeaderComponent",{attrs:{"view-title":t.myActivityTitle}})],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},65:function(t,e,i){"use strict";function n(t){i(160)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(105),o=i(162),r=i(12),s=n,c=r(a.a,o.a,!1,s,"data-v-44e01792",null);e.default=c.exports},74:function(t,e,i){"use strict";e.a={isShow:Boolean,props:{viewTitle:Object},data:function(){return{isShow:"true"}},created:function(){console.log(this.viewTitle),0==this.viewTitle.showCode&&(this.isShow="false")},mounted:function(){},methods:{back:function(){this.$router.go("-1")}}}},75:function(t,e,i){"use strict";function n(t){i(76)}var a=i(74),o=i(78),r=i(12),s=n,c=r(a.a,o.a,!1,s,"data-v-7da8029c",null);e.a=c.exports},76:function(t,e,i){var n=i(77);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i(4).default;a("fa2d6fbe",n,!0,{})},77:function(t,e,i){e=t.exports=i(3)(!1),e.push([t.i,".icon-head[data-v-7da8029c]{width:1rem;height:1rem;vertical-align:-.15em;fill:currentColor;overflow:hidden;color:#333;position:absolute;top:50%;transform:translateY(-50%);left:.25rem}#head-top[data-v-7da8029c]{width:100%;height:2.2rem;line-height:2.2rem;background:#fff;position:fixed;top:0;left:0;z-index:999}#head-top .header-title[data-v-7da8029c]{text-align:center}",""])},78:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{attrs:{id:"head-top"}},["true"==t.isShow?i("svg",{staticClass:"icon-head",attrs:{"aria-hidden":"true"},on:{click:function(e){t.back()}}},[i("use",{attrs:{"xlink:href":"#icon-jiantouzuo"}})]):t._e(),t._v(" "),i("h4",{staticClass:"header-title"},[t._v(t._s(t.viewTitle.name))])])},a=[],o={render:n,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=14.build.js.map