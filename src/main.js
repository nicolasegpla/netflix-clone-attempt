const API = 'https://api.themoviedb.org/3/';

window.addEventListener('DOMContentLoaded', getDataTredingHome)

async function getDataTredingHome() {
    const res = await fetch(`${API}trending/movie/day?api_key=be8e6e0501ed517b30e1e8d4d4e701d9`);
    const data = await res.json();

    const arrayData = data.results;
    const randomMovie = Math.floor(Math.random(arrayData) * 20);
    const randomPostHome = arrayData[randomMovie];
    
    function createElementHome() {
        const homeContainer = document.getElementById('container-home');
        const imgHome = document.createElement('img');
        imgHome.classList.add('imgHome');
        imgHome.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + randomPostHome.poster_path);
        imgHome.setAttribute('alt', randomPostHome.title)
        homeContainer.appendChild(imgHome);
        
    }
    createElementHome();
    
}
