/**
 * .card_stack is the umbrella element that sets animation state with .initial or .loop classes
 *
 * @returns .card_stack element
 */
const getCardStack = () => (
  document.querySelector('.card_stack')
);

/**
 * Starts card animations that 'loops' once by adding a loop class
 */
const startCardLoopAnimation = () => {
  // remove specific initial styles used for page load, we're looping now
  getCardStack().classList.remove('initial');
  // adding this loop class will start loop animations
  getCardStack().classList.add('loop');
};

/**
 * When done with loop animations, remove the loop class so loop animations can be re-run
 */
getCardStack().addEventListener('animationend', () => {
  getCardStack().classList.remove('loop');
});

/**
 * These tab button and section values should match the html values
 */
const ABOUT_SECTION_SELECTOR = '.about.section';
const ABOUT_BUTTON_SELECTOR = '.about_button';
const ABOUT_BODY_CLASS = 'about_active';
const WORK_SECTION_SELECTOR = '.work.section';
const WORK_BUTTON_SELECTOR = '.work_button';
const WORK_BODY_CLASS = 'work_active';
const DND_SECTION_SELECTOR = '.dnd.section';
const DND_BUTTON_SELECTOR = '.dnd_button';
const DND_BODY_CLASS = 'dnd_active';

/**
 * Convenient maps for adding click listeners to each button
 */
const buttonMaps = [
  {
    bodyClass: ABOUT_BODY_CLASS,
    buttonSectionSelector: ABOUT_SECTION_SELECTOR,
    buttonSelector: ABOUT_BUTTON_SELECTOR,
  },
  {
    bodyClass: WORK_BODY_CLASS,
    buttonSectionSelector: WORK_SECTION_SELECTOR,
    buttonSelector: WORK_BUTTON_SELECTOR,
  },
  {
    bodyClass: DND_BODY_CLASS,
    buttonSectionSelector: DND_SECTION_SELECTOR,
    buttonSelector: DND_BUTTON_SELECTOR,
  },
];

/**
 * When a tab button is clicked, go to that section and fire all animations
 */
buttonMaps.forEach(({
  bodyClass, buttonSectionSelector, buttonSelector,
}) => {
  const buttonElement = document.querySelector(buttonSelector);
  buttonElement.addEventListener('click', () => {
    if (buttonElement.classList.contains('active')) {
      return;
    }
    // disable tab buttons during animation
    document.querySelectorAll('.tab_button').forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.disabled = true;
    });
    // remove whatever is active in body right now
    const bodyElement = document.querySelector('body');
    bodyElement.classList.remove(...bodyElement.classList);
    bodyElement.classList.add(bodyClass);
    // start animations
    startCardLoopAnimation();
    // in the middle of the animation @loop_animation_duration, toggle visibility of the sections
    setTimeout(() => {
      // re-enable tab buttons
      document.querySelectorAll('.tab_button').forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.disabled = false;
      });
      // remove all active classes attached to tab buttons and section
      document.querySelectorAll('.tab_button, .section').forEach((element) => {
        element.classList.remove('active');
      });
      // add active classes to the selected tab button and section
      document.querySelector(buttonSectionSelector).classList.add('active');
      document.querySelector(buttonSelector).classList.add('active');
    }, 500);
  });
});
