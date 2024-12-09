const mainMenu = document.querySelector(".mainMenu")
const tabelaMenu = document.querySelector(".tabelaMenu")

const tabelaPreco = document.querySelector("#tabelaPreco")
const backMainMenu = document.querySelector("#backMainMenu")


tabelaPreco.addEventListener("click", () => {
  mainMenu.classList.add("hide")
  tabelaMenu.classList.remove("hide")
})

backMainMenu.addEventListener("click", () => {
  mainMenu.classList.remove("hide")
  tabelaMenu.classList.add("hide")
})