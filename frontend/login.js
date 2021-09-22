
function submitLogIn(){

// This function will eventually send the form to /login and return the accessToken!

    var loginForm = document.getElementById('loginForm');
    var formData = new FormData(loginForm);

    console.log(formData);

    var user = formData.get(email);
    var pswd = formData.get(password);

    console.log(user + " & " + pswd);

    var data = JSON.stringify({"email": user.value, "password": pswd.value});

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8000/login";

    xhr.addEventListener("readystatechange", function() {
        if(url.readyState === 4) {
            console.log(url.response);
        }
    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    var serverAuth = JSON.accessToken;

    console.log(serverAuth);

    return serverAuth;

};





