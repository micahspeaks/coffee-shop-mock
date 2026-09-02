const products=[
 {name:"Golden Hour Latte",description:"Espresso, orange blossom, brown sugar and silky oat milk.",price:"$7",image:"assets/editorial-coffee.jpg"},
 {name:"Matcha Cloud",description:"Ceremonial matcha, vanilla cream and a whisper of sea salt.",price:"$8",image:"assets/matcha-cloud.jpg"},
 {name:"Tiramisu Cold Brew",description:"Slow-steeped coffee, mascarpone cream and cocoa.",price:"$8",image:"assets/tiramisu-cold-brew.jpg"}
];
let bag=0;
const grid=document.querySelector("#product-grid"),count=document.querySelector("#bag-count"),toast=document.querySelector("#toast");
grid.innerHTML=products.map((p,i)=>`<article class="product-card"><img src="${p.image}" alt="${p.name}"><div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><strong>${p.price}</strong><button data-index="${i}">Add to bag</button></div></article>`).join("");
grid.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{bag++;count.textContent=bag;toast.textContent=products[+button.dataset.index].name+" added to your bag";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}));
document.querySelector(".bag-button").addEventListener("click",()=>{bag=0;count.textContent=0;toast.textContent="Your bag is clear";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1500)});
document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".main-nav").classList.remove("open")));
document.querySelector("#newsletter-form").addEventListener("submit",event=>{event.preventDefault();document.querySelector("#form-message").textContent="Welcome to the Aster & Ember journal.";event.target.reset()});
const beanStream=document.querySelector("#bean-stream");
const beanLandings=[
  [78,43,250],[112,55,390],[146,70,520],[183,83,310],[218,100,670],
  [248,116,430],[276,131,780],[301,148,560],[320,159,900],[332,170,650],
  [342,179,1080],[348,186,730],[354,192,1220],[360,197,840],[365,200,980],
  [371,204,1160],[376,207,1340],[382,210,1010]
];
beanLandings.forEach(([x,y,turn],index)=>{
  const bean=document.createElement("i");
  bean.className="coffee-bean";
  bean.style.setProperty("--end-x",x+"px");
  bean.style.setProperty("--end-y",y+"px");
  bean.style.setProperty("--turn",turn+"deg");
  bean.style.setProperty("--delay",(index*.17)+"s");
  bean.style.width=(11+(index%4)*2)+"px";
  bean.style.height=(8+(index%3))+"px";
  beanStream.appendChild(bean);
});
