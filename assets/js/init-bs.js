const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
var nav = document.querySelector('.main-menu');
var nationalFlag = document.querySelector(".navbar-flag")

document.addEventListener("DOMContentLoaded", function() {
    var resourceSearchTriegger = document.querySelector("#global-overlay-search");
    if(resourceSearchTriegger){
        resourceSearchTriegger.addEventListener('click', function(){
            var resouceSearch = document.querySelector('#resourceSearch')
            bootstrap.Tab.getOrCreateInstance(resouceSearch).show()
        })
    }

    if(!nav) {
        document.querySelector('.navbar-toggler').style.display = "none";
        document.querySelector('.collapse').style.display="flex";
    }

    if(nationalFlag) {
        document.querySelector('.navbar-toggler').classList.add("flag-space");
    }

    var hashTab = window.location.hash;
    var tourTabs = document.querySelector('.blue-tabs');

    if(tourTabs) {
        if(hashTab != '' && hashTab != '#howto'){
            document.querySelector('#howto').classList.remove('active', 'show');
            document.querySelector(hashTab).classList.add('active', 'show');
        }
    }

    var sustainCarousel = document.getElementById("sustainRes");
    var itemFirst    = sustainCarousel.querySelector('.carousel-inner > .carousel-item:first-child');
    var itemLast     = sustainCarousel.querySelector('.carousel-inner > .item:last-child');
    var controlLeft  = sustainCarousel.querySelector('.carousel-control-prev');
    var controlRight = sustainCarousel.querySelector('.carousel-control-next');
    if(sustainCarousel){
        hideControl();

        sustainCarousel.addEventListener('slid.bs.carousel', function(){
            hideControl();
        });

        sustainCarousel.addEventListener('slide.bs.carousel', function(){
            showControl();
        });

        function hideControl() {
            if ( itemFirst.classList.contains('active') ) {
                controlLeft.classList.add('d-none');
            }
            if ( itemLast.classList.contains('active') ) {
                controlRight.classList.add('d-none');
            } 
        }

        function showControl() {
            if ( itemFirst.classList.contains('active') ) {
                controlLeft.classList.remove('d-none');
            }
            if ( itemLast.classList.contains('active') ) {
                controlRight.classList.remove('d-none');
            }
        }
    }
});