(function (scope) {
'use strict';
const choices = ['必要条件だが十分条件ではない','十分条件だが必要条件ではない','必要十分条件','必要条件でも十分条件でもない'];
const levels = {basic:'基礎',standard:'標準',advanced:'応用'};
const fields = {A:'数の性質',B:'方程式・不等式',C:'集合の包含関係',D:'図形の性質'};
function answerFrom(pq,qp){return pq ? (qp ? 2 : 1) : (qp ? 0 : 3);}
function validate(data){
 const ids=new Set();
 for(const q of data){
  if(ids.has(q.id)) throw Error('問題IDが重複: '+q.id);
  ids.add(q.id);
  if(!levels[q.level] || !fields[q.field]) throw Error('難易度・分野が不正: '+q.id);
  if(typeof q.implications?.pq!=='boolean'||typeof q.implications?.qp!=='boolean'||answerFrom(q.implications.pq,q.implications.qp)!==q.answer) throw Error('含意と正解が不一致: '+q.id);
  for(const direction of ['pq','qp']){
   const example=q.counterexamples?.[direction];
   if(q.implications[direction] ? example!==null : typeof example!=='string'||!example.trim()) throw Error('反例と条件の関係が不一致: '+q.id);
  }
  for(const s of [q.domain,q.p,q.q,q.explanation?.forward,q.explanation?.reverse]) if(typeof s!=='string'||!s.trim()) throw Error('必須項目が空: '+q.id);
 }
 for(const l of Object.keys(levels)) if(data.filter(q=>q.level===l).length<20) throw Error('20問未満: '+l);
 return true;
}
function sample(data,level,rng=Math.random,previous=[]){
 if(!levels[level]) throw Error('難易度が不正');
 const pool=data.filter(q=>q.level===level).slice();
 if(pool.length<5) throw Error('問題数が不足');
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 const pick=pool.slice(0,5);
 // 偶然まったく同じ5問になったときも、再挑戦では必ず1問は入れ替える。
 if(previous.length===5 && pick.every(q=>previous.includes(q.id))){
  const replacement=pool.slice(5).find(q=>!previous.includes(q.id));
  if(replacement) pick[4]=replacement;
 }
 return pick;
}
function createSession(data,level,previous=[],rng=Math.random){
 const questions=sample(data,level,rng,previous); let index=0; const answers=[];
 return {level,questions,answers,get index(){return index;},
  submit(choice){if(index>=5||answers.length!==index) throw Error('すでに確定しています');if(!Number.isInteger(choice)||choice<0||choice>3) throw Error('選択肢が不正');const q=questions[index];const record={id:q.id,choice,correct:choice===q.answer};answers.push(record);return record;},
  next(){if(answers.length!==index+1) throw Error('解答を先に確定してください');index++;return index===5;},
  get score(){return answers.filter(a=>a.correct).length;}
 };
}

const problemStatement='次の2つの条件p、qについて、指定された定義域のすべての対象を考え、pはqであるための何条件か答えなさい。';
const orNote='『または』は、少なくとも一方が成り立つことを表します。両方が成り立つ場合も含みます。';
const implicationNote='p⇒qが成り立つとは、指定された定義域でpを満たすすべての対象がqも満たすことです。pを満たすのにqを満たさない対象が1つでもあれば、その含意は成り立ちません。';
function directionExplanation(q,direction){
 const text=q.explanation[direction==='pq'?'forward':'reverse'];
 const valid=q.implications[direction];
 const example=valid||q.explanationIncludesCounterexample?.[direction]?null:q.counterexamples[direction];
 const witnessCheck=valid?null:'この反例は指定された定義域に属し、'+(direction==='pq'?'pを満たしますが、qを満たしません。':'qを満たしますが、pを満たしません。');
 return {text,example,witnessCheck};
}

function conclusion(q){return 'したがって、pはqであるための'+choices[q.answer]+'です。';}
scope.DrillCore={conclusion,problemStatement,orNote,implicationNote,directionExplanation,choices,levels,fields,answerFrom,validate,sample,createSession};
})(typeof window!=='undefined'?window:globalThis);
