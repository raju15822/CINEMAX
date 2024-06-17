
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);
   
function getMovies(url)
{
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results)
   showMovies(data.results);
  })
}

function showMovies(data) {
main.innerHTML='';

data.forEach(movie => {
    const{title,poster_path,vote_average,overview}= movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
main.appendChild(movieEl);    
});
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})


    


