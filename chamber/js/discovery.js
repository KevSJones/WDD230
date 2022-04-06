const requestURL = 'https://kevsjones.github.io/wdd230/chamber/temples.json';

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
//function gridFunction() {
//document.getElementById('gridBtn').style.color = "black";
//document.querySelector('.view').remove('.cards');
//document.querySelector('.view').add('.list');
//}

/*listview.addEventListener('click', listFunction);
function listFunction() {
  var x = document.getElementById('listBtn')
  if (x.style.display === "none"); {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*  const showgrid = document.querySelector('.cards');

document.getElementById("listBtn").addEventListener("click", function(){
  element.classList.add(".nope");
  element.classList.remove("hide")

 
});

document.getElementById("gridBtn").addEventListener("click", function(){
  element.classList.add("show");
});

/*

const list = document.querySelector(".listBtn");
const grid = document.querySelector(".gridBtn");
  let container =  document.querySelector(".listGrid");

  list.addEventListener("click", () => {
    list.classList.add("list");
    console.log(Date)
    list.classList.add("listGrid");
    document.getElementById("tableTitle").style.display = "grid";
  });

  grid.addEventListener("click", () => {
    grid.classList.remove("listGrid");
    grid.classList.add("gridCard");
    document.getElementById("tableTitle").style.display = "none";
  });
  
  /*const jsonfile = "https://kevsjones.github.io/wdd230/chamber/data.json";
fetch(jsonfile)
  .then((response) => response.json())
  .then((jsObject) => {
    
    let container = document.querySelector("div.listGrid");
    let section = document.createElement('section');
    let Name = document.createElement('h2');
    let Logo = document.createElement('h2');
    let Type = document.createElement('h2');
    let Address = document.createElement('h2');
    let Phone = document.createElement('h2');
    let Link = document.createElement('h2');

    section.setAttribute("id", "tableTitle");
    Logo.setAttribute("id", "logoImage");
    Address.setAttribute("id", "localAddress");
    Name.textContent = "Name";
    Logo.textContent = "Logo";
    Type.textContent = "Type";
    Address.textContent = "Address";
    Phone.textContent = "Phone";
    Link.textContent = "Link";

    section.appendChild(Name);
    section.appendChild(Logo);
    section.appendChild(Type);
    section.appendChild(Address);
    section.appendChild(Phone);
    section.appendChild(Link);
    container.appendChild(section);
    for (let i = 0; i < jsObject.length; i++ ) {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let type = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
    
        card.setAttribute("class", "card");
        name.setAttribute("class", "businessName");
        type.setAttribute("class", "businessType");
        address.setAttribute("class", "businessAddress");
        phone.setAttribute("class", "businessPhone");
        website.setAttribute("class", "businessSite");

        name.textContent = jsObject[i].Name;
        logo.setAttribute('src', jsObject[i].Logo);
        logo.setAttribute('alt', jsObject[i].name);
        type.textContent = jsObject[i].Type;
        address.textContent = jsObject[i].Address;
        phone.textContent = jsObject[i].Phone;
        website.setAttribute("href", jsObject[i].Website)
        website.textContent = "Website";

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(type);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    }
  });


  


  function listView(){
    let container =  document.querySelector(".gridCard");
    container.classList.remove("gridCard");
    container.classList.add("listGrid");
    document.getElementById("tableTitle").style.display = "grid";
    container.style.display = "block";
    document.getElementById("tableTitle").style.display = "grid";
    let cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "grid";
    }
  }

  function gridView(){
    let container =  document.querySelector(".listGrid");
    container.classList.remove("listGrid");
    container.classList.add("gridCard");
    document.getElementById("tableTitle").style.display = "none";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.getElementById("tableTitle").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "block";
    }
  }*/