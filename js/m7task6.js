"use strict";
const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.dataset.length);
const dataValue = Number(inputRef.dataset.length);
// console.log(dataValue);
inputRef.addEventListener("change", (event) => {
  if (event.target.value.length === dataValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
// const inputRef = document.querySelector("#validation-input");
// // console.log(inputRef);
// inputRef.addEventListener("change", (event) => {
//   if (inputRef.textContent.length === inputRef.dataset.length) {
//     inputRef.classList.add("valid");
//   } else {
//     inputRef.classList.add("invalid");
//   }
// });

/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
*/
