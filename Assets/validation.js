const actionsBtnElements = document.querySelectorAll('.form-actions__btn');
const openFormEl = document.getElementById('open-form');
const backdropEl = document.querySelector('.backdrop');
const formEl = document.querySelector('form');
const nameInputEl = document.getElementById('name');
const emailInputEl = document.getElementById('email');
const messageInputEl = document.getElementById('message');
const aditionalInfoEl = document.querySelector('.aditional-info');
const regex = /[^a-z \'']/gi;
const regExEmail = /\S+@\S+\.\S+/;

const toggleFormHandler = () => {
  formEl.classList.toggle('form-visible');
  backdropEl.classList.toggle('backdrop-visible');
  aditionalInfoEl.classList.toggle('footer-visible');
};

const resetNameInput = () => {
  nameInputEl.value = '';
};

openFormEl.addEventListener('click', toggleFormHandler);
actionsBtnElements[1].addEventListener('click', toggleFormHandler);
backdropEl.addEventListener('click', toggleFormHandler);
formEl.addEventListener('submit', (e) => {
  if (
    nameInputEl.value.trim() === '' ||
    emailInputEl.value.trim() === '' ||
    messageInputEl.value.trim() === ''
  ) {
    e.preventDefault();
    alert('Please provide all the informations');
  } else if (regex.test(nameInputEl.value)) {
    e.preventDefault();
    alert('Name should contain letters only');
    resetNameInput();
  } else if (nameInputEl.value.length <= 2) {
    e.preventDefault();
    alert('Name should have more than 2 characters');
    resetNameInput();
  }
});
