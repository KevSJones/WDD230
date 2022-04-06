const requestURL = 'https://kevsjones.github.io/wdd230/final-project/temples.json';

const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayCards);
  });

const lists = document.querySelector('.list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayList);
  });


function displayCards(temples) {
  let card = document.createElement('section');
  let name = document.createElement("h2");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let locale = document.createElement("p");
  let services = document.createElement("p");
  let space = document.createElement("p");
  let image = document.createElement('img');

  card.setAttribute("id", "tableTitle");
  name.innerHTML = `${temple.name}`;

  phone.innerHTML = `Phone Number: ${temple.phone}`;
  address.innerHTML = `Address: ${temple.address}`;
  web.innerHTML = `Website: ${temple.web}`;
  space.innerHTML = ``;
  web.setAttribute('href', temple.web);
  image.setAttribute('src', temple.image);
  image.setAttribute('alt', `Portrait of ${temple.name}`);
  image.setAttribute('href', `${temple.web}`)
  image.setAttribute('loading', 'lazy');

  card.appendChild(name);
  card.appendChild(phone);
  card.appendChild(address);
  card.appendChild(web);
  card.appendChild(space);
  card.appendChild(logo);

  cards.appendChild(card);

}