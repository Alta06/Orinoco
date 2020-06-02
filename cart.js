var storageCart = localStorage.getItem('cart');
var cart = JSON.parse(storageCart);

if (cart) {
    //On crée un tableau et une nouvelle ligne pour chaque nouveau produit
    cart.forEach(function (obj) {

        var arrayBody = document.getElementById('arrayBody');
        var tr = document.createElement("tr");
        var tdImg = document.createElement("td");
        var img = document.createElement("img");
        var tdName = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdqte = document.createElement("td");
        tdPrice.setAttribute("class", "tdPrice");
        tdqte.setAttribute("class", "qte");
        tdImg.setAttribute("id", "tdImg");

        var name = obj.name;
        var price = obj.price;
        var quantity = obj.qte;
        img.src = obj.img;
        tdName.textContent = name;
        tdqte.textContent = quantity;
        tdPrice.textContent = (price * quantity) / 100;

        document.getElementById('clear').addEventListener('click', function (event) {
            cart = [];
            JSON.stringify(localStorage.setItem('cart', cart));
            location.reload();
        })

        arrayBody.appendChild(tr);
        tr.appendChild(tdImg);
        tdImg.appendChild(img);
        tr.appendChild(tdName);
        tr.appendChild(tdqte);
        tr.appendChild(tdPrice);
    })
};

//On additionne le prix de chaque article
    var prices = document.querySelectorAll('.tdPrice');
    let total = 0;
    for (var i = 0, c = prices.length; i < c; i++) {
        total += Number(prices[i].textContent);
        prices[i].textContent += ",00 €";
    };
    document.getElementById('total').textContent = (total + "€");
    localStorage.setItem('total', JSON.stringify(total));
;