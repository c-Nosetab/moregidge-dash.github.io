  var currentSelection = document.querySelector(".selected");
  var sidebar = document.querySelector(".sidebar");

  function changeSelection() {
    var newSelection = event.path[1];

    if (newSelection.classList.value !== "nav-list") {
      currentSelection.classList.remove("selected");
      currentSelection = newSelection;
      newSelection.classList.add("selected");
    }
  }

  function toggleSidebar() {
    var check = event.path[1].classList.value;

    if (check == "hamburger") {
      if (sidebar.style.display == "") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "";
      }
    } else if (sidebar.style.display == "block" && window.innerWidth <= 1028) {
      sidebar.style.display = "";
    }
  }

