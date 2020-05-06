const toggleMenuElement = document.getElementById('toggle');
const menuLineElements = toggleMenuElement.children;
const bannerElement = document.getElementById('banner');
const navigationMenuElement = document.getElementById('navigation');
const subbmitBtnElement = document.getElementById('submit-btn');

const toggleMenuHandler = () => {
  bannerElement.classList.toggle('move-left');
  menuLineElements[0].classList.toggle('first-line__active');
  menuLineElements[1].classList.toggle('second-line__active');
  navigationMenuElement.classList.toggle('navigation-visible');
};

toggleMenuElement.addEventListener('click', toggleMenuHandler);
