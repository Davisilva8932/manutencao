


const menu = document.querySelector(".menu");
const linck = document.querySelector(".lincks");

menu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    linck.classList.toggle("ativo");
})