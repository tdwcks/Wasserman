/*	MILN LTD

Website Title:	Wasserman Experience Intranet
Website URL:	XXXXXXX
Version:		1.0

*/

// These functions happen once the DOM has loaded.
$(function() {

  // Click Hamburger to trigger the sidebar

  body = $('body');

  var TriggerSidebar = $('.js-trigger-sidebar');

    TriggerSidebar.click(function(){

    if(body.hasClass('sidebar-trigger-active')) {
      body.removeClass('sidebar-trigger-active');
      return false;
    }

    else {
        body.addClass('sidebar-trigger-active');
        return false;
    }

  });

  // Click Exit to remove the sidebar

  var TriggerSidebarExit = $('.js-trigger-exit-sidebar');

    TriggerSidebarExit.click(function(){
      body.removeClass('sidebar-trigger-active');
    return false;

  });

  // Click Exit to get help

  var triggerHelp = $('.js-trigger-help');

    triggerHelp.click(function(){
      body.toggleClass('help-is-active');
    return false;

  });

  // Click to add registration field

  var newContactTrigger = $('.js-trigger-new-contact');

    newContactTrigger.click(function(){
      body.addClass('additional-contact-active');
    return false;

  });



  // Click Search to launch the search bar

  var TriggerSearch = $('.js-trigger-search');

    TriggerSearch.click(function(){

    if(body.hasClass('search-active')) {
      body.removeClass('search-active');
      return false;
    }

    else {
        body.addClass('search-active');
        return false;
    }

  });

	// Make header smaller on scroll
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();

      if(scrollTop >= 50) {
          body.addClass('beyond-waypoint');
      }

      else {
          body.removeClass('beyond-waypoint');
      }

    }); // End of scroll

}); // End of document.ready
