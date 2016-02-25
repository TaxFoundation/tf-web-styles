jQuery(document).ready(function () {
  jQuery('.nav-submenu').hide();

  jQuery('.nav-link').click(function () {
    var activatedMenu = jQuery(this).parent('li').children('.nav-submenu');
    if (activatedMenu.hasClass('active')) {
      activatedMenu.removeClass('active');
      activatedMenu.slideUp('200');
    } else {
      var currentMenu = jQuery('.active');
      currentMenu.hide();
      currentMenu.removeClass('active')

      var newMenu = jQuery(this).parent('li').children('.nav-submenu');
      newMenu.addClass('active');
      newMenu.slideDown('200');
    }
  });
});
