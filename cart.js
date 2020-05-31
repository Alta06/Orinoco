var storageCart = localStorage.getItem('cart');
//On vérifie que storageCart n'est pas null
if (storageCart) {
    var cart = JSON.parse(storageCart);
}

if (cart) {
    for (const id of cart) {

        ajaxGet("http://localhost:3000/api/teddies/" + id).then(function (reponse) {
            var article = JSON.parse(reponse);

            var arrayBody = document.getElementById('arrayBody');
            var tr = document.createElement("tr");
            var tdImg = document.createElement("td");
            var img = document.createElement("img");
            var tdName = document.createElement("td");
            var tdPrice = document.createElement("td");
            var qte = document.createElement("td");
            tdPrice.setAttribute("class", "tdPrice");
            qte.setAttribute("id", "qte");
            tdImg.setAttribute("id", "tdImg");

            img.src = article.imageUrl;
            tdName.textContent = article.name;
            tdPrice.textContent = (article.price / 100);
            qte.textContent = 1;
            
            document.getElementById('clear').addEventListener('click', function (event) {
                cart = [];
                JSON.stringify(localStorage.setItem('cart', cart));
                location.reload();
            })

            arrayBody.appendChild(tr);
            tr.appendChild(tdImg);
            tdImg.appendChild(img);
            tr.appendChild(tdName);
            tr.appendChild(qte);
            tr.appendChild(tdPrice);
        });

    };
    //On additionne le prix de chaque article
    //SetTimeout permet d'avoir le temps d'effectuer le calcul avant d'afficher le résultat
    setTimeout(function () {
        var prices = document.querySelectorAll('.tdPrice');
        let total = 0;
        for (var i = 0, c = prices.length; i < c; i++) {
            total += Number(prices[i].textContent);
            prices[i].textContent += ",00 €";
        };
        document.getElementById('total').textContent = (total + "€");
        localStorage.setItem('total', JSON.stringify(total));
    }, 500);

};