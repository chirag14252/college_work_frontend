 
let target = document.getElementById("number").value;
const buttonVAL= document.querySelectorAll("button")[0];
const buttonVAL1= document.querySelectorAll("button")[1];
const tagetP = document.getElementById("timer");
const tagetF = document.getElementById("finalVal");
const initialVal = target;
function increment(){
   myid =setInterval(()=>{
     target++;
    tagetP.innerText = target;
     },1000);
}
function stop(){
   clearInterval(myid);
}


buttonVAL1.addEventListener("click",stop);