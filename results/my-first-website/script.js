var dropdown = document.getElementById("myDropdown");

/* JavaScript function to toggle the dropdown menu */
function dropdownFunction() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

/* Close dropdown menu when clicking away */
document.addEventListener('click', (event) => {
  if (!event.target.matches('.burger-menu')) {
    dropdown.style.display = "none";
  }
});