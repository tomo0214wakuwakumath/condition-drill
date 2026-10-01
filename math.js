/* MathJax SVGだけを使う共通の数式表示。TeXはdata-texにそのまま保持する。 */
(() => {
'use strict';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function fallback(tex){
 return tex.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,'($1)/($2)')
  .replace(/\^\{\\circ\}/g,'°').replace(/\\circ/g,'°')
  .replace(/\\(Rightarrow|geqq|leqq|geq|leq|ne|times|in|notin)\s*/g,(_,key)=>({Rightarrow:'⇒',geqq:'≧',leqq:'≦',geq:'≧',leq:'≦',ne:'≠',times:'×',in:'∈',notin:'∉'}[key]))
  .replace(/\^2/g,'²').replace(/\^3/g,'³').replace(/\\[, ]/g,' ')
  .replace(/-/g,'−');
}
function format(text){
 let result='',last=0;
 const pattern=/\$\$([\s\S]+?)\$\$|\$([^$\n]+)\$/g;
 for(const match of String(text).matchAll(pattern)){
  result+=escape(String(text).slice(last,match.index));
  const display=match[1]!==undefined,tex=display?match[1]:match[2];
  result+='<span class="math'+(display?' math-display':'')+'" data-math-display="'+(display?'block':'inline')+'" data-math-state="pending" data-tex="'+escape(tex)+'">'+escape(fallback(tex))+'</span>';
  last=match.index+match[0].length;
 }
 return result+escape(String(text).slice(last));
}
let loadPromise=null,queue=Promise.resolve();
function report(message,error){
 console.error('[DrillMath]',message,error||'');
 let notice=document.getElementById('drill-math-notice');
 if(!notice){notice=document.createElement('p');notice.id='drill-math-notice';notice.className='math-notice';notice.setAttribute('role','status');(document.querySelector('footer')||document.body).prepend(notice);}
 notice.textContent='数式の描画に失敗したため、読める文字表記を表示しています。';
}
function load(){
 if(loadPromise)return loadPromise;
 loadPromise=new Promise((resolve,reject)=>{
  window.MathJax={
   tex:{packages:['base','ams']},
   svg:{fontCache:'local'},
   startup:{typeset:false,ready:()=>{
    window.MathJax.startup.defaultReady();
    window.MathJax.startup.promise.then(()=>resolve(window.MathJax),reject);
   }}
  };
  const script=document.createElement('script');
  script.id='drill-mathjax';
  script.src='https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js';
  script.referrerPolicy='no-referrer';
  script.onerror=()=>reject(new Error('MathJaxの読み込みに失敗'));
  document.head.append(script);
 });
 return loadPromise;
}
function render(root=document){
 const job=async()=>{
  const pending=[...root.querySelectorAll('.math[data-math-state="pending"]')];
  if(!pending.length)return;
  let M;
  try{M=await load();}catch(error){pending.forEach(el=>{el.dataset.mathState='failed';});report('ライブラリ読み込みエラー',error);return;}
  for(const el of pending){
   if(!el.isConnected||el.dataset.mathState!=='pending')continue;
   el.dataset.mathState='rendering';
   try{
    const display=el.dataset.mathDisplay==='block';
    const node=await M.tex2svgPromise(el.dataset.tex,{display});
    if(node.querySelector('[data-mjx-error],mjx-merror'))throw new Error('TeXの変換エラー: '+el.dataset.tex);
    if(!el.isConnected)continue;
    // 原文を残して追記せず、描画結果で置き換える。
    el.replaceChildren(node);
    el.dataset.mathState='rendered';
   }catch(error){
    el.textContent=fallback(el.dataset.tex);
    el.dataset.mathState='failed';
    report('数式変換エラー: '+el.dataset.tex,error);
   }
  }
  // 単独変換のSVGと補助MathMLに必要なMathJaxのスタイルを挿入する。
  M.startup.document.reset();
  M.startup.document.updateDocument();
 };
 queue=queue.catch(error=>report('描画キューのエラー',error)).then(job).catch(error=>report('描画更新エラー',error));
 return queue;
}
window.DrillMath={format,fallback,render};
})();
