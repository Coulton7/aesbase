document.addEventListener("DOMContentLoaded", function() {
    const prodImg = Array.from(document.querySelectorAll(".prod-image-container img"));
    const prodImgModal = document.getElementById('prodImgModal')

    prodImgModal.addEventListener('show.bs.modal', event => {
        prodImg.forEach(function(event){
            event.addEventListener("click", function(){
                prodImg.forEach( function( event ){
                    var image = event.getAttribute("src")
                    console.log(image);
                    document.getElementById("zoomedImage").setAttribute("src", image);
                })
            })
        })
    })
});