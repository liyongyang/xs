import{_ as p,r as v,a as _,f as x,i as F,j as I}from"./index-BrkAYC-I.js";const A=1e3/60,q={__name:"index",setup(k){const c=v(null);let o=[],t=0,i=null,d=performance.now();_(()=>{f().then(e=>{o=e}),g(),w(),window.addEventListener("wheel",u)});const h=e=>new Promise((s,n)=>{let r=new Image;r.onload=()=>{s(r)},r.onerror=function(){n(e)},r.src=e}),f=async()=>{let e=[];for(let a=0;a<=50;a++)await h(`/goods/case1/1000${a}-imageonline.webp`).then(s=>{e.push(s)});return e};x(()=>{window.removeEventListener("wheel",u),cancelAnimationFrame(i)});function g(){const e=c.value.getContext("2d");e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight}function w(){i=requestAnimationFrame(l)}function l(e){const a=e-d,s=Math.min(a/A,1);d=e;const n=c.value.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);const r=o[t],m=new Image;m.src=r,m.onload=()=>{n.drawImage(m,0,0,n.canvas.width,n.canvas.height),s===1&&(t=(t+1)%o.length),i=requestAnimationFrame(l)}}function u(e){e.deltaY>0?t=(t+1)%o.length:t=(t-1+o.length)%o.length}return(e,a)=>(F(),I("canvas",{ref_key:"canvasRef",ref:c,class:"sequence-frames"},null,512))}},C=p(q,[["__scopeId","data-v-a55c48d3"]]);export{C as default};
