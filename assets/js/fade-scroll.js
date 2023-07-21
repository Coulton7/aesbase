document.addEventListener("DOMContentLoaded", function() {
    const textLogo = document.getElementById('textlogo');
    const sectionShadow = document.getElementById('section-shadow');
    const enquiry = document.getElementById('enq-icon');
    const navbar = document.querySelector('.navbar-nav');
    var navLinks = document.querySelectorAll('.navbar-nav a');
    var socialLinks = document.querySelectorAll('.social-media a');

    if(window.innerWidth > 992) {
        sectionShadow.style.opacity = -1.03;
        textLogo.style.opacity = -1.03;
        enquiry.style.opacity = -1.03;
        navbar.style.backgroundColor = "rgba(255,255,255,0)";

    window.addEventListener('scroll', function(e) {
        var scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
        textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
        enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
        navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scroll / 600)); +")"

        if(scroll/600 >= 0.75) {
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.add('normText');
            }
            for (var y = 0; y < socialLinks.length; y++) {
                socialLinks[y].classList.add('normText');
            }
        }

        if(scroll/600 < 0.75) {
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove('normText');
            }
            for (var y = 0; y < socialLinks.length; y++) {
                socialLinks[y].classList.remove('normText');
            }
        }
    });
    } else {
        sectionShadow.style.opacity = 1;
        textLogo.style.opacity = 1;
        enquiry.style.opacity = 1;
        navbar.style.backgroundColor = "rgba(255,255,255,1)";
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            sectionShadow.style.opacity = -1.03;
            textLogo.style.opacity = -1.03;
            enquiry.style.opacity = -1.03;
            navbar.style.backgroundColor = "rgba(255,255,255,0)";
        
            window.addEventListener('scroll', function(e) {
                var scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
                sectionShadow.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
                textLogo.style.opacity = Math.max(0, Math.min(1, +scroll / 600));
                enquiry.style.opacity = Math.max(0, Math.min(1, +scroll / 500));
                navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scroll / 600)); +")"

                if(scroll/600 >= 0.75) {
                    document.querySelector('.navbar-nav a').classList.add('normText');
                    document.querySelector('.social-media a').classList.add('normText');
                }
        
                if(scroll/600 < 0.75) {
                    document.querySelector('.navbar-nav a').classList.remove('normText');
                    document.querySelector('.social-media a').classList.remove('normText');
                }
            });
        } else {
            sectionShadow.style.opacity = 1;
            textLogo.style.opacity = 1;
            enquiry.style.opacity = 1;
            navbar.style.backgroundColor = "rgba(255,255,255,1)";
        }
    });

});