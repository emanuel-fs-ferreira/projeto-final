import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((r) => r.json())
      .then((json) => setProdutos(json.data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <div>
      <header>
        <h1>Projeto Final - Frontend - Emanuel Felipe</h1>
      </header>{" "}
      <hr />
      <nav>
        {/* Navegação: categorias e filtros por tipo */}
        <ul className="filtros">
            <div className="categoria">
                <h3>Categoria: </h3>
                <li><a>Mulher</a></li>
                <li><a>Homem</a></li>
            </div>
            <div className="tipo">
                <h3>Tipo: </h3>
                {produtos.filter((item))}
                {produtos.map((item) => (
                    <li key={item.id}><a>{item.type}</a></li>
                ))}
            </div>
        </ul>
      </nav>{" "}
      <hr />
      <main>
        {/* Exibição dos produtos */}
        <div className="produtos">
          <ul>
            {produtos.map((item) => (
              <ol
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #444",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                />
                <div style={{flex: 1}}>
                <a style={{margin: "0 0 10px 0"}}>{item.title}</a>
                <p style={{margin: 0, fontSize: "1.5em", fontWeight: "bold"}}>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price)}
                </p>
                </div>
              </ol>
            ))}
          </ul>
        </div>
      </main>{" "}
      <hr />
      <footer>
        <ul className="rodape">
          <li>
            <a id="inicio">Inicio</a>
          </li>
          <li>
            <a id="produtos">Produtos</a>
          </li>
          <li>
            <a id="contato">Contato</a>
          </li>
          <li>
            <a id="sobre">Sobre</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Produtos;