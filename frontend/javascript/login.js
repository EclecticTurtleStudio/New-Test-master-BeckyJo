// This function will eventually send the form to /login and return the accessToken!


function submitLogIn(){

    var accessKey;

    var user = document.querySelector("input[name=email]").value;
    var pswd = document.querySelector("input[name=password]").value;

    console.log("The email entered is " + user + ", and their password is " + pswd + ".")
    //email and password are being obtained from HTML form!! WAHOO!!

    var data = JSON.stringify({
      "email": user,
      "password": pswd
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

//    xhr.addEventListener("readystatechange", function() {
//      if(this.readyState === 4) {
//        console.log(this.responseText);
//      }
//    });

    xhr.open("POST", "http://localhost:8000/login");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.responseType = 'json';
    xhr.send(data);

    xhr.onload = function() {
          const loginResponse = xhr.response;
          console.log(loginResponse);
    }



};





