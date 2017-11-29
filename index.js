var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName){
	var itemPrice = Math.floor(100 * Math.random());
	var object = {[itemName]: itemPrice};
	cart.push(object);
	console.log(`${itemName} has been added to your cart.`);
	return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
      var message = "In your cart, you have "
      for (var i = 0; i < cart.length; i++){
        for (var value in cart[i]){
          message += `${value} at $${cart[i][value]}`
          if (i !== cart.length - 1){
              message += ", "
            } else {
              message += "."
            }
          }
        }
      }
  console.log(message)
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
