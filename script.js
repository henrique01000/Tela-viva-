function mostrarSenha(id) {
  const campo = document.getElementById(id);
  campo.type = campo.type === 'password' ? 'text' : 'password';
}

function fazerLogin() {
  alert("Login realizado com sucesso!");
  window.location.href = "index.html";
  return false;
}

function cadastrarUsuario() {
  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
  return false;
}
