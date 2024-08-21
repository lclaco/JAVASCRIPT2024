document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.backgroundColor = '#ced4da';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function() {
            card.style.backgroundColor = '#e9ecef';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Obtener el menú
var navbar = document.getElementById('navbar');

// Cambiar la clase del menú dependiendo del scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Cambiar después de 50px de desplazamiento
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

    /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

 