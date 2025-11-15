import Header from "../Components/Header/Header"
import Carousel from "../Components/Carousel/Carousel"
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";
import SpecialOffer from "../Components/SpecialOffer/SpecialOffer";
import ProductsList from "../Components/ProductsList/ProductsList"
import NavBar from "../Components/NavBar/NavBar";
import ProductHeight from "../Components/ProductHeight/ProductHeight";
import Cards from "../Components/Cards/Cards";

function Homepage() {
  
  return (
    <>
          <Header />
          <NavBar />
          <Carousel />
          <ProductsList/>
          <Cart/>
          <ProductHeight/>
          <Cards/>
          <SpecialOffer/>
          <Footer/>        
    </>
  )

}

export default Homepage