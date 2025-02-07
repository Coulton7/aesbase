document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("DOMContentLoaded", function() {
        const prodImgModal = document.getElementById('prodImgModal')
    
        prodImgModal.addEventListener('show.bs.modal', function(event) {
            document.getElementById('modalImage').src = event.relatedTarget.src;
            console.log(event.relatedTarget);
          });
    })
})
