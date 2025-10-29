import "../Header.css"
import Logo from "../assets/Logo.png"

function Header() {
  return (
    <>
        <section id="header-container">
            <div id="logo-image">
                <img src={Logo} alt="" />
            </div>
            <div id="input-container">
                <input type="text" name="" id="" placeholder="Pesquisar produto ..." />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div id="cart-container">
                <div id="cart-redirections">
                    <a href="">Cadastre-se</a>
                    <button>Entrar</button>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </section>
    </>
  )
}

export default Header

