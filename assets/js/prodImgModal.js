document.addEventListener("DOMContentLoaded", function() {
    const prodImg = Array.from(document.querySelectorAll(".prod-image-container img"));
    const prodImgModal = document.getElementById('prodImgModal')

    prodImgModal.addEventListener('show.bs.modal', event => {
        prodImg.forEach(function(event){
            event.addEventListener("click", function(e){
                var zoomedImage = document.querySelector(e.relatedTarget).getAttribute('src');
                console.log(zoomedImage)
                
            })
        })
    })
});