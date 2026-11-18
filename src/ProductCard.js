
import React from "react";
import { Card } from "primereact/card";

function ProductCard({ produto }) {
  const imagem = (
    <img
      src={produto.image}
      alt={produto.title}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "contain",
        padding: "15px"
      }}
    />
  );

  return (
    <Card
      title={produto.title}
      subTitle={`R$ ${Number(produto.price).toFixed(2)}`}
      header={imagem}
      className="h-full"
    >
      <p>{produto.description}</p>
    </Card>
  );
}

export default ProductCard;
