document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('header .menu');
    const navbar = document.getElementById('navbar');
    const closeBtn = document.querySelector('header .left-head nav .close');

    menu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        navbar.classList.remove('active');
    });
});



