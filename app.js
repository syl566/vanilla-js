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


window.addEventListener('load', function () {
  articles.forEach((article) => { createdCard(article) });
});

async function fetchArticles() {

  const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10");
  const jokeapi = await reponse.json();
  console.log(jokeapi);

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Fermer le menu déroulant si l'utilisateur clique en dehors de celui-ci.
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



let form = document.getElementById('postForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  let PostTitle = getElemmentByld('postTitle').value;
  let PostContent = getElementById('postContent').value;


});

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


