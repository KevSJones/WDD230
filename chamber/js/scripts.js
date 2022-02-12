function toggleMenu() {
  document
    .getElementById("primaryNav")
    .classList.toggle("open");
  document
    .getElementById("hamburgerBtn")
    .classList.toggle("open");
}
const x = document.getElementById(
  "hamburgerBtn"
);
x.onclick = toggleMenu;


//  Reminder message
const today = new Date();
console.log(today);
  const dayNumber = today.getDay();
  console.log(dayNumber);

  const element = document.getElementById("reminder");
  
  if (dayNumber == 6) {
    element.classList.add("showme");
  } else {
    element.classList.add("hideme");
  }

  let date = new Date();
  
  document.getElementById(
    "date"
  ).textContent = date;