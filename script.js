/*
const cardsPerPage = 4;
const dataContainer = document.getElementById("data-container");
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumber = document.getElementById("page-numbers");
const pageLinks = document.querySelectorAll("#page-link");

const products = Array.from(dataContainer.getElementsByClassName("product"));

const totalPages = Math.ceil(products.length / cardsPerPage);
let currentPage = 1;

function displayPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  products.forEach((product, index) => {
    if (index >= startIndex + index < endIndex) {
      product.computedStyleMap.display = "block";
    } else {
      product.computedStyleMap.display = "none";
    }
  });
}

function updatePagination() {
  pageNumber.textContent = `page ${currentPage} of ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageLinks.forEach((link) => {
    const page = parseInt(link.getAttribute("data-page"));
    link.classList.toggle("active", page === currentPage);
  });
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
    updatePagination();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
    updatePagination();
  }
});

// Corrected selector
pageLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Corrected syntax
    const page = parseInt(link.getAttribute("data-page"));
    if (page !== currentPage) {
      currentPage = page;
      displayPage(currentPage);
      updatePagination();
    }
  });
});

displayPage(currentPage);
updatePagination();

*/

const cardsPerPage = 4;
const dataContainer = document.getElementById("data-container");
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumber = document.getElementById("page-number");
const pageLinks = document.querySelectorAll(".page-link");

const products = Array.from(dataContainer.getElementsByClassName("product"));

const totalPages = Math.ceil(products.length / cardsPerPage);
let currentPage = 1;

function displayPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  products.forEach((product, index) => {
    if (index >= startIndex && index < endIndex) {
      product.style.display = "block"; // Corrected property
    } else {
      product.style.display = "none"; // Corrected property
    }
  });
}

function updatePagination() {
  //   pageNumber.innerText = "Page" + currentPage + "of" + totalPages;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageLinks.forEach((link) => {
    const page = parseInt(link.getAttribute("data-page"));
    link.classList.toggle("active", page === currentPage);
  });
}

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
    updatePagination();
  }
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
    updatePagination();
  }
});

pageLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = parseInt(link.getAttribute("data-page"));
    if (page !== currentPage) {
      currentPage = page;
      displayPage(currentPage);
      updatePagination();
    }
  });
});

// Initialize the page
displayPage(currentPage);
updatePagination();
