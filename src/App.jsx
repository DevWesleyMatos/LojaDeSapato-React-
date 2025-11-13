import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import ProductsPages from "./Pages/ProductsPages";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Products" element={<ProductsPages/>} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App