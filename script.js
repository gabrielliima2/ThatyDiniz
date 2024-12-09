function toggleMode() {
  //dentro do comento eu acesso minha tag html
  const html = document.documentElement
  
  html.classList.toggle("light")
  //o toggle tem a logica semelhante a condiçao/logica a baixo, se tiver o 'light' ele tira e se não tiver ele coloca!
  
  /*
  if (html.classList.contains("light")) {  // se no html as listas de classes, estiver'light'
  html.classList.remove("light")
  } else {
    html.classList.add("light")
}
*/


}

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