export class Personagem {
  constructor(
    private _nome: string,
    private energia: number,
    private vida: number,
    private ataque: number,
    private defesa: number
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

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

  public treinarAtaque(): void {
    this.ataque += this.randomizar(7);
    this.energia -= this.randomizar(10);
    this.isDead();
    if (this.ataque > 100) {
      this.ataque = 100;
    }
  }
  public treinarDefesa(): void {
    this.defesa += this.randomizar(5);
    this.energia -= this.randomizar(10);
    this.isDead();
    if (this.defesa > 100) {
      this.defesa = 100;
    }
  }

  public descansar(horas: number): void {
    this.energia += horas * this.randomizar(10);
    this.isDead();
    if (this.energia > 100) {
      this.energia = 100;
    }
  }
  public batalhar(): number {
    let desgaste = this.randomizar(10);
    this.energia -= desgaste;
    return desgaste;
  }
  public isDead(): boolean {
    return this.energia > 0;
  }

  private randomizar(fator: number): number {
    return Math.random() * fator;
  }
}
