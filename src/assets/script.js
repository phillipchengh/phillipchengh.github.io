const getCardStack = () => (
  document.querySelector('.card_stack')
);

document.querySelector('#test').addEventListener('click', () => {
  getCardStack().classList.remove('initial');
  getCardStack().classList.add('loop');
});

getCardStack().addEventListener('animationend', () => {
  getCardStack().classList.remove('loop');
});
