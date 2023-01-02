
const userInput = document.querySelector('#font-size-control');
const userOutput = document.querySelector('#text');

userInput.addEventListener('input', e => {
  e.preventDefault();
  userOutput.style.fontSize = e.target.value + 'px';
})