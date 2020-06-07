//On récupère les id des produits dans le tableau cart et on les places dans le tableau products
let id = cart.map(a => a.id);
const products = [];
products.push(id);
let data = new Object();

//On récupère les entrées de chaque champs et on les stocks dans un objet "contact"
function getFormData(form) {
    const contact = {};
    const elements = form.querySelectorAll("input");
    for (let i = 0; i < elements.length; ++i) {
        let element = elements[i];
        let name = element.name;
        let value = element.value;

        if (name) {
            contact[name] = value;
        }
    }
    return contact;
}

if (id.length >= 1) {
    document.getElementById('btnSubmit').disabled = false;
}

//Lors de l'évènement "submit", on stock contact et products dans un objet "data"
let form = document.getElementById("myForm");

form.addEventListener("submit", (e) =>{
        e.preventDefault();

        let contact = getFormData(form);
        data = {
            contact,
            products
        };
        //Puis on le formate en JSON pour l'envoyer via une requête POST
        data = JSON.stringify(data);

        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/teddies/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(data);

        setTimeout(() => {
            if (request.status == 201) {
                let reponseJson = request.responseText;
                let reponse = JSON.parse(reponseJson);

                localStorage.setItem('firstName', JSON.stringify(reponse.contact.firstName));
                localStorage.setItem('lastName', JSON.stringify(reponse.contact.lastName));
                localStorage.setItem('orderId', JSON.stringify(reponse.orderId));

                window.location = "order.html";
            }
        }, 100)
    },
    false);