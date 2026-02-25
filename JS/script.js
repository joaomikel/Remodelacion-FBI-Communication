document.addEventListener("DOMContentLoaded", () => {
  // --- 1. TESTIMONIAL SLIDER LOGIC ---
  const track = document.getElementById("testimonial-track");
  const cards = Array.from(track.children);
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  let currentIndex = 0;

  // Calculates how much to move the track based on card width + margin
  const updateSliderPosition = () => {
    // Get the total width of a card including its CSS margins
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].getBoundingClientRect().width;
    const margin =
      parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);

    const moveDistance = cardWidth + margin;

    // Apply transform to slide
    track.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
  };

  const moveToNextSlide = () => {
    if (currentIndex === cards.length - 1) {
      currentIndex = 0; // Loop back to start
    } else {
      currentIndex++;
    }
    updateSliderPosition();
  };

  const moveToPrevSlide = () => {
    if (currentIndex === 0) {
      currentIndex = cards.length - 1; // Loop to end
    } else {
      currentIndex--;
    }
    updateSliderPosition();
  };

  // Event Listeners for Buttons
  nextBtn.addEventListener("click", moveToNextSlide);
  prevBtn.addEventListener("click", moveToPrevSlide);

  // Optional: Auto-play functionality
  let autoPlayInterval = setInterval(moveToNextSlide, 5000);

  // Pause auto-play when hovering over the slider container
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval),
  );
  sliderContainer.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(moveToNextSlide, 5000);
  });

  // Recalculate position on window resize to ensure responsiveness
  window.addEventListener("resize", updateSliderPosition);
});

// --- MOBILE MENU (HAMBURGER LOGIC) ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (hamburger && navLinks) {
        // Abrir/Cerrar al hacer clic en la hamburguesa
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
