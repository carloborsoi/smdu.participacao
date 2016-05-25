(function($) {    
    "use strict";

    $(document).ready(function() {

        $('body').on('click', '.thumb-rating form input', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $form = $this.closest('form');
            if ($form.hasClass('disabled')) {
                // Can't rate, show info box
                var $container = $form.closest('.thumb-rating');
                var $login = $container.find('.twothumbs-feedback');
                if (!$login.length) {
                    $('<div>').addClass('twothumbs-feedback').hide().load('./login-to-rate', function() {
                        var $this = $(this);
                        $this.slideDown().find('.close-link').click(function(e) {
                            e.preventDefault();
                            $(this).closest('.twothumbs-feedback').slideUp();
                        });

                    }).appendTo($container);
                } else {
                    $login.slideDown();
                }
                return;
            } else {
                // Can rate, go ahead!
                $this.blur();
                var url = $form.attr('action');
                var action = $this.attr('name');
                var auth_key = $form.find('input[name="_authenticator"]').val();
                var paragrafo_id = $form.data('paragrafo_id');
                var $upResults = $form.find('.total-thumbs-up .tally-total');
                var $downResults = $form.find('.total-thumbs-down .tally-total');
                if ($form) {
                    $.post(url, action + '=FOOBAR&ajax=1&_authenticator=' + auth_key + '&paragrafo_id=' + paragrafo_id, function(data) {
                        debugger;
                        /* update the text */
                        $upResults.text(data.ups);
                        $downResults.text(data.downs);

                        /* update the class */
                        $form.find('.thumbs-down').removeClass('selected');
                        $form.find('.thumbs-up').removeClass('selected');
                        if (data.action == 'like') {
                            $form.find('.thumbs-up').addClass('selected');
                        } else if (data.action == 'dislike') {
                            $form.find('.thumbs-down').addClass('selected');
                        }

                        /* extra feedback */
                        var $feedback = form.find('.twothumbs-feedback');
                        if ($feedback.length) {
                            $feedback.remove();
                        }
                        var id = 'ttf-' + (new Date()).getTime();
                        $('<div>').attr('id', id).addClass('twothumbs-feedback').html(data.msg)
                            .prepend('<a class="close-link" title="' + data.close + '" href="#">&nbsp;</a>')
                            .appendTo(form).hide().slideDown().find('.close-link').click(function(e) {
                                e.preventDefault();
                                $(this).closest('.twothumbs-feedback').slideUp();
                            });
                        setTimeout((function() {
                            $('#' + id).slideUp();
                        }), 2000);
                    }, 'json');
                }
            }
        });




    });

})(jQuery);
