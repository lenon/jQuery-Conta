/*!
 * jQuery Conta Plugin v1
 * http://lenonmarcel.com.br/
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Date: 2010-04-30 (Fri, 30 April 2010)
 */
(function($){
  $.fn.conta = function(counter, len){
    
    var input   = $(this),
        counter = $(counter);
    
    input.keyup(function(){
      var count = (len ? len : 140) - input.val().length;
      
      if (count < 0)
        counter.attr('class','over');
      else
        counter.attr('class','safe');
      
      counter.text(count);
    }).keyup();
    
    return this;
  }
})(jQuery)
