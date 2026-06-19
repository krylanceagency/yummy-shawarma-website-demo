const tabButtons = document.querySelectorAll(".tab-btn");
const menuContents = document.querySelectorAll(".menu-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    menuContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(category).classList.add("active");
  });
});