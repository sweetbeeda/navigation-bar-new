let button = document.querySelector(".icon-container");
button.addEventListener("click", () => {
  const listContainer = document.querySelector(".showmenu");

  // Check if the menu is currently hidden
  if (
    listContainer.style.display === "none" ||
    listContainer.style.display === ""
  ) {
    // If hidden or not set, show the menu
    listContainer.style.display = "block";
  } else {
    // Otherwise, hide the menu
    listContainer.style.display = "none";
  }
});
