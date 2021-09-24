
function submitLogIn(){

// This function will eventually send the form to /login and return the accessToken!

        var user = document.getElementById("email");
        var pswd = document.getElementById("password");

        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8000/login";

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(json.email + ", " + json.password);
            }
        }
    };
    var data = JSON.stringify({"email": user, "password": pswd});
    xhr.send(data);


};





