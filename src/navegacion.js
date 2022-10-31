window.addEventListener('DOMContentLoaded', navegacion, false);
window.addEventListener('hashchange', navegacion, false);


function navegacion() {
    if(location.hash.startsWith('#trends')){
        console.log('estamos en trends');
        pagetrends();
        postHome.classList.add('inactive');
    }else if(location.hash.startsWith('#search=')){
        console.log('estamos en search');
    }else if(location.hash.startsWith('#movie=')){
        moviesPage();
    }else if(location.hash.startsWith('#tv')){
        tvPage();
    }else if(location.hash.startsWith('#categories=')){
        categories();
    }else {
        console.log('estamos en home');
        pageHome();
        postHome.classList.remove('inactive');
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function pageHome() {
    getDataHomeTopMovies();
    getDataHomeMovies();
    getDataHomeTrendsMovies();
    getDataHomeTrendsTv();
    getCategories();
}
function pagetrends() {
    getDataHomeTrendsMovies();  
}
function categories() {
    console.log('estamos en categories perrones');
    categorias.classList.add('inactive');
    containerHome.classList.add('inactive');
    containerPrincipalCategorias.classList.remove('inactive');
    console.log('prueba 2');

    const [_, categoryInfo] = location.hash.split('=');
    const [categoryId, categoryNmae] = categoryInfo.split('-');

    titleCategory.innerHTML = categoryNmae;
    getGeners(categoryId);
    
}
function moviesPage(){
    categorias.classList.add('inactive');
    containerHome.classList.add('inactive');
    menuMOvies.classList.remove('inactive');
    getMoviePage();
    
}
function tvPage(){
    categorias.classList.add('inactive');
    containerHome.classList.add('inactive');
    tvMenuPage.classList.remove('inactive');
    getTvPage();
    
}