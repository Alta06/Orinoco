let url = new URL(window.location.href);
let id = url.searchParams.get("id");
const cartIco = document.getElementById('cartIco');
const img = document.getElementById('productImg');
const title = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const addToCart = document.getElementById('addToCart');
cart = [];

//On récupère les informations liées à l'id concerné

ajaxGet("http://localhost:3000/api/teddies/" + id).then((reponse) => {
    const article = JSON.parse(reponse);
    img.src = article.imageUrl;
    img.setAttribute("alt", "Ours en peluche " + article.name);
    title.textContent = article.name;
    description.textContent = article.description;
    price.textContent = (article.price / 100 + ',00 €');

    const select = document.getElementById("colorSelect");
    const options = article.colors;
    
    for (let colors of options) {
        let el = document.createElement("option");
        el.textContent = colors;
        el.value = colors;
        select.appendChild(el);
    }

    //Au click sur le bouton ajout au panier, l'objet est ajouté dans le tableau "cart"
    addToCart.addEventListener('click', () => {
        const teddy = {
            id: id,
            qte: 1,
            name: article.name,
            price: article.price,
            img: article.imageUrl
        }
        //On vérifie si l'objet est déja dans le panier 
        var add = (cart, id) => {
            let found = cart.some(el => el.id === id);
            //Si non, on l'ajoute
            if (!found) {
                cart.push(teddy)
                //Si oui, on ajoute 1 à la quantité et on multiplie le prix par celle-ci
            } else {
                cart.map((teddy) => {
                    if (teddy.id == id) {
                        teddy.qte++;
                    }
                })
            };
        }

        add(cart, id);

        let amount = (teddy) => {
            return teddy.qte;
        }

        let sum = (prev, next) => {
            return prev + next;
        }

        document.getElementById('popProduct').textContent = cart.map(amount).reduce(sum);
        localStorage.setItem('nbOfProduct', JSON.stringify(cart.map(amount).reduce(sum)));
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');

