const requestURL = 'https://kevsjones.github.io/wdd230/chamber/data.json';

const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayCards);
  });

const lists = document.querySelector('.list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayList);
  });


function displayCards(business) {
  let card = document.createElement('section');
  let name = document.createElement("h2");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let web = document.createElement("a");
  let space = document.createElement("p")
  let logo = document.createElement('img');

  card.setAttribute("id", "tableTitle");
  name.innerHTML = `${business.name}`;
  phone.innerHTML = `Phone Number: ${business.phone}`;
  address.innerHTML = `Address: ${business.address}`;
  web.innerHTML = `Website: ${business.web}`;
  space.innerHTML = ``;
  web.setAttribute('href', business.web);
  logo.setAttribute('src', business.logo);
  logo.setAttribute('alt', `Portrait of ${business.name}`);
  logo.setAttribute('href', `${business.web}`)
  logo.setAttribute('loading', 'lazy');

  card.appendChild(name);
  card.appendChild(phone);
  card.appendChild(address);
  card.appendChild(web);
  card.appendChild(space);
  card.appendChild(logo);

  cards.appendChild(card);

}

function displayList(business) {
  let list = document.createElement('section');
  let name = document.createElement("h3");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let web = document.createElement("a");
  let space = document.createElement("p")


  list.setAttribute("id", "tableTitle");
  name.innerHTML = `${business.name}`;
  phone.innerHTML = `Phone Number: ${business.phone}`;
  address.innerHTML = `Address: ${business.address}`;
  web.innerHTML = `Website: ${business.web}`;
  space.innerHTML = ``;
  web.setAttribute('href', business.web);

  list.appendChild(name);
  list.appendChild(phone);
  list.appendChild(address);
  list.appendChild(web);
  list.appendChild(space);

  lists.appendChild(list);

}

