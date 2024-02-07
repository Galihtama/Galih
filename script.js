const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector ('.slide');
// cont menu = document.querySelector ('.menu-toggle')


menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
});


    

// klik diluar hamburger menu 



// document.addEventListener('click', function (e) {
//     if ( !menuToggle.contains(e.target) && !nav.contains(e.target)) {
//         nav.classList.remove('active');
//     }
// });
