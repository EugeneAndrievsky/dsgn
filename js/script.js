var menu = document.querySelector('.main-navigation');
var menuButton = menu.querySelector('.menu-button');

// открываем меню, нажимая на закрытое меню
menu.addEventListener('click', function (e) {
  menu.classList.remove('main-navigation--closed');
  menu.classList.add('main-navigation--opened');
});

// открываем/закрываем меню, нажимая на кнопку
menuButton.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  menu.classList.toggle('main-navigation--opened');
  menu.classList.toggle('main-navigation--closed');
});


