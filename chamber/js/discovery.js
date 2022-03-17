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
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let place = document.createElement("p");
    let death = document.createElement("p");
    let protrait = document.createElement('img');

    h2.innerHTML = `${business.name}`;
    p.innerHTML = `Phone Number: ${business.phone}`;
    place.innerHTML = `Address: ${business.address}`;
    death.innerHTML = `Website: ${business.web}`;
    protrait.setAttribute('src', business.logo);
    protrait.setAttribute('alt',`Portrait of ${business.name}`);
    protrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(place);
    card.appendChild(death);
    card.appendChild(protrait);

    cards.appendChild(card);

  }