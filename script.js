// Show a Bootstrap toast with a custom message
function showToast(message) {
  document.getElementById('toastMsg').textContent = message;
  var toast = new bootstrap.Toast(document.getElementById('loginToast'));
  toast.show();
}

// Handle Job Seeker login form submission
function loginseeker(event) {
  event.preventDefault();
  showToast("Login successful! Redirecting to Job Seeker Dashboard...");
  setTimeout(function() {
    window.location.href = "Jobseeker_dash.html";
  }, 2000);
}

// Handle Recruiter login form submission
function loginrecruiter(event) {
  event.preventDefault();
  showToast("Login successful! Redirecting to Recruiter Dashboard...");
  setTimeout(function() {
    window.location.href = "jobrecruiter_dash.html";
  }, 2000);
}

// Handle Admin login form submission
function loginadmin(event) {
  event.preventDefault();
  showToast("Login successful! Redirecting to Admin Dashboard...");
  setTimeout(function() {
    window.location.href = "Admin_dash.html";
  }, 2000);
}

// Add or remove 'scrolled' class to navbar on scroll for styling
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Clear all form fields when any modal is closed
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('hidden.bs.modal', function () {
    this.querySelectorAll('form').forEach(form => form.reset());
  });
});

// Loader overlay: Show loader, then fade out after page loads
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
    setTimeout(function() {
      document.getElementById('loader-overlay').style.display = 'none';
    }, 700); // matches the CSS transition
  }, 2500); // show logo for 2.5 seconds
}); // <-- Add this closing brace and parenthesis