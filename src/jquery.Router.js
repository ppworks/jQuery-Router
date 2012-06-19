/**
 *  jQuery Router plugin
 *  require jQuery 1.2
 *  (c) Hideaki Tanabe <http://blog.kaihatsubu.com>
 *  reference http://tech.kayac.com/archive/javascript-url-dispatcher.html
 *  Licensed under the MIT License.
 */
(function($) {
  var pathname = location.pathname;
  $.route = function() {
    $.each(arguments, function(index) {
      var path = this["path"];
      var func = this["func"];
      if (path && func) {
        if (params = pathname.match(path)) {
          params.shift()
          func.params = params
          $(function() {
            func.apply(this, func.params);
            delete(func.params);
          });
        }
      }
    });
  };
})(jQuery);
