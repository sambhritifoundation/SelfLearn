'use strict';
const board=document.getElementById('board'),ctx=board.getContext('2d');
const ui=id=>document.getElementById(id);
let game=SnakeEngine.create(),running=false,timer=null,best=0;
try{best=Math.max(0,Number(localStorage.getItem('selflearn_snake_best'))||0);}catch(_){}
ui('best').textContent=best;
function draw(){
  const cell=board.width/game.size;
  ctx.fillStyle='#0b1622';ctx.fillRect(0,0,board.width,board.height);
  ctx.strokeStyle='#192938';ctx.lineWidth=1;
  for(let i=0;i<=game.size;i++){ctx.beginPath();ctx.moveTo(i*cell,0);ctx.lineTo(i*cell,board.height);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*cell);ctx.lineTo(board.width,i*cell);ctx.stroke();}
  if(game.food){ctx.fillStyle='#ff8c78';ctx.fillRect(game.food.x*cell+4,game.food.y*cell+4,cell-8,cell-8);}
  game.snake.forEach((p,i)=>{ctx.fillStyle=i===0?'#e2ffc2':'#bcf476';ctx.fillRect(p.x*cell+2,p.y*cell+2,cell-4,cell-4);});
  const head=game.snake[0];ctx.fillStyle='#17372b';ctx.fillRect(head.x*cell+7,head.y*cell+6,3,3);
  ui('score').textContent=game.score;
}
function stopClock(){clearInterval(timer);timer=null;}
function clock(){stopClock();timer=setInterval(tick,Number(ui('speed').value));}
function setStatus(message,label){ui('status').textContent=message;ui('stateLabel').textContent=label;}
function tick(){
  SnakeEngine.step(game);draw();
  if(game.score>best){best=game.score;ui('best').textContent=best;try{localStorage.setItem('selflearn_snake_best',String(best));}catch(_){}}
  if(game.over){running=false;stopClock();ui('pause').disabled=true;ui('start').disabled=false;ui('start').textContent='Play again';setStatus((game.won?'You filled the board!':'Game over — wall or tail collision.')+' Score: '+game.score+'. Press Restart to try again.',game.won?'YOU WIN':'GAME OVER');}
}
function start(){game=SnakeEngine.create();running=true;ui('start').disabled=true;ui('pause').disabled=false;ui('pause').textContent='Pause';setStatus('Go! Collect coral food. Avoid the walls and your tail.','PLAYING');draw();clock();board.focus({preventScroll:true});}
function pause(){
  if(game.over||ui('pause').disabled)return;
  running=!running;ui('pause').textContent=running?'Pause':'Resume';
  if(running){clock();setStatus('Go! Collect coral food. Avoid the walls and your tail.','PLAYING');}else{stopClock();setStatus('Paused. Press Resume or Space when ready.','PAUSED');}
}
function steer(name){if(running)SnakeEngine.turn(game,name);}
ui('start').addEventListener('click',start);ui('restart').addEventListener('click',start);ui('pause').addEventListener('click',pause);
ui('speed').addEventListener('change',()=>{if(running)clock();});
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>steer(button.dataset.direction)));
document.addEventListener('keydown',event=>{
  if(event.target.matches('input,select,textarea'))return;
  const key=event.key.toLowerCase(),map={arrowup:'up',w:'up',arrowdown:'down',s:'down',arrowleft:'left',a:'left',arrowright:'right',d:'right'};
  if(map[key]&&running){event.preventDefault();steer(map[key]);}
  if(key===' '&&event.target===board){event.preventDefault();pause();}
  if(key==='r'&&event.target===board){event.preventDefault();start();}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&running)pause();});
draw();
