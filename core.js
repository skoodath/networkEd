const hamburger = document.querySelector('.header__hamburger');
const myMenuClose = document.querySelector('.header__close');

const showmenu = () => {
    const myMenu = document.querySelector('.header__navbar');
    myMenu.classList.toggle('header__navbar_hide');
}

hamburger.addEventListener('click', showmenu);
myMenuClose.addEventListener('click', showmenu);