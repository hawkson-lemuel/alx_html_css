const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-responsive-wrapper');

let isOpen = false;

menuButton.addEventListener('click', () => {
  if (isOpen) {
    navMenu.style.height = '0px';
  } else {
    navMenu.style.height = '177px';
  }
  
  isOpen = !isOpen;
});

const navItems = document.querySelectorAll('.nav-responsive-wrapper li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.style.height = '0';
    isOpen = false;
  });
});
