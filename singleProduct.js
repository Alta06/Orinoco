var url = new URL(window.location.href);
var id = url.searchParams.get("id");
var cartIco = document.getElementById('cartIco');
var img = document.getElementById('productImg');
var title = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var addToCart = document.getElementById('addToCart');
var cart = [];

//On récupère les informations liées à l'id concerné

ajaxGet("http://localhost:3000/api/teddies/" + id).then(function (reponse) {
    var article = JSON.parse(reponse);
    img.src = article.imageUrl;
    img.setAttribute("alt", "Ours en peluche " + article.name);
    title.textContent = article.name;
    description.textContent = article.description;
    price.textContent = (article.price / 100 + ',00 €');

    var select = document.getElementById("colorSelect");
    var options = article.colors;
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    console.log(article.name);

    //Au click sur le bouton ajout au panier, l'objet est ajouté dans le tableau "cart"
    addToCart.addEventListener('click', function () {
        var obj = {
            id: id,
            qte: 1,
            name: article.name,
            price: article.price,
            img: article.imageUrl
        }
        //On vérifie si l'objet est déja dans le panier 
        function add(cart, id) {
            const found = cart.some(el => el.id === id);
            //Si non, on l'ajouter
            if (!found) {
                cart.push(obj)
                //Si oui, on ajoute 1 à la quantité et on multiplie le prix par celle-ci
            } else {
                cart.map(function (obj) {
                    if (obj.id == id){
                        obj.qte++;
                    }
                })

            };
            return cart;
        }
        add(cart, id);

        if (!document.getElementById('popProduct')) {
            var pop = document.createElement('span');
            cartIco.appendChild(pop);
            pop.setAttribute('id', 'popProduct');
        }

        function amount(obj) {
            return obj.qte;
        }

        function sum(prev, next) {
            return prev + next;
        }

        document.getElementById('popProduct').textContent = cart.map(amount).reduce(sum);
        localStorage.setItem('cart', JSON.stringify(cart));
    });

});