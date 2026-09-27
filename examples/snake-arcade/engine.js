/* The game rules are separate from drawing and buttons, so they can be tested. */
(function(root){
  'use strict';
  const directions={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};
  function placeFood(game,random=Math.random){
    const empty=[];
    for(let y=0;y<game.size;y++)for(let x=0;x<game.size;x++)if(!game.snake.some(p=>p.x===x&&p.y===y))empty.push({x,y});
    return empty.length?empty[Math.floor(random()*empty.length)]:null;
  }
  function create(size=20,random=Math.random){
    const mid=Math.floor(size/2);
    const game={size,snake:[{x:mid,y:mid},{x:mid-1,y:mid},{x:mid-2,y:mid}],direction:'right',queued:null,score:0,over:false,won:false,food:null};
    game.food=placeFood(game,random);return game;
  }
  function turn(game,name){
    if(game.over||game.queued||!directions[name])return false;
    const current=directions[game.direction],next=directions[name];
    if(current.x+next.x===0&&current.y+next.y===0)return false;
    game.queued=name;return true;
  }
  function step(game,random=Math.random){
    if(game.over)return;
    if(game.queued){game.direction=game.queued;game.queued=null;}
    const d=directions[game.direction],head={x:game.snake[0].x+d.x,y:game.snake[0].y+d.y};
    const eating=game.food&&head.x===game.food.x&&head.y===game.food.y;
    // The old tail moves away on a normal step, so that square is allowed.
    const body=eating?game.snake:game.snake.slice(0,-1);
    if(head.x<0||head.y<0||head.x>=game.size||head.y>=game.size||body.some(p=>p.x===head.x&&p.y===head.y)){game.over=true;return;}
    game.snake.unshift(head);
    if(eating){game.score+=10;game.food=placeFood(game,random);if(!game.food){game.over=true;game.won=true;}}
    else game.snake.pop();
  }
  const api={create,turn,step,placeFood};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.SnakeEngine=api;
})(typeof window!=='undefined'?window:globalThis);
