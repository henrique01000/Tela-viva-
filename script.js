// Mostrar lista de favoritos e continuar assistindo na tela
window.onload = function () {
  const fav = JSON.parse(localStorage.getItem('favoritos')) || [];
  const lista = document.getElementById("listaFavoritos");
  if (lista && fav.length > 0) {
    fav.forEach(nome => {
      const li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);
    });
  }

  const assistindo = localStorage.getItem('assistindo');
  const filmeAssistindo = document.getElementById("filmeAssistindo");
  if (assistindo && filmeAssistindo) {
    filmeAssistindo.textContent = assistindo;
  }
};
