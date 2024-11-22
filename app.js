let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGmaeBtn=document.querySelector("#new-btn");
let msgContaniner=document.querySelector(".msg-container");
//let msg=document.querySelector("msg");
let turn0=true;
const winPatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
      box.innerText="0";
      turn0=false;    
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
    });
});
let msg = document.getElementById("message-container"); // Make sure to select the element

const showWinner=(winner)=>{
  if (msg) { // Check if msg is not null
    msg.innerText = 'Congratulations, Winner is ${winner}';
    msg.classList.remove("hide"); // Assuming you want to remove the "hide" class from msg itself
  }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
      
      if(pos1Val !=""&& pos2Val!="" && pos3Val!=""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
      }
    }
};

