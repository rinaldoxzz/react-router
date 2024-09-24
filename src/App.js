import React from "react";
import Pagina1 from "./pagina1";
import Pagina2 from "./pagina2";

//npm i react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Pagina1 />}></Route>
          <Route path="pagina1" element={<Pagina1 />}></Route>
          <Route path="pagina2" element={<Pagina2 />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

//npm i react-router-dom
//BrowserRouter = componente responsavel pelo roteamento
//Routes = Lista de Rotas
//Route = Rota unica

//index element = elemento que vai ser renderizado ao acessar a rota
//acessar paginas = url/numero da pagina

//Path="/" = qualquer valor digitado entra nessa rota