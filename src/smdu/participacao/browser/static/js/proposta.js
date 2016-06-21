(function($) {

    "use strict";

    $(document).ready(function() {

      // Botao de Apoiar Proposta
      $(".apoiar-form").on("submit", function(e) {
          e.preventDefault();
          var url = $(this).attr("action");
          $.post(url).done(function(data) {
              alert(data);
          });
      });

    });

})(jQuery);
