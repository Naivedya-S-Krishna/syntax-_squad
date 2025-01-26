// Profile Form Submission Logic
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, display their info
        document.getElementById('user-email').textContent = user.email;
        // Get additional user info from Firestore (if stored)
        db.collection('users').doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                document.getElementById('user-mobile').textContent = doc.data().mobile || 'Not provided';
            }
        }).catch((error) => {
            console.error("Error getting user data: ", error);
        });
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'login.html';
    }
});

// Log out the user
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html'; // Redirect to login page after logging out
    }).catch((error) => {
        console.error("Error logging out: ", error);
    });
}


const profileForm = document.getElementById('profileForm');

profileForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const skillsHave = document.getElementById('skillsHave').value.trim();
  const skillsLearn = document.getElementById('skillsLearn').value.trim();
  const mobileNumber = document.getElementById('mobileNumber').value.trim();

  const errorMessage = document.getElementById('error-message');

  // Validate required fields
  if (!name || !bio || !skillsHave || !skillsLearn) {
    errorMessage.textContent = "Please fill in all required fields!";
    return;
  }

  // Optional: Validate mobile number if entered
  if (mobileNumber && !/^[0-9]{10}$/.test(mobileNumber)) {
    errorMessage.textContent = "Enter a valid 10-digit mobile number.";
    return;
  }

  // If validation passes
  errorMessage.textContent = "";
  alert("Profile saved successfully!");

  // Optional: Save the data to a database or localStorage (Example)
  const profileData = {
    name,
    bio,
    skillsHave,
    skillsLearn,
    mobileNumber,
  };
  console.log("Profile Data:", profileData);

  // Redirect or clear the form
  profileForm.reset();
});
