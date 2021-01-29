let menu = document.querySelector('.menu');
let button_menu = document.querySelector('.button_menu');

button_menu.onclick = function() {
  menu.classList.toggle('menu-open');
}
