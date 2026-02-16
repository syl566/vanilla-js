let articles = [
    { id: 1, photo: "../image/feuille.JPG", alt: "feuille d'automne", titre: "feuille d'automne", texte: "lorem" },
    { id: 2, photo: "../image/tunnel.JPG", alt: "tunnel", titre: "tunnel végétal", texte: "lorem" },
    { id: 3, photo: "../image/20230819_232312.jpg", alt: "feu d'artifice", titre: "feu d'artifice", texte: "lorem" }];


function createdCard(article) {
    let div = document.createElement("div");
    document.body.appendChild(div);

    let img = document.createElement("img");
    img.src = article.photo;

    img.textContent = article.photo;
    document.body.appendChild(img);


    let h3 = document.createElement("titre");
    h3.textContent = article.titre;
    document.body.appendChild(h3);


    let p = document.createElement("texte");
    p.textContent = article.texte;
    document.body.appendChild(p);
}


window.addEventListener('load', function () {
    const container = document.getElementById("feed-container");
    articles.forEach((article) => { createdCard(article, container) });
});

async function fetchArticles() {

    const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10");
    const jokeapi = await reponse.json();
    console.log(jokeapi);

}
