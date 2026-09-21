//filtroTipos
const botoesFiltro = document.querySelectorAll(".filtro-tipo");
const pokemonCards = document.querySelectorAll(".pokemon-card");

botoesFiltro.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botoesFiltro.forEach(function(b) {
            b.classList.remove("ativo");
        });
        botao.classList.add("ativo");

        const tipoSelecionado = botao.dataset.tipo;

        pokemonCards.forEach(function(card) {
            const tipos = card.dataset.tipos.split(" ");
            const mostrar = tipoSelecionado === "all" || tipos.includes(tipoSelecionado);
            card.style.display = mostrar ? "" : "none";
        });
    });
});
