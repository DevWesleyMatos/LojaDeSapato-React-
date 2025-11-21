import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CreateProduct from "../Components/CreateProduct/CreateProduct";
import TableProducts from "../Components/TableProducts/TableProducts";

function AdministrationProduct() {
  return (
    <>
      <Header />
      <CreateProduct />
      <TableProducts />
      <Footer />
    </>
  );
}

export default AdministrationProduct;
