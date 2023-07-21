document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel('#carousel-fade');
    var slider = tns({
        container: ".slider",
        loop: true,
        nav: false,
        controlsContainer: "#arrow-controls",
        gutter: 20,
        lazyload: true,
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
    var info = slider.getInfo(),
        current = document.querySelector('.current'),
        total = document.querySelector('.total');
        activeSlide = info.displayIndex;
        
        total.textContent = info.slideCount;
        current.textContent = info.displayIndex;

        slider.events.on('transitionEnd', function(info) {
            activeSlide = info.displayIndex;
            current.textContent = info.displayIndex;

            if (activeSlide >= 1 && activeSlide <= 5) {
                carousel.to(0);
                document.getElementById('news-icon').classList.add('active');
                document.getElementById('esg-icon').classList.remove('active');
                document.getElementById('tech-icon').classList.remove('active');
                document.getElementById('cust-icon').classList.remove('active');
            }

            else if (activeSlide >= 6 && activeSlide <= 10) {
                carousel.to(1);
                document.getElementById('esg-icon').classList.add('active');
                document.getElementById('news-icon').classList.remove('active');
                document.getElementById('tech-icon').classList.remove('active');
                document.getElementById('cust-icon').classList.remove('active');
            }

            else if (activeSlide >= 11 && activeSlide <= 15) {
                carousel.to(2);
                document.getElementById('tech-icon').classList.add('active');
                document.getElementById('news-icon').classList.remove('active');
                document.getElementById('esg-icon').classList.remove('active');
                document.getElementById('cust-icon').classList.remove('active');
            }

            else if (activeSlide >= 16 && activeSlide <= 20) {
                carousel.to(3);
                document.getElementById('cust-icon').classList.add('active');
                document.getElementById('news-icon').classList.remove('active');
                document.getElementById('tech-icon').classList.remove('active');
                document.getElementById('esg-icon').classList.remove('active');
            }
        });

    document.getElementById('news-icon').addEventListener('click', function() {
        document.getElementById('news-icon').classList.add('active');
        slider.goTo(0);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('esg-icon').addEventListener('click', function() {
        document.getElementById('esg-icon').classList.add('active');
        slider.goTo(5);
        document.getElementById('news-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('tech-icon').addEventListener('click', function() {
        document.getElementById('tech-icon').classList.add('active');
        slider.goTo(10);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('news-icon').classList.remove('active');
        document.getElementById('cust-icon').classList.remove('active');
    });

    document.getElementById('cust-icon').addEventListener('click', function() {
        document.getElementById('cust-icon').classList.add('active');
        slider.goTo(15);
        document.getElementById('esg-icon').classList.remove('active');
        document.getElementById('tech-icon').classList.remove('active');
        document.getElementById('news-icon').classList.remove('active');
    });

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
    })
    
});