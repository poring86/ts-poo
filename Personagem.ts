import prompt from 'prompt-sync';

class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {
  }
}

let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Entrar em batalha              |")
    console.log("|8. Imprimir atributos             |")
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação");
    console.log('passou', option);

    switch (option) {
        case 1:
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10
            break;
        case 2:
            person.defesa += Math.random() * 5
            person.energia -= Math.random() * 10
            break;
        case 3:
            person.energia += Math.random() * 10
            break
        case 8:
            console.log("person :>>", person)
            break
        default:
            break;
    }
}
