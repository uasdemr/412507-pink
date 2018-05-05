  var topMenu = document.querySelector('.top-menu');
  var menuToggle = document.querySelector('.top-menu__toggle');

  topMenu.classList.remove("top-menu--nojs");

  menuToggle.addEventListener('click', function() {
    if (topMenu.classList.contains('top-menu--closed')) {
      topMenu.classList.remove('top-menu--closed');
      topMenu.classList.add('top-menu--opened');
    } else {
      topMenu.classList.add('top-menu--closed');
      topMenu.classList.remove('top-menu--opened');
    }
  });
