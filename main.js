 const lazyImages = document.querySelectorAll("img.lazy-image");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const source = img.dataset.src;
        if (source) {
          image.src = source;
          image.removeAttribute("data-src");
          image.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  });e
  lazyImages.forEach((observedImage) => {
    imageObserver.observe(observedImage);
  });
  const loadImagesButton = document.getElementById("load-images-btn");
  loadImagesButton.addEventListener("click", () => {
    lazyImages.forEach((image) => {
      if (!image.classList.contains("loaded") && image.dataset.src) {
        image.src = img.dataset.src;
        image.removeAttribute("data-src");
        image.classList.add("loaded");
        imageObserver.unobserve(image);
      }
    });
  });