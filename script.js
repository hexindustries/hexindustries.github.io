// =========================
// STEP 5: SCROLL REVEAL LOGIC
// =========================

const elements = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
