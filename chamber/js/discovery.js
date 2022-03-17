const requestURL = 'https://kevsjones.github.io/wdd230/chamber/data.json';

const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);
  const businesses = jsonObject['businesses'];
  businesses.forEach(displayBusiness);
  });
  

  function displayBusiness(business) {
    let card = document.createElement('section');
    let name = document.createElement("h2");
    let phone = document.createElement("p");
    let address = document.createElement("p");
    let web = document.createElement("a");
    let space = document.createElement("p")
    let logo = document.createElement('img');

    name.innerHTML = `${business.name}`;
    phone.innerHTML = `Phone Number: ${business.phone}`;
    address.innerHTML = `Address: ${business.address}`;
    web.innerHTML = `Website: ${business.web}`;
    space.innerHTML = ``;
    web.setAttribute('href', business.web);
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt',`Portrait of ${business.name}`);
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