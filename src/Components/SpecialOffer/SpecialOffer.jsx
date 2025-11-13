import "./SpecialOffer.css"
import tenisBrancoAmarelo from "../../assets/ImgSpecialOffer/tenisBrancoAmarelo.png"


function SpecialOffer() {
    return (
        <>
            <div id="specialOfferProduct">
                <div id="imgTenisBrancoAmarelo">
                    <img src={tenisBrancoAmarelo} alt="" />
                </div>
                <div id="textSpecialOffer">
                    <h6>Oferta especial</h6>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus omnis odit perferendis saepe, ab rem alias, autem obcaecati nihil provident nostrum dolorem distinctio. Hic.</p>
                    <button>Ver Oferta</button>
                </div> 
            </div>
        </>
    )

}






export default SpecialOffer