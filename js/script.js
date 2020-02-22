var menu = document.querySelector('.main-navigation');
var menuButton = menu.querySelector('.menu-button');

var projects = document.querySelector('.projects');
var project = projects.querySelector('.project--single');
var close = project.querySelector('.close-button');
var projectsLinks = projects.querySelectorAll('.view-link');

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



// делегирование события "click на разделе .projects" на внутреннюю ссылку .view-link
projects.addEventListener('click', function (e) {
  if (e.target.classList.contains('view-link')) {
    e.preventDefault();
    project.classList.remove('hide-project');
    location.href = "#projects";
  }
});

//вешаем обработчики на все ссылки проектов
/*
function setHandler(e) {
  e.preventDefault();
  project.classList.remove('hide-project');
  location.href = "#projects";
}

for (var i = 0; i < projectsLinks.length; i++) {
  projectsLinks[i].addEventListener('click', setHandler);
}
*/

// закрываем проект, нажимая на закрывающую кнопку 
close.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  project.classList.add('hide-project');
});

//закрываем проект, нажимая на ESC
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    e.preventDefault();
    project.classList.add('hide-project');
  }
});



