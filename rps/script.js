let choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userscore=0;
let compscore=0;

const userScorefinal = document.querySelector("#user-score");
const compScorefinal = document.querySelector("#comp-score");

const com=()=>{
const opt=["rock","paper","scissors"];
const randomIndex=Math.floor(Math.random()*3);
return opt[randomIndex];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
console.log("choice was clicked");
const userchoice=choice.getAttribute("id");
game(userchoice);
    })
})

const drawGame=()=>{
    /* Setting the inner text of the `msg` element to "Game is Draw. Play again". This message is
    displayed when the game ends in a draw, prompting the players to play again. */
    msg.innerText="Game is Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userwin,comp,userchoice)=>{
if(userwin){
    userscore++;
    userScorefinal.innerText=userscore;
    msg.style.backgroundColor="green";
    msg.innerText=`Your choice is ${userchoice} and computer choice is ${comp}`;
}
else{
    compscore++;
    compScorefinal.innerText=compscore;
    msg.style.backgroundColor="red";
    msg.innerText=`Your choice is ${userchoice} and computer choice is ${comp}`;
}
}

const game=(userchoice)=>{
const comp=com();

if(comp===userchoice){
    drawGame();
}
else{
let userwin=true;
if(userchoice==="rock"){
    userwin= comp==="paper"?true:false;
}
else if(userchoice==="paper"){
    userwin=comp==="scissors"?false:true;
}
else if(userchoice==="scissors"){
    userwin=comp==="rock"?false:true;
}
showWinner(userwin,comp,userchoice);
}
}