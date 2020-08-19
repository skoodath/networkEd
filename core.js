
const hamburger = document.querySelector('.header__hamburger');
const myMenuClose = document.querySelector('.header__close');

const showmenu = () => {
    const myMenu = document.querySelector('.header__navbar');
    myMenu.classList.toggle('header__navbar_hide');
    myMenu.style.transitionDuration = "1s";
}

hamburger.addEventListener('click', showmenu);
myMenuClose.addEventListener('click', showmenu);

const scrollTodiv = (e) => {

    let datavalue = e.target.getAttribute("data-value");
    if(datavalue === "about"){
        let aboutDiv = document.querySelector('.about');
        aboutDiv.scrollIntoView({ block: "start" });
        showmenu()
    } else if (datavalue === "approach") {
        let apprDiv = document.querySelector('.approach');
        apprDiv.scrollIntoView({ block: "start" });
        showmenu();
    } else if (datavalue === "netscience") {
        let netDiv = document.querySelector('.netscience');
        netDiv.scrollIntoView({ block: "start" });
        showmenu();
    } else if (datavalue === "blog") {
        location.href = 'http://blog.networked.in/';
        showmenu();
    }
}

const menuItems = document.querySelectorAll('.header__menuitem');

for (let item of menuItems){
    item.addEventListener('click', scrollTodiv);
}