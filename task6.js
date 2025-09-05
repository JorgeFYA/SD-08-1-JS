export class Player {
  constructor(name, level, xp, party) {
    this.name = name;
    this.level = level;
    this.xp = xp;
    this.party = party;
  }

  info() {
    return `${this.name} has reached level ${this.level}!`;
  }

  levelUp() {
    if (this.xp >= 100) {
      this.level++;
      this.xp -= 100;
      return `${this.name} ha alcanzado 100pts de experiencia y subió de nivel, ahora es nivel ${this.level}`;
    } else {
      return `${this.name} tiene ${this.xp} de experiencia, y aún no es suficiente para subir de nivel`;
    }
  }

  increaseXp() {
    this.xp += 10;
    return this.levelUp();
  }
}
