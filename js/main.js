$(document).ready(function() {
    var nextPage = $("#next_page_link")
    var prevPage = $("#previous_page_link")
    nextUrl = nextPage.attr("href")
    prevUrl = prevPage.attr("href")

    function leftArrowPressed() {
      window.location = '#right';
      $("#active").css({
        "opacity": "0"
      });
    }
    function rightArrowPressed() {
      window.location = '#left';
      $("#active").css({
        "opacity": "0"
      });
    }
    function upArrowPressed() {
      window.location = '#bottom';
      $("#active").css({
        "opacity": "0"
      });
    }
    function downArrowPressed() {
      window.location = '#top';
      $("#active").css({
        "opacity": "0"
      });
    }
    function spaceBarPressed() {
      window.location = '#home';
      $("#active").css({
        "opacity": "1"
      });
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
