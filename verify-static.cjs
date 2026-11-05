const fs = require('fs'), p = require('path');
const root = 'dist/client', files = [];
function walk(d) { for (const e of fs.readdirSync(d, {withFileTypes:true})) { const f=p.join(d,e.name); e.isDirectory()?walk(f):files.push(f); } }
walk(root);
const missing=[];
for (const f of files.filter(f=>f.endsWith('.html'))) {
  const h=fs.readFileSync(f,'utf8');
  for (const m of h.matchAll(/(?:src|href)="(\/[^\"]*)"/g)) {
    const u=m[1].split(/[?#]/)[0]; if(!u) continue;
    const dest=p.join(root,decodeURIComponent(u));
    if(![dest,dest+'.html',p.join(dest,'index.html')].some(x=>fs.existsSync(x))) missing.push(u);
  }
}
console.log(JSON.stringify({files:files.length,maxMB:Math.max(...files.map(f=>fs.statSync(f).size))/1048576,missing:[...new Set(missing)]}));
if(missing.length) process.exit(1);
