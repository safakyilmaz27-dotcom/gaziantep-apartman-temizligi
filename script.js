// Mobil menü
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Menü linkine tıklayınca kapansın
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Scroll'da header gölgesi
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Form gönderimi (statik site - örnek davranış)
function submitForm(e) {
  e.preventDefault();
  const phone = '+905451332859';
  alert('Talebiniz alındı! En kısa sürede sizi arayacağız.\n\nAcil durumlar için: 0545 133 28 59');
  e.target.reset();
  return false;
}

// Kayan giriş animasyonu
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .region-card, .why-card, .testimonial, .feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
