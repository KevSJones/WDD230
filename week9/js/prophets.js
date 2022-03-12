const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);
  const prophets = jsonObject['prophets'];
  prophets.forEach(displayProphets);
  });
  

  function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let place = document.createElement("p");
    let death = document.createElement("p");
    let protrait = document.createElement('img');

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date of birth: ${prophet.birthdate}`;
    place.innerHTML = `Birthplace: ${prophet.birthplace}`;
    death.innerHTML = `Date passed away: ${prophet.death}`;
    protrait.setAttribute('src', prophet.imageurl);
    protrait.setAttribute('alt',`Portrait of ${prophet.name} ${prophet.lastname}`);
    protrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(place);
    card.appendChild(death);
    card.appendChild(protrait);

    cards.appendChild(card);

  }