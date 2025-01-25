// Profile Form Submission Logic
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
