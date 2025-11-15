import "./Cards.css"
import Tenis from "../../Assets/ImgCard/tenisOferta.png"

function CardItem() {
    return (
        <div id="div-cards">
            <div className="card-container">
                <div className="card-tittle">
                    <h3>30% OFF</h3>  
                </div>
                <div className="card-image">
                    <img src={Tenis} alt="" />
                </div>
            </div>

            <div className="card-info">
                <p className="info-category">Tenis</p>
                <p className="info-model">K-Swiss V8 - Masculino</p>
                <div className="card-legend">
                    <p className="product-value">R$ 299,99</p>
                    <p><strong> R$ 99,99</strong></p>
                </div>
            </div>
        </div>
    );
}

function Cards() {
    return (
        <section id="section-cards">
            {[...Array(8)].map((_, index) => (
                <CardItem key={index} />
            ))}
        </section>
    );
}

export default Cards;
