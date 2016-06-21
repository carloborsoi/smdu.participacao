(function($) {

    "use strict";

    $(document).ready(function() {

      // Overlay de Proposta
      $(".proposta-link").prepOverlay({
          subtype: 'ajax'
      });

      // Overlay de Criar uma nova proposta
      $(".proposta-adicionar").prepOverlay({
          subtype: 'ajax',
          filter: common_content_filter
      });

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
