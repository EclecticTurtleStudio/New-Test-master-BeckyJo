
//I am struggling to figure out how to optain this dynamically. I am sure it is something simple, but I am not finding it.

var serverAuth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QudXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzMjcwNTYwMiwiZXhwIjoxNjMyNzA5MjAyLCJzdWIiOiIxIn0.WtH0AX-cBrRocCBEVGJp1LPAVNos_nzcqWj7DIAvtdA"

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

    console.log("showMovieDatabase is running!")

    fetch("http://locahost:8000/movies").then(function(response){
       response.json().then(function(json) {
          const destination = document.getElementById("destination");
          destination.addEventListener("load", function(){
             destination.innerHTML = `
                <div>
                   <h3>Movie ${json[0].name}</h3>
                   <ul>
                        <li>Release date: ${json[0].date}</li>
                        <li>${json[0].description}</li>
                   </ul>
                </div>
             `;
          });
       });
    });

}

