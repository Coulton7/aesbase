document.addEventListener("DOMContentLoaded", function() {

    var base_slider = tns ({
        container: ".base-slider",
        speed: 0,
        loop: true,
        nav: false,
        controlsContainer: "#arrow-controls",
        gutter: 20,
        lazyload: true,
        autoplay: false,
        responsive: {
            1 : {
            items: 2 
            },
    
            600 : {
            items: 3
            },
    
            768: {
                items: 3
            },
    
            992: {
                itmes: 4
            },
    
            1200: {
                items: 4
            }
        },
    })

    var focus_slider = tns({
        container: ".focus-slider",
        speed: 0,
        loop: true,
        nav: false,
        controls: false,
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 7000
    })

    var esg_slider = tns({
        container: ".esg-slider",
        speed: 0,
        loop: true,
        nav: false,
        controls: false,
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 7000
    })

    var tech_slider = tns({
        container: ".tech-slider",
        speed: 0,
        loop: true,
        nav: false,
        controls: false,
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 7000
    })

    var cust_slider = tns({
        container: ".cust-slider",
        speed: 0,
        loop: true,
        nav: false,
        controls: false,
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 7000
    });
});