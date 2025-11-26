import Card from "../Card/Card";
import "./ProductHeight.css";
import { useEffect,useState } from "react";

function ProductHeight() {
    const[produtos,setProdutos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://691e5f8abb52a1db22bdb573.mockapi.io/api/products');
            const data = await response.json()
            setProdutos(data)
        }
        fetchData()
    }, []);
    return (
        <section>
            <div id="productHeightHeader">
                <div id="productHeight">
                    <p>Produtos em Alta</p>
                </div>
                <div id="seeMoreHeight">
                    <p>Ver todos <i className="fa-solid fa-arrow-right" style={{ color: '#c92071' }}></i></p>
                </div>
            </div>
            <div id="div-cards">
                {
                    produtos.map((produto) => (
                        <Card
                            key={produto.id}
                            category={produto.category}
                            name ={produto.name}
                            value = {produto.value}
                            discountedValue = {produto.discountedValue}
                        />
                    ))
                }

            </div>

        </section>
    );
}
export default ProductHeight;