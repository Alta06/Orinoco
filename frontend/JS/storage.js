var storageCart = localStorage.getItem('cart');
var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');
var orderId = localStorage.getItem('orderId');

if (storageCart) {
    var cart = JSON.parse(storageCart);
}