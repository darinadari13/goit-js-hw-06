const button = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  outputColor.textContent = color;
}

button.addEventListener('click', changeBackgroundColor);