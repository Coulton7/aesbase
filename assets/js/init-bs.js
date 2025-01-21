const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
var nav = document.querySelector('.main-menu');

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

});

document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector(".navbar-flag")) {
        document.querySelector('.navbar-toggler').classList.add = "flag-space";
    }
})