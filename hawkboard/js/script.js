// Array para armazenar os produtos no carrinho
  const carrinho = [];

 // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
  }

// Função para remover um produto do carrinho
  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }

// Função para atualizar a exibição do carrinho
  function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = ''; // Limpa o conteúdo do carrinho

    carrinho.forEach((produto, index) => {
      const produtoDiv = document.createElement('div');
      produtoDiv.className = 'carrinho-item';
      produtoDiv.innerHTML = `
        <span>${produto.nome}</span>
        <button onclick="removerDoCarrinho(${index})">Tirar do Carrinho</button>
      `;
      carrinhoDiv.appendChild(produtoDiv);
    });
   }

 // Função para mostrar a tela do carrinho
 function mostrarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = 'block'; // Exibe a tela do carrinho
    atualizarCarrinho();
  }
