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

function removeFromCart(itemX){

	for (let i = 0; i < cart.length; i++){
		if (itemX == Object.keys(cart[i])[0]){
			cart.splice(i,1);
			return cart;
		}
	}
	console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}
