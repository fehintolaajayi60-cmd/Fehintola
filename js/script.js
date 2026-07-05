document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  '.section, .hero-ticket, .service-card, .log-entry, .contact-ticket'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
