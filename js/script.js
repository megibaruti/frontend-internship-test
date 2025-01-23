document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      gap: 20, 
      breakpoints: {
        768: { perView: 2 },
        480: { perView: 1 }
      }
    }).mount();
  });
  