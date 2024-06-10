var total = 0;

function openCartModal(itemName, itemPrice) {
  var cartModal = document.getElementById("cartModal");
  cartModal.classList.remove("hidden");

  var cartItems = document.getElementById("cartItems");
  var cartItem = document.createElement("li");
  cartItem.className = "flex justify-between items-center py-2";
  cartItem.innerHTML = `
        <span>${itemName}</span>
        <span>$${itemPrice}</span>
        <button onclick="removeCartItem(this)" class="text-red-500 ml-2">Remove</button>
    `;
  cartItems.appendChild(cartItem);

  total += parseFloat(itemPrice);

  var cartTotal = document.getElementById("cartTotal");
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeCartItem(button) {
  var itemToRemove = button.parentNode;
  var itemName = itemToRemove.querySelector("span:first-child").textContent;
  var itemPrice = itemToRemove
    .querySelector("span:nth-child(2)")
    .textContent.replace("$", "");

  total -= parseFloat(itemPrice);

  itemToRemove.remove();

  var cartTotal = document.getElementById("cartTotal");
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function closeCartModal() {
  var cartModal = document.getElementById("cartModal");
  cartModal.classList.add("hidden");
}
