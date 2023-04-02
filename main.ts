import prompt from "prompt-sync";
import Personagem from "./Personagem";

let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead()) {
  console.log("+========= Personagem =============+");
  console.log("|1. Treinar ataque                 |");
  console.log("|2. Treinar defesa                 |");
  console.log("|3. Descansar                      |");
  console.log("|4. Entrar em batalha              |");
  console.log("|8. Imprimir atributos             |");
  console.log("|9. Sair                           |");
  console.log("+==================================+");

  option = +teclado("Escolha uma ação");
  console.log("passou", option);

  switch (option) {
    case 1:
      person.treinarAtaque();
      person.status();
      break;
    case 2:
      person.treinarDefesa();
      person.status();
      break;
    case 3:
      let horas: number = +teclado("Digite o numero de horas");
      person.descansar(horas);
      person.status();
      break;
    case 4:
      let rest = person.batalhar();
      console.log(`Essa batalha teve um custo ${rest} de energia`);
      break;
    case 8:
      person.status();
      break;
    default:
      break;
  }
}
