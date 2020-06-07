document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');

const articlesElt = document.getElementById("products");

// Création d'une boucle sur une requête GET pour récupérer chaque article

ajaxGet("http://localhost:3000/api/teddies").then((reponse) => {
    const articles = JSON.parse(reponse);
    for (let article of articles) {

        // Génération du code HTML à chaque nouvel article

        const ficheElt = document.createElement('div'),
            titreElt = document.createElement("h3"),
            contenuElt = document.createElement("p"),
            priceElt = document.createElement("p"),
            clickableElt = document.createElement("a"),
            imageElt = document.createElement("img");
        
        ficheElt.classList.add("product");
        contenuElt.classList.add("description");
        priceElt.classList.add("price");

        titreElt.textContent = article.name;
        contenuElt.textContent = article.description;
        priceElt.textContent = (article.price / 100 + ',00 €');
        imageElt.src = article.imageUrl;
        idElt = article._id;

        // Le lien nous redirige vers la page de l'article visé
        clickableElt.setAttribute('id', 'goToProduct');
        clickableElt.setAttribute('href', 'product.html?id=' + idElt);

        articlesElt.appendChild(ficheElt);
        ficheElt.appendChild(clickableElt);
        clickableElt.appendChild(imageElt);
        ficheElt.appendChild(titreElt);
        ficheElt.appendChild(contenuElt);
        ficheElt.appendChild(priceElt);
    };
});