
const pokemons = [
  {
    id: 25,
    name: "pikachu",
    height: 4,   // decímetros -> 0.4 m
    weight: 60,  // hectogramas -> 6.0 kg
    base_experience: 112,
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    abilities: [
      {
        ability: { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" },
        is_hidden: false,
        slot: 1
      },
      {
        ability: { name: "lightning-rod", url: "https://pokeapi.co/api/v2/ability/31/" },
        is_hidden: true,
        slot: 3
      }
    ],
    stats: [
      { base_stat: 35, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 55, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 40, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 50, effort: 0, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 50, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 90, effort: 2, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        }
      }
    }
  },

  {
    id: 6,
    name: "charizard",
    height: 17,   // 1.7 m
    weight: 905,  // 90.5 kg
    base_experience: 267,
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      }
    ],
    abilities: [
      {
        ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/" },
        is_hidden: false,
        slot: 1
      },
      {
        ability: { name: "solar-power", url: "https://pokeapi.co/api/v2/ability/94/" },
        is_hidden: true,
        slot: 3
      }
    ],
    stats: [
      { base_stat: 78, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 84, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 78, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 109, effort: 3, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 85, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 100, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        }
      }
    }
  },

  {
    id: 1,
    name: "bulbasaur",
    height: 7,   // 0.7 m
    weight: 69,  // 6.9 kg
    base_experience: 64,
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ],
    abilities: [
      {
        ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" },
        is_hidden: false,
        slot: 1
      },
      {
        ability: { name: "chlorophyll", url: "https://pokeapi.co/api/v2/ability/34/" },
        is_hidden: true,
        slot: 3
      }
    ],
    stats: [
      { base_stat: 45, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 49, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 49, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 65, effort: 1, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 65, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 45, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
    }
  },
    {
    id: 4,
    name: "charmander",
    height: 6,
    weight: 85,
    base_experience: 62,
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/"
        },
        is_hidden: true,
        slot: 3
      }
    ],
    stats: [
      { base_stat: 39, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 52, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 43, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 60, effort: 0, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 50, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 65, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        }
      }
    }
  },

  {
    id: 7,
    name: "squirtle",
    height: 5,
    weight: 90,
    base_experience: 63,
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    abilities: [
      {
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/"
        },
        is_hidden: true,
        slot: 3
      }
    ],
    stats: [
      { base_stat: 44, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 48, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 65, effort: 1, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 50, effort: 0, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 64, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 43, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        }
      }
    }
  },

  {
    id: 94,
    name: "gengar",
    height: 15,
    weight: 405,
    base_experience: 225,
    types: [
      {
        slot: 1,
        type: {
          name: "ghost",
          url: "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    abilities: [
      {
        ability: {
          name: "cursed-body",
          url: "https://pokeapi.co/api/v2/ability/130/"
        },
        is_hidden: false,
        slot: 1
      }
    ],
    stats: [
      { base_stat: 60, effort: 0, stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" } },
      { base_stat: 65, effort: 0, stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" } },
      { base_stat: 60, effort: 0, stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" } },
      { base_stat: 130, effort: 2, stat: { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" } },
      { base_stat: 75, effort: 0, stat: { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" } },
      { base_stat: 110, effort: 0, stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
        }
      }
    }
  }
];

// Disponibiliza o array tanto para uso direto no navegador (<script src="pokemons.js">)
// quanto para import em módulos Node/ES (usado, por exemplo, em testes).
if (typeof module !== "undefined" && module.exports) {
  module.exports = pokemons;
}