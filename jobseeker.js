// ================= JOB SEARCH FEATURE =================

// sample jobs data
const jobs = [
  { id: 1, title: "Frontend Developer", exp: 2, package: 40, location: "Pune", company: "Google" },
  { id: 2, title: "Backend Developer", exp: 4, package: 10, location: "Bangalore", company: "Meta" },
  { id: 3, title: "Full Stack Developer", exp: 4, package: 75, location: "Mumbai", company: "Amazon" },
  { id: 4, title: "Intern - Web Developer", exp: 0, package: 3, location: "Remote", company: "StartupX" },
  { id: 5, title: "React Developer", exp: 1, package: 5, location: "Mumbai", company: "Infosys" },
  { id: 6, title: "Node.js Engineer", exp: 3, package: 8, location: "Delhi", company: "TCS" }
];

// update salary and exp values in UI
document.getElementById("salaryRange").addEventListener("input", function(e){
  document.getElementById("salaryValue").innerText = e.target.value;
});
document.getElementById("expRange").addEventListener("input", function(e){
  document.getElementById("expValue").innerText = e.target.value;
});

// when search form is submitted
document.getElementById("jobSearchForm").addEventListener("submit", function(e){
  e.preventDefault();

  // get values from form
  let role = document.getElementById("searchRole").value.toLowerCase();
  let location = document.getElementById("searchLocation").value.toLowerCase();
  let salary = parseInt(document.getElementById("salaryRange").value);
  let exp = parseInt(document.getElementById("expRange").value);

  // filter jobs based on user input
  let results = jobs.filter(function(job){
    let checkRole = role === "" || job.title.toLowerCase().includes(role);
    let checkLocation = location === "" || job.location.toLowerCase().includes(location);
    let checkSalary = job.package <= salary;
    let checkExp = job.exp <= exp;
    return checkRole && checkLocation && checkSalary && checkExp;
  });

  // show results
  let output = "";
  if(results.length === 0){
    output = `<div class="alert alert-danger">No jobs found 😢</div>`;
  } else {
    results.forEach(function(job){
      output += `
        <div class="card mb-2">
          <div class="card-body">
            <h5>${job.title}</h5>
            <p><b>Company:</b> ${job.company} | <b>Location:</b> ${job.location} | <b>Exp:</b> ${job.exp} yrs | <b>Salary:</b> ₹${job.package} LPA</p>
            <button class="btn btn-sm btn-success" onclick="saveJob(${job.id})">Save Job</button>
          </div>
        </div>
      `;
    });
  }

  document.getElementById("searchResults").innerHTML = output;
});


// ================= SAVED JOBS FEATURE =================

// load saved jobs (from localStorage or default data)
let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [
  { title: "Frontend Developer", company: "Google", salary: "40 LPA" },
  { title: "Backend Developer", company: "Meta", salary: "12–15 LPA" }
];

let savedJobsContainer = document.getElementById("savedJobs");

// function to display saved jobs
function renderSavedJobs(){
  savedJobsContainer.innerHTML = "";
  savedJobs.forEach(function(job, index){
    savedJobsContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <p class="card-text">@${job.company} · ${job.salary}</p>
            <button class="btn btn-outline-danger btn-sm remove-job" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `;
  });
}
renderSavedJobs();

// remove job when clicked
savedJobsContainer.addEventListener("click", function(e){
  if(e.target.classList.contains("remove-job")){
    let idx = e.target.dataset.index;
    savedJobs.splice(idx, 1);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    renderSavedJobs();
  }
});

// function to save a job into saved jobs list
function saveJob(id){
  let job = jobs.find(function(j){ return j.id === id; });
  if(!job) return;

  let newJob = {
    title: job.title,
    company: job.company,
    salary: `${job.package} LPA`
  };

  // check duplicate
  let already = savedJobs.some(function(j){
    return j.title === newJob.title && j.company === newJob.company;
  });

  if(already){
    alert("Job already saved!");
    return;
  }

  savedJobs.push(newJob);
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  renderSavedJobs();
  alert("Job saved successfully!");
}
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


