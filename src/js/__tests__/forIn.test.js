// test("", () => {});
import { Character, orderByPropsc } from "../forIn";

test("Sorting by a given order", () => {
  const obj = new Character("Holly");
  const sort = ["name", "level"];
  const result = orderByPropsc(obj, sort);
  expect(result).toEqual([
    { key: "name", value: "Holly" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ]);
});

test("sorting without specified order", () => {
  const obj = { name: "Holly", health: 10, level: 2, attack: 80, defence: 40 };
  const result = orderByPropsc(obj, []);
  expect(result).toEqual([
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "Holly" },
  ]);
});

test("empty object", () => {
    const obj = {}
    const sort = ["name", "level"];
    const result = orderByPropsc(obj, sort);
    expect(result).toEqual([])
})