import './ProductDetail.css';
import sapato from '../../assets/imgProductDetail/sapato.png';
import sapatoBlue from '../../assets/imgProductDetail/sapato-blue.png';
import sapatoGray from '../../assets/imgProductDetail/sapato-gray.png';
import sapatoPink from '../../assets/imgProductDetail/sapato-pink.png';
import sapatoIndigo from '../../assets/imgProductDetail/sapato-indigo.png';
import sapatoYellow from '../../assets/imgProductDetail/sapato-yellow.png';






function ProductDetail() {

    return (
        <>

            <div id="product-detail-container">
                <div id="product-image">
                    <div className='product-image-primary'>
                        <img src={sapato} alt="Product Image" />
                    </div>
                    <div id='product-image-options'>
                        <div className='product-option-blue'>
                            <img src={sapatoBlue} alt="Product Image Blue" />
                        </div>
                        <div className='product-option-yellow'>
                            <img src={sapatoYellow} alt="Product Image Yellow" />
                        </div>
                        <div className='product-option-gray'>
                            <img src={sapatoGray} alt="Product Image Gray" />
                        </div>
                        <div className='product-option-pink'>
                            <img src={sapatoPink} alt="Product Image Pink" />
                        </div>
                        <div className='product-option-indigo'>
                            <img src={sapatoIndigo} alt="Product Image Indigo" />
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <h1 className="product-title">Tênis Nike 6 next Nature Masculino</h1>
                    <p className='product-reference'> Casual | nike | REF:38416711</p>
                    <div className='product-avaliation'>
                        <span className='product-avaliation-stars'>⭐⭐⭐⭐⭐</span>
                        <span className='product-avaliation-count'>(90 avaliações)</span>
                    </div>
                    <div className='product-price'>
                        <p>R$ 219,99</p>
                    </div>
                    <div className='product-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className='product-size'>
                        <button className='size'>36</button>
                        <button className='size'>37</button>
                        <button className='size'>38</button>
                        <button className='size'>39</button>
                    </div>
                    <div className='product-color'>
                        <button className='color-blue'></button>                     
                        <button className='color-yellow'></button>
                        <button className='color-pink'></button>
                        <button className='color-gray'></button>
                        <button className='color-indigo'></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;