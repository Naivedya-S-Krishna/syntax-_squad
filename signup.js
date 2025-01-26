// Sign-Up Form Validation
const signupForm = document.getElementById('signupForm');
// Your Firebase configuration (find it in your Firebase Console)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mobileNumber = document.getElementById('mobileNumber').value.trim();

  const errorMessage = document.getElementById('error-message');

  // Validation
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
  } else if (!/^[0-9]{10}$/.test(mobileNumber) && mobileNumber !== "") {
    errorMessage.textContent = "Enter a valid 10-digit mobile number.";
  } else {
    errorMessage.textContent = "";

    // Redirect to Profile Creation Page after successful validation
    window.location.href = "profile.html"; // Redirect to the profile page
  }
});
