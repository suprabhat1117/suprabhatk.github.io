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

/* logo redirect */
navbar_logo.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = window.location.href + 'index.html';
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

// https://suprabhat1117.github.io/suprabhatk.github.io/
// http://127.0.0.1:5500/index.html
// http://127.0.0.1:5500/HTML/project.html 

/* function to validate form */
// function validateForm(){

//     clearErrorMessages();
//     let errorFlag = false;

//     if(nameInput.value.length < 1){
//         errorNodes[0].innerText = "Name cannot be blank";
//         nameInput.classList.add('error-border');
//         errorFlag = true;
//     }

//     if(!emailIsValid(email.value)){
//         errorNodes[1].innerText = "Invalid email";
//         emailInput.classList.add('error-border');
//         errorFlag = true;
//     }

//     if(messageInput.value.length < 10){
//         errorNodes[2].innerText = "Message should be more then 10 letter";
//         messageInput.classList.add('error-border');
//         errorFlag=true;
//     }

//     if(!errorFlag){
//         sendMail();
        
//     }
// }

// // clear error / success message
// function clearErrorMessages(){
//     for(let i=0;i<errorNodes.length;i++){
//         errorNodes[i].innerText = '';
//     }
//     nameInput.classList.remove('error-border');
//     emailInput.classList.remove('error-border');
//     messageInput.classList.remove('error-border');
// }

// /* checl email is valid */
// function emailIsValid(email){
//     let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return pattern.test(email);
// }

/* mail Configuration*/
// function sendMail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "",
//         Password : "",
//         To : 'suprabhat.karmakar17@gmail.com',
//         From : emailInput.value,
//         Subject : "" ,
//         Body : messageInput.value
//     }).then(
//       message => alert(message)

//     //   success.innerText = "Message has been sent!"
//     );
// }