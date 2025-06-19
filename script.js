// script.js
window.onload = () => document.getElementById("loader").style.display = "none";
document.getElementById("themeToggle").onclick = toggleDarkMode;

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const icon = document.querySelector("#themeToggle i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}

function applyBrand(color) {
  document.documentElement.style.setProperty('--accent', color);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function downloadReport() {
  const blob = new Blob(["Climate Report - Emissions Stable"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "report.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function highlightChart() {
  const canvas = document.getElementById("carbonChart");
  canvas.style.boxShadow = "0 0 20px var(--accent)";
  setTimeout(() => { canvas.style.boxShadow = ""; }, 1500);
}

function triggerRipple() {
  document.body.style.transition = "transform 0.2s ease";
  document.body.style.transform = "scale(1.01)";
  setTimeout(() => { document.body.style.transform = "scale(1)"; }, 150);
}

function showDescription() {
  alert("Magic Climate Intelligence is an interactive platform for monitoring emissions, energy efficiency, animations, and branded visualizations to promote environmental awareness.");
}

new Chart(document.getElementById("carbonChart").getContext("2d"), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Emissions (t)',
      data: [12000, 9500, 10200, 8700, 9400],
      backgroundColor: '#4e8cff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});