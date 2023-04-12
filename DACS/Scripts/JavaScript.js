//// get the hamburger menu element and the slide menu element by ID
//const hamburger = document.querySelector('#mogi-slide-menu .navbar-hamburger');
//const slideMenu = document.querySelector('#mogi-slide-menu .hamburger-menu');

//// add a click event listener to the hamburger menu icon
//hamburger.addEventListener('click', () => {
//    // toggle the 'active' class to show/hide the slide menu
//    slideMenu.classList.toggle('active');
//});

//// get the close icon element by class name
//const closeIcon = slideMenu.querySelector('.close-icon');

//// add a click event listener to the close icon
//closeIcon.addEventListener('click', () => {
//    // remove the 'active' class to hide the slide menu
//    slideMenu.classList.remove('active');
//});
const hamburgerBtn = document.querySelector('.navbar-hamburger i');
const slideMenu = document.querySelector('.hamburger-menu');
const slideOverlay = document.querySelector('#mogi-slide-overlay');

function openSlideMenu() {
    slideMenu.style.left = '0';
    slideOverlay.style.display = 'block';
}

function closeSlideMenu() {
    slideMenu.style.left = 'calc(-100vw - 100px)';
    slideOverlay.style.display = 'none';
}

hamburgerBtn.addEventListener('click', openSlideMenu);
slideOverlay.addEventListener('click', closeSlideMenu);






