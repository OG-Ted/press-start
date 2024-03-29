function leftArrowPressed() {
  window.location = '#right';
  $("#home").css({
    "opacity": "0"
  });
  $("#nav-left").addClass('nudge');
  $("#nav-right").removeClass('nudge');
  $("#nav-top").removeClass('nudge');
  $("#nav-bottom").removeClass('nudge');
  $("#nav-home").removeClass('nudge');

  // hide + show tap navigation
  $("#nav-right").removeClass('hidden');
  $("#nav-left").addClass('hidden');
  $("#nav-top").removeClass('hidden');
  $("#nav-bottom").removeClass('hidden');
  $("#nav-home").removeClass('hidden');

}
function rightArrowPressed() {
  window.location = '#left';
  $("#home").css({
    "opacity": "0"
  });
  $("#nav-right").addClass('nudge');
  $("#nav-left").removeClass('nudge');
  $("#nav-top").removeClass('nudge');
  $("#nav-bottom").removeClass('nudge');
  $("#nav-home").removeClass('nudge');

  // hide + show tap navigation
  $("#nav-left").removeClass('hidden');
  $("#nav-right").addClass('hidden');
  $("#nav-top").removeClass('hidden');
  $("#nav-bottom").removeClass('hidden');
  $("#nav-home").removeClass('hidden');

}
function upArrowPressed() {
  window.location = '#bottom';
  $("#home").css({
    "opacity": "0"
  });
  $("#nav-top").addClass('nudge');
  $("#nav-left").removeClass('nudge');
  $("#nav-right").removeClass('nudge');
  $("#nav-bottom").removeClass('nudge');
  $("#nav-home").removeClass('nudge');

  // hide + show tap navigation
  $("#nav-bottom").addClass('hidden');
  $("#nav-top").removeClass('hidden');
  $("#nav-home").removeClass('hidden');
  $("#nav-left").removeClass('hidden');
  $("#nav-right").removeClass('hidden');
}
function downArrowPressed() {
  window.location = '#top';
  $("#home").css({
    "opacity": "0"
  });
  $("#nav-left").removeClass('nudge');
  $("#nav-right").removeClass('nudge');
  $("#nav-top").removeClass('nudge');
  $("#nav-home").removeClass('nudge');

  // hide + show tap navigation
  $("#nav-bottom").removeClass('hidden');
  $("#nav-top").addClass('hidden');
  $("#nav-home").removeClass('hidden');
  $("#nav-left").removeClass('hidden');
  $("#nav-right").removeClass('hidden');
}
function spaceBarPressed() {
  window.location = '#home';
  $("#home").css({
    "opacity": "1"
  });
  $("#nav-home").addClass('nudge');
  $("#nav-left").removeClass('nudge');
  $("#nav-right").removeClass('nudge');
  $("#nav-top").removeClass('nudge');
  $("#nav-bottom").removeClass('nudge');

  // hide + show tap navigation
  $("#nav-bottom").removeClass('hidden');
  $("#nav-top").removeClass('hidden');
  $("#nav-left").removeClass('hidden');
  $("#nav-right").removeClass('hidden');
  $("#nav-home").addClass('hidden');
}

function navigationKeyHandler(evt) {
    switch (evt.keyCode) {
        case 32:
            spaceBarPressed();
            break;
        case 37:
            rightArrowPressed();
            break;
        case 38:
            downArrowPressed();
            break;
        case 39:
            leftArrowPressed();
            break;
        case 40:
            upArrowPressed();
            break;
    }
};

function gameInit () {
  $('#pageBody').unbind('keydown');
  $('.game-container').focus();
  $('#pageBody').keydown(function(event) {
    if (event.which == 27) {
      exitGame();
    }
  });
  window.game.start();
  $(".game-container").removeClass('hidden');
}

function exitGame () {
  window.game.stop();
  $('#pageBody').keydown(navigationKeyHandler);
  $('#pageBody').focus();
  $(".game-container").addClass('hidden');
}

$(document).ready(function() {

  $('#pageBody').keydown(navigationKeyHandler);

  // if user hits page directly, correct the arrow displays
  if (location.hash) {
    switch(location.hash) {
      case '#top':
        $("#nav-top").addClass('hidden');
        break;
      case '#bottom':
        $("#nav-bottom").addClass('hidden');
        break;
      case '#left':
        $("#nav-left").addClass('hidden');
        break;
      case '#right':
        $("#nav-right").addClass('hidden');
        break;
    }
  }

  $(".game-container").addClass('hidden');

  $('#nav-left').on('click', function() {
        leftArrowPressed();
  });
  $('#nav-right').on('click', function() {
        rightArrowPressed();
  });
  $('#nav-top').on('click', function() {
        downArrowPressed();
  });
  $('#nav-bottom').on('click', function() {
        upArrowPressed();
  });
  $('#nav-home').on('click', function() {
        spaceBarPressed();
  });


//Scroll to top
  
$(".arcade-nav-bottom").click(function(e) {
  $('.arcade-content').animate({ scrollTop: 0 }, 0);
});

  $(".arcade-nav-home").click(function(e) {
  $('.arcade-content').animate({ scrollTop: 0 }, 0);
  });

    $(".aboutMobile").click(function(e) {
  $('.arcade-content').animate({ scrollTop: 0 }, 0);
  });
  
// beer game

  $('.drink-dat-beer').on('click', function() {
        $(".drink-overlay").removeClass('show-drink-overlay');
        $(".beer-time-header").html('Have Another?');
        $(".beer-time-button").html('One more');
        $(".games-button").removeClass('games-button-hide');
  });

  $('#drink-menu').on('click', function() {
        $(".drink-overlay").addClass('show-drink-overlay');
  });

  $('#drink-menu-close-x').on('click', function() {
      $(".drink-overlay").removeClass('show-drink-overlay');
});

  $('#drink-menu-close').on('click', function() {
        $(".drink-overlay").removeClass('show-drink-overlay');
        $(".beer-time-header").html('Pace Yourself');
        $(".beer-time-button").html('Maybe one');
        $(".games-button").removeClass('games-button-hide');
  });

// game overlay

  $('.games-button').on('click', function() {
    $(".game-overlay").addClass('show-game-overlay');
      $('.game-overlay').animate({ scrollTop: 0 }, 0);
  });

  $('#game-menu-close').on('click', function() {
        $(".game-overlay").removeClass('show-game-overlay');
  });

    $('#game-menu-close-x').on('click', function() {
        $(".game-overlay").removeClass('show-game-overlay');
  });

  // gallery overlay

  $('.gallery-listings-button').on('click', function() {
        $(".gallery-overlay").addClass('show-gallery-overlay');
        $('.gallery-overlay').animate({ scrollTop: 0 }, 0);
  });

  $('#gallery-listings-close').on('click', function() {
        $(".gallery-overlay").removeClass('show-gallery-overlay');
  });

   $('#gallery-listings-close-x').on('click', function() {
        $(".gallery-overlay").removeClass('show-gallery-overlay');
  });

// directions overlay

  $('.directions-menu').on('click', function() {
    $(".directions-overlay").addClass('show-directions-overlay');
    $('.directions-overlay').animate({ scrollTop: 0 }, 0);
    $(".game-overlay").removeClass('show-game-overlay');
  });

  $('#directions-overlay-close').on('click', function() {
        $(".directions-overlay").removeClass('show-directions-overlay');
  });

  $('#directions-overlay-close-x').on('click', function() {
        $(".directions-overlay").removeClass('show-directions-overlay');
  });

  // events overlay

  $('#events-menu').on('click', function() {
    $(".events-overlay").addClass('show-events-overlay');
    $('.events-overlay').animate({ scrollTop: 0 }, 0);
  });

  $('#events-overlay-close').on('click', function() {
        $(".events-overlay").removeClass('show-events-overlay');
  });

  $('#events-overlay-close-x').on('click', function() {
        $(".events-overlay").removeClass('show-events-overlay');
  });


  // PRESS START ARACADE:

  // 1. arcade overlay: space invaders
  // create the game object
  window.game = new SI.Game();

  window.onhashchange = function () {
    if (location.hash != '#top') {

      window.game.stop();
      $(".game-container").addClass('hidden');

      // rebind navigation keys if they aren't bound already
      if (! document.keydown) {
        $('#pageBody').keydown(navigationKeyHandler);
      }
    }

    switch(location.hash) {
      case '#top':
        $("#nav-top").addClass('hidden');
        $("#nav-bottom").removeClass('hidden');
        $("#nav-left").removeClass('hidden');
        $("#nav-right").removeClass('hidden');
        $("#nav-home").removeClass('hidden');
        break;
      case '#bottom':
        $("#nav-bottom").addClass('hidden');
        $("#nav-top").removeClass('hidden');
        $("#nav-left").removeClass('hidden');
        $("#nav-right").removeClass('hidden');
        $("#nav-home").removeClass('hidden');
        break;
      case '#left':
        $("#nav-left").addClass('hidden');
        $("#nav-bottom").removeClass('hidden');
        $("#nav-top").removeClass('hidden');
        $("#nav-right").removeClass('hidden');
        $("#nav-home").removeClass('hidden');
        break;
      case '#right':
        $("#nav-right").addClass('hidden');
        $("#nav-bottom").removeClass('hidden');
        $("#nav-left").removeClass('hidden');
        $("#nav-top").removeClass('hidden');
        $("#nav-home").removeClass('hidden');
        break;
      case '#home':
        $("#nav-home").addClass('hidden');
        $("#nav-bottom").removeClass('hidden');
        $("#nav-left").removeClass('hidden');
        $("#nav-top").removeClass('hidden');
        $("#nav-right").removeClass('hidden');
        break;
    }
  }
});