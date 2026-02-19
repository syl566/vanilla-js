//menu déroulant
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

// le formulaire doit être dans le document pour le soumettre
const form = document.getElementById("postForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    // Créer un nouvel élément pour le post
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h3>${title}</h3>
    <div class="post-content">
        <p>${content}</p>
    </div>
`;

    // Ajouter le post au conteneur
    const feedContainer = document.getElementById("feed-container");
    feedContainer.appendChild(postElement);

    // Réinitialiser le formulaire
    document.getElementById("postForm").reset();
});
