const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

const navbar_logo = document.querySelector('#navbar__logo');
const root_directory = '/suprabhatk.github.io/';

let themeDots = document.getElementsByClassName('theme-dot');
let theme = localStorage.getItem('theme');

const navbarlinks = document.getElementsByClassName('navbar__links');

/* hamburger toggle*/
menu.addEventListener('click',function(e){
    e.preventDefault();
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/* menu Click */
menuLinks.addEventListener('click',function(e){
    e.preventDefault();
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

for(var i=0;i < navbarlinks.length;i++){
    navbarlinks[i].addEventListener('click',function(e){
        e.preventDefault();
        window.location.href= ("#"+this.getAttribute('data-name'));
    })
}


/* logo redirect */
navbar_logo.addEventListener('click',function(e){
    e.preventDefault();
    window.location.reload();
})

/* theme change */
if(theme == null){
    setTheme('light-mode')
}else{
    setTheme(theme);
}

for(var i=0;i < themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode =='light-mode'){
        document.getElementById('theme-style').href='CSS/default.css'
    }
    if(mode =='blue-mode'){
        document.getElementById('theme-style').href='CSS/blue.css'
    }
    if(mode =='green-mode'){
        document.getElementById('theme-style').href='CSS/green.css'
    }
    if(mode =='purple-mode'){
        document.getElementById('theme-style').href='CSS/purple.css'
    } 

    localStorage.setItem('theme',mode);
}