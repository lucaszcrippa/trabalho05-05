document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const produtoInput = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const lista = document.getElementById('lista-itens');
    const limparBtn = document.getElementById('limpar');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const produto = produtoInput.value.trim();
      const quantidade = quantidadeInput.value.trim();
  
      if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, preencha os campos corretamente.');
        return;
      }
  
      const li = document.createElement('li');
      li.textContent = `${quantidade}x ${produto}`;
      li.addEventListener('click', () => {
        li.classList.toggle('comprado');
      });
  
      lista.appendChild(li);
  
      produtoInput.value = '';
      quantidadeInput.value = '';
    });
  
    limparBtn.addEventListener('click', () => {
      lista.innerHTML = '';
    });
  });