import{J as g,z as h,u as w,m as x,c as S,d as t,e as c,f as o,t as d,G as l,F as b,h as R,x as C,w as p,k as i,g as q,_ as B}from"./index-UepL-pdg.js";const N={rs100:{name:"RS100 工业读码器",navs:[{key:"product-params",value:"产品参数"},{key:"download",value:"下载"},{key:"qa",value:"常见问题"}]},r17:{name:"R17 系列紧凑型读码器",navs:[{key:"product-params",value:"产品参数"},{key:"download",value:"下载"},{key:"qa",value:"常见问题"}]},r275a:{name:"R275-A",navs:[{key:"product-params",value:"产品参数"},{key:"similar",value:"型号对比"},{key:"download",value:"下载"},{key:"qa",value:"常见问题"}]},h920:{name:"H920 有线款高性能读码器",navs:[{key:"product-params",value:"产品参数"},{key:"download",value:"下载"},{key:"qa",value:"常见问题"}]}},P=g("pageStore",{state:()=>({pageStore:N})}),$={class:"header wow animate__animated animate__fadeInDown"},H={class:"head flex justify-between items-center mx-auto"},T={class:"flex justify-between items-center"},V=h({__name:"subHeader",setup(j){const m=w(),e=x().params.goodType,{pageStore:_}=P(),k=e.toLowerCase(),s=_[k];function v(r){return{path:`/goods/${e}/${r}`}}const y=()=>{m.push({path:`/goods/${e}`})};return(r,n)=>{const u=S("router-link");return t(),c("div",$,[o("div",H,[o("section",{class:"good-name cursor-pointer",onClick:n[0]||(n[0]=a=>y())},d(l(s).name),1),o("div",T,[(t(!0),c(b,null,R(l(s).navs,(a,f)=>(t(),C(u,{key:f,to:v(a.key),class:"py-2 px-3 mr-4 cursor-pointer"},{default:p(()=>[i(d(a.value),1)]),_:2},1032,["to"]))),128)),q(u,{to:{path:"/contactUs"},class:"btn-black py-2 px-3 mr-4 cursor-pointer"},{default:p(()=>[i("联系我们 ")]),_:1})])])])}}}),I=B(V,[["__scopeId","data-v-e8b80a2c"]]);export{I as S};
