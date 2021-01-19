// Selecting DOM elements

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav= document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

// Set initial state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.toggle('close');
        menu.classList.toggle('show');
        menuBranding.classList.toggle('show');
        menuNav.classList.toggle('show');
        navItem.forEach(item => item.classList.toggle('show'));

    }
}