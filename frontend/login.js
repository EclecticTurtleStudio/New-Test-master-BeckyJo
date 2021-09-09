

function submitLogIn(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8000/login";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("it worked");
        } else {
            console.log("you suck");
        }
    };
//    var data = JSON.stringify({"email": email, "password": password});
//    xhr.send(data);

};

