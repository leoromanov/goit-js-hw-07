"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulRef = document.querySelector("#ingredients");
// console.log(ulRef);

const newArray = [];
ingredients.forEach((ingredient) => {
  // console.log(ingredient);
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  newArray.push(liRef);
});
// console.log(newArray);

ulRef.append(...newArray);
// console.log(ulRef);

// const createLi = ([...ingredients]) => {
//   let ingredient = document.createElement("li");
//   ingredient.textContent = `${ingredient}`;
// };
// console.log(createLi(ingredients));

// const inputList = ingredients.forEach((item, idx) => {
//   const eachElement = ingRef.document.createElement("li");
// });
// console.log(inputList);

/* 
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement(). */
