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


function displayCards(temple) {
  let card = document.createElement('section');
  let name = document.createElement("h2");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let web = document.createElement('a');
  let locale = document.createElement("p");
  let services = document.createElement("p");
  let space = document.createElement("p");
  let image = document.createElement('img');

  card.setAttribute("id", "tableTitle");
  name.innerHTML = `${temple.name}`;

  phone.innerHTML = `Phone Number: ${temple.phone}`;
  address.innerHTML = `Address: ${temple.address}`;
  web.innerHTML = `Website: ${temple.web}`;
  locale.innerHTML = `Location Info: ${temple.locale}`;
  services.innerHTML = `Services; ${temple.services}`;
  space.innerHTML = ``;
  web.setAttribute('href', temple.web);
  image.setAttribute('src', temple.image);
  image.setAttribute('alt', `Picture of ${temple.name}`);
  image.setAttribute('href', `${temple.web}`)
  image.setAttribute('loading', 'lazy');

  card.appendChild(name);
  card.appendChild(phone);
  card.appendChild(address);
  card.appendChild(web);
  card.appendChild(space);
  card.appendChild(image);

  cards.appendChild(card);

}

function displayList(temple) {
  let list = document.createElement('section');
  let name = document.createElement("h3");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let web = document.createElement("a");
  let space = document.createElement("p")


  list.setAttribute("id", "tableTitle");
  name.innerHTML = `${temple.name}`;
  phone.innerHTML = `Phone Number: ${temple.phone}`;
  address.innerHTML = `Address: ${temple.address}`;
  web.innerHTML = `Website: ${temple.web}`;
  space.innerHTML = ``;
  web.setAttribute('href', temple.web);

  list.appendChild(name);
  list.appendChild(phone);
  list.appendChild(address);
  list.appendChild(web);
  list.appendChild(space);

  lists.appendChild(list);

}

function listFunction() {
  document.getElementById('listBtn').add('.active');
  document.querySelector('.view').remove('.cards');
  document.querySelector('.list').add('.active');

}


function gridFunction() {
  document.getElementById('gridBtn').style.color = "#ffc65c";
  document.querySelector('.view').remove('.list');
  document.querySelector('.view').add('.list');
}