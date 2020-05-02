var articlesElt = document.getElementById("products");
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article


        var ficheElt = document.createElement('div');
        ficheElt.classList.add("products");

        var titreElt = document.createElement("h3");
        titreElt.textContent = article.name;


        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.description;
        contenuElt.classList.add("description");


        var priceElt = document.createElement("p");
        priceElt.textContent = (article.price /100 + ',00 €');
        priceElt.classList.add("price");


        var idElt = article._id;

        var clickableElt = document.createElement("a");
        clickableElt.setAttribute('id', 'goToProduct');
        clickableElt.setAttribute('href', 'product.html?id=' + idElt);

        var imageElt = document.createElement("img");
        imageElt.src = article.imageUrl;

        var addToCart = document.createElement("a");
        addToCart.setAttribute("href", "cart.html");
        addToCart.setAttribute("id", "addToCart")
        addToCart.textContent = ("Ajouter au panier");

        articlesElt.appendChild(ficheElt);
        ficheElt.appendChild(clickableElt);
        clickableElt.appendChild(imageElt);
        ficheElt.appendChild(titreElt);
        ficheElt.appendChild(contenuElt);
        ficheElt.appendChild(priceElt);
        ficheElt.appendChild(addToCart);
        
        
    });
});