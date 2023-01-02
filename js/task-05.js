const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', e => {
  e.preventDefault;

  if (userNameInput.value === '') {
    userNameOutput.textContent = 'Anonymous';

    return
  }

  userNameOutput.textContent = userNameInput.value;

})