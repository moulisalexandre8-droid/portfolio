// Sélection du burger et du menu mobile
const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.menu-mobile');

// Toggle active pour afficher / cacher le menu
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
