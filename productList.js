var articlesElt = document.getElementById("products");

// Création d'une boucle sur une requête GET pour récupérer chaque article

ajaxGet("http://localhost:3000/api/teddies").then( function (reponse) {
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {

        // Génération du code HTML à chaque nouvel article

        var ficheElt = document.createElement('div');
        ficheElt.classList.add("product");

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
        // Le lien nous redirige vers la page de l'article visé
        clickableElt.setAttribute('href', 'product.html?id=' + idElt);

        var imageElt = document.createElement("img");
        imageElt.src = article.imageUrl;

        articlesElt.appendChild(ficheElt);
        ficheElt.appendChild(clickableElt);
        clickableElt.appendChild(imageElt);
        ficheElt.appendChild(titreElt);
        ficheElt.appendChild(contenuElt);
        ficheElt.appendChild(priceElt);
    });
});