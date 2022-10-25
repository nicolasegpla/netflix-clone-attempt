//window.addEventListener('DOMContentLoaded', navegacion, false);
window.addEventListener('hashchange', navegacion, false);


function navegacion() {
    if(location.hash.startsWith('#trends')){
        console.log('estamos en trends');
        pagetrends();
        postHome.classList.add('inactive');
    }else if(location.hash.startsWith('#search=')){
        console.log('estamos en search');
    }else if(location.hash.startsWith('#movie=')){
        console.log('estamos en movie');
    }else {
        console.log('estamos en home');
        pageHome();
        postHome.classList.remove('inactive');
    }
}

navegacion();

function pageHome() {
    getDataHomeTopMovies();
    getDataHomeMovies();
    getDataHomeTrendsMovies();
    getDataHomeTrendsTv();
}

function pagetrends() {
    getDataHomeTrendsMovies();
    
}