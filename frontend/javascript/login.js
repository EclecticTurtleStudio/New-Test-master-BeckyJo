


// This function will eventually send the form to /login and return the accessToken!


function submitLogIn(){

    var user = document.getElementById("email").value;
    var pswd = document.getElementById("password").value;

    var data = JSON.stringify({
      "email": user,
      "password": pswd
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:8000/login");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);



};





