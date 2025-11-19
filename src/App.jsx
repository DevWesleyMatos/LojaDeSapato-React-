import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productspage from './Pages/Productspage';
import ProductsDetailspage from './Pages/ProductDetailsPage';
import CartPage from './Pages/CartPage';
import CreateAccountePage from './Pages/CreateAccountePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/products' element={<Productspage/>} />
          <Route path='/productsDetails' element={<ProductsDetailspage/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/createAccounte' element={<CreateAccountePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
