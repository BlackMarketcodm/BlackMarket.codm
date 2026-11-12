/*
 * BlackMarket.codm - Front-end demonstration
 * IMPORTANT: this file runs in the visitor's browser. Do not place real personal data,
 * passwords, secret CAPTCHA answers, or prize/account credentials here. A production
 * tournament results system needs a protected server, database, admin login and API.
 */
const players = [
  {name:"محمد حسین طالبی",playerNumber:"0315194324",caseNumber:"0315194324",birthYear:"1391",gender:"مرد",UID:"7299400266281844737",Namegamecodm: "ƝoX MMD" ,competitionType:"مولتی",rank:"2",prize:"26",totalScore:"2,020",kills:"12",wins:"1",games:"2",finalStatus:"برنده",notes:"سازنده ی این سایت.",photo:"assets/gallery/photo_2026-04-21_10-21-09.jpg"},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""},
  {name:"",playerNumber:"",caseNumber:"",birthYear:"",gender:"",competitionType:"",rank:"",prize:"",totalScore:"",kills:"",wins:"",games:"",finalStatus:"",notes:"",photo:""}
];

const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav-link')];
function showPage(name){
  pages.forEach(p=>p.classList.toggle('active',p.id===`page-${name}`));
  navLinks.forEach(b=>b.classList.toggle('active',b.dataset.page===name));
  window.scrollTo({top:0,behavior:'smooth'});
  observeReveals();
}
navLinks.forEach(btn=>btn.addEventListener('click',()=>showPage(btn.dataset.page)));
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>showPage(btn.dataset.go)));

let revealObserver;
function observeReveals(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  }),{threshold:.12});
  document.querySelectorAll('.page.active .reveal:not(.visible)').forEach(el=>revealObserver.observe(el));
}
if('IntersectionObserver' in window) observeReveals(); else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));

const browserName=document.getElementById('browserName');
const ua=navigator.userAgent;
browserName.textContent=/Edg\//.test(ua)?'Microsoft Edge':/Chrome\//.test(ua)?'Chrome':/Firefox\//.test(ua)?'Firefox':/Safari\//.test(ua)?'Safari':'مرورگر دیگر';

const canvas=document.getElementById('captchaCanvas');
const ctx=canvas.getContext('2d');
let captchaAnswer='';
const captchaFiles=Array.from({length:24},(_,i)=>`assets/captcha/img_secur (${i+1}).jpg`);
function drawCaptcha(){
  captchaAnswer=String(Math.floor(10000+Math.random()*90000));
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#d9dee8';ctx.fillRect(0,0,canvas.width,canvas.height);
  // A supplied CAPTCHA sample is used only as a visual texture. The demo challenge is drawn separately.
  const img=new Image();img.onload=()=>{ctx.globalAlpha=.15;ctx.drawImage(img,0,0,canvas.width,canvas.height);ctx.globalAlpha=1;drawChallenge();};img.onerror=drawChallenge;
  img.src=captchaFiles[Math.floor(Math.random()*captchaFiles.length)];
  function drawChallenge(){
    for(let i=0;i<7;i++){ctx.strokeStyle=`rgba(37,47,65,${Math.random()*.28+.12})`;ctx.lineWidth=1+Math.random()*2;ctx.beginPath();ctx.moveTo(Math.random()*canvas.width,Math.random()*canvas.height);ctx.lineTo(Math.random()*canvas.width,Math.random()*canvas.height);ctx.stroke();}
    ctx.font='900 36px Vazirmatn, Tahoma';ctx.textAlign='center';ctx.textBaseline='middle';
    for(let i=0;i<captchaAnswer.length;i++){ctx.save();ctx.translate(37+i*39,39);ctx.rotate((Math.random()-.5)*.18);ctx.fillStyle='#101827';ctx.fillText(captchaAnswer[i],0,0);ctx.restore();}
    for(let i=0;i<60;i++){ctx.fillStyle='rgba(25,35,50,.25)';ctx.fillRect(Math.random()*canvas.width,Math.random()*canvas.height,2,2);}
  }
}
drawCaptcha();
document.getElementById('refreshCaptcha').addEventListener('click',()=>{drawCaptcha();document.getElementById('captchaInput').value='';});

const searchForm=document.getElementById('resultSearch');
const loading=document.getElementById('loadingOverlay');
const formError=document.getElementById('formError');
const toast=document.getElementById('toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600);}
function normalize(v){return String(v??'').trim().replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d));}
function val(id){return normalize(document.getElementById(id).value);}
searchForm.addEventListener('submit',e=>{
  e.preventDefault();formError.textContent='';
  const criteria={caseNumber:val('caseNumber'),playerNumber:val('playerNumber'),birthYear:val('birthYear')};
  const captchaValue=normalize(document.getElementById('captchaInput').value);
  if(!criteria.caseNumber||!criteria.playerNumber||!criteria.birthYear||!captchaValue){formError.textContent='برای مشاهده کارنامه، هر چهار فیلد را تکمیل کنید.';return;}
  if(captchaValue!==captchaAnswer){formError.textContent='کد تصویری صحیح نیست؛ کد تازه را وارد کنید.';drawCaptcha();document.getElementById('captchaInput').value='';return;}
  loading.classList.add('show');loading.setAttribute('aria-hidden','false');
  setTimeout(()=>{
    const found=players.find(p=>{
      return normalize(p.caseNumber)===criteria.caseNumber &&
        normalize(p.playerNumber)===criteria.playerNumber &&
        normalize(p.birthYear)===criteria.birthYear &&
        Boolean(p.name||p.playerNumber||p.caseNumber);
    });
    loading.classList.remove('show');loading.setAttribute('aria-hidden','true');
    if(!found){formError.textContent='کارنامه‌ای با این مشخصات پیدا نشد. اطلاعات را بررسی کنید.';drawCaptcha();document.getElementById('captchaInput').value='';return;}
    renderReport(found);pages.forEach(p=>p.classList.remove('active'));document.getElementById('page-report').classList.add('active');window.scrollTo({top:0,behavior:'smooth'});
  },1350);
});

const identityFields=[['نام و نام خانوادگی','name'],['شماره پرونده','caseNumber'],['شماره بازیکن','playerNumber'],['سال تولد','birthYear'],['جنسیت','gender'],['یوآیدی','UID'],['اسم شما در بازی','Namegamecodm'],['نوع مسابقه','competitionType']];
const statFields=[['رتبه در تورنمنت','rank'],['جایزه','prize'],['امتیاز کل مسابقه','totalScore'],['کیل ها ','kills'],['تعداد مچ های برد','wins'],['تعداد مچ ها','games']];
function safeText(value){return value===undefined||value===null||String(value).trim()===''?'—':String(value);}
function renderCells(fields,record){return fields.map(([label,key])=>`<div class="report-cell"><span>${label}</span><strong>${escapeHTML(safeText(record[key]))}</strong></div>`).join('');}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderReport(p){
  document.getElementById('reportIdentity').innerHTML=renderCells(identityFields,p);
  document.getElementById('reportStats').innerHTML=renderCells(statFields,p);
  const status=document.getElementById('reportStatus');status.textContent=safeText(p.finalStatus);
  status.style.color=/قبول|قبولی|تأیید/i.test(String(p.finalStatus))?'#16804a':/مردود|رد/i.test(String(p.finalStatus))?'#d34444':'#172b49';
  document.getElementById('reportNotes').textContent=safeText(p.notes);
  const photo=document.getElementById('playerPhoto'),fallback=document.getElementById('photoFallback');
  if(p.photo){photo.src=p.photo;photo.style.display='block';fallback.style.display='none';photo.onerror=()=>{photo.style.display='none';fallback.style.display='grid';};}
  else{photo.removeAttribute('src');photo.style.display='none';fallback.style.display='grid';}
}
function backToSearch(){showPage('results');}
document.getElementById('exitReport').addEventListener('click',backToSearch);
document.getElementById('backToSearch').addEventListener('click',backToSearch);
document.getElementById('printReport').addEventListener('click',()=>window.print());
