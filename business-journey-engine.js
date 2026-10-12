/* Event-sourced classroom campaign: replay validated decisions, never mint money by replaying a day. */
(function(){
 'use strict';const D=window.BusinessJourneyData,key='selflearn.playlab.business-journey.v1';
 const find=(items,id)=>items.find(x=>x.id===id);
 function project(actions){
  if(!Array.isArray(actions)||actions.length>10)return {error:'sequence'};
  const m={cash:D.capital,equipment:0,lots:[],deliveries:[],bills:[],loan:0,interest:0,capital:D.capital,partner:false,drawings:0,revenue:0,refunds:0,cogs:0,expenses:0,financeCost:0,trust:60,morale:60,history:[],product:null,location:null,funding:null,preparation:null,day:0,complete:false};
  const units=()=>m.lots.reduce((s,l)=>s+l.units,0),inventory=()=>m.lots.reduce((s,l)=>s+l.units*l.cost,0);
  const profit=()=>m.revenue-m.refunds-m.cogs-m.expenses;
  let ledger=[];
  const row=(label,amount,cash,profitChange)=>ledger.push({label,amount,cash,profit:profitChange});
  function take(n){let cost=0;for(const l of m.lots){const amount=Math.min(l.units,n);l.units-=amount;n-=amount;cost+=amount*l.cost;if(!n)break;}m.lots=m.lots.filter(l=>l.units>0);return cost;}
  function pay(amount,label,day,expense=true,kind='expense'){
   const paid=Math.min(m.cash,amount);m.cash-=paid;if(amount>paid)m.bills.push({amount:amount-paid,due:day+1,kind});if(expense)m.expenses+=amount;row(label,amount,-paid,expense?-amount:0);return paid;
  }
  function settle(day){for(const b of m.bills){if(b.due<=day){const paid=Math.min(m.cash,b.amount);m.cash-=paid;b.amount-=paid;if(paid)row(['Pay a bill already recorded','पहले दर्ज बिल चुकाएँ'],paid,-paid,0);}}m.bills=m.bills.filter(b=>b.amount>0);}
  try{for(let index=0;index<actions.length;index++){
   const a=actions[index];if(!a||typeof a!=='object')return {error:'sequence'};ledger=[];
   if(index===0){if(a.type!=='idea'||!find(D.products,a.product)||!find(D.locations,a.location))return {error:'idea'};m.product=a.product;m.location=a.location;row(['Choose product and location','वस्तु और स्थान चुनें'],0,0,0);m.history.push({stage:'idea',ledger});continue;}
   if(index===1){if(a.type!=='funding'||!find(D.funding,a.choice))return {error:'funding'};m.funding=a.choice;
    if(a.choice==='bank'){m.cash+=400;m.loan=400;m.interest=40;m.expenses+=40;m.financeCost+=40;row(['Bank loan principal received','बैंक ऋण मूलधन मिला'],400,400,0);row(['Finance charge recorded as payable','वित्त शुल्क देय दर्ज'],40,0,-40);}
    if(a.choice==='partner'){m.cash+=300;m.capital+=300;m.partner=true;row(['Investor equity contribution','निवेशक पूँजी योगदान'],300,300,0);}
    if(a.choice==='grant'){m.capital+=120;m.equipment=120;row(['Restricted grant directly funds equipment','प्रतिबंधित अनुदान सीधे उपकरण देता है'],120,0,0);}
    else{m.cash-=120;m.equipment=120;row(['Buy shelf and sign: a capital asset','शेल्फ और बोर्ड खरीदें: पूँजीगत संपत्ति'],120,-120,0);}
    m.history.push({stage:'funding',ledger});continue;
   }
   if(index===2){if(a.type!=='prepare'||!find(D.preparation,a.choice))return {error:'prepare'};m.preparation=a.choice;const cost=a.choice==='survey'?20:a.choice==='advertise'?40:0;if(cost)pay(cost,['Opening preparation expense','उद्घाटन तैयारी खर्च'],0);m.history.push({stage:'prepare',ledger});continue;}
   const day=index-2,event=D.days[day-1],p=find(D.products,m.product),location=find(D.locations,m.location),supplier=find(D.suppliers,a.supplier),staff=find(D.staff,a.staff);
   if(a.type!=='day'||a.day!==day||!supplier||!staff||!event.choices.some(c=>c.id===a.eventChoice)||!Number.isInteger(a.quantity)||a.quantity<0||a.quantity>20||!Number.isInteger(a.price)||a.price<1||a.price>80)return {error:'plan'};
   const openingCash=m.cash,openingUnits=units();
   for(const delivery of m.deliveries.filter(l=>l.day<=day)){m.lots.push({units:delivery.units,cost:delivery.cost});row(['Prepaid stock arrives; no new payment','पहले चुकाया माल आया; नया भुगतान नहीं'],delivery.units*delivery.cost,0,0);}m.deliveries=m.deliveries.filter(l=>l.day>day);
   if(day===6&&a.eventChoice==='bridge'){m.cash+=200;m.loan+=200;m.interest+=20;m.expenses+=20;m.financeCost+=20;row(['Bridge loan principal received','अस्थायी ऋण मूलधन मिला'],200,200,0);row(['Bridge finance charge recorded as payable','अस्थायी वित्त शुल्क देय दर्ज'],20,0,-20);}
   if(day===6&&a.eventChoice==='extend'){for(const b of m.bills)if(b.kind==='supplier'&&b.due===day)b.due++;row(['Supplier agrees to one extra day; bill remains','आपूर्तिकर्ता एक दिन देता है; बिल बाकी'],0,0,0);}
   settle(day);
   const unitCost=supplier.id==='wholesale'?Math.max(1,p.cost-2):p.cost,purchase=a.quantity*unitCost;
   if(a.quantity>0&&supplier.id==='wholesale'&&a.quantity<10)return {error:'wholesale'};
   if(a.quantity>0&&supplier.id==='credit'&&m.bills.reduce((s,b)=>s+b.amount,0)+purchase>400)return {error:'credit'};
   if(supplier.id!=='credit'&&purchase>m.cash)return {error:'cash'};
   if(a.quantity){
    if(supplier.id==='credit'){m.bills.push({amount:purchase,due:day+1,kind:'supplier'});m.lots.push({units:a.quantity,cost:unitCost});row(['Supplier credit: stock and bill increase','आपूर्तिकर्ता उधार: माल और बिल बढ़ते हैं'],purchase,0,0);}
    else{m.cash-=purchase;if(supplier.id==='wholesale')m.deliveries.push({units:a.quantity,cost:unitCost,day:day+1});else m.lots.push({units:a.quantity,cost:unitCost});row(supplier.id==='wholesale'?['Prepay wholesale order for tomorrow','कल के थोक माल का अग्रिम भुगतान']:['Buy stock delivered today','आज मिले माल की खरीद'],purchase,-purchase,0);}
   }
   let capacity=staff.capacity,extra=location.extra+(m.preparation==='advertise'&&day<=2?2:0),effectivePrice=a.price,refund=0,damaged=0;
   if(day===1)m.trust+=a.eventChoice==='clear'?5:-5;
   if(day===2&&a.eventChoice==='accept'){extra+=4;effectivePrice=Math.max(1,a.price-2);}
   if(day===3){if(a.eventChoice==='protect')pay(10,['Protect stock from rain','बारिश से माल बचाएँ'],day);else if(units()){damaged=take(1);m.expenses+=damaged;row(['Rain-damaged stock written off','बारिश से खराब माल की लागत घटाएँ'],damaged,0,-damaged);}}
   if(day===4){const previous=m.history.filter(h=>h.stage==='day').at(-1);if(previous?.sold>0){if(a.eventChoice==='refund'){refund=previous.effectivePrice;m.refunds+=refund;pay(refund,['Refund a faulty sale; returned item has no value','खराब बिक्री लौटाएँ; लौटा माल मूल्यहीन'],day,false,'refund');ledger.at(-1).profit=-refund;m.trust+=8;}else if(a.eventChoice==='replace'){if(!units())return {error:'replacement'};const replacement=take(1);m.expenses+=replacement;row(['Provide one replacement from stock','माल से एक अच्छी वस्तु बदलें'],replacement,0,-replacement);m.trust+=6;}else m.trust-=15;}else m.trust+=a.eventChoice==='dismiss'?-5:3;}
   if(day===5){if(a.eventChoice==='listen'){pay(20,['Team training expense','टीम प्रशिक्षण खर्च'],day);if(staff.id!=='solo')capacity+=2;m.morale+=10;}else m.morale-=12;}
   if(day===7){extra+=4;m.trust+=a.eventChoice==='honest'?5:-8;}
   const budgets=[...p.budgets,...Array.from({length:extra},(_,j)=>p.budgets[j%p.budgets.length])];if(day===3)budgets.splice(Math.ceil(budgets.length/2));if(m.trust<50)budgets.splice(Math.max(0,budgets.length-2));
   const willing=budgets.filter(b=>b>=effectivePrice).length,sold=Math.min(willing,units(),capacity),soldCost=take(sold),revenue=sold*effectivePrice;m.revenue+=revenue;m.cogs+=soldCost;m.cash+=revenue;row(['Sales receipts','बिक्री से नकद मिला'],revenue,revenue,revenue);row(['Cost of goods sold: stock consumed','बिकी वस्तुओं की लागत: माल उपयोग'],soldCost,0,-soldCost);
   pay(location.rent,['Daily stall cost','रोज़ का दुकान खर्च'],day);if(staff.wage){pay(staff.wage,['Agreed employee wages','तय कर्मचारी वेतन'],day,true,'wages');}
   if(day===7){settle(day);let repayment=Math.min(m.cash,m.interest);m.cash-=repayment;m.interest-=repayment;if(repayment)row(['Pay accrued finance cost','दर्ज वित्त लागत चुकाएँ'],repayment,-repayment,0);repayment=Math.min(m.cash,m.loan);m.cash-=repayment;m.loan-=repayment;if(repayment)row(['Repay loan principal, not an expense','ऋण मूलधन लौटाएँ, खर्च नहीं'],repayment,-repayment,0);if(m.partner&&profit()>0){const share=Math.floor(profit()/4);if(m.cash>=share){m.cash-=share;m.drawings+=share;row(['Distribute investor profit share, not an expense','निवेशक लाभ हिस्सा बाँटें, खर्च नहीं'],share,-share,0);}}}
   m.trust=Math.max(0,Math.min(100,m.trust));m.morale=Math.max(0,Math.min(100,m.morale));m.day=day;
   m.history.push({stage:'day',day,openingCash,openingUnits,purchase,unitCost,effectivePrice,willing,sold,soldCost,revenue,missed:Math.max(0,willing-sold),capacity,endingUnits:units(),endingCash:m.cash,refund,damaged,profit:profit(),ledger,eventChoice:a.eventChoice,supplier:a.supplier,staff:a.staff});
  }}catch(_){return {error:'invalid'};}
  m.inventory=inventory();m.units=units();m.inTransit=m.deliveries.reduce((s,l)=>s+l.units*l.cost,0);m.payables=m.bills.reduce((s,b)=>s+b.amount,0);m.debt=m.payables+m.loan+m.interest;m.profit=profit();m.assets=m.cash+m.inventory+m.inTransit+m.equipment;m.netWorth=m.assets-m.debt;m.complete=actions.length===10;m.ownerShare=m.partner?75:100;
  if(m.netWorth!==m.capital+m.profit-m.drawings||m.cash<0||m.units<0)return {error:'accounting'};
  return m;
 }
 let state={version:1,actions:[],reviews:[]},saving=true;
 function valid(s){return s&&s.version===1&&Array.isArray(s.reviews)&&new Set(s.reviews).size===s.reviews.length&&s.reviews.every(i=>Number.isInteger(i)&&i>=0&&i<D.reviews.length)&&!project(s.actions).error&&(!s.reviews.length||project(s.actions).complete);}
 try{const raw=localStorage.getItem(key);if(raw){const s=JSON.parse(raw);if(valid(s))state=s;}}catch(_){saving=false;}
 function save(){try{localStorage.setItem(key,JSON.stringify(state));saving=true;}catch(_){saving=false;}}
 function apply(action){if(state.actions.length>=10)return {error:'complete'};const next=project([...state.actions,action]);if(next.error)return next;state.actions.push(JSON.parse(JSON.stringify(action)));save();return next;}
 window.BusinessJourney={get state(){return state;},get saving(){return saving;},get model(){return project(state.actions);},project,valid,apply,
  review(i,choice){if(!project(state.actions).complete||!D.reviews[i]||D.reviews[i].answer!==choice)return false;if(!state.reviews.includes(i))state.reviews.push(i);save();return true;},reset(){state={version:1,actions:[],reviews:[]};save();}};
})();
