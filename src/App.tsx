import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormBasico, FormCompleto, Home, ConsumindoApis } from "./telas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-basico" element={<FormBasico />} />
        <Route path="/form-completo" element={<FormCompleto />} />
        <Route path="/consumindo-apis" element={<ConsumindoApis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
