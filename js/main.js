$(document).ready(function() {
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
    }
    function downArrowPressed() {
      window.location = '#top';
      $("#home").css({
        "opacity": "0"
      });
      $("#nav-bottom").addClass('nudge');
      $("#nav-left").removeClass('nudge');
      $("#nav-right").removeClass('nudge');
      $("#nav-top").removeClass('nudge');
      $("#nav-home").removeClass('nudge');
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
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        switch (evt.keyCode) {
            case 32:
                spaceBarPressed();
                break;
            case 37:
                leftArrowPressed();
                break;
            case 38:
                upArrowPressed();
                break;
            case 39:
                rightArrowPressed();
                break;
            case 40:
                downArrowPressed();
                break;
        }
    };
});
