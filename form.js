var products = JSON.parse(localStorage.getItem('cart'));
var data = new Object();

//On récupère les entrées de chaque champs et on les stocks dans un objet "contact"
(function () {
    function getFormData(form) {
        var contact = {};
        var elements = form.querySelectorAll("input");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                contact[name] = value;
            }
        }
        return contact;
    }

    //Lors de l'évènement "submit", on stock contact et products dans un objet "data"
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function (e) {
            e.preventDefault();
            var contact = getFormData(form);

            data = {
                "contact": contact,
                "products": products
            };
            //Puis on le formate en JSON pour l'envoyer via une requête POST
            data = JSON.stringify(data);

            var request = new XMLHttpRequest();
            request.open("POST", "http://localhost:3000/api/teddies/order");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(data);
         
            setTimeout(function () {
                if (request.status == 201) {
                    var reponseJson = request.responseText;
                    var reponse = JSON.parse(reponseJson);
                    var testStorage = localStorage.getItem('total');
                    var totalPrice = JSON.parse(testStorage);

                    localStorage.setItem('firstName', JSON.stringify(reponse.contact.firstName));
                    localStorage.setItem('lastName', JSON.stringify(reponse.contact.lastName));
                    localStorage.setItem('orderId', JSON.stringify(reponse.orderId));
                    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
                }
            }, 100)
        },
        false);
})
();