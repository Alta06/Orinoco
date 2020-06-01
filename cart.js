var storageCart = localStorage.getItem('cart');
//On vérifie que storageCart n'est pas null
if (storageCart) {
    var cart = JSON.parse(storageCart);
    var sum = JSON.parse(storageSum);
}
if (cart) {
    cart.forEach(function(obj) {
        var name = obj.name; 
        var price = obj.price;
        var quantity = obj.qte;

            var arrayBody = document.getElementById('arrayBody');
            var tr = document.createElement("tr");
            var tdImg = document.createElement("td");
            var img = document.createElement("img");
            var tdName = document.createElement("td");
            var tdPrice = document.createElement("td");
            var qte = document.createElement("td");
            tdPrice.setAttribute("class", "tdPrice");
            qte.setAttribute("class", "qte");
            tdImg.setAttribute("id", "tdImg");

            console.log(sum);
            img.src = obj.img;
            tdName.textContent = name;
            qte.textContent = quantity; 
            if (quantity > 1) {
                tdPrice.textContent = sum/100;
            } else {
                tdPrice.textContent = price/100;
            }
            
            document.getElementById('clear').addEventListener('click', function (event) {
                cart = [];
                sum = 0;
                JSON.stringify(localStorage.setItem('cart', cart));
                JSON.stringify(localStorage.setItem('sum', sum));
                location.reload();
            })
            
            arrayBody.appendChild(tr);
            tr.appendChild(tdImg);
            tdImg.appendChild(img);
            tr.appendChild(tdName);
            tr.appendChild(qte);
            tr.appendChild(tdPrice);
            console.log(cart);
        })
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

;