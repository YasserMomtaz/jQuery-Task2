// apiKey = 9813ce01a72ca1bd2ae25f091898b1c7
// url = https://api.themoviedb.org/3
// path = /discover/movie?sort_by=popularity.desc

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7
//https://image.tmdb.org/t/p/w500/

import { apiUrl, imgPath } from "./Vars.js";
getMovies(apiUrl);
function getMovies(url) {
 
      $.get(url).done((data)=>{
      showMovie(data.results);
    });
}

function showMovie(data) {
  // main.innerHTML = "";
  data.forEach((movie) => {
   
    let movieElement =$("<div></div");
    movieElement.addClass("movie");
    movieElement.html(`
    <a href="./DetailsPage.html?id=${movie.id}">
    <img src="${imgPath + movie.poster_path}" alt="Move" />
        <h4 id="moveName">${movie.title}</h4>
    </a>
    
    `);

    main.append(movieElement[0]);
  });
}
