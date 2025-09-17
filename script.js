function verificarCampos() {
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const botao = document.getElementById('loginBtn');
  
    botao.disabled = !(usuario && senha);
  }
  
  function logar(event) {
    event.preventDefault();
    window.location.href = "pagina.html";
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const form = document.getElementById('loginForm');
  
    usuarioInput.addEventListener('input', verificarCampos);
    senhaInput.addEventListener('input', verificarCampos);
  
    form.addEventListener('submit', logar);  // <-- aqui, adiciona o listener do submit no JS
  });    