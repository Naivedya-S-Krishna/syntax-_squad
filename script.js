document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }
  if (email === 'user@example.com' && password === 'password123') {
    alert('Login successful!');
  } else {
    alert('Invalid email or password.');
  }
});
