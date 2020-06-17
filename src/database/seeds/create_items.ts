import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "club", image: "club.png" },
    { title: "culture", image: "culture.png" },
    { title: "entertainment", image: "entertainment.png" },
    { title: "food", image: "food.png" },
    { title: "nature", image: "nature.png" },
    { title: "shopping", image: "shopping.png" }
  ]);
}
