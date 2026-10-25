const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={window:{matchMedia:()=>({matches:false})},Intl};
vm.createContext(context);
vm.runInContext(fs.readFileSync('dist/projects.js','utf8'),context);
const source=fs.readFileSync('dist/app.js','utf8');
vm.runInContext(source.slice(0,source.indexOf("document.querySelector('#selected-work')")),context);
const projects=context.window.portfolioProjects;
for(let i=0;i<projects.length;i++){
  const p=projects[i];
  const html=vm.runInContext(`projectDetailMarkup(allProjects[${i}])`,context);
  assert.ok(!html.includes('detail-image-link'));
  for(const [src] of p.images)assert.ok(!html.includes(`href="${src}"`));
  assert.equal((html.match(/<figure/g)||[]).length,p.images.length,p.slug+' keeps every media item');
  assert.ok(html.indexOf('id="detail-title"')<html.indexOf('class="detail-hero"'));
  let previous=-1;
  for(const [src,caption] of p.images){
    const position=html.indexOf(`src="${src}"`);
    assert.ok(position>previous,p.slug+' media order');previous=position;
    if(caption)for(const line of caption.split('\n'))assert.ok(html.includes(vm.runInContext(`esc(${JSON.stringify(line)})`,context)));
    if(/\.(mp4|webm)$/i.test(src))assert.ok(html.includes('<video controls playsinline preload="none"'));
  }
  assert.ok(html.includes(`href="#project/${projects[(i+1)%projects.length].slug}"`));
  assert.ok(html.includes(`href="#project/${projects[(i-1+projects.length)%projects.length].slug}"`));
  assert.equal(html.includes('class="detail-gallery"'),p.images.length>1);
  if(p.contribution)assert.ok(html.includes(vm.runInContext(`esc(${JSON.stringify(p.contribution)})`,context)));
}
console.log('Passed: all 19 project pages preserve media/captions/contributions, compact project introduction before full-width media, video controls, single-media layout and wrapping previous/next navigation.');
