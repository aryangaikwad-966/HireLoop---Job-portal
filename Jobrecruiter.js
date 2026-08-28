

// Store job listings (in real app -> from DB)
let jobs = [
  { title: "Full Stack Developer", status: "Live", applicants: 12 },
  { title: "UI/UX Designer", status: "Paused", applicants: 5 }
];

const jobTable = document.querySelector("table tbody");

// Function to display jobs in table
function renderJobs() {
  jobTable.innerHTML = "";
  jobs.forEach((job, index) => {
    jobTable.innerHTML += `
      <tr>
        <td>${job.title}</td>
        <td><span class="badge bg-${job.status === "Live" ? "success" : "secondary"}">${job.status}</span></td>
        <td>${job.applicants}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="editJob(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteJob(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}
renderJobs();

// Delete a job
function deleteJob(index) {
  if (confirm("Are you sure to delete this job?")) {
    jobs.splice(index, 1);
    renderJobs();
  }
}

// Edit a job (simple alert, later can open modal)
function editJob(index) {
  let newTitle = prompt("Edit job title:", jobs[index].title);
  if (newTitle) {
    jobs[index].title = newTitle;
    renderJobs();
  }
}

// Handle posting a new job (from modal form)
document.querySelector("#postJobModal form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.querySelector("input[type=text]").value;
  const salary = this.querySelectorAll("input")[1].value;
  const location = this.querySelectorAll("input")[2].value;

  jobs.push({ title, status: "Live", applicants: 0 });
  renderJobs();
  alert("Job Posted Successfully!");
  this.reset();
  bootstrap.Modal.getInstance(document.getElementById("postJobModal")).hide();
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

