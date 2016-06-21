(function($) {
    "use strict";

    $(document).ready(function() {

        function _bindLoginOverlay($this) {
            // $('.link-overlay', $this).prepOverlay({
            //     subtype: 'ajax',
            //     filter: common_content_filter,
            //     formselector: 'form#login_form',
            //     cssclass: 'overlay-login',
            //     noform: function() {
            //         if (location.href.test(/pwreset_finish$/)) {
            //             return 'redirect';
            //         } else {
            //             return 'reload';
            //         }
            //     },
            //     redirect: function () {
            //         var href = location.href;
            //         if (href.test(/pwreset_finish$/)) {
            //             return href.slice(0, href.length - 14) + 'logged_in';
            //         } else {
            //             return href;
            //         }
            //     }
            // });
        }

        $('body').on('click', '.thumb-rating input[type=submit]', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $form = $this.closest('form');
            var $container, $feedback, feedback_msg, feedback_id;
            if ($form.hasClass('desativado')) {
                // Caso a votação nao seja possivel, exibe alerta conforme o motivo
                $container = $form.closest('.thumb-rating');
                $feedback = $container.find('.twothumbs-feedback');
                if ($form.hasClass('finalizado')) {
                    feedback_msg = 'Desculpe, mas o período de participação já foi encerrado.';
                } else {
                    feedback_msg = 'Por favor, faça <a href="login_form" class="link-overlay">login</a> para avaliar.<a title="Fechar" class="close-link" href="#">&nbsp;</a>';
                }
                if (!$feedback.length) {
                    $('<div/>').addClass('twothumbs-feedback').html(feedback_msg).appendTo($container);
                    $feedback = $container.find('.twothumbs-feedback');
                }
                $feedback.slideDown().find('.close-link, .link-overlay').click(function(e) {
                    e.preventDefault();
                    $(this).closest('.twothumbs-feedback').slideUp();
                });
                // Associa comportamento de overlay ao novo link de login
                _bindLoginOverlay($feedback);
                return;
            } else {
                // Votação permitida
                $this.blur();
                var url = $form.attr('action');
                var action = $this.attr('name');
                var auth_key = $form.find('input[name="_authenticator"]').val();
                var paragrafo_id = $form.data('paragrafo_id');
                var $comentario = $form.parent().find('textarea');
                var comentario = (action == 'comentar' && $comentario.length) ? $comentario.val() : null;
                var $upResults = $form.find('.total-thumbs-up .tally-total');
                var $downResults = $form.find('.total-thumbs-down .tally-total');
                if ($form) {
                    var params = {
                        'action': action,
                        'ajax': 1,
                        '_authenticator': auth_key,
                        'paragrafo_id': paragrafo_id,
                        'comentario': comentario
                    };
                    $.post(url, params, function(data) {
                        if (data.action == 'comentar') {
                            // No caso de comentario
                            $form.siblings($('.twothumbs-feedback')).slideUp();
                        } else {
                            // No caso de voto
                            // Atualiza totais
                            $upResults.text(data.concordancias);
                            $downResults.text(data.discordancias);
                            // Atualiza exibição do voto do usuário atual
                            $form.find('.thumbs-up, .thumbs-down').removeClass('selected');
                            if (data.action == 'concordar') {
                                $form.find('.thumbs-up').addClass('selected');
                            } else if (data.action == 'discordar') {
                                $form.find('.thumbs-down').addClass('selected');
                            }
                        }
                        // Feedbacks adicionais
                        $feedback = $form.find('.twothumbs-feedback');
                        if ($feedback.length) {
                            $feedback.remove();
                        }
                        feedback_id = 'ttf-' + (new Date()).getTime();
                        $feedback = $('<div class="twothumbs-feedback">').attr('id', feedback_id)
                            .html(data.msg)
                            .prepend('<a class="close-link" title="Fechar" href="#">&nbsp;</a>');
                        if (data.action == 'concordar') {
                            $feedback.append($('<h5 />').append('Gostaria de registrar alguma ressalva?'))
                                .append('<textarea name="comentario" rows="4" cols="50" maxlength="1000">')
                                .append('<input type="submit" name="comentar" value="Enviar">');
                        }
                        $feedback.appendTo($form).hide().slideDown().find('.close-link').click(function(e) {
                            e.preventDefault();
                            $(this).closest('.twothumbs-feedback').slideUp();
                        });
                        setTimeout((function() {
                            $('#' + feedback_id).slideUp();
                        }), 1000 * 60 * 5);
                    }, 'json');
                }
            }
        });

    });

})(jQuery);
