import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProdutoEscolhido() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div>
        <header>
          <h1>Projeto Final - Frontend - Emanuel Felipe</h1>
        </header>
        <hr />
        <main>
          <p>Produto não encontrado. <button onClick={() => navigate('/')}>Voltar à lista</button></p>
        </main>
        <hr />
        <footer>
          <ul className="rodape">
            <li><a id="inicio">Inicio</a></li>
            <li><a id="produtos">Produtos</a></li>
            <li><a id="contato">Contato</a></li>
            <li><a id="sobre">Sobre</a></li>
          </ul>
        </footer>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>Detalhes do Produto</h1>
        <button onClick={() => navigate('/')}>← Voltar aos Produtos</button>
      </header>
      <hr />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px"
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
          <div>
            <h2>{product.title}</h2>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
              {product.description}
            </p>
            <p style={{
              margin: "20px 0",
              fontSize: "2em",
              fontWeight: "bold",
              color: "#4CAF50"
            }}>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Tipo:</strong> {product.type}</p>
            <p><strong>Tamannhos:</strong> {product.size.join(", ")}</p>
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <ul class="rodape">
          <li><a id="inicio" onClick={() => navigate('/')}>Inicio</a></li>
          <li><a id="produtos" onClick={() => navigate('/')}>Produtos</a></li>
          <li><a id="contato" onClick={() => navigate('/contato')}>Contato</a></li>
          <li><a id="sobre">Sobre</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default ProdutoEscolhido;
