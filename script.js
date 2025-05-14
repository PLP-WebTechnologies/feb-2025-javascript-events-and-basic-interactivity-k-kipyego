// 1. Button click – change color & text
document.getElementById('colorBtn').addEventListener('click', function() {
  this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  this.textContent = 'Clicked!';
});

// 2. Hover effects
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => hoverBox.style.backgroundColor = '#ffd');
hoverBox.addEventListener('mouseout', () => hoverBox.style.backgroundColor = '');

// 3. Keypress detection
document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 4. Double-click secret action
const dblBox = document.getElementById('dblBox');
dblBox.addEventListener('dblclick', () => alert('🎉 Secret unlocked! 🎉'));

// 5. Image gallery prev/next
const images = Array.from(document.querySelectorAll('.gallery-img'));
let current = 0;
images.forEach((img, idx) => { if(idx !== 0) img.style.display = 'none'; });

document.getElementById('prev').addEventListener('click', () => {
  images[current].style.display = 'none';
  current = (current - 1 + images.length) % images.length;
  images[current].style.display = '';
});

document.getElementById('next').addEventListener('click', () => {
  images[current].style.display = 'none';
  current = (current + 1) % images.length;
  images[current].style.display = '';
});

// 6. Accordion toggle
document.querySelectorAll('.accordion').forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

// 7. Form validation
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

form.addEventListener('submit', (e) => {
  let valid = true;

  // Email check
  if (email.value.trim() === '') {
    valid = false;
    emailError.textContent = 'Email is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    valid = false;
    emailError.textContent = 'Invalid email format.';
  } else {
    emailError.textContent = '';
  }

  // Password check
  if (password.value.length < 8) {
    valid = false;
    passError.textContent = 'Password must be at least 8 characters.';
  } else {
    passError.textContent = '';
  }

  if (!valid) e.preventDefault();
});

// Real-time password feedback
password.addEventListener('input', () => {
  passError.textContent = password.value.length < 8 ? 'Too short.' : '';
});
