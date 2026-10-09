document.addEventListener("DOMContentLoaded", function() {
    const lazyloadImages = document.querySelectorAll(".lazy-back");
  
    const elementObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry)=> {
        if(entry.isIntersecting) {
          entry.target.classList.remove("lazy-back");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "200px 0px",
      threshold: 0
    }
  );

  lazyloadImages.forEach((image) => elementObserver.observe(image));
});