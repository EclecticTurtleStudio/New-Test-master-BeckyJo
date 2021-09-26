


// This function will eventually send the form to /login and return the accessToken!


function submitLogIn(){

    var user = document.querySelector("input[name=email]").value;
    var pswd = document.querySelector("input[name=password]").value;

    //email and password are being obtained from HTML form!! WAHOO!!

    var data = JSON.stringify({
      "email": user,
      "password": pswd
    });

    var url = "http://localhost:8000/login";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(url.readyState === 4) {
        console.log(responseText);
      }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    console.log(response.json);

};





