// tab panel
function switchTab(tabb) {
    const bgImage = document.querySelector(".bg-cont");
    const heading = document.getElementById("hero-heading");
    const formBox = document.getElementById("form-box");
  
    document.querySelectorAll(".tabb").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.tabb[onclick*="${tabb}"]`).classList.add("active");
  
    const isMobile = window.innerWidth < 768;
  
    if (tabb === "login") {
      heading.textContent = "LOGIN TO YOUR ACCOUNT";
      bgImage.style.backgroundImage = isMobile
        ? "url('./assest/images/login-mob.png')"
        : "url('./assest/images/login-banner.png')";
      formBox.innerHTML = `
        <h2>Log in details</h2>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <div class="form-options">
          <div class="remember-sec">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="#" class="forgot-link" onclick="openModal()">Forgot your password?</a>
        </div>
        <a href="#" class="ls-btn">Login</a>
  
    
      `;
    } else {
      heading.textContent = "CREATE YOUR ACCOUNT";
      bgImage.style.backgroundImage = isMobile
        ? "url('./assest/images/reg-mob.png')"
        : "url('./assest/images/reg-banner.png')";
      formBox.innerHTML = `
        <h2>Sign up today</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <div class="form-options">
          <div class="terms-sec">
            <input type="checkbox" id="terms" />
            <label for="terms">
              I Agree To The <a href="#" class="tcs-p">Terms & Conditions</a> and
              <a href="#" class="tcs-p">Privacy Policy</a>.
            </label>
          </div>
          <img src="./assest/images/recaptcha.png" alt="">
        </div>
        <a href="#" class="ls-btn" onclick="showThankYouModal()">Sign Up</a>
      `;
    }
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    switchTab("login");
  });

// tab panel

//account created modal

  function showThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'flex';
  }

  function hideThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'none';
  }

//account created modal

//reset password modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Optional: Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
//reset password modal