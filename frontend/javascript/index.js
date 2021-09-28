
//I am struggling to figure out how to optain this dynamically. I am sure it is something simple, but I am not finding it.


const serverAuth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QudXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzMjg1MjUwMSwiZXhwIjoxNjMyODU2MTAxLCJzdWIiOiIxIn0.ASCqx1Q2Fc9iagd3XV0SLhme-uDn9Y13iBv0z1QXyeQ"


function showMovieDatabase(){


//This is supposed to take the JWT and send it to the server to allow authorization to see the database list.

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

//    xhr.addEventListener("readystatechange", function() {
//      if(this.readyState === 4) {
//        console.log(this.responseText);
//      }
//    });

    xhr.open("GET", "http://localhost:8000/movies");
    xhr.setRequestHeader("Authorization", "Bearer " + serverAuth);

    xhr.responseType = 'json';
    xhr.send();


    xhr.onload = function() {
      const movieData = xhr.response;
      fillDatabasePage(movieData);
    }

    console.log("showMovieDatabase is running!")

    const destination = document.getElementById("destination");

    function fillDatabasePage(obj) {

        for (let i = 0; i < obj.length; i++){

            const myArticle = document.createElement('article');
            const movieTitle = document.createElement('h2');
            const releaseDate = document.createElement('p');
            const movieDescription = document.createElement('p');

            movieTitle.className += "movieTitle";
            releaseDate.className += "movieDetails";
            movieDescription.className += "movieDetails";

            movieTitle.textContent = obj[i].name;
            releaseDate.textContent = 'Released : ' + obj[i].date;
            movieDescription.textContent = obj[i].description;

            myArticle.appendChild(movieTitle);
            myArticle.appendChild(releaseDate);
            myArticle.appendChild(movieDescription);

            destination.appendChild(myArticle);

//            destination.innerHTML = `
//                    <div class="movieInfo">
//                       <h3>Movie ${obj[i].name}</h3>
//                        <p>Release date: ${obj[i].date}</p>
//                        <p>${obj[i].description}</p>
//                    </div>
//                    `;

        }


    }


}

