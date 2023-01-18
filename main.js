import './style.scss';

const hamburger = document.getElementById('hamburger');
const cancel = document.getElementById('cancel');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.add('links-show');
})

cancel.addEventListener('click', () => {
  links.classList.remove('links-show');
})
