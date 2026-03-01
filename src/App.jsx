import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productspage from './Pages/Productspage';
import ProductsDetailspage from './Pages/ProductDetailsPage';
import CartPage from './Pages/CartPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import ProductList from './Pages/ProductListPage';
import Login from './Pages/Login'
import MyInformationPages from './Pages/MyInformationPages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Productspage />} />
          <Route path='/productsDetails' element={<ProductsDetailspage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/createAccount' element={<CreateAccountPage />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myInformation' element={<MyInformationPages />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
