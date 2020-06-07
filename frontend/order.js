var firstName = JSON.parse(firstName);
var lastName = JSON.parse(lastName);
var orderId = JSON.parse(orderId);

let amount = (obj) => {
    return obj.qte * (obj.price / 100);
}

const add = (a, b) => a + b;
let sum = cart.map(amount).reduce(add);

document.getElementById('name').innerHTML = "Félicitation " + firstName + " " + lastName;
document.getElementById('amount').innerHTML = "Montant total de la commande : " + sum + ",00 €";
document.getElementById('orderId').innerHTML = "N° de commande : " + orderId;


document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');