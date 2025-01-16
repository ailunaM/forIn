export class Character {
  constructor(name, health = 10, level = 2, attack = 80, defence = 40) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
export function orderByPropsc(obj, sort) {
  const result = [];

  for (let key of sort) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const properties = [];

  for (let key in obj) {
    if (!sort.includes(key)) {
      properties.push({ key, value: obj[key] });
    }
  }
  properties.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    } else {
      return -1;
    }
  });
  return [...result, ...properties];
}

const obj = new Character("Holly");
const sort = ["name", "level"];
console.log(orderByPropsc(obj, sort));

// const obj = new Character("Holly");
// console.log(orderByPropsc(obj, []));

// const obj = {}
// const sort = ["name", "level"];
// console.log(orderByPropsc(obj, sort));
