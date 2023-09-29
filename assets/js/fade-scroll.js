document.addEventListener("DOMContentLoaded", function() {
    const textLogo = document.querySelector('.textlogo');
    const sectionShadow = document.querySelector('.section-shadow');
    const enquiry = document.querySelector('.enq-icon');
    const navbar = document.querySelector('.bg-transparent .navbar-collapse');
    const scrollNav = document.querySelector('.scroll-nav');
    var navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    
    function fadeScroll() {
        window.addEventListener('scroll', function(e) {
            var scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
            textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
            enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
            navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scroll / 600)); +")";
            scrollNav.style.backgroundColor = "rgba(0,0,0,"+ Math.max(0, Math.min(0.5 +scroll / 600)); + ")";
    
            if(scroll/600 >= 0.75) {
                for (var i = 0; i < navLinks.length; i++) {
                    navLinks[i].classList.add('normText');
                }
            }
    
            if(scroll/600 < 0.75) {
                for (var x = 0; x < navLinks.length; x++) {
                    navLinks[x].classList.remove('normText');
                }
            }
        });
    };

    if(window.innerWidth > 992) {
        sectionShadow.style.opacity = -1.03;
        textLogo.style.opacity = -1.03;
        enquiry.style.opacity = -1.03;
        navbar.style.backgroundColor = "rgba(255,255,255,0)";
        scrollNav.style.backgroundColor = "rgba(0,0,0,0)";
        fadeScroll();

    } else {
        sectionShadow.style.opacity = 1;
        textLogo.style.opacity = 1;
        enquiry.style.opacity = 1;
        navbar.style.backgroundColor = "rgba(255,255,255,1)";
        scrollNav.style.backgroundColor = "rgba(0,0,0,0.5)";
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            sectionShadow.style.opacity = -1.03;
            textLogo.style.opacity = -1.03;
            enquiry.style.opacity = -1.03;
            navbar.style.backgroundColor = "rgba(255,255,255,0)";
            scrollNav.style.backgroundColor = "rgba(0,0,0,0)";
            fadeScroll();
        
        } else {
            sectionShadow.style.opacity = 1;
            textLogo.style.opacity = 1;
            enquiry.style.opacity = 1;
            navbar.style.backgroundColor = "rgba(255,255,255,1)";
            scrollNav.style.backgroundColor = "rgba(0,0,0,0.5)";
        }
    });

});