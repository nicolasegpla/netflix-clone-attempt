const search = document.getElementById('search');
const logoHome = document.getElementById('logo-netflix');
const postHome = document.querySelector('.container-post-home');
const menuCategoria = document.querySelector('.container-menu__categorias');
const categorias = document.querySelector('.categorias');
const navHome = document.querySelector('.nav-home');
const containerHome = document.querySelector('.container');
const containerPrincipalCategorias = document.querySelector('.container-pri-categorias');
const arrowCategory = document.querySelector('.arrow-category');
const categoryInfo = document.querySelector('.categoryInfo');
const titleCategory = document.querySelector('.container-pri-categorias__title');
const menuMovie = document.querySelector('.container-menu__peliculas');
const menuTv = document.querySelector('.container-menu__tv');
const moviePage = document.querySelector('.movie-page');
const menuMOvies = document.querySelector('.movie-menu');
const arrowMOvie = document.querySelector('.arrow-movie');
const arrowTv = document.querySelector('.arrow-tv');
const tvContainer = document.querySelector('.tv-page');
const tvMenuPage = document.querySelector('.tv-menu');
const containerSearch = document.querySelector('.container-search');
const searchRoot = document.querySelector('.container-search__root');
const inputSearch = document.querySelector('.container-search__input');
const arrowSearch = document.querySelector('.conatiner-search__arrow');


menuCategoria.addEventListener('click', mostrarCategorias);
arrowCategory.addEventListener('click', volverAlHome);
arrowMOvie.addEventListener('click', volverAlHome);
arrowTv.addEventListener('click', volverAlHome);
arrowSearch.addEventListener('click', volverAlHome);
inputSearch.addEventListener('keyup', ()=>{
    console.log('pollito baquero');
    location.hash = '#search=' + inputSearch.value;
    getSearchMovie;
})

menuMovie.addEventListener('click', ()=> {
    location.hash = '#movie=';
});
menuTv.addEventListener('click', () => {
    location.hash = '#tv';
})


search.addEventListener('click', () => {
    location.hash = '#search=';
})
logoHome.addEventListener('click', () => {
    location.hash = '#home';
})

function mostrarCategorias(){
    categorias.classList.remove('inactive');
    navHome.classList.add('inactive'); 
}
function volverAlHome() {
    containerHome.classList.remove('inactive');
    containerPrincipalCategorias.classList.add('inactive');
    navHome.classList.remove('inactive');
    location.hash = '#home';
    menuMOvies.classList.add('inactive');
    tvMenuPage.classList.add('inactive');
    containerSearch.classList.add('inactive');
}






