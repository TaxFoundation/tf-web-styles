var mainMenu = (function() {

	var $listItems = $( '.nav-items > li' ),
		$menuItems = $listItems.children( '.nav-link' ),
		$body = $( 'body' ),
		current = -1;

	function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {
		console.log('click');
		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'nav-submenu-open' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'nav-submenu-open' );
			current = -1;
		} else {
			$item.addClass( 'nav-submenu-open' );
			current = idx;
			$body.off( 'click' ).on( 'click', close );
		}

		return false;

	}

	function close( event ) {
		$listItems.eq( current ).removeClass( 'nav-submenu-open' );
		current = -1;
	}

	return { init : init };

})();

$('document').ready(mainMenu.init());