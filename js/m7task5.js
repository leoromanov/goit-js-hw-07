"use strict";
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  outputRef.textContent =
    event.target.value !== "" ? event.target.value : "незнакомец";
});

/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
