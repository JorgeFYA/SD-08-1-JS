export class Player {
  constructor(name, level, xp, inventory) {
    this.name = name;
    this.level = level;
    this.xp = xp;
    this.inventory = inventory;
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

  showInventory() {
    console.log(`\nInventario de ${this.name}:`);
    for (let i = 0; i < this.inventory.length; i++) {
      const element = this.inventory[i];
      //console.log(`${i + 1}. ${element.item} (x${element.quantity})`);
      console.log(element);
    }
  }

  deleteObjectFromInventory(objectId) {
    this.inventory.splice(objectId - 1, 1);
  }

  addObjectToInventory(objectId) {
    this.inventory.push(objectId);
  }
  /*
//needs prompt
  createItemList() {
    const uniqueItems = +prompt('¿How many unique items are in your inventory? ');
    const itemList = [];

    for (let i = 0; i < uniqueItems; i++) {
      let item = prompt(`How its called item ${i + 1}? `);
      let quantity = +prompt(`How many ${item} do you have? `);
      itemList.push({ item: item, quantity: quantity });
    }

    return (this.inventory = itemList);
  }*/
}
