const buttons = document.querySelectorAll("button");
let cart = [];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const product = {
      name: buttons[i].previousElementSibling.previousElementSibling.textContent,
      price: buttons[i].previousElementSibling.textContent
    };
    cart.push(product);
    updateCartDisplay();
  });
}

function updateCartDisplay() {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += parseFloat(product.price.replace("₹", ""));
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <p>₹{product.name} - ₹{product.price}</p>
    `;
    cartContainer.appendChild(productElement);
  }
  const totalElement = document.createElement("p");
  totalElement.innerHTML = `Total: ₹₹{total.toFixed(2)}`;
  cartContainer.appendChild(totalElement);
}


const favoriteButton = document.getElementById("favorite-button");

favoriteButton.addEventListener("click", function() {
  // Add logic to store the item as a favorite in local storage or make API call to server
});
