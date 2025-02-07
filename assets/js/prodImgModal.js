document.addEventListener("DOMContentLoaded", function() {
    const prodImgModal = document.getElementById('prodImgModal')

    prodImgModal.addEventListener('show.bs.modal', function(event) {
        document.getElementById('zoomedImage').src = event.relatedTarget.src;
    })
});