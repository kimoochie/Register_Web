let txtUsename = document.querySelector("#txtUsername");
            let btnRegister = document.querySelector("#btnRegister");
        
            btnRegister.onclick = function () {
                register(txtUsename.value)
            }
            //variables

            function register (username) {
                console.log(username)
            }
