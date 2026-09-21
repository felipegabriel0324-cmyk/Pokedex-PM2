//listarPOKEMONS
const pokemonGrid = document.querySelector(".pokemon-grid");

pokemons.forEach(function(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.dataset.tipos = pokemon.types.map(function(tipo) {
        return tipo.type.name;
    }).join(" ");

    const topo = document.createElement("div");
    topo.classList.add("pokemon-topo");

    const numero = document.createElement("span");
    numero.classList.add("pokemon-numero");
    numero.textContent = `#${String(pokemon.id).padStart(3, "0")}`;
    
    const favorito = document.createElement("button");
    favorito.classList.add("pokemon-favorito");
    favorito.textContent = "☆";
    
    
    topo.appendChild(numero);
    topo.appendChild(favorito);
    card.appendChild(topo);
    
    const imagem = document.createElement("img");
    imagem.src = pokemon.sprites.other["official-artwork"].front_default;
    card.appendChild(imagem);

    const nome = document.createElement("h3");
    nome.textContent = pokemon.name;
    nome.classList.add("pokemon-nome");
    card.appendChild(nome);

    const tipos = document.createElement("div");
    tipos.classList.add("pokemon-types");
    card.appendChild(tipos);
    pokemon.types.forEach(function(tipo) {
        const tipoElemento = document.createElement("span");
        tipoElemento.textContent = tipo.type.name;
        tipoElemento.classList.add(`tipo-${tipo.type.name}`);

        tipos.appendChild(tipoElemento);
    });
    
    const botao = document.createElement("button");
    botao.textContent = "+ Add";
    botao.classList.add("pokemon-add");
    card.appendChild(botao);

    pokemonGrid.appendChild(card);
});

