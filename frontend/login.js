
function submitLogIn(){

    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8000/login';
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        } else {
            console.log("not working");
        }
    };
    var userInfo = JSON.stringify({"email": email, "password": password});
    xhr.send(userInfo);

};

