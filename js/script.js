//SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU 
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//scroll-left
const hotelsCountry = document.querySelector('.hotels-country');
const hotelsImages = Array.from(hotelsCountry.children);

hotelsImages.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden",true);
    hotelsCountry.appendChild(duplicateNode);
});

//Add blur to header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader);


//SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


//SCROLL REVEAL
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset :true,
})

sr.reveal(`.home-container, .footer-container`);
sr.reveal(`.blog-card`,{interval:300, opacity: 0, origin:'top'})
sr.reveal(`.hotels-card, .pro-card`, {interval: 300, scale: 0.9,
opacity: 0})
