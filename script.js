let btn=document.querySelectorAll('.btn');
let reset=document.querySelector('.reset')
let mssg=document.querySelector('#mssg');
let newGame=document.getElementById('new-game');
let hide=document.getElementsByClassName('hide')[0];
let scoreX=document.getElementById('scoreX');
let scoreO=document.getElementById('scoreO');

let x=true;
btn.forEach((buttons)=>{
   buttons.addEventListener('click',()=>{
     if(x){
        buttons.innerHTML="X";
        x=false;
     }else{
        buttons.innerHTML="O";
        x=true;
     }
     buttons.disabled=true;
     checkwinner();
   });
});

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [2,5,8],
    [1,4,7],
];


const showWinner=(winner)=>{

   alert(`Winner is ${winner}`);
   window.location.href="meme.html";
   hide.classList.remove("msg-container");


   btn.forEach((buttons)=>{
    buttons.disabled=true;
   })
}

const checkwinner=()=>{
    for(let pattern of winPatterns){
       let pos1=btn[pattern[0]].innerText;
       let pos2=btn[pattern[1]].innerText;
       let pos3=btn[pattern[2]].innerText;

       if(pos1!="" && pos1===pos2 && pos2===pos3){
          console.log("Winner",pos1);
          showWinner(pos1);
          updateScore(pos1);
       }
    }
}
function enable(buttons){
     btn.forEach((buttons)=>{
    buttons.disabled=false;
    buttons.innerText="";
   });
}

const resetGame=()=>{
   x=true;
   enable();
   hide.classList.add('msg-container');
}

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);

const updateScore=(score)=>{
   if(score==='X'){
      scoreX.innerText=parseInt(scoreX.innerText, 10) + 1;
   }else{
      scoreO.innerText=parseInt(scoreO.innerText,10)+1;
   }
};