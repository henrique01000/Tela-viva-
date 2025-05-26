// Função para alternar a visualização da senha
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = (input.type === 'password') ? 'text' : 'password';
}

// Função para fazer login usando localStorage
function fazerLogin() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;
  
  // Obter os dados armazenados
  const usuario = JSON.parse(localStorage.getItem(email));
  
  if (usuario && usuario.senha === senha) {
    alert("Login realizado com sucesso!");
    localStorage.setItem("usuarioLogado", email);
    window.location.href = "trailers.html";
  } else {
    alert("Credenciais incorretas. Tente novamente.");
  }
  return false; // Evita o envio do form
}

// Função para cadastro (simples utilizando localStorage)
function cadastrarUsuario() {
  const nome = document.getElementById("registerName") ? document.getElementById("registerName").value : "Usuário";
  const email = document.getElementById("registerEmail").value;
  const senha = document.getElementById("registerSenha").value;
  
  // Verifica se o usuário já existe
  if (localStorage.getItem(email)) {
    alert("Este e-mail já está cadastrado.");
  } else {
    // Armazena os dados
    const usuario = { nome, senha };
    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  }
  return false; // Evita o envio do form
}

// Redefinir eventos de submit para formulários de login e cadastro
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.onsubmit = function () {
      return fazerLogin();
    }
  }
  if (registerForm) {
    registerForm.onsubmit = function () {
      return cadastrarUsuario();
    }
  }
});

// Função para realizar logout
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}

// Exibir o nome do usuário na página de trailers
document.addEventListener("DOMContentLoaded", function () {
  const userNameSpan = document.getElementById("userName");
  if (userNameSpan) {
    const email = localStorage.getItem("usuarioLogado");
    if (email) {
      const usuario = JSON.parse(localStorage.getItem(email));
      userNameSpan.textContent = usuario.nome;
    }
  }
});
