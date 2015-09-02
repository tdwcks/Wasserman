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

  // element-category-slider 
    
    var TriggerPanelOne = $('.js-trigger-panel-one');
        TriggerPanelTwo = $('.js-trigger-panel-two');
        
        TriggerPanelTwo.click(function(){

        activeCategory = '#' + $(this).attr('title');

        $('.element-category-item').removeClass('element-category-active');
        $(activeCategory).addClass('element-category-active');

        body.addClass('show-panel-two');
        
        return false;
        
        });

        TriggerPanelOne.click(function(){

           body.removeClass('show-panel-two');

        return false;

        });

  // Notification Tabs 

  var triggerNotification = $('.js-trigger-notifications');
        
        triggerNotification.click(function(e){

        event.preventDefault();

        activeNotification = '#' + $(this).attr('title');

        $('.js-trigger-notifications').removeClass('js-notification-active');
        $('.article-notification-box').removeClass('js-notification-active');
        $(activeNotification).toggleClass('js-notification-active');
        $(this).toggleClass('js-notification-active');
        
        return false;
        
        });

        TriggerPanelOne.click(function(){

           body.removeClass('show-panel-two');

        return false;

        });
}); // End of document.ready
