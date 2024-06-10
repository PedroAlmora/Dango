document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const cartButton = document.getElementById("cart-button");
  const closeCartButton = document.getElementById("close-cart");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  cartButton.addEventListener("click", () => {
    cartModal.classList.toggle("hidden");
  });

  closeCartButton.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target !== cartButton && !cartModal.contains(event.target)) {
      cartModal.classList.add("hidden");
    }
  });
});