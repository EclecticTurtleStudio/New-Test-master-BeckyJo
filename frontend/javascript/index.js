var serverAuth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QudXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzMjU3NzU1OCwiZXhwIjoxNjMyNTgxMTU4LCJzdWIiOiIxIn0.cJrfJd2RNhfQR3wDCPw-YvbrAWBVVvaBIB3oE1KfrYo"

function showMovieDatabase(){

//This is supposed to take the JWT and send it to the server to allow authorization to see the database list.

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:8000/movies");
    xhr.setRequestHeader("Authorization", "Bearer " + serverAuth);

    xhr.send();

}

