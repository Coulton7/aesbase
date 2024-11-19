const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#global-overlay-search").addEventListener('click', function(){
        var resouceSearch = document.querySelector('#resourceSearch')
        bootstrap.Tab.getOrCreateInstance(resouceSearch).show
    })
});