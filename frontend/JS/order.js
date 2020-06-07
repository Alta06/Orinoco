document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');

firstName = JSON.parse(firstName),
    lastName = JSON.parse(lastName),
    orderId = JSON.parse(orderId);

let amount = (teddies) => {
    return teddies.qte * (teddies.price / 100);
}

const add = (a, b) => a + b;

let sum = cart.map(amount).reduce(add);

document.getElementById('name').innerHTML = "Félicitation " + firstName + " " + lastName;
document.getElementById('amount').innerHTML = "Montant total de la commande : " + sum + ",00 €";
document.getElementById('orderId').innerHTML = "N° de commande : " + orderId;
