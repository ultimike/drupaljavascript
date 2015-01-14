(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.shrinky_header = {
  attach: function(context, settings) {

    var shrinkHeader = 72;
    $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

  }
};

})(jQuery, Drupal, this, this.document);