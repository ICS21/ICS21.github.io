
(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.pumps = {
    
    attach: function (context, settings) {
      $('.view .view-content').addClass('clearfix');
      
      $('.horizontal-menu > li').doubleTapToGo();
			
      Shadowbox.init();
    }
    
  };

})(jQuery, Drupal, this, this.document);

jQuery(document).ready(function($) {
	
});