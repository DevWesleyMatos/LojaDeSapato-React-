import './Card.css'
import ShoeCard from '../../assets/ShoeCard.png'

function Card() {
    return (
        <>
            <section>   
                <div id='card-image'>
                    <img src={ShoeCard} alt="" />
                </div>
                <div id='card-text'>
                    <span id="tenis-span">Tênis</span>
                    <p id='tenis-p'>K-SWISS V8 - Masculino</p>
                    <p className='text-value'><span id='span-line'>$200</span> $100</p>
                </div>
            </section>
        </>
    )
}
export default Card