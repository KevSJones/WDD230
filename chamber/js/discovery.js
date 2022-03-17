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
  

  function displayBusiness(buisines) {
    let card = document.createElement('section');
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let place = document.createElement("p");
    let death = document.createElement("p");
    let protrait = document.createElement('img');

    h2.innerHTML = `${business.name}`;
    p.innerHTML = `Date of birth: ${business.phone}`;
    place.innerHTML = `Birthplace: ${business.address}`;
    death.innerHTML = `Date passed away: ${business.web}`;
    protrait.setAttribute('src', business.imageurl);
    protrait.setAttribute('alt',`Portrait of ${business.name}`);
    protrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(place);
    card.appendChild(death);
    card.appendChild(protrait);

    cards.appendChild(card);

  }