const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

// A
const pokemon2 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

// B
pokemon1.ataques = [];


const ataque1 = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};
pokemon1.ataques.push(ataque1);

// C
pokemon2.ataques = [...pokemon1.ataques];

const ataque2 = {
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Grama",
  precisao: 100,
};

const ataque3 = {
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100,
};

// D
pokemon2.ataques.push(ataque2);

// E
pokemon2.ataques.push(ataque3);

// F
console.log(pokemon1);
console.log(pokemon2);
