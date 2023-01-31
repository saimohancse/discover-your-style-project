const buttons = document.querySelectorAll("button");
let cart = [];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (buttons[i].textContent === "Add to cart") {
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

const buttons = document.querySelectorAll("button");
let favourites = [];



for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].textContent === "Add to Favourites") {
    buttons[i].addEventListener("click", function() {
      const product = {
        name: buttons[i].previousElementSibling.previousElementSibling.textContent,
        price: buttons[i].previousElementSibling.textContent
      };
      favourites.push(product);
      console.log(favourites);
    });
  }
}
