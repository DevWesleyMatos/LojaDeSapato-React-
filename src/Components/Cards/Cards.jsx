import { useEffect, useState } from "react";
import "./Cards.css";
import Tenis from "../../assets/ImgCard/tenisOferta.png";

function Cards() {
    const [sapatos, setSapatos] = useState([]);

    useEffect(() => {
        fetch("https://loja-de-sapato-back-java.onrender.com/sapatos")
            .then((res) => res.json())
            .then((data) => setSapatos(data))
            .catch((err) => console.log("Erro ao buscar sapatos:", err));
    }, []);

    return (
        <section id="section-cards">
            {sapatos.map((item) => (
                <div id="div-cards" key={item.id}>
                    <div className="card-container">
                        <div className="card-tittle">
                            <h3>30% OFF</h3>
                        </div>

                        <div className="card-image">
                            <img src={Tenis} alt={item.nome} />
                        </div>
                    </div>

                    <div className="card-info">
                        <p className="info-category">{item.nome}</p>
                        <p className="info-model">{item.modelo}</p>

                        <div className="card-legend">
                            <p className="product-value">
                                R$ {(item.preco * 1.30).toFixed(2)}
                            </p>
                            <p><strong>R$ {item.preco}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Cards;
