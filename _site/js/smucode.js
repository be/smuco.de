(function() {
  var anchors = document.getElementsByTagName('a');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute('target', '_top');
  }
  if (window.location.hostname != 'localhost') {
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].className == 'internal') {
        var href = anchors[i].getAttribute('href');
        anchors[i].setAttribute('href', 'http://smuco.de' + href);
      }
    }
  }
}());