/* 云会幕 · 共享交互 */
(function(){
  var box=document.getElementById('stars');
  if(box){for(var i=0;i<100;i++){var s=document.createElement('i');s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.width=s.style.height=(Math.random()*2+1)+'px';s.style.animationDelay=(Math.random()*3.4)+'s';box.appendChild(s);}}
  var toastTimer=null;
  window.toast=function(msg){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.classList.remove('show');},2600);};
  var ham=document.querySelector('.hamburger'),navLinks=document.getElementById('navLinks');
  if(ham&&navLinks){ham.addEventListener('click',function(){navLinks.classList.toggle('open');});
    navLinks.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){navLinks.classList.remove('open');});});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
  document.querySelectorAll('.reveal:not(.in)').forEach(function(el){io.observe(el);});
  var links=document.querySelectorAll('.nav-links a[href^="#"]');
  if(links.length){
    var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id);});}});},{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('section[id]').forEach(function(s){spy.observe(s);});
  }
})();
