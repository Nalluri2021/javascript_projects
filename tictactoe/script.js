let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new_btn");
let msgcontainer=document.querySelector(".message_container")
let msg=document.querySelector(".winnermessage");

let playerO=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let count=0;

const resetGame=()=>{
playerO=true;
enableBoxes();
msgcontainer.classList.add("hide");
count=0;
}

const diableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diableBoxes();
}

const gameDraw=()=>{
msg.innerText="Draw";
msgcontainer.classList.remove("hide");
diableBoxes();
}


const checkwinner=()=>{
for(pattern of win){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("Winner",pos1);
            showWinner(pos1);
        }
    }
}
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(playerO){
        box.innerText="O";
        playerO=false;
        }else{
box.innerText="X";
playerO=true;
        }
        box.disabled=true;
        count++;
        checkwinner();
        if(count==9 && !checkwinner()){
            gameDraw();
        }
    })
})

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

