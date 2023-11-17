document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById('myNav');
    var y = document.getElementById('searchOverlay');
    document.querySelector("#overlay-btn").addEventListener('click', 
      function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "0%";
          document.querySelector("body").classList.remove('noscroll');
          document.querySelector('#overlay-btn').classList.add('overlay-btn');
          } else {
            x.style.height = "100%";
            document.querySelector("body").classList.add('noscroll');
            document.querySelector('#overlay-btn').classList.remove('overlay-btn');
          }
      });

      document.querySelector('#overlay-search').addEventListener('click', 
        function searchBtn(){
          document.getElementById('overlay-search').classList.toggle('change');
          if (y.style.height === "100%") {
            y.style.height = "0%";
            document.querySelector("body").classList.remove('noscroll');
            document.querySelector('#overlay-search').classList.add('search-btn');
          } else {
            y.style.height = "100%";
            document.querySelector("body").classList.add('noscroll');
            document.querySelector('#overlay-search').classList.remove('search-btn');
          }

        });

        document.querySelector('#overlay-share').addEventListener('click', 
        function searchBtn(){
          document.getElementById('overlay-share').classList.toggle('change');
          if (y.style.height === "100%") {
            y.style.height = "0%";
            document.querySelector("body").classList.remove('noscroll');
            document.querySelector('#overlay-share').classList.add('share-btn');
          } else {
            y.style.height = "100%";
            document.querySelector("body").classList.add('noscroll');
            document.querySelector('#overlay-share').classList.remove('share-btn');
          }

        });

      var tabletOverlayBtn = document.querySelector("#tablet-overlay-btn");

      if(tabletOverlayBtn !=null ) {
        document.querySelector("#tablet-overlay-btn").addEventListener('click',
        function navBtn() {
          document.getElementById('tablet-overlay-btn').classList.toggle("change");
          if (x.style.height === "100%") {
              x.style.height = "0%";
              document.querySelector("body").classList.remove('noscroll');
              document.querySelector('#overlay-btn').classList.add('overlay-btn');
              document.querySelector('.navigation_col').classList.remove('overlay-menu');
            } else {
              x.style.height = "100%";
              document.querySelector("body").classList.add('noscroll');
              document.querySelector('#overlay-btn').classList.remove('overlay-btn');
              document.querySelector('.navigation_col').classList.add('overlay-menu');
            }
        });
      }
      else {
        return false;
      }
  });
  