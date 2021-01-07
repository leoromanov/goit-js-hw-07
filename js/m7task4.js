"use strict";
{
  /* <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div> */
}

const counterRef = document.querySelector("#counter");
// console.log(counterRef);
const spanRef = document.querySelector("#value");
// console.log(spanRef);
let counterValue = Number(spanRef.textContent);
// console.log(counterValue);
const decrementBtn = document.querySelector("[data-action=decrement]");
// console.log(decrementBtn);
const incrementBtn = document.querySelector("[data-action=increment]");
// console.log(incrementBtn);
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});

/* 
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */
