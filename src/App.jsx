import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AdministrationProduct from "./Pages/AdministrationProduct";

function App() {
  return (
    <BrowserRouter basename="/LojaDeSapato-React-/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AdministrationProduct" element={<AdministrationProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
