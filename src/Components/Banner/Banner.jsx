import "./Banner.css"
import shoeImage from "../../assets/shoeImage.png"

function Banner() {
  return (
    <>
      <section className="cart-section">

        <div className="div-cart">

          <div className="my-cart">
            <span>MEU CARRINHO</span>
            <span>QUANTIDADE</span>
            <span>UNITÁRIO</span>
            <span>TOTAL</span>
          </div>

          <div className="products">
            <img src={shoeImage} alt="Tênis Nike" />

            <div className="product-description">
              <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
              <p>Cor: Vermelho / Branco</p>
              <p>Tamanho: 42</p>
            </div>

            <div className="product-counter">
              <div id="div-quantity">
                <button id="btn-less">−</button>
                <span id="value">1</span>
                <button id="btn-more">+</button>
              </div>
              <a href="#" id="remove-item">Remover Ítem</a>
            </div>

            <div className="price">
              <p className="old-price">
                <span>R$249,00 </span>
                <span>R$249,00</span>
              </p>
              <p className="current-price">
                <span>R$219,00</span>
                <span>R$219,00</span>
              </p>
            </div>

          </div>

          <div className="transport-discount">
            <div className="discount-section">
              <h6>Cupom de desconto</h6>
              <input type="text" placeholder="Insira seu código" />
              <button>OK</button>
            </div>

            <div className="shipping-section">
              <h6>Calcular frete</h6>
              <input type="text" placeholder="Insira seu CEP" />
              <button>OK</button>
            </div>
          </div>

        </div>

        <div className="div-summary">
          <p>RESUMO</p>

          <p className="subtotal">
            <span id="font">Subtotal:</span><span>R$249,00</span>
          </p>

          <p className="subtotal">
            <span id="font">Frete:</span><span>R$0,00</span>
          </p>

          <p className="subtotal">
            <span id="font">Desconto:</span><span>R$30,00</span>
          </p>

          <p className="subtotal">
            <span id="total">Total:</span><span id="total-value">R$219,00</span>
          </p>

          <p className="part">
            ou 10x de 24,90 sem juros
          </p>

          <button id="orange-button">Continuar</button>
        </div>


      </section>

    </>
  );
}

export default Banner
