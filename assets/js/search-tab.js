document.addEventListener("DOMContentLoaded", function() {

    let searchTabs = document.querySelector('.search-tabs');

    if (!!searchTabs) {
        const intResultsNum = document.querySelector('#intResultsNum');
        const globalResultsNum = document.querySelector('#globalResultsNum');
        var searchButton = document.querySelector('.ais-SearchBox-submit');
        var searchInput = document.querySelector('.ais-SearchBox-input');

        searchButton.addEventListener("click", function() {
            setTimeout(function() {
                if (intResultsNum.innerText === "0" && globalResultsNum.innerText >= "1") {
                    document.querySelector('#globalResultsTab').classList.add('highlight-tab');
                } else {
                    document.querySelector('#globalResultsTab').classList.remove('highlight-tab');
                }
                document.querySelector(".stats-row").style.visibility = "visible";
            }, 500);
        });

        searchInput.addEventListener("keydown", function(e) {
            if (e.key === 'Enter') {
                setTimeout(function() {
                    if (intResultsNum.innerText === "0" && globalResultsNum.innerText >= "1") {
                        document.querySelector('#globalResultsTab').classList.add('highlight-tab');
                    } else {
                        document.querySelector('#globalResultsTab').classList.remove('highlight-tab');
                    }
                    document.querySelector(".stats-row").style.visibility = "visible";
                }, 500);
            }
        })
    }
});