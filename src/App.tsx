import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./contexto";
import {
  FormBasico,
  FormCompleto,
  Home,
  ConsumindoApis,
  SobrePaipers,
  Login,
} from "./telas";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState<string>("");

  useEffect(() => {
    if (!nomeUsuario) {
      let nomeDoLocalStorage = localStorage.getItem("nomeUsuario");
      if (nomeDoLocalStorage) {
        setNomeUsuario(nomeDoLocalStorage);
      }
    } else {
      localStorage.setItem("nomeUsuario", nomeUsuario);
    }
  }, [nomeUsuario]);
  return (
    <MyContext.Provider value={{ nomeUsuario, setNomeUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form-basico" element={<FormBasico />} />
          <Route path="/form-completo" element={<FormCompleto />} />
          <Route path="/consumindo-apis" element={<ConsumindoApis />} />
          <Route path="/sobre-paipers" element={<SobrePaipers />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
