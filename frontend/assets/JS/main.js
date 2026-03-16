var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        991: {
            slidesPerView: 5, // Adjust as needed
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3, // Adjust as needed
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2, // Adjust as needed
            spaceBetween: 8,
        },
    },
   
});
