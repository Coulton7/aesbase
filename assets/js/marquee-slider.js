window.addEventListener("load", function () {

    let scrollPosition = 0;
    let lastScrollTop = 0;

    // Handle tour banner click
    const launchTourBtn = document.getElementById("launch-tour");
    if (launchTourBtn) {
      launchTourBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const overlay = document.getElementById("tour-banner-overlay");
        if (overlay) overlay.classList.add("hidden");
      });
    }
  
    // Marquee Slider in Vanilla JS
    const doubleSliders = document.querySelectorAll(".marquee-double-slider");
    const singleSlider = document.querySelectorAll(".marquee-single-slider");
  
    doubleSliders.forEach((slider, index) => {
      const lists = slider.querySelectorAll(".marquee-double-slider-list");
      const sensitivity = index === 1 ? 0.5 : 0.1;
      const repeatItems = true;
  
      if (repeatItems) {
        lists.forEach((list) => {
          const sliderItems = Array.from(list.querySelectorAll(".marquee-double-slider-list--item"));
  
          // Calculate total width
          let totalItemsWidth = 0;
          sliderItems.forEach((item) => {
            totalItemsWidth += item.offsetWidth;
          });
  
          const containerWidth = slider.offsetWidth;
          const itemsToRepeat = Math.ceil(containerWidth / totalItemsWidth) + 1;
  
          for (let i = 0; i < itemsToRepeat; i++) {
            sliderItems.forEach((item) => {
              const clone = item.cloneNode(true);
              clone.classList.add("cloned");
              list.appendChild(clone);
            });
          }
        });
      }
  
      function handleScroll() {
        const st = window.scrollY;
  
        if (st > lastScrollTop) {
          scrollPosition += sensitivity;
        } else {
          scrollPosition -= sensitivity;
        }
  
        lists.forEach((list, listIndex) => {
          const direction = listIndex % 2 === 0 ? -1 : 1;
          const translateValue = scrollPosition * direction;
          list.style.transform = `translate3d(${translateValue}%, 0, 0)`;
        });
  
        lastScrollTop = st;
      }
  
      window.addEventListener("scroll", () => {
        const rect = slider.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
  
        if (inView) {
          handleScroll();
        }
      });
    });

    singleSlider.forEach((slider, index) => {
      const lists = slider.querySelectorAll(".marquee-single-slider-list");
      const sensitivity = index === 1 ? 0.5 : 0.1;
      const repeatItems = true;
  
      if (repeatItems) {
        lists.forEach((list) => {
          const sliderItems = Array.from(list.querySelectorAll(".marquee-single-slider-list-item"));
  
          // Calculate total width
          let totalItemsWidth = 0;
          sliderItems.forEach((item) => {
            totalItemsWidth += item.offsetWidth;
          });
  
          const containerWidth = slider.offsetWidth;
          const itemsToRepeat = Math.ceil(containerWidth / totalItemsWidth) + 1;
  
          for (let i = 0; i < itemsToRepeat; i++) {
            sliderItems.forEach((item) => {
              const clone = item.cloneNode(true);
              clone.classList.add("cloned");
              list.appendChild(clone);
            });
          }
        });
      }
  
      function handleScroll() {
        const st = window.scrollY;
  
        if (st > lastScrollTop) {
          scrollPosition += sensitivity;
        } else {
          scrollPosition -= sensitivity;
        }
  
        lists.forEach((list, listIndex) => {
          const direction = listIndex % 5 === 0 ? -1 : 1;
          const translateValue = scrollPosition * direction;
          list.style.transform = `translate3d(${translateValue}%, 0, 0)`;
        });
  
        lastScrollTop = st;
      }
  
      window.addEventListener("scroll", () => {
        const rect = slider.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
  
        if (inView) {
          handleScroll();
        }
      });
    });
  });