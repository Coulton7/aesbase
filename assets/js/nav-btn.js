document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById('myNav');
    var y = document.getElementById('main-nav');
    document.querySelector("#overlay-btn").addEventListener('click', 
      function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "0%";
          document.querySelector('.main').classList.remove('active');
          document.querySelector("body").classList.remove('noscroll');
          document.querySelector('#overlay-btn').classList.add('overlay-btn');
          document.querySelector('.search-block').classList.remove('overlay-search');
          document.querySelector('.navigation_col').classList.remove('overlay-menu');
          document.querySelector(y).classList.add('fixed-top');
          } else {
            x.style.height = "100%";
            if(document.querySelector('#prodForm').classList.contains('in')) {
              document.querySelector('#prodForm').modal('hide');
            }
            if(document.querySelector('#resForm').classList.contains('in')) {
              document.querySelector('#resForm').modal('hide');
            }

            document.querySelector('.main').classList.add('active');
            document.querySelector("body").classList.add('noscroll');
            document.querySelector('#overlay-btn').classList.remove('overlay-btn');
            document.querySelector('.search-block').classList.add('overlay-search');
            document.querySelector('.navigation_col').classList.add('overlay-menu');
            document.querySelector(y).classList.remove('fixed-top');
          }
      });

      var tabletOverlayBtn = document.querySelector("#tablet-overlay-btn");

      if(tabletOverlayBtn !=null ) {
        document.querySelector("#tablet-overlay-btn").addEventListener('click',
        function navBtn() {
          document.getElementById('tablet-overlay-btn').classList.toggle("change");
          if (x.style.height === "100%") {
              x.style.height = "0%";
              document.querySelector('.main').classList.remove('active');
              document.querySelector("body").classList.remove('noscroll');
              document.querySelector('#overlay-btn').classList.add('overlay-btn');
              document.querySelector('.search-block').classList.remove('overlay-search');
              document.querySelector('.navigation_col').classList.remove('overlay-menu');
              document.querySelector(y).classList.add('fixed-top');
            } else {
              x.style.height = "100%";
              if(document.querySelector('#prodForm').classList.contains('in')) {
                document.querySelector('#prodForm').modal('hide');
              }
              if(document.querySelector('#resForm').classList.contains('in')) {
                document.querySelector('#resForm').modal('hide');
              }

              document.querySelector('.main').classList.add('active');
              document.querySelector("body").classList.add('noscroll');
              document.querySelector('#overlay-btn').classList.remove('overlay-btn');
              document.querySelector('.search-block').classList.add('overlay-search');
              document.querySelector('.navigation_col').classList.add('overlay-menu');
              document.querySelector(y).classList.remove('fixed-top');
            }
        });
      }
      else {
        return false;
      }
  });
  