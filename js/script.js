(function(window, $) {
    $(document).ready(function(){
        // Disables links which need to be.
        $('a[disabled]').on('click', function(event){
            if($(this).attr('disabled')){
                event.preventDefault();
                return false;
            }
        });

        // Ripple effect.
        $('.btn, .btn-raised, a.list-item').not('[disabled]').on('mousedown', function(event) {
            //event.preventDefault();
            //event.stopPropagation();
            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

            $div.addClass('ripple-effect');

            var $ripple = $(".ripple-effect");
            $ripple.css("height", $(this).height());
            $ripple.css("width", $(this).height());
            $div.css({
                top: yPos - ($ripple.height() / 2),
                left: xPos - ($ripple.width() / 2),
                background: $(this).data("ripple-color")
            }).appendTo($(this));

            // $div.css({
            //     top: yPos,
            //     left: xPos,
            //     background: $(this).data("ripple-color")
            // }).appendTo($(this));

            window.setTimeout(function() {
                $div.remove();
            }, 2000);
        });

        // Popups.
        $('[data-popup]').on('click', function(event){
            event.stopPropagation();

            var el = $(this);
            var popup = $(el.data('popup'));

            if(popup.length > 0){
                if(popup.is(':visible')){
                    popup.fadeOut(200);
                } else{
                    // Hide other popups.
                    $('.popup').hide();

                    var width = el.outerWidth();
                    var height = el.outerHeight();
                    var position = el.position();
                    var top = position.top + height;
                    var left = position.left + width / 2;

                    popup.css('top', top + 'px');
                    popup.css('left', left + 'px');
                    popup.fadeIn(100);
                }
            }
        });
        $('html').on('click', function(event){
            if(($.inArray('popup', event.target.classList) > -1 || 
                $(event.target).parents('.popup').length >= 1) && $.inArray('popup-close', event.target.classList) <= -1){
                // Nothing to do.
            } else{
                $('.popup').fadeOut(200);
            }
        });
    });
})(window, jQuery);