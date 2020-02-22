var menu = document.querySelector('.main-navigation');
var menuButton = menu.querySelector('.menu-button');

var projects = document.querySelector('.projects');
var project = projects.querySelector('.project--single');
var close = project.querySelector('.close-button');
var projectsLinks = projects.querySelectorAll('.view-link');

var projectsHeaderNav = projects.querySelector('.projects-header .navigation');
var projectsFooterNav = projects.querySelector('.projects-footer .navigation');



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



/*
1. вешаем слушатель на навигацию(одну и вторую)
2. если клик был на ссылке, то
2.1 удаляем все классы 'current' из ссылок этой навигации
2.2 добавляем ссылке, на которой был клик, класс 'current'

function clearLinks(nav) {
  var links = nav.querySelectorAll('.navigation-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('current');
  }
}

projectsHeaderNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('navigation-link')) {
    e.preventDefault();
    clearLinks(projectsHeaderNav);
    e.target.classList.add('current');
  }
});

projectsFooterNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('navigation-link')) {
    e.preventDefault();
    clearLinks(projectsFooterNav);
    e.target.classList.add('current');
  }
});
*/

function clearLinks(nav) {
  var links = nav.querySelectorAll('.navigation-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('current');
  }
}

function linksHandler(e, nav) {
  var targetLink = e.target;
  if (targetLink.classList.contains('navigation-link')) {
    e.preventDefault();
    clearLinks(nav);
    targetLink.classList.add('current');
  }
}

projectsHeaderNav.addEventListener('click', function (e) {
  linksHandler(e, this); // 'this' is 'projectsHeaderNav'
});

projectsFooterNav.addEventListener('click', function (e) {
  linksHandler(e, this); // 'this' is 'projectsFooterNav'
});
