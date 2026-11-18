
import React, { useState } from "react";
import ProductList from "./ProductList";

import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  const [produtosAdicionados, setProdutosAdicionados] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  function adicionarProduto(evento) {
    evento.preventDefault();

    const novoProduto = {
      id: `novo-${Date.now()}`,
      title: titulo,
      price: Number(preco),
      description: descricao,
      image: imagem || "https://placehold.co/300x300?text=Produto"
    };

    setProdutosAdicionados((anteriores) => [
      novoProduto,
      ...anteriores
    ]);

    setTitulo("");
    setPreco("");
    setDescricao("");
    setImagem("");
  }

  return (
    <div className="surface-ground min-h-screen">
      <header className="bg-purple-600 text-white p-4 text-center">
        <h1>Mini Loja Virtual</h1>
        <p>Produtos disponíveis na nossa loja</p>
      </header>

      <main className="p-4">
        <div className="surface-card p-4 border-round shadow-2 mb-5">
          <h2>Adicionar Novo Produto</h2>

          <form onSubmit={adicionarProduto} className="grid">
            <div className="col-12 md:col-6">
              <label htmlFor="titulo" className="block mb-2">
                Nome do produto
              </label>
              <input
                id="titulo"
                className="p-inputtext p-component w-full"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="col-12 md:col-6">
              <label htmlFor="preco" className="block mb-2">
                Preço
              </label>
              <input
                id="preco"
                type="number"
                min="0.01"
                step="0.01"
                className="p-inputtext p-component w-full"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="descricao" className="block mb-2">
                Descrição
              </label>
              <textarea
                id="descricao"
                className="p-inputtextarea p-inputtext p-component w-full"
                rows="3"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="imagem" className="block mb-2">
                URL da imagem (opcional)
              </label>
              <input
                id="imagem"
                type="url"
                className="p-inputtext p-component w-full"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="p-button p-component"
              >
                <span className="pi pi-plus mr-2"></span>
                Adicionar Produto
              </button>
            </div>
          </form>
        </div>

        <h2 className="mb-4">Nossos Produtos</h2>

        <ProductList produtosAdicionados={produtosAdicionados} />
      </main>
    </div>
  );
}

export default App;
