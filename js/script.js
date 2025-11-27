// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//ketika icon menu di klik
document.querySelector('#burger-menu').onclick = ()=>{
navbarNav.classList.toggle('active')
};

//klik diluar sidebar untuk hilangkan nav
const burger = document.querySelector('#burger-menu');

document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});