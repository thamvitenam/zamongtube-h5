"use strict";(self["webpackChunkjamongtube"]=self["webpackChunkjamongtube"]||[]).push([[600],{7735:function(a,e,l){l.d(e,{M:function(){return u}});var t=l(9060);const u=a=>(0,t.Z)({url:"/videos/getOssVideo",method:"post",data:a})},4774:function(a,e,l){l.d(e,{Z:function(){return v}});l(7658);var t=l(3396),u=l(4870),n=l(2483),s={__name:"NavaBackSearch",props:{title:{type:String,default:""}},setup(a){const e=(0,n.tv)(),l={SearchActionTextColor:"#FFF"},s=()=>history.back(),o=(0,u.iH)(""),i=a=>{e.push({path:"/search-result",query:{keyWord:o.value}})},v=()=>{e.push({path:"/search-result",query:{keyWord:o.value}})};return(a,e)=>{const u=(0,t.up)("van-icon"),n=(0,t.up)("van-col"),r=(0,t.up)("van-search"),c=(0,t.up)("van-config-provider"),d=(0,t.up)("van-row");return(0,t.wg)(),(0,t.j4)(d,{class:"con"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{span:"3"},{default:(0,t.w5)((()=>[(0,t._)("div",{class:"back",onClick:s},[(0,t.Wm)(u,{name:"arrow-left",color:"#fff",size:"20"})])])),_:1}),(0,t.Wm)(n,{span:"20"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{"theme-vars":l},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{background:"#1a1d25",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),"show-action":"",placeholder:"검색어를 입력해주세요",onSearch:i},{action:(0,t.w5)((()=>[(0,t._)("div",{onClick:v},"검색")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}},o=l(89);const i=(0,o.Z)(s,[["__scopeId","data-v-a940fe7a"]]);var v=i},1295:function(a,e,l){l.r(e),l.d(e,{default:function(){return H}});l(7658);var t=l(3396),u=l(4870),n=l(7139);l(4774);const s={class:"cate-name"},o={class:"cate-box"},i={style:{color:"#fff"}};var v={__name:"TitleBarClass",props:{name:{type:String,default:""}},setup(a){return(e,l)=>((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",o,[(0,t._)("span",i,(0,n.zw)(a.name),1)])]))}},r=l(89);const c=(0,r.Z)(v,[["__scopeId","data-v-0bd111ba"]]);var d=c,p=l(1135),f=l(2267),m=l(8129),y=l(344),g=(l(7619),l(6986)),w=l(3147),h=l(2483),_=l(7735);const I={class:"van-clearfix"},W={key:0,class:"no-data"};var k={__name:"VideoClass",setup(a){(0,u.iH)(!1),(0,u.iH)(!1);const e=(0,h.yj)(),l=((0,h.tv)(),(0,u.iH)(null)),s=(0,u.iH)(null),o=(0,u.iH)(null),i=(0,u.iH)(null),v=(0,u.iH)(null),r=(0,u.iH)(),c=(0,u.iH)(null),k=(0,u.iH)(0);let q=(0,u.iH)(100),H=(0,u.iH)(null);l.value=e.query.classifyName,s.value=e.query.title,i.value=e.query.classifyId,o.value=parseInt(e.query.newVideo),v.value=e.query.specialId,c.value=e.query.searchWord,r.value=e.query.index;let x=(0,u.iH)(null);const b=async()=>{const a=await(0,w.b)({typee:41});x.value=a.data};b();const S=async()=>{if(H.value=null,o.value){const a=await(0,_.M)({page:k.value+1,pageSize:20,classifyId:parseInt(i.value)||0,specialId:parseInt(v.value)||0});H.value=a.data,q.value=parseInt(a.total/20)}else if("Japan1"===l.value){const a=await(0,g.ce)({page:20*k.value,classify:i.value||0});H.value=a.data,q.value=parseInt(a.totalPage/40)}else if("Japan2"===l.value){const a=await(0,g.ep)({page:20*k.value,classify:i.value||0});H.value=a.data,q.value=parseInt(a.totalPage/40)}else if("Korea"===l.value){const a=await(0,g.US)({page:20*k.value,classify:i.value||0});H.value=a.data,q.value=parseInt(a.totalPage/40)}else if("Japan3"===l.value){const a=await(0,g.R8)({page:20*k.value,classify:i.value||0});H.value=a.data,q.value=parseInt(a.totalPage/40)}else if("search"===l.value){const a=await(0,g.wR)({page:20*k.value,searchWord:c.value||""});H.value=a.data,q.value=parseInt(a.totalPage/40)}else if("t100"===l.value){const a=await(0,g.M9)({page:20*k.value});H.value=a.data,q.value=parseInt(a.totalPage/40)}else{const a=await(0,g.ce)({page:20*k.value,classify:i.value||0});H.value=a.data,q.value=parseInt(a.totalPage/40)}};S(),(0,t.YP)(k,((a,e)=>{a>1&&S()}));const V={paginationBackground:"#1a1d25",paginationItemDisabledBackground:"#1a1d25"};return(0,h.ao)((a=>{l.value=a.query.classifyName,s.value=a.query.title,i.value=a.query.classifyId,o.value=a.query.newVideo,v.value=a.query.specialId,c.value=a.query.searchWord,r.value=a.query.index,k.value=0,S()})),(a,e)=>{const o=(0,t.up)("van-icon"),i=(0,t.up)("van-pagination"),v=(0,t.up)("van-config-provider");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(y.Z),(0,t.Wm)(p.Z,{adList:(0,u.SU)(x)},null,8,["adList"]),(0,t.Wm)(d,{name:s.value},null,8,["name"]),(0,t._)("div",I,[(0,t.Wm)(f.Z,{videosList:(0,u.SU)(H),classifyName:l.value,indexx:r.value},null,8,["videosList","classifyName","indexx"])]),(0,u.SU)(H)?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",W," no video yet ")),(0,t.Wm)(v,{"theme-vars":V},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value=a),"show-page-size":5,"page-count":(0,u.SU)(q)},{"prev-text":(0,t.w5)((()=>[(0,t.Wm)(o,{name:"arrow-left"})])),"next-text":(0,t.w5)((()=>[(0,t.Wm)(o,{name:"arrow"})])),page:(0,t.w5)((({text:a})=>[(0,t.Uk)((0,n.zw)(a),1)])),_:1},8,["modelValue","page-count"])])),_:1}),(0,t.Wm)(m.Z)],64)}}};const q=(0,r.Z)(k,[["__scopeId","data-v-197a971c"]]);var H=q}}]);