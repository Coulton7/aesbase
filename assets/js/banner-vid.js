document.addEventListener("DOMContentLoaded", function() {
  const bannerVid = document.getElementById("bannerVid");
  if (window.width > 991) {
    bannerVid.getElementsByTagName("source");

    for (let i =0; i< bannerVid.clientHeight; ++i) {
      bannerVid[i].src = bannerVid[i].dataset.src;
    }
  }

  bannerVid.load();
});