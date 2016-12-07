(function($) {

    "use strict";

    $(document).ready(function() {
      $(".proposta-link").prepOverlay({
          subtype: 'ajax',
          filter: common_content_filter,
          cssclass: 'proposta-overlay',
      });

      $(".proposta-adicionar").prepOverlay({
          subtype: 'ajax',
          filter: common_content_filter,
          cssclass: 'proposta-overlay',
          formselector: 'form'
      });

      $(".compartilhar-link").prepOverlay({
          subtype: 'ajax',
          filter: common_content_filter,
          cssclass: 'proposta-overlay',
      });

    // Botao de Apoiar Proposta da pagina de Consulta Publica
     $(".apoiar-form").on("submit", function(e) {
         e.preventDefault();
         var $this = $(this);
         var auth_key = $this.find("input[name='_authenticator']").val();
         var params = {
             "ajax": 1,
             "_authenticator": auth_key
         };
         var url = $this.attr("action");
         $.post(url, params).done(function(data) {
             var msg = data.msg;
             var total = data.total;
             var $apoios = $this.parents(".proposta-apresentada-caixa").find(".proposta-total-apoios");
             $apoios.text(total);
             alert(msg);
         });
     });

   });

})(jQuery);
