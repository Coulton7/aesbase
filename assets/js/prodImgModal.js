document.addEventListener("DOMContentLoaded", function() {
    const prodImg = document.querySelectorAll(".prod-image-container img");
    const prodImgModal = document.getElementById('prodImgModal')

    prodImgModal.addEventListener('show.bs.modal', event => {
        event.addEventListener("click", function(){
            for(i=0; i < prodImg.length; i++){
                prodImg[i].onclick='';
                document.getElementById("zoomedImage").setAttribute("src", image);
            }
        })
    })
});