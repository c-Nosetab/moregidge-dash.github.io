$(document).ready(function() {
  $('.hamburger').on('touch', function(event){
    toggleSidebar(event);
  });
  $('main-content').on('touch', function(event){
    toggleSidebar(event);
  });
})

  var currentSelection = $(".selected");
  var sidebar = $(".sidebar");

  function changeSelection(item) {
    var newSelection = $(item);
    currentSelection.removeClass("selected");
    currentSelection = $(newSelection);
    newSelection.addClass("selected");
  }

  function toggleSidebar(e) {
    var check = $(e.currentTarget)[0].className;

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

  $(window).on('resize', function() {
    var win = $(this);
    // console.log(win);
    if (win.width() > 1028) {
      console.log('yep')
      sidebar.css('display', 'block');
    } else if (win.width() <= 1028) {
      console.log('nope');
      sidebar.css('display', 'none');
    }
  });

