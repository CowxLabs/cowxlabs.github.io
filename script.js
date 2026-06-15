document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  console.log('%c[ Cowx Labs ]%c system initialized', 'color:#c000ff;font-weight:bold', 'color:#b080e0');

  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(192, 0, 255, 0.2)'
      : 'rgba(192, 0, 255, 0.08)';
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

  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        menu.classList.remove('active');
      }
    });
  });
});
