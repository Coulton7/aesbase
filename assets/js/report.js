document.addEventListener('DOMContentLoaded', function(){
    // Correct query selector for nav links
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
    var navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    var overlayLink = document.querySelector('.overlay-btn');

    // Ensure carousel element exists before adding event listener
    var carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function () {
            // Get the currently active carousel item
            var activeSlide = document.querySelector('.carousel-item.active');

            // Check if the active item is the last slide with the id 'homePage2'
            if (activeSlide && activeSlide.id === 'homePage2') {
                // Change the font color of the nav links to white
                navLinks.forEach(function (navLink) {
                    navLink.style.color = 'white';
                });

                overlayLink.style.color="white";

            } else {
                // Reset the font color of the nav links to default or another color
                navLinks.forEach(function (navLink) {
                    navLink.style.color = ''; // reset to default
                });
            }
        });
    }

    function hideLink() {
        if(window.innerWidth < 1300) {
            navItems[6].style.display = 'none';
        } else if(window.innerWidth >= 1300) {
            navItems[6].style.display = 'block';
        }

        if(window.innerWidth < 1200) {
            navItems[5].style.display = 'none';
        } else if(window.innerWidth >= 1200) {
            navItems[5].style.display = 'block';
        }

        if(window.innerWidth < 1050) {
            navItems[4].style.display = 'none';
        } else if(window.innerWidth >= 1050) {
            navItems[4].style.display = 'block';
        }
    }
    hideLink();
    window.addEventListener(resize), function() {
        hideLink();
    }
    
});

