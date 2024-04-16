// ----------------------------- Accordion en about.html

let accordion1 = document.querySelector(".accordion1");
let accordion2 = document.querySelector(".accordion2");


accordion1.addEventListener("click", openAccordion1);
accordion2.addEventListener("click", openAccordion2);

function openAccordion1() {

    accordion1.classList.toggle("accordion__open");
}

function openAccordion2() {

    accordion2.classList.toggle("accordion__open");
}