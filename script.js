// Initialize EmailJS with your public key
emailjs.init('VXJtCtdD8ygUEDRcJ'); // Your public key

const form = document.getElementById('contact-form'); // ✅ define form

// Mobile navbar toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('.navbar').appendChild(hamburger);

const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// LeetCode Stats API
fetch('https://leetcode-stats-api.herokuapp.com/Hassan_code')
  .then(response => response.json())
  .then(data => {
    document.getElementById('lc-rating').textContent = data.totalSolved;
    document.getElementById('lc-easy').textContent = data.easySolved;
    document.getElementById('lc-medium').textContent = data.mediumSolved;
    document.getElementById('lc-hard').textContent = data.hardSolved;
  });

// Codeforces API
fetch('https://codeforces.com/api/user.info?handles=2024kuec2011')
  .then(response => response.json())
  .then(data => {
    const user = data.result[0];
    document.getElementById('cf-rating').textContent = user.rating;
    document.getElementById('cf-maxrating').textContent = user.maxRating;
  });

// Contact form popup feedback
const popup = document.getElementById('popup-message');
const popupText = document.getElementById('popup-text');
const popupClose = document.getElementById('popup-close');

function showPopup(message, isError = false) {
  popupText.textContent = message;
  popup.style.backgroundColor = isError ? '#b22222' : '#008b8b'; // red for error, teal for success
  popup.classList.remove('hidden');
}

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// EmailJS submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_vnru49o', 'template_d9mx1sw', this)
    .then(() => {
      showPopup('Message sent! Thanks for contacting me.');
      form.reset();
    })
    .catch((error) => {
      showPopup('Oops! Something went wrong, please try again.', true);
      console.error('EmailJS error:', error);
    });
});
