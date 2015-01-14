(function ($) {

Drupal.behaviors.customize_entityform_widgets = {
  attach: function(context, settings) {
    var themeColor;
    
    if (Drupal.settings.drupaleasy_drupaljavascript == undefined) {
      themeColor = 'blue';
    }
    else {
      themeColor = Drupal.settings.drupaleasy_drupaljavascript.icheck_theme;
    }

    $('#edit-field-best-movie-ever-und').each(function(){
      var self = $(this),
        label = self.next(),
        label_text = label.text();

      label.remove();
      self.iCheck({
        checkboxClass: 'icheckbox_line-' + themeColor,
        radioClass: 'iradio_line-' + themeColor,
        insert: '<div class="icheck_line-icon"></div>' + label_text
      });
    });
    
  }
};

})(jQuery);
