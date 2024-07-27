const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formStatus = document.getElementById("formStatus");

function validateEmail(){
    const emailValue = emailInput.value;
    if(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")){
        emailError.textContent = "";
        return true;
    }else{
        emailError.textContent = "Invalid email address";
        return false;
    }
}

function validatePassword(){
    const passwordValue = passwordInput.value;
    if(passwordValue.length > 8){
        passwordError.textContent = "";
        return true;
    }else{
        passwordError.textContent = "Password must be more than 8 characters";
        return false;
    }
}

emailInput.addEventListener("input", () => {
    if(validateEmail() && validatePassword()){
        formStatus.textContent = "All good to go!";
        formStatus.className = "success";
    }else{
        formStatus.textContent = "";
    }
});

passwordInput.addEventListener("input", () => {
    if(validateEmail() && validatePassword()){
        formStatus.textContent = "All good to go!";
        formStatus.className = "success";
    }else{
        formStatus.textContent = "";
    }
});

function submitForm(){
    if(validateEmail() && validatePassword()){
        if(confirm("Do you want to submit thr form?")){
            alert("Successful signup!");
            emailInput.value = "";
            passwordInput.value = "";
        }else{
            location.reload;
        }
    }
}

