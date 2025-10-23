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

// Update Contacts buttons (links + unified styling)
(() => {
  const actions = document.querySelector('#contacts .actions');
  if (!actions) return;
  const links = actions.querySelectorAll('a');
  links.forEach((a) => {
    a.classList.remove('btn-accent', 'btn-outline', 'btn-ghost');
    a.classList.add('btn', 'btn-dark-accent');
    const href = a.getAttribute('href') || '';
    if (href.startsWith('https://wa.me')) {
      a.setAttribute('href', 'https://wa.me/41797024541?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%B2%20Salon%20Prokop');
      a.textContent = 'Написать в WhatsApp';
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    } else if (href.startsWith('mailto:')) {
      a.setAttribute('href', 'mailto:mykola1314@gmail.com?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D0%B2%20Salon%20Prokop&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%8F%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%80%D0%B8%D0%B6%D0%BA%D1%83.');
      a.textContent = 'Написать на Email';
    }
  });
})();
