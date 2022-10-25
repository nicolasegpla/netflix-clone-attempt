const search = document.getElementById('search');
const logoHome = document.getElementById('logo-netflix');
const postHome = document.querySelector('.container-post-home');

search.addEventListener('click', () => {
    location.hash = '#trends';
})
logoHome.addEventListener('click', () => {
    location.hash = '#home';
})

