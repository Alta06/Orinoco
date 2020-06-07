    //On crée un tableau et une nouvelle ligne pour chaque nouveau produit
    document.getElementById('btnSubmit').disabled = true;

    cart.forEach(function (obj) {

        const arrayBody = document.getElementById('arrayBody');
        const tr = document.createElement("tr");
        const tdImg = document.createElement("td");
        const img = document.createElement("img");
        const tdName = document.createElement("td");
        const tdPrice = document.createElement("td");
        const tdqte = document.createElement("td");
        tdPrice.setAttribute("class", "tdPrice");
        tdqte.setAttribute("class", "qte");
        tdImg.setAttribute("id", "tdImg");

        let name = obj.name;
        let price = obj.price;
        let quantity = obj.qte;
        img.src = obj.img;
        tdName.textContent = name;
        tdqte.textContent = quantity;
        tdPrice.textContent = (price * quantity) / 100;

        document.getElementById('clear').addEventListener('click', function (event) {
            localStorage.clear();
            location.reload();
        })

        arrayBody.appendChild(tr);
        tr.appendChild(tdImg);
        tdImg.appendChild(img);
        tr.appendChild(tdName);
        tr.appendChild(tdqte);
        tr.appendChild(tdPrice);
    })

//On additionne le prix de chaque article
    let prices = document.querySelectorAll('.tdPrice');
    let total = 0;
    for (let i = 0, c = prices.length; i < c; i++) {
        total += Number(prices[i].textContent);
        prices[i].textContent += ",00 €";
    };

    document.getElementById('total').textContent = (total + "€");
    document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');


