const header = document.querySelector('.header');
const gallery = document.querySelector('.gallery');
const history = document.querySelector('.history');
const menu = document.querySelector('.menu');

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const target = document.querySelector(link.getAttribute('href'));

    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const butonnn = document.querySelector('.header-button');

butonnn.addEventListener('click', () => {
    event.preventDefault(); 
    const target = document.querySelector(butonnn.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
});

const scrollTopBtn = document.querySelector('#scroll-top-btn');

window.addEventListener('scroll', () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
scrollTopBtn.style.display = 'block';
} else {
scrollTopBtn.style.display = 'none';
}
});

scrollTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

const year = new Date().getFullYear();
const footerText = document.querySelector('.footer-text');
footerText.innerHTML = `© ${year} Ваша компанія. Всі права захищені.`;
