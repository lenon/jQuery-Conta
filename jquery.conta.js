/*!
 * jQuery Conta Plugin 1.2
 * http://lenonmarcel.com.br/code/jquery-conta
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 07-12-2010 (July 12, 2010)
 */

(function($){

    $.fn.conta = function( counter, len )
    {
        if (!len) len = 140; // Twitter limit :)

        var input   = $(this),
            counter = $(counter),
            els     = [input, counter];

        input.keyup( function() {

            var count = len - input.val().length;

            for ( var i = 0; i < 2; i++ )
            {
                if (count < 0) {
                    els[i].removeClass('safe').addClass('over');
                } else {
                    els[i].removeClass('over').addClass('safe');
                }
            }

            counter.text(count);

        }).keyup();

        return this;
    }

})(jQuery);
