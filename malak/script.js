// ===== FLOATING HEARTS =====
function createHeart(){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.fontSize=(14+Math.random()*20)+"px";
h.style.animationDuration=(4+Math.random()*4)+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
}
setInterval(createHeart,350);

// ===== ROSES RAIN =====
function createRose(){
let r=document.createElement("div");
r.className="rose";
r.innerHTML="🌹";
r.style.left=Math.random()*100+"vw";
r.style.animationDuration=(5+Math.random()*3)+"s";
document.body.appendChild(r);
setTimeout(()=>r.remove(),9000);
}
setInterval(createRose,1200);

// ===== CURSOR HEART =====
document.addEventListener("mousemove",e=>{
let c=document.getElementById("cursorHeart");
c.style.left=e.clientX+"px";
c.style.top=e.clientY+"px";
});

// ===== LETTER (FIX: TYPE ONLY ONCE) =====
let typed=false;

function openLetter(){
document.getElementById("letter").style.display="block";

if(typed) return; // <<<<< FIX (ma kat3awdch)

typed=true;

let text="Je voulais juste te dire que tu es la meilleure chose qui me soit arrivée. Je t'aime aujourd'hui, demain, et pour toujours ❤️💍";
let i=0;

function type(){
if(i<text.length){
document.getElementById("typeText").innerHTML+=text.charAt(i);
i++;
setTimeout(type,40);
}
}
type();
}

// ===== SECRET =====
function secret(){
document.getElementById("secretMsg").innerHTML=
"Tu es toute ma vie ❤️";
}

// ===== COUNTDOWN =====
let target=new Date("Feb 14, 2027 00:00:00").getTime();
setInterval(()=>{
let now=new Date().getTime();
let d=target-now;

let days=Math.floor(d/(1000*60*60*24));
let h=Math.floor((d%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((d%(1000*60*60))/(1000*60));
let s=Math.floor((d%(1000*60))/1000);

document.getElementById("countdown").innerHTML=
"⏳ "+days+"j "+h+"h "+m+"m "+s+"s ❤️";
},1000);

// ===== LOVE BURST =====
function fireworks(){
for(let i=0;i<30;i++){
setTimeout(createHeart,i*60);
}
}
