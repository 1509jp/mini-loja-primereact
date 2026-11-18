
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList({ produtosAdicionados = [] }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProdutos(resposta.data);
      } catch (error) {
        setErro("Não foi possível carregar os produtos.");
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, []);

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      {erro && <p>{erro}</p>}

      <div className="grid">
        {[...produtosAdicionados, ...produtos].map((produto) => (
          <div
            className="col-12 md:col-6 lg:col-4 xl:col-3"
            key={produto.id}
          >
            <ProductCard produto={produto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
