const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Dummy credentials for validation
const validUsername = "user123";
const validPassword = "pass123";

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the credentials match
  if (username === validUsername && password === validPassword) {
    alert('Login successful!');
    // Redirect to the welcome page
    window.location.href = "welcome.html";
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});
// Modal Elements
const registerModal = document.getElementById('registerModal');
const openRegisterModal = document.getElementById('openRegisterModal');
const closeRegisterModal = document.querySelector('.modal .close');

// Open the Register Modal
openRegisterModal.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  registerModal.style.display = 'flex';
});

// Close the Register Modal
closeRegisterModal.addEventListener('click', () => {
  registerModal.style.display = 'none';
});

// Close the modal if clicked outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === registerModal) {
    registerModal.style.display = 'none';
  }
});

// Register Form Validation (Optional)
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    alert("Registration successful!");
    registerModal.style.display = 'none';
  }
});
