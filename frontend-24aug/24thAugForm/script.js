var form = document.getElementById("formId");


const buttonTarget = document.querySelector("button");
//for name validation
const nameError = () => {
    const targetInput = document.getElementById("name");
    const target = document.getElementById("name_err");
    if (targetInput.value.length < 2) {
        target.innerText = "name should contain at least 2 characters"
        console.log("name should contain at least 2 characters");
    }
}
// for mobile number validation
const mobileError = () => {
const targetInput = document.getElementById("mobile").value;
const target = document.getElementById("phone_err");
const finalValue =targetInput.trim();
console.log(finalValue);
if(finalValue.length < 10 || finalValue.length > 10 ){
    target.innerText = "phone number contains 10 digit";
    console.log("phone number contains 10 digit");
}
}


// for email validation

const email_error = () => {
    const email = document.getElementById("email").value;
    const target = document.getElementById("email_err");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex) == false) {
        target.innerText("email is invalid");
    }
}

//for password_validation 

const passCheck = () => {
const target1 = document.getElementById("password").value;
let target2 = document.getElementById("cnf")
console.log(target1);
console.log(target2);
if(target1 != target2.value){
    target2.value = "";
    alert("confirm password again");
    console.log(target2);
}

}


// for not letting the form to refresh the page on submission
function prevent(e) {
    e.preventDefault();
}
buttonTarget.addEventListener("click", prevent);
buttonTarget.addEventListener("click", email_error);
buttonTarget.addEventListener("click",mobileError);
buttonTarget.addEventListener("click",passCheck);



