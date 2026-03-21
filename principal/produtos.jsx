import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((i) => i.json())
      .then((json) => {
        setProdutos(json.data);
        // Extrair categorias únicas da categoria type
        const categ = [...new Set(json.data.map(p => p.type))];
        setCategorias(categ);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <div>
      <header>
        <h1>Projeto Final - Frontend - Emanuel Felipe</h1>
      </header>
      <hr />
      <nav>
        {/* Navegação: categorias e tipos */}
        <ul className="filtros">
          <div className="categoria">
            <h3>Categoria:</h3>
            <li><a>Mulher</a></li>
            <li><a>Homem</a></li>
            <li><a>Kids</a></li>
          </div>
          <div className="tipo">
            <h3>Tipo:</h3>
            {categorias.map((categoria) => (
              <li key={categoria}>
                <a>{categoria}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
      <hr />
      <main>
        {/* Exibição dos produtos */}
        {produtos.length === 0 ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="produtos">
            <ul>
              {produtos.map((item) => (
                <li
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
                      objectFit: "cover"
                    }}
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p style={{ margin: "0 0 10px", fontSize: "1.2em" }}>
                      {item.description.substring(0, 100)}...
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      color: "#4CAF50"
                    }}>
                      {/* Conversão do preço para o Real (BRL) */}
                      {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <hr />
      <footer>
        {/* Rodapé com outras informações */}
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

export default Produtos;

