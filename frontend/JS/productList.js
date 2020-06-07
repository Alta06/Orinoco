const articlesElt = document.getElementById("products");

// Création d'une boucle sur une requête GET pour récupérer chaque article

ajaxGet("http://localhost:3000/api/teddies").then((reponse) => {
    const articles = JSON.parse(reponse);
    for (let article of articles) {

        // Génération du code HTML à chaque nouvel article

        const ficheElt = document.createElement('div');
        ficheElt.classList.add("product");

        const titreElt = document.createElement("h3");
        titreElt.textContent = article.name;

        const contenuElt = document.createElement("p");
        contenuElt.textContent = article.description;
        contenuElt.classList.add("description");

        const priceElt = document.createElement("p");
        priceElt.textContent = (article.price /100 + ',00 €');
        priceElt.classList.add("price");

        const idElt = article._id;

        const clickableElt = document.createElement("a");
        clickableElt.setAttribute('id', 'goToProduct');
        // Le lien nous redirige vers la page de l'article visé
        clickableElt.setAttribute('href', 'product.html?id=' + idElt);

        const imageElt = document.createElement("img");
        imageElt.src = article.imageUrl;

        articlesElt.appendChild(ficheElt);
        ficheElt.appendChild(clickableElt);
        clickableElt.appendChild(imageElt);
        ficheElt.appendChild(titreElt);
        ficheElt.appendChild(contenuElt);
        ficheElt.appendChild(priceElt);
    };
});

document.getElementById('popProduct').textContent = localStorage.getItem('nbOfProduct');
