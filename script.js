document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(0, 240, 255, 0.15)'
      : 'rgba(0, 240, 255, 0.08)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section, .feature-card, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const dropdown = document.querySelector('.dropdown-menu');
  const supportBtn = document.querySelector('.support-btn');

  supportBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropdown.classList.remove('active');
    }
  });
});
