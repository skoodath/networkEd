
const loadActions = () => {
    let copy = document.querySelector('.footer__copy p span');
    const loadThis = () => {
        let currentYr = new Date();
        copy.innerHTML = new Date().getFullYear();
    }
    document.addEventListener('DOMContentLoaded', loadThis);
}

const hamburger = document.querySelector('.header__hamburger');
const myMenuClose = document.querySelector('.header__close');

const showmenu = () => {
    const myMenu = document.querySelector('.header__navbar');
    const burger1 = document.querySelector('.menu__show1');
    const burger2 = document.querySelector('.menu__show2');

    if (myMenu.classList.contains('header__navbar_hide')){
        myMenu.classList.replace('header__navbar_hide', 'header__navbar_show');
        burger1.classList.replace('header__line1_show', 'header__line1_hide');
        burger2.classList.replace('header__line2_show', 'header__line2_hide');

    } else {
        myMenu.classList.replace('header__navbar_show', 'header__navbar_hide');
        burger1.classList.replace('header__line1_hide', 'header__line1_show');
        burger2.classList.replace('header__line2_hide', 'header__line2_show');

    }

}

hamburger.addEventListener('click', showmenu);

const scrollTodiv = (e) => {

    let datavalue = e.target.getAttribute("data-value");
    console.log(datavalue);
    if(datavalue === "about"){
        let aboutDiv = document.querySelector('.about__inner_about');
        aboutDiv.scrollIntoView({ block: "start" });
        showmenu();
    } else if (datavalue === "fellowship") {
        let apprDiv = document.querySelector('.approach');
        apprDiv.scrollIntoView({ block: "start" });
        showmenu();
    } else if (datavalue === "netscience") {
        let netDiv = document.querySelector('.netscience');
        netDiv.scrollIntoView({ block: "start" });
        showmenu();
    } else if (datavalue === "home") {
        let hmbtn = document.querySelector('.landing');
        hmbtn.scrollIntoView({ block: "start" });
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

const joinus = document.querySelector('.about__joinusbtn');

const goToJoinUs = () => {
    let joinus = document.querySelector('.about__joinus');
    joinus.scrollIntoView({block: "start"});
}

joinus.addEventListener('click', goToJoinUs);

/*----------CALLING FUNCTIONS-----------*/

loadActions();