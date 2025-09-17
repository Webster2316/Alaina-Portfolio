const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙';
toggleBtn.id = 'mode-toggle';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px 15px';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.backgroundColor = '#d46bff';
toggleBtn.style.color = '#fff';
toggleBtn.style.zIndex = '1000';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.innerText = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll animations
const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) section.classList.add('show');
    else section.classList.remove('show');
  });
};
sections.forEach(section => section.classList.add('fade-up'));
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
