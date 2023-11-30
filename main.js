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
  if (scrollY > 750) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}