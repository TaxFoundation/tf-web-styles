jQuery(document).ready(function () {
  jQuery('.nav-link').click(function () {
    var activatedMenu = jQuery(this).parent('li').children('.nav-submenu');
    if (activatedMenu.hasClass('nav-submenu-active')) {
      activatedMenu.removeClass('nav-submenu-active');
      activatedMenu.slideUp('200');
    } else {
      var currentMenu = jQuery('.nav-submenu-active');
      currentMenu.fadeOut('150');
      currentMenu.removeClass('nav-submenu-active')

      var newMenu = jQuery(this).parent('li').children('.nav-submenu');
      newMenu.addClass('nav-submenu-active');
      newMenu.slideDown('200');
    }
  });

  jQuery(document).on('click', function (event) {
    if (!jQuery(event.target).closest('.nav-submenu').length && !jQuery(event.target).closest('.nav-link').length) {
      var currentMenu = jQuery('.nav-submenu-active');
      currentMenu.fadeOut('150');
      currentMenu.removeClass('nav-submenu-active')
    }
  })
});
