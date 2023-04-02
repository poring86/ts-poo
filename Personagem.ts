export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  status() {
    const obj = {
      nome: this.nome,
      energia: this.energia,
      vida: this.vida,
      ataque: this.ataque,
      defesa: this.defesa,
    };

    return obj;
  }

  treinarAtaque(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;
    this.isDead();
    if (this.ataque > 100) {
      this.ataque = 100;
    }
  }
  treinarDefesa(): void {
    this.defesa += Math.random() * 5;
    this.energia -= Math.random() * 10;
    this.isDead();
    if (this.defesa > 100) {
      this.defesa = 100;
    }
  }

  descansar(horas: number): void {
    this.energia += horas * Math.random() * 10;
    this.isDead();
    if (this.energia > 100) {
      this.energia = 100;
    }
  }
  batalhar(): number {
    let desgaste = Math.random() * 100;
    this.energia -= desgaste;
    return desgaste;
  }
  isDead(): boolean {
    return this.energia > 0;
  }
}
