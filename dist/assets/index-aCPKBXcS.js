import{d as I,r as V,a as x,o as F,b as c,c as u,e as f,h as e,t as m,F as k,k as z,f as n,w as s,g as C,p as S,i as j,_ as B}from"./index-4ufjQ8_g.js";const r=_=>(S("data-v-59001285"),_=_(),j(),_),N={class:"pg-container"},q={class:"banner flex justify-center items-center"},R={class:"text-wrapper text-center flex flex-col items-center"},D={class:"banner-title wow animate__animated animate__fadeInUp"},L={class:"section-wrapper flex-wrap space-x-2"},M={class:"contact"},T={class:"contact-item"},$={class:"name wow animate__animated animate__fadeInUp"},A={class:"txt wow animate__animated animate__fadeInUp"},E={class:"wx-info flex space-x-40"},G={class:"flex flex-col justify-between"},H={class:"wow animate__animated animate__fadeInUp"},J=["src"],K={class:"flex flex-col justify-between"},O={class:"wow animate__animated animate__fadeInUp"},P=["src"],Q={class:"xsForm"},W=r(()=>e("div",{class:"wow animate__animated animate__fadeInUp"},"姓名",-1)),X=r(()=>e("div",{class:"wow animate__animated animate__fadeInUp"},"企业姓名",-1)),Y=r(()=>e("div",{class:"wow animate__animated animate__fadeInUp"},"电话",-1)),Z=r(()=>e("div",{class:"wow animate__animated animate__fadeInUp"},"邮箱",-1)),ee={class:"text-center mt-8 wow animate__animated animate__fadeInUp"},te=I({__name:"index",setup(_){const g={title:"联系我们"},i={contact:[{name:"商务咨询",txt:"lvml@xs-trinity.com"},{name:"加入我们",txt:"hrfxy@xs-trinity.com"},{name:"联系电话",txt:"15381991195"}],wx:{name:"官方微信二维码",img:"/public/aboutUs/wx.png"},gzh:{name:"微信公众号二维码",img:"/public/aboutUs/gzh.png"}},w=V(),o=x({name:"",company:"",phone:"",email:""}),h=x({name:[{required:!0,message:"请填写姓名后提交",trigger:"blur"},{min:1,max:12,message:"请填写正确姓名后提交",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:8,max:11,message:"请填写正确手机号后提交",trigger:"blur"}]}),b=async p=>{p&&await p.validate((t,l)=>{t?console.log("submit!"):console.log("error submit!",l)})};return F(()=>{}),(p,t)=>{const l=c("el-input"),d=c("el-form-item"),v=c("el-button"),y=c("el-form");return u(),f("div",N,[e("section",q,[e("div",R,[e("li",D,m(g.title),1)])]),e("section",L,[e("div",M,[(u(!0),f(k,null,z(i.contact,(a,U)=>(u(),f("div",{class:"space-y-2",key:U},[e("div",T,[e("li",$,m(a.name),1),e("li",A,m(a.txt),1)])]))),128)),e("div",E,[e("div",G,[e("li",H,m(i.wx.name),1),e("img",{class:"wow animate__animated animate__fadeInUp",src:i.wx.img,alt:""},null,8,J)]),e("div",K,[e("li",O,m(i.gzh.name),1),e("img",{class:"wow animate__animated animate__fadeInUp",src:i.gzh.img,alt:""},null,8,P)])])]),e("div",Q,[n(y,{ref_key:"ruleFormRef",ref:w,style:{width:"590px"},model:o,rules:h,"label-width":"left",class:"demo-ruleForm","status-icon":""},{default:s(()=>[n(d,{prop:"name"},{label:s(()=>[W]),default:s(()=>[n(l,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.name=a)},null,8,["modelValue"])]),_:1}),n(d,{prop:"company"},{label:s(()=>[X]),default:s(()=>[n(l,{modelValue:o.company,"onUpdate:modelValue":t[1]||(t[1]=a=>o.company=a)},null,8,["modelValue"])]),_:1}),n(d,{prop:"phone"},{label:s(()=>[Y]),default:s(()=>[n(l,{modelValue:o.phone,"onUpdate:modelValue":t[2]||(t[2]=a=>o.phone=a)},null,8,["modelValue"])]),_:1}),n(d,{prop:"email"},{label:s(()=>[Z]),default:s(()=>[n(l,{modelValue:o.email,"onUpdate:modelValue":t[3]||(t[3]=a=>o.email=a)},null,8,["modelValue"])]),_:1}),e("div",ee,[n(v,{class:"btn-black",type:"primary",onClick:t[4]||(t[4]=a=>b(w.value))},{default:s(()=>[C(" 提交 ")]),_:1})])]),_:1},8,["model","rules"])])])])}}}),ne=B(te,[["__scopeId","data-v-59001285"]]);export{ne as default};
