console.log('hello');
const petEl = document.getElementById('pets');
const termButton = document.getElementById('term-btn');

//way 1
// const getPets = async () => {
//   const res = await fetch('/api/pets', {
//     method: 'GET',

//   })
//   const json = await res.json();
//   console.log(json);
//   return json;

// }

//way 2
const getPets = () =>
  fetch('/api/pets')
    .then((res) => res.json())
    .then((data) => data);


const renderPet = (pet) => {
  const cardEl = document.createElement('div');
  const cardImageEl = document.createElement('img');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardImageEl.classList.add('image', 'p-5');
  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardImageEl.setAttribute('src', pet.image_url);
  cardBodyTitle.innerHTML = pet.name;
  cardBodyEl.innerText = pet.description;
  cardEl.appendChild(cardBodyTitle);
  cardEl.appendChild(cardBodyEl);
  cardEl.appendChild(cardImageEl);
  petEl.appendChild(cardEl);
};

const buttonHandler = () =>
  getPets().then((response) => response.forEach((item) => renderPet(item)));

termButton.addEventListener('click', buttonHandler);
