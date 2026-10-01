const menu=document.getElementById('menu'),nav=document.querySelector('nav');
if(menu)menu.onclick=()=>nav.classList.toggle('open');
const q=document.getElementById('q'),cards=[...document.querySelectorAll('.card')];
let cat='';
function filter(){const t=(q?q.value:'').toLowerCase();
cards.forEach(c=>{const ok=c.textContent.toLowerCase().includes(t)&&(!cat||c.dataset.cat===cat);c.style.display=ok?'':'none'})}
if(q)q.addEventListener('input',filter);
document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
const on=b.classList.contains('on');document.querySelectorAll('.chip').forEach(x=>x.classList.remove('on'));
cat=on?'':b.dataset.cat;if(!on)b.classList.add('on');filter()});
