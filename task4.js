export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    return `${this.name} has reached level ${this.level}!`;
  }

  levelUp() {
    return (this.level += 1);
  }
}
