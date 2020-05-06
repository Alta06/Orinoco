var products = JSON.parse(localStorage.getItem('cart'));

var data = new Object();

(function () {
    function toJSONString(form) {
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

    var form = document.getElementById("myForm");
    var output = document.getElementById("cart");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
            var contact = toJSONString(this);

            data = {
                "contact": contact,
                "products": products
            };
            data = JSON.stringify(data);

            var request = new XMLHttpRequest();
            request.open("POST", "http://localhost:3000/api/teddies/order");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(data);
            
            
            setTimeout(function () {
                if (request.status == 201) {
                    var reponseJson = request.responseText;
                    var reponse = JSON.parse(reponseJson);
                    console.log(reponse.contact.firstName);
                    console.log(reponse.orderId);
                    console.log(reponse.products.name);
                    var testStorage = localStorage.getItem('total');
                    var totalPrice = JSON.parse(testStorage);

                    console.log(totalPrice);
                    localStorage.setItem('firstName', JSON.stringify(reponse.contact.firstName));
                    localStorage.setItem('lastName', JSON.stringify(reponse.contact.lastName));
                    localStorage.setItem('orderId', JSON.stringify(reponse.orderId));
                    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

                    window.location = "http://localhost:3000/order.html"
                }
            }, 100)
        },
        false);
})
();