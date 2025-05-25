// Função para mostrar ou esconder a senha
function verSenha(idCampo) {
  const campo = document.getElementById(idCampo);
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}
