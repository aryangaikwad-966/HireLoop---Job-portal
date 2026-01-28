// ======================= Admin Dashboard JS =======================

// Example logs
let logs = [
  "[08:45] User 'john@example.com' registered",
  "[09:00] Admin approved job 'UI Designer'",
  "[10:15] Recruiter 'techcorp' posted new job"
];

const logList = document.querySelector(".card-body ul");

// Function to render logs
function renderLogs() {
  logList.innerHTML = "";
  logs.forEach(log => {
    logList.innerHTML += `<li class="list-group-item small">${log}</li>`;
  });
}
renderLogs();

// Add new log entry
function addLog(message) {
  logs.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
  renderLogs();
}

// Handle Maintenance Mode toggle
document.getElementById("maintenanceMode").addEventListener("change", function () {
  if (this.checked) {
    addLog("⚠️ Maintenance mode enabled");
    alert("Maintenance mode ON");
  } else {
    addLog("✅ Maintenance mode disabled");
  }
});

// Handle Registration toggle
document.getElementById("allowRegistration").addEventListener("change", function () {
  if (!this.checked) {
    addLog("❌ User registration disabled");
  } else {
    addLog("✅ User registration enabled");
  }
});
//dark mode
// ======================= Common Features =======================

// Toggle Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    this.innerHTML = '<i class="fas fa-sun"></i>'; // switch icon
  } else {
    this.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Notifications
let notifCount = 3;
const notifBtn = document.getElementById("notifBtn");
const notifBadge = document.getElementById("notifCount");

notifBtn.addEventListener("click", function () {
  if (notifCount > 0) {
    alert(`You have ${notifCount} new notifications!`);
    notifCount = 0;
    notifBadge.style.display = "none";
  } else {
    alert("No new notifications ✅");
  }
});
