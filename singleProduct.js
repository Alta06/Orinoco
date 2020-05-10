var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
var cartIco = document.getElementById('cartIco');
var img = document.getElementById('productImg');
var title = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var cart = [];

var addToCart = document.getElementById('addToCart');

ajaxGet("http://localhost:3000/api/teddies/" + id, function (reponse) {
    // Transforme la réponse en un tableau d'articles
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
