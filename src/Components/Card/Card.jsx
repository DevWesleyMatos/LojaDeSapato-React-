import './Card.css'
import ShoeCard from '../../assets/ShoeCard.png'

function Card(props) {
    return (
        <>
            <section id='card-section'>   
                <div id='card-box'>
                <div id='card-offer'>
                    <p>30%OFF</p>
                </div>
                <div id='card-image'>
                    <img src={ShoeCard} alt="" />
                </div>
                </div>

                <div id='card-text'>
                    <span id="tenis-span">{props.category}</span>
                    <p id='tenis-p'>{props.name}</p>
                    <p className='text-value'><span id='span-line'>R${props.value}</span> R${props.discountedValue}</p>
                </div>
            </section>
        </>
    )
}
export default Card