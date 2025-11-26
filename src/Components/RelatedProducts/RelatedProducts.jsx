import "./RelatedProducts.css";
import Tenis from "../../assets/ShoeCard.png";

function RelatedProducts() {
  return (
    <>
      <section className="related-products">
        <div className="descricao">
          <h5 className="h1">Produtos Relacionados</h5>
          <p className="arrow">
            ver todos <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <section className="cartoes">
          <div className="cards">
            <div className="card">
              {" "}
              <div className="image">
                {" "}
                <img src={Tenis} alt="" />
              </div>
              <p className="sneker">Tenis</p>
              <p className="V8">K-Swiss V8 - Masculino</p>
              <div className="prices">
                <p className="price">$200</p>
                <p>$100</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              {" "}
              <div className="image">
                {" "}
                <img src={Tenis} alt="" />
              </div>
              <p className="sneker">Tenis</p>
              <p className="V8">K-Swiss V8 - Masculino</p>
              <div className="prices">
                <p className="price">$200</p>
                <p>$100</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              {" "}
              <div className="image">
                {" "}
                <img src={Tenis} alt="" />
              </div>
              <p className="sneker">Tenis</p>
              <p className="V8">K-Swiss V8 - Masculino</p>
              <div className="prices">
                <p className="price">$200</p>
                <p>$100</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              {" "}
              <div className="image">
                {" "}
                <img src={Tenis} alt="" />
              </div>
              <p className="sneker">Tenis</p>
              <p className="V8">K-Swiss V8 - Masculino</p>
              <div className="prices">
                <p className="price">$200</p>
                <p>$100</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default RelatedProducts;
