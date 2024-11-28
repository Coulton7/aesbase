function autocollapse() {
    var overlayBtn = document.getElementById('overlay-btn');
    var navbar = document.getElementById('autocollapse');
    navbar.classList.remove('collapsed');

    if(overlayBtn){
      if(navbar.innerHeight > 100) {
        navbar.classList.add('collapsed');
        overlayBtn.classList.add('display-none-important');
      } else {
        navbar.classList.remove('collapsed');
        overlayBtn.classList.remove('display-none-important');
      }
    }
  }
  
  function menuItemOverlay() {
    if (overlayBtn){
      if(window.innerWidth > 992) {
        let overlayBtn = document.querySelector('.overlay-btn').getBoundingClientRect();
        let overlayBtnLeft = overlayBtn.left;
        let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
        let menuItemRight = menuItem.right;
    
        if ((menuItemRight > overlayBtnLeft)) {
          overlayBtn.classList.add('display-none-important');
        }
        else {
          overlayBtn.classList.remove('display-none-important');
        }
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", autocollapse);
  document.addEventListener("DOMContentLoaded", menuItemOverlay);
  window.addEventListener('resize', function() {
    if(overlayBtn){
      if(overlayBtn.classList.contains("change")) {
        return;
      } else {
        autocollapse();
      }
    }
  });
  window.addEventListener('resize', function() {
    if(overlayBtn){
      if(this.overlayBtn.classList.contains("change")) {
        return;
      } else {
        menuItemOverlay();
      }
    }
  });
  