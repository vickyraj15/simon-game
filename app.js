let gameSeq=[];
let userSeq=[];

let btns=["yellow", "purple", "red", "green"];

let started=false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game started")
    started=true;
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}


function levelUp(){
    level++;
    h2.innertext=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor)
   console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(){
    //console.log("curr level :",level);
    let idx=level-1;

    if(userSeq[idx]==gameSeq[idx]){
        console.log ("same value");
} else{
    h2.innerText='Game over! Press any key to start';
}
}
function  btnPress(){
    let btn=this;
    console.log(this);
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

