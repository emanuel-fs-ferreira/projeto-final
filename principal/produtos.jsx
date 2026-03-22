import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [genero, setGenero] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((i) => i.json())
      .then((json) => {
        setProdutos(json.data);
        // Extrair categorias únicas da categoria type
        const categ = [...new Set(json.data.map((p) => p.type))];
        setCategorias(categ);
        // Extrair categorias únicas da categoria genero
        const gen = [...new Set(json.data.map((p) => p.category))];
        setGenero(gen);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  function armazenarEscolha(product) {
    navigate("/produto-escolhido", { state: { product } });
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{
        width: '250px',
        borderRight: '1px solid #dee2e6',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        overflowY: 'auto',
        zIndex: 1000,
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 15px', color: 'white', fontSize: '1.1em' }}>Filtros</h3>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 10px', color: 'whitesmoke', fontSize: '0.95em' }}>Gênero:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {genero.map((generos, index) => (
                <li key={index}>
                  <a style={{
                    display: 'block',
                    padding: '8px 12px',
                    color: '#007bff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9em',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#e9ecef'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                  >{generos}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 10px', color: 'whitesmoke', fontSize: '0.95em' }}>Tipo:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <a style={{
                    display: 'block',
                    padding: '8px 12px',
                    color: '#007bff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9em',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#e9ecef'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                  >{categoria}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginLeft: '250px', flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header style={{ 
          background: '#212529', 
          padding: '15px 20px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 999
        }}>
          <h1 style={{ margin: 0, fontSize: '1.8em', color: 'white' }}>Produtos</h1>
        </header>
        <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {produtos.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#6c757d', fontSize: '1.1em' }}>Carregando produtos...</p>
          ) : (
            <div className="produtos">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {produtos.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "25px",
                      paddingBottom: "20px",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "220px",
                        height: "220px",
                        marginRight: "25px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                      }}
                    />
                    <div style={{ flex: 1, position: 'relative' }}>
                      <a onClick={() => armazenarEscolha(item)} style={{ 
                        textDecoration: 'none', 
                        cursor: 'pointer',
                        display: 'block',
                        position: 'relative',
                        paddingTop: '10px'
                      }}>
                        <h3 style={{ 
                          margin: '0 0 12px', 
                          fontSize: '1.4em', 
                          color: "white",
                          lineHeight: '1.3'
                        }}>{item.title}</h3>
                        {item.isNew === true ? (
                          <p style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            background: 'red',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.8em',
                            fontWeight: 'bold',
                            margin: 0,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            zIndex: 10
                          }}>Novo!</p>
                        ) : null}
                        <p style={{ 
                          margin: '0 0 15px', 
                          fontSize: '1.1em', 
                          color: '#6c757d',
                          lineHeight: '1.5'
                        }}>
                          {item.description.substring(0, 120)}...
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "1.8em",
                            fontWeight: "bold",
                            color: "#28a745",
                          }}
                        >
                          {new Intl.NumberFormat("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          }).format(item.price)}
                        </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
        <footer style={{ 
          padding: '20px', 
          background: '#212529', 
          borderTop: '1px solid #dee2e6',
          textAlign: 'center'
        }} class="rodape">
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            display: 'flex', 
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <li><a style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Início</a></li>
            <li><a onClick={() => navigate('/contato')} style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Contato</a></li>
            <li><a onClick={() => navigate('/sobre')} style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Sobre</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Produtos;
