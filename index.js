var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = getRandomInt(1, 100);
  var itemCart = { itemName: item, itemPrice: price};
  cart.push(itemCart);
  //console.log(cart);
  return `${ item } has been added to your cart.``;
}

function viewCart() {
  console.log(cart);
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  }
  else {
    var newArray = [];
    for (let i = 0; i < cart.length; i++) {
      newArray.push(cart[i].itemName + " at $" + cart[i].itemPrice);
    }
    var last = newArray.pop();
    var newLast = "and " + last;
    newArray.push(newLast);
    return "In your cart, you have " + newArray.join(", ") + ".";
  }
}

function total() {
  var price = 0;
  for (let i = 0; i < cart.length; i++) {
    price = cart[i].itemPrice + price;
  }
  return price;
}

function removeFromCart(item) {
  //here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
