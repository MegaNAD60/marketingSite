/*----------index.html backToTopBtn javascript code----------*/
mybutton=document.getElementById("backToTopBtn");
window.onscroll = function(){scrollFunction()};
function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 

/*----------register form validation----------*/
$(function() {  
$("form").validate();  
}); 

/*----------login form validation----------*/
$(function() {  
$("form").validate();  
}); 
