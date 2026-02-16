let articles = [
    { id: 1, photo: "image/feuille.JPG", alt: "feuille d'automne", titre: "feuille d'automne", texte: "lorem" },
    { id: 2, photo: "image/tunnel.JPG", alt: "tunnel", titre: "tunnel végétal", texte: "lorem" },
    { id: 3, photo: "image/20230819_232312.jpg", alt: "feu d'artifice", titre: "feu d'artifice", texte: "lorem" }];

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

// le formulaire doit être dans le document pour le soumettre
document.body.append(form);

form.submit();
// Récupérer le formulaire et le feed
const postForm = document.getElementById('postForm');
const feed = document.getElementById('feed');

postForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    // Créer un nouvel élément post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    // Ajouter le post en haut du feed
    postDiv.appendChild(deleteBtn);
    document.getElementById("feed-container").appendChild(postDiv);

    // Réinitialiser le formulaire
    document.getElementById("postForm").reset();
});

