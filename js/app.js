let btn = document.querySelector('.sign-btn');
let emailInput = document.querySelector('.input');
let form = document.querySelector('form');
let emailContainer = document.querySelector('.form-container');

function isValid(email) {
  let regex = /[^@\s]+@[^@\s]+/;
  let result = email.match(regex);
  if (result) {
    return true;
  }
  return false;
}

function addValidationMsg(msg, cssClass) {
  let inputForm = document.querySelector('.sign-up');
  let oldValidation = inputForm.querySelector('.validation');
  let oldIconError = inputForm.querySelector('.icon-error');

  if (oldValidation) {
    oldValidation.remove();
    emailContainer.classList.remove('not-valid');
  }

  if (oldIconError) {
    oldIconError.remove();
  }

  let paragraph = document.createElement('p');
  paragraph.innerHTML = msg;
  paragraph.classList.add('validation', cssClass);
  form.appendChild(paragraph);
}

function remStyle() {
  let olsSelectedStyle = document.querySelector('.selected');

  if (olsSelectedStyle) {
    emailContainer.classList.remove('selected');
  }
}

emailInput.addEventListener('click', () => {
  emailContainer.classList.add('selected');
});

emailInput.addEventListener('focusout', () => {
  emailContainer.classList.remove('selected');
});


btn.addEventListener('click', (e) => {
  e.preventDefault();
  remStyle();

  if (isValid(emailInput.value)) {
    return addValidationMsg('Successfully sent!', 'message');
  }
  addValidationMsg('Please provide a valid email', 'error-message');

  emailContainer.classList.add('not-valid');

  let iconError = document.createElement('img');
  iconError.setAttribute('src', 'images/icon-error.svg');
  iconError.setAttribute('alt', 'Error icon');
  iconError.classList.add('icon-error');
  form.appendChild(iconError);
});
