import{c as G,n as U,t as K,d as Q,q as N,aO as Z,v as J,a as n,L as H,aD as W,I as V,w as X,a9 as b,ac as s,ad as o,aE as v,ae as t,G as f,al as x,aP as Y,ay as j,af as a,an as S,am as z,ao as O,ah as A,ai as D,aQ as tt,ak as E,aR as et,b as L,ag as T}from"./index.4bbdb7fe.js";import{S as st,b as ot,T as at,a as ct}from"./index.9c0bfe85.js";import{R as nt}from"./index.5e6a722c.js";import{h as lt}from"./index.997e9c32.js";const[it,I]=G("nav-bar"),dt={title:String,fixed:Boolean,zIndex:U,border:K,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var rt=Q({name:it,props:dt,emits:["click-left","click-right"],setup(e,{emit:d,slots:l}){const i=N(),c=Z(i,I),r=m=>d("click-left",m),_=m=>d("click-right",m),u=()=>l.left?l.left():[e.leftArrow&&n(V,{class:I("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:I("text")},[e.leftText])],$=()=>l.right?l.right():n("span",{class:I("text")},[e.rightText]),h=()=>{const{title:m,fixed:k,border:g,zIndex:B}=e,w=J(B),C=e.leftArrow||e.leftText||l.left,R=e.rightText||l.right;return n("div",{ref:i,style:w,class:[I({fixed:k}),{[W]:g,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:I("content")},[C&&n("div",{class:[I("left"),H],onClick:r},[u()]),n("div",{class:[I("title"),"van-ellipsis"]},[l.title?l.title():m]),R&&n("div",{class:[I("right"),H],onClick:_},[$()])])])};return()=>e.fixed&&e.placeholder?c(h):h()}});const _t=X(rt);function ut(e){return lt.get({url:"/detail/infos",params:{houseId:e}})}const ht={class:"detail-swipe"},mt=["src"],vt={class:"custom-indicator"},ft={key:0,class:"count"},pt={__name:"detailSwipe",props:{swipeData:{type:Array,default:()=>[]}},setup(e){const d=e,l={};for(const _ of d.swipeData){let u=l[_.enumPictureCategory];u||(u=[],l[_.enumPictureCategory]=u),u.push(_)}console.log(d.swipeData);const i=/【(.*?)】/i,c=_=>i.exec(_)[1],r=_=>l[_.enumPictureCategory].findIndex($=>$==_)+1;return(_,u)=>{const $=st,h=ot;return s(),o("div",ht,[n(h,{class:"my-swipe",autoplay:3e3,"indicator-color":"pink"},{indicator:v(({active:m})=>[t("div",vt,[(s(),o(f,null,x(l,(k,g)=>{var B,w;return t("span",{key:g,class:Y(["name",{active:((B=e.swipeData[m])==null?void 0:B.enumPictureCategory)==g}])},[j(a(c(k[0].title))+" ",1),((w=e.swipeData[m])==null?void 0:w.enumPictureCategory)==g?(s(),o("span",ft,a(r(e.swipeData[m]))+"/"+a(k.length),1)):S("",!0)],2)}),64))])]),default:v(()=>[(s(!0),o(f,null,x(d.swipeData,(m,k)=>(s(),z($,{key:k},{default:v(()=>[t("img",{src:m.url,alt:""},null,8,mt)]),_:2},1024))),128))]),_:1})])}}},yt=b(pt,[["__scopeId","data-v-b8e99d40"]]);const $t=e=>(A("data-v-7bd5e805"),e=e(),D(),e),gt={class:"infos"},xt={class:"infos-top"},It={class:"houseTags"},kt={class:"commentBrief"},bt={class:"left"},wt={class:"overall"},Tt={class:"scoreTitle"},St={class:"commentBrief-child"},Bt={class:"right"},Ct={class:"totalCount"},Pt={class:"nearByPosition"},At={class:"left"},Dt={class:"address"},Rt={class:"right"},Mt=$t(()=>t("span",null," \u5730\u56FE\xB7\u5468\u8FB9",-1)),Nt={__name:"detailInfo",props:{topInfos:{type:Object,default:()=>({})}},setup(e){const d=e;return console.log("topInfos:",d.topInfos),(l,i)=>{const c=V;return s(),o("div",gt,[t("div",xt,a(d.topInfos.houseName),1),t("div",It,[(s(!0),o(f,null,x(d.topInfos.houseTags,(r,_)=>(s(),o(f,{key:_},[r.tagText?(s(),o("span",{key:0,class:"text",style:O({color:r.tagText.color,background:r.tagText.background.color})},a(r.tagText.text),5)):S("",!0)],64))),128))]),t("div",kt,[t("div",bt,[t("span",wt,a(d.topInfos.commentBrief.overall),1),t("span",Tt,a(d.topInfos.commentBrief.scoreTitle),1),t("span",St,a(d.topInfos.commentBrief.commentBrief),1)]),t("div",Bt,[t("span",Ct,a(d.topInfos.commentBrief.totalCount)+"\u6761\u8BC4\u8BBA",1),n(c,{name:"arrow"})])]),t("div",Pt,[t("div",At,[t("span",Dt,a(d.topInfos.nearByPosition.address),1)]),t("div",Rt,[Mt,n(c,{name:"arrow"})])])])}}},Ot=b(Nt,[["__scopeId","data-v-7bd5e805"]]);const Ft={class:"house-section"},Ht={class:"header"},Lt={class:"title"},Vt={class:"content"},jt={key:0,class:"footer"},zt={class:"more"},Et={__name:"houseSection",props:{headerText:{type:String,default:"\u9ED8\u8BA4\u6807\u9898"},moreText:{type:String,default:""}},setup(e){return(d,l)=>(s(),o("div",Ft,[t("div",Ht,[t("h2",Lt,a(e.headerText),1)]),t("div",Vt,[tt(d.$slots,"default",{class:"content"},()=>[j("\u9ED8\u8BA4\u5185\u5BB9")],!0)]),e.moreText?(s(),o("div",jt,[t("span",zt,a(e.moreText)+" >",1)])):S("",!0)]))}},M=b(Et,[["__scopeId","data-v-e2092bc1"]]);const qt=e=>(A("data-v-63db6c44"),e=e(),D(),e),Gt={class:"facility-area"},Ut={class:"facility"},Kt={key:0,class:"item"},Qt={class:"head"},Zt=["src"],Jt={class:"text"},Wt={class:"list"},Xt=qt(()=>t("i",{class:"icon_check icon"},null,-1)),Yt={__name:"faciliy-area",props:{houseFacility:{type:Object,default:()=>({})}},setup(e){return(d,l)=>(s(),o("div",Gt,[n(M,{"header-text":"\u623F\u5C4B\u8BBE\u65BD","more-text":"\u67E5\u770B\u5168\u90E8\u8BBE\u65BD"},{default:v(()=>{var i;return[t("div",Ut,[(s(!0),o(f,null,x((i=e.houseFacility)==null?void 0:i.houseFacilitys,(c,r)=>{var _,u;return s(),o(f,{key:r},[(u=(_=e.houseFacility)==null?void 0:_.facilitySort)!=null&&u.includes(r)?(s(),o("div",Kt,[t("div",Qt,[t("img",{src:c.icon,alt:""},null,8,Zt),t("div",Jt,a(c.groupName),1)]),t("div",Wt,[(s(!0),o(f,null,x(c.facilitys.slice(0,4),($,h)=>(s(),o("div",{key:h,class:"iten"},[Xt,t("span",null,a($.name),1)]))),128))])])):S("",!0)],64)}),128))])]}),_:1})]))}},te=b(Yt,[["__scopeId","data-v-63db6c44"]]);const ee=e=>(A("data-v-8ed26381"),e=e(),D(),e),se={class:"landlord-area"},oe={class:"intro"},ae={class:"top"},ce=["src"],ne={class:"header"},le={class:"left"},ie={class:"avatar"},de=["src"],re={class:"info"},_e={class:"name"},ue={class:"tags"},he={key:0,class:"divider"},me=ee(()=>t("div",{class:"right"},[t("div",{class:"contact"},"\u8054\u7CFB\u623F\u4E1C")],-1)),ve={class:"bottom"},fe={class:"title"},pe={class:"score"},ye={class:"desc"},$e={__name:"landlordArea",props:{landlord:{type:Object,default:()=>({})}},setup(e){return(d,l)=>(s(),o("div",se,[n(M,{"header-text":"\u623F\u4E1C\u4ECB\u7ECD","more-text":"\u67E5\u770B\u623F\u4E1C\u4E3B\u9875"},{default:v(()=>[t("div",oe,[t("div",ae,[t("img",{src:e.landlord.topScroll,alt:""},null,8,ce)]),t("div",ne,[t("div",le,[t("div",ie,[t("img",{src:e.landlord.hotelLogo,alt:""},null,8,de)]),t("div",re,[t("div",_e,a(e.landlord.hotelName),1),t("div",ue,[(s(!0),o(f,null,x(e.landlord.hotelTags,(i,c)=>(s(),o("div",{key:c,class:"item",style:O({color:i.tagText.color})},[t("span",null,a(i.tagText.text),1),c!==e.landlord.hotelTags.length-1?(s(),o("span",he,"|")):S("",!0)],4))),128))])])]),me]),t("div",ve,[(s(!0),o(f,null,x(e.landlord.hotelSummary,(i,c)=>(s(),o("div",{key:c,class:"item"},[t("div",fe,a(i.title),1),t("div",pe,a(i.introduction),1),t("div",ye,a(i.tip),1)]))),128))])])]),_:1})]))}},ge=b($e,[["__scopeId","data-v-8ed26381"]]);const xe=e=>(A("data-v-af4c1fe8"),e=e(),D(),e),Ie={class:"comment-area"},ke={class:"comment"},be={class:"header"},we={class:"left"},Te={class:"score"},Se={class:"text"},Be=xe(()=>t("div",{class:"line"},null,-1)),Ce={class:"info"},Pe={class:"title"},Ae={class:"count"},De={class:"star"},Re={class:"right"},Me={class:"tags"},Ne={class:"content"},Oe={class:"user"},Fe={class:"avatar"},He=["src"],Le={class:"profile"},Ve={class:"name"},je={class:"date"},ze={class:"text"},Ee={__name:"comment-area",props:{comment:{type:Object,default:()=>({})}},setup(e){return(d,l)=>{const i=nt;return s(),o("div",Ie,[n(M,{"header-text":"\u623F\u5BA2\u70B9\u8BC4","more-text":"\u67E5\u770B\u5168\u90E837\u6761\u8BC4\u4EF7"},{default:v(()=>[t("div",ke,[t("div",be,[t("div",we,[t("div",Te,[t("span",Se,a(e.comment.overall),1),Be]),t("div",Ce,[t("div",Pe,a(e.comment.scoreTitle),1),t("div",Ae,a(e.comment.totalCount)+"\u6761\u8BC4\u8BBA",1),t("div",De,[n(i,{modelValue:e.comment.overall,"onUpdate:modelValue":l[0]||(l[0]=c=>e.comment.overall=c),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),t("div",Re,[(s(!0),o(f,null,x(e.comment.subScores,c=>(s(),o("span",{key:c,class:"item"},a(c),1))),128))])]),t("div",Me,[(s(!0),o(f,null,x(e.comment.commentTagVo,(c,r)=>(s(),o("span",{key:r,class:"item",style:O({color:c.color,background:c.backgroundColor})},a(c.text),5))),128))]),t("div",Ne,[t("div",Oe,[t("div",Fe,[t("img",{src:e.comment.comment.userAvatars,alt:""},null,8,He)]),t("div",Le,[t("div",Ve,a(e.comment.comment.userName),1),t("div",je,a(e.comment.comment.checkInDate),1)])]),t("div",ze,a(e.comment.comment.commentDetail),1)])])]),_:1})])}}},qe=b(Ee,[["__scopeId","data-v-af4c1fe8"]]);const Ge={class:"rules-area"},Ue={class:"orderRules"},Ke={class:"title"},Qe={key:0,class:"introduction"},Ze=["onClick"],Je={key:1,class:"introduction"},We={__name:"rules-area",props:{rules:{type:Object,default:()=>({})}},setup(e){const d=E(),l=i=>{d.push({path:"/detailed",query:{tips:i}})};return(i,c)=>(s(),o("div",Ge,[n(M,{"header-text":"\u9884\u8BA2\u987B\u77E5"},{default:v(()=>[t("div",Ue,[(s(!0),o(f,null,x(e.rules.orderRules,(r,_)=>(s(),o("div",{key:_,class:"item",style:{"{\r\n                color":"item?.color?"}},[t("div",Ke,a(r.title),1),r.introduction?(s(),o("div",Qe,[t("span",null,a(r.introduction),1),r.tips?(s(),o("span",{key:0,class:"tips",onClick:u=>l(r.tips)},"\u67E5\u770B\u8BF4\u660E",8,Ze)):S("",!0)])):(s(),o("div",Je,a(r.icon),1))]))),128))])]),_:1})]))}},Xe=b(We,[["__scopeId","data-v-8c0d7ac9"]]);const q=e=>(A("data-v-ff6e2e17"),e=e(),D(),e),Ye={class:"action-bar"},ts=q(()=>t("div",{class:"chat"},[t("i",{class:"detail_icon_chat"}),t("span",{class:"text"},"\u804A\u5929")],-1)),es={class:"price"},ss={class:"final"},os={class:"unit"},as={class:"old"},cs=q(()=>t("div",{class:"order"},[t("i",{class:"detail_icon_order"}),t("span",{class:"text"},"\u9884\u8BA2\u5F53\u524D\u623F\u6E90")],-1)),ns={__name:"action-bar",props:{currentHouse:{type:Object,default:()=>({})}},setup(e){return(d,l)=>(s(),o("div",Ye,[ts,t("div",es,[t("span",ss,a("\xA5"+e.currentHouse.finalPrice),1),t("span",os,a(e.currentHouse.priceMark),1),t("span",as,a(e.currentHouse.productPrice),1)]),cs]))}},ls=b(ns,[["__scopeId","data-v-ff6e2e17"]]),is={class:"detail top-page"},hs={__name:"detail",setup(e){const l=et().params.id,i=N({}),c=L(()=>{var h;return(h=i.value)==null?void 0:h.mainPart}),r=L(()=>{var h;return(h=i.value)==null?void 0:h.currentHouse});ut(l).then(h=>{i.value=h.data});const _=E(),u=()=>_.back(),$=N(0);return(h,m)=>{var w;const k=_t,g=at,B=ct;return s(),o("div",is,[n(k,{title:"\u623F\u5C4B\u8BE6\u7EC6","left-text":"\u65C5\u9014","left-arrow":"",onClickLeft:u}),(w=i.value)!=null&&w.mainPart?(s(),z(B,{key:0,active:$.value,"onUpdate:active":m[0]||(m[0]=C=>$.value=C),scrollspy:"",sticky:""},{default:v(()=>{var C,R;return[n(g,{title:"\u623F\u5C4B\u56FE\u7247"},{default:v(()=>{var p,y,P,F;return[n(yt,{swipeData:(P=(y=(p=T(c))==null?void 0:p.topModule)==null?void 0:y.housePicture)==null?void 0:P.housePics},null,8,["swipeData"]),n(Ot,{topInfos:(F=T(c))==null?void 0:F.topModule},null,8,["topInfos"])]}),_:1}),n(g,{title:"\u623F\u5C4B\u8BBE\u65BD"},{default:v(()=>{var p,y,P;return[n(te,{houseFacility:(P=(y=(p=T(c))==null?void 0:p.dynamicModule)==null?void 0:y.facilityModule)==null?void 0:P.houseFacility},null,8,["houseFacility"])]}),_:1}),n(g,{title:"\u623F\u4E1C\u4ECB\u7ECD"},{default:v(()=>{var p,y;return[n(ge,{landlord:(y=(p=T(c))==null?void 0:p.dynamicModule)==null?void 0:y.landlordModule},null,8,["landlord"])]}),_:1}),n(g,{title:"\u623F\u5BA2\u70B9\u8BC4"},{default:v(()=>{var p,y;return[n(qe,{comment:(y=(p=T(c))==null?void 0:p.dynamicModule)==null?void 0:y.commentModule},null,8,["comment"])]}),_:1}),n(Xe,{rules:(R=(C=T(c))==null?void 0:C.dynamicModule)==null?void 0:R.rulesModule},null,8,["rules"]),n(ls,{"current-house":T(r)},null,8,["current-house"])]}),_:1},8,["active"])):S("",!0)])}}};export{hs as default};
