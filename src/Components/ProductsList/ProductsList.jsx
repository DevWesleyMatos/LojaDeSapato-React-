import Cap from "../../assets/ImgProductsList/Cap.png";
import HeadPhone from "../../assets/ImgProductsList/HeadPhone.png";
import Pants from "../../assets/ImgProductsList/Pants.png";
import Shoes from "../../assets/ImgProductsList/Shoes.png";
import Tshirt from "../../assets/ImgProductsList/Tshirt.png";
import "./ProductsList.css";

function ProductsList() {
  return (
    <section id="productsListSection">
      <div id="tittleProducts">
        <h2>Coleções em destaque</h2>
      </div>

      <div id="productsList">
        <div className="itemList">
          <img src={Cap} alt="Boné" />
          <p>Bonés</p>
        </div>

        <div className="itemList">
          <img src={HeadPhone} alt="Fones" />
          <p>Fones</p>
        </div>

        <div className="itemList">
          <img src={Pants} alt="Calças" />
          <p>Calças</p>
        </div>

        <div className="itemList">
          <img src={Shoes} alt="Tênis" />
          <p>Tênis</p>
        </div>

        <div className="itemList">
          <img src={Tshirt} alt="Camisas" />
          <p>Camisas</p>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
