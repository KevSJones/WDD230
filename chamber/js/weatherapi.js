const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f773736af542dcf1feeb6e39c290dc42";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  const currentTemp = document.querySelector("#current-temp");
  const weathericon = doumnet.querySelector("#weathericon");
  const caption = document.querySelector("figcaption");

  currentTemp.textContent =jsObject.main.temp.toFixed(0);
  weathericon.setAttribute("src", imgsrc);
  weathericon.setAttribute("alt", imgalt);
  caption.innerHTML = `Currently: ${imgalt}`;
  })

function capitalixe(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
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
}