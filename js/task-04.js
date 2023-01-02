
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action = "decrement"]');
const buttonIncrement = document.querySelector('button[data-action = "increment"]');
let value = document.querySelector('#value');



const handleButtonDecrement = e => {
  e.preventDefault();

  counterValue--;
  updateDisplay()

}

const handleButtonIncrement = e => {
  e.preventDefault();

  counterValue++;
  updateDisplay()
}

function updateDisplay() {
  value.innerHTML = counterValue;
};

buttonDecrement.addEventListener('click', handleButtonDecrement);
buttonIncrement.addEventListener('click', handleButtonIncrement);