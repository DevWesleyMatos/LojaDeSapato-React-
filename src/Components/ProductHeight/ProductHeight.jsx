import Card from "../Card/Card";
import "./ProductHeight.css";

function ProductHeight() {
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
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </section>
    );
}
export default ProductHeight;