var url = new URL(window.location.href);
var id = url.searchParams.get("id");
var cartIco = document.getElementById('cartIco');
var img = document.getElementById('productImg');
var title = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var cart = [];
var addToCart = document.getElementById('addToCart');

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

    var numberOfproduct = 1;

    //Au click sur le bouton ajout au panier, l'id du produit est ajouté dans le tableau "cart"
    addToCart.addEventListener('click', function () {
        cart.push(id);

        if (!document.getElementById('popProduct')) {
            var pop = document.createElement('span');
            cartIco.appendChild(pop);
            pop.setAttribute('id', 'popProduct');
        }
        document.getElementById('popProduct').textContent = cart.length;
        numberOfproduct++;

        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

