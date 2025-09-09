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

    document.addEventListener('DOMContentLoaded', function() {
    var hashTab = window.location.hash;
    var tourTabs = document.querySelector('.blue-tabs');

    if(tourTabs) {
        var triggerTab = document.querySelector('#countryDropdown .dropdownmenu a[data-bs-target="' + hashTab + '"]');
        bootstrap.Tab.getInstance(triggerTab).show();
    } 
});
});