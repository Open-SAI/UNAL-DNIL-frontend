(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68834f91"],{1681:function(t,e,i){},3188:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submit-form mt-3 mx-auto"},[i("p",{staticClass:"headline"},[t._v("Agregar Registro")]),t.submitted?i("div",[i("v-card",{staticClass:"mx-auto"},[i("v-card-title",[t._v(" ¡Guardado exitosamente! ")]),i("v-card-subtitle",[t._v(" Click para agregar nuevo registro... ")]),i("v-card-actions",[i("v-btn",{attrs:{color:"success"},on:{click:t.newConcepto}},[t._v("Agregar")])],1)],1)],1):i("div",[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-text-field",{attrs:{rules:[function(t){return!!t||"Se requiere título ..."}],label:"Título",required:""},model:{value:t.concepto.titulo,callback:function(e){t.$set(t.concepto,"titulo",e)},expression:"concepto.titulo"}}),i("v-textarea",{attrs:{rules:[function(t){return!!t||"Se requiere descripcion..."}],label:"Descripción",required:"","auto-grow":"",counter:""},model:{value:t.concepto.descripcion,callback:function(e){t.$set(t.concepto,"descripcion",e)},expression:"concepto.descripcion"}})],1),i("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:t.validate}},[t._v("Guardar")])],1)])},n=[],r=i("ef44"),o={name:"add-concepto",data:function(){return{concepto:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveConcepto:function(){var t=this,e={titulo:this.concepto.titulo,descripcion:this.concepto.descripcion};r["a"].create(e).then((function(e){t.concepto.id=e.data.id,console.log(e.data),t.submitted=!0})).catch((function(t){console.log(t)}))},validate:function(){this.$refs.form.validate()&&this.saveConcepto()},newConcepto:function(){this.submitted=!1,this.concepto={}}}},s=o,c=(i("325f"),i("2877")),u=i("6544"),l=i.n(u),d=i("8336"),h=i("b0af"),f=i("99d9"),p=i("4bd4"),v=i("8654"),g=i("a844"),m=Object(c["a"])(s,a,n,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VCard:h["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardTitle:f["c"],VForm:p["a"],VTextField:v["a"],VTextarea:g["a"]})},"325f":function(t,e,i){"use strict";i("467d")},"467d":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),r=i("7e2b"),o=i("3206");e["a"]=Object(n["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var a=i("b0af"),n=i("80d2"),r=Object(n["f"])("v-card__actions"),o=Object(n["f"])("v-card__subtitle"),s=Object(n["f"])("v-card__text"),c=Object(n["f"])("v-card__title");a["a"]},a844:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("1681"),i("8654")),r=i("58df"),o=Object(r["a"])(n["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b0af:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("0481"),i("615b"),i("10d2")),r=i("297c"),o=i("1c87"),s=i("58df");e["a"]=Object(s["a"])(r["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-68834f91.cd25dfd3.js.map