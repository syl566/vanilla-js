let galeries = [
    { id: 1, photo: "image/image (2).png", alt: "" },
    { id: 2, photo: "image/20230819_232312.jpg", alt: "" },
    { id: 3, photo: "image/feuille.JPG", alt: "" },
    { id: 4, photo: "image/Image 1.png", alt: "" },
    { id: 5, photo: "image/images.jpeg", alt: "" },
    { id: 6, photo: "image/images1.jpeg", alt: "" },
    { id: 7, photo: "image/images2.jpeg", alt: "" },
    { id: 8, photo: "image/images4.jpeg", alt: "" },
    { id: 9, photo: "image/images5.jpeg", alt: "" },
    { id: 10, photo: "image/tunnel.JPG", alt: "" }
];

//const images = [{ width: 200 }, { width: 300 }, { width: 150 }];

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

const gallery = document.getElementById("gallery");

function setGrid() {
    gallery.classList.remove("column");
    gallery.classList.add("grid");
}

function setColumn() {
    gallery.classList.remove("grid");
    gallery.classList.add("column");
}
