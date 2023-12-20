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

document.addEventListener("DOMContentLoaded", function() {
  const lowerwave = document.getElementsByClassName('lower-wave');
  const bannerVid = document.getElementsByClassName('banner-vid');

  const lowerwaveRect = lowerwave[0].getBoundingClientRect();

  const lowerTop = lowerwaveRect.top + lowerwaveRect.height;

  bannerVid[0].style.top = (lowerTop - 10) + 'px';
});
