const buttons = document.querySelectorAll("button");
let cart = [];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const product = {
      name: buttons[i].previousElementSibling.previousElementSibling.textContent,
      price: buttons[i].previousElementSibling.textContent
    };
    cart.push(product);
    console.log(cart);
  });
}
