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
// dates

let day = new Date();
let year = day.getFullYear();
document.getElementById(
  "currentYear"
).textContent = year;

//  Reminder message
const today = new Date();
console.log(today);
  const dayNumber = today.getDay();
  console.log(dayNumber);

  const element = document.getElementById("reminder");
  
  if (dayNumber == 1) {
    element.classList.add("showme");
  } else {
    element.classList.add("hideme");
  }
// date
  const datefieldUS = document.querySelector("#date");

  const now = new Date();
  
  const fulldateUS = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  
  datefieldUS.innerHTML = `${fulldateUS}`; 
  // wind chill 
  const tempNumber = parseFloat(document.getElementById("temp").textContent);
  console.log(tempNumber)
  const windNumber = parseFloat(document.getElementById("wind").textContent);
  console.log(windNumber)

  let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(windNumber,0.16)) + (0.4275 * tempNumber * Math.pow(windNumber, 0.16));
  windchill = Math.round(windchill);
  console.log(windchill)

  if(tempNumber <=50 && windNumber >3) {
    document.getElementById("chill").textContent = "Wind Chill is "+windchill+"\xB0F";
  } else {
      document.getElementById("chill").textContent = "N/A"
  }
  // lazy load
