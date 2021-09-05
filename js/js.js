$(document).ready(function(){

  // Manages the page title in the navigator when the page is scrolled
  $(window).scroll(function() {
    var distance = $(window).scrollTop();
    var topHomePg = $("#home-page").offset().top;
    var topProfilePg = $("#profile-page").offset().top;
    var topWeldsPg = $("#welds-page").offset().top;
    var topContactPg = $("#contact-page").offset().top;
    var y = 50;

    if (topContactPg - distance < y) {
      $("#current-page").html("Contact");
    } else if (topWeldsPg - distance < y) {
      $("#current-page").html("Welds");
    } else if (topProfilePg - distance < y) {
      $("#current-page").html("Profile");
    } else if (topHomePg - distance < y) {
      $("#current-page").html("Home");
    }
  });

  // Event listener for key press
  window.addEventListener("keydown", movePageKeys, false);

  // Allows arrow keys to scroll page up/down
  function movePageKeys(e) {
    var key = e.keyCode;
    e.preventDefault();

    if (key == "38") {
      movePage("up");
    } else if (key == "40") {
      movePage("down");
    }
  }

  // Scroll page when side navigator is clicked
  window.movePage = function(direction) {
    var pages = ["home"];
    var links = $("#nav-links").find("a");

    for (var i = 0; i < links.length; i++) {
      pages.push(links[i].innerHTML.toLowerCase());
    }

    var numPages = pages.length;
    var currentPage = $("#current-page").text().toLowerCase();
    var found = false;
    var nextPage = 0;

    for (var i = 0; i < numPages; i++) {
      if (currentPage == pages[i]) {
        if (direction == "up" && i > 0) {
          found = true;
          nextPage = i - 1;
        } else if (direction == "down" && (i + 1) < numPages) {
          found = true;
          nextPage = i + 1;
        }
      }
    }

    if (found) {
      scrollToPage(pages[nextPage]);
    }
  };

  // Scroll the window to the top of the page
  window.scrollToPage = function(page) {
    page = $("#" + page + "-page");
    var scrollAmount = page.offset().top;
    $("html, body").animate({scrollTop: scrollAmount}, 500);
  };

  // Swaps the source of an element (for images)
  window.imgSwap = function(element) {
    var source = $(element).attr("src");

    if (source.indexOf("_red.png") != -1) {
      source = source.replace(/_red.png/g, "_white.png");
    } else if (source.indexOf("_white.png") != -1) {
      source = source.replace(/_white.png/g, "_red.png");
    }

    $(element).attr("src", source);
  };

});
