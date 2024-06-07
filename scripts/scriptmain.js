
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona la imagen con id "imagen1"
  var imagen1 = document.getElementById('imagen1');

  // Añade un event listener para el evento 'click'
  imagen1.addEventListener('click', function() {
      window.location.href = 'cine.html';
  });
});


close.addEventListener('click', () => {
  modal.style.display = 'none';
  detenerVideo();
  modal.close();
});
function detenerVideo() {
  var player = new YT.Player(videoPlayer, {
    events: {
      'onReady': function (event) {
        event.target.stopVideo();
      }
    }
  });
}
 