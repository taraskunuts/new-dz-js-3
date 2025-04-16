const imagesElements = document.querySelectorAll(".image");
const observerSettings = {
    rootMargin: "0px",
    threshold: 0.1
};
const observerCallback = (arrayImages, observer) => {
    arrayImages.forEach((image) => {
        if (image.isIntersecting) {
            const photo = image.target;
            photo.classList.add("animation");
            observer.unobserve(photo);
        }
    });
};
const obServer = new IntersectionObserver(observerCallback, observerSettings);
imagesElements.forEach((image) => {
    obServer.observe(image);
});