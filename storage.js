var storageCart = localStorage.getItem('cart');
var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var orderId = localStorage.getItem('orderId');
    var totalPrice = localStorage.getItem('totalPrice');

if (storageCart) {
var cart = JSON.parse(storageCart);
}
