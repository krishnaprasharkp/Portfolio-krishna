(() => {
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const strip=document.querySelector('.mq-track');
 if(strip){
  // Duplicate one complete sequence so the reset is visually seamless.
  const items=[...strip.children];
  const mid=items.length/2;
  const repeated=Number.isInteger(mid)&&items.slice(0,mid).every((el,i)=>el.querySelector('img')?.src===items[i+mid].querySelector('img')?.src);
  if(!repeated)items.forEach(el=>strip.append(el.cloneNode(true)));
  [...strip.children].slice(strip.children.length/2).forEach(el=>el.setAttribute('aria-hidden','true'));
 }
 const button=document.querySelector('.motion-toggle');
 let paused=preference.matches;
 function updateMotion(){document.body.classList.toggle('motion-paused',paused);if(button){button.textContent=paused?'Play motion':'Pause motion';button.setAttribute('aria-pressed',String(paused));button.disabled=preference.matches;}}
 button?.addEventListener('click',()=>{paused=!paused;updateMotion();});
 updateMotion();
 const minimal=location.pathname.includes('minimalist');
 let observer;
 if(minimal&&!preference.matches&&'IntersectionObserver' in window){
  const targets=[...document.querySelectorAll('.sec .rv,.contact-inner')];
  observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}})},{threshold:.06});
  targets.filter(el=>!el.parentElement.closest('.rv')).forEach(el=>{if(el.getBoundingClientRect().top>innerHeight*.85){el.classList.add('reveal-ready');observer.observe(el);}});
 }
 preference.addEventListener('change',()=>{paused=preference.matches;updateMotion();if(preference.matches){observer?.disconnect();document.querySelectorAll('.reveal-ready').forEach(el=>el.classList.add('revealed'));}});
 document.addEventListener('focusin',e=>e.target.closest('.reveal-ready')?.classList.add('revealed'));
 // Scroll-linked typography: natural scrolling, no scroll interception.
 if(minimal){
  const headings=[...document.querySelectorAll('h2')];
  let frame=0;
  function paintHeadings(){
   frame=0;
   headings.forEach(el=>{
    if(preference.matches){el.style.removeProperty('transform');el.style.removeProperty('opacity');return;}
    const y=el.getBoundingClientRect().top;
    const progress=Math.max(0,Math.min(1,(innerHeight*.94-y)/(innerHeight*.42)));
    el.style.transform=`translateY(${(1-progress)*26}px) scale(${.94+.06*progress})`;
    el.style.opacity=String(.22+.78*progress);
   });
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(paintHeadings);}
  headings.forEach(el=>el.classList.add('cinematic-heading'));
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  preference.addEventListener('change',schedule);paintHeadings();
 }
})();
