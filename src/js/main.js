jQuery(document).ready(function () {
  jQuery('.nav-link').click(function () {
    var activatedMenu = jQuery(this).parent('li').children('.nav-submenu');
    if (activatedMenu.hasClass('active')) {
      activatedMenu.removeClass('active');
      activatedMenu.slideUp('200');
    } else {
      var currentMenu = jQuery('.active');
      currentMenu.fadeOut('150');
      currentMenu.removeClass('active')

      var newMenu = jQuery(this).parent('li').children('.nav-submenu');
      newMenu.addClass('active');
      newMenu.slideDown('200');
    }
  });

  jQuery(document).on('click', function (event) {
    if (!jQuery(event.target).closest('.nav-submenu').length && !jQuery(event.target).closest('.nav-link').length) {
      var currentMenu = jQuery('.active');
      currentMenu.fadeOut('150');
      currentMenu.removeClass('active')
    }
  })
});
