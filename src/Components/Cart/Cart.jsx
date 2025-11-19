import camisa from "../../assets/ImgCart/camisa.png"
import fone from "../../assets/ImgCart/fone.png"
import tenis from "../../assets/ImgCart/tenis.png"
import "./Cart.css"

function Cart() {
    return (
        <>
            <section id="Cart">
                <div id="tittle">
                    <p>Coleção em destaque</p>
                </div>

                <div id="container">
                    
                    <div className="card">
                        <div className="cardText">
                            <p>30% OFF</p>
                            <h1>Novo drop Supreme</h1>
                            <button>Comprar</button>
                        </div>
                        <img src={camisa} alt="" />
                        
                    </div>
                    
                    <div className="card"> 
                        <div className="cardText">
                            <p>30% OFF</p>
                            <h1>Coleção Adidas</h1>
                            <button>Comprar</button>
                        </div>
                        <img src={tenis} alt="" />
                        
                    </div>
                    <div className="card">
                        <div className="cardText">
                            <p>30% OFF</p>
                            <h1>Novo Beats Bass</h1>
                            <button>Comprar</button>
                        </div>
                        <img src={fone} alt="" />
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart