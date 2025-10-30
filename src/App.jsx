import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productspage from './Pages/Productspage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/products' element={<Productspage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
