  // Read the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartContainer = document.getElementById('cart-items');
let subtotalElement = document.getElementById('subtotal'); // Add an element to show the subtotal

function renderCart() {
  cartContainer.innerHTML = ''; // Clear the container first

  let totalPrice = 0; // Variable to calculate total price

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>The cart is empty</p>";
    subtotalElement.innerHTML = "Subtotal (0 items): <strong>$0.00</strong>"; // Show $0 if cart is empty
  } else {
    cart.forEach((item, index) => {
      let productDiv = document.createElement('div');
      productDiv.className = 'cart-item'; // Make sure it matches the updated class
      productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h2>${item.name}</h2>
          <p>Price: ${item.price} EGP</p>
          <p>Quantity: <select class="quantity-select" onchange="updateQuantity(${index}, this)">
            ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}" ${i + 1 === item.quantity ? 'selected' : ''}>${i + 1}</option>`).join('')}
          </select></p>
        </div>
        <button class="remove-btn" onclick="deleteItem(${index})">🗑️</button>
      `;
      cartContainer.appendChild(productDiv);

      // Calculate total price (price * quantity)
      totalPrice += item.price * item.quantity;
    });

    // Update subtotal (total price)
    subtotalElement.innerHTML = `Subtotal (${cart.length} items): <strong>${totalPrice.toLocaleString()} EGP</strong>`;
  }
}

function deleteItem(index) {
  cart.splice(index, 1); // Remove the product from the array
  localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
  renderCart(); // Re-render the cart and update the subtotal
}

function updateQuantity(index, selectElement) {
  cart[index].quantity = parseInt(selectElement.value); // Update quantity in the cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
  renderCart(); // Re-render the cart and update the subtotal
}

// Render the cart when the page loads
renderCart();

// ✅ Update the checkout button to show total and item count
document.getElementById('checkout-btn').addEventListener('click', () => {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;
  let itemCount = 0;

  items.forEach(item => {
    const price = parseFloat(item.querySelector('.price').textContent.replace('EGP', '').trim());
    const qty = parseInt(item.querySelector('.quantity-select').value);
    total += price * qty;
    itemCount += qty;
  });

  alert(`Proceeding to checkout...\nTotal (${itemCount} items): EGP ${total.toFixed(2)}`);
});

