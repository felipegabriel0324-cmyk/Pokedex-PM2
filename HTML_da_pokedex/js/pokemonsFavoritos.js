const botoesFavoritos = document.querySelectorAll(".pokemon-favorito");

botoesFavoritos.forEach(function(favorito) {

    favorito.addEventListener("click", function() {

        if (favorito.textContent === "☆") {
            favorito.textContent = "★";
        } else {
            favorito.textContent = "☆";
        }

    });

});