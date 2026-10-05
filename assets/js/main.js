
const toggle=document.querySelector('.mobile-toggle');
const sidebar=document.querySelector('.sidebar');
if(toggle&&sidebar){
  toggle.addEventListener('click',()=>sidebar.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>sidebar.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const typed=document.querySelector('[data-typed-items]');
if(typed){
  const items=typed.dataset.typedItems.split(',').map(s=>s.trim());
  let i=0,j=0,deleting=false;
  const tick=()=>{
    const word=items[i];
    typed.textContent=deleting?word.slice(0,j--):word.slice(0,j++);
    if(!deleting&&j>word.length+6) deleting=true;
    if(deleting&&j<0){deleting=false;i=(i+1)%items.length;j=0}
    setTimeout(tick,deleting?55:85);
  };
  tick();
}
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.portfolio-card').forEach(card=>{
      card.style.display=(f==='all'||card.dataset.category===f)?'block':'none';
    });
  });
});
