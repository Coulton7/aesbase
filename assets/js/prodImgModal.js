document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("DOMContentLoaded", function() {
        const prodImg = Array.from(document.querySelectorAll(".prod-image-container img"));
        const prodImgModal = document.getElementById('prodImgModal')
    
        prodImgModal.addEventListener('show.bs.modal', event => {
            prodImg.forEach(function(event){
                event.addEventListener("click", function(e){
                    for(i = 0;i < img.length; i++){
                        img[i].onclick = '';
                        console.log(img[i].src);     
                    }
                })
            })
        })
    })
})
