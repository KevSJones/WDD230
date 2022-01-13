const d = new Date();
const year = d.getFullYear();

document.querySelector(
  "currentyear"
).textContent = year;
document.getElementById(
  "lastupdated"
).textContent =
  "Last Updated: " +
  document.lastModified;
