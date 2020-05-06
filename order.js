var firstName = JSON.parse(firstName);
var lastName = JSON.parse(lastName);
var totalPrice = JSON.parse(totalPrice);
var orderId = JSON.parse(orderId);

document.getElementById('name').innerHTML = "Félicitation " + firstName ;
document.getElementById('amount').innerHTML = "Montant total de la commande : " + totalPrice + ",00 €";
document.getElementById('orderId').innerHTML = "N° de commande : " + orderId;

