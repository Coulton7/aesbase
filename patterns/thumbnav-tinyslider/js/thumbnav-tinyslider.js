document.addEventListener("DOMContentLoaded", function() {

    if (document.querySelectorAll('.thumbnav-slider').length > 0){
        var thnumbnavslider = tns({
            container: ".thumbnav-slider",
            loop: false,
            nav: true,
            navPosition: "bottom",
            navContainer: "#thumnail-nav",
            navAsThumbnails: true,
            controls: false,
            gutter: 20,
            lazyload: true,
            responsive: {
                1 : {
                items: 1
                },
        
                600 : {
                items: 1
                },
        
                768: {
                    items: 1
                },
        
                992: {
                    itmes: 1
                },
        
                1200: {
                    items: 1
                }
            },
        })
    }
});