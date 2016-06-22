(function($) {

    "use strict";

    $(document).ready(function() {

      // Botao de Apoiar Proposta
      $(".apoiar-form").on("submit", function(e) {
          e.preventDefault();
          var $this = $(this);
          var auth_key = $this.find('input[name="_authenticator"]').val();
          var params = {
              'ajax': 1,
              '_authenticator': auth_key
          };
          var url = $this.attr("action");
          $.post(url, params).done(function(data) {
              alert(data);
          });
      });

    });

})(jQuery);
