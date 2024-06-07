document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const movie = params.get('movie');

    const movies = {
      bad_boys: {
        title: 'BAD BOYS',
        genre: 'COMEDIA',
        duration: '90 min.',
        description: 'Bad Boys Ride or Die es una próxima película de comedia de acción estadounidense de 2024, dirigida por Adil El Arbi & Bilall.',
        image: 'images/bad.webp',
        trailer: 'https://www.youtube.com/embed/1lvhufxCZZg?si=kmXcc_KyRKMd6vlJ'
      },
      garfield: {
        title: 'GARFIELD',
        genre: 'ANIMADA',
        duration: '90 min.',
        description: 'Garfield: Fuera de Casa.',
        image: 'images/garfield.jpg',
        trailer: 'https://www.youtube.com/embed/yLGT-yvVU9E?si=_kSPkM7JSBlfPTo_'
      },
      inmaculada: {
        title: 'INMACULADA',
        genre: 'SUSPENSO',
        duration: '90 min.',
        description: 'Los Juegos del Hambre: Una historia épica de supervivencia y revolución.',
        image: 'images/inma.jpg',
        trailer: 'https://www.youtube.com/embed/TIj2NPxIW2w?si=EU6qxaIrHDZNJpwh'
      },
      hachi: {
        title: 'HACHIKO 2',
        genre: 'DRAMA',
        duration: '90 min.',
        description: 'Los Juegos del Hambre: Una historia épica de supervivencia y revolución.',
        image: 'images/hachiko.jpeg',
        trailer: 'https://www.youtube.com/embed/H0LkfToe0EY?si=V1B4dY3EBSrQVzVu'

      },
      simio: {
        title: 'EL REINO DEL PLANETA DE LOS SIMIOS',
        genre: 'CIENCIA FICCION',
        duration: '90 min.',
        description: 'Los Juegos del Hambre: Una historia épica de supervivencia y revolución.',
        image: 'images/simio.jpg',
        trailer: 'https://www.youtube.com/embed/DDWWwEiWHJw?si=K3AdiEHyXEyHo61p'

      }
      // Add more movies as needed
    };

    if (movie && movies[movie]) {
      document.getElementById('movie-title').textContent = movies[movie].title;
      document.getElementById('movie-genre').textContent = movies[movie].genre;
      document.getElementById('movie-duration').textContent = movies[movie].duration;
      document.getElementById('movie-description').textContent = movies[movie].description;
      document.getElementById('movie-image').src = movies[movie].image;
      document.getElementById('movie-trailer').src = movies[movie].trailer;
    }
    
    const days = [
        { day: 'Jueves', date: '06 Jun' },
        { day: 'Viernes', date: '07 Jun' },
        { day: 'Sábado', date: '08 Jun' },
        { day: 'Domingo', date: '09 Jun' },
        { day: 'Lunes', date: '10 Jun' },
        { day: 'Martes', date: '11 Jun' },
        { day: 'Miércoles', date: '12 Jun' }
    ];
    let currentStartIndex = 0;
    const daysToShow = 5;

    function renderDays() {
        const daysCarousel = $('#daysCarousel');
        daysCarousel.empty();
        for (let i = currentStartIndex; i < currentStartIndex + daysToShow && i < days.length; i++) {
            const dayItem = $('<div class="day-container"></div>');
            dayItem.append('<span>' + days[i].day + '</span>');
            dayItem.append('<div>' + days[i].date + '</div>');
            daysCarousel.append(dayItem);
        }
    }

    $('#prevDay').click(function() {
        if (currentStartIndex > 0) {
            currentStartIndex--;
            renderDays();
        }
    });

    $('#nextDay').click(function() {
        if (currentStartIndex < days.length - daysToShow) {
            currentStartIndex++;
            renderDays();
        }
    });

    $('#continueBtn').click(function() {
        window.open('cine.html', '_blank');
    });

    $(document).on('click', '.format-button', function() {
        $('.format-button').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.time-button', function() {
        $('.time-button').removeClass('active');
        $(this).addClass('active');
    });

    // Initial render
    renderDays();
    
  });