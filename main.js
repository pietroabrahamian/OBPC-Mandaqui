window.addEventListener("scroll", onScroll);
onScroll();

// Função responsável por gerenciar as funções do scroll na pagina
function onScroll() {
  showNavOnScroll();
  menuAtivado(agenda);
  menuAtivado(sobre);
  menuAtivado(resgates);
  menuAtivado(ajudar);
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
  const imagemLogo = document.querySelector("#imglogo");
  if (scrollY > 50) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// Menu responsivel para telas menores
// function abrirMenu() {
//   document.body.classList.add("menu-expanded");
// }

// function fecharMenu() {
//   document.body.classList.remove("menu-expanded");
// }