// This function will eventually send the form to /login and return the accessToken!


function submitLogIn(){

    var user = document.querySelector("input[name=email]").value;
    var pswd = document.querySelector("input[name=password]").value;

    console.log("The email entered is " + user + ", and their password is " + pswd + ".")
    //email and password are being obtained from HTML form!! WAHOO!!

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var loginFormInputs = JSON.stringify({
      "email": user,
      "password": pswd
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: loginFormInputs,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    showMovieDatabase();

};





