import "./RelatedProducts.css";
import Tenis from "../../assets/tenis.png";

function RelatedProducts() {
  return (
    <>
      <section >
        <div id="descricao">
          <h5 id="H1">Produtos Relacionados</h5>
          <p id="arrow">
            ver todos <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <section id="cartoes">
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
