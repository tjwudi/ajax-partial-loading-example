$(function() {
  $('.navigation a').bind('click', function(e) {
    e.preventDefault();
    var url = e.target.href,
      title = e.target.innerHTML;
    $('.content').load(url + ' .content > *', function(e) {
      if (window.location !== url) {
        window.history.pushState({path: url},title, url);
      }
    });
  });

  $(window).bind('popstate', function(e) {
    var path = e.state.path;
    $('.content').load(url + ' .content > *');
  });
});
