window.onload = function () {
    // Toggle Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
  
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  
    // Fade out the "Search. Learn. Grow." text after 10 seconds
    setTimeout(() => {
      document.getElementById('fadeText').style.opacity = 0;
    }, 10000);
  
    // Profile Popup
    const profile = document.getElementById("profile");
    const profilePopup = document.getElementById("profile-popup");
    const closePopup = document.getElementById("close-popup");
  
    const user = {
        name: "John Doe",
        bio: "A passionate learner eager to explore new skills.",
        skillsHave: ["Photography", "Dance", "Art"],
        skillsWant: ["Music", "Coding", "Yoga"]
      };
    
      profile.addEventListener("click", () => {
        document.getElementById("user-name").innerText = user.name;
        document.getElementById("user-bio").innerText = user.bio;
        document.getElementById("skills-have").innerHTML = user.skillsHave.map(skill => <li>${skill}</li>).join("");
        document.getElementById("skills-want").innerHTML = user.skillsWant.map(skill => <li>${skill}</li>).join("");
    
        profilePopup.style.display = "block";
      });
    
      closePopup.addEventListener("click", () => {
        profilePopup.style.display = "none";
      });
    };
