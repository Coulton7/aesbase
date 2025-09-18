document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelectorAll("#pillarBtn").length > 0){
        document.querySelector("#pillarBtn").addEventListener("click",
        function pillarBtn(){
            document.querySelector("#newsTab").classList.add('d-none');
            document.querySelector("#newsTab").classList.remove('d-md-block', 'd-inline-flex');
            document.querySelector("#pillarTab").classList.remove('d-none');
            document.querySelector("#pillarTab").classList.add('d-md-block', 'd-inline-flex');
            document.querySelector("#newsBtn").classList.remove('invisible');
            document.querySelector("#newsBtn").classList.add('visible')
            document.querySelector(".latest-news-slider").classList.add('d-none');
            document.querySelector(".pillar-slider").classList.remove('d-none');
            document.querySelector("#pillar-controls").classList.remove('d-none');
            document.querySelector(".latest-news-slider .tns-controls").classList.add('d-none');
        })

        document.querySelector("#newsBtn").addEventListener("click",
        function newsBtn(){
            document.querySelector("#pillarTab").classList.add('d-none');
            document.querySelector("#pillarTab").classList.remove('d-md-block', 'd-inline-flex');
            document.querySelector("#newsTab").classList.remove('d-none');
            document.querySelector("#newsTab").classList.add('d-md-block', 'd-inline-flex');
            document.querySelector("#newsBtn").classList.add('invisible');
            document.querySelector("#newsBtn").classList.remove('visible');
            document.querySelector(".pillar-slider").classList.add('d-none');
            document.querySelector(".latest-news-slider").classList.remove('d-none');
            document.querySelector("#pillar-controls").classList.add('d-none');
            document.querySelector(".latest-news-slider .tns-controls").classList.remove('d-none');
        })
    }

    if(document.querySelector(".global-news-slider")){
        document.querySelector("#global-news-tab").addEventListener("click",
        function globalNewsTab(){
            document.querySelector("#global-news-tab").classList.add('active');
            document.querySelector("#local-news-tab").classList.remove('active');
            document.querySelector(".global-news-slider").classList.remove('d-none');
            document.querySelector(".local-news-slider").classList.add('d-none');
            document.querySelector(".global-news-slider .tns-controls").classList.remove('d-none');
            document.querySelector(".local-news-slider .tns-controls").classList.add('d-none');
        })

        document.querySelector("#local-news-tab").addEventListener("click",
        function localNewsTab(){
            document.querySelector("#global-news-tab").classList.remove('active');
            document.querySelector("#local-news-tab").classList.add('active');
            document.querySelector(".global-news-slider").classList.add('d-none');
            document.querySelector(".local-news-slider").classList.remove('d-none');
            document.querySelector(".global-news-slider .tns-controls").classList.add('d-none');
            document.querySelector(".local-news-slider .tns-controls").classList.remove('d-none');
        })
    }
});