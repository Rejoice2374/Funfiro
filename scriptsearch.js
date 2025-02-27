// script.js
document.getElementById("search-bar").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase(); // Get the search query and convert to lowercase
  const items = document.getElementById("item-list").getElementsByTagName("li");

  // Loop through all list items
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].textContent.toLowerCase(); // Get the text content of the list item

    // Check if the search query matches the item text
    if (itemText.includes(searchQuery)) {
      items[i].style.display = "block"; // Show the item
    } else {
      items[i].style.display = "none"; // Hide the item
    }
  }
});

let timeout;
document.getElementById("search-bar").addEventListener("input", function () {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const searchQuery = this.value.toLowerCase();
    const items = document
      .getElementById("item-list")
      .getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent.toLowerCase();
      items[i].style.display = itemText.includes(searchQuery)
        ? "block"
        : "none";
    }
  }, 300); // 300ms delay
});
