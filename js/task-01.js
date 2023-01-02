
const listItems = document.querySelectorAll("#categories > .item");
const numberOfCastegories = `Number of categories: ${listItems.length}`;
console.log(numberOfCastegories);

const arrayListItems = Array.from(document.querySelectorAll("#categories > .item"));

const categories = arrayListItems.forEach(el => {
  const h2 = el.querySelector("h2")
  console.log(`Category: ${h2.textContent}`);
  const li = Array.from(el.querySelectorAll("ul > li"))
  console.log(`Elements: ${li.length}`)
});





