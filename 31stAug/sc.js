//error handling


// maching password 
//if the any of the input is empty , then show message
//email handling


// confirm password 

const checkPassword = (e)=>{
    e.preventDefault();
    const target = document.getElementById("password");
    const target1 = document.getElementById("cnfPassword");
    const msgP = document.getElementById("cnfMessage");
    if(target1.value === target.value){
      return true;
    }
    else{
       msgP.innerText = "passwords are not same";
       return false;
    }
}