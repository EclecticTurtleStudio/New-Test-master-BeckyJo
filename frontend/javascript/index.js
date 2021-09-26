var serverAuth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QudXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzMjY2NTkwOSwiZXhwIjoxNjMyNjY5NTA5LCJzdWIiOiIxIn0.-EXFrWXdTGQnknRZoaech3gARz2QOv-_4Si6Yq_jgeo"

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

