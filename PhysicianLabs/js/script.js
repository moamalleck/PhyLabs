// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(15,39,68,0.98)'
    : 'rgba(15,39,68,0.95)';
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(15,39,68,0.98);padding:24px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08)';
  navActions.style.cssText = open ? '' : 'display:flex;position:fixed;top:200px;left:0;right:0;padding:0 24px 24px;background:rgba(15,39,68,0.98)';
});

// Smooth scroll + close mobile menu on nav link tap
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
function closeMobileMenu() {
  navLinks.style.cssText = '';
  navActions.style.cssText = '';
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
  });
});

// Demo form
document.getElementById('demo-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Received!';
  btn.style.background = '#00A88A';
  btn.disabled = true;
  e.target.reset();
});

// Scroll-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card, .pillar-row, .step, .testimonial-card, .compliance-badge').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
