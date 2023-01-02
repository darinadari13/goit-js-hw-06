const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

function makeList(text) {
  const listItemEl = document.createElement('li');

  listItemEl.classList.add('item');
  listItemEl.textContent = text;

  return listItemEl
}

const elementItem = ingredients.map(text => {
  return makeList(text)
});


listEl.append(...elementItem);