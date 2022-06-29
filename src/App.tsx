import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./contexto";
import { FormBasico, FormCompleto, Home, ConsumindoApis } from "./telas";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  return (
    <MyContext.Provider value={{ nomeUsuario, setNomeUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-basico" element={<FormBasico />} />
          <Route path="/form-completo" element={<FormCompleto />} />
          <Route path="/consumindo-apis" element={<ConsumindoApis />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
