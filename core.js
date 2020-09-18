
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
window.addEventListener("scroll", () => {
    let headerscroll = document.querySelector('.header');
    if (window.pageYOffset > 650) {
        headerscroll.classList.add('header_boxshadow');
    } else {
        headerscroll.classList.remove('header_boxshadow');
    }
})

hamburger.addEventListener('click', showmenu);

const scrollTodiv = (e) => {

    let datavalue = e.target.getAttribute("data-value");

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


/*----------LEARN MORE BUTTONS----------*/

const learnFellowship = () =>{
    let learnbtn = document.querySelector('.approach__about_more');
    let fellowShipMore = document.querySelector('.approach__details');
    const showMoreFellowship = () => {
        if(fellowShipMore.classList.contains('approach__details_hide')){
            fellowShipMore.classList.replace('approach__details_hide', 'approach__details_show');
            fellowShipMore.scrollIntoView({block: "start"});
        } else if(fellowShipMore.classList.contains('approach__details_show')){
            fellowShipMore.classList.replace('approach__details_show', 'approach__details_hide');
        }
        
    }

    learnbtn.addEventListener('click', showMoreFellowship);

}

/*----------CALLING FUNCTIONS-----------*/

loadActions();
learnFellowship();