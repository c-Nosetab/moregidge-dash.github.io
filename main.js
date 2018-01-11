

  var currentSelection = $(".selected");
  var sidebar = $(".sidebar");

  $('.hamburger').on('touchstart', function(){
    $('hamburger').css('background-color', 'red');
  });

  function changeSelection(item) {
    var newSelection = $(item);
    currentSelection.removeClass("selected");
    currentSelection = $(newSelection);
    newSelection.addClass("selected");
  }

  function toggleSidebar(e) {
    var check = $(e.path[0])[0].classList;
    console.log(sidebar.css('display'));

    if (check == "hamburger") {
      if (sidebar.css('display') == "none") {
        sidebar.css('display', "block");
      } else {
        sidebar.css('display', 'none');
      }
    } else if (sidebar.css('display') == "block" && window.innerWidth <= 1028) {
      sidebar.css('display',"none");
    }
  }

