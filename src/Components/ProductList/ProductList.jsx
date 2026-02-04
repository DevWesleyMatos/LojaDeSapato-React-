import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://691e5f8abb52a1db22bdb573.mockapi.io/api/products") 
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);



  return (
    <div className="product-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Filtrar por</h3>

        <div className="filter-group">
          <h4>Marca</h4>
          <label><input type="checkbox" /> Adidas</label>
          <label><input type="checkbox" /> Nike</label>
          <label><input type="checkbox" /> Puma</label>
          <label><input type="checkbox" /> K-Swiss</label>
        </div>

        <div className="filter-group">
          <h4>Gênero</h4>
          <label><input type="checkbox" /> Masculino</label>
          <label><input type="checkbox" /> Feminino</label>
          <label><input type="checkbox" /> Unissex</label>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="content">
        <div className="content-header">
          <p>Resultados para "Tênis"</p>

          <select >
            <option value="relevant">Ordenar por: mais relevantes</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </div>

        <div className="cards-grid">
          {products.map((product) => (
            <Card
              key={product.id}
              category={product.category}
              name={product.name}
              value={product.value}
              discountedValue={product.discountedValue}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductList;
