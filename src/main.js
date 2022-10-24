const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': 'be8e6e0501ed517b30e1e8d4d4e701d9',
    }
  });

async function getDataHomeMovies() {
    const {data} = await api('trending/movie/day');
    const arrayData = data.results;

    const random = Math.floor(Math.random(arrayData) * 20);
    
    const containerImgPost = document.querySelector('.container-img-post');

    function createPostMovie() {
        const containerPostHomeImg = document.createElement('div');
        containerPostHomeImg.classList.add('container-img-post')
        const imgPostHome = document.createElement('img');
        imgPostHome.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + arrayData[random].poster_path);
        imgPostHome.setAttribute('alt', arrayData[random].title);
        imgPostHome.classList.add('img-post');
        containerPostHomeImg.appendChild(imgPostHome);
        containerImgPost.appendChild(containerPostHomeImg);
    }
    
    createPostMovie();
}

async function getDataHomeTopMovies() {
    const {data} = await api('movie/top_rated');
    const arrayData = data.results;
    

    const containerTop = document.querySelector('.container-top__movie');

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-top-movie__scroll')
            containerTopMovie.appendChild(imgTopMovie);
            containerTop.appendChild(containerTopMovie);

        });
    }
    createElement();
}
getDataHomeTopMovies();

getDataHomeMovies();