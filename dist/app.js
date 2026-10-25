const allProjects=window.portfolioProjects;
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selectedSlugs=['hotel-yoon','eyev','starfield-2025-winter-isp','gift'];
const number=i=>String(i+1).padStart(2,'0');
const projectNotes={
  'hotel-yoon':'Turning a moment of recovery into a complete brand experience.',
  'eyev':'Expanding the way we see through identity and packaging.',
  'starfield-2025-winter-isp':'A winter story told through AI-assisted film and spatial graphics.',
  'village-culture-day':'Bringing music, people and everyday moments into motion.',
  'gift':'Expressing seasonal care through editorial design and photography.'
};
const projectRoles={
  'hotel-yoon':'Brand identity, digital experience and editorial design.',
  'eyev':'Packaging, graphic systems and brand applications.',
  'starfield-2025-winter-isp':'Campaign concept, graphic design and moving image.',
  'village-culture-day':'Key visual, environmental graphics and motion.',
  'gift':'Concept, photo supervision and editorial design.'
};
const projectKorean={
  'hotel-yoon':['호텔 요온','맞춤형 휴식경험을 제공하는 호텔스테이 브랜딩'],
  'eyev':['아이브','시각 경험을 확장하는 아이케어 서비스 브랜딩'],
  'starfield-2025-winter-isp':['스타필드 겨울 캠페인','아이와 눈사람의 따뜻한 교감을 담은 AI 영상과 공간 그래픽'],
  'village-culture-day':['빌리지 문화의 날','음악과 일상의 생동감을 담은 공연 그래픽과 모션'],
  'gift':['신세계 기프트북','명절의 정성과 브랜드의 품격을 담은 카탈로그 디자인']
};
const displayTitle=p=>p.slug==='soopan-store'?'Soopan Store':p.title;
function archiveTitleMarkup(p){
  const title=displayTitle(p),words=title.split(/\s+/);
  let split=0;
  if(/^STARFIELD \d/.test(title))split=1;
  else if(title.length>28&&words.length>2){
    let best=Infinity;
    for(let i=1;i<words.length;i++){
      const difference=Math.abs(words.slice(0,i).join(' ').length-words.slice(i).join(' ').length);
      if(difference<best){best=difference;split=i;}
    }
  }
  return split?`${esc(words.slice(0,split).join(' '))}<br>${esc(words.slice(split).join(' '))}`:esc(title);
}
// A shared clock preserves project order across separate observer callbacks.
function scheduleTypeStart(now,nextStart,gap){const start=Math.max(now,nextStart);return {delay:Math.round(start-now),next:start+gap};}


const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const selectedProjects=selectedSlugs.map(slug=>allProjects.find(p=>p.slug===slug));
// Preserve whole words and Unicode graphemes while revealing individual characters.
const graphemeSegmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('en',{granularity:'grapheme'}):null;
const graphemes=text=>graphemeSegmenter?[...graphemeSegmenter.segment(text)].map(part=>part.segment):Array.from(text);
function typeMarkup(value,className,delay=0,tag='span'){
  const text=String(value??'');
  const count=graphemes(text.replace(/\s/g,'')).length;
  const step=Math.min(26,780/Math.max(1,count));
  let index=0;
  const visual=text.split(/(\s+)/).map(word=>{
    if(/^\s+$/.test(word))return esc(word);
    return `<span class="type-word">${graphemes(word).map(char=>`<span class="type-char" style="--char-delay:${Math.round(index++*step)}ms">${esc(char)}</span>`).join('')}</span>`;
  }).join('');
  return `<${tag} class="type-block ${className}" style="--block-delay:${delay}ms"><span class="sr-only">${esc(text)}</span><span class="type-visual" aria-hidden="true">${visual}</span></${tag}>`;
}
function projectMediaMarkup(p,media,index,hero=false){
  const [src,caption,poster]=media;
  const isVideo=/\.(mp4|webm)$/i.test(src);
  const label=caption?caption.split('\n')[0]:p.title+' — '+number(index);
  const content=isVideo
    ?`<video controls playsinline preload="none" poster="${esc(poster||p.cover)}" aria-label="${esc(p.title)} 영상"><source src="${esc(src)}"></video>`
    :`<img src="${esc(src)}" alt="${esc(label)}" ${hero?'fetchpriority="high"':'loading="lazy"'} decoding="async" draggable="false">`;
  return `<figure${hero?' class="detail-hero"':''}>${content}${caption?`<figcaption>${caption.includes('\n')?`<strong class="caption-title">${esc(caption.split('\n')[0])}</strong><span class="caption-copy">${esc(caption.split('\n').slice(1).join('\n'))}</span>`:esc(caption)}</figcaption>`:''}</figure>`;
}
function projectDetailMarkup(p){
  const index=allProjects.indexOf(p);
  const previous=allProjects[(index-1+allProjects.length)%allProjects.length];
  const next=allProjects[(index+1)%allProjects.length];
  const facts=[['Client',p.client],['Role',p.role],['Contribution',p.contribution],['Recognition',p.awards]].filter(f=>f[1]);
  const hero=p.images[0]?projectMediaMarkup(p,p.images[0],0,true):'';
  return `<section class="detail-description" aria-labelledby="detail-title"><h1 class="detail-title" id="detail-title" tabindex="-1">${esc(p.title)}</h1><p class="detail-spec">${esc(p.category)}<br>${esc(p.date||p.year)}</p><div class="detail-narrative" lang="ko"><p class="detail-copy">${esc(p.description)}</p></div>${p.website?`<p class="detail-website"><a class="text-link" href="${esc(p.website)}" target="_blank" rel="noopener noreferrer">Visit website ↗</a></p>`:''}</section>${hero}${p.images.length>1?`<div class="detail-gallery">${p.images.slice(1).map((media,i)=>projectMediaMarkup(p,media,i+1)).join('')}</div>`:''}<section class="detail-credits" aria-label="Project credits"><p>${esc(p.title)}<br>${esc(p.year)}</p><dl class="detail-facts">${facts.map(([label,value])=>`<dt>${label}</dt><dd>${esc(value)}</dd>`).join('')}</dl></section><nav class="detail-bottom-nav" aria-label="Project navigation"><a href="#archive">All projects</a><a href="#project/${esc(previous.slug)}" aria-label="Previous project: ${esc(previous.title)}">Previous</a><a href="#project/${esc(next.slug)}"><span>Next project</span><strong>${esc(next.title)} ↗</strong></a></nav>`;
}
document.querySelector('#selected-work').innerHTML=selectedProjects.map((p,i)=>`<a class="text-project type-row" href="#project/${esc(p.slug)}"><div class="project-index">${typeMarkup(number(i),'project-number',0)}${typeMarkup(p.category,'project-category',100)}</div><div class="project-english"><div class="project-heading">${typeMarkup(displayTitle(p),'project-title',180,'h2')}${typeMarkup(String(p.year),'project-year',330)}</div>${typeMarkup(projectNotes[p.slug],'project-note',620,'p')}${typeMarkup(projectRoles[p.slug],'project-role',900,'p')}</div><div class="project-korean" lang="ko"><div class="project-local-heading">${typeMarkup(projectKorean[p.slug][0],'project-local-title',420)}</div>${typeMarkup(projectKorean[p.slug][1],'project-local-note',780,'p')}</div><span class="project-hover-arrow" aria-hidden="true">↗</span></a>`).join('');
document.querySelector('#archive-list').innerHTML=allProjects.map(p=>`<a class="archive-card" href="#project/${esc(p.slug)}" aria-label="${esc(displayTitle(p))}"><img class="archive-cover" src="${esc(p.cover)}" alt="" loading="lazy" decoding="async" draggable="false"><span class="archive-caption"><span class="archive-name">${archiveTitleMarkup(p)}</span></span></a>`).join('');
const home=document.querySelector('#home-view'),detail=document.querySelector('#detail-view');
let wasDetail=false;
function route(){
  const hash=location.hash.slice(1);
  const p=hash.startsWith('project/')?allProjects.find(p=>p.slug===hash.slice(8)):null;
  if(p){
    wasDetail=true;home.hidden=true;detail.hidden=false;document.body.classList.add('viewing-work');
    detail.innerHTML=projectDetailMarkup(p);
    document.title=p.title+' — HONGJU';window.scrollTo({top:0,behavior:'instant'});document.querySelector('#detail-title').focus({preventScroll:true});
  }else{
    const returning=wasDetail;wasDetail=false;home.hidden=false;detail.hidden=true;document.body.classList.remove('viewing-work');detail.innerHTML='';document.title='HONGJU — A Design Collection';
    requestAnimationFrame(()=>{if(hash==='home'||!hash)window.scrollTo({top:0,behavior:'instant'});else {const target=document.getElementById(hash);target?.scrollIntoView({behavior:returning?'instant':'smooth'});}});
  }
}
window.addEventListener('hashchange',route);route();



// Scrolling starts independent character reveals. Layout is fully reserved from the outset.
const typeRows=[...document.querySelectorAll('.type-row')];
let typeObserver;
let nextTypeStart=0;
function revealTypeRow(row,delay=0,immediate=false){
  row.style.setProperty('--row-delay',`${delay}ms`);
  row.classList.add('is-typing');
  if(immediate)row.classList.add('is-complete');
  typeObserver?.unobserve(row);
}
function configureTyping(){
  typeObserver?.disconnect();
  nextTypeStart=0;
  document.body.classList.remove('typing-enabled');
  if(reducedMotion.matches||!('IntersectionObserver' in window)){
    typeRows.forEach(row=>revealTypeRow(row,0,true));return;
  }
  typeObserver=new IntersectionObserver(entries=>{
    const entering=entries.filter(entry=>entry.isIntersecting&&!entry.target.classList.contains('is-typing')).sort((a,b)=>typeRows.indexOf(a.target)-typeRows.indexOf(b.target));
    const now=performance.now();
    entering.forEach(entry=>{
      const gap=750;
      const slot=scheduleTypeStart(now,nextTypeStart,gap);
      nextTypeStart=slot.next;
      revealTypeRow(entry.target,slot.delay);
    });
  },{threshold:0,rootMargin:'0px 0px -9% 0px'});
  document.body.classList.add('typing-enabled');
  typeRows.forEach(row=>{if(!row.classList.contains('is-typing'))typeObserver.observe(row);});
}
document.querySelector('#home-view').addEventListener('focusin',event=>{
  const row=event.target.closest('.type-row');if(row)revealTypeRow(row,0,true);
});
reducedMotion.addEventListener('change',configureTyping);configureTyping();
const markNavigation=()=>document.querySelectorAll('.header nav a').forEach(a=>{if(a.hash===location.hash||((!location.hash||location.hash==='#home')&&a.hash==='#work'))a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
window.addEventListener('hashchange',markNavigation);markNavigation();

// Anchor the Korean description to the second English description line.
function alignProjectDescriptions(){
  if(window.innerWidth<=700||home.hidden)return;
  document.querySelectorAll('.text-project').forEach(row=>{
    const english=row.querySelector('.project-note'),korean=row.querySelector('.project-korean'),note=row.querySelector('.project-local-note');
    const enStyle=getComputedStyle(english),koStyle=getComputedStyle(note);
    const top=english.getBoundingClientRect().top-korean.getBoundingClientRect().top+parseFloat(enStyle.lineHeight)+(parseFloat(enStyle.fontSize)-parseFloat(koStyle.fontSize))*.8;
    korean.style.setProperty('--local-note-top',`${top}px`);
  });
}
let alignmentFrame;
const requestDescriptionAlignment=()=>{cancelAnimationFrame(alignmentFrame);alignmentFrame=requestAnimationFrame(alignProjectDescriptions);};
if('ResizeObserver' in window){const alignmentObserver=new ResizeObserver(requestDescriptionAlignment);document.querySelectorAll('.text-project').forEach(row=>alignmentObserver.observe(row));}
window.addEventListener('resize',requestDescriptionAlignment);
window.addEventListener('hashchange',requestDescriptionAlignment);
document.fonts?.ready.then(requestDescriptionAlignment);
requestDescriptionAlignment();
