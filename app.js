(() => {
'use strict';
const C=window.DrillCore, data=window.DRILL_QUESTIONS, app=document.getElementById('app');
let session=null, selected=null;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const math=s=>window.DrillMath.format(s);
function typeset(){return window.DrillMath.render(app);}
function show(content){app.innerHTML=content;typeset();app.focus({preventScroll:true});window.scrollTo(0,0);}
function conclusion(q){return C.conclusion(q);}
function explanation(q){
 const reasons=[['pq','pならばqが成り立つか。'],['qp','qならばpが成り立つか。']].map(([key,label])=>{
  const valid=q.implications[key],detail=C.directionExplanation(q,key);
  return '<div class="reason"><strong>'+label+'</strong><span class="truth '+(valid?'true':'false')+'">'+(valid?'成り立つ':'成り立たない')+'</span><p>'+math(detail.text)+'</p>'+(detail.example?'<p class="counterexample"><b>反例：</b>'+math(detail.example)+'</p>':'')+(detail.witnessCheck?'<p>'+detail.witnessCheck+'</p>':'')+'</div>';
 }).join('');
 return '<div class="explanation">'+reasons+'<p class="correct-answer">正解：'+C.choices[q.answer]+'</p><p class="conclusion">'+conclusion(q)+'</p></div>';
}
function conditions(q){return '<p class="domain">'+math(q.domain)+'</p><div class="conditions"><div><span class="condition-letter">p</span><p>'+math(q.p)+'</p></div><div><span class="condition-letter">q</span><p>'+math(q.q)+'</p></div></div>';}
function home(){
 show('<section class="intro"><span class="eyebrow">必要条件・十分条件</span><h1>2つの向きから、<br>条件の関係を考えよう。</h1><p>難易度を選んで、5問に挑戦。<br>1問ごとに、理由と反例を確認できます。</p></section><section aria-labelledby="level-title"><div class="section-heading"><h2 id="level-title">難易度を選ぶ</h2><span>各20問からランダム出題</span></div><div class="level-grid">'+[['basic','01','基礎','まずは定義を確認','数の性質や図形の基本から、条件のつながりをつかもう。'],['standard','02','標準','解集合と逆を考える','方程式・不等式や集合から、2つの向きを確かめよう。'],['advanced','03','応用','反例を見つける','複数の条件を整理して、見落としやすい反例を考えよう。']].map(([id,num,label,title,desc])=>'<button class="level-card" data-level="'+id+'"><span class="level-number">'+num+'</span><strong>'+label+'</strong><span class="level-title">'+title+'</span><span class="level-desc">'+desc+'</span><span class="level-start">この難易度で始める</span></button>').join('')+'</div></section><details class="guide"><summary>このドリルの見方・必要条件と十分条件をおさらい</summary><p>「pはqであるための何条件か」は、次の2つの向きで判断します。</p> <p>'+C.orNote+'</p><p>'+C.implicationNote+'</p><div class="guide-grid"><div><strong>pならばq：成り立つ</strong><small>qならばp：成り立たない</small><span>十分条件</span></div><div><strong>qならばp：成り立つ</strong><small>pならばq：成り立たない</small><span>必要条件</span></div><div><strong>どちらの向きも成り立つ</strong><span>必要十分条件</span></div><div><strong>どちらの向きも成り立たない</strong><span>どちらでもない</span></div></div><p>「pならばq」とは「pを満たすものは、すべてqも満たす」ということ。1つでも反例があれば成り立ちません。</p></details>');
 app.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>start(b.dataset.level));
}
function start(level,previous=[]){session=C.createSession(data,level,previous);selected=null;question();}
function question(){
 const q=session.questions[session.index], answered=session.answers[session.index];
 show('<div class="exercise-top"><span class="pill">'+C.levels[session.level]+' · '+C.fields[q.field]+'</span><span class="count">'+(session.index+1)+' <span>/ 5問</span></span></div><div class="progress" role="progressbar" aria-label="解答済みの問題数" aria-valuemin="0" aria-valuemax="5" aria-valuenow="'+session.answers.length+'"><span style="width:'+(session.answers.length*20)+'%"></span></div><section class="question-card" aria-labelledby="question-title"><span class="eyebrow">QUESTION '+String(session.index+1).padStart(2,'0')+'</span><h1 id="question-title" class="question-heading">'+C.problemStatement+'</h1>'+conditions(q)+'<fieldset><legend>1つ選んでください</legend><div class="options">'+C.choices.map((text,i)=>'<label class="option '+(answered?(i===answered.choice?'chosen ':'')+(i===q.answer?'answer-option':''):'')+'"><input type="radio" name="choice" value="'+i+'" '+(answered?'disabled ':'')+(answered?.choice===i?'checked ':'')+'><span class="option-number">'+(i+1)+'</span><span>'+text+'</span></label>').join('')+'</div></fieldset>'+(answered?'<section class="feedback '+(answered.correct?'success':'incorrect')+'" aria-labelledby="feedback-title"><h2 id="feedback-title">'+(answered.correct?'○ 正解':'× 不正解')+'</h2><p>あなたの解答：'+C.choices[answered.choice]+'</p>'+explanation(q)+'</section><button class="primary" id="next">'+(session.index===4?'結果を見る':'次の問題へ')+'</button>':'<button class="primary" id="submit" disabled>解答する</button>')+'</section>');
 if(answered){app.querySelector('#next').onclick=()=>{selected=null;if(session.next())result();else question();};app.querySelector('#feedback-title').setAttribute('tabindex','-1');app.querySelector('#feedback-title').focus({preventScroll:true});}
 else{
  app.querySelectorAll('input[name=choice]').forEach(el=>el.onchange=()=>{selected=Number(el.value);app.querySelector('#submit').disabled=false;app.querySelectorAll('.option').forEach(l=>l.classList.toggle('chosen',l.contains(el)));});
  app.querySelector('#submit').onclick=()=>{if(selected===null)return;session.submit(selected);question();app.querySelector('.feedback').scrollIntoView({block:'nearest',behavior:'instant'});};
 }
}
function result(){
 const score=session.score;
 show('<section class="result-heading"><span class="eyebrow">'+C.levels[session.level]+' · 演習完了</span><h1>今回の結果</h1><div class="score"><strong>'+score+'</strong><span>/ 5問 正解</span></div><p class="rate">正答率 <strong>'+score*20+'%</strong></p><p>'+ (score===5?'全問正解！ 2つの向きをしっかり確認できました。':'反例を確認して、条件のつながりをもう一度考えてみよう。')+'</p></section><section aria-labelledby="review-title"><div class="section-heading"><h2 id="review-title">5問を振り返る</h2><span>開くと解説を確認できます</span></div><div class="review-list">'+session.questions.map((q,i)=>{const a=session.answers[i];return '<details class="review"><summary><span class="review-status '+(a.correct?'ok':'ng')+'">'+(a.correct?'○ 正解':'× 不正解')+'</span><span class="review-title">問'+(i+1)+' · '+C.fields[q.field]+'<small>p：'+math(q.p)+'</small></span><span class="expand" aria-hidden="true">＋</span></summary><div class="review-content">'+conditions(q)+'<p>あなたの解答：'+C.choices[a.choice]+'</p>'+explanation(q)+'</div></details>';}).join('')+'</div></section><div class="result-actions"><button class="primary" id="retry">もう一度挑戦する</button><button class="secondary" id="home">難易度選択に戻る</button></div>');
 app.querySelector('#retry').onclick=()=>start(session.level,session.questions.map(q=>q.id));app.querySelector('#home').onclick=home;
 app.querySelectorAll('details').forEach(d=>d.ontoggle=()=>{if(d.open)typeset();});
}
try{C.validate(data);home();}catch(e){show('<h1>問題データを読み込めませんでした</h1><p>ページを再読み込みしてください。編集後の場合はREADMEの検証手順を確認してください。</p>');console.error(e);}
if(document.modelContext?.registerTool){
 try{Promise.resolve(document.modelContext.registerTool({name:'read_drill_state',description:'現在の数学演習の画面と解答状態を読む。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({level:session?.level??null,index:session?.index??null,answered:session?.answers.length??0,score:session?.score??null})})).catch(()=>{});}catch(e){}
}
})();
