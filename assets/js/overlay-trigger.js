document.addEventListener("DOMContentLoaded", function () {

  var x = document.getElementById("overlayNav");
  var y = document.getElementById("searchOverlay");
  var n = document.getElementById("newsOverlay");
  var l = document.getElementById("legalOverlay");
  var t = document.querySelector(".termsOverlay");
  var d = document.querySelector(".documentOverlay");
  var c = document.querySelector(".casesOverlay");
  var overlayNavBtn = document.querySelector("#overlay-btn");
  var overlaySearchBtn = document.querySelector("#overlay-search");
  var overlayLegalBtn = document.querySelector("#overlay-legal");
  var overlayTermsBtn = document.getElementById("overlayTerms");
  var overlayDocumentBtn = document.getElementById("overlayDocument");
  var overlayCasesBtn = document.getElementById("overlayCases");
  var expandingSearch = document.querySelector("#search-icon");
  var footerOverlayBtn = document.querySelector("#footer-overlay-btn");
  var footerTermsBtn = document.querySelector("#footer-terms");
  var footerSearchBtn = document.querySelector("#footer-search");
  var mobileNavOverlay = document.querySelector("[data-bs-target='#mobile-overlay']");
  var mobileOverlaySearch  = document.querySelector("#mob-overlay-search");
  var newsSearchBtn = document.querySelector("#news-search");
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var dialogOffCanvas = document.querySelector(".dialog-off-canvas-main-canvas");
  var frontPage = document.querySelector(".path-frontpage");
  var scrollNav = document.querySelector('.scroll-nav');
  var navLinks = document.querySelectorAll(".nav-link");
  var url = window.location.href;
  var query = 'q';
  var popSearch = document.querySelector("#popular-search-bar");
  var prefillBtns = document.querySelectorAll(".prefill-btn");
  var hash = window.location.hash;
  var popSearchInput = document.querySelector("#popular-search-input");
  var popSearchButton = document.querySelector(".pop-search-button");

  function openSearch() {
    overlaySearchBtn.classList.toggle("change");
    if (y.style.height === "100%") {
      y.style.height = "1px";
      y.style.top = "-1px";
      html.classList.remove("noscroll");
      body.classList.remove("noscroll");
      dialogOffCanvas.classList.remove("noscroll");
      overlaySearchBtn.classList.add("search-btn");
      if(window.innerWidth > 992) {
        if(scrollNav){
          if (scrollNav.classList.contains("scrolled-up")){
            scrollNav.classList.remove("scrolled-up");
            scrollNav.classList.add("scrolled-down")
          } else {
            scrollNav.classList.add("scrolled-down")
          }
        }
      }
      if(scrollNav){
        document.querySelector(".scroll-nav").classList.remove("shadow-back");
      }
      document.querySelector('#autocollapse .navbar-collapse').classList.remove("bg-white");
      document.querySelector('.overlay-btn').classList.remove("normText");
      document.querySelector('.wavelogo').style.opacity = "1";
      document.querySelector('.uppercurve').style.opacity = "1";
      navLinks.forEach(function (navLink) {
      navLink.classList.remove('normText');
      });
    } else {
      y.style.height = "100%";
      y.style.top = "0";
      if (x.style.height == "100%") {
        x.style.height = "1px";
        x.style.bottom = "-1px";
        overlaySearchBtn.classList.remove("change");
        overlaySearchBtn.classList.add("overlay-btn");
      }
      html.classList.add("noscroll");
      body.classList.add("noscroll");
      dialogOffCanvas.classList.add("noscroll");
      overlaySearchBtn.classList.remove("search-btn");
      if(window.innerWidth > 992) {
        if(scrollNav){
          if (scrollNav.classList.contains("scrolled-down")){
            scrollNav.classList.remove("scrolled-down");
            scrollNav.classList.add("scrolled-up")
          } else {
            scrollNav.classList.add("scrolled-up")
          }
        }
      }
      if(scrollNav){
        document.querySelector(".scroll-nav").classList.add("shadow-back");
      }
      document.querySelector('#autocollapse .navbar-collapse').classList.add("bg-white");
      document.querySelector('.overlay-btn').classList.add("normText");
      document.querySelector('.wavelogo').style.opacity = "0";
      document.querySelector('.uppercurve').style.opacity = "0";
      navLinks.forEach(function (navLink) {
        navLink.classList.add('normText');
      });
    }
  }

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
              y.style.top = "-1px";
              overlaySearchBtn.classList.remove("change");
              overlaySearchBtn.classList.add("search-btn");
            }
            html.classList.add("noscroll");
            body.classList.add("noscroll");
            dialogOffCanvas.classList.add("noscroll");
            overlayNavBtn.classList.remove("overlay-btn");
          }
      });
    }
    

    if(overlaySearchBtn){
      overlaySearchBtn.addEventListener("click", function searchBtn() {
        openSearch();
      });
    }

    if(expandingSearch){
      expandingSearch.addEventListener("click", function searchBtn() {
        openSearch();
      });
    }

    if(newsSearchBtn){
      newsSearchBtn.addEventListener("click", function searchBtn() {
        newsSearchBtn.classList.toggle("change");
        if (n.style.height === "100%") {
          n.style.height = "1px";
          n.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          newsSearchBtn.classList.add("search-btn");
          if(document.querySelector('.black-boxes-right')){
            document.querySelector('.black-boxes-right').classList.remove("overlay-btn-allow");
          }
        } else {
          n.style.height = "100%";
          n.style.bottom = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            newsSearchBtn.classList.remove("change");
            newsSearchBtn.classList.add("overlay-btn");
          } 
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          newsSearchBtn.classList.remove("search-btn");
          if(document.querySelector('.black-boxes-right')){
            document.querySelector('.black-boxes-right').classList.add("overlay-btn-allow");
          }
          document.querySelector('.ais-SearchBox-input').focus();
        }
      });
    }

    if(url.indexOf('?' + query + '=') != -1){
      openSearch();
    }

    if(document.querySelector('.nat-res-search')){
     navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", function navBtn(){
      if (y.style.height === "100%") {
        y.style.height = "1px";
        y.style.top = "-1px";
        html.classList.remove("noscroll");
        body.classList.remove("noscroll");
        dialogOffCanvas.classList.remove("noscroll");
        overlaySearchBtn.classList.add("search-btn");
        if(window.innerWidth > 992) {
          if(scrollNav){
            if (scrollNav.classList.contains("scrolled-up")){
              scrollNav.classList.remove("scrolled-up");
              scrollNav.classList.add("scrolled-down")
            } else {
              scrollNav.classList.add("scrolled-down")
            }
          }
        }
        if(scrollNav){
          document.querySelector(".scroll-nav").classList.remove("shadow-back");
        }
        document.querySelector('#autocollapse .navbar-collapse').classList.remove("bg-white");
        document.querySelector('.wavelogo').style.opacity = "1";
        document.querySelector('.uppercurve').style.opacity = "1";
        navLinks.forEach(function (navLink) {
          navLink.classList.remove('normText');
        });
      }
     });
     }) 
    }

    if(overlayTermsBtn){
      overlayTermsBtn.addEventListener("click", function termsBtn() {
        overlayTermsBtn.classList.toggle("change");
        if (t.style.height === "100%") {
          t.style.height = "1px";
          t.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayTermsBtn.classList.add("terms-btn");
        } else {
          t.style.height = "100%";
          t.style.bottom = "0";
          t.style.top = "0";
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayTermsBtn.classList.remove("terms-btn");
        }
      });
    }

    if(hash === "#terms" && overlayTermsBtn){
      overlayTermsBtn.classList.toggle("change");
        if (t.style.height === "100%") {
          t.style.height = "1px";
          t.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayTermsBtn.classList.add("terms-btn");
        } else {
          t.style.height = "100%";
          t.style.bottom = "0";
          t.style.top = "0";
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayTermsBtn.classList.remove("terms-btn");
        }
      
    };

    if(overlayDocumentBtn) {
      overlayDocumentBtn.addEventListener("click", function documentBtn() {
        overlayDocumentBtn.classList.toggle("change");
        if (d.style.height === "100%") {
          d.style.height = "1px";
          d.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayDocumentBtn.classList.add("document-btn");
        } else {
          d.style.height = "100%";
          d.style.bottom = "0";
          d.style.top = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (l.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlayNavBtn.classList.remove("change");
            overlayNavBtn.classList.add("overlay-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayDocumentBtn.classList.remove("document-btn");
        }
      });
    }

    if(overlayCasesBtn) {
      overlayCasesBtn.addEventListener("click", function casesBtn() {
        if (c.style.height === "100%") {
          c.style.height = "1px";
          c.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
        } else {
          c.style.height = "100%";
          c.style.bottom = "0";
          c.style.top = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (l.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlayNavBtn.classList.remove("change");
            overlayNavBtn.classList.add("overlay-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
        }
      });
    }

    if(overlayLegalBtn){
      overlayLegalBtn.addEventListener("click", function legalBtn() {
        overlayLegalBtn.classList.toggle("change");
        if (l.style.height === "100%") {
          l.style.height = "1px";
          l.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayLegalBtn.classList.add("legal-btn");
        } else {
          l.style.height = "100%";
          l.style.bottom = "0";
          l.style.top = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (l.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlayNavBtn.classList.remove("change");
            overlayNavBtn.classList.add("overlay-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayLegalBtn.classList.remove("share-btn");
        }
      });
    }

    if(footerOverlayBtn){
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
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayNavBtn.classList.remove("overlay-btn");
        }
      });
    }

    if(footerTermsBtn){
      footerTermsBtn.addEventListener("click", function termsBtn() {
        footerTermsBtn.classList.toggle("change");
        if (t.style.height === "100%") {
          t.style.height = "1px";
          t.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          footerTermsBtn.classList.add("terms-btn");
        } else {
          t.style.height = "100%";
          t.style.bottom = "0";
          t.style.top = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (t.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          footerTermsBtn.classList.remove("terms-btn");
        }
      });
    }

    if(footerSearchBtn){
      footerSearchBtn.addEventListener("click", function searchBtn() {
        openSearch();
      });
    }

    if(mobileNavOverlay){
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
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          mobileNavOverlay.classList.remove("overlay-btn");
        }
      });
    }

    if(mobileOverlaySearch){
      mobileOverlaySearch.addEventListener("click", function mobSearchBtn() {
        openSearch();
      });
    }
    if(popSearch){
      popSearchInput.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
          openSearch();
        }
      });

      popSearchButton.addEventListener("click", function popSearchBtn(){
        openSearch();
      });

      for (var i = 0; i < prefillBtns.length; i++) {
        prefillBtns[i].addEventListener('click', function(){
          openSearch();
        });
      }
    }
  }
});