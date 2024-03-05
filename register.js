let txtUsername = document.querySelector("#txtUsername");
let txPassword = document.querySelector("#TxtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let btnRegister = document.querySelector("#btnRegister");
        
btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}
//variables

function register (username, password, confirmPassword) {
    // if..else If..else
    // Conditional Operators (Greater Than >, Less Than <, Equal ==, Not !, 
    // Greater Than or Equal >=, Less Than or Equal <=
    // Not Equal !=

    console.log(username, password, confirmPassword)

    if(password == confirmPassword && password != "" && confirmPassword != ""){
        return console.log("Password match!")
    } else if (password == "" || confirmPassword == ""){
         return console.log("Password must not be empty.")
    } else {
        return console.log("Password does not match.")
    }
}