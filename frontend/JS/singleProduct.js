document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');

let url = new URL(window.location.href),
    id = url.searchParams.get("id");
const img = document.getElementById('productImg'),
    title = document.getElementById('name'),
    description = document.getElementById('description'),
    price = document.getElementById('price'),
    addToCart = document.getElementById('addToCart');
cart = [];

//On récupère les informations liées à l'id concerné

ajaxGet("http://localhost:3000/api/teddies/" + id).then((reponse) => {

    const article = JSON.parse(reponse);
    let select, options, teddy, teddyColor;

    img.src = article.imageUrl;
    img.setAttribute("alt", "Ours en peluche " + article.name);
    title.textContent = article.name;
    description.textContent = article.description;
    price.textContent = (article.price / 100 + ',00 €');

    options = article.colors,
        teddy = {
            id: id,
            qte: 1,
            name: article.name,
            price: article.price,
            img: article.imageUrl
        }

    for (let colors of options) {
        teddyColor = document.createElement("option");
        teddyColor.textContent = colors;
        teddyColor.value = colors;
        select = document.getElementById("colorSelect");
        select.appendChild(teddyColor);
    }
    //On vérifie si l'objet est déja dans le panier 
    const add = (cart, id) => {
        let found = cart.some(el => el.id === id);
        //Si non, on l'ajoute
        if (!found) {
            cart.push(teddy)
            //Si oui, on ajoute 1 à la quantité
        } else {
            cart.map((teddy) => {
                if (teddy.id == id) {
                    teddy.qte++;
                }
            })
        };
    }
    //Au click sur le bouton ajout au panier, l'objet est ajouté dans le tableau "cart"
    addToCart.addEventListener('click', () => {
        add(cart, id);

        let amount = (teddy) => {
                return teddy.qte;
            },

            sum = (prev, next) => {
                return prev + next;
            },

            nbOfProduct = document.getElementById('popProduct').textContent = cart.map(amount).reduce(sum);

        localStorage.setItem('nbOfProduct', JSON.stringify(nbOfProduct));
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});