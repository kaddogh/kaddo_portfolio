//Select DOM Objects
const MenuBtn = document.querySelector('.menu-btn');
const Menu = document.querySelector('.menu');
const MenuNav = document.querySelector('.menu-nav');
const MenuBranding = document.querySelector('.menu-branding');
const NavItems = document.querySelectorAll('.nav-item');

//Set Initial State

let showMenu = false;

MenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        MenuBtn.classList.add('close');
        Menu.classList.add('show');
        MenuNav.classList.add('show');
        MenuBranding.classList.add('show');
        NavItems.forEach(item => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
    } else {
        MenuBtn.classList.remove('close');
        Menu.classList.remove('show');
        MenuNav.classList.remove('show');
        MenuBranding.classList.remove('show');
        NavItems.forEach(item => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;

    }
}