(function($) {

    "use strict";

    $(document).ready(function() {
      $(".proposta-link").prepOverlay({
          subtype: 'ajax',
          cssclass: 'proposta-overlay',
      });

      $(".proposta-adicionar").prepOverlay({
          subtype: 'ajax',
          filter: common_content_filter,
          cssclass: 'proposta-overlay',
      });

      $(".apoiar-form").on("submit", function(e) {
        e.preventDefault();
        var url = $(this).attr("action");
        $.post(url).done(function(data){
          alert(data);
        })
      });

    });

})(jQuery);
