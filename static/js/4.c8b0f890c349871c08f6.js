webpackJsonp([4],{122:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"logoIn",data:function(){return{title:"爱股轩登录",logo:t(61),show:!0,userName:"",passWord:"",cancelText:"取消",isActive:!1}},components:{},methods:{hidden:function(){this.show=!1},hid:function(){this.show=!0},remove:function(){this.$router.go(-1)},logoIn:function(){return""==this.userName?void Toast({message:"账号不能为空",position:"bottom",duration:1e3}):""==this.passWord?void Toast("密码不能为空"):(this.$router.push({name:"home",params:{userName:"会飞的鱼"}}),void(this.show=!1))},goNow:function(){this.$router.push({path:"/Register"}),this.show=!1},other:function(){this.isActive=!0},increment:function(){this.isActive=!1},toSms:function(){this.$router.push({path:"/sms"}),this.show=!1},toback:function(){this.$router.push({path:"/bachWord"}),this.show=!1},bindNumber:function(){this.$router.push({path:"/logoInBind"})}}}},168:function(n,i,t){i=n.exports=t(48)(!0),i.push([n.i,".logoin-main[data-v-5ea52c92]{padding:0 .6rem}.logoin-main .logoIn-header[data-v-5ea52c92]{width:100%;height:.9rem;line-height:.9rem;text-align:center;font-size:.36rem;color:#333;position:relative}.logoin-main .logoIn-header .btn-back[data-v-5ea52c92]{width:1.3rem;height:100%;font-size:.28rem;color:#999;position:absolute;left:-.6rem;top:0}.logoin-main .logo[data-v-5ea52c92]{width:100%;height:2.26rem;position:relative}.logoin-main .logo img[data-v-5ea52c92]{width:3.4rem;height:.95rem;position:absolute;left:0;bottom:0;right:0;top:0;margin:auto}.logoin-main .from .input-main[data-v-5ea52c92]{height:1.1rem;margin-bottom:.3rem;position:relative}.logoin-main .from .input-main .icon[data-v-5ea52c92]{width:1.1rem;height:100%;position:absolute;left:0;top:0}.logoin-main .from .input-main input[data-v-5ea52c92]{width:100%;height:100%;border:none;background:#f5f5f5;text-indent:1.1rem;border-radius:5px;font-size:.28rem}.logoin-main .from .userName .icon[data-v-5ea52c92]{background:url("+t(70)+") no-repeat 50%;background-size:.44rem .55rem}.logoin-main .from .passWord .icon[data-v-5ea52c92]{background:url("+t(68)+") no-repeat 50%;background-size:.44rem .51rem}.logoin-main .btn-in[data-v-5ea52c92]{width:100%;height:1.1rem;border:none;border-radius:20px;outline:none;margin-top:.3rem;background:-webkit-linear-gradient(left,#f97522,#fd5148);background:-o-linear-gradient(right,#f97522,#fd5148);background:-moz-linear-gradient(right,#f97522,#fd5148);background:linear-gradient(90deg,#f97522,#fd5148);font-size:.36rem;color:#fff}.logoin-main .fail-link[data-v-5ea52c92]{padding-top:.3rem}.logoin-main .fail-link li[data-v-5ea52c92]{width:50%;text-align:center;font-size:.28rem}.logoin-main .fail-link li[data-v-5ea52c92]:first-child{border-right:1px solid #dedede;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:#797979}.logoin-main .fail-link li[data-v-5ea52c92]:nth-child(2){color:#f9781e}.logoin-main .tplogin[data-v-5ea52c92]{width:6.3rem;position:fixed;left:0;bottom:0;padding:0 .6rem;text-align:center}.logoin-main .tplogin dt[data-v-5ea52c92]{width:100%;font-size:.24rem;color:#9f9f9f;text-align:center;height:.5rem;line-height:.5rem;position:relative}.logoin-main .tplogin dt span[data-v-5ea52c92]{position:absolute;top:50%;width:2rem;height:1px;background:#ccc}.logoin-main .tplogin dt span[data-v-5ea52c92]:first-child{left:0}.logoin-main .tplogin dt span[data-v-5ea52c92]:nth-child(2){right:0}.logoin-main .tplogin dd[data-v-5ea52c92]{display:inline-block;width:1.21rem;height:1.21rem;background:url("+t(64)+") no-repeat;background-size:100% 100%;margin:.3rem 0}.logoin-main .tplogin dd[data-v-5ea52c92]:nth-child(3){margin-left:1.2rem;margin-right:1.2rem;background:url("+t(66)+") no-repeat;background-size:100% 100%}.logoin-main .tplogin dd[data-v-5ea52c92]:nth-child(4){background:url("+t(65)+") no-repeat;background-size:100% 100%}.logoin-main .actionsheet .box[data-v-5ea52c92]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.logoin-main .actionsheet .acti-box.active[data-v-5ea52c92]{transition:all .5s ease;bottom:0}.logoin-main .actionsheet .acti-box[data-v-5ea52c92]{position:absolute;left:.2rem;bottom:-3rem;width:7.1rem;transition:all .5s ease}.logoin-main .actionsheet .acti-box ul[data-v-5ea52c92]{border-radius:5px;overflow:hidden;text-align:center}.logoin-main .actionsheet .acti-box ul li[data-v-5ea52c92]{width:100%;height:.9rem;background:#fff;line-height:.9rem;font-size:.36rem;color:#007aff}.logoin-main .actionsheet .acti-box ul li[data-v-5ea52c92]:first-child{border-bottom:1px solid #d6d6de}.logoin-main .actionsheet .acti-box .btn[data-v-5ea52c92]{width:100%;background:#fff;line-height:.9rem;font-size:.36rem;color:#007aff;text-align:center;margin:.15rem 0;border-radius:5px}","",{version:3,sources:["F:/aiguxuan/src/components/logoIn/logoIn.vue"],names:[],mappings:"AACA,8BACE,eAAiB,CAClB,AACD,6CACE,WAAY,AACZ,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,iBAAmB,CACpB,AACD,uDACE,aAAc,AACd,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,YAAc,AACd,KAAO,CACR,AACD,oCACE,WAAY,AACZ,eAAgB,AAChB,iBAAmB,CACpB,AACD,wCACE,aAAc,AACd,cAAe,AACf,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,QAAS,AACT,MAAO,AACP,WAAa,CACd,AACD,gDACE,cAAe,AACf,oBAAqB,AACrB,iBAAmB,CACpB,AACD,sDACE,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,KAAO,CACR,AACD,sDACE,WAAY,AACZ,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,mBAAoB,AACpB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,oDACE,uDAA4D,AAC5D,6BAA+B,CAChC,AACD,oDACE,uDAA4D,AAC5D,6BAA+B,CAChC,AACD,sCACE,WAAY,AACZ,cAAe,AACf,YAAa,AACb,mBAAoB,AACpB,aAAc,AACd,iBAAkB,AAClB,yDAA4D,AAC5D,qDAAwD,AACxD,uDAA0D,AAC1D,kDAAwD,AACxD,iBAAkB,AAClB,UAAY,CACb,AACD,yCACE,iBAAmB,CACpB,AACD,4CACE,UAAW,AACX,kBAAmB,AACnB,gBAAkB,CACnB,AACD,wDACE,+BAAgC,AAChC,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAe,CAChB,AACD,yDACE,aAAe,CAChB,AACD,uCACE,aAAc,AACd,eAAgB,AAChB,OAAQ,AACR,SAAU,AACV,gBAAiB,AACjB,iBAAmB,CACpB,AACD,0CACE,WAAY,AACZ,iBAAkB,AAClB,cAAe,AACf,kBAAmB,AACnB,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,+CACE,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,WAAY,AACZ,eAAiB,CAClB,AACD,2DACE,MAAQ,CACT,AACD,4DACE,OAAS,CACV,AACD,0CACE,qBAAsB,AACtB,cAAe,AACf,eAAgB,AAChB,mDAAsD,AACtD,0BAA2B,AAC3B,cAAgB,CACjB,AACD,uDACE,mBAAoB,AACpB,oBAAqB,AACrB,mDAAsD,AACtD,yBAA2B,CAC5B,AACD,uDACE,mDAAsD,AACtD,yBAA2B,CAC5B,AACD,gDACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,yBAA+B,CAChC,AACD,4DACE,wBAAyB,AACzB,QAAU,CACX,AACD,qDACE,kBAAmB,AACnB,WAAY,AACZ,aAAc,AACd,aAAc,AACd,uBAAyB,CAC1B,AACD,wDACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,2DACE,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,iBAAkB,AAClB,aAAe,CAChB,AACD,uEACE,+BAAiC,CAClC,AACD,0DACE,WAAY,AACZ,gBAAiB,AACjB,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB",file:"logoIn.vue",sourcesContent:["\n.logoin-main[data-v-5ea52c92] {\n  padding: 0 .6rem;\n}\n.logoin-main .logoIn-header[data-v-5ea52c92] {\n  width: 100%;\n  height: .9rem;\n  line-height: .9rem;\n  text-align: center;\n  font-size: .36rem;\n  color: #333;\n  position: relative;\n}\n.logoin-main .logoIn-header .btn-back[data-v-5ea52c92] {\n  width: 1.3rem;\n  height: 100%;\n  font-size: .28rem;\n  color: #999;\n  position: absolute;\n  left: -0.6rem;\n  top: 0;\n}\n.logoin-main .logo[data-v-5ea52c92] {\n  width: 100%;\n  height: 2.26rem;\n  position: relative;\n}\n.logoin-main .logo img[data-v-5ea52c92] {\n  width: 3.4rem;\n  height: .95rem;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n}\n.logoin-main .from .input-main[data-v-5ea52c92] {\n  height: 1.1rem;\n  margin-bottom: .3rem;\n  position: relative;\n}\n.logoin-main .from .input-main .icon[data-v-5ea52c92] {\n  width: 1.1rem;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.logoin-main .from .input-main input[data-v-5ea52c92] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: #f5f5f5;\n  text-indent: 1.1rem;\n  border-radius: 5px;\n  font-size: .28rem;\n}\n.logoin-main .from .userName .icon[data-v-5ea52c92] {\n  background: url(../../assets/userName.png) no-repeat center;\n  background-size: .44rem .55rem;\n}\n.logoin-main .from .passWord .icon[data-v-5ea52c92] {\n  background: url(../../assets/passWord.png) no-repeat center;\n  background-size: .44rem .51rem;\n}\n.logoin-main .btn-in[data-v-5ea52c92] {\n  width: 100%;\n  height: 1.1rem;\n  border: none;\n  border-radius: 20px;\n  outline: none;\n  margin-top: .3rem;\n  background: -webkit-linear-gradient(left, #f97522, #fd5148);\n  background: -o-linear-gradient(right, #f97522, #fd5148);\n  background: -moz-linear-gradient(right, #f97522, #fd5148);\n  background: linear-gradient(to right, #f97522, #fd5148);\n  font-size: .36rem;\n  color: #fff;\n}\n.logoin-main .fail-link[data-v-5ea52c92] {\n  padding-top: .3rem;\n}\n.logoin-main .fail-link li[data-v-5ea52c92] {\n  width: 50%;\n  text-align: center;\n  font-size: .28rem;\n}\n.logoin-main .fail-link li[data-v-5ea52c92]:nth-child(1) {\n  border-right: 1px solid #dedede;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  color: #797979;\n}\n.logoin-main .fail-link li[data-v-5ea52c92]:nth-child(2) {\n  color: #f9781e;\n}\n.logoin-main .tplogin[data-v-5ea52c92] {\n  width: 6.3rem;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding: 0 .6rem;\n  text-align: center;\n}\n.logoin-main .tplogin dt[data-v-5ea52c92] {\n  width: 100%;\n  font-size: .24rem;\n  color: #9f9f9f;\n  text-align: center;\n  height: .5rem;\n  line-height: .5rem;\n  position: relative;\n}\n.logoin-main .tplogin dt span[data-v-5ea52c92] {\n  position: absolute;\n  top: 50%;\n  width: 2rem;\n  height: 1px;\n  background: #ccc;\n}\n.logoin-main .tplogin dt span[data-v-5ea52c92]:nth-child(1) {\n  left: 0;\n}\n.logoin-main .tplogin dt span[data-v-5ea52c92]:nth-child(2) {\n  right: 0;\n}\n.logoin-main .tplogin dd[data-v-5ea52c92] {\n  display: inline-block;\n  width: 1.21rem;\n  height: 1.21rem;\n  background: url(../../assets/logoIn-qq.jpg) no-repeat;\n  background-size: 100% 100%;\n  margin: .3rem 0;\n}\n.logoin-main .tplogin dd[data-v-5ea52c92]:nth-child(3) {\n  margin-left: 1.2rem;\n  margin-right: 1.2rem;\n  background: url(../../assets/logoIn-wx.jpg) no-repeat;\n  background-size: 100% 100%;\n}\n.logoin-main .tplogin dd[data-v-5ea52c92]:nth-child(4) {\n  background: url(../../assets/logoIn-wb.jpg) no-repeat;\n  background-size: 100% 100%;\n}\n.logoin-main .actionsheet .box[data-v-5ea52c92] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.logoin-main .actionsheet .acti-box.active[data-v-5ea52c92] {\n  transition: all .5s ease;\n  bottom: 0;\n}\n.logoin-main .actionsheet .acti-box[data-v-5ea52c92] {\n  position: absolute;\n  left: .2rem;\n  bottom: -3rem;\n  width: 7.1rem;\n  transition: all .5s ease;\n}\n.logoin-main .actionsheet .acti-box ul[data-v-5ea52c92] {\n  border-radius: 5px;\n  overflow: hidden;\n  text-align: center;\n}\n.logoin-main .actionsheet .acti-box ul li[data-v-5ea52c92] {\n  width: 100%;\n  height: .9rem;\n  background: #fff;\n  line-height: .9rem;\n  font-size: .36rem;\n  color: #007aff;\n}\n.logoin-main .actionsheet .acti-box ul li[data-v-5ea52c92]:nth-child(1) {\n  border-bottom: 1px solid #d6d6de;\n}\n.logoin-main .actionsheet .acti-box .btn[data-v-5ea52c92] {\n  width: 100%;\n  background: #fff;\n  line-height: .9rem;\n  font-size: .36rem;\n  color: #007aff;\n  text-align: center;\n  margin: .15rem 0;\n  border-radius: 5px;\n}\n"],sourceRoot:""}])},187:function(n,i,t){var o=t(168);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(49)("1649f93c",o,!0)},247:function(n,i){n.exports={render:function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",{staticClass:"logoin-main"},[t("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{"data-title":"登录"}},[n._v("登录")]),n._v(" "),t("header",{staticClass:"logoIn-header"},[t("span",{staticClass:"btn-back",on:{click:n.remove}},[n._v("取消")]),n._v(n._s(n.title)+"\n    ")]),n._v(" "),t("div",{staticClass:"logo"},[t("img",{attrs:{src:n.logo}})]),n._v(" "),t("div",{staticClass:"from"},[t("div",{staticClass:"input-main userName"},[t("span",{staticClass:"icon"}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.userName,expression:"userName"}],attrs:{type:"text",placeholder:"邮箱/用户名/已验证手机"},domProps:{value:n.userName},on:{blur:n.hid,focus:n.hidden,input:function(i){i.target.composing||(n.userName=i.target.value)}}})]),n._v(" "),t("div",{staticClass:"input-main passWord"},[t("span",{staticClass:"icon"}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"请输入密码...."},domProps:{value:n.passWord},on:{blur:n.hid,focus:n.hidden,input:function(i){i.target.composing||(n.passWord=i.target.value)}}})]),n._v(" "),t("button",{staticClass:"btn-in",on:{click:n.logoIn}},[n._v("登  录")])]),n._v(" "),t("ul",{staticClass:"fail-link clearfix"},[t("li",{staticClass:"fl",on:{click:n.other}},[n._v("无法登录?")]),n._v(" "),t("li",{staticClass:"fl",on:{click:n.goNow}},[n._v("现在注册 >")])]),n._v(" "),t("dl",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticClass:"tplogin"},[n._m(0),n._v(" "),t("dd",{on:{click:n.bindNumber}}),n._v(" "),t("dd"),n._v(" "),t("dd")]),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.isActive,expression:"isActive"}],staticClass:"actionsheet"},[t("div",{staticClass:"box",on:{click:n.increment}}),n._v(" "),t("div",{staticClass:"acti-box",class:{active:n.isActive}},[t("ul",[t("li",{on:{click:n.toback}},[n._v("找回密码")]),n._v(" "),t("li",{on:{click:n.toSms}},[n._v("短信验证登录")])]),n._v(" "),t("div",{staticClass:"btn",on:{click:n.increment}},[n._v(n._s(n.cancelText))])])])])},staticRenderFns:[function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("dt",[n._v("\n            社交账号一键登录\n            "),t("span"),t("span")])}]}},52:function(n,i,t){t(187);var o=t(17)(t(122),t(247),"data-v-5ea52c92",null);n.exports=o.exports},61:function(n,i,t){n.exports=t.p+"static/img/logoIn.e0c0c29.png"},64:function(n,i,t){n.exports=t.p+"static/img/logoIn-qq.6b6d6a7.jpg"},65:function(n,i,t){n.exports=t.p+"static/img/logoIn-wb.40a0866.jpg"},66:function(n,i,t){n.exports=t.p+"static/img/logoIn-wx.a4b3565.jpg"},68:function(n,i,t){n.exports=t.p+"static/img/passWord.9230501.png"},70:function(n,i,t){n.exports=t.p+"static/img/userName.fe582f7.png"}});
//# sourceMappingURL=4.c8b0f890c349871c08f6.js.map