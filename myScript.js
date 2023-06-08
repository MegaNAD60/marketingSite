/*----------index.html backToTopBtn javascript code----------
mybutton=document.getElementById("backToTopBtn");
window.onscroll = function(){scrollFunction()};
function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

//----------register form validation----------
$(function() {
$("form").validate();
});

//----------login form validation----------
$(function() {
$("form").validate();
});

//----------contact validation----------
$(function() {
$("form").validate();
});*/

//LOGIN FUNCTIONALITY
const scrollTopBtn = document.getElementById('backToTopBtn');
const loginBtn = document.getElementsByClassName('login-btn')[0];
const signupBtn = document.getElementsByClassName('signup-btn')[0];
const detailsBtn = document.getElementsByClassName('details-btn');
const cancelIcon = document.getElementsByClassName('cancel')[0];
const closeLogin = document.getElementsByClassName('close-login')[0];
const closeSignup = document.getElementsByClassName('close-signup')[0];
const loginPage = document.getElementsByClassName('login-section')[0];
const signupPage = document.getElementsByClassName('signup-section')[0];
const detailsPage = document.getElementsByClassName('details-section')[0];

//TOP FUNCTION
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//ONCLICK FUNCTION FOR SCROLL TOP BTN
scrollTopBtn.addEventListener('click', () => {
    topFunction()
})

//SCROLL BUTTON DYNAMICS
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTopBtn.style.display = "block"
    } else {
        scrollTopBtn.style.display = "none";
    }
}

//WINDOW FUNCTION WHEN SCROLL
window.addEventListener('scroll', () => {
    scrollFunction();
})

//ONCLICK FUNCTION WHE LOGIN BTN IS CLICKED
loginBtn.addEventListener('click', () => {
    toggleLogin();
});

//ONCLICK FUNCTION WHE SIGN UP BTN IS CLICKED
signupBtn.addEventListener('click', () => {
    toggleSignup();
});

//ONCLICK FUNCTION WHEN DETAILS ICON IS CLICKED
for(i=0; i<detailsBtn.length; i++){
    detailsBtn[i].addEventListener('click', () => {
        toggleDetails();
    });
}

//ONCLICK FUNCTION WHEn CANCEL ICON BTN IS CLICKED
cancelIcon.addEventListener('click', () => {
    toggleDetails();
});

closeLogin.addEventListener('click', () => {
    toggleLogin();
});

closeSignup.addEventListener('click', () => {
    toggleSignup();
});

function toggleLogin() {
    loginPage.classList.toggle('login-section')
};

function toggleSignup() {
    signupPage.classList.toggle('signup-section')
};

function toggleDetails() {
    detailsPage.classList.toggle('details-section')
};
