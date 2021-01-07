"use strict";

const categoryList = document.querySelector("#categories").children;

const getCategories = ([...array]) => {
  let message = `В списке ${array.length} категории` + "\n";
  array.forEach(
    (item, idx) =>
      (message +=
        `Категория ${array[idx].querySelector("h2").textContent}` +
        "\n" +
        `Количество элементов: ${array[idx].querySelectorAll("li").length}` +
        "\n")
  );
  return message;
};

console.log(getCategories(categoryList));

/* 
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

// const categoriesQuantity = document.querySelector('#categories').children;

// console.log(`В списке ${categoriesQuantity.length} категории.`);

// const getCategories = ([...array]) => {

//     array.map(category => {

//         const categoriesName = category.querySelector('ul h2').textContent;

//         const elementsQuantity = category.querySelectorAll('ul li');

//         console.log(`Категория: ${categoriesName}\nКоличество элементов: ${elementsQuantity.length}`);

//     });

// }

// getCategories(categoriesQuantity);
