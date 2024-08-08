document.addEventListener("DOMContentLoaded", function () {
  var x = document.getElementById("overlayNav");
  var y = document.getElementById("searchOverlay");
  var s = document.getElementById("shareOverlay");
  var overlayNavBtn = document.querySelector("#overlay-btn");
  var overlaySearchBtn = document.querySelector("#overlay-search");
  var overlayShareBtn = document.querySelector("#overlay-share");
  var footerOverlayBtn = document.querySelector("#footer-overlay-btn");
  var mobileNavOverlay = document.querySelector("[data-bs-target='#mobile-overlay']");
  var mobileOverlaySearch  = document.querySelector("#mob-overlay-search");
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var dialogOffCanvas = document.querySelector(".dialog-off-canvas-main-canvas");
  var frontPage = document.querySelector(".path-frontpage");

  if(!frontPage){
    if(overlayNavBtn){
      overlayNavBtn.addEventListener("click", function navBtn() {
        overlayNavBtn.classList.toggle("change");
          if (x.style.height === "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            html.classList.remove("noscroll");
            body.classList.remove("noscroll");
            dialogOffCanvas.classList.remove("noscroll");
            overlayNavBtn.classList.add("overlay-btn");
          } else {
            x.style.height = "100%";
            x.style.bottom = "0";
            if (y.style.height == "100%") {
              y.style.height = "1px";
              y.style.bottom = "-1px";
              overlaySearchBtn.classList.remove("change");
              overlaySearchBtn.classList.add("search-btn");
            } else if (s.style.height == "100%") {
              s.style.height = "1px";
              s.style.bottom = "-1px";
              overlayShareBtn.classList.remove("change");
              overlayShareBtn.classList.add("share-btn");
            }
            html.classList.add("noscroll");
            body.classList.add("noscroll");
            dialogOffCanvas.classList.add("noscroll");
            overlayNavBtn.classList.remove("overlay-btn");
          }
      });
    } else {
      return true;
    }
    

    if(overlaySearchBtn){
      overlaySearchBtn.addEventListener("click", function searchBtn() {
        overlaySearchBtn.classList.toggle("change");
        if (y.style.height === "100%") {
          y.style.height = "1px";
          y.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlaySearchBtn.classList.add("search-btn");
          document.querySelector('.overlay-btn').classList.remove("normText");
        } else {
          y.style.height = "100%";
          y.style.bottom = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("overlay-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlaySearchBtn.classList.remove("search-btn");
          document.querySelector('.overlay-btn').classList.add("normText");
        }
      });
    } else {
      return true;
    }

    if(!overlayShareBtn){
      overlayShareBtn.addEventListener("click", function shareBtn() {
        overlayShareBtn.classList.toggle("change");
        if (s.style.height === "100%") {
          s.style.height = "1px";
          s.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayShareBtn.classList.add("share-btn");
        } else {
          s.style.height = "100%";
          s.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.bottom = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlayNavBtn.classList.remove("change");
            overlayNavBtn.classList.add("overlay-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayShareBtn.classList.remove("share-btn");
        }
      });
    }

    if(!footerOverlayBtn){
      footerOverlayBtn.addEventListener("click", function footerNavBtn() {
        footerOverlayBtn.classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "1px";
          x.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayNavBtn.classList.add("overlay-btn");
        } else {
          x.style.height = "100%";
          x.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.bottom = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayNavBtn.classList.remove("overlay-btn");
        }
      });
    }

    if(!mobileNavOverlay){
      mobileNavOverlay.addEventListener("click", function mobNavBtn() {
        mobileNavOverlay.classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "1px";
          x.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
        } else {
          x.style.height = "100%";
          x.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.bottom = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          mobileNavOverlay.classList.remove("overlay-btn");
        }
      });
    }

    if(!mobileOverlaySearch){
      mobileOverlaySearch.addEventListener("click", function mobSearchBtn() {
        mobileOverlaySearch.classList.toggle("change");
        if (y.style.height === "100%") {
          y.style.height = "1px";
          y.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlaySearchBtn.classList.add("search-btn");
        } else {
          y.style.height = "100%";
          y.style.bottom = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            mobileOverlaySearch.classList.remove("change");
            mobileOverlaySearch.classList.add("overlay-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlaySearchBtn.classList.remove("search-btn");
        } 
      });
    }
  }
});