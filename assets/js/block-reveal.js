document.addEventListener("DOMContentLoaded", function() {
    function getUrlVars()
        {
        var option = [], tag;
        var tags = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < tags.length; i++)
        {
            tag = tags[i].split('=');
            option.push(tag[0]);
            option[tag[0]] = tag[1];
        }
        return option;
        }

        var salesString = getUrlVars()["s"];
        if(salesString == 'ml') {
        document.getElementById('sales-ml').style.display = 'block';
        document.getElementById('sales').style.display = 'none';
        }
        else if(salesString == 'sj') {
        document.getElementById('sales-sj').style.display = 'block';
        document.getElementById('sales').style.display = 'none';
        }
        else if(salesString == 'rs') {
        document.getElementById('sales-rs').style.display = 'block';
        document.getElementById('sales').style.display = 'none';
        }
});