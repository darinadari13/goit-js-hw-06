const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', e => {
  e.preventDefault();

  if (e.target.value.length === 6) {
    inputValue.classList.toggle('valid')
  } else {
    inputValue.classList.toggle('invalid');
  }
})