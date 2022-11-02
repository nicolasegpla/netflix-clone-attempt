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
    containerImgPost.innerHTML = '';
    containerImgPost.addEventListener('click', () => {
        console.log('hola');
    })

    function createTaregetInfo() {
        const containerTarget = document.createElement('section');
    }
    

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
    containerTop.innerHTML = '';

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-top-movie__scroll');
            containerTopMovie.appendChild(imgTopMovie);
            containerTop.appendChild(containerTopMovie);

        });
    }
    createElement();
}

async function getDataHomeTrendsMovies() {
    const {data} = await api('trending/movie/week?page=1');
    const arrayData = data.results;
    

    const trendsContainerMovie = document.querySelector('.container-trending-movie__movie');
    trendsContainerMovie.innerHTML = '';

    function createElement() {
        arrayData.forEach(movie => {
            const containerTrendsMovie = document.createElement('div');
            containerTrendsMovie.classList.add('top-movie-container');
            const imgTrendsMovie = document.createElement('img');
            imgTrendsMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
            imgTrendsMovie.setAttribute('alt', movie.title);
            imgTrendsMovie.classList.add('img-top-movie__scroll');
            containerTrendsMovie.appendChild(imgTrendsMovie);
            trendsContainerMovie.appendChild(containerTrendsMovie);
        });
    }
    createElement();
}

async function getDataHomeTrendsTv() {
    const {data} = await api('trending/tv/week?page=1');
    const arrayData = data.results;
    

    const trendsContainerTv = document.querySelector('.container-trending-tv__tv');
    trendsContainerTv.innerHTML = '';
    function createElement() {
        arrayData.forEach(tv => {
            const containerTrendsTv = document.createElement('div');
            containerTrendsTv.classList.add('top-movie-container');
            const imgTrendsTv = document.createElement('img');
            imgTrendsTv.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + tv.poster_path);
            imgTrendsTv.setAttribute('alt', tv.title);
            imgTrendsTv.classList.add('img-top-movie__scroll');
            containerTrendsTv.appendChild(imgTrendsTv);
            trendsContainerTv.appendChild(containerTrendsTv);
        });
    }
    createElement();
}

async function getCategories() {
    const {data} = await api('genre/movie/list');
    const categories = data.genres;

    
    const categorias = document.querySelector('.categorias');
    categorias.innerHTML = '';

    function createElement() {

     categories.forEach(element => {
        const categoryP = document.createElement('p');
        categoryP.classList.add('categoriasP');
        categoryP.innerHTML = element.name;
        categoryP.addEventListener('click', () => {
            location.hash = ('#categories=' + element.id + '-' + element.name);
            console.log('pollito');
        });

        categorias.appendChild(categoryP);
        
        
     });

     const close = document.createElement('button');
     const closeImg = document.createElement('img');
     close.classList.add('button-Close');
     closeImg.setAttribute('src', 'assets/icons/close.svg');
     close.appendChild(closeImg);
     categorias.appendChild(close);

     close.addEventListener('click', cerrarCategorias);

     function cerrarCategorias(){
        navHome.classList.remove('inactive');
        categorias.classList.add('inactive'); 
    }


    }
    createElement();
}

async function getGeners(id) {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: id,
        },
        
    });
    const arrayData = data.results;
    categoryInfo.innerHTML = '';
    

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container-grid');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-category-grid');
            containerTopMovie.appendChild(imgTopMovie);
            categoryInfo.appendChild(containerTopMovie);

        });
    }
    createElement();
}

async function getMoviePage() {
    const {data} = await api('trending/movie/day', {
        params: {
            page: 1,
        },
    });
    const arrayData = data.results;
    moviePage.innerHTML ='';

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container-grid');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-category-grid');
            containerTopMovie.appendChild(imgTopMovie);
            moviePage.appendChild(containerTopMovie);

        });
    }
    createElement();

}

async function getTvPage() {
    const {data} = await api('trending/tv/day', {
        params: {
            page: 1,
        },
    });
    const arrayData = data.results;
    moviePage.innerHTML ='';

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container-grid');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-category-grid');
            containerTopMovie.appendChild(imgTopMovie);
            tvContainer.appendChild(containerTopMovie);

        });
    }
    createElement();

}

async function getDataHomeTopMoviesSearch() {
    const {data} = await api('movie/top_rated');
    const arrayData = data.results;
    

    
    searchRoot.innerHTML = '';

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container-grid');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-category-grid');
            containerTopMovie.appendChild(imgTopMovie);
            searchRoot.appendChild(containerTopMovie);

        });
    }
    createElement();
}

async function getSearchMovie(query) {
    const {data} = await api('search/movie', {
        params: {
            query,
        },
        
    });
    const arrayData = data.results;
    searchRoot.innerHTML = '';
    console.log(arrayData);
    

    function createElement(){
        arrayData.forEach(movie => {
            const containerTopMovie = document.createElement('div');
            containerTopMovie.classList.add('top-movie-container-grid');
            const imgTopMovie = document.createElement('img');
            imgTopMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            imgTopMovie.setAttribute('alt',  movie.title);
            imgTopMovie.classList.add('img-category-grid');
            containerTopMovie.appendChild(imgTopMovie);
            searchRoot.appendChild(containerTopMovie);

        });
    }
    createElement();
}