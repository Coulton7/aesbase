document.addEventListener("DOMContentLoaded", function() {
    const prodImgModal = document.getElementById('prodImgModal')

    prodImgModal.addEventListener('show.bs.modal', function(event) {
        document.getElementById('zoomedImage').src = event.target.dataset.src;
        console.log(event.relatedTarget.dataset.src);
    })
});