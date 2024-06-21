document.addEventListener('DOMContentLoaded', function() {
  const movieCards = document.querySelectorAll('.movie-card');
  let currentVideo = null;  // Para rastrear el video que se está reproduciendo actualmente

  movieCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          const videoId = this.getAttribute('data-video-id');
          if (videoId) {
              // Detener el video que se está reproduciendo actualmente
              if (currentVideo && currentVideo !== this) {
                  const currentIframe = currentVideo.querySelector('.youtube-video');
                  if (currentIframe) {
                      currentVideo.removeChild(currentIframe);
                  }
              }

              if (!this.querySelector('.youtube-video')) {
                  const iframe = document.createElement('iframe');
                  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
                  iframe.classList.add('youtube-video');
                  iframe.setAttribute('frameborder', '0');
                  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;');
                  this.appendChild(iframe);
                  currentVideo = this;  // Actualizar el video actual
              } else {
                  this.querySelector('.youtube-video').style.display = 'block';
              }
          }
      });

      card.addEventListener('mouseleave', function() {
          const iframe = this.querySelector('.youtube-video');
          if (iframe) {
              this.removeChild(iframe);  // Eliminar el iframe para detener completamente el video
              if (currentVideo === this) {
                  currentVideo = null;  // Restablecer currentVideo si es el que se está deteniendo
              }
          }
      });
  });
});
