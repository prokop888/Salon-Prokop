// Header shrink on scroll
const header = document.querySelector('.header');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Reveal on scroll using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        obs.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
);
reveals.forEach((el) => io.observe(el));

// Mobile menu toggle
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  const toggleMenu = () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    if (expanded) mobileMenu.setAttribute('hidden', '');
    else mobileMenu.removeAttribute('hidden');
  };
  burger.addEventListener('click', toggleMenu);
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('hidden', '');
  }));
}

