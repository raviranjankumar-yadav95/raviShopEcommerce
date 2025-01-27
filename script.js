const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true
})
sr.reveal('.home-text', { delay: 280, origin: 'bottom' });

sr.reveal('.center-text,.cta-text,center-text,.box,.brand,main-contact,.main-contact', { delay: 280, origin: 'bottom' });