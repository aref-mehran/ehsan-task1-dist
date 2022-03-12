(function(){"use strict";var t={1702:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var a=r(144),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},i=[],o=r(3736),s=r(3453),c=r.n(s),l=r(7524),u=r(1009),d={},p=(0,o.Z)(d,n,i,!1,null,null,null),m=p.exports;c()(p,{VApp:l.Z,VMain:u.Z});r(736);var f=r(8345),v=r(4367),h=(r(1539),r(8783),r(3948),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("PageLayout",t._l(t.products,(function(e,a){return r("VideoPost",{key:a,staticClass:"VideoPost",attrs:{focousedIndex:t.focousedIndex,product:e,productIndex:a,productIndexAttr:a}})})),1)],1)}),g=[],b=r(2032),x=(r(9653),r(5269)),_=r(1068),y={name:"HomeView",components:{VideoPost:x.Z,PageLayout:_.Z},data:function(){return{label:"Home",icon:"home",iconActive:"home",currentIcon:"heart",videoHeight:window.screen.availWidth,focousedIndex:0}},computed:{products:function(){return this.$store.state.products}},mounted:function(){var t,e=document.getElementsByClassName("VideoPost"),r={rootMargin:"25% 0% -0% 0%",threshold:1},a=new IntersectionObserver(this.elementHasIntersected,r),n=(0,b.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;a.observe(i)}}catch(o){n.e(o)}finally{n.f()}},methods:{elementHasIntersected:function(t){t.length>1||(this.focousedIndex=Number(t[0].target.getAttribute("productIndexAttr")),console.log(this.focousedIndex))}}},C=y,w=(0,o.Z)(C,h,g,!1,null,null,null),S=w.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("PageLayout",[r("ProductComponent",{attrs:{productObject:t.productObject}})],1)],1)},A=[],I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.product.images,"image-width":422,"image-height":664,"thumb-width":160,"thumb-height":160,"image-tag":"nuxt-img","nuxt-img-config":{format:"webp",fit:"cover"},"thumb-image-tag":"nuxt-img","thumb-nuxt-img-config":{format:"webp",fit:"cover"}}}),r("div",{staticClass:"product"},[r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.product.name,level:1}})],1),r("div",{staticClass:"product__price-and-rating"},[r("SfPrice",{attrs:{regular:t.product.price}}),r("div",[r("div",{staticClass:"product__rating"},[r("SfRating",{attrs:{score:t.product.rating.rate,max:t.product.rating.max}}),t.product.reviews?r("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v(" ("+t._s(t.product.reviews.length)+") ")]):t._e()],1),r("SfButton",{staticClass:"sf-button--text",attrs:{"data-testid":"read-all-reviews"},on:{click:function(e){return t.changeTab(2)}}},[t._v(" خواندن نظرات ")])],1)],1),r("div",[r("p",{staticClass:"product__description desktop-only"},[t._v(" "+t._s(t.product.description)+" ")]),r("SfButton",{staticClass:"sf-button--text desktop-only product__guide"},[t._v(" Size guide ")]),r("SfSelect",{staticClass:"sf-select--underlined product__select-size",attrs:{label:"اندازه",reqired:!0},model:{value:t.selectedSize,callback:function(e){t.selectedSize=e},expression:"selectedSize"}},t._l(t.product.sizes,(function(e,a){return r("SfSelectOption",{key:a,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1),r("div",{staticClass:"product__colors"},[r("p",{staticClass:"product__color-label"},[t._v("رنگ:")]),t._l(t.product.colors,(function(e,a){return r("SfColor",{key:a,staticClass:"product__color",attrs:{"aria-label":e.name,color:e.color,selected:e.selected},on:{click:function(e){return t.selectColor(a)}}})}))],2),r("SfAddToCart",{staticClass:"product__add-to-cart",scopedSlots:t._u([{key:"add-to-cart-btn",fn:function(){return[r("button",{staticClass:"sf-add-to-cart__button sf-button",on:{click:t.addToCart}},[t._v(" افزودن به سبد خرید ")])]},proxy:!0}]),model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}}),r("SfButton",{staticClass:"sf-button--text desktop-only product__save"},[t._v(" Save for later ")]),r("SfButton",{staticClass:"sf-button--text desktop-only product__compare"},[t._v(" Add to compare ")])],1),r("SfTabs",{staticClass:"product__tabs",attrs:{id:"tabs","open-tab":t.openTab},on:{"click:tab":t.changeTab}},t._l(t.tabs,(function(e){return r("SfTab",{key:e.name,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" "),"Description"===e.name?r("div",t._l(t.product.details,(function(e,a){return r("SfProperty",{key:a,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[r("SfButton",{staticClass:"sf-button--text product__property__button"},[t._v(" "+t._s(e.value))])]},proxy:!0}:null],null,!0)})})),1):"Read reviews"===e.name?r("div",t._l(t.product.reviews,(function(t,e){return r("SfReview",{key:e,staticClass:"product__review",attrs:{author:t.author,date:t.date,message:t.message,"max-rating":t.rating.max,rating:t.rating.rate,"char-limit":231,"read-more-text":"Read more","hide-full-text":"Read less"}})})),1):"Additional Information"===e.name?r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v("برند")]),r("p",[t._v(t._s(t.product.brand))]),r("p",[t._v(t._s(t.product.careInstructions))])]):t._e()])})),1)],1)]),r("transition",{attrs:{name:"slide"}},[r("SfNotification",{staticClass:"notification smartphone-only",attrs:{visible:t.isOpenNotification,message:t.qty+" x "+t.product.name+" (size: "+t.selectedSize+", color: "+t.selectedColor+") has been added to cart"},on:{"click:close":function(e){t.isOpenNotification=!1}},scopedSlots:t._u([{key:"icon",fn:function(){return[r("span")]},proxy:!0}])})],1)],1)},B=[],L=(r(7327),r(2222),r(8309),r(1249),r(7069)),Z=r(9610),$=r(3313),D=r(9626),N=r(5767),P=r(1684),T=r(1784),O=r(4360),z=r(4115),E=r(2144),j=r(9170),H=r(3197),M=r(8029),X=r(6817),F=r(2161),V={name:"ProductComponent",components:{SfGallery:L.Z,SfHeading:Z.Z,SfPrice:$.Z,SfRating:D.Z,SfIcon:N.Z,SfTabs:P.Z,SfProperty:T.Z,SfButton:O.Z,SfReview:z.Z,SfAddToCart:E.Z,SfColor:j.Z,SfSelect:H.Z,SfBreadcrumbs:M.Z,SfNotification:X.Z,SfArrow:F.Z},props:{productObject:{type:Object}},data:function(){return{selectedColor:"beige",selectedSize:void 0,qty:1,selected:!1,tabs:[{name:"Description",title:"توضیحات",content:""},{name:"Read reviews",title:"خواندن نظرات",content:""},{name:"Additional Information",title:"اطلاعات تکمیلی",content:""}],isOpenNotification:!1,openTab:1}},computed:{product:function(){if(!this.productObject){var t=this.$store.state.cartItems,e=t[t.length-1],r=this.$store.state.products.filter((function(t){return t.id==e.id}))[0];return r}return console.log(this.productObject),this.productObject}},methods:{goBack:function(){this.$router.push("/")},addToCart:function(){var t=this,e=("".concat(this.qty," x ").concat(this.product.name," (size: ").concat(this.selectedSize,", color: ").concat(this.selectedColor,") has been added to cart"),{title:this.product.name,id:this.product.id,image:r(8352),price:{regular:this.product.price},configuration:[{name:"Size",title:"اندازه",value:this.selectedSize},{name:"Color",title:"رنگ",value:this.selectedColor}],qty:this.qty});this.$store.commit("addCartItem",e),this.$router.push("/cart"),this.isOpenNotification=!0,setTimeout((function(){t.isOpenNotification=!1}),3e3)},selectColor:function(t){var e=this;this.product.colors.map((function(r,a){t===a?(r.selected=!0,e.selectedColor=r.name):r.selected=!1}))},changeTab:function(t){document.getElementById("tabs").scrollIntoView({behavior:"smooth",block:"end"}),this.openTab=t}}},q=V,R=(0,o.Z)(q,I,B,!1,null,"4dcb4dfb",null),U=R.exports,W={name:"ProductView",props:{productObject:{type:Object}},components:{ProductComponent:U,PageLayout:_.Z}},G=W,K=(0,o.Z)(G,k,A,!1,null,null,null),J=K.exports;a["default"].use(f.Z);var Q=[{path:"/",name:"home",component:S},{path:"/product",name:"product",component:J,props:function(t){return(0,v.Z)({},t.params)}},{path:"/checkout",name:"checkout",component:function(){return r.e(443).then(r.bind(r,4088))}},{path:"/cart",name:"cart",component:function(){return r.e(443).then(r.bind(r,4761))}},{path:"/comments",name:"comments",props:function(t){return(0,v.Z)({},t.params)},component:function(){return r.e(443).then(r.bind(r,9627))}}],Y=new f.Z({mode:"history",base:"/",routes:Q}),tt=Y,et=r(629);a["default"].use(et.ZP),a["default"].config.devtools=!0;var rt=new et.ZP.Store({state:{cartItems:[],products:[{id:1,labels:["پیراهن","تخفیف ويژه","نخی"],name:"1-boxing 002M تیشرت",videoUrlList:[{url:r(3376),type:1},{url:r(9887),type:1},{url:r(5531),type:1},{url:r(3218),type:1}],description:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. ",images:[{mobile:{url:r(8352)},desktop:{url:r(8352)},big:{url:r(8352)},alt:"Product A"},{mobile:{url:r(8320)},desktop:{url:r(8320)},big:{url:r(8320)},alt:"Product B"}],price:"$50.00",colors:[{color:"#EDCBB9",name:"beige",selected:!0},{color:"#ABD9D8",name:"mint1",selected:!1},{color:"#DB5593",name:"pink1",selected:!1},{color:"#ABD9D8",name:"mint2",selected:!1},{color:"#DB5593",name:"pink2",selected:!1}],rating:{rate:4,max:5},details:[{name:"کد محصول",value:435435},{name:"جنس",value:"نخ"},{name:"دسته بندی",value:"پیراهن"},{name:"کشور",value:"ایران"}],sizes:["32","34","36","38","40","42"],careInstructions:"غیر قابل شستشو",brand:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. از دیگر کاربردهای این نوع از تی شرت ، هماهنگ شدن با محیط و مناسبت ها می باشد. نکته منحصر به فرد علاوه بر جنس، چاپ ساده و شیک آن می باشد که امکان استفاده این تی شرت را در همه محافل نیز فراهم می سازد. این محصول در تمامی سایزهای S، M، L، XL، XXL، XXXL ارائه می گردد\n\n      دقت شود سایزها و مشخصات درج شده برای پنل فلوریزا بوده و در مورد دیگر اسامی تضمین نمی گردد.",reviews:[{author:"مجید محمدی",date:"April 2019",message:"تی شرت ضعیف.",rating:{max:5,rate:2}},{author:"محمد حسینی",date:"April 2019",message:"عالی بود دستتون درد نکنه.",rating:{max:5,rate:5}},{author:"محمد محمدی",date:"April 2019",message:"تقریبا خوب بود.",rating:{max:5,rate:3}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}}]},{id:2,name:"2-boxing 002M تیشرت",videoUrlList:[{url:r(3376),type:1},{url:r(9887),type:1},{url:r(5531),type:1},{url:r(3218),type:1}],description:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. ",images:[{mobile:{url:r(8352)},desktop:{url:r(8352)},big:{url:r(8352)},alt:"Product A"},{mobile:{url:r(8320)},desktop:{url:r(8320)},big:{url:r(8320)},alt:"Product B"}],price:"$50.00",colors:[{color:"#EDCBB9",name:"beige",selected:!0},{color:"#ABD9D8",name:"mint1",selected:!1},{color:"#DB5593",name:"pink1",selected:!1},{color:"#ABD9D8",name:"mint2",selected:!1},{color:"#DB5593",name:"pink2",selected:!1}],rating:{rate:4,max:5},details:[{name:"کد محصول",value:435435},{name:"جنس",value:"نخ"},{name:"دسته بندی",value:"پیراهن"},{name:"کشور",value:"ایران"}],sizes:["32","34","36","38","40","42"],careInstructions:"غیر قابل شستشو",brand:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. از دیگر کاربردهای این نوع از تی شرت ، هماهنگ شدن با محیط و مناسبت ها می باشد. نکته منحصر به فرد علاوه بر جنس، چاپ ساده و شیک آن می باشد که امکان استفاده این تی شرت را در همه محافل نیز فراهم می سازد. این محصول در تمامی سایزهای S، M، L، XL، XXL، XXXL ارائه می گردد\n\n      دقت شود سایزها و مشخصات درج شده برای پنل فلوریزا بوده و در مورد دیگر اسامی تضمین نمی گردد.",reviews:[{author:"مجید محمدی",date:"April 2019",message:"تی شرت ضعیف.",rating:{max:5,rate:2}},{author:"محمد حسینی",date:"April 2019",message:"عالی بود دستتون درد نکنه.",rating:{max:5,rate:5}},{author:"محمد محمدی",date:"April 2019",message:"تقریبا خوب بود.",rating:{max:5,rate:3}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}}]},{id:3,name:"3-boxing 002M تیشرت",videoUrlList:[{url:r(3376),type:1},{url:r(9887),type:1},{url:r(5531),type:1},{url:r(3218),type:1}],description:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. ",images:[{mobile:{url:r(8352)},desktop:{url:r(8352)},big:{url:r(8352)},alt:"Product A"},{mobile:{url:r(8320)},desktop:{url:r(8320)},big:{url:r(8320)},alt:"Product B"}],price:"$50.00",colors:[{color:"#EDCBB9",name:"beige",selected:!0},{color:"#ABD9D8",name:"mint1",selected:!1},{color:"#DB5593",name:"pink1",selected:!1},{color:"#ABD9D8",name:"mint2",selected:!1},{color:"#DB5593",name:"pink2",selected:!1}],rating:{rate:4,max:5},details:[{name:"کد محصول",value:435435},{name:"جنس",value:"نخ"},{name:"دسته بندی",value:"پیراهن"},{name:"کشور",value:"ایران"}],sizes:["32","34","36","38","40","42"],careInstructions:"غیر قابل شستشو",brand:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. از دیگر کاربردهای این نوع از تی شرت ، هماهنگ شدن با محیط و مناسبت ها می باشد. نکته منحصر به فرد علاوه بر جنس، چاپ ساده و شیک آن می باشد که امکان استفاده این تی شرت را در همه محافل نیز فراهم می سازد. این محصول در تمامی سایزهای S، M، L، XL، XXL، XXXL ارائه می گردد\n\n      دقت شود سایزها و مشخصات درج شده برای پنل فلوریزا بوده و در مورد دیگر اسامی تضمین نمی گردد.",reviews:[{author:"مجید محمدی",date:"April 2019",message:"تی شرت ضعیف.",rating:{max:5,rate:2}},{author:"محمد حسینی",date:"April 2019",message:"عالی بود دستتون درد نکنه.",rating:{max:5,rate:5}},{author:"محمد محمدی",date:"April 2019",message:"تقریبا خوب بود.",rating:{max:5,rate:3}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}}]},{id:4,name:"4-boxing 002M تیشرت",videoUrlList:[{url:r(3376),type:1},{url:r(9887),type:1},{url:r(5531),type:1},{url:r(3218),type:1}],description:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. ",images:[{mobile:{url:r(8352)},desktop:{url:r(8352)},big:{url:r(8352)},alt:"Product A"},{mobile:{url:r(8320)},desktop:{url:r(8320)},big:{url:r(8320)},alt:"Product B"}],price:"$50.00",colors:[{color:"#EDCBB9",name:"beige",selected:!0},{color:"#ABD9D8",name:"mint1",selected:!1},{color:"#DB5593",name:"pink1",selected:!1},{color:"#ABD9D8",name:"mint2",selected:!1},{color:"#DB5593",name:"pink2",selected:!1}],rating:{rate:4,max:5},details:[{name:"کد محصول",value:435435},{name:"جنس",value:"نخ"},{name:"دسته بندی",value:"پیراهن"},{name:"کشور",value:"ایران"}],sizes:["32","34","36","38","40","42"],careInstructions:"غیر قابل شستشو",brand:"تی شرت های نخی ورزشی از محبوبترین طرحها در سراسر دنیا می باشند که اگر با کیفیت جنس بالا (100 درصد نخی پنبه ای و بدون پلی استر) تولید شود همواره طرفداران زیادی دارد. طرح زیبا، ساده و شیک آن در کنار تنوع در سایز بندی، این نوع تی شرت را همواره به عنوان یکی از محبوبترین کادوها به خصوص در میان مردم مطرح کرده است. از دیگر کاربردهای این نوع از تی شرت ، هماهنگ شدن با محیط و مناسبت ها می باشد. نکته منحصر به فرد علاوه بر جنس، چاپ ساده و شیک آن می باشد که امکان استفاده این تی شرت را در همه محافل نیز فراهم می سازد. این محصول در تمامی سایزهای S، M، L، XL، XXL، XXXL ارائه می گردد\n\n      دقت شود سایزها و مشخصات درج شده برای پنل فلوریزا بوده و در مورد دیگر اسامی تضمین نمی گردد.",reviews:[{author:"مجید محمدی",date:"April 2019",message:"تی شرت ضعیف.",rating:{max:5,rate:2}},{author:"محمد حسینی",date:"April 2019",message:"عالی بود دستتون درد نکنه.",rating:{max:5,rate:5}},{author:"محمد محمدی",date:"April 2019",message:"تقریبا خوب بود.",rating:{max:5,rate:3}},{author:"علی حسینی",date:"April 2019",message:"خیلی عالی بود.",rating:{max:5,rate:5}}]}],muted:!0},mutations:{addCartItem:function(t,e){t.cartItems.push(e)},initCartItems:function(t,e){t.cartItems=e},toggleMute:function(t){t.muted=!t.muted}}}),at=rt,nt=r(5591);a["default"].use(nt.Z);var it=new nt.Z({});a["default"].use(f.Z),a["default"].config.productionTip=!1,new a["default"]({router:tt,store:at,vuetify:it,render:function(t){return t(m)}}).$mount("#app")},5269:function(t,e,r){r.d(e,{Z:function(){return T}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"test"},[r("PostHeader",{attrs:{userName:t.user.name,userAvatar:t.user.avatar,productName:t.product.name}}),r("div",{staticClass:"autoplay"},[t.initOrNot?r("swiper",{ref:"videoSwiper",attrs:{dir:"rtl",options:t.swiperOption}},[t._l(t.videoUrlListData,(function(e,a){return r("swiper-slide",{key:a},[r("div",{staticClass:"topright"},[t._v(" "+t._s(a+1+"/"+t.videoUrlListData.length)+" ")]),r("div",{staticClass:"bottomright_mute_icon",on:{click:t.toggleMute}},[t.$store.state.muted?t._e():r("svg",{attrs:{color:"#ffffff",fill:"#ffffff",height:"12",role:"img",viewBox:"0 0 24 24",width:"12"}},[r("path",{attrs:{d:"M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"}})]),t.$store.state.muted?r("svg",{attrs:{color:"#ffffff",fill:"#ffffff",height:"12",role:"img",viewBox:"0 0 48 48",width:"12"}},[r("path",{attrs:{"clip-rule":"evenodd",d:"M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z","fill-rule":"evenodd"}})]):t._e()]),1===e.type?r("video",{ref:"video"+a,refInFor:!0,staticClass:"multimedia",style:"width:"+t.videoWidth+"px;height:"+t.videoWidth+"px;object-fit: fill",attrs:{src:e.url},domProps:{muted:t.$store.state.muted},on:{ended:function(e){return t.endVideo(a)}}}):r("img",{staticClass:"multimedia",attrs:{src:e.url}})])})),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),r("PostFooter",{attrs:{labels:t.product.labels}}),r("div",{staticClass:"labels"},[t._l(t.product.labels,(function(e,a){return[r("span",{key:a,staticClass:"sf-badge--number sf-badge"},[t._v(t._s(e)+" ")]),t._v("    ")]}))],2),0==t.expanded?r("span",{staticClass:"product_description"},[t._v(" "+t._s(t.product.description.substr(0,90))+" ")]):t._e(),0==t.expanded?r("span",{staticClass:"product_description_more",on:{click:t.expand}},[t._v(" "+t._s("... بیشتر ")+" ")]):t._e(),1==t.expanded?r("p",{staticClass:"product_description"},[t._v(" "+t._s(t.product.description)+" ")]):t._e()],1)],1)},n=[],i=r(2032),o=r(6198),s=(r(5666),r(9653),r(697)),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticStyle:{padding:"2%","font-weight":"bold"},attrs:{justify:"space-between"}},[r("v-col",{staticStyle:{"align-self":"center"},attrs:{cols:"6"}},[r("div",{on:{click:t.$parent.productClicked}},[t._v(" "+t._s(t.productName)+" ")])]),r("v-col",{attrs:{cols:"5"}},[r("v-row",{staticStyle:{direction:"ltr"}},[r("v-col",{attrs:{cols:"4"}},[r("v-avatar",[r("img",{attrs:{src:t.userAvatar}})])],1),r("v-col",{staticStyle:{"align-self":"center"},attrs:{cols:"8"}},[r("div",{staticStyle:{"align-self":"center"}},[t._v(" "+t._s(t.userName)+" ")])])],1)],1)],1)},l=[],u={name:"PostHeader",props:{userName:{type:String,required:!0},userAvatar:{type:String,required:!0},productName:{type:String,required:!0}}},d=u,p=r(3736),m=r(3453),f=r.n(m),v=r(6370),h=r(2102),g=r(2877),b=(0,p.Z)(d,c,l,!1,null,null,null),x=b.exports;f()(b,{VAvatar:v.Z,VCol:h.Z,VRow:g.Z});var _=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"video_footer",attrs:{justify:"space-between"}},[r("v-col",{staticStyle:{"align-self":"center"},attrs:{cols:"6"}}),r("v-col",{attrs:{cols:"5"}},[r("v-row",{staticStyle:{direction:"ltr"}},[r("v-col",{attrs:{cols:"4"},on:{click:t.$parent.productClicked}},[r("AddToCartBtn")],1),r("v-col",{attrs:{cols:"3"}},[r("div",{staticStyle:{width:"100%",height:"100%"},on:{click:t.commentsClicked}},[r("svg",{attrs:{"aria-label":"Comment",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24"}},[r("path",{attrs:{d:"M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"2"}})])])])],1)],1)],1)},y=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"sf-circle-icon sf-button",attrs:{"icon-color":"white"}},[r("span",{staticClass:"sf-circle-icon__icon sf-icon",staticStyle:{"--icon-size":"28px"},attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"sf-icon-path",attrs:{viewBox:"0 0 24 24",preserveAspectRatio:"none"}},[r("defs",{},[r("linearGradient",{attrs:{id:"linearGradient-1130",x1:"0",y1:"0",x2:"1",y2:"0"}},[r("stop",{attrs:{offset:"1","stop-color":"var(--icon-color)"}}),r("stop",{attrs:{offset:"0","stop-color":"var(--icon-color-negative, var(--c-gray-variant))"}})],1)],1),r("path",{staticStyle:{height:"100%"},attrs:{d:"M10.281 17.165c-1.177 0-2.147.97-2.147 2.147 0 1.177.97 2.147 2.147 2.147 1.177 0 2.147-.97 2.147-2.146a2.16 2.16 0 00-2.147-2.148zm0 2.994a.838.838 0 01-.847-.847c0-.475.372-.847.847-.847s.847.372.847.847a.865.865 0 01-.847.847zM17.386 17.165c-1.177 0-2.148.97-2.148 2.147 0 1.177.97 2.147 2.148 2.147 1.176 0 2.147-.97 2.147-2.147-.02-1.176-.97-2.147-2.147-2.147zm0 2.994a.838.838 0 01-.847-.847c0-.475.371-.847.847-.847.475 0 .847.372.847.847a.864.864 0 01-.847.847zM14.132 11.834a.66.66 0 01-.206-.033c-.007-.002-.012-.003-.017-.006a.598.598 0 01-.198-.117l-2.14-1.827a.499.499 0 01-.175-.375c0-.142.062-.276.175-.376a.627.627 0 01.42-.156c.158 0 .309.055.42.156l1.126.92V4.21c0-.293.266-.532.595-.532.328 0 .595.238.595.532v5.807l1.126-.92a.628.628 0 01.42-.155c.158 0 .308.055.42.156.112.1.174.234.174.375a.499.499 0 01-.174.376l-2.141 1.827a.62.62 0 01-.195.116l-.02.007a.62.62 0 01-.205.034z",fill:"var(--icon-color)"}}),r("path",{staticStyle:{height:"100%"},attrs:{d:"M19.634 6.035c.599 0 1.177.29 1.55.764.392.475.515 1.095.371 1.674l-1.549 6.36a1.968 1.968 0 01-1.92 1.508h-8.24c-.908 0-1.692-.62-1.92-1.508L5.407 4.797a.682.682 0 00-.66-.516H2.64A.644.644 0 012 3.64C2 3.288 2.29 3 2.64 3h2.107c.909 0 1.693.62 1.92 1.508l.392 1.527h4.524v1.302H7.39l1.796 7.206c.083.31.351.516.66.516h8.24c.31 0 .579-.206.661-.516l1.549-6.36a.65.65 0 00-.123-.578.686.686 0 00-.538-.268H16.68V6.035h2.955z",fill:"var(--icon-color)"}})])])]),r("div",{staticClass:"sf-bottom-navigation-item__label has-margin"})])},w=[],S={name:"AddToCartBtn"},k=S,A=(0,p.Z)(k,C,w,!1,null,"663d6345",null),I=A.exports,B={name:"PostFooter",components:{AddToCartBtn:I},methods:{commentsClicked:function(){this.$parent.commentsClicked()}}},L=B,Z=(0,p.Z)(L,_,y,!1,null,"c9ad87a8",null),$=Z.exports;f()(Z,{VCol:h.Z,VRow:g.Z});var D={name:"AutoplayNextSwiper",components:{Swiper:s.Swiper,SwiperSlide:s.SwiperSlide,PostHeader:x,PostFooter:$},directives:{swiper:s.directive},props:{product:{type:Object,required:!0},productIndex:{type:Number,required:!0},focousedIndex:{type:Number,required:!0}},data:function(){var t=this;return{expanded:!1,user:{avatar:r(8308),name:"حسین اکبری"},videoWidth:window.screen.availWidth,mediaLastIndex:0,swiperOption:{speed:1e3,loop:!1,observer:!0,observeParents:!0,autoplayDisableOnInteraction:!1,pagination:{el:".swiper-pagination",clickable:!0},on:{slideChangeTransitionEnd:function(){t.slideChangeTransitionEndHandle()},slideChangeTransitionStart:function(){t.slideChangeTransitionStartHandle()},init:function(){t.initHandle()}}},initOrNot:!1,videoUrlListData:this.product.videoUrlList}},computed:{hasFocus:function(){return this.productIndex==this.focousedIndex}},methods:{commentsClicked:function(){this.$router.push({name:"comments",params:{reviews:this.product.reviews}})},expand:function(){this.expanded=!0},productClicked:function(){this.$router.push({name:"product",params:{productObject:this.product}})},initHandle:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasFocus){e.next=2;break}return e.abrupt("return");case 2:r=t,setTimeout((0,o.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=r.$refs.videoSwiper.$swiper,0!==r.videoUrlListData[0].type){t.next=5;break}r.mediaNewsImgHandle(e),t.next=7;break;case 5:return t.next=7,r.$refs["video0"][0].play();case 7:case"end":return t.stop()}}),t)}))),200);case 4:case"end":return e.stop()}}),e)})))()},mediaNewsImgHandle:function(t){var e=t.activeIndex;t.activeIndex<this.videoUrlListData.length-1?setTimeout((function(){e===t.activeIndex&&t.slideNext()}),2e3):setTimeout((function(){e===t.activeIndex&&t.slideTo(0,1e3)}),2e3)},slideChangeTransitionStartHandle:function(){if(this.hasFocus){this.$refs.videoSwiper.$swiper;1===this.videoUrlListData[this.mediaLastIndex].type&&this.$refs["video"+this.mediaLastIndex][0].pause()}},slideChangeTransitionEndHandle:function(){this.hasFocus&&(this.playCurrentSlide(),console.log("end.."))},playCurrentSlide:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$refs.videoSwiper.$swiper,0!==t.videoUrlListData[r.activeIndex].type){e.next=5;break}t.mediaNewsImgHandle(r),e.next=8;break;case 5:return 1===t.mediaLastIndex.type&&t.$refs["video"+t.mediaLastIndex][0].pause(),e.next=8,t.$refs["video"+r.activeIndex][0].play();case 8:t.mediaLastIndex=r.activeIndex,console.log(t.mediaLastIndex);case 10:case"end":return e.stop()}}),e)})))()},toggleMute:function(){var t=this.$refs.videoSwiper.$swiper;1===this.videoUrlListData[t.activeIndex].type&&(this.$store.commit("toggleMute"),this.$refs["video"+t.activeIndex][0].muted=this.$store.state.muted)},endVideo:function(t){var e=this.$refs.videoSwiper.$swiper;t===e.activeIndex&&(e.activeIndex<this.videoUrlListData.length-1?(e.slideNext(),1===this.videoUrlListData[e.activeIndex].type&&this.$refs["video"+e.activeIndex]):(e.slideTo(0,1e3),this.$refs["video"+e.activeIndex]))}},watch:{videoUrlListData:{handler:function(t,e){var r=this;this.initOrNot=!1,this.$nextTick((function(){r.initOrNot=!0}))},immediate:!0,deep:!0},focousedIndex:{handler:function(){console.log(this.productIndex+":"+this.hasFocus)}},hasFocus:{handler:function(){if(console.log("new has focous:  "+this.productIndex+":"+this.hasFocus),void 0!=this.productIndex){var t,e='[productIndexAttr="'+this.productIndex+'"]',r=document.querySelectorAll(e)[0],a=r.getElementsByTagName("video"),n=(0,i.Z)(a);try{for(n.s();!(t=n.n()).done;){var o=t.value;null===o||void 0===o||o.pause()}}catch(s){n.e(s)}finally{n.f()}this.hasFocus&&this.playCurrentSlide()}},deep:!0}}},N=D,P=(0,p.Z)(N,a,n,!1,null,"3c3d5b9d",null),T=P.exports},1068:function(t,e,r){r.d(e,{Z:function(){return w}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("v-btn",{staticClass:"FabIcon",attrs:{bottom:"",right:"",fixed:"",fab:"",dark:"",color:"green"},on:{click:t.homeFabClicked}},[r("v-icon",{attrs:{cart:""}},[t._v(" mdi-home ")])],1),r("v-btn",{staticClass:"FabIcon",attrs:{fixed:"",bottom:"",left:"",fab:"",dark:"",color:"green"},on:{click:t.cartFabClicked}},[r("span",{staticClass:"cart_digit"},[t._v(t._s(t.cartDigitText))]),r("v-icon",{attrs:{cart:""}},[t._v(" mdi-cart ")])],1)],2)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SfBottomNavigation",[r("SfBottomNavigationItem",{attrs:{icon:t.icon,label:t.label,"icon-active":t.iconActive,"is-active":t.currentIcon===t.iconActive},on:{click:function(e){t.currentIcon=t.iconActive}}}),t._l(t.bottomNavItems,(function(e,a){return r("SfBottomNavigationItem",{key:a,attrs:{icon:e.icon,"icon-active":e.iconActive,label:e.label,"icon-size":"20px","is-active":t.currentIcon===e.iconActive},on:{click:function(r){t.currentIcon=e.iconActive}}})})),r("SfBottomNavigationItem",{attrs:{label:"Basket",icon:"add_to_cart","is-floating":""}})],2)],1)},o=[],s=r(1696),c=r(3953),l=r(5767),u=r(5269),d={name:"BottomNav",components:{VideoPost:u.Z,SfBottomNavigation:s.Z,SfCircleIcon:c.Z,SfIcon:l.Z},data:function(){return{label:"Home",icon:"home",iconActive:"home",bottomNavItems:[{icon:"menu",iconActive:"menu",label:"Menu"},{icon:"heart",iconActive:"heart",label:"Heart"},{icon:"account",iconActive:"account",label:"Profile"}],currentIcon:"heart"}}},p=d,m=r(3736),f=(0,m.Z)(p,i,o,!1,null,null,null),v=f.exports,h={name:"PageLayout",components:{BottomNav:v},data:function(){return{}},computed:{cartDigitText:function(){return this.$store.state.cartItems.length}},methods:{cartFabClicked:function(){this.$router.push("/cart")},homeFabClicked:function(){this.$router.push("/")}}},g=h,b=r(3453),x=r.n(b),_=r(5863),y=r(6428),C=(0,m.Z)(g,a,n,!1,null,null,null),w=C.exports;x()(C,{VBtn:_.Z,VIcon:y.Z})},8308:function(t,e,r){t.exports=r.p+"img/avatar.e5ae909d.png"},8352:function(t,e,r){t.exports=r.p+"img/productA.033cd4ca.jpg"},8320:function(t,e,r){t.exports=r.p+"img/productB.906c17d4.jpg"},3376:function(t,e,r){t.exports=r.p+"media/1.732ac870.mp4"},9887:function(t,e,r){t.exports=r.p+"media/2.dcd8dd4e.mp4"},5531:function(t,e,r){t.exports=r.p+"media/3.038a657d.mp4"},3218:function(t,e,r){t.exports=r.p+"media/4.e8324cc9.mp4"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about-legacy.418a530a.js"}}(),function(){r.miniCssF=function(t){return"css/about.a75d99f0.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="helloworld-vue2:";r.l=function(a,n,i,o){if(t[a])t[a].push(n);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+i),s.src=a),t[a]=[n];var p=function(e,r){s.onerror=s.onload=null,clearTimeout(m);var n=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)r();else{var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,n.parentNode.removeChild(n),a(c)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){n=o[a],i=n.getAttribute("data-href");if(i===t||i===e)return n}},a=function(a){return new Promise((function(n,i){var o=r.miniCssF(a),s=r.p+o;if(e(o,s))return n();t(a,s,n,i)}))},n={143:0};r.f.miniCss=function(t,e){var r={443:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=a(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(r,a){n=t[e]=[r,a]}));a.push(n[2]=i);var o=r.p+r.u(e),s=new Error,c=function(a){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}};r.l(o,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(e&&e(a);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkhelloworld_vue2"]=self["webpackChunkhelloworld_vue2"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1702)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.551aa9f7.js.map