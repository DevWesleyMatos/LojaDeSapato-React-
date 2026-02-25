import { useState } from "react";
import "./ProductDetail.css";

import sapato from "../../assets/imgProductDetail/sapato.png";
import sapatoBlue from "../../assets/imgProductDetail/sapato-blue.png";
import sapatoGray from "../../assets/imgProductDetail/sapato-gray.png";
import sapatoPink from "../../assets/imgProductDetail/sapato-pink.png";
import sapatoIndigo from "../../assets/imgProductDetail/sapato-indigo.png";
import sapatoYellow from "../../assets/imgProductDetail/sapato-yellow.png";

function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(null);

  const images = [
    { image: sapatoBlue, color: "#2b6cb0" },
    { image: sapatoYellow, color: "#ecc94b" },
    { image: sapatoGray, color: "#a0aec0" },
    { image: sapatoPink, color: "#f687b3" },
    { image: sapatoIndigo, color: "#5a67d8" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(images[3]);

  const sizes = [36, 37, 38, 39, 40, 41];

  return (
    <div id="product-detail-container">

      <div id="product-image">

        <div
          className="product-image-primary"
          style={{ backgroundColor: selectedProduct.color }}
        >
          <img src={selectedProduct.image} alt="Produto" />
        </div>

        <div id="product-image-options">
          {images.map((item, index) => (
            <div
              key={index}
              className={`color-box ${selectedProduct.image === item.image
                ? "active-color"
                : ""
                }`}
              style={{ backgroundColor: item.color }}
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.image} alt="Opção" />
            </div>
          ))}
        </div>

      </div>

      <div className="product-info">

        <h1 className="product-title">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h1>

        <p className="product-reference">
          Casual | Nike | REF:38416711
        </p>

        <div className="product-avaliation">
          <span className="stars">⭐⭐⭐⭐⭐</span>

          <div className="rating-box">
            4.7
          </div>

          <span className="reviews">(90 avaliações)</span>
        </div>

        <div className="product-price">
          <span className="current-price">R$ 219,99</span>
          <span className="old-price">R$ 299,99</span>
        </div>

        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className="product-color">
          <h3>Cor: {selectedProduct.name}</h3>

          <div className="color-palette">
            {images.map((item, index) => (
              <button
                key={index}
                className={`color-circle ${selectedProduct.image === item.image ? "active-circle" : ""
                  }`}
                style={{ backgroundColor: item.color }}
                onClick={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>

        <div className="product-size">
          <h3>Escolha o tamanho</h3>

          <div className="size-container">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size ${selectedSize === size ? "active-size" : ""
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart">
          Comprar
        </button>

      </div>

    </div>
  );
}

export default ProductDetail;