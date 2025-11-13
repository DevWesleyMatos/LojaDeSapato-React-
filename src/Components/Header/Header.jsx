import "./Header.css";
import Logo from "../../assets/Logo.png"
import vector from "../../assets/Vector.png"
function Header() {
  return (
    <>
      <section id="header-container">
        <div id="logo-image">
          <img src={vector} alt="" />
          <img src={Logo} alt="" />
        </div>

        <div id="input-container">
          <input type="text" placeholder="Pesquisar produtos..."/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div id="cart-container">
          <div id="cart-redirection">
            <a href="">Cadastre-se</a>
            <button>Entrar</button>
          </div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </section>
    </>
  );
}

export default Header;
