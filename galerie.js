let images = [
    {
        id: 1, img: "image/20230819_232312.jpg", class: "active"
    },
    {
        id: 2, img: "image/feuille.JPG", class: "active"
    },
    {
        id: 3, img: "image/tunnel.JPG", class: "active"
    },
    {
        id: 4, img: "image/Image 1.png", class: "active"
    },
    {
        id: 5, img: "image/images.jpeg", class: "active"
    },
    {
        id: 6, img: "image/images1.jpeg", class: "active"
    },
    {
        id: 7, img: "image/images2.jpeg", class: "active"
    },
    {
        id: 8, img: "image/images4.jpeg", class: "active"
    },
    { id: 9, img: "image/images5.jpeg", class: "active" }

]

function createdCard(image) {
    let div = document.createElement("div");
    div.classList.add("card");

    let img = document.createElement("img");
    img.src = image.img;

    let btn = document.createElement("button");
    btn.textContent = "Supprimer";
    btn.addEventListener("click", function () {
        div.remove(); // supprime la carte entière (l'image + le bouton)
    });

    div.appendChild(img);
    gallery.appendChild(div);
    div.appendChild(btn);

}
window.addEventListener('load', function () {
    images.forEach((image) => {
        createdCard(image);
    });
});

function setGrid() {
    gallery.classList.remove("column");
    gallery.classList.add("grid");
}

function setColumn() {
    gallery.classList.remove("grid");
    gallery.classList.add("column");
}

function GFG_Fun() {
    const img = document.createElement("img");
    img.src = 'https://picsum.photos/200/300';
    gallery.appendChild(img);
}

function GFG_Out() {
    gallery.innerHTML = "";
}

//menu déroulant
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Ferme le menu déroulant si je clique en dehors de celui-ci.
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


