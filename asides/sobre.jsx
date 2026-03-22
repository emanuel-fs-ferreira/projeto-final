import React from "react";
import { useNavigate } from "react-router-dom";

function Sobre() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Sobre</h1>
      </header>
      <hr />
      <main>
        <h2>Emanuel Felipe</h2>
        <p>
          Olá, sou o Emanuel Felipe. Tenho 18 anos e moro em Itabira - MG; gosto
          de esportes, principalmente basquete, vôlei e xadrez, gosto de
          tecnologia em geral e também de me desafiar sempre que posso,
        </p>
      </main>
      <hr />
      <footer>
        <ul class="rodape">
          <li>
            <a id="inicio" onClick={() => navigate("/")}>
              Inicio
            </a>
          </li>
          <li>
            <a id="produtos" onClick={() => navigate("/")}>
              Produtos
            </a>
          </li>
          <li>
            <a id="contato" onClick={() => navigate("/contato")}>
              Contato
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
