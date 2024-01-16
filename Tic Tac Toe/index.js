let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newContainer = document.querySelector(".sms");
let msg = document.querySelector("#won");
let turnofO = true;
let boxTexts=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnofO){
            box.innerHTML="o";
            box.classList.add("clicked");
            turnofO=false;
        }else{
            box.innerHTML="x";
            box.classList.add("clicked");
            turnofO=true;
        }
        box.disabled=true;
        checkwin();
    });
})

const checkwin = ()=> {
    for (let win of boxTexts) {
        
        let position1 = boxes[win[0]].innerText;
        let position2 = boxes[win[1]].innerText;
        let position3 = boxes[win[2]].innerText;
         
        if(position1 !=="" && position2 !=="" && position3 !==""){
            if(position1===position2 && position2===position3){
                showWinner(`Consgratulations,Player ${position1} Won!`);
                disabledBoxes();
                resetBtn.classList.add("hide");
               
            }
        }
       
    }
}


 const showWinner=(e)=>{
        msg.innerText=e;
        newContainer.classList.remove("hide");
    }
    

  const disabledBoxes =()=>{
     for(let box of boxes){
        box.disabled= true;
     }
  }
 const resetGame =() =>{
    turnofO=true;
    enabledBoxes();
    newContainer.classList.add("hide");
    resetBtn.classList.remove("hide");

 }


const enabledBoxes =()=>{
     for(let box of boxes){
        box.disabled= false;
        box.innerText="";
        box.classList.remove("clicked");
 
     }
  }
   newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);