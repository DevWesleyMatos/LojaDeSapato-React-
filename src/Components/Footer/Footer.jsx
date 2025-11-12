import "./Footer.css"
import logoFooter from "../../assets/logo-Footer.png"

function Footer() {
    return (
        <>
            <div id="footer-container">
                <div id="footer-column">
                    <div id="footer-links">
                        <img src={logoFooter} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div id="footer-socialmedia">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>

                    </div>
                    <div id="footer-info">
                            <h3>Informações</h3>
                            <p>Sobre Drip Store</p>
                            <p>Segurança</p>
                            <p>Wishlist</p>
                            <p>Blog</p>
                            <p>Trabalhe conosco</p>
                            <p>Meus Pedidos</p>
                    </div>
                    <div id="footer-category">
                            <h3>Categorias</h3>
                            <p>Camistesas</p>
                            <p>Calças</p>
                            <p>Bonés</p>
                            <p>Headphones</p>
                            <p>Tênis</p>
                    </div>
                    <div id="footer-contact">  
                            <h3>Contato</h3>
                            <p>Av. Santos Dumont, 1510-1 andar - Aldeota, Fortaleza - CE, 60150-161 (85)3051-3411 </p>
                    </div>
                </div>
                
                <div id="footer-rodape">
                    <div id="linha"></div>
                    <p>@ 2022 DIgital College</p>
                </div>
            </div>
        </>
    )
}
export default Footer