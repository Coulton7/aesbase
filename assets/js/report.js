document.addEventListener('DOMContentLoaded', function(){
 
var navLinks = document.querySelectorAll('.navbar-nav a.nav-link');

document.querySelector('.carousel').addEventListener('slid.bs.carousel', function () {
   
    var activeSlide = document.querySelector('.carousel-item.active');

   
    if (activeSlide && activeSlide.id === 'homePage2') {
       
        navLinks.forEach(function (navLink) {
            navLink.style.color = 'white';
        });
    } else{
        
        navLinks.forEach(function (navLink) {
            navLink.style.color = ''; 
        });
    }
});
});
