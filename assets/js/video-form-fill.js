document.addEventListener('DOMContentLoaded', function() {

  if (document.querySelector("#video-form-fill")) {
    console.log("Video-form is here!!")
    document.querySelector('.video-thumbnail').style.display = 'none';
    if (document.querySelector('.resource-request').innerHTML.length > 0) {
        document.querySelector('.video-stream').style.display='none';
        document.querySelector('.video-thumbnail').style.display='block';
    }

    function getUrlVars() {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    var submitString = getUrlVars()["fs"];
    if(submitString=='y'){
        document.querySelector('.video-stream').style.display='block';
      document.querySelector('.resource-request').style.display = 'none';
      document.querySelector('.video-thumbnail').style.display='none';
    }

    hbspt.forms.create({
        portalId: "2248916",
        formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
        target: "#video-form-fill",
        css: "",
        cssClass:"hs-overlay-form",
        submitButtonClass:"btn btn-primary hs-button",
        onFormSubmit: function ($form){
            var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
            if(deliverability === 0){
                window.location.href = window.location.pathname+'?fs=y'
            }
        }
    });
  }
});