document.getElementById("popProduct").textContent = localStorage.getItem("nbOfProduct");
document.getElementById("btnSubmit").disabled = true;

if (cart === undefined) {
    document.getElementById("cartTitle").textContent = "Votre panier est vide";
}
//On crée un tableau et une nouvelle ligne pour chaque nouveau produit

for (let item of cart) {

    let name, price, quantity;
    
    const arrayBody = document.getElementById("arrayBody"),
        tr = document.createElement("tr"),
        tdImg = document.createElement("td"),
        img = document.createElement("img"),
        tdName = document.createElement("td"),
        tdPrice = document.createElement("td"),
        tdqte = document.createElement("td");

    tdPrice.setAttribute("class", "tdPrice");
    tdqte.setAttribute("class", "qte");
    tdImg.setAttribute("id", "tdImg");

    name = item.name,
        price = item.price,
        quantity = item.qte;

    img.src = item.img;
    tdName.textContent = name;
    tdqte.textContent = quantity;
    tdPrice.textContent = (price * quantity) / 100;

    arrayBody.appendChild(tr);
    tr.appendChild(tdImg);
    tdImg.appendChild(img);
    tr.appendChild(tdName);
    tr.appendChild(tdqte);
    tr.appendChild(tdPrice);
}

let clear = document.getElementById("clear").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

//On additionne le prix de chaque article
let prices = document.querySelectorAll(".tdPrice"),
    total = 0;

for (let price of prices) {
    total += Number(price.textContent);
    price.textContent += ",00 €"
}

document.getElementById("total").textContent = (total + ",00 €");