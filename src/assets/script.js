/**
 * https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
 * see which animation end event we should listen to
 * if it's unsupported or they don't want animations, then don't run animations
 * @returns {string} supported animation end event, or null if we should not animate
 */
const getSupportedAnimationEndEvent = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery || mediaQuery.matches) {
    // this means they prefer no motion animations
    return null;
  }

  const element = document.createElement('fakeelement');

  const animationVendorMap = {
    // style name: event name
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  // test the browser
  const supportedAnimation = Object.entries(animationVendorMap).find(([styleName]) => (
    element.style[styleName] !== undefined
  ));

  return supportedAnimation && supportedAnimation[1] ? supportedAnimation[1] : null;
};

const animationEndEvent = getSupportedAnimationEndEvent();

/**
 * .card_stack is the umbrella element that sets animation state with .initial or .loop classes
 *
 * @returns {element} .card_stack element
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
  // animate if we can
  if (animationEndEvent) {
    // adding this loop class will start loop animations
    getCardStack().classList.add('loop');
  }
};

/**
 * When done with loop animations, remove the loop class so loop animations can be re-run
 */
if (animationEndEvent) {
  getCardStack().addEventListener(animationEndEvent, () => {
    getCardStack().classList.remove('loop');
  });
}

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
    if (buttonElement.classList.contains('active') || getCardStack().classList.contains('loop')) {
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
    // start animations, function will handle if we shouldn't animate
    startCardLoopAnimation();
    // in the middle of the animation @loop_animation_duration, toggle visibility of the sections
    // skip delaying if we're not animating
    const delay = animationEndEvent ? 500 : 0;
    setTimeout(() => {
      // remove all active classes attached to tab buttons and section
      document.querySelectorAll('.tab_button, .section').forEach((element) => {
        element.classList.remove('active');
      });
      // add active classes to the selected tab button and section
      document.querySelector(buttonSectionSelector).classList.add('active');
      document.querySelector(buttonSelector).classList.add('active');
      // re-enable tab buttons
      document.querySelectorAll('.tab_button').forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.disabled = false;
      });
    }, delay);
  });
});
