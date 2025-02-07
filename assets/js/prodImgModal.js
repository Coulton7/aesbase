document.addEventListener("DOMContentLoaded", function() {
    const prodImgModal = document.getElementById('prodImgModal');
    
    prodImgModal.addEventListener('show.bs.modal', function(event) {
        document.getElementById('zoomedImage').src = event.relatedTarget.dataset.data-img-url;
        console.log(event.relatedTarget.dataset.data-img-url);
    });
})
