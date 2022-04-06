//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?q=adelaide,AUs&appid=f773736af542dcf1feeb6e39c290dc42&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById("city").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;
   
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src=icon_path;
    

 });


 
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