import{r as o,u as i,j as e,L as m,b as g}from"./index-57fa8f17.js";import{c as u,d as v,u as j,F as p,C,B as f}from"./FilterCar-2a518d77.js";const F="/CaRentTime/assets/nothing-990b8085.png",N=()=>{const[t,c]=o.useState(1),n=i(u);let a=i(v);const[r,l]=o.useState([]),d=j();a.length===0&&(a=n),o.useEffect(()=>{const s=a.slice(0,t*12);l(s)},[t,a]);const x=s=>{d(g(s))},h=()=>{const s=t+1;c(s)};return e.jsx("section",{children:r.length?e.jsxs("div",{className:"container mx-auto",children:[e.jsx(p,{isFavoriteList:!0,page:t}),e.jsx(C,{carArray:r,handleAddToFavorites:x}),n.length!==r.length?e.jsx(f,{handleLoadMore:h}):null]}):e.jsxs("div",{className:"container mx-auto text-center h-[70vh] mt-[16%]",children:[e.jsx("img",{src:F,alt:"magnifying icon",width:128,height:128,className:"mx-auto mb-4"}),e.jsx("h2",{className:"text-2xl",children:"Favorites cars not added yet"}),e.jsxs("p",{className:"text-2xl",children:["go to"," ",e.jsx(m,{className:"mr-1 text-mainBtn underline",to:"/catalog",children:"Catalog"}),"and chose favorites cars by clicking hearts"]})]})})};export{N as default};
